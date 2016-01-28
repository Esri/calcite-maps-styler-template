/*global define,document */
/*jslint sloppy:true,nomen:true */
/*jshint unused:true */
/*
 | Copyright 2014 Esri
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
  "dojo/_base/declare",
  "dojo/_base/lang",

  "dojo/Deferred",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-style",
  "dojo/on",

  "esri/Camera",

  "esri/geometry/Point",
  "esri/geometry/SpatialReference",

  "esri/portal/PortalItem",

  "esri/views/SceneView",
  "esri/WebScene",

  "esri/widgets/Search",

  "application/uiUtils",
  "application/LayerList/LayerList",
  "application/SlideList/SlideList",

  "dojo/domReady!"
], function(
  declare, lang,
  Deferred,
  dom, domAttr, domClass, domStyle, on,
  Camera,
  Point, SpatialReference,
  PortalItem,
  SceneView, WebScene,
  Search,
  uiUtils, LayerList, SlideList
) {
  return declare(null, {

    config: {},
    scene: null,
    view: null,
    uiUtils: null,
    search: null,

    startup: function(config) {
      var promise;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;
        this.uiUtils = new uiUtils();
        this.uiUtils.init(config);
        promise = this._createWebScene();
      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
        var def = new Deferred();
        def.reject(error);
        promise = def.promise;
      }
      return promise;
    },

    reportError: function(error) {
      // remove loading class from body
      domClass.remove(document.body, "app-loading");
      domClass.add(document.body, "app-error");
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        if (this.config && this.config.i18n) {
          node.innerHTML = this.config.i18n.scene.error + ": " + error.message;
        } else {
          node.innerHTML = "Unable to create scene: " + error.message;
        }
      }
      return error;
    },

    // create a scene based on the input web scene id
    _createWebScene: function() {
      // Create a scene from json will be coming.
      // for now scene from id only.
      // if(this.config.itemInfo){
      //   scene = new WebScene(this.config.itemInfo);
      // }else{
      if (!this.config.webscene) {
        return;
      }

      this.scene = new WebScene({
        portalItem: new PortalItem({
          id: this.config.webscene
        })
      });
      var viewProperties = {
        map: this.scene,
        container: "panelView"
      };
      if (this.config.components) {
        viewProperties.ui = {
          components: this.config.components.split(",")
        };
      }
      var camera = this._setCameraViewpoint();
      if (camera) {
        viewProperties.camera = camera;
      }

      this.view = new SceneView(viewProperties);

      this.view.then(lang.hitch(this, function(response) {
        this._initApp();
        return response;
      }), this.reportError);

    },

    // set camera viewpoint
    _setCameraViewpoint: function() {
      var camera;
      var viewpointParamString = null;
      if (this.config.viewpoint) {
        viewpointParamString = this.config.viewpoint;
      } else {
        return null;
      }

      var viewpointArray = viewpointParamString.split(";");

      if (viewpointArray.length > 0) {
        var cameraString = "";
        var tiltHeading = "";
        for (var i = 0; i < viewpointArray.length; i++) {
          if (viewpointArray[i].indexOf("cam:") !== -1) {
            cameraString = viewpointArray[i];
          } else {
            tiltHeading = viewpointArray[i];
          }
        }
        if (cameraString !== "") {
          cameraString = cameraString.substr(4, cameraString.length - 4);
          var positionArray = cameraString.split(",");
          if (positionArray.length >= 3) {
            var x = 0,
              y = 0,
              z = 0;
            x = parseFloat(positionArray[0]);
            y = parseFloat(positionArray[1]);
            z = parseFloat(positionArray[2]);
            var sr = SpatialReference.WGS84;


            if (positionArray.length === 4) {
              sr = new SpatialReference(parseInt(positionArray[3], 10));
            }

            var cameraPosition = new Point(x, y, z, sr);
            var heading = 0,
              tilt = 0;
            if (tiltHeading !== "") {
              var tiltHeadingArray = tiltHeading.split(",");
              if (tiltHeadingArray.length >= 0) {
                heading = parseFloat(tiltHeadingArray[0]);
                if (tiltHeadingArray.length > 1) {
                  tilt = parseFloat(tiltHeadingArray[1]);
                }
              }
            }
            camera = new Camera({
              position: cameraPosition,
              heading: heading,
              tilt: tilt
            });

          }
        }
      }
      return camera;
    },

    // init app
    _initApp: function() {
      domClass.remove(document.body, "app-loading");
      //this._setEnvironment();
      this._setTitles();
      this._initUI();
      this.uiUtils.setColor();
    },

    // set environment
    _setEnvironment: function() {
      this.view.environment = {
        atmosphere: this.config.atmosphere,
        stars: this.config.stars
      };
    },

    // set titles
    _setTitles: function() {
      document.title = this.config.title; //this.scene.portalItem.title;
      dom.byId("panelTitle").innerHTML = this.config.title;
      dom.byId("panelSubtitle").innerHTML = this.config.subtitle;
    },

    // init ui
    _initUI: function() {
      this._initLayers();
      this._initBasemaps();
      this._initSlides();
      this._initSearch();
      // tooltips
      if (this.config && this.config.i18n) {
        var tipLayers = this.config.i18n.tooltips.layers || "Layers";
        domAttr.set("btnLayers", "title", tipLayers);
        var tipBasemaps = this.config.i18n.tooltips.basemaps || "Basemaps";
        domAttr.set("btnBasemaps", "title", tipBasemaps);
        var tipSlides = this.config.i18n.tooltips.slides || "Slides";
        domAttr.set("btnSlides", "title", tipSlides);
        var tipToggle = this.config.i18n.tooltips.close || "Close";
        domAttr.set("btnToggle", "title", tipToggle);
      }
      on(dom.byId("btnToggle"), "click", lang.hitch(this, this._toggleBottom));
    },

    //toggle panel
    _togglePanel: function(value) {
      domStyle.set("panelLayers", "display", "none");
      domStyle.set("panelBasemaps", "display", "none");
      domStyle.set("panelSlides", "display", "none");
      domStyle.set(value, "display", "block");
      this._toggleBottom();
    },

    // toggle bottom
    _toggleBottom: function() {
      domClass.toggle("panelBottom", "opened");
      domClass.toggle("panelTop", "closed");
    },

    // init layers
    _initLayers: function() {
      if (this.config.showLayers) {
        var options = {
          view: this.view,
          color: this.config.color
        };
        var layerList = new LayerList(options, "panelLayers");
        layerList.startup();
        on(dom.byId("btnLayers"), "click", lang.hitch(this, this._togglePanel, "panelLayers"));
        domStyle.set("btnLayers", "display", "block");
      }
    },

    // TO DO: Add basemaps gallery when the core widget is available
    // init basemaps
    _initBasemaps: function() {
      if (this.config.showBasemaps) {
        on(dom.byId("btnBasemaps"), "click", lang.hitch(this, this._togglePanel, "panelBasemaps"));
        domStyle.set("btnBasemaps", "display", "block");
      }
    },

    // initSlides
    _initSlides: function() {
      if (this.scene.presentation.slides.length > 0) {
        var options = {
          scene: this.scene,
          view: this.view,
          color: this.config.color
        };
        var slideList = new SlideList(options, "panelSlides");
        slideList.startup();
        on(dom.byId("btnSlides"), "click", lang.hitch(this, this._togglePanel, "panelSlides"));
        domStyle.set("btnSlides", "display", "block");
      }
    },

    // init search
    _initSearch: function() {
      var search = new Search({
        view: this.view,
        //showPopupOnSelect: false,
        enableHighlight: false
      }, "panelSearch");
      search.startup();
      // Set active view
      search.watch(function(property, oldValue, newValue) {
        if (property === "searchResults") {
          search.view = this.view;
        }
      });
      return search;
    }

  });
});
