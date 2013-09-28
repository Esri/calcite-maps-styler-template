// dojo.provide() tells the loader that the module has been provided for the given name.
// It also creates a JavaScript object for the name.
dojo.provide('customUtils.mapUtils');

/**
 *
 * @type {Object}
 */
var utils = {

  /**
   * The window object represents an open window in a browser.
   * Listen for scrolling on the Window object.
   */
  scrollEventHandler:function () {
    dojo.connect(window, 'scroll', utils.scroll);
  },

  /**
   * Determine when the viewport has been scrolled to the bottom
   */
  scroll:function () {
    // return the number with the highest value
    var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    var threshhold = (st + window.innerHeight);
    //console.log("w: " + window.innerHeight+ "\nst: " + st + "\nclientHeight: " + document.documentElement.clientHeight + '\nthreshhold: ' + threshhold + '\nbody.scrollHeight: ' + document.body.scrollHeight + '\ndocumentElement.scrollHeight: ' + document.documentElement.scrollHeight +'\n-----------------------');
    // If the threshhold is equal to greater than the scrollHeight, user has scrolled to bottom of viewport
    if (threshhold >= document.body.scrollHeight) {
      // query for more items
      utils.getNext();
    }
  },

  /**
   * Build a node (href). This node is used on the landing page instead of buttons.
   *
   * @param domConstruct
   * @param url
   * @param label
   * @param id
   */
  buildCustomCellNode:function (domConstruct, url, label, id) {
    var item = domConstruct.create('a', {
      href     :url,
      innerHTML:label
    }, 'content', 'last');
    item.setAttribute('class', 'grid_1 cell');
    item.setAttribute('id', id);
  },

  /**
   * Set the nextQueryParams
   */
  queryMoreItems     :function () {
    // src obj: portal
    // method: 'queryItems' which is the string name of the function in obj
    // advise:
    dojox.lang.aspect.advise(portal, 'queryItems', {
      // the afterReturning method is concerned with the return value
      afterReturning:function (queryItemsPromise) {
        queryItemsPromise.then(function (result) {
          nextQueryParams = result.nextQueryParams;
        });
      }
    });
  },

  /**
   *
   */
  getNext:function () {
    if (nextQueryParams.start > -1) {
      // show the loading overlay
      utils.showLoader('Retrieving items...', 'd');
      portal.queryItems(nextQueryParams).then(function (result) {
        processItem(result);
      });
    }
  },

  /**
   * Show the jQuery loader
   *
   * @param txtMsg    Text message that will be displayed in the loade (i.e. Loading map..., or Loading gallery...)
   * @param theTheme  Loader theme
   */
  showLoader:function (txtMsg, theTheme) {
    $.mobile.loading('show', {
      text       :txtMsg,
      textVisible:true,
      theme      :theTheme,
      textonly   :'',
      html       :''
    });
  },

  /**
   * Hide the jQuery loader
   */
  hideLoader:function () {
    // hide the loading overlay
    $.mobile.loading('hide');
  },

  /**
   * The geometry service helps applications do geometric calculations such as buffering, simplifying, calculating areas
   * and lengths, and projecting.
   */
  setGeometryService:function () {
    if (appConfig.GEOMETRY_SERVICE_URL && location.protocol === 'https:') {
      appConfig.GEOMETRY_SERVICE_URL = appConfig.GEOMETRY_SERVICE_URL.replace('http:', 'https:');
    }
    // Specify the default geometry service used by widgets and operations.
    esri.config.defaults.geometryService = new esri.tasks.GeometryService(appConfig.GEOMETRY_SERVICE_URL);
  },

  /**
   * The location of the proxy url that should be used when posting large payloads to an endpoint.
   */
  setProxyServer:function () {
    if (!appConfig.PROXY_SERVER_URL) {
      appConfig.PROXY_SERVER_URL = location.protocol + '//' + location.host + '/sharing/proxy';
    } else {
      // if it is set in the config then we're testing locally
      appConfig.PROXY_SERVER_URL = location.protocol + appConfig.PROXY_SERVER_URL;
    }
    esri.config.defaults.io.proxyUrl = appConfig.PROXY_SERVER_URL;
    // Whether or not to always use the proxy for communication to a REST endpoint.
    esri.config.defaults.io.alwaysUseProxy = false;
  },

  /**
   * Specify the domain where the map associated with the webmap id is located. The default value is:
   * (http://www.arcgis.com/sharing/content/items)
   */
  setSharingURL:function () {
    if (!appConfig.SHARING_URL) {
      appConfig.SHARING_URL = location.protocol + '//' + location.host + '/sharing/content/items';
    } else {
      // if it is set in the config then we're testing locally
      appConfig.SHARING_URL = location.protocol + appConfig.SHARING_URL;
    }
    esri.arcgis.utils.arcgisUrl = appConfig.SHARING_URL;
  },

  /**
   * set the url to the ArcGIS.com site or in-house portal.
   * (http://www.arcgis.com)
   */
  setPortal:function () {
    if (!appConfig.PORTAL_URL) {
      appConfig.PORTAL_URL = location.protocol + '//' + location.host;
    } else {
      // if it is set in the config then we're testing locally
      appConfig.PORTAL_URL = location.protocol + appConfig.PORTAL_URL;
    }
  }
};