/*global define,dojo,js,require */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
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
    "dojo/Deferred",
    "dojo/dom-construct",
    "js/lgonlineMap"
], function (
    declare,
    Deferred,
    domConstruct
) {

    //========================================================================================================================//

    declare("js.LGMapDijitContainer", [js.LGGraphic, js.LGMapDependency], {
        /**
         * Constructs an LGMapDijitContainer.
         * <br>Creates a map-dependent esri/dijit specified via a configuration parameter.
         *
         * @constructor
         * @class
         * @name js.LGMapDijitContainer
         * @extends js.LGGraphic, js.LGMapDependency
         * @classdesc
         * Manages the app's highlighter.
         */
        constructor: function () {
            this.ready = new Deferred();

            this.setUpWaitForDependency("js.LGMapDijitContainer");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGMapDijitContainer#
         * @override
         */
        onDependencyReady: function () {
            this.createDijit();
        },

        /**
         * Creates the dijit.
         * @memberOf js.LGMapDijitContainer#
         */
        createDijit: function () {
            var pThis = this;

            // Bring in the dijit's AMD, and then construct the dijit
            require([this.dijitAmd], function (DijitConstructor) {
                pThis.dijit = new DijitConstructor({
                    map: pThis.appConfig.map
                }, domConstruct.create("div", null, pThis.rootDiv)).startup();

                pThis.ready.resolve(pThis);
            });
        }
    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
7eb842916c84c4b9 2015-10-29 15:32:46 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
