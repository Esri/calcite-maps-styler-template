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
            if (dojo.configData.values.sortField === "modified") {
                domAttr.set(this.sortByLabel, "innerHTML", nls.sortByViewText);
            } else {
                domAttr.set(this.sortByLabel, "innerHTML", nls.sortByDateText);
            }
            this.own(on(this.sortByLabel, "click", lang.hitch(this, function () {
                topic.publish("showProgressIndicator");
                if (dojo.sortBy === dojo.configData.values.sortField) {
                    this._sortByDate(this.sortByLabel);
                } else {
                    this._sortByViews(this.sortByLabel);
                }
            })));
            topic.subscribe("sortByViews", lang.hitch(this, this._sortByViews));
            topic.subscribe("sortByDate", lang.hitch(this, this._sortByDate));
        },

        _sortByDate: function (sortByLabel) {
            dojo.sortBy = "modified";
            this._sortPodOrder(dojo.sortBy, sortByLabel, nls.sortByViewText);
        },

        _sortByViews: function (sortByLabel) {
            dojo.sortBy = dojo.configData.values.sortField;
            this._sortPodOrder(dojo.sortBy, sortByLabel, nls.sortByDateText);
        },

        _sortPodOrder: function (sortField, sortByLabel, text) {
            var defObj = new Deferred(), tagNameArray, i, j, resultFilter;
            topic.publish("queryGroupItem", dojo.queryString, sortField, dojo.configData.values.sortOrder.toLowerCase(), defObj);
            defObj.then(function (data) {
                domAttr.set(sortByLabel, "innerHTML", text);
                if (data.results.length > 0) {
                    tagNameArray = dojo.selectedTags.split('" AND "');
                    if (tagNameArray.length > 0 && tagNameArray[0] !== "") {
                        /**
                        * Compare dojo.selectedTags with tags
                        * Check if tag matches with the tags inside data.results.tags
                        * If it does not match then skip it else add the result item to resultFilter array
                        */
                        resultFilter = [];
                        for (i = 0; i < data.results.length; i++) {
                            for (j = 0; j < data.results[i].tags.length; j++) {
                                if (data.results[i].tags[j] === tagNameArray[0]) {
                                    resultFilter.push(data.results[i]);
                                }
                            }
                        }
                        data.results = resultFilter;
                    }
                    dojo.results = data.results;
                    dojo.nextQuery = data.nextQueryParams;
                    topic.publish("createPods", data.results, true);
                } else {
                    topic.publish("hideProgressIndicator");
                }
            }, function (err) {
                alert(err.message);
                defObj.resolve();
                topic.publish("hideProgressIndicator");
            });
        }
    });
});
