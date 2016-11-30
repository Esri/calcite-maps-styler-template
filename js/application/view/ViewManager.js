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
  "esri/widgets/BasemapToggle",
  "esri/widgets/Attribution",

  "esri/layers/UnsupportedLayer",
  "esri/layers/UnknownLayer",

  "esri/geometry/Point",
  "esri/Viewpoint",
  "esri/Camera",
  "esri/geometry/support/webMercatorUtils",

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
  WIDGETS_LAYOUT, WidgetsExt, Message,
  ItemHelper,
  Component,
  Zoom, Home, NavigationToggle, Locate, Track, Compass, Search, Legend, LayerList, BasemapToggle, Attribution,
  UnsupportedLayer, UnknownLayer,
  Point, Viewpoint, Camera, webMercatorUtils,
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

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _webItem: null,

    _defaultViewOptions: {
      padding: {top: 15, bottom: 30},
      ui: {
        components: ["attribution"],
        padding: {top: 15, left: 15, right: 15, bottom: 15}
      }
    },

    _defaultWidgetsLayoutName: "top-left",

    _defaultWidgetPosition: "top-left",

    _defaultPopupDockPosition: "top-right",

    _widgetsExt: null,

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

    // View

    createViewFromItem: function(webItem, options) {
      var deferred = new Deferred();
      options = options || {};
      this._webItem = webItem;
      // Promise return values
      var results = {
        view: null,
        webMap: null,
        webScene: null
      }
      var itemHelper = new ItemHelper();
      // Create map or scene view
      if (webItem.data.type === "Web Map") {
        itemHelper.createWebMap(webItem)
          .then(function(webMap) {
            results.webMap = webMap;
            this._loadView(webMap, options, results, deferred);
          }.bind(this))
          .otherwise(function(error) {
            deferred.reject(error);
          });
      } else if (webItem.data.type === "Web Scene") {
        itemHelper.createWebScene(webItem)
          .then(function(webScene) {
            results.webScene = webScene;
            this._loadView(webScene, options, results, deferred);
          }.bind(this))
          .otherwise(function(error) {
            deferred.reject(error);
          });
      } else {
        deferred.reject(new Error(this._errorMessage.webMapOrSceneUnknownItemType));
      }
      return deferred.promise;
    },

    // Load map and view

    _loadView: function(webMapOrWebScene, options, results, deferred) {
      // Load the map and layers and then view
      webMapOrWebScene.load()
        .then(function() {
          this._createView(webMapOrWebScene, options, results).then(function(view) {
            this.view = view;
            results.view = view;
            deferred.resolve(results); // done
          }.bind(this))
          .otherwise(function(error) {
            error.userMsg = "Creating view";
            deferred.reject(error);
          })
          this._reportLayerLoadErrors(webMapOrWebScene.allLayers);
        }.bind(this))
        .otherwise(function (error) {
          error.userMsg = webMapOrWebScene.portalItem.type + " " + this._errorMessage.webMapOrSceneNotFullyLoaded;
          deferred.reject(error);
        }.bind(this));
    },
    
    // Create the map/scene view
    
    _createView: function(webMapOrWebScene, options) {
      var viewDeferred = new Deferred();
      // View options
      options = options || { ui:{} };
      var defaultOptions = this._defaultViewOptions;
      var allOptions = lang.mixin({}, defaultOptions, options);
      allOptions.ui = lang.mixin({}, defaultOptions.ui, allOptions.ui);
      // Create view
      var module = webMapOrWebScene.portalItem.type === "Web Map" ? "esri/views/MapView" : "esri/views/SceneView";
      require([module], function(View){
        //allOptions.map = webMapOrWebScene; // This fails!
        var view = new View(allOptions);
        view.map = webMapOrWebScene; // This works
        viewDeferred.resolve(view);
      });
      return viewDeferred.promise;
    },

    // Widgets for the app

    createAppWidgets: function() {
      var view = this.view;
      if (view) {
        var settings = this._boilerplate.settings;
        this.searchWidget = this._createSearchWidget(settings.widgetSearch.containerId, {view: view});
        this.legendWidget = this._createLegendWidget(settings.widgetLegend.containerId, {view: view});
        this.layerListWidget = this._createlayerListWidget(settings.widgetLayers.containerId, {view: view});
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
        if (config.widgetzoom) {
          this._addWidget("zoom", config.widgetzoom, options);
        }
        if (config.widgethome) {
          this._addWidget("home", config.widgethome, options);
        }
        if (config.widgetnavtoggle && view.type !== "2d") {
          this._addWidget("navtoggle", config.widgetnavtoggle, options);
        }
        if (config.widgetcompass) {
          this._addWidget("compass", config.widgetcompass, options);
        }
        if (config.widgetlocate) {
          this._addWidget("locate", config.widgetlocate, options);
        }
        if (config.widgettrack) {
          this._addWidget("track", config.widgettrack, options);          
        }
        if (config.widgetsearch) {
          this._addWidget("search", config.widgetsearch, options);
        }        
        if (config.widgetbasemaptoggle) {
          options.nextBasemap = config.widgetnextbasemap; // TODO
          this._addWidget("basemaptoggle", config.widgetbasemaptoggle, options);
        }
      }
    },

    setPopupPosition: function(position) {
      var view = this.view;
      if (view) {
        view.then(function() {
          var position = position || this._boilerplate.config.dockposition || this._defaultPopupDockPosition;
          if (position.match(/^(top-left|top-center|top-right|bottom-left|bottom-center|bottom-right)$/)) {
            view.popup.dockOptions = {
              position: position
            }
          } else if (position.match(/^(none)$/)) {
            view.popup.dockEnabled = false;
            view.popup.dockOptions = {
              buttonEnabled: false
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
      var view = this.view;
      var search = this.searchWidget;
      if (view && search) {
        // Widget extensions
        var widgetsExt = new WidgetsExt(view, search);
        widgetsExt.setExtensions(widgetOptions);
        this._widgetsExt = widgetsExt;
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

    setExtent: function() {
      var view = this.view;
      if (view) {
        var is2d = view.type === "2d";
        // Params
        var lat = this._getNumber(this._boilerplate.config.lat, -90, 90, 100000, null);
        var lon = this._getNumber(this._boilerplate.config.lon, -180, 180, 100000, null);
        var x = this._getNumber(this._boilerplate.config.x, -100000000, 10000000, 1000, null);
        var y = this._getNumber(this._boilerplate.config.y, -100000000, 10000000, 1000, null);
        var zoom = this._getNumber(this._boilerplate.config.zoom, 0, 18, 1, null);
        var scale = this._getNumber(this._boilerplate.config.scale, 250, 500000000, 1, null);
        var tilt = this._getNumber(this._boilerplate.config.tilt, 0, 90, 1, null);
        var altitude = this._getNumber(this._boilerplate.config.altitude, 0, 1000000000, 1, null);
        var rotation = this._getNumber(this._boilerplate.config.rotation, 0, 360, 1, null);
        var heading = this._getNumber(this._boilerplate.config.heading, 0, 360, 1, null);
        // 1-20 level converter - TODO
        var zoomArray = [295828035, 147914382, 73957191, 36978595, 18489298, 9244649, 4622324, 2311162, 1155581, 577791, 288895, 144448, 72224, 36112, 18056, 9028, 4514, 2257, 1128]

        // Invalid params
        // if ((!lat || !lon) && (!x || !y)) {
        //   return;
        // }

        view.then(function() {
          // Map
          if (is2d) {  
            setPosition().then(function(){
              setHomeWidget();
            });              
          } else { // Scene
            watchUtils.whenTrueOnce(view, "ready", function() {
              setPosition().then(function(){
                setHomeWidget();
              });
            });            
          }
        })
        .otherwise(function(err){
          console.log(err);
        });

        function getCenter() {
          var pt;
          if (lat && lon) {
            pt = new Point({
              latitude: lat,
              longitude: lon
            });
            if (view.spatialReference.isWebMercator) {
              pt = webMercatorUtils.geographicToWebMercator(pt); // TODO - assume mercator
            } else {
              pt.spatialReference = view.spatialReference;
            }
          } else if (x && y) {
            pt = new Point({
              x: x,
              y: y
            })
            pt.spatialReference = view.spatialReference;
          } else {
            pt = view.center.clone(); // TODO - or null
          }
          return pt;
        }
      
        function setPosition() {
          var params = {};
          // Center
          var pt = getCenter();
          // Altitude
          if (altitude) {
            pt.z = params.altitude;
          }
          params.center = pt;
          // params.target = pt;
          // Scale
          if (scale) {
            // parmas.zoom = zoom; // Bug - won't goTo({zoom: xxx}), have to use scale
            //params.scale = zoomArray[zoom];
            params.scale = scale;
          } else if (zoom) { // Zoom
            //params.scale = zoomArray[zoom];
            params.zoom = zoom;
          }
          // Rotation
          if (is2d && rotation) {
            params.rotation = rotation;
          }
          // Heading
          if (!is2d && heading) {
            params.heading = heading;
          }

          var promise = view.goTo(params).then(function(){
            if (!is2d) {
              return view.goTo({
                center: pt,
                tilt: tilt
              }, {duration: 1000}); 
            }
          });
          return promise;
        }

        function setHomeWidget() {
          var home = view.ui.find("home").widget;
          if (home) {
            home.viewpoint = view.viewpoint.clone();
          }   
        }
      }
    },

    setBasemap: function() {
      var view = this.view;
      var basemap = this._boilerplate.config.basemap;
      if (view && basemap) {
        if (basemap.match(/^(streets|satellite|hybrid|terrain|topo|gray|dark-gray|oceans|national-geographic|osm|dark-gray-vector|gray-vector|streets-vector|topo-vector|streets-night-vector|streets-relief-vector|streets-navigation-vector)$/)) {
          view.map.basemap = basemap;          
        }
      }
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
        case "zoom":
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
        default:
          widget = null;
      }

      if (widget) {
        //widget.visible = options.visible;
        widget.startup();
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
        var options =   {
          highlightEnabled: false,
          popupEnabled: true,
          showPopupOnSelect: true
        }
        lang.mixin(options, searchOptions);
        search = new Search(options, id);
        search.startup();
      }
      return search;
    },

    _createLegendWidget: function(id, legendOptions) {
      var legend;
      if (id) {
        var options = {};
        lang.mixin(options, legendOptions);
        legend = new Legend(options, id);
      }
      return legend;
    },

    _createlayerListWidget: function(id, layerListOptions) {
      var layerList;
      layerListOptions = layerListOptions || {};
      if (id) {
        //var options = {};
        //lang.mixin(options, legendOptions);
        layerList = new LayerList(layerListOptions, id);
      }
      return layerList;
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
