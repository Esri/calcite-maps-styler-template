/*global define,dojo,alert */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/text!./templates/sortby.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/i18n!nls/localizedStrings",
    "dojo/query",
    "dojo/_base/lang",
    "dojo/topic",
    "dojo/Deferred",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/on"
], function (declare, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, nls, query, lang, topic, Deferred, domClass, domAttr, on) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        nls: nls,

        postCreate: function () {
            this.domNode.title = nls.title.sortByBtnTitle;
            if (dojo.configData.ApplicationSettings.sortField === "modified") {
                domAttr.set(this.sortByLabel, "innerHTML", nls.sortByViewText);
            } else {
                domAttr.set(this.sortByLabel, "innerHTML", nls.sortByDateText);
            }
            this.own(on(this.sortByLabel, "click", lang.hitch(this, function () {
                topic.publish("showProgressIndicator");
                if (dojo.sortBy === dojo.configData.ApplicationSettings.sortField) {
                    this._sortByDate(this.sortByLabel);
                } else {
                    this._sortByViews(this.sortByLabel);
                }
            })));
            this.own(on(this.sortByViewMbl, "click", lang.hitch(this, function () {
                this._sortByViews(this.sortByLabel);
            })));
            this.own(on(this.sortByDateMbl, "click", lang.hitch(this, function () {
                this._sortByDate(this.sortByLabel);
            })));
        },

        _sortByDate: function (sortByLabel) {
            dojo.sortBy = "modified";
            this._sortPodOrder(dojo.sortBy, sortByLabel, nls.sortByViewText);
            domClass.remove(query(".esriCTListSelected")[0], "esriCTListSelected");
            domClass.add(query(".sortByDateMbl")[0], "esriCTListSelected");
        },

        _sortByViews: function (sortByLabel) {
            dojo.sortBy = dojo.configData.ApplicationSettings.sortField;
            this._sortPodOrder(dojo.sortBy, sortByLabel, nls.sortByDateText);
            domClass.remove(query(".esriCTListSelected")[0], "esriCTListSelected");
            domClass.add(query(".sortByViewMbl")[0], "esriCTListSelected");
        },

        _sortPodOrder: function (sortField, sortByLabel, text) {
            var defObj = new Deferred();
            topic.publish("queryGroupItem", dojo.queryString, sortField, dojo.configData.ApplicationSettings.sortOrder.toLowerCase(), defObj);
            defObj.then(function (data) {
                domAttr.set(sortByLabel, "innerHTML", text);
                dojo.results = data.results;
                dojo.nextQuery = data.nextQueryParams;
                topic.publish("createPods", data.results, true);
            }, function (err) {
                alert(err.message);
                defObj.resolve();
                topic.publish("hideProgressIndicator");
            });
        }
    });
});
