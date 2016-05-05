define([
  'dojo/Evented',

  'dojo/_base/declare',
  'dojo/_base/array',
  'dojo/_base/Color',
  'dojo/_base/lang',
  'dojo/_base/html',

  'dojo/dom-class',
  'dojo/dom-construct',
  'dojo/dom-style',

  'dojo/number',
  'dojo/on',
  'dojo/query',

  'dojox/gfx',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/text!./templates/VizCards.html'

], function(
  Evented,
  declare, array, Color, lang, html,
  domClass, domConstruct, domStyle,
  number, on, query,
  gfx,
  _WidgetBase, _TemplatedMixin,
  template
) {

  var cards = declare('VizCards', [_WidgetBase, _TemplatedMixin, Evented], {

    declaredClass: "esri.widgets.VizCards",

    templateString: template,

    rtl: false,

    css: {
      root: "esri-viz-cards",
      content: "content"
    },

    options: {
      view: null,
      features: [],
      vizField: null,
      displayField: null,
      color: '#ff0000',
      showPercent: false
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
      // store localized strings
      //this._i18n = i18n;
    },

    postCreate: function() {
      this.inherited(arguments);
      if(query(".dj_rtl").length > 0) {
        this.rtl = true;
      }
    },

    startup: function() {
      this.inherited(arguments);
      this._updateCards();
    },

    destroy: function() {
      this.view = null;
      this.inherited(arguments);
    },

    // clear
    clear: function() {
      this.containerNode.innerHTML = "";
    },

    // update
    update: function(options) {
      lang.mixin(this.options, options);
      this._updateCards();
    },

    // select card
    selectCard: function(index) {
      var id = "card_" + index;
      this._unselectCards();
      domClass.add(id, "selected");
      var w = html.getContentBox(this.containerNode).w;
      var pos = (index * 180) - w / 2 + 90;
      if (this.rtl) {
        pos = (this.options.features.length - index) * 180 - w / 2 - 90;
      }
      if (pos < 0) {
        pos = 0;
      }
      this.containerNode.scrollLeft = pos;
    },

    // get feature
    getFeature: function(index) {
      //console.log(index, this.options.features[index]);
      if (this.options.features.length > index) {
        return this.options.features[index];
      }
      return null;
    },

    //find feature
    findFeature: function(fld, value) {
      var f = null;
      array.some(this.options.features, function(feature){
        if (feature.attributes[fld] === value) {
          f = feature;
        }
      });
      return f;
    },

    // get total
    _getTotal: function() {
      var fld = this.options.vizField;
      var total = 0;
      array.forEach(this.options.features, function(f) {
        total += f.attributes[fld];
      });
      return total;
    },

    // update cards
    _updateCards: function() {

      var node = this.contentNode;
      var recs = this.options.features;
      var total = this._getTotal();
      node.innerHTML = "";
      var pos = 0;
      if(this.rtl) {
        pos = recs.length * 180;
      }
      this.containerNode.scrollLeft = pos;
      domStyle.set(node, "width", recs.length * 180 + "px");

      var fSize = null;

      array.forEach(recs, lang.hitch(this, function(rec, index) {
        //var geom = rec.geometry;
        var attr = rec.attributes;
        var value = attr[this.options.vizField];
        var valueF = number.format(value);
        if (!fSize) {
          fSize = Math.floor(150 / valueF.length + 3);
          if (fSize < 10) {
            fSize = 10;
          }
          if (fSize > 60) {
            fSize = 60;
          }
        }
        var name = attr[this.options.displayField];
        if (value && value > 0) {

          var vizCard = domConstruct.create("div", {
            id: "card_" + index
          }, node);
          domClass.add(vizCard, "card");

          var vizHeader = domConstruct.create("div", {
            innerHTML: (index + 1) + ". " + name
          }, vizCard);
          domClass.add(vizHeader, "header");

          var vizValue = domConstruct.create("div", {
            innerHTML: valueF
          }, vizCard);

          if (this.options.showPercent) {

            domClass.add(vizValue, "value");

            var pct = parseInt(value / total * 100, 10);
            var pctLabel = pct + "%";
            if (value > 0 && pct < 1) {
              pctLabel = "<1%";
            }

            var vizArea = domConstruct.create("div", {}, vizCard);
            domClass.add(vizArea, "area");

            var vizChart = domConstruct.create("div", {}, vizArea);
            domClass.add(vizChart, "chart");

            var vizPct = domConstruct.create("div", {
              innerHTML: pctLabel
            }, vizArea);
            domClass.add(vizPct, "pct");

            this._createChart(vizChart, pct);

          } else {

            domClass.add(vizValue, "valueBig");
            domStyle.set(vizValue, "fontSize", fSize + "px");

          }

          on(vizCard, "click", lang.hitch(this, function() {
            this._clickCard(index);
          }));

        }

      }));
    },

    // create chart
    _createChart: function(node, pct) {
      var box = html.getContentBox(node);
      var w = box.w;
      var h = box.h;
      var size = Math.min(w, h);
      var cx = size / 2;
      var cy = size / 2;
      var radius = cx - 3;

      // surface
      var surface = gfx.createSurface(node, size, size);
      surface.clear();
      // chart base
      surface.createCircle({
        cx: cx,
        cy: cy,
        r: radius
      }).
      setStroke({
        width: 6,
        color: Color.fromArray([255, 255, 255, 0.15]),
        cap: "round"
      });
      // chart donut
      if (pct > 0) {
        if (pct >= 100) {
          pct = 99;
        }
        var angle = pct * 360 / 100;
        var flag = false;
        if (angle >= 180) {
          flag = true;
        }
        var pt = this._getEndPoint(radius, angle, cx, cy);
        var startY = cy - radius;
        surface.createPath()
          .moveTo(cx, startY)
          .arcTo(radius, radius, 0, flag, true, pt.x, pt.y)
          .setStroke({
            width: 6,
            color: this.options.color,
            cap: "round"
          });
      }
    },

    // get end point
    _getEndPoint: function(r, angle, cx, cy) {
      var a = angle;
      if (angle > 0 && angle < 90) {
        a += 270;
      } else if (angle > 90) {
        a = angle - 90;
      }
      var rad = a * Math.PI / 180;
      var ptX = cx + Math.cos(rad) * r;
      var ptY = cy + Math.sin(rad) * r;
      return {
        x: ptX,
        y: ptY
      };
    },

    // click card
    _clickCard: function(index) {
      var id = "card_" + index;
      if (domClass.contains(id, "selected")) {
        this._unselectCards();
        this.emit("selection", {});
      } else {
        this._unselectCards();
        domClass.add(id, "selected");
        var feature = this.options.features[index];
        this.emit("selection", {
          data: feature
        });
      }
    },

    // unselect cards
    _unselectCards: function() {
      query(".card").forEach(function(card) {
        domClass.remove(card, "selected");
      });
    }

  });

  return cards;
});
