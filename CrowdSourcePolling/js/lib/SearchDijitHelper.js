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
    "esri/dijit/Search",
    "esri/layers/FeatureLayer",
    "esri/tasks/locator",
    "dojo/domReady!"
], function (
    declare,
    array,
    lang,
    Search,
    FeatureLayer,
    Locator
) {

    //========================================================================================================================//

    return {

        /**
         * Creates the Search dijit in the map using the webmap's search configuration.
         * @param {object} map Application's map object
         * @param {array} operationalLayers List of operational layers supplied by itemData response from createMap
         * @param {array} geocoders List of geocoders to use; if empty list and application properties
         * enable the geocoder, the default geocoder is used
         * @param {object} appProperties Webmap's applicationProperties structure
         * @param {string|object} srcNode Reference or id of the HTML element where the widget should be rendered
         */
        createSearchDijit: function (map, operationalLayers, geocoders, appProperties, srcNode) {
            var searchAppProperties, searchSources = [], addLayersFromMap = false, searchControl;

            // Adjust the search properties with whatever's configured in the webmap;
            // these properties are in the webmap's application properties if they exist
            //   "applicationProperties": {
            //       "viewing": {
            //           "search": {
            //               "enabled": true,
            //               "disablePlaceFinder": false,  // i.e., turn off address geocoding
            //               "hintText": "",  // replaced with internationalized "Find place or address"
            //               "layers": []  // i.e., enable searching in these layers
            //           }
            //       }
            //   }
            // For representing the default properties, we'll assign a null to the layers list as a flag: if
            // it remains null, then we know that the layers property wasn't defined and we'll add all layers.
            // If it's an empty list, then we know that the search properties were configured and that the configurer
            // chose to not search any feature layers (there's no other switch to indicate this).
            searchAppProperties = {
                enabled: true,
                disablePlaceFinder: false,
                hintText: "",
                layers: null
            };
            if (appProperties && appProperties.viewing && appProperties.viewing.search) {
                lang.mixin(searchAppProperties, appProperties.viewing.search);
            }

            // If we're searching, set up the various sources
            if (searchAppProperties.enabled) {

                // If address searching is enabled, prepare the geocoders from their URLs
                if (!searchAppProperties.disablePlaceFinder) {
                    searchSources = searchSources.concat(this.createGeocoderSources(geocoders, map.extent));
                }

                // If the app properties have null for the layers, then the properties aren't set up for
                // searching for this webmap and we'll add all layers
                if (!searchAppProperties.layers) {
                    addLayersFromMap = true;

                // Otherwise, just use the layers configured in the webmap--which may be an empty list
                } else if (searchAppProperties.layers.length > 0) {
                    searchSources = searchSources.concat(
                        this.createWebMapItemSources(map, operationalLayers, searchAppProperties.layers, searchAppProperties.hintText)
                    );
                }

                // Create the dijit
                if (searchSources.length > 0) {
                    searchControl = new Search({
                        addLayersFromMap: addLayersFromMap,
                        enableButtonMode: true,
                        enableInfoWindow: false,
                        map: map
                    }, srcNode);

                    // Set its search sources
                    searchControl.set("sources", searchSources);

                    // Launch it
                    searchControl.startup();
                }
            }
        },

        /**
         * Creates geocoder sources for the dijit.
         * @param {array} geocoders List of geocoders to use; if empty list and application properties
         * enable the geocoder, the default geocoder is used
         * @param {object} defaultGeocoderExtentsLimit Extents to limit Esri default geocoder to
         * @return {array} List of sources created
         */
        createGeocoderSources: function (geocoders, defaultGeocoderExtentsLimit) {
            var sources = [];
            if (geocoders && geocoders.length > 0) {
                array.forEach(geocoders, lang.hitch(this, function (geocoder) {
                    var geocoderCopy;

                    // If the geocoder is the default one, just reference that
                    if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                        sources.push(this.getDefaultSource(defaultGeocoderExtentsLimit, geocoder.name));

                    // Otherwise be sure that geocoder supports single-line searches
                    } else if (geocoder.singleLineFieldName) {
                        geocoderCopy = lang.clone(geocoder);
                        geocoderCopy.locator = new Locator(geocoderCopy.url);
                        sources.push(geocoderCopy);
                    } else {
                        console.log(geocoder.url + " is missing the singleLineFieldName parameter");
                    }
                }));
            // If no geocoders are supplied, use the default one
            } else {
                sources.push(this.getDefaultSource(defaultGeocoderExtentsLimit));
            }
            return sources;
        },

        /**
         * Creates a copy of the default Esri geocoder source.
         * @param {object} defaultGeocoderExtentsLimit Extents to limit Esri default geocoder to
         * @param {string} [customName] Name to label geocoder with
         * @return {object} Default source
         */
        getDefaultSource: function (defaultGeocoderExtentsLimit, customName) {
            // Default source for the Search dijit is described in
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
            s.destroy();

            esriSource.hasEsri = true;
            if (customName) {
                esriSource.name = customName;
            }
            esriSource.searchExtent = defaultGeocoderExtentsLimit;
            return esriSource;
        },

        /**
         * Creates feature layer sources for the dijit.
         * @param {object} map Application's map object
         * @param {array} operationalLayers List of operational layers supplied by itemData response from createMap
         * @param {array} searchLayers List of webmap feature-layer search configurations
         * @param {string} [hintText] Text to display in the search box for a feature layer
         * @return {array} List of sources created
         */
        createWebMapItemSources: function (map, operationalLayers, searchLayers, hintText) {
            // Example of feature layer configuration (searchLayers)
            //   "layers": [{
            //       "id": "LandUseCasesVotesComments_8488",
            //       "field": {
            //           "name": "CASEID",
            //           "exactMatch": false,
            //           "type": "esriFieldTypeString"
            //       }
            //   }]
            var sources = [];
            array.forEach(searchLayers, lang.hitch(this, function (searchLayer) {
                var layer = null, source = {}, url, name, mapLayer;

                // Get the title specified in the item
                array.some(operationalLayers, function (opLayer) {
                    if (opLayer.id === searchLayer.id) {
                        layer = opLayer;
                        return true;
                    }
                });
                if (layer && layer.hasOwnProperty("url")) {
                    url = layer.url;
                    name = layer.title || layer.name;

                    // Refine the name if we're dealing with a sublayer
                    if (searchLayer.subLayer) {
                        url = url + "/" + searchLayer.subLayer;
                        array.some(layer.layerObject.layerInfos, function (info) {
                            if (info.id === searchLayer.subLayer) {
                                name += " - " + layer.layerObject.layerInfos[searchLayer.subLayer].name;
                                return true;
                            }
                        });
                    }

                    // Get existing layer or create new one
                    mapLayer = map.getLayer(layer.id);
                    if (mapLayer && (mapLayer.type === "Feature Layer" || mapLayer.type === "FeatureLayer")) {
                        source.featureLayer = mapLayer;
                    } else {
                        source.featureLayer = new FeatureLayer(url, {
                            outFields: ["*"]
                        });
                    }

                    // Copy the search configuration
                    source.name = name;
                    source.exactMatch = searchLayer.field.exactMatch;
                    source.searchFields = [searchLayer.field.name];
                    source.displayField = searchLayer.field.name;
                    source.outFields = ["*"];
                    if (hintText) {
                        source.placeholder = hintText;
                    }

                    sources.push(source);
                }
            }));
            return sources;
        }
    };

    //========================================================================================================================//

});
