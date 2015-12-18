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
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Deferred",
    "dojo/dom-construct",
    "dojo/json",
    "esri/dijit/Search",
    "js/SearchSources",
    "js/lgonlineMap"
], function (
    array,
    declare,
    lang,
    Deferred,
    domConstruct,
    JSON,
    Search,
    SearchSources
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

            var configuredSearchLayers, requestedLayerNames, requestedFieldNames, searchSources, createdOptions, searchOptions;
            searchOptions = {
                map: this.appConfig.map,
                useMapExtent: true,
                itemData: this.appConfig.itemInfo.itemData
            };

            // Check for search configuration via "search" type written into searchLayers object
            if (this.searchLayers) {
                searchOptions.applicationConfiguredSources = this.searchLayers.sources || [];

            // Check for search configuration via "multilayerandfieldselector" type written into searchLayersString string
            } else if (this.searchLayersString) {
                configuredSearchLayers = (this.searchLayersString instanceof Array) ?
                    this.searchLayersString : JSON.parse(this.searchLayersString);
                searchOptions.configuredSearchLayers = configuredSearchLayers;
                searchOptions.geocoders = this.appConfig.helperServices.geocode;

            // Check for search configuration via a pair of "string" types written into searchLayerName and searchFields
            } else if (typeof this.searchLayerName === "string" && typeof this.searchFields === "string") {
                this.searchLayerName = this.searchLayerName.trim();
                this.searchFields = this.searchFields.trim();
                if (this.searchLayerName.length > 0 && this.searchFields.length > 0) {
                    // Convert from a comma-separated list of layer names and a corresponding comma-separated
                    // list of fields into the multilayerandfieldselector format
                    // {
                    //     [{
                    //         "id": "TaxParcelTIL_9803",
                    //         "fields": ["PARCELID"],
                    //         "type": "FeatureLayer"
                    //     }], [{
                    //         "id": "TaxParcelTIL_9803",
                    //         "fields": ["SITEADDRESS"],
                    //         "type": "FeatureLayer"
                    //     }]
                    // }

                    // Create a string that contains every requested field name trimmed and surrounded by commas; we can
                    // then add a comma to the front and end of each field of a layer and try to find it in this string;
                    // if found, then we have a valid search field for that layer
                    requestedFieldNames = "," + (this.searchFields.replace(/\s*,\s*/g, ",")).trim() + ",";

                    // Match requested fields against fields actually in each layer; if a layer has any of the requested
                    // search fields, add an entry for the layer into searchOptions.configuredSearchLayers
                    requestedLayerNames = this.searchLayerName.split(",");
                    searchOptions.configuredSearchLayers = [];
                    array.forEach(requestedLayerNames, lang.hitch(this, function (requestedLayerName) {
                        requestedLayer = this.mapObj.getLayer(requestedLayerName.trim());
                        if (requestedLayer && requestedLayer.url) {
                            fieldsOfRequestedLayer = requestedLayer.fields ||
                                (requestedLayer.resourceInfo && requestedLayer.resourceInfo.fields);
                            if (fieldsOfRequestedLayer) {
                                // Check each of the fields of this layer against the requested fields
                                var usableSearchFields = [];
                                array.forEach(fieldsOfRequestedLayer, function (layerField) {
                                    if (requestedFieldNames.indexOf("," + layerField.name + ",") >= 0) {
                                        usableSearchFields.push(layerField.name);
                                    }
                                });

                                // Create an entry in the multilayerandfieldselector format
                                if (usableSearchFields.length > 0) {
                                    searchOptions.configuredSearchLayers.push({
                                        "id": requestedLayer.id,
                                        "fields": usableSearchFields,
                                        "type": "FeatureLayer"
                                    });
                                }
                            }
                        }
                    }));

                    searchOptions.geocoders = this.appConfig.helperServices.geocode;
                }

            // Searching is not configured
            } else {
                this.ready.reject();
            }

            // Format the configuration for the Search dijit
            searchSources = new SearchSources(searchOptions);
            createdOptions = searchSources.createOptions();

            if (this.searchLayers && this.searchLayers.activeSourceIndex) {
                createdOptions.activeSourceIndex = this.searchLayers.activeSourceIndex;
            } else {
                createdOptions.activeSourceIndex = "all";
            }

            // Create the Search dijit
            var search = new Search(createdOptions, domConstruct.create("div", {
                id: "search"
            }, domConstruct.create("div", null, this.rootDiv)));
            search.startup();

            this.ready.resolve(this);
        }

    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
8790b8a28510268b 2015-12-18 12:24:13 -0800
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
