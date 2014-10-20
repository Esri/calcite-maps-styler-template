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
    "dojo/dom-construct",
    "dojo/dom-attr",
    "dojo/on"
], function (declare, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, nls, query, lang, topic, Deferred, domClass, domConstruct, domAttr, on) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        nls: nls,

        postCreate: function () {
            var listSortMenu, sortMenuListViews, sortMenuListDate, sortMenuListTitle, i;
            this.domNode.title = nls.title.sortByBtnTitle;
            domAttr.set(this.sortByLabel, "innerHTML", nls.sortByText);
            listSortMenu = domConstruct.create('ul', { "class": "listSortMenu" }, this.sortMenu);
            sortMenuListViews = domConstruct.create('li', { "class": "list", "innerHTML": nls.sortByViewText, "sortValue": "numViews" }, listSortMenu);
            sortMenuListDate = domConstruct.create('li', { "class": "list", "innerHTML": nls.sortByDateText, "sortValue": "modified" }, listSortMenu);
            sortMenuListTitle = domConstruct.create('li', { "class": "list", "innerHTML": nls.sortByNameText, "sortValue": "title" }, listSortMenu);
            for (i = 0; i < listSortMenu.children.length; i++) {
                if (domAttr.get(listSortMenu.children[i], "sortValue") === dojo.configData.values.sortField) {
                    domClass.add(listSortMenu.children[i], "esriCTSortMenuListSelected");
                }
            }
            this.own(on(this.sortByLabel, "click", lang.hitch(this, function () {
                domClass.toggle(this.sortMenu, "displayNoneAll");
            })));

            this.own(on(sortMenuListViews, "click", lang.hitch(this, function () {
                dojo.sortBy = "numViews";
                this._sortPodOrder(sortMenuListViews);
            })));

            this.own(on(sortMenuListDate, "click", lang.hitch(this, function () {
                dojo.sortBy = "modified";
                this._sortPodOrder(sortMenuListDate);
            })));

            this.own(on(sortMenuListTitle, "click", lang.hitch(this, function () {
                dojo.sortBy = "title";
                this._sortPodOrder(sortMenuListTitle);
            })));

            topic.subscribe("sortGallery", lang.hitch(this, this._sortPodOrder));
            topic.subscribe("selectedMenuItem", lang.hitch(this, this._selectedMenuItem));
        },

        _selectedMenuItem: function (sortMenuListItem, flag) {
            if (flag) {
                var listSortMenu = query(".listSortMenu"), i;
                for (i = 0; i < listSortMenu.children.length; i++) {
                    if (domAttr.get(listSortMenu.children[i], "sortValue") === dojo.configData.values.sortField) {
                        domClass.add(listSortMenu.children[i], "esriCTSortMenuListSelected");
                    }
                }
            }

            if (sortMenuListItem) {
                domClass.remove(query(".esriCTSortMenuListSelected")[0], "esriCTSortMenuListSelected");
                domClass.add(sortMenuListItem, "esriCTSortMenuListSelected");
            }
        },

        _sortPodOrder: function (sortMenuListItem) {
            var defObj = new Deferred(), tagNameArray, i, j, resultFilter;
            topic.publish("showProgressIndicator");
            this._selectedMenuItem(sortMenuListItem, false);
            domClass.add(this.sortMenu, "displayNoneAll");
            topic.publish("queryGroupItem", dojo.queryString, dojo.sortBy, dojo.configData.values.sortOrder.toLowerCase(), defObj);
            defObj.then(function (data) {
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
