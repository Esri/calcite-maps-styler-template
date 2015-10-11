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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "esri/arcgis/utils",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on",
    "config/templateConfig",
    "dojo/Deferred",
    "dojo/request/xhr",
    "dojo/_base/array",
    "dojo/_base/fx",
    "dojo/topic",
    "esri/lang",
    "dojo/i18n!esri/nls/jsapi",
    "dojo/domReady!"
], function (
    declare,
    lang,
    arcgisUtils,
    dom,
    domClass,
    on,
    templateConfig,
    Deferred,
    xhr,
    array,
    fx,
    topic,
    esriLang,
    jsapiBundle
) {
    return declare(null, {
        config: {},
        startup: function (config) {
            var filename, waitForUI = new Deferred(), uiSource = "none";

            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;

                // Get the UI elements code
                this.uiElementsReady = this._getUIElements();

                // The app recognizes three URL parameters for setting up its webmap and user interface:
                // "webmap", "app", "appid". It uses the following rules to disambiguate the parameters:
                // 1. if URL contains appid, it points to an AGOL app that contains a webmap id and a template id;
                //    the latter contains the app's UI; this is the normal use of an AGOL application
                // 2. otherwise, if the URL contains webmap and app, we have the webmap and app is the name of
                //    the file-based template item containing the app's UI; this is the preview use of an AGOL
                //    application
                // 3. otherwise, if the URL contains app, it is the name of the file-based template item containing
                //    the app's webmap and UI; this is the try-it use of an AGOL application
                // 4. otherwise, we have an incomplete URL, which we'll resolve by using the the file-based template
                //    apps2/GeneralMap; if the URL contains webmap, we'll use it; otherwise, we use the webmap in
                //    apps2/GeneralMap
                //
                // Case #1 (appid)
                if (esriLang.isDefined(this.config.appid) && esriLang.isDefined(config.appResponse)) {
                    if (config.appResponse.itemData && config.appResponse.itemData.source) {
                        // The webmap associated with the appid is the one that we want, not the one in
                        // the URL as selected in the template.js
                        if (config.appResponse.itemData.values && config.appResponse.itemData.values.webmap !== "") {
                            this.config.webmap = config.appResponse.itemData.values.webmap;
                        }

                        // Get application's AGOL-based template
                        arcgisUtils.getItem(config.appResponse.itemData.source).then(
                            lang.hitch(this, function (templateResponse) {
                                if (templateResponse.item && templateResponse.itemData && templateResponse.itemData.values) {
                                    this.config.ui = templateResponse.itemData.ui || {};
                                    this.config.appValues = templateResponse.itemData.values || {};
                                    lang.mixin(this.config.appValues, config.appResponse.itemData.values || {});

                                    // If no webmap id was supplied in the URL or configured for the app, use the webmap in the file
                                    if (!this.config.webmap) {
                                        this.config.webmap = this.config.appValues.webmap;
                                    }

                                    uiSource = this.config.appid;
                                    waitForUI.resolve();
                                } else {
                                    waitForUI.reject(this._configurationError());
                                }
                            }),
                            lang.hitch(this, function () {
                                waitForUI.reject(this._configurationError());
                            })
                        );
                    } else {
                        waitForUI.reject(this._configurationError());
                    }

                } else {
                    // Cases #2 & #3 (preview & try-it)
                    if (this.config.app) {
                        // Get application's file-based template
                        filename = this.config.app;

                        // If we're running in the hosted environment without an appid, the file-based UIs are for previewing
                        if (templateConfig.queryForCommonConfig && !this.config.orgInfo.isPortal) {
                            filename += "_try_it";
                        }

                    // Case #4 (missing URL parameters)
                    } else {
                        // Get apps2/GeneralMap file
                        filename = "apps2/GeneralMap";
                    }

                    // Get the template file
                    this._loadJSONFile(filename).then(
                        lang.hitch(this, function (fileTemplate) {
                            this.config.ui = fileTemplate.ui || {};
                            this.config.appValues = fileTemplate.values || {};

                            // If we're running in the hosted environment without an appid or if no webmap id was
                            // supplied in the URL, use the webmap in the file
                            if ((templateConfig.queryForCommonConfig && !this.config.orgInfo.isPortal) || !this.config.webmap) {
                                this.config.webmap = fileTemplate.values.webmap;
                            }
                            uiSource = filename;
                            waitForUI.resolve();
                        }),
                        lang.hitch(this, function () {
                            waitForUI.reject(this._configurationError());
                        })
                    );
                }

                // Wait for the UI definition to load
                waitForUI.then(lang.hitch(this, function () {
                    // Now that we have the webmap id, get its info
                    var waitForWebmap = new Deferred();
                    if (this.config.webmap) {
                        arcgisUtils.getItem(this.config.webmap).then(lang.hitch(this, function (itemInfo) {
                            this.config.itemInfo = itemInfo;
                            waitForWebmap.resolve(itemInfo);
                        }), function (error) {
                            waitForWebmap.reject(error || new Error("Error retrieving webmap."));
                        });
                    } else {
                        waitForWebmap.reject(new Error("Webmap undefined."));
                    }

                    // Now that we have the webmap info, create the map
                    waitForWebmap.then(lang.hitch(this, function () {
                        // For creating the webmap, supply either the webmap id or, if available, the item info
                        var itemInfo = this.config.itemInfo || this.config.webmap;

                        // Create the webmap
                        this._createWebMap(itemInfo, uiSource);
                    }), lang.hitch(this, function (error) {
                        this.reportError(error || new Error("Error retrieving webmap."));
                    }));

                }), lang.hitch(this, function (error) {
                    this.reportError(error || new Error("Error retrieving application configuration."));
                }));
            } else {
                this.reportError(new Error("Main:: Config is not defined"));
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
         * Loads JSON from a file.
         * @param {string} url The URL of the JSON file
         * @return {Deferred} Provides a way to test the success or
         *         failure of loading the file
         */
        _loadJSONFile: function (url) {
            var done = new Deferred();

            xhr(this._reduceToSimpleLocalPath(url) + ".json", {
                handleAs: "json"
            }).then(
                function (uiSpec) {
                    done.resolve(uiSpec);
                },
                function (err) {
                    done.reject(err);
                }
            );

            return done;
        },

        _configurationError: function (error) {
            // Provide a backup configuration error message if an error parameter is not supplied
            if (!error) {
                if (this.config && this.config.i18n) {
                    error = new Error(this.config.i18n.messages.noConfiguration);
                } else {
                    error = new Error("Unable to access application's configuration");
                }
            }
            return error;
        },

        // Get the UI elements
        _getUIElements: function () {
            var deferred = new Deferred();

            require(["js/lgonlineApp"], function () {
                deferred.resolve(true);
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

        /**
         * Converts an object with a two-part key into a structure.
         * @param {object} flatValues Object with keys such as
         *        "titleBar.title", "map.mapId", etc.
         * @return {object} Object with keys such as "titleBar", "map",
         *         etc., which contain subobjects such as "title" and
         *         "mapId", respectively.
         */
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
                        structuredValues[twoPartKey[0]][twoPartKey[1]] = flatValues[key];
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
         * Restricts a string to alphanumerics, forward slashes, and
         * underscores.
         * @param {string} String to restrict
         * @return {string} Restricted string
         */
        _reduceToSimpleLocalPath: function (aString) {
            return ("./" + aString.replace(/[^\w\d\x2f\x5f]/g, "")).replace("//", "/");
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
                    this._buildUI(this.config.ui);

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
                }),
                lang.hitch(this, function (error) {
                    console.log(error ? error.message : this._launchError().message);
                    this._revealApp();
                })
            );
        },

        _buildUI: function (uiConfig) {
            array.forEach(uiConfig, lang.hitch(this, this._instantiateClass));
        },

        // create a map based on the input web map id
        _createWebMap: function (itemInfo, uiSource) {
            // set extent from config/url
            itemInfo = this._setExtent(itemInfo);
            console.log("Using app specification in " + uiSource);
            // Optionally define additional map config here for example you can
            // turn the slider off, display info windows, disable wraparound 180, slider position and more.
            var mapOptions = {};
            // set zoom level from config/url
            mapOptions = this._setLevel(mapOptions);
            // set map center from config/url
            mapOptions = this._setCenter(mapOptions);
            // create webmap from item
            return arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: mapOptions,
                usePopupManager: true,
                layerMixins: this.config.layerMixins || [],
                editable: this.config.editable,
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
            var points, center = this.config.center;
            if (center) {
                points = center.split(",");
                if (points && points.length === 2) {
                    options.center = [parseFloat(points[0]), parseFloat(points[1])];
                }
            }
            return options;
        },

        _setExtent: function (info) {
            var extArray, extLength, e = this.config.extent;
            //If a custom extent is set as a url parameter handle that before creating the map
            if (e) {
                extArray = e.split(",");
                extLength = extArray.length;
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
