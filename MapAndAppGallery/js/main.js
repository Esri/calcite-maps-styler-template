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
/* @@@commit@@@ */
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
    "dojo/request/xhr",
    "esri/dijit/Popup",
    "esri/arcgis/utils",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on",
    "dojo/query",
    "config/appIncludes",
    "widgets/appHeader/appHeader",
    "widgets/searchAGOLGroupItems/searchAGOLGroupItems",
    "esri/config",
    "esri/request",
    "widgets/leftPanel/leftPanel"
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
    xhr,
    Popup,
    arcgisUtils,
    dom,
    domClass,
    on,
    query,
    appIncludesConfig,
    AppHeader,
    PortalSignin,
    esriConfig,
    esriRequest
) {
    return declare(null, {
        config: {},
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;

                // document ready
                ready(lang.hitch(this, function () {
                    try {
                        /**
                        * load application configuration settings from configuration file
                        * create an object of widget loader class
                        */
                        var url = dojoConfig.baseURL + "/config/config.js";
                        xhr(url, {
                            handleAs: "json"
                        }).then(
                            lang.hitch(this, function (jsondata) {
                                dojo.configData = jsondata;
                                lang.mixin(dojo.configData.values,
                                    this.setFalseValues(this.config.itemData.values));
                                dojo.appConfigData = appIncludesConfig;
                                dojo.nls = this.config.i18n;


                                var portalSigninWidgetLoader = new PortalSignin();
                                portalSigninWidgetLoader.fetchAppIdSettings().then(lang.hitch(this, function () {
                                    portalSigninWidgetLoader.initializePortal();
                                    this._applicationThemeLoader();
                                    this.loadWidgets();
                                }));


/*
                                var leftPanelObj = new LeftPanelCollection();
                                leftPanelObj.startup();

*/
                            }),
                            function (err) {
                                alert(err.message);
                            }
                        );
                    } catch (ex) {
                        alert(ex.message);
                    }
                }));

            } else {
                var error = new Error("Unable to access application's configuration");
                this.reportError(error);
            }
        },

        loadWidgets: function () {
            var widgets = {},
                deferredArray = [];
            array.forEach(dojo.appConfigData.AppHeaderWidgets, function (widgetConfig) {
                var deferred = new Deferred();
                widgets[widgetConfig.WidgetPath] = null;
                require([widgetConfig.WidgetPath], function (Widget) {
                    widgets[widgetConfig.WidgetPath] = new Widget();
                    deferred.resolve(widgetConfig.WidgetPath);
                });
                deferredArray.push(deferred.promise);
            });
            all(deferredArray).then(lang.hitch(this, function () {

                try {
                    /**
                    * create application header
                    */
                    this._createApplicationHeader(widgets);

                } catch (ex) {
                    alert(dojo.nls.errorMessages.widgetNotLoaded);
                    topic.publish("hideProgressIndicator");
                }
            }));
        },

        /**
        * create application header
        * @param {object} widgets Contain widgets to be displayed in header panel
        * @memberOf coreLibrary/widgetLoader
        */
        _createApplicationHeader: function (widgets) {
            var applicationHeader = new AppHeader();
            applicationHeader.loadHeaderWidgets(widgets);
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

        setFalseValues: function (obj) {
            var key;

            // for each key
            for (key in obj) {
                // if not a prototype
                if (obj.hasOwnProperty(key)) {
                    // if is a false value string
                    if (typeof obj[key] === 'string' && (obj[key].toLowerCase() === 'false' || obj[key].toLowerCase() === 'null' || obj[key].toLowerCase() === 'undefined')) {
                        // set to false bool type
                        obj[key] = false;
                    }
                }
            }
            // return object
            return obj;
        },

        _applicationThemeLoader: function () {
            var rootNode = query("html")[0];
            if (!dojo.configData.values.theme) {
                dojo.configData.values.theme = "blueTheme";
            }
            domClass.add(rootNode, dojo.configData.values.theme);
        }
    });
});
