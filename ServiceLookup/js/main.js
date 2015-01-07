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
    "dojo",
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "esri/arcgis/utils",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on",
    "dojo/topic",
    "application/splashscreen",
    "application/basemapButton",
    "application/navigationButtons",
    "application/combinedPopup",
    "application/search"
],
function (
    dojo,
    ready,
    declare,
    lang,
    arcgisUtils,
    dom,
    domClass,
    on,
    topic,
    SplashScreen,
    BasemapButton,
    NavigationButtons,
    CombinedPopup,
    Search
) {
    return declare(null, {
        config: {},
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.

            this._toggleIndicatorListener = topic.subscribe("app\toggleIndicator", this._toggleIndicator);
            this._errorListener = topic.subscribe("app\error", this.reportError);
            topic.subscribe("app/mapLocate", lang.hitch(this, this._mapLocate));

            if (config) {
                this.config = config;
                this._checkEditing();
                try {

                    this.config = config;

                    document.title = this.config.i18n.page.title;

                    if (this.config.showSplash) {
                        this.splash = new SplashScreen(this.map, this.config);
                        this.splash.startup();
                    }

                }
                catch (e) {
                    console.log(e.message);
                }
                if (this.config.basemapWidgetVisible === undefined) {
                    this.config.basemapWidgetVisible = true;
                }
                if (this.config.basemapWidgetVisible === null) {
                    this.config.basemapWidgetVisible = true;
                }
                if (this.config.basemapWidgetVisible == true) {
                    this.basemapButton = new BasemapButton(
                        {
                            basemapGalleryGroupQuery: this.config.orgInfo.basemapGalleryGroupQuery,
                            domNode: "basemapDiv",
                            config: this.config
                        });
                    this.basemapButton.startup();
                }
                var zoomScale = 16;
                if (this.config != null) {
                    if (this.config.zoomLevel != null) {

                        zoomScale = this.config.zoomLevel;
                    }
                }
                this.navigationButtons = new NavigationButtons({
                    zoomScale: zoomScale,
                    domNode: "mapButtons"

                });
                this.navigationButtons.startup();

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
        _resizeMap: function () {
            var w = window.innerWidth;
            var h = window.innerHeight;
            dojo.byId("mapDiv").style.width = w;
            dojo.byId("mapDiv").style.height = h;

            this.map.resize();
            this.map.reposition();
            clearTimeout(this.resizeTimeout);

        },

        _mapLoaded: function () {
            // Map is ready
            try {
                console.log("map loaded");
                //search control
                this.search = new Search(
                    {
                        config: this.config,
                        domNode: "searchDiv",
                        map: this.map
                    });
                this.search.startup();

                this.popup = new CombinedPopup(this.map, this.config, this.layers, this.handler);

                this.popup.startup();
                this.popup.enableMapClick();

                this._toggleIndicator(false);
                topic.publish("app/mapLoaded", this.map);

            }
            catch (e) {
                this.reportError(e);
            }
        },
        _mapLocate: function () {

            this.map.centerAt(arguments[0]);

        },
        _controlLoaded: function (evt) {
            console.log(evt.Name + " created");
        },
        _toggleIndicator: function (events) {
            if (events) {
                domClass.add(document.body, "app-loading");
            } else {
                domClass.remove(document.body, "app-loading");
            }
        },

        _checkEditing: function () {
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
        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            if (this.config.extent) {
                var e = this.config.extent.split(",");
                if (e.length === 4) {
                    itemInfo.item.extent = [
                        [
                            parseFloat(e[0]),
                            parseFloat(e[1])
                        ],
                        [
                            parseFloat(e[2]),
                            parseFloat(e[3])
                        ]
                    ];
                }
            }

            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {
                    autoResize: true
                    //Optionally define additional map config here for example you can 
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more. 
                },
                usePopupManager: true,
                bingMapsKey: this.config.bingMapsKey,
                editable: true
            }).then(lang.hitch(this, function (response) {
                //Once the map is created we get access to the response which provides important info 
                //such as the map, operational layers, popup info and more. This object will also contain
                //any custom options you defined for the template. In this example that is the "theme" property.

                this.map = response.map;

                this.handler = response.clickEventHandle;

                //Added for the service lookup
                this.layers = response.itemInfo.itemData.operationalLayers;
                this.config.response = response;
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