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
    "esri/lang",
    "esri/layers/FeatureLayer",
    "esri/tasks/locator",
    "js/lgonlineMap"
], function (
    array,
    declare,
    lang,
    Deferred,
    domConstruct,
    JSON,
    Search,
    esriLang,
    FeatureLayer,
    Locator
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

            var searchOptions, dijitSources = [], featureSearchLayers, featureDisplayLayers,
                featureLayerNames, featureSearchFields, featureDisplayFields, searchDijit;

            searchOptions = {
                map: this.appConfig.map,
            };
            if (this.appConfig.find) {
                searchOptions.value = decodeURIComponent(this.appConfig.find);
            }

            // v.3: Check for search configuration via "search" type written into searchLayers object
            if (this.searchLayers && this.searchLayers.sources && this.searchLayers.sources.length > 0) {
                array.forEach(this.searchLayers.sources, lang.hitch(this, function (source) {
                    var featureLayer = null;

                    if (source.locator) {
                        source.locator = new Locator(source.url);

                    } else { //feature layer
                        if (source.flayerId) {
                            featureLayer = this.appConfig.map.getLayer(source.flayerId);
                        }
                        if (!featureLayer && source.url) {
                            featureLayer = new FeatureLayer(source.url, {
                                outFields: ["*"]
                            });
                        }
                        source.featureLayer = featureLayer;
                    }
                    if (source.searchWithinMap) {
                        source.searchExtent = this.appConfig.map.extent;
                    }
                    dijitSources.push(source);
                }));

            // v.2: Check for search configuration via "multilayerandfieldselector" type; search is in searchLayersString
            // and results display is in displayLayersString
            } else if (this.searchLayersString && this.searchLayersString.length > 0) {
                // Geocoders; required by Search dijit to work
                this.addGeocoderSources(this.appConfig.helperServices.geocode, this.appConfig.map.extent, dijitSources);

                // Convert from structured layer names and fields (perhaps stored in a string)
                // into the "search" type format
                featureSearchLayers = (this.searchLayersString instanceof Array) ?
                    this.searchLayersString : JSON.parse(this.searchLayersString);
                featureDisplayLayers = (this.displayLayersString instanceof Array) ?
                    this.displayLayersString : JSON.parse(this.displayLayersString);

                array.forEach(featureSearchLayers, lang.hitch(this, function (searchLayerSpec) {
                    var mapLayer, source;

                    mapLayer = this.appConfig.map.getLayer(searchLayerSpec.id);
                    if (mapLayer) {
                        source = {};
                        source.featureLayer = mapLayer;
                        if (searchLayerSpec.fields && searchLayerSpec.fields.length && searchLayerSpec.fields.length > 0) {
                            source.searchFields = searchLayerSpec.fields;
                            source.placeholder = searchLayerSpec.fields[0];
                            source.displayField = searchLayerSpec.fields[0];
                            source.outFields = ["*"];

                            // Override displayField if there's a display spec available
                            array.some(featureDisplayLayers, function (displayLayerSpec) {
                                if (searchLayerSpec.id === displayLayerSpec.id) {
                                    source.suggestionTemplate = "";
                                    array.forEach(displayLayerSpec.fields, function (displayField){
                                        source.suggestionTemplate += "${" + displayField + "} ";
                                    });
                                    return true;
                                }
                                return false;
                            });

                            source.searchExtent = this.appConfig.map.extent;
                            dijitSources.push(source);
                        }
                    }
                }));

            // v.1: Check for search configuration via a pair of "string" types written into searchLayerName and
            // searchFields and its results display written into displayFields string
            } else if (typeof this.searchLayerName === "string" && typeof this.searchFields === "string") {
                // Geocoders; required by Search dijit to work
                this.addGeocoderSources(this.appConfig.helperServices.geocode, this.appConfig.map.extent, dijitSources);

                // Convert from a comma-separated list of layer names and a corresponding comma-separated
                // list of fields into the "search" type format
                featureLayerNames = this.splitAndTrim(this.searchLayerName);
                featureSearchFields = this.splitAndTrim(this.searchFields);
                featureDisplayFields = this.splitAndTrim(this.displayFields);

                array.forEach(featureLayerNames, lang.hitch(this, function (requestedLayerName, i) {
                    var mapLayer, source, mapLayerFields;

                    mapLayer = this.mapObj.getLayer(requestedLayerName);
                    if (mapLayer && mapLayer.url) {
                        source = {};
                        source.featureLayer = mapLayer.layerObject;
                        source.searchFields = [];
                        source.outFields = ["*"];

                        mapLayerFields = mapLayer.fields || (mapLayer.resourceInfo && mapLayer.resourceInfo.fields);
                        if (mapLayerFields) {
                            // Extract the field names from the field descriptions
                            mapLayerFields = array.map(mapLayerFields, function (field) {
                                return field.name;
                            });

                            // Check each of the requested fields against the fields of this layer
                            array.forEach(featureSearchFields, function (searchField) {
                                if (mapLayerFields.indexOf(searchField) >= 0) {
                                    source.searchFields.push(searchField);
                                    if (!source.placeholder) {
                                        source.placeholder = searchField;
                                    }
                                }
                            });

                            // If there's a display field corresponding to this layer and the field is in the
                            // layer, make it the display field; otherwise, take the default: "Defaults to the
                            // layer's displayField or the first string field."
                            if (featureDisplayFields[i] && mapLayerFields.indexOf(featureDisplayFields[i]) >= 0) {
                                source.displayField = featureDisplayFields[i];
                            }

                            if (source.searchFields.length > 0) {
                                source.searchExtent = this.appConfig.map.extent;
                                dijitSources.push(source);
                            }
                        }
                    }
                }));
            }

            // If searching is not configured, search widget is not provided
            if (!dijitSources) {
                this.ready.reject();
                return;
            }
            searchOptions.sources = dijitSources;

            if (this.searchLayers && this.searchLayers.activeSourceIndex) {
                searchOptions.activeSourceIndex = this.searchLayers.activeSourceIndex;
            } else {
                searchOptions.activeSourceIndex = "all";
            }

            // Create the Search dijit
            searchDijit = new Search(searchOptions, domConstruct.create("div", {
                id: "search"
            }, domConstruct.create("div", null, this.rootDiv)));
            searchDijit.startup();

            // If we have a search term in the URL, launch a search for it
            if (searchOptions.value) {
                searchDijit.search(searchOptions.value);
            }

            this.ready.resolve(this);
        },

        /**
         * Converts a comma-separated set of items into an array, trimming each.
         * @param {string} commaSeparatedContent String of items to split
         * @return {array} List of items
         * @memberOf js.LGMapSearchDijitContainer#
         */
        splitAndTrim: function (commaSeparatedContent) {
            var splitArray, outArray = [];
            splitArray = commaSeparatedContent.split(",");
            array.forEach(splitArray, function (item) {
                outArray.push(item.trim());
            });
            return outArray;
        },

        /**
         * Adds geocoders to a list.
         * @param {array} geocoders Geocoders as defined by the AGOL helperServices; geocoders
         * need to support single-line searches
         * @param {array} extent Search limits for standard geocoder; use null if unlimited
         * @param {array} sources Sources for the Search dijit
         * @return {array} sources Updated list of sources with geocoders pushed onto end
         * @memberOf js.LGMapSearchDijitContainer#
         */
        addGeocoderSources: function (geocoders, extent, sources) {
            array.forEach(geocoders, lang.hitch(this, function (geocoder) {
                var s, esriSource;

                // If it's the standard geocoder, we have a standard way to instantiate it
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    s = new Search();
                    esriSource = s.defaultSource;
                    esriSource.hasEsri = true;
                    //Some orgs have the Esri world locator added with
                    //a custom name defined. Use that name.
                    if (geocoder.name) {
                        esriSource.name = geocoder.name;
                    }
                    //Restrict search to custom extent if defined
                    if (extent) {
                        esriSource.searchExtent = extent;
                    }
                    sources.push(esriSource);
                    s.destroy();

                // Otherwise, use a custom geocoder as long as it supports single-line searches
                } else if (esriLang.isDefined(geocoder.singleLineFieldName)) {
                    geocoder.locator = new Locator(geocoder.url);
                    sources.push(geocoder);
                }
            }));
        }

    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
5fb3d9e6f553e006 2016-02-17 15:51:22 -0800
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
