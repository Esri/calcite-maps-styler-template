(function() {
	'use strict';

	var userInfo = null,
		signedInCallback = null,
		cookie = null,
		accountBaseUrl = null,
		arcGISUrl = 'https://www.arcgis.com',
		jquery = $,
		app = '',
		layout = '',
		fromBuildApp = false,

	/**
	@summary Retrieves the cookie of a user if exists, otherwise returns null. If the cookie is there, signifies that the user is signed in to AGOL.
	*/
	getUserCookie = function() {
		// read the cookie, if there is one.
		var cookie = fetchCookie('esri_auth');

		if(!cookie) {
			return null;
		}

		cookie = JSON.parse(cookie.replace('"ssl":undefined', '"ssl":""'));

		return cookie || null;
	},


	/**
	@summary Gets a cookie based on its name. Borrowed from buildapp.js in this project.
	*/
	fetchCookie = function(cookieName) {
		var cookieValue = document.cookie,
			cookieStart = cookieValue.indexOf(" " + cookieName + "=");

		if (cookieStart == -1) {
			cookieStart = cookieValue.indexOf(cookieName + "=");
		}

		if (cookieStart == -1) {
			cookieValue = null;
		}
		else {
			cookieStart = cookieValue.indexOf("=", cookieStart) + 1;
			var cookieEnd = cookieValue.indexOf(";", cookieStart);
			if (cookieEnd == -1) {
				cookieEnd = cookieValue.length;
			}
			cookieValue = unescape(cookieValue.substring(cookieStart, cookieEnd));
		}
		return cookieValue;
	},


	/**
	@summary Checks if the user is signed in.
	*/
	checkIfSignedIn = function() {
		var cookie = getUserCookie(),
			isSignedIn = false;

		if(cookie) {
			isSignedIn = true;
		}
		return isSignedIn;
	},


	updateAgolLinkOnClick = function(baseUrl) {
        var agolSites = {"www.arcgis.com": "", "arcgis.com":"", "devext.arcgis.com":"","qaext.arcgis.com":""};
        $("a[href]").click (function (i) {
            var $ele = $(this);
            if ($ele[0].hostname in agolSites){

                if ($ele.attr('linkType') && $ele.attr('linkType') == "fix"){
                    return false;
                } else{
                    $ele[0].hostname = baseUrl;
                }
            }
        });
    },


	/**
	@summary Shows the logged-in dropdown (shows the username on the nav bar), and hides the "sign in" button.
	*/
	showSignedInHeader = function(cookie) {
		var url = '';
		// check if the user information is already there, or if we need to make a call to get it.
		if(userInfo) {
			showLoggedInDropdown(userInfo.firstName || userInfo.username);
		}
		else {
			// make a call to get the information we need -- the user's first name
			url = arcGISUrl + '/sharing/rest/portals/self';
			$.ajax(url, {
				success: function(data, status, xhr) {
					// if it wasn't actually a success
					if(JSON.parse(xhr.responseText).error) {
						showLoggedInDropdown(cookie.email);
					}
					else {
						userInfo = data.user;
						showLoggedInDropdown(userInfo.firstName || userInfo.username);
					}
				},
				error: function() {
					showLoggedInDropdown(cookie.email);
				},
				dataType: 'json',
				data: {
					culture: cookie.culture || 'en-us',
					f: 'json',
					token: cookie.token
				}
			});
		}
	},


	unProtocolUrl = function(url) {
		var outUrl = url.replace((/(.*?):\/\//), '');

		return outUrl;
	},


	/**
	@summary Shows the logged-in dropdown and hides the logged-out header UI.
	*/
	showLoggedInDropdown = function(name) {
		$('#header-user-name').html(name);
		$('#logged-in-navigation').css('display', 'block');
		$('#logged-out-navigation').css('display', 'none');
	},


	/**
	@summary Shows the "sign in" button and attaches its events.
	*/
	showSignInButton = function() {
		$('#logged-out-navigation').css('display', 'block');
		addSignInButtonEvent();
	},


	addSignInButtonEvent = function() {
		$('#login-link').css('pointer-events', 'auto');
		$('#login-link').css('cursor', 'pointer');
		$('#login-link').on('click', function() {
			showSignInDialog(null, false);
		});
	},


	/**
	@summary Updates the header UI depending on if the user is signed in or not. If signed in, shows their name and the dropdown;
			if signed out, shows the "sign in" button.
	*/
	renderHeader = function() {
		var cookie = null,
			isSignedIn = checkIfSignedIn(),
			buildCookie = fetchCookie('buildApp');
		// what you really want is the cookie. IF there, you want it so you ahve the user name. If not there, won't matter.
		if(isSignedIn) {
			if(buildCookie) {
				if(window.location.href.match(/buildApp/)) {
					performBuildAppCallback(buildCookie);
				}
				else {
					destroyCookie();
				}
			}

			cookie = getUserCookie();
			showSignedInHeader(cookie);

			if(cookie.portalApp) {
				accountBaseUrl = window.location.hostname;
			}
			else if(cookie.urlKey) {
				accountBaseUrl = (cookie.urlKey + '.' + cookie.customBaseUrl).toLowerCase();
			}
			else {
				accountBaseUrl = cookie.customBaseUrl.toLowerCase();
			}

			updateAgolLinkOnClick(accountBaseUrl);

			$('#sign-out-link').attr('href', 'https://' + accountBaseUrl + '/sharing/rest/oauth2/signout?redirect_uri=' + window.location.href);
		}
		else {
			showSignInButton();
		}
	},


	showBuildSignInDialog = function(callback, inApp, inLayout) {
		fromBuildApp = true;
		app = inApp;
		layout = inLayout;

		var cookieObj = {
			app: app,
			layout: layout
		};

		document.cookie = 'buildApp=' + encodeURIComponent(JSON.stringify(cookieObj));
		showSignInDialog(callback, false);
	},


	performBuildAppCallback = function(cookie) {

		var cookieObj = JSON.parse(cookie),
			myApp = cookieObj.app,
			myLayout = cookieObj.layout;

		showContinueBuildDialog(myApp, myLayout);

		destroyCookie();
    },


    destroyCookie = function() {
    	document.cookie = 'buildApp=; expires=' + new Date('1970');
    },


	/**
	@summary Opens the sign in dialog.
	*/
	showSignInDialog = function(callback, expired) {

		var originUrl = '',
			layoutStr = layout ? layout : 'default',
			urlSuffix = fromBuildApp ? '?buildApp=true&app=' + app + '&layout=' + layoutStr : '',
			myStoriesPage = window.location.href.indexOf('/my-stories') === -1 ? false : true;

		// in IE10, window.location.origin doesn't exist. We'll account for that.
		// props to tosbourne: http://tosbourn.com/a-fix-for-window-location-origin-in-internet-explorer/
		if(!window.location.origin) {
			window.location.origin = 'https://' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
		}

		originUrl = 'https://' + unProtocolUrl(window.location.origin);

		$('body').addClass('no-scroll');


		var locale = 'en',
			preflang = fetchCookie('preflang');

		if(preflang) {
			locale = preflang;
		}


		// the signedIn should be https if it gets here.
		$("#sign-in-frame").attr(
			"src",
			arcGISUrl + "/sharing/oauth2/authorize?client_id=arcgisonline&display=iframe" +
			"&redirect_uri=" + originUrl + "/sign-in/signedin" + encodeURIComponent(urlSuffix) +
			"&response_type=token&display=iframe" +
			"&parent=" + window.location.href + "&locale=" + locale
		);

		// show the dialog
		$('#sign-in-container').css('display', 'block');
		$('#sign-in-wrapper').css('display', 'block');

		// when signed in, some pages have actions that are triggered by signing in. Set the callback here to be called once signed in.
		setSignedInCallback(callback);

		if(expired) {
			$('#token-expired-container').css('display', 'inline-block');
		}
		else {
			$('#token-expired-container').css('display', 'none');
		}


		$('#sign-in-container').off('click').on('click', function(e) {
			// if the element that triggered this is the container (and not one of its children), dismiss the dialog.
			if(e.target === e.currentTarget) {
				destroyCookie();
				hideSignInDialog(true);
			}
		});


		if(myStoriesPage) {
			$('#sign-in-container .close-dialog').hide();
			$('#sign-in-container #no-sign-in-redirect').show();

			// if there is a history, send the browser back instead of explicitly to the home page.
			canGoBack = window.history && window.history.length > 0;

			if(canGoBack) {
				$('#sign-in-container #no-sign-in-redirect').off('click').on('click', function(e) {
					e.preventDefault();
					window.history.back();
				});
			}
		}
		else {
			$('#sign-in-container .close-dialog').show();
			$('#sign-in-container #no-sign-in-redirect').hide();

			$('#sign-in-container .close-dialog').off('click').on('click', function() {
				hideSignInDialog(true);
			});
		}

		$('#login-link').off('click');
		$('#login-link').css('pointer-events', 'none');
		$('#login-link').css('cursor', 'default');
	},


	/**
	@summary Hides the sign-in dialog on a successful sign in.
	*/
	hideSignInDialog = function(fadeFast) {
		var frame = $('#sign-in-wrapper'),
			container = $('#sign-in-container'),
			frameFade = fadeFast ? 100 : 250,
			containerFade = fadeFast ? 500 : 1000;

		frame.fadeOut(frameFade);
		container.fadeOut(containerFade, function() {
			$('body').removeClass('no-scroll');
		});

		addSignInButtonEvent();
	},


	setSignedInCallback = function(inCallback) {
		signedInCallback = inCallback;
	},


	getSignedInCallback = function() {
		return signedInCallback;
	},


	signInManager = {
		checkIfSignedIn: checkIfSignedIn,
		renderHeader: renderHeader,
		getUserCookie: getUserCookie,
		showSignInDialog: showSignInDialog,
		hideSignInDialog: hideSignInDialog,
		getSignedInCallback: getSignedInCallback,
		fetchCookie: fetchCookie,
		jquery: jquery,
		showBuildSignInDialog: showBuildSignInDialog
	};



	renderHeader();
	window.signInManager = signInManager;
})();