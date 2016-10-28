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
  "esri/geometry/Point",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/PictureMarkerSymbol",
  "esri/PopupTemplate",
  "esri/widgets/Spinner",
  "esri/core/watchUtils",

  "dojo/Deferred",
  "dojo/on",
  "dojo/touch",
  "dojo/query",
  "dojo/dom-construct",
  "dojo/_base/declare"
], function (
  Point, Graphic, GraphicsLayer, SimpleMarkerSymbol, PictureMarkerSymbol, PopupTemplate, Spinner, watchUtils,
  Deferred, on, touch, query, domConstruct, declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (view, searchWidget) {

      this._view = view;
      this._popup = view.popup;
      this._searchWidget = searchWidget;
      
      this._init();          

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _view: null,

    _popup: null,

    _searchWidget: null,

    _placesSelectLayer: null,

    _placesLayer: null,

    _popupDefaultTitle: "Places Search", // TODO

    _popupLocationId: "location",

    _activeSearchKey: "Parks and Outdoors", // Default // TODO

    _searchKeys: [],

    _searchDistance: 2000,

    _maxReturns: 49,

    _outFields: ["Place_addr, PlaceName"],

    _placesSymbol: null,

    _locationSymbol: null,

    _spinner: null,

    _promise: null,

    // _defaultColor: [100, 180, 255, .90],
    _defaultColor: [0, 0, 0, 0.8],
    // _defaultColor: [0, 122, 194, 0.8],

    //_selectedColor: [255, 50, 50, .90],
    //_selectedColor: [0, 0, 0, 0.8],
    _selectedColor: [0, 122, 194, 0.95],
    // _selectedColor: [222, 41, 0, 0.8],

    _touchSpinnerThreshold: 150, // milliseconds

    _touchHoldThreshold: 500, // milliseconds

    _findScaleThreshold: 8000000, // about state-level

    _init: function() {
      var view = this._view;
      if (view) {
        view.then(function(){
          // Override default behavior
          this._hideNoFeaturesFound();
          // Geocoder
          this._setGeocoder();
          // Layer
          this._createGraphicsLayers();
          // Search popup
          this._setSearchWidgetEvents();
          // Events
          this._setViewTouchEvents();
          this._setViewEvents();
          // Popup events
          this._watchSelectedFeature();
          //Spinner
          this._createSpinner();
        }.bind(this));
        // Search keys
        this._setSearchKeys();
        // Symbols
       this._setSymbols();
      }
    },

    _hideNoFeaturesFound: function() {
      var view = this._view;
      if (view) {
        view.then(function(){
          query(".esri-message").addClass("hidden");
        })
      }
    },

    _setGeocoder: function() {
      var view = this._view;
      var searchWidget = this._searchWidget;
      if (view) {
        if (searchWidget && searchWidget.viewModel.sources.length > 0) {
          this._geocoder = searchWidget.viewModel.sources.items[0].locator;
          this._geocoder.outSpatialReference = view.map.spatialReference;
        }        
      }
    },

    _createGraphicsLayers: function() {
      this._placesLayer = new GraphicsLayer({popupEnabled: true});
      this._placesSelectLayer = new GraphicsLayer();
      if (this._view) {
        this._view.map.add(this._placesLayer);
        this._view.map.add(this._placesSelectLayer);
        // this._placesLayer = this._view._graphicsView;
      }
    },

    _setSymbols: function() {
      this._locationSymbol = new PictureMarkerSymbol({
        url: "./images/search-symbol-32.svg", // TODO
        size: 24,
        width: 24,
        height: 24,
        xoffset: 0,
        yoffset: 0
      });
      this._placesSymbol = new SimpleMarkerSymbol({
        color: this._defaultColor,
        size: 8,
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      });
      this._placesSymbolSelected = new SimpleMarkerSymbol({
        color: this._selectedColor,
        size: 8,
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      });
    },

    _createSpinner: function() {
      this._spinner = new Spinner({
        visible: true,
        viewModel: {
          view: this._view
        }
      });
      this._spinner.startup();
      this._spinner.set({
        visible: true
      });
      domConstruct.place(this._spinner.domNode, this._view.root);
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
        {
          name: "Night Life",
          value: "Nightlife Spot"
        },
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

    //----------------------------------------------------
    // View events - remove spinner
    //----------------------------------------------------

    _setViewEvents: function() {
      var view = this._view;
      if (view) {
        var defaultSpinner = view.popup._spinner;
        var customSpinner = this._spinner;
        view.watch("interacting,stationary", function(interacting,stationary) {
          if (interacting || !stationary) {
            if (defaultSpinner && customSpinner) {
              defaultSpinner.visible = false;
              customSpinner.visible = false;
            }
          }
        });        
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
        var pressTimer;
        var spinnerTimer;

        // Press
        query(".esri-view-surface").on(touch.press, function(evt) {
          if (!this._isFindScaleThreshold()) {
            return;
          }
          pressHold = true;
          // Delay, show spinner
          clearTimeout(spinnerTimer);
          spinnerTimer = setTimeout(function() {
            if (pressHold && !view.interacting) {
              this._spinner.viewModel.point = view.toMap(evt.clientX,evt.clientY);
            }
          }.bind(this), this._touchSpinnerThreshold);
          // Delay longer, show popup
          clearTimeout(pressTimer);
          pressTimer = setTimeout(function() {
            if (pressHold && !view.interacting) {
              // Find places...
              this._showPopup(evt);
            }
            pressHold = false;
          }.bind(this), this._touchHoldThreshold);
          return false;
        }.bind(this));

        // Move (cancel)
        query(".esri-view-surface").on(touch.move, function(evt){
          if (!this._isFindScaleThreshold()) {
            return;
          }
          pressHold = false;
          return false;
        }.bind(this));
        
        // Release
        query(".esri-view-surface").on(touch.release, function(evt){
          if (!this._isFindScaleThreshold()) {
            return;
          }
          pressHold = false;
          if (this._promise) {
            this._spinner.viewModel.point = this._popup.location;
          } else {
            this._spinner.viewModel.point = null;
          }
          return false;
        }.bind(this));
      }
    },

    _isFindScaleThreshold: function() {
      if (this._view) {
        return this._view.scale < this._findScaleThreshold;
      }
    },

    //----------------------------------------------------
    // Search events
    //----------------------------------------------------

    _setSearchWidgetEvents: function() {
      // Set search results popup actions
      var template = this._searchWidget.popupTemplate;
      var actions = this._getSearchPopupActions();
      template.actions = actions;
      // Clear find places popup
      this._searchWidget.watch("selectedResult", function(result) {
        if (result) {
          this._clearGraphics(true);          
        }
      }.bind(this));
      this._searchWidget.on("search-clear", function(evt) {
        if (!this._promise) {
          this._clearGraphics(true);        
        }
      }.bind(this));
    },

    //----------------------------------------------------
    // Template
    //----------------------------------------------------
    
    _createOptions: function() {
      function createOption(name, value, selected) {
        var option = `<option ${selected} value='${value}'>${name}</option>`;
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

    _createPopupTemplate: function(type, overwriteActions) {
      var content = "";
      // Location template
      if (type === "location") {
        var options = this._createOptions();
        content = `<span class='calcite-popup-content'>
                    <select id='filterPlaces' class='calcite-popup-filter'>` 
                      + options + `
                    </select>
                  </span>`;
      } else { // Places template
        content = "<div class='calcite-popup-content'>{address}</div>";
      }
      var popupTemplate = PopupTemplate({
        title: "{name}",
        content: content
      });
      var actions = [];
      var overwriteActions = false;
      if (type === "location") {
        actions = this._getLocationPopupActions();
        overwriteActions = false;
      } else if (type === "places") { // TODO
        //actions = this._getPlacesPopupActions();
      }
      popupTemplate.overwriteActions = overwriteActions;
      popupTemplate.actions = actions;
      return popupTemplate;
    },

    _getLocationPopupActions: function() {
      var actions = [];
      // Clear Action
      var searchClearAction = {
          title: "Clear",
          id: "clear",
          className: "esri-icon-close"
      }
      actions.push(searchClearAction);
      var clearTriggerAction = function(event){
        if (event.action.id === "clear"){
          this._cancelPromise();
          this._spinner.viewModel.point = null;
          this._clearGraphics();
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
          this._placesSelectLayer.removeAll();
          this._showLocationPopup();
        }
      }
      this._popup.on("trigger-action", goBackTriggerAction.bind(this));
      return actions;
    },

    _getSearchPopupActions: function() {
      var actions = [];
      var findPlacesAction = {
          title: "Find Places",
          id: "findPlaces",
          className: "esri-icon-map-pin"
      }
      actions.push(findPlacesAction);
      var findPlacesTriggerAction = function(event){
        if (event.action.id === "findPlaces"){
          // Show popup
          var location = this._popup.location.clone();
          if (location) {
            this._searchWidget.clear();
            this._showPopup({mapPoint: location});              
          }
        }
      }
      this._popup.on("trigger-action", findPlacesTriggerAction.bind(this));
      return actions;
    },

    //----------------------------------------------------
    // Show popup (on long tap)
    //----------------------------------------------------

    _cancelPromise: function() {
      if (this._promise) {
        this._promise.cancel();
      }
    },

    _showPopup: function showPopup(evt) {
      if (this._popup && evt) {
        // Get location point
        var point = evt.mapPoint || this._view.toMap(evt.clientX, evt.clientY);
        // Spinner
        this._popup._spinner.viewModel.point = null;
        this._spinner.viewModel.point = point.clone();
        // Clean up
        this._popup.clear();
        this._searchWidget.clear();
        this._clearGraphics();
        // Show location popup
        var location = this._createLocationGraphic(point);
        this._showLocationPopup(location);
        // Add Places
        this._cancelPromise();
        this._promise = this._findPlaces(point);
        this._promise
          .then(function(results){
            this._spinner.viewModel.point = null;
            // Delayed draw to wait for spinner, but can't use due visible bug
            // var graphic = this._addLocationGraphic(location, false); 
            // this._addPlacesGraphics(results).then(function(){
            //   setTimeout(function(){
            //     graphic.visible = true;  
            //   }, 250);
            // }.bind(this));
            this._addLocationGraphic(location, true);
            this._addPlacesGraphics(results);
            this._setPopupFeatures();
          }.bind(this))
          .otherwise(function(err){
            // Cancelled or failed, nothing to do here
          })
          .always(function(results){
            this._promise = null;
          }.bind(this));
      }
    },

    _showLocationPopup: function(feature) {
      // Show popup immediately for selectedFeature
      this._popup.features = [feature];
    },

    //----------------------------------------------------
    // Graphics
    //----------------------------------------------------

    _clearGraphics: function() {
      this._placesSelectLayer.removeAll();
      this._placesLayer.removeAll();
    },

    _formatCoords: function(point) {
      var lat = Math.round(point.latitude * 100000) / 100000;
      var lon = Math.round(point.longitude * 100000) / 100000;
      return lat + "," + lon;
    },

    _createLocationGraphic: function(point) {
      var popupTemplate = this._createPopupTemplate("location", false);
      var lat = Math.round(point.latitude * 100000) / 100000;
      var lon = Math.round(point.longitude * 100000) / 100000;
      var tempContent = "&nbsp;";
      // Graphic
      var locationGraphic = new Graphic({
        geometry: point,
        symbol: this._locationSymbol,
        attributes: {
          id: this._popupLocationId,
          name: this._popupDefaultTitle,
          address: tempContent//, // Until template is applied
          //coords: this._formatCoords(point)
        },
        popupTemplate: popupTemplate,
        layer: this._placesLayer // Bug
      });
      return locationGraphic;
    },

    _addLocationGraphic: function(graphic, visible) {
      graphic.visible = visible;
      this._placesLayer.graphics.add(graphic);
      return graphic;
    },

    _addPlacesGraphics: function(response) {
      // Symbols (shared)
      var markerSymbol = this._placesSymbol;
      var popupTemplate = this._createPopupTemplate("places", false);
      var graphics = [];
      // Post-process locations with same location and name attributes?
      responseProcessed = this._postProcessResults(response); // TODO
      // Create graphics
      responseProcessed.forEach(function(feature) {
        // Fix spatial reference
        var point = new Point({
          latitude: feature.location.latitude,
          longitude: feature.location.longitude,
          spatialReference: this._view.spatialReference
        });
        var pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
          attributes: {
            name: feature.attributes.PlaceName || feature.address,
            address: feature.attributes.Place_addr || feature.attributes.address//, // TODO
            //coords: this._formatCoords(point)
          },
          popupTemplate: popupTemplate,
          layer: this._placesLayer // Bug
        });
        graphics.push(pointGraphic);
      }.bind(this));
      var promise = this._placesLayer.addMany(graphics);
      return promise;
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
      var location = this._placesLayer.graphics.find(function(g) {
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
        outFields: outFields
      }
      var promise = this._geocoder.addressToLocations(params);       
      return promise;
    },

    // Set Features

    _setPopupFeatures: function(selectedIndex) {
      // Places
      var features = [];
      var graphics = this._placesLayer.graphics;
      graphics.forEach(function(g) {
        features.push(g);
      }.bind(this));
      this._popup.features = features;
      if (selectedIndex > -1) {
        this._popup.selectedFeatureIndex = selectedIndex;
      }
    },

    _isPlace: function(feature) {
      var isPlace = false;
      if (feature) {
        isPlace = (feature.layer === this._placesLayer);
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
      var index = this._placesLayer.graphics.findIndex(function(item) {
        return item === feature;
      });
      return index;
    },

    //----------------------------------------------------
    // Watch for selected feature changes
    //----------------------------------------------------

    _watchSelectedFeature: function() {
      this._popup.watch("selectedFeature", function(feature) {
        if (this._isPlace(feature)) {
          // Remove selected symbol
          this._placesSelectLayer.removeAll();
          var isLocation = this._isPlaceLocation(feature);
          // Set filter events
          if (isLocation) {
            this._setFilterHandler();
          } else { // Highlight place
            var selectedFeature = feature.clone();
            selectedFeature.symbol = this._placesSymbolSelected; 
            this._placesSelectLayer.add(selectedFeature);
          }
          // Move popup immediately
          var point = feature.geometry.clone();
          if (this._view.type === "2d") {
            this._popup.location = point;  
          }
          // Center map
          this._centerMap(point).then(function(){
            // Move popup after
            if (this._view.type === "3d") {
              var scenePoint = this._view.center;
              this._popup.location = scenePoint;
            }
          }.bind(this));
        }
      }.bind(this));

      // Work-around for click on location to re-show features
      this._view.on("click", function(result) {
        var feature = this._popup.selectedFeature;
        if (this._isPlace(feature)) {
          var index;
          if (this._popup.featureCount > 1) {
            index = this._popup.selectedFeatureIndex;
          } else {
            index = this._placeIndex(feature);
          }
          this._setPopupFeatures(index);
        }
      }.bind(this));
    },

    _setFilterHandler: function() {
      var start = new Date();
      var timer = setInterval(function() {
        // Create a keyword places filter
        var filterPlaces = query("#filterPlaces");
        if (filterPlaces.length > 0) {
          if (timer) {
            clearTimeout(timer);
          }
          var filter = filterPlaces[0];
          // Setup select handler
          query(filter).on("change", function(evt){
            // iPhone fix
            filter.blur();
            // Set active key
            var searchKeyword = evt.target.value;
            this._activeSearchKey = searchKeyword;
            // Show popup
            var location = this._placesLayer.graphics.items[0];
            if (location) {
              var point = location.geometry;
              this._showPopup({mapPoint: point});
            }
            return false;
          }.bind(this));
        } else { // Safety
          var stop = new Date();
          if ((stop - start)/1000 > 5) {
            if (timer) {
              clearTimeout(timer);            
            }
          }
        }    
      }.bind(this), 50);
    },

    _centerMap: function(point) {
      var options = {
        center: point, 
        scale: this._view.scale
      }
      var promise = this._view.goTo(options, {
          animate: !(this._view.widthBreakpoint === "small" || this._view.widthBreakpoint === "xsmall"), // Not for mobile,
          duration: this._view.scale < 100000 ? 150 : 300 // Fast vs slower pan
        });
      return promise;
    }

  })
})