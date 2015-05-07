define(["dojo/_base/declare", "dojo/_base/lang", "dojo/_base/array", "esri/lang", "esri/tasks/locator", "esri/layers/FeatureLayer"], function (
declare, lang, array, esriLang, Locator, FeatureLayer

) {
    return declare(null, {
        constructor: function (parameters) {
            lang.mixin(this, parameters);
        },
        //*********
        //Variables
        //************
        sources: [],
        map: null,
        //the map 
        useMapExtent: false,
        //When true we restrict world locator to the map extent
        geocoders: [],
        esriSource: null,
        //Geocoders defined in helper services
        itemData: null,
        //web map item info includes operational layers and info about searches configured on web map
        configuredSearchLayers: [],
        //optional array of additional search layers to configure from the application config process
        createSources: function () {
            //Create services from org helper services 
            //Create locators defined in web map item
            //Create configured services. 
            this._createHelperServiceSources();
            if (this.itemData) {
                this._createWebMapItemSources();
            }
            if (this.configuredSearchLayers.length > 0) {
                this._createConfiguredSources();
            }


            return this.sources;
        },
        _createHelperServiceSources: function () {

            var geocoders = lang.clone(this.geocoders);
            array.forEach(geocoders, lang.hitch(this, function (geocoder) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    var worldGeocoder = this.esriSource;

                    worldGeocoder.hasEsri = true;

                    //Some orgs have the Esri world locator added with 
                    //a custom name defined. Use that name. 
                    if (geocoder.name) {
                        worldGeocoder.name = geocoder.name;
                    }
                    //Restrict search to custom extent if defined
                    if (this.useMapExtent) {
                        worldGeocoder.searchExtent = this.map.extent;
                    }
                    this.sources.push(worldGeocoder);
                } else if (esriLang.isDefined(geocoder.singleLineFieldName)) {
                    geocoder.locator = new Locator(geocoder.url);
                    this.sources.push(geocoder);
                }
            }));
        },
        _createWebMapItemSources: function () {

            if (this.itemData && this.itemData.applicationProperties && this.itemData.applicationProperties.viewing && this.itemData.applicationProperties.viewing.search) {
                //search is configured on the web map item 
                var searchOptions = this.itemData.applicationProperties.viewing.search;
                array.forEach(searchOptions.layers, lang.hitch(this, function (searchLayer) {
                    //get the title specified in the item
                    var operationalLayers = this.itemData.operationalLayers,
                        layer = null;
                    array.some(operationalLayers, function (opLayer) {
                        if (opLayer.id === searchLayer.id) {
                            layer = opLayer;
                            return true;
                        }
                    });
                    if (layer && layer.hasOwnProperty("url")) {

                        var source = {},
                            url = layer.url,
                            name = layer.title || layer.name;
                        if (esriLang.isDefined(searchLayer.subLayer)) {
                            url = url + "/" + searchLayer.subLayer;
                            array.some(layer.layerObject.layerInfos, function (info) {
                                if (info.id === searchLayer.subLayer) {
                                    name += " - " + layer.layerObject.layerInfos[searchLayer.subLayer].name;
                                    return true;
                                }
                            });
                        }
                        //Get existing layer or create new one
                        var mapLayer = this.map.getLayer(layer.id);
                        if (mapLayer && mapLayer.type === "FeatureLayer") {
                            source.featureLayer = mapLayer;
                        } else {
                            source.featureLayer = new FeatureLayer(url);
                        }

                        source.name = name;
                        source.exactMatch = searchLayer.field.exactMatch;
                        source.searchFields = [searchLayer.field.name];
                        source.displayField = searchLayer.field.name;
                        source.outFields = ["*"];
                        source.placeholder = searchOptions.hintText;
                        this.sources.push(source);
                    }
                }));
            }
        },
        _createConfiguredSources: function () {
            array.forEach(this.configuredSearchLayers, lang.hitch(this, function (layer) {
                var mapLayer = this.map.getLayer(layer.id);
                if (mapLayer) {
                    var source = {};
                    source.featureLayer = mapLayer;

                    if (layer.fields && layer.fields.length && layer.fields.length > 0) {
                        source.searchFields = layer.fields;
                        source.displayField = layer.fields[0];
                        source.outFields = ["*"];
                        this.sources.push(source);
                    }
                }
            }));
        },
        getActiveSource: function (sources) {
            var activeIndex = null;

            array.some(sources, function (s, index) {
                if (!s.hasEsri && s.featureLayer) {
                    activeIndex = index;
                    return true;
                }
            });
            return activeIndex;
        }
    });
});