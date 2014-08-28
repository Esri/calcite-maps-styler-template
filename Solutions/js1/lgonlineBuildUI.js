/*global define,dojo,esri,js,unescape,console */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,evil:true,regexp:true */
/** @license
 | Copyright 2012 Esri
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
define("js/lgonlineBuildUI", ["dojo/_base/Deferred", "dojo/DeferredList", "esri/arcgis/utils", "dojo/io/script", "dojo/_base/lang", "config/commonConfig", "dojo/require!esri/utils"], function (Deferred, DeferredList, utils, script, lang, commonConfig) {
    dojo.require('esri.arcgis.Portal');
    dojo.require("esri.IdentityManager");

    //========================================================================================================================//

    dojo.declare("js.LGArcGISAccess", null, {
        /**
         * Sets up a portal to the ArcGIS server.
         *
         * @param {int} [args.timeout=5000] Millisconds to wait for
         *        Portal to initialize
         * @param {string} [args.portalUrl="http://www.arcgis.com"] URL
         *        of ArcGIS Portal to use
         *
         * @constructor
         * @class
         * @name js.LGArcGISAccess
         * @classdesc
         * Supplements the ArcGIS Portal REST interface for Solutions
         * applications.
         */
        constructor: function (args) {
            var timerId,
                pThis = this;

            /**
             * Provides a way to test the success or failure of the Portal
             * loading.
             * @member {Deferred} ready
             * @memberOf js.LGArcGISAccess#
             */
            this.ready = new Deferred();

            if (undefined !== args) {  // Guard needed by IE7, IE8
                dojo.safeMixin(this, args);
            }

            this.timeout = this.timeout || 5000;
            this.portalUrl = this.sharingUrl  // from the commonConfig passed in as an arg
                || location.protocol + '//' + "www.arcgis.com";  // fallback

            // Launch the portal
            this.portal = new esri.arcgis.Portal(this.portalUrl);
            timerId = setTimeout(
                function () {
                    pThis.ready.reject(pThis);
                },
                this.timeout
            );
            dojo.connect(this.portal, "onLoad", function () {
                clearTimeout(timerId);
                pThis.ready.resolve(pThis);
            });
        },

        /**
         * Retrieves an item from the ArcGIS Portal.
         * @param {string} itemId Id of the item to look for
         * @return {Deferred} Provides a way to test the success or
         *         failure of the retrieval
         * @memberOf js.LGArcGISAccess#
         */
        getItem: function (itemId) {
            var done = new Deferred(),
                params = {
                    q: "id: " + itemId
                };

            this.portal.queryItems(params).then(
                function (data) {
                    if (data && data.results && 1 === data.results.length) {
                        done.resolve(data.results[0]);
                    } else {
                        done.reject(itemId);
                    }
                },
                function (err) {
                    done.reject(err);
                }
            );

            return done;
        },

        /**
         * Retrieves an item and its associated data from the ArcGIS
         * Portal.
         * @param {string} itemId Id of the item to look for
         * @return {Deferred} Provides a way to test the success or
         *         failure of the retrieval
         * @memberOf js.LGArcGISAccess#
         */
        getItemWithData: function (itemId) {
            return utils.getItem(itemId);
        },

        /**
         * Retrieves a group from the ArcGIS Portal.
         * @param {string} groupId Id of the group to look for
         * @return {Deferred} Provides a way to test the success or
         *         failure of the retrieval
         * @memberOf js.LGArcGISAccess#
         */
        getGroup: function (groupId) {
            var done = new Deferred(),
                params = {
                    q: "id: " + groupId
                };

            this.portal.queryGroups(params).then(
                function (data) {
                    if (data && data.results && 1 === data.results.length) {
                        done.resolve(data.results[0]);
                    } else {
                        done.reject(groupId);
                    }
                },
                function (err) {
                    done.reject(err);
                }
            );

            return done;
        },

        /**
         * Retrieves the items held by a group from the ArcGIS Portal.
         * @param {string} groupId Id of the group to look for
         * @return {Deferred} Provides a way to test the success or
         *         failure of the retrieval
         * @memberOf js.LGArcGISAccess#
         */
        getGroupItems: function (groupId) {
            var done = new Deferred(),
                params = {
                    q: "id: " + groupId
                };

            this.portal.queryGroups(params).then(
                function (data) {
                    if (data && data.results && 1 === data.results.length) {
                        var theGroup = data.results[0];
                        theGroup.queryItems().then(
                            function (data) {
                                if (data && data.results) {
                                    done.resolve(data.results);
                                } else {
                                    done.reject(groupId);
                                }
                            },
                            function (err) {
                                done.reject(err);
                            }
                        );
                    } else {
                        done.reject(groupId);
                    }
                },
                function (err) {
                    done.reject(err);
                }
            );

            return done;
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGUIBuilder", null, {
        /**
         * Constructs an LGUIBuilder.
         *
         * @param {string} [queryString] A query string such as
         *        window.location.search that can provide an appid tag
         *        for a web app or a app tag for a file-defined app; it
         *        can also include startup parameters for the app such
         *        as the initial extent. If neither the appid tag nor
         *        the app tag nor the uiSpec parameter is provided,
         *        then the object is only usable for its utilities such
         *        as parseJSON. The appid tag is checked first; to force
         *        a locally-based file configuration app, supply the
         *        file name as the second parameter to this constructor
         * @param {object|string} [uiSpec] A JSON specification for
         *        starting the app or the name of a file containing that
         *        specification; overrides any specification pointed to
         *        by app or appid tags in queryString
         * @param {string} [defaultUiSpecFile] The name of a file
         *        containing the UI specification in case no other UI
         *        spec source appears
         *
         * @constructor
         * @class
         * @name js.LGUIBuilder
         * @classdesc
         * Builds the UI for a configuration-defined application.
         */
        constructor: function (queryString, uiSpec, defaultUiSpecFile) {
            var pThis = this,
                queryParams = {},
                readArcGIS = new Deferred(),
                readFile = new Deferred(),
                filename = null,
                directUI = null,
                fileUI = null,
                fileValues = null,
                arcgisUI = null,
                arcgisOverrides = null,
                arcgisDefaults = null,
                commonConfigReady;

            /**
             * Provides a way to test the success or failure of loading the
             * spec from a file or remote location.
             * @member {Deferred} ready
             * @memberOf js.LGUIBuilder#
             */
            this.ready = new Deferred();

            // Save the query string
            if (typeof queryString === "string") {
                queryParams = this.parseQueryString(queryString, true);
            }

            // Get the AGOL configuration
            commonConfigReady = this.setDefaults(commonConfig);

            // Pull in any localizations; they'll be available as this.i18n[.<var>]+
            /**
             * The app's user localization strings for the browser's locale,
             * a set of key-value pairs.
             * @member {object} i18n
             * @memberOf js.LGUIBuilder#
             */
            this.i18n = dojo.i18n.getLocalization("esriTemplate", "resources");

            // We need two things:  the UI specification and configured values,
            // whether default or overridden

            // The UI spec can come from one of (in order of precedence)
            //     1. an object supplied to this class
            //     2. a file whose name is supplied to this class, "ui" element
            //     3. an arcgis.com application & its template's "ui" element
            //     4. a file whose name is supplied via "app=<name>" in queryString
            /**
             * The app's user interface specification, an array of component
             * specifications.
             * @member {object} uiSpecification
             * @memberOf js.LGUIBuilder#
             */
            this.uiSpecification = {};

            // The values can come from any combination of (in order of precedence)
            //     1. queryString
            //     2. an arcgis.com application's "values" element
            //     3. an arcgis.com application's template's "values" element
            //     4. a file whose name is supplied to this class, "values" element
            //     5. a file whose name is supplied via "app=<name>" in queryString
            /**
             * Customization values that were used to instantiate this
             * object.
             * @member {object} values
             * @memberOf js.LGUIBuilder#
             */
            this.values = {};

            // Once we have the common config defined, we can get the app's specification and configuration
            commonConfigReady.then(function () {
                // Fetch the sources of specification and values
                // ArcGIS.com
                if (queryParams.appid) {
                    // Get the application item. It contains a "source" element with the
                    // ArcGIS online id of the application's template
                    (new js.LGArcGISAccess(commonConfig)).ready.then(
                        function (pArcGISAccess) {
                            pArcGISAccess.getItemWithData(queryParams.appid).then(
                                function (item) {
                                    if (item && item.itemData.source && item.itemData.values) {
                                        arcgisOverrides = item.itemData.values;

                                        // Get the application template. It contains a "configurationSettings"
                                        // element with the ArcGIS online configuration UI, a "values" element
                                        // with all of the default values of configurationSettings, and a "ui"
                                        // element with the application's UI
                                        pArcGISAccess.getItemWithData(item.itemData.source).then(
                                            function (item) {
                                                arcgisUI = item.itemData.ui;
                                                arcgisDefaults = item.itemData.values;
                                                readArcGIS.resolve(pThis);
                                            },
                                            function () {
                                                readArcGIS.reject(null);
                                            }
                                        );
                                    } else {
                                        readArcGIS.reject(null);
                                    }
                                },
                                function () {
                                    readArcGIS.reject(null);
                                }
                            );
                        },
                        function (error) {
                            readArcGIS.reject(error);
                        }
                    );
                } else {
                    readArcGIS.resolve(null);
                }

                // File
                if (uiSpec && typeof uiSpec === "object") {
                    // We have a UI specification directly specified via the override
                    directUI = uiSpec;
                    readFile.resolve(uiSpec);

                } else if ((uiSpec && typeof uiSpec === "string") || queryParams.app || defaultUiSpecFile) {
                    if (uiSpec && typeof uiSpec === "string") {
                        filename = uiSpec;
                    } else if (queryParams.app) {
                        filename = queryParams.app;
                    } else {
                        filename = defaultUiSpecFile;
                    }
                    pThis.loadFromFile(filename).then(
                        function (fileConfig) {
                            fileUI = fileConfig.ui || null;
                            fileValues = fileConfig.values || null;
                            readFile.resolve(pThis);
                        },
                        function (error) {
                            readFile.reject(error);
                        }
                    );
                } else {
                    readFile.resolve(null);
                }

                // Once both fetches are done (or not needed), pick our UI and values from the results
                (new DeferredList([readArcGIS, readFile])).then(
                    function (results) {
                        // Did both succeed?
                        if (!results[0] || !results[1]) {
                            pThis.ready.reject(pThis);
                            return;
                        }

                        // Pick the first acceptable UI spec
                        if (directUI) {                                     // provided as object in 2nd constructor arg
                            pThis.uiSpecification = directUI;
                            console.log("Using override object for UI");
                        } else if (fileUI && typeof uiSpec === "string") {  // provided as filename in 2nd constructor arg
                            pThis.uiSpecification = fileUI;
                            console.log("Using override file " + uiSpec + ".json for UI");
                        } else if (arcgisUI) {                              // provided via appId query param (arcgis.com id)
                            pThis.uiSpecification = arcgisUI;
                            console.log("Using appId " + queryParams.appid + " for UI");
                        } else if (fileUI && queryParams.app) {             // provided via app query param (filename)
                            pThis.uiSpecification = fileUI;
                            console.log("Using app file " + queryParams.app + ".json for UI");
                        } else if (fileUI && defaultUiSpecFile) {           // provided as filename in 3rd constructor arg
                            pThis.uiSpecification = fileUI;
                            console.log("Using default file " + defaultUiSpecFile + ".json for UI");
                        } else {
                            console.warn("No UI found");
                        }

                        // Merge the values in inverse precedence order
                        pThis.values = fileValues || {};  // defaults
                        dojo.mixin(pThis.values, arcgisDefaults);  // app template config values
                        dojo.mixin(pThis.values, arcgisOverrides);  // app config values
                        dojo.mixin(pThis.values, queryParams);  // query params
                        pThis.values = pThis.organizeConfigValues(pThis.values);

                        // Include the common config
                        pThis.values.Shared = pThis.values.Shared || {};
                        pThis.values.Shared.commonConfig = commonConfig;

                        pThis.ready.resolve(pThis);
                    }
                );
            });
        },

        /**
         * Parses a URL query string.
         * @param {string} winLocSearch The query string to parse, e.g.,
         *        window.location.search
         * @param {boolean} [overwrite=false] Duplicate key-value pairs
         *        replace earlier ones (true) or values get appended to
         *        original key (false)
         * @return {object} Key-value pairs of the query string
         * @memberOf js.LGUIBuilder#
         * @author st-boost
         * href="http://codereview.stackexchange.com/a/10396/">
         * http://codereview.stackexchange.com/a/10396</a>
         */
        parseQueryString: function (winLocSearch, overwrite) {
            // modified to take query string in as an argument to facilitate testing
            // and with "replace" option
            var query = (winLocSearch || "?").substr(1),
                map   = {};
            query.replace(/([^&=]+)=?([^&]*)(?:&+|$)/g, function (match, key, value) {
                if (overwrite) {
                    map[key] = value;
                } else {
                    // Modified original assignment for new JSLint rule
                    //(map[key] = map[key] || []).push(value);
                    map[key] = map[key] || [];
                    map[key].push(value);
                }
            });
            return map;
        },

        /**
         * Parses a JSON string.
         * @param {string} jsonString The JSON string to parse
         * @return {object} JSON object constructed from string or
         *         undefined if parsing threw an exception
         * @memberOf js.LGUIBuilder#
         */
        parseJSON: function (jsonString) {
            try {
                return window.JSON.parse(jsonString);
            } catch (ignore) {
            }
        },

        /**
         * Converts an object with a two-part key into a structure.
         * @param {object} flatValues Object with keys such as
         *        "titleBar.title", "map.mapId", etc.
         * @return {object} Object with keys such as "titleBar", "map",
         *         etc., which contain subobjects such as "title" and
         *         "mapId", respectively.
         * @memberOf js.LGUIBuilder#
         */
        organizeConfigValues: function (flatValues) {
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
         * Launches the user interface construction.
         * @memberOf js.LGUIBuilder#
         */
        launch: function () {
            var pThis = this,
                done = new Deferred();

            // Asynchronously instantiate each class found in the spec
            setTimeout(function () {
                dojo.forEach(pThis.uiSpecification, function (component) {
                    pThis.instantiateClass(component);
                });
                done.resolve();
            });

            return done;
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
         * @memberOf js.LGUIBuilder#
         */
        instantiateClass: function (objectDescription) {
            // Inspired by Jason Wyatt
            // http://jasonwyatt.tumblr.com/post/246271242/dynamically-instantiate-a-dojo-class-at-runtime
            var className, obj = null;

            try {
                // Limit the class name to alphanumerics, periods, and underscores to block script injection
                className = this.reduceToVariableName(objectDescription.classname);

                // Load the object's styles
                if (objectDescription.styles) {
                    this.injectCSS(objectDescription.styles);
                }

                // Apply the value override parameters into the object configuration
                if (objectDescription.config && objectDescription.config.rootId) {
                    objectDescription.config.i18n = this.i18n;
                    dojo.mixin(objectDescription.config, this.getValues(objectDescription.config.rootId) || {});
                    dojo.mixin(objectDescription.config, this.getValues("Shared"));
                }

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
         * @memberOf js.LGUIBuilder#
         */
        reduceToVariableName: function (aString) {
            return aString.replace(/[^\w\d\x2e\x5f]/g, "");
        },

        /**
         * Returns a list of override values extracted from the object's
         * "values" parameter, but only those values in the subsection
         * matching the object's rootId.
         * @return {object} key-value pairs of values
         * @memberOf js.LGUIBuilder#
         */
        getValues: function (id) {
            var valuesList = null;
            if (this.values && this.values[id]) {
                valuesList = this.values[id];
            }
            return valuesList;
        },

        /**
         * Injects a string of CSS into the document.
         * @example
         * <pre>
         * dojo.require("js.LGUIBuilder");
         * dojo.addOnLoad(function () {
         *     var loader = new js.LGUIBuilder();
         *     loader.injectCSS(
         *         ".commandGallery{height:52px;margin:0px;padding:2px;font-size:36px;background-color:#d3d3d3;overflow:hidden;position:absolute;}"+
         *         ".command{width:48px;height:48px;min-width:48px;margin:4px;padding:0px;background-color:#add8e6;text-align:center;vertical-align:middle;}"
         *     );
         * });
         * </pre>
         * @param {string} cssStr A string of CSS text
         * @return {object} DOM style element
         * @memberOf js.LGUIBuilder#
         */
        injectCSS: function (cssStr) {
            var customStyles, cssText, firstScript;

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

            // http://paulirish.com/2011/surefire-dom-element-insertion/
            firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode.insertBefore(customStyles, firstScript);

            return customStyles;
        },

        /**
         * Loads JSON or JavaScript from a file and injects it into the
         * page. Function provided as a single point for switching the
         * algorithm between JavaScript and JSON files.
         * @param {string} url The URL of the file
         * @param {boolean} [useJSON=true] Switch to use JSON (true) or
         *        JavaScript (false) file
         * @return {Deferred} Provides a way to test the success or
         *         failure of loading the file
         * @memberOf js.LGUIBuilder#
         */
        loadFromFile: function (url, useJSON) {
            var returnVal = null;
            if (useJSON === undefined || useJSON) {
                returnVal = this.loadJSONFile(url);
            } else {
                returnVal = this.loadJSFile(url);
            }
            return returnVal;
        },

        /**
         * Loads JavaScript from a file and injects it into the page.
         * @param {string} url The URL of the JavaScript file
         * @return {Deferred} Provides a way to test the success or
         *         failure of loading the file
         * @memberOf js.LGUIBuilder#
         */
        loadJSFile: function (url) {
            var done = new Deferred();

            // By James Burke
            // http://mail.dojotoolkit.org/pipermail/dojo-interest/2010-January/042005.html
            // with deferral added
            script.get({
                url: url + ".js",
                load: function () {
                    done.resolve(url);
                },
                error: function (err) {
                    done.reject(err);
                }
            });

            return done;
        },

        /**
         * Loads JSON from a file and injects it into the page.
         * @param {string} url The URL of the JSON file
         * @return {Deferred} Provides a way to test the success or
         *         failure of loading the file
         * @memberOf js.LGUIBuilder#
         */
        loadJSONFile: function (url) {
            var done = new Deferred();

            dojo.xhrGet({
                url: url + ".json",
                handleAs: "json",
                load: function (uiSpec) {
                    done.resolve(uiSpec);
                },
                error: function (err) {
                    done.reject(err);
                }
            });

            return done;
        },

        /**
         * Sets up the AGOL defaults
         * @param {object} config AGOL configuration structure; supply
         *        empty structure or seed with commonConfig
         * @return {Deferred} Provides a way to know when the portal
         *         definition information has been retrieved and the
         *         geometry service is available
         * @see Input parameter config is filled with AGOL
         *       configuration information
         * @memberOf js.LGUIBuilder#
         */
        setDefaults: function (config) {
            var appLocation, instance, req, deferred = new Deferred();

            // Check to see if the app is hosted or a portal. In those cases set the sharing url and the proxy. Otherwise use
            // the sharing url set to arcgis.com. We know app is hosted (or portal) if it has /apps/ in the url
            // templates can be at /apps or /home/webmap/templates
            appLocation = location.pathname.indexOf("/apps/");
            if (appLocation === -1) {
                appLocation = location.pathname.indexOf("/home/");
            }
            if (appLocation !== -1) {
                instance = location.pathname.substr(0, appLocation);
            }

            // Set the base path for the API
            if (!config.sharingUrl) {
                if (appLocation !== -1) { //hosted or portal
                    config.sharingUrl = location.protocol + "//" + location.host + instance;
                } else { //default to arcgis.com
                    config.sharingUrl = location.protocol + "//" + "www.arcgis.com";
                }
            }
            console.log("sharingUrl: " + config.sharingUrl);

            // Set the proxy for the API
            if (!config.proxyUrl) {
                if (appLocation !== -1) { //hosted or portal
                    config.proxyUrl = location.protocol + '//' + location.host + instance + "/sharing/proxy";
                }
            }
            console.log("proxyUrl: " + config.proxyUrl);

            // Query for portal definition
            req = esri.request({
                url: config.sharingUrl + "/sharing/rest/portals/self",
                content: {
                    "f": "json"
                },
                callbackParamName: "callback"
            });
            req.then(function (response) {
                config.self = response;

                // Replace the sharing URL for single-tenant portals
                if (response.isPortal && response.portalMode === "single tenant") {
                    config.sharingUrl = response.portalHostname;
                }

                // Save the portal's services
                lang.mixin(config.helperServices, response.helperServices);

                esri.arcgis.utils.arcgisUrl = config.sharingUrl + "/sharing/rest/content/items";

                // Setup any helper services (geometry, print, routing, geocoding)
                if (config.helperServices && config.helperServices.geometry && config.helperServices.geometry.url) {
                    esri.config.defaults.geometryService = new esri.tasks.GeometryService(config.helperServices.geometry.url);
                }

                deferred.resolve(true);
            });

            // Set the proxy
            if (config.proxyUrl) {
                esri.config.defaults.io.proxyUrl = config.proxyUrl;
                esri.config.defaults.io.alwaysUseProxy = false;
            }

            return deferred;
        }

    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
84ee6c2ba416b893 2014-08-28 15:44:26 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
