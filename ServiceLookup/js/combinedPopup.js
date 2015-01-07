
define([
    "dojo/Evented",
    "dojo",
    "dijit",
    "esri",
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/on",
    "dojo/topic",
    "dojo/json",
    "esri/geometry",
    "esri/geometry/Extent",
    "esri/geometry/Point",
    "esri/graphic",
    "esri/toolbars/draw",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/tasks/QueryTask",
    "esri/tasks/query",
    "esri/dijit/PopupTemplate",
    "dojo/string",
    "dojo/i18n!application/nls/resources"

], function (
    Evented,
    dojo,
    dijit,
    esri,
    ready,
    declare,
    lang,
    array,
    on,
    topic,
    JSON,
    Geometry,
    Extent,
    Point,
    Graphic,
    Draw,
    SimpleMarkerSymbol,
    QueryTask,
    Query,
    PopupTemplate,
    String,
    i18n
) {
    return declare([Evented], {
        config: {},
        map: null,
        layers: null,
        handler: null,
        options: {
            showGraphic: true
        },
        constructor: function (map, config, layers, handler, options) {
            this.map = map;
            this.config = config;
            this.layers = layers;
            this.handler = handler;
            var defaults = lang.mixin({}, this.options, options);
            // properties
            this.showGraphic = defaults.showGraphic;

        },
        startup: function () {
            //disconnect the popup handler
            if (this.handler != null) {
                this.handler.remove();
            }
            topic.subscribe("app/mapLocate", lang.hitch(this, this._mapLocate));

            this._initPopup();
            this._createToolbar();
            this._initGraphic();
            this.map.infoWindow.on("hide", lang.hitch(this, this._infoHide));

            this.emit("ready", { "Name": "CombinedPopup" });
            if (this.config.location) {
                var e = this.config.location.split(",");
                if (e.length === 2) {
                    var point = new Point(parseFloat(e[0]), parseFloat(e[1]), this.map.spatialReference);
                    this.showPopup(point);
                }

            }

        },
        _mapLocate: function () {

            this.showPopup(arguments[0]);

        },
        showPopup: function (evt) {
            if (this.lookupLayers === undefined) {
                return;
            }
            if (this.lookupLayers == null) {
                return;
            }
            if (this.lookupLayers.length === 0) {
                return;
            }
            topic.publish("app\toggleIndicator", true);
            this.map.infoWindow.hide();
            this.map.infoWindow.highlight = false;
            if (this.showGraphic === true) {
                this.map.graphics.clear();
            }

            //query to determine popup 
            var query = new Query();
            var queryTask;

            this.event = evt;
            this.results = [];
            if (this.lookupLayers == null) {
                return null;
            }

            this.defCnt = this.lookupLayers.length;
            var queryDeferred;
            for (var f = 0, fl = this.lookupLayers.length; f < fl; f++) {
                if (this.lookupLayers[f].url == null) {
                    var extent = new Extent({
                        "xmin": evt.x, "ymin": evt.y, "xmax": evt.x, "ymax": evt.y,
                        "spatialReference": evt.spatialReference
                    });
                    query = new Query();
                    query.geometry = extent;
                    query.geometryType = "esriGeometryExtent";
                    query.outFields = ["*"];

                    queryDeferred = this.lookupLayers[f].layer.layerObject.queryFeatures(query);
                    queryDeferred.addCallback(lang.hitch(this, this._queryComplete(this.lookupLayers[f])));

                    queryDeferred.addErrback(lang.hitch(this, function (error) {
                        console.log(error);
                        this.defCnt = this.defCnt - 1;
                        if (this.defCnt === 0) {
                            this._allQueriesComplate();
                        }

                    }));
                } else {
                    query = new Query();

                    query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS;
                    query.geometry = evt;
                    query.outSpatialReference = this.map.spatialReference;
                    query.geometryType = "esriGeometryPoint";
                    query.outFields = ["*"];

                    queryTask = new QueryTask(this.lookupLayers[f].url);
                    queryDeferred = queryTask.execute(query);
                    queryDeferred.addCallback(lang.hitch(this, this._queryComplete(this.lookupLayers[f])));

                    queryDeferred.addErrback(lang.hitch(this, function (error) {
                        console.log(error);
                        this.defCnt = this.defCnt - 1;
                        if (this.defCnt === 0) {
                            this._allQueriesComplate();
                        }

                    }));
                }
            }
        },
        enableMapClick: function () {
            this.toolbar.activate(Draw.POINT);

        },
        disableMapClick: function () {
            this.toolbar.deactivate();

        },
        _infoHide: function () {
            if (this.map.graphics != null) {
                this.map.graphics.clear();
            }
        },
        _initPopup: function () {

            var serviceAreaLayerNames = [];
            this.popupMedia = [];
            if (this.config.serviceAreaLayerNamesSelector === null) {
                this.config.serviceAreaLayerNamesSelector = "";
            }
            if (this.config.serviceAreaLayerNamesSelector === undefined) {
                this.config.serviceAreaLayerNamesSelector = "";
            }

            if (String.trim(this.config.serviceAreaLayerNamesSelector) === "") {
                if (String.trim(this.config.serviceAreaLayerNames) === "") {
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
                layers = dojo.fromJson(this.config.serviceAreaLayerNamesSelector);
                array.forEach(layers, function (layer) {
                    serviceAreaLayerNames.push(layer.id);
                });



            }



            this.lookupLayers = [];
            var layDetails = {};
            var f = 0, fl = 0;

            for (f = 0, fl = serviceAreaLayerNames.length; f < fl; f++) {
                layDetails = {};
                serviceAreaLayerNames[f] = String.trim(serviceAreaLayerNames[f]);

                array.forEach(this.layers, function (layer) {

                    if (layer.featureCollection != null) {
                        if (layer.featureCollection.layers != null) {
                            array.forEach(layer.featureCollection.layers, function (subLyrs) {
                                if (subLyrs.layerObject != null) {

                                    if (layer.title == serviceAreaLayerNames[f] || layer.id == serviceAreaLayerNames[f]) {
                                        serviceAreaLayerNames[f] = layer.title;
                                        layDetails.name = layer.title;
                                        layDetails.layerOrder = f;
                                        layDetails.url = subLyrs.layerObject.url;
                                        layDetails.layer = subLyrs;
                                        console.log(serviceAreaLayerNames[f] + " " + "set");

                                        layDetails.popupInfo = subLyrs.popupInfo;
                                        if (layDetails.popupInfo == null) {
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
                    } else if (layer.layerObject != null) {
                        if (layer.layerObject.layerInfos != null) {
                            array.forEach(layer.layerObject.layerInfos, function (subLyrs) {
                                if (subLyrs.name == serviceAreaLayerNames[f] || subLyrs.id == serviceAreaLayerNames[f]) {
                                    serviceAreaLayerNames[f] = subLyrs.name;
                                    layDetails.name = subLyrs.name;
                                    layDetails.layerOrder = f;
                                    layDetails.url = layer.layerObject.url + "/" + subLyrs.id;

                                    console.log(serviceAreaLayerNames[f] + " " + "set");

                                    if (layer.layers != null) {
                                        array.forEach(layer.layers, function (popUp) {
                                            if (subLyrs.id == popUp.id) {
                                                layDetails.popupInfo = popUp.popupInfo;
                                            }
                                        }, this);
                                    }
                                    if (layDetails.popupInfo == null) {
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
                            if (layer.title == serviceAreaLayerNames[f] || layer.id == serviceAreaLayerNames[f]) {
                                serviceAreaLayerNames[f] = layer.title;
                                if (layer.popupInfo == null) {
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
                                layDetails.layerOrder = f;
                                this.lookupLayers.push(layDetails);
                                console.log(layer.title + " " + "set");

                            }
                        }
                    }
                    if (this.config.storeLocation === true && this.config.editingAllowed) {
                        var fnd = false;

                        if (this.config.serviceRequestLayerName.id !== undefined) {

                            if (layer.id == String.trim(this.config.serviceRequestLayerName.id)) {

                                this.serviceRequestLayerName = layer.layerObject;
                                console.log("Service Request Layer set");

                                array.forEach(this.config.serviceRequestLayerName.fields, function (field) {
                                    if (field.id == "serviceRequestLayerAvailibiltyField") {
                                        fnd = true;

                                        this.config.serviceRequestLayerAvailibiltyField = field.fields[0];

                                    }
                                }, this);

                                if (fnd === false) {
                                    alert(i18n.error.fieldNotFound + ": " + this.config.serviceRequestLayerAvailibiltyField);

                                    console.log("Field not found.");

                                }
                            }
                        } else {
                            if (layer.title == String.trim(this.config.serviceRequestLayerName)) {

                                this.serviceRequestLayerName = layer.layerObject;
                                console.log("Service Request Layer set");

                                array.forEach(this.serviceRequestLayerName.fields, function (field) {
                                    if (field.name == this.config.serviceRequestLayerAvailibiltyField) {
                                        fnd = true;
                                    }
                                }, this);

                                if (fnd === false) {
                                    alert(i18n.error.fieldNotFound + ": " + this.config.serviceRequestLayerAvailibiltyField);

                                    console.log("Field not found.");

                                }
                            }
                        }
                    }
                }, this);
            }

            var useLegacyConfig = false;

            if (this.lookupLayers.length === 0 && this.config.serviceAreaLayerName != null) {
                layDetails = {};

                array.forEach(this.layers, function (layer) {

                    this.config.serviceAreaLayerName = String.trim(this.config.serviceAreaLayerName);
                    if (layer.layerObject.layerInfos != null) {
                        array.forEach(layer.layerObject.layerInfos, function (subLyrs) {
                            if (subLyrs.name == this.config.serviceAreaLayerName) {
                                layDetails.name = subLyrs.name;
                                layDetails.layerOrder = 0;

                                layDetails.url = layer.layerObject.url + "/" + subLyrs.id;

                                console.log(this.config.serviceAreaLayerName + " " + "set");

                                if (layer.layers != null) {
                                    array.forEach(layer.layers, function (popUp) {
                                        if (subLyrs.id == popUp.id) {
                                            layDetails.popupInfo = popUp.popupInfo;
                                        }
                                    }, this);
                                }
                                if (layDetails.popupInfo == null) {
                                    alert(i18n.error.popupNotSet + ": " + subLyrs.name);
                                }
                                this.lookupLayers.push(layDetails);
                                useLegacyConfig = true;
                            }
                        }, this);
                    } else {

                        if (layer.title == this.config.serviceAreaLayerName) {
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
            if (this.serviceRequestLayerName === undefined && this.config.storeLocation === true && this.config.editingAllowed) {
                if (this.config.serviceRequestLayerName.id !== undefined) {
                    alert(i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName.id);
                } else {
                    alert(i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName);
                }
                console.log("Layer name not found.");

            }

        },
        _createToolbar: function () {
            this.toolbar = new Draw(this.map, { showTooltips: false });
            this.toolbar.on("draw-end", lang.hitch(this, this._drawEnd));

        },
        _initGraphic: function () {
            this.editSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375z").setSize(24).setColor(new dojo.Color([255, 0, 0]));
            this.editSymbol.setOutline(new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375zM22.979,26.209l-2.664-8.205l6.979-5.062h-8.627L16,4.729l-2.666,8.206H4.708l6.979,5.07l-2.666,8.203L16,21.146L22.979,26.209L22.979,26.209z").setSize(26).setColor(new dojo.Color([0, 255, 0])));

            this.editSymbolAvailable = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375z").setSize(24).setColor(new dojo.Color([0, 255, 0]));
            this.editSymbolAvailable.setOutline(new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375zM22.979,26.209l-2.664-8.205l6.979-5.062h-8.627L16,4.729l-2.666,8.206H4.708l6.979,5.07l-2.666,8.203L16,21.146L22.979,26.209L22.979,26.209z").setSize(26).setColor(new dojo.Color([0, 255, 0])));

        },
        _drawEnd: function (evt) {
            this.showPopup(evt.geometry);
        },
        _processObject: function (obj, fieldName, layerName, matchName) {
            var matchForRec = matchName;
            var re = null;
            for (var key in obj) {
                if (key !== null) {
                    if (key == "type") {
                        if (obj[key].indexOf("chart") > -1) {
                            matchForRec = true;
                        }
                    }

                    if (obj[key] != null) {
                        if (obj[key] instanceof Object) {
                            if (key == "fields") {
                                obj[key] = this._processObject(obj[key], fieldName, layerName, true);
                            } else {
                                obj[key] = this._processObject(obj[key], fieldName, layerName, matchName);
                            }

                        } else {
                            if (obj[key] == fieldName && (matchName || key == "normalizeField")) {
                                obj[key] = layerName + "_" + fieldName;
                            } else {
                                re = new RegExp("{" + fieldName + "}", "g");
                                obj[key] = obj[key].replace(re, "{" + layerName + "_" + fieldName + "}").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
                            }
                        }
                    }
                }
            }
            return obj;

        },
        _queryComplete: function (lookupLayer) {

            return function (result) {

                if (result.features.length > 0) {
                    this.results.push({ "results": result.features, "Layer": lookupLayer });
                }

                this.defCnt = this.defCnt - 1;
                if (this.defCnt === 0) {
                    this._allQueriesComplate();
                    topic.publish("app\toggleIndicator", false);
                }

            };
        },
        _allQueriesComplate: function () {
            try {
                if (this.results != null) {
                    var atts = {};
                    var re = null;
                    if (this.results.length > 0) {
                        var allFields = [];

                        var allDescriptions = "";
                        var popUpArray = [];
                        var mediaArray = [];
                        var resultFeature = {};

                        popUpArray.length = this.results.length;
                        mediaArray.length = this.results.length;
                        array.forEach(this.results, function (result) {
                            if (result.Layer.popupInfo != null) {
                                var resetFieldNames = result.Layer.popupInfo.fieldInfos;
                                for (var r = 0, rl = resetFieldNames.length; r < rl; r++) {
                                    resetFieldNames[r].fieldName = resetFieldNames[r].fieldName.replace(result.Layer.name + "_", "");

                                }

                                //result.Layer.popupInfo.fieldInfos;
                                var layerFields = result.Layer.popupInfo.fieldInfos;
                                var layerDescription = result.Layer.popupInfo.description;
                                var popupTitle = result.Layer.popupInfo.title;
                                var mediaInfos = lang.clone(result.Layer.popupInfo.mediaInfos);

                                var layFldTable = "";

                                for (var g = 0, gl = layerFields.length; g < gl; g++) {
                                    if (mediaInfos != null) {
                                        array.forEach(mediaInfos, function (mediaInfo) {
                                            mediaInfo = this._processObject(mediaInfo, layerFields[g].fieldName, result.Layer.name, false);

                                        }, this);
                                    }

                                    if (result.Layer.popupInfo.description == null) {
                                        re = new RegExp("{" + layerFields[g].fieldName + "}", "g");

                                        popupTitle = popupTitle.replace(re, "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}");

                                        if (layerFields[g].visible === true) {

                                            //this.layerDescription = layerFields[g].fieldName + ": " + "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}<br>";
                                            layFldTable = layFldTable + "<tr valign='top'>";
                                            if (layerFields[g].label != null) {
                                                layFldTable = layFldTable + "<td class='popName'>" + layerFields[g].label + "</td>";
                                            } else {
                                                layFldTable = layFldTable + "<td class='popName'>" + layerFields[g].fieldName + "</td>";
                                            }
                                            layFldTable = layFldTable + "<td class='popValue'>" + "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}</td>";
                                            layFldTable = layFldTable + "</tr>";

                                        }

                                    } else {
                                        re = new RegExp("{" + layerFields[g].fieldName + "}", "g");

                                        layerDescription = layerDescription.replace(re, "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}");

                                    }
                                    resultFeature[result.Layer.name + "_" + layerFields[g].fieldName] = result.results[0].attributes[layerFields[g].fieldName];
                                    layerFields[g].fieldName = result.Layer.name + "_" + layerFields[g].fieldName;

                                }
                                if (result.Layer.popupInfo.description === null) {
                                    var popupTable = "<div class=''>";
                                    popupTable = popupTable + "<table class='popTable' cellpadding='0' cellspacing='0'>";
                                    popupTable = popupTable + "<tbody>";

                                    if (popupTitle !== "") {

                                        popupTable = popupTable + "<tr valign='top'>";
                                        popupTable = popupTable + "<td colspan='2'  class='headerPopUp'>" + popupTitle + "</td>";

                                        popupTable = popupTable + "</tr>";
                                        popupTable = popupTable + "<tr>";
                                        popupTable = popupTable + "<td colspan='2' class='hzLinePopUp'></td>";

                                        popupTable = popupTable + "</tr>";
                                    }

                                    popupTable = popupTable + layFldTable;
                                    popupTable = popupTable + "</tbody>";

                                    popupTable = popupTable + "</div>";
                                    layerDescription = popupTable;
                                }

                                allFields = allFields.concat(layerFields);

                                mediaArray[result.Layer.layerOrder] = mediaInfos;
                                popUpArray[result.Layer.layerOrder] = layerDescription;
                            }

                        }, this);

                        var finalMedArr = [];

                        array.forEach(popUpArray, function (descr) {
                            if (descr != null) {
                                allDescriptions = allDescriptions === "" ? descr : allDescriptions + descr;
                            }
                        }, this);
                        array.forEach(mediaArray, function (mediaInfos) {
                            finalMedArr.push.apply(finalMedArr, mediaInfos);

                        }, this);

                        ////Make single Array of fields
                        this.popupTemplate = new PopupTemplate({
                            title: this.config.popupTitle,
                            fieldInfos: allFields,
                            description: allDescriptions.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"),
                            mediaInfos: finalMedArr
                        });

                    }
                    var featureArray = [];
                    if (this.results.length === 0) {
                        
                        var editGraphic = new Graphic(this.event, this.editSymbol, null, null);
                        this.map.infoWindow.highlight = false;
                        this.map.infoWindow._highlighted = undefined;

                        if (this.showGraphic === true) {
                            this.map.graphics.add(editGraphic);
                        }
                        featureArray.push(editGraphic);

                        this.map.infoWindow.setFeatures(featureArray);
                        this.map.infoWindow.setTitle(this.config.serviceUnavailableTitle);
                        this.map.infoWindow.setContent(this.config.serviceUnavailableMessage.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"));
                        this.map.infoWindow.show(editGraphic.geometry);
                        if (this.config.popupWidth != null && this.config.popupHeight != null) {
                            this.map.infoWindow.resize(this.config.popupWidth, this.config.popupHeight);
                        } else if (this.config.popupWidth != null) {
                            this.map.infoWindow.resize(this.config.popupWidth, this.map.infoWindow._maxHeight);
                        } else {
                            this.map.infoWindow.resize();
                        }
                        if (this.config.storeLocation === true && this.config.editingAllowed) {
                            atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueNotAvail;
                            this._logRequest(this.event, atts);
                        }

                    } else {

                        editGraphic = new Graphic(this.event, this.editSymbolAvailable, resultFeature, this.popupTemplate);
                        featureArray.push(editGraphic);
                        this.map.infoWindow.highlight = false;
                        this.map.infoWindow._highlighted = undefined;
                        if (this.showGraphic === true) {

                            this.map.graphics.add(editGraphic);
                        }

                        this.map.infoWindow.setFeatures(featureArray);
                        this.map.infoWindow.show(editGraphic.geometry);
                        if (this.config.popupWidth != null && this.config.popupHeight != null) {
                            this.map.infoWindow.resize(this.config.popupWidth, this.config.popupHeight);
                        } else if (this.config.popupWidth != null) {
                            this.map.infoWindow.resize(this.config.popupWidth, this.map.infoWindow._maxHeight);

                        } else {
                            this.map.infoWindow.resize();
                        }
                        if (this.config.storeLocation === true && this.config.editingAllowed) {
                            atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueAvail;
                            this._logRequest(this.event, atts);
                        }
                    }
                    this.map.centerAndZoom(this.event, this.config.zoomLevel);

                }

            } catch (err) {
                console.log(err);
            }
        },
        _processResults: function (features) {
            return dojo.map(features, function (feature) {

                return feature;
            });
        },
        _logRequest: function (geom, atts) {
            if (this.serviceRequestLayerName != null) {
                if (this.serviceRequestLayerName.isEditable() === true) {
                    if (this.serviceRequestLayerName.geometryType == "esriGeometryPoint") {
                        //var point = new Geometry.Point(evt.x, evt.y, new esri.SpatialReference({ wkid: 102100}));

                        var serviceLocation = new Graphic(geom, null, atts);

                        var editDeferred = this.serviceRequestLayerName.applyEdits([serviceLocation], null, null);

                        editDeferred.addCallback(lang.hitch(this, function (result) {
                            console.log(result);
                        }));
                        editDeferred.addErrback(function (error) {
                            console.log(error);
                        });
                    }
                }
            }

        }

    });
});
