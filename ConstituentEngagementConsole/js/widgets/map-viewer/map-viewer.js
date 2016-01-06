/*global define,dojo,alert */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/** @license
 | Copyright 2013 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/_base/lang",
    "dojo/dom-attr",
    "dojo/on",
    "dojo/text!./templates/map-viewer.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/dom-class",
    "dijit/_WidgetsInTemplateMixin",
    "esri/arcgis/utils",
    "dojo/query",
    "dojo/dom"
], function (
    declare,
    domConstruct,
    domStyle,
    lang,
    domAttr,
    on,
    template,
    _WidgetBase,
    _TemplatedMixin,
    domClass,
    _WidgetsInTemplateMixin,
    arcgisUtils,
    query,
    dom
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,

        /**
        * This function is called when widget is constructed
        * @name widgets/mapviewer/mapviewer
        */
        constructor: function (options, srcRefNode) {
            lang.mixin(this, options);
        },

        /**
        * This function is called after all properties of a widget are defined
        * @name widgets/mapviewer/mapviewer
        */
        postCreate: function () {
            this.inherited(arguments);
            domAttr.set(this.locationButton, "title", this.appConfig.i18n.mapViewer
                .locationBtnToolTip);
            // to show map panel & resize map
            on(this.locationButton, "click", lang.hitch(this, function () {
                this.appUtils.showLoadingIndicator();
                this.switchViewer("location");
                this.resizeMap();
                this.appUtils.hideLoadingIndicator();
            }));
        },

        /**
        * This function is used to generate event for resizing of map
        * @name widgets/mapviewer/mapviewer
        */
        resizeMap: function () {
            return null;
        },

        /**
        * This function is used to notify that details tab is clicked
        * @name widgets/mapviewer/mapviewer
        */
        onDetailsTabClick: function () {
            return null;
        },

        /**
        * This function is used to switch map view to details view or vice versa.
        * @param {string} to display map view/details view
        * @name widgets/mapviewer/mapviewer
        */
        switchViewer: function (view) {
            if (domStyle.get(view === "location" ? this.mapDiv : this.detailsDiv,
                    "display") === "none") {
                domStyle.set(view === "location" ? this.detailsDiv : this.mapDiv,
                    "display", "none");
                domStyle.set(view === "location" ? this.mapDiv : this.detailsDiv,
                    "display", "block");
            }
        },

        /**
        * This function is used to add details button on top right corner of map panel
        * @name widgets/mapviewer/mapviewer
        */
        addDetailsBtn: function () {
            var incrementButton, detailsDiv, decrementButton;
            domConstruct.destroy("detailsBtnDiv");
            // details tab button that needs to be added
            detailsDiv = domConstruct.create("div", {
                "class": "esriCTBGColor esriCTDetailsBtnDisabled",
                "id": "detailsBtnDiv",
                "title": this.appConfig.i18n.mapViewer.detailsBtnToolTip
            });
            incrementButton = query(".esriSimpleSliderIncrementButton", dom
                .byId("mapDiv"));
            domConstruct.empty(incrementButton[0]);
            domClass.add(incrementButton[0],
                "esriCTIncrementButton esriCTPointerCursor");
            decrementButton = query(".esriSimpleSliderDecrementButton", dom
                .byId("mapDiv"));
            domConstruct.empty(decrementButton[0]);
            domClass.add(decrementButton[0],
                "esriCTDecrementButton esriCTPointerCursor");
            if (incrementButton.length > 0) {
                domAttr.set(incrementButton[0], "title", this.appConfig.i18n.mapViewer
                    .zoomInToolTip);
            }
            if (decrementButton.length > 0) {
                domAttr.set(decrementButton[0], "title", this.appConfig.i18n.mapViewer
                    .zoomOutToolTip);
            }
            // to place details button on top of zoom in button of map
            if (dom.byId("mapDiv")) {
                if (incrementButton.length > 0) {
                    domConstruct.place(detailsDiv, incrementButton[0], "before");
                }
            }
            // to show details tab
            on(detailsDiv, "click", lang.hitch(this, function (evt) {
                this.onDetailsTabClick();
            }));
        }
    });
});