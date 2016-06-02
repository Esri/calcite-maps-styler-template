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
  "dojo/_base/lang",

  "dojo/Deferred",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/dom-style",

  "dojo/on",
  "dojo/promise/all",

  "esri/Camera",
  "esri/Color",

  "esri/geometry/Point",
  "esri/geometry/SpatialReference",
  "esri/geometry/support/webMercatorUtils",

  "esri/Graphic",
  "esri/layers/FeatureLayer",
  "esri/layers/GraphicsLayer",

  "esri/portal/PortalItem",

  "esri/renderers/SimpleRenderer",

  "esri/symbols/ExtrudeSymbol3DLayer",
  "esri/symbols/PictureMarkerSymbol",
  "esri/symbols/PointSymbol3D",
  "esri/symbols/PolygonSymbol3D",
  "esri/symbols/ObjectSymbol3DLayer",

  "esri/tasks/QueryTask",
  "esri/tasks/support/Query",

  "esri/views/SceneView",
  "esri/views/3d/externalRenderers",
  "esri/WebScene",

  "application/uiUtils",
  "application/VizCards/VizCards",
  "lib/PointExtrusion.min",
  "lib/Pulse.min",

  "dojo/domReady!"
], function(
  declare, array, lang,
  Deferred,
  dom, domAttr, domClass, domConstruct, domStyle,
  on, all,
  Camera, Color,
  Point, SpatialReference, webMercatorUtils,
  Graphic, FeatureLayer, GraphicsLayer,
  PortalItem,
  SimpleRenderer,
  ExtrudeSymbol3DLayer, PictureMarkerSymbol, PointSymbol3D, PolygonSymbol3D, ObjectSymbol3DLayer,
  QueryTask, Query,
  SceneView, externalRenderers, WebScene,
  uiUtils, VizCards,
  PointExtrusion, Pulse
) {
  return declare(null, {

    config: {},
    scene: null,
    view: null,
    uiUtils: null,
    vizLayer: null,
    vizCards: null,
    renObjects: [],

    startup: function(config) {
      var promise;
      var error;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        if (config.webGLSupport && config.webGLSupport.canSupport === false) {
          error = new Error("Browser not supported <br>" + config.webGLSupport.helpMessage);
          this.reportError(error);
          return;
        }
        this.config = config;
        this.uiUtils = new uiUtils();
        this.uiUtils.init(config);
        promise = this._createWebScene();
      } else {
        error = new Error("Main:: Config is not defined");
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

      this.scene.load().then(lang.hitch(this, function(){

        var viewProperties = {
          map: this.scene,
          container: "panelView"
        };
        if (this.scene.initialViewProperties.viewingMode === "local") {
          viewProperties.constraints = {
            collision: {
              enabled: false
            },
            tilt: {
              max: 179.99
            }
          };
        }
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
          this.view.on("click", lang.hitch(this, this._viewClicked));
          this._initApp();
          //setTimeout(lang.hitch(this, this._initApp), 3000);
          return response;
        }), this.reportError);

      }));

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
      this._setEnvironment();
      this.uiUtils.setColor();
      this._setTitles();
      this._initUI();
      this._initViz();
      domClass.remove(document.body, "app-loading");
    },

    // set environment
    _setEnvironment: function() {
      var aEnabled = false;
      var sEnabled = false;
      if (this.config.atmosphere === true) {
        aEnabled = true;
      }
      if (this.config.stars === true) {
        sEnabled = true;
      }
      this.view.environment = {
        atmosphereEnabled: aEnabled,
        starsEnabled: sEnabled
      };
    },

    // set titles
    _setTitles: function() {
      document.title = this.config.title || this.scene.portalItem.title;
      dom.byId("panelTitle").innerHTML = this.config.title || this.scene.portalItem.title;
    },

    // init ui
    _initUI: function() {
      var options = {
        view: this.view,
        showPercent: this.config.showPercent
      };
      this.vizCards = new VizCards(options, dom.byId("panelContent"));
      this.vizCards.on('selection', lang.hitch(this, this._cardClicked));
      this.vizCards.startup();
      if (this.config && this.config.i18n) {
        domAttr.set("btnToggle", "title", this.config.i18n.tooltips.toggle || "Toggle");
        domAttr.set("btnPlay", "title", this.config.i18n.tooltips.play || "Play-Pause");
      }
      on(dom.byId("btnToggle"), "click", lang.hitch(this, this._toggleBottom));
      on(dom.byId("btnPlay"), "click", lang.hitch(this, this._toggleVizTimer));
    },

    // toggle bottom
    _toggleBottom: function() {
      domClass.toggle("panelBottom", "opened");
    },


    // **
    // Viz Options
    // **

    // init viz
    _initViz: function() {
      var def = this._processLayers();
      def.then(lang.hitch(this, function(lyr) {
        if (lyr) {
          this._initVizLayer(lyr);
        } else {
          console.log("No feature layer in web scene.");
        }
      }));
    },

    _processLayers: function() {
      var def = new Deferred();
      var map = this.view.map;
      var layers = map.layers;
      var i;
      var j;
      if (layers.length === 0) {
        def.resolve(null);
        return def.promise;
      }
      // TO DO: Check how layer in config is being passed
      if (this.config.vizLayer) {
        var lyr = map.findLayerById(this.config.vizLayer.id);
        lyr.then(function(vizLyr) {
          def.resolve(vizLyr);
          return;
        });
      } else {
        var promises = [];
        for (i = layers.length - 1; i >= 0; i--) {
          var id = layers.getItemAt(i).id;
          promises.push(map.findLayerById(id));
        }
        all(promises).then(function(results) {
          var vizLyr;
          for (i = 0; i < results.length; i++) {
            var lyr = results[i];
            // Feature Layer
            if (lyr.declaredClass === "esri.layers.FeatureLayer") {
              vizLyr = lyr;
              def.resolve(lyr);
              break;
            }
            // Group Layer
            if (lyr.declaredClass === "esri.layers.GroupLayer") {
              for (j = 0; j < lyr.layers.length; j++) {
                var lyr2 = lyr.layers.getItemAt(j);
                if (lyr2.declaredClass === "esri.layers.FeatureLayer") {
                  vizLyr = lyr2;
                  def.resolve(lyr2);
                  break;
                }
              }
            }
          }
          def.resolve(vizLyr);
        });
      }
      return def.promise;
    },

    // init viz layer
    _initVizLayer: function(lyr) {
      var map = this.view.map;
      var offset = 30;
      if (this.scene.initialViewProperties.viewingMode === "local") {
        offset = 1;
      }

      lyr.visible = false;

      this.labelsLayer = new GraphicsLayer({
        elevationInfo: {
          mode: "relative-to-ground",
          offset: offset
        }
      });
      map.add(this.labelsLayer);

      var url = lyr.url;
      if (typeof lyr.layerId === 'number') {
        url += "/" + lyr.layerId;
      }

      this.vizLayer = {
        url: url,
        popupTemplate: lyr.popupTemplate,
        page: 0,
        max: 0
      };

      var flds = [];
      var firstFld = null;
      var displayFld = null;
      //var validTypes = "esriFieldTypeSmallInteger,esriFieldTypeInteger,esriFieldTypeSingle,esriFieldTypeDouble";
      var validTypes = "small-integer,integer,single,double";
      var invalidNames = "fid,objectid,x,y,latitude,longitude";
      array.forEach(lyr.fields, lang.hitch(this, function(f) {
        var fldInfo = this._getFieldInfo(f.name);
        var vis = true;
        if (fldInfo && !fldInfo.visible) {
          vis = false;
        }
        if (vis) {
          var n = f.name.toLowerCase();
          if (validTypes.indexOf(f.type) > -1 && invalidNames.indexOf(n) === -1) {
            if (this.config.vizFields.length > 0) {
              if (array.indexOf(this.config.vizFields, f.name) > -1) {
                flds.push(f);
              }
            } else {
              flds.push(f);
            }
          }
          if (!firstFld && f.type === "string") {
            firstFld = f.name;
          }
        }
        if (this.config.displayField) {
          if (f.name === this.config.displayField) {
            displayFld = f.name;
          }
        }
      }));
      if (!displayFld) {
        // Default layers display field
        if (lyr.displayField) {
          displayFld = lyr.displayField;
        } else {
          displayFld = (firstFld) ? firstFld : lyr.objectIdField;
        }
      }

      if (flds.length > 0) {
        this.vizLayer.displayField = displayFld;
        this.vizLayer.fields = flds;
        this._queryVizData();
        if (flds.length === 1 && this.view.viewingMode !== "global") {
          domStyle.set("btnPlay", "display", "none");
        }
      } else {
        console.log("No valid fields.");
      }
    },

    // query viz data
    _queryVizData: function() {
      var queryTask = new QueryTask({
        url: this.vizLayer.url
      });
      var query = new Query();
      query.returnGeometry = true;
      query.outFields = ["*"];
      query.where = "1=1";
      queryTask.execute(query).then(lang.hitch(this, function(results) {
        console.log(results);
        if (this.config.vizType === "Polygon Extrusion" && results.geometryType !== "polygon") {
          console.log("Polygon Extrusion is only supported with polygon geometries");
          this.config.vizType = "Point Extrusion";
        }
        this.vizLayer.featureSet = results;
        this._processFeatureGeometries(results.features);
        this.vizLayer.features = this._processFeatureGeometries(results.features);
        this._initVizPages();
      }));
    },

    // process feature geometries
    _processFeatureGeometries: function(features) {
      var ptFeatures = [];
      array.forEach(features, function(feature) {
        var geom = feature.geometry;
        if (geom) {
          var pt = geom;
          switch (geom.type) {
            case "point":
              break;
            case "polygon":
            case "circle":
              pt = geom.centroid;
              break;
            default:
              pt = geom.extent.center;
              break;
          }
          var gra = new Graphic({
            geometry: pt,
            attributes: feature.attributes
          });
          ptFeatures.push(gra);
        }
      });
      return ptFeatures;
    },

    // init viz pages
    _initVizPages: function() {
      var list = dom.byId("pages");
      list.innerHTML = "";
      if (this.vizLayer.fields.length > 1) {
        for (var i = 0; i < this.vizLayer.fields.length; i++) {
          var id = "page" + i;
          var alias = this._getFieldAlias(this.vizLayer.fields[i].name);
          var link = domConstruct.create("li", {
            id: id,
            title: alias
          }, list);
          on(link, "click", lang.hitch(this, this._setVizPage, i));
        }
        domClass.add("page0", "active");
      }
      this._setVizPage(0);
      this._startVizTimer();
    },

    // get field info
    _getFieldInfo: function(fld) {
      var fldInfo = null;
      if (this.vizLayer.popupTemplate && this.vizLayer.popupTemplate.fieldInfos.length > 0) {
        array.some(this.vizLayer.popupTemplate.fieldInfos, function(f) {
          if (f.fieldName === fld) {
            fldInfo = f;
            return true;
          }
        });
      }
      return fldInfo;
    },

    // get field alias
    _getFieldAlias: function(fld) {
      var alias = fld;
      var fldInfo = this._getFieldInfo(fld);
      if (fldInfo) {
        alias = fldInfo.label;
      }
      return alias;
    },

    // set viz color
    _setVizColor: function() {
      if (this.config.cycleColors) {
        var num = this.vizLayer.page;
        var cNum = num - (Math.floor(num / this.config.colors.length) * this.config.colors.length);
        var color = this.config.colors[cNum];
        this.config.color = color;
        this.uiUtils.setColor(color);
      }
    },

    // set viz page
    _setVizPage: function(num) {
      var oldId = "page" + this.vizLayer.page;
      var newId = "page" + num;
      if (dom.byId(oldId)) {
        domClass.remove(oldId, "active");
      }
      this.vizLayer.page = num;
      if (dom.byId(newId)) {
        domClass.add(newId, "active");
      }
      this._setVizColor();
      this._processViz();
    },

    // toggle viz timer
    _toggleVizTimer: function() {
      if (this.playing) {
        this._stopVizTimer();
      } else {
        this._startVizTimer();
      }
    },

    // start viz timer
    _startVizTimer: function() {
      this._stopVizTimer();
      this.vizTimer = setInterval(lang.hitch(this, this._doViz), this.config.interval);
      if (this.view.viewingMode === "global") {
        this._startSpin();
      }
      this.playing = true;
      domClass.add("btnPlay", "playing");
    },

    // stop viz timer
    _stopVizTimer: function() {
      if (this.vizTimer) {
        clearInterval(this.vizTimer);
        this.vizTimer = null;
      }
      this._stopSpin();
      this.playing = false;
      domClass.remove("btnPlay", "playing");
    },

    // do viz
    _doViz: function() {
      var num = this.vizLayer.page + 1;
      if (num >= this.vizLayer.fields.length) {
        num = 0;
      }
      this._setVizPage(num);
    },

    // process viz
    _processViz: function() {

      var vizFld = this.vizLayer.fields[this.vizLayer.page].name;
      var displayFld = this.vizLayer.displayField;
      var alias = this._getFieldAlias(vizFld);
      dom.byId("panelSubtitle").innerHTML = alias;

      var filteredFeatures = array.filter(this.vizLayer.features, function(item) {
        if (item.attributes[vizFld]) {
          return true;
        } else {
          return false;
        }
      });

      if (filteredFeatures.length > 0) {
        filteredFeatures.sort(function(a, b) {
          if (a.attributes[vizFld] < b.attributes[vizFld]) {
            return -1;
          }
          if (a.attributes[vizFld] > b.attributes[vizFld]) {
            return 1;
          }
          return 0;
        });
        filteredFeatures.reverse();
        array.forEach(filteredFeatures, function(f, index) {
          f.attributes.index = index;
        });
        this.vizLayer.max = filteredFeatures[0].attributes[vizFld];
      }

      var options = {
        features: filteredFeatures,
        vizField: vizFld,
        displayField: displayFld,
        color: this.config.color
      };

      this.vizCards.update(options);

      if (this.config.vizType === "Polygon Extrusion") {
        this._processFeatureLayer(options);
      } else {
        this._processFeatures(options);
      }

    },

    // process feature layer
    _processFeatureLayer: function(options) {
      var map = this.view.map;
      if (this.featureLayer) {
        map.remove(this.featureLayer);
      }

      var renderer = this._getRenderer(options);
      var fs = this.vizLayer.featureSet;

      this.featureLayer = new FeatureLayer({
        // create an instance of esri/layers/support/Field for each field object
        fields: fs.fields,
        objectIdField: fs.objectIdField,
        geometryType: fs.geometryType,
        spatialReference: fs.spatialReference,
        source: fs.features,
        renderer: renderer
      });
      map.add(this.featureLayer);
    },

    // get renderer
    _getRenderer: function(options) {
      var maxSize = this.config.maxZ;
      var max = this.vizLayer.max;
      //var min = Math.floor(maxSize * 0.005);

      var stopsSize = [];
      var stopsColor = [];
      for (var i = 1; i < 21; i++) {
        var pct = i / 20;
        var blend = (1 - pct) * 0.8;
        var color = Color.fromString(options.color);
        var white = Color.fromString("#ffffff");
        var symColor = Color.blendColors(color, white, blend);
        stopsSize.push({
          value: Math.floor(max * pct),
          size: Math.floor(maxSize * pct),
          label: i
        });
        stopsColor.push({
          value: Math.floor(max * pct),
          color: symColor,
          label: i
        });
      }

      var renderer = new SimpleRenderer({
        symbol: new PolygonSymbol3D({
          symbolLayers: [new ExtrudeSymbol3DLayer({
            material: {
              color: options.color
            }
          })]
        }),
        label: "",
        visualVariables: [{
          type: "size",
          field: options.vizField,
          stops: stopsSize
        }, {
          type: "color",
          field: options.vizField,
          stops: stopsColor
        }]
      });

      return renderer;
    },


    // process features
    _processFeatures: function(options) {
      this.labelsLayer.removeAll();
      this._clearRenderers();
      var features = options.features;
      if (features.length <= 0) {
        return;
      }
      var maxW = this.config.maxW;
      var maxH = this.config.maxZ;
      var maxSize = maxH;
      if (this.config.vizType === "Pulse") {
        maxSize = maxW;
      }
      var max = this.vizLayer.max;
      var min = Math.floor(maxSize * 0.005);
      var locations = [];
      array.forEach(options.features, lang.hitch(this, function(feature) {
        var geom = feature.geometry;
        var attr = feature.attributes;
        var value = attr[options.vizField];
        var valueSize = value / max * maxSize;
        if (valueSize <= min) {
          valueSize = min;
        }
        var h = valueSize;
        var w = maxW;
        if (this.config.vizType === "Pulse") {
          w = valueSize;
          h = maxH;
        }
        var loc = {
          x: geom.x,
          y: geom.y,
          z: geom.z,
          width: w,
          height: h,
          attributes: attr
        };
        locations.push(loc);
      }));
      this._addRenderer(locations);
    },

    // get color
    _getColor: function() {
      var rgba = Color.fromString(this.config.color).toRgb();
      rgba.push(0.9);
      return rgba;
    },

    // get symbol
    _getSymbol: function(height, color) {
      var sym = new PointSymbol3D({
        symbolLayers: [
          new ObjectSymbol3DLayer({
            width: this.config.maxW,
            height: height,
            resource: {
              primitive: "cylinder"
            },
            material: {
              color: color
            }
          })
        ]
      });
      return sym;
    },

    // card clicked
    _cardClicked: function(obj) {
      if (obj.data) {
        var index = obj.data.attributes.index;
        this._selectGraphic(index);
        var gra = this.vizCards.getFeature(index);
        var geom = gra.geometry;
        var pos = this.view.camera.position;
        if (this.playing) {
          this._stopVizTimer();
        }
        this.view.goTo({
          position: [geom.longitude, geom.latitude, pos.z],
          tilt: 0,
          heading: 0
        });
      } else {
        this.labelsLayer.removeAll();
      }
    },

    // view clicked
    _viewClicked: function(evt) {
      if (this.config.vizType === "Polygon Extrusion") {
        var fld = this.vizLayer.featureSet.objectIdFieldName;
        this.view.hitTest(evt.screenPoint).then(lang.hitch(this, function(obj){
          if (obj.results.length > 0 && obj.results[0].graphic) {
            var oid = obj.results[0].graphic.attributes[fld];
            var gra = this.vizCards.findFeature(fld, oid);
            if (gra) {
              var index = gra.attributes.index;
              this._selectGraphic(index);
              this.vizCards.selectCard(index);
            }
          }
        }));
      } else {
        this._selectRendererObj(evt);
      }
    },

    // select graphic
    _selectGraphic: function(index) {
      this.labelsLayer.removeAll();
      var gra = this.vizCards.getFeature(index);
      var geom = gra.geometry;
      var vizFld = this.vizLayer.fields[this.vizLayer.page].name;
      var value = gra.attributes[vizFld];
      var label = (index + 1) + ". " + gra.attributes[this.vizLayer.displayField];
      var ht = value / this.vizLayer.max * this.config.maxZ + 500;
      if (ht <= 0) {
        ht = 500;
      }
      var symTxt = this._getLabel(label);
      var pt = new Point(geom.x, geom.y, ht, geom.spatialReference);
      var graLbl = new Graphic(pt, symTxt, {});
      this.labelsLayer.add(graLbl);
    },

    // get label
    _getLabel: function(value) {
      var w = value.length * 10;
      var ctx = dom.byId('panelLabel').getContext('2d');
      ctx.canvas.width = w;
      ctx.canvas.height = 50;
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      //ctx.strokeStyle = this.config.color;
      ctx.rect(0, 20, w, 30);
      ctx.fill();
      //ctx.stroke();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "14px Arial";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(value, w / 2, 35);
      var url = ctx.canvas.toDataURL();
      var symTxt = new PictureMarkerSymbol(url, w, 50);
      return symTxt;
    },

    // **
    // Spin Options
    // **

    // start spin
    _startSpin: function() {
      this._stopSpin();
      this.spinTimer = setInterval(lang.hitch(this, this._doSpin), 100);
    },

    // stop spin
    _stopSpin: function() {
      if (this.spinTimer) {
        clearInterval(this.spinTimer);
        this.spinTimer = null;
      }
    },

    // do spin
    _doSpin: function() {
      var pos = this.view.camera.position;
      var posGeo = pos;
      if (pos.spatialReference.isWebMercator) {
        posGeo = webMercatorUtils.webMercatorToGeographic(pos);
      }
      var posX = posGeo.x - 1;
      if (posX <= -180) {
        posX = 179;
      }
      var posZ = pos.z;
      if (posZ < 8000000) {
        posZ = 8000000;
      }
      this.view.goTo({
        position: [posX, 0, posZ],
        tilt: 0,
        heading: 0
      });
    },

    // **
    // External Renderers
    // **

    _addRenderer: function(locations) {
      var params = {
        loop: false,
        color: this.config.color
      };
      var obj;
      switch (this.config.vizType) {
        case "Pulse":
          params.loop = true;
          obj = new Pulse(this.view, locations, params);
          break;
        default:
          obj = new PointExtrusion(this.view, locations, params);
          break;
      }
      externalRenderers.add(this.view, obj);
      this.renObjects.push(obj);
    },

    _clearRenderers: function() {
      array.forEach(this.renObjects, lang.hitch(this, function(obj){
        externalRenderers.remove(this.view, obj);
      }));
      this.renObjects = [];
    },

    _selectRendererObj: function(evt) {
      if(this.renObjects.length > 0) {
        var renObj = this.renObjects[0];
        var gra = renObj.hitTest(evt);
        if (gra) {
          var index = gra.attributes.index;
          this._selectGraphic(index);
          this.vizCards.selectCard(index);
        }
      }
    }

  });
});
