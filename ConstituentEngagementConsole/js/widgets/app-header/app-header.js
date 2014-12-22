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
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/on",
    "dojo/text!./templates/app-header.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!css/theme-template.css",
    "dojo/string",
    "application/utils/utils"
], function (
    declare,
    domConstruct,
    lang,
    dom,
    domAttr,
    domClass,
    domStyle,
    on,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    ThemeCss,
    string,
    ApplicationUtils
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        splashScreenScrollbar: null,

        /**
        * This function is called when widget is constructed.
        *
        * @class
        * @memberOf widgets/app-header/app-header
        */
        postCreate: function () {
            try {
                var applicationName, applicationIcon;
                if (dojo.configData.applicationName && lang.trim(dojo.configData.applicationName).length !== 0) {
                    applicationName = dojo.configData.applicationName;
                } else if (dojo.configData.groupInfo.results.length > 0 && dojo.configData.groupInfo.results[0].title) {
                    applicationName = dojo.configData.groupInfo.results[0].title;
                } else {
                    applicationName = dojo.configData.i18n.applicationHeader.pleaseSignInText;
                }
                if (!dojo.configData.logInDetails) {
                    applicationName = dojo.configData.i18n.applicationHeader.pleaseSignInText;
                }
                document.title = applicationName;
                domAttr.set(this.applicationHeaderName, "innerHTML", applicationName);

                if (dojo.configData.applicationIcon && lang.trim(dojo.configData.applicationIcon).length !== 0) {
                    if (dojo.configData.applicationIcon.indexOf("http") === 0) {
                        domAttr.set(this.applicationHeaderIcon, "src", dojo.configData.applicationIcon);
                    } else {
                        if (dojo.configData.applicationIcon.indexOf("/") === 0) {
                            domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + dojo.configData.applicationIcon);
                        } else {
                            domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/" + dojo.configData.applicationIcon);
                        }
                    }
                } else if (dojo.configData.groupInfo) {
                    if (dojo.configData.groupInfo.results.length > 0 && dojo.configData.groupInfo.results[0].thumbnailUrl) {
                        domAttr.set(this.applicationHeaderIcon, "src", dojo.configData.groupInfo.results[0].thumbnailUrl);
                    } else {
                        domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/images/app-icon.png");
                    }
                } else {
                    domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/images/app-icon.png");
                }
                if (!dojo.configData.logInDetails) {
                    domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/images/app-icon.png");
                }
                applicationIcon = domAttr.get(this.applicationHeaderIcon, "src");
                this._loadIcons("apple-touch-icon-precomposed", applicationIcon);
                this._loadIcons("apple-touch-icon", applicationIcon);
                this._setApplicationShortcutIcon();
                if (dojo.configData.logInDetails) {
                    domClass.add(this.esriCTSignInButtonDiv, "esriCTHidden");
                    domClass.remove(this.esriCTLoginDetailsDiv, "esriCTHidden");
                    this._displayLoginDetails();
                    this._handleLoginArrowClick();
                    this._handleLogoutClick();
                } else {
                    dojo.applicationUtils = ApplicationUtils;
                    dojo.applicationUtils.loadApplicationTheme();
                    domClass.add(dom.byId("esriCTMainContainer"), "esriCTHidden");
                    domClass.add(this.esriCTLoginDetailsDiv, "esriCTHidden");
                    domClass.remove(this.esriCTSignInButton, "esriCTHidden");
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to set shortcut icon of an application.
        * @memberOf widgets/app-header/app-header
        */
        _setApplicationShortcutIcon: function () {
            try {
                if (dojo.configData.applicationFavicon && lang.trim(dojo.configData.applicationFavicon).length !== 0) {
                    this._loadIcons("shortcut icon", dojo.configData.applicationFavicon);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to load icons.
        * @param{string} rel specifies the relationship between documents
        * @param{string} iconPath shows path of image
        * @memberOf widgets/app-header/app-header
        */
        _loadIcons: function (rel, iconPath) {
            try {
                var icon;
                icon = domConstruct.create("link");
                icon.rel = rel;
                icon.type = "image/x-icon";
                icon.href = dojoConfig.baseURL + iconPath;
                document.getElementsByTagName('head')[0].appendChild(icon);
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to display login details.
        * @memberOf widgets/app-header/app-header
        */
        _displayLoginDetails: function () {
            try {
                this.esriCTLoginUserNameDiv.innerHTML = dojo.configData.logInDetails.userName;
                this.esriCTLogoutOption.innerHTML = dojo.configData.i18n.applicationHeader.signOutOption;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to display option available on click of login options arrow.
        * @memberOf widgets/app-header/app-header
        */
        _handleLoginArrowClick: function () {
            try {
                on(this.esriCTLoginCredentialsDiv, "click", lang.hitch(this, function (evt) {
                    if (domClass.contains(this.esriCTLoginOptionsDiv, "esriCTHidden")) {
                        domClass.remove(this.esriCTLoginOptionsDiv, "esriCTHidden");
                        domClass.add(this.esriCTLoginOptionsDiv, "esriCTVisible");
                    } else {
                        domClass.remove(this.esriCTLoginOptionsDiv, "esriCTVisible");
                        domClass.add(this.esriCTLoginOptionsDiv, "esriCTHidden");
                    }
                }));
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to handle logout option click.
        * @memberOf widgets/app-header/app-header
        */
        _handleLogoutClick: function () {
            try {
                on(this.esriCTLogoutOption, "click", lang.hitch(this, function (evt) {
                    location.reload();
                }));
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        }
    });
});