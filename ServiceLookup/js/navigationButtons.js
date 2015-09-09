define([
  "dojo/Evented",
  "dojo",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/on",
  "esri/dijit/HomeButton",
  "esri/dijit/LocateButton",
  "dojo/dom-construct",
  "dojo/topic",
  "esri/geometry",
  "dojo/i18n!application/nls/resources"
],
function (
  Evented,
  dojo,
  declare,
  lang,
  on,
  HomeButton,
  LocateButton,
  domConstruct,
  topic,
  Geometry,
  i18n
  ) {
  var Widget = declare([Evented], {

    options: {
      zoomScale: 16
    },
    constructor: function (options) {
      // mix in settings and defaults
      var defaults = lang.mixin({}, this.options, options);
      this.domNode = defaults.domNode;
      this._i18n = i18n;
      this.zoomScale = defaults.zoomScale;

    },
    postCreate: function () {

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
      this._events.push(topic.subscribe("app.mapLoaded", lang.hitch(this, this._mapLoaded)));
      this._mapButtons = dojo.byId(this.domNode);
      if (this._mapButtons) {
        this._homeNode = domConstruct.place("<div id='HomeButton' ></div>", this._mapButtons);
        this._locateNode = domConstruct.place("<div id='LocateButton' ></div>", this._mapButtons);
      }
    },
    _mapLoaded: function () {
      this.map = arguments[0];
      if (this._locateNode) {
        this._addLocatorButton();
      }
      if (this._homeNode) {
        this._addHomeButton();
      }
    },
    _removeEvents: function () {
      if (this._events && this._events.length) {
        for (var i = 0; i < this._events.length; i++) {
          this._events[i].remove();
        }
      }
      this._events = [];
    },
    _addLocatorButton: function () {

      this._LocateButtonLight = new LocateButton({
        map: this.map,
        pointerGraphic: null,
        centerAt: false,
        highlightLocation: false,
        setScale: false,
        theme: "LocateButtonLight"
      }, this._locateNode);

      on(this._LocateButtonLight, "locate", lang.hitch(this, this._locate));

      this._LocateButtonLight.startup();

    },
    _addHomeButton: function () {

      this._HomeButtonLight = new HomeButton({
        map: this.map,
        theme: "HomeButtonLight"
      }, this._homeNode);

      on(this._HomeButtonLight, "home", lang.hitch(this, function () {
        if (this._LocateButtonLight) {
          this._LocateButtonLight.clear();
        }
      }));

      this._HomeButtonLight.startup();

    },
    _locate: function (location) {
      this._LocateButtonLight.clear();

      if (location.error !== null && location.error !== undefined) {
        alert(location.error.message);

      } else {
        //var point = new Geometry.Point({
        //  "x": location.position.coords.longitude,
        //  "y": location.position.coords.latitude,
        //  "spatialReference": {
        //    "wkid": 4326
        //  }
        //});

        //this.map.centerAndZoom(point, this.zoomScale);
        var msg = { "geometry": location.graphic.geometry, "layerId": "GPS" };

        topic.publish("app.mapLocate", msg);

      }

    }
  });
  return Widget;
});
