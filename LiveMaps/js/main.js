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
  "dojo/_base/declare",
  "dojo/_base/array",
  "dojo/_base/Color",
  "dojo/_base/lang",
  "dojo/_base/window",

  "dojo/Deferred",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-style",

  "dojo/on",
  "dojo/query",

  "esri/arcgis/utils",
  "esri/geometry/geometryEngine",
  "esri/geometry/Point",
  "esri/geometry/webMercatorUtils",

  "esri/graphic",
  "esri/layers/GraphicsLayer",

  "esri/request",

  "esri/renderers/SimpleRenderer",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/SimpleLineSymbol",

  "esri/request",

  "esri/SpatialReference",

  "esri/tasks/GeometryService",
  "esri/tasks/ProjectParameters",

  "application/MapUrlParams",
  "application/SmartCards/SmartCards",
  "application/SmartTip/SmartTip",

  "dojo/domReady!"
], function (
  declare, array, Color, lang, win,
  Deferred,
  dom, domAttr, domClass, domStyle,
  on, query,
  arcgisUtils, geometryEngine, Point, webMercatorUtils,
  Graphic, GraphicsLayer,
  esriRequest,
  SimpleRenderer, SimpleMarkerSymbol, SimpleLineSymbol,
  esriRequest,
  SpatialReference,
  GeometryService, ProjectParameters,
  MapUrlParams, SmartCards, SmartTip
) {
  return declare(null, {
    config: {},
    startup: function (config) {
      var promise;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;

        // init colors
        this._initColors();

        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;

        // Check for center, extent, level and marker url parameters.
        var mapParams = new MapUrlParams({
          center: this.config.center || null,
          extent: this.config.extent || null,
          level: this.config.level || null,
          marker: this.config.marker || null,
          mapSpatialReference: itemInfo.itemData.spatialReference,
          defaultMarkerSymbol: this.config.markerSymbol,
          defaultMarkerSymbolWidth: this.config.markerSymbolWidth,
          defaultMarkerSymbolHeight: this.config.markerSymbolHeight,
          geometryService: this.config.helperServices.geometry.url
        });

        mapParams.processUrlParams().then(lang.hitch(this, function(urlParams){
          promise = this._createWebMap(itemInfo, urlParams);
        }), lang.hitch(this, function(error){
          this.reportError(error);
        }));

      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
        var def = new Deferred();
        def.reject(error);
        promise = def.promise;
      }
      return promise;
    },
    reportError: function (error) {
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
      return error;
    },

    // create a map based on the input web map id
    _createWebMap: function (itemInfo, params) {
      // Optionally define additional map config here for example you can
      // turn the slider off, display info windows, disable wraparound 180,
      // slider position and more.
      return arcgisUtils.createMap(itemInfo, "panelMap", {
        mapOptions: params.mapOptions || {},
        usePopupManager: true,
        layerMixins: this.config.layerMixins || [],
        editable: this.config.editable,
        bingMapsKey: this.config.bingKey
      }).then(lang.hitch(this, function (response) {
        this.map = response.map;
        console.log("My Map:", this.map);
        console.log("My Config:", this.config);
        this._initApp();
        return response;
      }), this.reportError);
    },

    // init colors
    _initColors: function() {
      var color = this.config.color;
      var colorText = this._getContrastYIQ(color);
      this.config.colorText = colorText;
      domStyle.set(win.body(), "color", color);
      domStyle.set("panelTop", "backgroundColor", color);
      domStyle.set("panelTop", "color", colorText);
      if(colorText === "#000000") {
        domClass.add("panelButtons", "black");
      }
      if(this.config.reverse) {
        query(".esri-ui").forEach(function(node){
          domClass.add(node, "reverse");
        });
      }
    },

    // get contrast yiq
    _getContrastYIQ: function(color) {
      var rgb = Color.fromString(color).toRgb();
      var yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
      return (yiq >= 191) ? "#000000" : "#ffffff";
    },

    // init app
    _initApp: function() {
      if (this.config.extent) {
        this.map.setExtent(this.config.extent);
      }
      this._initUI();
      domClass.remove(document.body, "app-loading");
    },

    // init ui
    _initUI: function() {
      this._setTitles();
      this._setAttribution();
      this._initLayers();
      this._initSmartCards();
      this._initSmartTip();
      if (this.config && this.config.i18n) {
        domAttr.set("btnToggle", "title", this.config.i18n.tooltips.toggle || "Show/Hide Data");
      }
      on(dom.byId("btnToggle"), "click", lang.hitch(this, this._toggleBottom));
      on(this.map, "click", lang.hitch(this, this._mapClicked));
      this._initFeed();
    },

    // set titles
    _setTitles: function() {
      document.title = this.config.title;
      dom.byId("panelTitle").innerHTML = this.config.title;
      dom.byId("panelSubtitle").innerHTML = this.config.subtitle;
    },

    // set attribution
    _setAttribution: function() {
      var attr = "";
      if (this.config.feed === "flu" || this.config.feed === "gastro") {
        attr = "<a href='http://sickweather.com' target=_blank><img src='images/sickweather_logo.png' /></a>";
      }
      dom.byId("panelAttribution").innerHTML = attr;
    },

    // init layers
    _initLayers: function() {
      var symLine = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255]), 2);
      var sym = new SimpleMarkerSymbol().setSize(14).setColor(new Color(this.config.color)).setOutline(symLine);
      var ren = new SimpleRenderer(sym);

      this.lyrGraphics  = new GraphicsLayer();
      this.lyrGraphics.setRenderer(ren);
      on(this.lyrGraphics, "click", lang.hitch(this, this._graphicClicked));
      this.map.addLayer(this.lyrGraphics);
    },

    // init smart cards
    _initSmartCards: function() {
      var options = {
        layer: this.lyrGraphics,
        color: this.config.color
      };
      this.smartCards = new SmartCards(options, dom.byId("panelContent"));
      on(this.smartCards, 'card-clicked', lang.hitch(this, this._cardClicked));
    },

    // init smart tip
    _initSmartTip: function() {
      var options = {
        map: this.map,
        color: this.config.color,
        point: null,
        info: null
        // info: {
        //   title: "This is a title",
        //   desc: "Human experience designer. Co-founded Adaptive Path. Wrote The Elements of User Experience. Blogged before blogging. Something Ajax something something.",
        //   author: "Sajit Thomas",
        //   date: new Date(),
        //   avatar: "https://pbs.twimg.com/profile_images/2542678025/dg4p8aq3f4yizqli45j8_reasonably_small.jpeg"
        //   //img: "https://pbs.twimg.com/media/ChtogPkW0AAVntJ.jpg"
        // }
      };
      this.smartTip = new SmartTip(options, dom.byId("panelSmartTip"));
      this.smartTip.startup();
    },

    // init feed
    _initFeed: function() {
      var def = this._processExtent();
      def.then(lang.hitch(this, function(obj){
        this.lat = obj.y;
        this.lon = obj.x;
        this.radius = obj.r;
        this.bbox = obj.bbox;
        this._startFeed();
      }));
    },

    // map clicked
    _mapClicked: function(evt) {
      
    },

    // toggle bottom
    _toggleBottom: function() {
      domClass.toggle("panelBottom", "opened");
      domClass.toggle("panelTop", "closed");
      query(".esriControlsBR").forEach(function(node){
        domClass.toggle(node, "high");
      });
      domClass.toggle( dom.byId("panelAttribution"), "high");
    },

    // ** FEED ** //

    // process extent
    _processExtent: function() {
      var obj = null;
      var def = new Deferred();
      var ext = this.map.extent;
      var sr = ext.spatialReference;
      var pt = ext.getCenter();
      var pt1 = new Point(ext.xmin, ext.ymin, sr);
      var pt2 = new Point(ext.xmax, ext.ymax, sr);
      var radius = Math.ceil(geometryEngine.distance(pt1, pt2, "miles"));
      var ptLL, pt1LL, pt2LL;
      if (sr.wkid === 4326) {
        ptLL = pt;
        pt1LL = pt1;
        pt2LL = pt2;
        obj = {
          x: ptLL.x,
          y: ptLL.y,
          r: radius / 2,
          bbox: pt1LL.x + "," + pt1LL.y + "," + pt2LL.x + "," + pt2.LL.y
        };
        def.resolve(obj);
      } else if (sr.isWebMercator()) {
        ptLL = webMercatorUtils.webMercatorToGeographic(pt);
        pt1LL = webMercatorUtils.webMercatorToGeographic(pt1);
        pt2LL = webMercatorUtils.webMercatorToGeographic(pt2);
        obj = {
          x: ptLL.x,
          y: ptLL.y,
          r: radius / 2,
          bbox: pt1LL.x + "," + pt1LL.y + "," + pt2LL.x + "," + pt2LL.y
        };
        def.resolve(obj);
      } else {
        var params = new ProjectParameters();
        params.geometries = [pt, pt1, pt2];
        params.outSR = new SpatialReference(4326);
        var gsvc = new GeometryService(this.config.helperServices.geometry);
        gsvc.project(params, function(results){
          ptLL = results[0];
          pt1LL = results[1];
          pt2LL = results[2];
          obj = {
            x: ptLL.x,
            y: ptLL.y,
            r: radius / 2,
            bbox: pt1LL.x + "," + pt1LL.y + "," + pt2LL.x + "," + pt2LL.y
          };
          def.resolve(obj);
        }, function(error) {
          console.log(error);
        });
      }
      return def;
    },

    // start feed
    _startFeed: function() {
      var num = this.config.refresh * 60 * 1000 || 1200000;
      this._getFeedData();
      setInterval(lang.hitch(this, this._getFeedData), num);
    },

    // get feed data
    _getFeedData: function() {
      //dom.byId("panelContent").innerHTML = "<br/><br/><img src='images/loading.gif'/>";
      var url = this.config.feedUrl;
      url += "?feed=" + this.config.feed;
      url += "&keyword=" + this.config.keyword;
      if (this.config.feed === "flickr") {
        url += "&bbox=" + this.bbox;
      } else {
        url += "&lat=" + this.lat + "&lon=" + this.lon + "&radius=" + this.radius;
      }
      console.log("Url", url);
      var def = esriRequest({
        url: url
        //callbackParamName: "callback"
      }, {
        useProxy: false
      });
      def.then(lang.hitch(this, this._processResults), lang.hitch(this, this._processError));
    },

    // process results
    _processResults: function(results) {
      this.lyrGraphics.clear();
      dom.byId("panelCounter").innerHTML = results.length;
      array.forEach(results, lang.hitch(this, function(rec, index){
        var pt = new Point(this.lon, this.lat);
        if (rec.lon && rec.lat) {
          var x = parseFloat(rec.lon);
          var y = parseFloat(rec.lat);
          pt = new Point(x, y);
        }
        var attr = lang.clone(rec);
        attr.index = index;
        if (rec.date) {
          attr.date = new Date(parseFloat(rec.date) * 1000);
        }
        switch (this.config.feed){
          case "flu":
          case "gastro":
            attr.avatar = "images/sickweather.png";
            break;
          case "flickr":
            attr.avatar = "images/flickr.png";
            break;
          case "twitter":
            attr.desc = this._linkify(rec.desc);
            break;
          default:
            attr.avatar = "images/pin.png";
            break;
        }
        var gra = new Graphic(pt, null, attr);
        this.lyrGraphics.add(gra);
      }));
      this.smartCards.update();
      this._startTimer();
    },

    // linkify
    _linkify: function(text){
      if (text) {
        text = text.replace(
            /((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
            function(url){
              var full_url = url;
              if (!full_url.match('^https?:\/\/')) {
                full_url = 'http://' + full_url;
              }
              return '<a href="' + full_url + '" target=_blank>' + url + '</a>';
            }
        );
      }
      return text;
    },

    // start timer
    _startTimer: function() {
      this._stopTimer();
      this.index = -1;
      this._tickTimer();
      this.timer = setInterval(lang.hitch(this, this._tickTimer), this.config.interval * 60 * 1000);
    },

    // stop timer
    _stopTimer: function() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    // tick timer
    _tickTimer: function() {
      var graphics = this.lyrGraphics.graphics;
      if (graphics.length === 0) {
        return;
      }
      this.index += 1;
      if (this.index >= graphics.length) {
        this.index = 0;
      }
      var gra = graphics[this.index];
      var pt = new Point(this.lon, this.lat);
      if (gra.geometry) {
        pt = gra.geometry;
      }
      var options = {
        point: pt,
        info: gra.attributes
      };
      this.smartCards.selectCard(this.index);
      this.smartTip.update(options);
    },

    // process error
    _processError: function(error) {
      dom.byId("panelContent").innerHTML = "Error: " + error.message;
    },

    // graphic clicked
    _graphicClicked: function(evt) {
      if (evt.graphic) {
        var gra = evt.graphic;
        this.index = gra.attributes.index;
        var pt = new Point(this.lon, this.lat);
        if (gra.geometry) {
          pt = gra.geometry;
        }
        var options = {
          point: pt,
          info: gra.attributes
        };
        this.smartTip.update(options);
        this.smartCards.selectCard(this.index);
      }
    },

    // card clicked
    _cardClicked: function(obj) {
      if (obj.data) {
        var gra = obj.data;
        this.index = gra.attributes.index;
        var pt = new Point(this.lon, this.lat);
        if (gra.geometry) {
          pt = gra.geometry;
        }
        var options = {
          point: pt,
          info: gra.attributes
        };
        this.smartTip.update(options);
      }
    }

  });
});
