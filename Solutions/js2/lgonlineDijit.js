/*global define,dojo,js */
/*jslint sloppy:true */
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
define("js/lgonlineDijit", ["dojo/Deferred", "dojo/dom-construct", "js/lgonlineMap"], function (Deferred, domConstruct) {

    //========================================================================================================================//

    dojo.declare("js.LGMapDijitContainer", [js.LGGraphic, js.LGMapDependency], {
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
            require([this.dijitAmd], function (dijitConstructor) {
                pThis.dijit = new dijitConstructor({
                    map: pThis.mapObj.mapInfo.map
                }, domConstruct.create("div", null, pThis.rootDiv)).startup();

                pThis.ready.resolve(pThis);
            });
        }
    });

    //========================================================================================================================//

});
