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
  "application/base/widgetslayout",
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
  "dojo/promise/all",

  "dojo/_base/declare",
], function (
  WIDGETS_LAYOUT, Message,
  ItemHelper,
  Component,
  Zoom, Home, NavigationToggle, Locate, Track, Compass, Search, Legend, BasemapToggle, Attribution,
  UnsupportedLayer, UnknownLayer,
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
      }
    },

    // Widgets for the map/scene view

    createMapWidgets: function() {
      var view = this.view;
      if (view) {
        var config = this._boilerplate.config;
        // Add widgets
        if (config.widgetzoom) {
          this._addWidget("zoom", config.widgetzoom, null);
        }
        if (config.widgethome) {
          this._addWidget("home", config.widgethome, null);
        }
        if (config.widgetnavtoggle && view.type !== "2d") {
          this._addWidget("navtoggle", config.widgetnavtoggle, null);
        }
        if (config.widgetcompass) {
          this._addWidget("compass", config.widgetcompass, null);
        }
        if (config.widgetlocate) {
          this._addWidget("locate", config.widgetlocate, null);
        }
        if (config.widgettrack) {
          this._addWidget("track", config.widgettrack, null);
        }
        if (config.widgetsearch) {
          this._addWidget("search", config.widgetsearch, null);
        }        
        if (config.widgetbasemaptoggle) {
          this._addWidget("basemaptoggle", config.widgetbasemaptoggle, { nextBasemap: config.widgetnextbasemap });
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
          }                    
        }.bind(this));
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
        case "navtoggle":
          widget = new NavigationToggle({
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
        legend.startup();
      }
      return legend;
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
