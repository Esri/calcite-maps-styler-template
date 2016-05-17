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

  'dojo/on',
  'dojo/query',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/text!./templates/SmartCards.html'

], function(
  Evented,
  declare, array, Color, lang, html,
  domClass, domConstruct, domStyle,
  on, query,
  _WidgetBase, _TemplatedMixin,
  template
) {

  var cards = declare('SmartCards', [_WidgetBase, _TemplatedMixin, Evented], {

    declaredClass: "esri.widgets.SmartCards",

    templateString: template,

    size: 310,

    rtl: false,

    css: {
      root: "esri-smart-cards",
      content: "content"
    },

    options: {
      layer: null,
      color: '#ff0000'
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
      this.options.color = this._getTextColor();
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
      this.layer = null;
      this.containerNode.innerHTML = "";
      this.inherited(arguments);
    },

    // clear
    clear: function() {
      this.containerNode.innerHTML = "";
    },

    // update
    update: function() {
      //lang.mixin(this.options, options);
      this._updateCards();
    },

    // select card
    selectCard: function(index) {
      var id = "card_" + index;
      this._unselectCards();
      domClass.add(id, "selected");
      var w = html.getContentBox(this.containerNode).w;
      var pos = (index * this.size) - w / 2 + this.size / 2;
      if (this.rtl) {
        pos = (this.layer.graphics.length - index) * this.size - w / 2 - this.size / 2;
      }
      if (pos < 0) {
        pos = 0;
      }
      this.containerNode.scrollLeft = pos;
    },

    // get text color
    _getTextColor: function() {
      var rgb = Color.fromString(this.options.color).toRgb();
      var yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
      if (yiq <= 120) {
        console.log("YIQ", yiq);
        return "#ffffff";
      } else {
        return this.options.color;
      }
    },


    // update cards
    _updateCards: function() {

      var node = this.contentNode;
      var recs = this.layer.graphics;
      node.innerHTML = "";
      var pos = 0;
      if(this.rtl) {
        pos = recs.length * 310;
      }
      this.containerNode.scrollLeft = pos;
      domStyle.set(node, "width", recs.length * this.size + "px");
      domStyle.set(node, "color", this.options.color);


      array.forEach(recs, lang.hitch(this, function(rec, index) {

        var attr  = rec.attributes;

        // card
        var card = domConstruct.create("div", {
          id: "card_" + index
        }, node);
        domClass.add(card, "card");

        // left
        var left = domConstruct.create("div", {}, card);
        domClass.add(left, "left");

        // right
        var right = domConstruct.create("div", {}, card);
        domClass.add(right, "right");

        // header
        var header = domConstruct.create("div", {}, left);
        domClass.add(header, "header");

        // avatar
        var avatar = domConstruct.create("div", {}, header);
        domClass.add(avatar, "avatar");
        domConstruct.create("img", {
          src: attr.avatar
        }, avatar);

        // title
        var title = domConstruct.create("div", {
          innerHTML: attr.title,
          title: attr.title
        }, header);
        domClass.add(title, "title");

        // date
        var dt = null;
        var dtStr = "";
        if (attr.date) {
          dt = this._calcDate(new Date(attr.date));
          dtStr = dt.value + " " + dt.units;
        }

        // desc
        var desc = domConstruct.create("div", {
          innerHTML: attr.desc
        }, left);
        domClass.add(desc, "desc");


        if (attr.desc && attr.desc !== "") {

          if (dt) {
            var dtSmall = domConstruct.create("div", {
              innerHTML: dtStr
            }, header);
            domClass.add(dtSmall, "dateSmall");
          }

        } else {

          // date
          if (dt) {
            dtStr = "<span class='num'>" + dt.value + "</span><br/>" + dt.units;
            right.innerHTML =  dtStr;
            domClass.add(card, "big");
          }

          var nodeT = title;
          if (nodeT.clientWidth < nodeT.scrollWidth) {
            desc.innerHTML = attr.title;
          }

        }

        on(card, "click", lang.hitch(this, function() {
          this._clickCard(index);
        }));

      }));
    },

    // click card
    _clickCard: function(index) {
      var id = "card_" + index;
      if (domClass.contains(id, "selected")) {
        this._unselectCards();
        this.emit("card-clicked", {});
      } else {
        this._unselectCards();
        domClass.add(id, "selected");
        var feature = this.layer.graphics[index];
        console.log(feature);
        this.emit("card-clicked", {
          data: feature
        });
      }
    },

    // unselect cards
    _unselectCards: function() {
      query(".card").forEach(function(card) {
        domClass.remove(card, "selected");
      });
    },

    // calc date
    _calcDate: function(dt) {
      var value = 1;
      var units = "MIN";
      var now = new Date();
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
      return {
        value: value,
        units: units
      };
    }

  });

  return cards;
});
