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
            var geocoders = this._getGeocoders();
            geocoders = geocoders + this._getSearchLayers();
            this.search = new Search(options, this.domNode);
            this.search.on("select-result", lang.hitch(this, this._showLocation));
            this.search.on("clear", lang.hitch(this, this._clear));
            this.search.on("search-results", lang.hitch(this, this._results));
            this.search.on("suggest-results", lang.hitch(this, this._results));
  

            this.search.startup();
            dojo.addClass(this.domNode, "searchControl");
        },
        _getGeocoders: function () {
            var defaultSources = [];
            if (this.config.helperServices.geocode === null) { return defaultSources; }
            var geocoders = lang.clone(this.config.helperServices.geocode);
            // each geocoder
            if (geocoders.length === 0) { return defaultSources; }
            //search.get("sources");

            array.forEach(geocoders, function (geocoder) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    geocoder.locator = new Locator(geocoder.url);
                    geocoder.singleLineFieldName = "SingleLine";
                    geocoder.placefinding = true;
                    if (this.i18n) {
                        if (this.i18n.geocoder) {
                            if (this.i18n.geocoder.defaultText) {

                                geocoder.placeholder = this.i18n.geocoder.defaultText;

                            }
                        }
                    }
                    geocoder.suggest = true;
                    defaultSources.push(geocoder);
                }
                else {
                    //Add geocoders with a singleLineFieldName defined 
                    geocoder.locator = new Locator(geocoder.url);
                    defaultSources.push(geocoder);
                    if (this.i18n) {
                        if (this.i18n.geocoder) {
                            if (this.i18n.geocoder.defaultText) {

                                geocoder.placeholder = this.i18n.geocoder.defaultText;

                            }
                        }
                    }
                    geocoder.suggest = true;
                    defaultSources.push(geocoder);
                }

            }, this);

           
            return defaultSources;
        },
        _getSearchLayers: function () {
            var defaultSources = [];
            //add configured search layers to the search widget 
            array.forEach(this.config.searchLayers, lang.hitch(this, function (layer) {
                var mapLayer = this.map.getLayer(layer.id);
                if (mapLayer) {
                    var source = {};
                    source.featureLayer = mapLayer;
                    if (layer.fields && layer.fields.length && layer.fields.length > 0) {
                        source.searchFields = layer.fields;
                        defaultSources.push(source);
                    }
                }
            }));
            //Add search layers defined on the web map item
            if (this.config.response.itemInfo.itemData && this.config.response.itemInfo.itemData.applicationProperties && this.config.response.itemInfo.itemData.applicationProperties.viewing && this.config.response.itemInfo.itemData.applicationProperties.viewing.search) {
                var searchOptions = this.config.response.itemInfo.itemData.applicationProperties.viewing.search;
                array.forEach(searchOptions.layers, lang.hitch(this, function (searchLayer) {

                    var mapLayer = this.map.getLayer(searchLayer.id);

                    if (mapLayer && mapLayer.url) {
                        var source = {};
                        var url = mapLayer.url;
                        var name = mapLayer._titleForLegend;
                        if (esriLang.isDefined(searchLayer.subLayer)) {
                            url = url + "/" + searchLayer.subLayer;
                        }
                        //TODO - talk to Matt about this. It is supposed to accept either
                        //a layer or a layer url. But w/o the FeatureLayer part it doesn't work. 
                        source.featureLayer = new FeatureLayer(url);
                        source.name = name;
                        source.exactMatch = searchLayer.field.exactMatch;
                        source.searchField = [searchLayer.field.name];
                        source.placeholder = searchOptions.hintText;
                        defaultSources.push(source);
                    }

                }));
            }

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
