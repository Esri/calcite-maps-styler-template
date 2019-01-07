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
define([
  "application/view/widgetslayout",
  "application/widgets/WidgetsExt",
  "application/widgets/Share",
  "application/base/message",

  // "boilerplate/ItemHelper",
  "ApplicationBase/support/itemUtils",

  "esri/views/ui/Component",

  "esri/widgets/Zoom",
  "esri/widgets/Home",
  "esri/widgets/NavigationToggle",
  "esri/widgets/Locate",
  "esri/widgets/Track",
  "esri/widgets/Compass",
  "esri/widgets/Search",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
  "esri/widgets/ScaleBar",
  "esri/widgets/Print",
  "esri/widgets/BasemapToggle",
  "esri/widgets/DistanceMeasurement2D",
  "esri/widgets/DirectLineMeasurement3D",
  "esri/widgets/AreaMeasurement2D",
  "esri/widgets/AreaMeasurement3D",
  "esri/widgets/Attribution",
  "esri/widgets/Popup",
  "esri/widgets/Expand",
  "esri/widgets/Slice",

  "esri/layers/FeatureLayer",
  "esri/layers/UnsupportedLayer",
  "esri/layers/UnknownLayer",

  "esri/geometry/Point",
  "esri/Viewpoint",
  "esri/Camera",
  "esri/geometry/support/webMercatorUtils",
  "esri/tasks/GeometryService",
  "esri/tasks/support/ProjectParameters",
  "esri/geometry/SpatialReference",

  "esri/core/watchUtils",

  "esri/config",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/on",
  "dojo/dom-construct",
  "dojo/Deferred",
  "dojo/_base/lang",
  "dojo/promise/all",

  "dojo/_base/declare",
  "dojo/domReady!"
], function (
  WIDGETS_LAYOUT, WidgetsExt, Share, Message,
  itemUtils,
  Component,
  Zoom, Home, NavigationToggle, Locate, Track, Compass, Search, Legend, LayerList, ScaleBar, Print, BasemapToggle, Measure2d, Measure3d, Area2d, Area3d, Attribution, Popup, Expand, Slice,
  FeatureLayer, UnsupportedLayer, UnknownLayer,
  Point, Viewpoint, Camera, webMercatorUtils, GeometryService, ProjectParameters, SpatialReference,
  watchUtils, esriConfig,
  dom, domAttr, domClass, query, on, domConstruct, Deferred, lang, all,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (boilerplate, i18n) {

      this._boilerplate = boilerplate;

      this._i18n = i18n;

      var widgetsLayoutName = boilerplate.config.widgetslayout;

      this.widgetsLayout = this._getWidgetsLayout(widgetsLayoutName);

      this._showErrors = boilerplate.config.showerrors;

      this._geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");

      this._printServiceUrl = "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";

      // Set portal and search locator css
      this._isLocalPortal = (this._boilerplate.config.portalUrl && (this._boilerplate.config.portalUrl !== "https://www.arcgis.com"));

      if (this._isLocalPortal) {
        esriConfig.portalUrl = this._boilerplate.config.portalUrl;
      }

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _i18n: null,

    _webItem: null,

    _is2d: true,

    _isLocalPortal: false,

    _defaultViewOptions: {
      padding: {top: 15, bottom: 30},
      ui: {
        components: ["attribution"],
        padding: {top: 15, left: 15, right: 15, bottom: 15}
      },
      constraints: {
        snapToZoom: false
      }
    },

    _uiPadding: null,

    _defaultWidgetsLayoutName: "top-left",

    _defaultWidgetPosition: "top-left",

    _defaultPopupDockPosition: "auto",

    _errorMessage: {
      webMapOrSceneUnknownItemType: "Web Map or Web Scene could not be created. Unknown item type.",
      webMapOrSceneLoadFailureLong: "could not be fully loaded. Stay tuned as <a target='_blank' href='https://developers.arcgis.com/javascript/latest/guide/migrating/index.html#webmap'>full support</a> for webmaps with the <a target='_blank' href='https://developers.arcgis.com/javascript/'>ArcGIS API for Javascript 4</a> is coming soon!",
      webMapOrSceneNotFullyLoaded: "could not be fully loaded.",
      layerLoadFailure: "A layer could not be loaded"
    },

    _showErrors: false,

    //--------------------------------------------------------------------------
    //
    //  Public Members
    //
    //--------------------------------------------------------------------------

    view: null,

    widgetsLayout: null,

    searchWidget: null,

    legendWidget: null,

    layerListWidget: null,

    widgetsExt: null,

    appShare: null,

    // View

    createViewFromItem: function(webItem, viewOptions) {
      var deferred = new Deferred();
      viewOptions = viewOptions || {};
      this._webItem = webItem;

      // Promise return values
      var results = {
        view: null,
        webMap: null,
        webScene: null
      }

      function loadAll(webMapOrWebScene, options, ref) {
        // Load view
        ref._loadView(webMapOrWebScene, options)
          .then(function(view){
            ref.view = view;
            results.view = view;
            // Enable sub-surface viewing
            if (view.type === "3d" && view.constraints && view.constraints.collision) {
              view.constraints.collision.enabled = false;
            }
            // Load map
            ref._loadMap(webMapOrWebScene)
              .then(function(map){
                // Option to override basemap before loading map
                ref._setBasemap(map);
                // Set view map
                view.map = map;
                deferred.resolve(results);
              })
              .otherwise(function(err){
                deferred.reject(err);
              });
          })
          .otherwise(function(err){
            deferred.reject(err);
          });
      }

      var portalItem = this._boilerplate.results.applicationItem.value;
      var appProxies = (portalItem && portalItem.applicationProxies) ? portalItem.applicationProxies : null;

      // Load map or scene view
      if (webItem.type === "Web Map") {
        this._is2d = true;
        itemUtils.createWebMapFromItem({
          item: webItem,
          appProxies: appProxies
        })
          .then(function(webMap) {
            results.webMap = webMap;
            loadAll(webMap, viewOptions, this);
          }.bind(this))
          .otherwise(function(error) {
            deferred.reject(error);
          }.bind(this));
      } else if (webItem.type === "Web Scene") {
        this._is2d = false;
        itemUtils.createWebSceneFromItem({
          item: webItem,
          appProxies: appProxies
        })
          .then(function(webScene) {
            results.webScene = webScene;
            loadAll(webScene, viewOptions, this);
          }.bind(this))
          .otherwise(function(error) {
            deferred.reject(error);
          }.bind(this));
      } else {
        deferred.reject(new Error(this._errorMessage.webMapOrSceneUnknownItemType));
      }
      return deferred.promise;
    },

    // Create the map/scene view

    _loadView: function(webMapOrWebScene, options) {
      var deferredView = new Deferred();
      // View options
      options = options || { ui:{} };
      var defaultOptions = this._defaultViewOptions;
      var allOptions = lang.mixin({}, defaultOptions, options);
      allOptions.ui = lang.mixin({}, defaultOptions.ui, allOptions.ui);
      // Create view
      var module = webMapOrWebScene.portalItem.type === "Web Map" ? "esri/views/MapView" : "esri/views/SceneView";
      // Load modules
      require([module], function(View){
        var view = new View(allOptions);
        deferredView.resolve(view);
      });
      return deferredView.promise;
    },

    // Load map

    _loadMap:function (webMapOrWebScene) {
      var deferredMap = new Deferred();
      // Load the webmap
      webMapOrWebScene.load()
        .then(function(webmapscene){
          this._reportLayerLoadErrors(webmapscene.allLayers); // Report load errors (unsupported layers...)
          // Load the map or scene
          webmapscene.load()
            .then(function(map){
              deferredMap.resolve(map); // Done!
            }.bind(this)) // map
              .otherwise(function(error){
                error.userMsg = "Basemap could not be loaded";
                deferredMap.reject(error);
              });
          }.bind(this)) // webmap/webscene
          .otherwise(function(error){
            var userMsg = webMapOrWebScene.portalItem.type + " " + this._errorMessage.webMapOrSceneNotFullyLoaded;
            error.userMsg = "Basemap could not be loaded";
            deferredMap.reject(error);
          });
      return deferredMap;
    },

    setScroll: function() {
      if (!this.view && this._boilerplate.config) {
        return;
      }
      // Disable map scroll and add overlay explaining how to do it depending on touch device or not
      if (this._boilerplate.config.noscroll) {
        const eventType =
          "ontouchstart" in document.documentElement
            ? "drag"
            : "mouse-wheel";
        this.view.on(eventType, function(event){
            event.stopPropagation();
        }.bind(this));
      }
    },

    // Responsive

    setResponsivePanels: function() {
      var view = this.view;

      function setUIPadding(show,width) {
        var padding = view.padding;
        var isRight = query(".calcite-panels-right");
        // Add
        if (show && width > 0) {
          if (isRight && isRight.length > 0) {
            padding.right = width;
            view.padding = padding;
          } else {
            padding.left = width;
            view.padding = padding;
          }
        } else { // Remove
          padding.left = 0;
          padding.right = 0;
          view.padding = padding;
        }
      }

      // Set up events
      if (view) {
        query(".panel-collapse.collapse").on("shown.bs.collapse", function(e){
          var width = e.target.parentElement.clientWidth;
          setUIPadding(true, width);
        }.bind(this));

        query(".panel-collapse.collapse").on("hidden.bs.collapse", function(e){
          setUIPadding(false, 0);
        }.bind(this));

        // Set on init
        var panels = query(".panel-collapse.in");
        if (panels && panels.length > 0) {
          var width = panels[0].parentElement.clientWidth;
          setUIPadding(true,width);
        }
      }
    },

    // Basemap

    _getValidNextBasemap: function(existingBasemap, nextBasemap) {
      var existingBasemapTitle = existingBasemap.title.toLowerCase();
      var validBasemap;
      nextBasemap ? nextBasemap : "";
      if (nextBasemap.match(/^(streets|satellite|hybrid|terrain|topo|gray|dark-gray|oceans|national-geographic|osm|dark-gray-vector|gray-vector|streets-vector|topo-vector|streets-night-vector|streets-relief-vector|streets-navigation-vector)$/)) {
        validBasemap = nextBasemap;
      } else {
        if (existingBasemapTitle.indexOf("satellite") > -1 || existingBasemapTitle.indexOf("imagery") > -1) {
          validBasemap = "streets";
        } else {
          validBasemap = "satellite";
        }

      }
      return validBasemap;
    },

    _setBasemap: function(map) {
      var basemapId = this._boilerplate.config.basemap;
      if (map && map.basemap && basemapId) {
        if (basemapId.match(/^(streets|satellite|hybrid|terrain|topo|gray|dark-gray|oceans|national-geographic|osm|dark-gray-vector|gray-vector|streets-vector|topo-vector|streets-night-vector|streets-relief-vector|streets-navigation-vector)$/)) {
            map.basemap = basemapId;
        }
      }
    },

    // Share

    setShare: function() {
      var view = this.view;
      if (view) {
        view.when(function(){
            this.appShare = new Share(view, this.searchWidget, this._boilerplate);
          }.bind(this));
      }
    },

    // Widgets for the app

    createAppWidgets: function() {
      var view = this.view;
      if (view) {
        if (!view.popup) {
          view.popup = new Popup({
            view: view
          });
        }
        var settings = this._boilerplate.settings;
        this.searchWidget = this._createSearchWidget(settings.search.container, {view: view});
        this.legendWidget = this._createLegendWidget(settings.legend.container, {view: view});
        this.layerListWidget = this._createLayerListWidget(settings.widgetLayers.container, {view: view});
        this.printListWidget = this._createPrintWidget(settings.widgetPrint.container, {
          view: view,
          printServiceUrl: this._printServiceUrl
        });
      }
    },

    // Widgets for the map/scene view

    createMapWidgets: function() {
      var view = this.view;
      if (view) {
        var config = this._boilerplate.config;
        var options = {
          visible: true
        }
        // Add widgets
        // NOTE: This controls the order...
        if (config.zoomin) {
          this._addWidget("zoomin", config.zoomin, options);
        }
        if (config.home) {
          this._addWidget("home", config.home, options);
        }
        if (config.navtoggle && view.type !== "2d") {
          this._addWidget("navtoggle", config.navtoggle, options);
        }
        if (config.compass) {
          this._addWidget("compass", config.compass, options);
        }
        if (config.locate) {
          this._addWidget("locate", config.locate, options);
        }
        if (config.track) {
          this._addWidget("track", config.track, options);
        }
        // Allow search to be added to the map for embedded scenarios
        if (config.search) {
          this._addWidget("search", config.search, options);
        }
        if (config.legend) {
          this._addWidget("legend", config.legend, options);
        }
        if (config.scalebar) {
          options.style = "dual";
          this._addWidget("scalebar", config.scalebar, options);
        }
        if (config.basemaptoggle) {
          options.nextBasemap = this._getValidNextBasemap(view.map.basemap,config.nextbasemap);
          this._addWidget("basemaptoggle", config.basemaptoggle, options);
        }
        if (config.measure) {
          this._addWidget("measure", config.measure, options);
        }
        if (config.slice) {
          this._addWidget("slice", config.slice, options);
        }
      }
    },

    setPopupPosition: function(position) {
      var view = this.view;
      if (view) {
        view.when(function() {
          var position = position || this._boilerplate.config.popupdocking || this._defaultPopupDockPosition;
          if (position.match(/^(auto|top-left|top-center|top-right|bottom-left|bottom-center|bottom-right)$/)) {
            view.popup.dockOptions = {
              position: position
            }
          } else if (position.match(/^(none)$/)) {
            view.popup.dockEnabled = false;
            view.popup.dockOptions = {
              buttonEnabled: false,
              breakpoint: false
            }
          } else {
            view.popup.dockOptions = {
              position: this._defaultPopupDockPosition
            }
          }
          // Enable highlighting when popup is visible
          view.popup.highlightEnabled = true;
        }.bind(this));
      }
    },

    setWidgetExtensions: function(widgetOptions) {
      var widgetOptions = widgetOptions || {
        home: false,
        compass: false,
        navToggle: true,
        findPlaces: this._boilerplate.config.findplaces,
        mapCoords: this._boilerplate.config.mapcoords,
        mapCoordsShare: this._boilerplate.config.menushare,
        searchExpand: true,
        popupPanelSync: true
      };
      var view = this.view;
      var search = this.searchWidget;
      if (view && search) {
        // Widget extensions
        this.widgetsExt = new WidgetsExt(view, search, this._i18n);
        this.widgetsExt.setExtensions(widgetOptions);
      }
    },

    _getNumber: function (n, min, max, rnd, def) {
      var n = parseFloat(n);
      if (!isNaN(n) && isFinite(n)) {
        if (n >= min && n <=max) {
          n = Math.round(n * rnd) / rnd;
        } else {
          n = def;
        }
        return n;
      } else {
        return null;
      }
    },

    // Set view based on all parameters

    setViewpointAll: function() {
        var view = this.view;
        var config = this._boilerplate.config;
        view
          .when(function() { // Get the point from params or search
            return this._executeSearch(config);
          }.bind(this))
          .then(function(pt){ // Get point if no point
            return this._executeGetPt(config, pt);
          }.bind(this))
          .then(function(pt){ // Go to the point (tilt, rotate...)
            return this._executeZoom(config, pt);
          }.bind(this))
          .then(function(pt){ // Get places for that point
            var center = view.center;
            return this._executeFindPlaces(config, center);
          }.bind(this))
          .then(function() { // Save the view into the Home
            return this._setHomeWidget();
          }.bind(this))
          .otherwise(function(err){
            console.log(err);
          });
    },

    _executeSearch: function(config) {
      var deferred = new Deferred();
      // Pt from search
      if (config.searchtext) {
        this._getSearchPt(config.searchtext)
          .then(function(pt){
            deferred.resolve(pt);
          }.bind(this))
          .otherwise(function(err){
            deferred.resolve(null);
          });
      } else {
        deferred.resolve(null);
      }
      return deferred.promise;
    },

    _getSearchPt: function(searchTerm) {
      var deferred = new Deferred();
      var pt;
      if (this.searchWidget && searchTerm) {
        // Do search
        this.searchWidget.search(searchTerm)
          .then(function(result){
            if (result && result.results && result.results.length && result.results[0].results.length) {
              pt = result.results[0].results[0].extent.center;
              deferred.resolve(pt);
            } else {
              deferred.resolve(null);
            }
          }.bind(this))
          .otherwise(function(err){
            console.error(err);
            deferred.reject(null);
            console.log(err);
          }.bind(this));
      } else {
        deferred.resolve(null);
      }
      return deferred.promise;
    },

    // Get point

    _executeGetPt: function(config,pt) {
      var deferred = new Deferred();
      if (pt) { // Point from search
        deferred.resolve(pt);
        return deferred.promise;
      }
      var view = this.view;
      var geometryService = this._geometryService;
      var params = this._getPtParams(config);
      // Test for valid zoom params
      if ((!params.hasOwnProperty("lat") && !params.hasOwnProperty("lon")) && (!params.hasOwnProperty("x") && !params.hasOwnProperty("y"))) {
        var centerPt = this.view.center;
        deferred.resolve(centerPt); // return center
        return deferred.promise;
      }
      // Create point from params
      var pt = new Point();
      // Geographic
      if (params.lat && params.lon) {
        pt.latitude = params.lat;
        pt.longitude = params.lon;
        pt.spatialReference = SpatialReference.WGS84;
      } else if (params.x && params.y && params.wkid) {  // Web Mercator or something else
        pt.x = params.x;
        pt.y = params.y;
        pt.spatialReference = new SpatialReference({
          wkid: params.wkid
        });
      } else {  // Coord params missing, use center
        pt = view.center.clone();
      }
      // Project point if necessary
      if (!pt.spatialReference.equals(view.spatialReference.wkid)) {
        // Geographic or WebMercator
        if (webMercatorUtils.canProject(pt, view.spatialReference)) {
          pt = webMercatorUtils.project(pt, view.spatialReference);
          deferred.resolve(pt);
        } else { // Project
          var params = new ProjectParameters({
            geometries: [pt],
            outSR: view.spatialReference
          });
          geometryService.project(params)
            .then(function(result){
              var ptProj = result && result[0];
              deferred.resolve(ptProj);
            }.bind(this))
            .otherwise(function(err){
              // Return center if there was an issue
              pt = view.center.clone();
              deferred.resolve(pt);
              console.log(err);
            }.bind(this));
        }
      } else {
        deferred.resolve(pt);
      }
      return deferred.promise;
    },

     _getPtParams: function(config) {
      var ptParams = {};
      if (config.lat !== null && config.lon !== null) {
        ptParams.lat = this._getNumber(config.lat, -90, 90, 100000, null);
        ptParams.lon = this._getNumber(config.lon, -180, 180, 100000, null);
      } else if (config.x !== null && config.y !== null) { // Allow no wkid, default to 102100
        ptParams.x = this._getNumber(config.x, -100000000, 10000000, 1000, null);
        ptParams.y = this._getNumber(config.y, -100000000, 10000000, 1000, null);
        ptParams.wkid = this._getNumber(config.wkid, 0, 1000000, 1, 102100);
      } else {
        // No point params, invalid
      }
      return ptParams;
    },

    // Find places

    _executeFindPlaces: function(config,pt) {
      var category = config.places;
      if (category && pt && this.widgetsExt){
        this.widgetsExt.findPlaces.findByCategory(category, pt);
      }
      return pt;
    },

    // Zoom

    _executeZoom: function(config, pt) {
      if (pt) {
        var params = this._getZoomParams(config);
        return this._zoomMap(params, pt);
      } else {
        return null;
      }
    },

    _getZoomParams: function(config) {
      var params = {};
      // Zoom and Scale
      if (config.zoom && config.scale) {
        params.scale = this._getNumber(config.scale, 250, 500000000, 1, null);
      } else if (config.zoom) {
        params.zoom = this._getNumber(config.zoom, 0, 23, 1, null);
      } else if (config.scale) {
        params.scale = this._getNumber(config.scale, 250, 500000000, 1, null);
      }
      // 2D
      if (this._is2d) { // Rotation
        if (config.rotation){
          params.rotation = this._getNumber(config.rotation, 0, 360, 1, null);
        }
      } else { // 3D
        if (config.heading) {
          params.heading = this._getNumber(config.heading, 0, 360, 1, null);
        }
        if (config.tilt) {
          params.tilt = this._getNumber(config.tilt, 0, 90, 1, 45);
        } else if ((config.searchtext || config.places) && !params.tilt) { // Auto apply tilt for 3D search and places
          params.tilt = 75;
        }
        //params.altitude = this._getNumber(config.altitude, 0, 1000000000, 1, null);
      }
      return params;
    },

    _zoomMap: function(params,pt) {
      if (!pt && !params.zoom && !params.scale && !params.rotation && !params.heading && !params.tilt) {
        var deferred = new Deferred();
        deferred.resolve(null);
        return deferred.promise;
      }
      params.target = pt;
      return this.view.goTo(params);
    },

    // Home

    _setHomeWidget: function() {
      var home = this.view.ui.find("home");
      if (home) {
        var widget = home.widget;
        widget.viewpoint = this.view.viewpoint.clone();
      }
      return;
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _addWidget: function(name, position, options) {
      if (this.view) {
        position = this._returnValidPosition(name, position);
        if (position) {
          var widget = this._createWidget(name, options);
          if (widget) {
            var component = this._createComponent(name, widget);
            this.view.ui.add(component, position);
          }
        }
      }
    },

    _createComponent: function(name, widget) {
      var component = new Component({
          node: widget,
          id: name
        });
      return component;
    },

    _createWidget: function(name, options) {
      var view = this.view;
      var widget = null;
      var viewModel = {
          view: view
        };
      var allOptions = lang.mixin(viewModel, options);
      switch (name) {
        case "zoomin":
          widget = new Zoom(allOptions);
          break;
        case "home":
          widget = new Home(allOptions);
          break;
        case "navtoggle":
          widget = new NavigationToggle(allOptions);
          break;
        case "compass":
          widget = new Compass(allOptions);
          break;
        case "locate":
          widget = new Locate(allOptions);
          break;
        case "track":
          widget = new Track(allOptions);
          break;
        case "basemaptoggle":
          widget = new BasemapToggle({
            view: view,
            nextBasemap: options.nextBasemap
          });
          break;
        case "measure": // Create 2D or 3D widget
          widget = this._createMeasureWidget(this.view.type);
          break;
        case "slice":
          if (!this._is2d) { // 3D only
            widget = this._createSliceWidget();
          }
          break;
        case "search":
          //widget = new Search(allOptions);
          this.searchWidget = this._createSearchWidget(null, {view: this.view});
          widget = this.searchWidget;
          break;
        case "legend":
          widget = new Legend(allOptions);
          break;
        case "scalebar":
          widget = new ScaleBar(allOptions);
          break;
        default:
          widget = null;
      }

      return widget;
    },

    _returnValidPosition: function(name, position) {
      if (position === WIDGETS_LAYOUT.POSITION.topLeft ||
        position === WIDGETS_LAYOUT.POSITION.topRight ||
        position === WIDGETS_LAYOUT.POSITION.bottomLeft ||
        position === WIDGETS_LAYOUT.POSITION.bottomRight) {
        return position;
      } else if (position === "show"){
        return this._getDefaultWidgetPosition(name);
      } else {
        return null;
      }
    },

    _getWidgetsLayout: function(widgetsLayoutName) {
      var widgetsLayout;
      widgetsLayoutName = widgetsLayoutName || this._defaultWidgetsLayoutName;
      widgetsLayoutName = widgetsLayoutName.toLowerCase();
      switch (widgetsLayoutName) {
        case "top-left":
          widgetsLayout = WIDGETS_LAYOUT.topLeft;
          break;
        case "top-right":
          widgetsLayout = WIDGETS_LAYOUT.topRight;
          break;
        case "bottom-left":
          widgetsLayout = WIDGETS_LAYOUT.bottomLeft;
          break;
        case "bottom-right":
          widgetsLayout = WIDGETS_LAYOUT.bottomRight;
          break;
        default:
          widgetsLayout = WIDGETS_LAYOUT.topLeft; // Default
      }
      return widgetsLayout;
    },

    _getDefaultWidgetPosition: function(name) {
      var position;
      var widgetsLayout = this.widgetsLayout;
      if (name && widgetsLayout) {
        if (widgetsLayout.hasOwnProperty(name)) {
          position = widgetsLayout[name];
        } else {
          position = this._defaultWidgetPosition; // Default
        }
      }
      return position;
    },

    _createSearchWidget: function(id, searchOptions) {
      if (this.searchWidget) {
        return this.searchWidget;
      }
      var config = this._boilerplate.config;

      var search;

      // Defaults
      var options = {
        container: (id ? id : ""),
        highlightEnabled: true,
        popupEnabled: true,
        showPopupOnSelect: true
      }

      // Get configured search layer
      if (config.searchConfig) {
        if (config.searchConfig.sources) {
          var sources = config.searchConfig.sources;
          //options.sources = sources.filter((source) => {
          options.sources = sources.filter(function(source) {
            if (source.flayerId && source.url) {
              var layer = this.view.map.findLayerById(source.flayerId);
              source.featureLayer = layer ? layer : new FeatureLayer(source.url);
              // Added to default
              source.minSuggestCharacters = 0;
            }
            if (source.hasOwnProperty("enableSuggestions")) {
              source.suggestionsEnabled = source.enableSuggestions;
            }
            if (source.hasOwnProperty("searchWithinMap")) {
              source.withinViewEnabled = source.searchWithinMap;
            }
            return source;
          }.bind(this));
        }

        if (options.sources && options.sources.length && options.sources.length > 0) {
          options.includeDefaultSources = false;
        }

        options.searchAllEnabled = (config.searchConfig.enableSearchingAll) ? true : false;

        if (config.searchConfig.activeSourceIndex && options.sources && options.sources.length >= config.searchConfig.activeSourceIndex) {
          options.activeSourceIndex = config.searchConfig.activeSourceIndex;
        }
      }

      // Create search
      lang.mixin(options, searchOptions);
      search = new Search(options);

      // Enable search dropdown css for local portals with multiple locators (navbar only)
      // if (this._isLocalPortal && (search.viewModel.allSources.length > 1)) {
      if (search.viewModel.allSources.length > 1) {
        var css = document.createElement("style");
        css.type = "text/css";
        document.head.appendChild(css);
        css.sheet.insertRule(".calcite-maps .calcite-search-expanded .esri-search__sources-button.esri-widget--button {display: flex;}",0);
      }

      return search;
    },

    _createLegendWidget: function(id, legendOptions) {
      var legend;
      if (id) {
        var options = {container: id};
        lang.mixin(options, legendOptions);
        legend = new Legend(options);
      }
      return legend;
    },

    _createLayerListWidget: function(id, layerListOptions) {
      var layerList;
      layerListOptions = layerListOptions || {};
      if (id) {
        var options = {container: id};
        lang.mixin(options, layerListOptions);
        layerList = new LayerList(options);
      }
      return layerList;
    },

    _createPrintWidget: function(id, printOptions) {
      var print;
      printOptions = printOptions || {};
      if (id) {
        var options = {container: id};
        lang.mixin(options, printOptions);
        print = new Print(options);
      }
      return print;
    },

    _createMeasureWidget: function(type) {
      var expand = new Expand({
        expandIconClass: "esri-icon-polyline",
        view: this.view,
        id: "measure",
        expandTooltip: "Measure"
      });

      function createMeasureElements(expandDiv, options) {
        // Measure distance
        var titleDiv = document.createElement("div");
        titleDiv.innerHTML = options.title.innerHTML;
        titleDiv.className = options.title.className;
        expandDiv.appendChild(titleDiv);
        expandDiv.appendChild(options.widget.domNode);
        // Add clear button
        var clearBtn = document.createElement("button");
        clearBtn.className = options.button.className;
        clearBtn.setAttribute("title","Clear Measurement");
        clearBtn.setAttribute("aria-label","Clear Measurement");
        clearBtn.innerHTML = options.button.innerHTML;
        options.widget._clearBtn = clearBtn;
        // Container
        var distanceContainer = query(options.widget.domNode)[0].children[0];
        if (distanceContainer) {
          distanceContainer.appendChild(clearBtn);
        }
        on(clearBtn, "click", function(){
          query(distanceContainer).removeClass("expand-measure-message--active");
          query(clearBtn).addClass("hide");
          options.widget.viewModel.clearMeasurement();
        });
        options.widget.viewModel.watch("state", function(state){
          if (state === "measuring") {
            query(distanceContainer).removeClass("expand-measure-message--active");
          }
        });
        options.widget.viewModel.watch("active", function(active){
          if (active) {
            query(distanceContainer).addClass("expand-measure-message--active");
            options.otherWidget.viewModel.clearMeasurement();
            query(clearBtn).addClass("hide");
            query(options.otherWidget._clearBtn).addClass("hide");
          } else {
            query(distanceContainer).removeClass("expand-measure-message--active");
            query(clearBtn).removeClass("hide");
          }
        });
      }

      // Wire up when visible
      expand.watch("expanded", function(expanded){
        if (expanded) {
          var measure, area;
          // Create widgets
          if (type === "2d") {
            measure = new Measure2d({
              container: document.createElement("div"),
              view: this.view,
            });
            area = new Area2d({
              container: document.createElement("div"),
              view: this.view
            });
          } else {
            measure = new Measure3d({
              container: document.createElement("div"),
              view: this.view
            });
            area = new Area3d({
              container: document.createElement("div"),
              view: this.view
            });
          }

          // Main container
          var expandDiv = document.createElement("div");

          // Measure distance
          createMeasureElements(expandDiv, {
              widget: measure,
              otherWidget: area,
              title: {
                innerHTML: "Distance",
                className: "esri-widget expand-measure__title"
              },
              button: {
                innerHTML: "Clear",
                className: "esri-button esri-button--secondary esri-button-distance--clear hide"
              }
            });

          // Measure area
          createMeasureElements(expandDiv, {
              widget: area,
              otherWidget: measure,
              title: {
                innerHTML: "Area",
                className: "esri-widget expand-measure__title"
              },
              button: {
                innerHTML: "Clear",
                className: "esri-button esri-button--secondary esri-button-area--clear hide"
              }
            });

          // Add widgets to expand
          expand.content = expandDiv;
          expand._childMeasure = measure;
          expand._childArea = area;
          // Only one expand open
          this._closeExpands(expand);
        } else {
          // Clear out widgets
          expand._childMeasure.destroy();
          expand._childArea.destroy();
          expand.content.innerHTML = "";
        }
      }.bind(this));
      return expand;
    },

    _createSliceWidget: function() {
      var expand = new Expand({
        expandIconClass: "esri-icon-hollow-eye",
        view: this.view,
        id: "slice",
        expandTooltip: "Slice"
      });
      // Wire up when visible
      expand.watch("expanded", function(expanded){
        if (expanded) {
          var slice = new Slice({
            container: document.createElement("div"),
            view: this.view
          });
          expand.content = slice.domNode;
          expand._child = slice;
          this._closeExpands(expand);
        } else {
          expand._child.destroy();
        }
      }.bind(this));
      return expand;
    },

    _closeExpands: function(expand) {
      this.view.ui._components.forEach(function(component){
        if (component.id !== expand.id && component.widget.declaredClass === "esri.widgets.Expand") {
          component.widget.expanded = false;
        }
      });
    },

    // Webmap/webscene layer check

    _reportLayerLoadErrors: function(allLayers) {
      var webItemType = this._webItem.type;
      allLayers.forEach(function(layer) {
        if (layer instanceof UnsupportedLayer) {
          Message.show(Message.type.snap, new Error(this._errorMessage.layerLoadFailure + ". " + layer.title + " is unsupported."), true, this._showErrors);
        } else if (layer instanceof UnknownLayer) {
          Message.show(Message.type.snap, new Error(this._errorMessage.layerLoadFailure + ". " + " is an unknown type."), true, this._showErrors);
        } else {
          layer.load().otherwise(function(error){
            error.userMsg = this._errorMessage.layerLoadFailure + ". " + layer.title;
            Message.show(Message.type.snap, error, true, this._showErrors);
          }.bind(this));
        }
      }.bind(this));
    }

  })
});
