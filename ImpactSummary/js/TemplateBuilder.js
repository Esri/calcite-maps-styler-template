define([
    "dojo/Evented",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/layout/ContentPane",
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/dom-class"
],
function (
    Evented,
    declare,
    lang,
    _WidgetBase,
    ContentPane,
    dom, domConstruct, domClass
) {
    var Widget = declare([_WidgetBase, Evented], {
        declaredClass: "application.TemplateBuilder",
        // lifecycle: 1
        constructor: function(options) {
            // mix in settings and defaults
            var defaults = lang.mixin({}, this.options, options);
            // set properties
            this.set("drawer", defaults.drawer);
            // CSS classes
            this.css = {
                builderMode: 'builder-mode',
                root: 'template-builder',
                rootContainer: 'template-builder-container'
            };
        },
        // start widget. called by user
        startup: function() {
            
            console.log('edit mode');
            
            // builder mode class to body
            domClass.add(document.body, this.css.builderMode);
            // builder node
            var builderNode = domConstruct.create('div', {
                className: this.css.root,
                innerHTML: '<div class="' + this.css.rootContainer + '">Template Builder Mode</div>'
            });
            // place node in body 
            // top content pane
            var builderContentPane = new ContentPane({
                region: "top"
            }, builderNode);
            // add pane to border container
            this.get("drawer")._borderContainer.addChild(builderContentPane);
            // resize border container
            this.get("drawer").resize();
        },
        // connections/subscriptions will be cleaned up during the destroy() lifecycle phase
        destroy: function() {
            this.inherited(arguments);
        },
        /* ---------------- */
        /* Public Events */
        /* ---------------- */

        /* ---------------- */
        /* Public Functions */
        /* ---------------- */


    });
    return Widget;
});
