/*global define,dojo,dojoConfig,alert,$,confirm */
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
    "dojo/query"
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
    query
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        splashScreenScrollbar: null,

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @param{object} parent node of widget
        * @memberOf widgets/app-header/app-header
        */
        constructor: function (options, srcRefNode) {
            lang.mixin(this, options);
        },

        /**
        * This function is called when widget is constructed.
        * @memberOf widgets/app-header/app-header
        */
        postCreate: function () {
            var applicationName, applicationIcon;
            // first check if application name is configured than display that
            // second check if group title is available display that
            // if user clicks cancel button than display sign-in text
            if (this.appConfig.applicationName && lang.trim(this.appConfig.applicationName).length !== 0) {
                applicationName = this.appConfig.applicationName;
            } else if (this.appConfig.groupInfo.results.length > 0 && this.appConfig.groupInfo.results[0].title) {
                applicationName = this.appConfig.groupInfo.results[0].title;
            } else {
                applicationName = this.appConfig.i18n.applicationHeader.pleaseSignInText;
            }
            if (!this.appConfig.logInDetails) {
                applicationName = this.appConfig.i18n.applicationHeader.pleaseSignInText;
            }
            // to set title of document
            document.title = applicationName;
            // to set application name
            domAttr.set(this.applicationHeaderName, "innerHTML", applicationName);
            // first check if application icon is configured than display that
            // second check if group icon is available than display that
            // third default fallback icon will be displayed if above both scenario are not available
            if (this.appConfig.applicationIcon && lang.trim(this.appConfig.applicationIcon).length !== 0) {
                if (this.appConfig.applicationIcon.indexOf("http") === 0) {
                    domAttr.set(this.applicationHeaderIcon, "src", this.appConfig.applicationIcon);
                } else {
                    if (this.appConfig.applicationIcon.indexOf("/") === 0) {
                        domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + this.appConfig.applicationIcon);
                    } else {
                        domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/" + this.appConfig.applicationIcon);
                    }
                }
            } else if (this.appConfig.groupInfo) {
                if (this.appConfig.groupInfo.results.length > 0 && this.appConfig.groupInfo.results[0].thumbnailUrl) {
                    domAttr.set(this.applicationHeaderIcon, "src", this.appConfig.groupInfo.results[0].thumbnailUrl);
                } else {
                    domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/images/app-icon.png");
                }
            } else {
                domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/images/app-icon.png");
            }
            if (!this.appConfig.logInDetails) {
                domAttr.set(this.applicationHeaderIcon, "src", dojoConfig.baseURL + "/images/app-icon.png");
            }
            applicationIcon = domAttr.get(this.applicationHeaderIcon, "src");
            // load application shortcut icons

            this._setApplicationShortcutIcon();
            this._loadIcons("apple-touch-icon-precomposed", applicationIcon);

            // Due to high resolution of iPad long username was not getting displayed properly.
            // So it detects orientation in iPad and long username gets displayed properly in landscape & potrait mode.
            // This is done by changing the width of username dynamically.
            if (this.appUtils.isIos() && (window.orientation === 0 || window.orientation === 180)) {
                domClass.add(query(".esriCTLoginUserNameDiv")[0], "esriCTLoginUserNamePotraitMode");
            }

            // if user logs in than display application header with different controls like setting, view, etc...
            // if user clicks cancel button than hide different and display sign-in button
            if (this.appConfig.logInDetails) {
                domClass.remove(this.esriCTLoginDetailsDiv, "esriCTHidden");
                this._displayLoginDetails();
                this._handleLoginArrowClick();
                this._handleLogoutClick();
            } else {
                this.appUtils.loadApplicationTheme(this.appConfig);
                domClass.add(dom.byId("esriCTMainContainer"), "esriCTHidden");
                domClass.add(query(".esriCTSettingsButton")[0], "esriCTHidden");
                domClass.add(query(".esriCTViewMode")[0], "esriCTHidden");
                domClass.add(query(".esriCTSearchDisable")[0], "esriCTHidden");
                domClass.add(query(".esriCTManualRefreshButton")[0], "esriCTHidden");
                domClass.remove(dom.byId("esriCTNoWebMapParentDiv"), "esriCTHidden");
                this.esriCTLoginUserNameDiv.innerHTML = this.appConfig.i18n.applicationHeader.signInOption;
                domClass.add(this.esriCTCaretIcon, "esriCTVisibilityHidden");
                this._handleLoginArrowClick();
                this.appUtils.hideLoadingIndicator();
            }
            //tooltip is coming from nls
            domAttr.set(this.settingsDataViewerBtn, "title", this.appConfig.i18n.applicationHeader.settingsBtnToolTip);
            domAttr.set(this.viewModeBtn, "title", this.appConfig.i18n.applicationHeader.viewModeBtnToolTip);
            domAttr.set(this.searchModeBtn, "title", this.appConfig.i18n.applicationHeader.searchModeBtnToolTip);
            domAttr.set(this.manualRefreshBtn, "title", this.appConfig.i18n.applicationHeader.manualRefreshBtnToolTip);
            this._onSettingsIconClick();
            this._setSettingsOptionText();
            this._setSearchPanelText();
            this._attachEventHandlers();
            this._onViewModeClick();
            this._setViewModeOptionText();
            this._onSearchIconClick();
            this.resetOperationalLayerNameWidth();
            this.resetViewModeOptionsPosition();
            this.resetSettingsOptionsPosition();
            this.resetDataSearchPosition();
        },

        /**
        * This function is used to reset the width of operational layer name dynamically.
        * @memberOf widgets/app-header/app-header
        */
        resetOperationalLayerNameWidth: function () {
            var headerWidth, menuTabWidth;
            headerWidth = parseFloat(domStyle.get(this.esriCTheaderRight, "width"));
            menuTabWidth = parseFloat(domStyle.get(this.esriCTMenuTabRight, "width"));
            domStyle.set(this.operationalLayerTitle, "width", ((headerWidth - menuTabWidth) - 15) + "px");
        },

        /**
        * This function is used to reset the position of settings options list.
        * @memberOf widgets/app-header/app-header
        */
        resetSettingsOptionsPosition: function () {
            var userNameWidth, userNameCaretIconWidth;
            userNameWidth = parseFloat(domStyle.get(this.esriCTLoginUserNameDiv, "width"));
            userNameCaretIconWidth = parseFloat(domStyle.get(this.esriCTCaretIcon, "width"));
            domStyle.set(this.esriCTSettingsOptionsItemDiv, "right", (userNameWidth + userNameCaretIconWidth) + "px");
        },

        /**
        * This function is used to reset the position of view mode options list.
        * @memberOf widgets/app-header/app-header
        */
        resetViewModeOptionsPosition: function () {
            var userNameWidth, userNameCaretIconWidth, settingsButtonContainerWidth;
            userNameWidth = parseFloat(domStyle.get(this.esriCTLoginUserNameDiv, "width"));
            userNameCaretIconWidth = parseFloat(domStyle.get(this.esriCTCaretIcon, "width"));
            settingsButtonContainerWidth = parseFloat(domStyle.get(this.settingsButtonParentContainer, "width"));
            domStyle.set(this.optionsViewMode, "right", (userNameWidth + userNameCaretIconWidth + settingsButtonContainerWidth) + "px");
        },

        /**
        * This function is used to reset the position of data search.
        * @memberOf widgets/app-header/app-header
        */
        resetDataSearchPosition: function () {
            var userNameWidth, userNameCaretIconWidth;
            userNameWidth = parseFloat(domStyle.get(this.esriCTLoginUserNameDiv, "width"));
            userNameCaretIconWidth = parseFloat(domStyle.get(this.esriCTCaretIcon, "width"));
            domStyle.set(this.searchOptions, "right", (userNameWidth + userNameCaretIconWidth) + "px");
        },

        /**
        * This function is used to attach events
        * @memberOf widgets/app-header/app-header
        */
        _attachEventHandlers: function () {
            on(this.esriCTShowSelected, "click", lang.hitch(this, function (event) {
                this._toggleOptionsVisibility();
                this.onShowSelectedRecordsClick();
            }));
            on(this.esriCTShowAll, "click", lang.hitch(this, function (event) {
                this._toggleOptionsVisibility();
                this.onShowAllRecordsClick();
            }));
            on(this.esriCTClearSelection, "click", lang.hitch(this, function (event) {
                this._toggleOptionsVisibility();
                this.onClearSelectionClick();
            }));
            on(this.esriCTZoomToSelected, "click", lang.hitch(this, function (event) {
                this._toggleOptionsVisibility();
                this.onZoomToSelectedClick();
            }));
            on(this.listView, "click", lang.hitch(this, function (event) {
                this._toggleViewModeOptionsVisibility();
                this.onGridViewClick();
            }));
            on(this.mapView, "click", lang.hitch(this, function (event) {
                this._toggleViewModeOptionsVisibility();
                this.onMapViewClick();
            }));
            on(this.splitView, "click", lang.hitch(this, function (event) {
                this._toggleViewModeOptionsVisibility();
                this.onGridMapViewClick();
            }));
            on(this.searchRecords, "click", lang.hitch(this, function (event) {
                this.onSearchRecordsClick();
            }));
            on(this.clearTextContent, "click", lang.hitch(this, function (event) {
                this.onClearContentClick();
            }));
            on(this.manualRefreshBtn, "click", lang.hitch(this, function (event) {
                var confirmValue = confirm(this.appConfig.i18n.applicationHeader.confirmManualRefeshText);
                if (confirmValue) {
                    this.onManualRefreshClick();
                }
            }));
            $(".esriCTSearchBox").keyup(lang.hitch(this, function (event) {
                if (event.keyCode === 13) {
                    this.onSearchRecordsClick();
                }
            }));
        },

        /**
        * This function is used to show/hide setting options
        * @memberOf widgets/app-header/app-header
        */
        toggleSelectionViewOption: function () {
            if (domClass.contains(this.esriCTShowAll, "esriCTVisible")) {
                domClass.replace(this.esriCTShowAll, "esriCTHidden", "esriCTVisible");
                domClass.replace(this.esriCTShowSelected, "esriCTVisible", "esriCTHidden");
            } else {
                domClass.replace(this.esriCTShowAll, "esriCTVisible", "esriCTHidden");
                domClass.replace(this.esriCTShowSelected, "esriCTHidden", "esriCTVisible");
            }
        },

        /**
        * This function is used to set shortcut icon of an application.
        * @memberOf widgets/app-header/app-header
        */
        _setApplicationShortcutIcon: function () {
            this._loadIcons("shortcut icon", this.applicationHeaderIcon.src);
        },

        /**
        * This function is used to load icons.
        * @param{string} rel specifies the relationship between documents
        * @param{string} iconPath shows path of image
        * @memberOf widgets/app-header/app-header
        */
        _loadIcons: function (rel, iconPath) {
            var icon;
            icon = domConstruct.create("link");
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
        * This function is used to display login details.
        * @memberOf widgets/app-header/app-header
        */
        _displayLoginDetails: function () {
            this.esriCTLoginUserNameDiv.innerHTML = this.appConfig.logInDetails.userName;
            if (!this.loggedInUser) {
                domClass.add(this.esriCTCaretIcon, "esriCTVisibilityHidden");
            }
            this.esriCTLogoutOption.innerHTML = this.appConfig.i18n.applicationHeader.signOutOption;
        },

        /**
        * This function is used to display option available on click of login options arrow.
        * @memberOf widgets/app-header/app-header
        */
        _handleLoginArrowClick: function () {
            on(this.esriCTLoginCredentialsDiv, "click", lang.hitch(this, this._toggleLoginOptionsVisibility));
        },

        /**
        * This function is used to logout from application
        * @memberOf widgets/app-header/app-header
        */
        _handleLogoutClick: function () {
            on(this.esriCTLogoutOption, "click", lang.hitch(this, function (evt) {
                var signOutParentDiv, signOutMessageDiv;
                signOutParentDiv = domConstruct.create("div", {
                    "class": "esriCTSignOutParentDiv"
                });
                signOutMessageDiv = domConstruct.create("div", {
                    "class": "esriCTSignOut"
                }, signOutParentDiv);
                domConstruct.create("div", {
                    "innerHTML": this.appConfig.i18n.signOutPage.signOutMessage
                }, signOutMessageDiv);
                domConstruct.create("a", {
                    "href": "",
                    "innerHTML": this.appConfig.i18n.signOutPage.reSignInMessage
                }, signOutMessageDiv);
                document.body.innerHTML = signOutParentDiv.outerHTML;
            }));
        },

        /**
        * This function is used to set text of settings options
        * @memberOf widgets/app-header/app-header
        */
        _setSettingsOptionText: function () {
            this.esriCTShowSelected.innerHTML = this.appConfig.i18n.applicationHeader.showSelectedOption;
            this.esriCTShowAll.innerHTML = this.appConfig.i18n.applicationHeader.showAllOption;
            this.esriCTClearSelection.innerHTML = this.appConfig.i18n.applicationHeader.clearSelectionOption;
            this.esriCTZoomToSelected.innerHTML = this.appConfig.i18n.applicationHeader.zoomToSelectedOption;
        },

        /**
        * This function is used to set text of view options
        * @memberOf widgets/app-header/app-header
        */
        _setViewModeOptionText: function () {
            this.listView.innerHTML = this.appConfig.i18n.applicationHeader.gridViewOption;
            this.mapView.innerHTML = this.appConfig.i18n.applicationHeader.mapViewOption;
            this.splitView.innerHTML = this.appConfig.i18n.applicationHeader.gridMapViewOption;
        },

        /**
        * This function is used to set text of search panel which shows no results found
        * @memberOf widgets/app-header/app-header
        */
        _setSearchPanelText: function () {
            this.noResultsFound.innerHTML = this.appConfig.i18n.searchPanel.noResultsFound;
        },

        /**
        * This function is used to display setting option's list
        * @memberOf widgets/app-header/app-header
        */
        _onSettingsIconClick: function () {
            on(this.settingsDataViewerBtn, "click", lang.hitch(this, function (event) {
                if (!domClass.contains(this.settingsDataViewerBtn, "esriCTSettingsButtonDisabled")) {
                    this._toggleSettingsBtnIcon();
                }
            }));
            on(this.settingsDataViewerCaretIcon, "click", lang.hitch(this, function (event) {
                if (!domClass.contains(this.settingsDataViewerBtn, "esriCTSettingsButtonDisabled")) {
                    this._toggleSettingsBtnIcon();
                }
            }));
        },

        /**
        * This function is used to enable/disable settings icon
        * @memberOf widgets/app-header/app-header
        */
        _toggleSettingsBtnIcon: function () {
            this._toggleOptionsVisibility();
            domClass.replace(this.searchOptions, "esriCTHidden", "esriCTVisible");
            domClass.replace(this.optionsViewMode, "esriCTHidden", "esriCTVisible");
            domClass.remove(this.esriCTLoginOptionsDiv, "esriCTVisible");
            domClass.add(this.esriCTLoginOptionsDiv, "esriCTHidden");
        },

        /**
        * This function is used to display search option
        * @memberOf widgets/app-header/app-header
        */
        _onSearchIconClick: function () {
            on(this.searchModeBtn, "click", lang.hitch(this, function (event) {
                if (query(".esriCTSearch").length > 0) {
                    this._toggleSearchModeVisibility();
                    domClass.replace(this.esriCTSettingsOptionsItemDiv, "esriCTHidden", "esriCTVisible");
                    domClass.replace(this.optionsViewMode, "esriCTHidden", "esriCTVisible");
                    domClass.remove(this.esriCTLoginOptionsDiv, "esriCTVisible");
                    domClass.add(this.esriCTLoginOptionsDiv, "esriCTHidden");
                    if (typeof $(".esriCTSearchBox, textarea").placeholder === 'function') {
                        $(".esriCTSearchBox, textarea").placeholder();
                    }
                }
            }));
        },

        /**
        * This function is used to do manual refresh of currently selected layer
        * @memberOf widgets/app-header/app-header
        */
        onManualRefreshClick: function () {
            return;
        },

        /**
        * This function is used to display view option's list
        * @memberOf widgets/app-header/app-header
        */
        _onViewModeClick: function () {
            on(this.viewModeBtn, "click", lang.hitch(this, function (event) {
                this._toggleViewModeIcon();
            }));
            on(this.viewModeCaretIcon, "click", lang.hitch(this, function (event) {
                this._toggleViewModeIcon();
            }));
        },

        /**
        * This function is used to enable/disable view mode
        * @memberOf widgets/app-header/app-header
        */
        _toggleViewModeIcon: function () {
            this._toggleViewModeOptionsVisibility();
            domClass.replace(this.esriCTSettingsOptionsItemDiv, "esriCTHidden", "esriCTVisible");
            domClass.replace(this.searchOptions, "esriCTHidden", "esriCTVisible");
            domClass.remove(this.esriCTLoginOptionsDiv, "esriCTVisible");
            domClass.add(this.esriCTLoginOptionsDiv, "esriCTHidden");
        },

        /**
        * This function is used to show/hide login option's list
        * @memberOf widgets/app-header/app-header
        */
        _toggleLoginOptionsVisibility: function () {
            if (this.loggedInUser) {
                if (domClass.contains(this.esriCTLoginOptionsDiv, "esriCTHidden")) {
                    domClass.remove(this.esriCTLoginOptionsDiv, "esriCTHidden");
                    domClass.add(this.esriCTLoginOptionsDiv, "esriCTVisible");
                    domClass.replace(this.esriCTSettingsOptionsItemDiv, "esriCTHidden", "esriCTVisible");
                    domClass.replace(this.optionsViewMode, "esriCTHidden", "esriCTVisible");
                    domClass.replace(this.searchOptions, "esriCTHidden", "esriCTVisible");
                } else {
                    domClass.remove(this.esriCTLoginOptionsDiv, "esriCTVisible");
                    domClass.add(this.esriCTLoginOptionsDiv, "esriCTHidden");
                }
            } else {
                this.signInUser();
            }
        },

        /**
        * This function is used to display identity manager
        * @memberOf widgets/app-header/app-header
        */
        signInUser: function () {
            return;
        },

        /**
        * This function is used to show/hide setting option's list
        * @memberOf widgets/app-header/app-header
        */
        _toggleOptionsVisibility: function () {
            if (domClass.contains(this.esriCTSettingsOptionsItemDiv, "esriCTHidden")) {
                domClass.replace(this.esriCTSettingsOptionsItemDiv, "esriCTVisible", "esriCTHidden");
            } else {
                domClass.replace(this.esriCTSettingsOptionsItemDiv, "esriCTHidden", "esriCTVisible");
            }
        },

        /**
        * This function is used to show/hide search block
        * @memberOf widgets/app-header/app-header
        */
        _toggleSearchModeVisibility: function () {
            if (domClass.contains(this.searchOptions, "esriCTHidden")) {
                domClass.replace(this.searchOptions, "esriCTVisible", "esriCTHidden");
            } else {
                domClass.replace(this.searchOptions, "esriCTHidden", "esriCTVisible");
            }
        },

        /**
        * This function is used to show/hide view option's list
        * @memberOf widgets/app-header/app-header
        */
        _toggleViewModeOptionsVisibility: function () {
            if (domClass.contains(this.optionsViewMode, "esriCTHidden")) {
                domClass.replace(this.optionsViewMode, "esriCTVisible", "esriCTHidden");
            } else {
                domClass.replace(this.optionsViewMode, "esriCTHidden", "esriCTVisible");
            }
        },

        /**
        * This function is used to set operational name as layer title
        * @param{string} layer title
        * @memberOf widgets/app-header/app-header
        */
        setLayerTitle: function (layerTitle) {
            domAttr.set(this.operationalLayerTitle, "innerHTML", layerTitle);
        },

        /**
        * This function is used to generate event on click of show selected option
        * @memberOf widgets/app-header/app-header
        */
        onShowSelectedRecordsClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of show all option
        * @memberOf widgets/app-header/app-header
        */
        onShowAllRecordsClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of clear selection option
        * @memberOf widgets/app-header/app-header
        */
        onClearSelectionClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of zoom to selected option
        * @memberOf widgets/app-header/app-header
        */
        onZoomToSelectedClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of grid view option
        * @memberOf widgets/app-header/app-header
        */
        onGridViewClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of map view option
        * @memberOf widgets/app-header/app-header
        */
        onMapViewClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of split view option
        * @memberOf widgets/app-header/app-header
        */
        onGridMapViewClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of search button
        * @memberOf widgets/app-header/app-header
        */
        onSearchRecordsClick: function () {
            return;
        },

        /**
        * This function is used to generate event on click of clear button
        * @memberOf widgets/app-header/app-header
        */
        onClearContentClick: function () {
            return;
        }
    });
});