/*global define,dojo,esri,js,unescape,console,require */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,evil:true,regexp:true */
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
/* commit 24957909c2f377d9 2014-07-07 21:53:17 -0700 */
define([
    "dojo/ready",
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/fx",
    "dojo/Deferred",
    "dojo/promise/all",
    "dojo/dom-construct",
    "dojo/topic",
    "esri/dijit/Popup",
    "esri/arcgis/utils",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on"
], function (
    ready,
    array,
    declare,
    lang,
    fx,
    Deferred,
    all,
    domConstruct,
    topic,
    Popup,
    arcgisUtils,
    dom,
    domClass,
    on
) {
    return declare(null, {
        config: {},
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                this.config.testpoint = this._checkTestpoint("TestFrameCallback");

                // document ready
                ready(lang.hitch(this, function () {
                    //supply either the webmap id or, if available, the item info
                    var itemInfo = this.config.itemInfo || this.config.webmap;
                    this._createWebMap(itemInfo);
                }));

                // Get the UI elements
                this.uiElementsReady = this._getUIElements();
            } else {
                var error = new Error("Unable to access application's configuration");
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
                    node.innerHTML = this.config.i18n.messages.unableToLaunchApp + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to launch application: " + error.message;
                }
            }
        },

        // Checks for the presence of an ActiveX callback in a way that both works and passes JSLint
        _checkTestpoint: function (testpointName) {
            var ext, testpoint;
            ext = typeof window.external;
            if (ext !== "undefined") {
                testpoint = typeof window.external[testpointName];
                if (testpoint !== "undefined") {
                    return testpointName;
                }
            }
            return null;
        },

        // Get the UI elements
        _getUIElements: function () {
            var deferred = new Deferred();

            require(["js/lgonlineApp"], function () {
                ready(function () {
                    deferred.resolve(true);
                });
            });

            return deferred.promise;
        },

        // Provides a launch error message
        _launchError: function () {
            var error;
            if (this.config && this.config.i18n) {
                error = new Error(this.config.i18n.messages.unableToLaunchApp);
            } else {
                error = new Error("Unable to launch application");
            }
            return error;
        },

        // Hides the loading indicator and reveal the content
        _revealApp: function () {
            domClass.remove(document.body, "app-loading");
            fx.fadeIn({
                node: "contentDiv",
                duration: 1000,
                onEnd: function () {
                    domClass.remove("contentDiv", "transparent");
                }
            }).play();
        },

        _organizeConfigValues: function (flatValues) {
            var key,
                twoPartKey,
                structuredValues = {};

            for (key in flatValues) {
                if (flatValues.hasOwnProperty(key)) {
                    twoPartKey = key.split(".");
                    if (twoPartKey.length === 1) {
                        if (!structuredValues.Shared) {
                            structuredValues.Shared = {};
                        }
                        structuredValues.Shared[key] = flatValues[key];
                    } else {
                        if (!structuredValues[twoPartKey[0]]) {
                            structuredValues[twoPartKey[0]] = {};
                        }
                        structuredValues[twoPartKey[0]][twoPartKey[1]] = unescape(flatValues[key]);
                    }
                }
            }
            return structuredValues;
        },

        /**
         * Creates a new instance of a class.
         * @param {object} objectDescription An object description
         * @param {string} objectDescription.classname The full name of
         *        the class, e.g., "js.LGFrame"
         * @param {string} [objectDescription.styles] The styles to be
         *        injected into the page for the object
         * @param {object} objectDescription.config The configuration
         *        items required by the class
         * @return {object} Created object; undefined if error
         */
        _instantiateClass: function (objectDescription) {
            // Inspired by Jason Wyatt
            // http://jasonwyatt.tumblr.com/post/246271242/dynamically-instantiate-a-dojo-class-at-runtime
            var className, obj = null;

            try {
                // Limit the class name to alphanumerics, periods, and underscores to block script injection
                className = this._reduceToVariableName(objectDescription.classname);

                // Load the object's styles
                if (objectDescription.styles) {
                    this._injectCSS(objectDescription.styles);
                }

                // Apply the value override parameters into the object configuration
                if (objectDescription.config) {
                    if (objectDescription.config.rootId) {
                        lang.mixin(objectDescription.config, this._getValues(objectDescription.config.rootId) || {});
                    }
                } else {
                    objectDescription.config = {};
                }

                // Give the object the app's configuration, too
                objectDescription.config.appConfig = this.config;

                // Create the object
                obj = new (eval(className))(objectDescription.config);
            } catch (ignore) {
            }

            return obj;
        },

        /**
         * Restricts a string to alphanumerics, periods, and
         * underscores.
         * @param {string} String to restrict
         * @return {string} Restricted string
         */
        _reduceToVariableName: function (aString) {
            return aString.replace(/[^\w\d\x2e\x5f]/g, "");
        },

        /**
         * Returns a list of override values extracted from the object's
         * "config.appValues" parameter, but only those values in the subsection
         * matching the object's rootId.
         * @return {object} key-value pairs of values
         */
        _getValues: function (id) {
            var valuesList = null;
            if (this.config.appValues && this.config.appValues[id]) {
                valuesList = this.config.appValues[id];
            }
            return valuesList;
        },

        /**
         * Injects a string of CSS into the document.
         * @example
         * <pre>
         * // For <div class="titleBox"><div class="title">Title</div></div>
         *    this._injectCSS(
         *        ".titleBox{width:100%;height:52px;margin:0px;padding:4px;color:white;background-color:#1e90ff;text-align:center;overflow:hidden;}"+
         *        ".title{font-size:24px;position:relative;top:25%}"
         *    );
         * </pre>
         * @param {string} cssStr A string of CSS text
         * @return {object} DOM style element
         */
        _injectCSS: function (cssStr) {
            var customStyles, cssText;

            // By Fredrik Johansson
            // http://www.quirksmode.org/bugreports/archives/2006/01/IE_wont_allow_documentcreateElementstyle.html#c4088
            customStyles = document.createElement("style");
            customStyles.setAttribute("type", "text/css");
            if (customStyles.styleSheet) {  // IE 7 & 8
                customStyles.styleSheet.cssText = cssStr;
            } else {  // W3C
                cssText = document.createTextNode(cssStr);
                customStyles.appendChild(cssText);
            }

            // Add the style *after* existing styles so that it'll override them
            document.body.appendChild(customStyles);

            return customStyles;
        },

        // Map is ready
        _mapLoaded: function () {
            var errorsBuildingUIHandle, errorsBuildingUIList = [], errorsBuildingUIReport = "";

            // We reach this point after the map posts the "load" event:
            // "Fires when the first or base layer has been successfully added to the map."
            // https://developers.arcgis.com/javascript/jsapi/map-amd.html#event-load
            // Note that the map may not yet be visible.
            console.log("Application id " + (this.config.appid || "(none)"));
            console.log("Webmap id " + (this.config.webmap || "(none)"));

            // When the UI elements are ready, we can build the UI
            this.uiElementsReady.then(
                lang.hitch(this, function (results) {
                    this.config.appValues = this._organizeConfigValues(this.config.appValues);

                    // Add in some useful content from creating the map
                    this.config.map = this.map;
                    this.config.mapInfo = this.mapInfo;

                    // At this point, this.config contains
                    //   app: name of file containing user interface (omitted if none)
                    //   appValues: name-value pairs for publication-configurable parameters
                    //   appid (omitted if none)
                    //   bingKey or ""
                    //   group or ""
                    //   helperServices name-value pairs from organization
                    //   i18n from nls/resources.js
                    //   itemInfo about webmap
                    //     item & itemData
                    //   localize boolean indicating if i18n content should be brought in
                    //   map from the response from createMap() in _createWebMap():
                    //   mapInfo: clickEventHandle & clickEventListener from the response from createMap() in _createWebMap():
                    //   oauthappid or null
                    //   proxyurl or ""
                    //   queryForOrg boolean
                    //   sharinghost
                    //   ui: the application's UI-building JSON script
                    //   units string
                    //   urlItems array of acceptable parameters in URL parameter filter from defaults.js
                    //   urlValues: URL parameter-value pairs filtered by urlItems
                    //   webmap: id of webmap

                    // Define the String.trim() method if missing (<= IE 8)
                    // By Pradeep Kumar Mishra
                    // http://stackoverflow.com/a/498995
                    if (!String.prototype.trim) {
                        String.prototype.trim = function () {
                            return this.replace(/^\s+|\s+$/g, '');
                        };
                    }

                    // We'll accumulate errors found during building the UI into a single error message
                    this.config.errorPublishingFlag = "errorsBuildingUI";
                    errorsBuildingUIHandle = topic.subscribe("errorsBuildingUI", function (data) {
                        errorsBuildingUIList.push(data);
                    });

                    // Build the UI
                    array.forEach(this.config.ui, lang.hitch(this, function (component) {
                        this._instantiateClass(component);
                    }));

                    // Switch error flag to the one that the script will use and publish any accumulated errors
                    // as a single report using the script's error-handler mechanism, e.g., LGPublishEcho
                    this.config.errorPublishingFlag = "error";
                    errorsBuildingUIHandle.remove();
                    if (errorsBuildingUIList.length > 0) {
                        array.forEach(errorsBuildingUIList, function (errorBuildingUI) {
                            if (errorsBuildingUIReport.length > 0) {
                                // Add separator
                                errorsBuildingUIReport +=
                                    '<div class="appTheme2" style="height:5px;margin-bottom:10px"></div>';
                            }
                            errorsBuildingUIReport += errorBuildingUI;
                        });
                        topic.publish("error", errorsBuildingUIReport);
                    }

                    console.log("Application is ready");
                    this._revealApp();

                    // Provide feedback to test frame
                    if (this.config.testpoint) {
                        setTimeout(lang.hitch(this, function () {
                            window.external[this.config.testpoint](1, JSON.stringify(this.config, ["app", "appid", "webmap"]));
                        }), 2000);
                    }
                }),
                lang.hitch(this, function (error) {
                    console.log(error ? error.message : this._launchError().message);
                    this._revealApp();
                })
            );
        },
        // create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            var popup = new Popup(null, domConstruct.create("div"));
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                ignorePopups: false,
                mapOptions: {
                    infoWindow: popup
                    // Optionally define additional map config here for example you can
                    // turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {
                // Once the map is created we get access to the response which provides important info
                // such as the map, operational layers, popup info and more. This object will also contain
                // any custom options you defined for the template. In this example that is the 'theme' property.
                // Here' we'll use it to update the application to match the specified color theme.
                // console.log(this.config);
                this.map = response.map;
                this.mapInfo = {
                    clickEventHandle: response.clickEventHandle,
                    clickEventListener: response.clickEventListener
                };
                // make sure map is loaded
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
