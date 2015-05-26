define(["dojo/ready", "dojo/_base/declare", "dojo/query", "dojo/dom-style", "dojo/_base/lang", "dojo/on", "dojo/dom", "dojo/dom-class", "dojo/dom-construct", "dijit/registry", "dijit/layout/ContentPane", "esri/arcgis/utils", "esri/dijit/Legend", "esri/layers/FeatureLayer", "esri/dijit/Scalebar", "esri/dijit/Measurement", "esri/units", "esri/IdentityManager", "application/ElevationsProfile/Widget"], function (ready, declare, dojoQuery, domStyle, lang, on, dom, domClass, domConstruct, registry, ContentPane, arcgisUtils, Legend, FeatureLayer, Scalebar, Measurement, Units, IdentityManager, ElevationsProfile) {
    return declare([], {
        config: {},
        startup: function (config) {
            this.config = config;
            //supply either the webmap id or, if available, the item info
            var itemInfo = this.config.itemInfo || this.config.webmap;
            this._createWebMap(itemInfo);

            if (config) {
                this.config = config;
                this._createWebMap(itemInfo);
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
        /**
         * CREATE MAP FROM WEBMAP
         *
         * @private
         */
        _createWebMap: function (itemInfo) {
            itemInfo = this._setExtent(itemInfo);
            var mapOptions = {};
            mapOptions = this._setLevel(mapOptions);
            mapOptions = this._setCenter(mapOptions);

            arcgisUtils.createMap(itemInfo, "mapPane", {
                mapOptions: mapOptions,
                editable: false,
                ignorePopups: false,
                usePopupManager: true,
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function (response) {
                this.config.response = response;


                var descNode = null;
                if (this.config.titleInHeader) {
                    descNode = dom.byId("topContainer");
                    domStyle.set(descNode, "height", "60px");

                } else {
                    descNode = dom.byId("descriptionPane");
                    domStyle.set(dom.byId("topContainer"), "display", "none");
                }
                var title = this.config.title || response.itemInfo.item.title || "";
                document.title = title;
                domConstruct.create("div", {
                    id: "titleNode",
                    innerHTML: title
                }, descNode, "first");
                var subtitle = this.config.subtitle || response.itemInfo.item.snippet || "";
                domConstruct.create("div", {
                    id: "snippetNode",
                    innerHTML: subtitle
                }, descNode);

                registry.byId("mainContainer").layout();

                dom.byId("descriptionNode").innerHTML = response.itemInfo.item.description || "";
                registry.byId("infoContainer").layout();


                this.map = response.map;

                //Enable snapping
                this.map.enableSnapping();


                //Enable/disable popups 
                if (!this.config.displaypopups) {
                    this.map.infoWindow.set("popupWindow", false);
                }

                //Map Cursor 
                this.map.on("update-start", lang.hitch(this.map, this.map.setMapCursor, "wait"));
                this.map.on("update-end", lang.hitch(this.map, this.map.setMapCursor, "default"));


                var scalebar = new Scalebar({
                    map: this.map,
                    scalebarUnit: this.config.scalebarUnits || "dual"
                });

                var legendLayers = arcgisUtils.getLegendLayers(response);
                if (legendLayers && legendLayers.length > 0) {
                    var legendDijit = new Legend({
                        map: this.map,
                        layerInfos: legendLayers
                    }, "legendNode");
                    legendDijit.startup();

                }


                //Create the Geocoder
                if (this.config.geocoder) {

                    //Add the location search widget
                    require(["esri/dijit/Search", "esri/tasks/locator", "application/SearchSources", "dojo/_base/array", "esri/lang"], lang.hitch(this, function (Search, Locator, SearchSources, array, esriLang) {
                        if (!Search && !Locator && !SearchSources) {
                            return;
                        }

                        var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);
                        var searchSources = new SearchSources({
                            map: this.map,
                            useMapExtent: this.config.searchExtent,
                            geocoders: this.config.locationSearch ? this.config.helperServices.geocode : [],
                            itemData: this.config.response.itemInfo.itemData,
                            configuredSearchLayers: configuredSearchLayers
                        });
                        var createdOptions = searchSources.createOptions();

                        var search = new Search(createdOptions, domConstruct.create("div", {
                            id: "search"
                        }, "mapPane"));

                        search.startup();

                    }));
                }


                var elevationObj = {
                    "elevationSync": {
                        "url": location.protocol + "//elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer"
                    }
                };

                //Elevation service configured in app. 
                if (this.config.elevationSync) {
                    elevationObj.elevationSync.url = this.config.elevationSync;
                    lang.mixin(this.config.helperServices, elevationObj);
                }

                //No elevation service in self call or configured. This happens in portal which doesn't have 
                //an elevation service defined. 
                if (!this.config.helperServices.hasOwnProperty("elevationSync")) {
                    lang.mixin(this.config.helperServices, elevationObj);
                }


                var profileParams = {
                    map: this.map,
                    profileTaskUrl: this.config.helperServices.elevationSync.url,
                    scalebarUnits: this.config.scalebarUnits,
                    showHelpAtStartup: this.config.showHelpOnLoad,
                    chartTitle: this.config.elevationcharttitle
                };


                var elevationsProfile = new ElevationsProfile(profileParams, dom.byId("profileChartNode"));
                //Send errors to the console 
                elevationsProfile.on("error", console.warn);
                //disable popups when measure tool is used. 
                elevationsProfile.on("measure-distance-checked", lang.hitch(this, function (evt) {
                    if (evt.checked) {
                        this.map.setInfoWindowOnClick(false);
                    } else {
                        this.map.setInfoWindowOnClick(true);
                    }
                }));
                elevationsProfile.startup();

            }), lang.hitch(this, function (error) {
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.map.error + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
            }));
        },
        _setLevel: function (options) {
            var level = this.config.level;
            //specify center and zoom if provided as url params 
            if (level) {
                options.zoom = level;
            }
            return options;
        },

        _setCenter: function (options) {
            var center = this.config.center;
            if (center) {
                var points = center.split(",");
                if (points && points.length === 2) {
                    options.center = [parseFloat(points[0]), parseFloat(points[1])];
                }
            }
            return options;
        },

        _setExtent: function (info) {
            var e = this.config.extent;
            //If a custom extent is set as a url parameter handle that before creating the map
            if (e) {
                var extArray = e.split(",");
                var extLength = extArray.length;
                if (extLength === 4) {
                    info.item.extent = [
                        [parseFloat(extArray[0]), parseFloat(extArray[1])],
                        [parseFloat(extArray[2]), parseFloat(extArray[3])]
                    ];
                }
            }
            return info;
        }
    });
});