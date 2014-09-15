/*global define,document,location,require */
/*jslint sloppy:true,nomen:true,plusplus:true */
define([
    "dojo/Evented",
    "dojo/_base/array",
    "dojo/_base/Color",
    "dojo/_base/declare",
    "dojo/_base/event",
    "dojo/_base/fx",
    "dojo/_base/html",
    "dojo/_base/lang",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-geometry",
    "dojo/dom-style", 
    "dojo/fx",
    "dojo/on",
    "dojo/query",
    "dojo/window",
    "dojo/Deferred",
    "dijit/form/HorizontalSlider",
    "dijit/registry",
    "esri/dijit/Directions",
    "esri/graphic",
    "esri/layers/WebTiledLayer",
    "esri/layers/WMSLayer",
    "esri/symbols/Font",
    "esri/symbols/PictureMarkerSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/TextSymbol",
    "esri/tasks/BufferParameters",
    "esri/tasks/GeometryService",
    "application/DemographicsInfo",
    "application/LifestyleInfo",
    "application/WeatherInfo",
    "application/ProximityInfo"
], function (
    Evented,
    array,
    Color,
    declare,
    dojoEvent,
    fx,
    html,
    lang,
    dom,
    domClass,
    domConstruct,
    domGeometry,
    domStyle,
    coreFx,
    on,
    query,
    win,
    Deferred,
    HorizontalSlider,
    registry,
    Directions,
    Graphic,
    WebTiledLayer,
    WMSLayer,
    Font,
    PictureMarkerSymbol,
    SimpleFillSymbol,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    TextSymbol,
    BufferParameters,
    GeometryService,
    DemographicsInfo,
    LifestyleInfo,
    WeatherInfo,
    ProximityInfo
) { return declare([Evented], {
   
      map : null,
      lyrWeather : null,
      scrollTimer : null,
      snap : true,
      config : {},
      pages : [],
      pPages : null,
      curPage : 0,
      location : null,
      demographicsInfo : null,
      lifestyleInfo : null,
      weatherInfo : null,
      proximityInfo : null,
      dirWidget : null,
      dirMode: false,

      constructor : function(config) {
         this.config = config;
      },

      // startup
      startup : function() {
         var deferred = this._init();
         deferred.then(lang.hitch(this, function(config) {
            // optional ready event to listen to
            this.emit("ready", config);
         }), lang.hitch(this, function(error) {
            // optional error event to listen to
            this.emit("error", error);
         }));
         return deferred;
      },

      // init
      _init : function() {
         //Don't need deferred now setting it up just in case
         var deferred, paramItems;

         deferred = new Deferred();
         
         on (window, "scroll", lang.hitch(this, this._windowScrolled));
         on (window, "resize", lang.hitch(this, this._windowScrolled));
         
         // info window
         this.map.infoWindow.resize(220, 220);
         
         // graphics layer click
         var gl = this.map.graphics;
         on(gl, 'click', lang.hitch(this, this._graphicClickHandler));
         
         pPages = dom.byId("panelPages");
         domConstruct.empty(pPages);
         
         // build page list
         this._buildPageList();
         
         // create pages
         for (var i=0; i<this.pages.length; i++) {
            this.createPage(this.pages[i]);
         }
         
         // create directions page
         if (this.config.showDirections)
            this.createDirectionsPage();
         
         deferred.resolve();

         return deferred.promise;
      },
      
      // get page color
      _getPageColor : function(num) {
         if (this.config.cycleColors) {
            var cNum = num - (Math.floor(num/this.config.colors.length) * this.config.colors.length);
            return this.config.colors[cNum];
         } else {
            return this.config.color;
         }
      },
      
      // build page list
      _buildPageList : function() {
         
         var pages = [];
         var num = 0;
         pages.push({id: num, type: "blank", color: this._getPageColor(num), buffer:null, proximityFeatures: null, update:true});
         
         // layers in web map
         this.proximityInfo = new ProximityInfo(this.config);
         this.proximityInfo.map = this.map;
         this.proximityInfo.on('updated', lang.hitch(this, this._updateProximityFeatures));
         this.proximityInfo.on('route', lang.hitch(this, this._routeToLocation));
         this.config.opLayers.reverse();
         var me = this;
         array.forEach(this.config.opLayers, function(layer) {
            var lyrId;
            var lyrName;
            var lyr;
            if (layer.featureCollection) {
               for (var i=0; i<layer.featureCollection.layers.length; i++) {
                  lyrId = layer.featureCollection.layers[i].id;
                  lyrName = layer.title + " " + (i+1);
                  lyr = layer.featureCollection.layers[i].layerObject;
                  lyr.setVisibility(false);
                  num +=1;
                  pages .push({id:num, label: lyrName, type:"proximity", color: me._getPageColor(num), layer: lyr, buffer:null, proximityFeatures: null, update:true, layerType: "Feature Collection"});
               }
            } else if (layer.layerObject && layer.layerObject.type == "Feature Layer") {
               lyrId = layer.id;
               lyrName = layer.title;
               lyr = layer.layerObject;
               lyr.setVisibility(false);
               num +=1;
               pages .push({id:num, label: lyrName, type:"proximity", color: me._getPageColor(num), layer: lyr, buffer:null, proximityFeatures: null, update:true, layerType: "Feature Layer"});
            }
         });
         
         // demographics
         if (this.config.showDemographics) {
            num +=1;
            pages.push({id:num, label: this.config.demographicsLabel, type:"demographics", color: this._getPageColor(num), buffer:null, proximityFeatures: null, update:true});
            this.demographicsInfo = new DemographicsInfo(this.config);
         }
         
         // lifestyle
         if (this.config.showLifestyle) {
            num +=1;
            pages.push({id:num, label: this.config.lifestyleLabel, type:"lifestyle", color: this._getPageColor(num), buffer:null, proximityFeatures: null, update:true});
            this.lifestyleInfo = new LifestyleInfo(this.config);
         }
         
         //weather
         if (this.config.showWeather) {
            num +=1;
            pages.push({id:num, label: this.config.weatherLabel, type:"weather", color: this._getPageColor(num), buffer:null, proximityFeatures: null, update:true});
            try {
               if (this.config.weatherLayerURL_Tiled) {
                  this.lyrWeather = new WebTiledLayer(this.config.weatherLayerURL_Tiled);
                  this.lyrWeather.setOpacity(0.6);
                  this.lyrWeather.setVisibility(false);
                  this.map.addLayer(this.lyrWeather);
               } else {
                  if (this.config.weatherLayerURL_WMS) {
                     this.lyrWeather = new WMSLayer(this.config.weatherLayerURL_WMS, {opacity: 0.5, format: "png", visibleLayers: [0]});
                     this.lyrWeather.setVisibility(false);
                     this.map.addLayer(this.lyrWeather);
                  }
               }
            } catch(err) {
               console.log("Unable to create weather layer: " + err);
            }
            this.weatherInfo = new WeatherInfo(this.config);
         }
         
         this.pages = pages;   
      },
      
      // create page
      createPage : function(options) {

         var id = options.id;
         var type = options.type;
         var label = options.label;
         if (type != "blank")
            label = label.toUpperCase();
         
         if (type == "blank") {
            
            var page = domConstruct.create('div', {
               id : 'page_' + id
            }, pPages);
            domClass.add(page, 'pageblank');
            
            // page menu
            var pageMenu = domConstruct.create('div', {
               id : 'pageMenu',
               innerHTML : '<img src="images/menu.png" />'
            }, page);
            domClass.add(pageMenu, 'pageMenu bg rounded shadow');
            on(pageMenu, 'click', lang.hitch(this, this._showPage, 1));
            
         } else {
            
            // page
            var page = domConstruct.create('div', {
               id : 'page_' + id
            }, pPages);
            domClass.add(page, 'page');
         
            // page content
            var pageContent = domConstruct.create('div', {
               id : 'pageContent_' + id
            }, page);
            domClass.add(pageContent, 'pageContent rounded shadow');
   
            // page header
            var pageHeader = domConstruct.create('div', {
               style : 'background-color:'+ options.color
            }, pageContent);
            domClass.add(pageHeader, 'pageHeader roundedTop');
            
            // page title
            var pageTitle = domConstruct.create('div', {
               innerHTML : label
            }, pageHeader);
            domClass.add(pageTitle, 'pageTitle');
   
            // page counter
            var content = "0";
            if (type != "proximity") {
               content = "<img class='pageIcon' src='images/" + type + ".png'/>";
            }
            var pageCounter = domConstruct.create('div', {
               id: 'pageCounter_'+id,
               innerHTML : content
            }, pageHeader);
            domClass.add(pageCounter, 'pageCounter');
            
            // page slider
            if (type == "demographics" || type == "proximity") {
                
                var pageUnits = domConstruct.create('div', {
                  innerHTML: this.config.distanceUnits.toUpperCase()
               }, pageHeader);
               domClass.add(pageUnits, 'pageUnits');
               
               var pageSlider = domConstruct.create('div', {
                  innerHTML: "<div id='slider_" + id + "'></div>"
               }, pageHeader);
               domClass.add(pageSlider, 'pageSlider');
            
               // slider
               // default to 3 if not specified or out of range
               var dist = 3;
               if (this.config.defaultDistance && this.config.defaultDistance > 0 && this.config.defaultDistance <11)
                  dist = this.config.defaultDistance;
               var sliderH = new HorizontalSlider({
                  value: dist,
                  minimum: 1,
                  maximum: 10,
                  intermediateChanges: false,
                  discreteValues: 10,
                  showButtons: false
               }, "slider_" +id);
               sliderH.startup();
               sliderH.on("change", lang.hitch(this, this._sliderChange));
            }
            
            // page close
            var pageClose = domConstruct.create('div', {
            }, pageHeader);
            on(pageClose, 'click', lang.hitch(this, this._closePage));
            domClass.add(pageClose, 'pageClose');
            
            // page up
            var pageUp = domConstruct.create('div', {
            }, pageHeader);
            on(pageUp, 'click', lang.hitch(this, this._showPreviousPage, id));
            domClass.add(pageUp, 'pageUp');
            
            // page down
            if (id < this.pages.length-1) {
               var pageDown = domConstruct.create('div', {
               }, pageHeader);
               domClass.add(pageDown, 'pageDown');
               on(pageDown, 'click', lang.hitch(this, this._showNextPage, id));
            }
            
            // page body
            var pageBody = domConstruct.create('div', {
               id : "pageBody_" + id
            }, pageContent);
            domClass.add(pageBody, 'pageBody');
            
            if (id == this.pages.length-1) {
                  var pageClear = domConstruct.create('div', {
                  }, page);
                  domClass.add(pageClear, 'pageClear');
            }
            
         }

      },
      
       // create directions page
      createDirectionsPage : function() {
         
         var container = dom.byId("panelDirections");
         // page
         var page = domConstruct.create('div', {
         }, container);
         domClass.add(page, 'page');
      
         // page content
         var pageContent = domConstruct.create('div', {
         }, page);
         domClass.add(pageContent, 'pageContent rounded shadow');

         // page header
         var color = this._getPageColor(this.pages.length+1);
         var pageHeader = domConstruct.create('div', {
            id : 'pageHeaderDir',
            style : 'background-color:#ffffff'
         }, pageContent);
         domClass.add(pageHeader, 'pageHeader roundedTop');
         
         // page title
         var pageTitle = domConstruct.create('div', {
            innerHTML : this.config.directionsLabel.toUpperCase()
         }, pageHeader);
         domClass.add(pageTitle, 'pageTitle');

         // page counter
         var pageCounter = domConstruct.create('div', {
            innerHTML : "<img class='pageIcon' src='images/directions.png'/>"
         }, pageHeader);
         domClass.add(pageCounter, 'pageCounter');
         
         // reverse directions
         var pageReverseDir = domConstruct.create('div', {
         }, pageHeader);
         domClass.add(pageReverseDir, 'pageReverseDir');
         on(pageReverseDir, 'click', lang.hitch(this, this._reverseDirections));
         
         // page close
         var pageClose = domConstruct.create('div', {
         }, pageHeader);
         domClass.add(pageClose, 'pageClose');
         on(pageClose, 'click', lang.hitch(this, this._toggleDirections));
        
         // page body
         var pageBody = domConstruct.create('div', {
         }, pageContent);
         domClass.add(pageBody, 'pageBody');
         
         // directions
         var pageDir = domConstruct.create("div", {
              id: "pageDir"
         }, pageBody);
         domClass.add(pageDir, 'resultsContent');
         var units = "esriMiles";
         if (this.config.distanceUnits == "kilometers")
            units = "esriKilometers";
         var options = {
              map: this.map,
              routeParams: {directionsLengthUnits: units},
              alphabet: false,
              canModifyStops: false
         };
         if (this.config.helperServices.routeTask)
            options.routeTaskURL = this.config.helperServices.routeTask.url;
         this.dirWidget = new Directions(options, "pageDir");
         this.dirWidget.startup();
         
      },
      
      // show page
      _showPage : function(num) {
         this._scrollToPage(num);
      },
      
      // show previous page
      _showPreviousPage : function(num) {
         var newnum = num-1;
         this._scrollToPage(newnum);
      },
      
      // show next page
      _showNextPage : function(num) {
         var newnum = num+1;
         this._scrollToPage(newnum);
      },
      
      // close page
      _closePage : function() {
         this._scrollToPage(0);
      },
      
      //scroll to page
      _scrollToPage : function(num) {
         var box = html.getContentBox(dom.byId("panelContent"));
         var startPos = this.curPage * box.h;
         var endPos = num * box.h;
         var diff = Math.abs(num-this.curPage);
         this.snap = false;
         if (diff == 1) {
            this._animateScroll(startPos, endPos);
         } else {
            document.body.scrollTop = endPos;
            document.documentElement.scrollTop = endPos;
            if (this.map)
               this.map.reposition();
            this.snap = true;
         }
         // change color
         this._changeColor(this.curPage, num);
         this.curPage = num;
         this._updatePage();
      },
      
       // window scrolled
      _windowScrolled : function(evt) {
         if (this.scrollTimer)
            clearTimeout(this.scrollTimer);
         if ((this.snap == true) && (this.dirMode == false)) {
            this.scrollTimer = setTimeout(lang.hitch(this, this._snapScroll), 300);
         }
      },
      
      // reset snap
      _resetSnap : function() {
         this.snap = true;
      },
      
      // snap scroll
      _snapScroll : function() {
         var startPos = domGeometry.docScroll().y;
         var box = html.getContentBox(dom.byId("panelContent"));
         var numActual  = startPos/box.h;
         var num = Math.round(numActual);
         if (numActual > this.curPage) {
            if (numActual-this.curPage > 0.2)
               num = Math.ceil(startPos/box.h);
            if (num > this.pages.length-1)
               num = this.pages.length-1;
         } else if (numActual < this.curPage) {
            if (this.curPage-numActual > 0.2)
               num = Math.floor(startPos/box.h);
            if (num < 0)
               num = 0;
         }
         var endPos = num*box.h;
         this._changeColor(this.curPage, num);
         this.curPage = num;
         this._updatePage();
         this.snap = false;
         if (num != numActual)
            this._animateScroll(startPos, endPos);
      },
      
      // animateScroll
      _animateScroll : function(start, end) {
         var me = this;
         var anim = new fx.Animation({
              duration: 500,
              curve: [start, end]
          });
          on(anim, "Animate", function(v){
              document.body.scrollTop = v;
              document.documentElement.scrollTop = v;
          });
          on(anim, "End", function() {
             setTimeout(lang.hitch(me, me._resetSnap), 500);
             if (me.map)
               me.map.reposition();
          });
          anim.play();
      },

      // set location
      setLocation : function(pt) {
         this.location = pt;
         for (var i=0; i<this.pages.length; i++) {
            var pageObj = this.pages[i];
            pageObj.buffer = null;
            pageObj.update = true;
            pageObj.proximityFeatures = null;
            if (i>0) {
               dom.byId("pageBody_"+i).innerHTML = "";
            }
         }
         if (pt) {
            if (this.curPage == 0) {
               this._showPage(1);
               // change color
               this._changeColor(this.curPage, 1);
            } else {
               this._updatePage();
            }
         } else {
            this._showPage(0);
            // change color
            this._changeColor(this.curPage, 0);
         }
      },
      
      // slider change
      _sliderChange : function() {
         var pageObj = this.pages[this.curPage];
         pageObj.buffer = null;
         pageObj.proximityFeatures = null;
         pageObj.update = true;
         this._updatePage();
      },
      
      // update page
      _updatePage : function() {
         this.map.infoWindow.hide();
         var pageObj = this.pages[this.curPage];
         if (pageObj.update && this.location) {
            pageObj.proximityFeatures = [];
            if (pageObj.type == "demographics" ||pageObj.type == "proximity") {
               this._bufferLocation(pageObj);
            } else{
               this._performAnalysis(pageObj);
            }
            
         } else {
            this._renderResults(pageObj);
         }
      },
      
      // change color
      _changeColor : function(startNum, endNum) {
         if (this.config.cycleColors == true) {
            var startColor = this.config.colors[startNum];
            var endColor = this.config.colors[endNum];
            var anim1 = fx.animateProperty({
               node: dom.byId('panelTop'),
               duration: 600,
               properties: {
                  backgroundColor: {
                     start: startColor,
                     end: endColor
                  }
               }
            });
            var anim2 = fx.animateProperty({
                node: dom.byId('mapDiv_zoom_slider'),
                duration: 600,
                properties: {
                    backgroundColor: {
                        start: startColor,
                        end: endColor
                    }
                }
            });
            coreFx.combine([anim1, anim2]).play();
            query(".esriPopup .titlePane").style("backgroundColor", endColor.toString());
         }
      },
      
      // buffer location
      _bufferLocation: function(pageObj) {
         pageObj.buffer = null;
         pageObj.proximityFeatures = [];
         var type = pageObj.type;
         var dist = 1;
         if (type == "demographics" || type == "proximity") {
            var hs  = registry.byId("slider_"+ this.curPage);
            dist = hs.value;
         }
         //dist = dist*1.1;
         var params = new BufferParameters();
         params.geometries  = [ this.location ];
         params.distances = [ dist ];
         var units = GeometryService.UNIT_STATUTE_MILE;
         if (this.config.distanceUnits == "kilometers")
            units = GeometryService.UNIT_KILOMETER;
         params.unit = units;
         params.bufferSpatialReference = this.map.spatialReference;
         params.outSpatialReference = this.map.spatialReference;
         var gsvc = new GeometryService(this.config.helperServices.geometry.url);
         gsvc.buffer(params, lang.hitch(this, this._processBuffer));
      },
        
      // process buffer
      _processBuffer: function(results) {
         var pageObj = this.pages[this.curPage];
         array.forEach(results, function(geometry) {
            pageObj.buffer = geometry;
         });
         this._performAnalysis(pageObj);
         
         var geom = results[0];
         var ext = geom.getExtent();
         this.map.setExtent(ext.expand(1.5));
      },
      
      // peform analysis
      _performAnalysis : function(pageObj) {
         pageObj.update = false;
         var container = dom.byId("pageBody_"+ this.curPage);
         var type = pageObj.type;
         switch (type) {
            case "demographics":
               this.demographicsInfo.updateForLocation(this.location, container, pageObj);
               break;
            case "lifestyle":
               this.lifestyleInfo.updateForLocation(this.location, container);
               break;
            case "weather":
               this.weatherInfo.updateForLocation(this.location, container);
               break;
            case "proximity":
               pageObj.proximityFeatures = null;
               this.proximityInfo.updateForLocation(this.location, container, pageObj);
               break;
         }
         if (type != "proximity") {
            this._renderResults(pageObj);
         }
            
      },
      
      // update proximity features
      _updateProximityFeatures : function(event) {
         var pageObj  = this.pages[this.curPage];
         pageObj.proximityFeatures = event.data;
         this._renderResults(pageObj);
      },
      
      // graphic click handler
      _graphicClickHandler : function(event) {
         var gra = event.graphic;
         if ((gra.id != "buffer") && (gra.id != "location")) {
            this.map.infoWindow.setContent(gra.getContent());
            this.map.infoWindow.show(event.mapPoint);
            dojoEvent.stop(event);
         }
      },
      
      // render results
      _renderResults : function(pageObj) {
            
            this.map.graphics.clear();
            
            // weather
            if (this.lyrWeather)
               this.lyrWeather.setVisibility(pageObj.type == "weather");
            
            // buffer
            if (pageObj.buffer) {
               var symLine = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255,255,255,0.15]), 1);
               var symBuffer = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, symLine, new Color([0, 0, 0, 0.15]));
               var graBuffer = new Graphic(pageObj.buffer, symBuffer, {});
               graBuffer.id = "buffer";
               this.map.graphics.add(graBuffer);
            }
            
            // proximity features
            if (pageObj.proximityFeatures) {
               var color = new Color.fromString(pageObj.color);
               var rgb = color.toRgb();
               var symML = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255, 1]), 2);
               var symM = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 22, symML, color);
               var symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([rgb[0], rgb[1], rgb[2], 0.8]), 4);
               var symF = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, symL, new Color([255,255,255,0.4]));
               var fnt = new Font();
               fnt.family = "Arial";
               fnt.size = "10px";
               for (var i=0; i<pageObj.proximityFeatures.length; i++) {
                   var num = i+1;
                   var gra = pageObj.proximityFeatures[i];
                   var infoTemp = gra.infoTemplate;
                   var geom = gra.geometry;
                   var attr = gra.attributes;
                   var pt = gra.attributes.POINT_LOCATION;
                   
                   if (geom.type == "polyline")
                     this.map.graphics.add(new Graphic(geom, symL, attr, infoTemp));
                     
                   if (geom.type == "polygon")
                     this.map.graphics.add(new Graphic(geom, symF, attr, infoTemp));
                   
                   var symText = new TextSymbol(num, fnt, "#ffffff");
                   symText.setOffset(0, -4);
                  
                   this.map.graphics.add(new Graphic(pt, symM, attr, infoTemp));
                   this.map.graphics.add(new Graphic(pt, symText, attr, infoTemp));
               }
            }
            
            // location
            if (this.location) {
               var symLoc = new PictureMarkerSymbol('images/pin.png', 30, 30);
               symLoc.setOffset(0,15);
               var graLoc = new Graphic(this.location, symLoc, {});
               graLoc.id = "location";
               this.map.graphics.add(graLoc);
            }
            
        },
        
        // ROUTE TO LOCATION
        _routeToLocation: function(event) {
            var pt = event.data;
            this.dirWidget.reset();
            this.dirWidget.removeStops();
            this._toggleDirections();
            var def = this.dirWidget.addStops([this.location, pt]);
            def.then(lang.hitch(this, function(value){
                 this.dirWidget.getDirections();
             }));
        },
        
        // REVERSE DIRECTIONS
        _reverseDirections: function() {
            var stops = this.dirWidget.stops;
            stops.reverse();
            this.dirWidget.reset();
            this.dirWidget.removeStops();
            var def = this.dirWidget.addStops(stops);
            def.then(lang.hitch(this, function(value){
                 this.dirWidget.getDirections();
             }));
        },
        
        // TOGGLE DIRECTIONS
        _toggleDirections : function() {
            if (this.dirMode) {
              this.snap = true;
              domStyle.set("panelDirections", "display", "none");
              domStyle.set("panelContent", "display", "block");
              this._showPage(this.curPage);
           } else {
              var color = this._getPageColor(this.curPage);
              domStyle.set("pageHeaderDir", "background-color", color);
              domStyle.set("panelDirections", "display", "block");
              domStyle.set("panelContent", "display", "none");
           }
           this.dirMode = !this.dirMode;
           this.map.reposition();
        }
        
      
      
   });
}); 