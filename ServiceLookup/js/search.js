define([
    "dojo/Evented",
    "dojo",
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/on",
    "esri",
    "esri/dijit/Geocoder",
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
    Geocoder,
    dom,
    topic,
    i18n
    ) {
    return declare([Evented], {

        options: {
            domNode: null,
            geocode: null
        },
        constructor: function (options) {
            // mix in settings and defaults
            var defaults = lang.mixin({}, this.options, options);
            // properties
            // widget node

            this._i18n = i18n;

            this.geocode = defaults.geocode;
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
            this._events.push(topic.subscribe("app/mapLoaded", lang.hitch(this, this._mapLoaded)));

            this._addGeocoder();
        },
        _mapLoaded: function () {
            this.map = arguments[0];

        },
        _removeEvents: function () {
            if (this._events && this._events.length) {
                for (var i = 0; i < this._events.length; i++) {
                    this._events[i].remove();
                }
            }
            this._events = [];
        },    
        _addGeocoder: function () {
            var gcOpts = this._createGeocoderOptions();
            this.geocoder = new Geocoder(gcOpts, this.domNode);
            this.geocoder.on("select", lang.hitch(this, this._showLocation));
            this.geocoder.on("clear", lang.hitch(this, this._clear));
            this.geocoder.on("find-results", lang.hitch(this, this._results));

            this.geocoder.startup();
            dojo.addClass(this.domNode, "searchControl");
        },
        _createGeocoderOptions: function () {
            
            if (this.geocode === null) { return null; }
            var options, geocoders = lang.clone(this.geocode);
            // each geocoder
            if (geocoders.length === 0) { return null; }

            array.forEach(geocoders, function (geocoder) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    geocoder.placefinding = true;
                    if (this.i18n) {
                        if (this.i18n.geocoder) {
                            if (this.i18n.geocoder.defaultText) {

                                geocoder.placeholder = this.i18n.geocoder.defaultText;

                            }
                        }
                    }
                    geocoder.suggest = true;
                }

            }, this);

            options = {
                map: this.map,
                autoNavigate: false,
                autoComplete: true,

                minCharacters: 0,
                maxLocations: 5,
                searchDelay: 100,
                arcgisGeocoder: geocoders.splice(0, 1)[0],
                geocoders: geocoders

            };
            return options;
        },
        _results: function (evt) {

            this.emit("find-results", evt);

        },
        _clear: function (evt) {
            this.emit("clear", evt);

        },
        _showLocation: function (evt) {

            topic.publish("app/mapLocate", evt.result.feature.geometry);
        },

        
    });
});
