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
    "esri/tasks/query",
    "esri/InfoTemplate",
    "esri/dijit/LocateButton",
    "esri/geometry",
    "esri/dijit/PopupTemplate"
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
    Query,
    InfoTemplate,
    LocateButton,
    Geometry,
    PopupTemplate
) {


    return declare("", null, {
        config: {},
        constructor: function (config) {
            //config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information. 
            this.config = config;
            ready(lang.hitch(this, function () {
                this._createWebMap();


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
                pointerGraphic: new Graphic()
            }, "LocateButton");


            this.geoLocate.on("locate", lang.hitch(this, function (location) {
                this.geoLocate.clear();
                var point = new Geometry.Point({ "x": location.position.coords.longitude, "y": location.position.coords.latitude, " spatialReference": { " wkid": 4326 } });

                this._addToMap(point);

            }));


            this.geoLocate.startup();
        },
        _createGeocoder: function () {

            this.geocoder = new Geocoder({
                autoComplete: true,
                theme: "simpleGeocoder",
                arcgisGeocoder: {
                    placeholder: this.config.i18n.geocoder.defaultText,
                    searchExtent: this.map.extent

                },
                map: this.map
            }, dojo.byId('searchDiv'));

            this.geocoder.on("select", lang.hitch(this, function (result) {

                var pt = result.result.feature.geometry;
                this._addToMap(pt);
            }));
            // address search startup
            this.geocoder.startup();


        },
        _initMap: function () {
            console.log("InitMap");
            document.title = this.config.i18n.page.title;

            array.forEach(this.layers, function (layer) {


                if (layer.layerObject.layerInfos != null) {
                    array.forEach(layer.layerObject.layerInfos, function (subLyrs) {
                        if (subLyrs.name == this.config.serviceAreaLayerName) {

                            this.serviceAreaLayerURL = layer.layerObject.url + "/" + subLyrs.id;
                            console.log("Service Layer set");


                            if (layer.layers != null) {
                                array.forEach(layer.layers, function (popUp) {
                                    if (subLyrs.id == popUp.id) {
                                        this.popupInfo = popUp.popupInfo;
                                    }
                                }, this);
                            }

                        }
                    }, this);
                }
                else {

                    if (layer.title == this.config.serviceAreaLayerName) {
                        this.popupInfo = layer.popupInfo;
                        this.serviceAreaLayerURL = layer.layerObject.url;
                        console.log("Service Layer set");

                    }
                }
                if (this.config.storeLocation == true) {

                    if (layer.title == this.config.serviceRequestLayerName) {

                        this.serviceRequestLayerName = layer.layerObject;
                        console.log("Service Request Layer set");

                    }
                }
                if (this.popupInfo != null) {
                    this.popupTemplate = new PopupTemplate({
                        title: this.popupInfo.title,
                        fieldInfos: this.popupInfo.fieldInfos,
                        mediaInfos: this.popupInfo.mediaInfos,
                        showAttachments: this.popupInfo.showAttachments,
                        description: this.popupInfo.description
                    }

                           );
                }


            }, this);
            if (this.serviceAreaLayerURL === undefined) {
                alert(this.config.i18n.error.layerNotFound + ": " + this.config.serviceAreaLayerName);

                console.log("Layer name not found.");
                return;

            }
            if (this.serviceRequestLayerName === undefined && this.config.storeLocation == true) {
                alert(this.config.i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName);

                console.log("Layer name not found.");


            }
            else if (this.config.storeLocation == true) {
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

            if (this.serviceAreaLayerURL == null) {

            }
            else {
                this.queryTask = new esri.tasks.QueryTask(this.serviceAreaLayerURL);
            }

        },
        _createToolbar: function () {
            this.toolbar = new Draw(this.map);
            this.toolbar.on("draw-end", lang.hitch(this, this._drawEnd));
            esri.bundle.toolbars.draw.addPoint = this.config.i18n.map.mouseToolTip;

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
        _addToMap: function (evt) {
            this.map.infoWindow.hide();

            this.map.graphics.clear();




            //query to determine popup
            var editGraphic;




            var query = new Query();
            query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS;

            query.geometry = evt;
            query.outFields = ["*"];

            query.outSpatialRefernce = this.map.spatialReference;
            // query.inSpatialRefernce = this.map.spatialReference;
            query.geometryType = "esriGeometryPoint";

            var queryDeferred = this.queryTask.execute(query);
            var atts = {};

            queryDeferred.addCallback(lang.hitch(this, function (result) {


                if (result.features.length == 0) {
                    editGraphic = new Graphic(evt, this.editSymbol, null, null);
                    this.map.graphics.add(editGraphic);

                    this.map.infoWindow.setTitle(this.config.serviceUnavailableTitle);
                    this.map.infoWindow.setContent(this.config.serviceUnavailableMessage.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"));
                    this.map.infoWindow.show(editGraphic.geometry);
                    if (this.config.storeLocation == true) {
                        atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueNotAvail;

                        this._logRequest(evt, atts);
                    }

                }
                else {

                    editGraphic = new Graphic(evt, this.editSymbolAvailable, null, null);
                    this.map.graphics.add(editGraphic);

                    //Not required, moved popup to one defined in the web map

                    //var infoTemplate;
                    //if (this.popupInfo != null) {
                    //    if (this.popupInfo.description === null) {
                    //        infoTemplate = new InfoTemplate(this.popupInfo.title.replace(/{/g, "${"), "");
                    //    }
                    //    else {
                    //        infoTemplate = new InfoTemplate(this.popupInfo.title.replace(/{/g, "${"), this.popupInfo.description.replace(/{/g, "${"));
                    //    }
                    //    result.features[0].infoTemplate = infoTemplate;
                    //}

                    var featureArray = [];
                    if (this.popupTemplate != null) {
                      
                        array.forEach(result.features, lang.hitch(this, function (feature) {
                            feature.setInfoTemplate(this.popupTemplate);

                            featureArray.push(feature);

                        }));
                        
                    }
                    else

                    {
                        array.forEach(result.features, lang.hitch(this, function (feature) {
                        
                            featureArray.push(feature);

                        }));
                    }


                    this.map.infoWindow.setFeatures(featureArray);
                    this.map.infoWindow.show(editGraphic.geometry);
                    if (this.config.storeLocation == true) {

                        atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueAvail;

                        this._logRequest(evt, atts);
                    }
                }

            }));

            queryDeferred.addErrback(function (error) {
                console.log(error);
            });

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
        _createWebMap: function () {
            arcgisUtils.createMap(this.config.webmap, "mapDiv", {
                mapOptions: {

                    //Optionally define additional map config here for example you can 
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more. 
                },

                bingMapsKey: this.config.bingmapskey
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