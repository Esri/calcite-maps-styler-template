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
  "application/base/reporterror",

  "boilerplate/ItemHelper",

  "esri/views/ui/Component",

  "esri/widgets/Zoom",
  "esri/widgets/Home",  
  "esri/widgets/Locate", 
  "esri/widgets/Track", 
  "esri/widgets/Compass",
  "esri/widgets/Search",
  "esri/widgets/Legend",
  "esri/widgets/BasemapToggle",
  "esri/widgets/Attribution",

  "esri/layers/UnsupportedLayer",
  "esri/layers/UnknownLayer",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",
  "dojo/Deferred",
  "dojo/_base/lang",

  "dojo/_base/declare",
], function (
  WIDGETS_LAYOUT, Err,
  ItemHelper,
  Component,
  Zoom, Home, Locate, Track, Compass, Search, Legend, BasemapToggle, Attribution,
  UnsupportedLayer, UnknownLayer,
  dom, domAttr, domClass, query, domConstruct, Deferred, lang,
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

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _webItem: null,

    _webItemType: {
      webMap: "Web Map",
      webScene: "Web Scene"
    }, 

    _defaultViewOptions: {
      padding: {top: 15, bottom: 30},
      ui: {
        components: ["attribution"],
        padding: {top: 15, left: 15, right: 15, bottom: 15}
      }
    },

    _defaultWidgetsLayoutName: "top-left",

    _defaultWidgetPosition: "top-left",

    _errorMessage: {
      webMapOrSceneLoadFailure: "could not be fully loaded. Stay tuned as <a target='_blank' href='https://developers.arcgis.com/javascript/latest/guide/migrating/index.html#webmap'>full support</a> for webmaps with the <a target='_blank' href='https://developers.arcgis.com/javascript/'>ArcGIS API for Javascript 4</a> is coming soon!",
      layerLoadFailure: "One or more layers could not be loaded. Stay tuned as <a target='_blank' href='https://developers.arcgis.com/javascript/latest/guide/migrating/index.html#webmap'>full support</a> for webmaps with the <a target='_blank' href='https://developers.arcgis.com/javascript/'>ArcGIS API for Javascript 4</a> is coming soon!"
    },

    //--------------------------------------------------------------------------
    //
    //  Public Members
    //
    //--------------------------------------------------------------------------

    view: null,

    widgetsLayout: null,

    // View

    createView: function(webItem, options) {
      var deferred = new Deferred();
      options = options || {};

      this._webItem = webItem;

      // Create the web map
      if (webItem.data.type === this._webItemType.webMap) {

        this.createWebMap(webItem).then(function (webMap) {
          this._watchForLoadErrors(webMap);
          // Create the map view
          options.map = webMap;
          
          this.createViewByType(webItem.data.type, options).then(function(view) {
            this.view = view;
            deferred.resolve({
              view: view,
              webMap: webMap,
              webScene: null
            });
          }.bind(this), function(error) {
            deferred.reject(error);
          });
        
        }.bind(this), function(error) {
          deferred.reject(error);
        });

      // Create the web scene
      } else if (webItem.data.type === this._webItemType.webScene) { 

        this.createWebScene(webItem).then(function (webScene) {
          this._watchForLoadErrors(webScene);
          // Create the scene view
          options.map = webScene;
          
          this.createViewByType(webItem.data.type, options).then(function(view) {
            this.view = view;
            deferred.resolve({
              view: view,
              webMap: null,
              webScene: webScene
            });
          }.bind(this), function(error) {
            deferred.reject(error);
          });
        
        }.bind(this), function(error) {
          deferred.reject(error);
        });

      } else {
        deferred.reject(new Error("ViewManager:: Web Map or Web Scene could not be created. Unknown item type."));
      }
      return deferred.promise;
    },

    createViewByType: function(type, options) {
      var deferred = new Deferred();
      // View options
      options = options || { ui:{} };
      var defaultOptions = this._defaultViewOptions;
      var allOptions = lang.mixin({}, defaultOptions, options);
      allOptions.ui = lang.mixin({}, defaultOptions.ui, allOptions.ui);
      // MapView
      if (type === this._webItemType.webMap) {
        require(["esri/views/MapView"], function (MapView) {
          var view = new MapView(allOptions);
          deferred.resolve(view);
        });
      } else if (type === this._webItemType.webScene) { // SceneView
        require(["esri/views/SceneView"], function (SceneView) {
          var view = new SceneView(allOptions);
          deferred.resolve(view);
        });
      } else {
        deferred.reject(new Error("ViewManager:: Could not create view. Unknow item type."));
      }
      return deferred.promise;
    },

    // WebMap

    createWebMap: function(webItem) {
      var deferred = new Deferred();
      var itemHelper = new ItemHelper();
      itemHelper.createWebMap(webItem).then(function(webMap) {
        deferred.resolve(webMap);
      }.bind(this), function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    },

    // WebScene

    createWebScene: function(webItem) {
      var deferred = new Deferred();
      var itemHelper = new ItemHelper();
      itemHelper.createWebScene(webItem).then(function(webScene) {
        deferred.resolve(webScene);
      }.bind(this), function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    },
    
    // Widgets for the map/scene view

    createMapWidgets: function() {
      var view = this.view;
      if (view) {
        var config = this._boilerplate.config;
        this.widgetsLayout = this._getWidgetsLayout(config.widgetslayout);
        // Add widgets
        if (config.widgetzoom) {
          this._addWidget("zoom", config.widgetzoompos, null);
        }
        if (config.widgethome) {
          this._addWidget("home", config.widgethomepos, null);
        }
        if (config.widgetcompass) {
          this._addWidget("compass", config.widgetcompasspos, null);
        }
        if (config.widgetlocate) {
          this._addWidget("locate", config.widgetlocatepos, null);
        }
        if (config.widgettrack) {
          this._addWidget("track", config.widgettrackpos, null);
        }
        if (config.widgetsearch) {
          this._addWidget("search", config.widgetsearchpos, null);
        }        
        if (config.widgetbasemaptoggle) {
          this._addWidget("basemaptoggle", config.widgetbasemaptogglepos, { nextBasemap: config.widgetnextbasemap });
        }
      }
    },

    createAppWidgets: function() {
      var view = this.view;
      if (view) {
        var settings = this._boilerplate.settings;
        this._searchWidget = this._createSearchWidget(settings.widgetSearch.containerId, {view: view});
        this._legendWidget = this._createLegendWidget(settings.widgetLegend.containerId, {view: view});        
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _addWidget: function(name, position, options) {
      if (this.view) {
        var widget = this._createWidget(name, options);
        if (widget) {
          var component = this._createComponent(name, widget);
          // Can provide custom position
          position = position || this._getWidgetPosition(name);
          position = this._returnValidPosition(position);
          this.view.ui.add(component, position);
        }
      }
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
      widgetsLayoutName.toLowerCase();
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

    _getWidgetPosition: function(name) {
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
      switch (name) {
        case "zoom":
          widget = new Zoom({
            viewModel: viewModel
          });
          break;
        case "home":
          widget = new Home({
            viewModel: viewModel
          });
          break;
        case "compass":
          widget = new Compass({
            viewModel: viewModel
          });
          break;
        case "locate":
          widget = new Locate({
            viewModel: viewModel
          });
          break;
        case "track":
          widget = new Track({
            viewModel: viewModel
          });
          break;
        case "basemaptoggle":
          widget = new BasemapToggle({
            viewModel: viewModel,
            nextBasemap: options.nextBasemap
          });
          break;
        case "search":
          widget = new Search({
            viewModel: viewModel
          });
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

    _createSearchWidget: function(id, searchOptions) {
      var options =   {
        highlightEnabled: false,
        popupEnabled: true,
        showPopupOnSelect: true
      }
      lang.mixin(options, searchOptions);
      var search = new Search(options, id);
      search.startup();
      return search;
    },

    _createLegendWidget: function(id, legendOptions) {
      var options = {};
      lang.mixin(options, legendOptions);
      var legend = new Legend(options, id);
      legend.startup();
      return legend;
    },

    _setMapWidgetEvents: function() {
      this._setCompassEvents();
      this._setHomeEvents();
    },

    _setCompassEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        var compass = activeView.ui.find("compass");
        if (activeView.type === "2d") {
          activeView.watch("rotation", function(result) { //
            if (compass && activeView.viewpoint) {
              var visible = Math.round(result) !== 0;
              if (visible !== compass.widget.visible) {
                compass.widget.visible = visible; // TODO - fade in/out  
              }
            }
          });
        } else {
          activeView.watch("scale", function(result) { //
            if (compass && activeView.viewpoint) {
              var visible = Math.round(activeView.viewpoint.rotation) !== 0;
              if (visible !== compass.widget.visible) {
                compass.widget.visible = visible; // TODO - fade in/out  
              }
            }
          });
        }
      }
    },

    _setHomeEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        var home = activeView.ui.find("home").widget;
        home._state = {
          ready: false,
          clicked:false
        }
        
        function setHomeVisible(visible) {
          if (home._state.ready) {
            if (home._state.clicked) {
              home.visible = false;
              home._state.clicked = false;
            } else {
              if (home.visible !== visible) {
                home.visible = visible; // TODO - fade in/out
              }
            }
          }
        }
        
        home.viewModel.watch("state", function(result) {
          if (result === "going-home") {
            home._state.clicked = true;            
          }
        });

        function doneLoading(evt) {
          //console.log(evt + ": ready: " + activeView.ready + " | working: " + activeView.layerViewManager.factory.working + " | stationary: " + activeView.stationary + " | updating: " + activeView.updating);
          if (!activeView.layerViewManager.factory.working && activeView.stationary && !activeView.updating || activeView.interacting) {
            if (!home._state.ready) {
              home._state.ready = true;
              setHomeVisible(false);
            } else {
              setHomeVisible(true);
            }
          }
        }
        
        activeView.layerViewManager.factory.watch("working", function(newVal, oldVal) {
          doneLoading("LayerViewManager");
        });
        activeView.watch("stationary", function(newVal, oldVal) {
          doneLoading("Stationary");
        });
        activeView.watch("updating", function(newVal, oldVal) {
          doneLoading("Updating");
        });
        activeView.watch("interacting", function(newVal, oldVal) {
          doneLoading("interacting");
        });
      }
    },

    // Webmap/webscene layer check

    _watchForLoadErrors: function(webMapOrWebScene) {

      var webItemType = this._webItem.data.type === this._webItemType.webMap ? this._webItemType.webMap : this._webItemType.webScene;

      // Webmap/webscene load errors
      webMapOrWebScene.watch("loadStatus", function(status) {
        if (status === "failed") {
          Err.show(Err.name.snap, webItemType + " " + this._errorMessage.webMapOrSceneLoadFailure + " - " + status);
        };
      }.bind(this));

      // Map layers load errors
      webMapOrWebScene.then(function(map) {

        map.allLayers.forEach(function(layer) {
          
          // Unsupported layer
          if (layer instanceof UnsupportedLayer) {
            Err.show(Err.name.snap, this._errorMessage.layerLoadFailure + ": " + layer.title + " " + "UnsupportedLayer");
          }
          // Unknow layer
          if (layer instanceof UnknownLayer) {
            Err.show(Err.name.snap, this._errorMessage.layerLoadFailure + ": " + layer.title + " " + "UnknownLayer");
          }

          // Layer load failed (notified by loadFailed)
          layer.watch("loadStatus", function(err) {
            if (err === "failed") {
              Err.show(Err.name.snap, this._errorMessage.layerLoadFailure + ": " + layer.title + " " + err);
            }
          }.bind(this));

        }.bind(this), function(err) {
          Err.show(Err.name.snap, this._errorMessage.layerLoadFailure + ": " + layer.title + " " + err);
        }.bind(this));

      }.bind(this), function(err){
        Err.show(Err.name.snap, webItemType + " " + this._errorMessage.webMapOrSceneLoadFailure + " - " + err);
      }.bind(this));

    }

  })
});
