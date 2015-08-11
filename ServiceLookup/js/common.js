define([
  "dojo/Evented",
  "dojo",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/_base/array",
  "dojo/on",
  "esri",
  "esri/dijit/LocateButton",
  "esri/geometry",
  "esri/dijit/BasemapGallery",
  "esri/toolbars/draw",
  "esri/dijit/Geocoder",
  "dijit/layout/ContentPane",
  "dijit/TitlePane",
  "dojo/dom"
],
function (
  Evented,
  dojo,
  declare,
  lang,
  array,
  on,
  esri,
  LocateButton,
  Geometry,
  BasemapGallery,
  Draw,
  Geocoder,
  ContentPane,
  TitlePane,
  dom
  ) {
  return declare([Evented], {
    map: null,
    config: {},
    geoLocate: null,
    toolbar: null,
    basemapGallery: null,
    constructor: function (map, config) {
      this.map = map;
      this.config = config;
    },

    addLocatorButton: function (divID) {

      this.geoLocate = new LocateButton({
        map: this.map,
        pointerGraphic: null,
        centerAt: false,
        highlightLocation: false,
        setScale: false
      }, divID);

      on(this.geoLocate, "locate", lang.hitch(this, this._locate));

      this.geoLocate.startup();
      dojo.addClass(dom.byId(divID), "locateButton");

    },
    _locate: function (location) {
      this.geoLocate.clear();

      if (location.error !== null && location.error !== undefined) {
        alert(location.error);

      } else {
        var point = new Geometry.Point({
          "x": location.position.coords.longitude,
          "y": location.position.coords.latitude,
          " spatialReference": {
            " wkid": 4326
          }
        });
        this.emit("locate", point);
      }

    },

    addGeocoder: function (divID) {
      var gcOpts = this._createGeocoderOptions();
      this.geocoder = new Geocoder(gcOpts, dojo.byId(divID));
      this.geocoder.on("select", lang.hitch(this, this._showLocation));
      this.geocoder.on("clear", lang.hitch(this, this._clear));
      this.geocoder.on("find-results", lang.hitch(this, this._results));

      this.geocoder.startup();
      dojo.addClass(dojo.byId(divID), "searchControl");
    },
    _createGeocoderOptions: function () {
      if (this.config.helperServices === null ||
        this.config.helperServices === undefined) {
        return null;
      }
      if (this.config.helperServices.geocode === null ||
        this.config.helperServices.geocode === undefined) {
        return null;
      }
      var options, geocoders = lang.clone(this.config.helperServices.geocode);
      // each geocoder
      if (geocoders.length === 0) { return null; }

      array.forEach(geocoders, function (geocoder) {
        if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
          geocoder.placefinding = true;
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

    addBaseMapGallery: function (divId) {
      var title = "Switch Basemap";
      if (this.config.i18n) {
        if (this.config.i18n.ui) {
          if (this.config.i18n.ui.basemapButton) {
            title = this.config.i18n.ui.basemapButton;
          }
        }
      }

      dojo.addClass(dom.byId(divId), "basemapButton");

      var tp = new TitlePane({ title: title, closable: false, open: false });

      dom.byId(divId).appendChild(tp.domNode);

      tp.startup();
      var cp = new ContentPane({
        content: "<div id='basemapContent'>hit</div>",
        style: "width: 380px; height: 280px; overflow: auto;"
      }).placeAt(tp.containerNode);
      cp.startup();

      if (this.config.basemapGalleryGroupQuery) {
        this.basemapGallery = new BasemapGallery({
          basemap: this.config.basemapGalleryGroupQuery,
          map: this.map
        }, "basemapContent");
      } else {
        this.basemapGallery = new BasemapGallery({
          showArcGISBasemaps: true,
          map: this.map
        }, "basemapContent");
      }

      this.basemapGallery.startup();

      this.basemapGallery.on("error", function (msg) {
        console.log("basemap gallery error:  ", msg);
      });
    },

    createToolbar: function () {
      this.toolbar = new Draw(this.map);
      this.toolbar.on("draw-end", lang.hitch(this, this._drawEnd));
      if (this.config.i18n) {

        if (this.config.i18n.map) {

          if (this.config.i18n.map) {
            esri.bundle.toolbars.draw.addPoint = this.config.i18n.map.mouseToolTip;
          }
        }
      }
      this.toolbar.deactivate();

    },
    _drawEnd: function (evt) {
      this.emit("draw-end", evt);
    },
    activateToolbar: function (geometryType) {
      if (this.toolbar) {
        this.toolbar.activate(geometryType);
      }
    },
    deactivateToolbar: function () {
      if (this.toolbar) {
        this.toolbar.deactivate();
      }
    }

  });
});
