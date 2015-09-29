/*global define,dojo */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2015 Esri
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
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./SidebarHeader.html",
    "dojo/dom",
    "dojo/_base/lang",
    "dojo/_base/window",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/on",
    "dojo/topic",
    "application/lib/SvgHelper"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    template,
    dom,
    lang,
    win,
    domClass,
    domConstruct,
    domStyle,
    on,
    topic,
    SvgHelper
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        widgetsInTemplate: true,

        /**
         * Widget constructor
         * @param {object} initialProps Initialization properties:
         *     appConfig: Application configuration,
         *     showSignin: {boolean} Indicates if sign-in button is to be available
         *     showHelp: {boolean} Indicates if help button is to be available
         * @constructor
         */

        /**
         * Initializes the widget once the DOM structure is ready.
         */
        postCreate: function () {
            var i18n = this.appConfig.i18n.sidebar_header, signInBtnOnClick, signInMenuBtnOnClick,
                helpMenuItem, helpBtnOnClick, helpMenuBtnOnClick, viewToggleMenuBtnOnClick, optionsOnClick;

            // Run any parent postCreate processes - can be done at any point
            this.inherited(arguments);

            // Set up the UI
            domStyle.set(this.optionsDropdown, "border-color", this.appConfig.theme.background);

            domStyle.set(this.signInBtn, "display", "none");
            if (this.showSignin) {
                this.signInMenuItem = domConstruct.create("div", {
                    className: "sideHdrOptionsMenuItem textButton appThemeInvertedHover"
                }, this.optionsDropdown);
                domStyle.set(this.signInMenuItem, "display", "none");

                signInBtnOnClick = on(this.signInBtn, "click", function () {
                    topic.publish("socialSelected");
                });
                signInMenuBtnOnClick = on(this.signInMenuItem, "click", function () {
                    topic.publish("socialSelected");
                });
                this.own(signInBtnOnClick, signInMenuBtnOnClick);
            }


            this.viewToggleMenuItem = domConstruct.create("div", {
                className: "sideHdrOptionsMenuItem textButton appThemeInvertedHover"
            }, this.optionsDropdown);
            viewToggleMenuBtnOnClick = on(this.viewToggleMenuItem, "click", lang.hitch(this, function () {
                if (this.viewToggleIsGoToMapView) {
                    topic.publish("showMapViewClicked");
                } else {
                    topic.publish("showListViewClicked");
                }
            }));
            this.own(viewToggleMenuBtnOnClick);
            this.setViewToggle(true);


            if (this.showHelp) {
                this.helpBtn.title = i18n.helpButtonTooltip;
                helpMenuItem = domConstruct.create("div", {
                    className: "sideHdrOptionsMenuItem textButton appThemeInvertedHover",
                    title: i18n.helpButtonTooltip,
                    innerHTML: i18n.helpButtonLabel
                }, this.optionsDropdown);

                helpBtnOnClick = on(this.helpBtn, "click", function () {
                    topic.publish("helpSelected");
                });
                helpMenuBtnOnClick = on(helpMenuItem, "click", function () {
                    topic.publish("helpSelected");
                });
                this.own(helpBtnOnClick, helpMenuBtnOnClick);
            }

            this.options.title = i18n.menuButtonTooltip;
            optionsOnClick = on(this.options, "click", lang.hitch(this, function (evt) {
                if (this.optionsDropdownIsOpen) {
                    topic.publish("hideOptionsMenu");
                } else {
                    topic.publish("showOptionsMenu");
                }
                evt.cancelBubble = true;
            }));
            this.own(optionsOnClick);

            this.optionsDropdownIsOpen = false;
            topic.subscribe("showOptionsMenu", lang.hitch(this, function (item) {
                domStyle.set(this.optionsDropdown, "display", "block");
                this.optionsDropdownIsOpen = true;
            }));
            topic.subscribe("hideOptionsMenu", lang.hitch(this, function (item) {
                domStyle.set(this.optionsDropdown, "display", "none");
                this.optionsDropdownIsOpen = false;
            }));
            on(window, "resize", lang.hitch(this, function (event) {
                if (this.optionsDropdownIsOpen) {
                    topic.publish("hideOptionsMenu");
                }
            }));

            on(win.body(), "click", function () {
                topic.publish("hideOptionsMenu");
            });


            this.appTitle.innerHTML = this.appTitle.title = this.appConfig.title || "";
        },

        /**
         * Performs post-DOM-placement actions.
         */
        startup: function () {
            this.inherited(arguments);
            domStyle.set(this.domNode.parentNode, "border-bottom-color", this.appConfig.theme.background);
        },

        /**
         * Sets display of help trigger.
         * @param {boolean} showIfEnabled Show help trigger if help is enabled
         */
        updateHelp: function (showIfEnabled) {
            if (showIfEnabled && this.showHelp) {
                domStyle.set(this.helpBtn, "display", "inline-block");
            } else {
                domStyle.set(this.helpBtn, "display", "none");
            }
        },

        /**
         * Sets the map/list view toggle display.
         * @param {boolean} setGoToMapView Set the toggle for the "go to map" state (true)
         * or the "go to list" state (false)
         */
        setViewToggle: function (setGoToMapView) {
            if (setGoToMapView) {
                this.viewToggleMenuItem.innerHTML = this.appConfig.i18n.sidebar_header.gotoMapViewLabel;
                this.viewToggleMenuItem.title = this.appConfig.i18n.sidebar_header.gotoMapViewTooltip;
            } else {
                this.viewToggleMenuItem.innerHTML = this.appConfig.i18n.sidebar_header.gotoListViewLabel;
                this.viewToggleMenuItem.title = this.appConfig.i18n.sidebar_header.gotoListViewTooltip;
            }
            this.viewToggleIsGoToMapView = setGoToMapView;
        },

        /**
         * Updates the signed-in display based on the signed-in state.
         * @param {object} signedInUser Description of signed-in user: "name" {string},
         * "canSignOut" {boolean}; null indicates that no one is signed in
         */
        updateSignin: function (signedInUser) {
            var i18n = this.appConfig.i18n.sidebar_header;

            if (this.showSignin) {
                if (!signedInUser) {
                    this.signInBtn.innerHTML = this.signInMenuItem.innerHTML = i18n.signInButton;
                    this.signInBtn.title = this.signInMenuItem.title = i18n.signInButtonTooltip;
                    domStyle.set(this.signInBtn, "display", "block");
                    domStyle.set(this.signInMenuItem, "display", "block");

                } else if (signedInUser.canSignOut) {
                    this.signInBtn.innerHTML = this.signInMenuItem.innerHTML = i18n.signOutButton;
                    this.signInBtn.title = this.signInMenuItem.title = i18n.signOutButtonTooltip;
                    domStyle.set(this.signInBtn, "display", "block");
                    domStyle.set(this.signInMenuItem, "display", "block");

                } else {
                    domStyle.set(this.signInBtn, "display", "none");
                    domStyle.set(this.signInMenuItem, "display", "none");
                }
            }
        }

    });
});
