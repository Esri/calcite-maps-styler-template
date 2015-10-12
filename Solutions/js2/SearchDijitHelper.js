/*global define,dojo,console */
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
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/json",
    "dojo/query",
    "esri/dijit/Search",
    "esri/lang",
    "esri/layers/FeatureLayer",
    "esri/tasks/locator"
], function (
    declare,
    array,
    lang,
    JSON,
    query,
    Search,
    esriLang,
    FeatureLayer,
    Locator
) {

    //========================================================================================================================//

    return {

        /**
         * Creates the Search dijit in the map using the webmap's search configuration.
         * @param {object} searchItem App item managing the dijit
         * @param {array} operationalLayers List of operational layers supplied by itemData response from createMap
         * @param {array} geocoders List of geocoders to use; if empty list, the default geocoder is used
         * @param {string|object} srcNode Reference or id of the HTML element where the widget should be rendered
         * @param {boolean} searchAlwaysExpanded Whether or not search button is always expanded (always shows its
         * type-in box; true) or is dynamically expanded (false)
         */
        createSearchDijit: function (searchItem, operationalLayers, geocoders, srcNode, searchAlwaysExpanded) {
            // There are three versions for searches that can be configured via the AGOL configuration app. The app takes
            // first usable source found in the list below and ignores the rest.
            //   1. Use the "search" configuration widget linked to the searchLayers app attribute.
            //   2. Use a pair of "multilayerandfieldselector" configuration widgets linked to the searchLayersString and
            //      displayLayersString app attributes.
            //   3. Use a trio of "string" configuration widgets linked to the searchLayerName, searchFields,
            //      and displayFields app attributes.
            // If none is specified, use default geocoder and search display field of each feature layer.
            //
            var done = false, layersDone = false, searchSources = [], addLayersFromMap = false, searchControl,
                map = searchItem.mapObj.appConfig.map, activeSource = "all", dijitWidth;

            // 1. Using the "search" configuration widget linked to the searchLayers app attribute.
            layersDone = done = this.checkForSearchWidgetSources(searchItem, searchSources);

            // 2. Using a pair of "multilayerandfieldselector" configuration widgets linked to the searchLayersString and
            //    displayLayersString app attribute.
            if (!layersDone) {
                layersDone = this.checkForSearchLayerStringSources(searchItem, searchSources);
            }

            // 3. Using a trio of "string" configuration widgets linked to the searchLayerName, searchFields,
            //    and displayFields app attributes.
            if (!layersDone) {
                layersDone = this.checkForSearchStringSources(searchItem, searchSources);
            }

            // Fallback to the display field of each feature layer
            if (!layersDone) {
                layersDone = addLayersFromMap = true;
            }

            // Add in geocoder(s) if using only feature layer specs
            if (!done) {
                // If we have geocoders supplied, we'll add them in; otherwise, we'll use the default geocoder
                this.prepareGeocodersSource(geocoders, map.extent, searchSources);
            }

            // Create the dijit
            if (searchSources.length > 0) {
                if (searchSources.length === 1) {
                    activeSource = 0;
                }
                searchControl = new Search({
                    activeSourceIndex: activeSource,
                    addLayersFromMap: addLayersFromMap,
                    enableButtonMode: true,
                    enableInfoWindow: true,
                    map: map,
                    sources: searchSources,
                    useMapExtent: map.extent
                }, srcNode);

                // Launch it
                searchControl.startup();

                // Expand the widget if it's always to be expanded
                if (searchAlwaysExpanded) {
                    dijitWidth = searchSources.length > 1
                        ? "268px"
                        : "237px";
                    query(".arcgisSearch .hasButtonMode.searchCollapsed .searchExpandContainer").style("width", dijitWidth);
                }
            }
        },

        /**
         * @param {object} searchItem App item managing the dijit
         * @return {boolean} Indicates if this source was usable
         */
        checkForSearchWidgetSources: function (searchItem, searchSources) {
            // Using the "search" configuration widget linked to the searchLayers app attribute.
            // Format:
            //   "searchItem.searchLayers": {
            //       "sources": [{
            //           "locator": "{\"url\":\"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer\",\"_url\":{\"path\":\"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer\",\"query\":null},\"normalization\":true}",
            //           "url": "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            //           "northLat": "Ymax",
            //           "southLat": "Ymin",
            //           "eastLon": "Xmax",
            //           "westLon": "Xmin",
            //           "name": "Esri World Geocoder",
            //           "zoomScale": 10000,
            //           "enableSuggestions": true,
            //           "singleLineFieldName": "SingleLine",
            //           "placeholder": "Find address or place",
            //           "id": "dojoUnique17",
            //           "enable": true,
            //           "searchWithinMap": true
            //       }, {
            //           "layerId": "CodedValues_2288",
            //           "name": "Numbers",
            //           "url": "http://services.arcgis.com/b6gLrKHqgkQb393u/arcgis/rest/services/CodedValues/FeatureServer/0",
            //           "exactMatch": false,
            //           "searchFields": ["Description"],
            //           "displayField": "Description",
            //           "outFields": ["*"],
            //           "placeholder": "Ort oder Adresse",
            //           "id": "dojoUnique18",
            //           "enable": true,
            //           "enableSuggestions": true,
            //           "searchWithinMap": true
            //       }],
            //       "activeSourceIndex": "all"  // or a numeric 0-based index
            var map = searchItem.mapObj.appConfig.map, configSources;

            // Are the parameters for this type of search item available?
            if (searchItem.searchLayers && searchItem.searchLayers.sources) {
                configSources = lang.clone(searchItem.searchLayers.sources);

                array.forEach(configSources, function (source) {
                    // Geocoder
                    if (source.locator) {
                        source.locator = new Locator(source.url);

                    // Feature layer
                    } else {
                        var featureLayer = null;
                        if (source.flayerId) {
                            featureLayer = map.getLayer(source.flayerId);
                        }
                        if (!featureLayer && source.url) {
                            featureLayer = new FeatureLayer(source.url, {
                                outFields: [ "*" ]
                            });
                        }
                        source.featureLayer = featureLayer;
                    }

                    // Constrain the search?
                    if (source.searchWithinMap) {
                        source.searchExtent = map.extent;
                    }

                    // Add the source to our list
                    searchSources.push(source);
                });

                return true;
            }
            return false;
        },

        /**
         * @param {object} searchItem App item managing the dijit
         * @return {boolean} Indicates if this source was usable
         */
        checkForSearchLayerStringSources: function (searchItem, searchSources) {
            // Using a pair of "multilayerandfieldselector" configuration widgets linked to the searchLayersString and
            // displayLayersString app attribute.
            // Format:
            //   "searchItem.searchLayersString": "[{\"id\":\"<layerId>\",\"fields\":[\"<field1>\",\"<field2>\",...],\"type\":\"FeatureLayer\"}]",
            //   "searchItem.displayLayersString": "[{\"id\":\"<layerId>\",\"fields\":[\"<field1>\",\"<field2>\",...],\"type\":\"FeatureLayer\"}]",
            var displayConfigs = null, configSources, map = searchItem.mapObj.appConfig.map;

            // Are the parameters for this type of search item available?
            if (searchItem.searchLayersString) {

                // Build an array of the configured layer & displayfield(s) combinations
                if (searchItem.displayLayersString) {
                    displayConfigs = (searchItem.displayLayersString instanceof Array)
                        ? lang.clone(searchItem.displayLayersString)
                        : JSON.parse(searchItem.displayLayersString);
                }

                // Build sources from each of the configured layer & search field(s) combinations
                configSources = (searchItem.searchLayersString instanceof Array)
                    ? lang.clone(searchItem.searchLayersString)
                    : JSON.parse(searchItem.searchLayersString);

                array.forEach(configSources, lang.hitch(this, function (sourcePrecursor) {
                    var mapLayer = map.getLayer(sourcePrecursor.id), source = {}, displayFields;

                    if (mapLayer && sourcePrecursor.fields && sourcePrecursor.fields.length && sourcePrecursor.fields.length > 0) {
                        // Set up the search and constraints for this source
                        source.name = mapLayer.name;
                        source.featureLayer = mapLayer;
                        source.searchFields = sourcePrecursor.fields;
                        source.outFields = [ "*" ];
                        source.searchExtent = map.extent;
                        source.placeholder = "";

                        // Set up the display for this source; default is to use all source fields
                        displayFields = sourcePrecursor.fields;
                        if (displayConfigs) {
                            array.some(displayConfigs, function (displayConfig) {
                                if (sourcePrecursor.id === displayConfig.id) {
                                    if (displayConfig.fields.length > 0) {
                                        displayFields = displayConfig.fields;
                                    }
                                    return true;
                                }
                                return false;
                            });
                        }

                        // The source.displayField parameter is only designed for a single parameter; if we have more than
                        // one configured display field for this layer, switch to the suggestionTemplate parameter, which
                        // overrides the displayField
                        source.suggestionTemplate = this.buildSuggestionTemplate(displayFields);

                        // Add the source to our list
                        searchSources.push(source);
                    }
                }));

                return true;
            }
            return false;
        },

        /**
         * @param {object} searchItem App item managing the dijit
         * @return {boolean} Indicates if this source was usable
         */
        checkForSearchStringSources: function (searchItem, searchSources) {
            // Using a trio of "string" configuration widgets linked to the searchLayerName, searchFields,
            // and displayFields app attributes.
            // Format:
            //   "searchItem.searchLayerName": "layer1,layer2,...",
            //   "searchItem.searchFields": "field1,field2,...",
            //   "searchItem.displayFields": "field3,...",
            var searchFields, displayFields = null, layerNames, map = searchItem.mapObj.appConfig.map;

            // Are the parameters for this type of search item available?
            if (searchItem.searchLayerName && searchItem.searchFields) {

                // Build an array of the configured search field(s); note that the fields are not tied to a layer
                searchFields = this.splitAndTrim(searchItem.searchFields);

                // Build an array of the configured display field(s); unlike searchFields, these correspond one-to-one
                // with the layer names
                if (searchItem.displayLayersString) {
                    displayFields = this.splitAndTrim(searchItem.displayFields);
                }

                // Set up a source for each configured search layer name
                layerNames = this.splitAndTrim(searchItem.searchLayerName);
                array.forEach(layerNames, lang.hitch(this, function (layerName, iLayerName) {
                    var mapLayer = searchItem.mapObj.getLayer(layerName), mapLayerFields, availableFields = ",",
                        layerSearchFields = [], source = {};

                    if (mapLayer && mapLayer.layerObject) {
                        mapLayer = mapLayer.layerObject;

                        // Determine which of the configured search fields are in this layer
                        mapLayerFields = mapLayer.fields ||
                            (mapLayer.resourceInfo && mapLayer.resourceInfo.fields);
                        if (mapLayerFields) {

                            // Check for existence of fields; start with a list of fields in the search layer
                            array.forEach(mapLayerFields, function (mapLayerField) {
                                availableFields += mapLayerField.name + ",";
                            });

                            // Only keep search fields that the layer has
                            array.forEach(searchFields, function (searchField) {
                                if (availableFields.indexOf("," + searchField + ",") >= 0) {
                                    layerSearchFields.push(searchField);
                                }
                            });

                            // Can we search for anything in this layer?
                            if (layerSearchFields.length > 0) {
                                // Set up the search and constraints for this source
                                source.name = layerName;
                                source.featureLayer = mapLayer;
                                source.searchFields = layerSearchFields;
                                source.outFields = [ "*" ];
                                source.searchExtent = map.extent;
                                source.placeholder = "";

                                // If we have a configured display field, use it
                                if (displayFields && iLayerName < displayFields.length && displayFields[iLayerName]) {
                                    source.displayField = displayFields[iLayerName];

                                // Otherwise we'll use a suggestion template with all of the search fields to best match the
                                // original functionality that displayed the matching search field; the suggestionTemplate
                                // overrides the displayField
                                } else {
                                    source.suggestionTemplate = this.buildSuggestionTemplate(layerSearchFields);
                                }

                                // Add the source to our list
                                searchSources.push(source);
                            }
                        }
                    }
                }));

                return true;
            }
            return false;
        },

        /**
         * Creates a Search dijit suggestion template from a list of fields.
         * @param {array} fields Fields to add
         * @result {string} Generated suggestion template
         */
        buildSuggestionTemplate: function (fields) {
            var suggestionTemplate = "";
            array.forEach(fields, function (field) {
                suggestionTemplate += "${" + field + "} ";
            });
            return suggestionTemplate;
        },

        /**
         * Creates geocoder sources for the Search dijit.
         * @param {array} geocoders List of geocoders to use; if empty list, the default geocoder is used
         * @param {object} defaultGeocoderExtentsLimit Extents to limit Esri default geocoder to
         */
        prepareGeocodersSource: function (geocoders, defaultGeocoderExtentsLimit, searchSources) {
            var geocodersCopy = lang.clone(geocoders);

            if (geocodersCopy && geocodersCopy.length > 0) {
                array.forEach(geocodersCopy, lang.hitch(this, function (geocoder) {
                    // If the geocoder is the default one, just reference that
                    if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                        searchSources.push(this.prepareDefaultGeocoderSource(defaultGeocoderExtentsLimit, geocoder.name));

                    // Otherwise be sure that geocoder supports single-line searches
                    } else if (esriLang.isDefined(geocoder.singleLineFieldName)) {
                        geocoder.locator = new Locator(geocoder.url);
                        searchSources.push(geocoder);

                    } else {
                        console.log(geocoder.url + " is missing the singleLineFieldName parameter");
                    }
                }));
            // If no geocoders are supplied, use the default one
            } else {
                searchSources.push(this.prepareDefaultGeocoderSource(defaultGeocoderExtentsLimit));
            }
        },

        /**
         * Creates a copy of the default Esri geocoder source.
         * @param {object} searchExtentsLimit Extents in which to limit search
         * @param {string} [name] Name for source; name not changed if omitted
         * @return {object} Default source
         */
        prepareDefaultGeocoderSource: function (searchExtentsLimit, name) {
            // Using default geocoder and search display field of each feature layer;
            // the default source for the Search dijit is described in
            // https://developers.arcgis.com/javascript/jsapi/search-amd.html#sources
            //   [
            //     {
            //       locator: new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"),
            //       singleLineFieldName: "SingleLine",
            //       outFields: ["Addr_type"],
            //       name: i18n.widgets.Search.main.esriLocatorName,
            //       localSearchOptions: {
            //         minScale: 300000,
            //         distance: 50000
            //       },
            //       placeholder: i18n.widgets.Search.main.placeholder,
            //       highlightSymbol: new PictureMarkerSymbol(this.basePath + "/images/search-pointer.png", 36, 36).setOffset(9, 18)
            //     }
            //   ]
            var s, esriSource;

            s = new Search();
            esriSource = s.defaultSource;

            esriSource.hasEsri = true;
            esriSource.searchExtent = searchExtentsLimit;
            if (name) {
                esriSource.name = name;
            }

            s.destroy();
            return esriSource;
        },

        /**
         * Converts a comma-separated set of items into an array, trimming each.
         * @param {string} commaSeparatedContent String of items to split
         * @return {array} List of items
         */
        splitAndTrim: function (commaSeparatedContent) {
            var splitArray, outArray = [];
            splitArray = commaSeparatedContent.split(",");
            array.forEach(splitArray, function (item) {
                outArray.push(item.trim());
            });
            return outArray;
        }
    };

    //========================================================================================================================//

});
/*
This source is part of the git commit
83904eba447497f1 2015-10-11 18:11:21 -0700
It is available from https://github.com/Esri/local-government-online-apps
*/
