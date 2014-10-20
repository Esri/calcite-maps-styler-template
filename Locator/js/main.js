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
    "dojo/dom-geometry",
    "dojo/dom-style",
    "dojo/on",
    "dojo/query",
    "dojo/window",
    "dijit/layout/ContentPane",
    "dijit/registry",
    "application/TrackingPt",
    "esri/arcgis/utils",
    "esri/dijit/Directions",
    "esri/dijit/HomeButton",
    "esri/dijit/Geocoder",
    "esri/dijit/LocateButton",
    "esri/dijit/Popup",
    "esri/geometry/mathUtils",
    "esri/geometry/Point",
    "esri/graphic",
    "esri/InfoTemplate",
    "esri/layers/GraphicsLayer",
    "esri/symbols/Font",
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
    domGeometry,
    domStyle,
    on,
    query,
    win,
    ContentPane,
    registry,
    TrackingPt,
    arcgisUtils,
    Directions,
    HomeButton,
    Geocoder,
    LocateButton,
    Popup,
    mathUtils,
    Point,
    Graphic,
    InfoTemplate,
    GraphicsLayer,
    Font,
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
      opLayer : null,
      opFeatureLayer : false,
      opFeatures : [],
      hiLayer : null,
      destLayer : null,
      origin : null,
      dirWidget : null,
      selectedNum: null,
      trackingPt :  null,


      // Startup
      startup : function(config) {
         // config will contain application and user defined info for the template such as i18n strings, the web map id
         // and application id
         // any url parameters and any application specific configuration information.
         if (config) {
            this.config = config;
            this.setColor();
            this.setProtocolHandler();
            // proxy rules
            urlUtils.addProxyRule({
               urlPrefix: "route.arcgis.com",
               proxyUrl: this.config.proxyurl
            });
            urlUtils.addProxyRule({
               urlPrefix: "traffic.arcgis.com",
               proxyUrl: this.config.proxyurl
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
      setColor : function() {
         this.color = this.config.color;
         var style = document.createElement('style');
         style.type = 'text/css';
         style.innerHTML = '.bg {background-color: ' + this.color + '};';
         document.getElementsByTagName('head')[0].appendChild(style);
         console.log("basemap",this.config.styleBasemap);
         if (this.config.styleBasemap == 1) {
            var style2 = document.createElement('style');
            style2.type = 'text/css';
            style2.innerHTML = '.layerTile {filter: url(css/filters.svg#grayscale); filter: gray; -webkit-filter: grayscale(1); -moz-opacity: 0.7; -khtml-opacity: 0.7; opacity: 0.7; filter: alpha(opacity=70);';
            document.getElementsByTagName('head')[0].appendChild(style2);
         }
      },
      
      // set protocol handler
      setProtocolHandler : function() {
         esri.id.setProtocolErrorHandler(function() {
            console.log("protocol");
            if (window.confirm("Your browser is not CORS enabled. You need to redirect to HTTPS. Continue?")) {
               window.location = window.location.href.replace("http:", "https:");
            }
         });
      },

      // Create web map based on the input web map id
      _createWebMap : function(itemInfo) {
         
         // popup
         var popupSym = new SimpleMarkerSymbol("circle", 2, null, new dojo.Color([0, 0, 0, 0.1]));
         var popup = new Popup({
            markerSymbol : popupSym,
            anchor : "top"
         }, dom.byId("panelPopup"));
         
         arcgisUtils.createMap(itemInfo, "panelMap", {
            mapOptions : {
               editable: false,
               infoWindow: popup
            },
            bingMapsKey : this.config.bingKey
         }).then(lang.hitch(this, function(response) {

            this.map = response.map;
            this.initExt = this.map.extent;
            this.opLayers = response.itemInfo.itemData.operationalLayers;
            
            // hi layer
            this.hiLayer = new GraphicsLayer();
            this.map.addLayer(this.hiLayer);
            
            // destinations layer
            this.destLayer = new GraphicsLayer();
            this.map.addLayer(this.destLayer);
            this.destLayer.on("click", lang.hitch(this, this._selectFeature))
            
            // locator
            this.locator = new Locator(this.config.helperServices.geocode[0].url);
            this.locator.outSpatialReference = this.map.spatialReference;
            
            this._configureMapUI();
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

      // Map Loaded - Map is ready
      _mapLoaded : function() {
         query(".bg").style("backgroundColor", this.color.toString());
         query(".esriSimpleSlider").style("backgroundColor", this.color.toString());
         domClass.remove(document.body, "app-loading");
         this._processDestinations();
      },
      
      // Process Destinations
      _processDestinations : function() {
         this.opFeatures = [];
         if (this.config.longitude && this.config.latitude) {
            var pt = new Point(parseFloat(this.config.longitude), parseFloat(this.config.latitude));
            var gra = new Graphic(pt, null, {Name: this.config.destination, Latitude: this.config.latitude, Longitude: this.config.longitude});
            this.opFeatures.push(gra);
            this._setupTemplate();
            this._processDestinationFeatures();
         } else if (this.config.address) {
            var options = {
               address: {"SingleLine": this.config.address}, 
               outFields: ["Loc_name"]
            };
            this.locator.addressToLocations(options);
            this.locator.addressToLocations(options, 
               lang.hitch(this, function(evt){
                  console.log(evt);
                  if (evt.length > 0) {
                     var candidate = evt[0];
                     var address = candidate.address;
                     var pt = candidate.location;
                     var gra = new Graphic(pt, null, {Name: this.config.destination, Address: address});
                     this.opFeatures.push(gra);
                     this._setupTemplate();
                     this._processDestinationFeatures();
                  }
               }), 
               function(err){
                  console.log(err.message);
               });
         } else {
            this._processOperationalLayers();
         }
      },
      
      // locator complete
      showResults : function(evt) {
         console.log(evt);
      },
      
      // Process Operational Layers
      _processOperationalLayers : function() {
         var name = null;
         if (this.config.destLayer)
            name = this.config.destLayer.id;
         if (name) {
            array.forEach(this.opLayers, lang.hitch(this, function(layer) {
               if (layer.featureCollection) {
                  for (var i = 0; i < layer.featureCollection.layers.length; i++) {
                     if (layer.featureCollection.layers[i].id == name) {
                        this.opLayer = layer.featureCollection.layers[i].layerObject;
                        this.opFeatures = me.opLayer.graphics.slice(0);
                     }
                  }
               } else if (layer.layerObject && layer.layerObject.type == "Feature Layer" && layer.id == name) {
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
            var layer = this.opLayers[0];
            if (layer.featureCollection) {
               for (var l = 0; l < layer.featureCollection.layers.length; l++) {
                  this.opFeatures  = layer.featureCollection.layers[l].layerObject.graphics.slice(0);
                  return layer.featureCollection.layers[l].layerObject;
               }
            } else if (layer.layerObject && layer.layerObject.type == "Feature Layer") {
               this.opFeatureLayer = true;
               return layer.layerObject;
            }
         }
         return null;
      },
      
      // setup template
      _setupTemplate : function() {
         if (!this.opLayer) {
            var title = this.config.destination || this.config.title;
            var content = "<hr/>Name: ${Name}<br/><br/>Address: ${Address}<br/><br/>Latitude: ${Latitude}<br/><br/>Longitude: ${Longitude}";
            var infoTemplate = new InfoTemplate(title, content);
         } else {
            var infoTemplate = this.opLayer.infoTemplate;
         }
         this.infoTemplate = infoTemplate;
         this.destLayer.setInfoTemplate(infoTemplate);
      },
      

      // ** UI FUNCTIONS ** //
      
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
         this.geocoder = new Geocoder({
            map : this.map,
            url: this.config.helperServices.geocode[0].url,
            autoNavigate : false,
            autoComplete : true
         }, "panelGeocoder");
         on(this.geocoder, "find-results", lang.hitch(this, this._geocoderResults));
         on(this.geocoder, "select", lang.hitch(this, this._geocoderSelect));
         on(this.geocoder, "clear", lang.hitch(this, this._geocoderClear));
         this.geocoder.startup();
         var prompt = this.config.prompt || "";
         domAttr.set("panelGeocoder_input", "placeholder", prompt);
         
         // directions
         var rgb = Color.fromString(this.color).toRgb();
         var startSym = new PictureMarkerSymbol("images/start.png", 24, 24);
         var endSym = new PictureMarkerSymbol("images/end.png", 24, 24);
         var routeSym = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([rgb[0], rgb[1], rgb[2], 0.8]), 6);
         var segmentSym = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SHORTDOT, new Color([0,0,0,0.4]), 6); 
         var units = "esriMiles";
         if (this.config.distanceUnits == "kilometers")
            units = "esriKilometers";
         var options = {
              map: this.map,
              showTravelModesOption: false,
              showTrafficOption: true,
              routeParams: {directionsLengthUnits: units},
              alphabet: false,
              canModifyStops: false,
              dragging: false,
              fromSymbol: startSym,
              toSymbol: endSym,
              routeSymbol: routeSym,
              segmentSymbol: segmentSym
         };
         // if (this.config.routeUtility)
            // options.routeTaskURL = this.config.routeUtility;
         if (this.config.helperServices.routeTask)
            options.routeTaskURL = this.config.helperServices.routeTask.url;
         this.dirWidget = new Directions(options, "resultsDirections");
         on(this.dirWidget, "directions-finish", lang.hitch(this, this._directionsFinished));
         this.dirWidget.startup();
         console.log(this.dirWidget.routeTask);
         
         // configure ui
         this._configureUI();

         // update theme
         this._updateTheme();
         
      },
      
      // Configure UI
      _configureUI : function() {
         // top
         if (this.config.title != "")
            dom.byId("panelTitle").innerHTML = this.config.title;
         // features
         on(dom.byId("btnScrollFeatures"), "click", lang.hitch(this, this._toggleScroll));
         // directions
         on(dom.byId("btnScrollDirections"), "click", lang.hitch(this, this._toggleScroll));
         on(dom.byId("btnCloseDirections"), "click", lang.hitch(this, this._showPage, 1));
         on(dom.byId("btnReverse"), "click", lang.hitch(this, this._reverseDirections));
      },

      // Update Theme
      _updateTheme : function() {
         query(".bg").style("backgroundColor", this.color.toString());
         query(".esriPopup .titlePane").style("backgroundColor", this.color.toString());
      },
      
      // Show Page
      _showPage : function(num) {
         switch (num) {
            case 0:
               break;
            case 1:
               this._clearDirections();
               domStyle.set("panelFeatures", "display", "block");
               domStyle.set("panelDirections", "display", "none");
               break;
            case 2:
               domStyle.set("panelFeatures", "display", "none");
               domStyle.set("panelDirections", "display", "block");
               break;   
         }
      },
      
      
      // ** GEO FUNCTIONS ** //
      
      // geoLocated
      _geoLocated : function(evt) {
         if (evt.graphic) {
            var pt = evt.graphic.geometry;
            this.origin = pt;
            this._updateOrigin();
            this.locator.locationToAddress(pt, 300, 
               lang.hitch(this, function(result){
                  if (result.address) {
                      var address = result.address.Address;
                      //dom.byId("panelGeocoder_input").value = address;
                      //this.geocoder.inputNode.value = address;
                  }
               }), 
               function(err){
                  console.log(err.message);
               });
         } else {
            if (evt.error)
               console.log(evt.error.message);
         }
      },
      
      // geocoder results
      _geocoderResults : function(obj) {
         if (obj.results.results.length > 0) {
            var result = obj.results.results[0];
            this.origin = result.feature.geometry;
         }
         this._updateOrigin();
      },
      
      // geocoder select
      _geocoderSelect : function(obj) {
         var result = obj.result;
         this.origin = result.feature.geometry;
         this._updateOrigin();
      },
      
      // geocoder clear
      _geocoderClear : function() {
         if(this.geocoder.value != "") {
            console.log("clear");
            this.origin = null;
            this._updateOrigin();
         }
      },
      

      
      // ** QUERY FUNCTIONS ** //
      
      // Query Destinations
      _queryDestinations : function() {
         var query = new Query();
         query.returnGeometry = true;
         query.where = "1=1";
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
         array.forEach(this.opFeatures, lang.hitch(this, function(gra){
            var geom = gra.geometry;
            var pt = geom;
            if (geom.type != "point") 
               pt = this._getPointForGeometry(geom);
            var dist = null;
            if (this.origin)
               dist = this._getDistance(pt);
            gra.attributes["POINT_LOCATION"] = pt;
            gra.attributes["DISTANCE"] = dist;
            gra.setInfoTemplate(this.infoTemplate);
         }));
         if (this.origin)
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
         for (var i=0; i<features.length; i++) {
            var num = i+1;
            var gra = features[i];
            var attr = gra.attributes;
            // rec
            var rec = domConstruct.create("div", {
               id: "rec_"+i
            }, results);
            domClass.add(rec, 'rec');
            // num
            var recNum = domConstruct.create("div", {
               innerHTML: num
            }, rec);
            domClass.add(recNum, 'recNum');
            domClass.add(recNum, 'bg');
            // info
            var recInfo = domConstruct.create("div", {
               id: "recInfo_"+i,
               innerHTML: gra.getTitle()
            }, rec);
            domClass.add(recInfo, 'recInfo');
            // distance
            var dist = "";
            if (gra.attributes.DISTANCE)
               dist =  "~ " + gra.attributes.DISTANCE + " " + this.config.distanceUnits.toUpperCase();
            var recDist = domConstruct.create("div", {
               innerHTML: dist
            }, rec);
            domClass.add(recDist, 'recDist');
            // click
            var recClick = domConstruct.create("div", {
            }, rec);
            domClass.add(recClick, 'recClick');
            on(recClick, "click", lang.hitch(this, this._selectRecord, i));
            // route
            if (gra.attributes.DISTANCE) {
               var recRoute = domConstruct.create("div", {
               }, rec);
               domClass.add(recRoute, 'recRoute');
               on(recRoute, "click", lang.hitch(this, this._showRoute, i));
            }
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
         var gra  = evt.graphic;
         var num = gra.id;
         num = num.replace("R_", "").replace("T_", "");
         var pos = num*60 + 60;
         if (num != this.selectedNum)
            dom.byId("bodyFeatures").scrollTop = pos;
         this._selectRecord(parseInt(num));
         event.stop(evt);
         this._switchView();
      },
      
      // Select Record
      _selectRecord : function(num) {
         this._unselectRecords();
         if (num != this.selectedNum) {
            this.selectedNum = num
            var gra = this.opFeatures[num];
            domClass.add("rec_"+num, "recOpened");
            this._zoomToDestination(gra);
            //this._animateScroll(true);
            var rec = dom.byId("rec_"+num);
            var recDetails = domConstruct.create("div", {
               id: "recDetails"
            }, rec);
            domClass.add(recDetails, "recDetails");
            var cp = new ContentPane({
               id: "recPane"
            });
            cp.placeAt('recDetails', 'last');
            cp.startup();
            var content = gra.getContent();
            registry.byId("recPane").set("content", content);
            this._switchView();
         } else {
            this.selectedNum = null;
         }
      },
      
      // Show Route
      _showRoute : function(num) {
         if (num != this.selectedNum) {
            this._selectRecord(num);
         }
         var gra = this.opFeatures[num];
         this._routeToDestination(gra);
      },
      
      // Unselect Records
      _unselectRecords : function() {
         this.hiLayer.clear();
         if (registry.byId("recPane"))
            registry.byId("recPane").destroy();
         domConstruct.destroy("recDetails");
            
         query(".recOpened").forEach(function(node, index, arr){
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
         var symF = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, symL, new Color([255,255,255,0.4]));
         var fnt = new Font();
         fnt.family = "Arial";
         fnt.size = "10px";
         for (var i=0; i<this.opFeatures.length; i++) {
             var num = i+1;
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
             graRing.id = "R_"+i;
             var graText = new Graphic(pt, symText, attr);
             graText.id = "T_"+i;
             this.destLayer.add(graRing);
             this.destLayer.add(graText);
         }
      },
      
      // Get point for geometry
      _getPointForGeometry: function(geom) {
         if (geom.type == "polygon")
            return geom.getCentroid();
         if (geom.type == "polyline") {
            var pathNum = Math.floor(geom.paths.length/2);
            var ptNum = Math.floor(geom.paths[pathNum].length/2);
            var coords = geom.getPoint(pathNum, ptNum);
            return geom.getPoint(pathNum, ptNum);
         }
         return geom.getExtent().getCenter();
      },
      
      // Get distance
      _getDistance: function(loc) {
         var dist = 0;
         dist = mathUtils.getLength(this.origin, loc) * 0.000621371;
         if (this.config.distanceUnits == "kilometers")
            dist = dist*1.60934;
         dist = Math.round(dist*10)/10;
         return dist;
      },
      
      // Compare distance
      _compareDistance: function(a,b) {
         if (a.attributes.DISTANCE < b.attributes.DISTANCE)
             return -1;
         if (a.attributes.DISTANCE > b.attributes.DISTANCE)
             return 1;
         return 0;
      },
      
      // Zoom to destination
      _zoomToDestination : function(gra) {
         //var c = gra.getContent();
         var pt = gra.attributes.POINT_LOCATION;
         // this.map.infoWindow.setContent(c);
         // this.map.infoWindow.show(pt);
         this.map.centerAndZoom(pt, this.config.defaultZoomLevel || 13);
         var rgb = Color.fromString(this.color).toRgb();
         rgb.push(0.4);
         var symML = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color.fromArray(rgb), 10);
         var symM = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 34, symML, new Color.fromArray([0,0,0,0]));
         this.hiLayer.clear();
         this.hiLayer.add(new Graphic(pt, symM, null));
      },
      
      // Route to destination
      _routeToDestination : function(gra) {
         this._clearDirections();
         var pt = gra.geometry;
         dom.byId("panelInfo").innerHTML = gra.getTitle();
         this._showPage(2);
         var def = this.dirWidget.addStops([this.origin, pt]);
         def.then(lang.hitch(this, function(value){
              this.dirWidget.getDirections();
          }));
      },
      
      // Reverse Directions
      _reverseDirections : function() {
         var stops = this.dirWidget.stops;
         stops.reverse();
         this._clearDirections();
         var def = this.dirWidget.addStops(stops);
         def.then(lang.hitch(this, function(value){
              this.dirWidget.getDirections();
          }));
      },
      
      // Clear Directions
      _clearDirections : function() {
         //this.dirWidget.removeStops();
         this.dirWidget.reset();
      },
      
      // Directions Finished
      _directionsFinished : function() {
         var gra = this.dirWidget.mergedRouteGraphic;
         var ext = gra.geometry.getExtent();
         var ext2 = ext;
         if (this.map.width > 570)
            ext2 = ext.offset(ext.getWidth()/3, 0);
         this.map.setExtent(ext2.expand(2.5));
         console.log(this.dirWidget.stops);
         
         var rgb = Color.fromString(this.color).toRgb();
         rgb.push(0);
         var symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL, new Color.fromArray(rgb), 0);
         var sym = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 20, symL, Color.fromArray(rgb));
         var pt = gra.geometry.getPoint(0,0);
         if (this.trackingPt)
            this.map.graphics.remove(this.trackingPt);
         this.trackingPt = new TrackingPt(pt, sym, {color:this.color, route:gra.geometry});
         this.map.graphics.add(this.trackingPt);
         setTimeout(lang.hitch(this, function(){this.trackingPt.updateSymbol();}), 2000);
      },
      
      // Update Origin
      _updateOrigin : function() {
         this.map.graphics.clear();
         this._clearDirections();
         if (this.origin) {
            //var sym = new PictureMarkerSymbol('images/pin.png', 30, 30);
            //sym.setOffset(0,15);
            //var gra = new Graphic(this.origin, sym, {});
            //this.map.graphics.add(gra);
            this._processDestinationFeatures();
            if (this.opFeatures.length > 0) {
               this._showRoute(0);
               //this._routeToDestination(this.opFeatures[0]);
            }
               
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
              duration: 300,
              curve: [start, end]
          });
          on(anim, "Animate", function(v){
              document.body.scrollTop = v;
              document.documentElement.scrollTop = v;
          });
          anim.play();
      }
      
      
   });
});
