define([
  'dojo/_base/declare',
  'dojo/_base/lang',

  'dojo/dom-style',

  'dojo/promise/all',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/text!./templates/LayerList.html',

  './LayerItem'

], function(
  declare, lang,
  domStyle,
  all,
  _WidgetBase, _TemplatedMixin,
  template,
  LayerItem
) {

  var layerList = declare('LayerList', [_WidgetBase, _TemplatedMixin], {

    declaredClass: "esri.widgets.LayerList",

    templateString: template,

    layers: [],

    options: {
      view: null,
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
      this.view = this.options.view;
      this.color = this.options.color;
      // store localized strings
      //this._i18n = i18n;
    },

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      this.inherited(arguments);
      this._updateList();
    },

    destroy: function() {
      this.view = null;
      this.inherited(arguments);
    },

    // clear
    clear: function() {
      this.containerNode.innerHTML = "";
    },

    _updateList: function() {
      var map = this.view.map;
      var promises = [];
      for (var i = map.layers.length - 1; i >= 0; i--) {
        var id = map.layers.getItemAt(i).id;
        promises.push(map.getLayer(id));
      }
      all(promises).then(lang.hitch(this, function(results) {
        for (i = 0; i < results.length; i++) {
          var lyr = results[i];
          //var group = (lyr.declaredClass === "esri.layers.GroupLayer") ? "closed" : null;
          if (lyr.declaredClass !== "esri.layers.GraphicsLayer") {
            if(lyr.declaredClass === "esri.layers.GroupLayer") {
              if (lyr.listMode === "show") {
                this._addLayerItem(lyr, "closed", false);
              }
              if (lyr.listMode === "hide-children") {
                this._addLayerItem(lyr, null, false);
              }
            } else {
              this._addLayerItem(lyr, null, false);
            }
          }
        }
      }));
    },

    _updateSubLayers: function(lyr) {
      this.subcontentNode.innerHTML = "";
      this._addLayerItem(lyr, "opened", true);
      for (var j = 0; j < lyr.layers.length; j++) {
        var lyr2 = lyr.layers.getItemAt(j);
        this._addLayerItem(lyr2, null, true);
      }
    },

    _addLayerItem: function(layer, group, sub) {
      var options = {
        layer: layer,
        group: group,
        color: this.color
      };
      var layerItem = new LayerItem(options);
      layerItem.on('toggle-group', lang.hitch(this, this._toggleGroup));
      layerItem.on('zoom-layer', lang.hitch(this, this._zoomLayer));
      if (sub) {
        layerItem.placeAt(this.subcontentNode);
      } else {
        layerItem.placeAt(this.contentNode);
      }
    },

    _toggleGroup: function(data) {
      var group = data.group;
      var layer = data.layer;
      if (group === "closed") {
        this._updateSubLayers(layer);
        domStyle.set(this.contentNode, "display", "none");
        domStyle.set(this.subcontentNode, "display", "block");
      } else {
        this.subcontentNode.innerHTML = "";
        domStyle.set(this.contentNode, "display", "block");
        domStyle.set(this.subcontentNode, "display", "none");
      }
    },

    _zoomLayer: function(data) {
      var layer = data.layer;
      var extent = layer.extent || layer.fullExtent;
      if (extent) {
        extent = extent.expand(1.2);
        this.view.animateTo(extent);
      }
    }

  });

  return layerList;
});
