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
    "esri/dijit/Popup",
    "esri/arcgis/utils",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on",
    "launch/widgetLoader",
    "config/appIncludes",
    "esri/config",
    "esri/request"
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
    on,
    WidgetLoader,
    appIncludesConfig,
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

                        var url = dojoConfig.baseURL + "/config.js";
                        esriRequest({
                            url: url,
                            handleAs: "json",
                            load: function (jsondata) {
                                dojo.configData = jsondata;
                                dojo.appConfigData = appIncludesConfig;
                                var applicationWidgetLoader = new WidgetLoader();
                                applicationWidgetLoader.startup();

                                esriConfig.defaults.io.proxyUrl = dojoConfig.baseURL + dojo.configData.values.proxyUrl;
                                esriConfig.defaults.io.alwaysUseProxy = false;
                                esriConfig.defaults.io.timeout = 180000;
                            },
                            error: function (err) {
                                alert(err.message);
                            }
                        });
                    } catch (ex) {
                        alert(ex.message);
                    }







                    return false;
                }));

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
        }
    });
});
