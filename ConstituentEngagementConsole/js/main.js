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
define([
    "dojo/_base/declare",
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
    "esri/layers/FeatureLayer",
    "esri/arcgis/Portal",
    "esri/IdentityManager",
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
    query,
    FeatureLayer,
    esriPortal,
    IdentityManager
) {
    return declare(null, {
        appConfig: {},
        boilerPlateTemplate: null,
        _webMapListWidget: null, // store object of web map list widget
        _dataViewerWidget: null, // store object of data-viewer widget
        _appHeader: null, // store object of application header widget
        _mapViewer: null, // store object of map-viewer widget
        _groupItems: [],
        _isMapViewClicked: false, // track whether map view is clicked or not
        _isGridViewClicked: false, // track whether grid view is clicked or not
        _isSplitViewClicked: true, // track whether split view is clicked or not
        _isEditingOnAndroid: false, // track whether editing is started on android devices
        _featureLayerClickHandle: null, // click handle of feature layer
        _dataViewerFeatureLayerSelectionCompleteHandle: null, // selection complete handle of feature layer
        _dataViewerFeatureLayerSelectionClearHandle: null, // selection clear handle of feature layer
        _selectRowGraphicsAddHandle: null, // adding graphics handle of selected layer
        _selectRowGraphicsRemoveHandle: null, // removing graphics handle of selected layer
        _selectRowGraphicsClearHandle: null, // clearing graphics handle of selected layer
        _selectRowGraphicsClickHandle: null, // graphics click handle to select a feature
        _activeRowGraphicsAddHandle: null, // adding graphics handle of active row graphics layer
        _activeRowGraphicsRemoveHandle: null, // removing graphics handle of active row graphics layer
        _activeRowClearHandle: null, // clearing graphics handle of active row graphics layer
        _activeRowGraphicsClickHandle: null, // graphics click handle to activate a feature
        _existingDefinitionExpression: null, // to store existing definition expression of layer
        _loggedInUser: null, // to store details of user that is signed in
        _isCancelButtonClicked: false, // track whether cancel button is clicked or not in identity manager
        _identityManagerCancelHandler: null, // stores cancel button click handler of identity manager
        _selectedOperationalLayer: null, // stores selected operational layer

        /** WIDGET INSTANTIATION **/

        /**
        * This function is called when user needs to start operation of widget
        * @param{object} configuration details
        * @param{object} logged in user details
        * @memberOf widgets/main/main
        */
        startup: function (boilerPlateTemplateObject, loggedInUser) {
            this._loggedInUser = loggedInUser;
            var queryParams = {};
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (boilerPlateTemplateObject) {
                this.boilerPlateTemplate = boilerPlateTemplateObject;
                this.appConfig = boilerPlateTemplateObject.config;
                // if login details are not available set it to anonymousUserName
                if (this._loggedInUser) {
                    this.appConfig.logInDetails = {
                        "userName": this._loggedInUser.fullName,
                        "token": this._loggedInUser.credential.token
                    };
                    queryParams.token = this._loggedInUser.credential.token;
                } else {
                    this.appConfig.logInDetails = {
                        "userName": this.appConfig.i18n.applicationHeader.signInOption,
                        "token": ""
                    };
                }
                // enable queryForGroupItems in templateconfig
                this.boilerPlateTemplate.templateConfig.queryForGroupItems = true;
                // construct the query params if found in group info
                //mixin configured group params so that in case of private group where we dont get the gropu info, items will be loaded as configured in templateconfig
                lang.mixin(queryParams, this.boilerPlateTemplate.templateConfig.groupParams);
                if (this.appConfig.groupInfo.results && this.appConfig.groupInfo.results.length > 0) {
                    if (this.appConfig.groupInfo.results[0].sortField) {
                        queryParams.sortField = this.appConfig.groupInfo.results[0].sortField;
                    }
                    if (this.appConfig.groupInfo.results[0].sortOrder) {
                        queryParams.sortOrder = this.appConfig.groupInfo.results[0].sortOrder;
                    }
                }
                // pass the newly constructed queryparams from groupinfo.
                // if query params not available in groupinfo or proup is private items will be sorted according to modified date.
                this._groupItems = [];
                this._loadGroupItems(queryParams);
            } else {
                ApplicationUtils.showError(this.appConfig.i18n.config.configNotDefined);
            }
        },

        /** WIDGET INSTANTIATION **/

        /** GROUP ITEMS **/

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
                if (!this.appConfig.groupItems) {
                    this.appConfig.groupItems = {};
                }
                this.appConfig.groupItems.results = this._groupItems;
                this._loadApplication();

            } else {
                this._loadGroupItems(response.groupItems.nextQueryParams);
            }
        },

        /** GROUP ITEMS **/

        /** LOAD APPLICATION **/

        /**
        * This function is used to load application
        * @memberOf widgets/main/main
        */
        _loadApplication: function () {
            // set Application Theme
            ApplicationUtils.loadApplicationTheme(this.appConfig);
            // set Application header
            this._createApplicationHeader();
            var mapViewerParameter;
            mapViewerParameter = {
                "appConfig": this.appConfig,
                "appUtils": ApplicationUtils
            };
            // load MapViewer
            this._mapViewer = new MapViewer(mapViewerParameter, domConstruct.create("div", {}, dom.byId("LowerContainer")));
            // load web map list
            if (this.appConfig.groupItems.results.length > 0) {
                domClass.add(dom.byId("esriCTNoWebMapParentDiv"), "esriCTHidden");
                domClass.remove(dom.byId("esriCTMainContainer"), "esriCTHidden");
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
            domClass.add(dom.byId("esriCTMainContainer"), "esriCTHidden");
            if (query(".esriCTSettingsButton")[0]) {
                domClass.add(query(".esriCTSettingsButton")[0], "esriCTHidden");
            } else {
                domClass.add(query(".esriCTSettingsButtonDisabled")[0], "esriCTHidden");
            }
            if (query(".esriCTSettingsButtonCaretIcon")[0]) {
                domClass.add(query(".esriCTSettingsButtonCaretIcon")[0], "esriCTHidden");
            } else {
                domClass.add(query(".esriCTSettingsButtonCaretIconDisabled")[0], "esriCTHidden");
            }
            domClass.add(query(".esriCTViewMode")[0], "esriCTHidden");
            domClass.add(query(".esriCTViewModeCaretIcon")[0], "esriCTHidden");
            domClass.add(query(".esriCTSearchDisable")[0], "esriCTHidden");
            domClass.add(query(".esriCTManualRefreshButton")[0], "esriCTHidden");
            domClass.remove(dom.byId("esriCTNoWebMapParentDiv"), "esriCTHidden");
            dom.byId("esriCTNoWebMapChildDiv").innerHTML = this.appConfig.i18n.webMapList.noWebMapInGroup;
            ApplicationUtils.hideLoadingIndicator();
        },

        /**
        * This function is used to attach events
        * @memberOf widgets/main/main
        */
        _attachEvents: function () {
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
        },

        /** LOAD APPLICATION **/

        /** RESIZE **/

        /**
        * This function is used to handle views on orientation change
        * @memberOf widgets/main/main
        */
        _onWindowResize: function () {
            // Due to high resolution of iPad long username was not getting displayed properly.
            // So it detects orientation in iPad and long username gets displayed properly in landscape & potrait mode.
            // This is done by changing the width of username dynamically.
            if ((ApplicationUtils.isIos()) && (window.orientation === 0 || window.orientation === 180)) { // landscape mode
                domClass.remove(query(".esriCTLoginUserNameDiv")[0], "esriCTLoginUserNamePotraitMode");
            } else if ((ApplicationUtils.isIos()) && (window.orientation === 90 || window.orientation === -90)) { // potrait mode
                domClass.add(query(".esriCTLoginUserNameDiv")[0], "esriCTLoginUserNamePotraitMode");
            }
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
            this._appHeader.resetOperationalLayerNameWidth();
            this._appHeader.resetViewModeOptionsPosition();
            this._appHeader.resetSettingsOptionsPosition();
            this._appHeader.resetDataSearchPosition();
        },

        /**
        * This function is used to resize upper and lower container using resize handler
        * @memberOf widgets/main/main
        */
        _resizeUpperAndLowerContainer: function () {
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
                this._dataViewerWidget.createDataViewerUI(false);
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
        },

        /**
        * This function is used to handle resize of map.
        * @memberOf widgets/main/main
        */
        _resizeMap: function () {
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
                        ApplicationUtils.hideLoadingIndicator();
                    }
                }), 500);
            }
        },

        /** RESIZE **/

        /** APPLICATION HEADER CREATION **/

        /**
        * This function is used to create application header.
        * @memberOf widgets/main/main
        */
        _createApplicationHeader: function () {
            var appHeaderParameter;
            appHeaderParameter = {
                "appConfig": this.appConfig,
                "appUtils": ApplicationUtils,
                "loggedInUser": this._loggedInUser
            };
            this._appHeader = new ApplicationHeader(appHeaderParameter, domConstruct.create("div", {}, dom.byId('headerContainer')));
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
            // manual refresh the selected layer
            this._appHeader.onManualRefreshClick = lang.hitch(this, function () {
                $("#UpperContainer").resizable("enable");
                this._isMapViewClicked = false;
                this._isGridViewClicked = false;
                this._isSplitViewClicked = true;
                this._dataViewerWidget.isMapViewClicked = false;
                this._dataViewerWidget.isGridViewClicked = false;
                domStyle.set("UpperContainer", "display", "block");
                domStyle.set("LowerContainer", "display", "block");
                this._setDefaultHeightOfUpperAndLowerContainer();
                this._dataViewerWidget._doManualRefresh();
            });
            // sign in user on click of sign-in option
            this._appHeader.signInUser = lang.hitch(this, function () {
                ApplicationUtils.showLoadingIndicator();
                if (this._identityManagerCancelHandler) {
                    this._identityManagerCancelHandler.remove();
                }
                var portal = new esriPortal.Portal(this.appConfig.sharinghost);
                portal.on("load", lang.hitch(this, function (evt) {
                    ApplicationUtils.hideLoadingIndicator();
                    portal.signIn().then(lang.hitch(this, function (logInDetails) {
                        this._destroyWidgets();
                        this.reload(logInDetails);
                    }), lang.hitch(this, function (err) {
                        if (this._isCancelButtonClicked) {
                            this._isCancelButtonClicked = false;
                        } else {
                            ApplicationUtils.showError(err.message);
                            location.reload();
                        }
                    }));
                }));
                this._identityManagerCancelHandler = on(IdentityManager, "dialog-cancel", lang.hitch(this, function (evt) {
                    this._isCancelButtonClicked = true;
                }));
            });
        },

        /**
        * This function is used to destroy the widgets
        * @memberOf widgets/main/main
        */
        _destroyWidgets: function () {
            if (this._webMapListWidget) {
                this._webMapListWidget.destroy();
            }
            if (this._dataViewerWidget) {
                this._dataViewerWidget.destroy();
            }
            if (this._appHeader) {
                this._appHeader.destroy();
            }
            if (this._mapViewer) {
                this._mapViewer.destroy();
            }
        },

        /**
        * This function is used to reload the application
        * @param{object} details of logged-in user
        * @memberOf widgets/main/main
        */
        reload: function (logInDetails) {
            return;
        },

        /** APPLICATION HEADER CREATION **/

        /** VIEWS **/

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
        * In which Grid-view will be 40% and map-view will be 60% of the screen height.
        * @memberOf widgets/main/main
        */
        _showSplitView: function () {
            var objectId;
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
            this._dataViewerWidget.removeControlsFromPreviousRow();
            this._resizeMap();
            if ((this.map.getLayer("activeRowGraphicsLayer").graphics.length === 1) && (this._selectedOperationalLayer)) {
                objectId = this.map.getLayer("activeRowGraphicsLayer").graphics[0].attributes[this._selectedOperationalLayer.objectIdField];
                this._dataViewerWidget.highlightRowOnFeatureClick(objectId, false);
            }
        },

        /** VIEWS **/

        /** DATA-GRID/MAP PANEL **/

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
        * This function is used to reset upper container
        * @memberOf widgets/main/main
        */
        _resetUpperContainer: function () {
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
        },

        /** DATA-GRID/MAP PANEL **/

        /** WEBMAP-LIST WIDGET CREATION **/

        /**
        * This function is used to instantiate webMapList widget.
        * @memberOf widgets/main/main
        */
        _createWebMapList: function () {
            var webMapDescriptionFields, webMapListConfigData;
            // hide/show info fields of web-map
            webMapDescriptionFields = {
                "description": this.appConfig.webMapInfoDescription,
                "snippet": this.appConfig.webMapInfoSnippet,
                "owner": this.appConfig.webMapInfoOwner,
                "created": this.appConfig.webMapInfoCreated,
                "modified": this.appConfig.webMapInfoModified,
                "licenseInfo": this.appConfig.webMapInfoLicenseInfo,
                "accessInformation": this.appConfig.webMapInfoAccessInformation,
                "tags": this.appConfig.webMapInfoTags,
                "numViews": this.appConfig.webMapInfoNumViews,
                "avgRating": this.appConfig.webMapInfoAvgRating
            };
            // parameters needed for instantiating web-map list widget
            webMapListConfigData = {
                "webMapDescriptionFields": webMapDescriptionFields,
                "appConfig": this.appConfig,
                "mapDivID": "mapDiv",
                "appUtils": ApplicationUtils,
                "changeExtentOnLayerChange": false,
                "autoResize": false
            };
            // instantiate web-map list widget
            this._webMapListWidget = new WebMapList(webMapListConfigData, domConstruct.create("div", {}, dom.byId('LeftContainer')));
            // when new operational layer is selected show it in data-viewer
            this._webMapListWidget.onOperationalLayerSelected = lang.hitch(this, function (details) {
                setTimeout(lang.hitch(this, function () {
                    ApplicationUtils.showLoadingIndicator();
                    this._isGridViewClicked = false;
                    this.map = details.map;
                    this._selectedOperationalLayer = this.map.getLayer(details.operationalLayerDetails.id);
                    this._mapViewer.addDetailsBtn();
                    this._createDataViewer(details);
                    this._appHeader.setLayerTitle(details.operationalLayerDetails.title);
                }), 10);
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
        },

        /** WEBMAP-LIST WIDGET CREATION **/

        /** DATA-VIEWER WIDGET CREATION **/

        /**
        * This function is used to instantiate data-viewer widget.
        * @param{object} details of newly selected layer
        * @memberOf widgets/main/main
        */
        _createDataViewer: function (details) {
            var dataViewerConfigData, selectedOperationalLayer, layerUrl, layerID, cloneRenderer, cloneInfoTemplate, layerOpacity;
            // parameters that are passed to data-viewer widget
            dataViewerConfigData = {
                "appConfig": this.appConfig,
                "map": this.map,
                "selectedOperationalLayerID": details.operationalLayerId,
                "selectedOperationalLayerTitle": details.operationalLayerDetails.title,
                "popupInfo": details.operationalLayerDetails.popupInfo,
                "itemInfo": details.itemInfo,
                "lastSelectedWebMapExtent": this._webMapListWidget.lastSelectedWebMapExtent,
                "lastMapZoomLevel": this.map.getZoom(),
                "lastMapScale": this.map.getScale(),
                "appUtils": ApplicationUtils
            };
            selectedOperationalLayer = this.map.getLayer(details.operationalLayerDetails.id);
            layerOpacity = selectedOperationalLayer.opacity;
            layerUrl = selectedOperationalLayer.url;
            layerID = details.operationalLayerDetails.id;
            cloneRenderer = lang.clone(selectedOperationalLayer.renderer);
            cloneInfoTemplate = lang.clone(selectedOperationalLayer.infoTemplate);
            this._getExistingDefinitionExpression(details.itemInfo, selectedOperationalLayer);
            this.map.removeLayer(selectedOperationalLayer);
            selectedOperationalLayer = new FeatureLayer(layerUrl, { mode: FeatureLayer.MODE_SNAPSHOT, id: layerID, outFields: ["*"], definitionExpression: this._existingDefinitionExpression });
            selectedOperationalLayer.setRenderer(cloneRenderer);
            selectedOperationalLayer.setInfoTemplate(cloneInfoTemplate);
            selectedOperationalLayer.setOpacity(layerOpacity);
            this._removeHandles();
            this._createHandles(selectedOperationalLayer);
            this._resetUpperContainer();
            // instantiate data-viewer widget
            this._dataViewerWidget = new DataViewer(dataViewerConfigData, domConstruct.create("div", {}, dom.byId("UpperContainer")));
            this.map.addLayer(selectedOperationalLayer);
            this._attachDataViewerEventListener();
        },

        /**
        * This function is used to remove event handles
        * @memberOf widgets/main/main
        */
        _removeHandles: function () {
            // removes previous feature layer click handle
            if (this._featureLayerClickHandle) {
                this._featureLayerClickHandle.remove();
            }
            // removes previous feature layer selection complete handle
            if (this._dataViewerFeatureLayerSelectionCompleteHandle) {
                this._dataViewerFeatureLayerSelectionCompleteHandle.remove();
            }
            // removes previous feature layer clear selection handle
            if (this._dataViewerFeatureLayerSelectionClearHandle) {
                this._dataViewerFeatureLayerSelectionClearHandle.remove();
            }
            // removes previous feature layer update end handle
            if (this._dataViewerFeatureLayerUpdateEndHandle) {
                this._dataViewerFeatureLayerUpdateEndHandle.remove();
            }
        },

        /**
        * This function is used to create event handles
        * @param{object} operational layer to which event needs to be attached
        * @memberOf widgets/main/main
        */
        _createHandles: function (selectedOperationalLayer) {
            // attach click event to feature layer
            if (selectedOperationalLayer) {
                // to enable/disable details button on click of feature layer
                this._featureLayerClickHandle = on(selectedOperationalLayer, "click", lang.hitch(this, function (evt) {
                    this._dataViewerWidget.onFeatureClick(evt);
                }));
                this._dataViewerFeatureLayerUpdateEndHandle = on(selectedOperationalLayer, "update-end", lang.hitch(this, function (evt) {
                    if (!this._isEditingFeatureOn()) {
                        // When a row is removed in partially editing mode. Multiple operations like creating & editing
                        // are performed in andriod enviroment. When layer is refreshed after editing its graphics are not rendered in
                        // layer instantly. Due to which there are no graphics available in layer. When datatable is created without any
                        // graphics then by default it creates a single row stating no data is available in table. To forbid this scenario
                        // a flag stating whether layer is refreshed after editing needs to be analysed
                        if (this._dataViewerWidget.isLayerRefreshed) {
                            this._dataViewerWidget.isLayerRefreshed = false;
                            if (this._dataViewerWidget.isRowRemoved) {
                                this._dataViewerWidget.isRowRemoved = false;
                                this._dataViewerWidget.checkForNoFeatures();
                            }
                        } else {
                            // create ui of data-viewer widget
                            if ((evt.target._defnExpr === this._existingDefinitionExpression) || (evt.target._defnExpr === null) || (evt.target._defnExpr === undefined)) {
                                this._dataViewerWidget.createDataViewerUI(true);
                            } else {
                                if (evt.target.graphics.length === 0) {
                                    this._dataViewerWidget.noResultFound = true;
                                    this._dataViewerWidget.displaySearchData();
                                } else {
                                    this._dataViewerWidget.displaySearchData();
                                    this._dataViewerWidget.createDataViewerUI(false);
                                }
                            }
                        }
                    }
                }));
            }
        },

        /**
        * This function is used to attach event handlers
        * @memberOf widgets/main/main
        */
        _attachDataViewerEventListener: function () {
            // hide/show settings options
            this._dataViewerWidget.toggleSelectionViewOption = lang.hitch(this, function () {
                this._appHeader.toggleSelectionViewOption();
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
                if (ApplicationUtils.isAndroid() && this._isSplitViewClicked) {
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
                if (ApplicationUtils.isAndroid() && this._isEditingOnAndroid) {
                    //reset the flag to false once editing is done
                    this._isEditingOnAndroid = false;
                    //set the display of the map to true so that it is visible after keyboard is hidden
                    domStyle.set(this._mapViewer.mapDiv, "display", "block");
                    //after editing move to split-view
                    this._showSplitView(false);
                }
            });
            this._dataViewerWidget.attachEventToGraphicsLayer = lang.hitch(this, function (graphicsLayer) {
                // removes previous graphic's add handle
                if (this._selectRowGraphicsAddHandle) {
                    this._selectRowGraphicsAddHandle.remove();
                }
                // removes previous graphic's remove handle
                if (this._selectRowGraphicsRemoveHandle) {
                    this._selectRowGraphicsRemoveHandle.remove();
                }
                // removes previous graphic's clear handle
                if (this._selectRowGraphicsClearHandle) {
                    this._selectRowGraphicsClearHandle.remove();
                }
                if (this._selectRowGraphicsClickHandle) {
                    this._selectRowGraphicsClickHandle.remove();
                }
                // to enable/disable details button on add of graphics in graphics layer
                this._selectRowGraphicsAddHandle = on(graphicsLayer, "graphic-add", lang.hitch(this, function (evt) {
                    this._dataViewerWidget.changeDetailsButtonMode();
                }));
                // to enable/disable details button on remove of graphics in graphics layer
                this._selectRowGraphicsRemoveHandle = on(graphicsLayer, "graphic-remove", lang.hitch(this, function (evt) {
                    this._dataViewerWidget.changeDetailsButtonMode();
                }));
                // to enable/disable details button on clearing of graphics
                this._selectRowGraphicsClearHandle = on(graphicsLayer, "graphics-clear", lang.hitch(this, function (evt) {
                    this._dataViewerWidget.changeDetailsButtonMode();
                }));
                // to select graphics on click of activated feature
                this._selectRowGraphicsClickHandle = on(graphicsLayer, "click", lang.hitch(this, function (evt) {
                    if (evt.graphic.geometry.type !== "point") {
                        this._dataViewerWidget.onFeatureClick(evt);
                    }
                }));
            });
            this._dataViewerWidget.attachEventToActiveRowLayer = lang.hitch(this, function (graphicsLayer) {
                // removes previous graphic's add handle
                if (this._activeRowGraphicsAddHandle) {
                    this._activeRowGraphicsAddHandle.remove();
                }
                // removes previous graphic's remove handle
                if (this._activeRowGraphicsRemoveHandle) {
                    this._activeRowGraphicsRemoveHandle.remove();
                }
                // removes previous graphic's clear handle
                if (this._activeRowClearHandle) {
                    this._activeRowClearHandle.remove();
                }
                // removes previous graphic's click handle
                if (this._activeRowGraphicsClickHandle) {
                    this._activeRowGraphicsClickHandle.remove();
                }
                // to enable/disable details button on add of graphics in graphics layer
                this._activeRowGraphicsAddHandle = on(graphicsLayer, "graphic-add", lang.hitch(this, function (evt) {
                    this._dataViewerWidget.changeDetailsButtonMode();
                }));
                // to enable/disable details button on remove of graphics in graphics layer
                this._activeRowGraphicsRemoveHandle = on(graphicsLayer, "graphic-remove", lang.hitch(this, function (evt) {
                    this._dataViewerWidget.changeDetailsButtonMode();
                }));
                // to enable/disable details button on clearing of graphics
                this._activeRowClearHandle = on(graphicsLayer, "graphics-clear", lang.hitch(this, function (evt) {
                    this._dataViewerWidget.changeDetailsButtonMode();
                }));
                // to select graphics on click of activated feature
                this._activeRowGraphicsClickHandle = on(graphicsLayer, "click", lang.hitch(this, function (evt) {
                    if (evt.graphic.geometry.type !== "point") {
                        this._dataViewerWidget.onFeatureClick(evt);
                    }
                }));
            });
            // resize map
            this._dataViewerWidget.resizeMap = lang.hitch(this, function () {
                this._dataViewerWidget.isDetailsTabClicked = false;
                this._resizeMap();
            });
        },

        /**
        * This function is used to set existing definition expression.
        * @param{object} item info of selected operational layer
        * @param{object} selected operational layer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getExistingDefinitionExpression: function (itemInfo, selectedOperationalLayer) {
            var j;
            // Initially, if a layer has some definition expression than store it
            for (j = 0; j < itemInfo.itemData.operationalLayers.length; j++) {
                if (selectedOperationalLayer.id === itemInfo.itemData.operationalLayers[j].id) {
                    if (itemInfo.itemData.operationalLayers[j].layerDefinition && itemInfo.itemData.operationalLayers[j].layerDefinition.definitionExpression) {
                        this._existingDefinitionExpression = itemInfo.itemData.operationalLayers[j].layerDefinition.definitionExpression;
                    } else {
                        this._existingDefinitionExpression = null;
                    }
                }
            }
        },

        /**
        * This function is used to track whether, user is currently editing any feature or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        _isEditingFeatureOn: function () {
            var textInput, dropDown, datePicker;
            textInput = $(".esriCTTextInput");
            dropDown = $(".esriCTCodedDomain");
            datePicker = $(".esriCTDateInputField");
            if ((textInput.length === 0) && (dropDown.length === 0) && (datePicker.length === 0)) {
                return false;
            }
            return true;
        }

        /** DATA-VIEWER WIDGET CREATION **/
    });
});