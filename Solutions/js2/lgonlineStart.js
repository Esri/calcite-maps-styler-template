/*global require,dojo,window,Modernizr,console,js,location,esri,defaultAppUI:true,alert */
/*jslint sloppy:true */
/** @license
 | ArcGIS Solutions
 | Version 10.2
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
// Get the basic Dojo & Esri setup
require(["dojo/ready", "dojo/Deferred", "esri/map", "dojo/i18n"], function (ready, Deferred) {
    ready(function () {

        // Define the String.trim() method if missing
        // By Pradeep Kumar Mishra
        // http://stackoverflow.com/a/498995
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }

        // Supply a default app UI if one is not defined
        if (!defaultAppUI) {
            defaultAppUI = "apps2/GeneralMap";
        }

        // Bring in language files
        dojo.requireLocalization("esriTemplate", "template");

        // Load the UI loader
        require(["dojo/ready", "js/lgonlineBuildUI"], function (ready) {
            ready(function () {

                // Load the UI elements
                var uiElementsReady = new Deferred();
                require(["dojo/ready", "js/lgonlineApp"], function (ready) {
                    ready(function () {
                        uiElementsReady.resolve();
                    });
                });

                /**
                 * Reports a launch error via an alert.
                 * @param {number} messageNum The message to display; if this
                 *        does not correspond to an existing message, message
                 *        #0 (unable to launch app) is used
                 * @param {boolean} [overwrite=false] Duplicate key-value pairs
                 *        replace earlier ones (true) or values get appended to
                 *        original key (false)
                 */
                function launchError(messageNum) {
                    var i18n = dojo.i18n.getLocalization("esriTemplate", "template"),
                        message;

                    if (messageNum === 1) {
                        message = i18n.messages.noConfiguration;
                    } else {
                        message = i18n.messages.unableToLaunchApp;
                    }

                    alert(message);
                }

                // Read the UI spec
                (new js.LGUIBuilder(window.location.search, null, defaultAppUI)).ready.then(
                    function (theBuilder) {
                        uiElementsReady.then(function () {
                            // Build the UI
                            theBuilder.launch().then(
                                function () {
                                    // Reveal the content and hide the loading indicator
                                    dojo.fadeIn({
                                        node: "contentDiv",
                                        duration: 500,
                                        onEnd: function () {
                                            dojo.removeClass("contentDiv", "transparent");
                                            dojo.removeClass("pageBody", "startupBkgd");
                                        }
                                    }).play();
                                    console.log("Application is ready");//???
                                },
                                function () {
                                    launchError(0);
                                }
                            );
                        });
                    },
                    function () {
                        launchError(1);
                    }
                );

            });
        });
    });
});
