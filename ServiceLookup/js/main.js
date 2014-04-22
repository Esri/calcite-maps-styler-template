define([
    "dojo",
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
    "dojo/json",
    "dojo/dom-class",
    "dojo/dom",
    "dojo/dom-attr"
],
function (
    dojo,
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
    JSON,
    domClass,
    dom,
    domAttr
) {
    return declare("", null, {
        config: {},

        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;

                var ss = document.createElement("link");
                ss.type = "text/css";
                ss.rel = "stylesheet";
                ss.href = "css/" + this.config.theme + ".css";
                document.getElementsByTagName("head")[0].appendChild(ss);

                try {

                    this.isMobileDevice = false;
                    this.isAndroidDevice = false;
                    this.isBrowser = false;
                    this.isTablet = false;
                    this.lessthanios6 = false;
                    this.isiOS = false;
                    //config will contain application and user defined info for the template such as i18n strings, the web map id
                    // and application id
                    // any url parameters and any application specific configuration information. 
                    this.config = config;

                    document.title = this.config.i18n.page.title;

                    if (this.config.showSplash) {
                        dojo.byId("buttonText").innerHTML = this.config.i18n.splashscreen.buttonText;

                        this._checkDevice();

                        on(dojo.byId("splashButton"), "click", lang.hitch(this, this._hideSplashScreenMessage));

                        dojo.byId("divSplashContent").innerHTML = this.config.splashText;

                        dojo.byId("divSplashScreenContainer").style.display = "block";

                        dojo.addClass(dojo.byId("divSplashScreenContent"), "divSplashScreenDialogContent");
                        this._setSplashScreenHeight();
                    }
                }
                catch (e) {
                    console.log(e.message);
                }
                // document ready
                ready(lang.hitch(this, function () {
                    //supply either the webmap id or, if available, the item info
                    var itemInfo = this.config.itemInfo || this.config.webmap;
                    this._createWebMap(itemInfo);
                   
                }));
            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }
        },
        reportError: function (error) {
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
            domClass.add(document.body, "app-error");
            // an error occurred - notify the user. In this example we pull the string from the
            // resource.js file located in the nls folder because we"ve set the application up
            // for localization. If you don"t need to support multiple languages you can hardcode the
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
        _mapLoaded: function () {
            // Map is ready
            console.log("map loaded");
           
            this._createLocatorButton();
            this._createGeocoder();

            this._initMap();
            this._createToolbar();
            this._initGraphic();
            domClass.remove(document.body, "app-loading");

        },
        _checkDevice: function () {

            var userAgent = window.navigator.userAgent;

            if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0) {
                this.isiOS = true;
                userAgent.replace(/OS ((\d+_?){2,3})\s/, function (match, key) {
                    var version = key.split("_");
                    if (version[0] < 6) {
                        this.lessthanios6 = true;

                    }
                });
            }
            if ((userAgent.indexOf("Android") >= 0 && userAgent.indexOf("Mobile") >= 0) || userAgent.indexOf("iPhone") >= 0) {
                this.isMobileDevice = true;
                if ((userAgent.indexOf("Android") >= 0)) {
                    this.isAndroidDevice = true;
                }
                //dojo.byId("divSplashContent").style.fontSize = "15px";

            } else if ((userAgent.indexOf("iPad") >= 0) || (userAgent.indexOf("Android") >= 0)) {
                this.isTablet = true;
                //dojo.byId("divSplashContent").style.fontSize = "14px";
            } else {
                this.isBrowser = true;
                //dojo.byId("divSplashContent").style.fontSize = "11px";

            }
            //if (this.lessthanios6) {
            //    if (userAgent.indexOf("iPhone") || userAgent.indexOf("iPad")) {
            //    }

            //}
            //if (dojo.isIE) {

            //}

            if (this.isMobileDevice) {
                dojo.byId("divSplashScreenContent").style.width = "95%";
                dojo.byId("divSplashScreenContent").style.height = "95%";
            } else {
                dojo.byId("divSplashScreenContent").style.width = "350px";
                dojo.byId("divSplashScreenContent").style.height = "290px";

            }
        },
        _hideSplashScreenMessage: function () {
            if (dojo.isIE < 9 || this.isAndroidDevice) {
                dojo.byId("divSplashScreenContent").style.display = "none";
                dojo.addClass("divSplashScreenContainer", "opacityHideAnimation");
            } else {
                dojo.addClass("divSplashScreenContainer", "opacityHideAnimation");
                dojo.replaceClass("divSplashScreenContent", "hideContainer", "showContainer");

            }

        },
        _setSplashScreenHeight: function () {
            var height = (this.isMobileDevice) ? (dojo.window.getBox().h - 110) : (dojo.coords(dojo.byId("divSplashScreenContent")).h - 80);
            dojo.byId("divSplashContent").style.height = (height + 14) + "px";
            //this._createScrollbar(dojo.byId("divSplashContainer"), dojo.byId("divSplashContent"));
        },
        //Create scroll-bar
        //_createScrollbar: function (container, content) {
        //    var yMax;
        //    var pxLeft, pxTop, xCoord, yCoord;
        //    var scrollbar_track;
        //    var isHandleClicked = false;
        //    this.container = container;
        //    this.content = content;
        //    content.scrollTop = 0;
        //    if (dojo.byId(container.id + "scrollbar_track")) {
        //        dojo.empty(dojo.byId(container.id + "scrollbar_track"));
        //        container.removeChild(dojo.byId(container.id + "scrollbar_track"));
        //    }
        //    if (!dojo.byId(container.id + "scrollbar_track")) {
        //        scrollbar_track = document.createElement("div");
        //        scrollbar_track.id = container.id + "scrollbar_track";
        //        scrollbar_track.className = "scrollbar_track";
        //    } else {
        //        scrollbar_track = dojo.byId(container.id + "scrollbar_track");
        //    }
        //    var containerHeight = dojo.coords(container);
        //    scrollbar_track.style.right = 5 + "px";
        //    var scrollbar_handle = document.createElement("div");
        //    scrollbar_handle.className = "scrollbar_handle";
        //    scrollbar_handle.id = container.id + "scrollbar_handle";
        //    scrollbar_track.appendChild(scrollbar_handle);
        //    container.appendChild(scrollbar_track);
        //    if ((content.scrollHeight - content.offsetHeight) <= 5) {
        //        scrollbar_handle.style.display = "none";
        //        scrollbar_track.style.display = "none";
        //        return;
        //    } else {

        //        scrollbar_handle.style.display = "block";
        //        scrollbar_track.style.display = "block";
        //        scrollbar_handle.style.height = Math.max(this.content.offsetHeight * (this.content.offsetHeight / this.content.scrollHeight), 25) + "px";
        //        yMax = this.content.offsetHeight - scrollbar_handle.offsetHeight;
        //        yMax = yMax - 5; //for getting rounded bottom of handle
        //        if (window.addEventListener) {
        //            content.addEventListener("DOMMouseScroll", scrollDiv, false);
        //        }
        //        content.onmousewheel = function (evt) {
        //            console.log(content.id);
        //            scrollDiv(evt);
        //        };
        //    }

        //    function scrollDiv(evt) {
        //        evt = window.event || evt; //equalize event object
        //        var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
        //        pxTop = scrollbar_handle.offsetTop;
        //        var y;
        //        if (delta <= -120) {
        //            y = pxTop + 10;
        //            if (y > yMax) {
        //                y = yMax;
        //            } // Limit vertical movement
        //            if (y < 0) {
        //                y = 0;
        //            } // Limit vertical movement
        //            scrollbar_handle.style.top = y + "px";
        //            content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));

        //        } else {
        //            y = pxTop - 10;
        //            if (y > yMax) {
        //                y = yMax;
        //            } // Limit vertical movement
        //            if (y < 0) {
        //                y = 2;
        //            } // Limit vertical movement
        //            scrollbar_handle.style.top = (y - 2) + "px";
        //            content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //        }
        //    }

        //    //Attach events to scrollbar components
        //    scrollbar_track.onclick = function (evt) {
        //        if (!isHandleClicked) {
        //            evt = (evt) ? evt : event;
        //            pxTop = scrollbar_handle.offsetTop; // Sliders vertical position at start of slide.
        //            var offsetY;
        //            if (!evt.offsetY) {
        //                var coords = dojo.coords(evt.target);
        //                offsetY = evt.layerY - coords.t;
        //            } else { offsetY = evt.offsetY; }
        //            if (offsetY < scrollbar_handle.offsetTop) {
        //                scrollbar_handle.style.top = offsetY + "px";
        //                content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //            } else if (offsetY > (scrollbar_handle.offsetTop + scrollbar_handle.clientHeight)) {
        //                var y = offsetY - scrollbar_handle.clientHeight;
        //                if (y > yMax) { y = yMax; } // Limit vertical movement
        //                if (y < 0) { y = 0; } // Limit vertical movement
        //                scrollbar_handle.style.top = y + "px";
        //                content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //            } else {
        //                return;
        //            }
        //        }
        //        isHandleClicked = false;
        //    };

        //    //Attach events to scrollbar components
        //    scrollbar_handle.onmousedown = function (evt) {
        //        isHandleClicked = true;
        //        evt = (evt) ? evt : event;
        //        evt.cancelBubble = true;
        //        if (evt.stopPropagation) { evt.stopPropagation(); }
        //        pxTop = scrollbar_handle.offsetTop; // Sliders vertical position at start of slide.
        //        yCoord = evt.screenY; // Vertical mouse position at start of slide.
        //        document.body.style.MozUserSelect = "none";
        //        document.body.style.userSelect = "none";
        //        document.onselectstart = function () {
        //            return false;
        //        };
        //        document.onmousemove = function (evt) {
        //            evt = (evt) ? evt : event;
        //            evt.cancelBubble = true;
        //            if (evt.stopPropagation) { evt.stopPropagation(); }
        //            var y = pxTop + evt.screenY - yCoord;
        //            if (y > yMax) {
        //                y = yMax;
        //            } // Limit vertical movement
        //            if (y < 0) {
        //                y = 0;
        //            } // Limit vertical movement
        //            scrollbar_handle.style.top = y + "px";
        //            content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //        };
        //    };

        //    document.onmouseup = function () {
        //        document.body.onselectstart = null;
        //        document.onmousemove = null;
        //    };

        //    scrollbar_handle.onmouseout = function (evt) {
        //        document.body.onselectstart = null;
        //    };

        //    var startPos;
        //    var scrollingTimer;

        //    dojo.connect(container, "touchstart", function (evt) {
        //        touchStartHandler(evt);
        //    });
        //    dojo.connect(container, "touchmove", function (evt) {
        //        touchMoveHandler(evt);
        //    });

        //    dojo.connect(container, "touchend", function (evt) {
        //        touchEndHandler(evt);
        //    });

        //    //Handlers for Touch Events
        //    function touchStartHandler(e) {
        //        startPos = e.touches[0].pageY;
        //    }

        //    function touchMoveHandler(e) {
        //        var touch = e.touches[0];
        //        e.cancelBubble = true;
        //        if (e.stopPropagation) { e.stopPropagation(); }
        //        e.preventDefault();

        //        pxTop = scrollbar_handle.offsetTop;
        //        var y;
        //        if (startPos > touch.pageY) {
        //            y = pxTop + 10;
        //        } else {
        //            y = pxTop - 10;
        //        }

        //        //set scrollbar handle
        //        if (y > yMax) { y = yMax; } // Limit vertical movement
        //        if (y < 0) { y = 0; } // Limit vertical movement
        //        scrollbar_handle.style.top = y + "px";

        //        //set content position
        //        content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));

        //        scrolling = true;
        //        startPos = touch.pageY;
        //    }

        //    function touchEndHandler(e) {
        //        scrollingTimer = setTimeout(function () {
        //            clearTimeout(scrollingTimer);
        //            scrolling = false;
        //        }, 100);
        //    }
        //    //touch scrollbar end
        //},

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

                }else
                {
                    var point = new Geometry.Point({ "x": location.position.coords.longitude, "y": location.position.coords.latitude, " spatialReference": { " wkid": 4326 } });

                    this._addToMap(point);
                }
            }));

            this.geoLocate.startup();
        },
        _createGeocoderOptions: function () {
            var options, geocoders = lang.clone(this.config.helperServices.geocode);
            // each geocoder
            if (geocoders.length === 0) { return null; }

            array.forEach(geocoders, function (geocoder) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    geocoder.placefinding = true;
                    geocoder.placeholder = this.config.i18n.geocoder.defaultText;

                }else {
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
            this.geocoder = new Geocoder(gcOpts, dojo.byId("searchDiv"));

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
        _editingAllowed: function () {
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
            on(this.map, "extent-change", lang.hitch(this, function () {
                this._extentChanged();
            }));
            var serviceAreaLayerNames = [];
            this.popupMedia = [];

            serviceAreaLayerNames = this.config.serviceAreaLayerNames.split("|");
            this.lookupLayers = [];
            var layDetails = {};
            var f = 0, fl = 0;

            for (f = 0, fl = serviceAreaLayerNames.length; f < fl; f++) {
                layDetails = {};

                array.forEach(this.layers, function (layer) {

                    serviceAreaLayerNames[f] = String.trim(serviceAreaLayerNames[f]);
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
                                            layDetails.popupInfo = popUp.popupInfo;
                                        }
                                    }, this);
                                }
                                if (layDetails.popupInfo == null) {
                                    alert(this.config.i18n.error.popupNotSet + ": " + subLyrs.name);
                                }
                                this.lookupLayers.push(layDetails);

                            }
                        }, this);
                    } else
                    {
                        if (layer.title == serviceAreaLayerNames[f]) {
                            layDetails.popupInfo = layer.popupInfo;
                            layDetails.name = layer.title;
                            layDetails.url = layer.layerObject.url;
                            layDetails.layerOrder = f;
                            this.lookupLayers.push(layDetails);
                            console.log(layer.title + " " + "set");

                        }
                    }

                    if (this.config.storeLocation === true && this._editingAllowed()) {
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
                                    alert(this.config.i18n.error.fieldNotFound + ": " + this.config.serviceRequestLayerAvailibiltyField);

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
                                    alert(this.config.i18n.error.fieldNotFound + ": " + this.config.serviceRequestLayerAvailibiltyField);

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
                                    alert(this.config.i18n.error.popupNotSet + ": " + subLyrs.name);
                                }
                                this.lookupLayers.push(layDetails);
                                useLegacyConfig = true;
                            }
                        }, this);
                    }else {

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
           
            for (f = 0, fl = this.lookupLayers.length; f < fl; f++) {

                allLayerNames += this.lookupLayers[f].name + ",";
            }
            if (!useLegacyConfig) {

                for (var n = 0, nl = serviceAreaLayerNames.length; n < nl; n++) {

                    if (allLayerNames.indexOf(serviceAreaLayerNames[n]) < 0) {

                        alert(this.config.i18n.error.layerNotFound + ":" + serviceAreaLayerNames[n]);
                    }

                }
            }
            if (this.serviceRequestLayerName === undefined && this.config.storeLocation === true && this._editingAllowed()) {
                if (this.config.serviceRequestLayerName.id !== undefined) {
                    alert(this.config.i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName.id);
                }else {
                    alert(this.config.i18n.error.layerNotFound + ": " + this.config.serviceRequestLayerName);
                }
                console.log("Layer name not found.");

            }

        },

        _createToolbar: function () {
            this.toolbar = new Draw(this.map, { showTooltips: false });
            this.toolbar.on("draw-end", lang.hitch(this, this._drawEnd));
            //esri.bundle.toolbars.draw.addPoint = this.config.i18n.map.mouseToolTip;
            
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

        _processObject: function (obj, fieldName, layerName, matchName) {
            var matchForRec = matchName;

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
                            }else {
                                obj[key] = this._processObject(obj[key], fieldName, layerName, matchName);
                            }

                        } else {
                            if (obj[key] == fieldName && (matchName || key == "normalizeField")) {
                                obj[key] = layerName + "_" + fieldName;
                            } else {
                                obj[key] = obj[key].replace("{" + fieldName + "}", "{" + layerName + "_" + fieldName + "}").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'");
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
                }

            };
        },
        _allQueriesComplate: function () {
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

                                popupTitle = popupTitle.replace("{" + layerFields[g].fieldName + "}", "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}");

                                if (layerFields[g].visible === true) {

                                    //this.layerDescription = layerFields[g].fieldName + ": " + "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}<br>";
                                    layFldTable = layFldTable + "<tr valign='top'>";
                                    if (layerFields[g].label != null) {
                                        layFldTable = layFldTable + "<td class='attrName'>" + layerFields[g].label + "</td>";
                                    } else {
                                        layFldTable = layFldTable + "<td class='attrName'>" + layerFields[g].fieldName + "</td>";
                                    }
                                    layFldTable = layFldTable + "<td class='attrValue'>" + "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}</td>";
                                    layFldTable = layFldTable + "</tr>";

                                }

                            } else {
                                layerDescription = layerDescription.replace("{" + layerFields[g].fieldName + "}", "{" + result.Layer.name + "_" + layerFields[g].fieldName + "}");
                            }
                            resultFeature[result.Layer.name + "_" + layerFields[g].fieldName] = result.results[0].attributes[layerFields[g].fieldName];
                            layerFields[g].fieldName = result.Layer.name + "_" + layerFields[g].fieldName;

                        }
                        if (result.Layer.popupInfo.description === null) {
                            var popupTable = "<div>";
                            popupTable = popupTable + "<table class='attrTablePopUp' cellpadding='0px' cellspacing='0px'>";
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

                if (this.results.length === 0) {
                    var editGraphic = new Graphic(this.event, this.editSymbol, null, null);
                    this.map.graphics.add(editGraphic);

                    this.map.infoWindow.setTitle(this.config.serviceUnavailableTitle);
                    this.map.infoWindow.setContent(this.config.serviceUnavailableMessage.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"));
                    this.map.infoWindow.show(editGraphic.geometry);
                    if (this.config.storeLocation === true && this._editingAllowed()) {
                        atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueNotAvail;
                        this._logRequest(this.event, atts);
                    }

                } else {
                    var featureArray = [];

                    editGraphic = new Graphic(this.event, this.editSymbolAvailable, resultFeature, this.popupTemplate);
                    featureArray.push(editGraphic);
                    this.map.infoWindow.highlight = false;
                    this.map.infoWindow._highlighted = undefined;

                    this.map.graphics.add(editGraphic);

                    this.map.infoWindow.setFeatures(featureArray);
                    this.map.infoWindow.show(editGraphic.geometry);
                    this.map.infoWindow.resize();
                   
                    if (this.config.storeLocation === true && this._editingAllowed()) {
                        atts[this.config.serviceRequestLayerAvailibiltyField] = this.config.serviceRequestLayerAvailibiltyFieldValueAvail;

                        this._logRequest(this.event, atts);
                    }
                }
                this.map.centerAndZoom(this.event, this.config.zoomLevel);
            }
            domClass.remove(document.body, "app-loading");

        },
        _addToMap: function (evt) {
            if (this.lookupLayers === undefined) {
                return;
            }
            if (this.lookupLayers == null) {
                return;
            }
            if (this.lookupLayers.length === 0) {
                return;
            }
            domClass.add(document.body, "app-loading");
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
           
            this.event = evt;
            this.results = [];
            this.defCnt = this.lookupLayers.length;

            for (var f = 0, fl = this.lookupLayers.length; f < fl; f++) {
                var queryTask = new QueryTask(this.lookupLayers[f].url);
                this.queryDeferred = queryTask.execute(query);
                this.queryDeferred.addCallback(lang.hitch(this, this._queryComplete(this.lookupLayers[f])));

                this.queryDeferred.addErrback(lang.hitch(this, function (error) {
                    console.log(error);
                    this.defCnt = this.defCnt - 1;
                    if (this.defCnt === 0) {
                        this._allQueriesComplate();
                    }

                }));

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
                //any custom options you defined for the template. In this example that is the "theme" property.
                
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
            }), this.reportError);
        }
    });
});