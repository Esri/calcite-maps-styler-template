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
  // TODO - lazy load these...
  "esri/widgets/Zoom",
  "esri/widgets/Attribution",
  "esri/widgets/Compass",
  "esri/widgets/Home",  
  "esri/widgets/Search",
  "esri/widgets/Legend",

  "esri/views/ui/Component",

  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/dom",
  "dojo/dom-class",

  "dojo/i18n!./nls/resources",

  "dojo/Deferred"

], function (
  Zoom, Attribution, Compass, Home, Search, Legend,
  Component,
  declare, lang, dom, domClass,
  i18n,
  Deferred
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _defaultComponents: ["attribution"],

    config: null,

    settings: null,

    activeView: null,

    webMap: null,

    webScene: null,

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {},

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    
    reportError: function (error) {
      // remove loading class from body
      domClass.remove(document.body, CSS.loading);
      domClass.add(document.body, CSS.error);
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        node.innerHTML = "<h1><span class=\"" + CSS.errorIcon + "\"></span> " + i18n.error + "</h1><p>" + error.message + "</p>";
      }
      return error;
    },

    createView: function(boilerplate, viewOptions) {

      this._boilerplate = boilerplate;

      viewOptions = viewOptions || {};

      var promise = null;

      if (boilerplate) {
        promise = this._createViewFromPortalItem(boilerplate, viewOptions);
        promise.then(function(view) {
          this.activeView = view;
          this.createWidgets(boilerplate.config.view.ui);  
        }.bind(this));
      } else {
        this.reportError(new Error("ViewManager:: Boilerplate is not defined"));
      }

      return promise;
    },

    setPadding: function(settings) {
      if (this.activeView) {
        var viewPadding = settings.viewPadding,
          uiPadding = settings.uiPadding;

        activeView.then(function(){
          // if (window.innerWidth <= 768 && _this.activeLayout.viewPaddingSmallScreen) {
          //   viewPadding = _this.activeLayout.viewPaddingSmallScreen;
          // }
          this.activeView.padding = viewPadding;
          this.activeView.ui.padding = uiPadding;        
        }.bind(this));
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    // View

    _createViewFromPortalItem: function(boilerplate, viewOptions) {

      var deferred = new Deferred();

      var config = boilerplate.config;
      var settings = boilerplate.settings;
      var boilerplateResults = boilerplate.results;
      var webmapItem = boilerplateResults.webmapItem;
      var websceneItem = boilerplateResults.websceneItem;
      var webItem = webmapItem || websceneItem;

      var defaultViewOptions = {
        // container: id,
        padding: config.view.padding, // from config.json
        ui: {}
      }
      
      var options = lang.mixin(defaultViewOptions, viewOptions);
      options.ui.components = this._defaultComponents;
      
      if (webItem) {
        if (webItem.data instanceof Error) {
          deferred.reject(webItem.data);
        } else if (webItem.data.type === "Web Map") { // Create web map
          require(["esri/WebMap","esri/views/MapView"], function (WebMap, MapView) {
            var webmap = null;
            if (webItem.data) {
              webmap = new WebMap({
                portalItem: webItem.data
              });
            } else if (webItem.json) {
              webmap = WebMap.fromJSON(webItem.json.itemData);
              webmap.portalItem = webItem.json.item;
            }
            if (!webmap) {
              deferred.reject(new Error("ViewManager:: Web Map does not have usable data."));
            } else { // Create MapView
              options.map = webmap;
              options.container = settings.webmap.containerId;
              view = new MapView(options);
              deferred.resolve(view);
            }
          }.bind(this));
        } else if (webItem.data.type === "Web Scene") { // Create web scene
          require(["esri/WebScene","esri/views/SceneView"], function (WebScene, SceneView) {
            var webscene = null;
            if (webItem.data) {
              webscene = new WebScene({
                portalItem: webItem.data
              });
            } else if (webItem.json) {
              webscene = WebScene.fromJSON(webItem.json.itemData);
              webscene.portalItem = webItem.json.item;
            }
            if (!webscene) {
              deferred.reject(new Error("ViewManager:: Web Scene does not have usable data."));
            } else { // Create SceneView
              options.map = webscene;
              options.container = settings.webscene.containerId;
              view = new SceneView(options);
              deferred.resolve(view);
            }
          }.bind(this));
        } else {
          deferred.reject(new Error("ViewManager:: Could not create Web Map or Web Scene from data. Unknown item type."));            
        }
      } else {
        deferred.reject(new Error("ViewManager:: Could not create Web Map or Web Scene from data."));          
      }

      return deferred.promise;
    },

    // Widgets

    createWidgets: function(ui) {
      var view = this.activeView
      if (view) {
        for (var i=0; i < ui.components.length; i++){
          component = this._createComponent(view, ui.components[i].name, ui.components[i].visible);
          view.ui.add(component, ui.components[i].position);
        }
      }
    },

    createSearchWidget: function(id, searchOptions) {
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

    createLegendWidget: function(id, legendOptions) {
      var options = {};
      lang.mixin(options, legendOptions);
      var legend = new Legend(options, id);
      legend.startup();
      return legend;
    },

    _createComponent: function(view, name, visible) {
      var component,
        widget = this._createWidget(view, name, visible);
      component = new Component({
        node: widget, 
        id: name
      });
      return component;
    },

    _createWidget: function(view, name, visible) {
      var widget,
        viewModel = {
          view: view
        }
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
        case "basemaptoggle":
          widget = new BasemapToggle({
            viewModel: viewModel
          });
          break;
        case "search":
          widget = new Search({
            viewModel: viewModel
          });
          break;
      }
      widget.visible = visible;
      widget.startup();

      return widget;
    }
  });
});