define([
    "dojo/Evented",
    "dojo",
    "dijit",
    "esri",
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "esri/dijit/Geocoder"
], function (
    Evented,
    dojo,
    dijit,
    esri,
    ready,
    declare,
    lang,
    array,
    Geocoder
   
) {
    return declare([Evented], {
        config: {},
        constructor: function (map,config,divID) {
            this.map = map ;
            this.config = config;
            this.divID = divID;

        },
        startup: function () {
            this._createGeocoder();
            
            this.emit("ready", {"Name": "Geocoder"});
        },
   

        //geocoder functions
        _createGeocoder: function () {
            var gcOpts = this._createGeocoderOptions();
            this.geocoder = new Geocoder(gcOpts, dojo.byId(this.divID));
            this.geocoder.on("select", lang.hitch(this, this._showLocation));
            this.geocoder.on("clear", lang.hitch(this, this._clear));
            this.geocoder.on("find-results", lang.hitch(this, this._results));

            this.geocoder.startup();
        },
        _createGeocoderOptions: function () {
            var options, geocoders = lang.clone(this.config.helperServices.geocode);
            // each geocoder
            if (geocoders.length === 0) { return null; }

            array.forEach(geocoders, function (geocoder) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    geocoder.placefinding = true;
                    geocoder.placeholder = this.config.i18n.geocoder.defaultText;
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
          
            this.emit("select", evt);

        },
       
    });
});
