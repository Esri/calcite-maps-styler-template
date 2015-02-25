define([
    "dojo/Evented",
    "dojo",
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/on",
    "esri",
    "esri/dijit/Search",
    "esri/tasks/locator",
    "esri/lang",
    "esri/layers/FeatureLayer",
    "dojo/dom",
    "dojo/topic",
    "dojo/i18n!application/nls/resources"
],
function (
    Evented,
    dojo,
    ready,
    declare,
    lang,
    array,
    on,
    esri,
    Search,
    Locator,
    esriLang,
    FeatureLayer,
    dom,
    topic,
    i18n
    ) {
    return declare([Evented], {

        options: {
            domNode: null,
            config: null,
            map: null,
        },

        constructor: function (options) {
            // mix in settings and defaults
            var defaults = lang.mixin({}, this.options, options);
            // properties
            // widget node

            this._i18n = i18n;
            this.map = defaults.map;
            this.config = defaults.config;
            this.domNode = defaults.domNode;
        },
        // start widget. called by user
        startup: function () {
            this._init();
        },

        /* ---------------- */
        /* Private Functions */
        /* ---------------- */
        _init: function () {
            this._removeEvents();

            this._addSearch();
        },
        _removeEvents: function () {
            if (this._events && this._events.length) {
                for (var i = 0; i < this._events.length; i++) {
                    this._events[i].remove();
                }
            }
            this._events = [];
        },
        _addSearch: function () {
            var options = {
                map: this.map,
                addLayersFromMap: false,
                autoNavigate: false,
                autoComplete: true,

                minCharacters: 0,
                maxLocations: 5,
                searchDelay: 100
            };
            var defaultSources = this._getGeocoders();
            var searchLayers = this._getSearchLayers();
            if (searchLayers.length > 0) {
                defaultSources = defaultSources.concat(searchLayers);
            }
            this.search = new Search(options, this.domNode);
            this.search.set("sources", defaultSources);

            this.search.on("select-result", lang.hitch(this, this._showLocation));
            this.search.on("clear", lang.hitch(this, this._clear));
            this.search.on("search-results", lang.hitch(this, this._results));
            this.search.on("suggest-results", lang.hitch(this, this._results));


            this.search.startup();
            var activeIndex = 0;
            if (searchLayers.length > 0) {
                array.some(defaultSources, function (s, index) {
                    if (!s.hasEsri) {
                        activeIndex = index;
                        return true;
                    }
                });


                if (activeIndex > 0) {
                    this.search.set("activeSourceIndex", activeIndex);
                }
            }
            dojo.addClass(this.domNode, "searchControl");
        },
        _getGeocoders: function () {
            var defaultSources = [];
            if (this.config.helperServices.geocode === null) { return defaultSources; }
            var geocoders = lang.clone(this.config.helperServices.geocode);
            // each geocoder
            if (geocoders.length === 0) { return defaultSources; }
            //search.get("sources");

            array.forEach(geocoders, lang.hitch(this, function (geocoder) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {

                    geocoder.hasEsri = true;
                    geocoder.locator = new Locator(geocoder.url);
                    geocoder.placefinding = true;
                    geocoder.singleLineFieldName = "SingleLine";

                    geocoder.name = geocoder.name || "Esri World Geocoder";

                    if (this.config.searchExtent) {
                        geocoder.searchExtent = this.map.extent;
                        geocoder.localSearchOptions = {
                            minScale: 300000,
                            distance: 50000
                        };
                    }
                    if (i18n) {
                        if (i18n.geocoder) {
                            if (i18n.geocoder.defaultText) {

                                geocoder.placeholder = i18n.geocoder.defaultText;

                            }
                        }
                    }
                    geocoder.suggest = true;
                    defaultSources.push(geocoder);
                } else if (esriLang.isDefined(geocoder.singleLineFieldName)) {

                    //Add geocoders with a singleLineFieldName defined 
                    geocoder.locator = new Locator(geocoder.url);
                    if (i18n) {
                        if (i18n.geocoder) {
                            if (i18n.geocoder.defaultText) {

                                geocoder.placeholder = i18n.geocoder.defaultText;

                            }
                        }
                    }
                    geocoder.suggest = true;
                    defaultSources.push(geocoder);
                }
            }));

            return defaultSources;
        },
        _getSearchLayers: function () {
            var defaultSources = [];
            if (this.config.searchLayers) {
                var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);

                array.forEach(configuredSearchLayers, lang.hitch(this, function (layer) {

                    var mapLayer = this.map.getLayer(layer.id);
                    if (mapLayer) {
                        var source = {};
                        source.featureLayer = mapLayer;

                        if (layer.fields && layer.fields.length && layer.fields.length > 0) {
                            source.searchFields = layer.fields;
                            source.displayField = layer.fields[0];
                            source.outFields = ["*"];
                            searchLayers = true;
                            defaultSources.push(source);
                            if (mapLayer.infoTemplate) {
                                source.infoTemplate = mapLayer.infoTemplate;
                            }
                        }
                    }
                }));
            }
            //Add search layers defined on the web map item 
            if (this.config.response.itemInfo.itemData && this.config.response.itemInfo.itemData.applicationProperties && this.config.response.itemInfo.itemData.applicationProperties.viewing && this.config.response.itemInfo.itemData.applicationProperties.viewing.search) {
                var searchOptions = this.config.response.itemInfo.itemData.applicationProperties.viewing.search;

                array.forEach(searchOptions.layers, lang.hitch(this, function (searchLayer) {
                    //we do this so we can get the title specified in the item
                    var operationalLayers = this.config.itemInfo.itemData.operationalLayers;
                    var layer = null;
                    array.some(operationalLayers, function (opLayer) {
                        if (opLayer.id === searchLayer.id) {
                            layer = opLayer;
                            return true;
                        }
                    });

                    if (layer && layer.hasOwnProperty("url")) {
                        if (layer.layerObject) {
                            if (layer.layerObject.geometryType === "esriGeometryPoint") {
                                var source = {};
                                var url = layer.url;
                                var name = layer.title || layer.name;

                                if (esriLang.isDefined(searchLayer.subLayer)) {
                                    url = url + "/" + searchLayer.subLayer;
                                    array.some(layer.layerObject.layerInfos, function (info) {
                                        if (info.id == searchLayer.subLayer) {
                                            name += " - " + layer.layerObject.layerInfos[searchLayer.subLayer].name;
                                            return true;
                                        }
                                    });
                                }

                                source.featureLayer = new FeatureLayer(url);
                                source.name = name;

                                source.exactMatch = searchLayer.field.exactMatch;
                                source.displayField = searchLayer.field.name;
                                source.searchFields = [searchLayer.field.name];
                                source.placeholder = searchOptions.hintText;
                                defaultSources.push(source);
                            }
                        }
                    }

                }));
            }

            return defaultSources;
        },

        _results: function (evt) {

            this.emit("search-results", evt);

        },
        _clear: function (evt) {
            this.emit("clear", evt);

        },
        _showLocation: function (evt) {

            topic.publish("app/mapLocate", evt.result.feature.geometry);
        },


    });
});
