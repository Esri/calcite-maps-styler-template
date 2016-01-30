define([
  'dojo/_base/declare',
  'dojo/_base/lang',

  'dojo/dom-style',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/i18n!../nls/resources',
  'dojo/text!./templates/SlideList.html',

  './SlideItem'

], function(
  declare, lang,
  domStyle,
  _WidgetBase, _TemplatedMixin,
  i18n, template,
  SlideItem
) {

  var slideList = declare('SlideList', [_WidgetBase, _TemplatedMixin], {

    declaredClass: "esri.widgets.SlideList",

    templateString: template,

    options: {
      scene: null,
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
      this.scene = this.options.scene;
      this.view = this.options.view;
      this.color = this.options.color;
    },

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      this.inherited(arguments);
      this._updateList();
    },

    destroy: function() {
      this.scene = null;
      this.inherited(arguments);
    },

    _updateList: function() {
      var slides = this.scene.presentation.slides;
      var node = this.contentNode;
      if (slides.length === 0) {
        var msg = "<span class='panelMsg'>";
        msg += i18n.panel.noslides || "No slides";
        msg += "</span>";
        node.innerHTML = msg;
        return;
      }
      domStyle.set(node, "width", slides.length * 130 + "px");
      slides.forEach(lang.hitch(this, function(slide, index) {
        this._addSlideItem(slide, index);
      }));
    },

    _addSlideItem: function(slide, index) {
      var options = {
        scene: this.scene,
        slide: slide,
        index: index,
        color: this.color
      };
      var slideItem = new SlideItem(options);
      slideItem.on('click', lang.hitch(this, this._applySlide, slide));
      slideItem.placeAt(this.contentNode);
    },

    _applySlide: function(slide) {
      slide.applyTo(this.view);
    }

  });

  return slideList;
});
