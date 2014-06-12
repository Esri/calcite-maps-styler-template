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
    "esri/IdentityManager",
    "dojo/on",
    "dojo/dom-class",
    "dojo/dom",
    "application/splashscreen",
    "application/Common",
    "application/combinedPopup"

],
function (
    dojo,
    ready,
    declare,
    lang,
    arcgisUtils,
    IdentityManager,
    on,
    domClass,
    dom,
    SplashScreen,
    Common,
    CombinedPopup
) {
    return declare(null, {
        config: {},
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;

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
        _mapLoaded: function () {
            // Map is ready
            try {
                console.log("map loaded");

                this.common = new Common(this.map, this.config);
                this.common.checkingEditing();
                this.common.addLocatorButton("locateDiv");
                this.common.on("locate", lang.hitch(this, this._locate));

                this.common.addGeocoder("searchDiv");
                this.common.on("select", lang.hitch(this, this._geocodeSelect));

                //this.common.addBaseMapGallery("basemapDiv");

                this.popup = new CombinedPopup(this.map, this.config, this.layers, this.handler);
                this.popup.on("popup-started", lang.hitch(this, this._showBusyIndicator));
                this.popup.on("popup-complete", lang.hitch(this, this._hideBusyIndicator));
                this.popup.startup();
                this.popup.enableMapClick();

                this._hideBusyIndicator();
            }
            catch (e) {
                this.reportError(e);
            }
        },
        _controlLoaded: function (evt) {
            console.log(evt.Name + " created");
        },

        _showBusyIndicator: function () {
            domClass.add(document.body, "app-loading");
        },
        _hideBusyIndicator: function () {
            domClass.remove(document.body, "app-loading");
        },
        _geocodeSelect: function (result) {
            if (result.result != null) {
                var pt = result.result.feature.geometry;

                this._popupAtLoc(pt);
            }
        },
        _locate: function (result) {
            if (result != null) {

                this._popupAtLoc(result);

            }

        },
        _popupAtLoc: function (point) {
            this.popup.showPopup(point);
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

                this.handler = response.clickEventHandle;

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