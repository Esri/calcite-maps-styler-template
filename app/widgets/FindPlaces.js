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
  "esri/widgets/Spinner",
  "esri/geometry/Point",
  "esri/Graphic",
  "esri/layers/FeatureLayer",
  "esri/layers/support/Field",
  "esri/core/Collection",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/PictureMarkerSymbol",
  "esri/renderers/UniqueValueRenderer",
  "esri/PopupTemplate",
  "esri/geometry/SpatialReference",
  "esri/geometry/support/webMercatorUtils",
  "esri/tasks/GeometryService",
  "esri/tasks/support/ProjectParameters",
  "esri/tasks/Locator",
  "esri/core/watchUtils",

  "dojo/Deferred",
  "dojo/on",
  "dojo/query",
  "dojo/dom-construct",
  "dojo/_base/declare"
], function (
  Spinner, Point, Graphic, FeatureLayer, Field, Collection, SimpleMarkerSymbol, PictureMarkerSymbol, UniqueValueRenderer, PopupTemplate, SpatialReference, webMercatorUtils, GeometryService, ProjectParameters, Locator, watchUtils,
  Deferred, on, query, domConstruct, declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (view, searchWidget, i18n) {
      this._view = view;
      this._popup = view.popup;
      this._searchWidget = searchWidget;
      this._popupDefaultTitle = i18n.findPlaces.popup.title;
      this._popupClearAllTitle = i18n.findPlaces.popup.actions.clearAll;
      this._init();
    },

    //--------------------------------------------------------------------------
    //
    //  Public
    //
    //--------------------------------------------------------------------------

    findByCategory: function(category, pt) {
      if (!category) {
        return;
      }
      this._init()
        .then(function(){
          pt = pt || this._view.extent.center;
          var keyVal = this._getValidSearchKey(category)
          if (keyVal) {
            this._activeSearchKey = keyVal;
            this._showPopupFindPlaces(pt);
          }
        }.bind(this));
    },

    //--------------------------------------------------------------------------
    //
    //  Private
    //
    //--------------------------------------------------------------------------

    _getValidSearchKey: function(category) {
      var keyVal;
      var keys = this._searchKeys;
      for (var i=0; i < keys.length; i++) {
        if (category.toLowerCase() === keys[i].name.toLowerCase()) {  // TODO - better fuzzy logic
          keyVal = keys[i].value; // actual value
          break;
        }
      }
      return keyVal;
    },

    _getSearchKeyName: function(key) {
      var keyName;
      var keys = this._searchKeys;
      for (var i=0; i < keys.length; i++) {
        if (key.toLowerCase() === keys[i].value.toLowerCase()) {  // TODO - better fuzzy logic
          keyName = keys[i].name; // actual value
          break;
        }
      }
      return keyName;
    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _initialized: false,

    _initPopup: false,

    _view: null,

    _is3d: false,

    _popup: null,

    _searchWidget: null,

    _placesLayer: null,

    _placesLayerView: null,

    _showInLegend: false,

    _showInLayerList: "hide",

    _placeKeys: {
      place: "Place",
      selectedPlace: "Selected",
      location: "Location"
    },

    _popupDefaultTitle: "Find Places",

    _popupClearAllTitle: "Clear All",

    _popupLocationId: "location",

    _activeSearchKey: "Parks and Outdoors", // Default

    _searchKeys: [],

    _searchDistance: 2000,

    _maxReturns: 49,

    _outFields: ["Place_addr, PlaceName"],

    _placesSymbol: null,

    _locationSymbol: null,

    _placesSymbolSelected: null,

    _renderer: null,

    _promise: null,

    // _defaultColor: [100, 180, 255, .90],
    _defaultColor: [0, 0, 0, 0.8],
    // _defaultColor: [0, 122, 194, 0.8],

    //_selectedColor: [255, 50, 50, .90],
    //_selectedColor: [0, 0, 0, 0.8],
    _selectedColor: [0, 122, 194, 0.95],
    // _selectedColor: [222, 41, 0, 0.8],

    _touchSpinnerThreshold: 200, // milliseconds

    _touchHoldThreshold: 250, // milliseconds

    _touchSpinnerTimer: null,

    _touchHoldTimer: null,

    _findScaleThreshold: 8000000, // about state-level

    _goToDurationSlow: 300,

    _goToDurationFast: 150,

    _manualSelectFeature: false,

    _init: function() {
      var deferred = new Deferred();

      // Geocode categories
      this._setSearchKeys();

      var view = this._view;
      if (view && !this._initialized) {
        view.when(function(){ // TODO
          this._setSpinner();
          // Override default behavior
          this._hideNoFeaturesFound();
          // Geocoder
          this._setGeocoder();
          // Symbols
          this._setSymbols();
          // Layer
          this._createGraphicsLayers();
          // Search popup
          this._setSearchWidgetEvents();
          // Events
          this._setViewTouchEvents();
          this._setViewEvents();
          // Popup events
          this._watchSelectedFeature();
          // Popup behavior
          this._setPopup();
          // Integrate with Legend and List
          this._setLayerWidgetVisibility();
          // 3D
          this._is3d = view.type === "3d";

          this._initialized = true;

          deferred.resolve(view);
        }.bind(this))
        .otherwise(function(err){
          console.log(err);
        })
      } else {
        deferred.resolve(view);
      }
      return deferred.promise;
    },

    _setSpinner: function() {
      if (!this._popup._spinner) {
        this._popup._spinner = new Spinner({
          view: this._view
        });
      }
    },

    _setSearchKeys: function() {
      var searchKeys = [
        {
          name: "Cities",
          value: "City"
        },
        {
          name: "Neighborhoods",
          value: "Neighborhood"
        },
        {
          name: "Restaurants",
          value: "Food"
        },
        {
          name: "Coffee Shops",
          value: "Coffee Shop"
        },
        // {
        //   name: "Night Life",
        //   value: "Nightlife Spot"
        // },
        {
          name: "Gas Stations",
          value: "Gas Station"
        },
        {
          name: "Stores",
          value: "Shops and Service"
        },
        {
          name: "Parks",
          value: "Parks and Outdoors"
        },
        {
          name: "Hotels",
          value: "Hotel,Motel,Bed and Breakfast,Resort"
        },
        {
          name: "Arts and Entertainment",
          value: "Arts and Entertainment"
        },
        {
          name: "Travel",
          value: "Airport, Bridge, Bus Station, Bus Stop, Metro Station, Parking, Rest Area, Tourist Information, Train Station, Travel Agency, Truck Stop"
        },
        {
          name: "Schools",
          value: "Education"
        }
      ];
      this._searchKeys = searchKeys;
    },

    _hideNoFeaturesFound: function() {
      var view = this._view;
      if (view) {
        view.when(function(){
          query(".esri-message").addClass("hidden");
        })
      }
    },

    _setGeocoder: function() {
      var view = this._view;
      this._geocoder = new Locator({
        url: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        outSpatialReference: view.map.spatialReference
      });
    },

    _setPopup: function(){
      this._popup.autoCloseEnabled = false;
      this._popup.highlightEnabled = true;
    },

    //----------------------------------------------------
    // Template
    //----------------------------------------------------

    _createTemplateContentHtml: function () {
      var options = this._createOptions();
      var content = "<div class='calcite-popup-content'>" +
                    "<select id='filterPlaces' class='calcite-popup-filter'>"
                      + options +
                    "</select>" +
                  "</div>";
      return content;
    },

    _createTemplateNode: function() {
      var content = this._createTemplateContentHtml();
      var node = domConstruct.create("div", {innerHTML: content});
      // Listen for option changes
      var filter = query(node).query("#filterPlaces");
      filter.on("change", function(evt){
        // iPhone fix
        filter[0].blur();
        // Set active key
        var searchKeyword = evt.target.value;
        this._activeSearchKey = searchKeyword;
        // Redo search
        var pt = this._popup.location;
        if (pt) {
          this._showPopupFindPlaces(pt, true);
        }
      }.bind(this));
      return node;
    },

    _createPopupTemplate: function(type, overwriteActions) {
      var content = "";
      // Location template
      if (type === this._placeKeys.location) {
        content = this._createTemplateNode();
      } else { // Places template
        content = "<div class='calcite-popup-content'>{address}</div>";
      }
      var popupTemplate = PopupTemplate({
        title: type === this._placeKeys.location ? this._popupDefaultTitle : "{name}",
        content: content
      });
      var actions = [];
      var overwriteActions = false;
      if (type === this._placeKeys.location) {
        actions = this._getLocationPopupActions();
        overwriteActions = false;
      } else if (type === this._placeKeys.place) {
        //actions = this._getPlacesPopupActions();
        actions = this._getLocationPopupActions();
        overwriteActions = false;
      }
      popupTemplate.overwriteActions = overwriteActions;
      popupTemplate.actions = actions;
      return popupTemplate;
    },

    _createOptions: function() {
      function createOption(name, value, selected) {
        var option = "<option " + selected + " value='" + value + "'" + ">" + name + "</option>";
        return option;
      }
      var keys = this._searchKeys;
      var activeKey = this._activeSearchKey;
      var options = "";
      keys.forEach(function(key){
        if (key.value === activeKey) {
          key.selected = "selected='selected'";
        } else {
          key.selected = "";
        }
        options = options + createOption(key.name, key.value, key.selected);
      });
      return options;
    },

    _getLocationPopupActions: function() {
      var actions = [];
      // Clear Action
      var searchClearAction = {
          title: this._popupClearAllTitle,
          id: "clear",
          className: "esri-icon-close"
      }
      actions.push(searchClearAction);
      var clearTriggerAction = function(event){
        if (event.action.id === "clear"){
          this._cancelPromise();
          this._popup._spinner.hide();
          this._clearGraphics();
          this._popup.features = [];
          this._popup.close();
        }
      }
      this._popup.on("trigger-action", clearTriggerAction.bind(this));
      return actions;
    },

    _getPlacesPopupActions: function() {
      var actions = [];
      var goBackAction = {
          title: "Go Back",
          id: "goback",
          className: "esri-icon-map-pin"
      }
      actions.push(goBackAction);
      var goBackTriggerAction = function(event){
        if (event.action.id === "goback"){
          this._showLocationPopup();
        }
      }
      this._popup.on("trigger-action", goBackTriggerAction.bind(this));
      return actions;
    },

    _getSearchPopupActions: function() {
      var actions = [];
      var findPlacesAction = {
          title: this._popupDefaultTitle,
          id: "findPlaces",
          className: "esri-icon-map-pin"
      }
      actions.push(findPlacesAction);
      var findPlacesTriggerAction = function(event){
        if (event.action.id === "findPlaces"){
          // Show popup
          var location = this._popup.location;
          if (location) {
            this._searchWidget.clear();
            this._showPopupFindPlaces(location, true);
          }
        }
      }
      this._popup.on("trigger-action", findPlacesTriggerAction.bind(this));
      return actions;
    },

    _setSymbols: function() {
      this._locationSymbol = new SimpleMarkerSymbol({
        color: [255, 255, 255],
        size: "12px",
        outline: {
          color: this._defaultColor,
          width: "1.5px"
        }
      });
      this._placesSymbol = new SimpleMarkerSymbol({
        color: this._defaultColor,
        size: "8px",
        outline: {
          color: [255, 255, 255],
          width: "1.5px"
        }
      });
    },

    //----------------------------------------------------
    // FeatureLayers
    //----------------------------------------------------

    _createGraphicsLayers: function() {
      // Fields
      var fields = [
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
         "type": "string"
        }), new Field ({
         "name": "type",
         "alias": "Type",
         "type": "string"
        })
      ];

      // Renderer
      var uvr = new UniqueValueRenderer({
        field: "type"
      });
      uvr.addUniqueValueInfo(this._placeKeys.location, this._locationSymbol);
      uvr.addUniqueValueInfo(this._placeKeys.place, this._placesSymbol);

      var popupTemplate = this._createPopupTemplate(this._placeKeys.place, false);

      // Places layer
      this._placesLayer = new FeatureLayer({
        legendEnabled: this._showInLegend,
        listMode: this._showInLayerList,
        //elevationInfo: {mode: "on-the-ground"}, // Flatten symbols
        source: new Collection(),
        fields: fields,
        outFields: ["*"],
        objectIdField: "ObjectID",
        geometryType: "point",
        spatialReference: this._view.spatialReference,
        renderer: uvr,
        popupTemplate: popupTemplate,
        returnZ: true,
        title: "Places Search",
        id: "Places Search",
        visible: true,
        popupEnabled: false,  // Test
        autoCloseEnabled: false
      });

      this._setLayerPopupVisibility();

      this._view.map.add(this._placesLayer);

      this._setLayerView();
    },

    _setLayerView: function() {
      if (this._placesLayer) {
        this._view.whenLayerView(this._placesLayer).then(function(lyrView){
          this._placesLayerView = lyrView;
        }.bind(this));
      }
    },

    _setLayerWidgetVisibility: function() {
      var view = this._view;
      if (view) {
        watchUtils.watch(this._placesLayer, "source.length", function(val){
          // Features present or not
          if (val === 0) {
            this._placesLayer.legendEnabled = false;
            this._placesLayer.listMode = "hide";
          } else {
            this._placesLayer.legendEnabled = true;
            this._placesLayer.listMode = "show";
          }
          // Force refresh of legend and layerlist
          this._view.map.reorder(this._placesLayer, this._view.map.allLayers.length - 1);
        }.bind(this));
      }
    },

    _setLayerPopupVisibility: function() {
      if (this._placesLayer) {
        this._placesLayer.watch("visible", function(visible){
          if (this._isPlace(this._popup.selectedFeature)) {
            if (visible) {
              this._popup.visible = true;
            } else {
              this._popup.visible = false;
            }
          }
        }.bind(this));
      }
    },

    //----------------------------------------------------
    // View events - remove spinner
    //----------------------------------------------------

    _setViewEvents: function() {
      var view = this._view;
      if (view) {
        view.watch("interacting,stationary", function(interacting,stationary) {
          if (interacting || !stationary) {
            view.popup._spinner.hide();
          }
        }.bind(this));
      }
    },

    //----------------------------------------------------
    // Touch events
    //----------------------------------------------------

    _setViewTouchEvents: function() {
      var view = this._view;
      if (view) {
        var popup = view.popup;
        var pressHold = false;

        // Press (start)
        view.on("pointer-down", function(evt) {
          if (!this._isFindScaleThreshold()) {
            return;
          }
          if (!view.interacting) {
            pressHold = true;
            // Delay and then show spinner (200ms)
            clearTimeout(this._touchSpinnerTimer);
            this._touchSpinnerTimer = setTimeout(function() {
              if (pressHold && !view.interacting) {
                var point = view.toMap(evt.x,evt.y);
                popup._spinner.show({location: point});
                // Delay more and then do search (250ms)
                clearTimeout(this._touchHoldTimer);
                this._touchHoldTimer = setTimeout(function() {
                  if (pressHold) {
                    evt.stopPropagation();
                    this._showPopupFindPlaces(point, true);
                  } else {
                    popup._spinner.hide();
                  }
                }.bind(this), this._touchHoldThreshold);
              } else {
                popup._spinner.hide();
              }
            }.bind(this), this._touchSpinnerThreshold);
          }
          return false;
        }.bind(this));

        // Move (cancel)
        view.on("pointer-move", function(){
          if (pressHold) {
            popup._spinner.hide();
          }
          pressHold = false;
        }.bind(this));

        // Release
        view.on("pointer-up", function(){
          pressHold = false;
          if (!this._promise) {
            popup._spinner.hide();
          }
        }.bind(this));
      }
    },

    _isFindScaleThreshold: function() {
      if (this._view) {
        return this._view.scale < this._findScaleThreshold;
      }
    },

    //----------------------------------------------------
    // Search widget events
    //----------------------------------------------------

    _setSearchWidgetEvents: function() {
      // Set search results popup actions
      var template = this._searchWidget.popupTemplate;
      var actions = this._getSearchPopupActions();
      template.actions = actions;
      // Clear find places popup and set z-value
      this._searchWidget.watch("selectedResult", function(result) {
        if (result) {
          this._clearGraphics(true);
          // Maintain popup on pan and tilt
          if (this._view.type === "3d") {
            watchUtils.once(this._view.popup, "selectedFeature", function(feature) {
              if (feature && feature.geometry.type === "point" && !feature.geometry.hasZ) {
                this._view.map.ground.queryElevation(feature.geometry)
                  .then(function(result){
                    var pt = this._view.popup.location;
                    pt.z = result.geometry.z;
                  }.bind(this))
                  .otherwise(function(err){
                    console.log(err);
                  })
              }
            }.bind(this));
          }
        }
      }.bind(this));
      this._searchWidget.on("search-clear", function(evt) {
        if (!this._promise) {
          this._clearGraphics(true);
        }
      }.bind(this));
    },

    //----------------------------------------------------
    // Show popup (long tap)
    //----------------------------------------------------

    _cancelPromise: function() {
      if (this._promise) {
        this._promise.cancel();
      }
    },

    _showPopupFindPlaces: function(searchPoint) {
      if (this._popup && searchPoint) {
        var pt = searchPoint.clone();
        try {
          // Spinner
          this._popup._spinner.hide();
          // Clean up
          this._popup.clear();
          this._searchWidget.clear();
          this._clearGraphics()
            .then(function(){
              this._placesLayer.visible = true; // Bug
              // Add search location graphic
              this._addLocationGraphic(pt)
                .then(function(){
                  this._cancelPromise(); // Stop processing
                  // Find places
                  this._promise = this._findPlaces(pt);
                  this._promise
                    .then(function(results){
                      this._popup._spinner.hide();
                      // Add places found to layer
                      this._addPlacesGraphics(results).then(function(){
                        // Add places to popup
                        this._showPopupFeatures(0, true);
                        // this._popup.visible = true; // test
                      }.bind(this));
                    }.bind(this))
                    .otherwise(function(err) {
                      // Cancelled or failed...
                      console.error(err);
                      this._popup._spinner.hide();
                    }.bind(this))
                    .always(function(results) {
                      this._popup._spinner.hide();
                    }.bind(this));
                  }.bind(this));

            }.bind(this))

          } catch(err){
            console.error(err);
          }
      }
    },

    //----------------------------------------------------
    // Graphics
    //----------------------------------------------------

    _addLocationGraphic: function(pt) {
      // var popupTemplate = this._createPopupTemplate(this._placeKeys.location, false);
      var tempContent = "&nbsp;";
      // Graphic
      var locationGraphic = new Graphic({
        geometry: pt,
        // symbol: this._locationSymbol,
        attributes: {
          ObjectID: 1,
          id: this._popupLocationId,
          name: this._popupDefaultTitle,
          address: tempContent, // Until template is applied
          type: this._placeKeys.location
        },
        // layer: this._placesLayer,
        placeName: this._getSearchKeyName(this._activeSearchKey),
        // popupTemplate: popupTemplate,
      });
      return this._placesLayer.applyEdits({
        addFeatures: [locationGraphic]
      });
    },

    _addPlacesGraphics: function(response) {
      // Symbols (shared)
      //var markerSymbol = this._placesSymbol;
      //var popupTemplate = this._createPopupTemplate("places", false);
      var graphics = [];
      var view = this._view;
      // Post-process locations with same location and name attributes
      responseProcessed = this._postProcessResults(response); // TODO - revisit/remove if needed at next AGO release
      // Create graphics
      responseProcessed.forEach(function(feature, i) {
        // Create graphic
        var pointGraphic = new Graphic({
          geometry: feature.location,
          // symbol: markerSymbol,  // shouldn't need
          attributes: {
            ObjectID: i + 2,
            name: feature.attributes.PlaceName || feature.address,
            address: feature.attributes.Place_addr || feature.attributes.address, // TODO
            type: this._placeKeys.place
          },
          // popupTemplate: popupTemplate // shouldn't need
          // layer: this._placesLayer // shouldn't need
        });
        graphics.push(pointGraphic);
      }.bind(this));
      // Add graphics
      return this._placesLayer.applyEdits({
          addFeatures: graphics
        }).then(function(result){
          return result.addFeatureResults;
        });
    },

    _clearGraphics: function() {
      return this._placesLayer.queryFeatures({
         outFields: ["*"],
         returnGeometry: true
        })
        .then(function(featureSet) {
          this._placesLayer.applyEdits({
            addFeatures: null,
            deleteFeatures: featureSet.features
          })
        }.bind(this));
    },

    _postProcessResults: function(response) {
      var processedResponse = [];
      var primaryItem;
      if (this._activeSearchKey === "City" || this._activeSearchKey === "Neighborhood") {
        response.forEach(function(item,i){
          if (i === 0) {
            primaryItem = item;
            processedResponse.push(primaryItem);
          } else {
            // Use the first place only, remove duplicates
            if (primaryItem.location.latitude !== item.location.latitude &&
              primaryItem.location.longitude !== item.location.longitude) { //var english = /^[A-Za-z0-9]*$/;
                processedResponse.push(item);
            } else {
              console.warn("Place rejected: " + item.attributes.PlaceName + " - " + item.attributes.Place_addr); // TODO
            }
          }
        });
      } else {
        processedResponse = response;
      }
      return processedResponse;
    },

    _findLocationGraphic: function() {
      var location = this._placesLayer.source.find(function(g) {
        return item.attributes.id === this._popupLocationId;
      }.bind(this));
      return location;
    },

    //----------------------------------------------------
    // Geocoder
    //----------------------------------------------------

    _findPlaces: function(point) {
      var view = this._view;;
      // Search params
      var keyword = this._activeSearchKey;
      var distance = this._searchDistance;
      var max = this._maxReturns;
      var outFields = this._outFields; // TODO
      var params = {
        address: {
          address: ""
        },
        //countryCode: "" // TODO
        categories: [keyword],
        location: point,
        distance: distance,
        maxLocations: max,
        searchExtent: view.extent,
        outFields: outFields,
        outSpatialReference: view.spatialReference,
        outSR: view.spatialReference
      }
      // Set out spatial reference
      this._geocoder.outSpatialReference = view.spatialReference;
      // Geocode
      var promise = this._geocoder.addressToLocations(params);
      return promise;
    },

    // Set Features

    _isPlace: function(feature) {
      var isPlace = false;
      if (feature) {
        isPlace = (feature.sourceLayer === this._placesLayer);
      }
      return isPlace;
    },

    _isPlaceLocation: function(feature) {
      var isLocation = false;
      if (feature) {
        if (feature.attributes.id === this._popupLocationId) {
          isLocation = true;
        }
      }
      return isLocation;
    },

    _placeIndex: function(feature) {
      return this._placesLayer.queryFeatures({
         outFields: ["*"],
         returnGeometry: true
        })
        .then(function(results){
          var index = results.features.findIndex(function(item) {
            return item.attributes.ObjectID === feature.attributes.ObjectID;
          });
          return index;
        });
    },

    _showPopupFeatures: function(selectedIndex) {
      this._placesLayer.queryFeatures({
         outFields: ["*"],
         returnGeometry: true
        })
        .then(function(result){
          var graphics = result.features;
          if (graphics.length > 0 && selectedIndex > -1) {
            var feature = graphics[selectedIndex];
            // this._popup.features = result.features;
            // this._popup.selectedFeatureIndex = selectedIndex;
            this._centerMap(feature.geometry, true, 50)
             .then(function(){
                feature.geometry.z = this._view.center.z;
                this._popup.open({
                  features: graphics,
                  location: feature.geometry,
                  selectedFeatureIndex: selectedIndex,
                  highlightEnabled: true,
                  updateLocationEnabled: false
                });
             }.bind(this));
          }
        }.bind(this));
    },

    _setSelectedIndex: function(index){
      this._popup.selectedFeatureIndex = index;
    },

    //----------------------------------------------------
    // Handle selected feature changes and clicks
    //----------------------------------------------------

    _setPopupAlignment: function(alignment) {
      this._popup.alignment = alignment;
    },

    _watchSelectedFeature: function() {
      // User clicks on map
      this._view.on("click", function(e){
        this._view.hitTest(e)
          .then(function(response){
            if (response.results.length === 0) {
              return;
            }
            // check if the graphic belongs to the layer of interest
            var results = response.results.filter(function (result) {
              return result.graphic.layer === this._placesLayer;
            }.bind(this));
            if (results.length) {
              e.stopPropagation();
              var graphic = results[0].graphic;
              if (this._isPlace(graphic)) {
                this._manualSelectFeature = true;
                this._placeIndex(graphic)
                  .then(function(index){
                    if (index < 0 || !graphic) {
                      return;
                    }
                    // Repopulate popup and set index
                    this._showPopupFeatures(index, false);
                  }.bind(this));
              }
            }
          }.bind(this));
      }.bind(this));

      // Move popup when selected
      this._popup.watch("selectedFeature", function(feature) {
        if (this._isPlace(feature)) {
          this._setPopupAlignment("top-center");
          // Override template for location graphic
          if (this._isPlaceLocation(feature)) {
            feature.popupTemplate = this._createPopupTemplate(this._placeKeys.location, true);
          }
          // Show popup
          if (!this._manualSelectFeature) {
            this._centerMapAndPopup(feature.geometry, true, 150, true);
          }
          this._manualSelectFeature = false;
        } else {
          this._setPopupAlignment("auto");
        }
      }.bind(this));
    },

    _centerMapAndPopup: function(geometry, animate, duration, visible) {
      this._centerMap(geometry, animate, duration)
        .then(function(){
          this._centerPopup(geometry, visible);
        }.bind(this))
    },

    _centerMap: function(geometry, animate, duration) {
      var options = {
        target: geometry,
        scale: this._view.scale
      }
      return this._view.goTo(options, {
          animate: animate,
          duration: duration
        });
    },

    _centerPopup: function(geometry, visible) {
      if (this._view.popup.dockEnabled) {
        return;
      }
      geometry.z = this._view.center.z; // For 3D
      this._popup.location = geometry;
      this._popup.visible = visible;
    }

  })
})
