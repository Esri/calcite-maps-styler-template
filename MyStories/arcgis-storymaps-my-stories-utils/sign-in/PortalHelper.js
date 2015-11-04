define([], function() {
	'use strict';

	var getBaseUrl = function(cookie) {
		var baseUrl = '';

		if(cookie) {
			baseUrl = getSignedInBaseUrl(cookie);
		}
		else {
			baseUrl = getSignedOutBaseUrl();
		}

		return baseUrl;
	},


	getSignedInBaseUrl = function(cookie) {
		var baseUrl = app.cfg.DEFAULT_PORTAL_URL;

		if(!app.cfg.customPortalUrl) {
			if(cookie) {
				if(cookie.portalApp) {
					baseUrl = window.location.hostname;
				}
				else if(cookie.urlKey && cookie.customBaseUrl) {
					baseUrl = (cookie.urlKey + '.' + cookie.customBaseUrl).toLowerCase();
				}
				else if(cookie.customBaseUrl) {
					baseUrl = cookie.customBaseUrl.toLowerCase();
				}
			}

			baseUrl = '//' + baseUrl;
		}
		else {
			baseUrl = app.cfg.customPortalUrl;
		}

		if(!baseUrl.match(/^http/)) {
			baseUrl = window.location.protocol + baseUrl;
		}

		return baseUrl;
	},


	/**
	@summary Gets the base URL when a user is signed out. Currently, nothing is done differently if the user is on the storymaps.arcgis.com domain.
	*/
	getSignedOutBaseUrl = function() {
		var baseUrl = '',
			appIndex = 0,
			homeIndex = 0;

		// if there is no custom portal URL set, check the URL to see if there is an org name.
		if(!app.cfg.customPortalUrl) {
			appIndex = window.location.href.indexOf('/apps/');
			homeIndex = window.location.href.indexOf('/home/');

			// check for AGOL
			if(appIndex !== -1) {
				baseUrl = window.location.href.slice(0, appIndex);
			}
			// check for portal
			else if (homeIndex !== -1) {
				baseUrl = window.location.href.slice(0, homeIndex);
			}
			// if there is neither, resort to the default URL.
			else {
				baseUrl = '//' + app.cfg.DEFAULT_PORTAL_URL;
			}
		}
		else {
			baseUrl = app.cfg.customPortalUrl;
		}

		if(!baseUrl.match(/^http/)) {
			baseUrl = window.location.protocol + baseUrl;
		}

		return baseUrl;
	},


	checkIfStorymapsDomain = function() {
		var isStoryMapsDomain = false,
			storyMapsDomains = [
				'storymaps.arcgis.com',
				'storymapsdev.arcgis.com',
				'storymapsstg.arcgis.com'
			];

		for(var i = 0; i < storyMapsDomains.length; i++) {
			if(window.location.hostname === storyMapsDomains[i]) {
				isStoryMapsDomain = true;
			}
		}

		return isStoryMapsDomain;
	},


	/**
	@summary Takes a protocoled
	*/
	forceHttpsPortalUrl = function(portalUrl) {
		var portalHttps = '';

		if(portalUrl.match(/^.+:\/\//)) {
			portalHttps = portalUrl.replace(/^.+:\/\//, 'https://');
		}

		else if(portalUrl.match(/^\/\//)) {
			portalHttps = portalUrl.replace(/^\/\//, 'https://');
		}

		else {
			portalHttps = 'https://' + portalUrl;
		}

		return portalHttps;
	};



	return {
		getBaseUrl: getBaseUrl,
		forceHttpsPortalUrl: forceHttpsPortalUrl
	};
});