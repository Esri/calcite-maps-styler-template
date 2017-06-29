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

  "boilerplate/ItemHelper",

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
  "esri/widgets/Attribution",

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

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",
  "dojo/Deferred",
  "dojo/_base/lang",
  "dojo/promise/all",

  "dojo/_base/declare",
], function (
  WIDGETS_LAYOUT, WidgetsExt, Share, Message,
  ItemHelper,
  Component,
  Zoom, Home, NavigationToggle, Locate, Track, Compass, Search, Legend, LayerList, ScaleBar, Print, BasemapToggle, Attribution,
  UnsupportedLayer, UnknownLayer,
  Point, Viewpoint, Camera, webMercatorUtils, GeometryService, ProjectParameters, SpatialReference,
  watchUtils,
  dom, domAttr, domClass, query, domConstruct, Deferred, lang, all,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (boilerplate) {

      this._boilerplate = boilerplate;

      var widgetsLayoutName = boilerplate.config.widgetslayout;

      this.widgetsLayout = this._getWidgetsLayout(widgetsLayoutName);

      this._showErrors = boilerplate.config.showerrors;

      this._geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");

      this._printServiceUrl = "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _webItem: null,

    _is2d: true,

    _defaultViewOptions: {
      padding: {top: 15, bottom: 30},
      ui: {
        components: ["attribution"],
        padding: {top: 15, left: 15, right: 15, bottom: 15}
      }
    },

    _uiPadding: null,

    _defaultWidgetsLayoutName: "top-left",

    _defaultWidgetPosition: "top-left",

    _defaultPopupDockPosition: "none",

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
      var itemHelper = new ItemHelper();

      function loadAll(webMapOrWebScene, options, ref) {
        // Load view
        ref._loadView(webMapOrWebScene, options)
          .then(function(view){
            ref.view = view;
            results.view = view;
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

      // Load map or scene view
      if (webItem.data.type === "Web Map") {
        this._is2d = true;
        itemHelper.createWebMap(webItem)
          .then(function(webMap) {
            results.webMap = webMap;
            loadAll(webMap, viewOptions, this);
          }.bind(this))
          .otherwise(function(error) {
            deferred.reject(error);
          }.bind(this));
      } else if (webItem.data.type === "Web Scene") {
        this._is2d = false;
        itemHelper.createWebScene(webItem)
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

    _getValidNextBasemap: function(existingBasemapId,basemap) {
      var validBasemap;
      if (basemap) {
        if (basemap.match(/^(streets|satellite|hybrid|terrain|topo|gray|dark-gray|oceans|national-geographic|osm|dark-gray-vector|gray-vector|streets-vector|topo-vector|streets-night-vector|streets-relief-vector|streets-navigation-vector)$/)) {
          validBasemap = basemap;
        }
      }
      if (!validBasemap || existingBasemapId === basemap) {
        if (existingBasemapId.indexOf("streets") > -1) {
          validBasemap = "satellite";
        } else {
          validBasemap = "streets";
        }
      }
      return validBasemap;
    },

    _setBasemap: function(map) {
      var basemapId = this._boilerplate.config.basemap;
      if ((map && basemapId) && (map.basemap.id !== basemapId)) {
        if (basemapId.match(/^(streets|satellite|hybrid|terrain|topo|gray|dark-gray|oceans|national-geographic|osm|dark-gray-vector|gray-vector|streets-vector|topo-vector|streets-night-vector|streets-relief-vector|streets-navigation-vector)$/)) {
          map.basemap = basemapId;          
        }
      }
    },

    // Share

    setShare: function() {
      var view = this.view;
      if (view) {
        view.then(function(){
            this.appShare = new Share(view, this.searchWidget, this._boilerplate);
          }.bind(this));
      }
    },
    
    // Widgets for the app

    createAppWidgets: function() {
      var view = this.view;
      if (view) {
        var settings = this._boilerplate.settings;
        this.searchWidget = this._createSearchWidget(settings.search.containerId, {view: view});
        this.legendWidget = this._createLegendWidget(settings.legend.containerId, {view: view});
        this.layerListWidget = this._createLayerListWidget(settings.widgetLayers.containerId, {view: view});
        this.printListWidget = this._createPrintWidget(settings.widgetPrint.containerId, {
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
        // Do not allow search to be added to the map
        // if (config.search) {
        //   this._addWidget("search", config.search, options);
        // }        
        if (config.legend) {
          this._addWidget("legend", config.legend, options);
        }        
        if (config.scalebar) {
          options.style = "dual";
          this._addWidget("scalebar", config.scalebar, options);
        }        
        if (config.basemaptoggle) {
          options.nextBasemap = this._getValidNextBasemap(view.map.basemap.id,config.nextbasemap);
          this._addWidget("basemaptoggle", config.basemaptoggle, options);  
        }
      }
    },

    setPopupPosition: function(position) {
      var view = this.view;
      if (view) {
        view.then(function() {
          var position = position || this._boilerplate.config.popupDocking || this._defaultPopupDockPosition;
          if (position.match(/^(top-left|top-center|top-right|bottom-left|bottom-center|bottom-right)$/)) {
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
        popup: true
      };
      var view = this.view;
      var search = this.searchWidget;
      if (view && search) {
        // Widget extensions
        this.widgetsExt = new WidgetsExt(view, search);
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
          .then(function() { // Get the point from params or search
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

    // Search

    _executeSearch: function(config) {
      var deferred = new Deferred();
      // Pt from search
      this._getSearchPt(config.search)
        .then(function(pt){
          deferred.resolve(pt);
        }.bind(this))
        .otherwise(function(err){
          deferred.resolve(null);
        });
      return deferred.promise;
    },

    _getSearchPt: function(searchTerm) {
      var deferred = new Deferred();
      var pt;
      if (this.searchWidget && searchTerm) {
        this.searchWidget.search(searchTerm)
          .then(function(results){
            if (results && results.length && results[0].results.length) {
              pt = results[0].results[0].extent.center;
              // Return when display is done
              watchUtils.whenTrueOnce(this.view, "stationary", function(){
                watchUtils.whenFalseOnce(this.view, "updating", function(){
                  deferred.resolve(pt);
                });
              }.bind(this));
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
      } else if (config.x !== null && config.y !== null && config.wkid !== null) {
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
          params.tilt = this._getNumber(config.tilt, 0, 90, 1, null);
        } else if (config.search || config.places) { // Auto apply tilt for 3D search and places
          params.tilt = 75;
        }
        //params.altitude = this._getNumber(config.altitude, 0, 1000000000, 1, null);
      }
      return params;
    },

    _zoomMap: function(params,pt) {
      params.target = pt;
      var tilt = params.tilt;
      delete params.tilt;
      if (this._is2d) { // Zoom
        return this.view.goTo(params, {animate: false});
      } else { // Zoom and tilt to ensure exact center
        return this.view.goTo(params)
          .then(function() {
            return this.view.goTo({target: params.pt, tilt: tilt}, {duration: 500});
          }.bind(this));
      }
    },
  
    // Home

    _setHomeWidget: function() {
      var home = this.view.ui.find("home").widget;
      if (home) {
        home.viewpoint = this.view.viewpoint.clone();
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
        if (position && position !== "hide") { // TODO
          var widget = this._createWidget(name, options);
          if (widget) {
            var component = this._createComponent(name, widget);
            // Can provide custom position
            if (position === "show") {
              position = this._getDefaultWidgetPosition(name); 
            } else {
              position = this._returnValidPosition(position);
            }
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
            viewModel: viewModel,
            nextBasemap: options.nextBasemap
          });
          break;
        case "search":
          widget = new Search(allOptions);
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

    _returnValidPosition: function(position) {
      if (position === WIDGETS_LAYOUT.POSITION.topLeft || 
        position === WIDGETS_LAYOUT.POSITION.topRight || 
        position === WIDGETS_LAYOUT.POSITION.bottomLeft || 
        position === WIDGETS_LAYOUT.POSITION.bottomRight) {
        return position;
      } else {
        return this._defaultWidgetPosition;
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
      var search;
      if (id) {
        var options = {
          container: id,
          highlightEnabled: false,
          popupEnabled: true,
          showPopupOnSelect: true
        }
        lang.mixin(options, searchOptions);
        search = new Search(options);
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

    // Webmap/webscene layer check

    _reportLayerLoadErrors: function(allLayers) {
      var webItemType = this._webItem.data.type;
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
