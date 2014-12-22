/*global define,document,dojo,window,alert,setTimeout,$ */
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
define(["dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/string",
    "dojo/text!css/theme-template.css",
    "application/utils/utils",
    "widgets/app-header/app-header",
    "widgets/map-viewer/map-viewer",
    "widgets/webmap-list/webmap-list",
    "dojo/dom-class",
    "dojo/domReady!"
    ], function (
    declare,
    lang,
    dom,
    domStyle,
    domConstruct,
    on,
    string,
    ThemeCss,
    ApplicationUtils,
    ApplicationHeader,
    MapViewer,
    WebMapList,
    domClass
) {
    return declare(null, {
        config: {},
        _isSliderOpen: true,
        _webMapListWidget: null,
        _dataViewerWidget: null,
        _appHeader: null,
        _groupItems: [],

        /**
        * This function is called when user needs to start operation of widget
        * @param{object} configuration details
        * @param{object} logged in user details
        * @memberOf widgets/main/main
        */
        startup: function (config, loggedInUser) {
            try {
                var error, queryParams = {};
                // config will contain application and user defined info for the template such as i18n strings, the web map id
                // and application id
                // any url parameters and any application specific configuration information.
                dojo.applicationUtils = ApplicationUtils;
                if (config) {
                    this.config = config;
                    //if login details are not available set it to anonymousUserName
                    if (loggedInUser) {
                        this.config.logInDetails = {
                            "userName": loggedInUser.username,
                            "token": loggedInUser.credential.token
                        };
                    } else {
                        this.config.logInDetails = {
                            "userName": this.config.i18n.main.anonymousUserName,
                            "token": ""
                        };
                    }
                    //enable queryForGroupItems in templateconfig
                    dojo.BoilerPlateTemplate.templateConfig.queryForGroupItems = true;

                    //construct the query params if found in group info
                    if (config.groupInfo.results && config.groupInfo.results.length > 0) {
                        lang.mixin(queryParams, dojo.BoilerPlateTemplate.templateConfig.groupParams);
                        if (config.groupInfo.results[0].sortField) {
                            queryParams.sortField = config.groupInfo.results[0].sortField;
                        }
                        if (config.groupInfo.results[0].sortOrder) {
                            queryParams.sortOrder = config.groupInfo.results[0].sortOrder;
                        }
                    }
                    //Pass the newly constructed queryparams from groupinfo.
                    //If query params not available in groupinfo or proup is private items will be sorted according to modified date.
                    this._loadGroupItems(queryParams);
                } else {
                    error = new Error("Main:: Config is not defined");
                    dojo.applicationUtils.showError(error);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to load group items
        * @param{object} parameter used to query group items
        * @memberOf widgets/main/main
        */
        _loadGroupItems: function (queryParams) {
            dojo.BoilerPlateTemplate.queryGroupItems(queryParams).then(lang.hitch(this, this._groupItemsLoaded));
        },

        /**
        * This function is executed when group items are loaded
        * @param{object} response once group item are loaded
        * @memberOf widgets/main/main
        */
        _groupItemsLoaded: function (response) {
            this._groupItems.push.apply(this._groupItems, response.results);
            if (response.nextQueryParams.start < 0) {
                this.config.groupItems.results = this._groupItems;
                this._loadApplication();
            } else {
                this._loadGroupItems(response.nextQueryParams);
            }
        },

        /**
        * This function is used to load application
        * @memberOf widgets/main/main
        */
        _loadApplication: function () {
            dojo.configData = this.config;
            //Set Application Theme
            dojo.applicationUtils.loadApplicationTheme();
            //Set Application header
            this._createApplicationHeader();
            // load MapViewer
            this._mapViewer = new MapViewer(this.config, domConstruct.create("div", {}, dom.byId("LowerContainer")));
            // load web map list
            if (this.config.groupItems.results.length > 0) {
                this._createWebMapList();
            } else {
                this._handleNoWebMapToDsiplay();
            }
            //Attach event handelers
            this._attachEvents();
        },

        /**
        * This function is used to handle scenario when there is no web map
        * @memberOf widgets/main/main
        */
        _handleNoWebMapToDsiplay: function () {
            try {
                domClass.add(dom.byId("esriCTMainContainer"), "esriCTHidden");
                dojo.applicationUtils.hideLoadingIndicator();
                domClass.remove(dom.byId("esriCTNoWebMapParentDiv"), "esriCTHidden");
                dom.byId("esriCTNoWebMapChildDiv").innerHTML = dojo.configData.i18n.webMapList.noWebMapInGroup;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to resize upper container
        * @memberOf widgets/main/main
        */
        _resizeUpperConatiner: function () {
            try {
                $("#UpperContainer").resizable({
                    alsoResizeReverse: "#LowerContainer",
                    handles: 'n, s'
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to attach events
        * @memberOf widgets/main/main
        */
        _attachEvents: function () {
            try {
                on(window, "resize", lang.hitch(this, this._resizeMap));
                //Handel slider button click
                if (dom.byId("SliderButton")) {
                    on(dom.byId("SliderButton"), "click", lang.hitch(this, this._animateSliderConatainer));
                }
                // Handle maximize Map button click
                if (this._mapViewer) {
                    this._mapViewer.maximizeMapContainer = lang.hitch(this, function () {
                        if (domStyle.get("UpperContainer", "display") === "block") {
                            domStyle.set("UpperContainer", "display", "none");
                            domStyle.set("LowerContainer", "height", "100%");
                        } else {
                            domStyle.set("UpperContainer", "display", "block");
                            domStyle.set("UpperContainer", "height", "40%");
                            domStyle.set("LowerContainer", "height", "60%");
                        }
                        //resize Map only if mapdiv is visible otherwise map extent will be lost
                        this._resizeMap();
                    });
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to handle resize of map.
        * @memberOf widgets/main/main
        */
        _resizeMap: function () {
            try {
                var mapCenter;
                if (this.map && domStyle.get(this._mapViewer.mapDiv, "display") === "block") {
                    mapCenter = this.map.extent.getCenter();
                    this.map.resize();
                    this.map.reposition();
                    setTimeout(lang.hitch(this, function () {
                        this.map.centerAt(mapCenter);
                    }), 500);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create application header
        * @memberOf widgets/main/main
        */
        _createApplicationHeader: function () {
            try {
                this._appHeader = new ApplicationHeader({}, domConstruct.create("div", {}, dom.byId('headerContainer')));
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to instantiate webMapList widget.
        * @memberOf widgets/main/main
        */
        _createWebMapList: function () {
            try {
                var webMapDescriptionFields, webMapListConfigData;
                webMapDescriptionFields = {
                    "description": dojo.configData.webMapInfoDescription,
                    "snippet": dojo.configData.webMapInfoSnippet,
                    "owner": dojo.configData.webMapInfoOwner,
                    "created": dojo.configData.webMapInfoCreated,
                    "modified": dojo.configData.webMapInfoModified,
                    "licenseInfo": dojo.configData.webMapInfoLicenseInfo,
                    "accessInformation": dojo.configData.webMapInfoAccessInformation,
                    "tags": dojo.configData.webMapInfoTags,
                    "numViews": dojo.configData.webMapInfoNumViews,
                    "avgRating": dojo.configData.webMapInfoAvgRating
                };

                webMapListConfigData = {
                    "webMapDescriptionFields": webMapDescriptionFields,
                    "configData": this.config,
                    "mapDivID": "mapDiv"
                };

                this._webMapListWidget = new WebMapList(webMapListConfigData, domConstruct.create("div", {}, dom.byId('LeftContainer')));

                this._webMapListWidget.OnOperationalLayerSelected = lang.hitch(this, function (details) {
                    this.map = details.map;
                    this._createDataViewer(details);
                });

                this._webMapListWidget.noMapsFound = lang.hitch(this, function () {
                    this._handleNoWebMapToDsiplay();
                });

                this._webMapListWidget.startup();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create data viewer widget.
        * @memberOf widgets/main/main
        */
        _createDataViewer: function () {
            try {
                dom.byId('upperContainerText').innerHTML = "Coming Soon...";
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        }
    });
});