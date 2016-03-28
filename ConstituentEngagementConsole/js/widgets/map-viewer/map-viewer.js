/*global define,dojo,alert */
/*jslint sloppy:true */
/*
| Copyright 2014 Esri
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
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/text!./templates/map-viewer.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin"
], function (
    declare,
    lang,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template, //  a string representing the HTML of the template

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of the widget
        * @memberOf widgets/map-viewer/map-viewer
        */
        constructor: function (options) {
            lang.mixin(this, options);
        }
    });
});