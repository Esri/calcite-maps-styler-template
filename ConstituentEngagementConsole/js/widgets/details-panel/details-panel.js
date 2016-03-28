/*global define,dojo,alert,moment,$ */
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
    "dojo/dom",
    "dojo/dom-class",
    "dojo/text!./templates/details-panel.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/_base/lang",
    "widgets/details-panel/comments",
    "widgets/details-panel/media",
    "widgets/details-panel/popup",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/query",
    "dojo/domReady!"
], function (
    declare,
    dom,
    domClass,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    lang,
    Comments,
    Media,
    PopupTab,
    domConstruct,
    on,
    query

) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        _popupWidgetObj: null, // to store object of popup widget
        _mediaWidgetObj: null, // to store object of media widget
        _commentsWidgetObj: null, // to store object of comments widget
        i18n: {},

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @memberOf widgets/details-panel/details-panel
        */
        constructor: function (options) {
            lang.mixin(this, options);
            this.i18n = this.appConfig.i18n;
        },

        /**
        * This function is designed to handle processing after any DOM fragments have been actually added to the document.
        * @memberOf widgets/details-panel/details-panel
        */
        startup: function () {
            //if no selection made from data viewer then hide Details Panel
            if (this.multipleFeatures.length === 0) {
                domConstruct.empty(this.esriCTDetailsPanelTabContainer);
                //Show initial load message when user is yet to select a feature
                if (query(".esriCTNoContentDetailsPanelWrapperContainer")[0]) {
                    domClass.remove(query(".esriCTNoContentDetailsPanelWrapperContainer")[0], "esriCTHidden");
                }
                //When no features are selected from data viewer, enable time slider, filter and search
                this.popupEditModeEnabled(false);
                return;
            }
            this._attachTabEvents();
            this._initializePopupWidget();
            this._initializeMediaWidget();
            this._initializeCommentsWidget();
        },

        /**
        * This function is used to attach click event to popup, media & comments tab
        * @memberOf widgets/details-panel/details-panel
        */
        _attachTabEvents: function () {
            on(dom.byId("popupTab"), "click", lang.hitch(this, function () {
                this.hideWebMapList();
                //Scroll to top position
                dom.byId("tabContent").scrollTop = 0;
            }));
            on(dom.byId("mediaTab"), "click", lang.hitch(this, function () {
                this.hideWebMapList();
                //Scroll to top position
                dom.byId("tabContent").scrollTop = 0;
            }));
            on(dom.byId("commentsTab"), "click", lang.hitch(this, function () {
                this.hideWebMapList();
                //Scroll to top position
                dom.byId("tabContent").scrollTop = 0;
            }));
            on(dom.byId("tabContent"), "scroll", lang.hitch(this, function () {
                this.hideWebMapList();
            }));
        },

        /**
        * This function is used to hide webmap list
        * @memberOf widgets/details-panel/details-panel
        */
        hideWebMapList: function () {
            return;
        },

        /**
        * This function is used to initialize popup tab
        * @memberOf widgets/details-panel/details-panel
        */
        _initializePopupWidget: function () {
            var popupParameters = {};
            popupParameters = {
                "appConfig": this.appConfig,
                "selectedFeatureSet": this.selectedFeatureSet,
                "selectedOperationalLayer": this.selectedOperationalLayer,
                "map": this.map,
                "appUtils": this.appUtils,
                "itemInfo": this.itemInfo,
                "popupInfo": this.popupInfo,
                "multipleFeatures": this.multipleFeatures
            };
            // Initialize popup widget
            this._popupWidgetObj = new PopupTab(popupParameters, domConstruct.create("div", {}, dom.byId("popupWrapperContainer")));
            this._attachPopupEventListener();
            this._popupWidgetObj.startup();
        },

        /**
        * attach event listener for popup
        * @memberOf widgets/details-panel/details-panel
        */
        _attachPopupEventListener: function () {
            this._popupWidgetObj.onFeatureUpdated = lang.hitch(this, function (feature) {
                this.onFeatureUpdated(feature);
            });
            this._popupWidgetObj.onMultipleFeatureEditCancel = lang.hitch(this, function (feature) {
                this.onMultipleFeatureEditCancel(feature);
            });

            this._popupWidgetObj.popupEditModeEnabled = lang.hitch(this, function (isEditMode) {
                this.popupEditModeEnabled(isEditMode);
            });
        },

        /**
        * This function is used to declare that edit mode is enabled in popup tab
        * @memberOf widgets/details-panel/details-panel
        */
        popupEditModeEnabled: function (isEditMode) {
            return isEditMode;
        },

        /**
        * handler when feature is updated from popup form
        * @memberOf widgets/details-panel/details-panel
        */
        onFeatureUpdated: function (features) {
            return features;
        },

        /**
        * handler when multiple feature editing is canceled
        * @memberOf widgets/details-panel/details-panel
        */
        onMultipleFeatureEditCancel: function (features) {
            return features;
        },

        /**
        * This function is used to initialize media tab
        * @memberOf widgets/details-panel/details-panel
        */
        _initializeMediaWidget: function () {
            var mediaParameters;
            if (this.multipleFeatures.length === parseInt(1, 10)) {
                mediaParameters = {
                    "appConfig": this.appConfig,
                    "selectedFeatureSet": this.selectedFeatureSet,
                    "selectedOperationalLayer": this.selectedOperationalLayer,
                    "map": this.map,
                    "appUtils": this.appUtils,
                    "itemInfo": this.itemInfo,
                    "popupInfo": this.popupInfo,
                    "multipleFeatures": this.multipleFeatures
                };
                // Initialize comments widget
                this._mediaWidgetObj = new Media(mediaParameters, domConstruct.create("div", {}, dom.byId("mediaWrapperContainer")));
                this._attachMediaTabEvents();
                this._mediaWidgetObj.startup();
            } else {
                this._hideDetailsPanelTab("media");
            }
        },

        /**
        * This function is used to initialize comments tab
        * @memberOf widgets/details-panel/details-panel
        */
        _initializeCommentsWidget: function () {
            var commentsParameters;
            //if no record is selected from table then hide all tabs

            if (this.multipleFeatures.length === 1) {
                // Initialize comments widget
                commentsParameters = {
                    "appConfig": this.appConfig,
                    "selectedFeatureSet": this.selectedFeatureSet,
                    "selectedOperationalLayer": this.selectedOperationalLayer,
                    "map": this.map,
                    "appUtils": this.appUtils,
                    "itemInfo": this.itemInfo,
                    "multipleFeatures": this.multipleFeatures
                };
                this._commentsWidgetObj = new Comments(commentsParameters, domConstruct.create("div", {}, dom.byId("commentsWrapperContainer")));
                this._attachCommentsEventListener();
                this._commentsWidgetObj.startup();
            } else {
                this._hideDetailsPanelTab("comments");
            }
            if (dom.byId("commentformContainer") && !domClass.contains(dom.byId("commentformContainer"), "esriCTHidden")) {
                domClass.add(dom.byId("commentformContainer"), "esriCTHidden");
            }
        },

        /**
        * This function is used to attach event listener to comments widget
        * @memberOf widgets/details-panel/details-panel
        */
        _attachCommentsEventListener: function () {
            this._commentsWidgetObj.hideCommentsTab = lang.hitch(this, function () {
                this._hideDetailsPanelTab("comments");
            });

            this._commentsWidgetObj.showCommentsTab = lang.hitch(this, function () {
                this._showDetailsPanelTab("comments");
                this._displayTabList();
            });
        },

        /**
        * This function is used to destroy popup widget.
        * @memberOf widgets/details-panel/details-panel
        */
        destroyPopupWidget: function () {
            if (this._popupWidgetObj) {
                this._popupWidgetObj.destroy();
            }
        },

        /**
        * This function is used to destroy media widget.
        * @memberOf widgets/details-panel/details-panel
        */
        destroyMediaWidget: function () {
            if (this._mediaWidgetObj) {
                this._mediaWidgetObj.destroy();
            }
        },

        /**
        * This function is used to destroy comments widget.
        * @memberOf widgets/details-panel/details-panel
        */
        destroyCommentsWidget: function () {
            if (this._commentsWidgetObj) {
                this._commentsWidgetObj.destroy();
            }
        },

        /**
        * This function is used to hide navigation tabs based on availability of data
        * @param{object} tab name
        * @memberOf widgets/details-panel/details-panel
        */
        _hideDetailsPanelTab: function (tabName) {
            var tab = dom.byId(tabName + "Tab");
            if (tab) {
                dom.byId(tabName + "Tab").style.display = "none";
            }
        },

        /**
        * This function is used to hide navigation tabs based on availability of data
        * @param{object} tab name
        * @memberOf widgets/details-panel/details-panel
        */
        _showDetailsPanelTab: function (tabName) {
            var tab = dom.byId(tabName + "Tab");
            if (tab) {
                dom.byId(tabName + "Tab").style.display = "";
            }
        },

        /**
        * This function is used to attach media tab events
        * @memberOf widgets/details-panel/details-panel
        */
        _attachMediaTabEvents: function () {
            this._mediaWidgetObj.hideMediaTab = lang.hitch(this, function () {
                this._hideDetailsPanelTab("media");
            });
            this._mediaWidgetObj.showMediaTab = lang.hitch(this, function () {
                this._showDetailsPanelTab("media");
                this._displayTabList();
            });
        },

        /**
        * Display tab list if media or comment tab gets displayed
        * @memberOf widgets/details-panel/details-panel
        */
        _displayTabList: function () {
            if (dom.byId("detailsPanelWrapperContainer")) {
                domClass.remove(dom.byId("detailsPanelWrapperContainer"), "esriCTHideTabList");
            }
            this.tabList.style.display = "";
        }
    });
});
