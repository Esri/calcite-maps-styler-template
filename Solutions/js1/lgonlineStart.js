/*global require,dojo,Modernizr,console,js,esri */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
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
// Get the basic Dojo & Esri setup
require(["dojo/ready", "dojo/_base/Deferred", "esri/map", "dojo/i18n"], function (ready) {
    ready(function () {

        // Define the String.trim() method if missing
        // By Pradeep Kumar Mishra
        // http://stackoverflow.com/a/498995
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }

        // Bring in language files
        dojo.requireLocalization("esriTemplate", "resources");

        // Normalize the browser features
        Modernizr.load([{
            test: window.JSON,
            nope: 'js/json2.js',
            complete: function () {

                // Load the UI loader
                require(["dojo/ready", "js/lgonlineBuildUI"], function (ready) {
                    ready(function () {

                        // Load the UI elements
                        var uiElementsReady = new dojo.Deferred();
                        require(["dojo/ready", "js/lgonlineApp"], function (ready) {
                            ready(function () {
                                uiElementsReady.resolve();
                            });
                        });

                        // Read the UI spec
                        (new js.LGUIBuilder(window.location.search, null, "apps1/ParcelViewer")).ready.then(
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
                                            console.error("Unable to launch application");//???
                                        }
                                    );
                                });
                            },
                            function () {
                                console.error("Unable to find configuration");//???
                            }
                        );

                    });
                });
            }
        }]);
    });
});
/* 
This source is part of the git commit 
aeec887e0a21b0eb 2014-08-19 12:39:49 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
