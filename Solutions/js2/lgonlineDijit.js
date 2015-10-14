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
    "js/SearchDijitHelper",
    "js/lgonlineMap"
], function (
    declare,
    Deferred,
    domConstruct,
    SearchDijitHelper
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
            var pThis = this, options;

            // Create the options structure
            options = this.options || {};
            options.map = this.appConfig.map;

            // Bring in the dijit's AMD, and then construct the dijit
            require([this.dijitAmd], function (DijitConstructor) {
                pThis.dijit = new DijitConstructor(options, domConstruct.create("div", null, pThis.rootDiv));
                pThis.dijit.startup();

                pThis.ready.resolve(pThis);
            });
        }
    });

    //========================================================================================================================//

    declare("js.LGMapSearchDijitContainer", js.LGMapDijitContainer, {
        /**
         * Constructs an LGMapSearchDijitContainer.
         * <br>Creates a map-dependent Search dijit.
         *
         * @constructor
         * @class
         * @name js.LGMapSearchDijitContainer
         * @extends js.LGMapDijitContainer
         * @classdesc
         */
        constructor: function () {
            this.ready = new Deferred();

            this.setUpWaitForDependency("js.LGMapSearchDijitContainer");
        },

        /**
         * Creates the dijit.
         * @memberOf js.LGMapSearchDijitContainer#
         * @override
         */
        createDijit: function () {
            // Add search control
            SearchDijitHelper.createSearchDijit(
                this,
                this.appConfig.itemInfo.itemData.operationalLayers,
                this.appConfig.helperServices.geocode,
                domConstruct.create("div", null, this.rootDiv),
                true
            );
            this.ready.resolve(this);
        }

    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
a5c809f774e80d9a 2015-10-14 12:19:52 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
