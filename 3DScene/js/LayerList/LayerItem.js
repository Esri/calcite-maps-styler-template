define([
  'dojo/Evented',
  'dojo/_base/declare',
  'dojo/_base/lang',

  'dojo/dom-attr',
  'dojo/dom-class',
  'dojo/dom-style',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/i18n!../nls/resources',
  'dojo/text!./templates/LayerItem.html'
], function(
  Evented,
  declare, lang,
  domAttr, domClass, domStyle,
  _WidgetBase, _TemplatedMixin,
  i18n, template
) {

  var layerItem = declare('LayerItem', [_WidgetBase, _TemplatedMixin, Evented], {

    declaredClass: "esri.widgets.LayerItem",

    templateString: template,

    options: {
      layer: null,
      group: null,
      color: '#ff0000'
    },

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function(options) {
      lang.mixin(this.options, options);
      this.layer = this.options.layer;
      this.group = this.options.group;
      this.color = this.options.color;
    },

    postCreate: function() {
      this.inherited(arguments);
      if (this.group) {
        domStyle.set(this.groupNode, "display", "block");
        if (this.group === "opened") {
          domClass.add(this.itemNode, "opened");
        }
      }
      this.titleNode.innerHTML = this.layer.title || this.layer.name;
      if (!this.layer.visible) {
        domClass.add(this.itemNode, "off");
      }
      domStyle.set(this.switchNode, "backgroundColor", this.color);
      domAttr.set(this.actionNode, "title", i18n.tooltips.zoom || "Zoom");
      domAttr.set(this.switchNode, "title", i18n.tooltips.onoff || "On-Off");
      this.layer.watch('visible', lang.hitch(this, function(newValue, oldValue, property, object) {
        console.log(newValue, oldValue, property, object);
        if (newValue === true) {
          domClass.remove(this.itemNode, "off");
        } else {
          domClass.add(this.itemNode, "off");
        }
      }));
    },

    destroy: function() {
      this.layer = null;
      this.group = null;
      this.inherited(arguments);
    },

    _toggleGroup: function() {
      var data = {
        group: this.group,
        layer: this.layer
      };
      this.emit("toggle-group", data);
    },

    _zoomLayer: function() {
      var data = {
        layer: this.layer
      };
      this.emit("zoom-layer", data);
    },

    _toggleLayer: function() {
      // if (domClass.contains(this.itemNode, "off")) {
      //   this.layer.visible = true;
      //   domClass.remove(this.itemNode, "off");
      // } else {
      //   this.layer.visible = false;
      //   domClass.add(this.itemNode, "off");
      // }
      this.layer.visible = !this.layer.visible;
    }


  });

  return layerItem;
});
