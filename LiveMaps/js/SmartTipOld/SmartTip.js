define([
  'dojo/Evented',

  'dojo/_base/declare',
  'dojo/_base/Color',
  'dojo/_base/lang',

  'dojo/dom-construct',
  'dojo/dom-geometry',
  'dojo/dom-style',

  'dojo/on',
  'dojo/query',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/text!./templates/SmartTip.html',

  'esri/graphic',
  'esri/layers/GraphicsLayer',

  'esri/renderers/SimpleRenderer',
  'esri/symbols/SimpleLineSymbol',
  'esri/symbols/SimpleMarkerSymbol'

], function(
  Evented,
  declare, Color, lang,
  domConstruct, domGeom, domStyle,
  on, query,
  _WidgetBase, _TemplatedMixin,
  template,
  Graphic, GraphicsLayer,
  SimpleRenderer, SimpleLineSymbol, SimpleMarkerSymbol
) {

  var tip = declare('SmartTip', [_WidgetBase, _TemplatedMixin, Evented], {

    declaredClass: "esri.widgets.SmartTip",

    templateString: template,

    rtl: false,

    css: {
      root: "esri-smart-tip",
      content: "content"
    },

    options: {
      map: null,
      color: '#ff0000',
      point: null,
      info: {}
    },

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function(options, srcRefNode) {
      // mix in settings and defaults
      lang.mixin(this.options, options);
      // widget node
      this.domNode = srcRefNode;
    },

    postCreate: function() {
      this.inherited(arguments);
      if(query(".dj_rtl").length > 0) {
        this.rtl = true;
      }
    },

    startup: function() {
      this.inherited(arguments);
      var rgb = Color.fromString(this.options.color).toRgb();
      rgb.push(0.5);
      var symHiLine = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255, 0]), 1);
      var symHi = new SimpleMarkerSymbol().setSize(12).setColor(new Color(rgb)).setOutline(symHiLine);
      var renHi = new SimpleRenderer(symHi);
      this.layer = new GraphicsLayer();
      this.layer.setRenderer(renHi);
      this.map.addLayer(this.layer);
      on(this.map, "extent-change", lang.hitch(this, this._updateExtent));
      this._updateTip();
    },

    destroy: function() {
      this.map = null;
      this.inherited(arguments);
    },

    // clear
    clear: function() {
      this.containerNode.innerHTML = "";
    },

    // update
    update: function(options) {
      this.options.point = options.point;
      this.options.info = options.info;
      this._updateTip();
      this._updatePosition();
    },

    // update tip
    _updateTip: function() {
      var info = this.options.info;
      // img
      this.topNode.innerHTML = "";
      if (info.img) {
        domConstruct.create("img", {
          src: info.img
        }, this.topNode);
      }

      // avatar
      this.avatarNode.innerHTML = "";
      if (info.avatar) {
        domConstruct.create("img", {
          src: info.avatar
        }, this.avatarNode);
      }

      // title
      this.titleNode.innerHTML = "";
      var title = "";
      if (info.title) {
        title += info.title;
      } else if (info.author) {
        title += info.tauthor;
      }
      this.titleNode.innerHTML = title;

      // date
      this.dateNode.dateHTML = "";
      if (info.date) {
        this.dateNode.innerHTML = this._calcDate(info.date);
      }

      // desc
      this.descNode.innerHTML = info.desc || "";
    },

    // calc date
    _calcDate: function(dt) {
      var value = 1;
      var units = "MIN";
      var now = new Date().get;
      var diff = (now - dt) / 1000;
      if (diff > 60) {
        value = Math.floor(diff / 60);
      }
      if (diff > 60 * 60) {
        value = Math.floor(diff / 3600);
        units = "HR";
      }
      if (diff > 60 * 60 * 24) {
        value = Math.floor(diff / (60 * 60 * 24));
        units = "DAY";
      }
      if (value > 1) {
        units += "S";
      }
      return value + " " + units;
    },

    // update position
    _updatePosition: function() {
      var pos = domGeom.position(this.domNode);
      var w = this.map.width;
      var h = this.map.height;
      var pt = this.map.toScreen(this.options.point);
      var x;
      var y;
      if(pt.x > 0 && pt.x < w - pos.w && pt.y > 10 && pt.y < h - pos.h) {
        x = pt.x;
        y = pt.y;
      } else {
        x = w / 2;
        y = h / 2;
        this.map.centerAt(this.options.point);
      }
      domStyle.set(this.domNode, "left", x + "px");
      domStyle.set(this.domNode, "top", y + "px");
      setTimeout(lang.hitch(this, this._highlightPoint), 1000);
    },

    // update extent
    _updateExtent: function() {
      var pt = this.map.toScreen(this.options.point);
      domStyle.set(this.domNode, "left", pt.x + "px");
      domStyle.set(this.domNode, "top", pt.y + "px");
    },

    // highlight point
    _highlightPoint: function() {
      this.layer.clear();
      var pt = this.options.point;
      var gra1 = new Graphic(pt);
      this.layer.add(gra1);
      var node1 = gra1.getNode();
      if (node1) {
        node1.setAttribute("data-count", "1");
      }
      var gra2 = new Graphic(pt);
      this.layer.add(gra2);
      var node2 = gra2.getNode();
      if (node2) {
        node2.setAttribute("data-count", "2");
      }
    }

  });

  return tip;
});
