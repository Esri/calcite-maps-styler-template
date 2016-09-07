/*! Storymaps-Cascade - v1.0.0 - 2016-09-06, 08:23:38 PM - This application is released under the Apache License V2.0 by Esri http://www.esri.com/ - https://github.com/Esri/story-map-cascade *//*
 *
 * Usage:
 *  require(['css!./mycssFile']);
 *
 * Tested and working in (up to latest versions as of March 2013):
 * Android
 * iOS 6
 * IE 6 - 10
 * Chome 3 - 26
 * Firefox 3.5 - 19
 * Opera 10 - 12
 * 
 * browserling.com used for virtual testing environment
 *
 * Credit to B Cavalier & J Hann for the IE 6 - 9 method,
 * refined with help from Martin Cermak
 * 
 * Sources that helped along the way:
 * - https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
 * - http://www.phpied.com/when-is-a-stylesheet-really-loaded/
 * - https://github.com/cujojs/curl/blob/master/src/curl/plugin/css.js
 *
 */

define('lib-build/css',[],function() {
  if (typeof window == 'undefined')
    return { load: function(n, r, load){ load() } };

  var head = document.getElementsByTagName('head')[0];

  var engine = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/) || 0;

  // use <style> @import load method (IE < 9, Firefox < 18)
  var useImportLoad = false;
  
  // set to false for explicit <link> load checking when onload doesn't work perfectly (webkit)
  var useOnload = true;

  // trident / msie
  if (engine[1] || engine[7])
    useImportLoad = parseInt(engine[1]) < 6 || parseInt(engine[7]) <= 9;
  // webkit
  else if (engine[2])
    useOnload = false;
  // gecko
  else if (engine[4])
    useImportLoad = parseInt(engine[4]) < 18;
  
  //main api object
  var cssAPI = {};
  
  cssAPI.pluginBuilder = './css-builder';

  // <style> @import load method
  var curStyle;
  var createStyle = function () {
    curStyle = document.createElement('style');
    head.appendChild(curStyle);
  }
  var importLoad = function(url, callback) {
    createStyle();

    var curSheet = curStyle.styleSheet || curStyle.sheet;

    if (curSheet && curSheet.addImport) {
      // old IE
      curSheet.addImport(url);
      curStyle.onload = callback;
    }
    else {
      // old Firefox
      curStyle.textContent = '@import "' + url + '";';

      var loadInterval = setInterval(function() {
        try {
          curStyle.sheet.cssRules;
          clearInterval(loadInterval);
          callback();
        } catch(e) {}
      }, 10);
    }
  }

  // <link> load method
  var linkLoad = function(url, callback) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    if (useOnload)
      link.onload = function() {
        link.onload = function() {};
        // for style dimensions queries, a short delay can still be necessary
        setTimeout(callback, 7);
      }
    else
      var loadInterval = setInterval(function() {
        for (var i = 0; i < document.styleSheets.length; i++) {
          var sheet = document.styleSheets[i];
          if (sheet.href == link.href) {
            clearInterval(loadInterval);
            return callback();
          }
        }
      }, 10);
    link.href = url;
    head.appendChild(link);
  }

  cssAPI.normalize = function(name, normalize) {
    if (name.substr(name.length - 4, 4) == '.css')
      name = name.substr(0, name.length - 4);
    
    return normalize(name);
  }
  
  cssAPI.load = function(cssId, req, load, config) {

    (useImportLoad ? importLoad : linkLoad)(req.toUrl(cssId + '.css'), load);

  }

  return cssAPI;
});

define('lib-build/css!lib/calcite-bootstrap/css/calcite-bootstrap-open.min',[],function(){});
/*
 * Modified by Esri
 * lines` 63 and 83
 */

define('lib-build/less',['require'], function(require) {

  var lessAPI = {};

  lessAPI.pluginBuilder = './less-builder';

  if (typeof window == 'undefined') {
    lessAPI.load = function(n, r, load) { load(); }
    return lessAPI;
  }

  lessAPI.normalize = function(name, normalize) {
    if (name.substr(name.length - 5, 5) == '.less')
      name = name.substr(0, name.length - 5);

    name = normalize(name);

    return name;
  }

  var head = document.getElementsByTagName('head')[0];

  var base = document.getElementsByTagName('base');
  base = base && base[0] && base[0] && base[0].href;
  var pagePath = (base || window.location.href.split('#')[0].split('?')[0]).split('/');
  pagePath[pagePath.length - 1] = '';
  pagePath = pagePath.join('/');

  var styleCnt = 0;
  var curStyle;
  lessAPI.inject = function(css) {
    if (styleCnt < 31) {
      curStyle = document.createElement('style');
      curStyle.type = 'text/css';
      head.appendChild(curStyle);
      styleCnt++;
    }
    if (curStyle.styleSheet)
      curStyle.styleSheet.cssText += css;
    else
      curStyle.appendChild(document.createTextNode(css));
  }

  lessAPI.load = function(lessId, req, load, config) {
    var defaultConfig = {};
    var lessConfig = config ? (config.less || config) : defaultConfig;
    if (! ('env' in lessConfig))
      lessConfig.env = 'development';
    var globalLess = window.less;
    if (! globalLess)
        window.less = lessConfig;
    else if (! globalLess.Parser) {
        if (lessConfig === defaultConfig)
          lessConfig = globalLess;
        globalLess = null;
    }

    // Doesn't seems to help like mentioned at https://github.com/guybedford/require-less/issues/61, see below
    //lessConfig.relativeUrls = true;

    require(globalLess ? ['./normalize'] : ['./normalize', './lessc'], function(normalize, lessc) {
      if (! lessc)
        lessc = globalLess;

      if (! ("fileExt" in lessConfig))
        lessConfig.fileExt = ".less";
      var fileUrl = lessId;
      if (fileUrl.substring(fileUrl.length - 4) !== ".css" && lessConfig.fileExt)
        fileUrl += lessConfig.fileExt;
      fileUrl = normalize.absoluteURI(req.toUrl(fileUrl), pagePath);

      lessc.render('@import (' + (lessConfig.importOption || 'multiple') + ') "' + fileUrl + '";', lessConfig, function(err, output) {
        if (err)
          return load.error(err);

        //lessAPI.inject(normalize(output.css, fileUrl, pagePath));

        // Quicky CSS url path replace that bypass normalize
        output.css = output.css.replace(/..\/..\/(..\/)*resources/g, 'resources');
        lessAPI.inject(output.css);

        setTimeout(load, 7);
      }, lessConfig);

    });
  }

  return lessAPI;
});


define('lib-build/less!storymaps/common/ui/bootstrap-override',[],function(){});

define('lib-build/css!lib/font-awesome/css/font-awesome',[],function(){});

define('lib-build/css!storymaps/common/Core',[],function(){});

define('lib-build/less!storymaps/common/Core',[],function(){});
define('storymaps/common/utils/SocialSharing',[
  'dojo/Deferred',
  'esri/urlUtils'
], function(
  Deferred,
  urlUtils
) {
  return {
    shareFacebook: function(title, subtitle, optionalImageURL, url) {
      var options = 'u=' + this.cleanURL(url || document.location.href);

      window.open(
        'https://www.facebook.com/sharer/sharer.php?' + options,
        '',
        'toolbar=0,status=0,width=626,height=436'
      );
    },
    shareTwitter: function(title, url) {
      var options = 'text=' + encodeURIComponent(title || '')
              + '&url=' + this.cleanURL(url || document.location.href)
              + '&related=EsriStoryMaps'
              + '&hashtags=storymap';

      window.open(
        'https://twitter.com/intent/tweet?' + options,
        '',
        'toolbar=0,status=0,width=626,height=436'
      );
    },
    /*
    shareBitly: function(container, placement, url)
    {
      var sharebitlyindex = container.find(".share_bitly").attr('sharebitlyindex');
      if ( ! sharebitlyindex ) {
        sharebitlyindex = $(".share_bitly[sharebitlyindex]").length + 1;
        container.find(".share_bitly").attr('sharebitlyindex', sharebitlyindex);
      }

      container.find(".share_bitly").popover({
        trigger: 'manual',
        placement: placement ? placement : 'left',
        animation: false,
        html: true,
        content:
          '<div style="width:155px; min-height: 30px; text-align: center">'
          + ' <div id="bitlyLoad" style="position:absolute; top: 16px; left: 24px; width:130px; text-align:center;">'
          + '  <span class="smallLoader"></span>'
          + ' </div>'
          + ' <input id="bitlyInput" class="form-control" type="text" value="" style="display:none; height: 28px; width: 150px; margin-bottom: 0px;"/>'
          + ' <div style="font-size: 0.8em; margin-top: 2px; margin-bottom: -1px; position: absolute; top: 40px; width: 100%; left: 0px; text-align: center;">'
          + ' </div>'
          + '</div>'
          + '<script>'
          + ' setTimeout(function(){$(document).on("click touchstart", function(src) { if( ! src || ! src.target || ! $(src.target).parents(".popover").length ){ $(".share_bitly[sharebitlyindex=' + (sharebitlyindex) + ']").popover("toggle"); $(document).off("click"); } })}, 100);'
          + '</script>'
      }).popover('toggle');

      this.requestBitly(url).then(function(shortURL){
        $("#bitlyLoad").fadeOut();
        $("#bitlyInput").fadeIn();
        $("#bitlyInput").val(shortURL);
        $("#bitlyInput").select();
      });
    },
    */
    requestBitly: function(url) {
      var bitlyUrls = [
            'http://api.bitly.com/v3/shorten?callback=?',
            'https://api-ssl.bitly.com/v3/shorten?callback=?'
          ],
          bitlyUrl = location.protocol == 'http:' ? bitlyUrls[0] : bitlyUrls[1],
          targetUrl = url || document.location.href,
          resultDeferred = new Deferred();

      $.getJSON(
        bitlyUrl,
        {
          'format': 'json',
          'apiKey': app.cfg.HEADER_SOCIAL.bitly.key,
          'login': app.cfg.HEADER_SOCIAL.bitly.login,
          'longUrl': targetUrl
        },
        function(response) {
          if(! response || ! response || ! response.data.url) {
            resultDeferred.reject();
          }
          else {
            resultDeferred.resolve(response.data.url);
          }
        }
      );

      return resultDeferred;
    },
    cleanURL: function(url, noEncoding) {
      var urlParams = urlUtils.urlToObject(url);
      var newUrl = urlParams.path;

      if (urlParams.query) {
        delete urlParams.query.edit;
        delete urlParams.query.locale;
        delete urlParams.query.folderId;
        delete urlParams.query.webmap;
        delete urlParams.query.autoplay;

        $.each(Object.keys(urlParams.query), function(i, k) {
          if (i === 0) {
            newUrl += '?';
          }
          else {
            newUrl += '&';
          }

          if (urlParams.query[k] !== undefined && urlParams.query[k] !== '') {
            newUrl += k + '=' + urlParams.query[k];
          }
          else {
            newUrl += k;
          }
        });
      }

      return noEncoding ? newUrl : encodeURIComponent(newUrl);
    }
  };
});

define('storymaps/common/utils/CommonHelper',[
  'esri/urlUtils',
  'dojo/cookie',
  './SocialSharing'
],
function(
  urlUtils,
  cookie,
  SocialSharing
) {
  return {
    switchToBuilder: function() {
      if(document.location.search.match(/appid/)) {
        document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname + document.location.search, true) + '&edit' + document.location.hash;
      }
      else if (document.location.search.slice(-1) == '?') {
        document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + '?edit'  + document.location.hash;
      }
      else {
        document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + '?edit'  + document.location.hash;
      }
    },
    getMyStoriesURL: function() {
      if (app.isPortal) {
        return this.getPortalURL() + '/apps/MyStories/';
      }
      else {
        return '//storymaps.arcgis.com/en/my-stories/';
      }
    },
    // Get URL parameters IE9 history not supported friendly
    getUrlParams: function() {
      var urlParams = urlUtils.urlToObject(document.location.search).query;

      if (urlParams) {
        return urlParams;
      }

      if (! this.browserSupportHistory() && ! urlParams) {
        return urlUtils.urlToObject(document.location.hash).query || {};
      }

      return {};
    },
    browserSupportHistory: function() {
      return !!(window.history && history.pushState);
    },
    isArcGISHosted: function() {
      // App is hosted if the URL contains /apps/XYZ/ or /home/XYZ/ or /arcgis/apps/
      return (/(\/)([a-zA-Z0-9]+(\/))*(apps\/|home\/)([a-zA-Z0-9\-\_]+\/)/).test(document.location.pathname);
    },
    getAppID: function(isProd) {
      var urlParams = this.getUrlParams();

      if (app.indexCfg && app.indexCfg.appid) {
        return app.indexCfg.appid;
      }

      if (this.isArcGISHosted() || ! isProd) {
        return urlParams.appid;
      }

      // Only authorize URL params outside of arcgis.com if a webmap/app owner is specified
      if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
        return urlParams.appid;
      }
    },
    getWebmapID: function(isProd) {
      var urlParams = this.getUrlParams();

      if(app.indexCfg && app.indexCfg.webmap) {
        return app.indexCfg.webmap;
      }

      if (this.isArcGISHosted() || ! isProd) {
        return urlParams.webmap;
      }

      // Only authorize URL params outside of arcgis.com if a webmap owner is specified
      if(app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
        return urlParams.webmap;
      }
    },
    getPortalUser: function() {
      var esriCookie = cookie('esri_auth');

      if(! esriCookie) {
        return;
      }

      esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));

      // Cookie has to be set on the same organization
      if(esriCookie.urlKey && esriCookie.customBaseUrl
          && (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) {
        return;
      }

      return esriCookie ? esriCookie.email : null;
    },
    getCookieToken: function() {
      var esriCookie = cookie('esri_auth');

      if(! esriCookie) {
        return;
      }

      esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));

      // Cookie has to be set on the same organization
      if(esriCookie.urlKey && esriCookie.customBaseUrl
          && (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) {
        return;
      }

      return esriCookie ? esriCookie.token : null;
    },
    userIsAppOwner: function() {
      var portalUser = app.portal ? app.portal.getPortalUser() : null,
          appItem = app.data.appItem ? app.data.appItem.item : null;

      return  (portalUser && appItem && portalUser.username == appItem.owner)
        || (this.getPortalUser() != null && appItem && this.getPortalUser() == appItem.owner)
        // Admin privilege
        || (portalUser && portalUser.privileges && $.inArray('portal:admin:updateItems', portalUser.privileges) > -1)
        || (appItem && appItem.itemControl == 'admin')
        // Group with shared ownership
        || (appItem && appItem.itemControl == 'update');
    },
    checkUserItemPrivileges: function() {
      var portalUser = app.portal ? app.portal.getPortalUser() : null;

      return (portalUser && ! portalUser.orgId && ! portalUser.privileges)
        || (portalUser && portalUser.privileges && $.inArray('portal:user:createItem', portalUser.privileges) > -1);
    },
    prependURLHTTP: function(url) {
      if (!url || url === '' || url.match(/^mailto:/)) {
        return url;
      }
      if (! /^(https?:\/\/)|^(\/\/)/i.test(url)) {
        return 'http://' + url;
      }

      return url;
    },
    throttle: function(fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last,
          deferTimer;

      return function() {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function() {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        }
        else {
          last = now;
          fn.apply(context, args);
        }
      };
    }
  };
});

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define('lib/fastclick/lib/fastclick',[],function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/*
| Copyright 2016 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/

define('storymaps/common/Core',[
  'lib-build/css!lib/calcite-bootstrap/css/calcite-bootstrap-open.min',
  'lib-build/less!./ui/bootstrap-override',

  'lib-build/css!../../lib/font-awesome/css/font-awesome',

  'lib-build/css!./Core',
  'lib-build/less!./Core',

  'esri/map',
  'esri/arcgis/Portal',
  'esri/arcgis/utils',
  './utils/CommonHelper',
  'esri/urlUtils',

  // Builder
  //'./builder/MyStoriesWrapper',

  // Utils
  'dojo/has',
  'esri/IdentityManager',
  'esri/arcgis/OAuthInfo',
  'esri/config',
  'esri/tasks/GeometryService',
  'esri/request',
  'dojo/topic',
  'dojo/on',
  'dojo/_base/lang',
  'dojo/_base/array',
  'dojo/_base/kernel',
  'dojo/Deferred',
  'dojo/DeferredList',
  'dojo/query',

  'lib/fastclick/lib/fastclick'
], function(
  bootstrapCss,
  bootstrapOverrideCss,

  fontAwesomeCss,

  viewCss,
  viewLess,

  Map,
  arcgisPortal,
  arcgisUtils,
  CommonHelper,
  urlUtils,

  //MyStoriesWrapper,

  has,
  IdentityManager,
  ArcGISOAuthInfo,
  esriConfig,
  GeometryService,
  esriRequest,
  topic,
  on,
  lang,
  array,
  kernel,
  Deferred,
  DeferredList,
  query,

  FastClick
) {
  // Value is replaced with TPL_ENV_PRODUCTION during build
  var CONFIG = { environment: 'TPL_ENV_PRODUCTION' },
      _mainView = null,
      _builder = null,
      _urlParams = CommonHelper.getUrlParams();

  //
  // Initialization
  //

  function init(mainView, builder) {
    console.log('common.core.Core - init', builder);

    _mainView = mainView;
    _builder = builder;

    app.userCanEdit = false;

    initLocalization();

    // If browser doesn't support history and it's direct or gallery mode where the URL will have to be rewritten later
    // Redirect to a URL that the browser will be able to overwrite
    // And put a token so that we don't loop in here
    /*
    if (! CommonHelper.browserSupportHistory() && (isDirectCreation || isGalleryCreation) && _urlParams.ieredirected == null) {
      window.location = document.location.protocol + '//' + document.location.host + document.location.pathname + '#' + document.location.search + '&ieredirected';
    }
    */

    // Ignore index.html configuration on AGOL/Portal
    if (CommonHelper.isArcGISHosted()) {
      app.indexCfg = { };
    }
    // Keep only some properties in development
    else if (!isProd()) {
      app.indexCfg = {
        proxyurl: app.indexCfg.proxyurl,
        sharingurl: app.indexCfg.sharingurl,
        username: app.indexCfg.username,
        password: app.indexCfg.password,
        oAuthAppId: app.indexCfg.oAuthAppId,
        story: app.indexCfg.story
      };
    }

    // Check the config file
    /*
    if (! _mainView.checkConfigFileIsOK()) {
      initError('invalidConfig');
      return;
    }
    */

    // Init UI

    document.title = app.cfg.TPL_NAME;

    //
    // Instantiate FastClick to make the app more responsive except on the map due to conflict with popup charts
    //

    if (has('touch')) {
      $('body').addClass('hasTouch');
    }

    // TODO
    FastClick.prototype._needsClick = FastClick.prototype.needsClick;
    FastClick.prototype.needsClick = function(target) {
      if ($(target).parents('.esriPopup').length) {
        return true;
      }
      return FastClick.prototype._needsClick.call(this, target);
    };

    FastClick.attach(document.body);

    // App is embedded
    if (window != window.top /*|| _urlParams.forceEmbed !== undefined || app.indexCfg.forceEmbed*/) {
      $('body').addClass('isEmbed');
    }

    lang.mixin(app, {
      data: {},
      appCfg: {
        supportWebmapPreviewAGOL: false,
        useWebmapInApp: false,
        useStandardHeader: false,
        useAppTitleAsPageTitle: false
      },
      portal: null,
      builder: builder,
      isLoading: true,
      loadingTimeout: null
    });

    if (app.isInBuilder && (has('ie') || has('trident') || has('ff'))) {
      $('#fatalError .error-title').html('Sorry!');
      $('#fatalError .error-msg').html('Story Map Cascade is in beta and its builder is supported only in <a href="https://www.google.com/chrome/" target="_blank">Chrome</a> and <a href="https://www.apple.com/safari/" target="_blank">Safari</a>. Cascade stories that you create and share will work on those browsers and Internet Explorer 11+ and Firefox.');
      $('#fatalError').show();
      return;
    }

    if (app.isInBuilder && has('ipad')) {
      $('#fatalError .error-title').html('Sorry!');
      $('#fatalError .error-msg').html('Story Map Cascade is in beta and its builder is not supported on iPad. Cascade stories that you create and share will work on iPad.');
      $('#fatalError').show();
      return;
    }

    if (has('ie') < 11) {
      $('#fatalError .error-title').html('Sorry!');
      $('#fatalError .error-msg').html('This story is not supported in Internet Explorer before version 11. <a href="http://browsehappy.com/" target="_blank">Please update your browser</a>');
      $('#fatalError').show();
      return;
    }

    on(IdentityManager, 'dialog-create', function() {
      if (app.isLoading) {
        initError('invalidConfignoOAuth');
      }
    });

    // Remove preview from the URL
    topic.subscribe('tpl-ready', function() {
      var urlParams = document.location.search;
      if (urlParams) {
        urlParams = urlParams.replace('&preview', '');
      }

      window.history.replaceState({}, '', 'index.html' + urlParams + document.location.hash);
    });

    // Prepare an error message in builder for small screens
    if (app.isInBuilder) {
      // Touch device
      var errMsg = 'notConfiguredMobile';

      if (has('touch')) {
        // in portrait mode with enough room in landscape for builder
        if (window.innerHeight > window.innerWidth) {
          if (window.innerHeight > 768) {
            errMsg = 'notConfiguredMobile2';
          }
        }
        // in landscape mode with enough room to fit builder but prepare in case of orientation change
        else {
          if (window.innerWidth > 768) {
            errMsg = 'notConfiguredMobile2';
          }
        }
      }

      initError(errMsg, null, true);
    }

    if (! _mainView.init(this)) {
      return;
    }

    startLoadingTimeout();

    // Sharing URL
    if (! app.indexCfg.sharingurl) {
      // Determine if hosted or on a Portal
      var appLocation = document.location.pathname.indexOf('/apps/');

      if (appLocation == -1) {
        appLocation = document.location.pathname.indexOf('/home/');
      }

      if (appLocation != -1) {
        // Get the portal instance name
        var instance = location.pathname.substr(0,appLocation);

        app.indexCfg.sharingurl = '//' + location.host + instance + '/sharing/content/items';
        app.indexCfg.proxyurl = '//' + location.host + instance + '/sharing/proxy';
      }
      else {
        app.indexCfg.sharingurl = app.cfg.DEFAULT_SHARING_URL;
      }
    }

    if (app.indexCfg.sharingurl.match(/^http/)) {
      arcgisUtils.arcgisUrl = app.indexCfg.sharingurl;
    }
    else {
      arcgisUtils.arcgisUrl = location.protocol + app.indexCfg.sharingurl;
    }

    // Proxy URL
    if (! app.indexCfg.proxyurl) {
      app.indexCfg.proxyurl = app.cfg.DEFAULT_PROXY_URL;
    }
    esriConfig.defaults.io.proxyUrl = location.protocol + app.indexCfg.proxyurl;

    // Allow IE9 to save over HTTP
    if (IdentityManager) {
      IdentityManager.setProtocolErrorHandler(function() {
        return true;
      });
    }

    // USE CORS to save the web app configuration during developement
    if (app.isInBuilder && app.cfg.CORS_SERVER) {
      $.each(app.cfg.CORS_SERVER, function(i, server) {
        esriConfig.defaults.io.corsEnabledServers.push(server);
      });
    }

    // Proxy rules
    if (app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length) {
      $.each(app.cfg.PROXY_RULES, function(i, rule) {
        if (rule && rule.urlPrefix && rule.proxyUrl) {
          urlUtils.addProxyRule(rule);
        }
      });
    }

    // Set timeout depending on the application mode
    esriConfig.defaults.io.timeout = app.isInBuilder ? app.cfg.TIMEOUT_BUILDER_REQUEST : app.cfg.TIMEOUT_VIEWER_REQUEST;

    // Fix for multiple twitter bootstrap popup to be open simultaneously
    $.fn.modal.Constructor.prototype.enforceFocus = function() { };

    // Disable form submit on enter key
    $('form').bind('keydown', function(e) {
      if (e.keyCode == 13) {
        return false;
      }
    });

    topic.subscribe('CORE_UPDATE_EXTENT', setMapExtent);

    // Load the Portal
    app.portal = new arcgisPortal.Portal(app.indexCfg.sharingurl.split('/sharing/')[0]);
    app.portal.on('load', function(response) {
      app.isPortal = !! response.isPortal;

      definePortalConfig();

      // If app is configured to use OAuth
      if (app.indexCfg.oAuthAppId) {
        var info = new ArcGISOAuthInfo({
          appId: app.indexCfg.oAuthAppId,
          popup: false,
          portalUrl: 'https:' + app.indexCfg.sharingurl.split('/sharing/')[0]
        });

        IdentityManager.registerOAuthInfos([info]);

        IdentityManager.checkSignInStatus(info.portalUrl).then(
          function() {
            // User has signed-in using oAuth
            if (! builder) {
              portalLogin().then(initStep2);
            }
            else {
              portalLogin().then(initStep2);
            }
          },
          function() {
            // Not signed-in, redirecting to OAuth sign-in page
            IdentityManager.getCredential(info.portalUrl);
          }
        );
      }
      else {
        initStep2();
      }
    });
  }

  function initStep2() {
    console.log('common.core.Core - initStep2');

    var appId = CommonHelper.getAppID(isProd()),
        webmapId = CommonHelper.getWebmapID(isProd()),
        supportWebmapPreviewAGOL = !! (app.appCfg ? app.appCfg.supportWebmapPreviewAGOL : true);

    //if (app.isInBuilder )

    // Load using static config file
    var configName = app.indexCfg.story || CommonHelper.getUrlParams().story;
    if (configName) {
      if (! isProd()) {
        setTimeout(function() {
          _mainView.getConfig(configName);
        }, 1000);
        return;
      }
      else {
        _mainView.getConfig(configName);
        return;
      }
    }

    // Load using a Web Mapping Application item
    if (appId) {
      loadWebMappingApp(appId);
      return;
    }

    // Webmap and template doesn't support preview when hosted in AGOL
    if (webmapId && ! supportWebmapPreviewAGOL) {
      if (CommonHelper.isArcGISHosted()) {
        redirectToExternalHelp();
      }
      else {
        loadWebMap(webmapId);
      }

      return;
    }

    // Direct creation and not signed-in
    if (app.isInBuilder && _builder.isDirectCreation && isProd() && ! (CommonHelper.getPortalUser() || app.portal.getPortalUser())) {
      redirectToSignIn();
      return;
    }

    // Direct creation and signed in
    if (app.isInBuilder && _builder.isDirectCreation) {
      portalLogin().then(function() {
        initializeUI();
        appInitComplete();
      });
      return;
    }

    if (CommonHelper.isArcGISHosted()) {
      redirectToExternalHelp();
    }
    else if (_urlParams.appid && (! app.indexCfg.authorizedOwners || ! app.indexCfg.authorizedOwners[0])) {
      initError('unspecifiedConfigOwner');
    }
    else if (! app.isProduction) {
      initError('invalidConfigNoAppDev');
    }
    else {
      initError('invalidConfigNoApp');
    }
  }

  function loadWebMappingApp(appId) {
    console.log('common.core.Core - loadWebMappingApp - appId:', appId);

    var forceLogin = _urlParams.forceLogin !== undefined;

    // If forceLogin parameter in URL OR builder
    if (forceLogin || app.isInBuilder) {
      portalLogin().then(
        function() {
          loadWebMappingAppStep2(appId);
        },
        function() {
          initError('notAuthorized');
        }
      );
    }
    // Production in view mode
    else {
      loadWebMappingAppStep2(appId);
    }
  }

  function loadWebMappingAppStep2(appId) {
    arcgisUtils.getItem(appId).then(
      function(response) {
        if (! response) {
          initError('appLoadingFail');
          return;
        }

        var itemRq = response.item,
            dataRq = response.itemData;

        app.data.appItem = {
          item: itemRq,
          data: dataRq
        };

        app.userCanEdit = CommonHelper.userIsAppOwner();

        // Prevent app from accessing the cookie in viewer when user is not the owner
        if (! app.isInBuilder && ! app.userCanEdit) {
          if (! document.__defineGetter__) {
            Object.defineProperty(document, 'cookie', {
              get: function() {
                return '';
              },
              set: function() {
                return true;
              }
            });
          }
          else {
            document.__defineGetter__('cookie', function() {
              return '';
            });
            document.__defineSetter__('cookie', function() {
            });
          }
        }

        if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
          var owner = itemRq.owner,
              ownerFound = false;

          if (owner) {
            ownerFound = $.inArray(owner, app.indexCfg.authorizedOwners) != -1;
          }

          if (! ownerFound && app.indexCfg.authorizedOwners[0] == '*') {
            ownerFound = true;
          }

          if (! ownerFound) {
            $.each(app.indexCfg.authorizedOwners, function(i, owner) {
              var test = owner.match(/^\[(.*)\]$/);

              if (test) {
                if (itemRq.orgId == test[1]) {
                  ownerFound = true;
                }
              }
            });
          }

          if (! ownerFound) {
            initError('invalidConfigOwner');
            return;
          }
        }

        // App proxies
        if (itemRq && itemRq.appProxies) {
          var layerMixins = array.map(itemRq.appProxies, function(p) {
            return {
              url: p.sourceUrl,
              mixin: {
                url: p.proxyUrl
              }
            };
          });

          app.data.appProxies = layerMixins;
        }

        // If in builder, check that user is app owner or org admin
        if (app.isInBuilder && isProd() && !app.userCanEdit) {
          initError('notAuthorized');
          return;
        }

        var isStoryBlank = _mainView.isStoryBlank();

        if (! isStoryBlank) {
          appInitComplete();
        }
        else if (app.isInBuilder) {
          appInitComplete();
        }
        // No data in view mode
        else if(CommonHelper.getAppID(isProd())) {
          if(app.userCanEdit) {
            //app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
            //setTimeout(function(){
            CommonHelper.switchToBuilder();
            //}, 1200);
          }
          else {
            initError('notConfiguredDesktop');
          }
        }
        // No data in preview mode (should not happen)
        else {
          initError('noLayer');
        }
      },
      function(error) {
        if (error && error.httpCode == 400) {
          initError('invalidApp');
        }
        else if (error && error.httpCode == 403) {
          initError('notAuthorized');
        }
        else {
          initError('appLoadingFail');
        }
      }
    );
  }

  function portalLogin() {
    var resultDeferred = new Deferred();

    app.portal.signIn().then(
      function() {

        // If in builder, check that user is user can create/edit item
        if (app.isInBuilder && ! CommonHelper.checkUserItemPrivileges()) {
          initError('notAuthorizedBuilder');
          return;
        }

        app.userCanEdit = CommonHelper.userIsAppOwner();

        definePortalConfig();
        resultDeferred.resolve();
      },
      function() {
        resultDeferred.reject();
      }
    );

    return resultDeferred;
  }

  function loadWebMap(webmapIdOrJSON) {
    _mainView.loadFirstWebmap(webmapIdOrJSON).then(
      lang.hitch(this, function(response) {
        webMapInitCallback(response);
      }),
      lang.hitch(this, function() {
        initError('createMap');
      })
    );
  }

  function webMapInitCallback(/*response*/) {
    console.log('common.core.Core - webMapInitCallback');

    console.error('FATAL ERROR');
    return;
    /*
    app.maps[response.itemInfo.item.id] = _mainView.getMapConfig(response);
    app.map = response.map;
    app.data.setWebMap(response.itemInfo);

    app.map.disableKeyboardNavigation();

    initializeUI();

    _mainView.firstWebmapLoaded();
    */
  }

  function redirectToExternalHelp() {
    window.location = app.isPortal && app.cfg.HELP_URL_PORTAL ? app.cfg.HELP_URL_PORTAL : app.cfg.HELP_URL;
  }

  function initializeUI() {
    //app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step3);

    // Initialize header
    // Title/subtitle are the first valid string from: index.html config object, web application data, web map data
    // TODO
    var title = app.data.title;

    if (app.appCfg.useAppTitleAsPageTitle) {
      document.title = title ? $('<div>' + title + '</div>').text() : app.cfg.TPL_NAME;
    }
  }

  function appInitComplete() {
    console.log('common.core.Core - initApp');

    if (_mainView.isStoryBlank() && app.isInBuilder) {
      app.builder.appInitComplete();
      _mainView.appInitComplete();
    }
    else if (app.isInBuilder) {
      _mainView.appInitComplete();
      app.builder.appInitComplete();
    }
    else {
      _mainView.appInitComplete();
    }

    // Load My Stories in builder or viewer if user is owning the story
    if ((app.isInBuilder || app.userCanEdit) && has('ie') != 9 && ! _urlParams.preview) {
      if (has('ff')) {
        $('.builderShare #my-stories-frame').remove();
      }

      if (has('ff') || ! app.isInBuilder) {
        //$('body').append('<div id="my-stories-hidden-container"><iframe id="my-stories-frame"></iframe></div>');
      }

      //MyStoriesWrapper.loadMyStories();
    }

    // Update URL for hosted apps so that when shared it will have the proper metadata on social medias
    if (document.location.pathname.match(/\/apps\/[a-zA-Z]+\/$/)
        && document.location.search.match(/^\?appid=/)
        && (! has('ie') || has('ie') >= 10)) {
      window.history.replaceState({}, '', 'index.html' + document.location.search + document.location.hash);
    }
  }

  function initError(error, message, noDisplay) {
    var errorMsg = i18n.viewer.errors[error];

    cleanLoadingTimeout();
    $('#loadingIndicator').hide();

    errorMsg = errorMsg.replace(/{TPL_NAME}/g, app.cfg.TPL_NAME);

    if (error == 'notAuthorized' && app.indexCfg.oAuthAppId) {
      errorMsg += '<div><button class="btn btn-sm btn-default" onclick="esri.id.destroyCredentials(); window.location.reload();">' + i18n.viewer.errors.signOut + '</button></div>';
    }

    if (error == 'appLoadingFail') {
      $('#loadingMessage').html(
        '<div id="loadingRetry">'
        + ' <button type="button" class="btn btn-naked btn-sm" onclick="document.location.reload()">'
        + i18n.viewer.loading.failButton
        + ' </button>'
        + '</div>'
      ).hide().fadeIn(1200, function() {
        $('#loadingMessage').addClass('loaded');
      });
    }
    else {
      $('#loadingMessage').hide();
    }

    $('#fatalError .error-msg').html(errorMsg);

    if (! noDisplay) {
      $('#fatalError').show();
    }
  }

  function replaceInitErrorMessage(error) {
    $('#fatalError .error-msg').html(i18n.viewer.errors[error]);
  }

  //
  // Map navigation
  //

  function setMapExtent(extent) {
    if (! extent || ! extent.spatialReference || ! app.map || ! app.map.extent.spatialReference || ! app.map.spatialReference) {
      var r = new Deferred();

      r.resolve();
      return r;
    }

    if (app.map.spatialReference.wkid == extent.spatialReference.wkid) {
      return app.map.setExtent(extent/*, true*/); /* TODO */
    }
    else {
      var resultDeferred = new Deferred();

      esriConfig.defaults.geometryService.project([extent], app.map.spatialReference, function(features) {
        if (! features || ! features[0]) {
          return;
        }

        app.map.setExtent(features[0]/*, true*/); /* TODO */
        resultDeferred.resolve();
      });
      return resultDeferred;
    }
  }

  function zoomToDeviceLocation(success, geom) {
    if (success) {
      if (app.map.spatialReference.wkid != 102100 && app.map.spatialReference.wkid != 4326) {
        esriConfig.defaults.geometryService.project([geom], app.map.spatialReference, function(features) {
          if (! features || ! features[0]) {
            return;
          }

          if (! app.map.extent.contains(features[0])) {
            app.map.centerAt(features[0]);
          }
        });
      }
      else if (! app.map.extent.contains(geom)) {
        app.map.centerAt(geom);
      }
    }
  }

  //
  // UI
  //

  function hasSwitchBuilderButton() {
    return ! app.isInBuilder && (
      (! isProd() && !! CommonHelper.getAppID(isProd()))
      || isProd() && app.userCanEdit)
      && (_urlParams.preview === undefined || _urlParams.preview == 'false');
  }

  function redirectToSignIn() {
    window.location = arcgisUtils.arcgisUrl.split('/sharing/')[0]
      + '/home/signin.html?returnUrl='
      + encodeURIComponent(document.location.href);
  }

  /*
  function redirectToBuilderFromGallery() {
    // TODO display another redirect message
    //app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
    //setTimeout(function(){
    window.location = document.location.href + '&fromGallery';
    //}, 1200);
  }
  */

  //
  // App init
  //

  function startLoadingTimeout() {
    app.loadingTimeout = setTimeout(appLoadingTimeout, app.cfg.TIMEOUT_VIEWER_LOAD);
  }

  function cleanLoadingTimeout() {
    if (typeof app != 'undefined' && app.loadingTimeout) {
      clearTimeout(app.loadingTimeout);
      app.loadingTimeout = null;
    }
  }

  function appLoadingTimeout() {
    // Restart the timeout if the dialog is shown or has been shown and the timeout hasn't been fired after it has been closed
    if (IdentityManager && IdentityManager.dialog && IdentityManager.dialog._alreadyInitialized && ! IdentityManager.loadingTimeoutAlreadyFired) {
      clearTimeout(app.loadingTimeout);
      startLoadingTimeout();
      // Set a flag only if the dialog isn't showned now
      if (! IdentityManager._busy) {
        IdentityManager.loadingTimeoutAlreadyFired = true;
      }
      return;
    }

    /*
    //$("#loadingIndicator").fadeOut();
    $('#loadingMessage').html(
      '<div class="mainMessage">'
      + i18n.viewer.loading.long
      + '<br />'
      + i18n.viewer.loading.long2
      + '</div>'
    ).fadeIn('slow', function() {
      $('#loadingMessage').addClass('loaded');
    });
    */

    //app.map && app.map.destroy();
  }

  function initLocalization() {
    document.documentElement.lang = kernel.locale;
    query('#fatalError .error-title')[0].innerHTML = i18n.viewer.errors.boxTitle;
  }

  function isProd() {
    // Prevent the string from being replaced
    return CONFIG.environment != ['TPL','ENV','DEV'].join('_');
  }

  function definePortalConfig() {
    console.log('common.core.Core - parsePortalConfig');

    if (! app.portal) {
      return;
    }

    // Use geocode service from the portal if none declared in config
    if (! app.cfg.HELPER_SERVICES.geocode.length && app.portal.helperServices) {
      if (app.portal.helperServices.geocode && app.portal.helperServices.geocode.length && app.portal.helperServices.geocode[0].url) {
        $.each(app.portal.helperServices.geocode, function(index, geocoder) {
          app.cfg.HELPER_SERVICES.geocode.push(geocoder);
        });
      }
    }

    // Use geometry service from the portal if none declared in config
    var geometryServiceURL;

    if (app.cfg.HELPER_SERVICES.geometry && app.cfg.HELPER_SERVICES.geometry.url) {
      geometryServiceURL = app.cfg.HELPER_SERVICES.geometry.url;
    }
    else if (app.portal.helperServices.geometry && app.portal.helperServices.geometry.url) {
      geometryServiceURL = app.portal.helperServices.geometry.url;
    }
    esriConfig.defaults.geometryService = new GeometryService(geometryServiceURL);

    // Use bing key from the portal if none declared in config
    if (! app.cfg.BING_MAPS_KEY && app.portal.bingKey) {
      app.cfg.BING_MAPS_KEY = app.portal.bingKey;
    }

    // Disable feature service creation as Portal for ArcGIS 10.2 doesn't support that yet
    if (app.portal.isPortal && app.cfg && app.cfg.AUTHORIZED_IMPORT_SOURCE) {
      app.cfg.AUTHORIZED_IMPORT_SOURCE.featureService = false;
    }

    app.isPortal = !! app.portal.isPortal;

    // Help URL on Portal for ArcGIS
    if (app.isPortal && app.portal.helpBase && app.portal.portalHostname) {
      // app.cfg.HELP_URL_PORTAL contains the page in the help doc
      // app.portal.helpBase contains the path to the home of help
      // app.portal.helpBase should always be relative to the hostname and include the optional portal instance name
      // app.portal.portalHostname also include the portal instance name so we remove it first

      // Skip if the URL is already a full path
      if (! app.cfg.HELP_URL_PORTAL.match('^//')) {
        var portalHost = app.portal.portalHostname.split('/')[0];

        app.cfg.HELP_URL_PORTAL = '//' + portalHost + app.portal.helpBase + app.cfg.HELP_URL_PORTAL;
      }
    }
  }

  return {
    init: init,
    isProd: isProd,
    appInitComplete: appInitComplete,

    loadWebMap: loadWebMap,
    hasSwitchBuilderButton: hasSwitchBuilderButton,

    zoomToDeviceLocation: zoomToDeviceLocation,

    cleanLoadingTimeout: cleanLoadingTimeout,
    initError: initError,
    replaceInitErrorMessage: replaceInitErrorMessage,
    portalLogin: portalLogin
  };
});


define('lib-build/less!storymaps-react/tpl/view/media/Text',[],function(){});
define('storymaps-react/tpl/view/media/Text',['module', 'exports', 'lib-build/less!./Text'], function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Text = function () {
    function Text(text) {
      _classCallCheck(this, Text);

      this.type = 'text';
      this._text = text;
    }

    _createClass(Text, [{
      key: 'check',
      value: function check(context) {
        if (!this._text || !context) {
          console.log('Could not render text block in section');
          return false;
        }

        if (context.placement != 'block') {
          console.log('Could not render text block in section');
          return false;
        }

        return true;
      }
    }, {
      key: 'render',
      value: function render(context) {
        if (!this.check(context)) {
          return null;
        }

        return this._text.value;
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        //
      }
    }, {
      key: 'update',
      value: function update() {
        //
      }
    }, {
      key: 'load',
      value: function load() {
        //
      }
    }, {
      key: 'performAction',
      value: function performAction() {
        //
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        return [];
      }
    }, {
      key: 'getPreviewText',
      value: function getPreviewText() {
        return $(this._text.value).html();
      }
    }]);

    return Text;
  }();

  exports.default = Text;
  module.exports = exports['default'];
});
//# sourceMappingURL=Text.js.map
;
define('storymaps/tpl/utils/UI',[

], function(

) {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  return {
    isMobileBrowser: function() {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i).test(navigator.userAgent);
    },
    hasWebGL: function(returnContext) {
      if (!!window.WebGLRenderingContext) {
        var canvas = document.createElement('canvas'),
            names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'],
            context = false;

        for (var i = 0;i < 4;i++) {
          try {
            context = canvas.getContext(names[i]);
            if (context && typeof context.getParameter == 'function') {
              // WebGL is enabled
              if (returnContext) {
                // return WebGL object if the function's argument is present
                return {name: names[i], gl: context};
              }
              // else, return just true
              return true;
            }
          }
          catch (e) {
            //
          }
        }

        // WebGL is supported, but disabled
        return false;
      }

      // WebGL not supported
      return false;
    },
    addCSSRule: function(style, styleNodeIdAttr, targetIframeNode) {
      var target = 'head';

      //if( has("ie") <= 8 )
      //  return;

      if (targetIframeNode) {
        target = targetIframeNode.contents().find('head');
      }

      if (styleNodeIdAttr) {
        var styleNode = $(target).find('#' + styleNodeIdAttr).eq(0);

        if (styleNode.length) {
          styleNode.html(style);
          return;
        }
      }

      $('<style>')
        .prop('type', 'text/css')
        .attr('id', styleNodeIdAttr)
        .html(style)
        .appendTo(target);
    },
    getUID: function() {
      return Date.now()
        + '-' + s4() + s4()
        + '-' + s4()
        + '-' + s4()
        + '-' + s4()
        + '-' + s4() + s4() + s4();
    }
  };
});

define('text',{});
/*!

 handlebars v2.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/

define(
  'handlebars/safe-string',["exports"],
  function(__exports__) {
    
    // Build out our basic SafeString type
    function SafeString(string) {
      this.string = string;
    }

    SafeString.prototype.toString = function() {
      return "" + this.string;
    };

    __exports__["default"] = SafeString;
  });
define(
  'handlebars/utils',["./safe-string","exports"],
  function(__dependency1__, __exports__) {
    
    /*jshint -W004 */
    var SafeString = __dependency1__["default"];

    var escape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };

    var badChars = /[&<>"'`]/g;
    var possible = /[&<>"'`]/;

    function escapeChar(chr) {
      return escape[chr];
    }

    function extend(obj /* , ...source */) {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
            obj[key] = arguments[i][key];
          }
        }
      }

      return obj;
    }

    __exports__.extend = extend;var toString = Object.prototype.toString;
    __exports__.toString = toString;
    // Sourced from lodash
    // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
    var isFunction = function(value) {
      return typeof value === 'function';
    };
    // fallback for older versions of Chrome and Safari
    /* istanbul ignore next */
    if (isFunction(/x/)) {
      isFunction = function(value) {
        return typeof value === 'function' && toString.call(value) === '[object Function]';
      };
    }
    var isFunction;
    __exports__.isFunction = isFunction;
    /* istanbul ignore next */
    var isArray = Array.isArray || function(value) {
      return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
    };
    __exports__.isArray = isArray;

    function escapeExpression(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof SafeString) {
        return string.toString();
      } else if (string == null) {
        return "";
      } else if (!string) {
        return string + '';
      }

      // Force a string conversion as this will be done by the append regardless and
      // the regex test will do this transparently behind the scenes, causing issues if
      // an object's to string has escaped characters in it.
      string = "" + string;

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    }

    __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
      if (!value && value !== 0) {
        return true;
      } else if (isArray(value) && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }

    __exports__.isEmpty = isEmpty;function appendContextPath(contextPath, id) {
      return (contextPath ? contextPath + '.' : '') + id;
    }

    __exports__.appendContextPath = appendContextPath;
  });
define(
  'handlebars/exception',["exports"],
  function(__exports__) {
    

    var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

    function Exception(message, node) {
      var line;
      if (node && node.firstLine) {
        line = node.firstLine;

        message += ' - ' + line + ':' + node.firstColumn;
      }

      var tmp = Error.prototype.constructor.call(this, message);

      // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
      for (var idx = 0; idx < errorProps.length; idx++) {
        this[errorProps[idx]] = tmp[errorProps[idx]];
      }

      if (line) {
        this.lineNumber = line;
        this.column = node.firstColumn;
      }
    }

    Exception.prototype = new Error();

    __exports__["default"] = Exception;
  });
define(
  'handlebars/base',["./utils","./exception","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    
    var Utils = __dependency1__;
    var Exception = __dependency2__["default"];

    var VERSION = "2.0.0";
    __exports__.VERSION = VERSION;var COMPILER_REVISION = 6;
    __exports__.COMPILER_REVISION = COMPILER_REVISION;
    var REVISION_CHANGES = {
      1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
      2: '== 1.0.0-rc.3',
      3: '== 1.0.0-rc.4',
      4: '== 1.x.x',
      5: '== 2.0.0-alpha.x',
      6: '>= 2.0.0-beta.1'
    };
    __exports__.REVISION_CHANGES = REVISION_CHANGES;
    var isArray = Utils.isArray,
        isFunction = Utils.isFunction,
        toString = Utils.toString,
        objectType = '[object Object]';

    function HandlebarsEnvironment(helpers, partials) {
      this.helpers = helpers || {};
      this.partials = partials || {};

      registerDefaultHelpers(this);
    }

    __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
      constructor: HandlebarsEnvironment,

      logger: logger,
      log: log,

      registerHelper: function(name, fn) {
        if (toString.call(name) === objectType) {
          if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
          Utils.extend(this.helpers, name);
        } else {
          this.helpers[name] = fn;
        }
      },
      unregisterHelper: function(name) {
        delete this.helpers[name];
      },

      registerPartial: function(name, partial) {
        if (toString.call(name) === objectType) {
          Utils.extend(this.partials,  name);
        } else {
          this.partials[name] = partial;
        }
      },
      unregisterPartial: function(name) {
        delete this.partials[name];
      }
    };

    function registerDefaultHelpers(instance) {
      instance.registerHelper('helperMissing', function(/* [args, ]options */) {
        if(arguments.length === 1) {
          // A missing field in a {{foo}} constuct.
          return undefined;
        } else {
          // Someone is actually trying to call something, blow up.
          throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
        }
      });

      instance.registerHelper('blockHelperMissing', function(context, options) {
        var inverse = options.inverse,
            fn = options.fn;

        if(context === true) {
          return fn(this);
        } else if(context === false || context == null) {
          return inverse(this);
        } else if (isArray(context)) {
          if(context.length > 0) {
            if (options.ids) {
              options.ids = [options.name];
            }

            return instance.helpers.each(context, options);
          } else {
            return inverse(this);
          }
        } else {
          if (options.data && options.ids) {
            var data = createFrame(options.data);
            data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
            options = {data: data};
          }

          return fn(context, options);
        }
      });

      instance.registerHelper('each', function(context, options) {
        if (!options) {
          throw new Exception('Must pass iterator to #each');
        }

        var fn = options.fn, inverse = options.inverse;
        var i = 0, ret = "", data;

        var contextPath;
        if (options.data && options.ids) {
          contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
        }

        if (isFunction(context)) { context = context.call(this); }

        if (options.data) {
          data = createFrame(options.data);
        }

        if(context && typeof context === 'object') {
          if (isArray(context)) {
            for(var j = context.length; i<j; i++) {
              if (data) {
                data.index = i;
                data.first = (i === 0);
                data.last  = (i === (context.length-1));

                if (contextPath) {
                  data.contextPath = contextPath + i;
                }
              }
              ret = ret + fn(context[i], { data: data });
            }
          } else {
            for(var key in context) {
              if(context.hasOwnProperty(key)) {
                if(data) {
                  data.key = key;
                  data.index = i;
                  data.first = (i === 0);

                  if (contextPath) {
                    data.contextPath = contextPath + key;
                  }
                }
                ret = ret + fn(context[key], {data: data});
                i++;
              }
            }
          }
        }

        if(i === 0){
          ret = inverse(this);
        }

        return ret;
      });

      instance.registerHelper('if', function(conditional, options) {
        if (isFunction(conditional)) { conditional = conditional.call(this); }

        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      });

      instance.registerHelper('unless', function(conditional, options) {
        return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
      });

      instance.registerHelper('with', function(context, options) {
        if (isFunction(context)) { context = context.call(this); }

        var fn = options.fn;

        if (!Utils.isEmpty(context)) {
          if (options.data && options.ids) {
            var data = createFrame(options.data);
            data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
            options = {data:data};
          }

          return fn(context, options);
        } else {
          return options.inverse(this);
        }
      });

      instance.registerHelper('log', function(message, options) {
        var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
        instance.log(level, message);
      });

      instance.registerHelper('lookup', function(obj, field) {
        return obj && obj[field];
      });
    }

    var logger = {
      methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

      // State enum
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      level: 3,

      // can be overridden in the host environment
      log: function(level, message) {
        if (logger.level <= level) {
          var method = logger.methodMap[level];
          if (typeof console !== 'undefined' && console[method]) {
            console[method].call(console, message);
          }
        }
      }
    };
    __exports__.logger = logger;
    var log = logger.log;
    __exports__.log = log;
    var createFrame = function(object) {
      var frame = Utils.extend({}, object);
      frame._parent = object;
      return frame;
    };
    __exports__.createFrame = createFrame;
  });
define(
  'handlebars/runtime',["./utils","./exception","./base","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    
    var Utils = __dependency1__;
    var Exception = __dependency2__["default"];
    var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
    var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
    var createFrame = __dependency3__.createFrame;

    function checkRevision(compilerInfo) {
      var compilerRevision = compilerInfo && compilerInfo[0] || 1,
          currentRevision = COMPILER_REVISION;

      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = REVISION_CHANGES[currentRevision],
              compilerVersions = REVISION_CHANGES[compilerRevision];
          throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
                "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
                "Please update your runtime to a newer version ("+compilerInfo[1]+").");
        }
      }
    }

    __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

    function template(templateSpec, env) {
      /* istanbul ignore next */
      if (!env) {
        throw new Exception("No environment passed to template");
      }
      if (!templateSpec || !templateSpec.main) {
        throw new Exception('Unknown template object: ' + typeof templateSpec);
      }

      // Note: Using env.VM references rather than local var references throughout this section to allow
      // for external users to override these as psuedo-supported APIs.
      env.VM.checkRevision(templateSpec.compiler);

      var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
        if (hash) {
          context = Utils.extend({}, context, hash);
        }

        var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);

        if (result == null && env.compile) {
          var options = { helpers: helpers, partials: partials, data: data, depths: depths };
          partials[name] = env.compile(partial, { data: data !== undefined, compat: templateSpec.compat }, env);
          result = partials[name](context, options);
        }
        if (result != null) {
          if (indent) {
            var lines = result.split('\n');
            for (var i = 0, l = lines.length; i < l; i++) {
              if (!lines[i] && i + 1 === l) {
                break;
              }

              lines[i] = indent + lines[i];
            }
            result = lines.join('\n');
          }
          return result;
        } else {
          throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
        }
      };

      // Just add water
      var container = {
        lookup: function(depths, name) {
          var len = depths.length;
          for (var i = 0; i < len; i++) {
            if (depths[i] && depths[i][name] != null) {
              return depths[i][name];
            }
          }
        },
        lambda: function(current, context) {
          return typeof current === 'function' ? current.call(context) : current;
        },

        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,

        fn: function(i) {
          return templateSpec[i];
        },

        programs: [],
        program: function(i, data, depths) {
          var programWrapper = this.programs[i],
              fn = this.fn(i);
          if (data || depths) {
            programWrapper = program(this, i, fn, data, depths);
          } else if (!programWrapper) {
            programWrapper = this.programs[i] = program(this, i, fn);
          }
          return programWrapper;
        },

        data: function(data, depth) {
          while (data && depth--) {
            data = data._parent;
          }
          return data;
        },
        merge: function(param, common) {
          var ret = param || common;

          if (param && common && (param !== common)) {
            ret = Utils.extend({}, common, param);
          }

          return ret;
        },

        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
      };

      var ret = function(context, options) {
        options = options || {};
        var data = options.data;

        ret._setup(options);
        if (!options.partial && templateSpec.useData) {
          data = initData(context, data);
        }
        var depths;
        if (templateSpec.useDepths) {
          depths = options.depths ? [context].concat(options.depths) : [context];
        }

        return templateSpec.main.call(container, context, container.helpers, container.partials, data, depths);
      };
      ret.isTop = true;

      ret._setup = function(options) {
        if (!options.partial) {
          container.helpers = container.merge(options.helpers, env.helpers);

          if (templateSpec.usePartial) {
            container.partials = container.merge(options.partials, env.partials);
          }
        } else {
          container.helpers = options.helpers;
          container.partials = options.partials;
        }
      };

      ret._child = function(i, data, depths) {
        if (templateSpec.useDepths && !depths) {
          throw new Exception('must pass parent depths');
        }

        return program(container, i, templateSpec[i], data, depths);
      };
      return ret;
    }

    __exports__.template = template;function program(container, i, fn, data, depths) {
      var prog = function(context, options) {
        options = options || {};

        return fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths));
      };
      prog.program = i;
      prog.depth = depths ? depths.length : 0;
      return prog;
    }

    __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data, depths) {
      var options = { partial: true, helpers: helpers, partials: partials, data: data, depths: depths };

      if(partial === undefined) {
        throw new Exception("The partial " + name + " could not be found");
      } else if(partial instanceof Function) {
        return partial(context, options);
      }
    }

    __exports__.invokePartial = invokePartial;function noop() { return ""; }

    __exports__.noop = noop;function initData(context, data) {
      if (!data || !('root' in data)) {
        data = data ? createFrame(data) : {};
        data.root = context;
      }
      return data;
    }
  });
define(
  'handlebars.runtime',["./handlebars/base","./handlebars/safe-string","./handlebars/exception","./handlebars/utils","./handlebars/runtime","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    
    /*globals Handlebars: true */
    var base = __dependency1__;

    // Each of these augment the Handlebars object. No need to setup here.
    // (This is done to easily share code between commonjs and browse envs)
    var SafeString = __dependency2__["default"];
    var Exception = __dependency3__["default"];
    var Utils = __dependency4__;
    var runtime = __dependency5__;

    // For compatibility and usage outside of module systems, make the Handlebars object a namespace
    var create = function() {
      var hb = new base.HandlebarsEnvironment();

      Utils.extend(hb, base);
      hb.SafeString = SafeString;
      hb.Exception = Exception;
      hb.Utils = Utils;
      hb.escapeExpression = Utils.escapeExpression;

      hb.VM = runtime;
      hb.template = function(spec) {
        return runtime.template(spec, hb);
      };

      return hb;
    };

    var Handlebars = create();
    Handlebars.create = create;

    Handlebars['default'] = Handlebars;

    __exports__ = Handlebars['default'];
	return __exports__;
  });
// RequireJS Handlebars template plugin
// http://github.com/jfparadis/requirejs-handlebars
//
// An alternative to http://github.com/SlexAxton/require-handlebars-plugin/blob/master/hbs.js
//
// Using Handlebars Semantic templates at http://handlebarsjs.com
// Using and RequireJS text.js at http://requirejs.org/docs/api.html#text
// @author JF Paradis
// @version 0.0.2
//
// Released under the MIT license
//
// Usage:
//   require(['backbone', 'hbar!mytemplate'], function (Backbone, mytemplate) {
//     return Backbone.View.extend({
//       initialize: function(){
//         this.render();
//       },
//       render: function(){
//         this.$el.html(mytemplate({message: 'hello'}));
//     });
//   });
//
// Configuration: (optional)
//   require.config({
//     hbars: {
//       extension: '.hbar' // default = '.html'
//     }
//   });

/*jslint nomen: true */
/*global define: false */

define('lib-build/hbars',['text', 'Handlebars'], function (text, Handlebars) {
    'use strict';

    var buildMap = {},
        buildTemplateSource = "define('{pluginName}!{moduleName}', ['Handlebars'], function (Handlebars) { return Handlebars.template({content}); });\n";

    return {
        version: '0.0.2',

        load: function (moduleName, parentRequire, onload, config) {
            config = config || {};
			if (buildMap[moduleName]) {
                onload(buildMap[moduleName]);

            } else {
                var ext = (config.hbars && config.hbars.extension) || '.hbs',
                    path = (config.hbars && config.hbars.path) || '',
                    compileOptions = (config.hbars && config.hbars.compileOptions) || {},
                    textOnload = function (source) {
                        if (config.isBuild) {
                            // We store the precompiled template so we can use the
                            // handlebars.runtime after build.
                            buildMap[moduleName] = Handlebars.precompile(source, compileOptions);
                            // Don't bother doing anything else during build.
                            onload();
                        } else {
                            // We store the compiled template for reuse
                            buildMap[moduleName] = Handlebars.compile(source);
                            onload(buildMap[moduleName]);
                        }
                    };

                textOnload.error = onload.error;
                text.load(path + moduleName + ext, parentRequire, textOnload, config);
            }
        },

        write: function (pluginName, moduleName, write, config) {
            var content = buildMap[moduleName];
            if (content) {
                write.asModule(pluginName + '!' + moduleName,
                    buildTemplateSource
                    .replace('{pluginName}', pluginName)
                    .replace('{moduleName}', moduleName)
                    .replace('{content}', content));
            }
        }
    };
});

define('lib-build/hbars!storymaps-react/tpl/view/media/MediaError', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"loading-error\">\r\n  <div class=\"loading-error-wrapper\">\r\n    <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\r\n    Sorry, this content is not accessible\r\n  </div>\r\n</div>\r\n";
  },"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/media/MediaError',[],function(){});
define('storymaps-react/tpl/view/media/Media',['module', 'exports', 'storymaps/tpl/utils/UI', 'storymaps/common/utils/CommonHelper', 'dojo/topic', 'esri/IdentityManager', 'lib-build/hbars!./MediaError', 'lib-build/less!./MediaError'], function (module, exports, _UI, _CommonHelper, _topic, _IdentityManager, _MediaError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _UI2 = _interopRequireDefault(_UI);

  var _CommonHelper2 = _interopRequireDefault(_CommonHelper);

  var _topic2 = _interopRequireDefault(_topic);

  var _IdentityManager2 = _interopRequireDefault(_IdentityManager);

  var _MediaError2 = _interopRequireDefault(_MediaError);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Media = function () {
    function Media() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Media);

      this.type = params.type;
      this.id = params.id;

      this.previewThumb = params.previewThumb;
      this.previewIcon = params.previewIcon;

      /*
       * Cache store media resources to optimize performance when a media can be reused
       * - in an immersive section: all background are sharing the same cache: so a webmap/webscene is only loaded once
       * - in a sequential section: block media are not using the cache yet
       *   - this could be implemented for webscene using 4.x: the map is common but the view are specific
       *     - if media placement is background -> the map and view are saved in the cache
       *     - if media placement is block -> the map is saved but in the cache but the view is not
       *   - this is not doable for webmap before 4.x
       */
      this._cache = {};
      this._isLoaded = false;
      this._alternateMedia = null;

      this._node = null;
      this._domID = _UI2.default.getUID();

      /*
       * Builder
       */

      this._isUploadPending = false;
      this._builderConfigurationTabs = [];
      this._onConfigAction = null;
    }

    _createClass(Media, [{
      key: 'postCreate',
      value: function postCreate(params) {
        // TODO: should find the node here?

        this._builderConfigurationTabs = params.builderConfigurationTabs || [];
        this._onConfigAction = params.onConfigAction;
        this._onConfigChangeCallback = params.onConfigChange;
      }
    }, {
      key: 'setCache',
      value: function setCache(cache) {
        this._cache = cache;
      }
    }, {
      key: 'setAlternate',
      value: function setAlternate(alternateMedia) {
        this._alternateMedia = alternateMedia;
      }
    }, {
      key: 'getAlternate',
      value: function getAlternate() {
        return this._alternateMedia;
      }
    }, {
      key: 'getPreviewThumbnail',
      value: function getPreviewThumbnail() {
        return Media.addToken(this.previewThumb);
      }
    }, {
      key: 'getPreviewIcon',
      value: function getPreviewIcon() {
        return this.previewIcon;
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig(options) {
        if (this._placement == 'block') {
          options.size = options.size || 'medium';

          var classes = $.map(this._node.attr('class').split(' '), function (l) {
            return l.match(/block-size-/) ? l : null;
          }).join(' ');

          this._node.removeClass(classes).addClass('block-size-' + options.size);
        }
      }
    }, {
      key: '_onEnableButtonClick',
      value: function _onEnableButtonClick(e) {
        var btn = $(e.currentTarget);

        btn.toggleClass('enabled');
        this._node.toggleClass('interaction-enabled');
      }
    }, {
      key: 'showLoadingError',
      value: function showLoadingError() {
        this._node.append((0, _MediaError2.default)({})).addClass('has-loading-error bg-danger');
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        var arcgisContent = [];

        if (this.type == 'webmap' || this.type == 'webscene') {
          arcgisContent = [{
            type: this.type,
            id: this.id
          }];
        } else if (this.type == 'image') {
          var arcgisResourceURL = Media.getArcGISItemResourceURL(this._url);

          if (arcgisResourceURL) {
            arcgisContent = [{
              type: 'item-resource',
              mediaType: this.type,
              url: arcgisResourceURL.url,
              file: arcgisResourceURL.file
            }];
          }
        } else if (this.type == 'image-gallery') {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._images.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var image = _step.value;

              var _arcgisResourceURL = Media.getArcGISItemResourceURL(image.url);

              if (_arcgisResourceURL) {
                arcgisContent.push({
                  type: 'item-resource',
                  mediaType: this.type,
                  url: _arcgisResourceURL.url,
                  file: _arcgisResourceURL.file
                });
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        return arcgisContent;
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
      }
    }, {
      key: 'postLoad',
      value: function postLoad() {}
      //


      /*
       * Builder
       */

    }, {
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: 'getAuthorizedTransitionsWith',
      value: function getAuthorizedTransitionsWith() {
        return [];
      }
    }, {
      key: 'initBuilderUI',
      value: function initBuilderUI() {
        if (this._placement == 'block') {
          this._node.find('.media-delete').html('<div class="media-delete-background"></div><i class="media-delete-icon config-icon fa fa-trash-o"></i>');
          this._node.find('.media-delete-icon').click(function () {
            this._onAction('remove');
          }.bind(this));
        }
      }
    }, {
      key: 'isConfigActive',
      value: function isConfigActive() {
        return this._node.hasClass('config-panel-active');
      }
    }, {
      key: 'closeConfigPanel',
      value: function closeConfigPanel() {
        this._node.removeClass('config-panel-active');
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this._node.remove();
      }
    }, {
      key: 'remove',
      value: function remove() {
        this._node.remove();
      }
    }, {
      key: 'isPlaceholder',
      value: function isPlaceholder() {
        return false;
      }
    }, {
      key: '_onAction',
      value: function _onAction(action, newMedia) {
        // TODO: does that need to be checked?
        if (action == 'remove' || action == 'swap' || action == 'image-to-image-gallery' || action == 'image-gallery-to-image') {
          this._onConfigAction({
            action: action,
            media: this,
            newMedia: newMedia
          });
        }

        this._onConfigChange();
      }
    }, {
      key: '_onConfigChange',
      value: function _onConfigChange() {
        _topic2.default.publish('builder-media-update');

        if (this._onConfigChangeCallback) {
          this._onConfigChangeCallback();
        }
      }
    }], [{
      key: 'getArcGISItemResourceURL',
      value: function getArcGISItemResourceURL() {
        var url = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        var urlClean = decodeURIComponent(url);

        var urlMatch = urlClean.match(new RegExp('\/sharing\/rest\/content\/items\/' + app.data.appItem.item.id + '\/resources\/(.*)$'));
        if (urlMatch && urlMatch.length == 2) {
          return {
            url: urlClean,
            file: urlMatch[1]
          };
        }

        return null;
      }
    }, {
      key: 'addToken',
      value: function addToken(url) {
        var mayNeedToken = app.data.appItem && app.data.appItem.item.access != 'public' && app.data.appItem.item.id && url;

        if (!mayNeedToken) {
          return url;
        }

        var token = '';

        if (app.portal && app.portal.getPortalUser()) {
          token = app.portal.getPortalUser().credential.token;
        } else if (_IdentityManager2.default.findCredential(document.location.origin)) {
          token = _IdentityManager2.default.findCredential(document.location.origin).token;
        } else {
          token = _CommonHelper2.default.getCookieToken();
        }

        if (url.match(new RegExp('\/sharing\/rest\/content\/items\/' + app.data.appItem.item.id + '\/resources\/'))) {
          return url + '?token=' + token;
        }

        return url;
      }
    }, {
      key: 'findCropDistance',
      value: function findCropDistance(item, container, offsetRatio) {
        var containerWidth = container.width();
        var containerHeight = container.height();
        var containerAspectRatio = containerWidth / containerHeight;
        var itemAspectRatio = item.width / item.height;
        var transferBy = {
          x: 0,
          y: 0
        };
        var amountToMove = 0;

        // transfer the item over...
        // if the item's width-height ratio is less than the target element (target is wider), height is cropped and width fills (so we don't want to change the x-offset).
        var shouldPanX = itemAspectRatio > containerAspectRatio;
        var shouldPanY = itemAspectRatio < containerAspectRatio;

        if (shouldPanY) {
          // transfer it by that much (so it's in top left), then do it by the center
          // the item is as wide as the container, as tall as container * aspectRatio...
          var itemTargetHeight = containerWidth / itemAspectRatio;
          amountToMove = this.getDimensionAmount(itemTargetHeight, containerHeight, offsetRatio.y);

          transferBy.x = 0;
          transferBy.y = amountToMove;
        }
        // if it's greater (target is taller), height fills and width is cropped (so we won't want to change y-offset).
        else if (shouldPanX) {
            var itemTargetWidth = containerHeight * itemAspectRatio;
            amountToMove = this.getDimensionAmount(itemTargetWidth, containerWidth, offsetRatio.x);

            transferBy.x = amountToMove;
            transferBy.y = 0;
          }
          // if it's the same, we don't want to offset at all.
          else {
              transferBy.x = 0;
              transferBy.y = 0;
            }

        return transferBy;
      }
    }, {
      key: 'getDimensionAmount',
      value: function getDimensionAmount(itemTargetDimension, containerDimension, offsetRatio) {
        // find the focus point on the target item, in pixels
        var focusPoint = itemTargetDimension * offsetRatio;
        // to have that point centered, you'd have to translate the item by the amount here:
        var amountToMove = (focusPoint - containerDimension / 2) * -1;

        // but if centering it would make the item translate "into" the container so it's not all showing, have it move to the near edge only.
        if (amountToMove > 0) {
          amountToMove = 0;
        }
        // conversely, if centering would make the item translate "through" the container so far that some of it would not be showing, have it move so it's translated through only to the far edge (and no more).
        else if (itemTargetDimension - amountToMove * -1 < containerDimension) {
            amountToMove = (itemTargetDimension - containerDimension) * -1;
          }
        return amountToMove;
      }
    }, {
      key: 'getTargetDimensions',
      value: function getTargetDimensions(rawItemDimensions, containerDimensions) {
        var itemDimensions = {
          width: 0,
          height: 0
        };
        var rawItemAspectRatio = rawItemDimensions.width / rawItemDimensions.height;
        var containerAspectRatio = containerDimensions.width / containerDimensions.height;

        if (rawItemAspectRatio > containerAspectRatio) {
          // it's wider, so the height is the same
          itemDimensions.height = containerDimensions.height;
          itemDimensions.width = containerDimensions.height * rawItemAspectRatio;
        } else {
          // it's taller, so the widths are the same..
          itemDimensions.width = containerDimensions.width;
          itemDimensions.height = containerDimensions.width / rawItemAspectRatio;
        }

        return itemDimensions;
      }
    }]);

    return Media;
  }();

  exports.default = Media;
  module.exports = exports['default'];
});
//# sourceMappingURL=Media.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/ImageBlock', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\"false\">\r\n  <div class=\"block-media\">\r\n    <div class=\"media-loading\">\r\n      <span class=\"large-loader\"></span>\r\n    </div>\r\n    <div class=\"image-container\" style=\"padding-top: "
    + escapeExpression(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"padding","hash":{},"data":data}) : helper)))
    + "%\"></div>\r\n    <div class=\"builder-ui media-cfg-invite\"></div>\r\n    <div class=\"builder-ui img-gallery-invite\">\r\n      <div class=\"img-gallery-invite-background\"></div>\r\n      <i class=\"img-gallery-add fa fa-plus\" aria-hidden=\"true\" data-toggle=\"tooltip\"></i>\r\n    </div>\r\n    <div class=\"builder-ui media-delete\"></div>\r\n  </div>\r\n  <div class=\"block-caption\" data-placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\""
    + escapeExpression(((helper = (helper = helpers.captionEditable || (depth0 != null ? depth0.captionEditable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"captionEditable","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n  <div class=\"builder-ui media-cfg-panel\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/ImageBackground', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"media-loading\">\r\n  <span class=\"large-loader\"></span>\r\n</div>\r\n<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n<!--<div class=\"caption\">"
    + escapeExpression(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper)))
    + "</div>-->\r\n<div class=\"builder-ui media-cfg-invite\"></div>\r\n<div class=\"builder-ui media-cfg-panel\"></div>\r\n";
},"useData":true}); });

define('resources/tpl/builder/nls/app',{
	root: ({
		builder: {
			dialog: {
				apply: "Apply",
				close: "Close"
			},
			header: {
				defaultTagline: "A ${STORY_MAP}",
				sharingNotAvailable: "This is not available until you share the story",
				edit: "Edit"
			},
			headerConfig: {
				toggles: {
					bookmarks: "Bookmarks",
					logoSharing: "Logo & Sharing"
				},
				bookmarks: {
					title: "Section",
					bookmark: "Bookmark",
					intro: "Bookmarks are links to story sections that are shown in the header. Creating concise bookmarks for the main sections of your story helps readers get oriented.",
					sequentialDefault: "Sequential section (no text found)",
					immersiveDefault: "Immersive section (no text found)",
					titleDefault: "Title section (no text found)",
					coverDefault: "Cover section (no text found)",
					coverAppendage: "(Cover)"
				},
				logoSharing: {
					logo: "Logo",
					logoButton: "Use ${ESRI} Logo",
					logoLink: "Logo link",
					logoUploadProgress: "Logo upload in progress",
					logoUploadSuccess: "Logo uploaded successfully",
					logoUploadError: "Logo upload failed, switching back to ${ESRI} logo",
					customHeaderText: "Tagline",
					taglineLinkDisabledTooltip: "Enter a tagline to enable the link",
					link: "Tagline link",
					enableSocialSharing: "Display sharing button"
				}
			},
			builderPanel: {
				coverLabel: "Cover",
				creditsLabel: "Credits",
				betaFeedback: "Beta feedback",
				betaNote: "${APP_NAME} is in beta. Please let us know what you think or if something is not working as you expected.",
				notSharedNote: "Your story isn't shared, only you can see it",
				organizationWarning: "To ensure this story can be seen by others when shared with your organization, you must also share its maps, scenes, layers, or apps with your organization using the check story button below.",
				publicWarning: "To ensure this story can be seen by others when shared publicly, you must also share its maps, scenes, layers, or apps publicly using the check story button below.",
				addTitleNote: "Add a title for your story on the cover to save",
				saveError: "There was an error saving your story.",
				organize: "Organize",
				done: "Done"
			},
			immersiveViewPanel: {
				transition: "Transition",
				fade: "Fade",
				fadeSlow: "Fade Slow",
				swipeVertical: "Swipe Vertical",
				swipeHorizontal: "Swipe Horizontal",
				none: "None",
				disabledConsecutiveSameMedia: "Not available when consecutive views use the same media",
				disabledTooltipMap: "To use this transition the visible layers in both views must be different and the other map properties must be the same",
				disabledConsecutiveSameMap: "Not available when consecutive views use the same map",
				disabledNotInBeta: "Not available in beta",
				disabledNonConsecutive: "Not available as there is another occurence of this media that is non consecutive",
				addMedia: "Add media"
			},
			mediaConfig: {
				tabs: {
					appearance: "Appearance",
					manage: "Manage",
					size: "Size",
					background: "Background"
				},
				manage: {
					changeMedia: "Change media",
					edit: "Edit",
					editAside: "Opens in a new browser tab. After saving your edits, save and reload this story to see your changes.",
					remove: "Remove"
				},
				appearance: {
					homeView: "Initial view",
					audio: "Audio",
					on: "On",
					muted: "Muted",
					volumeAside: "The video will autoplay when a reader arrives at this view. If you mute the sound, the reader will not be able to enable it.",
					view: "View",
					resetLocation: "Reset Location",
					resetLayers: "Reset Layers",
					clearPopup: "Clear Pop-Up",
					interaction: "Interaction",
					interactionDisabled: "Interaction Disabled",
					buttonToEnable: "Button to Enable",
					interactionEnabled: "Interaction Enabled",
					interactionAside: "*Touch devices will show an interaction button.",
					slide: "Slide",
					noSlides: "No slides available."
				},
				mediaAppearance: {
					layout: "Layout"
				},
				size: {
					small: "Small",
					medium: "Medium",
					large: "Large"
				},
				background: {
					noCrop: "Do not crop image",
					mostImportantPart: "Choose the most important point",
					cropExplanationImmersive: "Select a point on the image to choose how your image will be cropped at different screen sizes. The point you select will always be visible. Check the box below if your media needs to be fully visible.",
					cropExplanation: "Select a point on the image to choose how your image will be cropped at different screen sizes. The point you select will always be visible.",
					previews: "Previews"
				}
			},
			imageGallery: {
				reachedLimit: "Only four images are allowed in a row. To start a new row, add another image below.",
				addImage: "Add another image to this row"
			},
			cover: {
				titlePrompt: "Enter your story title...",
				subtitlePrompt: "Scroll down to get started or enter an optional subtitle",
				mediaPlaceholder: "Add your image or video",
				saveError: "Save failed, you already have an item with this title"
			},
			credits: {
				warning: "Both fields must be filled out",
				content: "Content...",
				source: "Source...",
				linkPrompt: "Optional link...",
				introductionPlaceholder: "Enter an optional introduction to your credits section..."
			},
			media: {
				captionPlaceholder: "Your caption here..."
			}
    }
  }),
	"ar": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"hr": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1,
	"zh-tw": 1
});



define('lib-build/less!storymaps-react/tpl/view/media/Image',[],function(){});
define('storymaps-react/tpl/view/media/Image',['module', 'exports', './Media', 'lib-build/hbars!./ImageBlock', 'lib-build/hbars!./ImageBackground', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'storymaps/tpl/utils/UI', 'dojo/Deferred', 'lib-build/less!./Image'], function (module, exports, _Media2, _ImageBlock, _ImageBackground, _app, _UI, _Deferred) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _ImageBlock2 = _interopRequireDefault(_ImageBlock);

  var _ImageBackground2 = _interopRequireDefault(_ImageBackground);

  var _app2 = _interopRequireDefault(_app);

  var _UI2 = _interopRequireDefault(_UI);

  var _Deferred2 = _interopRequireDefault(_Deferred);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/image.jpg';
  var PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/image.png';

  var BLOCK_WIDTH_SMALL = 0.4;
  var BLOCK_WIDTH_MEDIUM = 0.8;
  var BLOCK_HEIGHT_FOR_CAPTION = 200;

  var Image = function (_Media) {
    _inherits(Image, _Media);

    function Image(image) {
      _classCallCheck(this, Image);

      // sizes is an array of objects with {height, width, url}.
      if (image.sizes) {
        (function () {
          var screenWidth = window.screen.width;

          // sort sizes arr by longestSide, with largest first.
          image.sizes.forEach(function (sizeObj) {
            sizeObj.longestSide = Math.max(sizeObj.width, sizeObj.height);
          });
          image.sizes.sort(function (a, b) {
            if (b.longestSide === a.longestSide) {
              return Math.min(b.width, b.height) - Math.min(a.width, a.height);
            }
            // what if they're the same? then compare shorter side...?
            return b.longestSide - a.longestSide;
          });

          // find the size who's longest side is closest to, without going too far over,
          // the screen width. (remember, image.sizes is already sorted, descending order)
          var mainTarget = void 0,
              previewTarget = void 0;
          image.sizes.every(function (sizeObj) {
            if (sizeObj.longestSide > screenWidth - 50) {
              mainTarget = sizeObj;
              return true;
            }
            return false;
          });

          // find the size who's longest side is closest to 250px
          image.sizes.every(function (sizeObj) {
            if (sizeObj.longestSide >= 250) {
              previewTarget = sizeObj;
              return true;
            }
            return false;
          });

          // just in case the sizes object wasn't properly formatted, check for mainTarget.
          if (mainTarget) {
            image.url = mainTarget.url;
            image.width = mainTarget.width;
            image.height = mainTarget.height;
          }
          if (previewTarget) {
            image.thumbUrl = previewTarget.url;
          }
        })();
      }
      var id = image.url;

      if (image.dataUrl && image.uploadDeferred) {
        id = _UI2.default.getUID();
      }

      var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, {
        type: 'image',
        id: id,
        previewThumb: image.thumbUrl || image.dataUrl || image.url || PREVIEW_THUMB,
        previewIcon: PREVIEW_ICON
      }));

      _this._image = image;
      _this._url = image.url;
      _this._placement = null;

      // TODO: shouldn't be needed
      if (!_this._image.options) {
        _this._image.options = {};
      }

      if (image.dataUrl && image.uploadDeferred) {
        _this._isUploadPending = true;
        _this._url = image.dataUrl;

        delete _this._image.dataUrl;

        image.uploadDeferred.then(_this._onUploadSuccess.bind(_this), _this._onUploadFail.bind(_this));
      }
      return _this;
    }

    _createClass(Image, [{
      key: 'render',
      value: function render(context) {
        var output = '',
            options = [];

        if (!this._image || !context) {
          console.log('Could not render image in section');
          return output;
        }

        this._placement = context.placement;

        /*
        if (this._image.href) {
          options.push('has-link');
        }
        */

        if (this._placement == 'block') {
          var style = this._computeBlockStyle();

          options.push('block-size-' + style.size);

          // This set a max-height in CSS that is needed for large image
          if (style.fitHeight) {
            options.push('fit-height');
          }
          output += (0, _ImageBlock2.default)({
            id: this._domID,
            classes: ['block', 'image'].concat(options).join(' '),
            padding: style.padding,
            caption: this._image.caption,
            placeholder: _app2.default.builder.media.captionPlaceholder,
            captionEditable: app.isInBuilder
          });
        } else if (context.placement == 'background') {
          if (_UI2.default.isMobileBrowser() && this._image.alternate) {
            this._image.url = this._image.alternate;
            this._url = this._image.url;
          }

          output += (0, _ImageBackground2.default)({
            id: this._domID,
            classes: ['image', 'image-background'].join(' '),
            caption: this._image.caption
          });
        }

        return output;
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'postCreate', this).call(this, params);

        if (!params.container) {
          return;
        }

        /*
         * Background Image behave a little differently than other medias because
         *  - they can be in the story while they are getting uploaded and we need to support duplicate of it's view/section
         *  - in Immersive you may want to use the same image twice in the section and have different transition
         * So background Image are always duplicated inside the section
         * That's ok as browser will cache them
         */
        if (this._placement == 'block') {
          this._node = params.container.find('#' + this._domID);
        } else {
          this._node = params.container.find('#' + this._domID).parent();
        }

        if (this._isUploadPending) {
          this._onUploadStart();
        }

        this._applyConfig();
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig() {
        var options = this._image.options;

        this._applyPlacement();

        // Test
        options.size = options.size || 'small';

        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), '_applyConfig', this).call(this, options);
      }
    }, {
      key: '_applyPlacement',
      value: function _applyPlacement() {
        if (this._image.options && this._image.options.placement) {
          var backgroundImage = this._node.find('.image-background');
          var placement = this._image.options.placement;
          // only things with these properties explicitly set should be applied
          if (placement.type === 'fill') {
            backgroundImage.css('background-size', 'cover');

            // if there's also a particular placement of the image, apply that (else just center the image)
            if (placement.fill) {
              var containerDimensions = {
                width: backgroundImage.width(),
                height: backgroundImage.height()
              };
              var rawItemDimensions = {
                width: this._image.width,
                height: this._image.height
              };
              var itemDimensions = _Media3.default.getTargetDimensions(rawItemDimensions, containerDimensions);
              var cropDistance = _Media3.default.findCropDistance(itemDimensions, backgroundImage, placement.fill);

              backgroundImage.css('background-position', cropDistance.x + 'px ' + cropDistance.y + 'px');
            } else {
              backgroundImage.css('background-position', '50% 50%');
            }
          } else if (placement.type === 'fit') {
            backgroundImage.css('background-color', placement.fit.color);
            backgroundImage.css('background-size', 'contain');
            backgroundImage.css('background-position', '50% 50%');
          }
        }
      }
    }, {
      key: 'preload',
      value: function preload() {
        var resultDeferred = new _Deferred2.default();

        var im = new window.Image();

        im.onload = function (e) {
          var width = e.currentTarget.naturalWidth,
              height = e.currentTarget.naturalHeight;

          resultDeferred.resolve({
            width: width,
            height: height
          });
        }.bind(this);

        im.onerror = this.showLoadingError.bind(this);

        im.src = _Media3.default.addToken(this._url);

        return resultDeferred;
      }
    }, {
      key: 'load',
      value: function load() {
        var resultDeferred = new _Deferred2.default();

        if (this._isLoaded || !this._node) {
          //resultDeferred.reject();
          return resultDeferred;
        }

        this._isLoaded = true;

        // Preload to get/update image dimension and hide loading indicator
        this.preload().then(function (p) {
          if (p && p.width && p.height) {
            this._image.width = p.width;
            this._image.height = p.height;

            this._node.find('.image-container').css('padding-top', this._computeBlockStyle().padding + '%');
          }
          this._node.find('.media-loading').hide();
        }.bind(this));

        if (this._placement == 'block') {
          this._node.find('.image-container').css('backgroundImage', 'url("' + _Media3.default.addToken(this._url) + '")');

          /*
          if (this._image.href) {
            this._node.find('img').click(function() {
              window.open(this._image.href, '_blank');
            });
          }
          else {
            var img = node.find('img'),
                fluidbox = img.parent();
              var onImageMaximized = function() {
              fluidbox.trigger('close.fluidbox');
              $(window).off('scroll', onImageMaximized);
            };
              fluidbox
              .on('openend.fluidbox', function() {
                $(window).scroll(onImageMaximized);
              })
              .fluidbox();
          }*/
        } else {
          this._node.find('.image-background').css('backgroundImage', 'url("' + _Media3.default.addToken(this._url) + '")');

          if (this._image['mobile-pos'] && _UI2.default.isMobileBrowser()) {
            this._node.find('.image-background').css('backgroundPositionX', this._image['mobile-pos']);
          }
        }

        resultDeferred.resolve();
        return resultDeferred;
      }
    }, {
      key: 'performAction',
      value: function performAction() {
        if (!this._isLoaded) {
          this.load();
        }
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
        this._applyPlacement();
      }
    }, {
      key: 'isLoaded',
      value: function isLoaded() {
        return true; // TODO need to load image async
      }
    }, {
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: 'update',
      value: function update() {
        //
      }
    }, {
      key: 'isPlaceholder',
      value: function isPlaceholder() {
        return !!this._image.isPlaceholder;
      }
    }, {
      key: '_computeBlockStyle',
      value: function _computeBlockStyle() {
        var size = 'small',
            fitHeight = true;

        if (this._image.options) {
          if (this._image.options.size) {
            size = this._image.options.size;
          }

          if (this._image.options.fitHeight !== undefined) {
            fitHeight = this._image.options.fitHeight;
          }

          //options.push(this._image.options.filter ? ('filter-' + this._image.options.filter) : '');
        }

        /*
         * The image sizing in block using the padding technique
         * The vertical padding is relative to the width so this offer
         *  when coupled with background-image a really convenient way to avoid
         *  any JS running when resizing the app
         */
        var imHeight = this._image.height,
            avaWidth = this._image.width,
            imPadding = null;

        // Small and medium are constrained in width
        // So first need to apply that and recompute the height
        if (size == 'small' || size == 'medium') {
          var imRatio = this._image.width / imHeight;

          if (size == 'small') {
            avaWidth = app.display.windowWidth * BLOCK_WIDTH_SMALL;
          } else {
            avaWidth = app.display.windowWidth * BLOCK_WIDTH_MEDIUM;
          }

          imHeight = Math.round(avaWidth / imRatio);
          // Assuming fitHeight = true
          imHeight = Math.min(imHeight, app.display.windowHeight - BLOCK_HEIGHT_FOR_CAPTION);
        }

        // If the image is smaller than available width and
        //  - user doesn't want it to fit browser height
        //  - or the image height is smaller than browser height
        if (this._image.width < avaWidth && (!fitHeight || this._image.height < app.display.windowHeight - BLOCK_HEIGHT_FOR_CAPTION)) {
          imPadding = this._image.height / this._image.width * (this._image.width / avaWidth) * 100;
        } else {
          imPadding = imHeight / Math.min(this._image.width, avaWidth) * 100;
        }

        imPadding = Math.round(imPadding * 10) / 10;

        return {
          size: size,
          fitHeight: fitHeight,
          padding: imPadding
        };
      }
    }]);

    return Image;
  }(_Media3.default);

  exports.default = Image;
  module.exports = exports['default'];
});
//# sourceMappingURL=Image.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/ImageGallery', ['Handlebars'], function (Handlebars) { return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.dataUrl : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "      <div class=\"image-gallery-item-wrapper\" style=\"height: "
    + escapeExpression(((helper = (helper = helpers.adjustedHeight || (depth0 != null ? depth0.adjustedHeight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"adjustedHeight","hash":{},"data":data}) : helper)))
    + "px;\">\r\n        <div class=\"media-loading\">\r\n          <span class=\"large-loader\"></span>\r\n        </div>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.dataUrl : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n          <img class=\"image-gallery-img-hidden\" />\r\n        </a>\r\n        <!--<div class=\"image-gallery-img\"></div>-->\r\n        <div class=\"builder-ui ig-item hidden\">\r\n          <i class=\"ig-action-icon ig-settings fa fa-pencil\"></i>\r\n          <i class=\"ig-action-icon ig-remove fa fa-trash\"></i>\r\n        </div>\r\n        <div class=\"builder-ui ig-add\" data-toggle=\"tooltip\">\r\n          <span class=\"ig-action-icon ig-add-icon glyphicon glyphicon-plus\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "      <div class=\"image-gallery-item\" data-src=\""
    + escapeExpression(((helper = (helper = helpers.dataUrl || (depth0 != null ? depth0.dataUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dataUrl","hash":{},"data":data}) : helper)))
    + "\" data-index=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\r\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "      <div class=\"image-gallery-item\" data-src=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-index=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\r\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <a href=\""
    + escapeExpression(((helper = (helper = helpers.dataUrl || (depth0 != null ? depth0.dataUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dataUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"image-gallery-image-link\" data-disable-preview=\"true\" contenteditable=\"false\">\r\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"image-gallery-image-link\" data-disable-preview=\"true\" contenteditable=\"false\">\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"image-gallery-wrapper\" contenteditable=\"false\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n<div class=\"block-caption\" data-placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\""
    + escapeExpression(((helper = (helper = helpers.captionEditable || (depth0 != null ? depth0.captionEditable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"captionEditable","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/media/ImageGallery',[],function(){});
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

define("lib/jquery/dist/jquery.min", function(){});

!function(a,b,c,d){"use strict";function e(b,c){this.element=b;var d={};a.each(a(this.element).data(),function(a,b){var c=function(a){return a&&a[0].toLowerCase()+a.slice(1)},e=c(a.replace("fluidbox",""));(""!==e||null!==e)&&(b="false"==b?!1:!0,d[e]=b)}),this.settings=a.extend({},h,c,d),this.settings.viewportFill=Math.max(Math.min(parseFloat(this.settings.viewportFill),1),0),this.settings.stackIndex<this.settings.stackIndexDelta&&(settings.stackIndexDelta=settings.stackIndex),this._name=g,this.init()}var f=a(b),g=(a(c),"fluidbox"),h={immediateOpen:!1,loader:!1,maxWidth:0,maxHeight:0,resizeThrottle:500,stackIndex:1e3,stackIndexDelta:10,viewportFill:.95},i={},j=0;("undefined"==typeof console||"undefined"===console.warn)&&(console={},console.warn=function(){}),a.isFunction(a.throttle)||console.warn("Fluidbox: The jQuery debounce/throttle plugin is not found/loaded. Even though Fluidbox works without it, the window resize event will fire extremely rapidly in browsers, resulting in significant degradation in performance upon viewport resize.");var k=function(){var a,b=c.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in e)if(b.style[a]!==d)return e[a]},l=k(),m={dom:function(){var b=a("<div />",{"class":"fluidbox__wrap",css:{zIndex:this.settings.stackIndex-this.settings.stackIndexDelta}});if(a(this.element).addClass("fluidbox--closed").wrapInner(b).find("img").first().css({opacity:1}).addClass("fluidbox__thumb").after('<div class="fluidbox__ghost" />'),this.settings.loader){var c=a("<div />",{"class":"fluidbox__loader",css:{zIndex:2}});a(this.element).find(".fluidbox__wrap").append(c)}},prepareFb:function(){var b=this,c=a(this.element);c.trigger("thumbloaddone.fluidbox"),m.measure.fbElements.call(this),b.bindEvents(),c.addClass("fluidbox--ready"),b.bindListeners(),c.trigger("ready.fluidbox")},measure:{viewport:function(){i.viewport={w:f.width(),h:f.height()}},fbElements:function(){var b=this,c=a(this.element),d=c.find("img").first(),e=c.find(".fluidbox__ghost"),f=c.find(".fluidbox__wrap");b.instanceData.thumb={natW:d[0].naturalWidth,natH:d[0].naturalHeight,w:d.width(),h:d.height()},e.css({width:d.width(),height:d.height(),top:d.offset().top-f.offset().top+parseInt(d.css("borderTopWidth"))+parseInt(d.css("paddingTop")),left:d.offset().left-f.offset().left+parseInt(d.css("borderLeftWidth"))+parseInt(d.css("paddingLeft"))})}},checkURL:function(a){var b=0;return/[\s+]/g.test(a)?(console.warn("Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation."),b=1):/[\"\'\(\)]/g.test(a)&&(console.warn("Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation."),b=0),b},formatURL:function(a){return a.replace(/"/g,"%22").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29")}};a.extend(e.prototype,{init:function(){var b=this,c=a(this.element),d=c.find("img").first();if(m.measure.viewport(),(!b.instanceData||!b.instanceData.initialized)&&c.is("a")&&1===c.children().length&&(c.children().is("img")||c.children().is("picture")&&1===c.find("img").length)&&"none"!==c.css("display")&&"none"!==c.children().css("display")&&"none"!==c.parents().css("display")){c.removeClass("fluidbox--destroyed"),b.instanceData={},b.instanceData.initialized=!0,b.instanceData.originalNode=c.html(),j+=1,b.instanceData.id=j,c.addClass("fluidbox__instance-"+j),c.addClass("fluidbox--initialized"),m.dom.call(b),c.trigger("init.fluidbox");var e=new Image;d.width()>0&&d.height()>0?m.prepareFb.call(b):(e.onload=function(){m.prepareFb.call(b)},e.onerror=function(){c.trigger("thumbloadfail.fluidbox")},e.src=d.attr("src"))}},open:function(){var b=this,c=a(this.element),d=c.find("img").first(),e=c.find(".fluidbox__ghost"),f=c.find(".fluidbox__wrap");b.instanceData.state=1,e.off(l),a(".fluidbox--opened").fluidbox("close");var g=a("<div />",{"class":"fluidbox__overlay",css:{zIndex:-1}});if(f.append(g),c.removeClass("fluidbox--closed").addClass("fluidbox--loading"),m.checkURL(d.attr("src")))return b.close(),!1;e.css({"background-image":"url("+m.formatURL(d.attr("src"))+")",opacity:1}),m.measure.fbElements.call(b);var h;b.settings.immediateOpen?(c.addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({zIndex:b.settings.stackIndex+b.settings.stackIndexDelta}),c.trigger("openstart.fluidbox"),b.compute(),d.css({opacity:0}),a(".fluidbox__overlay").css({opacity:1}),e.one(l,function(){c.trigger("openend.fluidbox")}),h=new Image,h.onload=function(){if(1===b.instanceData.state){if(b.instanceData.thumb.natW=h.naturalWidth,b.instanceData.thumb.natH=h.naturalHeight,c.removeClass("fluidbox--loading"),m.checkURL(h.src))return b.close(),!1;e.css({"background-image":"url("+m.formatURL(h.src)+")"}),b.compute()}},h.onerror=function(){b.close(),c.trigger("imageloadfail.fluidbox"),c.trigger("delayedloadfail.fluidbox")},h.src=c.attr("href")):(h=new Image,h.onload=function(){return c.removeClass("fluidbox--loading").addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({zIndex:b.settings.stackIndex+b.settings.stackIndexDelta}),c.trigger("openstart.fluidbox"),m.checkURL(h.src)?(b.close(),!1):(e.css({"background-image":"url("+m.formatURL(h.src)+")"}),b.instanceData.thumb.natW=h.naturalWidth,b.instanceData.thumb.natH=h.naturalHeight,b.compute(),d.css({opacity:0}),a(".fluidbox__overlay").css({opacity:1}),void e.one(l,function(){c.trigger("openend.fluidbox")}))},h.onerror=function(){b.close(),c.trigger("imageloadfail.fluidbox")},h.src=c.attr("href"))},compute:function(){var b=this,c=a(this.element),d=c.find("img").first(),e=c.find(".fluidbox__ghost"),g=c.find(".fluidbox__wrap"),h=b.instanceData.thumb.natW,j=b.instanceData.thumb.natH,k=b.instanceData.thumb.w,l=b.instanceData.thumb.h,m=h/j,n=i.viewport.w/i.viewport.h;b.settings.maxWidth>0?(h=b.settings.maxWidth,j=h/m):b.settings.maxHeight>0&&(j=b.settings.maxHeight,h=j*m);var o,p,q,r,s;n>m?(o=j<i.viewport.h?j:i.viewport.h*b.settings.viewportFill,q=o/l,r=h*(l*q/j)/k,s=q):(p=h<i.viewport.w?h:i.viewport.w*b.settings.viewportFill,r=p/k,q=j*(k*r/h)/l,s=r),b.settings.maxWidth&&b.settings.maxHeight&&console.warn("Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior.");var t=f.scrollTop()-d.offset().top+.5*(l*(s-1))+.5*(f.height()-l*s),u=.5*(k*(s-1))+.5*(f.width()-k*s)-d.offset().left,v=parseInt(100*r)/100+","+parseInt(100*q)/100;e.css({transform:"translate("+parseInt(100*u)/100+"px,"+parseInt(100*t)/100+"px) scale("+v+")",top:d.offset().top-g.offset().top,left:d.offset().left-g.offset().left}),c.find(".fluidbox__loader").css({transform:"translate("+parseInt(100*u)/100+"px,"+parseInt(100*t)/100+"px) scale("+v+")"}),c.trigger("computeend.fluidbox")},recompute:function(){this.compute()},close:function(){var b=this,c=a(this.element),e=c.find("img").first(),f=c.find(".fluidbox__ghost"),g=c.find(".fluidbox__wrap"),h=c.find(".fluidbox__overlay");return null===b.instanceData.state||typeof b.instanceData.state==typeof d||0===b.instanceData.state?!1:(b.instanceData.state=0,c.trigger("closestart.fluidbox"),c.removeClass(function(a,b){return(b.match(/(^|\s)fluidbox--(opened|loaded|loading)+/g)||[]).join(" ")}).addClass("fluidbox--closed"),f.css({transform:"translate(0,0) scale(1,1)",top:e.offset().top-g.offset().top+parseInt(e.css("borderTopWidth"))+parseInt(e.css("paddingTop")),left:e.offset().left-g.offset().left+parseInt(e.css("borderLeftWidth"))+parseInt(e.css("paddingLeft"))}),c.find(".fluidbox__loader").css({transform:"none"}),f.one(l,function(){f.css({opacity:0}),e.css({opacity:1}),h.remove(),g.css({zIndex:b.settings.stackIndex-b.settings.stackIndexDelta}),c.trigger("closeend.fluidbox")}),void h.css({opacity:0}))},bindEvents:function(){var b=this,c=a(this.element);c.on("click.fluidbox",function(a){a.preventDefault(),b.instanceData.state&&0!==b.instanceData.state?b.close():b.open()})},bindListeners:function(){var b=this,c=a(this.element),d=function(){m.measure.viewport(),m.measure.fbElements.call(b),c.hasClass("fluidbox--opened")&&b.compute()};a.isFunction(a.throttle)?f.on("resize.fluidbox"+b.instanceData.id,a.throttle(b.settings.resizeThrottle,d)):f.on("resize.fluidbox"+b.instanceData.id,d),c.on("reposition.fluidbox",function(){b.reposition()}),c.on("recompute.fluidbox, compute.fluidbox",function(){b.compute()}),c.on("destroy.fluidbox",function(){b.destroy()}),c.on("close.fluidbox",function(){b.close()})},unbind:function(){a(this.element).off("click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox"),f.off("resize.fluidbox"+this.instanceData.id)},reposition:function(){m.measure.fbElements.call(this)},destroy:function(){var b=this.instanceData.originalNode;this.unbind(),a.data(this.element,"plugin_"+g,null),a(this.element).removeClass(function(a,b){return(b.match(/(^|\s)fluidbox[--|__]\S+/g)||[]).join(" ")}).empty().html(b).addClass("fluidbox--destroyed").trigger("destroyed.fluidbox")},getMetadata:function(){return this.instanceData}}),a.fn[g]=function(b){var c=arguments;if(b===d||"object"==typeof b)return this.each(function(){a.data(this,"plugin_"+g)||a.data(this,"plugin_"+g,new e(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var f;return this.each(function(){var d=a.data(this,"plugin_"+g);d instanceof e&&"function"==typeof d[b]?f=d[b].apply(d,Array.prototype.slice.call(c,1)):console.warn('Fluidbox: The method "'+b+'" used is not defined in Fluidbox. Please make sure you are calling the correct public method.')}),f!==d?f:this}return this}}(jQuery,window,document);
define("lib/fluidbox/dist/js/jquery.fluidbox.min", function(){});


define('lib-build/css!lib/fluidbox/dist/css/fluidbox.min',[],function(){});
define('storymaps-react/tpl/view/media/ImageGallery',['module', 'exports', './Media', 'lib-build/hbars!./ImageGallery', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'dojo/_base/lang', 'lib-build/less!./ImageGallery', 'lib/jquery/dist/jquery.min', 'lib/fluidbox/dist/js/jquery.fluidbox.min', 'lib-build/css!lib/fluidbox/dist/css/fluidbox.min'], function (module, exports, _Media2, _ImageGallery, _app, _lang) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _ImageGallery2 = _interopRequireDefault(_ImageGallery);

  var _app2 = _interopRequireDefault(_app);

  var _lang2 = _interopRequireDefault(_lang);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ImageGallery = function (_Media) {
    _inherits(ImageGallery, _Media);

    function ImageGallery(images) {
      _classCallCheck(this, ImageGallery);

      var _this = _possibleConstructorReturn(this, (ImageGallery.__proto__ || Object.getPrototypeOf(ImageGallery)).call(this, {
        type: 'image-gallery',
        id: null,
        previewThumb: null,
        previewIcon: null
      }));

      _this._images = images;
      _this._placement = null;
      return _this;
    }

    _createClass(ImageGallery, [{
      key: 'render',
      value: function render(context) {
        if (!this._images || !context || context.placement != 'block') {
          console.log('Could not render image gallery in section');
          return '';
        }

        this._placement = context.placement;

        return this._render(true);
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(ImageGallery.prototype.__proto__ || Object.getPrototypeOf(ImageGallery.prototype), 'postCreate', this).call(this, params);

        if (!params.container) {
          return;
        }

        this._node = params.container.find('#' + this._domID);
      }
    }, {
      key: 'load',
      value: function load() {
        if (this._isLoaded) {
          return;
        }

        this._isLoaded = true;

        this._node.find('.image-gallery-item').each(function () {
          var node = $(this),
              imgHidden = node.find('.image-gallery-img-hidden'),
              img = node.find('.image-gallery-img'),
              fluidbox = imgHidden.parent();

          imgHidden.attr('src', node.data('src'));
          img.css('backgroundImage', 'url("' + node.data('src') + '"');

          //
          // Image maximize
          //

          var onImageMaximized = function onImageMaximized() {
            fluidbox.trigger('close.fluidbox');
            $(window).off('scroll', onImageMaximized);
          };

          fluidbox.on('openend.fluidbox', function () {
            $(window).scroll(onImageMaximized);
          }).fluidbox({
            maxWidth: app.display.windowWidth
          });

          //
          // Loading indicator
          //
          var im = new window.Image();

          im.onload = function () {
            node.find('.media-loading').hide();
          }.bind(this);

          im.src = node.data('src');
        });
      }
    }, {
      key: 'performAction',
      value: function performAction() {
        //
      }
    }, {
      key: '_update',
      value: function _update() {
        this._node.html(this._render(false));
        this._isLoaded = false;
        this.load();
      }
    }, {
      key: '_calculateImageHeights',
      value: function _calculateImageHeights() {
        var isMobile = app.display.windowWidth < 768;

        var spaceBetweenImage = 15;
        // total image gutter space
        var spaceBetweenImages = spaceBetweenImage * (this._images.images.length - 1);
        // width allowed for block
        var blockWidth = app.display.windowWidth * (isMobile ? 0.9 : 0.8);
        // width for images is that minus what's needed for image gutters
        var widthForImages = blockWidth - spaceBetweenImages;

        // if mobile, each image gets 50% of the width (minus a padding of course)
        var widthForMobileImage = (blockWidth - spaceBetweenImage) / 2;

        var widthForDesktopImage = widthForImages / this._images.images.length;
        // each one gets an equal amount of width to use
        var widthForEachImage = isMobile ? widthForMobileImage : widthForDesktopImage;

        for (var i = 0; i < this._images.images.length; i++) {
          var image = this._images.images[i];
          var imageHeight = 0;
          var imageRatio = image.width / image.height;
          // the adjusted height is based on the width it can take in the gallery
          // if the image natural width is less than the width allotted for it, use its natural height

          if (image.width < widthForEachImage) {
            imageHeight = image.height;
          } else {
            imageHeight = Math.round(widthForEachImage / imageRatio);
          }
          image.adjustedHeight = imageHeight;
        }
      }
    }, {
      key: '_render',
      value: function _render(initialRender) {

        this._calculateImageHeights();

        var template = (0, _ImageGallery2.default)({
          images: this._addTokens(this._images.images),
          caption: this._images.caption,
          placeholder: _app2.default.builder.media.captionPlaceholder,
          captionEditable: app.isInBuilder
        });

        // if initial render, set the wrapper div and the height with the template. If not, just set the height and the template.
        if (initialRender) {
          return '<div id="' + this._domID + '" class="block image-gallery" contenteditable="false">' + template + '</div>';
        } else {
          return template;
        }
      }
    }, {
      key: '_addTokens',
      value: function _addTokens(imagesOrig) {
        var images = _lang2.default.clone(imagesOrig);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var image = _step.value;

            image.url = _Media3.default.addToken(image.url);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return images;
      }
    }]);

    return ImageGallery;
  }(_Media3.default);

  exports.default = ImageGallery;
  module.exports = exports['default'];
});
//# sourceMappingURL=ImageGallery.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/VideoBlock', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\""
    + escapeExpression(((helper = (helper = helpers.domId || (depth0 != null ? depth0.domId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"domId","hash":{},"data":data}) : helper)))
    + "\" class=\"block block-type-video\" contenteditable=\"false\">\r\n  <div class=\"block-media\">\r\n    <div class=\"media-loading\">\r\n      <span class=\"large-loader\"></span>\r\n    </div>\r\n    <div class=\"media-media video video-fg video-player\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.videoId || (depth0 != null ? depth0.videoId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"videoId","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n    <div class=\"builder-ui media-cfg-invite\"></div>\r\n    <div class=\"builder-ui media-delete\"></div>\r\n  </div>\r\n  <div class=\"block-caption\" data-placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\""
    + escapeExpression(((helper = (helper = helpers.captionEditable || (depth0 != null ? depth0.captionEditable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"captionEditable","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n  <div class=\"builder-ui media-cfg-panel\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/VideoBackground', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"media-loading\">\r\n  <span class=\"large-loader\"></span>\r\n</div>\r\n<div id=\""
    + escapeExpression(((helper = (helper = helpers.domId || (depth0 != null ? depth0.domId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"domId","hash":{},"data":data}) : helper)))
    + "\" class=\"video-viewport\">\r\n  <div class=\"media-media video video-player\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.videoId || (depth0 != null ? depth0.videoId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"videoId","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n</div>\r\n<div class=\"builder-ui media-cfg-invite\"></div>\r\n<div class=\"builder-ui media-cfg-panel\"></div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/VideoVimeo', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<iframe id=\""
    + escapeExpression(((helper = (helper = helpers.domId || (depth0 != null ? depth0.domId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"domId","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" style=\""
    + escapeExpression(((helper = (helper = helpers.options || (depth0 != null ? depth0.options : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"options","hash":{},"data":data}) : helper)))
    + "\"></iframe>\r\n"
    + escapeExpression(((helper = (helper = helpers.playerControls || (depth0 != null ? depth0.playerControls : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"playerControls","hash":{},"data":data}) : helper)))
    + "\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/media/Video',[],function(){});
// Init style shamelessly stolen from jQuery http://jquery.com
var Froogaloop = (function(){
    // Define a local copy of Froogaloop
    function Froogaloop(iframe) {
        // The Froogaloop object is actually just the init constructor
        return new Froogaloop.fn.init(iframe);
    }

    var eventCallbacks = {},
        hasWindowEvent = false,
        isReady = false,
        slice = Array.prototype.slice,
        playerOrigin = '*';

    Froogaloop.fn = Froogaloop.prototype = {
        element: null,

        init: function(iframe) {
            if (typeof iframe === "string") {
                iframe = document.getElementById(iframe);
            }

            this.element = iframe;

            return this;
        },

        /*
         * Calls a function to act upon the player.
         *
         * @param {string} method The name of the Javascript API method to call. Eg: 'play'.
         * @param {Array|Function} valueOrCallback params Array of parameters to pass when calling an API method
         *                                or callback function when the method returns a value.
         */
        api: function(method, valueOrCallback) {
            if (!this.element || !method) {
                return false;
            }

            var self = this,
                element = self.element,
                target_id = element.id !== '' ? element.id : null,
                params = !isFunction(valueOrCallback) ? valueOrCallback : null,
                callback = isFunction(valueOrCallback) ? valueOrCallback : null;

            // Store the callback for get functions
            if (callback) {
                storeCallback(method, callback, target_id);
            }

            postMessage(method, params, element);
            return self;
        },

        /*
         * Registers an event listener and a callback function that gets called when the event fires.
         *
         * @param eventName (String): Name of the event to listen for.
         * @param callback (Function): Function that should be called when the event fires.
         */
        addEvent: function(eventName, callback) {
            if (!this.element) {
                return false;
            }

            var self = this,
                element = self.element,
                target_id = element.id !== '' ? element.id : null;


            storeCallback(eventName, callback, target_id);

            // The ready event is not registered via postMessage. It fires regardless.
            if (eventName != 'ready') {
                postMessage('addEventListener', eventName, element);
            }
            else if (eventName == 'ready' && isReady) {
                callback.call(null, target_id);
            }

            return self;
        },

        /*
         * Unregisters an event listener that gets called when the event fires.
         *
         * @param eventName (String): Name of the event to stop listening for.
         */
        removeEvent: function(eventName) {
            if (!this.element) {
                return false;
            }

            var self = this,
                element = self.element,
                target_id = element.id !== '' ? element.id : null,
                removed = removeCallback(eventName, target_id);

            // The ready event is not registered
            if (eventName != 'ready' && removed) {
                postMessage('removeEventListener', eventName, element);
            }
        }
    };

    /**
     * Handles posting a message to the parent window.
     *
     * @param method (String): name of the method to call inside the player. For api calls
     * this is the name of the api method (api_play or api_pause) while for events this method
     * is api_addEventListener.
     * @param params (Object or Array): List of parameters to submit to the method. Can be either
     * a single param or an array list of parameters.
     * @param target (HTMLElement): Target iframe to post the message to.
     */
    function postMessage(method, params, target) {
        if (!target.contentWindow.postMessage) {
            return false;
        }

        var data = JSON.stringify({
            method: method,
            value: params
        });

        target.contentWindow.postMessage(data, playerOrigin);
    }

    /**
     * Event that fires whenever the window receives a message from its parent
     * via window.postMessage.
     */
    function onMessageReceived(event) {
        var data, method;

        try {
            data = JSON.parse(event.data);
            method = data.event || data.method;
        }
        catch(e)  {
            //fail silently... like a ninja!
        }

        if (method == 'ready' && !isReady) {
            isReady = true;
        }

        // Handles messages from the vimeo player only
        if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
            return false;
        }

        if (playerOrigin === '*') {
            playerOrigin = event.origin;
        }

        var value = data.value,
            eventData = data.data,
            target_id = target_id === '' ? null : data.player_id,

            callback = getCallback(method, target_id),
            params = [];

        if (!callback) {
            return false;
        }

        if (value !== undefined) {
            params.push(value);
        }

        if (eventData) {
            params.push(eventData);
        }

        if (target_id) {
            params.push(target_id);
        }

        return params.length > 0 ? callback.apply(null, params) : callback.call();
    }


    /**
     * Stores submitted callbacks for each iframe being tracked and each
     * event for that iframe.
     *
     * @param eventName (String): Name of the event. Eg. api_onPlay
     * @param callback (Function): Function that should get executed when the
     * event is fired.
     * @param target_id (String) [Optional]: If handling more than one iframe then
     * it stores the different callbacks for different iframes based on the iframe's
     * id.
     */
    function storeCallback(eventName, callback, target_id) {
        if (target_id) {
            if (!eventCallbacks[target_id]) {
                eventCallbacks[target_id] = {};
            }
            eventCallbacks[target_id][eventName] = callback;
        }
        else {
            eventCallbacks[eventName] = callback;
        }
    }

    /**
     * Retrieves stored callbacks.
     */
    function getCallback(eventName, target_id) {
        if (target_id) {
            return eventCallbacks[target_id][eventName];
        }
        else {
            return eventCallbacks[eventName];
        }
    }

    function removeCallback(eventName, target_id) {
        if (target_id && eventCallbacks[target_id]) {
            if (!eventCallbacks[target_id][eventName]) {
                return false;
            }
            eventCallbacks[target_id][eventName] = null;
        }
        else {
            if (!eventCallbacks[eventName]) {
                return false;
            }
            eventCallbacks[eventName] = null;
        }

        return true;
    }

    function isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    function isArray(obj) {
        return toString.call(obj) === '[object Array]';
    }

    // Give the init function the Froogaloop prototype for later instantiation
    Froogaloop.fn.init.prototype = Froogaloop.fn;

    // Listens for the message event.
    // W3C
    if (window.addEventListener) {
        window.addEventListener('message', onMessageReceived, false);
    }
    // IE
    else {
        window.attachEvent('onmessage', onMessageReceived);
    }

    // Expose froogaloop to the global object
    return (window.Froogaloop = window.$f = Froogaloop);

})();

define("lib/froogaloop/froogaloop", function(){});


if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vflQ3JBIv/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();};
define("lib/youtube-api/index", function(){});

define('storymaps-react/tpl/view/media/Video',['module', 'exports', './Media', 'lib-build/hbars!./VideoBlock', 'lib-build/hbars!./VideoBackground', 'lib-build/hbars!./VideoVimeo', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'dojo/Deferred', 'lib-build/less!./Video', 'lib/froogaloop/froogaloop', 'lib/youtube-api/index'], function (module, exports, _Media2, _VideoBlock, _VideoBackground, _VideoVimeo, _app, _Deferred) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _VideoBlock2 = _interopRequireDefault(_VideoBlock);

  var _VideoBackground2 = _interopRequireDefault(_VideoBackground);

  var _VideoVimeo2 = _interopRequireDefault(_VideoVimeo);

  var _app2 = _interopRequireDefault(_app);

  var _Deferred2 = _interopRequireDefault(_Deferred);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CONFIG = {
    ratio: 16 / 9
  };

  /*
  window.onYouTubeIframeAPIReady = function() {
    //console.log("Youtube ready!");
    // TODO not handled yet
    //YOUTUPE_API_READY = true;
  };
  
  function onYoutubePlayerReady(e, videoId)
  {
    //console.log(e);
    //e.target.playVideo();
  
    e.target.mute();
    e.target.loadPlaylist(videoId);
    e.target.setLoop(true);
  
    resizeVideo();
  }
  */

  var PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/video.png';
  var PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/video.png';

  var Video = function (_Media) {
    _inherits(Video, _Media);

    function Video(video) {
      _classCallCheck(this, Video);

      var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, {
        type: 'video',
        id: video.source + '-' + video.id,
        previewThumb: PREVIEW_THUMB,
        previewIcon: PREVIEW_ICON
      }));

      _this._video = video;
      _this._source = video.source;
      _this._videoid = video.id;

      _this._soundLevelPreImmersive = null;
      _this._placement = null;
      _this._videoPlayer = null;
      _this._loadDeferred = null;
      _this._isVideoLoaded = false;
      _this._pendingAction = null;

      // If video has just been added in builder
      // TODO: section have to declare the default behavior for the media
      _this._sectionType = 'sequence';
      _this._isBuilderAdd = false;

      // TODO: shouldn't be needed
      if (!_this._video.options) {
        _this._video.options = {};
      }
      return _this;
    }

    _createClass(Video, [{
      key: 'render',
      value: function render(params) {
        var output = '';

        if (!this._video || !params) {
          console.log('Could not render video in section');
          return output;
        }

        this._placement = params.placement;

        if (this._placement == 'block') {
          output += (0, _VideoBlock2.default)({
            domId: this._domID,
            videoId: this.id,
            caption: this._video.caption,
            placeholder: _app2.default.builder.media.captionPlaceholder,
            captionEditable: app.isInBuilder
          });
        } else if (this._placement == 'background') {
          output += (0, _VideoBackground2.default)({
            domId: this._domID,
            videoId: this.id
          });
        }

        return output;
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'postCreate', this).call(this, params);

        this._sectionType = params.sectionType;

        if (!params.container) {
          return;
        }

        if (this._placement == 'block') {
          this._node = params.container.find('#' + this._domID);
        } else {
          this._node = params.container.find('.video[data-id="' + this.id + '"]').parent().parent();
        }

        this._nodeMedia = this._node.find('.video-player');

        this._applyConfig();
      }
    }, {
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig() {
        var options = this._video.options;

        // Test
        if (typeof options == 'string') {
          options = {};
        }

        options.size = options.size || 'small';

        if (this._isVideoLoaded && options.audio) {
          var isMuted = this._video.options.audio == 'muted',
              volume = isMuted ? 0 : 1;

          try {
            if (this._video.source == 'vimeo') {
              this._videoPlayer.api('setVolume', volume);
            } else {
              this._videoPlayer.setVolume(volume * 100);
            }
          } catch (e) {
            console.error(e);
          }
        }

        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), '_applyConfig', this).call(this, options);
      }
    }, {
      key: 'load',
      value: function load() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this._loadDeferred = new _Deferred2.default();

        if (this._isLoaded) {
          this._loadDeferred.resolve();
          return this._loadDeferred;
        }

        this._isLoaded = true;

        this._isBuilderAdd = params.isBuilderAdd;

        // https://developers.google.com/youtube/iframe_api_reference
        // https://developer.vimeo.com/player/js-api

        var opt = '0';
        var controls = '';

        if (this._placement == 'background') {
          opt = '1';
        } else if (this._video.options && this._video.options.ui == 'simple') {
          opt = '1';
          controls = '<div class="player-controls"><button class="play">play/pause</button>&nbsp;&nbsp;&nbsp;<button class="mute">mute/unmute</button></div>';
        }

        if (this._source == 'vimeo') {
          var classes = this._placement == 'foreground' ? 'video-fg video-player' : 'video';

          var newMedia = $((0, _VideoVimeo2.default)({
            domId: 'player-' + this._domID,
            classes: classes + ' initialized',
            url: 'https://player.vimeo.com/video/' + this._videoid + '?api=1&background=' + opt + '&player_id=player-' + this._domID,
            options: this._video.options,
            playerControls: controls
          }));

          this._nodeMedia.replaceWith(newMedia);
          this._nodeMedia = newMedia;

          /*
          $('#' + _id).siblings().find('.play').click(function() {
            _videoPlayer.api('paused', function(paused) {
              if (paused) {
                _videoPlayer.api('play');
              }
              else {
                _videoPlayer.api('pause');
              }
            });
          });
            $('#' + _id).siblings().find('.mute').click(function() {
            _videoPlayer.api('getVolume', function(volume) {
              if (volume == '0') {
                _videoPlayer.api('setVolume', '1');
              }
              else {
                _videoPlayer.api('setVolume', '0');
              }
            });
          });
          */

          this._videoPlayer = $f(newMedia[0]); // eslint-disable-line no-undef

          try {
            this._videoPlayer.addEvent('ready', this._onVimeoPlayerReady.bind(this));
          } catch (e) {
            console.error(e);
          }
        } else if (this._video.source == 'youtube') {
          this._videoPlayer = new window.YT.Player(this._node.find('.video-player[data-id=' + this.id + ']')[0], {
            height: '',
            width: '',
            loop: 1,
            videoId: this._videoid,
            playerVars: {
              rel: 0,
              modestbranding: 1
            },
            events: {
              onReady: function (e) {
                try {
                  this._onYoutubePlayerReady(e, this._video.id);
                } catch (e) {
                  console.error(e);
                }
              }.bind(this)
            }
          });
        }

        return this._loadDeferred;
      }
    }, {
      key: 'resize',
      value: function resize(params) {
        if (this._placement == 'background') {
          this._resizeVideoBackground(params);
        }
        /*
        else {
          this._resizeVideoForeground();
        }
        */
      }
    }, {
      key: 'performAction',
      value: function performAction(params) {
        if (!this._videoPlayer) {
          return;
        }

        if (!this._isVideoLoaded) {
          this._pendingAction = params;
          return;
        }

        // Is Immersive background - On Cover we do nothing about sound
        // TODO: should just store the proper property...
        var isImmersiveBg = params.viewIndex !== undefined,
            isMuted = this._video.options.audio == 'muted';

        try {
          if (this._video.source == 'vimeo') {
            if (params.isActive) {
              // Sound
              if (this._placement == 'background') {
                if (isImmersiveBg && !isMuted) {
                  this._videoPlayer.api('getVolume', function (volume) {
                    if (volume != 1) {
                      this._soundLevelPreImmersive = volume;
                    }
                  }.bind(this));

                  if (params.visibilityProgress) {
                    this._videoPlayer.api('setVolume', params.visibilityProgress);
                  }
                }
              }

              this._videoPlayer.api('play');
            } else {
              //_videoPlayer.api('pause');

              //if (params.visibilityProgress > 0.1) {
              //this._videoPlayer.api('setVolume', params.visibilityProgress);
              //}
              if (this._placement == 'background') {
                if (this._soundLevelPreImmersive != null) {
                  this._videoPlayer.api('setVolume', this._soundLevelPreImmersive);
                }
                this._videoPlayer.api('pause');
              } else {
                this._videoPlayer.api('pause');
              }
            }
          } else if (this._video.source == 'youtube') {
            if (params.isActive) {
              // Sound
              if (this._placement == 'background') {
                if (isImmersiveBg && !isMuted) {
                  var volume = this._videoPlayer.getVolume();
                  if (volume != 100) {
                    this._soundLevelPreImmersive = volume;
                  }

                  //if (params.visibilityProgress) {
                  //this._videoPlayer.setVolume(params.visibilityProgress * 100);
                  //}
                  this._videoPlayer.setVolume(100);
                }
              }

              this._videoPlayer.playVideo();
            } else {
              if (this._placement == 'background') {
                if (this._soundLevelPreImmersive != null) {
                  this._videoPlayer.setVolume(params.visibilityProgress * 100);
                }
                this._videoPlayer.pauseVideo();
              } else {
                this._videoPlayer.pauseVideo();
              }
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    }, {
      key: '_onVimeoPlayerReady',
      value: function _onVimeoPlayerReady() {
        this._isVideoLoaded = true;

        this._node.find('.media-loading').hide();

        if (this._placement == 'block') {
          this._videoPlayer.api('pause');
        } else {
          var isMuted = this._video.options.audio == 'muted';

          if (!this._isBuilderAdd) {
            this._videoPlayer.api('setVolume', 0);

            if (this._sectionType == 'immersive') {
              this._videoPlayer.api('pause');
            }
          } else {
            if (this._sectionType == 'immersive' && !isMuted) {
              this._videoPlayer.api('setVolume', 1);
            } else {
              this._videoPlayer.api('setVolume', 0);
            }

            this._videoPlayer.api('play');

            // this is called twice when adding in Immersive so can't do that
            //this._isBuilderAdd = false;
          }

          this._videoPlayer.api('setLoop', true);
        }

        this._loadDeferred.resolve();
        this.resize();
        this._applyConfig();

        if (this._pendingAction) {
          this.performAction(this._pendingAction);
          this._pendingAction = null;
        }
      }
    }, {
      key: '_onYoutubePlayerReady',
      value: function _onYoutubePlayerReady() {
        this._isVideoLoaded = true;

        this._node.find('.media-loading').hide();

        if (this._placement == 'background') {
          this._videoPlayer.setLoop(true);

          if (!this._isBuilderAdd) {
            this._videoPlayer.setVolume(0);
          } else {
            if (this._sectionType == 'immersive') {
              this._videoPlayer.setVolume(100);
            } else {
              this._videoPlayer.setVolume(0);
            }
            this._videoPlayer.playVideo();
          }
        }

        // The node change from a div to an iframe during loading
        this._nodeMedia = this._node.find('.video-player');

        this._loadDeferred.resolve();
        this.resize();
        this._applyConfig();

        if (this._pendingAction) {
          this.performAction(this._pendingAction);
          this._pendingAction = null;
        }
      }
    }, {
      key: '_resizeVideoBackground',
      value: function _resizeVideoBackground(params) {
        params = params || {
          windowWidth: app.display.windowWidth,
          windowHeight: app.display.windowHeight
        };

        if (!this._nodeMedia) {
          return;
        }

        var videoWidth = -1,
            videoHeight = -1,
            windowWidth = app.display.windowWidth,
            windowHeight = app.display.windowHeight + /* add margin so that vimeo controls aren't visible */60,
            windowRatio = windowWidth / windowHeight;

        if (windowRatio < CONFIG.ratio) {
          videoWidth = windowHeight * CONFIG.ratio;
          videoHeight = windowHeight;
        } else {
          videoWidth = windowWidth;
          videoHeight = videoWidth / CONFIG.ratio;
        }

        this._nodeMedia.css({
          width: videoWidth,
          height: videoHeight
        });

        this._nodeMedia.parent().css({
          width: windowWidth,
          height: windowHeight
        });

        this._nodeMedia.parent().scrollLeft((videoWidth - windowWidth) / 2);
        this._nodeMedia.parent().scrollTop((videoHeight - windowHeight) / 2);
      }
    }]);

    return Video;
  }(_Media3.default);

  exports.default = Video;
  module.exports = exports['default'];
});
//# sourceMappingURL=Video.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/WebMapBlock', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\"false\">\r\n  <div class=\"block-media\">\r\n    <div class=\"media-loading\">\r\n      <span class=\"large-loader\"></span>\r\n    </div>\r\n    <div class=\"media-media map\" data-builder-invite=\"\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.webmapId || (depth0 != null ? depth0.webmapId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"webmapId","hash":{},"data":data}) : helper)))
    + "\" data-options=\""
    + escapeExpression(((helper = (helper = helpers.options || (depth0 != null ? depth0.options : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"options","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n    <div class=\"interaction-container\">\r\n      <button class=\"btn btn-default btn-sm\">\r\n        <span class=\"int-container-disabled\">\r\n          <span class=\"glyphicon glyphicon-fullscreen\"></span>\r\n          Explore Map\r\n        </span>\r\n        <span class=\"int-container-enabled\">\r\n          Stop Exploring\r\n        </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"builder-ui media-cfg-invite\"></div>\r\n    <div class=\"builder-ui media-delete\"></div>\r\n    <div class=\"layer-list-container\"></div>\r\n  </div>\r\n  <div class=\"block-caption\" data-placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\""
    + escapeExpression(((helper = (helper = helpers.captionEditable || (depth0 != null ? depth0.captionEditable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"captionEditable","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n  <div class=\"builder-ui media-cfg-panel\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/WebMapBackground', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"media-loading\">\r\n  <span class=\"large-loader\"></span>\r\n</div>\r\n<div class=\"media-media map\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.webmapId || (depth0 != null ? depth0.webmapId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"webmapId","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n<div class=\"interaction-container\">\r\n  <button class=\"btn btn-default btn-sm\">\r\n    <span class=\"int-container-disabled\">\r\n      <span class=\"glyphicon glyphicon-fullscreen\"></span>\r\n      Explore Map\r\n    </span>\r\n    <span class=\"int-container-enabled\">\r\n      Stop Exploring\r\n    </span>\r\n  </button>\r\n</div>\r\n<div class=\"builder-ui media-cfg-invite\"></div>\r\n<div class=\"builder-ui media-cfg-panel\"></div>\r\n<div class=\"layer-list-container\"></div>\r\n";
},"useData":true}); });


define('lib-build/css!storymaps/tpl/view/media/arcgis/WebMapCommand',[],function(){});
define('storymaps/tpl/view/media/arcgis/WebMapCommand',[
  'lib-build/css!./WebMapCommand',
  'dojo/has',
  'esri/geometry/Point',
  'dojo/on',
  'esri/symbols/PictureMarkerSymbol',
  'esri/layers/GraphicsLayer',
  'esri/graphic',
  'esri/config'
],
function(
	viewCss,
	has,
	Point,
	on,
	PictureMarkerSymbol,
	GraphicsLayer,
	Graphic,
	esriConfig
) {
  /**
   * MapCommand
   * @class MapCommand
   *
   * UI component that control the map display with +/home/- buttons and optional location button
   * On touch device button are bigger
   */
  return function MapCommand(map, homeClickCallback, locationButtonCallback, locationButtonEnabled) {
    //
    // Home/wait button
    //
    var tsUpdateStart = 0;
    var homeButton = $('<div class="esriSimpleSliderIncrementButton"><div class="mapCommandHomeBtn"><i class="fa fa-home" aria-hidden="true"></i></div></div>');
    var locateSymbol = new PictureMarkerSymbol('resources/common/icons/mapcommand-location-marker.png', 21, 21);
    var locateLayer = new GraphicsLayer({id: 'locateLayer'});

    homeButton.click(function() {
      // Prevent using the home button while it's spinning
      if (tsUpdateStart !== 0 && $('body').hasClass('mobile-view'))
        return;

      if (homeClickCallback && typeof homeClickCallback == 'function')
        homeClickCallback(map._params.extent);
      else
        map.setExtent(map._params.extent);
    });

    $(map.container).find('.esriSimpleSlider div:nth-child(1)').after(homeButton);

		/*
    on(map, 'update-start', function() {
      if (tsUpdateStart === 0)
        toggleLoadingStatus(true);
    });

    on(map, 'update-end', function() {
      toggleLoadingStatus(false);
    });
		*/

    this.setMobile = function(isMobile) {
      $('.esriSimpleSlider, .mapCommandHomeBtn', map.container).toggleClass('touch', isMobile);
    };

    this.destroy = function() {
      $(map.container).find('.esriSimpleSliderIncrementButton').remove();
      $(map.container).find('.mapCommandLocation').remove();
    };

    this.startLoading = function() {
      toggleLoadingStatus(true);
    };

    this.stopLoading = function() {
      toggleLoadingStatus(false);
    };

    this.toggleLocationButton = function(enable) {
      $('.mapCommandLocation', map.container).toggleClass('hidden', ! enable);
    };

    function toggleLoadingStatus(start) {
      if(start) {
        $(map.container).find('.mapCommandHomeBtn').addClass('loading');
        tsUpdateStart = Date.now();
      }
      else {
        var elapsed = Date.now() - tsUpdateStart;
        var delay = 0;

        if(elapsed < 450) {
          delay = 450 - elapsed;
        }

        setTimeout(function() {
          $(map.container).find('.mapCommandHomeBtn').removeClass('loading');
          tsUpdateStart = 0;
        }, delay);
      }
    }

    function getDeviceLocation() {
      navigator.geolocation.getCurrentPosition(
        function(e) {
          var geom = new Point(e.coords.longitude, e.coords.latitude);

          // User callback
          if (locationButtonCallback && typeof locationButtonCallback == 'function')
            locationButtonCallback(true, geom, e);

          if (map.spatialReference.wkid != 102100 && map.spatialReference.wkid != 4326) {
            esriConfig.defaults.geometryService.project([geom], map.spatialReference, function(features) {
              if(! features || ! features[0]) {
                return;
              }

              displayLocationPin(features[0]);
            });
            return;
          }
          else
            displayLocationPin(geom);
        },
        getDeviceLocationError,
        { timeout: 2000 }
      );
    }

    function displayLocationPin(point) {
      locateLayer.clear();
      locateLayer.add(new Graphic(point, locateSymbol));
      setTimeout(function() {
        $('#locateLayer_layer image').fadeOut({
          duration: 800
        });
      }, 10000);
    }

    function getDeviceLocationError(error) {
      locationButtonCallback(false, error);
    }

    // Geolocate button
    if(navigator && navigator.geolocation) {
      // TODO: to be done in CSS
      $('.esriSimpleSlider', map.container).after('<div class="esriSimpleSlider esriSimpleSliderVertical mapCommandLocation"><i class="fa fa-crosshairs" aria-hidden="true"></i></div>');
      $('.mapCommandLocation', map.container).click(getDeviceLocation);
      this.toggleLocationButton(locationButtonEnabled);
      map.addLayer(locateLayer);
    }

    // Use bigger icon on touch devices
    this.setMobile(!! has('touch'));
  };
});


define('lib-build/less!storymaps-react/tpl/view/media/WebMap',[],function(){});
define('storymaps-react/tpl/view/media/WebMap',['module', 'exports', './Media', 'lib-build/hbars!./WebMapBlock', 'lib-build/hbars!./WebMapBackground', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'storymaps/tpl/view/media/arcgis/WebMapCommand', 'esri/arcgis/utils', 'esri/geometry/Extent', 'esri/symbols/SimpleMarkerSymbol', 'esri/geometry/webMercatorUtils', 'esri/geometry/Point', 'esri/tasks/query', 'esri/tasks/QueryTask', 'esri/config', 'dojo/_base/lang', 'dojo/Deferred', 'storymaps/tpl/utils/UI', 'lib-build/less!./WebMap'], function (module, exports, _Media2, _WebMapBlock, _WebMapBackground, _app, _WebMapCommand, _utils, _Extent, _SimpleMarkerSymbol, _webMercatorUtils, _Point, _query, _QueryTask, _config, _lang, _Deferred, _UI) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _WebMapBlock2 = _interopRequireDefault(_WebMapBlock);

  var _WebMapBackground2 = _interopRequireDefault(_WebMapBackground);

  var _app2 = _interopRequireDefault(_app);

  var _WebMapCommand2 = _interopRequireDefault(_WebMapCommand);

  var _utils2 = _interopRequireDefault(_utils);

  var _Extent2 = _interopRequireDefault(_Extent);

  var _SimpleMarkerSymbol2 = _interopRequireDefault(_SimpleMarkerSymbol);

  var _webMercatorUtils2 = _interopRequireDefault(_webMercatorUtils);

  var _Point2 = _interopRequireDefault(_Point);

  var _query2 = _interopRequireDefault(_query);

  var _QueryTask2 = _interopRequireDefault(_QueryTask);

  var _config2 = _interopRequireDefault(_config);

  var _lang2 = _interopRequireDefault(_lang);

  var _Deferred2 = _interopRequireDefault(_Deferred);

  var _UI2 = _interopRequireDefault(_UI);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/map.png';
  var PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/map.png';

  var WebMap = function (_Media) {
    _inherits(WebMap, _Media);

    function WebMap(webmap) {
      _classCallCheck(this, WebMap);

      var _this = _possibleConstructorReturn(this, (WebMap.__proto__ || Object.getPrototypeOf(WebMap)).call(this, {
        type: 'webmap',
        id: webmap.id,
        previewThumb: PREVIEW_THUMB,
        previewIcon: PREVIEW_ICON
      }));

      _this._webmap = webmap;
      _this._bookmarks = null;

      _this._placement = null;

      // The transition in Immersive, null otherwise
      _this._transition = null;
      // DOM node of the layers that are swiped
      _this._swipeLayersNodes = [];
      // Store the previous maap configuration that layer may be swiped against
      //  while the map is loading
      _this._swipePreviousWebMapLayers = null;
      _this._lastScrollPosition = null;

      if (!_this._webmap.options) {
        _this._webmap.options = {
          interaction: 'enabled'
        };
      }

      if (!_this._webmap.extras) {
        _this._webmap.extras = {
          locate: {
            enabled: false
          },
          search: {
            enabled: false
          },
          legend: {
            enabled: false
          }
        };
      }
      return _this;
    }

    _createClass(WebMap, [{
      key: 'render',
      value: function render(context) {
        var output = '';

        if (!this._webmap || !context) {
          console.log('Could not render webmap in section');
          return output;
        }

        this._placement = context.placement;

        if (this._placement == 'block') {
          var options = JSON.stringify({
            extent: this._webmap.extent,
            layers: this._webmap.layers,
            legend: this._webmap.legend,
            layers2: this._webmap.layers2
          });

          var classes = ['block', 'block-type-webmap'];

          output += (0, _WebMapBlock2.default)({
            id: this._domID,
            webmapId: this.id,
            classes: classes.join(' '),
            options: options,
            caption: this._webmap.caption,
            placeholder: _app2.default.builder.media.captionPlaceholder,
            captionEditable: app.isInBuilder
          });
        } else {
          output += (0, _WebMapBackground2.default)({
            webmapId: this.id
          });
        }

        return output;
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig() {
        var options = this._webmap.options;

        _get(WebMap.prototype.__proto__ || Object.getPrototypeOf(WebMap.prototype), '_applyConfig', this).call(this, options);

        this._applyInteraction();

        // In viewer: update map extent if defined
        // In builder: update map extent only on reset
        var allowExtentUpdate = !!(this._webmap.extent || app.isInBuilder);
        /*
        if (app.isInBuilder) {
          allowExtentUpdate = this._webmap.extent == null;
        }
        */

        // TODO: background - swipe need scrollPosition
        this.performAction({
          allowExtentUpdate: allowExtentUpdate
        }).then(function () {
          if (app.isInBuilder && this._configTabWebMap) {
            this._configTabWebMap.attachEvents();
          }
        }.bind(this), function () {
          //
        });
      }
    }, {
      key: '_applyInteraction',
      value: function _applyInteraction() {
        var interaction = this._webmap.options.interaction;

        if (app.isMobileView || _UI2.default.isMobileBrowser()) {
          interaction = 'button';
        }

        // TODO: duplicate between map/scene/page should be in Media
        //  store an object for options or always use _media.options???

        if (this._webmap.options.interaction) {
          var classes = $.map(this._node.attr('class').split(' '), function (l) {
            return l.match(/interaction-/) ? l : null;
          }).join(' ');

          this._node.removeClass(classes).addClass('interaction-' + interaction);

          this._node.find('.interaction-container').removeClass('enabled');
        }
      }
    }, {
      key: 'load',
      value: function load() {
        var resultDeferred = new _Deferred2.default();

        if (!this._node || this._isLoaded) {
          return;
        }

        this._isLoaded = true;

        this.loadMap(this._node.find('.map')[0], resultDeferred);

        return resultDeferred;
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(WebMap.prototype.__proto__ || Object.getPrototypeOf(WebMap.prototype), 'postCreate', this).call(this, params);

        if (!params.container) {
          return;
        }

        if (this._placement == 'block') {
          this._node = params.container.find('#' + this._domID);
        } else {
          this._node = params.container.find('.map[data-id="' + this.id + '"]').parent();
        }

        this._applyConfig();
      }
    }, {
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
      }
    }, {
      key: 'performAction',
      value: function performAction() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var resultDeferred = new _Deferred2.default();
        var map = this._cache[this.id] ? this._cache[this.id].map : null;

        if (!map) {
          resultDeferred.reject();
          return resultDeferred;
        }

        if (params.scrollPositionView) {
          this._lastScrollPosition = params.scrollPositionView;
        }

        if (params.transition) {
          this._transition = params.transition;
        }

        /*
        if (! _bookmarks) {
          return;
        }
        */

        /*
        if (_bookmarks && _currentBookmarkIndex != params.slideIndex) {
          var bookmark = _bookmarks[params.slideIndex - 1];
            if (bookmark && bookmark.extent) {
            map.setExtent(new Extent(bookmark.extent), false);
          }
            _currentBookmarkIndex = params.slideIndex;
        }
        */

        // TODO: Should only apply changes when changing slide

        if (map.infoWindow) {
          map.infoWindow.hide();
        }

        // Apply view configuration
        var viewInfo = this._webmap;

        var hasChangedExtent = false;

        // In viewer if viewInfo.extent is set it's applied
        // In builder it's always ignored except if forceExtentUpdate
        // True when come from inside the class ; undefined from the section
        if (params.allowExtentUpdate === true || params.allowExtentUpdate === undefined) {
          var extent = null;

          if (viewInfo.extent) {
            extent = new _Extent2.default(viewInfo.extent);
          } else {
            // Initial extent
            extent = this._getWebMapExtentFromItemExtent(this._cache[this.id].itemInfo.item.extent);
          }

          // Only apply if last extent applied was different
          if (JSON.stringify(extent.toJson()) != this._cache[this.id].lastExtentApplied || params.forceSetExtent) {
            this._cache[this.id].lastExtentApplied = JSON.stringify(extent.toJson());

            hasChangedExtent = true;

            var setExtent = function (extent) {
              map.setExtent(extent, false).then(function () {
                if (viewInfo.popup) {
                  this._applyPopupConfiguration(map, viewInfo.popup);
                }

                resultDeferred.resolve();
              }.bind(this), function () {
                resultDeferred.resolve();
              });
            }.bind(this);

            if (map.spatialReference.wkid == extent.spatialReference.wkid) {
              setExtent(extent);
            } else {
              _config2.default.defaults.geometryService.project([extent], map.spatialReference, function (features) {
                if (!features || !features[0]) {
                  return;
                }

                setExtent(features[0]);
              }.bind(this));
            }
          }
        } else {
          resultDeferred.resolve();
        }

        // Popup
        if (viewInfo.popup && !hasChangedExtent) {
          this._applyPopupConfiguration(map, viewInfo.popup);
        }

        // Apply layer config if it's a new view
        //if (params.isNewView) {
        //if (viewInfo.layers) {
        //if (false) {
        if (JSON.stringify(viewInfo.layers) != this._cache[this.id].lastLayersApplied) {
          this._cache[this.id].lastLayersApplied = JSON.stringify(viewInfo.layers);

          //  - Array of {id:'', visible:''} for the overrided layers (compared to the webmap initial state)
          //  - Only overrided layers are present there to allow the webmap to evolve outside of the app
          //     - If default visibility of layers are changed outside of the app, all view that didn't override the value will see the change
          //     - if the webmap evolve the array may reference deleted layers. That's cleaned anytime user open the Configure map View and Save
          var layerCfg = viewInfo.layers || [];
          var mapDefault = this._cache[viewInfo.id].itemInfo.itemData.operationalLayers;

          // Loop through webmap layers and set the visibility
          // The visibility is set to the section definition when defined or to the webmap initial visibility
          $.each(mapDefault, function (i, layer) {
            var override;

            if (layer.layerObject) {
              override = $(layerCfg).filter(function (i, l) {
                return l.id == layer.layerObject.id;
              });
              layer.layerObject.setVisibility(override.length ? override[0].visibility : layer.visibility);
            } else if (layer.featureCollection && layer.featureCollection.layers) {
              $.each(layer.featureCollection.layers, function (i, fcLayer) {
                override = $(layerCfg).filter(function (i, l) {
                  // Because the configuration store the map layerObject id like "mapNotes_914_0" instead of "mapNotes_914"
                  // Should change that and keep V1.0 compatibility
                  return l.id.split('_').slice(0, -1).join('_') == fcLayer.layerObject.id.split('_').slice(0, -1).join('_');
                });
                fcLayer.layerObject.setVisibility(override.length ? override[0].visibility : fcLayer.visibility);
              });
            }
          });
        }

        if (this._transition == 'swipe-vertical' || this._transition == 'swipe-horizontal') {
          if (this._swipeLayersNodes && this._swipeLayersNodes.length) {
            // TODO: refactor to be common with Immersive???

            var swipePos = app.display.windowHeight - this._lastScrollPosition;

            var BUILDER_PANEL_HEIGHT = 125;
            if (app.isInBuilder) {
              swipePos -= BUILDER_PANEL_HEIGHT;
            }

            /*
            if (! params.isActive) {
              swipePos = app.display.windowHeight;
            }
            */
            /*
            else {
              swipePos += app.display.windowHeight / 2 - 90;
            }
            */

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this._swipeLayersNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var layer = _step.value;

                var layerNode = layer.node,
                    top = swipePos,
                    right = app.display.windowWidth,
                    bottom = app.display.windowHeight,
                    left = 0;

                if (!layer.isSVGLayer) {
                  var layerPos = layerNode.position();

                  top += -layerPos.top;
                  right += -layerPos.left;
                  bottom += -layerPos.top;
                  left += -layerPos.left;
                }

                layerNode.css('clip', 'rect(' + top + 'px,' + right + 'px,' + bottom + 'px,' + left + 'px)');

                // Keep track of the swipe position for pan
                layerNode.data('sm-swipe-pos', swipePos);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        } else {
          this.resetSwipe();
        }

        if (!params.doNotApplyInteraction) {
          this._applyInteraction();
        }

        // Locate
        var enableLocate = false;
        if (this._webmap.extras && this._webmap.extras.locate && this._webmap.extras.locate.enabled) {
          enableLocate = true;
        }
        this._cache[this.id].mapCommand.toggleLocationButton(enableLocate);

        return resultDeferred;
      }
    }, {
      key: 'resetSwipe',
      value: function resetSwipe() {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._swipeLayersNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var layer = _step2.value;

            var layerNode = layer.node;

            layerNode.css('clip', '');

            layerNode.data('sm-swipe-pos', '');
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: 'loadMap',
      value: function loadMap(mapElem, resultDeferred) {
        console.log('Loading map');

        var options = {
          mapOptions: {
            smartNavigation: false
          },
          usePopupManager: true,
          editable: false,
          bingMapsKey: app.cfg.BING_MAPS_KEY,
          layerMixins: app.data.appProxies || null
        };

        if (this._webmap.extent) {
          options.mapOptions.extent = new _Extent2.default(this._webmap.extent);
        }

        this._node.addClass('media-is-loading');

        // Prevent mouse wheel while map is partialy loaded
        $(mapElem).css('pointer-events', 'none');

        _utils2.default.createMap(this.id, mapElem, options).then(_lang2.default.hitch(this, function (response) {
          var map = response.map;

          console.log('createMap ok', response);

          this._node.removeClass('media-is-loading').find('.media-loading').hide();

          //response.map.disableMapNavigation();
          // Prevent mouse wheel while map is partialy loaded
          $(mapElem).css('pointer-events', '');
          map.disableScrollWheelZoom();
          map.disableKeyboardNavigation();

          map.reposition();
          map.resize();

          this._cache[this.id] = response;

          if (app.isInBuilder) {
            this._onWebMapLoaded();
          }

          this._bookmarks = response.itemInfo.itemData.bookmarks;

          if (map.infoWindow) {
            map.infoWindow.markerSymbol = new _SimpleMarkerSymbol2.default().setSize(0);
          }

          // Let the section knows the map is loaded
          resultDeferred.resolve(this.id);

          // The event is only registered once for all views in immersive
          this._node.find('.interaction-container').click(this._onEnableButtonClick.bind(this));

          // Customize map commands +/home/- & location
          this._cache[this.id].mapCommand = new _WebMapCommand2.default(map, this._onMapCommandHomeClick.bind(this), this._zoomToBrowserLocation.bind(this), false);

          this._cache[this.id].lastExtentApplied = null;
          this._cache[this.id].lastLayersApplied = null;

          this._applyConfig();
        }));
      }
    }, {
      key: 'postLoad',
      value: function postLoad() {
        var map = this._cache[this.id].map;

        this.computeSwipeLayers(this._swipePreviousWebMapLayers);

        // Pan handler to update swiped layer(s)
        map.on('pan', function () {
          // TODO: this._isActive should be set when performAction is called properly
          // but we don't have performAction when it's becoming not visible :/
          if (!this._swipeLayersNodes || !this._isActive) {
            return;
          }

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this._swipeLayersNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var layer = _step3.value;

              var layerNode = layer.node,
                  swipePos = layerNode.data('sm-swipe-pos');

              var top = swipePos,
                  right = app.display.windowWidth,
                  bottom = app.display.windowHeight,
                  left = 0;

              if (!layer.isSVGLayer) {
                var layerPos = layerNode.position();

                top += -layerPos.top;
                right += -layerPos.left;
                bottom += -layerPos.top;
                left += -layerPos.left;
              }

              layerNode.css('clip', 'rect(' + top + 'px,' + right + 'px,' + bottom + 'px,' + left + 'px)');
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        });
      }
    }, {
      key: '_zoomToBrowserLocation',
      value: function _zoomToBrowserLocation(success, geom) {
        var map = this._cache[this.id] ? this._cache[this.id].map : null;

        if (success) {
          if (map.spatialReference.wkid != 102100 && map.spatialReference.wkid != 4326) {
            _config2.default.defaults.geometryService.project([geom], map.spatialReference, function (features) {
              if (!features || !features[0]) {
                return;
              }

              if (!map.extent.contains(features[0])) {
                map.centerAt(features[0]);
              }
            });
          } else if (!map.extent.contains(geom)) {
            map.centerAt(geom);
          }
        }
      }
    }, {
      key: '_onMapCommandHomeClick',
      value: function _onMapCommandHomeClick() {
        this.performAction({
          doNotApplyInteraction: true,
          forceSetExtent: true
        });
      }
    }, {
      key: 'computeSwipeLayers',
      value: function computeSwipeLayers(previousWebMapLayers) {
        this._swipeLayersNodes = [];
        this._swipePreviousWebMapLayers = [];

        previousWebMapLayers = previousWebMapLayers || [];
        this._webmap.layers = this._webmap.layers || [];

        // The map hasn't loaded yet, save the list of previousWebMapLayers for after map has loaded
        if (!this._cache[this.id]) {
          this._swipePreviousWebMapLayers = _lang2.default.clone(previousWebMapLayers);
          return;
        }

        /*
         * Stringify the layers config so they are comparable
         */
        var previousLayersComparable = [],
            currentLayersComparable = [];

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = previousWebMapLayers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var layer = _step4.value;

            previousLayersComparable.push(JSON.stringify(layer));
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = this._webmap.layers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _layer = _step5.value;

            currentLayersComparable.push(JSON.stringify(_layer));
          }

          // Add opposite entry for layer override set to false for previous map
          // This allow to use a webmap that has all it's layer visible and the first map is setting
          //  the visibility of one layer to false
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = previousLayersComparable[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _layer2 = _step6.value;

            // If the layer is not present
            if (currentLayersComparable.indexOf(_layer2) == -1) {
              var layerObj = JSON.parse(_layer2);
              if (layerObj.visibility === false) {
                currentLayersComparable.push(JSON.stringify({
                  id: layerObj.id,
                  visibility: true
                }));
              }
            }
          }

          /*
           * Get the difference between arrays
           */
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        var previousLayersSet = new Set(previousLayersComparable);
        var difference = currentLayersComparable.filter(function (layer) {
          return !previousLayersSet.has(layer);
        });

        /*
         * Find the DOM node for those
         */

        var isFirstSVGLayer = true;

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = difference[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _layer3 = _step7.value;

            var layerId = JSON.parse(_layer3).id,
                layerNode = this._cache[this.id].map.getLayer(layerId)._div,
                isSVGLayer = false;

            // A graphics Layer drawned as SVG
            // Those behave a little differently as there is only one swippeable
            //   container for all of them in the map
            // So those are only initialized once
            if (layerNode.rawNode) {
              if (!isFirstSVGLayer) {
                continue;
              }

              layerNode = $(layerNode.rawNode).parent()[0];
              isSVGLayer = true;
              isFirstSVGLayer = false;
            }

            this._swipeLayersNodes.push({
              node: $(layerNode),
              isSVGLayer: isSVGLayer
            });
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        console.log('**', this._swipeLayersNodes);
      }
    }, {
      key: 'serialize',
      value: function serialize() {
        return _lang2.default.clone({
          type: 'webmap',
          webmap: this._webmap
        });
      }
    }, {
      key: 'getAuthorizedTransitionsWith',
      value: function getAuthorizedTransitionsWith(media) {
        if (!media || media.id != this.id) {
          return [];
        }

        var mediaData = this.serialize().webmap,
            mediaExtent = JSON.stringify(mediaData.extent) || 'null',
            mediaLayers = JSON.stringify(mediaData.layers) || '[]',
            mediaPopup = JSON.stringify(mediaData.popup) || 'null';

        var otherMediaData = media.serialize().webmap,
            otherMediaExtent = JSON.stringify(otherMediaData.extent) || 'null',
            otherMediaLayers = JSON.stringify(otherMediaData.layers) || '[]',
            otherMediaPopup = JSON.stringify(otherMediaData.popup) || 'null';

        // If popup or location are different, can't swipe
        if (mediaPopup != otherMediaPopup || mediaExtent != otherMediaExtent) {
          return [];
        }

        // Do not allow swipe if extent is not configured
        if (mediaLayers == otherMediaLayers) {
          return [];
        }

        return ['swipe-vertical' /*, 'swipe-horizontal'*/];
      }
    }, {
      key: 'getLayersConfiguration',
      value: function getLayersConfiguration() {
        return this._webmap.layers;
      }
    }, {
      key: '_getWebMapExtentFromItemExtent',
      value: function _getWebMapExtentFromItemExtent(itemExtent) {
        if (!itemExtent || itemExtent.length != 2) {
          return null;
        }

        var bottomLeft = _webMercatorUtils2.default.geographicToWebMercator(new _Point2.default(itemExtent[0][0], itemExtent[0][1]));

        var topRight = _webMercatorUtils2.default.geographicToWebMercator(new _Point2.default(itemExtent[1][0], itemExtent[1][1]));

        // TODO: if map is not in Mercator -> reproject

        return new _Extent2.default({
          xmax: topRight.x,
          xmin: bottomLeft.x,
          ymax: topRight.y,
          ymin: bottomLeft.y,
          spatialReference: {
            wkid: 102100
          }
        });
      }
    }, {
      key: '_applyPopupConfiguration',
      value: function _applyPopupConfiguration(map, popupCfg) {
        // When an action is performed the popup will be closed
        // But features aren't cleared so it can be restored
        map.infoWindow.hide();

        if (popupCfg) {
          var layer = map.getLayer(popupCfg.layerId),

          // TODO some MapService layer seems to require this
          // need to investigate more to make sure there is no other way
          // also if the popup contains multiple features, only the first feature will be displayed
          serviceId = popupCfg.layerId ? popupCfg.layerId.split('_').slice(0, -1).join('_') : '',
              layer2 = map.getLayer(serviceId);

          map.infoWindow.clearFeatures();

          if (layer) {
            this._applyPopupConfigurationStep2(map, popupCfg);
          }
          // TODO
          else if (layer2) {
              var layerIdx = popupCfg.layerId.split('_').slice(-1).join('_'),
                  layerUrl = layer2.url + '/' + layerIdx;

              this._applyPopupConfigurationStep2Alt(map, popupCfg, serviceId, layerIdx, layerUrl);
            }
            // On FS the layer will be null until loaded...
            else var handle = map.on('update-end', function () {
                this._applyPopupConfiguration(map, popupCfg);
                handle.remove();
              });
        }
      }
    }, {
      key: '_applyPopupConfigurationStep2',
      value: function _applyPopupConfigurationStep2(map, popupCfg) {
        var query = new _query2.default(),
            layer = map.getLayer(popupCfg.layerId);

        if (!layer) {
          return;
        }

        query.objectIds = [popupCfg.fieldValue];

        // Feature Service
        if (!layer._collection) {
          query.returnGeometry = true;
          query.outFields = ['*']; // popupCfg.fieldName ?
          query.outSpatialReference = map.spatialReference;
        }

        // TODO: Image Services
        if (!layer.queryFeatures) {
          return;
        }

        layer.queryFeatures(query).then(function (featureSet) {
          this._applyPopupConfigurationStep3(map, popupCfg, featureSet.features);
        }.bind(this));
      }
    }, {
      key: '_applyPopupConfigurationStep2Alt',
      value: function _applyPopupConfigurationStep2Alt(map, popupCfg, serviceId, layerIdx, layerUrl) {
        var queryTask = new _QueryTask2.default(layerUrl),
            query = new _query2.default(),
            layer = map.getLayer(serviceId);

        if (!layer) {
          return;
        }

        query.objectIds = [popupCfg.fieldValue];
        query.returnGeometry = true;
        query.outFields = ['*']; // popupCfg.fieldName ?
        query.outSpatialReference = map.spatialReference;

        queryTask.execute(query, function (featureSet) {
          this._applyPopupConfigurationStep3(map, popupCfg, featureSet.features, serviceId, layerIdx);
        }.bind(this));
      }
    }, {
      key: '_applyPopupConfigurationStep3',
      value: function _applyPopupConfigurationStep3(map, popupCfg, features, serviceId, layerIdx) {
        if (!map || !popupCfg || !features || !features.length) {
          return;
        }

        var geom = features[0].geometry,
            center = null;

        if (popupCfg.anchorPoint) {
          center = new _Point2.default(popupCfg.anchorPoint);
        } else {
          center = geom.getExtent() ? geom.getExtent().getCenter() : geom;
        }

        if (serviceId) {
          features[0].infoTemplate = map.getLayer(serviceId).infoTemplates[layerIdx].infoTemplate;
          map.infoWindow.setContent(features[0].getContent());
        } else {
          map.infoWindow.setFeatures(features);
        }

        map.infoWindow.show(center);

        // Center the map is the geometry isn't visible
        if (!map.extent.contains(center)) {
          map.centerAt(center);
        }
      }
    }]);

    return WebMap;
  }(_Media3.default);

  exports.default = WebMap;
  module.exports = exports['default'];
});
//# sourceMappingURL=WebMap.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/WebSceneBlock', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"block block-type-webscene\" contenteditable=\"false\">\r\n  <div class=\"block-media\">\r\n    <div class=\"media-loading\">\r\n      <span class=\"large-loader\"></span>\r\n    </div>\r\n    <div class=\"media-media scene\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.websceneId || (depth0 != null ? depth0.websceneId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"websceneId","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n    <div class=\"interaction-container\">\r\n      <button class=\"btn btn-default btn-sm\">\r\n        <span class=\"int-container-disabled\">\r\n          <span class=\"glyphicon glyphicon-fullscreen\"></span>\r\n          Explore Map\r\n        </span>\r\n        <span class=\"int-container-enabled\">\r\n          Stop Exploring\r\n        </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"builder-ui media-cfg-invite\"></div>\r\n    <div class=\"builder-ui media-delete\"></div>\r\n  </div>\r\n  <div class=\"block-caption\" data-placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\""
    + escapeExpression(((helper = (helper = helpers.captionEditable || (depth0 != null ? depth0.captionEditable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"captionEditable","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n  <div class=\"builder-ui media-cfg-panel\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/WebSceneBackground', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"media-loading\">\r\n  <span class=\"large-loader\"></span>\r\n</div>\r\n<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"media-media scene\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.websceneId || (depth0 != null ? depth0.websceneId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"websceneId","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n<div class=\"interaction-container\">\r\n  <button class=\"btn btn-default btn-sm\">\r\n    <span class=\"int-container-disabled\">\r\n      <span class=\"glyphicon glyphicon-fullscreen\"></span>\r\n      Explore Map\r\n    </span>\r\n    <span class=\"int-container-enabled\">\r\n      Stop Exploring\r\n    </span>\r\n  </button>\r\n</div>\r\n<div class=\"builder-ui media-cfg-invite\"></div>\r\n<div class=\"builder-ui media-cfg-panel\"></div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/WebSceneBlockError', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"block block-type-webscene media-error\" contenteditable=\"false\">\r\n  Sorry this 3D map is not supported on your device.\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/WebSceneBackgroundError', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"media-media scene media-error\">\r\n  Sorry this 3D map is not supported on your device.\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/media/WebScene',[],function(){});
define('storymaps-react/tpl/view/media/WebScene',['module', 'exports', './Media', 'lib-build/hbars!./WebSceneBlock', 'lib-build/hbars!./WebSceneBackground', 'lib-build/hbars!./WebSceneBlockError', 'lib-build/hbars!./WebSceneBackgroundError', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'storymaps/tpl/utils/UI', 'esri/IdentityManager', 'lib-build/less!./WebScene'], function (module, exports, _Media2, _WebSceneBlock, _WebSceneBackground, _WebSceneBlockError, _WebSceneBackgroundError, _app, _UI, _IdentityManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _WebSceneBlock2 = _interopRequireDefault(_WebSceneBlock);

  var _WebSceneBackground2 = _interopRequireDefault(_WebSceneBackground);

  var _WebSceneBlockError2 = _interopRequireDefault(_WebSceneBlockError);

  var _WebSceneBackgroundError2 = _interopRequireDefault(_WebSceneBackgroundError);

  var _app2 = _interopRequireDefault(_app);

  var _UI2 = _interopRequireDefault(_UI);

  var _IdentityManager2 = _interopRequireDefault(_IdentityManager);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/scene.png';
  var PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/scene.png';

  var NEED_PORTAL_INIT = true;

  var WebScene = function (_Media) {
    _inherits(WebScene, _Media);

    function WebScene(webscene) {
      _classCallCheck(this, WebScene);

      var _this = _possibleConstructorReturn(this, (WebScene.__proto__ || Object.getPrototypeOf(WebScene)).call(this, {
        type: 'webscene',
        id: webscene.id,
        previewThumb: PREVIEW_THUMB,
        previewIcon: PREVIEW_ICON
      }));

      _this._webscene = webscene;

      _this._placement = null;

      _this._isSupported = _UI2.default.hasWebGL() && !_UI2.default.isMobileBrowser();

      if (!_this._isSupported) {
        app.data.errorWebGL = true;
      }

      if (!_this._webscene.options) {
        _this._webscene.options = {
          interaction: 'enabled'
        };
      }

      if (_this._webscene.slide === undefined) {
        _this._webscene.slide = -1;
      }
      return _this;
    }

    _createClass(WebScene, [{
      key: 'render',
      value: function render(context) {
        var output = '';

        if (!this._webscene || !context) {
          console.log('Could not render webscene in section');
          return output;
        }

        this._placement = context.placement;

        if (context.placement == 'background') {

          /*
          if (! UIUtils.hasWebGL() || UIUtils.isMobileBrowser()) {
            throw 'RUNTIME-NO-WEBGL';
          }
          */

          if (this._isSupported) {
            output += (0, _WebSceneBackground2.default)({
              id: this._domID,
              websceneId: this.id
            });
          } else {
            output += (0, _WebSceneBackgroundError2.default)({
              id: this._domID
            });
          }
        } else {
          if (this._isSupported) {
            output += (0, _WebSceneBlock2.default)({
              id: this._domID,
              websceneId: this.id,
              caption: this._webscene.caption,
              placeholder: _app2.default.builder.media.captionPlaceholder,
              captionEditable: app.isInBuilder
            });
          } else {
            output += (0, _WebSceneBlockError2.default)({
              id: this._domID
            });
          }
        }

        return output;
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig() {
        var options = this._webscene.options;

        if (!this._isSupported) {
          return;
        }

        _get(WebScene.prototype.__proto__ || Object.getPrototypeOf(WebScene.prototype), '_applyConfig', this).call(this, options);

        this._applyInteraction();

        this.performAction({});

        if (app.isInBuilder && this._configTabWebScene) {
          this._configTabWebScene.attachEvents();
        }
      }
    }, {
      key: '_applyInteraction',
      value: function _applyInteraction() {
        // TODO: duplicate between map/scene/page should be in Media
        //  store an object for options or always use _media.options???
        if (this._webscene.options.interaction) {
          var classes = $.map(this._node.attr('class').split(' '), function (l) {
            return l.match(/interaction-/) ? l : null;
          }).join(' ');

          this._node.removeClass(classes).addClass('interaction-' + this._webscene.options.interaction);

          this._node.find('.interaction-container').removeClass('enabled');
        }
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(WebScene.prototype.__proto__ || Object.getPrototypeOf(WebScene.prototype), 'postCreate', this).call(this, params);

        if (!params.container) {
          return;
        }

        if (this._placement == 'block') {
          this._node = params.container.find('#' + this._domID);
        } else {
          this._node = params.container.find('.scene[data-id="' + this.id + '"]').parent();
        }

        this._applyConfig();
      }
    }, {
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: 'load',
      value: function load() {
        if (!this._node || this._isLoaded || !this._isSupported) {
          return;
        }

        this._isLoaded = true;

        console.log('scene: ' + this.id);

        this._node.addClass('media-is-loading');

        var userCredentials = _IdentityManager2.default.toJson();

        // For some reason if the require is not done there, it won't load...
        require(['esri4/config', 'esri4/core/urlUtils', 'esri4/identity/IdentityManager', 'esri4/identity/OAuthInfo', 'esri4/portal/Portal', 'esri4/views/SceneView', 'esri4/portal/PortalItem', 'esri4/WebScene', 'esri4/core/watchUtils', 'lib-build/css!esri4/css/main.css'], function (esriConfig, urlUtils, esriId, OAuthInfo, Portal, SceneView, PortalItem, WebScene, watchUtils) {
          var portalUrl = app.indexCfg.sharingurl.split('/sharing/')[0];
          esriConfig.portalUrl = portalUrl;

          // Proxy rules
          esriConfig.request.proxyUrl = location.protocol + app.indexCfg.proxyurl;

          if (app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length) {
            $.each(app.cfg.PROXY_RULES, function (i, rule) {
              if (rule && rule.urlPrefix && rule.proxyUrl) {
                urlUtils.addProxyRule(rule);
              }
            });
          }

          if (NEED_PORTAL_INIT) {
            if (app.indexCfg.oAuthAppId) {
              var info = new OAuthInfo({
                appId: app.indexCfg.oAuthAppId,
                popup: false,
                portalUrl: 'https:' + portalUrl
              });

              esriId.registerOAuthInfos([info]);

              esriId.checkSignInStatus('https:' + app.indexCfg.sharingurl.split('/sharing/')[0] + '/sharing').then(loadStep2.bind(this), function () {
                console.error('Error during oAuth process for web scene');
                loadStep2.bind(this)();
              }.bind(this));
            } else {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                // initialize also add a serverInfo with www.arcgis.com
                //esriId.initialize(userCredentials);

                for (var _iterator = userCredentials.credentials[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _info = _step.value;

                  esriId.registerToken(_info);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              var portal = new Portal({
                url: app.indexCfg.sharingurl.split('/sharing/')[0],
                authMode: 'immediate'
              });

              portal.load().then(loadStep2.bind(this));
            }

            NEED_PORTAL_INIT = false;
          } else {
            loadStep2.bind(this)();
          }

          // Web Scene loading
          function loadStep2() {
            console.log('web scene IdentityManager:', esriId);

            var scene = new WebScene({
              portalItem: new PortalItem({
                id: this.id
              })
            });

            var view = new SceneView({
              map: scene,
              container: this._node.find('.scene')[0]
            });

            // Store in the section cache
            this._cache[this.id] = {
              scene: scene,
              view: view
            };

            view.then(function () {
              this._cache[this.id].initialViewpoint = view.viewpoint;

              view.ui.move('zoom', 'bottom-right');
              view.ui.move('compass', 'bottom-right');

              this._node.find('.media-loading').hide();
            }.bind(this));

            // Disable wheel
            view.surface.addEventListener('wheel', function (event) {
              event.stopImmediatePropagation();
            }, true);

            // Apply the slide
            if (this._webscene.slide !== undefined && this._webscene.slide !== -1) {
              watchUtils.init(scene, 'presentation.slides', function (slides) {
                if (slides && slides.items && slides.items.length) {
                  slides.items[this._webscene.slide].applyTo(view);
                }

                if (app.isInBuilder) {
                  this._onWebSceneLoaded();
                }
              }.bind(this));
            } else {
              if (app.isInBuilder) {
                this._onWebSceneLoaded();
              }
            }

            // The event is only registered once for all views in immersive
            this._node.removeClass('media-is-loading').find('.interaction-container').click(this._onEnableButtonClick.bind(this));
          }
        }.bind(this));
      }
    }, {
      key: 'performAction',
      value: function performAction() {
        var media = this._cache[this.id],
            scene = media ? media.scene : null,
            view = media ? media.view : null;

        if (!scene || !view || !view.ready || !this._isSupported) {
          return;
        }

        console.log('performAction', this._webscene.slide);

        if (this._webscene.slide === -1) {
          if (this._cache[this.id].initialViewpoint) {
            view.goTo(this._cache[this.id].initialViewpoint);
          }
        } else if (this._webscene.slide !== undefined && this._webscene.slide <= scene.presentation.slides.items.length) {
          scene.presentation.slides.items[this._webscene.slide].applyTo(view);
        }

        this._applyInteraction();
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
      }
    }]);

    return WebScene;
  }(_Media3.default);

  exports.default = WebScene;
  module.exports = exports['default'];
});
//# sourceMappingURL=WebScene.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/WebPageBlock', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"block block-webpage scroll-off\" contenteditable=\"false\">\r\n  <div class=\"block-media\">\r\n    <div class=\"media-loading\">\r\n      <span class=\"large-loader\"></span>\r\n    </div>\r\n    <iframe class=\"media-media webpage\" src=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\"></iframe>\r\n    <div class=\"interaction-container\">\r\n      <button class=\"btn btn-default btn-sm\">\r\n        <span class=\"int-container-disabled\">\r\n          <span class=\"glyphicon glyphicon-fullscreen\"></span>\r\n          Explore\r\n        </span>\r\n        <span class=\"int-container-enabled\">\r\n          Stop Exploring\r\n        </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"builder-ui media-cfg-invite\"></div>\r\n    <div class=\"builder-ui media-delete\"></div>\r\n  </div>\r\n  <div class=\"block-caption\" data-placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" contenteditable=\""
    + escapeExpression(((helper = (helper = helpers.captionEditable || (depth0 != null ? depth0.captionEditable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"captionEditable","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n  <div class=\"builder-ui media-cfg-panel\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/media/WebPageBackground', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"media-loading\">\r\n  <span class=\"large-loader\"></span>\r\n</div>\r\n<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\">\r\n  <iframe class=\"media-media webpage\" data-src=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" style=\"width: 100%; height: 100%;\"></iframe>\r\n  <div class=\"interaction-container\">\r\n    <button class=\"btn btn-default btn-sm\">\r\n      <span class=\"int-container-disabled\">\r\n        <span class=\"glyphicon glyphicon-fullscreen\"></span>\r\n        Explore\r\n      </span>\r\n      <span class=\"int-container-enabled\">\r\n        Stop Exploring\r\n      </span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"builder-ui media-cfg-invite\"></div>\r\n<div class=\"builder-ui media-cfg-panel\"></div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/media/WebPage',[],function(){});
define('storymaps-react/tpl/view/media/WebPage',['module', 'exports', './Media', 'lib-build/hbars!./WebPageBlock', 'lib-build/hbars!./WebPageBackground', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'dojo/Deferred', 'storymaps/tpl/utils/UI', 'lib-build/less!./WebPage'], function (module, exports, _Media2, _WebPageBlock, _WebPageBackground, _app, _Deferred, _UI) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _WebPageBlock2 = _interopRequireDefault(_WebPageBlock);

  var _WebPageBackground2 = _interopRequireDefault(_WebPageBackground);

  var _app2 = _interopRequireDefault(_app);

  var _Deferred2 = _interopRequireDefault(_Deferred);

  var _UI2 = _interopRequireDefault(_UI);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/webpage.png';
  var PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/webpage.png';

  var WebPage = function (_Media) {
    _inherits(WebPage, _Media);

    function WebPage(webpage) {
      _classCallCheck(this, WebPage);

      var _this = _possibleConstructorReturn(this, (WebPage.__proto__ || Object.getPrototypeOf(WebPage)).call(this, {
        type: 'webpage',
        id: webpage.url,
        previewThumb: PREVIEW_THUMB,
        previewIcon: PREVIEW_ICON
      }));

      _this._webpage = webpage;
      _this._url = webpage.url;

      _this._nodeMedia = null;
      _this._placement = null;

      // TODO: shouldn't be needed
      if (!_this._webpage.options) {
        _this._webpage.options = {
          interaction: 'enabled'
        };
      }
      return _this;
    }

    _createClass(WebPage, [{
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: 'render',
      value: function render(context) {
        var output = '';

        if (!this._webpage || !context) {
          console.log('Could not render webpage in section');
          return output;
        }

        this._placement = context.placement;

        if (this._placement == 'block') {
          output += (0, _WebPageBlock2.default)({
            id: this._domID,
            url: this._url,
            caption: this._webpage.caption,
            placeholder: _app2.default.builder.media.captionPlaceholder,
            captionEditable: app.isInBuilder
          });
        } else if (context.placement == 'background') {
          var optClass = '';

          /*
          if (this._webpage.requirements) {
            if (this._webpage.requirements.indexOf('WEBGL') > -1) {
              if (! UIUtils.hasWebGL() || UIUtils.isMobileBrowser()) {
                throw 'RUNTIME-NO-WEBGL';
              }
            }
          }
          */

          output += (0, _WebPageBackground2.default)({
            id: this._domID,
            url: this._url,
            classes: 'webpage-container' + optClass
          });
        }

        return output;
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(WebPage.prototype.__proto__ || Object.getPrototypeOf(WebPage.prototype), 'postCreate', this).call(this, params);

        if (!params.container) {
          return;
        }

        if (this._placement == 'block') {
          this._node = params.container.find('#' + this._domID);
          this._nodeMedia = this._node.find('iframe');
        } else {
          this._nodeMedia = params.container.find('.webpage[data-src="' + this._url + '"]');
          this._node = this._nodeMedia.parents('.background').eq(0);
        }

        this._applyConfig();
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig() {
        var options = this._webpage.options;

        _get(WebPage.prototype.__proto__ || Object.getPrototypeOf(WebPage.prototype), '_applyConfig', this).call(this, options);

        var interaction = this._webpage.options.interaction;

        if (app.isMobileView || _UI2.default.isMobileBrowser()) {
          interaction = 'button';
        }

        // TODO: duplicate between map/scene/page should be in Media
        //  store an object for options or always use _media.options???
        if (this._webpage.options.interaction) {
          var classes = $.map(this._node.attr('class').split(' '), function (l) {
            return l.match(/interaction-/) ? l : null;
          }).join(' ');

          this._node.removeClass(classes).addClass('interaction-' + interaction);
        }
      }
    }, {
      key: 'load',
      value: function load() {
        var resultDeferred = new _Deferred2.default();

        if (!this._nodeMedia || this._isLoaded) {
          //resultDeferred.reject();
          return resultDeferred;
        }

        this._isLoaded = true;

        this._nodeMedia.parent('.webpage-container').addClass('initialized');

        console.log('webpage: ' + this._nodeMedia.data('src'));

        this._nodeMedia.attr('src', this._nodeMedia.data('src')).load(function () {
          this._node.find('.media-loading').hide();
        }.bind(this));
        this._node.find('.interaction-container').click(this._onEnableButtonClick.bind(this));

        this._node.on('mouseup touchstart', function () {
          this._node.addClass('scroll-off');
        }.bind(this));

        this._node.on('mousedown touchend', function () {
          this._node.removeClass('scroll-off');
        }.bind(this));

        this._node.mouseleave(function () {
          this._node.addClass('scroll-off');
        }.bind(this));

        this._nodeMedia.mouseleave(function () {
          this._node.addClass('scroll-off');
        }.bind(this));

        resultDeferred.resolve();

        return resultDeferred;
      }
    }, {
      key: 'performAction',
      value: function performAction(params) {
        if (!params || !params.viewIndex || !params.isActive) {
          return;
        }

        try {
          this._nodeMedia[0].contentWindow.performCascadeAction(params);
        } catch (e) {
          //
        }
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
      }
    }]);

    return WebPage;
  }(_Media3.default);

  exports.default = WebPage;
  module.exports = exports['default'];
});
//# sourceMappingURL=WebPage.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/Empty', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"media-empty\">\r\n  <div class=\"me-placeholder\"></div>\r\n  <div class=\"media-empty-add\">\r\n    <img class=\"media-empty-icon-all\" src=\"resources/tpl/builder/icons/text-editor/Media.png\" />\r\n    <div class=\"media-empty-icon-image\">\r\n      <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div class=\"media-empty-label\">"
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/media/Empty',[],function(){});
define('storymaps-react/tpl/view/media/Empty',['module', 'exports', './Media', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'lib-build/hbars!./Empty', 'dojo/_base/lang', 'lib-build/less!./Empty'], function (module, exports, _Media2, _app, _Empty, _lang) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _app2 = _interopRequireDefault(_app);

  var _Empty2 = _interopRequireDefault(_Empty);

  var _lang2 = _interopRequireDefault(_lang);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/image.jpg';
  var PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/image.png';

  var Empty = function (_Media) {
    _inherits(Empty, _Media);

    function Empty() {
      _classCallCheck(this, Empty);

      var _this = _possibleConstructorReturn(this, (Empty.__proto__ || Object.getPrototypeOf(Empty)).call(this, {
        type: 'empty',
        id: null,
        previewThumb: PREVIEW_THUMB,
        previewIcon: PREVIEW_ICON
      }));

      _this._onEdit = null;
      return _this;
    }

    _createClass(Empty, [{
      key: 'render',
      value: function render(context) {
        if (!context) {
          console.log('Could not render webmap in section');
          return '';
        }

        if (context.placement == 'block') {
          return '';
        } else {
          return (0, _Empty2.default)({
            id: this._domID,
            label: _app2.default.builder.immersiveViewPanel.addMedia
          });
        }
      }
    }, {
      key: 'load',
      value: function load() {
        //
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(Empty.prototype.__proto__ || Object.getPrototypeOf(Empty.prototype), 'postCreate', this).call(this, params);

        if (!params.container) {
          return;
        }

        this._node = params.container.find('#' + this._domID).parent();

        this._node.find('.me-placeholder').css('backgroundImage', 'url("resources/tpl/builder/icons/immersive/background-placeholder.jpg")');
        this._node.find('.media-empty-add').addClass('authorized-' + (params.mediaIcon || 'all')).click(this.onPickMedia.bind(this));
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
      }
    }, {
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: 'performAction',
      value: function performAction() {}
      //


      //
      // Builder
      //

    }, {
      key: 'serialize',
      value: function serialize() {
        return _lang2.default.clone({
          type: 'empty',
          empty: 'empty'
        });
      }
    }, {
      key: 'onPickMedia',
      value: function onPickMedia() {
        this._onAction('swap');
      }
    }]);

    return Empty;
  }(_Media3.default);

  exports.default = Empty;
  module.exports = exports['default'];
});
//# sourceMappingURL=Empty.js.map
;

define('lib-build/less!storymaps-react/tpl/view/media/Color',[],function(){});
define('storymaps-react/tpl/view/media/Color',['module', 'exports', './Media', 'dojo/_base/lang', 'lib-build/less!./Color'], function (module, exports, _Media2, _lang) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _lang2 = _interopRequireDefault(_lang);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Color = function (_Media) {
    _inherits(Color, _Media);

    function Color(color) {
      _classCallCheck(this, Color);

      var _this = _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this, {
        type: 'color',
        id: null,
        previewThumb: '',
        previewIcon: ''
      }));

      _this._color = color;
      return _this;
    }

    _createClass(Color, [{
      key: 'render',
      value: function render(context) {
        if (!this._color || !context) {
          console.log('Could not render color in section');
          return '';
        }

        return '<div class="media-color" style="background-color: ' + this._color.value + '"></div>';
      }
    }, {
      key: 'load',
      value: function load() {
        //
      }
    }, {
      key: 'serialize',
      value: function serialize() {
        return _lang2.default.clone({
          type: 'color',
          color: this._color
        });
      }
    }]);

    return Color;
  }(_Media3.default);

  exports.default = Color;
  module.exports = exports['default'];
});
//# sourceMappingURL=Color.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/media/CreditsItemViewer', ['Handlebars'], function (Handlebars) { return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" class=\"cr-item-input cr-source cr-link\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"source","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"cr-item-input cr-source\">"
    + escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"source","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<li class=\"cr-item viewer\">\r\n  <div class=\"cr-item-main\">\r\n    <div class=\"cr-input-container first\">\r\n      <div class=\"cr-item-input cr-content\">"
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n    <span class=\"cr-pipe\"></span>\r\n    <div class=\"cr-input-container\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.link : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\r\n</li>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/media/Credits',[],function(){});
define('storymaps-react/tpl/view/media/Credits',['module', 'exports', './Media', 'lib-build/hbars!./CreditsItemViewer', 'lib-build/less!./Credits'], function (module, exports, _Media2, _CreditsItemViewer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Media3 = _interopRequireDefault(_Media2);

  var _CreditsItemViewer2 = _interopRequireDefault(_CreditsItemViewer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Credits = function (_Media) {
    _inherits(Credits, _Media);

    function Credits(credits) {
      _classCallCheck(this, Credits);

      var _this = _possibleConstructorReturn(this, (Credits.__proto__ || Object.getPrototypeOf(Credits)).call(this, {
        type: 'credits',
        id: null,
        previewThumb: '',
        previewIcon: ''
      }));

      _this._credits = credits;
      return _this;
    }

    _createClass(Credits, [{
      key: 'render',
      value: function render(context) {
        if (!this._credits || !context) {
          console.log('Could not render credits block in section');
          return '';
        }

        var markup = '<div id="' + this._domID + '" class="block block-type-credits"><ul class="cr-list">';

        if (this._credits.length) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._credits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var credit = _step.value;

              markup += (0, _CreditsItemViewer2.default)({
                label: credit.label,
                link: credit.link,
                source: credit.source,
                empty: false,
                incomplete: false
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        markup += '</ul></div>';

        return markup;
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _get(Credits.prototype.__proto__ || Object.getPrototypeOf(Credits.prototype), 'postCreate', this).call(this, params);

        if (!params.container) {
          return;
        }

        this._node = params.container.find('#' + this._domID);
      }
    }, {
      key: 'load',
      value: function load() {
        //
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
      }
    }, {
      key: 'getNode',
      value: function getNode() {
        return this._node;
      }
    }, {
      key: 'performAction',
      value: function performAction() {
        //
      }
    }]);

    return Credits;
  }(_Media3.default);

  exports.default = Credits;
  module.exports = exports['default'];
});
//# sourceMappingURL=Credits.js.map
;

define('lib-build/css!storymaps/tpl/view/media/Discover',[],function(){});
define('storymaps/tpl/view/media/Discover',[
  'lib-build/css!./Discover'
], function(
  //viewCss
) {
  return function Discover(discover) {
    this.render = function(context) {
      var output = '';

      if (! discover || ! context) {
        console.log('Could not render Discover block in section');
        return output;
      }

      output += '<div class="discover">';
      output += ' <strong>' + discover.title + '</strong>';
      output += ' <table><tr>';
      $.each(discover.items, function(i, item) {
        output += '<td><div class="discover-item"><a href="' + item.url + '" target="_blank"><img src="' + item.thumbnail + '" /><div>' + item.title + '</div></a></div></td>';
      });
      output += ' </tr></table>';
      output += '</div>';

      return output;
    };
  };
});

define('storymaps-react/tpl/view/media/FactoryViewer',['module', 'exports', './Text', './Image', './ImageGallery', './Video', './WebMap', './WebScene', './WebPage', './Empty', './Color', './Credits', 'storymaps/tpl/view/media/Discover'], function (module, exports, _Text, _Image, _ImageGallery, _Video, _WebMap, _WebScene, _WebPage, _Empty, _Color, _Credits, _Discover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Text2 = _interopRequireDefault(_Text);

  var _Image2 = _interopRequireDefault(_Image);

  var _ImageGallery2 = _interopRequireDefault(_ImageGallery);

  var _Video2 = _interopRequireDefault(_Video);

  var _WebMap2 = _interopRequireDefault(_WebMap);

  var _WebScene2 = _interopRequireDefault(_WebScene);

  var _WebPage2 = _interopRequireDefault(_WebPage);

  var _Empty2 = _interopRequireDefault(_Empty);

  var _Color2 = _interopRequireDefault(_Color);

  var _Credits2 = _interopRequireDefault(_Credits);

  var _Discover2 = _interopRequireDefault(_Discover);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var FactoryViewer = function () {
    function FactoryViewer() {
      _classCallCheck(this, FactoryViewer);
    }

    _createClass(FactoryViewer, null, [{
      key: 'getClasses',
      value: function getClasses() {
        return {
          Text: _Text2.default,

          Image: _Image2.default,
          ImageGallery: _ImageGallery2.default,
          Video: _Video2.default,
          WebMap: _WebMap2.default,
          WebScene: _WebScene2.default,
          WebPage: _WebPage2.default,

          Empty: _Empty2.default,

          Color: _Color2.default,
          Credits: _Credits2.default,
          Discover: _Discover2.default
        };
      }
    }, {
      key: 'createInstance',
      value: function createInstance(mediaJSON, mediaCache) {
        var media = this._parseMedia(mediaJSON.type, mediaJSON, mediaCache);

        if (media.setCache && mediaCache) {
          media.setCache(mediaCache);
        }

        if (mediaJSON.alternate) {
          var alternateMedia = this._parseMedia(mediaJSON.alternate, mediaJSON, mediaCache);

          if (alternateMedia.setCache && mediaCache) {
            alternateMedia.setCache(mediaCache);
          }

          media.setAlternate(alternateMedia);
        }

        return media;
      }
    }, {
      key: '_parseMedia',
      value: function _parseMedia(type, mediaJSON) {
        var media = null;

        if (type && !mediaJSON[type]) {
          console.error('Invalid json for: ', mediaJSON);
          return media;
        }

        var classes = this.getClasses();

        if (type == 'text') {
          media = new classes.Text(mediaJSON.text);
        } else if (type == 'image') {
          media = new classes.Image(mediaJSON.image);
        } else if (type == 'image-gallery') {
          media = new classes.ImageGallery(mediaJSON['image-gallery']);
        } else if (type == 'video') {
          media = new classes.Video(mediaJSON.video);
        } else if (type == 'webmap') {
          media = new classes.WebMap(mediaJSON.webmap);
        } else if (type == 'webscene') {
          media = new classes.WebScene(mediaJSON.webscene);
        } else if (type == 'webpage') {
          media = new classes.WebPage(mediaJSON.webpage);
        } else if (type == 'color') {
          media = new classes.Color(mediaJSON.color);
        } else if (type == 'credits') {
          media = new classes.Credits(mediaJSON.credits);
        } else if (type == 'discover') {
          media = new classes.Discover(mediaJSON.discover);
        } else if (type == 'empty') {
          media = new classes.Empty(mediaJSON.empty);
        } else {
          console.error('Could not find corresponding media for: ', mediaJSON);
        }

        return media;
      }
    }]);

    return FactoryViewer;
  }();

  exports.default = FactoryViewer;
  module.exports = exports['default'];
});
//# sourceMappingURL=FactoryViewer.js.map
;

define('lib-build/less!storymaps/tpl/view/section/Common',[],function(){});
define('storymaps/tpl/view/section/Common',[
  '../../utils/UI',
  'lib-build/less!./Common'
],
function(
  UIUtils
) {

  /*
  function resizeSnapSection2(sectionIndex, sectionTop)
  {
    var posY = sectionTop.toString().slice(-2),
        sectionPos = sectionIndex + 1;

      console.log(sectionIndex, sectionTop, posY);

    if (posY > 50) {
      posY -= 50;
    }

    posY -= 33;

    if (posY < 0) {
      posY = 0;
    }

    // TODO: should use an ID for builder
    UIUtils.addCSSRule(
      '.section:nth-child(' + sectionPos + ').active .background { top: ' + posY + 'px; }',
      'section-bg-' + sectionPos
    );

    // TODO
    if ($(this).hasClass('section-layout-snap-click-action')) {
      UIUtils.addCSSRule(
        '.section:nth-child(' + sectionPos + ').active .foreground { top: ' + posY + 'px; }',
        'section-fg-' + sectionPos
      );
    }
  }
  */

  /*
  function resizeSnapSection(sectionNode)
  {
    var sectionIndex = sectionNode.index() + 1,
        posY = parseInt(sectionNode.position().top).toString().slice(-2);

    console.log(sectionIndex, sectionNode.position().top, posY);

    if (posY > 50) {
      posY -= 50;
    }

    posY -= 37;

    if (posY < 0) {
      posY = 0;
    }

    UIUtils.addCSSRule(
      '.section:nth-child(' + sectionIndex + ').active .background { top: ' + posY + 'px; }',
      'section-bg-' + sectionIndex
    );

    // TODO
    if ($(this).hasClass('section-layout-snap-click-action')) {
      UIUtils.addCSSRule(
        '.section:nth-child(' + sectionIndex + ').active .foreground { top: ' + posY + 'px; }',
        'section-fg-' + sectionIndex
      );
    }
  }
  */

  return {
    initMedia: function(media, mediaCache) {
      return app.ui.MediaFactory.createInstance(media, mediaCache);
    },
    checkErrors: function(config, section, index) {
      var hasError = false;

      //
      // TODO for the prototype, would be best if the message was displayed on screen
      //  instead of in the console
      //

      // cover, sequence, snap-caption, credits
      if (section.background && section.foreground) {
        if (config.backgroundMedia.indexOf(section.background.type) < 0) {
          console.error('Section ', index, ' is using invalid background');
          hasError = true;
        }

        if (section.foreground.layout) {
          if (! config.foregroundLayout || ! config.foregroundLayout.length || config.foregroundLayout.indexOf(section.foreground.layout) < 0) {
            console.error('Section ', index, ' is using invalid foreground');
            hasError = true;
          }
        }
      }
      // Other snap
      else if (section.views) {
        $.each(section.views, function(i, view) {
          if (config.backgroundMedia.indexOf(view.background.type) < 0) {
            console.error('Section ', index, ' - view ' + i + 'is using invalid background');
            hasError = true;
          }
        });
      }
      else {
        console.error('Section ', index, ' is not using a proper background/foreground configuration');
      }

      if (hasError) {
        console.error('Section', index, ' ignored');
        return;
      }
    },
    renderBlocks: function(blocksJSON) {
      var resMarkup = '',
          lastBlockType = null,
          blocks = [],
          block = null,
          style = '';

      $.each(blocksJSON, function(i, blockJSON) {
        block = app.ui.MediaFactory.createInstance(blockJSON);
        style = blockJSON[blockJSON.type].style || [];

        if (! block) {
          return;
        }

        if (! lastBlockType || lastBlockType != 'text') {
          style.push('first-letter-huge');
        }

        resMarkup += block.render({
          placement: 'block',
          style: style
        });

        lastBlockType = blockJSON.type;

        blocks.push(block);
      });

      return {
        output: resMarkup,
        blocks: blocks
      };
    },

    createBlock: function(media) {
      var block = app.ui.MediaFactory.createInstance(media);
      return block;
    },

    // TODO: should renderBackground also init the media?
    renderBackground: function(params) {
      var output = '';

      params = params || {};

      if (! params.media) {
        return output;
      }

      // from now alternate is only for mobile
      if (UIUtils.isMobileBrowser() && params.media.getAlternate && params.media.getAlternate()) {
        params.media = params.media.getAlternate();
      }

      if (! params.noBackgroundTag) {
        var bgOptions = ' ' + (params.media.options || '');

        var optClass = [];
        if (params.transition) {
          optClass.push(' transition-' + params.transition);
        }

        output += '<div class="background background-type-' + params.media.type + ' ' + optClass.join(' ') + '" style="' + bgOptions + '">';
      }

      output += params.media.render({
        placement: 'background'
      });

      if (! params.noBackgroundTag) {
        output += '</div>';
      }

      return output;
    },

    getMediaIndexes: function(medias, mediaSearched, fromObject) {
      if (! medias || ! medias.length || ! mediaSearched) {
        return -1;
      }

      var mediaSearchedType = mediaSearched.type,
          mediaSearchedInfos = null;

      if (fromObject) {
        mediaSearchedInfos = mediaSearched;
      }
      else {
        mediaSearchedInfos = mediaSearched[mediaSearchedType];
      }

      var foundMediaIndexes = [];

      $.each(medias, function(index, media) {
        if (media.type == mediaSearchedType) {
          /*
           * There is no test for image: they are always duplicated
           */
          if (media.type == 'webmap' || media.type == 'webscene') {
            if (media.id == mediaSearchedInfos.id) {
              foundMediaIndexes.push(index);
            }
          }
          else if (media.type == 'webpage') {
            if (media.id == mediaSearchedInfos.url) {
              foundMediaIndexes.push(index);
            }
          }
          else if (media.type == 'video') {
            if (media.id == mediaSearchedInfos.source + '-' + mediaSearchedInfos.id) {
              foundMediaIndexes.push(index);
            }
          }
          else if (media.type == 'image') {
            if (media.id == mediaSearchedInfos.id) {
              foundMediaIndexes.push(index);
            }
          }
        }
      });

      return foundMediaIndexes;
    },

    //resizeSnapSection2: resizeSnapSection2,
    resize: function() {
      /*
       * Set the correct snapping position for Snap section
       */
      // TODO snap baseclass
      /*$('.section-immersive').each(function() {
        resizeSnapSection($(this));
      });*/

      /*
      $('.section-immersive .background-type-image').each(function(i, screen) {
        var bgCaption = $(this).find('.background .caption');

        if (bgCaption.length) {
          bgCaption.css('top', app.display.sectionHeight - 200);
        }
      });
      */

      /*
      UIUtils.addCSSRule(
        // - 100 to make sure in all scroll condition, all the image would be visible
        '.image.block.size-small { max-height: ' + (app.display.sectionHeight - 100) + 'px; }',
        'image-block'
      );
      */
    },

    applyAppearance: function(section, rootNode) {
      let foregroundOptions = section.foreground.options;

      if (!foregroundOptions) {
        return;
      }

      let titleStyle = foregroundOptions.titleStyle;

      if (titleStyle) {
        let titleNode = rootNode.find('.title-text');
        let textBackground = rootNode.find('.text-background');

        if (titleStyle.background) {
          if (titleStyle.background === 'light') {
            textBackground.addClass('background-light');
            textBackground.removeClass('background-dark');
          }
          else {
            textBackground.addClass('background-dark');
            textBackground.removeClass('background-light');
          }
        }
        else {
          textBackground.removeClass('background-dark');
          textBackground.removeClass('background-light');
        }

        if (titleStyle.text) {
          if (titleStyle.text === 'light') {
            titleNode.addClass('text-light');
            titleNode.removeClass('text-dark');
          }
          else {
            titleNode.addClass('text-dark');
            titleNode.removeClass('text-light');
          }
        }

        if (titleStyle.shadow) {
          titleNode.addClass('text-shadow');
        }
        else {
          titleNode.removeClass('text-shadow');
        }
      }
    }
  };
});

define('storymaps/tpl/view/section/Cover/CoverCommonEffects',[], function() {

  var TEMP_OFFSET = 900;

  function scaleFadeInCover(params) {
    var foregroundNode = params.$currentSection.find('.foreground'),
        background = params.$currentSection.find('.background');

    setTimeout(function() {
      background.addClass('scale-out');
    }, TEMP_OFFSET);

    setTimeout(function() {
      background.css('transform', 'scale(1)');
      background.css('opacity', 1);
      background.removeClass('scale-out');
    }, TEMP_OFFSET + 1500);

    setTimeout(function() {
      foregroundNode.addClass('slide-text');
    }, TEMP_OFFSET + 200);

    setTimeout(function() {
      foregroundNode.css('transform', 'translateY(0)');
      foregroundNode.css('opacity', 1);
      foregroundNode.removeClass('slide-text');
    }, TEMP_OFFSET + 1700);
  }

  function fadeInBackground(params) {
    var background = params.$currentSection.find('.background');

    setTimeout(function() {
      background.addClass('fade-in-background');
    }, TEMP_OFFSET);

    setTimeout(function() {
      params.$currentSection.find('.cover-title').addClass('fade-in-cover-title');
    }, TEMP_OFFSET + 500);

    setTimeout(function() {
      params.$currentSection.find('.cover-subtitle').addClass('fade-in-cover-subtitle');
    }, TEMP_OFFSET + 1200);

    setTimeout(function() {
      params.$currentSection.find('.cover-title').css('opacity', 1);
    }, TEMP_OFFSET + 2500);

    setTimeout(function() {
      params.$currentSection.find('.cover-subtitle').css('opacity', 1);
    }, TEMP_OFFSET + 3000);

  }

  function fadeOutForeground(params, smallSection) {
    var numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        scrollRatio = params.currentSectionScroll / sectionHeight,
        exponent = smallSection ? 1.5 : 2.5,
        // we want to fade the foreground out faster than the background so the title/subtitle/etc don't visually conflict with the upcoming section
        opacity = Math.pow(1 - scrollRatio, exponent);

    params.$currentSection.find('.foreground, .scroll-invite').css('opacity', opacity);
  }

  function translateForeground(params, slow) {
    var translateFactor = slow ? -1 : -5,
        foregroundNode = params.$currentSection.find('.foreground'),
        amtToScroll = (params.currentSectionScroll / 100) * translateFactor;

    amtToScroll = parseInt(amtToScroll, 10);

    foregroundNode.css('transform', 'translateY(' + amtToScroll + 'px)');
  }

  function translateForegroundDown(params) {
    var numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        // how far down the cover we have scrolled
        scrollCoverRatio = params.currentSectionScroll / sectionHeight,
        translateFactor = 1 - scrollCoverRatio,
        amtToScroll = params.currentSectionScroll * translateFactor,
        scrollSubtitle = (params.currentSectionScroll - 100) / sectionHeight,
        translateSubtitle = (1 - scrollSubtitle) * params.currentSectionScroll;

    amtToScroll = parseInt(amtToScroll, 10);
    translateSubtitle = parseInt(translateSubtitle, 10);

    params.$currentSection.find('.cover-title').css('transform', 'translateY(' + amtToScroll + 'px)');
    params.$currentSection.find('.cover-subtitle').css('transform', 'translateY(' + translateSubtitle + 'px)');
  }

  function blurBackground(params, shortSection) {
    var background = params.$currentSection.find('.background'),
        numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        amtToBlur = 0,
        blurFactor = shortSection ? 6 : 10;

    // make a ratio of how much to blur, based on how far the section is scrolled compared to how tall it is.
    if (sectionHeight > 0) {
      amtToBlur = (params.currentSectionScroll / sectionHeight) * blurFactor;
    }

    // blur the image.
    background.css({
      webkitFilter: 'blur(' + amtToBlur + 'px)',
      filter: 'blur(' + amtToBlur + 'px)'
    });
  }

  function scaleBackground(params, scaleMore, foregroundAlso) {
    var background = params.$currentSection.find('.background'),
        amtToScale = 1,
        topRatio = 0,
        scaleDividend = scaleMore ? 4 : 20,
        foreground = params.$currentSection.find('.foreground');

    if (params.currentSectionScroll > 0) {
      // how far down the page the cover has been scrolled
      topRatio = params.currentSectionScroll / app.display.windowHeight;
      // take this ratio and normalize it so we're not scaling too far in.
      amtToScale = 1 + (topRatio / scaleDividend);
    }
    background.css('transform', 'scale(' + amtToScale + ')');

    // if we want everything to scale, we can scale the foreground as well.
    if (foregroundAlso) {
      foreground.css('transform', 'scale(' + amtToScale + ')');
    }
  }

  function blendCoverWithHeader(params) {
    var wrapper = params.$currentSection.find('.wrapper'),
        opacity = 1;

    if (params.currentSectionScroll > 0) {
      // the opacity is how far down the cover has scrolled. If it's scrolled 9/10 of the way down the page, it'll only be 1/10 opaque.
      opacity = 1 - params.currentSectionScroll / app.display.windowHeight;
    }

    wrapper.css('opacity', opacity);
  }

  function darkenCover(params, partialPage) {
    var numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        wrapper = params.$currentSection.find('.wrapper'),
        maxBrightnessValue = 100,
        brightness = maxBrightnessValue,
        cssValue = '';

    if (params.currentSectionScroll > 0) {
      if (partialPage) {
        // if the page isn't the full height
        // make it a percentage of how far the person has scrolled through the section
        brightness = (1 - params.currentSectionScroll / sectionHeight) * 100;
      }
      else {
        // brightness is a percentage of how much of the viewport is showing the cover. If most of the window shows the cover it will be lighter, if less is showing, darker.
        brightness = ((sectionHeight - params.currentSectionScroll) / app.display.windowHeight) * 100;
      }

      if (brightness > maxBrightnessValue) {
        brightness = maxBrightnessValue;
      }
    }

    cssValue = 'brightness(' + brightness.toFixed(1) + '%)';
    wrapper.css({
      webkitFilter: cssValue,
      filter: cssValue
    });
  }

  function fadeOutCover(params) {
    var background = params.$currentSection.find('.background'),
        numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        // the point at which to start fading -- when .1 of the section has scrolled, start fading. This allows us to show the cover as unfaded for a bit before starting.
        fadePoint = 0.1,
        // when the next section takes up 7/10 of the viewport, we'll want the cover to be completely faded.
        coverFadedCompletelyPoint = 0.7,
        readyToFade = params.currentSectionScroll >= sectionHeight * fadePoint,
        opacityValue = 1;

    if (readyToFade) {
      // is a differential between the amount scorlled and the ratio.
      opacityValue = 1 - (params.currentSectionScroll - sectionHeight * fadePoint) / (sectionHeight * (1 - fadePoint) * coverFadedCompletelyPoint);
    }

    background.css('opacity', opacityValue);
  }

  return {
    scaleFadeInCover: scaleFadeInCover,
    fadeInBackground: fadeInBackground,
    fadeOutForeground: fadeOutForeground,
    translateForeground: translateForeground,
    translateForegroundDown: translateForegroundDown,
    blurBackground: blurBackground,
    scaleBackground: scaleBackground,
    blendCoverWithHeader: blendCoverWithHeader,
    darkenCover: darkenCover,
    fadeOutCover: fadeOutCover
  };
});

define('storymaps/tpl/view/section/Cover/CoverStatic',[
  './CoverCommonEffects'
], function(
  //CoverCommonEffects
) {
  return function ScaleCover() {
    this.dataViews = 1;
    this.layoutType = 'static';

    this.displayCover = function() {
      //
    };

    this.onScroll = function() {
      //
    };
  };
});

define('storymaps/tpl/view/section/Cover/CoverScale',[
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function ScaleCover() {
    this.dataViews = 1.25;
    this.layoutType = 'scale';

    this.displayCover = function(params) {
      CoverCommonEffects.scaleFadeInCover(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.scaleBackground(params, false);
      CoverCommonEffects.fadeOutCover(params);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForeground(params, true);
      CoverCommonEffects.fadeOutForeground(params);
    }
  };
});

define('storymaps/tpl/view/section/Cover/CoverBlur',[
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function BlurCover() {
    this.dataViews = 1.5;
    this.layoutType = 'blur';

    this.displayCover = function(params) {
      CoverCommonEffects.scaleFadeInCover(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.blurBackground(params, false);
    }

    function updateForeground(params) {
      CoverCommonEffects.fadeOutForeground(params);
    }
  };
});

define('storymaps/tpl/view/section/Cover/CoverPartialPage',[
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function BlurCover() {
    this.dataViews = 0.7;
    this.layoutType = 'partial-page';

    this.displayCover = function() {
      //
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.blurBackground(params, true);
      CoverCommonEffects.darkenCover(params, true);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForeground(params, false);
      CoverCommonEffects.fadeOutForeground(params, true);
    }
  };
});

define('storymaps/tpl/view/section/Cover/CoverDelay',[
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function DelayCover() {
    this.dataViews = 1.5;
    this.layoutType = 'delay';

    this.displayCover = function(params) {
      CoverCommonEffects.fadeInBackground(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.scaleBackground(params, false);
      CoverCommonEffects.darkenCover(params, false);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForeground(params, false);
      CoverCommonEffects.fadeOutForeground(params, false);
    }
  };
});

define('storymaps/tpl/view/section/Cover/CoverBlendHeader',[
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function BlendHeaderCover() {
    this.dataViews = 1;
    this.layoutType = 'blend-header';

    this.displayCover = function(params) {
      setCoverBackgroundColor(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.scaleBackground(params, true, true);
      CoverCommonEffects.blendCoverWithHeader(params);
    }

    function setCoverBackgroundColor(params) {
      params.$currentSection.css('background-color', 'rgba(0,0,0,1)');
    }
  };
});

define('storymaps/tpl/view/section/Cover/CoverCurtain',[
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function CurtainCover() {
    this.dataViews = 1;
    this.layoutType = 'curtain';

    this.displayCover = function(params) {
      CoverCommonEffects.fadeInBackground(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.darkenCover(params, false);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForegroundDown(params);
    }
  };
});

define('storymaps/tpl/view/section/Cover/CoverStyleFactory',[
  './CoverStatic',
  './CoverScale',
  './CoverBlur',
  './CoverPartialPage',
  './CoverDelay',
  './CoverBlendHeader',
  './CoverCurtain'
], function(
  CoverStatic,
  CoverScale,
  CoverBlur,
  CoverPartialPage,
  CoverDelay,
  CoverBlendHeader,
  CoverCurtain
) {

  function createInstance(style) {
    var cover = null;

    cover = overrideWithUrlParam();

    if (!cover) {
      switch (style) {
        case 'scale': {
          cover = new CoverScale();
          break;
        }
        case 'blur': {
          cover = new CoverBlur();
          break;
        }
        case 'partial-page': {
          cover = new CoverPartialPage();
          break;
        }
        case 'delay': {
          cover = new CoverDelay();
          break;
        }
        case 'blend-header': {
          cover = new CoverBlendHeader();
          break;
        }
        case 'curtain': {
          cover = new CoverCurtain();
          break;
        }
        default: {
          cover = new CoverStatic();
          break;
        }
      }
    }

    return cover;
  }

  function overrideWithUrlParam() {
    var url = window.location.href,
        cover = null;

    if (url.indexOf('coverStyle=blur') !== -1) {
      cover = new CoverBlur();
    }
    else if (url.indexOf('coverStyle=scale') !== -1) {
      cover = new CoverScale();
    }
    else if (url.indexOf('coverStyle=partial-page') !== -1) {
      cover = new CoverPartialPage();
    }
    else if (url.indexOf('coverStyle=delay') !== -1) {
      cover = new CoverDelay();
    }
    else if (url.indexOf('coverStyle=blend-header') !== -1) {
      cover = new CoverBlendHeader();
    }
    else if (url.indexOf('coverStyle=curtain') !== -1) {
      cover = new CoverCurtain();
    }

    return cover;
  }

  return {
    createInstance: createInstance
  };
});


define('lib-build/hbars!storymaps-react/tpl/view/section/Cover/Cover', ['Handlebars'], function (Handlebars) { return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <h2 class=\"cover-subtitle title-text text-shadow\">"
    + escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h2>            \r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\" data-views=\""
    + escapeExpression(((helper = (helper = helpers.nbViews || (depth0 != null ? depth0.nbViews : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nbViews","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"wrapper\">\r\n\r\n    ";
  stack1 = ((helper = (helper = helpers.background || (depth0 != null ? depth0.background : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"background","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n\r\n    <div class=\"foreground\">\r\n      <div class=\"foo\">\r\n        <div class=\"title-error-container hidden\">\r\n          <div class=\"title-error-message\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.saveError : stack1), depth0))
    + "</div>\r\n        </div>\r\n        <div class=\"text-background\">\r\n          <h1 class=\"cover-title title-text text-shadow\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n          <!--<span class=\"cover-title-mock-cursor\"></span>-->\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showSubtitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\r\n      </div>\r\n\r\n      <div class=\"cover-media-placeholder\">\r\n        <div class=\"cover-media-placeholder-wrapper\">\r\n          <i class=\"fa fa-picture-o ph-icon-media\" aria-hidden=\"true\"></i>\r\n          <div class=\"cover-media-placeholder-label\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.mediaPlaceholder : stack1), depth0))
    + "</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"scroll-invite\">\r\n      <div class=\"scroll-invite-btn\"></div>\r\n    </div>\r\n\r\n    <div class=\"cover-credits-left\">"
    + escapeExpression(((helper = (helper = helpers.creditsLeft || (depth0 != null ? depth0.creditsLeft : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"creditsLeft","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"cover-credits-right\">"
    + escapeExpression(((helper = (helper = helpers.creditsRight || (depth0 != null ? depth0.creditsRight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"creditsRight","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/section/Cover/Cover',[],function(){});
define('storymaps-react/tpl/view/section/Cover/Cover',['module', 'exports', 'storymaps/tpl/view/section/Common', 'storymaps/tpl/utils/UI', 'lib-build/i18n!./../../../../../resources/tpl/builder/nls/app', 'storymaps/tpl/view/section/Cover/CoverStyleFactory', 'lib-build/hbars!./Cover', 'lib-build/less!./Cover'], function (module, exports, _Common, _UI, _app, _CoverStyleFactory, _Cover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Common2 = _interopRequireDefault(_Common);

  var _UI2 = _interopRequireDefault(_UI);

  var _app2 = _interopRequireDefault(_app);

  var _CoverStyleFactory2 = _interopRequireDefault(_CoverStyleFactory);

  var _Cover2 = _interopRequireDefault(_Cover);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Cover = function () {
    function Cover(section) {
      _classCallCheck(this, Cover);

      this.type = 'cover';
      this.id = _UI2.default.getUID();

      this._section = section;
      this._section.options = this._section.options || {};

      this._node = null;
      this._isLoaded = false;
      this._backgroundMedia = null;

      this._cover = _CoverStyleFactory2.default.createInstance(this._section.layout);
    }

    _createClass(Cover, [{
      key: 'render',
      value: function render() {
        this._backgroundMedia = _Common2.default.initMedia(this._section.background);

        return (0, _Cover2.default)({
          classes: ['section', 'section-layout-cover', this._section.layout, this._cover.layoutType].join(' '),
          nbViews: this._cover.dataViews,
          background: _Common2.default.renderBackground({
            media: this._backgroundMedia
          }),
          title: this._section.foreground.title,
          subtitle: this._section.foreground.subtitle,
          showSubtitle: this._section.foreground.subtitle || app.isInBuilder,
          creditsLeft: this._section.foreground['credits-left'],
          creditsRight: this._section.foreground['credits-right'],
          strings: _app2.default.builder.cover
        });
      }
    }, {
      key: 'postCreate',
      value: function postCreate(sectionContainer) {
        this._node = sectionContainer;

        this._backgroundMedia.postCreate({
          container: sectionContainer,
          onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
          onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
          builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
          foregroundOptions: this._section.foreground.options,
          applySectionConfig: app.isInBuilder ? this._applySectionConfig.bind(this) : null,
          // TODO: for video, need to goes away
          sectionType: 'cover'
        });

        $('.scroll-invite').click(function () {
          app.Controller.navigateToSection({
            index: 1,
            animate: true
          });
        });

        this._applyConfig();
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig() {
        _Common2.default.applyAppearance(this._section, this._node);
      }
    }, {
      key: 'onScroll',
      value: function onScroll(params) {
        if (params.status == 'unload') {
          this._backgroundMedia.performAction({
            visible: false
          });
        } else if (params.status == 'preload') {
          return;
        } else if (params.status == 'current') {
          if (!this._isLoaded) {
            this._isLoaded = true;
            this._backgroundMedia.load().then(function () {
              this._backgroundMedia.performAction({
                isActive: true
              });
            }.bind(this));
          } else {
            this._backgroundMedia.performAction({
              isActive: true
            });
          }

          this._cover.displayCover(params);
          this.updateContent(params, true);
        } else if (!this._isLoaded) {
          return;
        } else {
          this.updateContent(params, false);
        }
      }
    }, {
      key: 'getBookmark',
      value: function getBookmark() {
        var bookmark = this._section.bookmark || {};

        return {
          status: bookmark.enabled ? 'visible' : 'disabled',
          title: this.getPreviewText ? this.getPreviewText() : '',
          bookmark: bookmark.title || this.getPreviewText && this.getPreviewText()
        };
      }
    }, {
      key: 'getPreviewText',
      value: function getPreviewText() {
        return this._section.foreground.title;
      }
    }, {
      key: 'updateContent',
      value: function updateContent(params, initial) {
        if (params.currentSectionIndex == 0) {
          if (params.currentSectionScroll > app.display.sectionHeight / 2) {
            $('.story-header').css('background-color', 'rgba(0,0,0,' + params.currentSectionScroll / app.display.sectionHeight + ')');
          } else {
            $('.story-header').css('background-color', 'rgba(0,0,0,0)');
          }
        }

        if (!initial && params.status === 'current') {
          this._cover.onScroll(params);
        }
      }
    }, {
      key: 'resize',
      value: function resize(params) {
        this._backgroundMedia.resize(params);
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        return this._backgroundMedia.getArcGISContent();
      }
    }]);

    return Cover;
  }();

  exports.default = Cover;
  module.exports = exports['default'];
});
//# sourceMappingURL=Cover.js.map
;

define('lib-build/less!storymaps-react/tpl/view/section/Sequence',[],function(){});
define('storymaps-react/tpl/view/section/Sequence',['module', 'exports', 'storymaps/tpl/view/section/Common', 'storymaps/tpl/utils/UI', 'lib-build/less!./Sequence'], function (module, exports, _Common, _UI) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Common2 = _interopRequireDefault(_Common);

  var _UI2 = _interopRequireDefault(_UI);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var CONFIG = {
    backgroundMedia: ['color', 'image'],
    foregroundLayout: ['sequence-1'],
    foregroundMedia: ['image', 'video', 'webscene', 'webpage']
  };

  var Sequence = function () {
    function Sequence(section) {
      _classCallCheck(this, Sequence);

      this.type = 'sequence';
      this.id = _UI2.default.getUID();

      this._section = section;

      this._node = null;
      this._isLoaded = false;
      this._blocks = null;
      this._backgroundMedia = null;
      this._isActive = false;
      this._sectionIndex = null;
    }

    _createClass(Sequence, [{
      key: 'render',
      value: function render(index) {

        var output = '',
            foreground = this._section.foreground;

        if (_Common2.default.checkErrors(CONFIG, this._section, index)) {
          return output;
        }

        this._sectionIndex = index;

        output += '<div class="section section-layout-sequence ' + this._section.layout + '">';

        //
        // Background
        //

        this._backgroundMedia = _Common2.default.initMedia(this._section.background);
        output += _Common2.default.renderBackground({
          media: this._backgroundMedia
        });

        //
        // Foreground
        //

        output += '<div class="foreground">';
        if (foreground.blocks) {
          var blocksRenderer = _Common2.default.renderBlocks(foreground.blocks);

          this._blocks = blocksRenderer.blocks;

          output += blocksRenderer.output;
        }
        output += '</div>';

        output += '</div>';

        return output;
      }
    }, {
      key: 'postCreate',
      value: function postCreate(node) {
        this._node = node;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._blocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var block = _step.value;

            if (block.postCreate) {
              block.postCreate({
                container: node,
                onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
                onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
                builderConfigurationTabs: this.MEDIA_BUILDER_TABS
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'getBookmark',
      value: function getBookmark() {
        var bookmark = this._section.bookmark || {};

        return {
          status: bookmark.enabled ? 'visible' : 'disabled',
          title: this.getPreviewText ? this.getPreviewText() : '',
          bookmark: bookmark.title || this.getPreviewText && this.getPreviewText()
        };
      }
    }, {
      key: 'getNumberOfBlocks',
      value: function getNumberOfBlocks() {
        return this._section.foreground && this._section.foreground.blocks ? this._section.foreground.blocks.length : 0;
      }
    }, {
      key: 'onScroll',
      value: function onScroll(params) {
        if (params.status == 'unload') {
          this._isActive = false;

          $.each(this._blocks, function (i, block) {
            block.performAction({
              isActive: false
            });
          });
        } else if (params.status == 'preload') {
          if (this._isLoaded) {
            return;
          }

          this._isLoaded = true;

          this._backgroundMedia.load();
          $.each(this._blocks, function (i, block) {
            block.load();
          });
        } else if (params.status == 'visible' || params.status == 'current') {
          //_backgroundMedia.load();
          //if (_isActive) {
          /*$.each(_blocks, function(i, block) {
              if (block.type != 'video') {
              block.load();
              block.performAction({
                visible: true
              });
            }
          });*/

          if (!this._isLoaded) {
            $.each(this._blocks, function (i, block) {
              block.load();
            });
          }

          this._isLoaded = true;

          /*
          // Video autoplay
          $.each(app.display.inlineVideos, function(i, video) {
            if (video.sectionIndex == this._sectionIndex) {
              if (video.bottom <= params.viewportBottom && video.top > params.viewportTop) {
                this._blocks[video.blockIndex].performAction({
                  isActive: true
                });
              }
              else {
                this._blocks[video.blockIndex].performAction({
                  isActive: false
                });
              }
            }
          });
          */
          //}
        }
        /*
        else if (! this._isLoaded) {
          this._isActive = true;
          this._isLoaded = true;
            this._backgroundMedia.load();
          $.each(this._blocks, function(i, block) {
            block.load();
          });
            this._isLoaded = true;
        }
        else {
          this._isActive = true;
        }
        */
      }
    }, {
      key: 'resize',
      value: function resize() /*params*/{
        // TODO: how to resize foreground blocks?
        //_backgroundMedia.resize(params);
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        var arcgisContent = [];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._blocks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var block = _step2.value;

            arcgisContent.push.apply(arcgisContent, _toConsumableArray(block.getArcGISContent()));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return arcgisContent;
      }
    }]);

    return Sequence;
  }();

  exports.default = Sequence;
  module.exports = exports['default'];
});
//# sourceMappingURL=Sequence.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/section/Title', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n  ";
  stack1 = ((helper = (helper = helpers.background || (depth0 != null ? depth0.background : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"background","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n\r\n  <div class=\"foreground\">\r\n    <div class=\"text-background\">\r\n      <h1 class=\"fg-title title-text text-shadow\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fg-credits\">"
    + escapeExpression(((helper = (helper = helpers.credits || (depth0 != null ? depth0.credits : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"credits","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"builder-section-add-menu\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/section/Title',[],function(){});
define('storymaps-react/tpl/view/section/Title',['module', 'exports', 'storymaps/tpl/view/section/Common', 'storymaps/tpl/utils/UI', 'lib-build/hbars!./Title', 'lib-build/less!./Title'], function (module, exports, _Common, _UI, _Title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Common2 = _interopRequireDefault(_Common);

  var _UI2 = _interopRequireDefault(_UI);

  var _Title2 = _interopRequireDefault(_Title);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Title = function () {
    function Title(section) {
      _classCallCheck(this, Title);

      this.type = 'title';
      this.id = _UI2.default.getUID();

      this._section = section;

      this._node = null;
      this._isLoaded = false;
      this._backgroundMedia = null;
    }

    _createClass(Title, [{
      key: 'getBookmark',
      value: function getBookmark() {
        var bookmark = this._section.bookmark || {};

        return {
          status: bookmark.enabled ? 'visible' : 'disabled',
          title: this.getPreviewText ? this.getPreviewText() : '',
          bookmark: bookmark.title || this.getPreviewText && this.getPreviewText()
        };
      }
    }, {
      key: 'getPreviewThumbnail',
      value: function getPreviewThumbnail() {
        return this._backgroundMedia.getPreviewThumbnail();
      }
    }, {
      key: 'getPreviewText',
      value: function getPreviewText() {
        return this._section.foreground ? this._section.foreground.title : '';
      }
    }, {
      key: 'getPreviewIcon',
      value: function getPreviewIcon() {
        return '';
      }
    }, {
      key: 'render',
      value: function render() {
        var background = this._section.background,
            foreground = this._section.foreground,
            classes = [];

        //
        // Options
        //

        var options = this._section.options,
            size = 'medium';

        if (options && options.size) {
          size = options.size;
        }

        classes.push('size-' + size);

        //
        // Background
        //

        // TODO: this is broken, only cover and Thin implement
        this._backgroundMedia = _Common2.default.initMedia(background);

        return (0, _Title2.default)({
          classes: ['section', 'section-layout-title'].concat(classes).join(' '),
          id: this.id,
          background: _Common2.default.renderBackground({
            media: this._backgroundMedia
          }),
          title: foreground.title,
          credits: foreground.credits
        });
      }
    }, {
      key: 'postCreate',
      value: function postCreate(sectionContainer) {
        this._node = sectionContainer;
        this._backgroundMedia.postCreate({
          container: sectionContainer,
          mediaIcon: 'image',
          onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
          onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
          builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
          foregroundOptions: this._section.foreground.options,
          applySectionConfig: app.isInBuilder ? this._applySectionConfig.bind(this) : null,
          sectionType: 'title'
        });

        /*
        $(window).scroll(function() {
          if (this._isElementInViewport($('#' + this.id))) {
            if (this._section.background.type != 'color') {
              var pos = this._getElementPos($('#' + this.id));
                if (pos > document.documentElement.clientHeight - 270) {
                pos = document.documentElement.clientHeight - 270;
              }
                //$('#' + _id).find('.image').css('backgroundPositionY', - pos);
              //$('#' + _id).find('.map').css('marginTop', - pos);
              //$('#' + _id).find('.video').css('marginTop', - pos);
            }
          }
        }.bind(this));
        */

        this._applyConfig();
      }
    }, {
      key: '_applyConfig',
      value: function _applyConfig() {
        _Common2.default.applyAppearance(this._section, this._node);
      }
    }, {
      key: 'onScroll',
      value: function onScroll(params) {
        if (params.status == 'unload') {
          return;
        } else if (params.status == 'preload') {
          if (!this._isLoaded) {
            this._backgroundMedia.load();
            this._isLoaded = true;
          }
        } else {
          this._backgroundMedia.performAction({
            isActive: true,
            progress: 0
          });
        }
      }
    }, {
      key: 'resize',
      value: function resize(params) {
        this._backgroundMedia.resize(params);
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        return this._backgroundMedia.getArcGISContent();
      }
    }]);

    return Title;
  }();

  exports.default = Title;
  module.exports = exports['default'];
});
//# sourceMappingURL=Title.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/section/Immersive/Immersive', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\" data-views=\""
    + escapeExpression(((helper = (helper = helpers.viewsCount || (depth0 != null ? depth0.viewsCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"viewsCount","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"background-title\"><h2>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></div>\r\n  <div class=\"background-credits\">"
    + escapeExpression(((helper = (helper = helpers.credits || (depth0 != null ? depth0.credits : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"credits","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"background-filler\"></div>\r\n\r\n  ";
  stack1 = ((helper = (helper = helpers.background || (depth0 != null ? depth0.background : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"background","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n\r\n  <div class=\"background-swipe-trans-extras\">\r\n    <div class=\"separator-vertical\"></div>\r\n    <div class=\"separator-horizontal\"></div>\r\n  </div>\r\n\r\n  <div class=\"foreground\">\r\n    ";
  stack1 = ((helper = (helper = helpers.foreground || (depth0 != null ? depth0.foreground : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"foreground","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n  </div>\r\n\r\n  <div class=\"builder-panel\"></div>\r\n  <div class=\"builder-section-add-menu\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/section/Immersive/Immersive',[],function(){});
define('storymaps-react/tpl/view/section/Immersive/Immersive',['module', 'exports', 'storymaps/tpl/view/section/Common', 'storymaps/tpl/utils/UI', 'lib-build/hbars!./Immersive', 'lib-build/less!./Immersive'], function (module, exports, _Common, _UI, _Immersive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Common2 = _interopRequireDefault(_Common);

  var _UI2 = _interopRequireDefault(_UI);

  var _Immersive2 = _interopRequireDefault(_Immersive);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /*
  var CONFIG = {
    backgroundMedia: ['image', 'video', 'color', 'webscene', 'webpage']
  };
  */

  var BUILDER_PANEL_HEIGHT = 125;

  var Immersive = function () {
    function Immersive(section) {
      _classCallCheck(this, Immersive);

      this.type = 'immersive';
      this.id = _UI2.default.getUID();

      this._section = section;
      this._section.options = this._section.options || {};

      this._nbViews = 0;
      this._isLoaded = false;
      this._isActive = false;
      this._currentViewIndex = -1;
      this._isNavigatingAway = false;
      this._currentViewScrollPosition = -1;
      this._swipeTransitionExtrasNode = null;
      this._previousMedia = null;

      // An immersive section is a series of view
      // There is no specific view object, instead we have
      //  - an array of media => background of each view
      //  - an array of panel => foreground of each view
      //  - an array of transitions
      // When a media is reused accross multiple views, different object are created
      //   and hold configuration specific to each view ;
      //   the media is only rendered once and that's decided here
      // TODO: Should there be a view object? Sounds like it would make part of builder easier
      //  But it won't be as convenient to know if a media is used across multiple views
      this._medias = [];
      this._panels = [];
      this._transitions = [];

      // Media cache - a media only get loaded once per section
      this._mediaCache = {};
    }

    _createClass(Immersive, [{
      key: 'render',
      value: function render() {
        var views = this._section.views,
            options = this._section.options;

        views = views || [];
        options = options || {};

        this._nbViews = views.length;

        /*
        if ( Renderer.checkErrors(config, section, index) ){
          return output;
        }
        */

        var config = [],
            title = '',
            credits = '',
            background = '',
            foreground = '';

        /*
         * Options
         */

        // One view on mobile
        /*
        if (this._nbViews == 1 && UIUtils.isMobileBrowser() && ! options['events-btn']) {
          config.push('disable-snap');
        }
        */

        if (options.style) {
          config.push(options.style);
        }

        /* from now we can't mix scrolling type in a section */
        if (views.length && views[0].foreground.panels && views[0].foreground.panels[0]) {
          config.push('layout-' + views[0].foreground.panels[0].layout);
        }

        if (options.events) {
          config.push('events-' + options.events);
        }

        if (options['events-btn']) {
          config.push('events-' + options['events-btn']);
        }

        /* hack for alternate content */
        if (_UI2.default.isMobileBrowser() && options['events-btn']) {
          this._nbViews = 1.2;
        }

        //
        // Title and credits
        //

        if (views.length && views[0].foreground.title) {
          title = views[0].foreground.title.value;
        }

        if (options.credits) {
          credits = options.credits;
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = views[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var view = _step.value;

            //
            // Background
            //

            var isMediaAlreadyLoaded = this.isMediaAlreadyLoaded(view.background);

            // A new media is created for every view even if the media is used multiple times
            // This allow builder to modify it's option easily
            var media = _Common2.default.initMedia(view.background, this._mediaCache);

            // But a media is rendered only once per section
            if (!isMediaAlreadyLoaded) {
              background += _Common2.default.renderBackground({
                media: media,
                transition: view.transition
              });
            }

            this._medias.push(media);

            //
            // Foreground
            //

            var panelJSON = view.foreground.panels ? view.foreground.panels[0] : null;

            if (panelJSON) {
              var panel = app.ui.ImmersivePanelFactory.createInstance(panelJSON, {
                onUpdateLayout: app.isInBuilder ? this.onUpdatePanelLayout.bind(this) : null,
                onChange: app.isInBuilder ? this._onContentChange.bind(this) : null
              });
              this._panels.push(panel);
              foreground += panel.render();
            }

            //
            // Transition
            //

            this._transitions.push(view.transition);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return (0, _Immersive2.default)({
          classes: ['section', 'section-immersive'].concat(config).join(' '),
          viewsCount: this._nbViews + 1,
          title: title,
          credits: credits,
          background: background,
          foreground: foreground
        });
      }
    }, {
      key: 'postCreate',
      value: function postCreate(sectionContainer) {
        this._node = sectionContainer;
        this._swipeTransitionExtrasNode = this._node.find('.background-swipe-trans-extras');

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._medias[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var media = _step2.value;

            media.postCreate({
              container: sectionContainer,
              delayBuilderInit: true,
              onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
              onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
              onConfigChange: app.isInBuilder ? this._onMediaConfigChange.bind(this) : null,
              builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
              // TODO: for video, need to goes away
              sectionType: 'immersive'
            });
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this._panels[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var panel = _step3.value;

            panel.postCreate({
              container: sectionContainer,
              mediaConfigurationTabs: this.MEDIA_BUILDER_TABS_PANEL
            });
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        this._update();
      }
    }, {
      key: 'update',
      value: function update() {
        this._update();
      }
    }, {
      key: '_update',
      value: function _update() {
        this._nbViews = this._medias.length;

        var numberOfViews = this._nbViews + 1;

        if (numberOfViews == 1 && this._node.find('.background').hasClass('background-type-image')) {
          numberOfViews *= 1.1;
        }

        this._node.css('min-height', numberOfViews * 100 + 'vh');

        // Will affect the transition by checking the rules
        // TODO: in builder only?
        this._applyTransitionRules();

        // Update the webmap so they know if they have layers to swipe
        this._computeWebMapsSwipeLayers();
      }
    }, {
      key: 'onScroll',
      value: function onScroll(params) {
        var viewIndex = parseInt(params.currentSectionScroll / app.display.windowHeight, 10) + 1;

        this._isNavigatingAway = viewIndex > this._nbViews;
        this._currentViewScrollPosition = params.currentSectionScroll % app.display.windowHeight;

        // Bound viewIndex to handle navigating away
        viewIndex = Math.min(viewIndex, this._nbViews);

        // Section not active yet
        if (params.viewportTop <= 0) {
          viewIndex = 1;
        }

        if (params.status == 'unload') {
          this._isActive = false;

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this._medias[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var media = _step4.value;

              media.performAction({
                isActive: false
              });
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          if (this._medias[0]) {
            this._medias[0].getNode().nextAll().removeClass('active');
            this._medias[0].getNode().addClass('active');
            this._medias[0].performAction({
              isActive: false,
              transition: this._transitions[0],
              isNewView: true,
              viewIndex: 0,
              visibilityProgress: 0,
              scrollPositionSection: 0,
              scrollPositionView: 0,
              performBuilderInit: false
            });
          }

          if (this._panels[0]) {
            this._panels[0].updatePosition(params);
          }

          this._node.toggleClass('hide-title hide-credits', true);

          this._currentViewIndex = -1;
          this._previousMedia = null;
          return;
        }

        var currentMedia = this._medias[viewIndex - 1];

        // Sometimes when moving away status is current and viewIndex == _nbViews + 1
        if (!currentMedia) {
          return;
        }

        if (!this._isLoaded) {
          this._isLoaded = true;

          this.loadMedias();

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this._panels[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _panel = _step5.value;

              _panel.load();
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          this._node.find('.background').eq(0).addClass('active');
        }

        // visible was creation a conflict with video when navigating away
        // visible was fired right before current for some reason...
        if ( /*params.status != 'visible' &&*/params.status != 'current') {
          return;
        }

        var mediaUpdate = {
          isActive: params.status == 'current',
          transition: this._transitions[viewIndex - 1],
          // TODO: remove or make more explicit what this will do?
          isNewView: this._currentViewIndex != viewIndex,
          viewIndex: viewIndex,
          visibilityProgress: 1,
          scrollPositionSection: params.currentSectionScroll,
          scrollPositionView: this._currentViewScrollPosition,
          performBuilderInit: this._currentViewIndex != viewIndex
        };

        this._currentViewIndex = viewIndex;

        /*
        if (params.status == 'visible' && viewIndex == 1) {
          mediaUpdate.visibilityProgress = Math.round((params.viewportBottom - app.display.sectionHeight / 2) / app.display.sectionHeight * 100) / 100 * 1;
        } else if (isNavigatingAway) {
          mediaUpdate.visibilityProgress = 1 - Math.round((params.currentSectionScroll + 90) % app.display.sectionHeight / app.display.sectionHeight * 100) / 100 * 2.5;
          if (mediaUpdate.visibilityProgress > 0.6) {
            mediaUpdate.visibilityProgress = 0;
          }
        }
          mediaUpdate.visibilityProgress = Math.max(mediaUpdate.visibilityProgress, 0);
        mediaUpdate.visibilityProgress = Math.min(mediaUpdate.visibilityProgress, 1);
        */

        // Compute if the media performing the transition to next view himself
        var mediaPerformTransition = false;
        if (params.status == 'current') {
          var transition = this._transitions[viewIndex - 1],
              previousMedia = this._medias[viewIndex - 2];

          mediaPerformTransition = this._isTransitionDoneByMedia(transition, currentMedia, previousMedia);
        }

        // Media usually only need update when changing view
        var mediaNeedUpdate = mediaUpdate.isNewView;
        // Except if it's a webmap that has a swipe transition managed by the map
        if (!mediaNeedUpdate && currentMedia.type == 'webmap' && !this._isNavigatingAway) {
          mediaNeedUpdate = mediaPerformTransition;
        }

        // Refresh media only when needed
        if (mediaNeedUpdate) {
          currentMedia.performAction(mediaUpdate);
        }

        if (params.status == 'current') {
          /*
           * Background
           */

          if (mediaUpdate.isNewView) {
            //this._node.find('.background').removeClass('active');
            currentMedia.getNode().nextAll().removeClass('active');

            currentMedia.getNode().addClass('active');

            // TODO: for all media type
            // this._previousMedia is the previously visited view background (can be backward or fwd)
            if (this._previousMedia && this._previousMedia.type == 'video') {
              this._previousMedia.performAction({
                isActive: false
              });
            }

            this._previousMedia = currentMedia;

            /*
            if (transition == 'swipe-vertical' || transition == 'swipe-horizontal') {
              if (previousMedia) {
                previousMedia.getNode().addClass('active');
              }
            }
            */

            /*
            var nextMedia = this._medias[viewIndex];
            if (nextMedia) {
              var nextMediaTransition = this._transitions[viewIndex];
              if (nextMediaTransition == 'swipe-vertical' || nextMediaTransition == 'swipe-horizontal') {
                var prepareForNextTransition = ! this._isTransitionDoneByMedia(nextMediaTransition, currentMedia, nextMedia);
                if (prepareForNextTransition) {
                  nextMedia.getNode().addClass('active');
                }
              }
            }
            */
          }

          /*
           * Transition
           */

          if (!this._isNavigatingAway) {
            if (transition == 'swipe-vertical' || transition == 'swipe-horizontal') {
              if (!mediaPerformTransition) {
                var swipePosition = null,
                    mediaWidth = app.display.windowWidth,
                    mediaHeight = app.display.windowHeight;

                if (app.isInBuilder) {
                  mediaHeight -= BUILDER_PANEL_HEIGHT;
                }

                if (transition == 'swipe-vertical') {
                  /* todo: should be more so that the cut is not right above scroll-full panel
                     but this require to have the media visible outside of it's view */
                  //mediaHeight -= 20;

                  swipePosition = mediaHeight - this._currentViewScrollPosition;

                  currentMedia.getNode().css('clip', 'rect(' + swipePosition + 'px,' + mediaWidth + 'px,' + app.display.windowHeight + 'px,0px)');

                  // Swipe shadow
                  this._swipeTransitionExtrasNode.css({
                    top: swipePosition,
                    left: ''
                  }).toggleClass('trans-vertical', true).toggleClass('trans-horizontal', false).addClass('active');
                } else if (transition == 'swipe-horizontal') {
                  swipePosition = mediaWidth - this._currentViewScrollPosition / mediaHeight * mediaWidth;

                  currentMedia.getNode().css('clip', 'rect(0px,' + mediaWidth + 'px,' + app.display.windowHeight + 'px,' + swipePosition + 'px)');

                  // Swipe shadow
                  this._swipeTransitionExtrasNode.css({
                    top: '',
                    left: swipePosition
                  }).toggleClass('trans-vertical', false).toggleClass('trans-horizontal', true).addClass('active');
                }
              } else {
                this._swipeTransitionExtrasNode.removeClass('active');
              }
            } else {
              this._swipeTransitionExtrasNode.removeClass('active');
            }
          }

          /*
           * Panel
           */
          var panel = this._panels && this._panels.length ? this._panels[viewIndex - 1] : null;

          panel.updatePosition(params);

          if (mediaUpdate.isNewView) {
            var previousPanel = this._panels[viewIndex - 2];
            if (previousPanel) {
              previousPanel.updatePosition({
                isNewView: true
              });
            }
          }

          /*
           * Title and credits
           */
          if (viewIndex == this._nbViews) {
            this._node.toggleClass('hide-title hide-credits', this._isNavigatingAway);

            if (panel.layout == 'scroll-partial' && this._isNavigatingAway) {
              this._node.find('.imm-panel').css('opacity', 0);
            }
          }
        }
      }
    }, {
      key: 'loadMedias',
      value: function loadMedias() {
        var arcgisContent = [];

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this._medias[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var media = _step6.value;

            var alreadyLoaded = false;

            // TODO should use getIndexes like others...
            if (media.type == 'webmap' || media.type == 'webscene') {
              if (arcgisContent.indexOf(media.id) > -1) {
                alreadyLoaded = true;
              } else {
                arcgisContent.push(media.id);
              }
            }

            if (!alreadyLoaded) {
              var loadDeferred = media.load();

              if (loadDeferred) {
                // TODO: is that necessary or can use media.id?
                loadDeferred.then(function (id) {
                  var _iteratorNormalCompletion7 = true;
                  var _didIteratorError7 = false;
                  var _iteratorError7 = undefined;

                  try {
                    for (var _iterator7 = this._medias[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                      var _media = _step7.value;

                      if (_media.id == id) {
                        _media.postLoad();
                      }
                    }
                  } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                      }
                    } finally {
                      if (_didIteratorError7) {
                        throw _iteratorError7;
                      }
                    }
                  }
                }.bind(this));
              }
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }
    }, {
      key: 'navigateToViewByIndex',
      value: function navigateToViewByIndex() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        if (params.index == undefined || params.animate == undefined) {
          return;
        }

        var sectionTop = this._node.position().top,
            viewHeight = app.display.windowHeight,
            viewsOffset = params.index * viewHeight,

        // TODO is this stable in viewer
        viewOffset = viewHeight - 250;

        if (app.isInBuilder) {
          viewOffset += BUILDER_PANEL_HEIGHT;
        }

        var scrollPos = Math.floor(sectionTop + viewsOffset + viewOffset);

        // TODO: animate will fire intermediate view navigation event which the view panel doesn't like
        if (params.animate) {
          $('html,body').animate({
            scrollTop: scrollPos
          });
        } else {
          document.body.scrollTop = scrollPos;
          // Firefox
          document.documentElement.scrollTop = scrollPos;
        }
      }
    }, {
      key: 'isMediaAlreadyLoaded',
      value: function isMediaAlreadyLoaded(media) {
        return _Common2.default.getMediaIndexes(this._medias, media).length > 0;
      }
    }, {
      key: 'isMediaUniqueInSection',
      value: function isMediaUniqueInSection(media) {
        return _Common2.default.getMediaIndexes(this._medias, media).length == 1;
      }
    }, {
      key: 'resize',
      value: function resize(params) {
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = this._medias[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var media = _step8.value;

            media.resize(params);
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }
      }
    }, {
      key: 'getBookmark',
      value: function getBookmark() {
        var bookmark = this._section.bookmark || {};

        return {
          status: bookmark.enabled ? 'visible' : 'disabled',
          title: this.getPreviewText ? this.getPreviewText() : '',
          bookmark: bookmark.title || this.getPreviewText && this.getPreviewText()
        };
      }
    }, {
      key: '_computeWebMapsSwipeLayers',
      value: function _computeWebMapsSwipeLayers() {
        for (var i = 0; i < this._medias.length; i++) {
          var transitionInfo = this._getTransitionInfo(i),
              media = this._medias[i];

          // First view of a section is limited to fade
          if (i == 0) {
            continue;
          }

          if (media.type != 'webmap') {
            continue;
          }

          if (transitionInfo.isDuplicateConsecutive) {
            this._medias[i].computeSwipeLayers(this._medias[i - 1].getLayersConfiguration());
          }
        }
      }
    }, {
      key: '_isTransitionDoneByMedia',
      value: function _isTransitionDoneByMedia(transition, currentMedia, previousMedia) {
        return transition && currentMedia && previousMedia && (transition == 'swipe-vertical' || transition == 'swipe-horizontal') && currentMedia.type == 'webmap' && previousMedia.type == 'webmap' && currentMedia.id == previousMedia.id;
      }
    }, {
      key: '_applyTransitionRules',
      value: function _applyTransitionRules() {
        for (var i = 0; i < this._medias.length; i++) {
          var transitionInfo = this._getTransitionInfo(i);

          // First view of a section is limited to fade
          if (i == 0) {
            this._transitions[i] = 'fade-fast';
            continue;
          }

          // Two views using the same media consecutivly
          // Authorized transitions are None and those listed in config.duplicateConsecutiveTransitions
          if (transitionInfo.isDuplicateConsecutive) {
            if (transitionInfo.duplicateConsecutiveTransitions.indexOf(this._transitions[i]) == -1) {
              this._transitions[i] = 'none';
            }
          }
          // Duplicate and non consecutive section
          // Only the transition from the first occurence of the media is authorized
          // Except for image where all transition are authorized (images are always duplicated)
          else if (transitionInfo.isDuplicate && transitionInfo.firstOccurenceTransition && this._medias[i].type != 'image') {
              //this._transitions[i] = transitionInfo.firstOccurenceTransition;
              // Temporary workaround
              this._transitions[i] = 'none';
            }
        }
      }
    }, {
      key: '_getTransitionInfo',
      value: function _getTransitionInfo(index) {
        var media = this._medias[index],

        // The indexes of the occurence of that media in the section
        mediaIndexes = _Common2.default.getMediaIndexes(this._medias, media, true),

        // If the media is not the first occurence in the section
        isDuplicate = false,

        // The transition chosen for the first occurence of the media in the section
        firstOccurenceTransition = null,

        // If the media is not the first occurence and a duplicate of previous media
        // i.e: the previous view use the same media
        isDuplicateConsecutive = false,

        // Transitions that may be authorized for consecutive medias
        duplicateConsecutiveTransitions = [];

        if (mediaIndexes.length > 1) {
          if (mediaIndexes[0] < index) {
            isDuplicate = true;

            firstOccurenceTransition = this._transitions[mediaIndexes[0]];

            if (mediaIndexes[mediaIndexes.indexOf(index) - 1] == index - 1) {
              isDuplicateConsecutive = true;

              duplicateConsecutiveTransitions = media.getAuthorizedTransitionsWith(this._medias[index - 1]);
            }
          }
        }

        return {
          isDuplicate: isDuplicate,
          isDuplicateConsecutive: isDuplicateConsecutive,
          firstOccurenceTransition: firstOccurenceTransition,
          duplicateConsecutiveTransitions: duplicateConsecutiveTransitions
        };
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        var arcgisContent = [];

        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this._medias[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var media = _step9.value;

            arcgisContent.push.apply(arcgisContent, _toConsumableArray(media.getArcGISContent()));
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = this._panels[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var panel = _step10.value;

            arcgisContent.push.apply(arcgisContent, _toConsumableArray(panel.getArcGISContent()));
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }

        return arcgisContent;
      }
    }]);

    return Immersive;
  }();

  exports.default = Immersive;
  module.exports = exports['default'];
});
//# sourceMappingURL=Immersive.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/section/Credits', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"section section-layout-credits\">\r\n\r\n  ";
  stack1 = ((helper = (helper = helpers.background || (depth0 != null ? depth0.background : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"background","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n\r\n  <div class=\"foreground\">\r\n    <div class=\"credits\">\r\n      ";
  stack1 = ((helper = (helper = helpers.credits || (depth0 != null ? depth0.credits : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"credits","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    </div>\r\n  </div>\r\n  <div class=\"builder-section-add-menu\"></div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/section/Credits',[],function(){});

define('lib-build/css!storymaps-react/tpl/view/ui/AuthorInfo',[],function(){});
define('storymaps-react/tpl/view/section/Credits',['module', 'exports', 'storymaps/tpl/view/section/Common', 'storymaps/tpl/utils/UI', 'lib-build/hbars!./Credits', 'lib-build/less!./Credits', 'lib-build/css!../ui/AuthorInfo'], function (module, exports, _Common, _UI, _Credits) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Common2 = _interopRequireDefault(_Common);

  var _UI2 = _interopRequireDefault(_UI);

  var _Credits2 = _interopRequireDefault(_Credits);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var CONFIG = {
    backgroundMedia: ['color'],
    foregroundLayout: ['credits-1']
  };

  var Credits = function () {
    function Credits(section) {
      _classCallCheck(this, Credits);

      this.type = 'credits';
      this.id = _UI2.default.getUID();

      this._section = section;

      this._node = null;
      this._backgroundMedia = null;
      this._panels = [];
    }

    _createClass(Credits, [{
      key: 'render',
      value: function render(index) {
        var background = this._section.background;
        var foreground = this._section.foreground;
        var creditsOutput = '';

        if (_Common2.default.checkErrors(CONFIG, this._section, index)) {
          return '';
        }

        this._backgroundMedia = _Common2.default.initMedia(background);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = foreground.panels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var panel = _step.value;

            if (panel.type === 'blocks') {
              var blockRenderer = _Common2.default.renderBlocks(panel.blocks);

              this._panels.push({
                type: 'blocks',
                blocks: blockRenderer.blocks,
                editor: null
              });

              var blockOutput = '<div class="blocks">' + blockRenderer.output + '</div>';
              creditsOutput += blockOutput;
            } else if (panel.type === 'credits') {
              var credits = _Common2.default.initMedia(panel, null);

              this._panels.push({
                type: 'credits',
                credits: credits,
                editor: null
              });

              creditsOutput += credits.render({
                placement: 'block'
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return (0, _Credits2.default)({
          background: _Common2.default.renderBackground({
            media: this._backgroundMedia
          }),
          credits: creditsOutput
        });
      }
    }, {
      key: 'postCreate',
      value: function postCreate(sectionContainer) {
        this._node = sectionContainer;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._panels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var panel = _step2.value;

            if (panel.type === 'blocks') {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = panel.blocks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var block = _step3.value;

                  block.postCreate({
                    container: sectionContainer
                  });
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            } else if (panel.type === 'credits') {
              panel.credits.postCreate({
                container: sectionContainer
              });
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: 'getPreviewThumbnail',
      value: function getPreviewThumbnail() {
        return '';
      }
    }, {
      key: 'getPreviewText',
      value: function getPreviewText() {
        return '';
      }
    }, {
      key: 'getPreviewIcon',
      value: function getPreviewIcon() {
        return '';
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        return [];
      }
    }, {
      key: 'onScroll',
      value: function onScroll() {
        //
      }
    }, {
      key: 'resize',
      value: function resize() {
        //
      }
    }]);

    return Credits;
  }();

  exports.default = Credits;
  module.exports = exports['default'];
});
//# sourceMappingURL=Credits.js.map
;
define('storymaps-react/tpl/view/section/FactoryViewer',['module', 'exports', './Cover/Cover', './Sequence', './Title', './Immersive/Immersive', './Credits'], function (module, exports, _Cover, _Sequence, _Title, _Immersive, _Credits) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Cover2 = _interopRequireDefault(_Cover);

  var _Sequence2 = _interopRequireDefault(_Sequence);

  var _Title2 = _interopRequireDefault(_Title);

  var _Immersive2 = _interopRequireDefault(_Immersive);

  var _Credits2 = _interopRequireDefault(_Credits);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var FactoryViewer = function () {
    function FactoryViewer() {
      _classCallCheck(this, FactoryViewer);
    }

    _createClass(FactoryViewer, null, [{
      key: 'getClasses',
      value: function getClasses() {
        return {
          Cover: _Cover2.default,
          Sequence: _Sequence2.default,
          Title: _Title2.default,
          Immersive: _Immersive2.default,
          Credits: _Credits2.default,
          CreditsPlaceholder: function CreditsPlaceholder() {}
        };
      }
    }, {
      key: 'createInstance',
      value: function createInstance() {
        var sectionJSON = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var section = null,
            type = sectionJSON.type;

        if (!type) {
          console.error('Invalid json for: ', sectionJSON);
          return section;
        }

        var classes = this.getClasses();

        if (type == 'cover') {
          section = new classes.Cover(sectionJSON);
        } else if (type == 'sequence') {
          section = new classes.Sequence(sectionJSON);
        } else if (type == 'title') {
          section = new classes.Title(sectionJSON);
        } else if (type == 'immersive') {
          section = new classes.Immersive(sectionJSON);
        } else if (type == 'credits') {
          section = new classes.Credits(sectionJSON);
        } else if (type == 'credits-placeholder') {
          section = new classes.CreditsPlaceholder(sectionJSON);
        } else {
          console.error('Could not find corresponding layout for: ', sectionJSON);
        }

        return section;
      }
    }]);

    return FactoryViewer;
  }();

  exports.default = FactoryViewer;
  module.exports = exports['default'];
});
//# sourceMappingURL=FactoryViewer.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/section/Immersive/Panel', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\""
    + escapeExpression(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classes","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"blocksWrapper\">\r\n    <div class=\"blocks\">\r\n      ";
  stack1 = ((helper = (helper = helpers.blocks || (depth0 != null ? depth0.blocks : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"blocks","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    </div>\r\n    <div class=\"builder-ui panel-cfg\"></div>\r\n  </div>\r\n</div>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/section/Immersive/Panel',[],function(){});
define('storymaps-react/tpl/view/section/Immersive/Panel',['module', 'exports', 'storymaps/tpl/view/section/Common', 'storymaps/tpl/utils/UI', 'lib-build/hbars!./Panel', 'lib-build/less!./Panel'], function (module, exports, _Common, _UI, _Panel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Common2 = _interopRequireDefault(_Common);

  var _UI2 = _interopRequireDefault(_UI);

  var _Panel2 = _interopRequireDefault(_Panel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var BUILDER_PANEL_HEIGHT = 125;

  var Panel = function () {
    function Panel(panel) {
      _classCallCheck(this, Panel);

      this.id = _UI2.default.getUID();
      this.layout = panel.layout;

      this._settings = panel.settings;
      this._blocksJSON = panel.blocks;
      this._blocks = null;

      this._node = null;
    }

    _createClass(Panel, [{
      key: 'render',
      value: function render() {
        var blocksRender = _Common2.default.renderBlocks(this._blocksJSON, {});

        this._blocks = blocksRender.blocks;

        return (0, _Panel2.default)({
          id: this.id,
          classes: this.getClasses(),
          blocks: blocksRender.output
        });
      }
    }, {
      key: 'load',
      value: function load() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._blocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var block = _step.value;

            block.load();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'postCreate',
      value: function postCreate() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        if (!params.container) {
          return;
        }

        this._node = params.container.find('#' + this.id);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._blocks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var block = _step2.value;

            block.postCreate({
              container: this._node,
              onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
              onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
              builderConfigurationTabs: this._mediaConfigurationTabs
            });
          }

          // In builder - hide the panel if panel has only one empty text block
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (!app.isInBuilder && this._blocks.length == 1 && this._blocks[0].type == 'text' && !this._blocks[0].getPreviewText()) {
          this._node.find('.blocksWrapper').hide();
        }
      }
    }, {
      key: 'getClasses',
      value: function getClasses() {
        var classes = ['imm-panel'];

        if (this._settings) {
          classes.push('style-' + this._settings.style);
          classes.push('theme-' + this._settings.theme);
          classes.push('placement-' + this._settings['position-x']);
          classes.push('size-' + this._settings.size);
        }

        return classes.join(' ');
      }
    }, {
      key: 'updatePosition',
      value: function updatePosition(params) {
        if (!params.currentSectionScroll) {
          return;
        }

        // windowHeight as this is in Immersive and scroll beneath the header and builder panel
        var sectionHeight = app.display.windowHeight,
            scrollTop = params.currentSectionScroll % sectionHeight,
            scrollProgress = scrollTop / sectionHeight,
            panelPos = null,
            panelOpa = 1;

        /*
         * Scroll full is a simple postion:relative element that scroll along with the page
         */

        if (this.layout == 'scroll-partial') {
          // Move the panel around the middle of the viewPort
          // Goal is that the panel is fully opaque at the middle of the screen
          // The panel only scroll over sectionHeight / 4
          // 100px is 1/2 of panel height, it should be replaced a real measurement TODO

          // Keep the header on purpose
          var visibleArea = app.display.windowHeight;
          if (app.isInBuilder) {
            visibleArea -= BUILDER_PANEL_HEIGHT;
          }

          var middlePositionY = visibleArea / 2,
              panelHalfHeight = 75;

          panelPos = middlePositionY + panelHalfHeight - scrollProgress * (sectionHeight / 4);

          // Should use GSOP or some other lib to compute this
          if (scrollProgress <= 0.5) {
            panelOpa = scrollProgress * 2 * 1.5; // 1.5 acceleration factor
          } else {
            panelOpa = 1 - (scrollProgress - 0.5) * 2 / 1.5;
          }

          if (panelOpa > 1) {
            panelOpa = 1;
          } else if (panelOpa < 0) {
            panelOpa = 0;
          }

          if (panelOpa > 0.9) {
            panelOpa = 1;
          }

          this._node.parent().find('.imm-panel').css({
            transform: 'inherit',
            opacity: 0,
            visibility: 'hidden'
          });
          this._node.css({
            transform: 'translateY(' + parseInt(panelPos) + 'px)',
            opacity: panelOpa,
            visibility: 'visible'
          });
        }
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        var arcgisContent = [];

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this._blocks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var block = _step3.value;

            arcgisContent.push.apply(arcgisContent, _toConsumableArray(block.getArcGISContent()));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return arcgisContent;
      }
    }]);

    return Panel;
  }();

  exports.default = Panel;
  module.exports = exports['default'];
});
//# sourceMappingURL=Panel.js.map
;
define('storymaps/tpl/view/section/Immersive/PanelFactoryViewer',[
  'storymaps-react/tpl/view/section/Immersive/Panel'
],
function(
  Panel
) {
  return {
    createInstance: function(panelJSON) {
      return new Panel(panelJSON);

      /*
      var layout = panelJSON.layout,
          panel = null;

      if (layout == 'scroll-full') {
        panel = new PanelScrollFull(panelJSON);
      }
      else if (layout == 'scroll-partial') {
        panel = new PanelScrollPartial(panelJSON);
      }
      else {
        console.error('Could not find corresponding layout for: ', panelJSON);
      }

      return panel;
      */
    }
  };
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){"use strict";if(global._babelPolyfill){throw new Error("only one instance of babel/polyfill is allowed")}global._babelPolyfill=true;require("core-js/shim");require("regenerator/runtime")}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"core-js/shim":72,"regenerator/runtime":73}],2:[function(require,module,exports){"use strict";var $=require("./$");module.exports=function(IS_INCLUDES){return function(el){var O=$.toObject(this),length=$.toLength(O.length),index=$.toIndex(arguments[1],length),value;if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true}else for(;length>index;index++)if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index}return!IS_INCLUDES&&-1}}},{"./$":16}],3:[function(require,module,exports){"use strict";var $=require("./$"),ctx=require("./$.ctx");module.exports=function(TYPE){var IS_MAP=TYPE==1,IS_FILTER=TYPE==2,IS_SOME=TYPE==3,IS_EVERY=TYPE==4,IS_FIND_INDEX=TYPE==6,NO_HOLES=TYPE==5||IS_FIND_INDEX;return function(callbackfn){var O=Object($.assertDefined(this)),self=$.ES5Object(O),f=ctx(callbackfn,arguments[1],3),length=$.toLength(self.length),index=0,result=IS_MAP?Array(length):IS_FILTER?[]:undefined,val,res;for(;length>index;index++)if(NO_HOLES||index in self){val=self[index];res=f(val,index,O);if(TYPE){if(IS_MAP)result[index]=res;else if(res)switch(TYPE){case 3:return true;case 5:return val;case 6:return index;case 2:result.push(val)}else if(IS_EVERY)return false}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}},{"./$":16,"./$.ctx":10}],4:[function(require,module,exports){var $=require("./$");function assert(condition,msg1,msg2){if(!condition)throw TypeError(msg2?msg1+msg2:msg1)}assert.def=$.assertDefined;assert.fn=function(it){if(!$.isFunction(it))throw TypeError(it+" is not a function!");return it};assert.obj=function(it){if(!$.isObject(it))throw TypeError(it+" is not an object!");return it};assert.inst=function(it,Constructor,name){if(!(it instanceof Constructor))throw TypeError(name+": use the 'new' operator!");return it};module.exports=assert},{"./$":16}],5:[function(require,module,exports){var $=require("./$");module.exports=Object.assign||function assign(target,source){var T=Object($.assertDefined(target)),l=arguments.length,i=1;while(l>i){var S=$.ES5Object(arguments[i++]),keys=$.getKeys(S),length=keys.length,j=0,key;while(length>j)T[key=keys[j++]]=S[key]}return T}},{"./$":16}],6:[function(require,module,exports){var $=require("./$"),TAG=require("./$.wks")("toStringTag"),toString={}.toString;function cof(it){return toString.call(it).slice(8,-1)}cof.classof=function(it){var O,T;return it==undefined?it===undefined?"Undefined":"Null":typeof(T=(O=Object(it))[TAG])=="string"?T:cof(O)};cof.set=function(it,tag,stat){if(it&&!$.has(it=stat?it:it.prototype,TAG))$.hide(it,TAG,tag)};module.exports=cof},{"./$":16,"./$.wks":27}],7:[function(require,module,exports){"use strict";var $=require("./$"),ctx=require("./$.ctx"),safe=require("./$.uid").safe,assert=require("./$.assert"),$iter=require("./$.iter"),has=$.has,set=$.set,isObject=$.isObject,hide=$.hide,step=$iter.step,isFrozen=Object.isFrozen||$.core.Object.isFrozen,ID=safe("id"),O1=safe("O1"),LAST=safe("last"),FIRST=safe("first"),ITER=safe("iter"),SIZE=$.DESC?safe("size"):"size",id=0;function fastKey(it,create){if(!isObject(it))return(typeof it=="string"?"S":"P")+it;if(isFrozen(it))return"F";if(!has(it,ID)){if(!create)return"E";hide(it,ID,++id)}return"O"+it[ID]}function getEntry(that,key){var index=fastKey(key),entry;if(index!="F")return that[O1][index];for(entry=that[FIRST];entry;entry=entry.n){if(entry.k==key)return entry}}module.exports={getConstructor:function(NAME,IS_MAP,ADDER){function C(iterable){var that=assert.inst(this,C,NAME);set(that,O1,$.create(null));set(that,SIZE,0);set(that,LAST,undefined);set(that,FIRST,undefined);if(iterable!=undefined)$iter.forOf(iterable,IS_MAP,that[ADDER],that)}$.mix(C.prototype,{clear:function clear(){for(var that=this,data=that[O1],entry=that[FIRST];entry;entry=entry.n){entry.r=true;if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i]}that[FIRST]=that[LAST]=undefined;that[SIZE]=0},"delete":function(key){var that=this,entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that[O1][entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that[FIRST]==entry)that[FIRST]=next;if(that[LAST]==entry)that[LAST]=prev;that[SIZE]--}return!!entry},forEach:function forEach(callbackfn){var f=ctx(callbackfn,arguments[1],3),entry;while(entry=entry?entry.n:this[FIRST]){f(entry.v,entry.k,this);while(entry&&entry.r)entry=entry.p}},has:function has(key){return!!getEntry(this,key)}});if($.DESC)$.setDesc(C.prototype,"size",{get:function(){return assert.def(this[SIZE])}});return C},def:function(that,key,value){var entry=getEntry(that,key),prev,index;if(entry){entry.v=value}else{that[LAST]=entry={i:index=fastKey(key,true),k:key,v:value,p:prev=that[LAST],n:undefined,r:false};if(!that[FIRST])that[FIRST]=entry;if(prev)prev.n=entry;that[SIZE]++;if(index!="F")that[O1][index]=entry}return that},getEntry:getEntry,getIterConstructor:function(){return function(iterated,kind){set(this,ITER,{o:iterated,k:kind})}},next:function(){var iter=this[ITER],kind=iter.k,entry=iter.l;while(entry&&entry.r)entry=entry.p;if(!iter.o||!(iter.l=entry=entry?entry.n:iter.o[FIRST])){iter.o=undefined;return step(1)}if(kind=="key")return step(0,entry.k);if(kind=="value")return step(0,entry.v);return step(0,[entry.k,entry.v])}}},{"./$":16,"./$.assert":4,"./$.ctx":10,"./$.iter":15,"./$.uid":25}],8:[function(require,module,exports){"use strict";var $=require("./$"),safe=require("./$.uid").safe,assert=require("./$.assert"),forOf=require("./$.iter").forOf,_has=$.has,isObject=$.isObject,hide=$.hide,isFrozen=Object.isFrozen||$.core.Object.isFrozen,id=0,ID=safe("id"),WEAK=safe("weak"),LEAK=safe("leak"),method=require("./$.array-methods"),find=method(5),findIndex=method(6);function findFrozen(store,key){return find.call(store.array,function(it){return it[0]===key})}function leakStore(that){return that[LEAK]||hide(that,LEAK,{array:[],get:function(key){var entry=findFrozen(this,key);if(entry)return entry[1]},has:function(key){return!!findFrozen(this,key)},set:function(key,value){var entry=findFrozen(this,key);if(entry)entry[1]=value;else this.array.push([key,value])},"delete":function(key){var index=findIndex.call(this.array,function(it){return it[0]===key});if(~index)this.array.splice(index,1);return!!~index}})[LEAK]}module.exports={getConstructor:function(NAME,IS_MAP,ADDER){function C(iterable){$.set(assert.inst(this,C,NAME),ID,id++);if(iterable!=undefined)forOf(iterable,IS_MAP,this[ADDER],this)}$.mix(C.prototype,{"delete":function(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this)["delete"](key);return _has(key,WEAK)&&_has(key[WEAK],this[ID])&&delete key[WEAK][this[ID]]},has:function has(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this).has(key);return _has(key,WEAK)&&_has(key[WEAK],this[ID])}});return C},def:function(that,key,value){if(isFrozen(assert.obj(key))){leakStore(that).set(key,value)}else{_has(key,WEAK)||hide(key,WEAK,{});key[WEAK][that[ID]]=value}return that},leakStore:leakStore,WEAK:WEAK,ID:ID}},{"./$":16,"./$.array-methods":3,"./$.assert":4,"./$.iter":15,"./$.uid":25}],9:[function(require,module,exports){"use strict";var $=require("./$"),$def=require("./$.def"),$iter=require("./$.iter"),assertInstance=require("./$.assert").inst;module.exports=function(NAME,methods,common,IS_MAP,isWeak){var Base=$.g[NAME],C=Base,ADDER=IS_MAP?"set":"add",proto=C&&C.prototype,O={};function fixMethod(KEY,CHAIN){var method=proto[KEY];if($.FW)proto[KEY]=function(a,b){var result=method.call(this,a===0?0:a,b);return CHAIN?this:result}}if(!$.isFunction(C)||!(isWeak||!$iter.BUGGY&&proto.forEach&&proto.entries)){C=common.getConstructor(NAME,IS_MAP,ADDER);$.mix(C.prototype,methods)}else{var inst=new C,chain=inst[ADDER](isWeak?{}:-0,1),buggyZero;if(!require("./$.iter-detect")(function(iter){new C(iter)})){C=function(iterable){assertInstance(this,C,NAME);var that=new Base;if(iterable!=undefined)$iter.forOf(iterable,IS_MAP,that[ADDER],that);return that};C.prototype=proto;if($.FW)proto.constructor=C}isWeak||inst.forEach(function(val,key){buggyZero=1/key===-Infinity});if(buggyZero){fixMethod("delete");fixMethod("has");IS_MAP&&fixMethod("get")}if(buggyZero||chain!==inst)fixMethod(ADDER,true)}require("./$.cof").set(C,NAME);require("./$.species")(C);O[NAME]=C;$def($def.G+$def.W+$def.F*(C!=Base),O);if(!isWeak)$iter.std(C,NAME,common.getIterConstructor(),common.next,IS_MAP?"key+value":"value",!IS_MAP,true);return C}},{"./$":16,"./$.assert":4,"./$.cof":6,"./$.def":11,"./$.iter":15,"./$.iter-detect":14,"./$.species":22}],10:[function(require,module,exports){var assertFunction=require("./$.assert").fn;module.exports=function(fn,that,length){assertFunction(fn);if(~length&&that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},{"./$.assert":4}],11:[function(require,module,exports){var $=require("./$"),global=$.g,core=$.core,isFunction=$.isFunction;function ctx(fn,that){return function(){return fn.apply(that,arguments)}}global.core=core;$def.F=1;$def.G=2;$def.S=4;$def.P=8;$def.B=16;$def.W=32;function $def(type,name,source){var key,own,out,exp,isGlobal=type&$def.G,target=isGlobal?global:type&$def.S?global[name]:(global[name]||{}).prototype,exports=isGlobal?core:core[name]||(core[name]={});if(isGlobal)source=name;for(key in source){own=!(type&$def.F)&&target&&key in target;out=(own?target:source)[key];if(type&$def.B&&own)exp=ctx(out,global);else exp=type&$def.P&&isFunction(out)?ctx(Function.call,out):out;if(target&&!own){if(isGlobal)target[key]=out;else delete target[key]&&$.hide(target,key,out)}if(exports[key]!=out)$.hide(exports,key,exp)}}module.exports=$def},{"./$":16}],12:[function(require,module,exports){module.exports=function($){$.FW=true;$.path=$.g;return $}},{}],13:[function(require,module,exports){module.exports=function(fn,args,that){var un=that===undefined;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);case 5:return un?fn(args[0],args[1],args[2],args[3],args[4]):fn.call(that,args[0],args[1],args[2],args[3],args[4])}return fn.apply(that,args)}},{}],14:[function(require,module,exports){var SYMBOL_ITERATOR=require("./$.wks")("iterator"),SAFE_CLOSING=false;try{var riter=[7][SYMBOL_ITERATOR]();riter["return"]=function(){SAFE_CLOSING=true};Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec){if(!SAFE_CLOSING)return false;var safe=false;try{var arr=[7],iter=arr[SYMBOL_ITERATOR]();iter.next=function(){safe=true};arr[SYMBOL_ITERATOR]=function(){return iter};exec(arr)}catch(e){}return safe}},{"./$.wks":27}],15:[function(require,module,exports){"use strict";var $=require("./$"),ctx=require("./$.ctx"),cof=require("./$.cof"),$def=require("./$.def"),assertObject=require("./$.assert").obj,SYMBOL_ITERATOR=require("./$.wks")("iterator"),FF_ITERATOR="@@iterator",Iterators={},IteratorPrototype={};var BUGGY="keys"in[]&&!("next"in[].keys());setIterator(IteratorPrototype,$.that);function setIterator(O,value){$.hide(O,SYMBOL_ITERATOR,value);if(FF_ITERATOR in[])$.hide(O,FF_ITERATOR,value)}function defineIterator(Constructor,NAME,value,DEFAULT){var proto=Constructor.prototype,iter=proto[SYMBOL_ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT]||value;if($.FW)setIterator(proto,iter);if(iter!==value){var iterProto=$.getProto(iter.call(new Constructor));cof.set(iterProto,NAME+" Iterator",true);if($.FW)$.has(proto,FF_ITERATOR)&&setIterator(iterProto,$.that)}Iterators[NAME]=iter;Iterators[NAME+" Iterator"]=$.that;return iter}function getIterator(it){var Symbol=$.g.Symbol,ext=it[Symbol&&Symbol.iterator||FF_ITERATOR],getIter=ext||it[SYMBOL_ITERATOR]||Iterators[cof.classof(it)];return assertObject(getIter.call(it))}function closeIterator(iterator){var ret=iterator["return"];if(ret!==undefined)assertObject(ret.call(iterator))}function stepCall(iterator,fn,value,entries){try{return entries?fn(assertObject(value)[0],value[1]):fn(value)}catch(e){closeIterator(iterator);throw e}}var $iter=module.exports={BUGGY:BUGGY,Iterators:Iterators,prototype:IteratorPrototype,step:function(done,value){return{value:value,done:!!done}},stepCall:stepCall,close:closeIterator,is:function(it){var O=Object(it),Symbol=$.g.Symbol,SYM=Symbol&&Symbol.iterator||FF_ITERATOR;return SYM in O||SYMBOL_ITERATOR in O||$.has(Iterators,cof.classof(O))},get:getIterator,set:setIterator,create:function(Constructor,NAME,next,proto){Constructor.prototype=$.create(proto||$iter.prototype,{next:$.desc(1,next)});cof.set(Constructor,NAME+" Iterator")},define:defineIterator,std:function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCE){function createIter(kind){return function(){return new Constructor(this,kind)}}$iter.create(Constructor,NAME,next);var entries=createIter("key+value"),values=createIter("value"),proto=Base.prototype,methods,key;if(DEFAULT=="value")values=defineIterator(Base,NAME,values,"values");else entries=defineIterator(Base,NAME,entries,"entries");if(DEFAULT){methods={entries:entries,keys:IS_SET?values:createIter("key"),values:values};$def($def.P+$def.F*BUGGY,NAME,methods);if(FORCE)for(key in methods){if(!(key in proto))$.hide(proto,key,methods[key])}}},forOf:function(iterable,entries,fn,that){var iterator=getIterator(iterable),f=ctx(fn,that,entries?2:1),step;while(!(step=iterator.next()).done){if(stepCall(iterator,f,step.value,entries)===false){return closeIterator(iterator)}}}}},{"./$":16,"./$.assert":4,"./$.cof":6,"./$.ctx":10,"./$.def":11,"./$.wks":27}],16:[function(require,module,exports){"use strict";var global=typeof self!="undefined"?self:Function("return this")(),core={},defineProperty=Object.defineProperty,hasOwnProperty={}.hasOwnProperty,ceil=Math.ceil,floor=Math.floor,max=Math.max,min=Math.min;var DESC=!!function(){try{return defineProperty({},"a",{get:function(){return 2}}).a==2}catch(e){}}();var hide=createDefiner(1);function toInteger(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}function desc(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value}}function simpleSet(object,key,value){object[key]=value;return object}function createDefiner(bitmap){return DESC?function(object,key,value){return $.setDesc(object,key,desc(bitmap,value))}:simpleSet}function isObject(it){return it!==null&&(typeof it=="object"||typeof it=="function")}function isFunction(it){return typeof it=="function"}function assertDefined(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it}var $=module.exports=require("./$.fw")({g:global,core:core,html:global.document&&document.documentElement,isObject:isObject,isFunction:isFunction,it:function(it){return it},that:function(){return this},toInteger:toInteger,toLength:function(it){return it>0?min(toInteger(it),9007199254740991):0},toIndex:function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length)},has:function(it,key){return hasOwnProperty.call(it,key)},create:Object.create,getProto:Object.getPrototypeOf,DESC:DESC,desc:desc,getDesc:Object.getOwnPropertyDescriptor,setDesc:defineProperty,getKeys:Object.keys,getNames:Object.getOwnPropertyNames,getSymbols:Object.getOwnPropertySymbols,assertDefined:assertDefined,ES5Object:Object,toObject:function(it){return $.ES5Object(assertDefined(it))},hide:hide,def:createDefiner(0),set:global.Symbol?simpleSet:hide,mix:function(target,src){for(var key in src)hide(target,key,src[key]);return target},each:[].forEach});if(typeof __e!="undefined")__e=core;if(typeof __g!="undefined")__g=global},{"./$.fw":12}],17:[function(require,module,exports){var $=require("./$");module.exports=function(object,el){var O=$.toObject(object),keys=$.getKeys(O),length=keys.length,index=0,key;while(length>index)if(O[key=keys[index++]]===el)return key}},{"./$":16}],18:[function(require,module,exports){var $=require("./$"),assertObject=require("./$.assert").obj;module.exports=function ownKeys(it){assertObject(it);return $.getSymbols?$.getNames(it).concat($.getSymbols(it)):$.getNames(it)}},{"./$":16,"./$.assert":4}],19:[function(require,module,exports){"use strict";var $=require("./$"),invoke=require("./$.invoke"),assertFunction=require("./$.assert").fn;module.exports=function(){var fn=assertFunction(this),length=arguments.length,pargs=Array(length),i=0,_=$.path._,holder=false;while(length>i)if((pargs[i]=arguments[i++])===_)holder=true;return function(){var that=this,_length=arguments.length,j=0,k=0,args;if(!holder&&!_length)return invoke(fn,pargs,that);args=pargs.slice();if(holder)for(;length>j;j++)if(args[j]===_)args[j]=arguments[k++];while(_length>k)args.push(arguments[k++]);return invoke(fn,args,that)}}},{"./$":16,"./$.assert":4,"./$.invoke":13}],20:[function(require,module,exports){"use strict";module.exports=function(regExp,replace,isStatic){var replacer=replace===Object(replace)?function(part){return replace[part]}:replace;return function(it){return String(isStatic?it:this).replace(regExp,replacer)}}},{}],21:[function(require,module,exports){var $=require("./$"),assert=require("./$.assert");function check(O,proto){assert.obj(O);assert(proto===null||$.isObject(proto),proto,": can't set as prototype!")}module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(buggy,set){try{set=require("./$.ctx")(Function.call,$.getDesc(Object.prototype,"__proto__").set,2);set({},[])}catch(e){buggy=true}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O}}():undefined),check:check}},{"./$":16,"./$.assert":4,"./$.ctx":10}],22:[function(require,module,exports){var $=require("./$");module.exports=function(C){if($.DESC&&$.FW)$.setDesc(C,require("./$.wks")("species"),{configurable:true,get:$.that})}},{"./$":16,"./$.wks":27}],23:[function(require,module,exports){"use strict";var $=require("./$");module.exports=function(TO_STRING){return function(pos){var s=String($.assertDefined(this)),i=$.toInteger(pos),l=s.length,a,b;if(i<0||i>=l)return TO_STRING?"":undefined;a=s.charCodeAt(i);return a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536}}},{"./$":16}],24:[function(require,module,exports){"use strict";var $=require("./$"),ctx=require("./$.ctx"),cof=require("./$.cof"),invoke=require("./$.invoke"),global=$.g,isFunction=$.isFunction,html=$.html,document=global.document,process=global.process,setTask=global.setImmediate,clearTask=global.clearImmediate,postMessage=global.postMessage,addEventListener=global.addEventListener,MessageChannel=global.MessageChannel,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",defer,channel,port;function run(){var id=+this;if($.has(queue,id)){var fn=queue[id];delete queue[id];fn()}}function listner(event){run.call(event.data)}if(!isFunction(setTask)||!isFunction(clearTask)){setTask=function(fn){var args=[],i=1;while(arguments.length>i)args.push(arguments[i++]);queue[++counter]=function(){invoke(isFunction(fn)?fn:Function(fn),args)};defer(counter);return counter};clearTask=function(id){delete queue[id]};if(cof(process)=="process"){defer=function(id){process.nextTick(ctx(run,id,1))}}else if(addEventListener&&isFunction(postMessage)&&!global.importScripts){defer=function(id){postMessage(id,"*")};addEventListener("message",listner,false)}else if(isFunction(MessageChannel)){channel=new MessageChannel;port=channel.port2;channel.port1.onmessage=listner;defer=ctx(port.postMessage,port,1)}else if(document&&ONREADYSTATECHANGE in document.createElement("script")){defer=function(id){html.appendChild(document.createElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run.call(id)}}}else{defer=function(id){setTimeout(ctx(run,id,1),0)}}}module.exports={set:setTask,clear:clearTask}},{"./$":16,"./$.cof":6,"./$.ctx":10,"./$.invoke":13}],25:[function(require,module,exports){var sid=0;function uid(key){return"Symbol("+key+")_"+(++sid+Math.random()).toString(36)}uid.safe=require("./$").g.Symbol||uid;module.exports=uid},{"./$":16}],26:[function(require,module,exports){var $=require("./$"),UNSCOPABLES=require("./$.wks")("unscopables");if($.FW&&!(UNSCOPABLES in[]))$.hide(Array.prototype,UNSCOPABLES,{});module.exports=function(key){if($.FW)[][UNSCOPABLES][key]=true}},{"./$":16,"./$.wks":27}],27:[function(require,module,exports){var global=require("./$").g,store={};module.exports=function(name){return store[name]||(store[name]=global.Symbol&&global.Symbol[name]||require("./$.uid").safe("Symbol."+name))}},{"./$":16,"./$.uid":25}],28:[function(require,module,exports){var $=require("./$"),cof=require("./$.cof"),$def=require("./$.def"),invoke=require("./$.invoke"),arrayMethod=require("./$.array-methods"),IE_PROTO=require("./$.uid").safe("__proto__"),assert=require("./$.assert"),assertObject=assert.obj,ObjectProto=Object.prototype,A=[],slice=A.slice,indexOf=A.indexOf,classof=cof.classof,defineProperties=Object.defineProperties,has=$.has,defineProperty=$.setDesc,getOwnDescriptor=$.getDesc,isFunction=$.isFunction,toObject=$.toObject,toLength=$.toLength,IE8_DOM_DEFINE=false;if(!$.DESC){try{IE8_DOM_DEFINE=defineProperty(document.createElement("div"),"x",{get:function(){return 8}}).x==8}catch(e){}$.setDesc=function(O,P,Attributes){if(IE8_DOM_DEFINE)try{return defineProperty(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");if("value"in Attributes)assertObject(O)[P]=Attributes.value;return O};$.getDesc=function(O,P){if(IE8_DOM_DEFINE)try{return getOwnDescriptor(O,P)}catch(e){}if(has(O,P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O,P),O[P])};defineProperties=function(O,Properties){assertObject(O);var keys=$.getKeys(Properties),length=keys.length,i=0,P;while(length>i)$.setDesc(O,P=keys[i++],Properties[P]);return O}}$def($def.S+$def.F*!$.DESC,"Object",{getOwnPropertyDescriptor:$.getDesc,defineProperty:$.setDesc,defineProperties:defineProperties});var keys1=("constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,"+"toLocaleString,toString,valueOf").split(","),keys2=keys1.concat("length","prototype"),keysLen1=keys1.length;var createDict=function(){var iframe=document.createElement("iframe"),i=keysLen1,gt=">",iframeDocument;iframe.style.display="none";$.html.appendChild(iframe);iframe.src="javascript:";iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write("<script>document.F=Object</script"+gt);iframeDocument.close();createDict=iframeDocument.F;while(i--)delete createDict.prototype[keys1[i]];return createDict()};function createGetKeys(names,length){return function(object){var O=toObject(object),i=0,result=[],key;for(key in O)if(key!=IE_PROTO)has(O,key)&&result.push(key);while(length>i)if(has(O,key=names[i++])){~indexOf.call(result,key)||result.push(key)}return result}}function isPrimitive(it){return!$.isObject(it)}function Empty(){}$def($def.S,"Object",{getPrototypeOf:$.getProto=$.getProto||function(O){O=Object(assert.def(O));if(has(O,IE_PROTO))return O[IE_PROTO];if(isFunction(O.constructor)&&O instanceof O.constructor){return O.constructor.prototype}return O instanceof Object?ObjectProto:null},getOwnPropertyNames:$.getNames=$.getNames||createGetKeys(keys2,keys2.length,true),create:$.create=$.create||function(O,Properties){var result;if(O!==null){Empty.prototype=assertObject(O);result=new Empty;Empty.prototype=null;result[IE_PROTO]=O}else result=createDict();return Properties===undefined?result:defineProperties(result,Properties)},keys:$.getKeys=$.getKeys||createGetKeys(keys1,keysLen1,false),seal:$.it,freeze:$.it,preventExtensions:$.it,isSealed:isPrimitive,isFrozen:isPrimitive,isExtensible:$.isObject});$def($def.P,"Function",{bind:function(that){var fn=assert.fn(this),partArgs=slice.call(arguments,1);function bound(){var args=partArgs.concat(slice.call(arguments));return invoke(fn,args,this instanceof bound?$.create(fn.prototype):that)}if(fn.prototype)bound.prototype=fn.prototype;return bound}});function arrayMethodFix(fn){return function(){return fn.apply($.ES5Object(this),arguments)}}if(!(0 in Object("z")&&"z"[0]=="z")){$.ES5Object=function(it){return cof(it)=="String"?it.split(""):Object(it)}}$def($def.P+$def.F*($.ES5Object!=Object),"Array",{slice:arrayMethodFix(slice),join:arrayMethodFix(A.join)});$def($def.S,"Array",{isArray:function(arg){return cof(arg)=="Array"}});function createArrayReduce(isRight){return function(callbackfn,memo){assert.fn(callbackfn);var O=toObject(this),length=toLength(O.length),index=isRight?length-1:0,i=isRight?-1:1;if(arguments.length<2)for(;;){if(index in O){memo=O[index];index+=i;break}index+=i;assert(isRight?index>=0:length>index,"Reduce of empty array with no initial value")}for(;isRight?index>=0:length>index;index+=i)if(index in O){memo=callbackfn(memo,O[index],index,this)}return memo}}$def($def.P,"Array",{forEach:$.each=$.each||arrayMethod(0),map:arrayMethod(1),filter:arrayMethod(2),some:arrayMethod(3),every:arrayMethod(4),reduce:createArrayReduce(false),reduceRight:createArrayReduce(true),indexOf:indexOf=indexOf||require("./$.array-includes")(false),lastIndexOf:function(el,fromIndex){var O=toObject(this),length=toLength(O.length),index=length-1;if(arguments.length>1)index=Math.min(index,$.toInteger(fromIndex));if(index<0)index=toLength(length+index);for(;index>=0;index--)if(index in O)if(O[index]===el)return index;return-1}});$def($def.P,"String",{trim:require("./$.replacer")(/^\s*([\s\S]*\S)?\s*$/,"$1")});$def($def.S,"Date",{now:function(){return+new Date}});function lz(num){return num>9?num:"0"+num}$def($def.P,"Date",{toISOString:function(){if(!isFinite(this))throw RangeError("Invalid time value");var d=this,y=d.getUTCFullYear(),m=d.getUTCMilliseconds(),s=y<0?"-":y>9999?"+":"";return s+("00000"+Math.abs(y)).slice(s?-6:-4)+"-"+lz(d.getUTCMonth()+1)+"-"+lz(d.getUTCDate())+"T"+lz(d.getUTCHours())+":"+lz(d.getUTCMinutes())+":"+lz(d.getUTCSeconds())+"."+(m>99?m:"0"+lz(m))+"Z"}});if(classof(function(){return arguments}())=="Object")cof.classof=function(it){var tag=classof(it);return tag=="Object"&&isFunction(it.callee)?"Arguments":tag}},{"./$":16,"./$.array-includes":2,"./$.array-methods":3,"./$.assert":4,"./$.cof":6,"./$.def":11,"./$.invoke":13,"./$.replacer":20,"./$.uid":25}],29:[function(require,module,exports){"use strict";var $=require("./$"),$def=require("./$.def"),toIndex=$.toIndex;$def($def.P,"Array",{copyWithin:function copyWithin(target,start){var O=Object($.assertDefined(this)),len=$.toLength(O.length),to=toIndex(target,len),from=toIndex(start,len),end=arguments[2],fin=end===undefined?len:toIndex(end,len),count=Math.min(fin-from,len-to),inc=1;if(from<to&&to<from+count){inc=-1;from=from+count-1;to=to+count-1}while(count-->0){if(from in O)O[to]=O[from];else delete O[to];to+=inc;from+=inc}return O}});require("./$.unscope")("copyWithin")},{"./$":16,"./$.def":11,"./$.unscope":26}],30:[function(require,module,exports){"use strict";var $=require("./$"),$def=require("./$.def"),toIndex=$.toIndex;$def($def.P,"Array",{fill:function fill(value){var O=Object($.assertDefined(this)),length=$.toLength(O.length),index=toIndex(arguments[1],length),end=arguments[2],endPos=end===undefined?length:toIndex(end,length);while(endPos>index)O[index++]=value;return O}});require("./$.unscope")("fill")},{"./$":16,"./$.def":11,"./$.unscope":26}],31:[function(require,module,exports){var $def=require("./$.def");$def($def.P,"Array",{findIndex:require("./$.array-methods")(6)});require("./$.unscope")("findIndex")},{"./$.array-methods":3,"./$.def":11,"./$.unscope":26}],32:[function(require,module,exports){var $def=require("./$.def");$def($def.P,"Array",{find:require("./$.array-methods")(5)});require("./$.unscope")("find")},{"./$.array-methods":3,"./$.def":11,"./$.unscope":26}],33:[function(require,module,exports){var $=require("./$"),ctx=require("./$.ctx"),$def=require("./$.def"),$iter=require("./$.iter"),stepCall=$iter.stepCall;$def($def.S+$def.F*!require("./$.iter-detect")(function(iter){Array.from(iter)}),"Array",{from:function from(arrayLike){var O=Object($.assertDefined(arrayLike)),mapfn=arguments[1],mapping=mapfn!==undefined,f=mapping?ctx(mapfn,arguments[2],2):undefined,index=0,length,result,step,iterator;if($iter.is(O)){iterator=$iter.get(O);result=new(typeof this=="function"?this:Array);for(;!(step=iterator.next()).done;index++){result[index]=mapping?stepCall(iterator,f,[step.value,index],true):step.value}}else{result=new(typeof this=="function"?this:Array)(length=$.toLength(O.length));for(;length>index;index++){result[index]=mapping?f(O[index],index):O[index]}}result.length=index;return result}})},{"./$":16,"./$.ctx":10,"./$.def":11,"./$.iter":15,"./$.iter-detect":14}],34:[function(require,module,exports){var $=require("./$"),setUnscope=require("./$.unscope"),ITER=require("./$.uid").safe("iter"),$iter=require("./$.iter"),step=$iter.step,Iterators=$iter.Iterators;$iter.std(Array,"Array",function(iterated,kind){$.set(this,ITER,{o:$.toObject(iterated),i:0,k:kind})},function(){var iter=this[ITER],O=iter.o,kind=iter.k,index=iter.i++;if(!O||index>=O.length){iter.o=undefined;return step(1)}if(kind=="key")return step(0,index);if(kind=="value")return step(0,O[index]);return step(0,[index,O[index]])},"value");Iterators.Arguments=Iterators.Array;setUnscope("keys");setUnscope("values");setUnscope("entries")},{"./$":16,"./$.iter":15,"./$.uid":25,"./$.unscope":26}],35:[function(require,module,exports){var $def=require("./$.def");$def($def.S,"Array",{of:function of(){var index=0,length=arguments.length,result=new(typeof this=="function"?this:Array)(length);while(length>index)result[index]=arguments[index++];result.length=length;return result}})},{"./$.def":11}],36:[function(require,module,exports){require("./$.species")(Array)},{"./$.species":22}],37:[function(require,module,exports){"use strict";var $=require("./$"),NAME="name",setDesc=$.setDesc,FunctionProto=Function.prototype;NAME in FunctionProto||$.FW&&$.DESC&&setDesc(FunctionProto,NAME,{configurable:true,get:function(){var match=String(this).match(/^\s*function ([^ (]*)/),name=match?match[1]:"";$.has(this,NAME)||setDesc(this,NAME,$.desc(5,name));return name},set:function(value){$.has(this,NAME)||setDesc(this,NAME,$.desc(0,value))}})},{"./$":16}],38:[function(require,module,exports){"use strict";var strong=require("./$.collection-strong");require("./$.collection")("Map",{get:function get(key){var entry=strong.getEntry(this,key);return entry&&entry.v},set:function set(key,value){return strong.def(this,key===0?0:key,value)}},strong,true)},{"./$.collection":9,"./$.collection-strong":7}],39:[function(require,module,exports){var Infinity=1/0,$def=require("./$.def"),E=Math.E,pow=Math.pow,abs=Math.abs,exp=Math.exp,log=Math.log,sqrt=Math.sqrt,ceil=Math.ceil,floor=Math.floor,EPSILON=pow(2,-52),EPSILON32=pow(2,-23),MAX32=pow(2,127)*(2-EPSILON32),MIN32=pow(2,-126);function roundTiesToEven(n){return n+1/EPSILON-1/EPSILON}function sign(x){return(x=+x)==0||x!=x?x:x<0?-1:1;

}function asinh(x){return!isFinite(x=+x)||x==0?x:x<0?-asinh(-x):log(x+sqrt(x*x+1))}function expm1(x){return(x=+x)==0?x:x>-1e-6&&x<1e-6?x+x*x/2:exp(x)-1}$def($def.S,"Math",{acosh:function acosh(x){return(x=+x)<1?NaN:isFinite(x)?log(x/E+sqrt(x+1)*sqrt(x-1)/E)+1:x},asinh:asinh,atanh:function atanh(x){return(x=+x)==0?x:log((1+x)/(1-x))/2},cbrt:function cbrt(x){return sign(x=+x)*pow(abs(x),1/3)},clz32:function clz32(x){return(x>>>=0)?31-floor(log(x+.5)*Math.LOG2E):32},cosh:function cosh(x){return(exp(x=+x)+exp(-x))/2},expm1:expm1,fround:function fround(x){var $abs=abs(x),$sign=sign(x),a,result;if($abs<MIN32)return $sign*roundTiesToEven($abs/MIN32/EPSILON32)*MIN32*EPSILON32;a=(1+EPSILON32/EPSILON)*$abs;result=a-(a-$abs);if(result>MAX32||result!=result)return $sign*Infinity;return $sign*result},hypot:function hypot(value1,value2){var sum=0,len1=arguments.length,len2=len1,args=Array(len1),larg=-Infinity,arg;while(len1--){arg=args[len1]=+arguments[len1];if(arg==Infinity||arg==-Infinity)return Infinity;if(arg>larg)larg=arg}larg=arg||1;while(len2--)sum+=pow(args[len2]/larg,2);return larg*sqrt(sum)},imul:function imul(x,y){var UInt16=65535,xn=+x,yn=+y,xl=UInt16&xn,yl=UInt16&yn;return 0|xl*yl+((UInt16&xn>>>16)*yl+xl*(UInt16&yn>>>16)<<16>>>0)},log1p:function log1p(x){return(x=+x)>-1e-8&&x<1e-8?x-x*x/2:log(1+x)},log10:function log10(x){return log(x)/Math.LN10},log2:function log2(x){return log(x)/Math.LN2},sign:sign,sinh:function sinh(x){return abs(x=+x)<1?(expm1(x)-expm1(-x))/2:(exp(x-1)-exp(-x-1))*(E/2)},tanh:function tanh(x){var a=expm1(x=+x),b=expm1(-x);return a==Infinity?1:b==Infinity?-1:(a-b)/(exp(x)+exp(-x))},trunc:function trunc(it){return(it>0?floor:ceil)(it)}})},{"./$.def":11}],40:[function(require,module,exports){"use strict";var $=require("./$"),isObject=$.isObject,isFunction=$.isFunction,NUMBER="Number",Number=$.g[NUMBER],Base=Number,proto=Number.prototype;function toPrimitive(it){var fn,val;if(isFunction(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(isFunction(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to number")}function toNumber(it){if(isObject(it))it=toPrimitive(it);if(typeof it=="string"&&it.length>2&&it.charCodeAt(0)==48){var binary=false;switch(it.charCodeAt(1)){case 66:case 98:binary=true;case 79:case 111:return parseInt(it.slice(2),binary?2:8)}}return+it}if($.FW&&!(Number("0o1")&&Number("0b1"))){Number=function Number(it){return this instanceof Number?new Base(toNumber(it)):toNumber(it)};$.each.call($.DESC?$.getNames(Base):("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,"+"EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,"+"MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger").split(","),function(key){if($.has(Base,key)&&!$.has(Number,key)){$.setDesc(Number,key,$.getDesc(Base,key))}});Number.prototype=proto;proto.constructor=Number;$.hide($.g,NUMBER,Number)}},{"./$":16}],41:[function(require,module,exports){var $=require("./$"),$def=require("./$.def"),abs=Math.abs,floor=Math.floor,_isFinite=$.g.isFinite,MAX_SAFE_INTEGER=9007199254740991;function isInteger(it){return!$.isObject(it)&&_isFinite(it)&&floor(it)===it}$def($def.S,"Number",{EPSILON:Math.pow(2,-52),isFinite:function isFinite(it){return typeof it=="number"&&_isFinite(it)},isInteger:isInteger,isNaN:function isNaN(number){return number!=number},isSafeInteger:function isSafeInteger(number){return isInteger(number)&&abs(number)<=MAX_SAFE_INTEGER},MAX_SAFE_INTEGER:MAX_SAFE_INTEGER,MIN_SAFE_INTEGER:-MAX_SAFE_INTEGER,parseFloat:parseFloat,parseInt:parseInt})},{"./$":16,"./$.def":11}],42:[function(require,module,exports){var $def=require("./$.def");$def($def.S,"Object",{assign:require("./$.assign")})},{"./$.assign":5,"./$.def":11}],43:[function(require,module,exports){var $def=require("./$.def");$def($def.S,"Object",{is:function is(x,y){return x===y?x!==0||1/x===1/y:x!=x&&y!=y}})},{"./$.def":11}],44:[function(require,module,exports){var $def=require("./$.def");$def($def.S,"Object",{setPrototypeOf:require("./$.set-proto").set})},{"./$.def":11,"./$.set-proto":21}],45:[function(require,module,exports){var $=require("./$"),$def=require("./$.def"),isObject=$.isObject,toObject=$.toObject;function wrapObjectMethod(METHOD,MODE){var fn=($.core.Object||{})[METHOD]||Object[METHOD],f=0,o={};o[METHOD]=MODE==1?function(it){return isObject(it)?fn(it):it}:MODE==2?function(it){return isObject(it)?fn(it):true}:MODE==3?function(it){return isObject(it)?fn(it):false}:MODE==4?function getOwnPropertyDescriptor(it,key){return fn(toObject(it),key)}:MODE==5?function getPrototypeOf(it){return fn(Object($.assertDefined(it)))}:function(it){return fn(toObject(it))};try{fn("z")}catch(e){f=1}$def($def.S+$def.F*f,"Object",o)}wrapObjectMethod("freeze",1);wrapObjectMethod("seal",1);wrapObjectMethod("preventExtensions",1);wrapObjectMethod("isFrozen",2);wrapObjectMethod("isSealed",2);wrapObjectMethod("isExtensible",3);wrapObjectMethod("getOwnPropertyDescriptor",4);wrapObjectMethod("getPrototypeOf",5);wrapObjectMethod("keys");wrapObjectMethod("getOwnPropertyNames")},{"./$":16,"./$.def":11}],46:[function(require,module,exports){"use strict";var $=require("./$"),cof=require("./$.cof"),tmp={};tmp[require("./$.wks")("toStringTag")]="z";if($.FW&&cof(tmp)!="z")$.hide(Object.prototype,"toString",function toString(){return"[object "+cof.classof(this)+"]"})},{"./$":16,"./$.cof":6,"./$.wks":27}],47:[function(require,module,exports){"use strict";var $=require("./$"),ctx=require("./$.ctx"),cof=require("./$.cof"),$def=require("./$.def"),assert=require("./$.assert"),$iter=require("./$.iter"),SPECIES=require("./$.wks")("species"),RECORD=require("./$.uid").safe("record"),forOf=$iter.forOf,PROMISE="Promise",global=$.g,process=global.process,asap=process&&process.nextTick||require("./$.task").set,P=global[PROMISE],Base=P,isFunction=$.isFunction,isObject=$.isObject,assertFunction=assert.fn,assertObject=assert.obj,test;function getConstructor(C){var S=assertObject(C)[SPECIES];return S!=undefined?S:C}function isThenable(it){var then;if(isObject(it))then=it.then;return isFunction(then)?then:false}function isUnhandled(promise){var record=promise[RECORD],chain=record.c,i=0,react;if(record.h)return false;while(chain.length>i){react=chain[i++];if(react.fail||!isUnhandled(react.P))return false}return true}function notify(record,isReject){var chain=record.c;if(isReject||chain.length)asap(function(){var promise=record.p,value=record.v,ok=record.s==1,i=0;if(isReject&&isUnhandled(promise)){setTimeout(function(){if(isUnhandled(promise)){if(cof(process)=="process"){process.emit("unhandledRejection",value,promise)}else if(global.console&&isFunction(console.error)){console.error("Unhandled promise rejection",value)}}},1e3)}else while(chain.length>i)!function(react){var cb=ok?react.ok:react.fail,ret,then;try{if(cb){if(!ok)record.h=true;ret=cb===true?value:cb(value);if(ret===react.P){react.rej(TypeError(PROMISE+"-chain cycle"))}else if(then=isThenable(ret)){then.call(ret,react.res,react.rej)}else react.res(ret)}else react.rej(value)}catch(err){react.rej(err)}}(chain[i++]);chain.length=0})}function $reject(value){var record=this;if(record.d)return;record.d=true;record=record.r||record;record.v=value;record.s=2;notify(record,true)}function $resolve(value){var record=this,then,wrapper;if(record.d)return;record.d=true;record=record.r||record;try{if(then=isThenable(value)){wrapper={r:record,d:false};then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1))}else{record.v=value;record.s=1;notify(record)}}catch(err){$reject.call(wrapper||{r:record,d:false},err)}}if(!(isFunction(P)&&isFunction(P.resolve)&&P.resolve(test=new P(function(){}))==test)){P=function Promise(executor){assertFunction(executor);var record={p:assert.inst(this,P,PROMISE),c:[],s:0,d:false,v:undefined,h:false};$.hide(this,RECORD,record);try{executor(ctx($resolve,record,1),ctx($reject,record,1))}catch(err){$reject.call(record,err)}};$.mix(P.prototype,{then:function then(onFulfilled,onRejected){var S=assertObject(assertObject(this).constructor)[SPECIES];var react={ok:isFunction(onFulfilled)?onFulfilled:true,fail:isFunction(onRejected)?onRejected:false};var promise=react.P=new(S!=undefined?S:P)(function(res,rej){react.res=assertFunction(res);react.rej=assertFunction(rej)});var record=this[RECORD];record.c.push(react);record.s&&notify(record);return promise},"catch":function(onRejected){return this.then(undefined,onRejected)}})}$def($def.G+$def.W+$def.F*(P!=Base),{Promise:P});cof.set(P,PROMISE);require("./$.species")(P);$def($def.S,PROMISE,{reject:function reject(r){return new(getConstructor(this))(function(res,rej){rej(r)})},resolve:function resolve(x){return isObject(x)&&RECORD in x&&$.getProto(x)===this.prototype?x:new(getConstructor(this))(function(res){res(x)})}});$def($def.S+$def.F*!require("./$.iter-detect")(function(iter){P.all(iter)["catch"](function(){})}),PROMISE,{all:function all(iterable){var C=getConstructor(this),values=[];return new C(function(res,rej){forOf(iterable,false,values.push,values);var remaining=values.length,results=Array(remaining);if(remaining)$.each.call(values,function(promise,index){C.resolve(promise).then(function(value){results[index]=value;--remaining||res(results)},rej)});else res(results)})},race:function race(iterable){var C=getConstructor(this);return new C(function(res,rej){forOf(iterable,false,function(promise){C.resolve(promise).then(res,rej)})})}})},{"./$":16,"./$.assert":4,"./$.cof":6,"./$.ctx":10,"./$.def":11,"./$.iter":15,"./$.iter-detect":14,"./$.species":22,"./$.task":24,"./$.uid":25,"./$.wks":27}],48:[function(require,module,exports){var $=require("./$"),$def=require("./$.def"),setProto=require("./$.set-proto"),$iter=require("./$.iter"),ITER=require("./$.uid").safe("iter"),step=$iter.step,assert=require("./$.assert"),isObject=$.isObject,getDesc=$.getDesc,setDesc=$.setDesc,getProto=$.getProto,apply=Function.apply,assertObject=assert.obj,_isExtensible=Object.isExtensible||$.it;function Enumerate(iterated){var keys=[],key;for(key in iterated)keys.push(key);$.set(this,ITER,{o:iterated,a:keys,i:0})}$iter.create(Enumerate,"Object",function(){var iter=this[ITER],keys=iter.a,key;do{if(iter.i>=keys.length)return step(1)}while(!((key=keys[iter.i++])in iter.o));return step(0,key)});function wrap(fn){return function(it){assertObject(it);try{fn.apply(undefined,arguments);return true}catch(e){return false}}}function get(target,propertyKey){var receiver=arguments.length<3?target:arguments[2],desc=getDesc(assertObject(target),propertyKey),proto;if(desc)return $.has(desc,"value")?desc.value:desc.get===undefined?undefined:desc.get.call(receiver);return isObject(proto=getProto(target))?get(proto,propertyKey,receiver):undefined}function set(target,propertyKey,V){var receiver=arguments.length<4?target:arguments[3],ownDesc=getDesc(assertObject(target),propertyKey),existingDescriptor,proto;if(!ownDesc){if(isObject(proto=getProto(target))){return set(proto,propertyKey,V,receiver)}ownDesc=$.desc(0)}if($.has(ownDesc,"value")){if(ownDesc.writable===false||!isObject(receiver))return false;existingDescriptor=getDesc(receiver,propertyKey)||$.desc(0);existingDescriptor.value=V;setDesc(receiver,propertyKey,existingDescriptor);return true}return ownDesc.set===undefined?false:(ownDesc.set.call(receiver,V),true)}var reflect={apply:require("./$.ctx")(Function.call,apply,3),construct:function construct(target,argumentsList){var proto=assert.fn(arguments.length<3?target:arguments[2]).prototype,instance=$.create(isObject(proto)?proto:Object.prototype),result=apply.call(target,instance,argumentsList);return isObject(result)?result:instance},defineProperty:wrap(setDesc),deleteProperty:function deleteProperty(target,propertyKey){var desc=getDesc(assertObject(target),propertyKey);return desc&&!desc.configurable?false:delete target[propertyKey]},enumerate:function enumerate(target){return new Enumerate(assertObject(target))},get:get,getOwnPropertyDescriptor:function getOwnPropertyDescriptor(target,propertyKey){return getDesc(assertObject(target),propertyKey)},getPrototypeOf:function getPrototypeOf(target){return getProto(assertObject(target))},has:function has(target,propertyKey){return propertyKey in target},isExtensible:function isExtensible(target){return!!_isExtensible(assertObject(target))},ownKeys:require("./$.own-keys"),preventExtensions:wrap(Object.preventExtensions||$.it),set:set};if(setProto)reflect.setPrototypeOf=function setPrototypeOf(target,proto){setProto.check(target,proto);try{setProto.set(target,proto);return true}catch(e){return false}};$def($def.G,{Reflect:{}});$def($def.S,"Reflect",reflect)},{"./$":16,"./$.assert":4,"./$.ctx":10,"./$.def":11,"./$.iter":15,"./$.own-keys":18,"./$.set-proto":21,"./$.uid":25}],49:[function(require,module,exports){var $=require("./$"),cof=require("./$.cof"),RegExp=$.g.RegExp,Base=RegExp,proto=RegExp.prototype;if($.FW&&$.DESC){if(!function(){try{return RegExp(/a/g,"i")=="/a/i"}catch(e){}}()){RegExp=function RegExp(pattern,flags){return new Base(cof(pattern)=="RegExp"&&flags!==undefined?pattern.source:pattern,flags)};$.each.call($.getNames(Base),function(key){key in RegExp||$.setDesc(RegExp,key,{configurable:true,get:function(){return Base[key]},set:function(it){Base[key]=it}})});proto.constructor=RegExp;RegExp.prototype=proto;$.hide($.g,"RegExp",RegExp)}if(/./g.flags!="g")$.setDesc(proto,"flags",{configurable:true,get:require("./$.replacer")(/^.*\/(\w*)$/,"$1")})}require("./$.species")(RegExp)},{"./$":16,"./$.cof":6,"./$.replacer":20,"./$.species":22}],50:[function(require,module,exports){"use strict";var strong=require("./$.collection-strong");require("./$.collection")("Set",{add:function add(value){return strong.def(this,value=value===0?0:value,value)}},strong)},{"./$.collection":9,"./$.collection-strong":7}],51:[function(require,module,exports){var $def=require("./$.def");$def($def.P,"String",{codePointAt:require("./$.string-at")(false)})},{"./$.def":11,"./$.string-at":23}],52:[function(require,module,exports){"use strict";var $=require("./$"),cof=require("./$.cof"),$def=require("./$.def"),toLength=$.toLength;$def($def.P,"String",{endsWith:function endsWith(searchString){if(cof(searchString)=="RegExp")throw TypeError();var that=String($.assertDefined(this)),endPosition=arguments[1],len=toLength(that.length),end=endPosition===undefined?len:Math.min(toLength(endPosition),len);searchString+="";return that.slice(end-searchString.length,end)===searchString}})},{"./$":16,"./$.cof":6,"./$.def":11}],53:[function(require,module,exports){var $def=require("./$.def"),toIndex=require("./$").toIndex,fromCharCode=String.fromCharCode;$def($def.S,"String",{fromCodePoint:function fromCodePoint(x){var res=[],len=arguments.length,i=0,code;while(len>i){code=+arguments[i++];if(toIndex(code,1114111)!==code)throw RangeError(code+" is not a valid code point");res.push(code<65536?fromCharCode(code):fromCharCode(((code-=65536)>>10)+55296,code%1024+56320))}return res.join("")}})},{"./$":16,"./$.def":11}],54:[function(require,module,exports){"use strict";var $=require("./$"),cof=require("./$.cof"),$def=require("./$.def");$def($def.P,"String",{includes:function includes(searchString){if(cof(searchString)=="RegExp")throw TypeError();return!!~String($.assertDefined(this)).indexOf(searchString,arguments[1])}})},{"./$":16,"./$.cof":6,"./$.def":11}],55:[function(require,module,exports){var set=require("./$").set,at=require("./$.string-at")(true),ITER=require("./$.uid").safe("iter"),$iter=require("./$.iter"),step=$iter.step;$iter.std(String,"String",function(iterated){set(this,ITER,{o:String(iterated),i:0})},function(){var iter=this[ITER],O=iter.o,index=iter.i,point;if(index>=O.length)return step(1);point=at.call(O,index);iter.i+=point.length;return step(0,point)})},{"./$":16,"./$.iter":15,"./$.string-at":23,"./$.uid":25}],56:[function(require,module,exports){var $=require("./$"),$def=require("./$.def");$def($def.S,"String",{raw:function raw(callSite){var tpl=$.toObject(callSite.raw),len=$.toLength(tpl.length),sln=arguments.length,res=[],i=0;while(len>i){res.push(String(tpl[i++]));if(i<sln)res.push(String(arguments[i]))}return res.join("")}})},{"./$":16,"./$.def":11}],57:[function(require,module,exports){"use strict";var $=require("./$"),$def=require("./$.def");$def($def.P,"String",{repeat:function repeat(count){var str=String($.assertDefined(this)),res="",n=$.toInteger(count);if(n<0||n==Infinity)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(str+=str))if(n&1)res+=str;return res}})},{"./$":16,"./$.def":11}],58:[function(require,module,exports){"use strict";var $=require("./$"),cof=require("./$.cof"),$def=require("./$.def");$def($def.P,"String",{startsWith:function startsWith(searchString){if(cof(searchString)=="RegExp")throw TypeError();var that=String($.assertDefined(this)),index=$.toLength(Math.min(arguments[1],that.length));searchString+="";return that.slice(index,index+searchString.length)===searchString}})},{"./$":16,"./$.cof":6,"./$.def":11}],59:[function(require,module,exports){"use strict";var $=require("./$"),setTag=require("./$.cof").set,uid=require("./$.uid"),$def=require("./$.def"),keyOf=require("./$.keyof"),has=$.has,hide=$.hide,getNames=$.getNames,toObject=$.toObject,Symbol=$.g.Symbol,Base=Symbol,setter=false,TAG=uid.safe("tag"),SymbolRegistry={},AllSymbols={};function wrap(tag){var sym=AllSymbols[tag]=$.set($.create(Symbol.prototype),TAG,tag);$.DESC&&setter&&$.setDesc(Object.prototype,tag,{configurable:true,set:function(value){hide(this,tag,value)}});return sym}if(!$.isFunction(Symbol)){Symbol=function Symbol(description){if(this instanceof Symbol)throw TypeError("Symbol is not a constructor");return wrap(uid(description))};hide(Symbol.prototype,"toString",function(){return this[TAG]})}$def($def.G+$def.W,{Symbol:Symbol});var symbolStatics={"for":function(key){return has(SymbolRegistry,key+="")?SymbolRegistry[key]:SymbolRegistry[key]=Symbol(key)},keyFor:function keyFor(key){return keyOf(SymbolRegistry,key)},pure:uid.safe,set:$.set,useSetter:function(){setter=true},useSimple:function(){setter=false}};$.each.call(("hasInstance,isConcatSpreadable,iterator,match,replace,search,"+"species,split,toPrimitive,toStringTag,unscopables").split(","),function(it){var sym=require("./$.wks")(it);symbolStatics[it]=Symbol===Base?sym:wrap(sym)});setter=true;$def($def.S,"Symbol",symbolStatics);$def($def.S+$def.F*(Symbol!=Base),"Object",{getOwnPropertyNames:function getOwnPropertyNames(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])||result.push(key);return result},getOwnPropertySymbols:function getOwnPropertySymbols(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])&&result.push(AllSymbols[key]);return result}});setTag(Symbol,"Symbol");setTag(Math,"Math",true);setTag($.g.JSON,"JSON",true)},{"./$":16,"./$.cof":6,"./$.def":11,"./$.keyof":17,"./$.uid":25,"./$.wks":27}],60:[function(require,module,exports){"use strict";var $=require("./$"),weak=require("./$.collection-weak"),leakStore=weak.leakStore,ID=weak.ID,WEAK=weak.WEAK,has=$.has,isObject=$.isObject,isFrozen=Object.isFrozen||$.core.Object.isFrozen,tmp={};var WeakMap=require("./$.collection")("WeakMap",{get:function get(key){if(isObject(key)){if(isFrozen(key))return leakStore(this).get(key);if(has(key,WEAK))return key[WEAK][this[ID]]}},set:function set(key,value){return weak.def(this,key,value)}},weak,true,true);if($.FW&&(new WeakMap).set((Object.freeze||Object)(tmp),7).get(tmp)!=7){$.each.call(["delete","has","get","set"],function(key){var method=WeakMap.prototype[key];WeakMap.prototype[key]=function(a,b){if(isObject(a)&&isFrozen(a)){var result=leakStore(this)[key](a,b);return key=="set"?this:result}return method.call(this,a,b)}})}},{"./$":16,"./$.collection":9,"./$.collection-weak":8}],61:[function(require,module,exports){"use strict";var weak=require("./$.collection-weak");require("./$.collection")("WeakSet",{add:function add(value){return weak.def(this,value,true)}},weak,false,true)},{"./$.collection":9,"./$.collection-weak":8}],62:[function(require,module,exports){var $def=require("./$.def");$def($def.P,"Array",{includes:require("./$.array-includes")(true)});require("./$.unscope")("includes")},{"./$.array-includes":2,"./$.def":11,"./$.unscope":26}],63:[function(require,module,exports){var $=require("./$"),$def=require("./$.def"),ownKeys=require("./$.own-keys");$def($def.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(object){var O=$.toObject(object),result={};$.each.call(ownKeys(O),function(key){$.setDesc(result,key,$.desc(0,$.getDesc(O,key)))});return result}})},{"./$":16,"./$.def":11,"./$.own-keys":18}],64:[function(require,module,exports){var $=require("./$"),$def=require("./$.def");function createObjectToArray(isEntries){return function(object){var O=$.toObject(object),keys=$.getKeys(object),length=keys.length,i=0,result=Array(length),key;if(isEntries)while(length>i)result[i]=[key=keys[i++],O[key]];else while(length>i)result[i]=O[keys[i++]];return result}}$def($def.S,"Object",{values:createObjectToArray(false),entries:createObjectToArray(true)})},{"./$":16,"./$.def":11}],65:[function(require,module,exports){var $def=require("./$.def");$def($def.S,"RegExp",{escape:require("./$.replacer")(/([\\\-[\]{}()*+?.,^$|])/g,"\\$1",true)})},{"./$.def":11,"./$.replacer":20}],66:[function(require,module,exports){var $def=require("./$.def"),forOf=require("./$.iter").forOf;$def($def.P,"Set",{toJSON:function(){var arr=[];forOf(this,false,arr.push,arr);return arr}})},{"./$.def":11,"./$.iter":15}],67:[function(require,module,exports){var $def=require("./$.def");$def($def.P,"String",{at:require("./$.string-at")(true)})},{"./$.def":11,"./$.string-at":23}],68:[function(require,module,exports){var $=require("./$"),$def=require("./$.def"),$Array=$.core.Array||Array,statics={};function setStatics(keys,length){$.each.call(keys.split(","),function(key){if(length==undefined&&key in $Array)statics[key]=$Array[key];else if(key in[])statics[key]=require("./$.ctx")(Function.call,[][key],length)})}setStatics("pop,reverse,shift,keys,values,entries",1);setStatics("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3);setStatics("join,slice,concat,push,splice,unshift,sort,lastIndexOf,"+"reduce,reduceRight,copyWithin,fill,turn");$def($def.S,"Array",statics)},{"./$":16,"./$.ctx":10,"./$.def":11}],69:[function(require,module,exports){require("./es6.array.iterator");var $=require("./$"),Iterators=require("./$.iter").Iterators,ITERATOR=require("./$.wks")("iterator"),NodeList=$.g.NodeList;if($.FW&&NodeList&&!(ITERATOR in NodeList.prototype)){$.hide(NodeList.prototype,ITERATOR,Iterators.Array)}Iterators.NodeList=Iterators.Array},{"./$":16,"./$.iter":15,"./$.wks":27,"./es6.array.iterator":34}],70:[function(require,module,exports){var $def=require("./$.def"),$task=require("./$.task");$def($def.G+$def.B,{setImmediate:$task.set,clearImmediate:$task.clear})},{"./$.def":11,"./$.task":24}],71:[function(require,module,exports){var $=require("./$"),$def=require("./$.def"),invoke=require("./$.invoke"),partial=require("./$.partial"),MSIE=!!$.g.navigator&&/MSIE .\./.test(navigator.userAgent);function wrap(set){return MSIE?function(fn,time){return set(invoke(partial,[].slice.call(arguments,2),$.isFunction(fn)?fn:Function(fn)),time)}:set}$def($def.G+$def.B+$def.F*MSIE,{setTimeout:wrap($.g.setTimeout),setInterval:wrap($.g.setInterval)})},{"./$":16,"./$.def":11,"./$.invoke":13,"./$.partial":19}],72:[function(require,module,exports){require("./modules/es5");require("./modules/es6.symbol");require("./modules/es6.object.assign");require("./modules/es6.object.is");require("./modules/es6.object.set-prototype-of");require("./modules/es6.object.to-string");require("./modules/es6.object.statics-accept-primitives");require("./modules/es6.function.name");require("./modules/es6.number.constructor");require("./modules/es6.number.statics");require("./modules/es6.math");require("./modules/es6.string.from-code-point");require("./modules/es6.string.raw");require("./modules/es6.string.iterator");require("./modules/es6.string.code-point-at");require("./modules/es6.string.ends-with");require("./modules/es6.string.includes");require("./modules/es6.string.repeat");require("./modules/es6.string.starts-with");require("./modules/es6.array.from");require("./modules/es6.array.of");require("./modules/es6.array.iterator");require("./modules/es6.array.species");require("./modules/es6.array.copy-within");require("./modules/es6.array.fill");require("./modules/es6.array.find");require("./modules/es6.array.find-index");require("./modules/es6.regexp");require("./modules/es6.promise");require("./modules/es6.map");require("./modules/es6.set");require("./modules/es6.weak-map");require("./modules/es6.weak-set");require("./modules/es6.reflect");require("./modules/es7.array.includes");require("./modules/es7.string.at");require("./modules/es7.regexp.escape");require("./modules/es7.object.get-own-property-descriptors");require("./modules/es7.object.to-array");require("./modules/es7.set.to-json");require("./modules/js.array.statics");require("./modules/web.timers");require("./modules/web.immediate");require("./modules/web.dom.iterable");module.exports=require("./modules/$").core},{"./modules/$":16,"./modules/es5":28,"./modules/es6.array.copy-within":29,"./modules/es6.array.fill":30,"./modules/es6.array.find":32,"./modules/es6.array.find-index":31,"./modules/es6.array.from":33,"./modules/es6.array.iterator":34,"./modules/es6.array.of":35,"./modules/es6.array.species":36,"./modules/es6.function.name":37,"./modules/es6.map":38,"./modules/es6.math":39,"./modules/es6.number.constructor":40,"./modules/es6.number.statics":41,"./modules/es6.object.assign":42,"./modules/es6.object.is":43,"./modules/es6.object.set-prototype-of":44,"./modules/es6.object.statics-accept-primitives":45,"./modules/es6.object.to-string":46,"./modules/es6.promise":47,"./modules/es6.reflect":48,"./modules/es6.regexp":49,"./modules/es6.set":50,"./modules/es6.string.code-point-at":51,"./modules/es6.string.ends-with":52,"./modules/es6.string.from-code-point":53,"./modules/es6.string.includes":54,"./modules/es6.string.iterator":55,"./modules/es6.string.raw":56,"./modules/es6.string.repeat":57,"./modules/es6.string.starts-with":58,"./modules/es6.symbol":59,"./modules/es6.weak-map":60,"./modules/es6.weak-set":61,"./modules/es7.array.includes":62,"./modules/es7.object.get-own-property-descriptors":63,"./modules/es7.object.to-array":64,"./modules/es7.regexp.escape":65,"./modules/es7.set.to-json":66,"./modules/es7.string.at":67,"./modules/js.array.statics":68,"./modules/web.dom.iterable":69,"./modules/web.immediate":70,"./modules/web.timers":71}],73:[function(require,module,exports){(function(global){!function(global){"use strict";var hasOwn=Object.prototype.hasOwnProperty;var undefined;var iteratorSymbol=typeof Symbol==="function"&&Symbol.iterator||"@@iterator";var inModule=typeof module==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports=runtime}return}runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){var generator=Object.create((outerFn||Generator).prototype);generator._invoke=makeInvokeMethod(innerFn,self||null,new Context(tryLocsList||[]));return generator}runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunction.displayName="GeneratorFunction";runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false};runtime.mark=function(genFun){genFun.__proto__=GeneratorFunctionPrototype;genFun.prototype=Object.create(Gp);return genFun};runtime.async=function(innerFn,outerFn,self,tryLocsList){return new Promise(function(resolve,reject){var generator=wrap(innerFn,outerFn,self,tryLocsList);var callNext=step.bind(generator,"next");var callThrow=step.bind(generator,"throw");function step(method,arg){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);return}var info=record.arg;if(info.done){resolve(info.value)}else{Promise.resolve(info.value).then(callNext,callThrow)}}callNext()})};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running")}if(state===GenStateCompleted){return doneResult()}while(true){var delegate=context.delegate;if(delegate){if(method==="return"||method==="throw"&&delegate.iterator.throw===undefined){context.delegate=null;var returnMethod=delegate.iterator.return;if(returnMethod){var record=tryCatch(returnMethod,delegate.iterator,arg);if(record.type==="throw"){method="throw";arg=record.arg;continue}}if(method==="return"){continue}}var record=tryCatch(delegate.iterator[method],delegate.iterator,arg);if(record.type==="throw"){context.delegate=null;method="throw";arg=record.arg;continue}method="next";arg=undefined;var info=record.arg;if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc}else{state=GenStateSuspendedYield;return info}context.delegate=null}if(method==="next"){if(state===GenStateSuspendedYield){context.sent=arg}else{delete context.sent}}else if(method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw arg}if(context.dispatchException(arg)){method="next";arg=undefined}}else if(method==="return"){context.abrupt("return",arg)}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;var info={value:record.arg,done:context.done};if(record.arg===ContinueSentinel){if(context.delegate&&method==="next"){arg=undefined}}else{return info}}else if(record.type==="throw"){state=GenStateCompleted;method="throw";arg=record.arg}}}}function defineGeneratorMethod(method){Gp[method]=function(arg){return this._invoke(method,arg)}}defineGeneratorMethod("next");defineGeneratorMethod("throw");defineGeneratorMethod("return");Gp[iteratorSymbol]=function(){return this};Gp.toString=function(){return"[object Generator]"};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1]}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3]}this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset()}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key)}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next}}next.done=true;return next}};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable)}if(typeof iterable.next==="function"){return iterable}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next}}next.value=undefined;next.done=true;return next};return next.next=next}}return{next:doneResult}}runtime.values=values;function doneResult(){return{value:undefined,done:true}}Context.prototype={constructor:Context,reset:function(){this.prev=0;

this.next=0;this.sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(resetTryEntry);for(var tempIndex=0,tempName;hasOwn.call(this,tempName="t"+tempIndex)||tempIndex<20;++tempIndex){this[tempName]=null}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg}return this.rval},dispatchException:function(exception){if(this.done){throw exception}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;return!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end")}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<finallyEntry.finallyLoc){finallyEntry=null}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.next=finallyEntry.finallyLoc}else{this.complete(record)}return ContinueSentinel},complete:function(record,afterLoc){if(record.type==="throw"){throw record.arg}if(record.type==="break"||record.type==="continue"){this.next=record.arg}else if(record.type==="return"){this.rval=record.arg;this.next="end"}else if(record.type==="normal"&&afterLoc){this.next=afterLoc}return ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){return this.complete(entry.completion,entry.afterLoc)}}},"catch":function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};return ContinueSentinel}}}(typeof global==="object"?global:typeof window==="object"?window:typeof self==="object"?self:this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1]);
define("lib/babel-polyfill/browser-polyfill", function(){});


define('lib-build/less!storymaps/tpl/core/MainView',[],function(){});

define('lib-build/css!storymaps/tpl/view/media/Common',[],function(){});
define('storymaps-react/tpl/core/Controller',['module', 'exports', 'dojo/_base/lang', 'dojo/topic', 'lib-build/i18n!./../../../resources/tpl/builder/nls/app', 'storymaps-react/tpl/view/media/Media'], function (module, exports, _lang, _topic, _app, _Media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _lang2 = _interopRequireDefault(_lang);

  var _topic2 = _interopRequireDefault(_topic);

  var _app2 = _interopRequireDefault(_app);

  var _Media2 = _interopRequireDefault(_Media);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var storyMap = 'Story Map';

  var DEFAULT_HEADER_SETTINGS = {
    logo: {
      enabled: true,
      url: 'resources/tpl/viewer/icons/esri-logo.png',
      link: 'https://www.esri.com'
    },
    link: {
      url: 'https://storymaps.arcgis.com',
      title: _app2.default.builder.header.defaultTagline.replace(/\${STORY_MAP}/g, storyMap)
    },
    social: {
      enabled: true
    }
  };

  var Controller = function () {
    function Controller() {
      _classCallCheck(this, Controller);
    }

    _createClass(Controller, null, [{
      key: 'getStoryTitle',
      value: function getStoryTitle() {
        var coverSection = this._sections && this._sections[0];

        if (coverSection) {
          return coverSection.getPreviewText();
        }

        return '';
      }
    }, {
      key: 'getStoryURL',
      value: function getStoryURL() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var url = params.url || document.location.href;

        // If sharing in builder mode the link will always open the viewer
        // TODO clean, should get all url parameters, filter edit and rebuild URL
        url = url.replace(/\?edit(=.*)*&/, '?');
        url = url.replace(/\&edit(=.*)*/, '');
        url = url.replace(/\?edit/, '');

        // Filter out locale URL
        url = url.replace(/\?locale(=[a-zA-Z\-]+)+&/, '?');
        url = url.replace(/\&locale(=[a-zA-Z\-]+)+/, '');

        return params.urlEncoding ? encodeURIComponent(url) : url;
      }
    }, {
      key: 'isStoryBlank',
      value: function isStoryBlank() {
        if (!app.data.appItem || !app.data.appItem.data || !app.data.appItem.data.values || !app.data.appItem.data.values.config || !app.data.appItem.data.values.settings || !app.data.appItem.data.values.sections || !app.data.appItem.data.values.template) {
          return true;
        }

        return false;
      }
    }, {
      key: 'renderHeader',
      value: function renderHeader() {
        var appItem = app.data.appItem,
            headerSettings = appItem ? appItem.data.values.settings.header : null;

        if (!headerSettings || !headerSettings.logo || !headerSettings.link) {
          headerSettings = Controller.DEFAULT_HEADER_SETTINGS;
        }

        app.ui.header.render({
          logo: headerSettings.logo,
          link: headerSettings.link,
          social: headerSettings.social,
          bookmarks: this.getBookmarks(),
          title: this.getStoryTitle()
        });
      }
    }, {
      key: 'renderStory',
      value: function renderStory(config, sections) {
        this._sections = [];
        this._currentSection = null;
        this._$currentSection = null;
        this._currentSectionIndex = null;
        this._container = $('.sections');

        var errorInPreviousSection = false,
            sectionsLength = sections.length;

        app.data.errorWebGL = false;

        // Merge consecutive sequence sections
        // This always run in viewer and builder before the story is parsed
        // It's a V1 legacy, it was too easy to create that kind of situation
        // As this is an extra loop, could consider merging that with next loop
        // Or performing this only if the story has not been edited since V1 (see version tracked in item data)
        var prevSectionType = '';
        for (var i = sections.length - 1; i >= 0; i--) {
          var section = sections[i];

          if (section.type == 'sequence' && prevSectionType == 'sequence') {
            section.foreground.blocks = section.foreground.blocks.concat(sections[i + 1].foreground.blocks);
            sections.splice(i + 1, 1);
          }

          prevSectionType = section.type;
        }

        //
        // Add the story to the dom
        // TODO: need to check if the story has at least cover and another section
        // TODO: benchmark lazy load creation with fake scrollbar
        //

        $.each(sections, function (index, section) {
          var error = false,
              newSection = app.ui.SectionFactory.createInstance(section);

          if (newSection) {
            // If it's an alternate section but there hasn't been any error
            //  in previous section, we can ignore
            if (section.alternate === true && !errorInPreviousSection) {
              return;
            }

            try {
              this._container.append(newSection.render(index));
            } catch (e) {
              console.error(e);

              error = true;
              errorInPreviousSection = true;

              // A WEBGL error can either reject the whole section
              //  like if the author has defined an alternate section
              //  in that case the section is not rendered at all
              // Or the section might be displayed and the media will show an error
              //  it's the section that decide what it wants
              // RUNTIME-NO-WEBGL is throwned only if the whole section is ignored
              if (e == 'RUNTIME-NO-WEBGL') {
                app.data.errorWebGL = true;
              }
            }

            if (!error) {
              this._sections.push(newSection);
            }
          }

          // If there has been and error with WebGL
          // If rendering the section before credits
          // Or the last section if no credits
          if (app.data.errorWebGL) {
            if (app.isInBuilder && (index == sectionsLength - 3 && sections[index + 1].type == 'credits-placeholder' || index == sectionsLength - 2 && sections[index + 1].type == 'credits-placeholder') || !app.isInBuilder && (index == sectionsLength - 2 && sections[index + 1].type == 'credits' || index == sectionsLength - 1 && section.type != 'credits')) {
              var errorSection = this.getErrorSection({
                type: app.data.errorWebGL ? 'WEBGL' : ''
              });

              if (errorSection) {
                this._sections.push(errorSection);
                this._container.append(errorSection.render(index));
              }
            }
          }
        }.bind(this));

        app.data.sections = this._sections;
        app.data.sectionsJSON = sections;

        app.data.title = app.Controller.getStoryTitle();
        document.title = app.data.title;

        //
        // Now that everything is in the DOM, call postCreate on every section
        //  which will call similar method on every view and media
        // Primary goal is for everyone to have a reference to it's DOM container
        //

        $('.section').each(function (i, node) {
          this._sections[i].postCreate($(node));
        }.bind(this));
      }
    }, {
      key: 'getBookmarks',
      value: function getBookmarks() {
        var bookmarks = [];

        $.each(this._sections, function (i, section) {
          if (section.getBookmark) {
            var bookmark = section.getBookmark();

            if (bookmark && bookmark.status == 'visible') {
              bookmarks.push({
                index: i,
                title: bookmark.bookmark
              });
            }
          }
        });

        return bookmarks;
      }
    }, {
      key: 'preloadSectionByIndex',
      value: function preloadSectionByIndex(index) {
        this.preloadSection(this._sections[index], {});
      }
    }, {
      key: 'preloadSection',
      value: function preloadSection(section, params) {
        if (!section) {
          return;
        }

        window.requestAnimationFrame(function () {
          section.onScroll(_lang2.default.mixin(params, {
            status: 'preload'
          }));
        });
      }
    }, {
      key: 'toggleScrollEvents',
      value: function toggleScrollEvents(enable) {
        this._disableScrollEvents = !enable;
      }
    }, {
      key: 'onScroll',
      value: function onScroll(params) {
        var newSection = this._sections[params.currentSectionIndex];

        // tried different things to remove jank
        //  - delay action on prev section
        //  - have bg be taller calc(100vh + 10px)
        // ...

        if (!newSection || this._disableScrollEvents) {
          return;
        }

        var sectionTop = app.display.sections[params.currentSectionIndex].top;

        newSection.onScroll(_lang2.default.mixin(params, {
          status: 'current',
          viewportTop: params.scrollTop - sectionTop,
          viewportBottom: params.scrollTop + app.display.sectionHeight - sectionTop
        }));

        // If changing section
        if (params.currentSectionIndex != this._currentSectionIndex) {
          console.log('Scroll to section ', params.currentSectionIndex);

          // Activate new section
          params.$currentSection.addClass('active');

          // Dev event
          _topic2.default.publish('story-navigated-section', {
            index: params.currentSectionIndex,
            data: this._currentSection
          });

          //
          // Preload next section
          //

          var nextSection = this._sections[params.currentSectionIndex + 1];

          if (nextSection) {
            if (params.currentSectionIndex != this._currentSectionIndex) {
              this.preloadSection(nextSection, params);
            }
          }

          //
          // Unload previous section
          //

          var currentSection = this._currentSection;
          var currentSectionEl = this._$currentSection;

          if (currentSectionEl) {
            window.requestAnimationFrame(function () {
              currentSectionEl.removeClass('active');
              currentSection.onScroll({ status: 'unload' });
            });
          }
        }

        //
        // Refresh visible sections
        //

        $.each(params.visibleSections, function (i, sectionIndex) {
          var section = this._sections[sectionIndex],
              sectionTop = app.display.sections[sectionIndex].top;

          //console.log('Visible  section ' + sectionIndex);

          // Skip current section that already got one event sent
          if (sectionIndex == params.currentSectionIndex) {
            return;
          }

          section.onScroll(_lang2.default.mixin(params, {
            status: 'visible',
            viewportTop: params.scrollTop - sectionTop,
            viewportBottom: params.scrollTop + app.display.sectionHeight - sectionTop
          }));
        }.bind(this));

        //
        // Save references
        //

        this._$currentSection = params.$currentSection;
        this._currentSectionIndex = params.currentSectionIndex;
        this._currentSection = newSection;
      }
    }, {
      key: 'onResize',
      value: function onResize(params) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var section = _step.value;

            section.resize(params);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'navigateToSection',
      value: function navigateToSection() {
        var _this = this;

        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return new Promise(function (resolve) {
          if (params.index == undefined || params.animate == undefined) {
            return;
          }

          if (params.index > app.display.sections.length - 1) {
            return;
          }

          var HEADER_HEIGHT = 50;

          var sectionType = _this._sections[params.index].type,
              sectionTop = app.display.sections[params.index].top,
              sectionOffset = 1,
              newScrollPos = 0;

          // So that the panel get displayed
          if (sectionType == 'immersive') {
            // TODO should be given by Immersive
            sectionOffset = app.display.windowHeight - 250 + HEADER_HEIGHT;
            if (app.isInBuilder) {
              // Builder view panel
              sectionOffset += 125;
            }
          }

          newScrollPos = Math.floor(sectionTop - HEADER_HEIGHT + sectionOffset);

          if (params.animate) {
            //if (params.disableEvents) {
            _this.toggleScrollEvents(false);
            //}

            $('html,body').animate({
              scrollTop: newScrollPos
            }, {
              duration: params.animateSpeed || 400
            }).promise().then(function () {
              //if (params.disableEvents) {
              this.toggleScrollEvents(true);
              // So that stuff get updated once at destination
              // Just updating the position doesn't work for the last section if it's not tall enough to fill the height
              // That update method should be integrated into the Controller and keep MainView for catching Scroll Events
              // TODO
              app.ui.update({
                forceUpdate: true
              });
              resolve(params.index);
              //}
            }.bind(_this));
          } else {
            document.body.scrollTop = newScrollPos;
            // Firefox
            document.documentElement.scrollTop = newScrollPos;

            resolve(params.index);
          }
        });
      }
    }, {
      key: 'getSectionById',
      value: function getSectionById(sectionId) {
        for (var sectionIndex in this._sections) {
          var section = this._sections[sectionIndex];

          if (section.id == sectionId) {
            return parseInt(sectionIndex, 10);
          }
        }

        return -1;
      }
    }, {
      key: 'getSectionIndexById',
      value: function getSectionIndexById(sectionIndex) {
        return this._sections[sectionIndex].id;
      }
    }, {
      key: 'getErrorSection',
      value: function getErrorSection(params) {
        params = params || {};

        var errorSection = null;

        if (params.type == 'WEBGL') {
          var storyWarningBtn = 'mailto:?to=&subject=Check%20out%20this%20story&body=' + document.location.href;

          errorSection = app.ui.SectionFactory.createInstance({
            type: 'sequence',
            layout: 'sequence-2',
            background: {
              type: 'color',
              color: {
                value: '#FFF'
              }
            },
            foreground: {
              blocks: [{
                type: 'text',
                text: {
                  value: '<div class="block"><table><tr><td style="padding-bottom: 10px;"><img src="resources/tpl/viewer/icons/warning-mobile-smartphone.png" /></td><td style="padding-bottom: 10px; padding-left: 13px;">You\'ve read the mobile version of this story. For the full version, with richer media elements try it out on a desktop computer.</td></tr><tr><td colspan="2" style="padding-top: 10px; border-top: 1px solid white; text-align: center;"><a class="btn btn-warning-email" style="background-color: white; color: rgba(255, 0, 0, 0.7);" href="' + storyWarningBtn + '"><img src="resources/tpl/viewer/icons/warning-mobile-laptop.png" style="margin-right: 5px;"/>Email a link to this story</a></td></tr></table></div>'
                }
              }]
            }
          });
        }

        return errorSection;
      }
    }, {
      key: 'getArcGISContent',
      value: function getArcGISContent() {
        var arcgisContent = [];

        var appData = app.data.appItem && app.data.appItem.data && app.data.appItem.data.values,
            headerLogo = appData && appData.settings && appData.settings.header && appData.settings.header.logo;

        if (headerLogo && headerLogo.enabled && headerLogo.url) {
          var headerArcGISLogo = _Media2.default.getArcGISItemResourceURL(headerLogo.url);
          if (headerArcGISLogo) {
            arcgisContent.push({
              type: 'item-resource',
              mediaType: 'image',
              url: headerArcGISLogo.url,
              file: headerArcGISLogo.file
            });
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._sections[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var section = _step2.value;

            arcgisContent.push.apply(arcgisContent, _toConsumableArray(section.getArcGISContent()));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return arcgisContent;
      }
    }, {
      key: 'DEFAULT_HEADER_SETTINGS',
      get: function get() {
        return DEFAULT_HEADER_SETTINGS;
      }
    }]);

    return Controller;
  }();

  exports.default = Controller;
  module.exports = exports['default'];
});
//# sourceMappingURL=Controller.js.map
;
(function(l,e){"object"===typeof exports?e(exports):"function"===typeof define&&define.amd?define('lib/progress.js/minified/progress.min',["exports"],e):e(l)})(this,function(l){function e(a){this._targetElement="undefined"!=typeof a.length?a:[a];"undefined"===typeof window._progressjsId&&(window._progressjsId=1);"undefined"===typeof window._progressjsIntervals&&(window._progressjsIntervals={});this._options={theme:"blue",overlayMode:!1,considerTransition:!0}}function m(a,c){var d=this;100<=c&&(c=100);a.hasAttribute("data-progressjs")&&
setTimeout(function(){"undefined"!=typeof d._onProgressCallback&&d._onProgressCallback.call(d,a,c);var b=h(a);b.style.width=parseInt(c)+"%";var b=b.querySelector(".progressjs-percent"),g=parseInt(b.innerHTML.replace("%","")),e=parseInt(c),j=function(a,b,c){var d=Math.abs(b-c);3>d?k=30:20>d?k=20:intervanIn=1;0!=b-c&&(a.innerHTML=(f?++b:--b)+"%",setTimeout(function(){j(a,b,c)},k))},f=!0;g>e&&(f=!1);var k=10;j(b,g,e)},50)}function h(a){a=parseInt(a.getAttribute("data-progressjs"));return document.querySelector('.progressjs-container > .progressjs-progress[data-progressjs="'+
a+'"] > .progressjs-inner')}function p(a){for(var c=0,d=this._targetElement.length;c<d;c++){var b=this._targetElement[c];if(b.hasAttribute("data-progressjs")){var g=h(b);(g=parseInt(g.style.width.replace("%","")))&&m.call(this,b,g+(a||1))}}}function q(){var a,c=document.createElement("fakeelement"),d={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in d)if(void 0!==c.style[a])return d[a]}var n=function(a){if("object"===
typeof a)return new e(a);if("string"===typeof a){if(a=document.querySelectorAll(a))return new e(a);throw Error("There is no element with given selector.");}return new e(document.body)};n.version="0.1.0";n.fn=e.prototype={clone:function(){return new e(this)},setOption:function(a,c){this._options[a]=c;return this},setOptions:function(a){var c=this._options,d={},b;for(b in c)d[b]=c[b];for(b in a)d[b]=a[b];this._options=d;return this},start:function(){"undefined"!=typeof this._onBeforeStartCallback&&
this._onBeforeStartCallback.call(this);if(!document.querySelector(".progressjs-container")){var a=document.createElement("div");a.className="progressjs-container";document.body.appendChild(a)}for(var a=0,c=this._targetElement.length;a<c;a++){var d=this._targetElement[a];if(!d.hasAttribute("data-progressjs")){var b=d,g,e,j;"body"===b.tagName.toLowerCase()?(g=b.clientWidth,e=b.clientHeight):(g=b.offsetWidth,e=b.offsetHeight);for(var f=j=0;b&&!isNaN(b.offsetLeft)&&!isNaN(b.offsetTop);)j+=b.offsetLeft,
f+=b.offsetTop,b=b.offsetParent;b=f;d.setAttribute("data-progressjs",window._progressjsId);f=document.createElement("div");f.className="progressjs-progress progressjs-theme-"+this._options.theme;f.style.position="body"===d.tagName.toLowerCase()?"fixed":"absolute";f.setAttribute("data-progressjs",window._progressjsId);var k=document.createElement("div");k.className="progressjs-inner";var h=document.createElement("div");h.className="progressjs-percent";h.innerHTML="1%";k.appendChild(h);this._options.overlayMode&&
"body"===d.tagName.toLowerCase()?(f.style.left=0,f.style.right=0,f.style.top=0,f.style.bottom=0):(f.style.left=j+"px",f.style.top=b+"px",f.style.width=g+"px",this._options.overlayMode&&(f.style.height=e+"px"));f.appendChild(k);document.querySelector(".progressjs-container").appendChild(f);m(d,1);++window._progressjsId}}return this},set:function(a){for(var c=0,d=this._targetElement.length;c<d;c++)m.call(this,this._targetElement[c],a);return this},increase:function(a){p.call(this,a);return this},autoIncrease:function(a,
c){var d=this,b=parseInt(this._targetElement[0].getAttribute("data-progressjs"));"undefined"!=typeof window._progressjsIntervals[b]&&clearInterval(window._progressjsIntervals[b]);window._progressjsIntervals[b]=setInterval(function(){p.call(d,a)},c);return this},end:function(){a:{"undefined"!=typeof this._onBeforeEndCallback&&(!0===this._options.considerTransition?h(this._targetElement[0]).addEventListener(q(),this._onBeforeEndCallback,!1):this._onBeforeEndCallback.call(this));for(var a=parseInt(this._targetElement[0].getAttribute("data-progressjs")),
c=0,d=this._targetElement.length;c<d;c++){var b=this._targetElement[c],e=h(b);if(!e)break a;var l=1;100>parseInt(e.style.width.replace("%",""))&&(m.call(this,b,100),l=500);(function(a,b){setTimeout(function(){a.parentNode.className+=" progressjs-end";setTimeout(function(){a.parentNode.parentNode.removeChild(a.parentNode);b.removeAttribute("data-progressjs")},1E3)},l)})(e,b)}if(window._progressjsIntervals[a])try{clearInterval(window._progressjsIntervals[a]),window._progressjsIntervals[a]=null,delete window._progressjsIntervals[a]}catch(j){}}return this},
onbeforeend:function(a){if("function"===typeof a)this._onBeforeEndCallback=a;else throw Error("Provided callback for onbeforeend was not a function");return this},onbeforestart:function(a){if("function"===typeof a)this._onBeforeStartCallback=a;else throw Error("Provided callback for onbeforestart was not a function");return this},onprogress:function(a){if("function"===typeof a)this._onProgressCallback=a;else throw Error("Provided callback for onprogress was not a function");return this}};return l.progressJs=
n});


define('lib-build/css!lib/progress.js/minified/progressjs.min',[],function(){});

define('lib-build/less!storymaps/tpl/view/ui/ProgressBar',[],function(){});
define('storymaps/tpl/view/ui/ProgressBar',[
  'lib/progress.js/minified/progress.min',
  'lib-build/css!lib/progress.js/minified/progressjs.min',
  'lib-build/less!./ProgressBar'
], function(
  ProgressJs
) {
  return function ProgressBar(/*container, isInBuilder*/) {

    var _progressBar = new ProgressJs();

    this.start = function() {
      _progressBar.start();
    };

    this.update = function(progress) {
      _progressBar.set(progress);
    };
  };
});


define('lib-build/hbars!storymaps-react/tpl/view/ui/Bookmark', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class=\"bookmark\" data-index=\""
    + escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"useData":true}); });


define('lib-build/hbars!storymaps-react/tpl/view/ui/BookmarksMore', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<li class=\"dropdown bookmark-dropdown\">\r\n	<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n		<span class=\"glyphicon glyphicon-th-list\"></span> <span class=\"caret\"></span>\r\n	</a>\r\n	<ul class=\"dropdown-menu dropdown-menu-right\">\r\n		";
  stack1 = ((helper = (helper = helpers.bookmarks || (depth0 != null ? depth0.bookmarks : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bookmarks","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n	</ul>\r\n</li>\r\n";
},"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/ui/Bookmarks',[],function(){});
define('storymaps-react/tpl/view/ui/Bookmarks',['module', 'exports', 'lib-build/hbars!./Bookmark', 'lib-build/hbars!./BookmarksMore', 'lib-build/less!./Bookmarks'], function (module, exports, _Bookmark, _BookmarksMore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Bookmark2 = _interopRequireDefault(_Bookmark);

  var _BookmarksMore2 = _interopRequireDefault(_BookmarksMore);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Bookmarks = function () {
    function Bookmarks(container) {
      _classCallCheck(this, Bookmarks);

      this.container = container;
      this.bookmarkIndex = 0;
      this.bookmarkNavigationInProgress = false;
    }

    _createClass(Bookmarks, [{
      key: 'update',
      value: function update(sectionIndex) {
        this.showBookmarkIndex(sectionIndex);
      }
    }, {
      key: 'resize',
      value: function resize() {
        var _this = this;

        var availableWidthForTabs = this.container.width();
        // start by hiding the dropdown and its button
        this.container.children('li').addClass('visible');
        this.container.find('.dropdown').removeClass('visible');
        this.container.find('.dropdown-menu li').removeClass('visible');

        var widthCounter = 0;
        var index = 0;
        var displayMoreButton = false;
        var bookmarks = this.container.children('.bookmark');
        var moreButtonSize = this.container.find('li.dropdown').outerWidth(true);

        bookmarks.each(function (i, elem) {
          var element = $(elem);

          index++;
          // find the width of the bookmark
          widthCounter += element.outerWidth(true);

          var tooWideWithBookmark = widthCounter > availableWidthForTabs;
          var tooWideWithBookmarkAndMoreButton = widthCounter + moreButtonSize > availableWidthForTabs;
          var notLastBookmark = index < bookmarks.length;

          // If adding the button would overflow
          //  or if adding the button and the more button would overflow and there is more bookmarks to come
          if (tooWideWithBookmark || tooWideWithBookmarkAndMoreButton && notLastBookmark) {
            // display the 'more' button, hide the bookmark from the horizontal list, and show the bookmark in the dropdown list
            displayMoreButton = true;
            element.removeClass('visible');
            _this.container.find('.dropdown-menu li').eq(element.index()).addClass('visible');
          }
        });

        var activeBookmark = this.container.children('.bookmark.active');
        var activeBookmarkDropdown = this.container.find('.dropdown-menu li.active');

        // The active bookmark is not visible -> the active bookmark is now in the dropdown list
        if (activeBookmark.length && !activeBookmark.hasClass('visible')) {
          // remove the active class from the horizontal list (the item is already hidden in that list)
          // then add the active class to the dropdown item
          // then make the dropdown active.
          activeBookmark.removeClass('active');
          this.container.find('.nav-tabs .dropdown-menu li').eq(activeBookmark.index()).addClass('active');
          this.container.find('.nav-tabs > .dropdown').addClass('active');
        }
        // The active bookmark in the dropdown is not visible -> the active bookmark is now visible in the main list
        else if (activeBookmarkDropdown.length && !activeBookmarkDropdown.hasClass('visible')) {
            // remove the active class from the dropdown bookmark (it's already hidden there)
            // then add the active class to the bookmark in the horizontal list
            // and then make the dropdown inactive.
            activeBookmarkDropdown.removeClass('active');
            this.container.find('.nav-tabs > .bookmark').eq(activeBookmarkDropdown.index()).addClass('active');
            this.container.find('.nav-tabs > .dropdown').removeClass('active');
          }

        if (displayMoreButton) {
          // show the dropdown
          this.container.find('.dropdown').addClass('visible');
        }
      }
    }, {
      key: 'updateVisibleBookmark',
      value: function updateVisibleBookmark(index) {
        // take array of all the elements that are at or below the index.
        var possibleBookmarks = this.container.find('.bookmark.visible').filter(function (i, item) {
          return $(item).data('index') <= index;
        });
        // take the last one (the one that either HAS this index or is the closest, but below, to it.)
        if (possibleBookmarks.length) {
          $(possibleBookmarks[possibleBookmarks.length - 1]).addClass('active');
        }
      }
    }, {
      key: 'showBookmarkIndex',
      value: function showBookmarkIndex(index) {
        if (!this.bookmarkNavigationInProgress) {

          if (!index && index !== 0) {
            index = this.bookmarkIndex;
          }

          this.container.find('li, .bookmark').removeClass('active');

          this.updateVisibleBookmark(index);

          // when you get to an index that is NOT in the visible list, show the dropdown selected.
          // active bookmark's parent is dropdown? No? then OK...
          var inDropdown = this.container.find('.bookmark.active').closest('.bookmark-dropdown').length > 0;
          // The bookmark is in the dropdown
          if (inDropdown) {
            this.container.find('.dropdown').addClass('active');

            if (!app.isLoading) {
              // Open the dropdown if not open
              if (!this.container.find('.dropdown').hasClass('open')) {
                this.container.find('.dropdown-toggle').click();
              }
            }
          }
          // The bookmark is visible
          else {
              if (!app.isLoading) {
                // Close the dropdown if open
                if (this.container.find('.dropdown').hasClass('open')) {
                  this.container.find('.dropdown-toggle').click();
                }
              }
            }

          this.bookmarkIndex = index;
        }
      }
    }, {
      key: 'render',
      value: function render(bookmarks) {
        if (!bookmarks) {
          bookmarks = [];
        }

        var bookmarksHTML = '';

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = bookmarks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var bookmark = _step.value;

            bookmarksHTML += (0, _Bookmark2.default)(bookmark);
          }

          // populates the list AND the dropdown with the bookmarks
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.container.html(bookmarksHTML + (0, _BookmarksMore2.default)({ bookmarks: bookmarksHTML }));

        this.addEvents();

        this.resize();
        this.showBookmarkIndex();
      }
    }, {
      key: 'addEvents',
      value: function addEvents() {
        var _this2 = this;

        this.container.find('.bookmark').off('click').on('click', function (event) {
          _this2.onBookmarkNavigate($(event.currentTarget));
        });
      }
    }, {
      key: 'onBookmarkNavigate',
      value: function onBookmarkNavigate(target) {
        var _this3 = this;

        var index = target.data('index');

        this.bookmarkNavigationInProgress = true;

        app.Controller.navigateToSection({
          index: index,
          animate: true
        }).then(function () {
          // but when all the way done, no more updates called on header... so have to tell it manually, which could be off... not a good idea.
          // unless look at app's selected section
          _this3.bookmarkNavigationInProgress = false;
          _this3.showBookmarkIndex(index);
        });
      }
    }]);

    return Bookmarks;
  }();

  exports.default = Bookmarks;
  module.exports = exports['default'];
});
//# sourceMappingURL=Bookmarks.js.map
;
define('lib-build/tpl',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});

define('lib-build/tpl!storymaps/common/ui/share/ShareDialog', [],function () { return function(obj){obj||(obj={});var __t,__p='',__e=_.escape;with(obj){__p+='<div class="modal-dialog">\r\n  <div class="modal-content">\r\n\r\n    <div class="modal-logo"></div>\r\n    <div class="modal-header">\r\n      <h4 class="modal-title"></h4>\r\n    </div>\r\n\r\n    <div class="modal-body">\r\n      <div class="share-url-social">\r\n        <div class="share-url-panel"></div>\r\n        <div class="share-social-container">\r\n          <i class="social-icon share_facebook fa fa-facebook-square"></i>\r\n          <i class="social-icon share_twitter fa fa-twitter"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="embed-title"></div>\r\n      <div class="share-embed-panel"></div>\r\n\r\n      <div class="checkbox autoplay-container">\r\n        <label>\r\n          <input type="checkbox" class="autoplay-checkbox" value="autoplay" />\r\n          <span class="autoplay-label"></span>\r\n        </label>\r\n        <span class="help autoplay-help" data-toggle="tooltip">\r\n          <i class="fa fa-question-circle" aria-hidden="true"></i>\r\n        </span>\r\n        <span class="autoplay-notification"></span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="modal-footer">\r\n      <button type="button" class="btn btnCancel btn-naked btn-close" data-dismiss="modal"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n';}return __p}; });


define('lib-build/css!storymaps/common/ui/share/ShareDialog',[],function(){});

define('lib-build/less!storymaps/common/ui/share/ShareDialog',[],function(){});

define('lib-build/tpl!storymaps/common/ui/share/ShareURLPanel', [],function () { return function(obj){obj||(obj={});var __t,__p='',__e=_.escape;with(obj){__p+='<div class="share-url-container">\r\n\t<span class="share-btn glyphicon glyphicon-copy"></span>\r\n\t<input type="text" class="form-control bitlylink" readonly="true"/>\r\n\t<a class="btn btn-primary btn-bitlylink-open" target="_blank"></a>\r\n\t<div class="share-status-wrapper"><span class="share-status"></span></div>\r\n</div>\r\n';}return __p}; });


define('lib-build/css!storymaps/common/ui/share/ShareURLPanel',[],function(){});
/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */
(function(window, undefined) {
  "use strict";
  /**
 * Store references to critically important global functions that may be
 * overridden on certain web pages.
 */
  var _window = window, _document = _window.document, _navigator = _window.navigator, _setTimeout = _window.setTimeout, _clearTimeout = _window.clearTimeout, _setInterval = _window.setInterval, _clearInterval = _window.clearInterval, _getComputedStyle = _window.getComputedStyle, _encodeURIComponent = _window.encodeURIComponent, _ActiveXObject = _window.ActiveXObject, _Error = _window.Error, _parseInt = _window.Number.parseInt || _window.parseInt, _parseFloat = _window.Number.parseFloat || _window.parseFloat, _isNaN = _window.Number.isNaN || _window.isNaN, _now = _window.Date.now, _keys = _window.Object.keys, _defineProperty = _window.Object.defineProperty, _hasOwn = _window.Object.prototype.hasOwnProperty, _slice = _window.Array.prototype.slice, _unwrap = function() {
    var unwrapper = function(el) {
      return el;
    };
    if (typeof _window.wrap === "function" && typeof _window.unwrap === "function") {
      try {
        var div = _document.createElement("div");
        var unwrappedDiv = _window.unwrap(div);
        if (div.nodeType === 1 && unwrappedDiv && unwrappedDiv.nodeType === 1) {
          unwrapper = _window.unwrap;
        }
      } catch (e) {}
    }
    return unwrapper;
  }();
  /**
 * Convert an `arguments` object into an Array.
 *
 * @returns The arguments as an Array
 * @private
 */
  var _args = function(argumentsObj) {
    return _slice.call(argumentsObj, 0);
  };
  /**
 * Shallow-copy the owned, enumerable properties of one object over to another, similar to jQuery's `$.extend`.
 *
 * @returns The target object, augmented
 * @private
 */
  var _extend = function() {
    var i, len, arg, prop, src, copy, args = _args(arguments), target = args[0] || {};
    for (i = 1, len = args.length; i < len; i++) {
      if ((arg = args[i]) != null) {
        for (prop in arg) {
          if (_hasOwn.call(arg, prop)) {
            src = target[prop];
            copy = arg[prop];
            if (target !== copy && copy !== undefined) {
              target[prop] = copy;
            }
          }
        }
      }
    }
    return target;
  };
  /**
 * Return a deep copy of the source object or array.
 *
 * @returns Object or Array
 * @private
 */
  var _deepCopy = function(source) {
    var copy, i, len, prop;
    if (typeof source !== "object" || source == null || typeof source.nodeType === "number") {
      copy = source;
    } else if (typeof source.length === "number") {
      copy = [];
      for (i = 0, len = source.length; i < len; i++) {
        if (_hasOwn.call(source, i)) {
          copy[i] = _deepCopy(source[i]);
        }
      }
    } else {
      copy = {};
      for (prop in source) {
        if (_hasOwn.call(source, prop)) {
          copy[prop] = _deepCopy(source[prop]);
        }
      }
    }
    return copy;
  };
  /**
 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to keep.
 * The inverse of `_omit`, mostly. The big difference is that these properties do NOT need to be enumerable to
 * be kept.
 *
 * @returns A new filtered object.
 * @private
 */
  var _pick = function(obj, keys) {
    var newObj = {};
    for (var i = 0, len = keys.length; i < len; i++) {
      if (keys[i] in obj) {
        newObj[keys[i]] = obj[keys[i]];
      }
    }
    return newObj;
  };
  /**
 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to omit.
 * The inverse of `_pick`.
 *
 * @returns A new filtered object.
 * @private
 */
  var _omit = function(obj, keys) {
    var newObj = {};
    for (var prop in obj) {
      if (keys.indexOf(prop) === -1) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  };
  /**
 * Remove all owned, enumerable properties from an object.
 *
 * @returns The original object without its owned, enumerable properties.
 * @private
 */
  var _deleteOwnProperties = function(obj) {
    if (obj) {
      for (var prop in obj) {
        if (_hasOwn.call(obj, prop)) {
          delete obj[prop];
        }
      }
    }
    return obj;
  };
  /**
 * Determine if an element is contained within another element.
 *
 * @returns Boolean
 * @private
 */
  var _containedBy = function(el, ancestorEl) {
    if (el && el.nodeType === 1 && el.ownerDocument && ancestorEl && (ancestorEl.nodeType === 1 && ancestorEl.ownerDocument && ancestorEl.ownerDocument === el.ownerDocument || ancestorEl.nodeType === 9 && !ancestorEl.ownerDocument && ancestorEl === el.ownerDocument)) {
      do {
        if (el === ancestorEl) {
          return true;
        }
        el = el.parentNode;
      } while (el);
    }
    return false;
  };
  /**
 * Get the URL path's parent directory.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getDirPathOfUrl = function(url) {
    var dir;
    if (typeof url === "string" && url) {
      dir = url.split("#")[0].split("?")[0];
      dir = url.slice(0, url.lastIndexOf("/") + 1);
    }
    return dir;
  };
  /**
 * Get the current script's URL by throwing an `Error` and analyzing it.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrlFromErrorStack = function(stack) {
    var url, matches;
    if (typeof stack === "string" && stack) {
      matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
      if (matches && matches[1]) {
        url = matches[1];
      } else {
        matches = stack.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
        if (matches && matches[1]) {
          url = matches[1];
        }
      }
    }
    return url;
  };
  /**
 * Get the current script's URL by throwing an `Error` and analyzing it.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrlFromError = function() {
    var url, err;
    try {
      throw new _Error();
    } catch (e) {
      err = e;
    }
    if (err) {
      url = err.sourceURL || err.fileName || _getCurrentScriptUrlFromErrorStack(err.stack);
    }
    return url;
  };
  /**
 * Get the current script's URL.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getCurrentScriptUrl = function() {
    var jsPath, scripts, i;
    if (_document.currentScript && (jsPath = _document.currentScript.src)) {
      return jsPath;
    }
    scripts = _document.getElementsByTagName("script");
    if (scripts.length === 1) {
      return scripts[0].src || undefined;
    }
    if ("readyState" in scripts[0]) {
      for (i = scripts.length; i--; ) {
        if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
          return jsPath;
        }
      }
    }
    if (_document.readyState === "loading" && (jsPath = scripts[scripts.length - 1].src)) {
      return jsPath;
    }
    if (jsPath = _getCurrentScriptUrlFromError()) {
      return jsPath;
    }
    return undefined;
  };
  /**
 * Get the unanimous parent directory of ALL script tags.
 * If any script tags are either (a) inline or (b) from differing parent
 * directories, this method must return `undefined`.
 *
 * @returns String or `undefined`
 * @private
 */
  var _getUnanimousScriptParentDir = function() {
    var i, jsDir, jsPath, scripts = _document.getElementsByTagName("script");
    for (i = scripts.length; i--; ) {
      if (!(jsPath = scripts[i].src)) {
        jsDir = null;
        break;
      }
      jsPath = _getDirPathOfUrl(jsPath);
      if (jsDir == null) {
        jsDir = jsPath;
      } else if (jsDir !== jsPath) {
        jsDir = null;
        break;
      }
    }
    return jsDir || undefined;
  };
  /**
 * Get the presumed location of the "ZeroClipboard.swf" file, based on the location
 * of the executing JavaScript file (e.g. "ZeroClipboard.js", etc.).
 *
 * @returns String
 * @private
 */
  var _getDefaultSwfPath = function() {
    var jsDir = _getDirPathOfUrl(_getCurrentScriptUrl()) || _getUnanimousScriptParentDir() || "";
    return jsDir + "ZeroClipboard.swf";
  };
  /**
 * Keep track of if the page is framed (in an `iframe`). This can never change.
 * @private
 */
  var _pageIsFramed = function() {
    return window.opener == null && (!!window.top && window != window.top || !!window.parent && window != window.parent);
  }();
  /**
 * Keep track of the state of the Flash object.
 * @private
 */
  var _flashState = {
    bridge: null,
    version: "0.0.0",
    pluginType: "unknown",
    disabled: null,
    outdated: null,
    sandboxed: null,
    unavailable: null,
    degraded: null,
    deactivated: null,
    overdue: null,
    ready: null
  };
  /**
 * The minimum Flash Player version required to use ZeroClipboard completely.
 * @readonly
 * @private
 */
  var _minimumFlashVersion = "11.0.0";
  /**
 * The ZeroClipboard library version number, as reported by Flash, at the time the SWF was compiled.
 */
  var _zcSwfVersion;
  /**
 * Keep track of all event listener registrations.
 * @private
 */
  var _handlers = {};
  /**
 * Keep track of the currently activated element.
 * @private
 */
  var _currentElement;
  /**
 * Keep track of the element that was activated when a `copy` process started.
 * @private
 */
  var _copyTarget;
  /**
 * Keep track of data for the pending clipboard transaction.
 * @private
 */
  var _clipData = {};
  /**
 * Keep track of data formats for the pending clipboard transaction.
 * @private
 */
  var _clipDataFormatMap = null;
  /**
 * Keep track of the Flash availability check timeout.
 * @private
 */
  var _flashCheckTimeout = 0;
  /**
 * Keep track of SWF network errors interval polling.
 * @private
 */
  var _swfFallbackCheckInterval = 0;
  /**
 * The `message` store for events
 * @private
 */
  var _eventMessages = {
    ready: "Flash communication is established",
    error: {
      "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      "flash-outdated": "Flash is too outdated to support ZeroClipboard",
      "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
      "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
      "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
      "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
      "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
      "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
      "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
      "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
    }
  };
  /**
 * The `name`s of `error` events that can only occur is Flash has at least
 * been able to load the SWF successfully.
 * @private
 */
  var _errorsThatOnlyOccurAfterFlashLoads = [ "flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error" ];
  /**
 * The `name`s of `error` events that should likely result in the `_flashState`
 * variable's property values being updated.
 * @private
 */
  var _flashStateErrorNames = [ "flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue" ];
  /**
 * A RegExp to match the `name` property of `error` events related to Flash.
 * @private
 */
  var _flashStateErrorNameMatchingRegex = new RegExp("^flash-(" + _flashStateErrorNames.map(function(errorName) {
    return errorName.replace(/^flash-/, "");
  }).join("|") + ")$");
  /**
 * A RegExp to match the `name` property of `error` events related to Flash,
 * which is enabled.
 * @private
 */
  var _flashStateEnabledErrorNameMatchingRegex = new RegExp("^flash-(" + _flashStateErrorNames.slice(1).map(function(errorName) {
    return errorName.replace(/^flash-/, "");
  }).join("|") + ")$");
  /**
 * ZeroClipboard configuration defaults for the Core module.
 * @private
 */
  var _globalConfig = {
    swfPath: _getDefaultSwfPath(),
    trustedDomains: window.location.host ? [ window.location.host ] : [],
    cacheBust: true,
    forceEnhancedClipboard: false,
    flashLoadTimeout: 3e4,
    autoActivate: true,
    bubbleEvents: true,
    containerId: "global-zeroclipboard-html-bridge",
    containerClass: "global-zeroclipboard-container",
    swfObjectId: "global-zeroclipboard-flash-bridge",
    hoverClass: "zeroclipboard-is-hover",
    activeClass: "zeroclipboard-is-active",
    forceHandCursor: false,
    title: null,
    zIndex: 999999999
  };
  /**
 * The underlying implementation of `ZeroClipboard.config`.
 * @private
 */
  var _config = function(options) {
    if (typeof options === "object" && options !== null) {
      for (var prop in options) {
        if (_hasOwn.call(options, prop)) {
          if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(prop)) {
            _globalConfig[prop] = options[prop];
          } else if (_flashState.bridge == null) {
            if (prop === "containerId" || prop === "swfObjectId") {
              if (_isValidHtml4Id(options[prop])) {
                _globalConfig[prop] = options[prop];
              } else {
                throw new Error("The specified `" + prop + "` value is not valid as an HTML4 Element ID");
              }
            } else {
              _globalConfig[prop] = options[prop];
            }
          }
        }
      }
    }
    if (typeof options === "string" && options) {
      if (_hasOwn.call(_globalConfig, options)) {
        return _globalConfig[options];
      }
      return;
    }
    return _deepCopy(_globalConfig);
  };
  /**
 * The underlying implementation of `ZeroClipboard.state`.
 * @private
 */
  var _state = function() {
    _detectSandbox();
    return {
      browser: _pick(_navigator, [ "userAgent", "platform", "appName" ]),
      flash: _omit(_flashState, [ "bridge" ]),
      zeroclipboard: {
        version: ZeroClipboard.version,
        config: ZeroClipboard.config()
      }
    };
  };
  /**
 * The underlying implementation of `ZeroClipboard.isFlashUnusable`.
 * @private
 */
  var _isFlashUnusable = function() {
    return !!(_flashState.disabled || _flashState.outdated || _flashState.sandboxed || _flashState.unavailable || _flashState.degraded || _flashState.deactivated);
  };
  /**
 * The underlying implementation of `ZeroClipboard.on`.
 * @private
 */
  var _on = function(eventType, listener) {
    var i, len, events, added = {};
    if (typeof eventType === "string" && eventType) {
      events = eventType.toLowerCase().split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          ZeroClipboard.on(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].replace(/^on/, "");
        added[eventType] = true;
        if (!_handlers[eventType]) {
          _handlers[eventType] = [];
        }
        _handlers[eventType].push(listener);
      }
      if (added.ready && _flashState.ready) {
        ZeroClipboard.emit({
          type: "ready"
        });
      }
      if (added.error) {
        for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
          if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")] === true) {
            ZeroClipboard.emit({
              type: "error",
              name: _flashStateErrorNames[i]
            });
            break;
          }
        }
        if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
          ZeroClipboard.emit({
            type: "error",
            name: "version-mismatch",
            jsVersion: ZeroClipboard.version,
            swfVersion: _zcSwfVersion
          });
        }
      }
    }
    return ZeroClipboard;
  };
  /**
 * The underlying implementation of `ZeroClipboard.off`.
 * @private
 */
  var _off = function(eventType, listener) {
    var i, len, foundIndex, events, perEventHandlers;
    if (arguments.length === 0) {
      events = _keys(_handlers);
    } else if (typeof eventType === "string" && eventType) {
      events = eventType.split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          ZeroClipboard.off(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = _handlers[eventType];
        if (perEventHandlers && perEventHandlers.length) {
          if (listener) {
            foundIndex = perEventHandlers.indexOf(listener);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = perEventHandlers.indexOf(listener, foundIndex);
            }
          } else {
            perEventHandlers.length = 0;
          }
        }
      }
    }
    return ZeroClipboard;
  };
  /**
 * The underlying implementation of `ZeroClipboard.handlers`.
 * @private
 */
  var _listeners = function(eventType) {
    var copy;
    if (typeof eventType === "string" && eventType) {
      copy = _deepCopy(_handlers[eventType]) || null;
    } else {
      copy = _deepCopy(_handlers);
    }
    return copy;
  };
  /**
 * The underlying implementation of `ZeroClipboard.emit`.
 * @private
 */
  var _emit = function(event) {
    var eventCopy, returnVal, tmp;
    event = _createEvent(event);
    if (!event) {
      return;
    }
    if (_preprocessEvent(event)) {
      return;
    }
    if (event.type === "ready" && _flashState.overdue === true) {
      return ZeroClipboard.emit({
        type: "error",
        name: "flash-overdue"
      });
    }
    eventCopy = _extend({}, event);
    _dispatchCallbacks.call(this, eventCopy);
    if (event.type === "copy") {
      tmp = _mapClipDataToFlash(_clipData);
      returnVal = tmp.data;
      _clipDataFormatMap = tmp.formatMap;
    }
    return returnVal;
  };
  /**
 * The underlying implementation of `ZeroClipboard.create`.
 * @private
 */
  var _create = function() {
    var previousState = _flashState.sandboxed;
    _detectSandbox();
    if (typeof _flashState.ready !== "boolean") {
      _flashState.ready = false;
    }
    if (_flashState.sandboxed !== previousState && _flashState.sandboxed === true) {
      _flashState.ready = false;
      ZeroClipboard.emit({
        type: "error",
        name: "flash-sandboxed"
      });
    } else if (!ZeroClipboard.isFlashUnusable() && _flashState.bridge === null) {
      var maxWait = _globalConfig.flashLoadTimeout;
      if (typeof maxWait === "number" && maxWait >= 0) {
        _flashCheckTimeout = _setTimeout(function() {
          if (typeof _flashState.deactivated !== "boolean") {
            _flashState.deactivated = true;
          }
          if (_flashState.deactivated === true) {
            ZeroClipboard.emit({
              type: "error",
              name: "flash-deactivated"
            });
          }
        }, maxWait);
      }
      _flashState.overdue = false;
      _embedSwf();
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.destroy`.
 * @private
 */
  var _destroy = function() {
    ZeroClipboard.clearData();
    ZeroClipboard.blur();
    ZeroClipboard.emit("destroy");
    _unembedSwf();
    ZeroClipboard.off();
  };
  /**
 * The underlying implementation of `ZeroClipboard.setData`.
 * @private
 */
  var _setData = function(format, data) {
    var dataObj;
    if (typeof format === "object" && format && typeof data === "undefined") {
      dataObj = format;
      ZeroClipboard.clearData();
    } else if (typeof format === "string" && format) {
      dataObj = {};
      dataObj[format] = data;
    } else {
      return;
    }
    for (var dataFormat in dataObj) {
      if (typeof dataFormat === "string" && dataFormat && _hasOwn.call(dataObj, dataFormat) && typeof dataObj[dataFormat] === "string" && dataObj[dataFormat]) {
        _clipData[dataFormat] = dataObj[dataFormat];
      }
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.clearData`.
 * @private
 */
  var _clearData = function(format) {
    if (typeof format === "undefined") {
      _deleteOwnProperties(_clipData);
      _clipDataFormatMap = null;
    } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
      delete _clipData[format];
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.getData`.
 * @private
 */
  var _getData = function(format) {
    if (typeof format === "undefined") {
      return _deepCopy(_clipData);
    } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
      return _clipData[format];
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.focus`/`ZeroClipboard.activate`.
 * @private
 */
  var _focus = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    if (_currentElement) {
      _removeClass(_currentElement, _globalConfig.activeClass);
      if (_currentElement !== element) {
        _removeClass(_currentElement, _globalConfig.hoverClass);
      }
    }
    _currentElement = element;
    _addClass(element, _globalConfig.hoverClass);
    var newTitle = element.getAttribute("title") || _globalConfig.title;
    if (typeof newTitle === "string" && newTitle) {
      var htmlBridge = _getHtmlBridge(_flashState.bridge);
      if (htmlBridge) {
        htmlBridge.setAttribute("title", newTitle);
      }
    }
    var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
    _setHandCursor(useHandCursor);
    _reposition();
  };
  /**
 * The underlying implementation of `ZeroClipboard.blur`/`ZeroClipboard.deactivate`.
 * @private
 */
  var _blur = function() {
    var htmlBridge = _getHtmlBridge(_flashState.bridge);
    if (htmlBridge) {
      htmlBridge.removeAttribute("title");
      htmlBridge.style.left = "0px";
      htmlBridge.style.top = "-9999px";
      htmlBridge.style.width = "1px";
      htmlBridge.style.height = "1px";
    }
    if (_currentElement) {
      _removeClass(_currentElement, _globalConfig.hoverClass);
      _removeClass(_currentElement, _globalConfig.activeClass);
      _currentElement = null;
    }
  };
  /**
 * The underlying implementation of `ZeroClipboard.activeElement`.
 * @private
 */
  var _activeElement = function() {
    return _currentElement || null;
  };
  /**
 * Check if a value is a valid HTML4 `ID` or `Name` token.
 * @private
 */
  var _isValidHtml4Id = function(id) {
    return typeof id === "string" && id && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(id);
  };
  /**
 * Create or update an `event` object, based on the `eventType`.
 * @private
 */
  var _createEvent = function(event) {
    var eventType;
    if (typeof event === "string" && event) {
      eventType = event;
      event = {};
    } else if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
      eventType = event.type;
    }
    if (!eventType) {
      return;
    }
    eventType = eventType.toLowerCase();
    if (!event.target && (/^(copy|aftercopy|_click)$/.test(eventType) || eventType === "error" && event.name === "clipboard-error")) {
      event.target = _copyTarget;
    }
    _extend(event, {
      type: eventType,
      target: event.target || _currentElement || null,
      relatedTarget: event.relatedTarget || null,
      currentTarget: _flashState && _flashState.bridge || null,
      timeStamp: event.timeStamp || _now() || null
    });
    var msg = _eventMessages[event.type];
    if (event.type === "error" && event.name && msg) {
      msg = msg[event.name];
    }
    if (msg) {
      event.message = msg;
    }
    if (event.type === "ready") {
      _extend(event, {
        target: null,
        version: _flashState.version
      });
    }
    if (event.type === "error") {
      if (_flashStateErrorNameMatchingRegex.test(event.name)) {
        _extend(event, {
          target: null,
          minimumVersion: _minimumFlashVersion
        });
      }
      if (_flashStateEnabledErrorNameMatchingRegex.test(event.name)) {
        _extend(event, {
          version: _flashState.version
        });
      }
    }
    if (event.type === "copy") {
      event.clipboardData = {
        setData: ZeroClipboard.setData,
        clearData: ZeroClipboard.clearData
      };
    }
    if (event.type === "aftercopy") {
      event = _mapClipResultsFromFlash(event, _clipDataFormatMap);
    }
    if (event.target && !event.relatedTarget) {
      event.relatedTarget = _getRelatedTarget(event.target);
    }
    return _addMouseData(event);
  };
  /**
 * Get a relatedTarget from the target's `data-clipboard-target` attribute
 * @private
 */
  var _getRelatedTarget = function(targetEl) {
    var relatedTargetId = targetEl && targetEl.getAttribute && targetEl.getAttribute("data-clipboard-target");
    return relatedTargetId ? _document.getElementById(relatedTargetId) : null;
  };
  /**
 * Add element and position data to `MouseEvent` instances
 * @private
 */
  var _addMouseData = function(event) {
    if (event && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
      var srcElement = event.target;
      var fromElement = event.type === "_mouseover" && event.relatedTarget ? event.relatedTarget : undefined;
      var toElement = event.type === "_mouseout" && event.relatedTarget ? event.relatedTarget : undefined;
      var pos = _getElementPosition(srcElement);
      var screenLeft = _window.screenLeft || _window.screenX || 0;
      var screenTop = _window.screenTop || _window.screenY || 0;
      var scrollLeft = _document.body.scrollLeft + _document.documentElement.scrollLeft;
      var scrollTop = _document.body.scrollTop + _document.documentElement.scrollTop;
      var pageX = pos.left + (typeof event._stageX === "number" ? event._stageX : 0);
      var pageY = pos.top + (typeof event._stageY === "number" ? event._stageY : 0);
      var clientX = pageX - scrollLeft;
      var clientY = pageY - scrollTop;
      var screenX = screenLeft + clientX;
      var screenY = screenTop + clientY;
      var moveX = typeof event.movementX === "number" ? event.movementX : 0;
      var moveY = typeof event.movementY === "number" ? event.movementY : 0;
      delete event._stageX;
      delete event._stageY;
      _extend(event, {
        srcElement: srcElement,
        fromElement: fromElement,
        toElement: toElement,
        screenX: screenX,
        screenY: screenY,
        pageX: pageX,
        pageY: pageY,
        clientX: clientX,
        clientY: clientY,
        x: clientX,
        y: clientY,
        movementX: moveX,
        movementY: moveY,
        offsetX: 0,
        offsetY: 0,
        layerX: 0,
        layerY: 0
      });
    }
    return event;
  };
  /**
 * Determine if an event's registered handlers should be execute synchronously or asynchronously.
 *
 * @returns {boolean}
 * @private
 */
  var _shouldPerformAsync = function(event) {
    var eventType = event && typeof event.type === "string" && event.type || "";
    return !/^(?:(?:before)?copy|destroy)$/.test(eventType);
  };
  /**
 * Control if a callback should be executed asynchronously or not.
 *
 * @returns `undefined`
 * @private
 */
  var _dispatchCallback = function(func, context, args, async) {
    if (async) {
      _setTimeout(function() {
        func.apply(context, args);
      }, 0);
    } else {
      func.apply(context, args);
    }
  };
  /**
 * Handle the actual dispatching of events to client instances.
 *
 * @returns `undefined`
 * @private
 */
  var _dispatchCallbacks = function(event) {
    if (!(typeof event === "object" && event && event.type)) {
      return;
    }
    var async = _shouldPerformAsync(event);
    var wildcardTypeHandlers = _handlers["*"] || [];
    var specificTypeHandlers = _handlers[event.type] || [];
    var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
    if (handlers && handlers.length) {
      var i, len, func, context, eventCopy, originalContext = this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof _window[func] === "function") {
          func = _window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          eventCopy = _extend({}, event);
          _dispatchCallback(func, context, [ eventCopy ], async);
        }
      }
    }
    return this;
  };
  /**
 * Check an `error` event's `name` property to see if Flash has
 * already loaded, which rules out possible `iframe` sandboxing.
 * @private
 */
  var _getSandboxStatusFromErrorEvent = function(event) {
    var isSandboxed = null;
    if (_pageIsFramed === false || event && event.type === "error" && event.name && _errorsThatOnlyOccurAfterFlashLoads.indexOf(event.name) !== -1) {
      isSandboxed = false;
    }
    return isSandboxed;
  };
  /**
 * Preprocess any special behaviors, reactions, or state changes after receiving this event.
 * Executes only once per event emitted, NOT once per client.
 * @private
 */
  var _preprocessEvent = function(event) {
    var element = event.target || _currentElement || null;
    var sourceIsSwf = event._source === "swf";
    delete event._source;
    switch (event.type) {
     case "error":
      var isSandboxed = event.name === "flash-sandboxed" || _getSandboxStatusFromErrorEvent(event);
      if (typeof isSandboxed === "boolean") {
        _flashState.sandboxed = isSandboxed;
      }
      if (_flashStateErrorNames.indexOf(event.name) !== -1) {
        _extend(_flashState, {
          disabled: event.name === "flash-disabled",
          outdated: event.name === "flash-outdated",
          unavailable: event.name === "flash-unavailable",
          degraded: event.name === "flash-degraded",
          deactivated: event.name === "flash-deactivated",
          overdue: event.name === "flash-overdue",
          ready: false
        });
      } else if (event.name === "version-mismatch") {
        _zcSwfVersion = event.swfVersion;
        _extend(_flashState, {
          disabled: false,
          outdated: false,
          unavailable: false,
          degraded: false,
          deactivated: false,
          overdue: false,
          ready: false
        });
      }
      _clearTimeoutsAndPolling();
      break;

     case "ready":
      _zcSwfVersion = event.swfVersion;
      var wasDeactivated = _flashState.deactivated === true;
      _extend(_flashState, {
        disabled: false,
        outdated: false,
        sandboxed: false,
        unavailable: false,
        degraded: false,
        deactivated: false,
        overdue: wasDeactivated,
        ready: !wasDeactivated
      });
      _clearTimeoutsAndPolling();
      break;

     case "beforecopy":
      _copyTarget = element;
      break;

     case "copy":
      var textContent, htmlContent, targetEl = event.relatedTarget;
      if (!(_clipData["text/html"] || _clipData["text/plain"]) && targetEl && (htmlContent = targetEl.value || targetEl.outerHTML || targetEl.innerHTML) && (textContent = targetEl.value || targetEl.textContent || targetEl.innerText)) {
        event.clipboardData.clearData();
        event.clipboardData.setData("text/plain", textContent);
        if (htmlContent !== textContent) {
          event.clipboardData.setData("text/html", htmlContent);
        }
      } else if (!_clipData["text/plain"] && event.target && (textContent = event.target.getAttribute("data-clipboard-text"))) {
        event.clipboardData.clearData();
        event.clipboardData.setData("text/plain", textContent);
      }
      break;

     case "aftercopy":
      _queueEmitClipboardErrors(event);
      ZeroClipboard.clearData();
      if (element && element !== _safeActiveElement() && element.focus) {
        element.focus();
      }
      break;

     case "_mouseover":
      ZeroClipboard.focus(element);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
          _fireMouseEvent(_extend({}, event, {
            type: "mouseenter",
            bubbles: false,
            cancelable: false
          }));
        }
        _fireMouseEvent(_extend({}, event, {
          type: "mouseover"
        }));
      }
      break;

     case "_mouseout":
      ZeroClipboard.blur();
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
          _fireMouseEvent(_extend({}, event, {
            type: "mouseleave",
            bubbles: false,
            cancelable: false
          }));
        }
        _fireMouseEvent(_extend({}, event, {
          type: "mouseout"
        }));
      }
      break;

     case "_mousedown":
      _addClass(element, _globalConfig.activeClass);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_mouseup":
      _removeClass(element, _globalConfig.activeClass);
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_click":
      _copyTarget = null;
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;

     case "_mousemove":
      if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
        _fireMouseEvent(_extend({}, event, {
          type: event.type.slice(1)
        }));
      }
      break;
    }
    if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
      return true;
    }
  };
  /**
 * Check an "aftercopy" event for clipboard errors and emit a corresponding "error" event.
 * @private
 */
  var _queueEmitClipboardErrors = function(aftercopyEvent) {
    if (aftercopyEvent.errors && aftercopyEvent.errors.length > 0) {
      var errorEvent = _deepCopy(aftercopyEvent);
      _extend(errorEvent, {
        type: "error",
        name: "clipboard-error"
      });
      delete errorEvent.success;
      _setTimeout(function() {
        ZeroClipboard.emit(errorEvent);
      }, 0);
    }
  };
  /**
 * Dispatch a synthetic MouseEvent.
 *
 * @returns `undefined`
 * @private
 */
  var _fireMouseEvent = function(event) {
    if (!(event && typeof event.type === "string" && event)) {
      return;
    }
    var e, target = event.target || null, doc = target && target.ownerDocument || _document, defaults = {
      view: doc.defaultView || _window,
      canBubble: true,
      cancelable: true,
      detail: event.type === "click" ? 1 : 0,
      button: typeof event.which === "number" ? event.which - 1 : typeof event.button === "number" ? event.button : doc.createEvent ? 0 : 1
    }, args = _extend(defaults, event);
    if (!target) {
      return;
    }
    if (doc.createEvent && target.dispatchEvent) {
      args = [ args.type, args.canBubble, args.cancelable, args.view, args.detail, args.screenX, args.screenY, args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.button, args.relatedTarget ];
      e = doc.createEvent("MouseEvents");
      if (e.initMouseEvent) {
        e.initMouseEvent.apply(e, args);
        e._source = "js";
        target.dispatchEvent(e);
      }
    }
  };
  /**
 * Continuously poll the DOM until either:
 *  (a) the fallback content becomes visible, or
 *  (b) we receive an event from SWF (handled elsewhere)
 *
 * IMPORTANT:
 * This is NOT a necessary check but it can result in significantly faster
 * detection of bad `swfPath` configuration and/or network/server issues [in
 * supported browsers] than waiting for the entire `flashLoadTimeout` duration
 * to elapse before detecting that the SWF cannot be loaded. The detection
 * duration can be anywhere from 10-30 times faster [in supported browsers] by
 * using this approach.
 *
 * @returns `undefined`
 * @private
 */
  var _watchForSwfFallbackContent = function() {
    var maxWait = _globalConfig.flashLoadTimeout;
    if (typeof maxWait === "number" && maxWait >= 0) {
      var pollWait = Math.min(1e3, maxWait / 10);
      var fallbackContentId = _globalConfig.swfObjectId + "_fallbackContent";
      _swfFallbackCheckInterval = _setInterval(function() {
        var el = _document.getElementById(fallbackContentId);
        if (_isElementVisible(el)) {
          _clearTimeoutsAndPolling();
          _flashState.deactivated = null;
          ZeroClipboard.emit({
            type: "error",
            name: "swf-not-found"
          });
        }
      }, pollWait);
    }
  };
  /**
 * Create the HTML bridge element to embed the Flash object into.
 * @private
 */
  var _createHtmlBridge = function() {
    var container = _document.createElement("div");
    container.id = _globalConfig.containerId;
    container.className = _globalConfig.containerClass;
    container.style.position = "absolute";
    container.style.left = "0px";
    container.style.top = "-9999px";
    container.style.width = "1px";
    container.style.height = "1px";
    container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
    return container;
  };
  /**
 * Get the HTML element container that wraps the Flash bridge object/element.
 * @private
 */
  var _getHtmlBridge = function(flashBridge) {
    var htmlBridge = flashBridge && flashBridge.parentNode;
    while (htmlBridge && htmlBridge.nodeName === "OBJECT" && htmlBridge.parentNode) {
      htmlBridge = htmlBridge.parentNode;
    }
    return htmlBridge || null;
  };
  /**
 * Create the SWF object.
 *
 * @returns The SWF object reference.
 * @private
 */
  var _embedSwf = function() {
    var len, flashBridge = _flashState.bridge, container = _getHtmlBridge(flashBridge);
    if (!flashBridge) {
      var allowScriptAccess = _determineScriptAccess(_window.location.host, _globalConfig);
      var allowNetworking = allowScriptAccess === "never" ? "none" : "all";
      var flashvars = _vars(_extend({
        jsVersion: ZeroClipboard.version
      }, _globalConfig));
      var swfUrl = _globalConfig.swfPath + _cacheBust(_globalConfig.swfPath, _globalConfig);
      container = _createHtmlBridge();
      var divToBeReplaced = _document.createElement("div");
      container.appendChild(divToBeReplaced);
      _document.body.appendChild(container);
      var tmpDiv = _document.createElement("div");
      var usingActiveX = _flashState.pluginType === "activex";
      tmpDiv.innerHTML = '<object id="' + _globalConfig.swfObjectId + '" name="' + _globalConfig.swfObjectId + '" ' + 'width="100%" height="100%" ' + (usingActiveX ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + swfUrl + '"') + ">" + (usingActiveX ? '<param name="movie" value="' + swfUrl + '"/>' : "") + '<param name="allowScriptAccess" value="' + allowScriptAccess + '"/>' + '<param name="allowNetworking" value="' + allowNetworking + '"/>' + '<param name="menu" value="false"/>' + '<param name="wmode" value="transparent"/>' + '<param name="flashvars" value="' + flashvars + '"/>' + '<div id="' + _globalConfig.swfObjectId + '_fallbackContent">&nbsp;</div>' + "</object>";
      flashBridge = tmpDiv.firstChild;
      tmpDiv = null;
      _unwrap(flashBridge).ZeroClipboard = ZeroClipboard;
      container.replaceChild(flashBridge, divToBeReplaced);
      _watchForSwfFallbackContent();
    }
    if (!flashBridge) {
      flashBridge = _document[_globalConfig.swfObjectId];
      if (flashBridge && (len = flashBridge.length)) {
        flashBridge = flashBridge[len - 1];
      }
      if (!flashBridge && container) {
        flashBridge = container.firstChild;
      }
    }
    _flashState.bridge = flashBridge || null;
    return flashBridge;
  };
  /**
 * Destroy the SWF object.
 * @private
 */
  var _unembedSwf = function() {
    var flashBridge = _flashState.bridge;
    if (flashBridge) {
      var htmlBridge = _getHtmlBridge(flashBridge);
      if (htmlBridge) {
        if (_flashState.pluginType === "activex" && "readyState" in flashBridge) {
          flashBridge.style.display = "none";
          (function removeSwfFromIE() {
            if (flashBridge.readyState === 4) {
              for (var prop in flashBridge) {
                if (typeof flashBridge[prop] === "function") {
                  flashBridge[prop] = null;
                }
              }
              if (flashBridge.parentNode) {
                flashBridge.parentNode.removeChild(flashBridge);
              }
              if (htmlBridge.parentNode) {
                htmlBridge.parentNode.removeChild(htmlBridge);
              }
            } else {
              _setTimeout(removeSwfFromIE, 10);
            }
          })();
        } else {
          if (flashBridge.parentNode) {
            flashBridge.parentNode.removeChild(flashBridge);
          }
          if (htmlBridge.parentNode) {
            htmlBridge.parentNode.removeChild(htmlBridge);
          }
        }
      }
      _clearTimeoutsAndPolling();
      _flashState.ready = null;
      _flashState.bridge = null;
      _flashState.deactivated = null;
      _zcSwfVersion = undefined;
    }
  };
  /**
 * Map the data format names of the "clipData" to Flash-friendly names.
 *
 * @returns A new transformed object.
 * @private
 */
  var _mapClipDataToFlash = function(clipData) {
    var newClipData = {}, formatMap = {};
    if (!(typeof clipData === "object" && clipData)) {
      return;
    }
    for (var dataFormat in clipData) {
      if (dataFormat && _hasOwn.call(clipData, dataFormat) && typeof clipData[dataFormat] === "string" && clipData[dataFormat]) {
        switch (dataFormat.toLowerCase()) {
         case "text/plain":
         case "text":
         case "air:text":
         case "flash:text":
          newClipData.text = clipData[dataFormat];
          formatMap.text = dataFormat;
          break;

         case "text/html":
         case "html":
         case "air:html":
         case "flash:html":
          newClipData.html = clipData[dataFormat];
          formatMap.html = dataFormat;
          break;

         case "application/rtf":
         case "text/rtf":
         case "rtf":
         case "richtext":
         case "air:rtf":
         case "flash:rtf":
          newClipData.rtf = clipData[dataFormat];
          formatMap.rtf = dataFormat;
          break;

         default:
          break;
        }
      }
    }
    return {
      data: newClipData,
      formatMap: formatMap
    };
  };
  /**
 * Map the data format names from Flash-friendly names back to their original "clipData" names (via a format mapping).
 *
 * @returns A new transformed object.
 * @private
 */
  var _mapClipResultsFromFlash = function(clipResults, formatMap) {
    if (!(typeof clipResults === "object" && clipResults && typeof formatMap === "object" && formatMap)) {
      return clipResults;
    }
    var newResults = {};
    for (var prop in clipResults) {
      if (_hasOwn.call(clipResults, prop)) {
        if (prop === "errors") {
          newResults[prop] = clipResults[prop] ? clipResults[prop].slice() : [];
          for (var i = 0, len = newResults[prop].length; i < len; i++) {
            newResults[prop][i].format = formatMap[newResults[prop][i].format];
          }
        } else if (prop !== "success" && prop !== "data") {
          newResults[prop] = clipResults[prop];
        } else {
          newResults[prop] = {};
          var tmpHash = clipResults[prop];
          for (var dataFormat in tmpHash) {
            if (dataFormat && _hasOwn.call(tmpHash, dataFormat) && _hasOwn.call(formatMap, dataFormat)) {
              newResults[prop][formatMap[dataFormat]] = tmpHash[dataFormat];
            }
          }
        }
      }
    }
    return newResults;
  };
  /**
 * Will look at a path, and will create a "?noCache={time}" or "&noCache={time}"
 * query param string to return. Does NOT append that string to the original path.
 * This is useful because ExternalInterface often breaks when a Flash SWF is cached.
 *
 * @returns The `noCache` query param with necessary "?"/"&" prefix.
 * @private
 */
  var _cacheBust = function(path, options) {
    var cacheBust = options == null || options && options.cacheBust === true;
    if (cacheBust) {
      return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + _now();
    } else {
      return "";
    }
  };
  /**
 * Creates a query string for the FlashVars param.
 * Does NOT include the cache-busting query param.
 *
 * @returns FlashVars query string
 * @private
 */
  var _vars = function(options) {
    var i, len, domain, domains, str = "", trustedOriginsExpanded = [];
    if (options.trustedDomains) {
      if (typeof options.trustedDomains === "string") {
        domains = [ options.trustedDomains ];
      } else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
        domains = options.trustedDomains;
      }
    }
    if (domains && domains.length) {
      for (i = 0, len = domains.length; i < len; i++) {
        if (_hasOwn.call(domains, i) && domains[i] && typeof domains[i] === "string") {
          domain = _extractDomain(domains[i]);
          if (!domain) {
            continue;
          }
          if (domain === "*") {
            trustedOriginsExpanded.length = 0;
            trustedOriginsExpanded.push(domain);
            break;
          }
          trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [ domain, "//" + domain, _window.location.protocol + "//" + domain ]);
        }
      }
    }
    if (trustedOriginsExpanded.length) {
      str += "trustedOrigins=" + _encodeURIComponent(trustedOriginsExpanded.join(","));
    }
    if (options.forceEnhancedClipboard === true) {
      str += (str ? "&" : "") + "forceEnhancedClipboard=true";
    }
    if (typeof options.swfObjectId === "string" && options.swfObjectId) {
      str += (str ? "&" : "") + "swfObjectId=" + _encodeURIComponent(options.swfObjectId);
    }
    if (typeof options.jsVersion === "string" && options.jsVersion) {
      str += (str ? "&" : "") + "jsVersion=" + _encodeURIComponent(options.jsVersion);
    }
    return str;
  };
  /**
 * Extract the domain (e.g. "github.com") from an origin (e.g. "https://github.com") or
 * URL (e.g. "https://github.com/zeroclipboard/zeroclipboard/").
 *
 * @returns the domain
 * @private
 */
  var _extractDomain = function(originOrUrl) {
    if (originOrUrl == null || originOrUrl === "") {
      return null;
    }
    originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
    if (originOrUrl === "") {
      return null;
    }
    var protocolIndex = originOrUrl.indexOf("//");
    originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
    var pathIndex = originOrUrl.indexOf("/");
    originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl.slice(0, pathIndex);
    if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
      return null;
    }
    return originOrUrl || null;
  };
  /**
 * Set `allowScriptAccess` based on `trustedDomains` and `window.location.host` vs. `swfPath`.
 *
 * @returns The appropriate script access level.
 * @private
 */
  var _determineScriptAccess = function() {
    var _extractAllDomains = function(origins) {
      var i, len, tmp, resultsArray = [];
      if (typeof origins === "string") {
        origins = [ origins ];
      }
      if (!(typeof origins === "object" && origins && typeof origins.length === "number")) {
        return resultsArray;
      }
      for (i = 0, len = origins.length; i < len; i++) {
        if (_hasOwn.call(origins, i) && (tmp = _extractDomain(origins[i]))) {
          if (tmp === "*") {
            resultsArray.length = 0;
            resultsArray.push("*");
            break;
          }
          if (resultsArray.indexOf(tmp) === -1) {
            resultsArray.push(tmp);
          }
        }
      }
      return resultsArray;
    };
    return function(currentDomain, configOptions) {
      var swfDomain = _extractDomain(configOptions.swfPath);
      if (swfDomain === null) {
        swfDomain = currentDomain;
      }
      var trustedDomains = _extractAllDomains(configOptions.trustedDomains);
      var len = trustedDomains.length;
      if (len > 0) {
        if (len === 1 && trustedDomains[0] === "*") {
          return "always";
        }
        if (trustedDomains.indexOf(currentDomain) !== -1) {
          if (len === 1 && currentDomain === swfDomain) {
            return "sameDomain";
          }
          return "always";
        }
      }
      return "never";
    };
  }();
  /**
 * Get the currently active/focused DOM element.
 *
 * @returns the currently active/focused element, or `null`
 * @private
 */
  var _safeActiveElement = function() {
    try {
      return _document.activeElement;
    } catch (err) {
      return null;
    }
  };
  /**
 * Add a class to an element, if it doesn't already have it.
 *
 * @returns The element, with its new class added.
 * @private
 */
  var _addClass = function(element, value) {
    var c, cl, className, classNames = [];
    if (typeof value === "string" && value) {
      classNames = value.split(/\s+/);
    }
    if (element && element.nodeType === 1 && classNames.length > 0) {
      if (element.classList) {
        for (c = 0, cl = classNames.length; c < cl; c++) {
          element.classList.add(classNames[c]);
        }
      } else if (element.hasOwnProperty("className")) {
        className = " " + element.className + " ";
        for (c = 0, cl = classNames.length; c < cl; c++) {
          if (className.indexOf(" " + classNames[c] + " ") === -1) {
            className += classNames[c] + " ";
          }
        }
        element.className = className.replace(/^\s+|\s+$/g, "");
      }
    }
    return element;
  };
  /**
 * Remove a class from an element, if it has it.
 *
 * @returns The element, with its class removed.
 * @private
 */
  var _removeClass = function(element, value) {
    var c, cl, className, classNames = [];
    if (typeof value === "string" && value) {
      classNames = value.split(/\s+/);
    }
    if (element && element.nodeType === 1 && classNames.length > 0) {
      if (element.classList && element.classList.length > 0) {
        for (c = 0, cl = classNames.length; c < cl; c++) {
          element.classList.remove(classNames[c]);
        }
      } else if (element.className) {
        className = (" " + element.className + " ").replace(/[\r\n\t]/g, " ");
        for (c = 0, cl = classNames.length; c < cl; c++) {
          className = className.replace(" " + classNames[c] + " ", " ");
        }
        element.className = className.replace(/^\s+|\s+$/g, "");
      }
    }
    return element;
  };
  /**
 * Attempt to interpret the element's CSS styling. If `prop` is `"cursor"`,
 * then we assume that it should be a hand ("pointer") cursor if the element
 * is an anchor element ("a" tag).
 *
 * @returns The computed style property.
 * @private
 */
  var _getStyle = function(el, prop) {
    var value = _getComputedStyle(el, null).getPropertyValue(prop);
    if (prop === "cursor") {
      if (!value || value === "auto") {
        if (el.nodeName === "A") {
          return "pointer";
        }
      }
    }
    return value;
  };
  /**
 * Get the absolutely positioned coordinates of a DOM element.
 *
 * @returns Object containing the element's position, width, and height.
 * @private
 */
  var _getElementPosition = function(el) {
    var pos = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    if (el.getBoundingClientRect) {
      var elRect = el.getBoundingClientRect();
      var pageXOffset = _window.pageXOffset;
      var pageYOffset = _window.pageYOffset;
      var leftBorderWidth = _document.documentElement.clientLeft || 0;
      var topBorderWidth = _document.documentElement.clientTop || 0;
      var leftBodyOffset = 0;
      var topBodyOffset = 0;
      if (_getStyle(_document.body, "position") === "relative") {
        var bodyRect = _document.body.getBoundingClientRect();
        var htmlRect = _document.documentElement.getBoundingClientRect();
        leftBodyOffset = bodyRect.left - htmlRect.left || 0;
        topBodyOffset = bodyRect.top - htmlRect.top || 0;
      }
      pos.left = elRect.left + pageXOffset - leftBorderWidth - leftBodyOffset;
      pos.top = elRect.top + pageYOffset - topBorderWidth - topBodyOffset;
      pos.width = "width" in elRect ? elRect.width : elRect.right - elRect.left;
      pos.height = "height" in elRect ? elRect.height : elRect.bottom - elRect.top;
    }
    return pos;
  };
  /**
 * Determine is an element is visible somewhere within the document (page).
 *
 * @returns Boolean
 * @private
 */
  var _isElementVisible = function(el) {
    if (!el) {
      return false;
    }
    var styles = _getComputedStyle(el, null);
    var hasCssHeight = _parseFloat(styles.height) > 0;
    var hasCssWidth = _parseFloat(styles.width) > 0;
    var hasCssTop = _parseFloat(styles.top) >= 0;
    var hasCssLeft = _parseFloat(styles.left) >= 0;
    var cssKnows = hasCssHeight && hasCssWidth && hasCssTop && hasCssLeft;
    var rect = cssKnows ? null : _getElementPosition(el);
    var isVisible = styles.display !== "none" && styles.visibility !== "collapse" && (cssKnows || !!rect && (hasCssHeight || rect.height > 0) && (hasCssWidth || rect.width > 0) && (hasCssTop || rect.top >= 0) && (hasCssLeft || rect.left >= 0));
    return isVisible;
  };
  /**
 * Clear all existing timeouts and interval polling delegates.
 *
 * @returns `undefined`
 * @private
 */
  var _clearTimeoutsAndPolling = function() {
    _clearTimeout(_flashCheckTimeout);
    _flashCheckTimeout = 0;
    _clearInterval(_swfFallbackCheckInterval);
    _swfFallbackCheckInterval = 0;
  };
  /**
 * Reposition the Flash object to cover the currently activated element.
 *
 * @returns `undefined`
 * @private
 */
  var _reposition = function() {
    var htmlBridge;
    if (_currentElement && (htmlBridge = _getHtmlBridge(_flashState.bridge))) {
      var pos = _getElementPosition(_currentElement);
      _extend(htmlBridge.style, {
        width: pos.width + "px",
        height: pos.height + "px",
        top: pos.top + "px",
        left: pos.left + "px",
        zIndex: "" + _getSafeZIndex(_globalConfig.zIndex)
      });
    }
  };
  /**
 * Sends a signal to the Flash object to display the hand cursor if `true`.
 *
 * @returns `undefined`
 * @private
 */
  var _setHandCursor = function(enabled) {
    if (_flashState.ready === true) {
      if (_flashState.bridge && typeof _flashState.bridge.setHandCursor === "function") {
        _flashState.bridge.setHandCursor(enabled);
      } else {
        _flashState.ready = false;
      }
    }
  };
  /**
 * Get a safe value for `zIndex`
 *
 * @returns an integer, or "auto"
 * @private
 */
  var _getSafeZIndex = function(val) {
    if (/^(?:auto|inherit)$/.test(val)) {
      return val;
    }
    var zIndex;
    if (typeof val === "number" && !_isNaN(val)) {
      zIndex = val;
    } else if (typeof val === "string") {
      zIndex = _getSafeZIndex(_parseInt(val, 10));
    }
    return typeof zIndex === "number" ? zIndex : "auto";
  };
  /**
 * Attempt to detect if ZeroClipboard is executing inside of a sandboxed iframe.
 * If it is, Flash Player cannot be used, so ZeroClipboard is dead in the water.
 *
 * @see {@link http://lists.w3.org/Archives/Public/public-whatwg-archive/2014Dec/0002.html}
 * @see {@link https://github.com/zeroclipboard/zeroclipboard/issues/511}
 * @see {@link http://zeroclipboard.org/test-iframes.html}
 *
 * @returns `true` (is sandboxed), `false` (is not sandboxed), or `null` (uncertain) 
 * @private
 */
  var _detectSandbox = function(doNotReassessFlashSupport) {
    var effectiveScriptOrigin, frame, frameError, previousState = _flashState.sandboxed, isSandboxed = null;
    doNotReassessFlashSupport = doNotReassessFlashSupport === true;
    if (_pageIsFramed === false) {
      isSandboxed = false;
    } else {
      try {
        frame = window.frameElement || null;
      } catch (e) {
        frameError = {
          name: e.name,
          message: e.message
        };
      }
      if (frame && frame.nodeType === 1 && frame.nodeName === "IFRAME") {
        try {
          isSandboxed = frame.hasAttribute("sandbox");
        } catch (e) {
          isSandboxed = null;
        }
      } else {
        try {
          effectiveScriptOrigin = document.domain || null;
        } catch (e) {
          effectiveScriptOrigin = null;
        }
        if (effectiveScriptOrigin === null || frameError && frameError.name === "SecurityError" && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(frameError.message.toLowerCase())) {
          isSandboxed = true;
        }
      }
    }
    _flashState.sandboxed = isSandboxed;
    if (previousState !== isSandboxed && !doNotReassessFlashSupport) {
      _detectFlashSupport(_ActiveXObject);
    }
    return isSandboxed;
  };
  /**
 * Detect the Flash Player status, version, and plugin type.
 *
 * @see {@link https://code.google.com/p/doctype-mirror/wiki/ArticleDetectFlash#The_code}
 * @see {@link http://stackoverflow.com/questions/12866060/detecting-pepper-ppapi-flash-with-javascript}
 *
 * @returns `undefined`
 * @private
 */
  var _detectFlashSupport = function(ActiveXObject) {
    var plugin, ax, mimeType, hasFlash = false, isActiveX = false, isPPAPI = false, flashVersion = "";
    /**
   * Derived from Apple's suggested sniffer.
   * @param {String} desc e.g. "Shockwave Flash 7.0 r61"
   * @returns {String} "7.0.61"
   * @private
   */
    function parseFlashVersion(desc) {
      var matches = desc.match(/[\d]+/g);
      matches.length = 3;
      return matches.join(".");
    }
    function isPepperFlash(flashPlayerFileName) {
      return !!flashPlayerFileName && (flashPlayerFileName = flashPlayerFileName.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(flashPlayerFileName) || flashPlayerFileName.slice(-13) === "chrome.plugin");
    }
    function inspectPlugin(plugin) {
      if (plugin) {
        hasFlash = true;
        if (plugin.version) {
          flashVersion = parseFlashVersion(plugin.version);
        }
        if (!flashVersion && plugin.description) {
          flashVersion = parseFlashVersion(plugin.description);
        }
        if (plugin.filename) {
          isPPAPI = isPepperFlash(plugin.filename);
        }
      }
    }
    if (_navigator.plugins && _navigator.plugins.length) {
      plugin = _navigator.plugins["Shockwave Flash"];
      inspectPlugin(plugin);
      if (_navigator.plugins["Shockwave Flash 2.0"]) {
        hasFlash = true;
        flashVersion = "2.0.0.11";
      }
    } else if (_navigator.mimeTypes && _navigator.mimeTypes.length) {
      mimeType = _navigator.mimeTypes["application/x-shockwave-flash"];
      plugin = mimeType && mimeType.enabledPlugin;
      inspectPlugin(plugin);
    } else if (typeof ActiveXObject !== "undefined") {
      isActiveX = true;
      try {
        ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        hasFlash = true;
        flashVersion = parseFlashVersion(ax.GetVariable("$version"));
      } catch (e1) {
        try {
          ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
          hasFlash = true;
          flashVersion = "6.0.21";
        } catch (e2) {
          try {
            ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            hasFlash = true;
            flashVersion = parseFlashVersion(ax.GetVariable("$version"));
          } catch (e3) {
            isActiveX = false;
          }
        }
      }
    }
    _flashState.disabled = hasFlash !== true;
    _flashState.outdated = flashVersion && _parseFloat(flashVersion) < _parseFloat(_minimumFlashVersion);
    _flashState.version = flashVersion || "0.0.0";
    _flashState.pluginType = isPPAPI ? "pepper" : isActiveX ? "activex" : hasFlash ? "netscape" : "unknown";
  };
  /**
 * Invoke the Flash detection algorithms immediately upon inclusion so we're not waiting later.
 */
  _detectFlashSupport(_ActiveXObject);
  /**
 * Always assess the `sandboxed` state of the page at important Flash-related moments.
 */
  _detectSandbox(true);
  /**
 * A shell constructor for `ZeroClipboard` client instances.
 *
 * @constructor
 */
  var ZeroClipboard = function() {
    if (!(this instanceof ZeroClipboard)) {
      return new ZeroClipboard();
    }
    if (typeof ZeroClipboard._createClient === "function") {
      ZeroClipboard._createClient.apply(this, _args(arguments));
    }
  };
  /**
 * The ZeroClipboard library's version number.
 *
 * @static
 * @readonly
 * @property {string}
 */
  _defineProperty(ZeroClipboard, "version", {
    value: "2.2.0",
    writable: false,
    configurable: true,
    enumerable: true
  });
  /**
 * Update or get a copy of the ZeroClipboard global configuration.
 * Returns a copy of the current/updated configuration.
 *
 * @returns Object
 * @static
 */
  ZeroClipboard.config = function() {
    return _config.apply(this, _args(arguments));
  };
  /**
 * Diagnostic method that describes the state of the browser, Flash Player, and ZeroClipboard.
 *
 * @returns Object
 * @static
 */
  ZeroClipboard.state = function() {
    return _state.apply(this, _args(arguments));
  };
  /**
 * Check if Flash is unusable for any reason: disabled, outdated, deactivated, etc.
 *
 * @returns Boolean
 * @static
 */
  ZeroClipboard.isFlashUnusable = function() {
    return _isFlashUnusable.apply(this, _args(arguments));
  };
  /**
 * Register an event listener.
 *
 * @returns `ZeroClipboard`
 * @static
 */
  ZeroClipboard.on = function() {
    return _on.apply(this, _args(arguments));
  };
  /**
 * Unregister an event listener.
 * If no `listener` function/object is provided, it will unregister all listeners for the provided `eventType`.
 * If no `eventType` is provided, it will unregister all listeners for every event type.
 *
 * @returns `ZeroClipboard`
 * @static
 */
  ZeroClipboard.off = function() {
    return _off.apply(this, _args(arguments));
  };
  /**
 * Retrieve event listeners for an `eventType`.
 * If no `eventType` is provided, it will retrieve all listeners for every event type.
 *
 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
 */
  ZeroClipboard.handlers = function() {
    return _listeners.apply(this, _args(arguments));
  };
  /**
 * Event emission receiver from the Flash object, forwarding to any registered JavaScript event listeners.
 *
 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
 * @static
 */
  ZeroClipboard.emit = function() {
    return _emit.apply(this, _args(arguments));
  };
  /**
 * Create and embed the Flash object.
 *
 * @returns The Flash object
 * @static
 */
  ZeroClipboard.create = function() {
    return _create.apply(this, _args(arguments));
  };
  /**
 * Self-destruct and clean up everything, including the embedded Flash object.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.destroy = function() {
    return _destroy.apply(this, _args(arguments));
  };
  /**
 * Set the pending data for clipboard injection.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.setData = function() {
    return _setData.apply(this, _args(arguments));
  };
  /**
 * Clear the pending data for clipboard injection.
 * If no `format` is provided, all pending data formats will be cleared.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.clearData = function() {
    return _clearData.apply(this, _args(arguments));
  };
  /**
 * Get a copy of the pending data for clipboard injection.
 * If no `format` is provided, a copy of ALL pending data formats will be returned.
 *
 * @returns `String` or `Object`
 * @static
 */
  ZeroClipboard.getData = function() {
    return _getData.apply(this, _args(arguments));
  };
  /**
 * Sets the current HTML object that the Flash object should overlay. This will put the global
 * Flash object on top of the current element; depending on the setup, this may also set the
 * pending clipboard text data as well as the Flash object's wrapping element's title attribute
 * based on the underlying HTML element and ZeroClipboard configuration.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.focus = ZeroClipboard.activate = function() {
    return _focus.apply(this, _args(arguments));
  };
  /**
 * Un-overlays the Flash object. This will put the global Flash object off-screen; depending on
 * the setup, this may also unset the Flash object's wrapping element's title attribute based on
 * the underlying HTML element and ZeroClipboard configuration.
 *
 * @returns `undefined`
 * @static
 */
  ZeroClipboard.blur = ZeroClipboard.deactivate = function() {
    return _blur.apply(this, _args(arguments));
  };
  /**
 * Returns the currently focused/"activated" HTML element that the Flash object is wrapping.
 *
 * @returns `HTMLElement` or `null`
 * @static
 */
  ZeroClipboard.activeElement = function() {
    return _activeElement.apply(this, _args(arguments));
  };
  /**
 * Keep track of the ZeroClipboard client instance counter.
 */
  var _clientIdCounter = 0;
  /**
 * Keep track of the state of the client instances.
 *
 * Entry structure:
 *   _clientMeta[client.id] = {
 *     instance: client,
 *     elements: [],
 *     handlers: {}
 *   };
 */
  var _clientMeta = {};
  /**
 * Keep track of the ZeroClipboard clipped elements counter.
 */
  var _elementIdCounter = 0;
  /**
 * Keep track of the state of the clipped element relationships to clients.
 *
 * Entry structure:
 *   _elementMeta[element.zcClippingId] = [client1.id, client2.id];
 */
  var _elementMeta = {};
  /**
 * Keep track of the state of the mouse event handlers for clipped elements.
 *
 * Entry structure:
 *   _mouseHandlers[element.zcClippingId] = {
 *     mouseover:  function(event) {},
 *     mouseout:   function(event) {},
 *     mouseenter: function(event) {},
 *     mouseleave: function(event) {},
 *     mousemove:  function(event) {}
 *   };
 */
  var _mouseHandlers = {};
  /**
 * Extending the ZeroClipboard configuration defaults for the Client module.
 */
  _extend(_globalConfig, {
    autoActivate: true
  });
  /**
 * The real constructor for `ZeroClipboard` client instances.
 * @private
 */
  var _clientConstructor = function(elements) {
    var client = this;
    client.id = "" + _clientIdCounter++;
    _clientMeta[client.id] = {
      instance: client,
      elements: [],
      handlers: {}
    };
    if (elements) {
      client.clip(elements);
    }
    ZeroClipboard.on("*", function(event) {
      return client.emit(event);
    });
    ZeroClipboard.on("destroy", function() {
      client.destroy();
    });
    ZeroClipboard.create();
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.on`.
 * @private
 */
  var _clientOn = function(eventType, listener) {
    var i, len, events, added = {}, meta = _clientMeta[this.id], handlers = meta && meta.handlers;
    if (!meta) {
      throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
    }
    if (typeof eventType === "string" && eventType) {
      events = eventType.toLowerCase().split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          this.on(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].replace(/^on/, "");
        added[eventType] = true;
        if (!handlers[eventType]) {
          handlers[eventType] = [];
        }
        handlers[eventType].push(listener);
      }
      if (added.ready && _flashState.ready) {
        this.emit({
          type: "ready",
          client: this
        });
      }
      if (added.error) {
        for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
          if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")]) {
            this.emit({
              type: "error",
              name: _flashStateErrorNames[i],
              client: this
            });
            break;
          }
        }
        if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
          this.emit({
            type: "error",
            name: "version-mismatch",
            jsVersion: ZeroClipboard.version,
            swfVersion: _zcSwfVersion
          });
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.off`.
 * @private
 */
  var _clientOff = function(eventType, listener) {
    var i, len, foundIndex, events, perEventHandlers, meta = _clientMeta[this.id], handlers = meta && meta.handlers;
    if (!handlers) {
      return this;
    }
    if (arguments.length === 0) {
      events = _keys(handlers);
    } else if (typeof eventType === "string" && eventType) {
      events = eventType.split(/\s+/);
    } else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
      for (i in eventType) {
        if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
          this.off(i, eventType[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventType = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = handlers[eventType];
        if (perEventHandlers && perEventHandlers.length) {
          if (listener) {
            foundIndex = perEventHandlers.indexOf(listener);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = perEventHandlers.indexOf(listener, foundIndex);
            }
          } else {
            perEventHandlers.length = 0;
          }
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.handlers`.
 * @private
 */
  var _clientListeners = function(eventType) {
    var copy = null, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (handlers) {
      if (typeof eventType === "string" && eventType) {
        copy = handlers[eventType] ? handlers[eventType].slice(0) : [];
      } else {
        copy = _deepCopy(handlers);
      }
    }
    return copy;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.emit`.
 * @private
 */
  var _clientEmit = function(event) {
    if (_clientShouldEmit.call(this, event)) {
      if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
        event = _extend({}, event);
      }
      var eventCopy = _extend({}, _createEvent(event), {
        client: this
      });
      _clientDispatchCallbacks.call(this, eventCopy);
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.clip`.
 * @private
 */
  var _clientClip = function(elements) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
    }
    elements = _prepClip(elements);
    for (var i = 0; i < elements.length; i++) {
      if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
        if (!elements[i].zcClippingId) {
          elements[i].zcClippingId = "zcClippingId_" + _elementIdCounter++;
          _elementMeta[elements[i].zcClippingId] = [ this.id ];
          if (_globalConfig.autoActivate === true) {
            _addMouseHandlers(elements[i]);
          }
        } else if (_elementMeta[elements[i].zcClippingId].indexOf(this.id) === -1) {
          _elementMeta[elements[i].zcClippingId].push(this.id);
        }
        var clippedElements = _clientMeta[this.id] && _clientMeta[this.id].elements;
        if (clippedElements.indexOf(elements[i]) === -1) {
          clippedElements.push(elements[i]);
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.unclip`.
 * @private
 */
  var _clientUnclip = function(elements) {
    var meta = _clientMeta[this.id];
    if (!meta) {
      return this;
    }
    var clippedElements = meta.elements;
    var arrayIndex;
    if (typeof elements === "undefined") {
      elements = clippedElements.slice(0);
    } else {
      elements = _prepClip(elements);
    }
    for (var i = elements.length; i--; ) {
      if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
        arrayIndex = 0;
        while ((arrayIndex = clippedElements.indexOf(elements[i], arrayIndex)) !== -1) {
          clippedElements.splice(arrayIndex, 1);
        }
        var clientIds = _elementMeta[elements[i].zcClippingId];
        if (clientIds) {
          arrayIndex = 0;
          while ((arrayIndex = clientIds.indexOf(this.id, arrayIndex)) !== -1) {
            clientIds.splice(arrayIndex, 1);
          }
          if (clientIds.length === 0) {
            if (_globalConfig.autoActivate === true) {
              _removeMouseHandlers(elements[i]);
            }
            delete elements[i].zcClippingId;
          }
        }
      }
    }
    return this;
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.elements`.
 * @private
 */
  var _clientElements = function() {
    var meta = _clientMeta[this.id];
    return meta && meta.elements ? meta.elements.slice(0) : [];
  };
  /**
 * The underlying implementation of `ZeroClipboard.Client.prototype.destroy`.
 * @private
 */
  var _clientDestroy = function() {
    if (!_clientMeta[this.id]) {
      return;
    }
    this.unclip();
    this.off();
    delete _clientMeta[this.id];
  };
  /**
 * Inspect an Event to see if the Client (`this`) should honor it for emission.
 * @private
 */
  var _clientShouldEmit = function(event) {
    if (!(event && event.type)) {
      return false;
    }
    if (event.client && event.client !== this) {
      return false;
    }
    var meta = _clientMeta[this.id];
    var clippedEls = meta && meta.elements;
    var hasClippedEls = !!clippedEls && clippedEls.length > 0;
    var goodTarget = !event.target || hasClippedEls && clippedEls.indexOf(event.target) !== -1;
    var goodRelTarget = event.relatedTarget && hasClippedEls && clippedEls.indexOf(event.relatedTarget) !== -1;
    var goodClient = event.client && event.client === this;
    if (!meta || !(goodTarget || goodRelTarget || goodClient)) {
      return false;
    }
    return true;
  };
  /**
 * Handle the actual dispatching of events to a client instance.
 *
 * @returns `undefined`
 * @private
 */
  var _clientDispatchCallbacks = function(event) {
    var meta = _clientMeta[this.id];
    if (!(typeof event === "object" && event && event.type && meta)) {
      return;
    }
    var async = _shouldPerformAsync(event);
    var wildcardTypeHandlers = meta && meta.handlers["*"] || [];
    var specificTypeHandlers = meta && meta.handlers[event.type] || [];
    var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
    if (handlers && handlers.length) {
      var i, len, func, context, eventCopy, originalContext = this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof _window[func] === "function") {
          func = _window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          eventCopy = _extend({}, event);
          _dispatchCallback(func, context, [ eventCopy ], async);
        }
      }
    }
  };
  /**
 * Prepares the elements for clipping/unclipping.
 *
 * @returns An Array of elements.
 * @private
 */
  var _prepClip = function(elements) {
    if (typeof elements === "string") {
      elements = [];
    }
    return typeof elements.length !== "number" ? [ elements ] : elements;
  };
  /**
 * Add a `mouseover` handler function for a clipped element.
 *
 * @returns `undefined`
 * @private
 */
  var _addMouseHandlers = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    var _suppressMouseEvents = function(event) {
      if (!(event || (event = _window.event))) {
        return;
      }
      if (event._source !== "js") {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
      delete event._source;
    };
    var _elementMouseOver = function(event) {
      if (!(event || (event = _window.event))) {
        return;
      }
      _suppressMouseEvents(event);
      ZeroClipboard.focus(element);
    };
    element.addEventListener("mouseover", _elementMouseOver, false);
    element.addEventListener("mouseout", _suppressMouseEvents, false);
    element.addEventListener("mouseenter", _suppressMouseEvents, false);
    element.addEventListener("mouseleave", _suppressMouseEvents, false);
    element.addEventListener("mousemove", _suppressMouseEvents, false);
    _mouseHandlers[element.zcClippingId] = {
      mouseover: _elementMouseOver,
      mouseout: _suppressMouseEvents,
      mouseenter: _suppressMouseEvents,
      mouseleave: _suppressMouseEvents,
      mousemove: _suppressMouseEvents
    };
  };
  /**
 * Remove a `mouseover` handler function for a clipped element.
 *
 * @returns `undefined`
 * @private
 */
  var _removeMouseHandlers = function(element) {
    if (!(element && element.nodeType === 1)) {
      return;
    }
    var mouseHandlers = _mouseHandlers[element.zcClippingId];
    if (!(typeof mouseHandlers === "object" && mouseHandlers)) {
      return;
    }
    var key, val, mouseEvents = [ "move", "leave", "enter", "out", "over" ];
    for (var i = 0, len = mouseEvents.length; i < len; i++) {
      key = "mouse" + mouseEvents[i];
      val = mouseHandlers[key];
      if (typeof val === "function") {
        element.removeEventListener(key, val, false);
      }
    }
    delete _mouseHandlers[element.zcClippingId];
  };
  /**
 * Creates a new ZeroClipboard client instance.
 * Optionally, auto-`clip` an element or collection of elements.
 *
 * @constructor
 */
  ZeroClipboard._createClient = function() {
    _clientConstructor.apply(this, _args(arguments));
  };
  /**
 * Register an event listener to the client.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.on = function() {
    return _clientOn.apply(this, _args(arguments));
  };
  /**
 * Unregister an event handler from the client.
 * If no `listener` function/object is provided, it will unregister all handlers for the provided `eventType`.
 * If no `eventType` is provided, it will unregister all handlers for every event type.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.off = function() {
    return _clientOff.apply(this, _args(arguments));
  };
  /**
 * Retrieve event listeners for an `eventType` from the client.
 * If no `eventType` is provided, it will retrieve all listeners for every event type.
 *
 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
 */
  ZeroClipboard.prototype.handlers = function() {
    return _clientListeners.apply(this, _args(arguments));
  };
  /**
 * Event emission receiver from the Flash object for this client's registered JavaScript event listeners.
 *
 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
 */
  ZeroClipboard.prototype.emit = function() {
    return _clientEmit.apply(this, _args(arguments));
  };
  /**
 * Register clipboard actions for new element(s) to the client.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.clip = function() {
    return _clientClip.apply(this, _args(arguments));
  };
  /**
 * Unregister the clipboard actions of previously registered element(s) on the page.
 * If no elements are provided, ALL registered elements will be unregistered.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.unclip = function() {
    return _clientUnclip.apply(this, _args(arguments));
  };
  /**
 * Get all of the elements to which this client is clipped.
 *
 * @returns array of clipped elements
 */
  ZeroClipboard.prototype.elements = function() {
    return _clientElements.apply(this, _args(arguments));
  };
  /**
 * Self-destruct and clean up everything for a single client.
 * This will NOT destroy the embedded Flash object.
 *
 * @returns `undefined`
 */
  ZeroClipboard.prototype.destroy = function() {
    return _clientDestroy.apply(this, _args(arguments));
  };
  /**
 * Stores the pending plain text to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setText = function(text) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData("text/plain", text);
    return this;
  };
  /**
 * Stores the pending HTML text to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setHtml = function(html) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData("text/html", html);
    return this;
  };
  /**
 * Stores the pending rich text (RTF) to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setRichText = function(richText) {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData("application/rtf", richText);
    return this;
  };
  /**
 * Stores the pending data to inject into the clipboard.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.setData = function() {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.setData.apply(this, _args(arguments));
    return this;
  };
  /**
 * Clears the pending data to inject into the clipboard.
 * If no `format` is provided, all pending data formats will be cleared.
 *
 * @returns `this`
 */
  ZeroClipboard.prototype.clearData = function() {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    ZeroClipboard.clearData.apply(this, _args(arguments));
    return this;
  };
  /**
 * Gets a copy of the pending data to inject into the clipboard.
 * If no `format` is provided, a copy of ALL pending data formats will be returned.
 *
 * @returns `String` or `Object`
 */
  ZeroClipboard.prototype.getData = function() {
    if (!_clientMeta[this.id]) {
      throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
    }
    return ZeroClipboard.getData.apply(this, _args(arguments));
  };
  if (typeof define === "function" && define.amd) {
    define('lib/zero-clipboard/dist/ZeroClipboard',[],function() {
      return ZeroClipboard;
    });
  } else if (typeof module === "object" && module && typeof module.exports === "object" && module.exports) {
    module.exports = ZeroClipboard;
  } else {
    window.ZeroClipboard = ZeroClipboard;
  }
})(function() {
  return this || window;
}());
define('storymaps/common/ui/share/ShareURLPanel',[
  'lib-build/tpl!./ShareURLPanel',
  'lib-build/css!./ShareURLPanel',
  '../../utils/SocialSharing',
  'dojo/has',
  'lib/zero-clipboard/dist/ZeroClipboard'
], function(
  viewTpl,
  viewCss,
  SocialSharing,
  has,
  ZeroClipboard
) {
  return function ShareURLPanel(container) {
    container.append(viewTpl({ }));

    var _linkField = container.find('.bitlylink'),
        _url = null;

    initEvents();

    this.present = function(url) {
      _url = SocialSharing.cleanURL(url, true);

      buildShortLink(url);

      container.find('.btn-bitlylink-open').html(i18n.viewer.shareFromCommon.open);

      // Touch device don't likely have flash...
      container.find('.share-url-container').toggleClass('touch', !! has('touch'));
      container.find('.share-btn').attr('title', i18n.viewer.shareFromCommon.copy);
      container.find('.share-status').html(i18n.viewer.shareFromCommon.copied);
    };

    this.focus = function() {
      _linkField.select();
    };

    this.setAutoplay = function(isAutoplay) {
      var url = _url;

      if (isAutoplay) {
        url += url.match(/\?/) ? '&' : '?';
        url += 'autoplay';
      }

      buildShortLink(url);
    };

    function buildShortLink(url) {
      _linkField.val(url);
      container.find('.btn-bitlylink-open').attr('href', url);

      SocialSharing.requestBitly(url).then(function(shortURL) {
        _linkField.val(shortURL).select();
      });

      //
      // Copy button
      //

      var swfPath = 'resources/lib/zero-clipboard/ZeroClipboard.swf';
      if (! app.isProduction) {
        swfPath = 'lib/zero-clipboard/dist/ZeroClipboard.swf';
      }
      ZeroClipboard.config({ swfPath: swfPath  });
      var bitLyCopy = new ZeroClipboard(container.find('.share-btn'));

      bitLyCopy.on('copy', function(event) {
        var clipboard = event.clipboardData;
        clipboard.setData('text/plain', container.find('.bitlylink').val());
        container.find('.share-btn').removeClass('glyphicon-copy').addClass('glyphicon-ok');
        container.find('.share-status').show();
        container.find('.bitlylink')[0].selectionStart = container.find('.bitlylink')[0].selectionEnd = -1;

        container.find('.bitlylink').focus();

        setTimeout(function() {
          container.find('.share-btn').addClass('glyphicon-copy').removeClass('glyphicon-ok');
          container.find('.share-status').hide();
        }, 2000);
      });
    }

    function initEvents() {
      container.find('.bitlylink').click(function() {
        this.setSelectionRange(0, this.value.length);
      });
    }
  };
});


define('lib-build/tpl!storymaps/common/ui/share/ShareEmbedPanel', [],function () { return function(obj){obj||(obj={});var __t,__p='',__e=_.escape;with(obj){__p+='<div class="share-embed-container">\r\n\t<div class="embed-explain"></div>\r\n\r\n\t<div class="share-embed-wrapper">\r\n\t\t<div class="share-btn glyphicon glyphicon-copy"></div>\t\r\n\t\t<textarea class="form-control embedTextarea" readonly="true"></textarea>\r\n\t</div>\r\n\t<div class="share-status-wrapper"><span class="share-status"></span></div>\r\n\r\n\t<div>\r\n\t\t<span class="embed-lbl-size"></span>\r\n\t\t<div class="btn-group">\r\n\t\t\t<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">\r\n\t\t\t\t<span class="embed-sizes-btn"></span>&nbsp;<span class="caret"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class="dropdown-menu embed-sizes" role="menu"></ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n';}return __p}; });


define('lib-build/css!storymaps/common/ui/share/ShareEmbedPanel',[],function(){});
define('storymaps/common/ui/share/ShareEmbedPanel',[
  'lib-build/tpl!./ShareEmbedPanel',
  'lib-build/css!./ShareEmbedPanel',
  'dojo/has',
  'lib/zero-clipboard/dist/ZeroClipboard'
], function(
  viewTpl,
  viewCss,
  has,
  ZeroClipboard
) {
  return function ShareEmbedPanel(container) {
    var EMBED_TPL  = '<iframe width="%WIDTH%" height="%HEIGHT%" src="%URL%" frameborder="0" scrolling="no"></iframe>',
        EMBED_SIZE = [
          {
            width: '100%',
            height: '800px'
          },
          {
            width: '100%',
            height: '640px'
          },
          {
            width: '800px',
            height: '600px'
          },
          {
            width: '640px',
            height: '480px'
          }
        ],
        _url = null,
        _urlBackup = null;

    container.append(viewTpl({ }));

    buildEmbedSizeList();

    initEvents();

    this.present = function(url) {
      _url = url;
      _urlBackup = url;

      container.find('.embed-explain').html(i18n.viewer.shareFromCommon.embedExplain);
      container.find('.embed-lbl-size').html(i18n.viewer.shareFromCommon.size);

      container.find('.embed-sizes a').eq(0).click();

      // Touch device don't likely have flash...
      container.find('.share-embed-wrapper').toggleClass('touch', !! has('touch'));
      container.find('.share-clipboard').attr('title', i18n.viewer.shareFromCommon.copy);
      container.find('.share-status').html(i18n.viewer.shareFromCommon.copied);
    };

    this.setAutoplay = function(isAutoplay) {
      var url = _urlBackup;

      if (isAutoplay) {
        url += url.match(/\?/) ? '&' : '?';
        url += 'autoplay';
      }

      _url = url;
      
      container.find('.embed-sizes a').eq(0).click();
    };

    function buildEmbedSizeList() {
      $.each(EMBED_SIZE, function(i, size) {
        container.find('.embed-sizes').append('<li><a data-width="' + size.width + '" data-height="' + size.height + '">' + size.width + ' / ' + size.height + '</a></li>');
      });

      container.find('.embed-sizes a').click(function() {
        var $this = $(this);

        $this.parents('.btn-group').find('.embed-sizes-btn').text($this.text());
        setEmbed($this.data('width'), $this.data('height'));
      });
    }

    function setEmbed(width, height) {
      container.find('.embedTextarea').val(
        EMBED_TPL
          .replace('%URL%', _url)
          .replace('%WIDTH%', width)
          .replace('%HEIGHT%', height)
      );

      //
      // Copy button
      //

      var swfPath = 'resources/lib/zero-clipboard/ZeroClipboard.swf';
      if (! app.isProduction) {
        swfPath = 'lib/zero-clipboard/dist/ZeroClipboard.swf';
      }
      ZeroClipboard.config({ swfPath: swfPath  });
      var bitLyCopy = new ZeroClipboard(container.find('.share-btn'));

      bitLyCopy.on('copy', function(event) {
        var clipboard = event.clipboardData;
        clipboard.setData('text/plain', container.find('.embedTextarea').val());
        container.find('.share-btn').removeClass('glyphicon-copy').addClass('glyphicon-ok');
        container.find('.share-status').show();
        container.find('.embedTextarea')[0].selectionStart = container.find('.embedTextarea')[0].selectionEnd = -1;

        container.find('.bitlylink').focus();

        setTimeout(function() {
          container.find('.share-btn').addClass('glyphicon-copy').removeClass('glyphicon-ok');
          container.find('.share-status').hide();
        }, 2000);
      });
    }

    function initEvents() {
      container.find('.embedTextarea').click(function() {
        this.setSelectionRange(0, this.value.length);
      });
    }
  };
});

define('storymaps/common/ui/share/ShareDialog',[
  'lib-build/tpl!./ShareDialog',
  'lib-build/css!./ShareDialog',
  'lib-build/less!./ShareDialog',
  './ShareURLPanel',
  './ShareEmbedPanel',
  '../../utils/SocialSharing'
], function(
  viewTpl,
  viewCss,
  viewLess,
  ShareURLPanel,
  ShareEmbedPanel,
  SocialSharing
) {
  return function ShareDialog(container) {
    container.append(viewTpl({ }));

    var _shareURLPanel = new ShareURLPanel(container.find('.share-url-panel')),
        _shareEmbedPanel = new ShareEmbedPanel(container.find('.share-embed-panel'));

    container.on('shown.bs.modal', function() {
      _shareURLPanel.focus();
    });

    container.find('.autoplay-checkbox').change(function() {
      _shareURLPanel.setAutoplay(!! this.checked);
      _shareEmbedPanel.setAutoplay(!! this.checked);
      
      container.find('.autoplay-notification')
        .html(i18n.viewer.shareFromCommon.linksupdated)
        .fadeIn();

      setTimeout(function() {
        container.find('.autoplay-notification').fadeOut();
      }, 1000);
    });

    this.present = function(url, socialOptions) {
      socialOptions = socialOptions || {
        facebook: false,
        twitter: false
      };

      container.find('.social-container').toggle(socialOptions.facebook || socialOptions.twitter);
      createSocialbuttons(socialOptions);

      /*
      SocialSharing.shareFacebook(
        '',
        '',
        null,
        $(this).data('url')
      );

      var tweet = app.data.title;

      if ($('meta[name="twitter:description"]').length) {
        tweet += ' - ' + $('meta[name="twitter:description"]').attr('content');
      }
      else {
        tweet += ' - ' + app.data.subtitle;
      }

      var title = $('<div>' + tweet + '</div>').text();

      SocialSharing.shareTwitter(
        title,
        $(this).data('url')
      );
      */

      _shareURLPanel.present(url);
      _shareEmbedPanel.present(url);

      container.find('.modal-title').html(i18n.viewer.headerFromCommon.share);
      container.find('.embed-title').html(i18n.viewer.shareFromCommon.embed);
      container.find('.btn-close').html(i18n.viewer.common.close);

      container.find('.autoplay-label').html(i18n.viewer.shareFromCommon.autoplayLabel);
      container.find('.autoplay-help').tooltip({
        title: i18n.viewer.shareFromCommon.autoplayExplain1
          + '<br /><br />'
          + i18n.viewer.shareFromCommon.autoplayExplain2,
        html: true
      });
      container.find('.autoplay-checkbox').prop('checked', false);

      container.modal({ keyboard: true });
    };

    function createSocialbuttons(socialOptions) {
      var appTitle = $('<div>' + app.data.title + '</div>').text();

      container.find('.share_facebook').toggle(socialOptions.facebook);
      if (socialOptions.facebook) {
        container.find('.share_facebook').off('click').click(function() {
          SocialSharing.shareFacebook(
            '',
            '',
            null,
            $(this).data('url')
          );
        });
      }

      container.find('.share_twitter').toggle(socialOptions.twitter);
      if (socialOptions.twitter) {
        container.find('.share_twitter').off('click').click(function() {
          SocialSharing.shareTwitter(
            appTitle,
            $(this).data('url')
          );
        });
      }
    }
  };
});


define('lib-build/less!storymaps-react/tpl/view/ui/Header',[],function(){});
define('storymaps-react/tpl/view/ui/Header',['module', 'exports', 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app', 'storymaps/common/utils/CommonHelper', 'storymaps-react/tpl/view/media/Media', 'storymaps/tpl/view/ui/ProgressBar', './Bookmarks', 'storymaps/common/ui/share/ShareDialog', 'storymaps/common/utils/SocialSharing', 'dojo/has', 'lib-build/less!./Header'], function (module, exports, _app, _CommonHelper, _Media, _ProgressBar, _Bookmarks, _ShareDialog, _SocialSharing, _has) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _app2 = _interopRequireDefault(_app);

  var _CommonHelper2 = _interopRequireDefault(_CommonHelper);

  var _Media2 = _interopRequireDefault(_Media);

  var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

  var _Bookmarks2 = _interopRequireDefault(_Bookmarks);

  var _ShareDialog2 = _interopRequireDefault(_ShareDialog);

  var _SocialSharing2 = _interopRequireDefault(_SocialSharing);

  var _has2 = _interopRequireDefault(_has);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var HEADER_HEIGHT = 50;

  var Header = function () {
    function Header() {
      _classCallCheck(this, Header);

      this._node = $('.story-header');
      this._bookmarksNode = this._node.find('.bookmarks');

      this._shareDialog = new _ShareDialog2.default($('#shareDialog'));
      this._progressBar = new _ProgressBar2.default();
      this._bookmarks = new _Bookmarks2.default(this._node.find('.bookmarks'));

      this._isCompact = null;
      this._currentSection = null;

      this.initShareTooltip();
    }

    _createClass(Header, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var logo = params.logo;
        var link = params.link;
        var social = params.social;
        var title = params.title;


        var socialCfg = {
          logoEnabled: logo.enabled,
          logoURL: _Media2.default.addToken(logo.url),
          logoTarget: logo.link,
          linkURL: link.url,
          linkText: link.title
        };

        this.setLogo(this._node, socialCfg).then(function () {
          _this._bookmarks.render(params.bookmarks);
        }, function () {
          _this._bookmarks.render(params.bookmarks);
        });
        this.setLink(this._node, socialCfg);

        this._node.find('.title').html(title);

        this._node.find('.share-btn').off('click').click(this._onShareBtnClick.bind(this)).toggleClass('active', !!social.enabled);

        this._progressBar.start();
        this._bookmarks.render(params.bookmarks);

        this.toggleShareButton();
      }
    }, {
      key: 'initShareTooltip',
      value: function initShareTooltip() {
        var shareContainer = this._node.find('.share-btn-container[data-toggle="tooltip"]');

        shareContainer.tooltip({
          title: _app2.default.builder.header.sharingNotAvailable,
          placement: 'auto left'
        });

        shareContainer.on('inserted.bs.tooltip', function () {
          $(this).data('bs.tooltip').$tip.addClass('custom-share-tooltip');
        });

        shareContainer.tooltip('disable');
      }
    }, {
      key: 'toggleShareButton',
      value: function toggleShareButton() {
        var isPrivate = true;

        if (window.app.data.appItem && window.app.data.appItem.item && window.app.data.appItem.item.access) {
          if (app.data.appItem.item.access !== 'private' && app.data.appItem.item.access !== 'shared') {
            isPrivate = false;
          }
        }

        var socialShareButton = this._node.find('.share-btn');
        var shareContainer = this._node.find('.share-btn-container[data-toggle="tooltip"]');

        // if the story's private or the app has not yet been saved, disable the share button.
        if (isPrivate || app.builder && app.builder.isDirectCreationFirstSave) {
          socialShareButton.addClass('share-disabled');
          shareContainer.tooltip('enable');
        } else {
          socialShareButton.removeClass('share-disabled');
          shareContainer.tooltip('disable');
        }
      }
    }, {
      key: 'disableShareButtonAutoplay',
      value: function disableShareButtonAutoplay() {
        var socialShareButton = this._node.find('.share-btn');
        var shareContainer = this._node.find('.share-btn-container[data-toggle="tooltip"]');

        socialShareButton.addClass('share-disabled');
        shareContainer.tooltip('destroy').tooltip({
          title: window.i18n.viewer.headerFromCommon.tooltipAutoplayDisabled,
          trigger: 'hover',
          placement: 'left'
        });
      }
    }, {
      key: 'setLogo',
      value: function setLogo(container, headerCfg) {
        return new Promise(function (resolve, reject) {
          if (!headerCfg.logoEnabled || !headerCfg.logoURL || headerCfg.logoURL == 'NO_LOGO') {
            container.find('.logoImg').hide();
            //resizeLinkContainer(container);
            reject();
          } else {
            (function () {
              container.find('.logoLink').css('cursor', headerCfg.logoTarget ? 'pointer' : 'default');

              if (headerCfg.logoTarget) {
                container.find('.logoLink').attr('href', headerCfg.logoTarget);
              }

              var imageNode = container.find('.logoImg');

              imageNode.on('error', function () {
                imageNode.hide();
                reject();
              });

              imageNode.on('load', function () {
                resolve();
              });

              imageNode.attr('src', headerCfg.logoURL).show();
            })();
          }
        });
      }
    }, {
      key: 'setLink',
      value: function setLink(container, headerCfg) {
        if (headerCfg.linkURL && headerCfg.linkText) {
          container.find('.linkContainer').html('<a href="' + headerCfg.linkURL + '" class="link" target="_blank" tabindex="-1">' + headerCfg.linkText + '</a>');
        } else {
          container.find('.linkContainer').html(headerCfg.linkText);
        }
      }
    }, {
      key: 'update',
      value: function update(params) {
        //
        // Story progress
        //
        this._progressBar.update(params.storyProgress);

        //
        // Header mode
        //

        if (this._isCompact !== params.headerCompact) {
          this._isCompact = params.headerCompact;

          this._node.toggleClass('compact', this._isCompact);
          this._bookmarksNode.toggleClass('bookmarks-hidden', this._isCompact);
          if (!this._isCompact) {
            this._node.css('background-color', 'rgba(0,0,0,1)');
          }
        }
        //
        // Bookmarks
        // only update when the section number has changed (not on each scroll)
        if (this._currentSection !== params.sectionIndex) {
          this._currentSection = params.sectionIndex;
          this._bookmarks.update(params.sectionIndex);
        }
      }
    }, {
      key: 'resize',
      value: function resize() {
        this._bookmarks.resize();
      }
    }, {
      key: 'getHeight',
      value: function getHeight() {
        return HEADER_HEIGHT;
      }
    }, {
      key: '_onShareBtnClick',
      value: function _onShareBtnClick() {
        this._shareDialog.present(_SocialSharing2.default.cleanURL(document.location.href, true), {
          facebook: true,
          twitter: true
        });
      }
    }, {
      key: 'showEditButton',
      value: function showEditButton() {
        this._node.find('.header-edit-button').html('<i class="header-edit-icon fa fa-pencil"></i>' + _app2.default.builder.header.edit + '<span aria-hidden="true" class="header-edit-close">×</span>').show().off('click').click(_CommonHelper2.default.switchToBuilder);

        if ((0, _has2.default)('ff') || (0, _has2.default)('ie') || (0, _has2.default)('trident') == 7) {
          this._node.find('.header-edit-close').hide();
        } else {
          this._node.find('.header-edit-close').click(function () {
            this._node.find('.header-edit-button').hide();
            $(window).resize();
            return false;
          }.bind(this));
        }
      }
    }]);

    return Header;
  }();

  exports.default = Header;
  module.exports = exports['default'];
});
//# sourceMappingURL=Header.js.map
;

define('lib-build/hbars!storymaps-react/tpl/view/ui/Autoplay', ['Handlebars'], function (Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"autoplay-controls\">\r\n  <i class=\"autoplay-btn fa fa-pause\" aria-hidden=\"true\"></i>\r\n  <div class=\"slider-container \">\r\n		<input type=\"text\" />\r\n	</div>\r\n</div>\r\n";
  },"useData":true}); });


define('lib-build/less!storymaps-react/tpl/view/ui/Autoplay',[],function(){});
/*! =======================================================
                      VERSION  9.1.3              
========================================================= */
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(a){if("function"==typeof define&&define.amd)define('lib/seiyria-bootstrap-slider/dist/bootstrap-slider.min',["jquery"],a);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var b;try{b=require("jquery")}catch(c){b=null}module.exports=a(b)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b="slider",c="bootstrapSlider";windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){});var d;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function e(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var e=Object.keys(this.defaultOptions),f=0;f<e.length;f++){var h=e[f],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",m.setAttribute("role","slider"),m.setAttribute("aria-valuemin",this.options.min),m.setAttribute("aria-valuemax",this.options.max),n=document.createElement("div"),n.className="slider-handle max-slider-handle",n.setAttribute("role","slider"),n.setAttribute("aria-valuemin",this.options.min),n.setAttribute("aria-valuemax",this.options.max),r.appendChild(k),r.appendChild(j),r.appendChild(l);var s=Array.isArray(this.options.labelledby);if(s&&this.options.labelledby[0]&&m.setAttribute("aria-labelledby",this.options.labelledby[0]),s&&this.options.labelledby[1]&&n.setAttribute("aria-labelledby",this.options.labelledby[1]),!s&&this.options.labelledby&&(m.setAttribute("aria-labelledby",this.options.labelledby),n.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",f=0;f<this.options.ticks.length;f++){var t=document.createElement("div");t.className="slider-tick",this.ticks.push(t),this.ticksContainer.appendChild(t)}j.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",f=0;f<this.options.ticks_labels.length;f++){var u=document.createElement("div"),v=0===this.options.ticks_positions.length,w=this.options.reversed&&v?this.options.ticks_labels.length-(f+1):f;u.className="slider-tick-label",u.innerHTML=this.options.ticks_labels[w],this.tickLabels.push(u),this.tickLabelContainer.appendChild(u)}var x=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},y=document.createElement("div");y.className="tooltip tooltip-main",y.setAttribute("role","presentation"),x(y);var z=document.createElement("div");z.className="tooltip tooltip-min",z.setAttribute("role","presentation"),x(z);var A=document.createElement("div");A.className="tooltip tooltip-max",A.setAttribute("role","presentation"),x(A),this.sliderElem.appendChild(r),this.sliderElem.appendChild(y),this.sliderElem.appendChild(z),this.sliderElem.appendChild(A),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(m),this.sliderElem.appendChild(n),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),g[this.options.scale]&&(this.options.scale=g[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top"),this._removeProperty(a,"margin-left"),this._removeProperty(a,"margin-top"),this._removeClass(a,"right"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection&&(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),f=0;f<this.ticks.length;f++)this._removeClass(this.ticks[f],"round triangle hide");var B=["round","triangle","custom"],C=-1!==B.indexOf(this.options.handle);if(C)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),f=0;f<this.ticks.length;f++)this._addClass(this.ticks[f],this.options.handle);this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.touchstart,!1),this.sliderElem.addEventListener("touchmove",this.touchmove,!1)),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip?(this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide")):"always"===this.options.tooltip?(this._showTooltip(),this._alwaysShowTooltip=!0):(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)),this.options.enabled?this.enable():this.disable()}var f={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},g={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,h=1;h<this.options.ticks_positions.length;h++)if(a<=this.options.ticks_positions[h]){d=this.options.ticks[h-1],f=this.options.ticks_positions[h-1],e=this.options.ticks[h],g=this.options.ticks_positions[h];break}var i=(a-f)/(g-f);b=d+i*(e-d),c=!1}var j=c?this.options.min:0,k=j+Math.round(b/this.options.step)*this.options.step;return k<this.options.min?this.options.min:k>this.options.max?this.options.max:k},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};d=function(a,b){return e.call(this,a,b),this},d.prototype={_init:function(){},constructor:d,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,scale:"linear",focus:!1,tooltip_position:null,labelledby:null},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(f),b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),e.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];this.eventToCallbackMap[c]=null}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var b="vertical"===this.options.orientation?"height":"width",c="vertical"===this.options.orientation?"marginTop":"marginLeft",d=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var e=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[c]=-d/2+"px"),e=this.tickLabelContainer.offsetHeight;else for(f=0;f<this.tickLabelContainer.childNodes.length;f++)this.tickLabelContainer.childNodes[f].offsetHeight>e&&(e=this.tickLabelContainer.childNodes[f].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=e+"px")}for(var f=0;f<this.options.ticks.length;f++){var g=this.options.ticks_positions[f]||this._toPercentage(this.options.ticks[f]);this.options.reversed&&(g=100-g),this.ticks[f].style[this.stylePos]=g+"%",this._removeClass(this.ticks[f],"in-selection"),this.options.range?g>=a[0]&&g<=a[1]&&this._addClass(this.ticks[f],"in-selection"):"after"===this.options.selection&&g>=a[0]?this._addClass(this.ticks[f],"in-selection"):"before"===this.options.selection&&g<=a[0]&&this._addClass(this.ticks[f],"in-selection"),this.tickLabels[f]&&(this.tickLabels[f].style[b]=d+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[f]?(this.tickLabels[f].style.position="absolute",this.tickLabels[f].style[this.stylePos]=g+"%",this.tickLabels[f].style[c]=-d/2+"px"):"vertical"===this.options.orientation&&(this.tickLabels[f].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style.marginTop=this.sliderElem.offsetWidth/2*-1+"px"))}}var h;if(this.options.range){h=this.options.formatter(this._state.value),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px"),"vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");var i=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,i);var j=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,j),this.tooltip_min.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px"):this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px"),this.tooltip_max.style[this.stylePos]=a[1]+"%","vertical"===this.options.orientation?this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px"):this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}else h=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%",this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var k=this.tooltip_min.getBoundingClientRect(),l=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?k.right>l.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):k.right>l.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1,this._adjustPercentageForRangeSliders(b)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),this._pauseEvent(a),this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){if(void 0===a.changedTouches)return void this._mousedown(a);var b=a.changedTouches[0];this.touchX=b.pageX,this.touchY=b.pageY},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step;return this.options.range&&(f=[a?this._state.value[0]:f,a?f:this._state.value[1]]),this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){if(void 0!==a.changedTouches){var b=a.changedTouches[0],c=b.pageX-this.touchX,d=b.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&5>=c&&c>=-5&&(d>=15||-15>=d)?this._mousedown(a):5>=d&&d>=-5&&(c>=15||-15>=c)&&this._mousedown(a))}},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c&&(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0)}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c,e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if("number"==typeof a)return a;if(Array.isArray(a))return this._validateArray(a),a;throw new Error(f.formatInvalidInputErrorMsg(a))},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(f.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b=this.options.tooltip_position||"right",c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a&&!function(){var e=void 0;a.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),e=c):(a.bridget(b,d),e=b),a.bridget(c,d),a(function(){a("input[data-provide=slider]")[e]()})}()}(a),d});

define('lib-build/css!lib/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min',[],function(){});
define('storymaps-react/tpl/view/ui/Autoplay',['module', 'exports', 'lib-build/hbars!./Autoplay', 'dojo/has', 'lib-build/less!./Autoplay', 'lib/seiyria-bootstrap-slider/dist/bootstrap-slider.min', 'lib-build/css!lib/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min'], function (module, exports, _Autoplay, _has) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Autoplay2 = _interopRequireDefault(_Autoplay);

  var _has2 = _interopRequireDefault(_has);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var SCROLL_DURATION = 1000,
      DEFAULT_DELAY = 10,
      BTN_FADE_DELAY = 3000;

  var END_STORY_DELAY_BOTTOM = 2000,
      END_STORY_DELAY_TOP = 2000;

  var HEADER_HEIGHT = 50,
      IMMERSIVE_PANEL_PADDING = 180;

  /*
   * Autoplay require specific knowledge of each section type behavior,
   *   it would be best to offload that to each section class
   * Then it could use a similar model than other story maps apps to allow
   *   for a Kiosk app to control the autoplay
   */

  var Autoplay = function () {
    function Autoplay() {
      _classCallCheck(this, Autoplay);

      this._node = null;
      this._autoplayBtn = null;

      this._inProgress = false;
      this._delay = null;

      this._slider = null;
      this._isHoverContainer = false;
      this._mouseMoveTime = Date.now();

      this._init();
    }

    _createClass(Autoplay, [{
      key: 'start',
      value: function start() {
        var p = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this._delay = this._slider.slider('getValue') * 1000;

        if (this._inProgress) {
          return;
        }

        this._inProgress = true;

        if (p.immediate) {
          this._next();
        } else {
          setTimeout(this._next.bind(this), this._delay);
        }

        this._updatePlayPauseButton(true);
      }
    }, {
      key: 'stop',
      value: function stop() {
        this._inProgress = false;
        this._updatePlayPauseButton(false);
      }
    }, {
      key: 'isPlaying',
      value: function isPlaying() {
        return this._inProgress;
      }
    }, {
      key: '_next',
      value: function _next() {
        var currentSectionIndex = app.Controller._currentSectionIndex,
            currentSection = app.display.sections[currentSectionIndex],
            currentSectionType = currentSection.type,
            currentSectionHeight = currentSection.node.height(),
            browserHeight = app.display.windowHeight,
            scrollTop = $(document).scrollTop(),
            step = 0;

        if (!this._inProgress) {
          return;
        }

        if (currentSectionType == 'cover') {
          // +1 to trigger the proper active section
          step = browserHeight - HEADER_HEIGHT + 1;
        } else if (currentSectionType == 'immersive') {
          var remainingScroll = Math.ceil(currentSection.top + currentSectionHeight - scrollTop);

          if (remainingScroll >= currentSectionHeight - 1) {
            step = browserHeight + (remainingScroll - currentSectionHeight) - IMMERSIVE_PANEL_PADDING;
          } else if (remainingScroll == currentSectionHeight - browserHeight + IMMERSIVE_PANEL_PADDING) {
            step = browserHeight + IMMERSIVE_PANEL_PADDING;
          } else if (remainingScroll == browserHeight) {
            step = browserHeight - HEADER_HEIGHT;
          } else {
            step = browserHeight;
          }
        } else if (currentSectionType == 'title') {
          step = browserHeight;
        } else {
          //let remainingScroll = currentSection.top + currentSectionHeight - scrollTop;
          //step = Math.min(currentSectionHeight, browserHeight);
          //step = Math.min(step, remainingScroll);

          step = browserHeight;
        }

        console.log('scrolling', step + 'px on a ', currentSectionType, 'section');

        /*
        if (app.display.sections[currentSectionIndex + 1]) {
          var nextSectionTop = Math.floor(app.display.sections[currentSectionIndex + 1].top);
            // Make sure never scroll past the top of next section
          // TODO: should not be necessary...
          if (scrollTop + step > nextSectionTop + 1) {
            step = nextSectionTop - scrollTop - HEADER_HEIGHT + 1;
          }
          // If the next section is less than 200px away, scroll to it to avoid doing a small scroll next
          else if (scrollTop + step >= nextSectionTop - 200) {
            step = nextSectionTop - scrollTop + 1;
          }
        }
        */

        // Make sure never scroll past the top of next Immersive section
        var targetSectionIndex = -1;

        for (var i = app.display.sections.length - 1; i > 0; i--) {
          var section = app.display.sections[i];
          if (scrollTop + step > section.top) {
            targetSectionIndex = i;
            break;
          }
        }

        if (targetSectionIndex != currentSectionIndex) {
          var nextSection = app.display.sections[targetSectionIndex];
          if (nextSection && nextSection.type == 'immersive') {
            var nextSectionTop = nextSection.top;

            if (scrollTop + step > nextSectionTop) {
              step = nextSectionTop - scrollTop - HEADER_HEIGHT + 1;
            }
          }
        } else {
          var _nextSection = app.display.sections[currentSectionIndex + 1];
          if (_nextSection) {
            // Allow to scroll 200px more to avoid next scroll being small
            if (_nextSection.top - (scrollTop + step) < 200) {
              step += _nextSection.top - (scrollTop + step) - HEADER_HEIGHT;
            }
          }
        }

        $('html,body').animate({
          scrollTop: scrollTop + step
        }, {
          duration: SCROLL_DURATION
          //easing: 'linear'
        }).promise().then(function () {
          if ($(document).scrollTop() + browserHeight >= $('body').height()) {
            setTimeout(function () {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;

              app.ui.update({
                forceUpdate: true
              });

              setTimeout(this._next.bind(this), END_STORY_DELAY_TOP);
            }.bind(this), END_STORY_DELAY_BOTTOM);
          } else {
            setTimeout(this._next.bind(this), this._delay);
          }
        }.bind(this));
      }
    }, {
      key: '_showContainer',
      value: function _showContainer() {
        var now = Date.now();

        // Debounce container show
        if (this._mouseMoveTime > now - 150) {
          this._node.removeClass('fade');
        }

        this._mouseMoveTime = now;
      }
    }, {
      key: '_hideContainer',
      value: function _hideContainer() {
        if (!this._isHoverContainer && Date.now() > this._mouseMoveTime + BTN_FADE_DELAY) {
          this._node.addClass('fade');
        }
      }
    }, {
      key: '_updatePlayPauseButton',
      value: function _updatePlayPauseButton(isPlaying) {
        if (isPlaying) {
          this._autoplayBtn.removeClass('fa-play').addClass('fa-pause');
        } else {
          this._autoplayBtn.removeClass('fa-pause').addClass('fa-play');
        }
      }
    }, {
      key: '_init',
      value: function _init() {
        var _this = this;

        $('body').append(_Autoplay2.default);

        this._node = $('.autoplay-controls');
        this._autoplayBtn = this._node.find('.autoplay-btn');

        //
        // Container show/hide
        //

        if (!(0, _has2.default)('ios')) {
          $('.sections').mousemove(this._showContainer.bind(this));
          setInterval(this._hideContainer.bind(this), 1000);

          this._node.hover(function () {
            _this._isHoverContainer = true;
          }, function () {
            _this._isHoverContainer = false;
            _this._hideContainer();
          });
        }

        // Slider
        this._slider = this._node.find('.slider-container input').slider({
          min: 5,
          max: 60,
          value: DEFAULT_DELAY,
          formatter: function formatter(value) {
            return value + 's';
          }
        });

        // Slider change
        this._node.find('.slider-container input').on('slideStop', function () {
          if (_this.isPlaying()) {
            _this.start({ immediate: false });
          }
        });

        this._autoplayBtn.click(function () {
          var nowPlaying = _this._autoplayBtn.hasClass('fa-play');

          if (nowPlaying) {
            _this.start({ immediate: true });
          } else {
            _this.stop();
          }
        });

        $(window).bind('mousewheel DOMMouseScroll', function () {
          if (_this._inProgress) {
            _this.stop();

            _this._mouseMoveTime = Date.now();

            _this._autoplayBtn.removeClass('fa-pause').addClass('fa-play');

            _this._node.removeClass('fade');
          }
        });
      }
    }]);

    return Autoplay;
  }();

  exports.default = Autoplay;
  module.exports = exports['default'];
});
//# sourceMappingURL=Autoplay.js.map
;
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
define("lib/calcite-bootstrap/js/bootstrap.min", function(){});


define('lib-build/css!storymaps/common/utils/SocialSharing',[],function(){});
/*
| Copyright 2016 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/

define('storymaps/tpl/core/MainView',[
  'lib/babel-polyfill/browser-polyfill',
  'lib/jquery/dist/jquery.min',

  'lib-build/less!./MainView',
  'lib-build/css!../view/media/Common',

  'storymaps-react/tpl/core/Controller',
  'storymaps/common/Core',
  'storymaps/common/utils/CommonHelper',
  'storymaps/tpl/utils/UI',

  'storymaps-react/tpl/view/ui/Header',
  'storymaps-react/tpl/view/ui/Autoplay',

  'lib/calcite-bootstrap/js/bootstrap.min',
  'lib-build/css!storymaps/common/utils/SocialSharing',

  'esri/arcgis/utils',
  'dojo/_base/lang',
  'dojo/on',
  'dojo/has',
  'dojo/topic'

  //'lib/FitText.js/jquery.fittext.js'
], function(
  babelPolyfill,
  jQuery,

  viewCss,
  mediasCss,

  Controller,
  Core,
  CommonHelper,
  UIUtils,

  Header,
  Autoplay,

  bootstrapJS,
  socialSharingCss,

  arcgisUtils,
  lang,
  on,
  has,
  topic
) {

  // Story header
  var _header = new Header();
  // Save scroll position when a modal opens
  var _modalOpenScrollPosition = null;
  // Save the current scroll position to ignore duplicate events
  var _currentScrollTop = null;

  // Core
  var _core = null;

  // Hold reference to UI component for customization
  app.ui = {
    header: _header,
    update: updateUI
  };

  //
  // The section and media factory are accessed through window object as we can't import module dynamically with es6
  //  and Controller that is es6 needs them
  //

  require(
    [app.isInBuilder ? 'storymaps-react/tpl/view/section/FactoryBuilder' : 'storymaps-react/tpl/view/section/FactoryViewer'],
    function(SectionFactory) {
      app.ui.SectionFactory = SectionFactory;
    }
  );

  require(
    [app.isInBuilder ? 'storymaps/tpl/view/section/Immersive/PanelFactoryBuilder' : 'storymaps/tpl/view/section/Immersive/PanelFactoryViewer'],
    function(ImmersivePanelFactory) {
      app.ui.ImmersivePanelFactory = ImmersivePanelFactory;
    }
  );

  require(
    [app.isInBuilder ? 'storymaps-react/tpl/view/media/FactoryBuilder' : 'storymaps-react/tpl/view/media/FactoryViewer'],
    function(MediaFactory) {
      app.ui.MediaFactory = MediaFactory;
    }
  );

  require(
    [app.isInBuilder ? 'storymaps-react/tpl/builder/Controller' : 'storymaps-react/tpl/core/Controller'],
    function(Controller) {
      app.Controller = Controller;
    }
  );

  function init(core) {
    console.log('App loaded');
    _core = core;
    return true;
  }

  function initStory(config, settings, sections) {
    // Need some minimal info like window size before rendering the story
    computeDisplayInfos();

    if (app.display.browserWidth < 768) {
      $('body').addClass('mobile-view');
      app.isMobileView = true;
    }

    if (has('touch')) {
      $('body').addClass('touch');
    }

    app.Controller.renderStory(config, sections);
    app.Controller.renderHeader();

    displayApp();

    // Update display infos
    setTimeout(function() {
      computeDisplayInfos();
    }, 100);

    // To makes safari happy
    setTimeout(function() {
      computeDisplayInfos();
    }, 300);

    setTimeout(function() {
      computeDisplayInfos();
    }, 500);
  }

  /*
   * Update UI - mostly triggered on Scroll
   */
  function updateUI(p) {
    p = p || {};

    var scrollTop = app.display.scrollTop;

    // In builder, always recompute display infos for editing
    if (app.isInBuilder) {
      computeDisplayInfos();
    }

    app.display.scrollTop = scrollTop;

    // Ignore event without actual scroll
    if (_currentScrollTop == scrollTop && ! p.forceUpdate) {
      return;
    }

    _currentScrollTop = scrollTop;

    var sectionsDisplayInfos = getActiveAndVisibleSections(scrollTop, scrollTop + app.display.windowHeight),
        currentSectionDisplayInfos = sectionsDisplayInfos.activeSection;

    if (! currentSectionDisplayInfos) {
      return;
    }

    var currentSectionIndex = currentSectionDisplayInfos.index,
        $currentSection = currentSectionDisplayInfos.node,
        currentSectionScroll = scrollTop - currentSectionDisplayInfos.top;
        //nextSection = app.display.sections[currentSectionIndex + 1]

    //
    // Story
    //

    app.Controller.onScroll({
      currentSectionIndex: currentSectionIndex,
      scrollTop: scrollTop,
      windowWidth: app.display.windowWidth,
      windowHeight: app.display.windowHeight,
      $currentSection: $currentSection,
      sectionHeight: app.display.sectionHeight,
      currentSectionScroll: currentSectionScroll,
      visibleSections: sectionsDisplayInfos.visibleSections
    });

    //
    // Header
    //

    // TODO not sure what this is doing
    var headerCompact = false;

    if (scrollTop <= app.display.windowHeight) {
      var newPos = app.display.windowHeight - scrollTop /*- app.display.headerHeight*/ - /* help header animation */ 50;

      if (newPos < 40) {
        newPos = 0;
      }

      headerCompact = newPos !== 0;
    }

    _header.update({
      headerCompact: headerCompact,
      storyProgress: (scrollTop + app.display.windowHeight) / app.display.storyHeight * 100,
      sectionIndex: currentSectionIndex
    });
  }

  /*
  function getCurrentSectionDisplayInfos(scrollTop) {
    var sections = app.display.sections,
        nbSections = sections.length;

    for (var i = 0; i < nbSections; i++) {
      if (sections[i].top > scrollTop) {
        var index = i - 1;

        return {
          index: index,
          top: sections[index].top,
          node: sections[index].node
        };
      }
    }

    return null;
  }
  */

  /*
   * Compute the active and visible sections at every scroll
   */
  function getActiveAndVisibleSections(viewportTop, viewportBottom) {
    var sections = app.display.sections,
        nbSections = sections.length,
        activeSection = null,
        visibleSections = [],
        sectionTop = 0,
        sectionIndex = 0,
        sectionBottom = null;

    for (var i = 0; i < nbSections; i++) {
      sectionTop = sections[i].top;
      sectionIndex = i - 1;
      sectionBottom = sections[i + 1] ? sections[i + 1].top : -1;

      // The active section is the section that is before the section not visible
      if (sectionTop > viewportTop + 50) {
        if (! activeSection) {
          activeSection = {
            index: sectionIndex,
            top: sections[sectionIndex].top,
            node: sections[sectionIndex].node
          };
        }
      }

      // Except in the case it's last section of the story and there is no credits
      if (i == nbSections - 1 && ! activeSection && sections[i].type != 'credits') {
        activeSection = {
          index: i,
          top: sections[i].top,
          node: sections[i].node
        };
      }

      if (viewportTop >= sectionTop && viewportTop < sectionBottom) {
        visibleSections.push(sectionIndex + 1);
      }
      else if (viewportBottom > sectionTop && viewportTop < sectionTop) {
        visibleSections.push(sectionIndex + 1);
      }
    }

    return {
      activeSection: activeSection,
      visibleSections: visibleSections
    };
  }

  /*
   * Compute some display informations about sections and medias
   *  - elect the active section
   *  - find the sections partially visible
   */
  function computeDisplayInfos() {
    // Sections display info
    var sections = [];

    $('.section').each(function(index) {
      var node = $(this);

      sections.push({
        top: node.hasClass('hidden') ? Number.MAX_VALUE : node.position().top,
        node: node,
        type: app.data.sections[index].type
      });
    });

    // Videos in Sequence
    var inlineVideos = [];

    /*
    // Video autoplay
    $('.block .video').each(function() {
      var node = $(this),
          nodeBlock = node.parents('.block').eq(0);

      inlineVideos.push({
        id: node.attr('id'),
        top: nodeBlock.position().top,
        bottom: nodeBlock.position().top + node.height(),
        sectionIndex: node.parents('.section').index(),
        // TODO: KO with after-block like image caption!
        blockIndex: nodeBlock.index()
      });
    });
    */

    //var hasTouch = app.display ? app.display.hasTouch : has('touch');
    //var isMobile = app.display ? app.display.isMobile : UIUtils.isMobileBrowser();
    var $window = $(window),
        windowWidth = $window.width(),
        windowHeight = $window.height(),
        headerHeight = _header.getHeight();

    app.display = {
      browserWidth: windowWidth,
      windowWidth: windowWidth - (app.isInBuilder ? $('.section-builder-panel').width() : 0),
      windowHeight: windowHeight,
      headerHeight: headerHeight,
      sectionHeight: windowHeight - headerHeight,
      storyHeight: $('body').height(),
      scrollTop: app.display ? app.display.scrollTop : 0,
      sections: sections,
      inlineVideos: inlineVideos
      /*,
      hasTouch: hasTouch,
      isMobile: isMobile*/
    };
  }

  /*
  function positionSnapSections()
  {
    $.each(app.data.sections, function(i, section) {
      if (section instanceof Immersive) {
        var sectionDisplay = app.display.sections[i];

        SectionCommon.resizeSnapSection2(i, sectionDisplay.top);
      }
    });
  }
  */

  function displayApp() {

    //
    // Page init
    //

    // By default do not keep scrolling position when reloading the story
    var forceScrollTop = true;

    var urlParams = CommonHelper.getUrlParams();
    if (urlParams.forceScrollTop === 'false') {
      forceScrollTop = false;
    }

    if (forceScrollTop) {
      $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
      });
    }

    //
    // Resize event
    //

    var optimizedResize = CommonHelper.throttle(function() {
      onResize();
    }, 50);

    $(window)
      .resize(optimizedResize)
      .trigger('resize');

    //
    // Scroll event
    //

    // Using RAF in a recursive loop is convenient for builder as this is executed periodically
    //  the builder don't need to manually fire event when text/media/section change
    //  to recompute the display
    // But this can make debugging hard, if turned false. Scroll will only be fired on real scroll
    var useRequestAnimationFrameLoop = true;
    var doc = $(document);

    if (urlParams.useRafLoop === 'false') {
      useRequestAnimationFrameLoop = false;
    }

    if (useRequestAnimationFrameLoop) {
      window.requestAnimationFrame(function rafloop() {
        // To not pass scroll event to UI components when the modal is open
        // This does not prevent the event, it just make sure the component
        // don't render with invalid scroll values (especially the header)
        var preventScroll = false;
        if ($('body').hasClass('modal-open')) {
          preventScroll = true;
        }

        if (! preventScroll) {
          app.display.scrollTop = doc.scrollTop();
          updateUI();
        }

        window.requestAnimationFrame(rafloop);
      });
    }
    else {
      var working = false;

      var scrollAction = function() {
        var performance = window.performance;
        var t0 = performance.now();

        updateUI();

        console.log('onScroll took', performance.now() - t0);

        working = false;
      };

      $(window).scroll(function() {
        // To not pass scroll event to UI components when the modal is open
        // This does not prevent the event, it just make sure the component
        // don't render with invalid scroll values (especially the header)
        if (app.isInBuilder && $('body').hasClass('modal-open')) {
          return;
        }

        app.display.scrollTop = doc.scrollTop();

        if (! working) {
          window.requestAnimationFrame(scrollAction);
          working = true;
        }
      });
    }

    //
    // Prevent scroll when a modal is open
    //

    // When a modal opens, set the body to fixed position with proper scrolling
    // This seems to be the only effective way to allow scroll in modal but avoid
    //   the scroll to affect the whole page
    // Other ideas:
    //  - set body to overflow: hidden and add a replacement for the scrollbar
    //  - can't seem to preventDefault from jQuery handler but can be done from
    //    browser event as shown above but target does not reflect is event is
    //    bubbling, is there a way to know?
    $('.modal').on('show.bs.modal', function() {
      //_modalOpen = true;

      _modalOpenScrollPosition = app.display.scrollTop;

      $('body').css({
        position: 'fixed',
        top: - app.display.scrollTop
      });

      $('.sections').css({
        position: 'fixed'
      });
    });

    $('.modal').on('hide.bs.modal', function() {
      //_modalOpen = false;

      $('body').css({
        position: '',
        top: ''
      });

      $('.sections').css({
        position: ''
      });

      $('html,body').scrollTop(_modalOpenScrollPosition);
    });

    //
    // Story builder button
    //

    if (_core.hasSwitchBuilderButton()) {
      app.ui.header.showEditButton();
    }

    /*
    function autoSizeText() {
      var el,
          elements,
          _i,
          _len,
          _results = [];

      elements = $('.fg-title');

      if (elements.length < 0) {
        return;
      }

      for (_i = 0, _len = elements.length; _i < _len; _i++) {
        el = elements[_i];
        _results.push((function(el) {
          var resizeText, _results1;
          resizeText = function() {
            var elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
            return $(el).css('font-size', elNewFontSize);
          };

          _results1 = [];
          while (el.scrollHeight > el.offsetHeight) {
            _results1.push(resizeText());
          }
          return _results1;
        })(el));
      }
      return _results;
    }

    autoSizeText();
    */

    //$('.cover-title').fitText();
    //$('.cover-subtitle').fitText();
    //$('.section-layout-title .fg-title').fitText();

    //
    // Autoplay
    //

    // Autoplay in viewer mode
    if (! app.isInBuilder && CommonHelper.getUrlParams().autoplay !== undefined && CommonHelper.getUrlParams().autoplay !== 'false') {
      app.ui.autoplay = new Autoplay();

      // Start when app is ready
      topic.subscribe('tpl-ready', function() {
        if (! $('body').hasClass('mobile-view')) {
          $('.section-layout-cover .scroll-invite').hide();
          app.ui.header.disableShareButtonAutoplay();
          
          app.ui.autoplay.start();
        }
      });
    }

    //
    // Display the app
    //

    updateUI();
    topic.publish('tpl-ready');
    hideLoadingOverlay();
  }

  function onResize() {
    // This does not dictate much as the switch between mobile view
    //   is only done when story is initializing
    var isSmall = app.display.browserWidth < 768;

    computeDisplayInfos();

    _header.resize();

    app.Controller.onResize({
      windowWidth: app.display.windowWidth,
      windowHeight: app.display.windowHeight,
      sectionHeight: app.display.sectionHeight
    });

    // Disable builder on small screens
    if (app.isInBuilder) {
      $('body').toggleClass('error modal-open', isSmall);
      $('#loadingOverlay').toggleClass('error', isSmall);
      $('#fatalError').toggle(isSmall);
      $('.progressjs-container').toggle(! isSmall);
    }

    // Stop autoplay in mobile view
    if (app.ui.autoplay && isSmall) {
      app.ui.autoplay.stop();
    }
  }

  function isStoryBlank() {
    return app.Controller.isStoryBlank();
  }

  function appInitComplete() {
    if (! app.data.appItem || ! app.data.appItem.data) {
      return;
    }

    var itemData = app.data.appItem.data.values;

    initStory(
      itemData.config,
      itemData.settings,
      itemData.sections
    );
  }

  //
  // Loading Overlay
  //

  function hideLoadingOverlay() {
    $('#loadingIndicator').css('margin-left', '-25px');

    setTimeout(function() {
      $('#loadingIndicator, #loadingMessage').addClass('fadeOut').fadeOut(300);
      $('#loadingOverlay').fadeOut(600);
    }, 0); // TODO may need extra wait for Cover video to load
  }

  /*
   * TODO prototype - load static config from JSON file
   */
  function getConfig(configName) {
    if (! configName) {
      alert('No configuration specified in index.html > configOptions.story');
    }

    $.ajax({
      type: 'GET',
      url: 'stories/' + configName + '.json',
      dataType: 'json'
    }).then(
      function(data) {
        if (data && data.config && data.sections && data.sections.length) {
          initStory(data.config, data.settings, data.sections);
        }
        else {
          alert('The specified configuration couldn\'t be loaded because of a JSON syntax error.');
        }
      },
      function() {
        alert('The specified configuration hasn\'t been found or couldn\'t be loaded because of a JSON syntax error.');
      }
    );
  }

  return {
    init: init,
    isStoryBlank: isStoryBlank,
    getConfig: getConfig,
    appInitComplete: appInitComplete,
    updateUI: updateUI
  };
});

require([
  'storymaps/common/Core',

  // Load some factory that are loaded dynamically and would not be included in build otherwise
  'storymaps-react/tpl/view/media/FactoryViewer',
  'storymaps-react/tpl/view/section/FactoryViewer',
  'storymaps/tpl/view/section/Immersive/PanelFactoryViewer',

  'storymaps/tpl/core/MainView'
], function() {
    // Nothing here
});

define("storymaps/tpl/BuildConfigViewer", function(){});

