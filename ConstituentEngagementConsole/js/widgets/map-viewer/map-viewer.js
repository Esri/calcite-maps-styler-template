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
    "esri/arcgis/utils"
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
    arcgisUtils
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        config: null,

        constructor: function (data, domnode) {
            this.config = data;
        },

        /**
        * This function is called when widget is constructed.
        *
        * @class
        * @name widgets/mapviewer/mapviewer
        */
        postCreate: function () {
            this.inherited(arguments);
            domAttr.set(this.locationButton, "innerHTML", this.config.i18n.mapViewer.locationBtnLbl);
            domAttr.set(this.detailsButton, "innerHTML", this.config.i18n.mapViewer.detailsBtnLbl);

            on(this.locationButton, "click", lang.hitch(this, function () {
                this._switchViewer("location");
            }));

            on(this.detailsButton, "click", lang.hitch(this, function () {
                this._switchViewer("details");
            }));

            on(this.maximizeBtn, "click", lang.hitch(this, function (event) {
                if (domClass.contains(this.maximizeBtn, "esriCTMinimizeButton")) {
                    domClass.replace(this.maximizeBtn, "esriCTMaxmizeButton", "esriCTMinimizeButton");
                } else {
                    domClass.replace(this.maximizeBtn, "esriCTMinimizeButton", "esriCTMaxmizeButton");
                }
                this.maximizeMapContainer(event);
            }));
        },

        /**
        * This function is used to switch location view to details view or vice versa.
        * @param {string} view is used to select tab.
        * @name widgets/mapviewer/mapviewer
        */
        _switchViewer: function (view) {
            if (domStyle.get(view === "location" ? this.mapDiv : this.detailsDiv, "display") === "none") {
                domStyle.set(view === "location" ? this.detailsDiv : this.mapDiv, "display", "none");
                domStyle.set(view === "location" ? this.mapDiv : this.detailsDiv, "display", "block");
                domClass.replace(view === "location" ? this.locationButton : this.detailsButton, "esriCTBorder esriCTApplicationColor esriCTDefaultCursor", "esriCTBorderWhite esriCTApplicationColor esriCTPointerCursor");
                domClass.replace(view === "location" ? this.detailsButton : this.locationButton, "esriCTBorderWhite esriCTApplicationColor esriCTPointerCursor", "esriCTBorder esriCTApplicationColor esriCTDefaultCursor");
            }
        },

        /**
        * This function is used to toggle the map container to full screen view or restore it back.
        * @param {object} event is used to maximize the map.
        * @name widgets/mapviewer/mapviewer
        */
        maximizeMapContainer: function (event) {
            return event;
        }
    });
});