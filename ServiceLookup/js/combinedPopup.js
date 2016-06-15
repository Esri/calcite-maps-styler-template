
define([
  "dojo/Evented",
  "dojo",
  "dijit",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/_base/array",
  "dojo/topic",
  "dojo/io-query",
  "dojo/query",
  "dojo/promise/all",
  "esri/geometry/Extent",
  "esri/geometry/Point",
  "esri/graphic",
  "esri/toolbars/draw",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/symbols/SimpleFillSymbol",
  "esri/Color",
  "esri/tasks/QueryTask",
  "esri/tasks/query",
  "esri/dijit/PopupTemplate",
  "esri/geometry/webMercatorUtils",
  "esri/geometry/geometryEngine",
  "dojo/string",
  "dojo/i18n!application/nls/resources"
], function (
  Evented,
  dojo,
  dijit,
  declare,
  lang,
  array,
  topic,
  ioQuery,
  djquery,
  all,
  Extent,
  Point,
  Graphic,
  Draw,
  SimpleMarkerSymbol,
  SimpleLineSymbol,
  SimpleFillSymbol,
  Color,
  QueryTask,
  Query,
  PopupTemplate,
  webMercatorUtils,
  geometryEngine,
  djString,
  i18n
) {
  return declare([Evented], {
    config: {},
    map: null,
    layers: null,
    contentWindow: null,
    options: {
      contentID: null
    },
    searchTol: 4,
    constructor: function (map, config, options) {
      this.map = map;
      this.config = config;
      this.layers = this.config.response.itemInfo.itemData.operationalLayers;

      this.options = lang.mixin({}, this.options, options);
      // properties
      //this.showGraphic = defaults.showGraphic;

    },
    startup: function () {
      //disconnect the popup handler
      this._createSymbols();
      this.disableWebMapPopup();
      topic.subscribe("app.mapLocate", lang.hitch(this, this._mapLocate));
      topic.subscribe("app.linkImage", lang.hitch(this, this._linkclick));
      topic.subscribe("app.emailImage", lang.hitch(this, this._emailclick));
      if (this.options.contentID) {
        this.contentWindow = dijit.byId(this.options.contentID);
        this.showGraphic = true;
      }
      else {
        this.showGraphic = false;
      }

      this._initPopup();
      this._createToolbar();
      this.map.infoWindow.on("hide", lang.hitch(this, this._infoHide));
      this._initShareLink();
      this.emit("ready", { "Name": "CombinedPopup" });

      if (this.config.location) {
        var e = this.config.location.split(",");
        if (e.length === 2) {
          var point = new Point(parseFloat(e[0]), parseFloat(e[1]), this.map.spatialReference);
          this.showPopup(point, "LocationParam");
        }

      }

    },
    disableWebMapPopup: function () {
      if (this.map) {
        this.map.setInfoWindowOnClick(false);
        //this.map.infoWindow.set("popupWindow", false);
      }
    },
    _mapLocate: function () {
      if ('feature' in arguments[0]) {
        this.searchLoc = arguments[0].feature.geometry;
        this.event = arguments[0].feature.geometry;
        if (this.searchByLayer === null) {
          var tmpLay = this._findLayer(arguments[0].layerId);
          this.tempPopUp = null;
          if (tmpLay !== null) {
            this.tempPopUp = tmpLay;

          }
          this.showPopupGeo(arguments[0].feature.geometry, arguments[0].feature);

        }
        else {
          if (this.searchByLayer.id !== arguments[0].layerId) {
            this.showPopup(arguments[0].feature.geometry, "SEARCH");


          }
          else {
            this.tempPopUp = this.searchByLayer;
            this.showPopupGeo(arguments[0].feature.geometry, arguments[0].feature);

          }

        }



      }
      else if ('geometry' in arguments[0]) {

        if ("wkid" in arguments[0].geometry.spatialReference && "wkid" in this.map.spatialReference) {
          if (arguments[0].geometry.spatialReference.wkid !== this.map.spatialReference.wkid) {
            if (webMercatorUtils.canProject(arguments[0].geometry, this.map.spatialReference)) {
              arguments[0].geometry = webMercatorUtils.project(arguments[0].geometry, this.map.spatialReference);
            }

          }
        }
        this.showPopup(arguments[0].geometry, arguments[0].layerId);
      }
    },
    showPopup: function (evt, info) {
      topic.publish("app.toggleIndicator", true);
      this.event = evt;//this._getCenter(evt);
      this.searchLoc = evt;
      this.map.infoWindow.hide();
      //this.map.infoWindow.highlight = false;
      if (this.showGraphic === true) {
        this.map.graphics.clear();
      }

      if (this.searchByLayer !== null &&
        this.searchByLayer !== undefined &&
        info !== this.searchByLayer.id) {

        this.searchLayerForPopup(evt);

      } else {
        this.showPopupGeo(evt, null);
      }

    },
    _getCenter: function (geo) {
      if (geo.type === "extent") {
        return geo.getCenter();
      }
      else if (geo.type === "polygon") {
        var centroid = geo.getCentroid();
        var center = geo.getExtent().getCenter();

        if (geometryEngine.contains(geo, centroid)) {
          return centroid;
        }
        else if (geometryEngine.contains(geo, center)) {
          return center;
        }
        return centroid;
      }
      else if (geo.type === "polyline") {
        return geometryEngine.nearestCoordinate(geo, geo.getExtent().getCenter()).coordinate;
        //return new Point(coord.x, coord.y, this.map.spatialReference);

      }
      else {
        return geo;
      }
    },
    _getExtent: function (geo) {
      if (geo.type === "extent") {
        return geo;
      }
      else if (geo.type === "polygon") {
        return geo.getExtent();
      }
      else if (geo.type === "polyline") {
        return geo.getExtent();
      }
      else {
        return null;
      }
    },
    showPopupGeo: function (evt, searchByFeature) {
      this.resultCount = 0;
      this.searchByFeature = searchByFeature;

      if (this.lookupLayers === undefined) {
        topic.publish("app.toggleIndicator", false);
        return;
      }
      if (this.lookupLayers === null) {
        topic.publish("app.toggleIndicator", false);
        return;
      }
      if (this.lookupLayers.length === 0) {
        topic.publish("app.toggleIndicator", false);
        return;
      }
      topic.publish("app.toggleIndicator", true);

      this.map.infoWindow.hide();
      //this.map.infoWindow.highlight = false;
      if (this.showGraphic === true) {
        this.map.graphics.clear();
      }

      //query to determine popup
      var query = new Query();
      var queryTask;


      this.results = [];
      if (this.lookupLayers === null) {
        return null;
      }

      this.defCnt = this.lookupLayers.length;
      var queryDeferred;
      var geoExt;
      if (evt.type === "point") {
        geoExt = this.pointToExtent(evt, this.searchTol);
      }
      else {
        geoExt = this._getExtent(evt);

      }
      for (var f = 0, fl = this.lookupLayers.length; f < fl; f++) {
        if (this.lookupLayers[f].url === null) {

          query = new Query();

          if (evt.type === "point") {
            query.geometry = geoExt;
            query.geometryType = "esriGeometryExtent";
          }
          else {
            query.geometry = geoExt;
            query.geometryType = "esriGeometryExtent";
          }

          query.outFields = ["*"];
          if (this.lookupLayers[f].definitionExpression) {
            query.where = this.lookupLayers[f].definitionExpression;
          }

          queryDeferred = this.lookupLayers[f].layer.layerObject.queryFeatures(query);
          queryDeferred.addCallback(lang.hitch(this, this._queryComplete(this.lookupLayers[f])));

          queryDeferred.addErrback(lang.hitch(this, this._queryError));
        } else {
          query = new Query();

          query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS;
          if (evt.type === "point") {
            query.geometry = geoExt;
            query.geometryType = "esriGeometryExtent";
          }
          else {
            query.geometry = evt;
          }

          query.returnGeometry = true;
          query.outSpatialReference = this.map.spatialReference;
          query.outFields = ["*"];
          if (this.lookupLayers[f].definitionExpression) {
            query.where = this.lookupLayers[f].definitionExpression;
          }
          queryTask = new QueryTask(this.lookupLayers[f].url);
          queryDeferred = queryTask.execute(query);
          queryDeferred.addCallback(lang.hitch(this, this._queryComplete(this.lookupLayers[f])));

          queryDeferred.addErrback(lang.hitch(this, this._queryError));
        }
      }
    },
    _queryError: function (error) {


      console.log(error);
      this.defCnt = this.defCnt - 1;
      if (this.defCnt === 0) {
        this._allQueriesComplate();
      }


    },
    enableMapClick: function () {
      this.toolbar.activate(Draw.POINT);

    },
    disableMapClick: function () {
      this.toolbar.deactivate();

    },
    _infoHide: function () {
      if (this.map.graphics !== null) {
        this.map.graphics.clear();
      }
    },
    pointToExtent: function (point, toleranceInPixel) {
      //calculate map coords represented per pixel
      var pixelWidth = this.map.extent.getWidth() / this.map.width;
      //calculate map coords for tolerance in pixel
      var toleraceInMapCoords = toleranceInPixel * pixelWidth;
      //calculate & return computed extent
      return new Extent(point.x - toleraceInMapCoords,
                   point.y - toleraceInMapCoords,
                   point.x + toleraceInMapCoords,
                   point.y + toleraceInMapCoords,
                   point.spatialReference);
    },
    searchLayerForPopup: function (geo) {
      var query = new Query();
      if (this.searchByLayer.url === null || this.searchByLayer.url === undefined) {
        if (geo.type === "point") {
          query.geometry = this.pointToExtent(geo, this.searchTol);
          query.geometryType = "esriGeometryExtent";
        }
        else {
          query.geometry = geo.getExtent();
          query.geometryType = "esriGeometryExtent";
        }
        this.searchLoc = query.geometry;
        query.outFields = ["*"];

        if (this.searchByLayer.layerDefinition) {
          if (this.searchByLayer.layerDefinition.definitionExpression) {
            query.where = this.searchByLayer.layerDefinition.definitionExpression;
          }
        }
        var queryDeferred = this.searchByLayer.layerObject.queryFeatures(query);
        queryDeferred.addCallback(lang.hitch(this, this._layerSearchComplete(geo)));

        queryDeferred.addErrback(lang.hitch(this, function (error) {
          console.log(error);
        }));
      }
      else {
        if (geo.type === "point") {
          query.geometry = this.pointToExtent(geo, this.searchTol);
          query.geometryType = "esriGeometryExtent";
        }
        else {
          query.geometry = geo;
        }
        this.searchLoc = query.geometry;
        query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS;

        query.outSpatialReference = this.map.spatialReference;
        query.returnGeometry = true;
        query.outFields = ["*"];
        if (this.searchByLayer.layerDefinition) {
          if (this.searchByLayer.layerDefinition.definitionExpression) {
            query.where = this.searchByLayer.layerDefinition.definitionExpression;
          }
        }
        var layerQueryTask = new QueryTask(this.searchByLayer.url);
        layerQueryTask.on("complete", lang.hitch(this, this._layerSearchComplete(geo)));
        layerQueryTask.on("error", lang.hitch(this, function (error) {
          console.log(error);
          topic.publish("app.toggleIndicator", false);
        }));

        layerQueryTask.execute(query);
      }
    },
    _findLayer: function (layid) {
      var reLay = null;
      array.some(this.layers, function (layer) {

        if (layer.featureCollection !== null) {
          if (layer.featureCollection.layers !== null) {
            array.forEach(layer.featureCollection.layers, function (subLyrs) {
              if (subLyrs.layerObject !== null) {
                if (subLyrs.layerObject.id === layid) {
                  reLay = subLyrs;
                  return true;
                }


              }
            }, this);
          }
        } else if (layer.layerObject !== null) {
          if (layer.layerObject.layerInfos !== null) {
            array.forEach(layer.layerObject.layerInfos, function (subLyrs) {

              if (subLyrs.id === layid) {
                reLay = subLyrs;
                return true;
              }

            }, this);

          } else {

            if (layer.id === layid) {
              reLay = layer;
              return true;
            }
          }
        }
      }, this);
      return reLay;
    },
    _initPopup: function () {
      this.searchByLayer = null;
      if (this.config.searchByLayer) {
        if (this.config.searchByLayer === undefined) {
          this.config.searchByLayer = null;
        }
      } else {
        this.config.searchByLayer = null;
      }


      var serviceAreaLayerNames = [];
      this.popupMedia = [];
      if (this.config.serviceAreaLayerNamesSelector === null) {
        this.config.serviceAreaLayerNamesSelector = "";
      }
      if (this.config.serviceAreaLayerNamesSelector === undefined) {
        this.config.serviceAreaLayerNamesSelector = "";
      }

      if (djString.trim(this.config.serviceAreaLayerNamesSelector) === "") {
        if (djString.trim(this.config.serviceAreaLayerNames) === "") {
          if (i18n) {
            if (i18n.error) {
              if (i18n.error.noLayersSet) {
                alert(i18n.error.noLayersSet);
              }
            }
          }
          alert();
        }
        else {
          serviceAreaLayerNames = this.config.serviceAreaLayerNames.split("|");
        }



      }
      else {
        serviceAreaLayerNames = [];
        var layers = dojo.fromJson(this.config.serviceAreaLayerNamesSelector);
        array.forEach(layers, function (layer) {
          serviceAreaLayerNames.push(layer.id);
        });
      }
      this.lookupLayers = [];
      var f = 0, fl = 0;
      for (f = 0, fl = serviceAreaLayerNames.length; f < fl; f++) {
        serviceAreaLayerNames[f] = djString.trim(serviceAreaLayerNames[f]);
        serviceAreaLayerNames[f] = this._loadLayers(this.layers, serviceAreaLayerNames[f], f);
      }

      var useLegacyConfig = false;
      var layDetails = {};
      if (this.lookupLayers.length === 0 &&
        this.config.serviceAreaLayerName !== null &&
         this.config.serviceAreaLayerName !== undefined) {
        layDetails = {};

        array.forEach(this.layers, function (layer) {

          this.config.serviceAreaLayerName = djString.trim(this.config.serviceAreaLayerName);
          if (layer.layerObject.layerInfos !== null) {
            array.forEach(layer.layerObject.layerInfos, function (subLyrs) {
              if (subLyrs.name === this.config.serviceAreaLayerName) {
                layDetails.name = subLyrs.name;
                layDetails.layerOrder = 0;

                layDetails.url = layer.layerObject.url + "/" + subLyrs.id;

                console.log(this.config.serviceAreaLayerName + " " + "set");

                if (layer.layers !== null) {
                  array.forEach(layer.layers, function (popUp) {
                    if (subLyrs.id === popUp.id) {
                      layDetails.popupInfo = popUp.popupInfo;
                    }
                  }, this);
                }
                if (layDetails.popupInfo === null) {
                  alert(i18n.error.popupNotSet + ": " + subLyrs.name);
                }
                this.lookupLayers.push(layDetails);
                useLegacyConfig = true;
              }
            }, this);
          } else {

            if (layer.title === this.config.serviceAreaLayerName) {
              layDetails.popupInfo = layer.popupInfo;
              layDetails.name = layer.title;
              layDetails.url = layer.layerObject.url;
              layDetails.layerOrder = 0;
              this.lookupLayers.push(layDetails);
              console.log(layer.title + " " + "set");
              useLegacyConfig = true;

            }
          }

        }, this);

      }

      var allLayerNames = "";
      var layerNamesFound = [];
      for (f = 0, fl = this.lookupLayers.length; f < fl; f++) {

        allLayerNames += this.lookupLayers[f].name + ",";
        layerNamesFound.push(this.lookupLayers[f].name);
      }

      if (!useLegacyConfig) {

        for (var n = 0, nl = serviceAreaLayerNames.length; n < nl; n++) {

          if (dojo.indexOf(layerNamesFound, serviceAreaLayerNames[n]) < 0) {
            if (i18n) {
              if (i18n.error) {
                if (i18n.error.layerNotFound) {
                  alert(i18n.error.layerNotFound + ":" + serviceAreaLayerNames[n]);
                } else {
                  alert("Layer not found: " + serviceAreaLayerNames[n]);
                }
              } else {
                alert("Layer not found: " + serviceAreaLayerNames[n]);
              }
            } else {
              alert("Layer not found: " + serviceAreaLayerNames[n]);
            }

          }

        }
      }
      if (this.serviceRequestLayerName === undefined &&
        this.config.storeLocation === true &&
        this.config.editingAllowed) {
        if (this.config.serviceRequestLayerName.id !== undefined) {
          alert(i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName.id);
        } else {
          alert(i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName);
        }
        console.log("Layer name not found.");

      }

    },
    _loadLayers: function (layers, serviceAreaLayerNames, f) {
      var layDetails = {};
      array.forEach(layers, function (layer) {

        if (layer.featureCollection !== null && layer.featureCollection !== undefined) {
          if (layer.featureCollection.layers !== null &&
            layer.featureCollection.layers !== undefined) {
            array.forEach(layer.featureCollection.layers, function (subLyrs) {
              if (subLyrs.layerObject !== null) {
                if (subLyrs.layerObject.id === this.config.searchByLayer.id) {
                  this.searchByLayer = subLyrs;
                }
                if (subLyrs.layerObject.name === serviceAreaLayerNames ||
                  subLyrs.id === serviceAreaLayerNames) {
                  serviceAreaLayerNames = subLyrs.layerObject.name;
                  layDetails.name = subLyrs.layerObject.name;
                  layDetails.layerOrder = f;
                  layDetails.url = subLyrs.layerObject.url;
                  layDetails.layerObject = layer.layerObject;
                  layDetails.layer = subLyrs;
                  if (subLyrs.layerDefinition) {
                    if (subLyrs.layerDefinition.definitionExpression) {
                      layDetails.definitionExpression =
                        subLyrs.layerDefinition.definitionExpression;
                    }
                  }
                  console.log(serviceAreaLayerNames + " " + "set");

                  layDetails.popupInfo = subLyrs.popupInfo;
                  if (layDetails.popupInfo === null ||
                    layDetails.popupInfo === undefined) {
                    if (i18n) {
                      if (i18n.error) {
                        if (i18n.error.popupNotSet) {
                          alert(i18n.error.popupNotSet + ": " + subLyrs.name);
                        }
                      }
                    }

                  }
                  this.lookupLayers.push(layDetails);

                }
              }
            }, this);
          }
        } else if (layer.layerObject !== null && layer.layerObject !== undefined) {
          if (layer.layerObject.layerInfos !== null && layer.layerObject.layerInfos !== undefined) {
            array.forEach(layer.layerObject.layerInfos, function (subLyrs) {
              var matches = false;
              var serName;
              //Add code for SearchBy Layer one layer selector supports map service layers
              if (subLyrs.name === serviceAreaLayerNames) {
                matches = true;
              }
              else if (subLyrs.id === serviceAreaLayerNames) {
                matches = true;
              }
              else if (serviceAreaLayerNames.indexOf(".") > 0) {
                serName = serviceAreaLayerNames.split(".");
                if (layer.id === serName[0]) {
                  if (subLyrs.id.toString() === serName[1].toString()) {
                    matches = true;
                  }
                }
              }
              if (matches === true) {
                serviceAreaLayerNames = subLyrs.name;
                layDetails.name = subLyrs.name;
                layDetails.layerOrder = f;
                layDetails.url = layer.layerObject.url + "/" + subLyrs.id;
                layDetails.layerObject = layer.layerObject;
                console.log(serviceAreaLayerNames + " " + "set");

                if (layer.layers !== null &&
                  layer.layers !== undefined) {
                  array.forEach(layer.layers, function (popUp) {
                    if (subLyrs.id === popUp.id) {
                      if (popUp.layerDefinition) {
                        if (popUp.layerDefinition.definitionExpression) {
                          layDetails.definitionExpression =
                            popUp.layerDefinition.definitionExpression;
                        }
                      }
                      layDetails.popupInfo = popUp.popupInfo;
                    }
                  }, this);
                }
                if (layDetails.popupInfo === null ||
                  layDetails.popupInfo === undefined) {
                  if (i18n) {
                    if (i18n.error) {
                      if (i18n.error.popupNotSet) {
                        alert(i18n.error.popupNotSet + ": " + subLyrs.name);
                      }
                    }
                  }

                }
                this.lookupLayers.push(layDetails);

              }
            }, this);

          } else {

            if (layer.id === this.config.searchByLayer.id) {
              this.searchByLayer = layer;
            }
            if (layer.title === serviceAreaLayerNames || layer.id === serviceAreaLayerNames) {
              serviceAreaLayerNames = layer.title;
              if (layer.popupInfo === null ||
                layer.popupInfo === undefined) {
                if (i18n) {
                  if (i18n.error) {
                    if (i18n.error.popupNotSet) {
                      alert(i18n.error.popupNotSet + ": " + layer.title);
                    }
                  }
                }

              }
              layDetails.popupInfo = layer.popupInfo;
              layDetails.name = layer.title;
              layDetails.url = layer.layerObject.url;
              layDetails.layerObject = layer.layerObject;
              layDetails.layerOrder = f;
              if (layer.layerDefinition) {
                if (layer.layerDefinition.definitionExpression) {
                  layDetails.definitionExpression = layer.layerDefinition.definitionExpression;
                }
              }
              this.lookupLayers.push(layDetails);
              console.log(layer.title + " " + "set");

            }
          }
        }
        if (this.config.storeLocation === true && this.config.editingAllowed) {
          var fnd = false;

          if (this.config.serviceRequestLayerName.id !== undefined &&
            this.config.serviceRequestLayerName.id !== null) {
            if (layer.id === djString.trim(this.config.serviceRequestLayerName.id)) {

              this.serviceRequestLayerName = layer.layerObject;
              console.log("Service Request Layer set");

              array.forEach(this.config.serviceRequestLayerName.fields, function (field) {
                if (field.id === "serviceRequestLayerAvailibiltyField") {
                  fnd = true;

                  this.config.serviceRequestLayerAvailibiltyField = field.fields[0];

                }
              }, this);

              if (fnd === false) {
                alert(i18n.error.fieldNotFound + ": " +
                  this.config.serviceRequestLayerAvailibiltyField);

                console.log("Field not found.");

              }
            }
          } else {
            if (layer.title === djString.trim(this.config.serviceRequestLayerName)) {

              this.serviceRequestLayerName = layer.layerObject;
              console.log("Service Request Layer set");

              array.forEach(this.serviceRequestLayerName.fields, function (field) {
                if (field.name === this.config.serviceRequestLayerAvailibiltyField) {
                  fnd = true;
                }
              }, this);

              if (fnd === false) {
                alert(i18n.error.fieldNotFound + ": " +
                  this.config.serviceRequestLayerAvailibiltyField);

                console.log("Field not found.");

              }
            }
          }
        }
      }, this);
      return serviceAreaLayerNames;

    },
    _createToolbar: function () {
      this.toolbar = new Draw(this.map, { showTooltips: false });
      this.toolbar.on("draw-end", lang.hitch(this, this._drawEnd));

    },
    _emailclick: function () {
      if (this.map === null ||
        this.map.infoWindow === null ||
        this.map.infoWindow === undefined ||
        this.map.infoWindow.features === null ||
        this.map.infoWindow.features === undefined) {
        return;
      }

      if (this.map.infoWindow.features.length === 0) {
        return;
      }
      var uri = window.location.href;
      var params = {};
      var geo = this._getCenter(this.searchLoc);

      var geostring = geo.x + "," + geo.y;

      if (uri.indexOf("?") >= 0) {
        var urlParam = uri.split("?");
        uri = urlParam[0];
        params = dojo.queryToObject(urlParam[1]);

      }
      for (var key in params) {
        if (key !== null) {
          if (key !== "appid") {
            delete params[key];

          }
        }
      }
      params.location = geostring;

      // Assemble the new uri with its query string attached.
      var queryStr = ioQuery.objectToQuery(params);
      uri = uri + "?" + queryStr;
      var mailURL = "mailto:%20?subject={title}&body={url}";

      var fullLink = lang.replace(mailURL, {
        url: encodeURIComponent(uri),
        title: encodeURIComponent(document.title)
      });
      window.location.href = fullLink;


    },
    _linkclick: function () {
      if (this.map === null ||
        this.map.infoWindow === null ||
        this.map.infoWindow === undefined ||
        this.map.infoWindow.features === null ||
        this.map.infoWindow.features === undefined) {
        return;
      }

      if (this.map.infoWindow.features.length === 0) {
        return;
      }
      var uri = window.location.href;
      var params = {};
      var geo = this._getCenter(this.searchLoc);

      var geostring = geo.x + "," + geo.y;

      if (uri.indexOf("?") >= 0) {
        var urlParam = uri.split("?");
        uri = urlParam[0];
        params = dojo.queryToObject(urlParam[1]);

      }
      for (var key in params) {
        if (key !== null) {
          if (key !== "appid") {
            delete params[key];

          }
        }
      }
      params.location = geostring;
      //if (this.config.customUrlParam && this.config.customUrlParam !== null) {
      //  if (this.config.customUrlParam in params) {

      //    delete params[this.config.customUrlParam];
      //  }

      //}
      // Assemble the new uri with its query string attached.
      var queryStr = ioQuery.objectToQuery(params);
      uri = uri + "?" + queryStr;
      window.open(uri);


    },
    _initShareLink: function () {
      if (this.config.linksInPopup === null ||
        this.config.linksInPopup === undefined ||
        this.config.linksInPopup === false
        ) {
        //do nothing
      }
      else {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.esriPopup .actionsPane .zoomTo { display: none; }';
        document.getElementsByTagName('head')[0].appendChild(style);




        //.esriPopup .actionsPane .zoomTo {
        //  display: none;
        //}
        var linkText = "Link";
        var emailText = "Email";

        if (i18n) {
          if (i18n.share) {
            if (i18n.share.link) {
              linkText = i18n.share.link;
            }
            if (i18n.share.email) {
              emailText = i18n.share.email;
            }
          }
        }
        var link = dojo.create("a",
              { "class": "action link icon-link", "href": "javascript:void(0);" },
              dojo.query(".actionList", this.map.infoWindow.domNode)[0]);

        var email = dojo.create("a",
              { "class": "action email icon-mail-alt", "href": "javascript:void(0);" },
              dojo.query(".actionList", this.map.infoWindow.domNode)[0]);

        dojo.connect(link, "onclick", lang.hitch(this, this._linkclick));
        dojo.connect(email, "onclick", lang.hitch(this, this._emailclick));
      }

    },
    _drawEnd: function (evt) {
      this.showPopup(evt.geometry, "MapClick");
    },
    _processObject: function (obj, fieldName, layerName, matchName, oid) {
      try {
        var matchForRec = matchName;
        var re = null;
        for (var key in obj) {
          if (key !== null) {
            if (key === "type") {
              if (obj[key].indexOf("chart") > -1) {
                matchForRec = true;
              }
            }

            if (obj[key] !== null) {
              if (obj[key] instanceof Object) {
                if (key === "fields") {
                  obj[key] = this._processObject(obj[key], fieldName, layerName, true, oid);
                } else {
                  obj[key] = this._processObject(obj[key], fieldName, layerName, matchName, oid);
                }

              } else {
                if (obj[key] === fieldName && (matchName || key === "normalizeField")) {
                  obj[key] = layerName + "_" + oid + "_" + fieldName;
                } else {
                  re = new RegExp("{" + fieldName + "}", "gi");
                  if (typeof obj[key] === 'string') {
                    obj[key] = obj[key].replace(re, "{" +
                      layerName + "_" + oid +
                      "_" + fieldName + "}")
                      .replace(/&amp;/gi, "&").replace(/&lt;/gi, "<")
                      .replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
                  }
                }
              }
            }
          }
        }
        return obj;
      } catch (err) {
        console.log("_processObject error:" + err);
        return null;
      }
    },
    _layerSearchComplete: function (geo) {
      return function (result) {
        var finalFeatures = null;
        var finalFeature = null;
        if (result) {
          if (result.featureSet) {
            if (result.featureSet.features) {
              if (result.featureSet.features.length > 0) {
                finalFeatures = result.featureSet.features;
              }
            }
          } else if (result.features) {
            if (result.features.length > 0) {
              finalFeatures = result.features;
            }
          }
        }
        if (finalFeatures) {
          finalFeatures = array.filter(finalFeatures,
            lang.hitch(this, function (feature) {
              if (geo.type === 'point' && feature.geometry.type === 'polyline') {
                return true;
              }
              else {
                return geometryEngine.intersect(geo, feature.geometry);
              }
            }));
          if (finalFeatures && finalFeatures.length > 0) {
            finalFeature = finalFeatures[0];
          }
          //if (finalFeatures && finalFeatures.length > 0) {
          //  var dis = 9999;

          //  var interFeatures = array.forEach(finalFeatures, lang.hitch(this, function (feature) {
          //    var disFeat = geometryEngine.distance(geo, feature.geometry);
          //    if (disFeat < dis) {
          //      finalFeature = feature;
          //    }
          //  }));
          //}


          if (finalFeature) {
            if (this.searchLoc.type !== 'point') {
              this.searchLoc = finalFeature.geometry;
            }
            this.event = finalFeature.geometry;
            this.tempPopUp = this.searchByLayer;
            this.showPopupGeo(finalFeature.geometry, finalFeature);
            return;
          }
        }
        this._showNoSearchFeatureFound();
      };
    },
    _queryComplete: function (lookupLayer) {

      return function (result) {

        if (result.features.length > 0) {
          result.features = array.filter(result.features, lang.hitch(this, function (feature) {
            if (this.event.type === 'point' && feature.geometry.type === 'polyline') {
              return true;
            }
            else {
              return geometryEngine.intersect(this.event, feature.geometry);
            }
          }));

          this.resultCount = this.resultCount + result.features.length;

          this.results.push({ "results": result.features, "Layer": lookupLayer });
        }

        this.defCnt = this.defCnt - 1;
        if (this.defCnt === 0) {
          this._allQueriesComplate();

        }

      };
    },
    _randomstring: function (L) {
      var s = '';
      var randomchar = function () {
        var n = Math.floor(Math.random() * 62);
        if (n < 10) {
          return n;
        } //1-10
        if (n < 36) {
          return String.fromCharCode(n + 55);
        }//A-Z
        return String.fromCharCode(n + 61); //a-z
      };
      while (s.length < L) {
        s += randomchar();
      }
      return s;
    },
    promises: [],
    attLinks: "",
    _getAttachments: function (feature, layer) {
      var oid = this._getOID(feature, layer);
      if (!layer || !layer.layerObject) {
        return;
      }
      if (!layer.layerObject.queryAttachmentInfos) {
        return;
      }
      if (layer.layerObject.hasAttachments && layer.layerObject.hasAttachments === true) {
        this.promises.push(layer.layerObject.queryAttachmentInfos(
          oid,
          lang.hitch(this, this._onQueryAttachmentInfosComplete),
          lang.hitch(this, this._onQueryAttachmentsError))
          );
      }
    },
    _onQueryAttachmentsError: function (response) {
      console.log(response);
    },
    _onQueryAttachmentInfosComplete: function (response) {
      try {
        var listHtml = "<span><a class='attachLinks' href='${href}' target='_blank'>${name}</a>";
        var endHtml = "<br/></span>";
        var htmlMarkup = listHtml + endHtml;
        links = array.map(response, lang.hitch(this, function (info) {
          return djString.substitute(htmlMarkup, {
            href: info.url,
            name: info.name
          });
        }));
        this.attLinks = this.attLinks + links.join("");
      } catch (err) {
        console.log("_onQueryAttachmentInfosComplete error:" + err);
      }

      //this._uploadForm.style.display = "block";
      //if ((!this._featureCanUpdate && this._layerEditingCap[this._currentLayerId].canUpdate) ||
      //   (!this._layerEditingCap[this._currentLayerId].canCreate && !this._layerEditingCap[this._currentLayerId].canUpdate)) {
      //  htmlMarkup = this._listHtml + this._endHtml;
      //  this._uploadForm.style.display = "none";
      //}
      //else if (this._layerEditingCap[this._currentLayerId].canCreate && !this._layerEditingCap[this._currentLayerId].canUpdate) {
      //  htmlMarkup = this._listHtml + this._endHtml;
      //}
      //var list = this._attachmentList,
      //    links = array.map(response, lang.hitch(this, function (info) {
      //      return esriLang.substitute({
      //        href: info.url,
      //        name: info.name,
      //        oid: info.objectId,
      //        attid: info.id
      //      }, htmlMarkup);
      //    }));

      //list.innerHTML = links.join("") || this.NLS_none;
      //this._updateConnects();
    },
    _getOID: function (feature, layer) {
      var oid = null;
      if (layer.layerObject === undefined || layer.layerObject === null) {
        if (feature._layer !== undefined && feature._layer !== null) {
          if (feature._layer.hasOwnProperty("objectIdField")) {
            oid = feature.attributes[feature._layer.objectIdField];
          }

        }
      }
      else if (layer.layerObject.hasOwnProperty("objectIdField")) {
        oid = feature.attributes[layer.layerObject.objectIdField];
      }

      if (oid === null) {
        if (feature.attributes.hasOwnProperty("FID")) {
          oid = feature.attributes["FID"];
        }
        else if (feature.attributes.hasOwnProperty("OBJECTID")) {
          oid = feature.attributes["OBJECTID"];
        }
        else {
          oid = Math.random().toString(10).substr(2, 5);
        }
      }
      return oid;
    },
    _cloneAndRemoveRelationshipFields: function(fieldInfos){
      var newFieldArr = [];
      array.forEach(fieldInfos, function (fieldInfo) {
        if (fieldInfo.fieldName.indexOf('relationships/') === -1) {
          newFieldArr.push(lang.clone(fieldInfo));

        }     
      });
      return newFieldArr;
    },
    _getPopupForResult: function (feature, layer) {
      try {

        var popupInfo = layer.popupInfo;
        var rUrl = new RegExp("^(?:[a-z]+:)?//", "i");
        //var rFile = new RegExp("^([a-zA-Z]:|\\\\[a-z]+)?(\\|\/|\\\\|//)", "i");

        var replaceVal = Math.random().toString(36).substr(2, 5);
        var oid = null;
        oid = this._getOID(feature, layer);
        var replaceOID = replaceVal + "_" + oid + "_";
        var resultFeature = {};
        if (popupInfo !== null && popupInfo !== undefined) {
          if (popupInfo.showAttachments == true) {
            this._getAttachments(feature, layer);
          }
          var layerFields = this._cloneAndRemoveRelationshipFields(popupInfo.fieldInfos);//lang.clone(popupInfo.fieldInfos);

          var layerDescription = lang.clone(popupInfo.description);
          var popupTitle = lang.clone(popupInfo.title);
          var mediaInfos = lang.clone(popupInfo.mediaInfos);

          var layFldTable = "";
          var re = null;

          //var popupTemplate = new PopupTemplate(popupInfo);
          //var featureArray = [];
          //var content;
          //var editGraphic = new Graphic(feature.geometry, null,
          //  feature.attributes, popupTemplate);


          //featureArray.push(editGraphic);
          //this.map.infoWindow.setFeatures(featureArray);
          //this.map.infoWindow.resize();
          //content = this.map.infoWindow.getSelectedFeature().getContent();

          for (var g = 0, gl = layerFields.length; g < gl; g++) {
            if (mediaInfos !== null) {
              array.forEach(mediaInfos, function (mediaInfo) {
                mediaInfo = this._processObject(mediaInfo,
                  layerFields[g].fieldName, replaceVal,
                  false, oid);

              }, this);
            }

            if (popupInfo.description === null ||
              popupInfo.description === undefined) {

              re = new RegExp("{" + layerFields[g].fieldName + "}", "ig");

              popupTitle = popupTitle.replace(re, "{" +
                replaceOID +
                layerFields[g].fieldName + "}");

              if (layerFields[g].visible === true) {

                layFldTable = layFldTable + "<tr valign='top'>";
                if (layerFields[g].label !== null && layerFields[g].label !== "") {
                  layFldTable = layFldTable + "<td class='popName'>" +
                    layerFields[g].label + "</td>";
                } else {
                  layFldTable = layFldTable + "<td class='popName'>" +
                    layerFields[g].fieldName + "</td>";
                }
                layFldTable = layFldTable + "<td class='popValue'>" +
                  "{" + replaceVal + "_" +
                  oid + "_" +
                  layerFields[g].fieldName + "}</td>";
                layFldTable = layFldTable + "</tr>";

              }

            } else {
              re = new RegExp("{" + layerFields[g].fieldName + "}", "gi");

              layerDescription = layerDescription.replace(re, "{" + replaceVal + "_" +
                oid + "_" + layerFields[g].fieldName + "}");

            }
            var fldVal = feature.attributes[layerFields[g].fieldName];
            if (fldVal !== null && fldVal !== undefined) {


              fldVal = fldVal.toString();

              if (rUrl.test(fldVal)) {

                if (popupInfo.description === null ||
                  popupInfo.description === undefined) {
                  resultFeature[replaceVal + "_" +
                     oid + "_" +
                    layerFields[g].fieldName + "_" + "Hyper"] =
                    "<a target='_blank' href='" + fldVal + "'>" +
                    i18n.popup.urlMoreInfo + "</a>";

                  if (layFldTable.indexOf("{" + replaceVal +
                    "_" + oid +
                    "_" + layerFields[g].fieldName + "}") >= 0) {
                    layFldTable = layFldTable.replace("{" + replaceVal + "_" +
                      oid +
                      "_" + layerFields[g].fieldName + "}", "{" + replaceVal + "_" +
                      oid + "_" + layerFields[g].fieldName + "_" +
                      "Hyper" + "}");
                  }
                  resultFeature[replaceOID +
                    layerFields[g].fieldName] = fldVal;
                }
                else {
                  resultFeature[replaceOID +
                    layerFields[g].fieldName] = fldVal;
                }
              }
              else {
                resultFeature[replaceOID +
                  layerFields[g].fieldName] = fldVal;
              }
            }
            else {
              resultFeature[replaceOID +
                layerFields[g].fieldName] = fldVal;
            }
            layerFields[g].fieldName = replaceVal + "_" +
              oid +
              "_" + layerFields[g].fieldName;

          }
          if (popupInfo.description === null ||
            popupInfo.description === undefined) {
            var popupTable = "<div>";
            popupTable = popupTable +
              "<table class='popTable' cellpadding='0' cellspacing='0'>";
            popupTable = popupTable + "<tbody>";

            if (popupTitle !== "") {

              popupTable = popupTable + "<tr valign='top'>";
              popupTable = popupTable + "<td colspan='2' class='headerPopUp'>" +
                popupTitle + "</td>";

              popupTable = popupTable + "</tr>";
              popupTable = popupTable + "<tr>";

              popupTable = popupTable + "<td colspan='2' class='hzLinePopUp theme'></td>";
              popupTable = popupTable + "</tr>";
            }

            popupTable = popupTable + layFldTable;
            popupTable = popupTable + "</tbody></table>";

            popupTable = popupTable + "</div>";
            layerDescription = popupTable;
          }
          return {
            fields: layerFields,
            media: mediaInfos,
            desc: layerDescription,
            feature: resultFeature,
            newid: replaceOID

          };

        }

      } catch (err) {
        console.log("_getPopupForResult error:" + err);
      }
    },
    _allQueriesComplate: function () {
      try {
        this.promises = [];
        this.attLinks = "";
        var allFields = [];

        var allDescriptions = "";
        var popUpArray = {};
        var mediaArray = {};
        var resultFeature = {};
        var valToStore = null;
        var resultSum = {};
        for (var f = 0, fl = this.lookupLayers.length; f < fl; f++) {
          resultSum[this.lookupLayers[f].name] = 0;
        }

        var centr = this._getCenter(this.searchLoc);
        if (this.resultCount > 0) {

          //popUpArray.length = this.results.length;
          //mediaArray.length = this.results.length;
          console.log(this.results.length + " layers");

          array.forEach(this.results, function (result) {
            var layer = result.Layer;
            mediaArray[layer.layerOrder] = {};
            popUpArray[layer.layerOrder] = {};
            var layerName = layer.name === null ? layer.title : layer.name;
            console.log(result.results.length + " features found in " + layerName);
            array.forEach(result.results, function (feature) {
              //console.log("Feature with OBJECTID: " + feature.attributes.OBJECTID +
              //  " in " + layerName);
              if (layerName in resultSum) {
                resultSum[layerName] = resultSum[layerName] + 1;
              }
              else {
                resultSum[layerName] = 1;
              }
              var popDet = this._getPopupForResult(feature, layer);
              allFields = allFields.concat(popDet.fields);
              resultFeature = lang.mixin(resultFeature, popDet.feature);
              //oid = feature.attributes[result.Layer.layerObject.objectIdField];
              mediaArray[result.Layer.layerOrder][popDet.newid] = popDet.media;
              popUpArray[result.Layer.layerOrder][popDet.newid] = popDet.desc;
            }, this);
          }, this);

          var finalMedArr = [];
          var subkey, key, tmpMsg;
          for (key in popUpArray) {
            if (key !== null && key !== undefined) {
              if (popUpArray[key] !== null && popUpArray[key] !== undefined) {
                for (subkey in popUpArray[key]) {
                  if (subkey !== null && subkey !== undefined) {
                    if (popUpArray[key][subkey] !== null && popUpArray[key][subkey] !== undefined) {
                      allDescriptions = allDescriptions === "" ? popUpArray[key][subkey] :
                        allDescriptions + popUpArray[key][subkey];
                    }
                  }
                }
              }

            }
          }
          for (key in mediaArray) {
            if (key !== null && key !== undefined) {
              if (mediaArray[key] !== null && mediaArray[key] !== undefined) {
                for (subkey in mediaArray[key]) {
                  if (subkey !== null && subkey !== undefined) {
                    if (mediaArray[key][subkey] !== null &&
                      mediaArray[key][subkey] !== undefined) {
                      finalMedArr.push.apply(finalMedArr, mediaArray[key][subkey]);

                    }
                  }
                }
              }

            }
          }
          allDescriptions = "<div>" + allDescriptions + "</div>";
          //allDescriptions = "" + allDescriptions + "";
          var mp = webMercatorUtils.webMercatorToGeographic(centr);
          var find;
          var regex;
          if (this.config.popPreMessage !== null) {
            if (this.config.popPreMessage.indexOf('{<') > 0) {
              regex = new RegExp('{<', "gi");
              console.warn("Invalid text in the beginning pop up description." +
                " Removing bad value.  This might be caused by string formatting between {}." +
                " Character " + this.config.popPreMessage.indexOf('{<').toString());
              this.config.popPreMessage = this.config.popPreMessage.replace(regex, "<");
            }
            tmpMsg = this.config.popPreMessage.replace(/{IL_XCOORD}/gi, centr.x).replace(/{IL_YCOORD}/gi, centr.y);
            tmpMsg = tmpMsg.replace(/{IL_LAT}/gi, mp.y).replace(/{IL_LONG}/gi, mp.x);
            for (key in resultSum) {
              if (key !== null && key !== undefined) {

                find = "{" + key + "}";
                regex = new RegExp(find, "gi");
                tmpMsg = tmpMsg.replace(regex, resultSum[key]);

              }
            }
            allDescriptions = "<div>" + tmpMsg + "</div>" + allDescriptions;
          }
          if (this.config.popPostMessage !== null &&
            this.config.popPostMessage !== undefined) {
            if (this.config.popPostMessage.indexOf('{<') > 0) {
              regex = new RegExp('{<', "gi");
              console.warn("Invalid text in the beginning pop up description." +
                " Removing bad value.  This might be caused by string formatting between {}." +
                " Character " + this.config.popPostMessage.indexOf('{<').toString());
              this.config.popPostMessage = this.config.popPostMessage.replace(regex, "<");
            }
            tmpMsg = this.config.popPostMessage.replace(/{IL_XCOORD}/gi, centr.x)
              .replace(/{IL_YCOORD}/gi, centr.y);
            tmpMsg = tmpMsg.replace(/{IL_LAT}/gi, mp.y).replace(/{IL_LONG}/gi, mp.x);

            for (key in resultSum) {
              if (key !== null && key !== undefined) {

                find = "{" + key + "}";
                regex = new RegExp(find, "gi");
                tmpMsg = tmpMsg.replace(regex, resultSum[key]);

              }
            }
            allDescriptions = allDescriptions + "<div>" + tmpMsg + "</div>";
          }
          if (this.searchByFeature !== null && this.searchByFeature !== undefined) {
            if (this.tempPopUp !== null && this.tempPopUp !== undefined) {

              if (allDescriptions.indexOf("{IL_SEARCHBY}") >= 0) {
                var searchByPopup = this._getPopupForResult(this.searchByFeature, this.tempPopUp);
                allDescriptions = allDescriptions.replace(/{IL_SEARCHBY}/gi, searchByPopup.desc);
                allFields = allFields.concat(searchByPopup.fields);
                resultFeature = lang.mixin(resultFeature, searchByPopup.feature);
              }
            }
            if (this.searchByFeature.attributes !== null &&
              this.searchByFeature.attributes !== undefined) {
              for (key in this.searchByFeature.attributes) {
                if (key !== null && key !== undefined) {
                  var fldname = "{" + key + "}";
                  if (allDescriptions.indexOf(fldname) >= 0) {
                    regex = new RegExp(fldname, "gi");
                    allDescriptions = allDescriptions.replace(regex,
                      this.searchByFeature.attributes[key]);
                  }
                }
              }
            }
          }

          var finalDes = allDescriptions.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
          if (this.promises.length > 0) {
            all(this.promises).then(lang.hitch(this, function (results) {
              var attachmentText = "<br/><span><b>" + i18n.popup.attachments + ":" + "</b><br/></span>" + this.attLinks.replace(/&amp;/gi, "&")
                .replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
              finalDes = finalDes + attachmentText;
              this._showFinalResults(
                this.config.popupTitle,
                allFields,
                finalDes,
                finalMedArr,
                this.config.serviceRequestLayerAvailibiltyFieldValueAvail,
                resultFeature,
                centr
                );
            }));
          }
          else {
            this._showFinalResults(
              this.config.popupTitle,
              allFields,
              finalDes,
              finalMedArr,
              this.config.serviceRequestLayerAvailibiltyFieldValueAvail,
              resultFeature,
              centr
              );
          }
        }
        else {
          this._showFinalResults(
          this.config.serviceUnavailableTitle,
          allFields,
          this.config.serviceUnavailableMessage.replace(/&amp;/gi, "&")
            .replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"),
          mediaArray,
          this.config.serviceRequestLayerAvailibiltyFieldValueNotAvail,
          resultFeature,
          centr
          );
        }

      } catch (err) {
        console.log(err);

      }
    },
    _showFinalResults: function (title, fieldInfos, description, mediaInfos, valToStore, resultFeature, centr) {
      var atts = {};

      this.popupTemplate = new PopupTemplate({
        title: title,
        fieldInfos: fieldInfos,
        description: description,
        mediaInfos: mediaInfos
      });
      valToStore = valToStore;

      var featureArray = [];
      var content;
      var editGraphic = new Graphic(this.event, this._getSymbol(),
        resultFeature, this.popupTemplate);

      if (this.showGraphic === true) {
        this.map.graphics.add(editGraphic);
      }
      featureArray.push(editGraphic);

      this.map.infoWindow.setFeatures(featureArray);
      if (this.config.popupWidth !== null && this.config.popupHeight !== null) {
        this.map.infoWindow.resize(this.config.popupWidth, this.config.popupHeight);
      } else if (this.config.popupWidth !== null) {
        this.map.infoWindow.resize(this.config.popupWidth, this.map.infoWindow._maxHeight);
      } else {
        this.map.infoWindow.resize();
      }
      if (this.config.storeLocation === true && this.config.editingAllowed) {
        atts[this.config.serviceRequestLayerAvailibiltyField] = valToStore;
        this._logRequest(centr, atts);
      }
      var def;
      var ext = this._getExtent(this.event);
      if (ext === null) {
        def = this.map.centerAndZoom(centr, this.config.zoomLevel);

      } else {
        if (this.map._fixExtent(ext, true).lod.level > this.config.zoomLevel) {
          def = this.map.centerAndZoom(centr, this.config.zoomLevel);
        }
        else {
          def = this.map.setExtent(ext, true);
        }


      }
      def.addCallback(lang.hitch(this, function () {
        topic.publish("app.toggleIndicator", false);

        this.tempPopUp = null;
        if (this.contentWindow) {
          content = this.map.infoWindow.getSelectedFeature().getContent();

          this.contentWindow.set("content", content);
          if (this.config.color !== null && this.config.color !== undefined) {
            djquery(".hzLinePopUp").style("border-color",
              this.config.color.toString() + " !important");

            djquery(".esriViewPopup .hzLine").style("border-color",
              this.config.color.toString() + " !important");
          }

          topic.publish("app.contentSet", false);
        } else {

          this.map.infoWindow.show(centr);
        }
      }));

    },
    _showNoSearchFeatureFound: function () {
      var centr = this._getCenter(this.searchLoc);

      var title;
      if (this.config.noSearchFeatureTitle) {
        title = this.config.noSearchFeatureTitle;
      }
      else {
        title = this.config.serviceUnavailableTitle;
      }
      var desc;
      if (this.config.noSearchFeatureMessage) {
        desc = this.config.noSearchFeatureMessage.replace(/&amp;/gi, "&")
          .replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
      }
      else {
        desc = this.config.serviceUnavailableMessage.replace(/&amp;/gi, "&")
          .replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
      }

      this.popupTemplate = new PopupTemplate({
        title: title,
        fieldInfos: null,
        description: desc,
        mediaInfos: null
      });
      var editGraphic = new Graphic(this.event, this._getSymbol(), null, this.popupTemplate);
      // this.map.infoWindow.highlight = false;
      //this.map.infoWindow._highlighted = undefined;

      if (this.showGraphic === true) {
        this.map.graphics.add(editGraphic);
      }
      var featureArray = [];
      featureArray.push(editGraphic);

      this.map.infoWindow.setFeatures(featureArray);
      var atts = {};
      //this.map.infoWindow.show(editGraphic.geometry);
      if (this.config.popupWidth !== null && this.config.popupHeight !== null) {
        this.map.infoWindow.resize(this.config.popupWidth, this.config.popupHeight);
      } else if (this.config.popupWidth !== null) {
        this.map.infoWindow.resize(this.config.popupWidth, this.map.infoWindow._maxHeight);
      } else {
        this.map.infoWindow.resize();
      }
      if (this.config.storeLocation === true && this.config.editingAllowed) {
        if (this.config.serviceRequestLayerAvailibiltyFieldValueNoSearch) {
          atts[this.config.serviceRequestLayerAvailibiltyField] =
            this.config.serviceRequestLayerAvailibiltyFieldValueNoSearch;

        }
        else {
          atts[this.config.serviceRequestLayerAvailibiltyField] =
            this.config.serviceRequestLayerAvailibiltyFieldValueNotAvail;
        }

        this._logRequest(centr, atts);
      }
      var ext = this._getExtent(this.event);
      var def = null;
      if (ext === null) {
        def = this.map.centerAndZoom(centr, this.config.zoomLevel);

      } else {
        if (this.map._fixExtent(ext, true).lod.level > this.config.zoomLevel) {
          def = this.map.centerAndZoom(centr, this.config.zoomLevel);
        }
        else {
          def = this.map.setExtent(ext, true);
        }


      }
      def.addCallback(lang.hitch(this, function () {
        topic.publish("app.toggleIndicator", false);

        if (this.contentWindow) {
          this.contentWindow.set("content",
            this.map.infoWindow.getSelectedFeature().getContent());
          if (this.config.color !== null && this.config.color !== undefined) {
            djquery(".hzLinePopUp").style("border-color",
              this.config.color.toString() + " !important");

            djquery(".esriViewPopup .hzLine").style("border-color",
              this.config.color.toString() + " !important");
          }

          topic.publish("app.contentSet", false);
        } else {
          this.map.infoWindow.show(centr);
        }

      }));
    },
    _processResults: function (features) {
      return dojo.map(features, function (feature) {

        return feature;
      });
    },
    _logRequest: function (geom, atts) {
      if (this.serviceRequestLayerName !== null) {
        if (this.serviceRequestLayerName.isEditable() === true) {
          if (this.serviceRequestLayerName.geometryType === "esriGeometryPoint") {
            var serviceLocation = new Graphic(geom, null, atts);
            var editDeferred = this.serviceRequestLayerName.applyEdits([serviceLocation],
              null, null);

            editDeferred.addCallback(lang.hitch(this, function (result) {
              console.log(result);
            }));
            editDeferred.addErrback(function (error) {
              console.log(error);
            });
          }
        }
      }

    },
    _createSymbols: function () {
      this.markerSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 20,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255]), 2),
        new Color([0, 0, 0, 0]));

      // lineSymbol used for freehand polyline, polyline and line.
      this.lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
        new Color([0, 255, 255]), 1);

      this.fillSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
          new Color([0, 255, 255]), 1), new Color([255, 255, 0, 0])
       );
    },
    _getSymbol: function () {
      if (this.event.type === "point") {
        return this.markerSymbol;
      } else if (this.event.type === "polygon") {
        return this.fillSymbol;
      } else if (this.event.type === "polyline") {
        return this.lineSymbol;
      }
    }

  });
});