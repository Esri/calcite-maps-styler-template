define([
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "esri/arcgis/utils",
    "esri/IdentityManager",
    "dojo/on",
    "esri/dijit/Geocoder",
    "dojo/_base/array",
    "esri/graphic",
    "esri/toolbars/draw",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/layers/GraphicsLayer",
    "esri/tasks/QueryTask",
    "esri/tasks/query",
    "esri/InfoTemplate",
    "esri/dijit/LocateButton",
    "esri/geometry",
    "esri/dijit/PopupTemplate",
    "dojo/string",
     "esri/lang",
     "dojo/json"
],
function (
    ready,
    declare,
    lang,
    arcgisUtils,
    IdentityManager,
    on,
    Geocoder,
    array,
    Graphic,
    Draw,
    SimpleMarkerSymbol,
    GraphicsLayer,  
    QueryTask,
    Query,
    InfoTemplate,
    LocateButton,
    Geometry,
    PopupTemplate,
    String,
    esriLang,
    JSON
) {


    return declare("", null, {
        config: {},
        constructor: function (config) {
            //config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information. 
            this.config = config;
            // document ready
            ready(lang.hitch(this, function () {
             //supply either the webmap id or, if available, the item info 
                var itemInfo = this.config.itemInfo || this.config.webmap;
                this._createWebMap(itemInfo);
            }));
        },
        _mapLoaded: function () {
            // Map is ready
            console.log('map loaded');
            this._createLocatorButton();
            this._createGeocoder();

            this._initMap();
            this._createToolbar();
            this._initGraphic();

        },
        _createLocatorButton: function () {

            this.geoLocate = new LocateButton({
                map: this.map,
                pointerGraphic: null,
                centerAt: false,
                highlightLocation: false,
                setScale: false
            }, "LocateButton");


            on(this.geoLocate, "locate", lang.hitch(this, function (location) {
                this.geoLocate.clear();
                if (location.error != null) {
                    alert(location.error);

                }
                else {
                    var point = new Geometry.Point({ "x": location.position.coords.longitude, "y": location.position.coords.latitude, " spatialReference": { " wkid": 4326 } });

                    this._addToMap(point);
                }
            }));


            this.geoLocate.startup();
        },
        _createGeocoderOptions: function () {
            var options, geocoders = lang.clone(this.config.helperServices.geocode);
            // each geocoder
            if (geocoders.length == 0) { return null; }

            array.forEach(geocoders, function (geocoder) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    geocoder.placefinding = true;
                    geocoder.placeholder = this.config.i18n.geocoder.defaultText;

                }
                else {
                    geocoder.suggest = true;
                }
                //geocoder.searchExtent = this.map.extent;
            }, this);

            options = {
                map: this.map,
                autoNavigate: false,
                autoComplete: true,

                minCharacters: 0,
                maxLocations: 5,
                searchDelay: 100,
                arcgisGeocoder: geocoders.splice(0, 1)[0],
                geocoders: geocoders

            };


            return options;
        },
        _createGeocoder: function () {
            var gcOpts = this._createGeocoderOptions();
            this.geocoder = new Geocoder(gcOpts, dojo.byId('searchDiv'));

            // address search startup
            this.geocoder.startup();

            on(this.geocoder, "select", lang.hitch(this, function (result) {
                if (result.result != null) {
                    var pt = result.result.feature.geometry;
                    //var mxZm = this.map.getMaxZoom();
                    //if (mxZm != -1) {
                    //    this.map.centerAndZoom(pt, mxZm);
                    //}
                    //else {
                    //    this.map.centerAt(pt);
                    //}
                    this._addToMap(pt);
                }
            }));

        },
        _extentChanged: function () {
            // each geocoder

        },
        _editingAllowed: function ()
        {
            if (this.config.editingAllowed == null) {
                this.config.editingAllowed = false;

                if (this.config == null) {
                    this.config.editingAllowed = true;

                }
                if (this.config.userPrivileges == null) {
                    this.config.editingAllowed = true;

                } else {
                    for (var key in this.config.userPrivileges) {
                        if (this.config.userPrivileges[key] == "features:user:edit") {
                            this.config.editingAllowed = true;
                            return this.config.editingAllowed;

                        }
                    }
                }

                
            }
            
            return this.config.editingAllowed;

        },
        _initMap: function () {

            console.log("InitMap");
            var extentChange = on(this.map, "extent-change", lang.hitch(this, function () {
                this._extentChanged();
            }));
            document.title = this.config.i18n.page.title;
            var serviceAreaLayerNames = [];
            this.popupMedia = [];

            serviceAreaLayerNames = this.config.serviceAreaLayerNames.split("|");
            this.lookupLayers = [];

            for (var f = 0, fl = serviceAreaLayerNames.length; f < fl; f++) {
                var layDetails = {};

                array.forEach(this.layers, function (layer) {

                    serviceAreaLayerNames[f] = String.trim(serviceAreaLayerNames[f])
                    if (layer.layerObject.layerInfos != null) {
                        array.forEach(layer.layerObject.layerInfos, function (subLyrs) {
                            if (subLyrs.name == serviceAreaLayerNames[f]) {
                                layDetails.name = subLyrs.name;
                                layDetails.layerOrder = f;

                                layDetails.url = layer.layerObject.url + "/" + subLyrs.id;

                                console.log(serviceAreaLayerNames[f] + " " + "set");


                                if (layer.layers != null) {
                                    array.forEach(layer.layers, function (popUp) {
                                        if (subLyrs.id == popUp.id) {
                                            layDetails.popupInfo = popUp.popupInfo
                                        }
                                    }, this);
                                }
                                if (layDetails.popupInfo == null) {
                                    alert(this.config.i18n.error.popupNotSet + ": " + subLyrs.name);
                                }
                                this.lookupLayers.push(layDetails);

                            }
                        }, this);
                    }
                    else {

                        if (layer.title == serviceAreaLayerNames[f]) {
                            layDetails.popupInfo = layer.popupInfo;
                            layDetails.name = layer.title;
                            layDetails.url = layer.layerObject.url;
                            layDetails.layerOrder = f;
                            this.lookupLayers.push(layDetails);
                            console.log(layer.title + " " + "set");

                        }
                    }
                    
                    if (this.config.storeLocation == true && this._editingAllowed()) {
                        if (this.config.serviceRequestLayerName.id != undefined) {
                            if (layer.id == String.trim(this.config.serviceRequestLayerName.id)) {

                                this.serviceRequestLayerName = layer.layerObject;
                                console.log("Service Request Layer set");
                                var fnd = false;

                                array.forEach( this.config.serviceRequestLayerName.fields, function (field) {
                                    if (field.id == "serviceRequestLayerAvailibiltyField") {
                                        fnd = true;
                                       
                                        this.config.serviceRequestLayerAvailibiltyField = field.fields[0];

                                    }
                                }, this);

                                if (fnd == false) {
                                    alert(this.config.i18n.error.fieldNotFound + ": " + this.config.serviceRequestLayerAvailibiltyField);

                                    console.log("Field not found.");

                                }
                            }
                        } else {
                            if (layer.title == String.trim(this.config.serviceRequestLayerName)) {

                                this.serviceRequestLayerName = layer.layerObject;
                                console.log("Service Request Layer set");
                                var fnd = false;

                                array.forEach(this.serviceRequestLayerName.fields, function (field) {
                                    if (field.name == this.config.serviceRequestLayerAvailibiltyField) {
                                        fnd = true;


                                    }
                                }, this);

                                if (fnd == false) {
                                    alert(this.config.i18n.error.fieldNotFound + ": " + this.config.serviceRequestLayerAvailibiltyField);

                                    console.log("Field not found.");

                                }
                            }
                        }
                    }



                }, this);



            }

            var useLegacyConfig = false;

            if (this.lookupLayers.length == 0 && this.config.serviceAreaLayerName != null)
            {
                var layDetails = {};

                array.forEach(this.layers, function (layer) {

                    this.config.serviceAreaLayerName = String.trim(this.config.serviceAreaLayerName)
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
                                            layDetails.popupInfo = popUp.popupInfo
                                        }
                                    }, this);
                                }
                                if (layDetails.popupInfo == null) {
                                    alert(this.config.i18n.error.popupNotSet + ": " + subLyrs.name);
                                }
                                this.lookupLayers.push(layDetails);
                                useLegacyConfig = true;
                            }
                        }, this);
                    }
                    else {

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
            var layerTitles = [];
            for (var f = 0, fl = this.lookupLayers.length; f < fl; f++) {

                allLayerNames += this.lookupLayers[f].name + ",";
            }
            if (useLegacyConfig)
            {

            }
            else
            {
                for (var n = 0, nl = serviceAreaLayerNames.length; n < nl; n++) {

                    if (allLayerNames.indexOf(serviceAreaLayerNames[n]) > -1) {

                    }

                    else {
                        alert(this.config.i18n.error.layerNotFound + ":" + serviceAreaLayerNames[n]);
                    }

                }
            }
            if (this.serviceRequestLayerName === undefined && this.config.storeLocation == true && this._editingAllowed()) {
                if (this.config.serviceRequestLayerName.id != undefined) {
                    alert(this.config.i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName.id);
                }
                else {
                    alert(this.config.i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName);
                }
                console.log("Layer name not found.");


            }
            

        },

        _createToolbar: function () {
            this.toolbar = new Draw(this.map, { showTooltips: false });
            this.toolbar.on("draw-end", lang.hitch(this, this._drawEnd));

            //esri.bundle.toolbars.draw.addPoint = this.config.i18n.map.mouseToolTip;
            //esri.bundle.toolbars.draw.addPoint = null;


            this.toolbar.activate(Draw.POINT);

        },
        _initGraphic: function () {


            this.editSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375z").setSize(24).setColor(new dojo.Color([255, 0, 0]));
            this.editSymbol.setOutline(new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375zM22.979,26.209l-2.664-8.205l6.979-5.062h-8.627L16,4.729l-2.666,8.206H4.708l6.979,5.07l-2.666,8.203L16,21.146L22.979,26.209L22.979,26.209z").setSize(26).setColor(new dojo.Color([0, 255, 0])));

            this.editSymbolAvailable = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375z").setSize(24).setColor(new dojo.Color([0, 255, 0]));
            this.editSymbolAvailable.setOutline(new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_PATH).setPath("M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375zM22.979,26.209l-2.664-8.205l6.979-5.062h-8.627L16,4.729l-2.666,8.206H4.708l6.979,5.07l-2.666,8.203L16,21.146L22.979,26.209L22.979,26.209z").setSize(26).setColor(new dojo.Color([0, 255, 0])));



        },
        _drawEnd: function (evt) {
            this._addToMap(evt.geometry);
        },
        //_createArray: function(size, defaultVal) {
        //    var arr = new Array(size);
        //    if (arguments.length == 2) {
        //        // optional default value
        //        for (int i = 0; i < size; ++i) {
        //            arr[i] = defaultVal;
        //        }
        //    }
        //    return arr;
        //},
        _processObject: function(obj,fieldName, layerName,matchName)
        {
            var matchForRec = matchName

            for (var key in obj) {
                if (key == "type") {
                    if (obj[key].indexOf('chart')> -1) {
                        matchForRec = true;
                    }
                }

                if (obj[key] != null) {
                    if (obj[key] instanceof Object) {
                        if (key == 'fields')
                        {
                            obj[key] = this._processObject(obj[key], fieldName, layerName, true);
                        }
                        else
                        {
                            obj[key] = this._processObject(obj[key], fieldName, layerName, matchName);
                        }
                     
                    }
                    else
                    {
                        if (obj[key] == fieldName && (matchName || key == 'normalizeField'))

                        {
                            obj[key] = layerName + "_" + fieldName;
                        }
                        else{
                            obj[key] = obj[key].replace("{" + fieldName + "}", "{" + layerName + "_" + fieldName + "}").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
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
                else {

                }
                this.defCnt = this.defCnt - 1;





                if (this.defCnt == 0) {

                    if (this.results != null) {
                        var atts = {};
                        if (this.results.length > 0) {
                            var allFields = [];


                            var allDescriptions = "";
                            var popUpArray = [];
                            var mediaArray = [];
                            var resultFeature = {};


                            popUpArray.length = this.results.length;
                            mediaArray.length = this.results.length;
                            array.forEach(this.results, function (result) {

                                var resetFieldNames = resetFieldNames = result.Layer.popupInfo.fieldInfos;
                                for (var r = 0, rl = resetFieldNames.length; r < rl; r++) {
                                    resetFieldNames[r].fieldName = resetFieldNames[r].fieldName.replace(result.Layer.name + "_", "");
                                }

                                //result.Layer.popupInfo.fieldInfos;
                                var layerFields = result.Layer.popupInfo.fieldInfos;
                                this.layerDescription = result.Layer.popupInfo.description;
                                popupTitle = result.Layer.popupInfo.title;
                                mediaInfos = lang.clone(result.Layer.popupInfo.mediaInfos);

                                for (var g = 0, gl = layerFields.length; g < gl; g++) {
                                    if (mediaInfos != null) {
                                        array.forEach(mediaInfos, function (mediaInfo)
                                        {
                                            mediaInfo = this._processObject(mediaInfo, layerFields[g].fieldName, result.Layer.name,false);
                                          
                                            //for (var key in mediaInfo) {
                                            //    if (mediaInfo[key] instanceof Object) {
                                            //        for (var keyInner in mediaInfo[key]) {
                                            //            if (mediaInfo[key][keyInner] instanceof Object)
                                            //            { }
                                            //            else
                                            //            {
                                            //                mediaInfo[key][keyInner] = mediaInfo[key][keyInner].replace("{" + layerFields[g].fieldName + "}", "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}")
                                            //            }


                                            //        }
                                            //    }
                                            //    else {
                                            //        mediaInfo[key] = mediaInfo[key].replace("{" + layerFields[g].fieldName + "}", "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}")
                                            //    }
                                               
                                            
                                        }, this)
                                    }

                                    if (result.Layer.popupInfo.description == null) {
                                        popupTitle = popupTitle.replace("{" + layerFields[g].fieldName + "}", "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}");
                                        if (this.layerDescription == null) {
                                            this.layerDescription = layerFields[g].fieldName + ": " + "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}<br>";
                                        }
                                        else {
                                            this.layerDescription = this.layerDescription + layerFields[g].fieldName + ": " + "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}<br>";
                                        }
                                    }
                                    else {
                                        this.layerDescription = this.layerDescription.replace("{" + layerFields[g].fieldName + "}", "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}");
                                    }
                                    resultFeature[result.Layer.name + "_" + layerFields[g].fieldName] = result.results[0].attributes[layerFields[g].fieldName];
                                    layerFields[g].fieldName = result.Layer.name + "_" + layerFields[g].fieldName;

                                }



                                allFields = allFields.concat(layerFields);
                                if (result.Layer.popupInfo.description == null) {
                                    this.layerDescription = popupTitle + "<br>" + this.layerDescription;
                                }
                             
                                mediaArray[result.Layer.layerOrder] = mediaInfos;
                                popUpArray[result.Layer.layerOrder] = this.layerDescription;

                            }, this)

                            var finalMedArr = [];

                            array.forEach(popUpArray, function (descr) {
                                allDescriptions = allDescriptions == "" ? descr : allDescriptions + descr;
                            }, this)
                            array.forEach(mediaArray, function (mediaInfos) {
                                finalMedArr.push.apply(finalMedArr, mediaInfos);

                               
                            }, this)

                            ////Make single Array of fields
                                this.popupTemplate = new PopupTemplate({
                                title: this.config.popupTitle,
                                fieldInfos: allFields,
                                description: allDescriptions.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"),
                                mediaInfos: finalMedArr
                            });

                        }


                        if (this.results.length == 0) {
                            editGraphic = new Graphic(this.event, this.editSymbol, null, null);
                            this.map.graphics.add(editGraphic);

                            this.map.infoWindow.setTitle(this.config.serviceUnavailableTitle);
                            this.map.infoWindow.setContent(this.config.serviceUnavailableMessage.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"));
                            this.map.infoWindow.show(editGraphic.geometry);
                            if (this.config.storeLocation == true && this._editingAllowed()) {
                                atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueNotAvail;
                                this._logRequest(this.event, atts);
                            }

                        }
                        else {
                            var featureArray = [];

                            editGraphic = new Graphic(this.event, this.editSymbolAvailable, resultFeature, this.popupTemplate);
                            featureArray.push(editGraphic);
                            this.map.infoWindow.highlight = false;
                            this.map.infoWindow._highlighted = undefined

                            this.map.graphics.add(editGraphic);

                            this.map.infoWindow.setFeatures(featureArray);
                            this.map.infoWindow.show(editGraphic.geometry);
                            this.map.infoWindow.resize();
                             //
                            //if (this.map.graphics.graphics.length > 1)
                            //{
                            //    this.map.graphics.graphics[1].visible = false;
                            //}
                            if (this.config.storeLocation == true && this._editingAllowed()) {
                                atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueAvail;

                                this._logRequest(this.event, atts);
                            }
                        }
                        this.map.centerAndZoom(this.event, this.config.zoomLevel);
                    }
                    dojo.style("loader", "display", "none");
                }
            }
        },
        _addToMap: function (evt) {
            if (this.lookupLayers === undefined)
                return;

            if (this.lookupLayers == null)
                return;
            if (this.lookupLayers.length == 0)
                return;

            dojo.style("loader", "display", "block");
            this.map.infoWindow.hide();
            this.map.infoWindow.highlight = false;
            this.map.graphics.clear();

            //query to determine popup 
            var query = new Query();
            query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS;
            query.geometry = evt;
            query.outSpatialReference = this.map.spatialReference;
            query.geometryType = "esriGeometryPoint";
            query.outFields = ["*"];
            var editGraphic;

            this.event = evt;
            this.results = [];
            this.defCnt = this.lookupLayers.length;

            for (var f = 0, fl = this.lookupLayers.length; f < fl; f++) {
                var queryTask = new QueryTask(this.lookupLayers[f].url)
                this.queryDeferred = queryTask.execute(query);
                this.queryDeferred.addCallback(lang.hitch(this, this._queryComplete(this.lookupLayers[f])))


                this.queryDeferred.addErrback(function (error) {
                    console.log(error);
                })


            }


        },

        _processResults: function (features) {
            return dojo.map(features, function (feature) {

                return feature;
            });
        },

        _logRequest: function (geom, atts) {
            if (this.serviceRequestLayerName != null) {
                if (this.serviceRequestLayerName.isEditable() == true) {
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



        },
        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {

                    //Optionally define additional map config here for example you can 
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more. 
                },

                bingMapsKey: this.config.bingMapsKey
            }).then(lang.hitch(this, function (response) {
                //Once the map is created we get access to the response which provides important info 
                //such as the map, operational layers, popup info and more. This object will also contain
                //any custom options you defined for the template. In this example that is the 'theme' property.
                //Here' we'll use it to update the application to match the specified color theme.  
                console.log(this.config);
                this.map = response.map;

                //Added for the service lookup
                this.layers = response.itemInfo.itemData.operationalLayers;

                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        // do something with the map
                        this._mapLoaded();
                    }));
                }
            }), lang.hitch(this, function (error) {
                //an error occurred - notify the user. In this example we pull the string from the 
                //resource.js file located in the nls folder because we've set the application up 
                //for localization. If you don't need to support mulitple languages you can hardcode the 
                //strings here and comment out the call in index.html to get the localization strings. 
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.map.error + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
            }));
        }


    });
});