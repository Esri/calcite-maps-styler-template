/*global define,document */
/*jslint sloppy:true,nomen:true */
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
    "dojo/ready",
    "dojo/_base/array",
    "dojo/_base/Color",
    "dojo/_base/declare",
    "dojo/_base/event",
    "dojo/_base/fx",
    "dojo/_base/html",
    "dojo/_base/lang",
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/on",
    "dojo/query",
    "dijit/layout/ContentPane",
    "dijit/registry",
    "application/TrackingPt",
    "esri/arcgis/utils",
    "esri/dijit/Directions",
    "esri/dijit/Geocoder",
    "esri/dijit/LocateButton",
    "esri/dijit/Popup",
    "esri/geometry/mathUtils",
    "esri/geometry/Point",
    "esri/graphic",
    "esri/InfoTemplate",
    "esri/lang",
    "esri/layers/GraphicsLayer",
    "esri/symbols/Font",
    "esri/symbols/CartographicLineSymbol",
    "esri/symbols/PictureMarkerSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/TextSymbol",
    "esri/tasks/locator",
    'esri/tasks/query',
    "esri/urlUtils"
], function (
    ready,
    array,
    Color,
    declare,
    event,
    fx,
    html,
    lang,
    dom,
    domAttr,
    domClass,
    domConstruct,
    domStyle,
    on,
    query,
    ContentPane,
    registry,
    TrackingPt,
    arcgisUtils,
    Directions,
    Geocoder,
    LocateButton,
    Popup,
    mathUtils,
    Point,
    Graphic,
    InfoTemplate,
    esriLang,
    GraphicsLayer,
    Font,
    CartographicLineSymbol,
    PictureMarkerSymbol,
    SimpleFillSymbol,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    TextSymbol,
    Locator,
    Query,
    urlUtils
) {
   
      return declare(null, {

      config : {},
      color : null,
      map : null,
      locator : null,
      initExt : null,
      opLayers : [],
      opLayerObj : null,
      opLayer : null,
      opFeatureLayer : false,
      opFeatures : [],
      hiLayer : null,
      destLayer : null,
      origin : null,
      originObj : null,
      geocoder : null,
      dirWidget : null,
      selectedNum : null,
      trackingPt : null,
      offset : 0,
      page : 0,
      searchProps : null,

      // Startup
      startup : function(config) {
         // config will contain application and user defined info for the template such as i18n strings, the web map id
         // and application id
         // any url parameters and any application specific configuration information.
         if (config) {
            this.config = config;
            this._setColor();
            this._setProtocolHandler();
            // proxy rules
            urlUtils.addProxyRule({
               urlPrefix : "route.arcgis.com",
               proxyUrl : this.config.proxyurl
            });
            urlUtils.addProxyRule({
               urlPrefix : "traffic.arcgis.com",
               proxyUrl : this.config.proxyurl
            });
            // document ready
            ready(lang.hitch(this, function() {
               //supply either the webmap id or, if available, the item info
               var itemInfo = this.config.itemInfo || this.config.webmap;
               //If a custom extent is set as a url parameter handle that before creating the map
               if (this.config.extent) {
                  var extArray = decodeURIComponent(this.config.extent).split(",");
                  if (extArray.length === 4) {
                     itemInfo.item.extent = [[parseFloat(extArray[0]), parseFloat(extArray[1])], [parseFloat(extArray[2]), parseFloat(extArray[3])]];
                  }
               }
               this._createWebMap(itemInfo);

            }));
         } else {
            var error = new Error("Main:: Config is not defined");
            this.reportError(error);
         }
      },

      // Report error
      reportError : function(error) {
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
               node.innerHTML = this.config.i18n.map.error + ": " + error.message;
            } else {
               node.innerHTML = "Unable to create map: " + error.message;
            }
         }
      },

      // Set Color
      _setColor : function() {
         this.color = this.config.color;
         var style = document.createElement('style');
         style.type = 'text/css';
         style.innerHTML = '.bg {background-color: ' + this.color + '};';
         document.getElementsByTagName('head')[0].appendChild(style);
         if (this.config.styleBasemap == 1) {
            var style2 = document.createElement('style');
            style2.type = 'text/css';
            style2.innerHTML = '.layerTile {filter: url(css/filters.svg#grayscale); filter: gray; -webkit-filter: grayscale(1); -ms-filter: grayscale(100%); -moz-opacity: 0.7; -khtml-opacity: 0.7; opacity: 0.7;}';
            document.getElementsByTagName('head')[0].appendChild(style2);
         }
         // rec opened
         var recColor = Color.blendColors(Color.fromString("#ffffff"), Color.fromString(this.color), 0.3);
         var style3 = document.createElement('style');
         style3.type = 'text/css';
         style3.innerHTML = '.recOpened {background-color:' + recColor.toCss() + ';}';
         document.getElementsByTagName('head')[0].appendChild(style3);
      },

      // set protocol handler
      _setProtocolHandler : function() {
         esri.id.setProtocolErrorHandler(function() {
            if (window.confirm("Your browser is not CORS enabled. You need to redirect to HTTPS. Continue?")) {
               window.location = window.location.href.replace("http:", "https:");
            }
         });
      },

      // Create web map based on the input web map id
      _createWebMap : function(itemInfo) {

         // popup
         var popupSym = new SimpleMarkerSymbol("circle", 2, null, new Color([0, 0, 0, 0.1]));
         var popup = new Popup({
            markerSymbol : popupSym,
            anchor : "top"
         }, dom.byId("panelPopup"));

         arcgisUtils.createMap(itemInfo, "panelMap", {
            mapOptions : {
               editable : false,
               infoWindow : popup
            },
            bingMapsKey : this.config.bingKey
         }).then(lang.hitch(this, function(response) {

            var appProps = response.itemInfo.itemData.applicationProperties;
            if (appProps && appProps.viewing && appProps.viewing.search)
               this.searchProps = appProps.viewing.search;

            this.map = response.map;
            this.map.setInfoWindowOnClick(true);
            this.initExt = this.map.extent;
            this.opLayers = response.itemInfo.itemData.operationalLayers;
            on(this.map, "click", lang.hitch(this, this._mapClickHandler));

            // hi layer
            this.hiLayer = new GraphicsLayer();
            this.map.addLayer(this.hiLayer);

            // destinations layer
            this.destLayer = new GraphicsLayer();
            this.map.addLayer(this.destLayer);
            this.destLayer.on("click", lang.hitch(this, this._selectFeature));

            // locator
            this.locator = new Locator(this.config.helperServices.geocode[0].url);
            this.locator.outSpatialReference = this.map.spatialReference;

            // calc offset
            this._calculateOffset(response);

            // make sure map is loaded
            if (this.map.loaded) {
               // do something with the map
               this._mapLoaded();
            } else {
               on.once(this.map, "load", lang.hitch(this, function() {
                  // do something with the map
                  this._mapLoaded();
               }));
            }
         }), this.reportError);
      },

      // Calculate Offset
      _calculateOffset : function(response) {
         var lods = response.itemInfo.itemData.baseMap.baseMapLayers[0].layerObject.tileInfo.lods;
         var lod = lods[this.config.defaultZoomLevel || 13];
         var res = lod.resolution;
         this.offset = res * 320;
      },

      // Map Loaded - Map is ready
      _mapLoaded : function() {
         query(".bg").style("backgroundColor", this.color.toString());
         query(".esriSimpleSlider").style("backgroundColor", this.color.toString());
         domClass.remove(document.body, "app-loading");
         this._processDestinations();
         this._configureMapUI();
      },

      // Process Destinations
      _processDestinations : function() {
         this.opFeatures = [];
         var pt, gra;
         if (this.config.longitude && this.config.latitude) {
            pt = new Point(parseFloat(this.config.longitude), parseFloat(this.config.latitude));
            gra = new Graphic(pt, null, {
               Name : this.config.destination,
               Latitude : this.config.latitude,
               Longitude : this.config.longitude
            });
            this.opFeatures.push(gra);
            this._setupTemplate();
            this._processDestinationFeatures();
         } else if (this.config.address) {
            var options = {
               address : {
                  "SingleLine" : this.config.address
               },
               outFields : ["Loc_name"]
            };
            this.locator.addressToLocations(options);
            this.locator.addressToLocations(options, lang.hitch(this, function(evt) {
               if (evt.length > 0) {
                  var candidate = evt[0];
                  var address = candidate.address;
                  pt = candidate.location;
                  gra = new Graphic(pt, null, {
                     Name : this.config.destination,
                     Address : address
                  });
                  this.opFeatures.push(gra);
                  this._setupTemplate();
                  this._processDestinationFeatures();
               }
            }), function(err) {
               console.log(err.message);
            });
         } else {
            this._processOperationalLayers();
         }
      },

      // Process Operational Layers
      _processOperationalLayers : function() {
         if (this.config.destLayer) {
            array.forEach(this.opLayers, lang.hitch(this, function(layer) {
               if (layer.featureCollection) {
                  for (var i = 0; i < layer.featureCollection.layers.length; i++) {
                     if (layer.featureCollection.layers[i].id == this.config.destLayer.id) {
                        this.config.destLayer.title = layer.title;
                        this.opLayerObj = layer;
                        this.opLayer = layer.featureCollection.layers[i].layerObject;
                        this.opFeatures = this.opLayer.graphics.slice(0);
                     }
                  }
               } else if (layer.layerObject && layer.layerObject.type == "Feature Layer" && layer.id == this.config.destLayer.id) {
                  this.config.destLayer.title = layer.title;
                  this.opLayerObj = layer;
                  this.opFeatureLayer = true;
                  this.opLayer = layer.layerObject;
               }
            }));
         } else {
            this.opLayer = this._getDefaultOperationalLayer();
         }
         this._setupTemplate();
         if (this.opLayer)
            this.opLayer.setVisibility(false);
         if (this.opFeatureLayer) {
            this._queryDestinations();
         } else {
            this._processDestinationFeatures();
         }
      },

      // get default operational layer
      _getDefaultOperationalLayer : function() {
         this.opLayers.reverse();
         if (this.opLayers.length > 0) {
            for (var i = 0; i < this.opLayers.length; i++) {
               var layer = this.opLayers[i];
               if (layer.featureCollection) {
                  var count = layer.featureCollection.layers.length;
                  layer.featureCollection.layers.reverse();
                  for (var j = 0; j < count; j++) {
                     var features = layer.featureCollection.layers[j].layerObject.graphics;
                     if (features.length > 0) {
                        this.config.destLayer = {id: layer.featureCollection.layers[j].id, title: layer.title};
                        this.opLayerObj = layer;
                        this.opFeatures = features.slice();
                        return layer.featureCollection.layers[j].layerObject;
                     }
                  }
               } else if (layer.layerObject && layer.layerObject.type == "Feature Layer") {
                  this.config.destLayer = {id: layer.id, title: layer.title};
                  this.opLayerObj = layer;
                  this.opFeatureLayer = true;
                  return layer.layerObject;
               }
            }
         }
         return null;
      },

      // setup template
      _setupTemplate : function() {
         var infoTemplate;
         if (!this.opLayer) {
            var title = this.config.destination || this.config.title;
            var content = "<hr/>Name: ${Name}<br/><br/>Address: ${Address}<br/><br/>Latitude: ${Latitude}<br/><br/>Longitude: ${Longitude}";
            if (this.config && this.config.i18n)
               content = "<hr/>" + this.config.i18n.location.name + ": ${Name}<br/><br/>" + this.config.i18n.location.address + ": ${Address}<br/><br/>" + this.config.i18n.location.latitude + ": ${Latitude}<br/><br/>" + this.config.i18n.location.longitude + ": ${Longitude}";
            infoTemplate = new InfoTemplate(title, content);
         } else {
            infoTemplate = this.opLayer.infoTemplate;
         }
         this.infoTemplate = infoTemplate;
         this.destLayer.setInfoTemplate(infoTemplate);
      },

      // ** UI FUNCTIONS ** //

      // Create Geocoder Options
      _createGeocoderOptions : function() {
         var hasEsri = false;
         var geocoders = lang.clone(this.config.helperServices.geocode);
         array.forEach(geocoders, lang.hitch(this, function(geocoder, index) {
            if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
               hasEsri = true;
               geocoder.name = "Esri World Geocoder";
               geocoder.outFields = "Match_addr, stAddr, City";
               geocoder.singleLineFieldName = "SingleLine";
               geocoder.esri = geocoder.placefinding = true;
            }
         }));
         //only use geocoders with a singleLineFieldName
         geocoders = array.filter(geocoders, function(geocoder) {
            return (esriLang.isDefined(geocoder.singleLineFieldName));
         });
         var esriIdx;
         if (hasEsri) {
            for (var i = 0; i < geocoders.length; i++) {
               if (esriLang.isDefined(geocoders[i].esri) && geocoders[i].esri === true) {
                  esriIdx = i;
                  break;
               }
            }
         }
         var options = {
            map : this.map,
            autoNavigate : false,
            autoComplete : hasEsri
         };
         if (hasEsri && esriIdx === 0 && geocoders.length === 1) {// Esri geocoder is primary
            options.arcgisGeocoder = true;
         } else {// Esri geocoder is not primary
            options.arcgisGeocoder = false;
            options.geocoders = geocoders;
         }
         return options;
      },
      
      // Create Geofilter Options
      _createGeofilterOptions : function() {
         var options;
         var searchLayers = [];
         if (this.searchProps) {
             array.forEach(this.searchProps.layers, lang.hitch(this, function (searchLayer) {
                 var layer = null;
                 var destId = this.config.destLayer.id;
                 array.some(this.opLayers, function (lyr) {
                     if (lyr.id === searchLayer.id && searchLayer.id == destId) {
                         layer = lyr;
                         return true;
                     }
                 });
                 if (layer && layer.hasOwnProperty("url")) {
                     var url = layer.url;
                     var field = searchLayer.field.name;
                     var name = layer.title;
                     if (esriLang.isDefined(searchLayer.subLayer)) {
                         url = url + "/" + searchLayer.subLayer;
                         array.some(layer.layerObject.layerInfos, function (info) {
                             if (info.id == searchLayer.subLayer) {
                                 name += " - " + layer.layerObject.layerInfos[searchLayer.subLayer].name;
                                 return true;
                             }

                         });
                     }
                     searchLayers.push({
                         "name": name,
                         "url": url,
                         "field": field,
                         "exactMatch": (searchLayer.field.exactMatch || false),
                         "placeholder": this.searchProps.hintText,
                         "outFields": "*",
                         "type": "query",
                         "layerId": searchLayer.id,
                         "subLayerId": parseInt(searchLayer.subLayer) || null
                     });
                 }
             }));
         }
         if(searchLayers.length > 0) {
            options = {};
            options.map = this.map;
            options.autoNavigate = false;
            options.autoComplete = false;
            options.arcgisGeocoder = false;
            options.maxLocations = 250;
            options.geocoders = searchLayers;
         }
         return options;
      },

      // Configure Map UI
      _configureMapUI : function() {

         // home
         // var home = new HomeButton({
         // map : this.map
         // }, "btnHome");
         // home.startup();

         // geolocate
         var geoLocate = new LocateButton({
            map : this.map,
            autoNavigate : false,
            highlightLocation : false
         }, "btnLocate");
         on(geoLocate, "locate", lang.hitch(this, this._geoLocated));
         geoLocate.startup();

         // geocoder
         var geocoderOptions = this._createGeocoderOptions();
         this.geocoder = new Geocoder(geocoderOptions, "panelGeocoder");
         on(this.geocoder, "select", lang.hitch(this, this._geocoderSelect));
         on(this.geocoder, "clear", lang.hitch(this, this._geocoderClear));
         this.geocoder.startup();
         var prompt = this.config.prompt || "";
         domAttr.set("panelGeocoder_input", "placeholder", prompt);

         // geofilter
         var geofilterOptions;
         if (this.searchProps) {
            geofilterOptions = this._createGeofilterOptions();
         }
         if (geofilterOptions) {
            this.geofilter = new Geocoder(geofilterOptions, "panelGeocoderFilter");
            this.geofilter.startup();
            domStyle.set("btnFilter", "display", "block");
            on(this.geofilter, "find-results", lang.hitch(this, this._geofilterResults));
            on(this.geofilter, "clear", lang.hitch(this, this._geofilterClear));
         }

         // directions
         var rgb = Color.fromString(this.color).toRgb();
         var symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL, new Color([0, 0, 0]), 0);
         var sym = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 1, symL, new Color([0, 0, 0, 0]));
         var routeSym = new CartographicLineSymbol(CartographicLineSymbol.STYLE_SOLID, new Color([rgb[0], rgb[1], rgb[2], 0.4]), 8, CartographicLineSymbol.CAP_SQUARE, CartographicLineSymbol.JOIN_MITER, 4);
         var segmentSym = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SHORTDOT, new Color([0, 0, 0, 0.4]), 8);
         var units = "esriMiles";
         if (this.config.distanceUnits == "kilometers")
            units = "esriKilometers";
         var options = {
            map : this.map,
            maxStops : 2,
            showTravelModesOption : false,
            showTrafficOption : true,
            routeParams : {
               directionsLengthUnits : units
            },
            alphabet : false,
            canModifyStops : false,
            dragging : false,
            fromSymbol : sym,
            toSymbol : sym,
            stopSymbol : sym,
            routeSymbol : routeSym,
            segmentSymbol : segmentSym
         };
         if (this.config.helperServices.routeTask)
            options.routeTaskURL = this.config.helperServices.routeTask.url;
         if (this.config.routeUtility)
            options.routeTaskUrl = this.config.routeUtility;
         this.dirWidget = new Directions(options, "resultsDirections");
         on(this.dirWidget, "directions-finish", lang.hitch(this, this._directionsFinished));
         this.dirWidget.startup();

         // configure ui
         this._configureUI();

         // update theme
         this._updateTheme();

      },

      // Configure UI
      _configureUI : function() {

         // top
         if (this.config.title !== "") {
            document.title = this.config.title;
            dom.byId("panelTitle").innerHTML = this.config.title;
         }

         // toggle
         var btnToggle = dom.byId("btnToggle");
         if (this.config && this.config.i18n) {
            btnToggle.title = this.config.i18n.tooltips.toggle;
         }
         on(btnToggle, "click", lang.hitch(this, this._toggleScroll));
         // close
         on(dom.byId("btnClose"), "click", lang.hitch(this, this._showPage, 0));
         // reset
         var btnReset = dom.byId("btnReset");
         if (this.config && this.config.i18n) {
            btnReset.title = this.config.i18n.tooltips.reset;
         }
         on(btnReset, "click", lang.hitch(this, this._resetApp));
         // filter
         var btnFilter = dom.byId("btnFilter");
         if (this.config && this.config.i18n) {
            btnFilter.title = this.config.i18n.tooltips.filter;
         }
         on(btnFilter, "click", lang.hitch(this, this._showPage, 2));
         // reverse
         on(dom.byId("btnReverse"), "click", lang.hitch(this, this._reverseDirections));

      },

      // Update Theme
      _updateTheme : function() {
         query(".bg").style("backgroundColor", this.color.toString());
         query(".esriPopup .titlePane").style("backgroundColor", this.color.toString());
      },

      // Reset App
      _resetApp : function() {
         this._unselectRecords();
         this._updateOrigin(null, null);
         this._processDestinationFeatures();
      },

      // Show Page
      _showPage : function(num) {
         this.page = num;
         switch (num) {
         case 0:
            this._clearDirections();
            dom.byId("panelTitle").innerHTML = this.config.title;
            domStyle.set("bodyFeatures", "display", "block");
            domStyle.set("bodyDirections", "display", "none");
            domStyle.set("btnClose", "display", "none");
            if(this.geofilter)
               domStyle.set("btnFilter", "display", "block");
            domStyle.set("btnReset", "display", "block");
            domStyle.set("panelDestination", "display", "none");
            domStyle.set("panelSearchBox", "display", "block");
            domStyle.set("panelFilterBox", "display", "none");
            break;
         case 1:
            var tip = "Directions";
            if (this.config && this.config.i18n) {
               tip = this.config.i18n.tooltips.directions;
            }
            dom.byId("panelTitle").innerHTML = tip;
            domStyle.set("bodyFeatures", "display", "none");
            domStyle.set("bodyDirections", "display", "block");
            domStyle.set("btnClose", "display", "block");
            domStyle.set("btnFilter", "display", "none");
            domStyle.set("btnReset", "display", "none");
            domStyle.set("panelDestination", "display", "block");
            domStyle.set("panelSearchBox", "display", "block");
            domStyle.set("panelFilterBox", "display", "none");
            break;
         case 2:
            this._clearDirections();
            var tip = "Filter";
            if (this.config && this.config.i18n) {
               tip = this.config.i18n.tooltips.filter;
            }
            dom.byId("panelTitle").innerHTML = tip;
            domStyle.set("bodyFeatures", "display", "block");
            domStyle.set("bodyDirections", "display", "none");
            domStyle.set("btnClose", "display", "block");
            domStyle.set("btnFilter", "display", "none");
            domStyle.set("btnReset", "display", "none");
            domStyle.set("panelDestination", "display", "none");
            domStyle.set("panelSearchBox", "display", "none");
            domStyle.set("panelFilterBox", "display", "block");
            break;
         }
         this._updateRouteTools();
      },

      // ** GEO FUNCTIONS ** //

      // geoLocated
      _geoLocated : function(evt) {
         var gra;
         var pt;
         if (evt.graphic) {
            pt = evt.graphic.geometry;
            this.locator.locationToAddress(pt, 500, lang.hitch(this, function(result) {
               if (result.address) {
                  var label = result.address.Address;
                  this.geocoder.set("value", label);
                  var sym = new PictureMarkerSymbol("images/start.png", 24, 24);
                  var gra = new Graphic(pt, sym, {
                     label : label
                  });
                  this._updateOrigin(gra, gra);
               }
            }), lang.hitch(this, function(err) {
               this._clearDirections();
               console.log(err.message);
               this.geocoder.set("value", "");
            }));
         } else {
            if (evt.error)
               console.log(evt.error.message);
         }
         this._updateOrigin(gra, pt);
      },

      // geocoder select
      _geocoderSelect : function(obj) {
         var result = obj.result;
         var pt = result.feature.geometry;
         var label = result.name;
         var sym = new PictureMarkerSymbol("images/start.png", 24, 24);
         var gra = new Graphic(pt, sym, {
            label : label
         });
         this._updateOrigin(gra, result);
      },

      // geocoder clear
      _geocoderClear : function() {
         this._updateOrigin(null, null);
      },
      
      // geofilter results
      _geofilterResults : function(obj) {
         this._unselectRecords();
         var features = [];
         if (obj.results && obj.results.results.length > 0) {
            var results = obj.results.results;
            array.forEach(results, function(rec){
               features.push(rec.feature);
            });
         }
         this.opFeatures = features;
         this._processDestinationFeatures();
      },

      // geofilter clear
      _geofilterClear : function() {
         this._unselectRecords();
         this._queryDestinations();
      },

      // ** QUERY FUNCTIONS ** //

      // Query Destinations
      _queryDestinations : function() {
         var expr = "1=1";
         // if (this.opLayerObj.layerDefinition && this.opLayerObj.layerDefinition.definitionExpression) {
         // expr = this.opLayerObj.layerDefinition.definitionExpression;
         // }
         var query = new Query();
         query.returnGeometry = true;
         query.where = expr;
         // TO DO: verify if destinatins need to be limited to  default map extent;
         //query.geometry = this.map.extent;
         query.outFields = ["*"];
         this.opLayer.queryFeatures(query, lang.hitch(this, this._processResults), lang.hitch(this, this._processError));
      },

      // Process Results
      _processResults : function(results) {
         this.opFeatures = results.features;
         this._processDestinationFeatures();
      },

      // Process Error
      _processError : function(err) {
         console.log(err.message);
      },

      // Process Destination
      _processDestinationFeatures : function() {
         array.forEach(this.opFeatures, lang.hitch(this, function(gra) {
            var geom = gra.geometry;
            var pt = geom;
            if (geom.type != "point")
               pt = this._getPointForGeometry(geom);
            var dist = null;
            dist = this._getDistance(pt);
            gra.attributes.POINT_LOCATION = pt;
            gra.attributes.DISTANCE = dist;
            gra.setInfoTemplate(this.infoTemplate);
         }));
         this.opFeatures.sort(this._compareDistance);
         this._updateDestinations();
      },

      // Update Destinaions
      _updateDestinations : function() {
         if (registry.byId("recPane"))
            registry.byId("recPane").destroy();
         var results = dom.byId("resultsFeatures");
         results.innerHTML = "";
         var features = this.opFeatures;
         for (var i = 0; i < features.length; i++) {
            var num = i + 1;
            var gra = features[i];
            
            // rec
            var rec = domConstruct.create("div", {
               id : "rec_" + i
            }, results);
            domClass.add(rec, 'rec');
            
            // header
            var recHeader = domConstruct.create("div", {
            }, rec);
            domClass.add(recHeader, 'recHeader');
            on(recHeader, "click", lang.hitch(this, this._selectRecord, i));
               
            // num
            var recNum = domConstruct.create("div", {
               innerHTML : num
            }, recHeader);
            domClass.add(recNum, 'recNum');
            domClass.add(recNum, 'bg');
            
            //headerInfo
            var recHeaderInfo = domConstruct.create("div", {
            }, recHeader);
            domClass.add(recHeaderInfo, 'recHeaderInfo');
            
            // info
            var info = gra.getTitle();
            if (info === "" && this.opLayer) {
               info = this.config.destLayer.title;
            }
            
            // distance
            if (this.origin && gra.attributes.DISTANCE) {
               info += "<br/><span class='recDist'>~ " + gra.attributes.DISTANCE + " " + this.config.distanceUnits.toUpperCase() + "</span>";
            }
            
            recHeaderInfo.innerHTML = info;
            
            // route
            var tip = "Directions";
            if (this.config && this.config.i18n) {
               tip = this.config.i18n.tooltips.directions;
            }
            if (gra.attributes.DISTANCE) {
               var recRoute = domConstruct.create("div", {
                  title : tip
               }, recHeader);
               domClass.add(recRoute, 'recRoute');
               recRoute.select = lang.hitch(this, this._selectRoute);
               on(recRoute, "click", lang.partial(recRoute.select, i));
            }
            
            //body
            var recBody = domConstruct.create("div", {
               id : 'recBody_' + i
            }, rec);
            domClass.add(recBody, 'recBody');
            
         }
         
         dom.byId("bodyFeatures").scrollTop = 0;
         this._renderDestinations();
      },

      // Switch View
      _switchView : function() {
         setTimeout(lang.hitch(this, this._toggleScroll), 2000);
      },

      // Select Feature
      _selectFeature : function(evt) {
         var gra = evt.graphic;
         var num = gra.id;
         num = num.replace("R_", "").replace("T_", "");
         this._selectRecord(parseInt(num), false);
         event.stop(evt);
         this._showPage(0);
         this._switchView();
      },

      // Select Record
      _selectRecord : function(num, zoom) {
         if ( typeof (zoom) === 'undefined') {
            zoom = true;
         }
         this._unselectRecords();
         if (num != this.selectedNum) {
            this._highlightRecord(num, zoom);
         } else {
            this.selectedNum = null;
         }
      },

      // Highlight Record
      _highlightRecord : function(num, zoom) {
         this.selectedNum = num;
         var gra = this.opFeatures[num];
         domClass.add("rec_" + num, "recOpened");
         this._zoomToDestination(gra, zoom);
         var recBody = dom.byId("recBody_" + num);
         var cp = new ContentPane({
            id : "recPane"
         });
         cp.placeAt(recBody, 'last');
         cp.startup();
         var content = gra.getContent();
         registry.byId("recPane").set("content", content);
         this._switchView();
         if (!zoom) {
            dom.byId("bodyFeatures").scrollTop = 0;
            setTimeout(lang.hitch(this, this._updatePosition), 300);
         }
      },

      // Select Route
      _selectRoute : function(num, evt) {
         event.stop(evt);
         this._showRoute(num);
      },

      // Show Route
      _showRoute : function(num) {
         var zoom = true;
         if (this.origin)
            zoom = false;
         this._unselectRecords();
         this._highlightRecord(num, zoom);
         var gra = this.opFeatures[num];
         this._routeToDestination(gra);
      },

      // Update Position
      _updatePosition : function() {
         dom.byId("bodyFeatures").scrollTop = 0;
         var num = this.selectedNum;
         var pos = num * 60;
         dom.byId("bodyFeatures").scrollTop = pos;
      },

      // Unselect Records
      _unselectRecords : function() {
         this.hiLayer.clear();
         if (registry.byId("recPane"))
            registry.byId("recPane").destroy();
         //domConstruct.destroy("recDetails");
         query(".recOpened").forEach(function(node) {
            domClass.remove(node, "recOpened");
         });
      },

      // Render Destinations
      _renderDestinations : function() {
         this.destLayer.clear();
         var rgb = Color.fromString(this.color).toRgb();
         var symML = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255, 1]), 1);
         var symM = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 22, symML, this.color);
         var symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([rgb[0], rgb[1], rgb[2], 0.8]), 4);
         var symF = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, symL, new Color([255, 255, 255, 0.4]));
         var fnt = new Font();
         fnt.family = "Arial";
         fnt.size = "10px";
         for (var i = 0; i < this.opFeatures.length; i++) {
            var num = i + 1;
            var gra = this.opFeatures[i];
            var geom = gra.geometry;
            var attr = gra.attributes;
            var pt = gra.attributes.POINT_LOCATION;
            if (geom.type == "polyline")
               this.destLayer.add(new Graphic(geom, symL, attr));
            if (geom.type == "polygon")
               this.destLayer.add(new Graphic(geom, symF, attr));
            var symText = new TextSymbol(num, fnt, "#ffffff");
            symText.setOffset(0, -4);
            var graRing = new Graphic(pt, symM, attr);
            graRing.id = "R_" + i;
            var graText = new Graphic(pt, symText, attr);
            graText.id = "T_" + i;
            this.destLayer.add(graRing);
            this.destLayer.add(graText);
         }
      },

      // Get point for geometry
      _getPointForGeometry : function(geom) {
         if (geom.type == "polygon")
            return geom.getCentroid();
         if (geom.type == "polyline") {
            var pathNum = Math.floor(geom.paths.length / 2);
            var ptNum = Math.floor(geom.paths[pathNum].length / 2);
            return geom.getPoint(pathNum, ptNum);
         }
         return geom.getExtent().getCenter();
      },

      // Get distance
      _getDistance : function(loc) {
         var pt = this.map.extent.getCenter();
         if (this.origin)
            pt = this.origin.geometry;
         var dist = 0;
         dist = mathUtils.getLength(pt, loc) * 0.000621371;
         if (this.config.distanceUnits == "kilometers")
            dist = dist * 1.60934;
         dist = Math.round(dist * 10) / 10;
         return dist;
      },

      // Compare distance
      _compareDistance : function(a, b) {
         if (a.attributes.DISTANCE < b.attributes.DISTANCE)
            return -1;
         if (a.attributes.DISTANCE > b.attributes.DISTANCE)
            return 1;
         return 0;
      },

      // Zoom to destination
      _zoomToDestination : function(gra, zoom) {
         var pt = gra.attributes.POINT_LOCATION;
         if (zoom) {
            var c = pt;
            if (this.map.width > 570) {
               c = pt.offset(this.offset / 2, 0);
            }
            this.map.centerAndZoom(c, this.config.defaultZoomLevel || 13);
         }
         var rgb = Color.fromString(this.color).toRgb();
         rgb.push(0.4);
         var symML = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color.fromArray(rgb), 10);
         var symM = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 34, symML, new Color.fromArray([0, 0, 0, 1]));
         this.hiLayer.clear();
         this.hiLayer.add(new Graphic(pt, symM, null));
      },

      // Route to destination
      _routeToDestination : function(gra) {
         this._clearDirections();
         var pt = gra.geometry;
         dom.byId("panelDestination").innerHTML = gra.getTitle();
         this._showPage(1);
         if (this.originObj) {
            this.dirWidget.removeStops();
            var def = this.dirWidget.addStops([this.originObj, pt]);
            def.then(lang.hitch(this, function() {
               this.dirWidget.getDirections();
            }));
         }
      },

      // Reverse Directions
      _reverseDirections : function() {
         var stops = this.dirWidget.stops;
         stops.reverse();
         this.dirWidget.clearDirections();
         this.dirWidget.reset();
         var def = this.dirWidget.addStops(stops);
         def.then(lang.hitch(this, function() {
            this.dirWidget.getDirections();
         }));
      },

      // Clear Directions
      _clearDirections : function() {
         this.dirWidget.reset();
         this.dirWidget.mergedRouteGraphic = undefined;
         if (this.trackingPt)
            this.map.graphics.remove(this.trackingPt);
      },

      // Directions Finished
      _directionsFinished : function() {
         if (this.dirWidget.mergedRouteGraphic != undefined) {
            var gra = this.dirWidget.mergedRouteGraphic;
            var ext = gra.geometry.getExtent();
            var ext2 = ext;
            if (this.map.width > 570) {
               var offset = ext.getWidth() * 320 / this.map.width;
               ext2.update(ext.xmin, ext.ymin, ext.xmax + offset, ext.ymax, ext.spatialReference);
            }
            this.map.setExtent(ext2.expand(2));

            var rgb = Color.fromString(this.color).toRgb();
            rgb.push(0);
            var symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL, new Color.fromArray(rgb), 0);
            var sym = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 20, symL, Color.fromArray(rgb));
            var pt = gra.geometry.getPoint(0, 0);
            if (this.trackingPt)
               this.map.graphics.remove(this.trackingPt);
            this.trackingPt = new TrackingPt(pt, sym, {
               color : this.color,
               route : gra.geometry
            });
            this.map.graphics.add(this.trackingPt);
            setTimeout(lang.hitch(this, function() {
               this.trackingPt.updateSymbol();
            }), 2000);
         } else {
            setTimeout(lang.hitch(this, function() {
               this.dirWidget.removeStops();
            }), 2000);
            console.log("Error generating route");
         }
      },

      // Update Origin
      _updateOrigin : function(gra, obj) {
         this._clearDirections();
         this.map.graphics.clear();
         this.origin = gra;
         this.originObj = obj;
         if (this.origin) {
            this.map.graphics.add(gra);
            if (this.page === 0 && !this.selectedNum)
               this._processDestinationFeatures();
            if (this.opFeatures.length > 0) {
               var num = 0;
               if (this.selectedNum)
                  num = this.selectedNum;
               this._showRoute(num);
            }
         }

         this._updateRouteTools();
      },

      // Update Route Tools
      _updateRouteTools : function() {
         if (this.page == 1 && this.origin) {
            domStyle.set("btnReverse", "display", "block");
         } else {
            domStyle.set("btnReverse", "display", "none");
         }
      },

      // Toggle Scroll
      _toggleScroll : function() {
         this._animateScroll();
      },

      // Animate Scroll
      _animateScroll : function() {
         var box = html.getContentBox(dom.byId("panelContent"));
         var pos = document.body.scrollTop || document.documentElement.scrollTop;
         var start = 0;
         var end = box.h - 120;
         if (pos > 0) {
            start = pos;
            end = 0;
         }
         var anim = new fx.Animation({
            duration : 300,
            curve : [start, end]
         });
         on(anim, "Animate", function(v) {
            document.body.scrollTop = v;
            document.documentElement.scrollTop = v;
         });
         anim.play();
      },

      // Map Click Handler
      _mapClickHandler : function(evt) {
         if (evt.target.id == "panelMap_gc") {
            var pt = evt.mapPoint;
            var content = "Use this location";
            if (this.config && this.config.i18n) {
               content = this.config.i18n.location.use;
            }
            var div = domConstruct.create("div", {
               innerHTML : content
            });
            domClass.add(div, "useLocation");
            domClass.add(div, "rounded");
            on(div, "click", lang.hitch(this, this._useClickLocation, pt));
            this.map.infoWindow.setContent(div);
            this.map.infoWindow.show(pt);
         }
      },

      // Use Click Location
      _useClickLocation : function(pt) {
         this.map.infoWindow.hide();
         this.locator.locationToAddress(pt, 500, lang.hitch(this, function(result) {
            if (result.address) {
               var label = result.address.Address;
               this.geocoder.set("value", label);
               var sym = new PictureMarkerSymbol("images/start.png", 24, 24);
               var gra = new Graphic(pt, sym, {
                  label : label
               });
               this._updateOrigin(gra, gra);
            }
         }), lang.hitch(this, function(err) {
            this._clearDirections();
            console.log(err);
            var content = "Unable to use this location";
            if (this.config && this.config.i18n) {
               content = this.config.i18n.location.error;
            }
            this.geocoder.set("value", "");
            this.map.infoWindow.setContent(content);
            this.map.infoWindow.show(pt);
         }));
      }
   });
});
