define([
  'dojo/_base/declare',
  'dojo/_base/lang',

  'dojo/dom-attr',
  'dojo/dom-style',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/text!./templates/SlideItem.html'
], function(
  declare, lang,
  domAttr, domStyle,
  _WidgetBase, _TemplatedMixin,
  template
) {

  var slideItem = declare('SlideItem', [_WidgetBase, _TemplatedMixin], {

    declaredClass: "esri.widgets.SlideItem",

    templateString: template,

    options: {
      slide: null,
      index: null,
      color: '#ff0000'
    },

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function(options) {
      lang.mixin(this.options, options);
      this.slide = this.options.slide;
      this.index = this.options.index;
      this.color = this.options.color;
    },

    postCreate: function() {
      this.inherited(arguments);
      domAttr.set(this.thumbNode, "src", this.slide.thumbnail.url);
      domAttr.set(this.thumbNode, "title", this.slide.title.text);
      this.titleNode.innerHTML = this.slide.title.text;
      this.numNode.innerHTML = this.index + 1;
      domStyle.set(this.titleNode, "backgroundColor", this.color);
      domStyle.set(this.numNode, "backgroundColor", this.color);
    },

    destroy: function() {
      this.scene = null;
      this.slide = null;
      this.inherited(arguments);
    }


  });

  return slideItem;
});
