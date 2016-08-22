/*global define,$ */
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
    "dojo/text!./templates/selection-options.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/_base/lang",
    "dojo/dom-class",
    "dojo/on",
    "dojo/query",
    "dojo/dom-style",
    "dojo/domReady!"
], function (
    declare,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    lang,
    domClass,
    on,
    query,
    domStyle
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        _showAllClickHandle: null, // to store click handle of show all option
        _showSelectedClickHandle: null, // to store click handle of show selected option
        i18n: {}, // to store nls object

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @memberOf widgets/selection-options/selection-options
        */
        constructor: function (options) {
            lang.mixin(this, options);
            this.i18n = this.appConfig.i18n;
        },

        /**
        * This function is designed to handle processing after any DOM fragments have been actually added to the document.
        * @memberOf widgets/selection-options/selection-options
        */
        startup: function () {
            this._toggleOptions();
            this._attachSelectionOptionsEvents();
        },

        /**
        * This function is used to show or hide selection options list
        * @memberOf widgets/selection-options/selection-options
        */
        _toggleOptions: function () {
            this._alignSelectionOptionsList();
            domClass.toggle(this.selectionsOptionsWrapperContainer, "esriCTHidden");
        },

        /**
        * This function is used to locate the position of the selection options list
        * @memberOf widgets/selection-options/selection-options
        */
        _alignSelectionOptionsList: function () {
            var signedInUserDetails, signInSeparator, helpButton, manualRefreshButton, searchButton,
                signedInUserDetailsContainerWidth, signInSeparatorWidth, helpIconWidth, manualRefreshIconWidth, searchIconWidth, headerIconsWidth, selectionOptionsContainer, selectOptionIcon, selectOptionIconWidth;
            helpIconWidth = 0;
            signedInUserDetails = query(".esriCTSignInDetailContainer")[0];
            signInSeparator = query(".esriCTSeparator")[0];
            helpButton = query(".esriCTHelpIconContainer")[0];
            selectOptionIcon = query(".esriCTSelectionOptionsContainerEnabled")[0];
            manualRefreshButton = query(".esriCTManualRefreshIconContainerDisable");
            if (!manualRefreshButton[0]) {
                manualRefreshButton = query(".esriCTManualRefreshIconContainer");
            }
            searchButton = query(".esriCTSearchIconContainerDisabled");
            if (!searchButton[0]) {
                searchButton = query(".esriCTSearchIconContainer");
            }
            // Sign in
            signedInUserDetailsContainerWidth = $(signedInUserDetails).outerWidth(true);
            signedInUserDetailsContainerWidth = parseFloat(signedInUserDetailsContainerWidth);
            // Sign in separator
            signInSeparatorWidth = $(signInSeparator).outerWidth(true);
            signInSeparatorWidth = parseFloat(signInSeparatorWidth);
            // help
            if (this.appConfig.showHelpIcon) {
                helpIconWidth = $(helpButton).outerWidth(true);
                helpIconWidth = parseFloat(helpIconWidth);
            }
            // manual refresh
            manualRefreshIconWidth = $(manualRefreshButton).outerWidth(true);
            manualRefreshIconWidth = parseFloat(manualRefreshIconWidth);
            // search
            searchIconWidth = $(searchButton).outerWidth(true);
            searchIconWidth = parseFloat(searchIconWidth);
            // select option
            if (selectOptionIcon) {
                selectOptionIconWidth = $(selectOptionIcon).outerWidth(true);
                selectOptionIconWidth = parseFloat(selectOptionIconWidth);
            }
            // header icon width
            headerIconsWidth = signedInUserDetailsContainerWidth + signInSeparatorWidth + helpIconWidth + manualRefreshIconWidth + searchIconWidth + selectOptionIconWidth;
            headerIconsWidth = headerIconsWidth - 75;
            selectionOptionsContainer = query(".esriCTSelectionOptionsContainer")[0];
            if (this.appConfig.i18n.direction === "rtl") {
                domStyle.set(selectionOptionsContainer, "left", headerIconsWidth + "px");
            } else {
                domStyle.set(selectionOptionsContainer, "right", headerIconsWidth + "px");
            }
        },

        /**
        * This function is used to attach events
        * @memberOf widgets/selection-options/selection-options
        */
        _attachSelectionOptionsEvents: function () {
            if (this._showAllClickHandle) {
                this._showAllClickHandle.remove();
            }
            if (this._showSelectedClickHandle) {
                this._showSelectedClickHandle.remove();
            }
            this._showAllClickHandle = on(this.showAllOption, "click", lang.hitch(this, function () {
                domClass.add(this.selectionsOptionsWrapperContainer, "esriCTHidden");

                domClass.remove(this.showAllOption, "esriCTVisible");
                domClass.add(this.showAllOption, "esriCTHidden");

                domClass.remove(this.showSelectedOption, "esriCTHidden");
                this.showAllClicked();
            }));
            this._showSelectedClickHandle = on(this.showSelectedOption, "click", lang.hitch(this, function () {
                domClass.add(this.selectionsOptionsWrapperContainer, "esriCTHidden");

                domClass.remove(this.showSelectedOption, "esriCTVisible");
                domClass.add(this.showSelectedOption, "esriCTHidden");

                domClass.remove(this.showAllOption, "esriCTHidden");
                this.showSelectedClicked();
            }));
        },

        /**
        * This function is used to disable selection option list
        * @memberOf widgets/selection-options/selection-options
        */
        hideSelectionOptionsList: function () {
            domClass.add(this.selectionsOptionsWrapperContainer, "esriCTHidden");
            domClass.add(this.showAllOption, "esriCTHidden");
            domClass.remove(this.showSelectedOption, "esriCTHidden");
        },

        /**
        * This function is used to notify that show all is clicked
        * @memberOf widgets/selection-options/selection-options
        */
        showAllClicked: function () {
            return;
        },

        /**
        * This function is used to notify that show selected is clicked
        * @memberOf widgets/selection-options/selection-options
        */
        showSelectedClicked: function () {
            return;
        }
    });
});