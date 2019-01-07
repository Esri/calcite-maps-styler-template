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

  "application/base/selectors",
  "application/base/message",
  "application/base/ParamValidator",

  "esri/layers/FeatureLayer",
  "esri/Graphic",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/core/Collection",
  "esri/layers/support/Field",
  "esri/tasks/Locator",
  "esri/core/watchUtils",

  "dojo/_base/lang",
  "dojo/on",
  "dojo/keys",
  "dojo/touch",
  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",

  "dojo/_base/declare",
], function (
  CALCITE_SELECTORS, Message, ParamValidator,
  FeatureLayer, Graphic, SimpleMarkerSymbol, Collection, Field, Locator, watchUtils,
  lang, on, keys, touch, dom, domAttr, domClass, query, domConstruct,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (view) {
    	if (view) {
	    	this._view = view;
	    	this._is2d = view.type === "2d";
        // Create UI

        view.when(function(){
          this._buildHtml();
          this._createGraphicsLayer();
          this._setMapCoordsEvents();
          this._setTemplate();
          this._setGeocoder();
        }.bind(this));
    	}
    },

    _view: null,

    _is2d: false,

    _graphicsLayer: null,

    _graphicsArray: [],

    _graphic: null,

    _symbol: null,

    _popupTemplate: null,

    _fadeTimeout: 2000,

    _mapCoordsHtml: "<div class='calcite-coords-container esri-ui esri-component fade'>" +
                        "<div id='coordsFlipDiv' class='coords-flip-container'>" +
                          "<div class='flipper'>" +
                            "<div class='front'>" +
                              "<span class='calcite-coords'></span><span class='esri-icon-map-pin calcite-coords-icon'></span>" +
                            "</div>" +
                            "<div class='back'>" +
                              "<span class='calcite-coords-cursor'></span><span class='esri-icon-close calcite-coords-icon'></span>" +
                            "</div>" +
                          "</div>" +
                        "</div>" +
                      "</div>",

    _uiContainer: null,

    _coordsElement: null,

    _coordsInner: null,

    _coordsCursor: null,

    _coordsShare: null,

    _coordsClose: null,

    _timeoutCoords: null,

    _uiVisible: false,

    _inTouch: false,

    _inCoordTouch: false,

    _isUpdatingUI: false,

    _isCoordsFlipped: false,

    _isCoordsLocked: false,

    _coordsUrlTextarea: null,

    _currentBasemapId: null,

    _currentTitle: null,

    _currentSubTitle: null,

    _paramValidator: null,

    _geocoder: null,

    _buildHtml: function() {
      this._uiContainer = query(".esri-ui-inner-container.esri-ui-corner-container")[0];
      //this._uiContainer = query(".esri-view")[0];
      var html = this._mapCoordsHtml;
      this._coordsElement = domConstruct.place(html, this._uiContainer);
      this._coordsInner = query(".calcite-coords")[0];
      this._coordsCursor = query(".calcite-coords-cursor")[0];
      this._coordsShare = query(".calcite-coords-container .esri-icon-map-pin")[0];
      this._coordsClose = query(".calcite-coords-container .esri-icon-close")[0];
    },

    _createGraphicsLayer: function() {
      // Layer
      var map = this._view.map;
      var layer = new FeatureLayer({
        title: "MapCoordsGraphicsLayer",
        listMode: "hide",
        legendEnabled: false,
        source: new Collection(),
        geometryType: "point",
        spatialReference: this._view.spatialReference,
        fields: [
          new Field({
           "name": "ObjectID",
           "alias": "ObjectID",
           "type": "oid"
          }), new Field({
           "name": "name",
           "alias": "Name",
           "type": "string"
          }), new Field ({
           "name": "address",
           "alias": "Address",
           "type": "string"
          }), new Field ({
           "name": "id",
           "alias": "id",
           "type": "double"
          }), new Field ({
           "name": "type",
           "alias": "Type",
           "type": "string"
          }), new Field ({
           "name": "x",
           "alias": "x",
           "type": "string"
          }), new Field ({
           "name": "y",
           "alias": "y",
           "type": "string"
          })
        ],
        outFields: ["*"],
        objectIdField: "ObjectID",
        renderer: {
          type: "simple",
          symbol: {
            type: "simple-marker",
            style: "circle",
            outline: {
              width: 1,
              color: [255,255,255,1]
            },
            size: "6",
            color: "#565656"
          }
        }
      });
      map.add(layer);

      this._graphicsLayer = layer;
      // Symbol
      var marker = new SimpleMarkerSymbol({
        style: "circle", // new
        outline: {
          width: 1,
          color: [255,255,255,1]
        },
        size: "6",
        color: "#565656"
      });
      this._symbol = marker;
    },

    _addGraphic: function(pt) {
      if (pt === null) {
        return;
      }
      var attributes = {};
      if (pt.latitude) { // Geographic
        attributes.y = parseFloat(Math.round(pt.latitude * 100000) / 100000).toFixed(5);
        attributes.x = parseFloat(Math.round(pt.longitude * 100000) / 100000).toFixed(5);
      } else { // Web Mercator or projected
        attributes.x = parseFloat(Math.round(pt.x * 1000) / 1000).toFixed(3);
        attributes.y = parseFloat(Math.round(pt.y * 1000) / 1000).toFixed(3);
      }
      attributes.address = "... ";
      var graphic = new Graphic({
        geometry: pt,
        // symbol: this._symbol,
        attributes: attributes,
        popupTemplate: this._popupTemplate
      });
      // Reverse geocode and update popup
      this._geocoder.locationToAddress(pt)
        .then(function(response) {
          graphic.attributes.address = response.address;
         })
        .otherwise(function(err) {
          graphic.attributes.address = "No address found.";
        })
        .always(function(){
          this._view.popup.content = "<div class='calcite-coords-content'>" + graphic.attributes.y + "," + graphic.attributes.x + "</div><div class='calcite-coords-content text-content-space'>" + graphic.attributes.address + "</div>";
        }.bind(this));

      // New way to add/remove graphics
      this._graphicsLayer.applyEdits({
        addFeatures: [graphic],
        deleteFeatures: this._graphicsArray
      }).then(function(result) {
        this._graphicsArray = result.addFeatureResults;
      }.bind(this));

      this._view.popup.open({
        features: [graphic],
        location: pt,
        popupTemplate: this._popupTemplate,
        highlightEnabled: false
      });
    },

    _setTemplate: function() {
      var template = {
          title: "Location",
          content: "<div class='calcite-coords-content'>{y},{x}</div><div class='calcite-coords-content'>&nbsp;</div>"
        }
      var actions = [];
      var clearLocationAction = {
          title: "Clear",
          id: "clearLocation",
          className: "esri-icon-close"
      }
      actions.push(clearLocationAction);
      var clearLocationTriggerAction = function(event){
        if (event.action.id === "clearLocation"){
          this._setCoordsCursorUIVisible(false, this);
          this._graphicsLayer.applyEdits({
            addFeatures: [],
            deleteFeatures: this._graphicsArray
          })
          this._view.popup.close();
        }
      }
      this._view.popup.on("trigger-action", clearLocationTriggerAction.bind(this));
      template.actions = actions;
      this._popupTemplate = template;
    },

    _setGeocoder: function() {
      var view = this._view;
      this._geocoder = new Locator({
        url: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        outSpatialReference: view.spatialReference
      });
    },

    _setMapCoordsEvents: function() {
      var view = this._view;
      this._setWidgetEvents(view);
      this._setViewEvents(view);
      this._setTouchEvents(view);
    },

    // Widget UI Elements - show/hide on icon click

    _setCoordsCursorUIVisible: function(visible, me) {
      var coordsFlip = query("#coordsFlipDiv")[0];
      if (visible) {
        me._isCoordsFlipped = true;
        query(coordsFlip).addClass("flip");
        // Turn on mouse listener
      } else {
        me._isCoordsFlipped = false;
        query(coordsFlip).removeClass("flip");
        // Turn off mouse listener
      }
    },

    _setWidgetEvents: function(view) {

      // Widget UI - show on hover, hide on out

      on(this._coordsElement, [touch.over, touch.press], function() {
        this._showCoordsUI(true);
      }.bind(this));
      on(this._coordsElement, [touch.out, touch.release], function() {
        this._showCoordsUI(false);
      }.bind(this));

      // Button share
      on(this._coordsShare, touch.press, function() {
        this._setCoordsCursorUIVisible(true, this);
        this._updateCoordsCursorUI(view.center, false);
      }.bind(this));

      // Button close
      on(this._coordsClose, touch.press, function() {
        this._setCoordsCursorUIVisible(false, this);
        this._graphicsLayer.applyEdits({
          addFeatures: [],
          deleteFeatures: this._graphicsArray
        });
        this._view.popup.close();
      }.bind(this));

      // Cursor move
      view.on("pointer-move", function(e){
        if (this._isCoordsFlipped) {
          var pt = e.mapPoint || view.toMap({x: e.x,y: e.y});
          this._updateCoordsCursorUI(pt);
        }
      }.bind(this));

      // Cursor click
      view.on("click", function(e){
        if (this._isCoordsFlipped) {
          e.stopPropagation();
          view.popup.close();
          this._updateCoordsCursorUI(e.mapPoint, true);
          this._addGraphic(e.mapPoint);
        }
      }.bind(this));

    },

    _setViewEvents: function(view) {
      // View 2d
      if (this._is2d) {
        view.watch(["stationary", "interacting"], function(isTrue,oldVal,evt) {
          if (evt === "stationary" && !isTrue || evt === "interacting" && isTrue) {
            this._showCoordsUI(true);
          } else {
            this._showCoordsUI(false);
          }
        }.bind(this));
      } else { // 3d
        view.watch(["stationary", "interacting", "updating"], function(isTrue,oldVal,evt) {
          if (!view.stationary || view.interacting) {
            this._showCoordsUI(true);
          } else if (view.stationary && !view.updating && !view.animating && !view.interacting) {
            this._showCoordsUI(false);
          }
        }.bind(this));
      }
      // Update ui while user interacts
      view.watch("extent", function(ext){
        if (this._is2d) {
          this._updateCoordsUI();
        } else {
          if (view.interacting || view.updating) {
            this._updateCoordsUI();
          }
        }
      }.bind(this));
      //view.watch("rotation", function(val){ // fails in 3d
      view.watch(["viewpoint.rotation"], function(val){ // fails in 3d
        this._updateCoordsUI();
      }.bind(this));
    },

    _setTouchEvents: function(view) {
      query(".esri-view-surface").on(touch.press, function(evt) {
        this._inTouch = true;
        this._showCoordsUI(true);
      }.bind(this));
      query(".esri-view-surface").on(touch.release, function(evt) {
        this._inTouch = false;
        if (!this._isCoordsFlipped) {
          this._showCoordsUI(false);
        }
      }.bind(this));
    },

    _getCoordParams: function() { // TODO
      var params = {};
      var pt = this._view.center;
      if (pt.latitude !== null) { // Geographic
        params.lat = parseFloat(Math.round(pt.latitude * 100000) / 100000).toFixed(5);
        params.lon = parseFloat(Math.round(pt.longitude * 100000) / 100000).toFixed(5);
      } else { // Web Mercator or projected
        params.x = parseFloat(Math.round(pt.x * 1000) / 1000).toFixed(3);
        params.y = parseFloat(Math.round(pt.y * 1000) / 1000).toFixed(3);
      }
      if (this._is2d) {
        params.rotation = Math.round(this._view.rotation);
      } else {
        params.heading =  Math.round(this._view.viewpoint.camera.heading);
      	params.tilt = Math.round(this._view.viewpoint.camera.tilt);
        //params.altitude = Math.round(this._view.viewpoint.camera.position.z);
        //params.altitude = Math.round(this._view.center.z);  // use z here instead to match ViewManager loading
      }
      params.wkid = this._view.spatialReference.wkid;
      params.zoom =  Math.round(this._view.zoom);
      params.scale = Math.round(this._view.viewpoint.scale);
      return params;
    },

    _updateCoordsUI: function() {
      if (this._uiVisible && !this._isUpdatingUI) {
      	this._isUpdatingUI = true;
          // Update coords
          var params = this._getCoordParams();
          if (this._view.widthBreakpoint === "xsmall" || this._view.widthBreakpoint === "small") {
            this._coordsInner.innerHTML = (params.lat || params.x) + "," + (params.lon || params.x);
          } else {
            if (this._is2d) {
              this._coordsInner.innerHTML = (params.lat || params.x) + "," + (params.lon || params.y) + " | " + params.zoom + " | 1:" + params.scale + " | " + (params.rotation === 360 ? 0 : params.rotation) + "&deg;" ;
            } else {
              this._coordsInner.innerHTML = (params.lat || params.x) + "," + (params.lon || params.y) + " | " + params.zoom + " | 1:" + params.scale + " | " + (params.heading === 360 ? 0 : params.heading) + "&deg;" +  " | " + params.tilt + "&deg;";
            }
          }
        this._isUpdatingUI = false;
      }
    },

    _showCoordsUI: function(show) {
       clearTimeout(this._timeoutCoords);
      if (show && !this._uiVisible) {
        this._uiVisible = true;
        this._updateCoordsUI();
        query(".calcite-coords-container").addClass("in");
        //console.log("showing...")
      } else if (!show && this._uiVisible && !this._inTouch && !this._isCoordsFlipped) { // lots of tests...
        this._timeoutCoords = setTimeout(function() {
          this._uiVisible = false;
          query(".calcite-coords-container").removeClass("in");
          //console.log("hiding...");
        }.bind(this), this._fadeTimeout);
      }
    },

    _updateCoordsCursorUI: function(pt,clicked){
      if (pt === null) {
        return;
      }
      var coords;
      if (pt.latitude !== null) { // Geographic
        coords = parseFloat(Math.round(pt.latitude * 100000) / 100000).toFixed(5) + "," + parseFloat(Math.round(pt.longitude * 100000) / 100000).toFixed(5);
      } else { // Web Mercator or projected
        coords = parseFloat(Math.round(pt.x * 1000) / 1000).toFixed(3) + "," + parseFloat(Math.round(pt.y * 1000) / 1000).toFixed(3);
      }
      this._coordsCursor.innerHTML = "Click on the map: " + coords;
    }
  })
});
