dojo.require('esri.map');
dojo.require('esri.arcgis.Portal');
dojo.require('esri.arcgis.utils');
dojo.require("esri.layers.FeatureLayer");

dojo.require('esri.dijit.BasemapGallery');
dojo.require('esri.dijit.Geocoder');
dojo.require('esri.dijit.Legend');
dojo.require('esri.dijit.PopupMobile');
dojo.require('esri.dijit.Scalebar');

dojo.require('dojo.cookie');
dojo.require('dojox.form.Rating');
dojo.require('dojox.lang.aspect');
dojo.require('dojox.mobile.deviceTheme');
dojo.require('dojox.mobile.parser');
dojo.require('dojox.mobile');
dojo.require('dojox.mobile.compat');

dojo.require('dijit.registry');

dojo.require('customUtils.IdentityManagerUtils');

var portal,
  nextQueryParams,
  identityManagerUtils,
  map,
  mapDeferred;

function init() {
  // the signin node
  // TODO what about the pages where there is no signin node?
  // TODO Update to use KD's OAuth page
  var signInNode = dojo.byId('signin');
  identityManagerUtils = new customUtils.IdentityManagerUtils(null, signInNode);
  esri.id = identityManagerUtils;

  // Since the app runs on a subdomain of arcgis.com, identity manager assumes the page is a part of the arcgis.com
  // website and redirects to /home/signin.html page (which does not exist on developersdev.arcgis.com) and fails.
  // Override the method below before calling getCredential:
  // TODO Remove on production (?)
  esri.id._doPortalSignIn = function () {
    return false;
  };

  // look for credentials
  authenticationUtils.loadCredentials();

  // ArcGIS JavaScript API default configurations that can be overridden programmatically.
  utils.setGeometryService();
  utils.setProxyServer();
  utils.setSharingURL();
  utils.setPortal();

  // instantiate the Portal obj
  portal = new esri.arcgis.Portal(appConfig.PORTAL_URL);
  // Fired when the portal has loaded
  dojo.connect(portal, 'onLoad', function () {
    portalInitHandler();
  });
}

/**
 * Parse the path name of the current URL and determine which HTML doc to load.
 * Follow the same structure (URLs) as AGO.
 *  - index.html
 *  - groups.html
 *  - group.html
 *  - gallery.html
 *  - item.html
 *  - etc..
 */
function portalInitHandler() {
  // get html document
  var _document = window.location.pathname.match(/([^\/]+)(?=\.\w+$)/);
  if (_document === null || _document[0] === appConfig.indexPage) {
    pageUtils.loadHomePage(appConfig.indexPageTitle);
  } else if (_document[0] === appConfig.groupsPage) {
    pageUtils.loadGroups(appConfig.groupsPageTitle);
  } else if (_document[0] === appConfig.groupPage) {
    pageUtils.loadGroup();
  } else if (_document[0] === appConfig.galleryPage) {
    pageUtils.loadGallery(appConfig.galleryPageTitle);
  } else if (_document[0] === appConfig.contentPage) {
    pageUtils.loadMyContent(appConfig.myContentPageTitle);
  } else if (_document[0] === appConfig.signinPage) {
    pageUtils.loadSignIn(appConfig.signInPageTitle);
  } else if (_document[0] === appConfig.viewerPage) {
    pageUtils.loadMapViewer(document.URL);
  } else if (_document[0] === appConfig.itemPage) {
    pageUtils.loadItemViewer(document.URL);
  }
}

dojo.ready(init);