/*global define,document,location,require,alert,console,dojo,$,setTimeout,selected,event,moment,dojoConfig */
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
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/data-viewer.html",
    "dojo/dom-construct",
    "dojo/dom-class",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/layers/GraphicsLayer",
    "dojo/on",
    "dijit/_WidgetsInTemplateMixin",
    "esri/tasks/query",
    "esri/geometry/Extent",
    "esri/layers/FeatureLayer",
    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    "esri/geometry/Point",
    "esri/SpatialReference",
    "esri/graphic",
    "esri/tasks/GeometryService",
    "dojo/_base/connect",
    "dojo/query",
    "dojo/_base/event",
    "dojo/dom",
    "dojo/string",
    "dojo/dom-attr",
    "dojo/dom-style"
], function (
    declare,
    lang,
    _WidgetBase,
    _TemplatedMixin,
    dijitTemplate,
    domConstruct,
    domClass,
    SimpleMarkerSymbol,
    SimpleLineSymbol,
    GraphicsLayer,
    on,
    _WidgetsInTemplateMixin,
    Query,
    Extent,
    FeatureLayer,
    SimpleFillSymbol,
    Color,
    Point,
    SpatialReference,
    Graphic,
    GeometryService,
    connect,
    query,
    event,
    dom,
    string,
    domAttr,
    domStyle
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: dijitTemplate,
        _dataViewerTable: null, // store data-viewer table object
        _entireFeatureDataArr: [], // store entire feature's of feature layer that is visible
        _features: [], // store features that are selected
        _selectedOperationalLayer: null, // store object of feature layer that is selected by user
        _dataViewerGraphicsLayer: null, // store object of graphics layer needed for highlighting point feature
        _isPointLayer: false, // keep track whether operational layer that is selected by user if of type point or polygon or polyline etc...
        _isTextInputInFocus: false, // keep track whether text input is in focus or not
        _isDropDownClicked: false, // keep track whether drop-down of coded domain value is clicked or not
        _featureObjectID: null, // store objectid of feature selected
        _lastEditedControl: null, // store control that was last edited
        _lastSelectedCodedDomainValue: null, // store last selected coded domain value
        _isDateTextInputInFocus: false, // keep track whether date text input is in focus or not
        _displayColumn: [], // store columns that needs to be displayed
        _dataSet: [], // store dataset of data-viewer table
        _lastSelectedRow: null, // store last selected row
        _isDatePickerValueRetained: false, // keep track whether old value of date-pciker is retained
        _showDatePickerErrorMessage: false, // show error message when update of date-picker gets failed
        _updatedGraphic: null, // store graphic when it is updated
        _updatedField: null, // store name of the field when it is updated
        _existingDefinitionExpression: null, // store existing definition expression that is set to feature layer
        _updatedFieldAttribute: {}, // to store dependent field attributes that needs to be updated
        _updatedTextInputControl: [], // to store dependent text input control which are updated
        _updatedDropDownControl: [], // to store dependent drop down control which are updated
        _updateDatePickerControl: [], // to store dependent date picker control which are updated
        _isOrientationChangedInListView: false, // to keep track whether orientation is changed in list view or not
        options: {}, // mixin data in this object
        configData: {}, // store configuration data
        map: null, // used to store map object
        selectedOperationalLayerID: null, // store id of operational layer that is selected by user
        popupInfo: null, // store popup info details of operational layer that is selected by user
        isMapViewClicked: false, // keep track whether map view option is clicked or not
        isDetailsTabClicked: false, // keep track whether details tab is clicked or not,
        itemInfo: null,
        lastSelectedWebMapExtent: null,
        isShowSelectedClicked: false, // keep track whether show selected option is clicked or not

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @param{object} parent node of widget
        * @memberOf widgets/data-viewer/data-viewer
        */
        constructor: function (options, srcRefNode) {
            try {
                lang.mixin(this, options);
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is called after all properties of a widget are defined
        * @memberOf widgets/data-viewer/data-viewer
        */
        postCreate: function () {
            this.inherited(arguments);
            if (dojo.dataViewerMapExtentHandle) {
                dojo.dataViewerMapExtentHandle.remove();
            }
            this._onMapExtentChange();
        },

        /**
        * This function is used to create UI for web map list.
        * @param{boolean} whether new operational layer is selected or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        createDataViewerUI: function (operationalLayerSelected) {
            try {
                var selectedFeatureArr;
                domConstruct.empty(this.dataViewerParentDiv);
                // if new operational layer is selected than clear previous selected features
                if (operationalLayerSelected) {
                    this._resetSearchPanel();
                    this.showLocationTab();
                    this._resetDetailsTab();
                    if (!domClass.contains(query(".esriCTShowSelected")[0], "esriCTVisible")) {
                        this.isShowSelectedClicked = false;
                        this.toggleSelectionViewOption(false);
                    }
                    if (dojo.dataViewerFeatureLayerHandle) {
                        dojo.dataViewerFeatureLayerHandle.remove();
                    }
                    this._selectedOperationalLayer = this.map.getLayer(this.selectedOperationalLayerID);
                    this._onFeatureClick();
                    this._addDataViewerGraphicsLayer();
                    this._clearSelectedFeatures();
                    if (this._selectedOperationalLayer.graphics.length > 0) {
                        if (this._selectedOperationalLayer.graphics[0].geometry.type === "point") {
                            this._isPointLayer = true;
                        } else {
                            this._isPointLayer = false;
                        }
                    }
                }
                // to display only selected features
                // else display all features available in current extent
                if (this.isShowSelectedClicked) {
                    // if it is point feature than get selected feature from graphics layer
                    // if it is other than point feature get selected feature from feature layer
                    if (this._isPointLayer) {
                        this._features = this._dataViewerGraphicsLayer.graphics;
                    } else {
                        this._features = this._selectedOperationalLayer.getSelectedFeatures();
                    }
                    this._createDataViewerPanel();
                } else {
                    this._displayFeaturesWithinCurrentExtent().then(lang.hitch(this, function (response) {
                        this._features = response.features;
                        // if it is point feature than get selected feature from graphics layer
                        // if it is other than point feature get selected feature from feature layer
                        if (this._isPointLayer) {
                            selectedFeatureArr = this._dataViewerGraphicsLayer.graphics;
                        } else {
                            selectedFeatureArr = this._selectedOperationalLayer.getSelectedFeatures();
                        }
                        // to combine both selected feature and new features in current extent
                        if (selectedFeatureArr.length > 0) {
                            this._features = this._features.concat(selectedFeatureArr);
                            this._features = this._removeDuplicateFeatures(this._features);
                        }

                        if (this._features.length > 0) {
                            this._createDataViewerPanel();
                        } else {
                            domClass.remove(this.noFeatureDiv, "esriCTHidden");
                            domClass.add(this.dataViewerParentDiv, "esriCTHidden");
                            this.noFeatureDiv.innerHTML = dojo.configData.i18n.dataviewer.noFeaturesInCurrentExtent;
                            dojo.applicationUtils.hideLoadingIndicator();
                        }
                    }));
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to show selected records in the grid
        * @memberOf widgets/data-viewer/data-viewer
        */
        showSelectedRecords: function () {
            try {
                var selectedFeaturesLength;
                // if it is point feature than get selected feature length from graphics layer
                // if it is other than point feature get selected feature length from feature layer
                if (this._isPointLayer) {
                    selectedFeaturesLength = this._dataViewerGraphicsLayer.graphics.length;
                } else {
                    selectedFeaturesLength = this._selectedOperationalLayer.getSelectedFeatures().length;
                }
                if (selectedFeaturesLength > 0) {
                    this.toggleSelectionViewOption(true);
                    this.isShowSelectedClicked = true;
                    this._addDisabledSearchIcon();
                    this._showSelectedFeatureInDataViewer();
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to show all the records in the grid
        * @memberOf widgets/data-viewer/data-viewer
        */
        showAllRecords: function () {
            this.toggleSelectionViewOption(false);
            this._showAllFeaturesInDataViewer();
            this._addRegularSearchIcon();
        },

        /**
        * This function is used to toggle selection options view
        * @param{boolean} to hide clear selection option or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        toggleSelectionViewOption: function (hideClearSelection) {
            return hideClearSelection;
        },

        /**
        * This function is used to implement event when clear selection option is clicked
        * It is also used to clear selected features from grid & map
        * If show selected option is clicked than this functionality will be freezed
        * @memberOf widgets/data-viewer/data-viewer
        */
        clearSelection: function () {
            if (!this.isShowSelectedClicked) {
                $(".esriCTRowSelected").removeClass("esriCTRowSelected");
                if (this._isPointLayer) {
                    this._dataViewerGraphicsLayer.clear();
                } else {
                    this._selectedOperationalLayer.clearSelection();
                }
                this._resetDetailsTab();
                this._removeControlsFromPreviousRow();
            }
        },

        /**
        * This function is used to reset details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        _resetDetailsTab: function () {
            var parentDiv;
            parentDiv = dom.byId("detailsContentDiv");
            parentDiv.innerHTML = dojo.configData.i18n.dataviewer.singleFeatureSelection;
        },

        /**
        * This function is used to zoom map to selected feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        zoomToSelected: function () {
            try {
                if (this.isDetailsTabClicked) {
                    var selectedFeaturesLength;
                    // if it is point feature than get selected feature length from graphics layer
                    // if it is other than point feature get selected feature length from feature layer
                    if (this._isPointLayer) {
                        selectedFeaturesLength = this._dataViewerGraphicsLayer.graphics.length;
                    } else {
                        selectedFeaturesLength = this._selectedOperationalLayer.getSelectedFeatures().length;
                    }
                    if (selectedFeaturesLength === 1) {
                        this.showLocationTab();
                        this.isDetailsTabClicked = false;
                        this._resetDetailsTab();
                        this._zoomMapExtentToSelectedFeature();
                    }
                } else {
                    this._zoomMapExtentToSelectedFeature();
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to validate search criteria
        * @memberOf widgets/data-viewer/data-viewer
        */
        searchDataInDataViewer: function () {
            try {
                $(".esriCTNoResults").addClass("esriCTHidden");
                if (!this.isShowSelectedClicked && lang.trim($(".esriCTSearchBox")[0].value) !== "") {
                    $(".esriCTSearchBox")[0].value = lang.trim($(".esriCTSearchBox")[0].value);
                    this.clearSelection();
                    this._removeControlsFromPreviousRow();
                    this._searchData();
                } else {
                    $(".esriCTSearchBox")[0].value = "";
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to search data in data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _searchData: function () {
            dojo.applicationUtils.showLoadingIndicator();
            if (this.isDetailsTabClicked) {
                this.showLocationTab();
            }
            this._setExistingDefinitionExpression();
            var searchValue = lang.trim($(".esriCTSearchBox")[0].value),
                newDefinitionExpression;
            if (searchValue) {
                newDefinitionExpression = this._getDefinitionExpression(searchValue);
            } else {
                $(".esriCTNoResults").addClass("esriCTHidden");
                newDefinitionExpression = this._existingDefinitionExpression;
            }
            this._resetDefinitionExpression(newDefinitionExpression);
            setTimeout(lang.hitch(this, function () {
                var filteredIconNode;
                if (this._selectedOperationalLayer.graphics.length === 0) {
                    $(".esriCTNoResults").removeClass("esriCTHidden");
                    $(".esriCTSearchBox")[0].value = "";
                    newDefinitionExpression = this._existingDefinitionExpression;
                    this._resetDefinitionExpression(newDefinitionExpression);
                    filteredIconNode = query(".esriCTSearchFiltered");
                    if (filteredIconNode.length > 0) {
                        this._addRegularSearchIcon();
                        setTimeout(lang.hitch(this, function () {
                            this.map.setExtent(this.lastSelectedWebMapExtent);
                        }), 1000);
                    } else {
                        this._addRegularSearchIcon();
                    }
                    dojo.applicationUtils.hideLoadingIndicator();
                } else {
                    if (newDefinitionExpression === this._existingDefinitionExpression) {
                        this._addRegularSearchIcon();
                        this.map.setExtent(this.lastSelectedWebMapExtent);
                    } else {
                        this._addFilteredSearchIcon();
                        this._createNewDataSet();
                    }
                }
            }), 1000);
        },

        /**
        * This function is used to clear contents of search input control
        * @memberOf widgets/data-viewer/data-viewer
        */
        clearSearchText: function () {
            try {
                var filteredIconNode;
                $(".esriCTNoResults").addClass("esriCTHidden");
                if (lang.trim($(".esriCTSearchBox")[0].value)) {
                    $(".esriCTSearchBox")[0].value = "";
                }
                filteredIconNode = query(".esriCTSearchFiltered");
                if (filteredIconNode.length > 0) {
                    this._searchData();
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to reset search panel
        * @memberOf widgets/data-viewer/data-viewer
        */
        _resetSearchPanel: function () {
            try {
                var i;
                $(".esriCTSearchBox")[0].value = "";
                $(".esriCTNoResults").addClass("esriCTHidden");
                $(".esriCTOptionsSearchMode").removeClass("esriCTVisible");
                $(".esriCTOptionsSearchMode").addClass("esriCTHidden");
                this._addDisabledSearchIcon();
                if (this.itemInfo.itemData.applicationProperties.viewing.search && this.itemInfo.itemData.applicationProperties.viewing.search.enabled) {
                    for (i = 0; i < this.itemInfo.itemData.applicationProperties.viewing.search.layers.length; i++) {
                        if (this.selectedOperationalLayerID === this.itemInfo.itemData.applicationProperties.viewing.search.layers[i].id) {
                            this._addRegularSearchIcon();
                            break;
                        }
                    }
                } else {
                    this._addDisabledSearchIcon();
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create a new data set after definition expression is set
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createNewDataSet: function () {
            try {
                this.clearSelection();
                var selectedFeatureArr, geometryService, selectedFeaturesGeometryArr = [],
                    i;
                geometryService = new GeometryService(dojo.configData.helperServices.geometry.url);
                // if it is point feature than get selected feature from graphics layer
                // if it is other than point feature get selected feature from feature layer
                selectedFeatureArr = this._selectedOperationalLayer.graphics;
                for (i = 0; i < selectedFeatureArr.length; i++) {
                    selectedFeaturesGeometryArr.push(selectedFeatureArr[i].geometry);
                }
                // do union of selected feature's geometry and set map extent to it
                geometryService.union(selectedFeaturesGeometryArr).then(lang.hitch(this, function (response) {
                    this.map.setExtent(response.getExtent(), true);
                }), function (err) {
                    dojo.applicationUtils.showError(err.message);
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to reset definition expression
        * @memberOf widgets/data-viewer/data-viewer
        */
        _resetDefinitionExpression: function (newDefinitionExpression) {
            try {
                this._selectedOperationalLayer.setDefinitionExpression(newDefinitionExpression);
                this._selectedOperationalLayer.refresh();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to add filtered search icon
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addFilteredSearchIcon: function () {
            try {
                var searchIconNode;
                searchIconNode = query(".esriCTSearch");
                if (searchIconNode.length > 0) {
                    domClass.add(searchIconNode[0], "esriCTSearchFiltered");
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to add disable search icon
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addDisabledSearchIcon: function () {
            try {
                var searchIconNode, filteredIconNode;
                searchIconNode = query(".esriCTSearch");
                filteredIconNode = query(".esriCTSearchFiltered");
                if (searchIconNode.length > 0) {
                    domClass.replace(searchIconNode[0], "esriCTSearchDisable", "esriCTSearch");
                } else if (filteredIconNode.length > 0) {
                    domClass.replace(filteredIconNode[0], "esriCTSearchDisable", "esriCTSearchFiltered");
                }
                if (searchIconNode.length > 0) {
                    domClass.replace(searchIconNode[0], "esriCTSearchDisable", "esriCTSearch");
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to add regular search icon
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addRegularSearchIcon: function () {
            try {
                var disableIconNode, filteredIconNode;
                disableIconNode = query(".esriCTSearchDisable");
                filteredIconNode = query(".esriCTSearchFiltered");
                if (disableIconNode.length > 0) {
                    domClass.replace(disableIconNode[0], "esriCTSearch", "esriCTSearchDisable");
                } else if (filteredIconNode.length > 0) {
                    domClass.remove(filteredIconNode[0], "esriCTSearchFiltered");
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to set existing definition expression.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setExistingDefinitionExpression: function () {
            try {
                var j;
                for (j = 0; j < this.itemInfo.itemData.operationalLayers.length; j++) {
                    if (this.selectedOperationalLayerID === this.itemInfo.itemData.operationalLayers[j].id) {
                        if (this.itemInfo.itemData.operationalLayers[j].layerDefinition && this.itemInfo.itemData.operationalLayers[j].layerDefinition.definitionExpression) {
                            this._existingDefinitionExpression = this.itemInfo.itemData.operationalLayers[j].layerDefinition.definitionExpression;
                        } else {
                            this._existingDefinitionExpression = null;
                        }
                    }
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to get definition expression
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getDefinitionExpression: function (searchValue) {
            try {
                var layerObject, i, definitionExpression = null;
                if (this.itemInfo.itemData.applicationProperties.viewing.search && this.itemInfo.itemData.applicationProperties.viewing.search.enabled) {
                    for (i = 0; i < this.itemInfo.itemData.applicationProperties.viewing.search.layers.length; i++) {
                        if (this.selectedOperationalLayerID === this.itemInfo.itemData.applicationProperties.viewing.search.layers[i].id) {
                            layerObject = this.itemInfo.itemData.applicationProperties.viewing.search.layers[i];
                            if (this._existingDefinitionExpression) {
                                definitionExpression = this._existingDefinitionExpression;
                                if (layerObject.field.exactMatch) {
                                    definitionExpression += " AND " + layerObject.field.name.toUpperCase() + " = '" + lang.trim(searchValue).toUpperCase() + "'";
                                } else {
                                    definitionExpression += " AND " + layerObject.field.name.toUpperCase() + " LIKE '%" + lang.trim(searchValue).toUpperCase() + "%'";
                                }
                            } else {
                                if (layerObject.field.exactMatch) {
                                    definitionExpression = layerObject.field.name.toUpperCase() + " = '" + lang.trim(searchValue).toUpperCase() + "'";
                                } else {
                                    definitionExpression = layerObject.field.name.toUpperCase() + " LIKE '%" + lang.trim(searchValue).toUpperCase() + "%'";
                                }
                            }
                            return definitionExpression;
                        }
                    }
                }
                return definitionExpression;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to retain show selected mode after resize
        * @memberOf widgets/data-viewer/data-viewer
        */
        retainShowSelectedModeAfterResize: function () {
            this.createDataViewerUI(false);
            this._retainSelectedFeature();
        },

        /**
        * This function is used to add graphic layer on map
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addDataViewerGraphicsLayer: function () {
            try {
                this._dataViewerGraphicsLayer = this.map.getLayer("dataViewerGraphicsLayer");
                // if graphic layer is available than clear it else create it and add on map
                if (this._dataViewerGraphicsLayer) {
                    this._dataViewerGraphicsLayer.clear();
                } else {
                    this._dataViewerGraphicsLayer = new GraphicsLayer({
                        "id": "dataViewerGraphicsLayer"
                    });
                    this.map.addLayer(this._dataViewerGraphicsLayer);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is invoked when extent of map is changed
        * @memberOf widgets/data-viewer/data-viewer
        */
        _onMapExtentChange: function () {
            dojo.dataViewerMapExtentHandle = on(this.map, "extent-change", lang.hitch(this, function (evt) {
                if (this._isOrientationChangedInListView) {
                    this._isOrientationChangedInListView = false;
                } else {
                    this._detachEvents();
                    this._isTextInputInFocus = false;
                    this._isDropDownClicked = false;
                    this._isDateTextInputInFocus = false;
                    this._removeControlsFromPreviousRow();
                    this._recreateDataViewer();
                }
            }));
        },

        /**
        * This function is used to detach events
        * @memberOf widgets/data-viewer/data-viewer
        */
        _detachEvents: function () {
            $(".esriCTTextInput").off("blur");
            $(".esriCTTextInput").off("focus");
            $(".esriCTCodedDomain").off("change");
            $(".esriCTCodedDomain").off("click");
            $(".esriCTDateInputField").off("blur");
            $(".esriCTDateInputField").off("focus");
        },

        /**
        * This function is used to create data viewer and retain selected feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        _recreateDataViewer: function () {
            // first check if show selected option is clicked
            // if it is clicked than no action should be performed
            // if not than refresh data-viewer grid with new features which are visible in extent
            if ((!this.isShowSelectedClicked) && (!this.isMapViewClicked)) {
                this.createDataViewerUI(false);
                this._retainSelectedFeature();
            } else {
                dojo.applicationUtils.hideLoadingIndicator();
            }
        },

        /**
        * This function is used to return features within current map extent
        * @memberOf widgets/data-viewer/data-viewer
        */
        _displayFeaturesWithinCurrentExtent: function () {
            try {
                var featureQuery, deferred;
                featureQuery = new Query();
                featureQuery.outSpatialReference = this.map.spatialReference;
                featureQuery.returnGeometry = true;
                featureQuery.geometry = this.map.extent;
                deferred = this._selectedOperationalLayer.queryFeatures(featureQuery);
                return deferred;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to show selected features in data viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _showSelectedFeatureInDataViewer: function () {
            try {
                dojo.applicationUtils.showLoadingIndicator();
                this.createDataViewerUI(false);
                $('#dataViewerTable tr').each(function () {
                    $(this).addClass("esriCTRowSelected");
                });
            } catch (err) {

                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to show all the features in data viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _showAllFeaturesInDataViewer: function () {
            try {
                this.isShowSelectedClicked = false;
                dojo.applicationUtils.showLoadingIndicator();
                this.createDataViewerUI(false);
                this._retainSelectedFeature();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to retain selected feature in table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _retainSelectedFeature: function () {
            try {
                var i, objectID, selectedFeatureArr;
                // if it is point feature than get selected feature from graphics layer
                // if it is other than point feature get selected feature from feature layer
                if (this._isPointLayer) {
                    selectedFeatureArr = this._dataViewerGraphicsLayer.graphics;
                } else {
                    selectedFeatureArr = this._selectedOperationalLayer.getSelectedFeatures();
                }
                for (i = 0; i < selectedFeatureArr.length; i++) {
                    objectID = selectedFeatureArr[i].attributes.objectid || selectedFeatureArr[i].attributes.OBJECTID;
                    this._highlightRowOnFeatureClick(objectID);
                }
            } catch (err) {

                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to zoom map extent to selected feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        _zoomMapExtentToSelectedFeature: function () {
            try {
                var selectedFeatureArr, geometryService, selectedFeaturesGeometryArr = [],
                    i;
                geometryService = new GeometryService(dojo.configData.helperServices.geometry.url);
                // if it is point feature than get selected feature from graphics layer
                // if it is other than point feature get selected feature from feature layer
                if (this._isPointLayer) {
                    selectedFeatureArr = this._dataViewerGraphicsLayer.graphics;
                } else {
                    selectedFeatureArr = this._selectedOperationalLayer.getSelectedFeatures();
                }
                for (i = 0; i < selectedFeatureArr.length; i++) {
                    selectedFeaturesGeometryArr.push(selectedFeatureArr[i].geometry);
                }
                if (selectedFeaturesGeometryArr.length === 1 && this._isPointLayer) {
                    this.map.setLevel(dojo.configData.zoomLevel);
                    this.map.centerAt(selectedFeaturesGeometryArr[0]);
                } else if (selectedFeaturesGeometryArr.length > 0) {
                    // do union of selected feature's geometry and set map extent to it
                    geometryService.union(selectedFeaturesGeometryArr).then(lang.hitch(this, function (response) {
                        this.map.setExtent(response.getExtent(), true);
                    }), function (err) {
                        dojo.applicationUtils.showError(err.message);
                    });
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to clear selected features of feature layer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _clearSelectedFeatures: function () {
            try {
                var layer;
                for (layer in this.map._layers) {
                    if (this.map._layers.hasOwnProperty(layer)) {
                        if (this.map._layers[layer].type) {
                            // only features should be cleared of layer having type feature layer
                            if (this.map._layers[layer].type === "Feature Layer") {
                                this.map._layers[layer].clearSelection();
                            }
                        }
                    }
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to remove duplicate feature from array
        * @param{array} array of features
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeDuplicateFeatures: function (arr) {
            try {
                var n, i, arrResult = {},
                    unique = [],
                    item,
                    objectID;
                for (i = 0, n = arr.length; i < n; i++) {
                    item = arr[i];
                    objectID = item.attributes.OBJECTID || item.attributes.objectid;
                    arrResult[objectID] = item;
                }
                i = 0;
                for (item in arrResult) {
                    if (arrResult.hasOwnProperty(item)) {
                        unique[i++] = arrResult[item];
                    }
                }
                return unique;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create panel of data viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerPanel: function () {
            try {
                domClass.remove(this.dataViewerParentDiv, "esriCTHidden");
                domClass.add(this.noFeatureDiv, "esriCTHidden");
                this._createDataViewerHeaderPanel();
                this._createDataViewerDataPanel();
                dojo.applicationUtils.hideLoadingIndicator();
            } catch (err) {

                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used attach click event to features
        * @memberOf widgets/data-viewer/data-viewer
        */
        _onFeatureClick: function () {
            try {
                dojo.dataViewerFeatureLayerHandle = on(this._selectedOperationalLayer, "click", lang.hitch(this, function (evt) {
                    if (!this.isShowSelectedClicked) {
                        this._removeControlsFromPreviousRow();
                        if (this._isCurrentFeatureSelected(evt.graphic)) {
                            this._deSelectFeatureOnMapClick(evt.graphic);
                        } else {
                            this._selectFeatureOnMapClick(evt.graphic);
                        }
                    }
                }));
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }

        },

        /**
        * This function is used to select feature on map
        * @param{object} feature that needs to be highlighted
        * @memberOf widgets/data-viewer/data-viewer
        */
        _selectFeatureOnMapClick: function (feature) {
            try {
                var objectId,
                    featureQuery = new Query();
                objectId = feature.attributes.objectid || feature.attributes.OBJECTID;
                featureQuery.objectIds = [parseInt(objectId, 10)];
                featureQuery.outSpatialReference = this.map.spatialReference;
                featureQuery.returnGeometry = true;
                this._selectedOperationalLayer.queryFeatures(featureQuery, lang.hitch(this, function (featureSet) {
                    // if it is point feature than add selected feature on graphics layer
                    // if it is other than point feature than select feature using selectFeatures method & FeatureLayer.SELECTION_ADD option
                    if (this._isPointLayer) {
                        this._dataViewerGraphicsLayer.add(this._getHighLightSymbol(featureSet.features[0]));
                    } else {
                        this._selectedOperationalLayer.setSelectionSymbol(this._getHighLightSymbol(featureSet.features[0]));
                        this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_ADD);
                    }
                    this._highlightRowOnFeatureClick(objectId);
                }), function (err) {
                    dojo.applicationUtils.showError(err.message);
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to highlight row
        * @param{int} object id associated with each row
        * @memberOf widgets/data-viewer/data-viewer
        */
        _highlightRowOnFeatureClick: function (objectId) {
            $('#dataViewerTable tr').each(function () {
                if (parseInt($(this).find('td').eq(0).text(), 10) === objectId) {
                    $(this).addClass("esriCTRowSelected");
                }
            });
        },

        /**
        * This function is used to de-select row
        * @param{int} object id associated with each row
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeHighlightedRowOnFeatureClick: function (objectId) {
            $('#dataViewerTable tr').each(function () {
                if (parseInt($(this).find('td').eq(0).text(), 10) === objectId) {
                    $(this).removeClass("esriCTRowSelected");
                }
            });
        },

        /**
        * This function is used to de-select feature on map
        * @param{object} feature that needs to be de-selected
        * @memberOf widgets/data-viewer/data-viewer
        */
        _deSelectFeatureOnMapClick: function (feature) {
            try {
                var objectId, i, objectID, featureQuery;
                // if it is point feature than de-select it from graphics layer
                // if it is other than point feature than de-select it from feature layer
                if (this._isPointLayer) {
                    objectId = feature.attributes.OBJECTID || feature.attributes.objectid;
                    for (i = 0; i < this._dataViewerGraphicsLayer.graphics.length; i++) {
                        objectID = this._dataViewerGraphicsLayer.graphics[i].attributes.objectid || this._dataViewerGraphicsLayer.graphics[i].attributes.OBJECTID;
                        if (parseInt(objectID, 10) === parseInt(objectId, 10)) {
                            this._dataViewerGraphicsLayer.remove(this._dataViewerGraphicsLayer.graphics[i]);
                            break;
                        }
                    }
                } else {
                    featureQuery = new Query();
                    objectId = feature.attributes.OBJECTID || feature.attributes.objectid;
                    featureQuery.objectIds = [parseInt(objectId, 10)];
                    featureQuery.outSpatialReference = this.map.spatialReference;
                    featureQuery.returnGeometry = false;
                    this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_SUBTRACT);
                }
                this._removeHighlightedRowOnFeatureClick(objectId);
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used check whether current feature is selected or not
        * @param{object} feature that needs to be checked whether it is selected or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        _isCurrentFeatureSelected: function (feature) {
            try {
                var objectId, i, objectID, selectedFeatureArr;
                // if it is point feature than get status whether feature is selected or not from graphics layer
                // if it is other than point feature than get status whether feature is selected or not from feature layer
                if (this._isPointLayer) {
                    objectId = feature.attributes.OBJECTID || feature.attributes.objectid;
                    for (i = 0; i < this._dataViewerGraphicsLayer.graphics.length; i++) {
                        objectID = this._dataViewerGraphicsLayer.graphics[i].attributes.objectid || this._dataViewerGraphicsLayer.graphics[i].attributes.OBJECTID;
                        if (parseInt(objectID, 10) === parseInt(objectId, 10)) {
                            return true;
                        }
                    }
                } else {
                    selectedFeatureArr = this._selectedOperationalLayer.getSelectedFeatures();
                    for (i = 0; i < selectedFeatureArr.length; i++) {
                        if (feature === selectedFeatureArr[i]) {
                            return true;
                        }
                    }
                }
                return false;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create feature table header panel.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerHeaderPanel: function () {
            try {
                var tableHeader, table, thead, tr, i;
                domConstruct.empty(this.dataViewerParentDiv);
                table = domConstruct.create("table", {
                    "class": "display esriCTDataViewer",
                    "id": "dataViewerTable"
                });
                thead = domConstruct.create("thead", {}, table);
                tr = domConstruct.create("tr", {}, thead);
                // to create table headers
                if (this._features.length > 0) {
                    this._getFieldProperties();
                    for (i = 0; i < this._displayColumn.length; i++) {
                        tableHeader = domConstruct.create("th", {});
                        tableHeader.innerHTML = this._displayColumn[i].label;
                        tr.appendChild(tableHeader);
                    }
                }
                this.dataViewerParentDiv.appendChild(table);
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to maintain array of column that needs to be displayed
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getFieldProperties: function () {
            try {
                var i, j, obj;
                this._displayColumn = [];
                // to fetch type from layer
                // to fetch label from popup info
                // to fetch editable status from popup info
                // to fetch date format from popup info
                for (i = 0; i < this.popupInfo.fieldInfos.length; i++) {
                    for (j = 0; j < this._selectedOperationalLayer.fields.length; j++) {
                        if (this._selectedOperationalLayer.fields[j].name === this.popupInfo.fieldInfos[i].fieldName) {
                            if ((this.popupInfo.fieldInfos[i].visible) || (this.popupInfo.fieldInfos[i].fieldName.toLowerCase() === "objectid")) {
                                obj = {};
                                obj.type = this._selectedOperationalLayer.fields[j].type;
                                obj.displayField = true;
                                obj.label = this.popupInfo.fieldInfos[i].label || this.popupInfo.fieldInfos[i].fieldName;
                                if (this.popupInfo.fieldInfos[i].isEditable) {
                                    obj.isFieldEditable = true;
                                } else {
                                    obj.isFieldEditable = false;
                                }
                                if ((this.popupInfo.fieldInfos[i].format) && (this.popupInfo.fieldInfos[i].format.dateFormat)) {
                                    obj.format = this.popupInfo.fieldInfos[i].format.dateFormat;
                                }
                                if (this._selectedOperationalLayer.fields[j].domain) {
                                    if (this._selectedOperationalLayer.fields[j].domain.codedValues) {
                                        obj.codedValues = this._selectedOperationalLayer.fields[j].domain.codedValues;
                                    } else {
                                        obj.domain = this._selectedOperationalLayer.fields[j].domain;
                                    }
                                }
                                if ((this.popupInfo.fieldInfos[i].format) && (this.popupInfo.fieldInfos[i].format.digitSeparator) && (this.popupInfo.fieldInfos[i].format.places)) {
                                    if (this.popupInfo.fieldInfos[i].format.places > 0) {
                                        obj.numberFormat = this.popupInfo.fieldInfos[i].format;
                                    }
                                }
                                obj.length = this._selectedOperationalLayer.fields[j].length;
                                obj.fieldName = this.popupInfo.fieldInfos[i].fieldName;
                                obj.nullable = this._selectedOperationalLayer.fields[j].nullable;
                                if (this._selectedOperationalLayer.typeIdField === this.popupInfo.fieldInfos[i].fieldName) {
                                    obj.types = this._selectedOperationalLayer.types;
                                }
                                this._displayColumn.push(obj);
                            }
                        }
                    }
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create data that needs to be added in data-viewer table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerDataPanel: function () {
            try {
                var i, j, number, fieldName, format, type, value, dateFormat, k, n;
                this._entireFeatureDataArr = [];
                for (i = 0; i < this._features.length; i++) {
                    this._dataSet = [];
                    for (j = 0; j < this._displayColumn.length; j++) {
                        if (this._displayColumn[j].displayField) {
                            fieldName = this._displayColumn[j].fieldName;
                            format = this._displayColumn[j].format;
                            type = this._displayColumn[j].type;
                            value = this._features[i].attributes[fieldName];
                            dateFormat = dojo.applicationUtils.getDateFormat(format);
                            switch (type) {
                            case "esriFieldTypeOID":
                                this._dataSet.push(value);
                                break;
                            case "esriFieldTypeDate":
                                if (value && value !== 0) {
                                    this._dataSet.push((moment(value)).format(dateFormat));
                                } else {
                                    if (value === 0) {
                                        this._dataSet.push("");
                                    } else {
                                        this._dataSet.push(value);
                                    }
                                }
                                break;
                            default:
                                if (this._displayColumn[j].codedValues) {
                                    if (value || value === 0) {
                                        for (k = 0; k < this._displayColumn[j].codedValues.length; k++) {
                                            if (this._displayColumn[j].codedValues[k].code === value) {
                                                this._dataSet.push(this._displayColumn[j].codedValues[k].name);
                                            }
                                        }
                                    } else {
                                        this._dataSet.push(value);
                                    }
                                } else if (this._displayColumn[j].types) {
                                    if (value || value === 0) {
                                        for (n = 0; n < this._displayColumn[j].types.length; n++) {
                                            if (this._displayColumn[j].types[n].id === value) {
                                                this._dataSet.push(this._displayColumn[j].types[n].name);
                                            }
                                        }
                                    } else {
                                        this._dataSet.push(value);
                                    }
                                } else {
                                    if (this._displayColumn[j].numberFormat) {
                                        if (value || value === 0) {
                                            if (this._displayColumn[j].numberFormat.digitSeparator) {
                                                number = value.toFixed(this._displayColumn[j].numberFormat.places);
                                                number = dojo.applicationUtils.convertNumberToThousandSeperator(number);
                                                this._dataSet.push(number);
                                            } else {
                                                this._dataSet.push(value.toFixed(this._displayColumn[j].numberFormat.places));
                                            }
                                        } else {
                                            this._dataSet.push(value);
                                        }
                                    } else {
                                        this._dataSet.push(value);
                                    }
                                }
                            }
                        }
                    }
                    this._entireFeatureDataArr.push(this._dataSet);
                }
                this._convertHtmlTableToDataTable();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to convert HTML table to data table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _convertHtmlTableToDataTable: function () {
            try {
                var columnWidth = null;
                if ((this._displayColumn.length - 1) === 1) {
                    columnWidth = "100%";
                } else if ((this._displayColumn.length - 1) === 2) {
                    columnWidth = "50%";
                } else {
                    columnWidth = "200px";
                }
                this._dataViewerTable = $('#dataViewerTable').DataTable({
                    "destroy": true,
                    "aaData": this._entireFeatureDataArr, // data that needs to be displayed
                    "dom": 'rt', // to show only record panel
                    "scrollY": "150px", // to display vertical scroll bar
                    "scrollX": true, // to display horizontal scroll bar
                    "scrollCollapse": true,
                    "paging": false, // to disable pagination
                    "aoColumnDefs": [{
                        "sClass": "esriCTHiddenColumn",
                        "aTargets": [0]
                    }, {
                        "sDefaultContent": "", // when no data is available to display
                        "sWidth": columnWidth,
                        "aTargets": "_all" // to apply condition to all column when no data is there to display,
                    }],
                    "autoWidth": true
                });
                this._onRowClick();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to set auto width property of data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        destroyDataViewerTable: function (value) {
            if (this._dataViewerTable) {
                this._dataViewerTable.destroy();
            }
        },

        /**
        * This function is used to empty dependent controls
        * @memberOf widgets/data-viewer/data-viewer
        */
        _emptyDependentControls: function () {
            this._updatedFieldAttribute = {};
            this._updatedTextInputControl = [];
            this._updatedDropDownControl = [];
            this._updateDatePickerControl = [];
        },

        /**
        * This function is used to attach events to controls that needs for editing
        * @memberOf widgets/data-viewer/data-viewer
        */
        _attachEventToControls: function () {
            try {
                $(".esriCTTextInput").on({
                    // update feature on focus out of text-box
                    blur: lang.hitch(this, function (evt) {
                        this._emptyDependentControls();
                        this._isTextInputInFocus = false;
                        if (evt.currentTarget.defaultValue !== evt.currentTarget.value) {
                            dojo.applicationUtils.showLoadingIndicator();
                            this._lastEditedControl = evt;
                            this._updateFeature(evt.currentTarget.value, evt.currentTarget.name);
                        }
                    }),
                    focus: lang.hitch(this, function (evt) {
                        this._emptyDependentControls();
                        this._featureObjectID = this._fetchObjectID(evt.currentTarget.parentElement.parentElement);
                        this._isTextInputInFocus = true;
                    })
                });
                $(".esriCTCodedDomain").on({
                    // update feature on change of drop-down
                    change: lang.hitch(this, function (evt) {
                        this._emptyDependentControls();
                        var field, value;
                        this._isDropDownClicked = true;
                        dojo.applicationUtils.showLoadingIndicator();
                        this._lastEditedControl = evt;
                        field = evt.currentTarget.value.split("|")[1];
                        value = evt.currentTarget.value.split("|")[0];
                        if (field === this._selectedOperationalLayer.typeIdField) {
                            this._detachEvents();
                            this._changeValueOfDependentField(parseInt(value, 10));
                            this._attachEventToControls();
                        }
                        this._updateFeature(value, field);
                    }),
                    click: lang.hitch(this, function (evt) {
                        this._emptyDependentControls();
                        this._isDropDownClicked = true;
                        this._featureObjectID = this._fetchObjectID(evt.currentTarget.parentElement.parentElement);
                    }),
                    blur: lang.hitch(this, function (evt) {
                        this._isDropDownClicked = false;
                    })
                });
                $(".esriCTDateInputField").on({
                    blur: lang.hitch(this, function (evt) {
                        this._emptyDependentControls();
                        this._isDateTextInputInFocus = false;
                    }),
                    focus: lang.hitch(this, function (evt) {
                        this._emptyDependentControls();
                        this._isDateTextInputInFocus = true;
                    })
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },


        /**
        * This function is used to change the value of dependent field
        * @memberOf widgets/data-viewer/data-viewer
        */
        _changeValueOfDependentField: function (id) {
            try {
                var j, i, className, updateField, defaultValue, k;
                for (j = 0; j < this._selectedOperationalLayer.types.length; j++) {
                    if (id === this._selectedOperationalLayer.types[j].id) {
                        for (i = 1; i < this._lastSelectedRow.currentTarget.childNodes.length; i++) {
                            if (this._lastSelectedRow.currentTarget.childNodes[i].childNodes.length > 0) {
                                if (this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].className) {
                                    className = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].className;
                                    updateField = this._extractField(className, i);
                                    defaultValue = null;
                                    if (this._selectedOperationalLayer.types[j].domains[updateField] && this._selectedOperationalLayer.typeIdField !== updateField) {
                                        defaultValue = this._selectedOperationalLayer.types[j].templates[0].prototype.attributes[updateField];
                                        this._updatedFieldAttribute[updateField] = defaultValue;
                                        if (className.indexOf("esriCTTextInput") > -1) {
                                            this._updatedTextInputControl.push({
                                                "control": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0],
                                                "newValue": defaultValue,
                                                "oldValue": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].value
                                            });
                                            this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].value = defaultValue;
                                        } else if (className.indexOf("esriCTCodedDomain") > -1) {
                                            this._updatedDropDownControl.push({
                                                "control": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0],
                                                "newValue": defaultValue,
                                                "oldValue": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].selectedIndex
                                            });
                                            if (defaultValue || defaultValue === 0) {
                                                for (k = 0; k < this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].length; k++) {
                                                    if (this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0][k].value.split("|")[0].toString() === defaultValue.toString()) {
                                                        this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].selectedIndex = k;
                                                        break;
                                                    }
                                                }
                                            } else {
                                                this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].selectedIndex = -1;
                                            }
                                        } else if (className.indexOf("esriCTDateTimePicker") > -1) {
                                            this._updateDatePickerControl.push({
                                                "control": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].childNodes[0],
                                                "newValue": defaultValue,
                                                "oldValue": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].childNodes[0].name,
                                                "dateControl": this._lastSelectedRow.currentTarget
                                            });
                                            if (!defaultValue) {
                                                $(this._lastSelectedRow.currentTarget.childNodes[i]).data("DateTimePicker").setDate(defaultValue);
                                            } else {
                                                $(this._lastSelectedRow.currentTarget.childNodes[i]).data("DateTimePicker").setDate(parseInt(defaultValue, 10));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to extract field
        * @memberOf widgets/data-viewer/data-viewer
        */
        _extractField: function (className, index) {
            try {
                var updateField = null;
                if (className.indexOf("esriCTTextInput") > -1) {
                    updateField = this._lastSelectedRow.currentTarget.childNodes[index].childNodes[0].name;
                } else if (className.indexOf("esriCTCodedDomain") > -1) {
                    if (this._lastSelectedRow.currentTarget.childNodes[index].childNodes[0].value.split("|")[1]) {
                        updateField = this._lastSelectedRow.currentTarget.childNodes[index].childNodes[0].value.split("|")[1];
                    } else {
                        updateField = this._lastSelectedRow.currentTarget.childNodes[index].childNodes[0][1].value.split("|")[1];
                    }
                } else if (className.indexOf("esriCTDateTimePicker") > -1) {
                    updateField = this._lastSelectedRow.currentTarget.childNodes[index].childNodes[0].childNodes[0].name.split("|")[1];
                }
                return updateField;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to update feature
        * @param{string} new value of field that needs to be updated
        * @param{string} field in which value needs to be updated
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updateFeature: function (newValue, field) {
            try {
                var featureLayerQuery = new Query();
                featureLayerQuery.outSpatialReference = this.map.spatialReference;
                featureLayerQuery.objectIds = [parseInt(this._featureObjectID, 10)];
                featureLayerQuery.returnGeometry = true;
                this._selectedOperationalLayer.queryFeatures(featureLayerQuery, lang.hitch(this, function (featureSet) {
                    if (featureSet.features.length > 0) {
                        var i, type, obj, attrname, attr;
                        attr = {};
                        if (featureSet.features[0].attributes.OBJECTID) {
                            attr.OBJECTID = parseInt(this._featureObjectID, 10);
                        } else {
                            attr.objectid = parseInt(this._featureObjectID, 10);
                        }
                        for (i = 0; i < featureSet.features[0]._layer.fields.length; i++) {
                            if (featureSet.features[0]._layer.fields[i].name === field) {
                                type = featureSet.features[0]._layer.fields[i].type;
                                switch (type) {
                                case "esriFieldTypeString":
                                    attr[field] = newValue;
                                    break;
                                case "esriFieldTypeDouble":
                                    attr[field] = parseFloat(newValue);
                                    break;
                                case "esriFieldTypeDate":
                                    attr[field] = parseInt(newValue, 10);
                                    break;
                                case "esriFieldTypeSmallInteger":
                                case "esriFieldTypeInteger":
                                case "esriFieldTypeSingle":
                                    attr[field] = parseInt(newValue, 10);
                                    break;
                                default:
                                    attr[field] = newValue;
                                }
                            }
                        }
                        if (!$.isEmptyObject(this._updatedFieldAttribute)) {
                            for (attrname in attr) {
                                if (attr.hasOwnProperty(attrname)) {
                                    this._updatedFieldAttribute[attrname] = attr[attrname];
                                }
                            }
                            this._updatedGraphic = new Graphic(featureSet.features[0].geometry, null, this._updatedFieldAttribute, null);
                        } else {
                            this._updatedGraphic = new Graphic(featureSet.features[0].geometry, null, attr, null);
                        }
                        this._updatedField = field;
                        obj = this._validateControl(type, field);
                        if (obj.isValueValid) {
                            this._selectedOperationalLayer.applyEdits(null, [this._updatedGraphic], null, lang.hitch(this, function (adds, updates, deletes) {
                                if (updates[0].success) {
                                    var className, newValueArr, newValueStr;
                                    className = this._lastEditedControl.currentTarget.className;
                                    if (className.indexOf("esriCTDateTimePicker") > -1) {
                                        newValueArr = this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0].name.split('|');
                                        if (newValue) {
                                            newValueStr = newValueArr[0] + "|" + parseInt(newValue, 10) + "|" + newValueArr[2];
                                        } else {
                                            newValueStr = newValueArr[0] + "||" + newValueArr[2];
                                        }
                                        this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0].name = newValueStr;
                                    }
                                    if (className.indexOf("esriCTTextInput") > -1) {
                                        this._lastEditedControl.currentTarget.defaultValue = this._lastEditedControl.currentTarget.value;
                                    }
                                    if (className.indexOf("esriCTCodedDomain") > -1) {
                                        this._lastEditedControl.currentTarget.name = newValue;
                                    }
                                    if (this._isDropDownClicked) {
                                        this._isDropDownClicked = false;
                                    }
                                    if (!$.isEmptyObject(this._updatedFieldAttribute)) {
                                        this._updateDependentFieldControls();
                                    }
                                    this.map.getLayer(this.selectedOperationalLayerID).refresh();
                                    this._updateFieldInSelectedFeaturesList(field);
                                    dojo.applicationUtils.hideLoadingIndicator();
                                } else {
                                    this._retainOldValue();
                                    dojo.applicationUtils.showError(updates[0].error.message);
                                }
                            }), lang.hitch(this, function (err) {
                                this._retainOldValue();
                                dojo.applicationUtils.showError(err.message);
                            }));
                        } else {
                            this._retainOldValue();
                            dojo.applicationUtils.showError(obj.errorMessage);
                        }
                    } else {
                        this._retainOldValue();
                    }
                }), lang.hitch(this, function (err) {
                    this._retainOldValue();
                    dojo.applicationUtils.showError(err.message);
                }));
            } catch (err) {
                this._retainOldValue();
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to update field in selected features list
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updateFieldInSelectedFeaturesList: function (field) {
            try {
                var i, objectID, updatedObjectID;
                if (this._isPointLayer) {
                    updatedObjectID = this._updatedGraphic.attributes.objectid || this._updatedGraphic.attributes.OBJECTID;
                    for (i = 0; i < this._dataViewerGraphicsLayer.graphics.length; i++) {
                        objectID = this._dataViewerGraphicsLayer.graphics[i].attributes.objectid || this._dataViewerGraphicsLayer.graphics[i].attributes.OBJECTID;
                        if (objectID === updatedObjectID) {
                            this._dataViewerGraphicsLayer.graphics[i].attributes[field] = this._updatedGraphic.attributes[field];
                            break;
                        }
                    }
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to update dependent field controls
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updateDependentFieldControls: function () {
            try {
                var i, newValueArr, newValueStr;
                this._detachEvents();
                for (i = 0; i < this._updatedTextInputControl.length; i++) {
                    this._updatedTextInputControl[i].control.defaultValue = this._updatedTextInputControl[i].newValue;
                }
                for (i = 0; i < this._updatedDropDownControl.length; i++) {
                    this._updatedDropDownControl[i].control.name = this._updatedDropDownControl[i].newValue;
                }
                for (i = 0; i < this._updateDatePickerControl.length; i++) {
                    newValueArr = this._updateDatePickerControl[i].control.name.split('|');
                    if (this._updateDatePickerControl[i].control.newValue) {
                        newValueStr = newValueArr[0] + "|" + parseInt(this._updateDatePickerControl[i].newValue, 10) + "|" + newValueArr[2];
                    } else {
                        newValueStr = newValueArr[0] + "||" + newValueArr[2];
                    }
                    this._updateDatePickerControl[i].control.name = newValueStr;
                }
                this._attachEventToControls();
                this._emptyDependentControls();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to check whether null value is allowed in field or not
        * @param{string} field that allows null value or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        _isNullableValueAllowed: function (field) {
            try {
                var i;
                for (i = 0; i < this._displayColumn.length; i++) {
                    if (this._displayColumn[i].fieldName === field) {
                        if (this._displayColumn[i].nullable) {
                            return true;
                        }
                    }
                }
                return false;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to check whether value entered is in range or not
        * @param{number} value that needs to be checked
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _isValueInRange: function (field, value) {
            try {
                var rangeObj = {
                    "valueInRange": true,
                    "errorMessage": null
                },
                    i, error;
                for (i = 0; i < this._displayColumn.length; i++) {
                    if (this._displayColumn[i].fieldName === field) {
                        if (this._displayColumn[i].domain) {
                            if ((value >= this._displayColumn[i].domain.minValue) && (value <= this._displayColumn[i].domain.maxValue)) {
                                rangeObj.valueInRange = true;
                            } else {
                                error = string.substitute(dojo.configData.i18n.dataviewer.invalidNumericRange, {
                                    minValue: this._displayColumn[i].domain.minValue,
                                    maxValue: this._displayColumn[i].domain.maxValue
                                });
                                rangeObj.valueInRange = false;
                                rangeObj.errorMessage = error;
                            }
                            return rangeObj;
                        }
                    }
                }
                return rangeObj;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to validate data that is entered in text-input during update
        * @param{string} data type of value
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _validateControl: function (inputType, field) {
            try {
                var inputValue, className, typeCastedInputValue, decimal, float, rangeObj, obj = {
                    "isValueValid": true,
                    "errorMessage": null
                };
                decimal = /^[-+]?[0-9]+$/;
                float = /^[-+]?[0-9]+\.[0-9]+$/;
                if (this._lastEditedControl.currentTarget.className) {
                    className = this._lastEditedControl.currentTarget.className;
                    if (className.indexOf("esriCTTextInput") > -1) {
                        inputValue = lang.trim(this._lastEditedControl.currentTarget.value);
                        // if nullable value is allowed in field than return true
                        if ((this._isNullableValueAllowed(field)) && (inputValue.length === 0)) {
                            obj.isValueValid = true;
                            return obj;
                        }
                        switch (inputType) {
                        case "esriFieldTypeString":
                            if (inputValue.length !== 0) {
                                obj.isValueValid = true;
                            } else {
                                obj.isValueValid = false;
                                obj.errorMessage = dojo.configData.i18n.dataviewer.invalidString;
                            }
                            break;
                        case "esriFieldTypeSmallInteger":
                            typeCastedInputValue = parseInt(inputValue, 10);
                            rangeObj = this._isValueInRange(field, typeCastedInputValue);
                            if (rangeObj.valueInRange) {
                                if ((inputValue.match(decimal) && typeCastedInputValue >= -32768 && typeCastedInputValue <= 32767) && inputValue.length !== 0) {
                                    obj.isValueValid = true;
                                } else {
                                    obj.isValueValid = false;
                                    obj.errorMessage = dojo.configData.i18n.dataviewer.invalidSmallNumber;
                                }
                            } else {
                                obj.isValueValid = false;
                                obj.errorMessage = rangeObj.errorMessage;
                            }
                            break;
                        case "esriFieldTypeInteger":
                            typeCastedInputValue = parseInt(inputValue, 10);
                            rangeObj = this._isValueInRange(field, typeCastedInputValue);
                            if (rangeObj.valueInRange) {
                                if ((inputValue.match(decimal) && typeCastedInputValue >= -2147483648 && typeCastedInputValue <= 2147483647) && inputValue.length !== 0) {
                                    obj.isValueValid = true;
                                } else {
                                    obj.isValueValid = false;
                                    obj.errorMessage = dojo.configData.i18n.dataviewer.invalidNumber;
                                }
                            } else {
                                obj.isValueValid = false;
                                obj.errorMessage = rangeObj.errorMessage;
                            }
                            break;
                        case "esriFieldTypeSingle":
                            // zero or more occurrence of (+-) at the start of expression
                            // at least one occurrence of digits between o-9
                            // occurrence of .
                            // at least one occurrence of digits between o-9 in the end
                            typeCastedInputValue = parseFloat(inputValue);
                            rangeObj = this._isValueInRange(field, typeCastedInputValue);
                            if (rangeObj.valueInRange) {
                                if (((inputValue.match(decimal) || inputValue.match(float)) && typeCastedInputValue >= -3.4 * Math.pow(10, 38) && typeCastedInputValue <= 1.2 * Math.pow(10, 38)) && inputValue.length !== 0) {
                                    obj.isValueValid = true;
                                } else {
                                    obj.isValueValid = false;
                                    obj.errorMessage = dojo.configData.i18n.dataviewer.invalidFloat;
                                }
                            } else {
                                obj.isValueValid = false;
                                obj.errorMessage = rangeObj.errorMessage;
                            }
                            break;
                        case "esriFieldTypeDouble":
                            typeCastedInputValue = parseFloat(inputValue);
                            rangeObj = this._isValueInRange(field, typeCastedInputValue);
                            if (rangeObj.valueInRange) {
                                if (((inputValue.match(decimal) || inputValue.match(float)) && typeCastedInputValue >= -2.2 * Math.pow(10, 308) && typeCastedInputValue <= 1.8 * Math.pow(10, 38)) && inputValue.length !== 0) {
                                    obj.isValueValid = true;
                                } else {
                                    obj.isValueValid = false;
                                    obj.errorMessage = dojo.configData.i18n.dataviewer.invalidDouble;
                                }
                            } else {
                                obj.isValueValid = false;
                                obj.errorMessage = rangeObj.errorMessage;
                            }
                            break;
                        }
                    }
                }
                return obj;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to retain old value in control if updation of feature fails
        * @memberOf widgets/data-viewer/data-viewer
        */
        _retainOldValue: function () {
            try {
                if (this._isDropDownClicked) {
                    this._isDropDownClicked = false;
                }
                var className = this._lastEditedControl.currentTarget.className,
                    date,
                    existingCode,
                    i,
                    code;
                this._detachEvents();
                for (i = 0; i < this._updatedTextInputControl.length; i++) {
                    this._updatedTextInputControl[i].control.value = this._updatedTextInputControl[i].oldValue;
                }
                for (i = 0; i < this._updatedDropDownControl.length; i++) {
                    this._updatedDropDownControl[i].control.selectedIndex = this._updatedDropDownControl[i].oldValue;
                }
                for (i = 0; i < this._updateDatePickerControl.length; i++) {
                    date = this._updateDatePickerControl[i].oldValue.split('|')[1];
                    if (date === "null") {
                        $(this._updateDatePickerControl[i].dateControl).data("DateTimePicker").setDate(null);
                    } else {
                        $(this._updateDatePickerControl[i].dateControl).data("DateTimePicker").setDate(parseInt(date, 10));
                    }
                }
                this._attachEventToControls();
                this._emptyDependentControls();
                // retain value in text box
                if (className.indexOf("esriCTTextInput") > -1) {
                    this._lastEditedControl.currentTarget.value = this._lastEditedControl.currentTarget.defaultValue;
                    // retain value in drop-down
                } else if (className.indexOf("esriCTCodedDomain") > -1) {
                    existingCode = this._lastEditedControl.currentTarget.name;
                    for (i = 0; i < this._lastEditedControl.currentTarget.childNodes.length; i++) {
                        code = this._lastEditedControl.currentTarget.childNodes[i].value.split("|")[0];
                        if (code === existingCode) {
                            this._lastEditedControl.currentTarget.selectedIndex = i;
                            break;
                        }
                    }
                    // retain value in date picker
                } else if (className.indexOf("esriCTDateTimePicker") > -1) {
                    date = this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0].name.split('|')[1];
                    if (date === "null") {
                        this._isDatePickerValueRetained = true;
                        $(this._lastEditedControl.currentTarget).data("DateTimePicker").setDate(null);
                    } else {
                        this._isDatePickerValueRetained = true;
                        $(this._lastEditedControl.currentTarget).data("DateTimePicker").setDate(parseInt(date, 10));
                    }
                }
                dojo.applicationUtils.hideLoadingIndicator();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create date-time picker control
        * @memberOf widgets/data-viewer/data-viewer
        */
        _renderDateTimePicker: function () {
            try {
                var datePickerArr = $(".esriCTDateTimePicker"),
                    i,
                    date,
                    format,
                    datePicker,
                    min,
                    max;
                for (i = 0; i < datePickerArr.length; i++) {
                    date = datePickerArr[i].childNodes[0].name.split('|')[1];
                    format = datePickerArr[i].childNodes[0].name.split('|')[2];
                    min = datePickerArr[i].childNodes[0].name.split('|')[3];
                    max = datePickerArr[i].childNodes[0].name.split('|')[4];
                    datePicker = $(datePickerArr[i]).datetimepicker({
                        useSeconds: false,
                        useStrict: false,
                        format: format
                    });
                    // set date if not than set min,max date
                    if (min === "null" && max === "null") {
                        datePicker.data("DateTimePicker").setDate(parseInt(date, 10));
                    } else {
                        datePicker.data("DateTimePicker").setMaxDate(parseInt(max, 10));
                        datePicker.data("DateTimePicker").setMinDate(parseInt(min, 10));
                        if (date !== "null") {
                            datePicker.data("DateTimePicker").setDate(parseInt(date, 10));
                        }
                    }
                    this._attachDatePickerEvent(datePicker);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to attach event to date-picker
        * @param{object} datePicker object
        * @memberOf widgets/data-viewer/data-viewer
        */
        _attachDatePickerEvent: function (datePicker) {
            try {
                // update value when date is changed
                datePicker.on('dp.change', lang.hitch(this, function (evt) {
                    if (this._isDatePickerValueRetained) {
                        this._isDatePickerValueRetained = false;
                    } else {
                        var value, field;
                        this._lastEditedControl = evt;
                        $(evt.currentTarget).data("DateTimePicker").hide();
                        this._featureObjectID = this._fetchObjectID(evt.currentTarget.parentElement.parentElement);
                        value = $(evt.currentTarget).data('DateTimePicker').getDate().valueOf();
                        field = evt.currentTarget.childNodes[0].name.split('|')[0];
                        this._updateFeature(value, field);
                    }
                }));
                datePicker.on('dp.show', lang.hitch(this, function (evt) {
                    this._lastEditedControl = evt;
                }));
                // show error when invalid date is entered
                datePicker.on('dp.error', lang.hitch(this, function (evt) {
                    var field;
                    field = evt.currentTarget.childNodes[0].name.split('|')[0];
                    if (evt.date._i === "" && this._isNullableValueAllowed(field)) {
                        this._lastEditedControl = evt;
                        this._updateFeature(null, field);
                    } else {
                        if (this._isDatePickerValueRetained) {
                            this._isDatePickerValueRetained = false;
                        } else {
                            this._showDatePickerErrorMessage = true;
                            this._lastEditedControl = evt;
                            this._retainOldValue();
                            this._isDatePickerValueRetained = false;
                        }
                        if (this._showDatePickerErrorMessage) {
                            this._showDatePickerErrorMessage = false;
                            dojo.applicationUtils.showMessage(dojo.configData.i18n.dataviewer.invalidDate);
                        }
                    }
                }));
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create drop-down for coded domain value
        * @param{object} coded domain values
        * @param{string} code of value
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDropDown: function (obj, code, key) {
            try {
                var codedValueOptions,
                    j,
                    value;
                if (code === "" || code === null) {
                    codedValueOptions = '<select class="esriCTCodedDomain" name="">displayValue';
                    codedValueOptions = codedValueOptions.replace("displayValue", '<option value=""></option>');
                } else {
                    codedValueOptions = '<select class="esriCTCodedDomain" name="' + obj.codedValues[0].code + '">displayValue';
                }
                for (j = 0; j < obj.codedValues.length; j++) {
                    value = obj.codedValues[j].code + "|" + key;
                    if (obj.codedValues[j].code === code) {
                        codedValueOptions = codedValueOptions.replace("displayValue", '<option value="' + value + '">' + obj.codedValues[j].name + '</option>');
                    } else {
                        codedValueOptions += '<option value="' + value + '">' + obj.codedValues[j].name + '</option>';
                    }
                }
                codedValueOptions += '</select>';
                return codedValueOptions;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create drop-down for coded domain value
        * @param{object} coded domain values
        * @param{string} code of value
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDependentDropDown: function (obj, code, key) {
            try {
                var dependentValueOptions,
                    j,
                    value;
                if (code === "" || code === null) {
                    dependentValueOptions = '<select class="esriCTCodedDomain" name="">displayValue';
                    dependentValueOptions = dependentValueOptions.replace("displayValue", '<option value=""></option>');
                } else {
                    dependentValueOptions = '<select class="esriCTCodedDomain" name="' + obj.types[0].id + '">displayValue';
                }
                for (j = 0; j < obj.types.length; j++) {
                    value = obj.types[j].id + "|" + key;
                    if (obj.types[j].id === code) {
                        dependentValueOptions = dependentValueOptions.replace("displayValue", '<option value="' + value + '">' + obj.types[j].name + '</option>');
                    } else {
                        dependentValueOptions += '<option value="' + value + '">' + obj.types[j].name + '</option>';
                    }
                }
                dependentValueOptions += '</select>';
                return dependentValueOptions;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create text input
        * @param{string} value of text-box
        * @param{string} field containing value
        * @param{string} containing int, float or string
        * @param{int} max length of characters in text-box
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createTextInput: function (value, key, type, length) {
            try {
                var maxLengthValue = null,
                    textInput,
                    textInputClass;
                if (!value) {
                    if (value !== 0) {
                        value = "";
                    }
                }
                if (type === "esriFieldTypeString") {
                    maxLengthValue = length;
                }
                textInputClass = "esriCTTextInput";
                textInput = '<input type="text" class="' + textInputClass + '" value="' + value + '" name="' + key + '" maxlength="' + maxLengthValue + '"></input>';
                return textInput;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to create date picker for date field
        * @param{int} date in epoch format
        * @param{string} format in which date needs to be displayed
        * @param{key} field having date value
        * @param{int} min date if any
        * @param{int} max date if any
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDatePicker: function (date, format, key, minValue, maxValue) {
            try {
                var datePickerString = '<div class="input-group date esriCTDateTimePicker">';
                datePickerString += '<input type="text" class="form-control esriCTDateInputField" name="' + key + "|" + date + "|" + format + "|" + minValue + "|" + maxValue + '"></input>';
                datePickerString += '<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>';
                datePickerString += '</div>';
                return datePickerString;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to highlight feature on row click.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _onRowClick: function () {
            try {
                $('#dataViewerTable tbody').on('click', 'tr', lang.hitch(this, function (evt) {
                    this._featureObjectID = this._fetchObjectID(evt.currentTarget);
                    if ((!this.isShowSelectedClicked) && (!this._isTextInputInFocus) && (!this._isDropDownClicked) && (!this._isDateTextInputInFocus)) {
                        if (this.isDetailsTabClicked) {
                            this.clearSelection();
                        }
                        $(evt.currentTarget).toggleClass('esriCTRowSelected');
                        if (domClass.contains(evt.currentTarget, "esriCTRowSelected")) {
                            this._removeControlsFromPreviousRow();
                            this._lastSelectedRow = evt;
                            // to highlighted feature on map
                            this._highLightFeatureOnRowClick(this._featureObjectID);
                        } else {
                            this._removeControlsFromPreviousRow();
                            // to remove highlighted feature from map
                            this._removeHighLightedFeatureOnRowClick(this._featureObjectID);
                        }
                    }
                }));
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to remove controls from the row when user clicks on other row or user de-selects it etc...
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeControlsFromPreviousRow: function () {
            try {
                var i, className, selectedIndex, value, date, dateFormat;
                if (this._lastSelectedRow) {
                    for (i = 1; i < this._lastSelectedRow.currentTarget.childNodes.length; i++) {
                        if (this._lastSelectedRow.currentTarget.childNodes[i].childNodes.length > 0) {
                            if (this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].className) {
                                className = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].className;
                                if (className.indexOf("esriCTTextInput") > -1) {
                                    value = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].value;
                                    this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = value;
                                } else if (className.indexOf("esriCTCodedDomain") > -1) {
                                    selectedIndex = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].selectedIndex;
                                    value = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0][selectedIndex];
                                    if (value) {
                                        this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = value.text;
                                    } else {
                                        this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = "";
                                    }
                                } else if (className.indexOf("esriCTDateTimePicker") > -1) {
                                    date = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].childNodes[0].name.split('|')[1];
                                    dateFormat = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].childNodes[0].name.split('|')[2];
                                    if (date === "null" || date === "") {
                                        this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = "";
                                    } else {
                                        date = parseInt(date, 10);
                                        this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = (moment(date)).format(dateFormat);
                                    }
                                }
                            }
                        }
                    }
                }
                this._lastSelectedRow = null;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to add controls to all the fields in row that are editable.
        * @param{object} feature details that needs to be edited
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addControlsToRow: function (featureSet) {
            try {
                var i, j, fieldName, format, type, length, value, dateFormat, isFieldEditable, number, k;
                for (i = 0; i < featureSet.features.length; i++) {
                    for (j = 0; j < this._displayColumn.length; j++) {
                        if (this._displayColumn[j].displayField) {
                            fieldName = this._displayColumn[j].fieldName;
                            format = this._displayColumn[j].format;
                            type = this._displayColumn[j].type;
                            length = this._displayColumn[j].length;
                            value = featureSet.features[i].attributes[fieldName];
                            dateFormat = dojo.applicationUtils.getDateFormat(format);
                            isFieldEditable = this._displayColumn[j].isFieldEditable;
                            switch (type) {
                            case "esriFieldTypeOID":
                                break;
                            case "esriFieldTypeDate":
                                // dislay date-picker if field has date value
                                if (this._displayColumn[j].domain && isFieldEditable) {
                                    if (value) {
                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDatePicker(value, dateFormat, fieldName, this._displayColumn[j].domain.minValue, this._displayColumn[j].domain.maxValue);
                                    } else {
                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDatePicker(null, dateFormat, fieldName, this._displayColumn[j].domain.minValue, this._displayColumn[j].domain.maxValue);
                                    }
                                } else {
                                    // if fields are editable than only add controls
                                    if (isFieldEditable) {
                                        if (value) {
                                            this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDatePicker(value, dateFormat, fieldName, null, null);
                                        } else {
                                            this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDatePicker(null, dateFormat, fieldName, null, null);
                                        }
                                    } else {
                                        if (value) {
                                            this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = (moment(value)).format(dateFormat);
                                        } else {
                                            this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = "";
                                        }
                                    }
                                }
                                break;
                            default:
                                // display drop-down if field has coded value
                                if (this._displayColumn[j].codedValues) {
                                    if (isFieldEditable) {
                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDropDown(this._displayColumn[j], value, fieldName);
                                    } else {
                                        for (k = 0; k < this._displayColumn[j].codedValues.length; k++) {
                                            if (this._displayColumn[j].codedValues[k].code === value) {
                                                this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._displayColumn[j].codedValues[k].name;
                                            }
                                        }
                                    }
                                } else if (this._displayColumn[j].types) {
                                    if (isFieldEditable) {
                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDependentDropDown(this._displayColumn[j], value, fieldName);
                                    } else {
                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = value;
                                    }
                                } else {
                                    if (this._displayColumn[j].numberFormat) {
                                        if (value || value === 0) {
                                            // if number has digit seperator
                                            if (this._displayColumn[j].numberFormat.digitSeparator) {
                                                number = value.toFixed(this._displayColumn[j].numberFormat.places);
                                                number = dojo.applicationUtils.convertNumberToThousandSeperator(number);
                                                if (isFieldEditable) {
                                                    this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createTextInput(number, fieldName, type, length);
                                                } else {
                                                    this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = number;
                                                }
                                            } else {
                                                if (isFieldEditable) {
                                                    this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createTextInput(value.toFixed(this._displayColumn[j].numberFormat.places), fieldName, type, length);
                                                } else {
                                                    this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = value.toFixed(this._displayColumn[j].numberFormat.places);
                                                }
                                            }
                                        } else {
                                            if (isFieldEditable) {
                                                this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createTextInput(value, fieldName, type, length);
                                            } else {
                                                this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = value;
                                            }
                                        }
                                    } else {
                                        // display text box for rest of fields
                                        if (isFieldEditable) {
                                            this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createTextInput(value, fieldName, type, length);
                                        } else {
                                            this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = value;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // convert to date-picker object with properties
                this._renderDateTimePicker();
                // attach events to controls for editing
                this._attachEventToControls();
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to fetch object id associated with each row.
        * @param{object} row of data-viewer table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _fetchObjectID: function (row) {
            try {
                var objectId;
                objectId = $('td', row).eq(0).text();
                return objectId;
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This funnction is used to remove highlighted feature from map.
        * @param{object} objectId of feature that needs to be removed
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeHighLightedFeatureOnRowClick: function (objectId) {
            try {
                var i, objectID, featureQuery;
                // if it is point feature than remove selected feature from graphics layer
                // if it is other than point feature than remove selected feature using selectFeatures method & FeatureLayer.SELECTION_SUBTRACT option
                if (this._isPointLayer) {
                    for (i = 0; i < this._dataViewerGraphicsLayer.graphics.length; i++) {
                        objectID = this._dataViewerGraphicsLayer.graphics[i].attributes.objectid || this._dataViewerGraphicsLayer.graphics[i].attributes.OBJECTID;
                        if (parseInt(objectID, 10) === parseInt(objectId, 10)) {
                            this._dataViewerGraphicsLayer.remove(this._dataViewerGraphicsLayer.graphics[i]);
                            break;
                        }
                    }
                } else {
                    featureQuery = new Query();
                    featureQuery.outSpatialReference = this.map.spatialReference;
                    featureQuery.objectIds = [parseInt(objectId, 10)];
                    featureQuery.returnGeometry = false;
                    this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_SUBTRACT);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to highlight feature.
        * @param{object} objectId of feature that needs to be high-lighted
        * @memberOf widgets/data-viewer/data-viewer
        */
        _highLightFeatureOnRowClick: function (objectId) {
            try {
                var featureQuery = new Query();
                featureQuery.outSpatialReference = this.map.spatialReference;
                featureQuery.objectIds = [parseInt(objectId, 10)];
                featureQuery.returnGeometry = true;
                this._selectedOperationalLayer.queryFeatures(featureQuery, lang.hitch(this, function (featureSet) {
                    // if it is point feature than add selected feature on graphics layer
                    // if it is other than point feature than select feature using selectFeatures method & FeatureLayer.SELECTION_ADD option
                    if (this._isPointLayer) {
                        this._dataViewerGraphicsLayer.add(this._getHighLightSymbol(featureSet.features[0]));
                    } else {
                        this._selectedOperationalLayer.setSelectionSymbol(this._getHighLightSymbol(featureSet.features[0]));
                        this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_ADD);
                    }
                    // if details tab is displayed than display fields of feature in it
                    if (this.isDetailsTabClicked) {
                        this._showFeatureDetails();
                    } else {
                        // used to add controls in row so that user can edit it
                        this._addControlsToRow(featureSet);
                    }
                }), function (err) {
                    dojo.applicationUtils.showError(err.message);
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to get symbol i.e, used for highlighting feature.
        * For point feature graphic layer is used to highlighting it. Because arcgis api do not have capability
        * of highlighting point symbol with cross-hair. Other than point geometry like polygon, polyline, etc...
        * selectFeatures method of feature layer is used which has the capability of highlighting it with cyan color
        * @param{object} selected feature which needs to be highlighted
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getHighLightSymbol: function (graphic) {
            try {
                var i, symbol, path, point, graphics, symbolWidth, symbolFillColor, height, width, size, isSymbolFound;
                isSymbolFound = false;
                switch (graphic.geometry.type) {
                case "point":
                    path = "M 1784,238 1805,238 1805,259 1784,259 1784,238 M 1777,248 1784,248 M 1794,231 1794,238 M 1812,248 1805,248 M 1794,266 1794,259";
                    symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_PATH, null, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), 4));
                    symbol.setPath(path);
                    symbol.setColor(null);
                    if (this._selectedOperationalLayer.renderer.symbol) {
                        isSymbolFound = true;
                        height = this._selectedOperationalLayer.renderer.symbol.height;
                        width = this._selectedOperationalLayer.renderer.symbol.width;
                        size = (height > width) ? height : width;
                        symbol.size = size + 20;
                    } else if ((this._selectedOperationalLayer.renderer.infos) && (this._selectedOperationalLayer.renderer.infos.length > 1)) {
                        for (i = 0; i < this._selectedOperationalLayer.renderer.infos.length; i++) {
                            if (graphic.attributes[this._selectedOperationalLayer.typeIdField] === parseInt(this._selectedOperationalLayer.renderer.infos[i].value, 10)) {
                                isSymbolFound = true;
                                height = this._selectedOperationalLayer.renderer.infos[i].symbol.height;
                                width = this._selectedOperationalLayer.renderer.infos[i].symbol.width;
                                // to display cross-hair properly around feature
                                size = (height > width) ? height : width;
                                symbol.size = size + 20;
                                break;
                            }
                        }
                        if (!isSymbolFound) {
                            isSymbolFound = true;
                            height = this._selectedOperationalLayer.renderer.defaultSymbol.height;
                            width = this._selectedOperationalLayer.renderer.defaultSymbol.width;
                            size = (height > width) ? height : width;
                            symbol.size = size + 20;
                        }
                    }
                    point = new Point(graphic.geometry.x, graphic.geometry.y, new SpatialReference({
                        wkid: graphic.geometry.spatialReference.wkid
                    }));
                    graphics = new Graphic(point, symbol, graphic.attributes);
                    return graphics;
                case "polyline":
                    if (this._selectedOperationalLayer.renderer.symbol) {
                        symbolWidth = this._selectedOperationalLayer.renderer.symbol.width;
                    } else if ((this._selectedOperationalLayer.renderer.infos) && (this._selectedOperationalLayer.renderer.infos.length > 1)) {
                        for (i = 0; i < this._selectedOperationalLayer.renderer.infos.length; i++) {
                            if (graphic.attributes[this._selectedOperationalLayer.typeIdField] === parseInt(this._selectedOperationalLayer.renderer.infos[i].value, 10)) {
                                symbolWidth = this._selectedOperationalLayer.renderer.infos[i].symbol.width;
                            }
                        }
                    }
                    symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), symbolWidth);
                    return symbol;
                case "polygon":
                    if (this._selectedOperationalLayer.renderer.symbol) {
                        symbolFillColor = this._selectedOperationalLayer.renderer.symbol.color;
                    } else if ((this._selectedOperationalLayer.renderer.infos) && (this._selectedOperationalLayer.renderer.infos.length > 1)) {
                        for (i = 0; i < this._selectedOperationalLayer.renderer.infos.length; i++) {
                            if (graphic.attributes[this._selectedOperationalLayer.typeIdField] === parseInt(this._selectedOperationalLayer.renderer.infos[i].value, 10)) {
                                symbolFillColor = this._selectedOperationalLayer.renderer.infos[i].symbol.color;
                            }
                        }
                    }
                    symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), 4), symbolFillColor);
                    return symbol;
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to validate & show fields of features in details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        showDetails: function () {
            this._validateDetailsData();
        },

        /**
        * This function is used to check single/mutliple selection of features before displaying details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        _validateDetailsData: function () {
            try {
                var selectedFeaturesLength;
                // if it is point feature than get selected feature length from graphics layer
                // if it is other than point feature get selected feature length from feature layer
                if (this._isPointLayer) {
                    selectedFeaturesLength = this._dataViewerGraphicsLayer.graphics.length;
                } else {
                    selectedFeaturesLength = this._selectedOperationalLayer.getSelectedFeatures().length;
                }
                // if only one record is selected than show details tab else display message
                if (selectedFeaturesLength === 1) {
                    this.showDetailsTab();
                    this.isDetailsTabClicked = true;
                    this._showFeatureDetails();
                    this._removeControlsFromPreviousRow();
                } else if (selectedFeaturesLength === 0) {
                    dojo.applicationUtils.showMessage(dojo.configData.i18n.dataviewer.singleFeatureSelection);
                } else {
                    dojo.applicationUtils.showMessage(dojo.configData.i18n.dataviewer.multipleFeatureSelection);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }

        },

        /**
        * This function is used to generate event to show details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        showDetailsTab: function () {
            return null;
        },

        /**
        * This function is used to generate event to show location tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        showLocationTab: function () {
            return null;
        },

        /**
        * This function is used to display fields of features in details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        _showFeatureDetails: function () {
            try {
                var graphic, parentDiv, fieldValue, key, obj, j, number, i, n;
                parentDiv = dom.byId("detailsContentDiv");
                parentDiv.innerHTML = "";
                if (this._isPointLayer) {
                    graphic = this._dataViewerGraphicsLayer.graphics[0];
                } else {
                    graphic = this._selectedOperationalLayer.getSelectedFeatures()[0];
                }
                for (i = 0; i < this._displayColumn.length; i++) {
                    obj = this._displayColumn[i];
                    key = this._displayColumn[i].fieldName;
                    if ((obj.displayField) && (obj.type !== "esriFieldTypeOID")) {
                        domConstruct.create("div", {
                            "innerHTML": obj.label,
                            "class": "esriCTDetailsFieldHeader"
                        }, parentDiv);
                        fieldValue = "";
                        switch (obj.type) {
                        case "esriFieldTypeDate":
                            if (graphic.attributes[key] && graphic.attributes[key] !== 0) {
                                fieldValue = (moment(graphic.attributes[key])).format(dojo.applicationUtils.getDateFormat(obj.format));
                            } else {
                                if (graphic.attributes[key] === 0) {
                                    fieldValue = "";
                                } else {
                                    fieldValue = graphic.attributes[key];
                                }
                            }
                            break;
                        default:
                            if (obj.codedValues) {
                                if (graphic.attributes[key] || graphic.attributes[key] === 0) {
                                    for (j = 0; j < obj.codedValues.length; j++) {
                                        if (obj.codedValues[j].code === graphic.attributes[key]) {
                                            fieldValue = obj.codedValues[j].name;
                                        }
                                    }
                                } else {
                                    fieldValue = graphic.attributes[key];
                                }
                            } else if (obj.types) {
                                if (graphic.attributes[key] || graphic.attributes[key] === 0) {
                                    for (n = 0; n < obj.types.length; n++) {
                                        if (obj.types[n].id === graphic.attributes[key]) {
                                            fieldValue = obj.types[n].name;
                                        }
                                    }
                                } else {
                                    fieldValue = graphic.attributes[key];
                                }
                            } else {
                                if (obj.numberFormat) {
                                    if ((graphic.attributes[key]) || (graphic.attributes[key] === 0)) {
                                        if (obj.numberFormat.digitSeparator) {
                                            number = graphic.attributes[key].toFixed(obj.numberFormat.places);
                                            number = dojo.applicationUtils.convertNumberToThousandSeperator(number);
                                            fieldValue = number;
                                        } else {
                                            fieldValue = graphic.attributes[key].toFixed(obj.numberFormat.places);
                                        }
                                    } else {
                                        fieldValue = graphic.attributes[key];
                                    }
                                } else {
                                    fieldValue = graphic.attributes[key];
                                }
                            }
                        }
                        if (!fieldValue || lang.trim(String(fieldValue)) === "") {
                            fieldValue = "<br/>";
                        }
                        domConstruct.create("div", {
                            "class": "esriCTDetailsFieldValue",
                            "innerHTML": fieldValue
                        }, parentDiv);
                    }
                }
                // if layer has attachments & also pop-up has info has attachment property as true
                if ((this._selectedOperationalLayer.hasAttachments) && (this.popupInfo.showAttachments)) {
                    this._showAttachments(graphic, parentDiv);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to show attachments if any
        * @memberOf widgets/data-viewer/data-viewer
        */
        _showAttachments: function (graphic, parentDiv) {
            try {
                var objectID, fieldContent, imageDiv, imageContent, imagePath, i;
                objectID = graphic.attributes.OBJECTID || graphic.attributes.objectid;
                this._selectedOperationalLayer.queryAttachmentInfos(objectID, lang.hitch(this, function (infos) {
                    // if attachments found
                    if (infos && infos.length > 0) {
                        domConstruct.create("div", {
                            "innerHTML": dojo.configData.i18n.dataviewer.photoAttachmentHeader,
                            "class": "esriCTDetailsFieldHeader"
                        }, parentDiv);
                        fieldContent = domConstruct.create("div", {
                            "class": "esriCTDetailsTabFieldValue row"
                        }, parentDiv);
                        // display all attached images in thumbnails
                        for (i = 0; i < infos.length; i++) {
                            imagePath = dojoConfig.baseURL + dojo.configData.noAttachmentIcon;
                            if (infos[i].contentType.indexOf("image") > -1) {
                                imagePath = infos[i].url;
                            }
                            imageContent = domConstruct.create("span", {
                                "class": "esriCTDetailsTabImgSpan col"
                            }, fieldContent);
                            domClass.add(imageContent, "esriCTImageLoader");
                            imageDiv = domConstruct.create("img", {
                                "alt": infos[i].url,
                                "class": "esriCTDetailsTabImg esriCTPointerCursor",
                                "src": imagePath
                            }, imageContent);
                            // Hide loader Image after image loaded
                            on(imageDiv, "load", lang.hitch(this, this._onImageLoad));
                            // Show image in new tab on click of the image thumbnail
                            on(imageDiv, "click", lang.hitch(this, this._showAttachements));
                        }
                    }
                }), function (err) {
                    dojo.applicationUtils.showError(err.message);
                });
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        },

        /**
        * This function is used to show attachments in new window when user clicks on the attachment thumbnail
        * @param{object} event argument
        * @memberOf widgets/data-viewer/data-viewer
        */
        _showAttachements: function (evt) {
            window.open(evt.target.alt);
        },

        /**
        * This function is used to notify that image is loaded
        * Hide the image loader once the image is loaded, and set the image dimensions so that complete image will be shown in thumbnail.
        * @param{object} event argument
        * @memberOf widgets/data-viewer/data-viewer
        */
        _onImageLoad: function (evt) {
            domClass.remove(evt.target.parentNode, "esriCTImageLoader");
            this._setImageDimensions(evt.target, true);
        },

        /**
        * This function is used to set the images dimensions so that the complete image will be shown in thumbnail
        * @param{object} imgModule - Image object
        * @param{Boolean} isOnLoad - set this flag this function is called after image load.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setImageDimensions: function (imgModule, isOnLoad) {
            var aspectRatio, newWidth, newHeight, imgWidth, imgContainer = imgModule.parentElement;
            if (isOnLoad && imgModule && imgModule.offsetHeight > 0) {
                //set original dimensions of image as it max dimensions.
                domAttr.set(imgModule, "originalWidth", imgModule.offsetWidth);
                domStyle.set(imgModule, "maxHeight", imgModule.offsetHeight + 'px');
                domStyle.set(imgModule, "maxWidth", imgModule.offsetWidth + 'px');
            }
            imgWidth = parseFloat(domAttr.get(imgModule, "originalWidth"));
            if ((imgContainer.offsetWidth > 0) && (imgContainer.offsetWidth < imgModule.offsetWidth || imgWidth > imgContainer.offsetWidth)) {
                //change dimensions of image if it is larger/smaller than its parent container.
                //calculate aspect ratio of image.
                aspectRatio = imgModule.offsetWidth / imgModule.offsetHeight;
                //calculate new dimensions according to aspect ratio of image.
                newWidth = imgContainer.offsetWidth - 2;
                newHeight = Math.floor(newWidth / aspectRatio);
                domClass.remove(imgModule, "esriAutoWidth");
                //set new dimensions to image.
                domStyle.set(imgModule, "width", newWidth + 'px');
                domStyle.set(imgModule, "height", newHeight + 'px');
            }
        }
    });
});