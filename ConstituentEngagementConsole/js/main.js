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
    "widgets/data-viewer/data-viewer",
    "dojo/dom-class",
    "dojo/query",
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
    DataViewer,
    domClass,
    query
) {
    return declare(null, {
        config: {},
        boilerPlateTemplate: null,
        _webMapListWidget: null, // store object of web map list widget
        _dataViewerWidget: null, // store object of data-viewer widget
        _appHeader: null, // store object of application header widget
        _groupItems: [],
        _isMapViewClicked: false, // track whether map view is clicked or not
        _isGridViewClicked: false, // track whether grid view is clicked or not
        _isSplitViewClicked: true, // track whether split view is clicked or not
        _isEditingOnAndroid: false, // track whether editing is started on android devices

        /**
        * This function is called when user needs to start operation of widget
        * @param{object} configuration details
        * @param{object} logged in user details
        * @memberOf widgets/main/main
        */
        startup: function (boilerPlateTemplateObject, loggedInUser) {
            try {
                var queryParams = {};
                // config will contain application and user defined info for the template such as i18n strings, the web map id
                // and application id
                // any url parameters and any application specific configuration information.

                dojo.applicationUtils = ApplicationUtils;
                if (boilerPlateTemplateObject) {
                    this.boilerPlateTemplate = boilerPlateTemplateObject;
                    this.config = boilerPlateTemplateObject.config;
                    // if login details are not available set it to anonymousUserName
                    if (loggedInUser) {
                        this.config.logInDetails = {
                            "userName": loggedInUser.fullName,
                            "token": loggedInUser.credential.token
                        };
                    } else {
                        this.config.logInDetails = {
                            "userName": "",
                            "token": ""
                        };
                    }
                    // enable queryForGroupItems in templateconfig
                    this.boilerPlateTemplate.templateConfig.queryForGroupItems = true;
                    // construct the query params if found in group info
                    if (this.config.groupInfo.results && this.config.groupInfo.results.length > 0) {
                        lang.mixin(queryParams, this.boilerPlateTemplate.templateConfig.groupParams);
                        if (this.config.groupInfo.results[0].sortField) {
                            queryParams.sortField = this.config.groupInfo.results[0].sortField;
                        }
                        if (this.config.groupInfo.results[0].sortOrder) {
                            queryParams.sortOrder = this.config.groupInfo.results[0].sortOrder;
                        }
                    }
                    // pass the newly constructed queryparams from groupinfo.
                    // if query params not available in groupinfo or proup is private items will be sorted according to modified date.
                    this._loadGroupItems(queryParams);
                } else {
                    dojo.applicationUtils.showError(this.config.i18n.config.configNotDefined);
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
            this.boilerPlateTemplate.queryGroupItems(queryParams).then(lang.hitch(this, this._groupItemsLoaded));
        },

        /**
        * This function is executed when group items are loaded
        * @param{object} response once group item are loaded
        * @memberOf widgets/main/main
        */
        _groupItemsLoaded: function (response) {
            this._groupItems.push.apply(this._groupItems, response.groupItems.results);
            if (response.groupItems.nextQueryParams.start < 0) {
                if (!this.config.groupItems) {
                    this.config.groupItems = {};
                }
                this.config.groupItems.results = this._groupItems;
                this._loadApplication();
            } else {
                this._loadGroupItems(response.groupItems.nextQueryParams);
            }
        },

        /**
        * This function is used to load application
        * @memberOf widgets/main/main
        */
        _loadApplication: function () {
            dojo.configData = this.config;
            // set Application Theme
            dojo.applicationUtils.loadApplicationTheme();
            // set Application header
            this._createApplicationHeader();
            // load MapViewer
            this._mapViewer = new MapViewer(this.config, domConstruct.create("div", {}, dom.byId("LowerContainer")));
            // load web map list
            if (this.config.groupItems.results.length > 0) {
                this._createWebMapList();
            } else {
                this._handleNoWebMapToDsiplay();
            }
            // attach event handlers
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
        * This function is used to attach events
        * @memberOf widgets/main/main
        */
        _attachEvents: function () {
            try {
                // resize map on window resize
                on(window, "resize", lang.hitch(this, this._onWindowResize));
                // resize map
                this._mapViewer.resizeMap = lang.hitch(this, function () {
                    this._dataViewerWidget.isDetailsTabClicked = false;
                    this._resizeMap();
                });
                // display details tab
                this._mapViewer.onDetailsTabClick = lang.hitch(this, function () {
                    this._dataViewerWidget.showDetails();
                });
                // handle resize of containers
                this._resizeUpperAndLowerContainer();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to handle views on orientation change
        * @memberOf widgets/main/main
        */
        _onWindowResize: function () {
            if (this._isEditingOnAndroid) {
                this._dataViewerWidget.OnEditingComplete();
            }
            if (this._isMapViewClicked) {
                domStyle.set("UpperContainer", "display", "none");
                domStyle.set("LowerContainer", "display", "block");
                domStyle.set("LowerContainer", "height", "100%");
                this._setDataViewerHeight();
                this._resizeMap();
            }
            if (this._isGridViewClicked) {
                this._dataViewerWidget.isOrientationChangedInListView = true;
                domStyle.set("UpperContainer", "display", "block");
                domStyle.set("LowerContainer", "height", "0%");
                domStyle.set("UpperContainer", "height", "100%");
                this._setDataViewerHeight();
            }
            if (this._isSplitViewClicked) {
                domStyle.set("UpperContainer", "display", "block");
                domStyle.set("LowerContainer", "display", "block");
                this._setDefaultHeightOfUpperAndLowerContainer();
                this._setDataViewerHeight();
                this._resizeMap();
            }
        },

        /**
        * This function is used to resize upper and lower container using resize handler
        * @memberOf widgets/main/main
        */
        _resizeUpperAndLowerContainer: function () {
            try {
                //set jquery resizable on upper container
                $("#UpperContainer").resizable({
                    alsoResizeReverse: "#LowerContainer", //on resizeing upper container resize the lower map container
                    handles: 's', //show resize handel only at the bottom of the grid container
                    containment: "#esriCTMainContainer",
                    maxHeight: 550,
                    minHeight: 75
                });

                //handle resize stop event which will be fired on resize complete
                //after completing resize of containers, resize the map so that it will be fit resized size
                $("#UpperContainer").on("resizestop", lang.hitch(this, function (event, ui) {
                    var mainContainerHeight, upperContainerHeight, lowerContainerHeight;
                    mainContainerHeight = parseFloat(domStyle.get("esriCTMainContainer", "height"));
                    upperContainerHeight = parseFloat(domStyle.get("UpperContainer", "height"));
                    lowerContainerHeight = mainContainerHeight - upperContainerHeight;
                    domStyle.set("LowerContainer", "height", lowerContainerHeight + "px");
                    this._resizeMap();
                    if (this._dataViewerWidget.isShowSelectedClicked) {
                        this._dataViewerWidget.retainShowSelectedModeAfterResize();
                    }
                }));

                $("#UpperContainer").on("resizestart", lang.hitch(this, function (event, ui) {
                    var dataViewerParentDiv;
                    if (!this._dataViewerWidget.isDetailsTabClicked) {
                        this._dataViewerWidget.destroyDataViewerTable();
                        dataViewerParentDiv = query(".esriCTDataViewerParentDiv");
                        if (dataViewerParentDiv.length > 0) {
                            domConstruct.empty(dataViewerParentDiv[0]);
                        }
                    }
                }));
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
                // only resize map in map & split view
                if (!this._isGridViewClicked) {
                    var mapCenter;
                    if (this.map && domStyle.get(this._mapViewer.mapDiv, "display") === "block") {
                        mapCenter = this.map.extent.getCenter();
                        domStyle.set(dom.byId("mapDiv"), "height", "100%");
                        domStyle.set(dom.byId("mapDiv"), "width", "100%");
                    }
                    setTimeout(lang.hitch(this, function () {
                        if (this.map && domStyle.get(this._mapViewer.mapDiv, "display") === "block") {
                            this.map.resize();
                            this.map.reposition();
                            this.map.centerAt(mapCenter);
                            dojo.applicationUtils.hideLoadingIndicator();
                        }
                    }), 500);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create application header.
        * @memberOf widgets/main/main
        */
        _createApplicationHeader: function () {
            try {
                this._appHeader = new ApplicationHeader({}, domConstruct.create("div", {}, dom.byId('headerContainer')));
                // display selected records
                this._appHeader.onShowSelectedRecordsClick = lang.hitch(this, function () {
                    this._dataViewerWidget.showSelectedRecords();
                });
                // display all records
                this._appHeader.onShowAllRecordsClick = lang.hitch(this, function () {
                    this._dataViewerWidget.showAllRecords();
                });
                // clears the selected records
                this._appHeader.onClearSelectionClick = lang.hitch(this, function () {
                    this._dataViewerWidget.clearSelection();
                });
                // zoom to selected record
                this._appHeader.onZoomToSelectedClick = lang.hitch(this, function () {
                    this._dataViewerWidget.zoomToSelected();
                });
                // display grid view
                this._appHeader.onGridViewClick = lang.hitch(this, function () {
                    //after switching to gridView by clicking on List-view mode always refresh it's UI
                    this._showOnlyGridView(true);
                });
                // display map view
                this._appHeader.onMapViewClick = lang.hitch(this, this._showOnlyMapView);
                // display split view
                this._appHeader.onGridMapViewClick = lang.hitch(this, this._showSplitView);
                // search records in data-viewer widget
                this._appHeader.onSearchRecordsClick = lang.hitch(this, function () {
                    this._dataViewerWidget.searchDataInDataViewer();
                });
                // clear content in search input control
                this._appHeader.onClearContentClick = lang.hitch(this, function () {
                    this._dataViewerWidget.clearSearchText();
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to set the view of application to grid-view only.
        * @param{boolean} refreshGridViewUI set to true will refresh the UI of Grid-view.
        * @memberOf widgets/main/main
        */
        _showOnlyGridView: function (refreshGridViewUI) {
            $("#UpperContainer").resizable("disable");
            this._isMapViewClicked = false;
            this._isGridViewClicked = true;
            this._isSplitViewClicked = false;
            this._dataViewerWidget.isMapViewClicked = false;
            this._dataViewerWidget.isGridViewClicked = true;
            domStyle.set("UpperContainer", "display", "block");
            domStyle.set("LowerContainer", "height", "0%");
            domStyle.set("UpperContainer", "height", "100%");
            if (refreshGridViewUI) {
                this._dataViewerWidget.retainShowSelectedModeAfterResize();
            }
            this._setDataViewerHeight();
        },

        /**
        * This function is used to set the view of application to map-view only.
        * @memberOf widgets/main/main
        */
        _showOnlyMapView: function () {
            $("#UpperContainer").resizable("disable");
            this._isMapViewClicked = true;
            this._isGridViewClicked = false;
            this._isSplitViewClicked = false;
            this._dataViewerWidget.isMapViewClicked = true;
            this._dataViewerWidget.isGridViewClicked = false;
            domStyle.set("UpperContainer", "display", "none");
            domStyle.set("LowerContainer", "display", "block");
            domStyle.set("LowerContainer", "height", "100%");
            this._setDataViewerHeight();
            this._resizeMap();
        },

        /**
        * This function is used to set the view of application to split-view.
        * In which Grid-view will be 40% and map-view will be 605 of the screen height.
        * @memberOf widgets/main/main
        */
        _showSplitView: function () {
            $("#UpperContainer").resizable("enable");
            this._isMapViewClicked = false;
            this._isGridViewClicked = false;
            this._isSplitViewClicked = true;
            this._dataViewerWidget.isMapViewClicked = false;
            this._dataViewerWidget.isGridViewClicked = false;
            domStyle.set("UpperContainer", "display", "block");
            domStyle.set("LowerContainer", "display", "block");
            this._setDefaultHeightOfUpperAndLowerContainer();
            this._setDataViewerHeight();
            this._resizeMap();
        },

        /**
        * This function is used to set default height of upper and lower container
        * @memberOf widgets/main/main
        */
        _setDefaultHeightOfUpperAndLowerContainer: function () {
            domStyle.set("UpperContainer", "height", "40%");
            domStyle.set("LowerContainer", "height", "60%");
        },

        /**
        * This function is used to set data viewer height in split view & list view
        * @memberOf widgets/main/main
        */
        _setDataViewerHeight: function () {
            var tableBodyNodes = query(".dataTables_scrollBody");
            if (tableBodyNodes.length > 0) {
                if (this._isGridViewClicked) {
                    domClass.replace(tableBodyNodes[0], "dataTables_listViewHeight", "dataTables_splitViewHeight");
                } else {
                    domClass.replace(tableBodyNodes[0], "dataTables_splitViewHeight", "dataTables_listViewHeight");
                }
            }
        },

        /**
        * This function is used to instantiate webMapList widget.
        * @memberOf widgets/main/main
        */
        _createWebMapList: function () {
            try {
                var webMapDescriptionFields, webMapListConfigData;
                // hide/show info fields of web-map
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
                // parameters needed for instantiating web-map list widget
                webMapListConfigData = {
                    "webMapDescriptionFields": webMapDescriptionFields,
                    "configData": this.config,
                    "mapDivID": "mapDiv",
                    "changeExtentOnLayerChange": false
                };
                // instantiate web-map list widget
                this._webMapListWidget = new WebMapList(webMapListConfigData, domConstruct.create("div", {}, dom.byId('LeftContainer')));
                // when new operational layer is selected show it in data-viewer
                this._webMapListWidget.onOperationalLayerSelected = lang.hitch(this, function (details) {
                    this._isGridViewClicked = false;
                    this.map = details.map;
                    this._mapViewer.addDetailsBtn();
                    this._createDataViewer(details);
                    this._appHeader.setLayerTitle(details.operationalLayerDetails.title);
                });
                // show message when there is no web map to display
                this._webMapListWidget.noMapsFound = lang.hitch(this, function () {
                    this._handleNoWebMapToDsiplay();
                });
                // set upper and lower container's to default height
                this._webMapListWidget.setDefaultHeightOfContainers = lang.hitch(this, function () {
                    this._setDefaultHeightOfUpperAndLowerContainer();
                });
                // start web-map list widget
                this._webMapListWidget.startup();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to reset upper container
        * @memberOf widgets/main/main
        */
        _resetUpperContainer: function () {
            try {
                var refNode, node;
                domConstruct.empty("UpperContainer");
                $("#UpperContainer").remove();
                node = domConstruct.create("div", {
                    "class": "esriCTUpperContainer esriCTBorderBottom",
                    "id": "UpperContainer"
                });
                refNode = dom.byId("rightParentContainer");
                domConstruct.place(node, refNode, "first");
                domStyle.set(dom.byId("LowerContainer"), "height", "60%");
                this._resizeUpperAndLowerContainer();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to instantiate data-viewer widget.
        * @memberOf widgets/main/main
        */
        _createDataViewer: function (details) {
            try {
                var dataViewerConfigData;
                // parameters that are passed to data-viewer widget
                dataViewerConfigData = {
                    "configData": this.config,
                    "map": this.map,
                    "selectedOperationalLayerID": details.operationalLayerId,
                    "selectedOperationalLayerTitle": details.operationalLayerDetails.title,
                    "popupInfo": details.operationalLayerDetails.popupInfo,
                    "itemInfo": details.itemInfo,
                    "lastSelectedWebMapExtent": this._webMapListWidget.lastSelectedWebMapExtent
                };

                this._resetUpperContainer();

                // instantiate data-viewer widget
                this._dataViewerWidget = new DataViewer(dataViewerConfigData, domConstruct.create("div", {}, dom.byId("UpperContainer")));

                setTimeout(lang.hitch(this, function () {
                    // create ui of data-viewer widget
                    this._dataViewerWidget.createDataViewerUI(true);
                    this._resizeMap();
                }), 1000);
                // hide/show settings options
                this._dataViewerWidget.toggleSelectionViewOption = lang.hitch(this, function (hideClearSelection) {
                    this._appHeader.toggleSelectionViewOption(hideClearSelection);
                });
                // show details panel
                this._dataViewerWidget.showDetailsTab = lang.hitch(this, function () {
                    this._mapViewer.switchViewer("details");
                });
                // show map panel
                this._dataViewerWidget.showLocationTab = lang.hitch(this, function () {
                    this._mapViewer.switchViewer("location");
                });

                // Handle Edit start and complete event
                this._dataViewerWidget.OnEditingStart = lang.hitch(this, function () {
                    //check if it's android device and user is in split-view then only switch to only grid-view
                    if (dojo.applicationUtils.isAndroid() && this._isSplitViewClicked) {
                        domStyle.set(this._mapViewer.mapDiv, "display", "none");
                        //Show only grid-view while editing in android devices
                        this._showOnlyGridView(false);
                        //Set Editing started on android after keyboard animation is done
                        setTimeout(lang.hitch(this, function () {
                            this._isEditingOnAndroid = true;
                        }), 500);
                    }
                });

                // Handle Edit start and complete event
                this._dataViewerWidget.OnEditingComplete = lang.hitch(this, function () {
                    if (dojo.applicationUtils.isAndroid() && this._isEditingOnAndroid) {
                        //reset the flag to false once editing is done
                        this._isEditingOnAndroid = false;
                        //set the display of the map to true so that it is visible after keyboard is hidden
                        domStyle.set(this._mapViewer.mapDiv, "display", "block");
                        //after editing move to split-view
                        this._showSplitView(false);
                    }
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        }
    });
});