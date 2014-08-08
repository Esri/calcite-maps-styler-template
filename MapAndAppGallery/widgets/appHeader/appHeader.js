/*global define,dojo,dojoConfig */
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
    "dojo/dom-construct",
    "dojo/_base/lang",
    "dojo/dom-attr",
    "dojo/dom",
    "dojo/text!./templates/appHeaderTemplate.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/query",
    "dojo/on",
    "dojo/i18n!nls/localizedStrings",
    "dojo/dom-class",
    "dojo/topic"

], function (declare, domConstruct, lang, domAttr, dom, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, query, on, nls, domClass, topic) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        nls: nls,

        /**
        * create header panel
        *
        * @param {string} dojo.configData.values.applicationName Application name specified in configuration file
        *
        * @class
        * @name widgets/appHeader/appHeader
        */
        postCreate: function () {
            topic.subscribe("showProgressIndicator", lang.hitch(this, this.showProgressIndicator));
            topic.subscribe("hideProgressIndicator", lang.hitch(this, this.hideProgressIndicator));
            /**
            * add applicationHeaderParentContainer to div for header panel and append to esriCTParentDivContainer container
            *
            * applicationHeaderParentContainer container for application header
            * @member {div} applicationHeaderParentContainer
            * @private
            * @memberOf widgets/appHeader/appHeader
            */
            var applicationHeaderDiv = dom.byId("esriCTParentDivContainer");
            domConstruct.place(this.applicationHeaderParentContainer, applicationHeaderDiv);
            this._loadApplicationHeaderIcon();
            /**
            * set browser header and application header to application name
            *
            * applicationHeaderName container for application name
            * @member {div} applicationHeaderName
            * @private
            * @memberOf widgets/appHeader/appHeader
            */
            document.title = dojo.configData.values.applicationName;
            domAttr.set(this.applicationHeaderName, "innerHTML", dojo.configData.values.applicationName);
        },

        /**
        * append widgets to header panel
        * @param {object} widgets Contain widgets to be displayed in header panel
        * @memberOf widgets/appHeader/appHeader
        */
        loadHeaderWidgets: function (widgets) {
            var i;

            /**
            * applicationHeaderWidgetsContainer container for header panel widgets
            * @member {div} applicationHeaderWidgetsContainer
            * @private
            * @memberOf widgets/appHeader/appHeader
            */
            for (i in widgets) {
                if (widgets.hasOwnProperty(i) && widgets[i].domNode) {
                    domConstruct.place(widgets[i].domNode, this.applicationHeaderWidgetsContainer);
                }
            }
        },

        /**
        * load Application Header Icon
        * @memberOf widgets/appHeader/appHeader
        */
        _loadApplicationHeaderIcon: function () {
            topic.publish("showProgressIndicator");
            this._loadIcons("shortcut icon", dojo.configData.values.applicationFavicon);
            this._loadIcons("apple-touch-icon-precomposed", dojo.configData.values.applicationIcon);
            this._loadIcons("apple-touch-icon", dojo.configData.values.applicationIcon);
            /**
            * applicationHeaderIcon contains application icon for header panel widgets
            * @member {img} applicationHeaderIcon
            * @private
            * @memberOf widgets/appHeader/appHeader
            */
            if (dojo.configData.values.applicationIcon.indexOf("http") === 0) {
                domAttr.set(this.applicationHeaderIcon, "src", dojo.configData.values.applicationIcon);
            } else {
                domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + dojo.configData.values.applicationIcon);
            }
            this.own(on(this.applicationHeaderIcon, "click", lang.hitch(this, function () {
                if (query(".esriCTitemDetails")[0]) {
                    dojo.destroy(query(".esriCTitemDetails")[0]);
                    domClass.remove(query(".esriCTGalleryContent")[0], "displayNoneAll");
                    domClass.remove(query(".esriCTApplicationIcon")[0], "esriCTCursorPointer");
                }
                if (query(".esriCTInnerRightPanelDetails")[0] && (!query(".esriCTNoResults")[0])) {
                    domClass.replace(query(".esriCTMenuTabRight")[0], "displayBlockAll", "displayNoneAll");
                    domClass.add(query(".esriCTInnerRightPanelDetails")[0], "displayNoneAll");
                    domClass.remove(query(".esriCTGalleryContent")[0], "displayNoneAll");
                    domClass.remove(query(".esriCTInnerRightPanel")[0], "displayNoneAll");
                    domClass.remove(query(".esriCTApplicationIcon")[0], "esriCTCursorPointer");
                    domClass.add(query(".esriCTBackBtn")[0], "displayNoneAll");
                }
            })));
        },

        /**
        * load Application shortcut icons
        * @param {object} icon type
        * @param {object} icon path
        * @memberOf widgets/appHeader/appHeader
        */
        _loadIcons: function (rel, iconPath) {
            var icon = domConstruct.create("link");
            icon.rel = rel;
            icon.type = "image/x-icon";
            if (iconPath.indexOf("http") === 0) {
                icon.href = iconPath;
            } else {
                icon.href = dojoConfig.baseURL + iconPath;
            }
            document.getElementsByTagName('head')[0].appendChild(icon);
        },

        /**
        * show loading indicator
        * @memberOf widgets/appHeader/appHeader
        */
        showProgressIndicator: function () {
            domClass.replace(this.divLoadingIndicator, "displayBlockAll", "displayNoneAll");
        },

        /**
        * hide loading indicator
        * @memberOf widgets/appHeader/appHeader
        */
        hideProgressIndicator: function () {
            domClass.replace(this.divLoadingIndicator, "displayNoneAll", "displayBlockAll");
        }
    });
});
