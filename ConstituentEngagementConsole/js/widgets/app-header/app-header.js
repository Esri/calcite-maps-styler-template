/*global define,dojoConfig,$,confirm,document */
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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/_base/lang",
    "dojo/dom-attr",
    "dojo/dom-style",
    "dojo/on",
    "dojo/text!./templates/app-header.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "widgets/search/search",
    "widgets/manual-refresh/manual-refresh",
    "widgets/sign-in/sign-in",
    "widgets/help/help",
    "dojo/dom-class"
], function (
    declare,
    domConstruct,
    lang,
    domAttr,
    domStyle,
    on,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    Search,
    ManualRefresh,
    SignIn,
    Help,
    domClass
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template, //  a string representing the HTML of the template
        _helpWidgetObj: null, // to store object of help widget
        _searchWidgetObj: null, // to store object of search widget
        _manualRefreshWidgetObj: null, // to store object of manual refresh widget
        _isMultipleRecordsSelected: false, // to check how many records are selected in data viewer/ map panel
        _signInWidgetObj: null, // to store object of sign in widget
        isSearchActive: false,

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of the widget
        * @memberOf widgets/app-header/app-header
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        /**
        * This function is designed to handle processing after any DOM fragments have been actually added to the document.
        * @memberOf widgets/app-header/app-header
        */
        startup: function () {
            this._onApplicationIconLoad();
            this._setMaxWidthOfApplicationIcon();
            this._setApplicationIcon();
        },

        /**
        * This function is executed when application icon is loaded inside its container
        * @memberOf widgets/app-header/app-header
        */
        _onApplicationIconLoad: function () {
            on(this.applicationHeaderIcon, "load, error", lang.hitch(this, function () {
                this._displaySignedInUserDetails();
                this._setSignOutOptionText();
                this._setWidthOfApplicationNameContainer();
                if (this.displaySignInText) {
                    this._displaySignInText();
                }
                this._setApplicationName();
                this._setApplicationShortcutIcon();
                this._initializeSearchWidget();
                this._initializeManualRefreshWidget();
                this._initializeSignInWidget();
                this._initializeHelpWidget();
                this._setToolTip();
            }));
        },

        /**
        * This function is used to display sign in text
        * @memberOf widgets/app-header/app-header
        */
        _displaySignInText: function () {
            domClass.add(this.refreshButton, "esriCTHidden");
            domClass.add(this.searchButton, "esriCTHidden");
            this.applicationHeaderName.innerHTML = this.appConfig.i18n.applicationHeader.pleaseSignInText;
            document.title = this.appConfig.i18n.applicationHeader.pleaseSignInText;
        },

        /**
        * This function is used to set text of sign-out option
        * @memberOf widgets/app-header/app-header
        */
        _setSignOutOptionText: function () {
            this.signOutOption.innerHTML = this.appConfig.i18n.applicationHeader.signOutOption;
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
        * This function is used to set tooltip for application header icon
        * @memberOf widgets/app-header/app-header
        */
        _setToolTip: function () {
            domAttr.set(this.searchButton, "title", this.appConfig.i18n.search.searchIconTooltip);
            domAttr.set(this.refreshButton, "title", this.appConfig.i18n.manualRefresh.manualRefreshIconTooltip);
            domAttr.set(this.helpButton, "title", this.appConfig.i18n.help.helpIconTooltip);
        },

        /**
        * This function is used to display details of signed in user
        * @memberOf widgets/app-header/app-header
        */
        _displaySignedInUserDetails: function () {
            this.signedInUserDetails.innerHTML = this.appConfig.logInDetails.userName;
            if (this.appConfig.logInDetails.userName !== this.appConfig.i18n.applicationHeader.signInOption) {
                domClass.remove(this.signedInUserDetailsCaretIcon, "esriCTHidden");
            }
        },

        /**
        * This function is used to set max width of the application icon container
        * @memberOf widgets/app-header/app-header
        */
        _setMaxWidthOfApplicationIcon: function () {
            var searchIconWidth, manualRefreshIconWidth, helpIconWidth, applicationHeaderContainerWidth, headerIconsWidth, signInSeperatorWidth, signedInUserDetailsContainerWidth;
            applicationHeaderContainerWidth = $(this.applicationHeaderContainer).outerWidth(true);
            applicationHeaderContainerWidth = parseFloat(applicationHeaderContainerWidth);
            searchIconWidth = $(this.searchButton).outerWidth(true);
            searchIconWidth = parseFloat(searchIconWidth);
            manualRefreshIconWidth = $(this.refreshButton).outerWidth(true);
            manualRefreshIconWidth = parseFloat(manualRefreshIconWidth);
            signedInUserDetailsContainerWidth = $(this.signedInUserDetailsContainer).outerWidth(true);
            signedInUserDetailsContainerWidth = parseFloat(signedInUserDetailsContainerWidth);
            helpIconWidth = $(this.helpButton).outerWidth(true);
            helpIconWidth = parseFloat(helpIconWidth);
            signInSeperatorWidth = $(this.signInSeperator).outerWidth(true);
            signInSeperatorWidth = parseFloat(signInSeperatorWidth);
            headerIconsWidth = searchIconWidth + manualRefreshIconWidth + helpIconWidth + signInSeperatorWidth;
            domStyle.set(this.applicationHeaderIconContainer, "max-width", (applicationHeaderContainerWidth - headerIconsWidth) + "px");
        },

        /**
        * This function is used to set application icon
        * @memberOf widgets/app-header/app-header
        */
        _setApplicationIcon: function () {
            var applicationIcon;
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
            applicationIcon = domAttr.get(this.applicationHeaderIcon, "src");
            this._loadIcons("apple-touch-icon-precomposed", applicationIcon);
        },

        /**
        * This function is used to set width of application name container
        * @memberOf widgets/app-header/app-header
        */
        _setWidthOfApplicationNameContainer: function () {
            var applicationIconWidth, searchIconWidth, manualRefreshIconWidth, helpIconWidth, applicationHeaderContainerWidth, headerIconsWidth, applicationNameContainerWidth, signInSeperatorWidth, signedInUserDetailsContainerWidth;
            applicationHeaderContainerWidth = $(this.applicationHeaderContainer).outerWidth(true);
            applicationHeaderContainerWidth = parseFloat(applicationHeaderContainerWidth);
            applicationIconWidth = $(this.applicationHeaderIconContainer).outerWidth(true);
            applicationIconWidth = parseFloat(applicationIconWidth);
            searchIconWidth = $(this.searchButton).outerWidth(true);
            searchIconWidth = parseFloat(searchIconWidth);
            manualRefreshIconWidth = $(this.refreshButton).outerWidth(true);
            manualRefreshIconWidth = parseFloat(manualRefreshIconWidth);
            helpIconWidth = $(this.helpButton).outerWidth(true);
            helpIconWidth = parseFloat(helpIconWidth);
            signedInUserDetailsContainerWidth = $(this.signedInUserDetailsContainer).outerWidth(true);
            signedInUserDetailsContainerWidth = parseFloat(signedInUserDetailsContainerWidth);
            signInSeperatorWidth = $(this.signInSeperator).outerWidth(true);
            signInSeperatorWidth = parseFloat(signInSeperatorWidth);
            headerIconsWidth = applicationIconWidth + searchIconWidth + manualRefreshIconWidth + helpIconWidth + signedInUserDetailsContainerWidth + signInSeperatorWidth;
            applicationNameContainerWidth = applicationHeaderContainerWidth - headerIconsWidth;
            applicationNameContainerWidth = applicationNameContainerWidth - 30;
            domStyle.set(this.applicationNameContainer, "width", applicationNameContainerWidth + "px");
        },

        /**
        * This function is used to set name of application
        * @memberOf widgets/app-header/app-header
        */
        _setApplicationName: function () {
            var applicationName;
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
        },

        /**
        * This function is used to create help widget
        * @memberOf widgets/app-header/app-header
        */
        _initializeHelpWidget: function () {
            var helpParameters;
            this._destroyHelpWidget();
            helpParameters = {
                "appConfig": this.appConfig
            };
            // Initialize help widget
            this._helpWidgetObj = new Help(helpParameters);
            // On click of help icon, open help modal
            on(this.helpButton, "click", lang.hitch(this, function () {
                this.hideWebMapList();
                this._helpWidgetObj.startup();
            }));
        },

        /**
        * This function is used to destroy help widget
        * @memberOf widgets/app-header/app-header
        */
        _destroyHelpWidget: function () {
            if (this._helpWidgetObj) {
                this._helpWidgetObj.destroy();
            }
        },

        /**
        * This method is used to create search widget.
        * @memberOf widgets/app-header/app-header
        */
        _initializeSearchWidget: function () {
            var searchParameters;
            searchParameters = {
                "appConfig": this.appConfig,
                "appUtils": this.appUtils
            };
            // Initialize search widget
            this._searchWidgetObj = new Search(searchParameters, domConstruct.create("div", {}, this.searchContainer));
            // On click of search icon, open search panel
            on(this.searchButton, "click", lang.hitch(this, function () {
                if (domClass.contains(this.searchButton, "esriCTSearchIconContainer")) {
                    this.hideWebMapList();
                    if (this._searchWidgetObj) {
                        this._searchWidgetObj.startup();
                    }
                } else {
                    if (this._isMultipleRecordsSelected) {
                        this.appUtils.showMessage(this.appConfig.i18n.search.searchInEditModeAlert);
                    }
                }
            }));

            this._searchWidgetObj.onSearchApplied = lang.hitch(this, function (lastSearchedString) {
                this.onSearchApplied(lastSearchedString);
            });
        },

        /**
        * This method is used to create manual refresh widget
        * @memberOf widgets/app-header/app-header
        */
        _initializeManualRefreshWidget: function () {
            var refreshParameters;
            refreshParameters = {
                "appConfig": this.appConfig,
                "appUtils": this.appUtils
            };
            // Initialize manual refresh widget
            this._manualRefreshWidgetObj = new ManualRefresh(refreshParameters);
            // On click of manual refresh icon, proceed with manual refresh functionality
            on(this.refreshButton, "click", lang.hitch(this, function () {
                if (domClass.contains(this.refreshButton, "esriCTManualRefreshIconContainer")) {
                    this.hideWebMapList();
                    this._manualRefreshWidgetObj.startup();
                }
            }));
            this._manualRefreshWidgetObj.confirmedManualRefresh = lang.hitch(this, function () {
                this.confirmedManualRefresh();
            });

            this._manualRefreshWidgetObj.refreshLayerWithSearchDefExpression = lang.hitch(this, function () {
                this._searchWidgetObj.searchFeatureRecords();
            });
        },

        /**
        * This method is used to toggle manual refresh icon
        * @memberOf widgets/app-header/app-header
        */
        toggleManualRefreshIcon: function (manualRefreshParameter) {
            manualRefreshParameter.refreshButton = this.refreshButton;
            this._manualRefreshWidgetObj.enableManualRefreshIcon(manualRefreshParameter);
        },

        /**
        * This method is used to enable/disable search icon based on it configuration
        * @memberOf widgets/app-header/app-header
        */
        toggleSearchIcon: function (searchParameter) {
            searchParameter.searchButton = this.searchButton;
            this.isSearchActive = this._searchWidgetObj.resetSearchPanel(searchParameter);
        },

        /**
        * This function is used to hide webmap list
        * @memberOf widgets/app-header/app-header
        */
        hideWebMapList: function () {
            return;
        },

        /**
        * This function is used to publish confirmation of manual refresh to other widget
        * @memberOf widgets/app-header/app-header
        */
        confirmedManualRefresh: function () {
            return;
        },

        /**
        * This function is used enable/disable search icon
        * @memberOf widgets/app-header/app-header
        */
        _handleSearchIconVisibility: function (featureLength) {
            if (this.isSearchActive) {
                if (featureLength > 1) {
                    domClass.add(this.searchButton, "esriCTSearchIconContainerDisabled");
                    domClass.remove(this.searchButton, "esriCTSearchIconContainer");
                    this._isMultipleRecordsSelected = true;
                    if (!domClass.contains(this._searchWidgetObj.searchOptions, "esriCTHidden")) {
                        domClass.add(this._searchWidgetObj.searchOptions, "esriCTHidden");
                    }
                } else {
                    domClass.remove(this.searchButton, "esriCTSearchIconContainerDisabled");
                    domClass.add(this.searchButton, "esriCTSearchIconContainer");
                    this._isMultipleRecordsSelected = false;
                }
            }
        },

        /**
        * This method is used to create sign in widget
        * @memberOf widgets/app-header/app-header
        */
        _initializeSignInWidget: function () {
            var signInParameters;
            signInParameters = {
                "appConfig": this.appConfig,
                "appUtils": this.appUtils
            };
            // Initialize sign in widget
            this._signInWidgetObj = new SignIn(signInParameters);
            this._signInWidgetObj.destroyWidgets = lang.hitch(this, function () {
                this.destroyWidgets();
            });
            this._signInWidgetObj.reload = lang.hitch(this, function (logInDetails) {
                this.reload(logInDetails);
            });
            // On click of sign in text, open identity manager
            on(this.signedInUserDetails, "click", lang.hitch(this, function () {
                if ((domStyle.get(this.signedInUserDetailsCaretIcon, "display") === "none")) {
                    this._signInWidgetObj.startup();
                }
            }));
            on(this.signedInUserDetailsCaretIcon, "click", lang.hitch(this, function () {
                if ((domStyle.get(this.helpButton, "display") === "none") && (domStyle.get(this.refreshButton, "display") === "none") && (domStyle.get(this.searchButton, "display") === "none")) {
                    domClass.add(this.signOutOptionParentContainer, "esriCTSignOutOptionErrorMode");
                }
                domClass.toggle(this.signOutOptionParentContainer, "esriCTHidden");
            }));
            on(this.signOutOptionParentContainer, "click", lang.hitch(this, function () {
                var signOutParentDiv, signOutMessageDiv;
                signOutParentDiv = domConstruct.create("div", { "class": "esriCTSignOutParentDiv" });
                signOutMessageDiv = domConstruct.create("div", { "class": "esriCTSignOut" }, signOutParentDiv);
                domConstruct.create("div", { "innerHTML": this.appConfig.i18n.signOutPage.signOutMessage }, signOutMessageDiv);
                domConstruct.create("a", { "href": "", "innerHTML": this.appConfig.i18n.signOutPage.reSignInMessage }, signOutMessageDiv);
                document.body.innerHTML = signOutParentDiv.outerHTML;
            }));
        },

        /**
        * This method is used to reload the app
        * @memberOf widgets/app-header/app-header
        */
        reload: function (logInDetails) {
            return logInDetails;
        },

        /**
        * This method is used to destroy widgets
        * @memberOf widgets/app-header/app-header
        */
        destroyWidgets: function () {
            return;
        },

        /**
        * This method is return last searched string from search
        * @memberOf widgets/app-header/app-header
        */
        onSearchApplied: function (lastSearchedString) {
            return lastSearchedString;
        }
    });
});