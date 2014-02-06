define([
    "dojo/ready", "dojo/_base/declare", "dojo/_base/lang", "dojo/query", "dojo/_base/array",
    "esri/arcgis/utils", "esri/IdentityManager",
    "esri/dijit/LocateButton", "esri/dijit/Legend", "esri/geometry/Extent",
    "esri/dijit/Scalebar", "esri/lang", "esri/geometry/Point",
    "dojox/mobile/View", "dojox/mobile/FixedSplitter", "dojox/mobile/ContentPane",
    "dojox/mobile/ToolBarButton",
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
    "dojo/dom-construct", "dojo/dom-style", "dojo/dom", "dijit/registry",
    "dojo/on", "dojo/has", "dojo/sniff", "dojo/_base/window", "dojo/window",
    "dojo/dom-class", "dojo/dom-geometry", "dojo/dom-attr", "dojo/_base/fx",
    "dijit/layout/StackContainer", "dojox/mobile", "dojox/mobile/TabBar", "dojox/mobile/Heading", "dojox/mobile/ScrollableView",
    "dojox/mobile/deviceTheme"
], function (
    ready, declare, lang, query, array,
    arcgisUtils, IdentityManager,
    LocateButton, Legend, Extent,
    Scalebar, esriLang, Point,
    View, FixedSplitter, mobileContentPane,
    ToolBarButton,
    BorderContainer, ContentPane,
    domConstruct, domStyle, dom, registry,
    on, has, sniff, win, doc, domClass, domGeometry, domAttr, fx
) {
    return declare("", null, {
        config: {},
        max_smartphone_width: 360,
        is_smartphone: false,
        is_tablet: false,
        is_desktop: false,
        popup: null,
        headerGeom: null,
        _legendButtonSelected: false,
        _aboutButtonSelected: false,
        allResults: null,
        currentLocationName: null,
        constructor: function (config) {

            //config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information. 
            this.config = config;

            ready(lang.hitch(this, function () {

                //fix for dojox/mobile bug https://bugs.dojotoolkit.org/ticket/17228
                document.dojoClick = false;

                if (has("touch") && window.innerWidth <= this.max_smartphone_width) {
                    this.is_smartphone = true;
                } else if (has("touch") && window.innerWidth > this.max_smartphone_width) {
                    this.is_tablet = true;
                } else {
                    this.is_desktop = true;
                }
              
                //load the appropriate stylesheet and popup 
                var ss = document.createElement("link");
                ss.type = "text/css";
                ss.rel = "stylesheet";

                if (this.is_smartphone) {
                    require(["esri/dijit/PopupMobile"], lang.hitch(this, function (PopupMobile) {
                        this.popup = new PopupMobile(null, domConstruct.create("div"));

                        if (sniff("android")) {
                            //android quirk in the android browser
                            if (sniif("chrome")) {
                                ss.href = "css/devices.css";
                            } else {
                                ss.href = "css/iPhone.css";
                            }

                        } else {
                            //ios
                            ss.href = "css/devices.css";
                        }


                        this._buildMobile();

                    }));

                } else { //tablet or desktop

                    // desktop popup instead of mobile popoup
                    require(['esri/dijit/Popup'], lang.hitch(this, function (Popup) {
                        this.popup = new Popup(null, domConstruct.create("div"));

                        if (this.is_tablet) {
                            ss.href = "css/iPad.css";
                            this._buildMobile();
                        } else {
                            ss.href = "css/desktop.css";
                            this._buildDesktop();
                        }



                    }));

                }
                document.getElementsByTagName("head")[0].appendChild(ss);
                var supportsOrientationChange = "onorientationchange" in window,
                    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

                if (!has("ie")) {
                    window.addEventListener(orientationEvent, lang.hitch(this, function () {
                        this._orientationChanged();
                        if (this.is_tablet || this.is_smartphone) {
                            //var h = document.body.clientHeight;
                            //var w = document.body.clientWidth;
                            domStyle.set("map", "height", "95%");
                            domStyle.set("map", "width", "100%");

                        }
                    }, false));


                } else {
                    //IE
                    window.attachEvent(orientationEvent, lang.hitch(this, function () {
                        this._orientationChanged();
                    }, false));

                }

                //load styles for specified theme 
                var themeStyle = document.createElement("link");
                themeStyle.type = "text/css";
                themeStyle.rel = "stylesheet";
                themeStyle.href = "css/" + this.config.theme + ".css";
                document.getElementsByTagName("head")[0].appendChild(themeStyle);

                arcgisUtils.getItem(this.config.webmap).then(lang.hitch(this, function (itemInfo) {
                    //let's get the web map item and update the extent if needed. 
                    if (this.config.appid && this.config.application_extent.length > 0) {
                        itemInfo.item.extent = [
                            [parseFloat(this.config.application_extent[0][0]), parseFloat(this.config.application_extent[0][1])],
                            [parseFloat(this.config.application_extent[1][0]), parseFloat(this.config.application_extent[1][1])]
                        ];
                    }
                    this._createWebMap(itemInfo);
                }));




            }));
        },
        _mapLoaded: function (response) {

            if (dom.byId("legendButton")) {
                dom.byId("legendButton").innerHTML = this.config.i18n.viewer.buttons.legend;
                dom.byId("listItemLegend").innerHTML = this.config.i18n.viewer.buttons.legend;
            }

            if (dom.byId("aboutButton")) {
                dom.byId("aboutButton").innerHTML = this.config.i18n.viewer.buttons.about;
                dom.byId('listItemAbout').innerHTML = this.config.i18n.viewer.buttons.about;
            }

            if (this.is_tablet && (window.innerHeight < window.innerWidth)) {
                domConstruct.place("legendDiv", "legendContainer", "first");
                domStyle.set(legendDiv, "margin", "1px");
                domStyle.set(legendDiv, "padding", "1px");
                domStyle.set(legendDiv, "font-size", "0.7em");
            }

            if (this.is_desktop) {
                //set the size of the widget and make the widget adjust to the size of its children
                registry.byId("mainWindow").resize();
            }

            //add theme for popup 
            domClass.add(this.map.infoWindow.domNode, this.config.theme);


            //add the scalebar
            var scalebar = new Scalebar({
                map: this.map,
                scalebarUnit: this.config.units
            });

            //Create a legend 
            var layerInfo = arcgisUtils.getLegendLayers(response);
            if (layerInfo.length > 0) {
                var legendDijit = new Legend({
                    map: this.map,
                    layerInfos: layerInfo
                }, "legendDiv");
                legendDijit.startup();
            } else {
                dom.byId("legendDiv").innerHTML = this.config.i18n.viewer.sidePanel.message;
            }


            //Add the locate button 
            var locateDiv = domConstruct.create("div", {}, "map");
            var locationButton = new LocateButton({
                map: this.map
            }, locateDiv);

            locationButton.startup();

            //create the geocoder 
            if (this.config.geocoder) {
                this._createGeocoder();
            }


            //if smartphone or tablet build the ui manually 
            if (this.is_smartphone || this.is_tablet) {

                this._addToolbarButton('aboutToolbarButton', this.config.i18n.viewer.buttons.about, '', true, this._aboutButtonSelectionHandler, 'rightPanelHeader', 'left', 44 + 'px');

                if (this.is_smartphone) {
                    this._addToolbarButton('legendToolbarButton', '', 'images/legendIcon.png', true, this._legendButtonSelectionHandler, 'rightPanelHeader', 'right', 44 + 'px');
                }


                //get viewport width and height
                this.headerGeom = domGeometry.position(dom.byId("rightPanelHeader"));
                var viewportHeight, viewportWidth, vp;
                vp = doc.getBox();
                viewportWidth = vp.w;
                viewportHeight = vp.h;


                domStyle.set("rightPane", "height", viewportHeight + "px");
                domStyle.set("map", "height", (viewportHeight - this.headerGeom.h) + "px");

                //build the div that will house the legend widget 
                if (this.is_smartphone) {
                    var legendBackground = domConstruct.create("div", null, dom.byId("rightPane"));
                    //Really should just be a css class that we apply 
                    domAttr.set(legendBackground, "id", "legendBackgroundDiv");
                    domStyle.set(legendBackground, "bottom", "2px");
                    domStyle.set(legendBackground, "height", "180px");
                    domStyle.set(legendBackground, "right", "5px");
                    domStyle.set(legendBackground, "left", "5px");
                    domStyle.set(legendBackground, "background-color", "#FFF");
                    domStyle.set(legendBackground, "position", "absolute");
                    domStyle.set(legendBackground, "z-index", "10");
                    domStyle.set(legendBackground, "opacity", ".8");
                    domStyle.set(legendBackground, "overflow", "scroll");
                    domStyle.set(legendBackground, "border-radius", "6px");
                    domConstruct.place("legendDiv", "legendBackgroundDiv", "first");
                    domStyle.set("legendDiv", "margin", "1px");
                    domStyle.set("legendDiv", "padding", "1px");
                    domStyle.set("legendDiv", "font-size", "0.7em");
                    domStyle.set(legendBackground, "display", "none");

                }

            }


        },
        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "map", {
                mapOptions: {
                    infoWindow: this.popup
                    //Optionally define additional map config here for example you can 
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more. 
                },
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function (response) {
                //Once the map is created we get access to the response which provides important info 
                //such as the map, operational layers, popup info and more. 
                this.config.title = this.config.title || response.itemInfo.item.title;
                this.config.subtitle = this.config.subtitle || response.itemInfo.item.snippet;
                this.config.owner = this.config.owner || response.itemInfo.item.owner;

                document.title = this.config.title;
                if (this.is_desktop || this.is_tablet) {
                    dom.byId("title").innerHTML = this.config.title;
                    dom.byId("subtitle").innerHTML = this.config.subtitle;

                    if (this.is_desktop) {
                        dom.byId("footerText").innerHTML = this.config.i18n.viewer.footer.label + " " + this.config.owner;
                    }
                }
                this.map = response.map;

                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded(response);
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        // do something with the map
                        this._mapLoaded(response);
                    }));
                }
            }), lang.hitch(this, function (error) {
                //an error occurred - notify the user. In this example we pull the string from the 
                //resource.js file located in the nls folder because we've set the application up 
                //for localization. If you don't need to support mulitple languages you can hardcode the 
                //strings here and comment out the call in index.html to get the localization strings. 
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.viewer.errors.createMap + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
            }));
        },
        _buildMobile: function () {
            var view = new View({
                id: "container",
                "selected": true,

            }).placeAt(win.body(), "first");

            //splitter
            var fixedSplitter = new FixedSplitter({
                id: "splitter",
                orientation: "H"
            }, dom.byId("container"));
            fixedSplitter.startup();

            var leftPanel = new mobileContentPane({
                id: "leftPane",
                href: "data/FixedSplitterfragment1.html"
            });

            fixedSplitter.addChild(leftPanel);

            var rightPanel = new mobileContentPane({
                id: "rightPane",
                href: "data/FixedSplitterfragment2.html"
            });

            fixedSplitter.addChild(rightPanel);


        },
        _buildDesktop: function () {

            var bc = new BorderContainer({
                id: "mainWindow",
                design: "headline",
                gutters: false,
                style: {
                    height: "100%",
                    width: "100%;"
                }
            }).placeAt(win.body(), "first");

            // left content pane will hold the legend
            this._addCustomContentPane('leftPane', 'left', '<div id="leftPaneContent" dojotype="dijit.layout.BorderContainer" design="headline" gutters="false" style="width:100%; height:100%;">' +
                '<div id="leftPaneHeader" dojotype="dijit.layout.ContentPane" region="top">' +
                '<span id="legendHeader"></span>' +
                '</div>' +
                '<div id="leftPaneBody" dojotype="dijit.layout.StackContainer" region="center" style="overflow: scroll">' +
                '<div id="panel1" class="panel_content" dojotype="dijit.layout.ContentPane">' +
                '<div id="legendDiv">' +
                '</div></div></div></div>', 'mainWindow', 'first');
            // header content pane
            this._addCustomContentPane('header', 'top', '<div id="title"></div><div id="subtitle"></div><div id="header_flourish"></div>', 'mainWindow', 'first');
            // map
            this._addCustomContentPane('map', 'center', '', 'mainWindow', 'first');
            // footer content pane
            this._addCustomContentPane('footer', 'bottom', '<span id="footerText"></span><span id="owner"></span>', 'mainWindow', 'last');


        },
        /**
         * Add a content pane to layout
         *
         * @param domId         Content pane's ID
         * @param domRegion     The Region
         * @param domContent    Content
         * @param domPlacement  Placement
         * @param domLoc        Location (i.e. "first")
         */
        _addCustomContentPane: function (domId, domRegion, domContent, domPlacement, domLoc) {
            var cp = new ContentPane({
                id: domId,
                region: domRegion,
                content: domContent
            }).placeAt(domPlacement, domLoc);
        },
        /**
         * Add a toolbar button to the smartphone UI navigation bar
         *
         * @param domId           Toolbar button's ID
         * @param domLabel        Text label
         * @param domIcon         Icon
         * @param toggleIcon      Toggle
         * @param onClickHandler  onClick handler method
         * @param dijitId         Dijit to attach to
         * @param f               Float style (i.e. 'right' or 'left')
         * @param w               Width
         */
        _addToolbarButton: function (domId, domLabel, domIcon, toggleIcon, onClickHandler, dijitId, f, w) {
            var toolbarButton = new ToolBarButton({
                id: domId,
                label: domLabel,
                icon: domIcon,
                toggle: toggleIcon,
                style: {
                    float: f,
                    width: w
                }
            });
            on(toolbarButton, "click", lang.hitch(this, onClickHandler));
            registry.byId(dijitId).addChild(toolbarButton);

        },
        _orientationChanged: function () {
            var clientHeight = document.documentElement.clientHeight;
            if (this.map && this.headerGeom) {
                dom.byId("map").style.height = clientHeight + this.headerGeom.h + "px";
            }
        },
        _legendButtonSelectionHandler: function () {

            var legendNode = dom.byId("legendBackgroundDiv");
            var fadeArgs = {
                node: legendNode,
                duration: 800
            };
            if (this._legendButtonSelected) {
                this._legendButtonSelected = false;
                var fadeOutArgs = {
                    node: legendNode,
                    duration: 800,
                    onEnd: function () {
                        domStyle.set(legendNode, "display", "none");
                    }
                };
                fx.fadeOut(fadeOutArgs).play();
            } else {
                this._legendButtonSelected = true;
                domStyle.set(legendNode, "display", "block");
                fx.fadeIn(fadeArgs).play();
                fx.animateProperty({
                    node: legendNode,
                    duration: 300
                }).play();


            }


        },
        _aboutButtonSelectionHandler: function () {

            if (!this._aboutButtonSelected) {

                var aboutBackground = domConstruct.create("div", null, dom.byId("rightPane"));
                domAttr.set(aboutBackground, "id", "aboutBackgroundDiv");
                domStyle.set(aboutBackground, "height", "70%");
                domStyle.set(aboutBackground, "width", "250px");
                domStyle.set(aboutBackground, "margin-top", "5%");
                domStyle.set(aboutBackground, "margin-right", "auto");
                domStyle.set(aboutBackground, "margin-left", "auto");
                domStyle.set(aboutBackground, "background-color", "#fff");
                domStyle.set(aboutBackground, "z-index", "10");
                domStyle.set(aboutBackground, "opacity", ".90");
                domStyle.set(aboutBackground, "overflow", "scroll");
                domStyle.set(aboutBackground, "border-radius", "6px");
                domStyle.set(aboutBackground, "box-shadow", "1px 1px 2px #ccc");

                dom.byId("aboutBackgroundDiv").innerHTML = '<div style="padding: 5px;"><span style="font-size: 0.8em; font-weight: bold">' + this.config.title + '</span><br /><span style="font-size: 0.75em;">' + this.config.subtitle + '</span></div>';
                this._aboutButtonSelected = true;
            } else {
                domConstruct.destroy("aboutBackgroundDiv");
                this._aboutButtonSelected = false;
            }
        },
        _createGeocoder: function () {

            require(["esri/dijit/Geocoder"], lang.hitch(this, function (Geocoder) {
                //add the geocoder widget as a child of the map div. This widget
                //is positioned using css. Search main.css for the geocoderDiv selector

                var options = this._createGeocoderOptions();

                var geocoderDiv = domConstruct.create("div", {
                    id: "geocoderDiv"
                }, "map");
                var geocoder = new Geocoder(options, geocoderDiv);


                geocoder.startup();

                geocoder.on("find-results", lang.hitch(this, this.checkResults));
                geocoder.on("select", lang.hitch(this, this.showGeocodingResult));
                geocoder.on("auto-complete", lang.hitch(this, this.clearGeocodeResults));
                geocoder.on("clear", lang.hitch(this, this.clearGeocodeResults));



            }));

        },
        checkResults: function (geocodeResults) {
            this.allResults = null;
            if (geocodeResults && geocodeResults.results && geocodeResults.results.results) {
                geocodeResults.results = geocodeResults.results.results;
            }
            if ((!geocodeResults || !geocodeResults.results || !geocodeResults.results.length)) {
                //No results
                console.log("No results found");
            } else if (geocodeResults) {
                this.allResults = geocodeResults.results;
            }
        },
        clearGeocodeResults: function () {
            if (this.map.infoWindow.isShowing) {
                this.map.infoWindow.hide();
            }
            this.allResults = null;

        },
        showGeocodingResult: function (geocodeResult, pos) {
            if (!esriLang.isDefined(pos)) {
                pos = 0;
            }

            if (geocodeResult.result) {
                geocodeResult = geocodeResult.result;
            }

            if (geocodeResult.extent) {
                this.setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, geocodeResult.extent, geocodeResult, pos);
            } else { //best view 
                var bestView = this.map.extent.centerAt(geocodeResult.feature.geometry).expand(0.0625);
                this.setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, bestView, geocodeResult, pos);
            }
        },
        setupInfoWindowAndZoom: function (content, geocodeLocation, newExtent, geocodeResult, pos) {
            this.map.infoWindow.clearFeatures();

            //Show info window
            if (this.allResults && this.allResults.length > 1) {
                //let's update the content to show additional results 
                this.currentLocationName = content;
                var attr = this.allResults[pos].feature.attributes;
                content = "<div id='geocodeCurrentResult' style='display:none;'><span style='font-weight:bold;'>";
                content += this.config.i18n.viewer.geocoder.currentLocation; //"Current Location"
                content += "</span></div>";
                content += "<span>";

                if (!attr.Match_addr) {
                    content += this.currentLocationName;
                } else {
                    content += attr.Match_addr;
                    if (attr.stAddr && attr.City) {
                        content += " - " + attr.stAddr + ", " + attr.City;
                    } else if (attr.stAddr) {
                        content += " - " + attr.stAddr;
                    }
                }

                content += "</span>";
                content += "<div id='geocodeWantOtherResults'>";
                content += "<a id='results' style='cursor:pointer'>";

                content += this.config.i18n.viewer.geocoder.notWhatYouWanted; //"Not what you wanted?";
                content += "</a>";
                content += "</div>";
                content += "<div id='geocodeOtherResults' style='display:none;'><span style='font-weight:bold;'>";
                content += this.config.i18n.viewer.geocoder.selectAnother; //"Select another location";
                content += "</span><br/>";
                for (var i = 0; i < this.allResults.length; i++) {
                    if (i !== pos) {
                        var result = this.allResults[i];
                        attr = result.feature.attributes;
                        content += "<a style='cursor:pointer' class='li_item' id=" + i + ">";

                        if (!attr.Match_addr) {
                            content += result.name;
                        } else {
                            content += attr.Match_addr;
                            if (attr.stAddr && attr.City) {
                                content += " - " + attr.stAddr + ", " + attr.City;
                            } else if (attr.stAddr) {
                                content += " - " + attr.stAddr;
                            }
                        }

                        content += "</a><br/>";
                    }
                }
                content += "</div>";

            }

            //display a popup for the result
            if (this.is_smartphone) {
                this.map.infoWindow.setTitle(this.currentLocationName);
            } else {
                this.map.infoWindow.setTitle(this.config.i18n.viewer.geocoder.title); //Location
            }

            this.map.infoWindow.setContent(content);
            query(".li_item").forEach(lang.hitch(this, function (node) {
                on(node, "click", lang.hitch(this, function () {
                    if (node.id >= 0) {
                        this.selectAnotherResult(node.id);
                    }
                }));

            }));
            var resDiv = dom.byId("results");
            if (resDiv) {
                on(resDiv, "click", lang.hitch(this, function () {
                    this.showOtherResults();
                }));
            }






            var location = new Point(geocodeLocation.x, geocodeLocation.y, geocodeLocation.spatialReference);
            on.once(this.map, "extent-change", lang.hitch(this, function () {
                this.map.infoWindow.show(location);
            }));
            this.map.setExtent(newExtent);


        },
        showOtherResults: function () {

            domStyle.set(dom.byId("geocodeWantOtherResults"), "display", "none");
            domStyle.set(dom.byId("geocodeCurrentResult"), "display", "block");
            domStyle.set(dom.byId("geocodeOtherResults"), "display", "block");

        },
        selectAnotherResult: function (pos) {
            this.showGeocodingResult(this.allResults[pos], pos);
        },
        _createGeocoderOptions: function () {
            //Check for multiple geocoder support and setup options for geocoder widget. 
            var hasEsri = false,
                geocoders = lang.clone(this.config.helperServices.geocode);

            array.forEach(geocoders, function (geocoder, index) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    hasEsri = true;
                    geocoder.name = "Esri World Geocoder";
                    geocoder.outFields = "Match_addr, stAddr, City";
                    geocoder.singleLineFieldName = "Single Line";
                    geocoder.esri = geocoder.placefinding = true;

                }

            });
            //only use geocoders with a singleLineFieldName that allow placefinding
            geocoders = array.filter(geocoders, function (geocoder) {
                return (esriLang.isDefined(geocoder.singleLineFieldName) && esriLang.isDefined(geocoder.placefinding) && geocoder.placefinding);
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
                map: this.map,
                autoNavigate: false,
                theme: "simpleGeocoder",
                autoComplete: hasEsri

            };


            if (hasEsri && esriIdx === 0) {

                options.minCharacters = 0;
                options.maxLocations = 5;
                options.searchDelay = 100;
                options.arcgisGeocoder = geocoders.splice(0, 1)[0]; //geocoders[0];
                if (geocoders.length > 0) {
                    options.geocoders = geocoders;
                }
            } else {
                //options.autoComplete = false;
                options.arcgisGeocoder = false;
                options.geocoders = geocoders;
            }

            return options;


        }

    });
});
