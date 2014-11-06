define(["dojo/ready", "dojo/parser", "dojo/dom-attr", "dojo/has", "dojo/on", "dojo/_base/array", "dojo/_base/declare", "dojo/_base/lang", "dojo/_base/Color", "dojo/query", "dojo/dom", "dojo/dom-class", "dojo/dom-construct", "dijit/registry", "dijit/layout/ContentPane", "application/Drawer", "esri/domUtils", "application/CreateGeocoder", "esri/dijit/Legend", "esri/dijit/BasemapToggle", "esri/arcgis/utils", "esri/dijit/Scalebar", "esri/dijit/BasemapGallery", "esri/dijit/HomeButton", "esri/dijit/Popup", "esri/symbols/PictureMarkerSymbol", "esri/graphic", "esri/geometry/Point", "esri/geometry/Extent", "esri/dijit/PopupTemplate", "esri/symbols/TextSymbol", "dojo/domReady!"], function (
ready, parser, domAttr, has, on, array, declare, lang, Color, query, dom, domClass, domConstruct, registry, ContentPane, Drawer, domUtils, CreateGeocoder, Legend, BasemapToggle, arcgisUtils, Scalebar, BasemapGallery, HomeButton, Popup, PictureMarkerSymbol, Graphic, Point, Extent, PopupTemplate, TextSymbol) {
    return declare(null, {
        config: {},
        startup: function (config) {
            parser.parse();
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information. 
            this.config = config;


            // responsive drawer
            this._drawer = new Drawer({
                borderContainer: "border_container",
                // border container node id
                contentPaneCenter: "cp_center",
                // center content pane node id
                direction: this.config.i18n.direction,
                // i18n direction "ltr" or "rtl",
                config: this.config,
                displayDrawer: (this.config.legend || this.config.details || this.config.popup_sidepanel)
            });

            // startup drawer
            this._drawer.startup();


            // document ready
            ready(lang.hitch(this, function () {

                // config will contain application and user defined info for the template such as i18n strings, the web map id
                // and application id
                // any url parameters and any application specific configuration information.
                if (config) {
                    this.config = config;
                    //supply either the webmap id or, if available, the item info
                    var itemInfo = this.config.itemInfo || this.config.webmap;
                    this._createWebMap(itemInfo);
                } else {
                    var error = new Error("Main:: Config is not defined");
                    this.reportError(error);
                }
            }));

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
        },
        loadMapWidgets: function () {

            if (this.config.scale) {
                var scalebar = new Scalebar({
                    map: this.map,
                    scalebarUnit: this.config.units
                });
            }
            //Zoom slider needs to be visible to add home
            if (this.config.home && this.config.zoom) {
                var home = new HomeButton({
                    map: this.map
                }, domConstruct.create("div", {}, query(".esriSimpleSliderIncrementButton")[0], "after"));
                home.startup();
            } else {
                //add class so we can move basemap gallery button 
                domClass.add(document.body, "no-home");
            }
            if (this.config.legend) {
                var legend = new Legend({
                    map: this.map,
                    layerInfos: arcgisUtils.getLegendLayers(this.config.response)
                }, domConstruct.create("div", {}, registry.byId("legend").domNode));
                legend.startup();

            }
            if (this.config.details) {
                var template = "<div class='map-title'>{title}</div><div class='map-details'>{description}</div>";
                var content = {
                    title: this.config.response.itemInfo.item.title,
                    description: this.config.response.itemInfo.item.description || this.config.i18n.tools.details.error,
                };
                registry.byId("details").set("content", lang.replace(template, content));

            }
            if (this.config.search) {
                var geocoder = new CreateGeocoder({
                    map: this.map,
                    config: this.config
                });
                if (geocoder.geocoder && geocoder.geocoder.domNode) {
                    //place on the top bar if it exists
                    var bar = dom.byId("top-bar");
                    if (bar) {
                        domConstruct.place(geocoder.geocoder.domNode, "top-bar");
                    } else {
                        domConstruct.place(geocoder.geocoder.domNode, "mapDiv");

                    }

                    //Go to find location if possible
                    if (this.config.find) {
                        geocoder.geocoder.set("value", this.config.find);
                        geocoder.geocoder.find().then(function (result) {
                            if (result && result.results && result.results.length > 0) {
                                geocoder.geocoder.select(result.results[0]);
                            }
                        });
                    }
                }
            }
            if (this.config.basemap_gallery) {
                var basemapGallery = null;
                //add a button below the slider to show/hide the basemaps 
                var container = domConstruct.create("div", {
                    "class": "icon-basemap-container active-toggle",
                    "click": lang.hitch(this, this._displayBasemapContainer)
                }, this.map.id + "_root");

                var sync = domConstruct.create("div", {
                    "class": "icon-basemap",
                    "title": this.config.i18n.tools.basemap.label
                }, container);

                var galleryOptions = {
                    showArcGISBasemaps: true,
                    portalUrl: this.config.sharinghost,
                    basemapsGroup: this._getBasemapGroup(),
                    map: this.map
                };

                if (this.config.basemap_gallery) {
                    //Create a container to hold the basemap gallery title, gallery and also draw
                    //the callout arrow 
                   var container =  domConstruct.create("div",{
                       id:"gallery_container"
                    },dom.byId("mapDiv"));
                    
                   domConstruct.create("div",{
                    "class": "arrow_box",
                    innerHTML: "<div class='basemap_title'>"+ this.config.i18n.tools.basemap.title +"</div><div id='full_gallery'></div>"
                   },container);

                    basemapGallery = new esri.dijit.BasemapGallery(galleryOptions, dom.byId("full_gallery"));
                    basemapGallery.startup();

                    //Hide the basemap gallery at startup
                    this._displayBasemapContainer();
     
                }

            }
            if(this.config.basemap_toggle){
                var galleryOptions = {
                    showArcGISBasemaps: true,
                    portalUrl: this.config.sharinghost,
                    basemapsGroup: this._getBasemapGroup(),
                    map: this.map
                };
                var basemapGallery = new esri.dijit.BasemapGallery(galleryOptions);
                basemapGallery.on("load", lang.hitch(this, function () {

                    var toggle_container = domConstruct.create("div",{},"mapDiv");
  
                    var toggle = new BasemapToggle({
                        map: this.map,
                        basemap: this.config.alt_basemap || "satellite"
                    }, toggle_container);

                    if(this.config.scale){
                        domClass.add(toggle.domNode, "scale");
                    }

   
                    toggle.startup();

                    toggle.on("toggle", lang.hitch(this, function (e) {
                        var current = e.currentBasemap;
                        switch (current) {
                        case "streets":
                            current = "Streets";
                            break;
                        case "satellite":
                            current = "Imagery";
                            break;
                        case "hybrid":
                            current = "Imagery with Labels";
                            break;
                        case "topo":
                            current = "Topographic";
                            break;
                        case "gray":
                            current = "Light Gray Canvas";
                            break;
                        case "oceans":
                            current = "Oceans";
                            break;
                        case "national-geographic":
                            current = "National Geographic";
                            break;
                        case "osm":
                            current = "OpenStreetMap";
                            break;
                        }
                        array.forEach(basemapGallery.basemaps, function (basemap) {
                            if (basemap.title === current) {
                                basemapGallery.select(basemap.id);
                            }
                        });

                    }));

                }));







            }
            if (this.config.active_panel) {
                var tabs = registry.byId("tabContainer");
                if (tabs) {
                    var panel = dijit.byId(this.config.active_panel);
                    if (panel) {
                        tabs.selectChild(this.config.active_panel);
                    }
                }
            }

            if (this._drawer && this._drawer.displayDrawer) {
                //is the drawer open? 
                var drawer = query(".drawer-open");
                if (drawer && drawer.length === 0) {
                    //drawer is not open 
                    if (this.config.show_panel === true) {
                        //open drawer
                        this._drawer.toggle();
                    }

                } else {
                    //drawer is open 
                    if (this.config.show_panel === false) {
                        this._drawer.toggle();
                    }
                }
            }
            var bc = registry.byId("border_container");
            if (bc) {
                bc.resize();
            }

        },
        _displayBasemapContainer: function () {
            var node = null, gallery = query(".basemap_gallery");
            if (gallery && gallery.length > 0) {
                node = gallery[0];
            } else {
                node = dom.byId("gallery_container");
            }
            domClass.toggle(query(".icon-basemap-container")[0], "active-toggle");
            domUtils.toggle(node);

        },

        // create a map based on the input web map id
        _createWebMap: function (itemInfo) {

            //modify the extent if provided via url params
            if (this.config.extent) {
                var extent = decodeURIComponent(this.config.extent).split(",");
                if (extent && extent.length && extent.length === 4) {
                    itemInfo.item.extent = [
                        [parseFloat(extent[0]), parseFloat(extent[1])],
                        [parseFloat(extent[2]), parseFloat(extent[3])]
                    ];
                }
            }
            var customPopup = new Popup({
                titleInBody: false
            }, domConstruct.create("div"));
            domClass.add(document.body, this.config.theme);
            domClass.add(customPopup.domNode, this.config.theme);

            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {
                    slider: this.config.zoom,
                    sliderPosition: this.config.zoom_position,
                    infoWindow: customPopup
                },
                usePopupManager: true,
                editable: false,
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {
                this.map = response.map;
                this.config.response = response;
                //disable symbol for text symbols
                /*this.map.graphics.on("click", lang.hitch(this, function(e){
                    if(e.graphic && e.graphic.symbol && e.graphic.symbol.type && e.graphic.symbol.type === "textsymbol"){
                        this.map.infoWindow.set("highlight", false);
                    }else{
                        this.map.infoWindow.set("highlight", true);
                    }

                }));*/


                //disable mouse zoom
                if (this.config.disable_scroll) {
                    this.map.disableScrollWheelZoom();
                }



                // remove loading class from body
                domClass.remove(document.body, "app-loading");

                if (this.config.popup_sidepanel) { //display popup content in the side panel
                    this.map.infoWindow.set("popupWindow", false);
                    this._initializeSidepanel();
                }

                if (this.config.level && this.config.center) {
                    this.map.centerAndZoom(new Point(this.config.center), this.config.level);
                } else if (this.config.level) {
                    this.map.setLevel(this.config.level);
                } else if (this.config.center) {
                    this.map.centerAt(new Point(this.config.center));
                }

                //add graphic point to map 
                if (this.config.marker) {

                    var symbolInfo = decodeURIComponent(this.config.marker).split(";");
                    if (symbolInfo.length === 1) {
                        symbolInfo = decodeURIComponent(this.config.marker).split(",");
                    }

                    if (symbolInfo && symbolInfo.length && symbolInfo.length >= 6) {
                        var x = symbolInfo[0],
                            y = symbolInfo[1],
                            wkid = symbolInfo[2],
                            description = symbolInfo[3],
                            icon_url = symbolInfo[4],
                            label = symbolInfo[5];

                        var markerSymbol = new PictureMarkerSymbol(icon_url || this.config.marker_symbol, 26, 26);
                        var point = new Point({
                            "x": x,
                            "y": y,
                            "spatialReference": {
                                "wkid": wkid || 4326
                            }
                        });

                        //set the marker location to the map center 
                        this.map.centerAt(point);

                        var infoTemplate = null;
                        if (description || label) {
                            infoTemplate = new PopupTemplate({
                                "title": label || null,
                                "description": description || null
                            });

                        }

                        var graphic = new Graphic(point, markerSymbol, null, infoTemplate);
                        this.map.graphics.add(graphic);

                        /*if (label) {
                            var textSym = new TextSymbol({
                                "color": [0, 0, 0, 255],
                                "type": "esriTS",
                                "verticalAlignment": "baseline",
                                "horizontalAlignment": "left",
                                "angle": 0,
                                "xoffset": markerSymbol.width / 2,
                                "yoffset": 0,
                                "rotated": false,
                                "kerning": true,
                                "font": {
                                    "size": 12,
                                    "style": "normal",
                                    "weight": "bold",
                                    "family": "Arial"
                                },
                                "text": label
                            });
                            //var labelGraphic = new Graphic(point, textSym, null, infoTemplate);
                            //Perhaps just show the popup
                            this.map.infoWindow.setFeatures([graphic]);
                            this.map.infoWindow.show(point);
                            //this.map.graphics.add(labelGraphic);
                        }*/
                            this.map.infoWindow.setFeatures([graphic]);
                            this.map.infoWindow.show(point);

                    }

                }

                this.loadMapWidgets();
                // map has been created. You can start using it.
                // If you need map to be loaded, listen for it's load event.
            }), this.reportError);
        },
        _displayPopupContent: function (feature, selectedIdx, count) {
            if (feature) {
                var content = feature.getContent();
                registry.byId("info_content").set("content", content);
                if (selectedIdx && count) {
                    domAttr.set(dom.byId("nav_count"), "innerHTML", "" + selectedIdx + "/" + count);
                }
            }
        },
        _initializeSidepanel: function () {
            var popup = this.map.infoWindow;
            popup.on("selection-change", lang.hitch(this, function () {
                if (popup.count > 1) {
                    this._displayPopupContent(popup.getSelectedFeature(), (popup.selectedIndex + 1), popup.count);

                    domAttr.set(dom.byId("prev_nav"), "disabled", false);
                    domAttr.set(dom.byId("next_nav"), "disabled", false);
                    if (popup.selectedIndex === 0) {
                        domAttr.set(dom.byId("prev_nav"), "disabled", true);
                    } else if (popup.selectedIndex + 1 === popup.count) {
                        domAttr.set(dom.byId("next_nav"), "disabled", true);
                    }
                } else {
                    this._displayPopupContent(popup.getSelectedFeature());
                }
            }));
            popup.on("clear-features", lang.hitch(this, function () {
                domUtils.hide(dom.byId("popupNav"));
                registry.byId("info_content").set("content", "");
                domAttr.set(dom.byId("prev_nav"), "disabled", false);
                domAttr.set(dom.byId("next_nav"), "disabled", false);
                dom.byId("nav_count").innerHTML = "";

            }));
            popup.on("set-features", lang.hitch(this, function () {
                registry.byId("tabContainer").selectChild("popup");
                var drawer = query(".drawer-open");
                if (drawer && drawer.length === 0) {
                    //drawer is not open so open it  
                    this._drawer.toggle();
                }


                if (popup.features && popup.features.length > 1) {
                    this._displayPopupContent(popup.getSelectedFeature(), (popup.selectedIndex + 1), popup.count);
                    //starting at first feature
                    domUtils.show(dom.byId("popupNav"));
                    domAttr.set(dom.byId("next_nav"), "disabled", false);
                    domAttr.set(dom.byId("prev_nav"), "disabled", true);
                } else {
                    domUtils.hide(dom.byId("popupNav"));
                    this._displayPopupContent(popup.getSelectedFeature());
                }
            }));
            on(dom.byId("prev_nav"), "click", function () {
                popup.selectPrevious();
            });
            on(dom.byId("next_nav"), "click", function () {
                popup.selectNext();
            });
        },
        _getBasemapGroup: function () {
            //Get the id or owner and title for an organizations custom basemap group.
            var basemapGroup = null;
            if (this.config.basemapgroup && this.config.basemapgroup.title && this.config.basemapgroup.owner) {
                basemapGroup = {
                    "owner": this.config.basemapgroup.owner,
                    "title": this.config.basemapgroup.title
                };
            } else if (this.config.basemapgroup && this.config.basemapgroup.id) {
                basemapGroup = {
                    "id": this.config.basemapgroup.id
                };
            }
            return basemapGroup;
        }
    });
});