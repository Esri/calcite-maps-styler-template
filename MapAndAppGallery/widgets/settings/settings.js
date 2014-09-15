/*global define,dojo */
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
    "dojo/_base/lang",
    "dojo/on",
    "dojo/text!./templates/settings.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/i18n!nls/localizedStrings",
    "dojo/query",
    "dojo/dom-class",
    "dojo/topic",
    "dojo/dom-construct",
    "dojo/dom-geometry"

], function (declare, lang, on, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, nls, query, domClass, topic, domConstruct, domGeom) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        flag: null,
        nls: nls,
        postCreate: function () {
            this.domNode.title = nls.title.settingsBtnTitle;
            this.own(on(this.settingsIcon, "click", lang.hitch(this, function () {
                if (query(".esriCTSortByContainer")[0].children.length <= 0) {
                    var sortByTitle, sortMenu, listSortMenu, viewMbl, dateMbl;
                    sortByTitle = domConstruct.create('div', { "class": "esriCTSortByTitle" }, query(".esriCTSortByContainer")[0]);
                    domConstruct.create('div', { "class": "esriCTSortHeader", "innerHTML": nls.sortByTextMobile }, sortByTitle);
                    sortMenu = domConstruct.create('div', { "class": "esriCTSortMenu" }, sortByTitle);
                    listSortMenu = domConstruct.create('ul', {}, sortMenu);
                    viewMbl = domConstruct.create('li', { "class": "sortByViewMbl esriCTListSelected", "innerHTML": nls.viewTextMobile }, listSortMenu);
                    dateMbl = domConstruct.create('li', { "class": "sortByDateMbl", "innerHTML": nls.dateTextMobile }, listSortMenu);
                    this.own(on(viewMbl, "click", lang.hitch(this, function () {
                        topic.publish("sortByViews", query(".esriCTMenulbl")[0]);
                        domClass.remove(query(".esriCTListSelected")[0], "esriCTListSelected");
                        domClass.add(query(".sortByViewMbl")[0], "esriCTListSelected");
                    })));
                    this.own(on(dateMbl, "click", lang.hitch(this, function () {
                        topic.publish("sortByDate", query(".esriCTMenulbl")[0]);
                        domClass.remove(query(".esriCTListSelected")[0], "esriCTListSelected");
                        domClass.add(query(".sortByDateMbl")[0], "esriCTListSelected");
                    })));
                } else {
                    domConstruct.empty(query(".esriCTSortByContainer")[0]);
                }
                this._slideLeftPanel();
            })));
        },

        /**
        * Slide in and out the left panel upon clicking the settings icon. Only for smart phone devices.
        */
        _slideLeftPanel: function () {
            query(".esriCTInnerLeftPanelBottom")[0].style.height = dojo.window.getBox().h + "px";
            if (query(".esriCTMenuTab")[0]) {
                domClass.toggle(query(".esriCTMenuTab")[0], "esriCTShiftRight");
            }
            if (query(".esriCTInnerLeftPanelTop")[0]) {
                domClass.toggle(query(".esriCTInnerLeftPanelTop")[0], "esriCTShiftRight");
            }
            if (query(".esriCTInnerLeftPanelBottom")[0]) {
                domClass.remove(query(".esriCTInnerLeftPanelBottom")[0], "displayNone");
                domClass.toggle(query(".esriCTInnerLeftPanelBottom")[0], "esriCTInnerLeftPanelBottomShift");
            }
            if (query(".esriCTSearchIcon")[0]) {
                domClass.toggle(query(".esriCTSearchIcon")[0], "displayNone");
                domClass.toggle(query(".esriCTSearchItemInput")[0], "displayNone");
                domClass.toggle(query(".esriCTClearInput")[0], "displayNone");
            }
            if (query(".esriCTInfoIcon")[0]) {
                domClass.toggle(query(".esriCTInfoIcon")[0], "displayNone");
            }
            if (query(".esriCTSearch")[0]) {
                domClass.toggle(query(".esriCTSearch")[0], "displayNone");
            }
            if (query(".esriCTRightPanel")[0]) {
                domClass.toggle(query(".esriCTRightPanel")[0], "esriCTShiftRight");
                domClass.toggle(query(".esriCTRightPanel")[0], "esriCTShiftRightPanel");
            }

            if (query(".esriCTMenuTabLeft")[0]) {
                if (domClass.contains(query(".esriCTMenuTabLeft")[0], "displayBlock")) {
                    domClass.replace(query(".esriCTMenuTabLeft")[0], "displayNone", "displayBlock");
                    domClass.replace(query(".esriCTHomeIcon")[0], "displayNone", "displayBlock");

                    if (query(".esriCTSignIn")[0]) {
                        domClass.replace(query(".esriCTSignIn")[0], "displayNone", "displayBlock");
                    }
                    domClass.add(query(".esriCTInnerRightPanel")[0], "displayNone");
                    if (query(".esriCTNoResults")[0]) {
                        if (domClass.contains(query(".esriCTNoResults")[0], "displayBlockAll")) {
                            domClass.replace(query(".esriCTNoResults")[0], "displayNoneAll", "displayBlockAll");
                        }
                    }
                    if (dojo.configData.values.showTagCloud) {
                        query(".esriCTPadding")[0].style.height = window.innerHeight - (domGeom.position(query(".sortByLabelMbl")[0]).h + domGeom.position(query(".esriCTCategoriesHeader")[0]).h + 40) + "px";
                    }
                    if (domClass.contains(query(".esriCTItemSearch")[0], "displayBlockAll")) {
                        this.flag = true;
                        domClass.replace(query(".esriCTItemSearch")[0], "displayNoneAll", "displayBlockAll");
                    }
                    if (dojo.sortBy !== dojo.configData.values.sortField) {
                        domClass.remove(query(".esriCTListSelected")[0], "esriCTListSelected");
                        domClass.add(query(".sortByDateMbl")[0], "esriCTListSelected");
                    }
                } else {
                    domClass.replace(query(".esriCTMenuTabLeft")[0], "displayBlock", "displayNone");
                    domClass.replace(query(".esriCTHomeIcon")[0], "displayBlock", "displayNone");
                    if (query(".esriCTSignIn")[0]) {
                        domClass.replace(query(".esriCTSignIn")[0], "displayBlock", "displayNone");
                    }
                    domClass.remove(query(".esriCTInnerRightPanel")[0], "displayNone");
                    if (query(".esriCTNoResults")[0]) {
                        if (domClass.contains(query(".esriCTNoResults")[0], "displayNoneAll")) {
                            domClass.replace(query(".esriCTNoResults")[0], "displayBlockAll", "displayNoneAll");
                        }
                    }
                    if (this.flag) {
                        domClass.replace(query(".esriCTItemSearch")[0], "displayBlockAll", "displayNoneAll");
                        this.flag = false;
                    }
                }
            }
        }
    });
});
