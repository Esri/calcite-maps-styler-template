/*global define,dojo,alert,moment,$,setTimeout */
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
    "dojo/dom-construct",
    "dojo/text!./templates/data-viewer.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/_base/lang",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/on",
    "esri/layers/GraphicsLayer",
    "esri/tasks/query",
    "esri/layers/FeatureLayer",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/Color",
    "esri/geometry/Point",
    "esri/SpatialReference",
    "esri/graphic",
    "esri/geometry/Polyline",
    "esri/geometry/Polygon",
    "esri/dijit/PopupTemplate",
    "esri/symbols/SimpleFillSymbol",
    "widgets/filter/filter",
    "dojo/dom-style",
    "dojo/query",
    "dojo/_base/array",
    "dojo/dom-geometry",
    "dojo/domReady!"
], function (
    declare,
    domConstruct,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    lang,
    domClass,
    domAttr,
    on,
    GraphicsLayer,
    Query,
    FeatureLayer,
    SimpleMarkerSymbol,
    SimpleLineSymbol,
    Color,
    Point,
    SpatialReference,
    Graphic,
    Polyline,
    Polygon,
    PopupTemplate,
    SimpleFillSymbol,
    Filter,
    domStyle,
    query,
    array,
    domGeom
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        _table: null, // to store data viewer table node
        _filterWidgetObj: null, // to store object of filter widget
        _selectedOperationalLayer: null, // store object of feature layer that is selected by user
        _selectRowGraphicsLayer: null, // store object of graphics layer needed for highlighting point feature
        _displayColumn: [], // store columns that needs to be displayed
        _isPointLayer: false, // keep track whether operational layer that is selected by user if of type point or polygon or polyline etc...
        _features: [], // store features that are selected
        _featureObjectID: null, // store objectid of feature selected
        _isRowFound: false, // keeps track whether row is available in grid when user selects feature from map
        _manualRefreshDataObj: {}, // keep the track of last sorting and the column number on which sorting performed
        _filterRefreshDataObj: {}, // keep the track of last horizontal position to regain data-viewer position after filter applied
        isEditMode: false,

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @memberOf widgets/data-viewer/details-helper
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        /**
        * This function is used to create UI for web map list.
        * @param{boolean} whether new operational layer is selected or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        startup: function (operationalLayerSelected) {
            this._createDataViewerUI(operationalLayerSelected);
        },

        /**
        * This function is used to create UI for Data Viewer.
        * @param{boolean} whether new operational layer is selected or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerUI: function (operationalLayerSelected) {
            domConstruct.empty(this.dataViewerContainer);
            // If a new operational layer is selected than reset panel & clear selected records etc...
            if (operationalLayerSelected) {
                this._selectedOperationalLayer = this.map.getLayer(this.selectedOperationalLayerID);
                // Add a graphic layer on a map which used in highlighting feature
                this._addDataViewerGraphicsLayer();
                // If selected operational exists.
                if (this._selectedOperationalLayer) {
                    // Determines whether the newly selected operational layer is a point layer or other geometry layer like polygon/polyline etc...
                    if (this._selectedOperationalLayer.graphics.length > 0) {
                        // If the layer has a point geometry.
                        if (this._selectedOperationalLayer.geometryType === "esriGeometryPoint") {
                            this._isPointLayer = true;
                        } else {
                            this._isPointLayer = false;
                        }
                    }
                }
            }
            // If selected operational exists.
            if (this._selectedOperationalLayer) {
                this._features = this._selectedOperationalLayer.graphics;
                // Display data-viewer if features are available in current map extent
                if (this._features.length > 0) {
                    this._createDataViewerPanel();
                } else {
                    if (this.appConfig.enableFilter) {
                        this._createDataViewerPanel();
                    } else {
                        // Display message if no feature is available in current map extent for display
                        domClass.remove(this.noFeatureDiv, "esriCTHidden");
                        domClass.add(this.dataViewerContainer, "esriCTHidden");
                        this.noFeatureDiv.innerHTML = this.appConfig.i18n.dataviewer.noIssuesReported;
                        this.appUtils.hideLoadingIndicator();
                    }
                }
            }
        },

        /**
        * This function is used to add graphic layer on map
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addDataViewerGraphicsLayer: function () {
            this._selectRowGraphicsLayer = this.map.getLayer("selectedRowGraphicsLayer");
            // if graphic layer is available than clear it else create it and add on map
            if (this._selectRowGraphicsLayer) {
                this._selectRowGraphicsLayer.clear();
            } else {
                this._selectRowGraphicsLayer = new GraphicsLayer({
                    "id": "selectedRowGraphicsLayer"
                });
                if (this.popupInfo) {
                    this._selectRowGraphicsLayer.setInfoTemplate(new PopupTemplate(this.popupInfo));
                }
                // Create and add a graphic layer on the map
                this.map.addLayer(this._selectRowGraphicsLayer);
            }
            this.attachEventToGraphicsLayer(this._selectRowGraphicsLayer);
        },

        /**
        * This function is used to attach events to the graphics layer
        * @param{object} graphics layer in which selected graphics are added
        * @memberOf widgets/data-viewer/data-viewer
        */
        attachEventToGraphicsLayer: function (graphicsLayer) {
            return graphicsLayer;
        },

        /**
        * This function is used to maintain array of column that needs to be displayed
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getFieldProperties: function () {
            var i, j, obj;
            this._displayColumn = [];
            // to fetch type from layer
            // to fetch label from popup info
            // to fetch editable status from popup info
            // to fetch date format from popup info
            for (i = 0; i < this.popupInfo.fieldInfos.length; i++) {
                for (j = 0; j < this._selectedOperationalLayer.fields.length; j++) {
                    if (this._selectedOperationalLayer.fields[j].name === this.popupInfo.fieldInfos[i].fieldName) {
                        // If fields are editable or visible than only display it.
                        if ((this.popupInfo.fieldInfos[i].visible) || (this.popupInfo
                                .fieldInfos[i].fieldName.toLowerCase() === this._selectedOperationalLayer
                                .objectIdField.toLowerCase()) || (this.popupInfo.fieldInfos[i].isEditable)) {
                            obj = {};
                            obj.type = this._selectedOperationalLayer.fields[j].type;
                            obj.displayField = true;
                            obj.label = this.popupInfo.fieldInfos[i].label || this.popupInfo
                                .fieldInfos[i].fieldName;
                            // Tracks whether a field is editable or not
                            if (this.popupInfo.fieldInfos[i].isEditable) {
                                obj.isFieldEditable = true;
                            } else {
                                obj.isFieldEditable = false;
                            }
                            // Tracks whether a date format is applied or not
                            if ((this.popupInfo.fieldInfos[i].format) && (this.popupInfo
                                    .fieldInfos[i].format.dateFormat)) {
                                obj.format = this.popupInfo.fieldInfos[i].format.dateFormat;
                            }
                            // Tracks whether a coded domain value is applied or not
                            if (this._selectedOperationalLayer.fields[j].domain) {
                                if (this._selectedOperationalLayer.fields[j].domain.codedValues) {
                                    obj.codedValues = this._selectedOperationalLayer.fields[j].domain.codedValues;
                                } else {
                                    obj.domain = this._selectedOperationalLayer.fields[j].domain;
                                }
                            }
                            // Tracks whether a number formatter is applied or not
                            if ((this.popupInfo.fieldInfos[i].format) && (this.popupInfo
                                    .fieldInfos[i].format.digitSeparator) && (this.popupInfo
                                    .fieldInfos[i].format.hasOwnProperty("places"))) {
                                // If places is applied to number formatter.
                                obj.numberFormat = this.popupInfo.fieldInfos[i].format;
                            }
                            obj.length = this._selectedOperationalLayer.fields[j].length;
                            obj.fieldName = this.popupInfo.fieldInfos[i].fieldName;
                            obj.nullable = this._selectedOperationalLayer.fields[j]
                                .nullable;
                            // Tracks whether a type is applied or not
                            if (this._selectedOperationalLayer.typeIdField === this.popupInfo.fieldInfos[i].fieldName) {
                                obj.types = this._selectedOperationalLayer.types;
                            }
                            if (this.popupInfo.fieldInfos[i].visible || this.popupInfo.fieldInfos[i].isEditable) {
                                obj.showInDetailsTab = true;
                            }
                            if ((this.popupInfo.fieldInfos[i].visible) && (this.popupInfo
                                    .fieldInfos[i].fieldName.toLowerCase() === this._selectedOperationalLayer
                                    .objectIdField.toLowerCase())) {
                                obj.showObjectIdField = true;
                            }
                            this._displayColumn.push(obj);
                        }
                    }
                }
            }
        },

        /**
        * This function is used to create panel of data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerPanel: function () {
            var i, colums;
            domClass.remove(this.dataViewerContainer, "esriCTHidden");
            this._createDataViewerHeaderPanel();
            this._createDataViewerDataPanel();
            this._bindTableSorterEvent();
            colums = query(".tableFloatingHeaderOriginal th", this._table);
            // loop through columns to create filter container for each table headers
            for (i = 0; i < colums.length; i++) {
                this._createHeaderOptionContainer(i);
            }
            this._bindDataViewerScrollEvent();
            // if last table sorting column number and sorting order is set before
            // manual refresh invoke the sorting function with the same parameters to sort them
            if (this.isManualRefreshedClicked) {
                if (this._manualRefreshDataObj && this._manualRefreshDataObj.columnNumber && this._manualRefreshDataObj.sortingOrder) {
                    this._sortByColoumn(this._manualRefreshDataObj.columnNumber, this._manualRefreshDataObj.sortingOrder);
                }
                // if last table vertical position captured before manual refresh invoke the scroll top
                // function to bring the focus of table at same position
                if (this._manualRefreshDataObj && this._manualRefreshDataObj.lastVerticalScrollPosition && (!this.updatedFeature)) {
                    this._scrollToActivatedFeature(0, true);
                }
            }
            // filter applied is applied on the layer and data-viewer refreshed
            if (this.isFilterRefreshClicked) {
                // if last horizontal position is set before filter is applied
                if (this._filterRefreshDataObj && this._filterRefreshDataObj.lastHorizontalScrollPosition !== "") {
                    this._scrollToActivatedFeature(0, false);
                }
            }
            this._highlightUpdatedFeature();
        },

        /**
        * highlight table row for the respective updated feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        _highlightUpdatedFeature: function () {
            if (this.updatedFeature) {
                this._selectFeatureOnMapClick({ graphic: this.updatedFeature });
            } else {
                this.isManualRefreshedClicked = false;
                this.isFilterRefreshClicked = false;
            }
        },

        /**
        * highlight table row for the last selected feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        highlightSelectedFeature: function (feature) {
            if (feature) {
                this._clearSelection();
                this._deselectTableRows();
                this._selectFeatureOnMapClick({ graphic: feature });
            }
        },

        /**
        * This function is used to create panel of data-viewer
        * @param{array} feature array
        * @param{string} Index number of OBJECT ID field in feature array
        * @memberOf widgets/data-viewer/data-viewer
        */
        _creatTableRows: function (entireFeatureDataArr, objectIdIndex) {
            var i, tr, tbody, j, td;
            // to create table headers
            tbody = domConstruct.create("tbody", {}, this._table);
            // if feature data array is found
            if (entireFeatureDataArr.length > 0) {
                // looping through the entire feature data array to create tr for the features
                for (i = 0; i < entireFeatureDataArr.length; i++) {
                    tr = domConstruct.create("tr", { "class": "esriCTPointerCursor" }, tbody);
                    // looping through the entire feature data array to create td of records for each columns
                    for (j = 0; j < entireFeatureDataArr[i].length; j++) {
                        domAttr.set(tr, "OBJID", entireFeatureDataArr[i][objectIdIndex]);
                        // if objectId field flag visible not true on pop up and this column is of object id fields
                        // then hide this column
                        if ((j === objectIdIndex) && (!this._displayColumn[j].showObjectIdField)) {
                            td = domConstruct.create("td", { "class": "esriCTHiddenColumn" });
                        } else {
                            td = domConstruct.create("td", { "class": "esriCTDataViewerTableCellContent" });
                        }
                        // if this field data is date field then create hidden span for the epoch date data else
                        // render field value as it is.
                        if (entireFeatureDataArr[i][j] && entireFeatureDataArr[i][j].formatedDate && entireFeatureDataArr[i][j].formatedDate !== "") {
                            domConstruct.create("span", { "class": "esriCTHiddenColumn", "innerHTML": entireFeatureDataArr[i][j].epoch }, td);
                            domConstruct.create("span", { "innerHTML": entireFeatureDataArr[i][j].formatedDate }, td);
                        } else {
                            td.innerHTML = entireFeatureDataArr[i][j] || "";
                        }
                        tr.appendChild(td);
                    }
                    this._onRowClick(tr);
                }
            }
            this.dataViewerContainer.appendChild(this._table);
            this.appUtils.hideLoadingIndicator();
        },

        /**
        * This function is used to create data that needs to be added in data-viewer table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerDataPanel: function () {
            var i, j, number, fieldName, format, type, value, dateValue, dateFormat, k,
                n, id, m, isCodeMatched, entireFeatureDataArr, dataSet, objectIdIndex;
            // Stores all rows
            entireFeatureDataArr = [];
            for (i = 0; i < this._features.length; i++) {
                // Stores single row
                dataSet = [];
                for (j = 0; j < this._displayColumn.length; j++) {
                    if (this._displayColumn[j].displayField) {
                        fieldName = this._displayColumn[j].fieldName;
                        format = this._displayColumn[j].format;
                        type = this._displayColumn[j].type;
                        value = this._features[i].attributes[fieldName];
                        dateFormat = this.appUtils.getDateFormat(format).dateFormat;
                        switch (type) {
                        case "esriFieldTypeOID":
                            dataSet.push(value);
                            objectIdIndex = j;
                            break;
                        case "esriFieldTypeDate":
                            dateValue = {};
                            // If the field contains date value
                            if (value && value !== 0) {
                                dateValue.epoch = value;
                                dateValue.formatedDate = (moment(value)).format(dateFormat);
                                dataSet.push(dateValue);
                            } else {
                                if (value === 0 || value === "" || value === null) {
                                    dataSet.push("");
                                } else {
                                    dateValue.epoch = value;
                                    dateValue.formatedDate = (moment(value)).format(dateFormat);
                                    dataSet.push(dateValue);
                                }
                            }
                            break;
                        default:
                            // If the field contains coded domain values
                            if (this._displayColumn[j].codedValues) {
                                // Tracks whether data is entered in the dataset or not.
                                // Whether value is matched or not it has to be entered in the dataset.
                                isCodeMatched = false;
                                if (value || value === 0) {
                                    for (k = 0; k < this._displayColumn[j].codedValues.length; k++) {
                                        if (this._displayColumn[j].codedValues[k].code === value) {
                                            isCodeMatched = true;
                                            dataSet.push(this._displayColumn[j].codedValues[k].name);
                                        }
                                    }
                                } else {
                                    isCodeMatched = true;
                                    dataSet.push(value);
                                }
                                if (!isCodeMatched) {
                                    dataSet.push(value);
                                }
                            } else if (this._displayColumn[j].types) {
                                // Tracks whether data is entered in the dataset or not.
                                // Whether value is matched or not it has to be entered in the dataset.
                                isCodeMatched = false;
                                // If the field contains types
                                if (value || value === 0) {
                                    for (n = 0; n < this._displayColumn[j].types.length; n++) {
                                        if (this._displayColumn[j].types[n].id.toString() === value.toString()) {
                                            isCodeMatched = true;
                                            dataSet.push(this._displayColumn[j].types[n].name);
                                        }
                                    }
                                } else {
                                    isCodeMatched = true;
                                    dataSet.push(value);
                                }
                                if (!isCodeMatched) {
                                    dataSet.push(value);
                                }
                            } else if (this._selectedOperationalLayer.types && this._selectedOperationalLayer.types.length > 0 && this._selectedOperationalLayer.types[0].domains && this._selectedOperationalLayer.types[0].domains[fieldName] && this._selectedOperationalLayer.types[0].domains[fieldName].codedValues) {
                                // If the fields contain subtypes
                                isCodeMatched = false;
                                id = this._features[i].attributes[this._selectedOperationalLayer.typeIdField];
                                for (m = 0; m < this._selectedOperationalLayer.types.length; m++) {
                                    if (this._selectedOperationalLayer.types[m].id === id) {
                                        for (n = 0; n < this._selectedOperationalLayer.types[m].domains[fieldName].codedValues.length; n++) {
                                            if (value === this._selectedOperationalLayer.types[m].domains[fieldName].codedValues[n].code) {
                                                isCodeMatched = true;
                                                if (value || value === 0) {
                                                    dataSet.push(this._selectedOperationalLayer.types[m].domains[fieldName].codedValues[n].name);
                                                } else {
                                                    dataSet.push(value);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (!isCodeMatched) {
                                    dataSet.push(value);
                                }
                            } else {
                                // If the fields contain number format
                                if (this._displayColumn[j].numberFormat) {
                                    if (value || value === 0) {
                                        if (this._displayColumn[j].numberFormat.digitSeparator) {
                                            number = this.appUtils.convertNumberToThousandSeperator(value, this._displayColumn[j].numberFormat.places);
                                            dataSet.push(number);
                                        } else {
                                            dataSet.push(value.toFixed(this._displayColumn[j].numberFormat.places));
                                        }
                                    } else {
                                        dataSet.push(value);
                                    }
                                } else {
                                    // If none of the above conditions are satisfied
                                    dataSet.push(value);
                                }
                            }
                        }
                    }
                }
                // Push single row in array
                entireFeatureDataArr.push(dataSet);
            }
            // Pass entire data for creation of a data-viewer table
            this._creatTableRows(entireFeatureDataArr, objectIdIndex);
        },

        /**
        * This function is used to create feature table header panel.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerHeaderPanel: function () {
            var columnHeader, thead, tr, i, theadClass, thTitleContainer, column, filterIcon, caretAndFilterIconContainer, sortingIconDiv, ascendingIconDiv, descendingIconDiv;
            domConstruct.empty(this.dataViewerContainer);
            this._table = domConstruct.create("table", { "class": "table table-striped table-bordered", "cellspacing": "0", "cellpadding": "0" }, this.dataViewerContainer);
            thead = domConstruct.create("thead", {}, this._table);
            tr = domConstruct.create("tr", {}, thead);
            // if length of feature array is greater than 0 then
            if ((this._features.length > 0) || ((this._features.length === 0) && (this.appConfig.enableFilter))) {
                this._getFieldProperties();
                // loop through the this._displayColumn array for creating header columns of table
                for (i = 0; i < this._displayColumn.length; i++) {
                    theadClass = this._createClassName(this._displayColumn[i].fieldName);
                    // if objectId field flag visible not true on pop up and this column is of object id fields
                    // then hide this column
                    if ((this._displayColumn[i].type === "esriFieldTypeOID") && (!this._displayColumn[i].showObjectIdField)) {
                        columnHeader = domConstruct.create("th", { "class": "esriCTHiddenColumn " + theadClass, "style": "min-width:300px;" });
                        domAttr.set(columnHeader, "colid", i);
                    } else {
                        columnHeader = domConstruct.create("th", { "class": "esriCTTableHeaderDiv " + theadClass, "style": "min-width:300px;" });
                        domAttr.set(columnHeader, "colid", i);
                    }
                    thTitleContainer = domConstruct.create("div", { "class": "esriCTThTitleContainer" }, columnHeader);
                    column = domConstruct.create("div", { "class": "esriCTTableHeader " + theadClass, "innerHTML": this._displayColumn[i].label }, thTitleContainer);
                    caretAndFilterIconContainer = domConstruct.create("div", { "class": "esriCTCaretFilterIconDiv" }, thTitleContainer);
                    sortingIconDiv = domConstruct.create("div", { "class": "esriCTBlackCaretIcon esriCTCaretIconParent " + theadClass }, caretAndFilterIconContainer);
                    ascendingIconDiv = domConstruct.create("div", { "class": "esriCTSortAscDisable esriCTBlackCaretIcon Ascending" + i }, sortingIconDiv);
                    descendingIconDiv = domConstruct.create("div", { "class": "esriCTSortDescDisable esriCTBlackCaretIcon Descending" + i }, sortingIconDiv);
                    filterIcon = domConstruct.create("div", { "class": "esriCTFilterIcon  esriCTSortDesc esriCTHiddenColumn " + theadClass }, caretAndFilterIconContainer);
                    tr.appendChild(columnHeader);
                    // To set filter or Caret icon on column header
                    this._toggleFilterCaretIcon(filterIcon, this._displayColumn[i].fieldName);
                    // Attach header click event
                    this._attachHeaderClickEvent(columnHeader, this._displayColumn[i].fieldName);
                }
            }
        },

        /**
        * This function set filter or Caret icon on column header
        * To show or hide filter container div for corresponding clicked header title
        * @memberOf widgets/data-viewer/data-viewer
        */
        _toggleFilterCaretIcon: function (filterIcon, columnClassName) {
            if (this.itemInfo && this.itemInfo.itemData && this.itemInfo.itemData.operationalLayers) {
                array.forEach(this.itemInfo.itemData.operationalLayers, lang.hitch(this, function (layer) {
                    if (this.selectedOperationalLayer.id === layer.id && layer.definitionEditor) {
                        array.forEach(layer.definitionEditor.inputs, lang.hitch(this, function (input, index) {
                            if (input.parameters[0].fieldName === columnClassName) {
                                if (filterIcon && domClass.contains(filterIcon, "esriCTHiddenColumn")) {
                                    domClass.remove(filterIcon, "esriCTHiddenColumn");
                                }
                                if ((this.appConfig && this.appConfig.enableFilter) || (this.appConfig._filterObject && this.appConfig._filterObject.inputs[index] && this.appConfig._filterObject.inputs[index].parameters[0].enableFilter)) {
                                    if (filterIcon && domClass.contains(filterIcon, "esriCTDisableFilterIcon")) {
                                        domClass.replace(filterIcon, "esriCTFilterIcon", "esriCTDisableFilterIcon");
                                    }
                                } else {
                                    if (filterIcon && domClass.contains(filterIcon, "esriCTFilterIcon")) {
                                        domClass.replace(filterIcon, "esriCTDisableFilterIcon", "esriCTFilterIcon");
                                    }
                                }
                            }
                        }));
                    }
                }));
            }
        },

        /**
        * This function is used attach click event on table header
        * To show or hide filter container div for corresponding clicked header title
        * @memberOf widgets/data-viewer/data-viewer
        */
        _attachHeaderClickEvent: function (header, headerTitle) {
            var currentChildNode, filterContainer, overlayContainer;
            // binding click event for filter container on table header
            this.own(on(header, "click", lang.hitch(this, function (event) {
                this.hideWebMapList();
                var headerCoordinates, xCoordinate, title, offsetLeft;
                array.some(event.currentTarget.attributes, lang.hitch(this, function (currentAttribute) {
                    if (currentAttribute.name === "colid") {
                        currentChildNode = $("[filterParentContainerColumnID=" + currentAttribute.value + "]")[0];
                        return true;
                    }
                }));
                if (domStyle.get(currentChildNode, "display") === "block") {
                    domStyle.set(currentChildNode, "display", "none");
                    this._filterWidgetObj._showAppliedFilterValue(headerTitle);
                } else {
                    $(".esriCTFilterParentContainer").css("display", "none");
                    this._filterWidgetObj._showAppliedFilterValue(headerTitle);
                    title = this._createClassName(headerTitle);
                    if (domClass.contains(header, title) && domStyle.get(currentChildNode, "display") !== "block") {
                        //set scroll left if filter container is not visible
                        headerCoordinates = domGeom.position(header, false);
                        if (headerCoordinates.x > 0) {
                            offsetLeft = this.dataViewerContainer.offsetWidth - headerCoordinates.x;
                            if (offsetLeft < header.offsetWidth) {
                                if (this.dataViewerContainer.scrollLeft > 0) {
                                    offsetLeft = this.dataViewerContainer.scrollLeft + (header.offsetWidth - offsetLeft);
                                } else {
                                    offsetLeft = header.offsetWidth - offsetLeft;
                                }
                                this.dataViewerContainer.scrollLeft = offsetLeft + 20;
                            }
                        } else {
                            this.dataViewerContainer.scrollLeft = this.dataViewerContainer.scrollLeft + headerCoordinates.x - 20;
                        }
                        setTimeout(lang.hitch(this, function () {
                            headerCoordinates = domGeom.position(header, false);
                            if (this.appConfig.i18n.direction === "ltr") {
                                xCoordinate = ((headerCoordinates.x + headerCoordinates.w) - 270);
                            } else {
                                xCoordinate = headerCoordinates.x + 20;
                            }
                            domStyle.set(currentChildNode, "left", parseInt(xCoordinate, 10) + "px");
                            domStyle.set(currentChildNode, "display", "block");
                            filterContainer = query(".esriCTFilterContainer", currentChildNode)[0];
                            overlayContainer = query(".esriCTDisableFilterContainer", currentChildNode)[0];
                            if (filterContainer && filterContainer.clientHeight && overlayContainer) {
                                domStyle.set(overlayContainer, "height", filterContainer.clientHeight + "px");
                            }
                        }), 50);
                    }
                    this._filterWidgetObj._handleFilterComponentVisibilty(currentChildNode, this._selectRowGraphicsLayer.graphics.length, this.isEditMode);
                }
            })));
        },

        /**
        * This function is used to display details panel
        * @memberOf widgets/data-viewer/data-viewer
        */
        showDetailsPanel: function (showDetailsPanelDataObj) {
            return showDetailsPanelDataObj;
        },

        /**
        * This function is used to create container for table header options
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createHeaderOptionContainer: function (i) {
            var filterParentContainer, ascFlagContainer, descFlagContainer, columnNumber;
            // Creating a div which contains 'Ascending' and 'Descending' flag titles div
            filterParentContainer = domConstruct.create("div", { "class": "esriCTFilterParentContainer" }, $("#filterContainerWrapper")[0]);
            domAttr.set(filterParentContainer, "filterParentContainerColumnID", i);
            // 'Ascending' flag title div
            ascFlagContainer = domConstruct.create("div", { "innerHTML": this.appConfig.i18n.dataviewer.ascendingFlagTitle, "class": "esriCTAscDescTitleDiv esriCTAsc" }, filterParentContainer);
            // 'Descending' flag title div
            descFlagContainer = domConstruct.create("div", { "innerHTML": this.appConfig.i18n.dataviewer.descendingFlagTitle, "class": "esriCTAscDescTitleDiv esriCTDesc" }, filterParentContainer);
            domAttr.set(ascFlagContainer, "colID", i);
            domAttr.set(descFlagContainer, "colID", i);

            // binding click event of table sorting in ascending order
            on(ascFlagContainer, "click", lang.hitch(this, function () {
                columnNumber = parseInt(domAttr.get(ascFlagContainer, "colID"), 10);
                this._sortByColoumn(columnNumber, "ASC");
            }));

            // binding click event of table sorting in descending order
            on(descFlagContainer, "click", lang.hitch(this, function () {
                columnNumber = parseInt(domAttr.get(descFlagContainer, "colID"), 10);
                this._sortByColoumn(columnNumber, "DESC");
            }));
            // creating Filter widget, only if the field contains 'ask for value' filter checked on the layer
            this._createFilterWidget(filterParentContainer, i, this._displayColumn[i].fieldName);
        },

        /**
        * This function will enable descending sort icon for current column id
        * Param{int} contains column id
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setAscIconEnable: function (columnNumber) {
            var columns, acsIconDivOriginal, descIconDivOriginal, acsIconDiv, descIconDiv, i;
            columns = query(".tableFloatingHeaderOriginal th", this._table);
            for (i = 0; i < columns.length; i++) {
                if (i !== columnNumber) {
                    acsIconDivOriginal = query(".esriCTBlackCaretIcon.Ascending" + i)[0];
                    descIconDivOriginal = query(".esriCTBlackCaretIcon.Descending" + i)[0];
                    acsIconDiv = query(".esriCTBlackCaretIcon.Ascending" + i)[1];
                    descIconDiv = query(".esriCTBlackCaretIcon.Descending" + i)[1];
                    this._resetSortingIcon(acsIconDivOriginal, descIconDivOriginal);
                    this._resetSortingIcon(acsIconDiv, descIconDiv);
                } else {
                    acsIconDivOriginal = query(".esriCTBlackCaretIcon.Ascending" + columnNumber)[0];
                    descIconDivOriginal = query(".esriCTBlackCaretIcon.Descending" + columnNumber)[0];
                    acsIconDiv = query(".esriCTBlackCaretIcon.Ascending" + columnNumber)[1];
                    descIconDiv = query(".esriCTBlackCaretIcon.Descending" + columnNumber)[1];
                    this._setAscSortingIcon(acsIconDivOriginal, descIconDivOriginal);
                    this._setAscSortingIcon(acsIconDiv, descIconDiv);
                }
            }
        },

        /**
        * This function will enable descending sort icon for current column id
        * Param{int} contains column id
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setDescIconEnable: function (columnNumber) {
            var columns, acsIconDivOriginal, descIconDivOriginal, acsIconDiv, descIconDiv, i;
            columns = query(".tableFloatingHeaderOriginal th", this._table);
            for (i = 0; i < columns.length; i++) {
                if (i !== columnNumber) {
                    acsIconDivOriginal = query(".esriCTBlackCaretIcon.Ascending" + i)[0];
                    descIconDivOriginal = query(".esriCTBlackCaretIcon.Descending" + i)[0];
                    acsIconDiv = query(".esriCTBlackCaretIcon.Ascending" + i)[1];
                    descIconDiv = query(".esriCTBlackCaretIcon.Descending" + i)[1];
                    this._resetSortingIcon(acsIconDivOriginal, descIconDivOriginal);
                    this._resetSortingIcon(acsIconDiv, descIconDiv);
                } else {
                    acsIconDivOriginal = query(".esriCTBlackCaretIcon.Ascending" + columnNumber)[0];
                    descIconDivOriginal = query(".esriCTBlackCaretIcon.Descending" + columnNumber)[0];
                    acsIconDiv = query(".esriCTBlackCaretIcon.Ascending" + columnNumber)[1];
                    descIconDiv = query(".esriCTBlackCaretIcon.Descending" + columnNumber)[1];
                    this._setDescSortingIcon(acsIconDivOriginal, descIconDivOriginal);
                    this._setDescSortingIcon(acsIconDiv, descIconDiv);
                }
            }
        },

        /**
        * This function will reset sort icons
        * Param{node} contains asc icon node
        * Param{node} contains desc icon node
        * @memberOf widgets/data-viewer/data-viewer
        */
        _resetSortingIcon: function (acsIconDiv, descIconDiv) {
            if (acsIconDiv && domClass.contains(acsIconDiv, "esriCTSortAsc")) {
                domClass.replace(acsIconDiv, "esriCTSortAscDisable", "esriCTSortAsc");
            }
            if (descIconDiv && domClass.contains(descIconDiv, "esriCTSortDesc")) {
                domClass.replace(descIconDiv, "esriCTSortDescDisable", "esriCTSortDesc");
            }
            if (acsIconDiv && domClass.contains(acsIconDiv, "esriCTVisibilityHidden")) {
                domClass.remove(acsIconDiv, "esriCTVisibilityHidden");
            }
            if (descIconDiv && domClass.contains(descIconDiv, "esriCTVisibilityHidden")) {
                domClass.remove(descIconDiv, "esriCTVisibilityHidden");
            }
        },

        /**
        * This function will enable ascending sort icon for current column id
        * Param{node} contains asc icon node
        * Param{node} contains desc icon node
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setAscSortingIcon: function (acsIconDiv, descIconDiv) {
            if (acsIconDiv && domClass.contains(acsIconDiv, "esriCTSortAscDisable")) {
                domClass.replace(acsIconDiv, "esriCTSortAsc", "esriCTSortAscDisable");
            }
            if (acsIconDiv && domClass.contains(acsIconDiv, "esriCTVisibilityHidden")) {
                domClass.remove(acsIconDiv, "esriCTVisibilityHidden");
            }
            if (descIconDiv && domClass.contains(descIconDiv, "esriCTSortDesc")) {
                domClass.replace(descIconDiv, "esriCTSortDescDisable", "esriCTSortDesc");
            }
            if (descIconDiv && !domClass.contains(descIconDiv, "esriCTVisibilityHidden")) {
                domClass.add(descIconDiv, "esriCTVisibilityHidden");
            }
        },

        /**
        * This function will enable descending sort icon for current column id
        * Param{node} contains asc icon node
        * Param{node} contains desc icon node
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setDescSortingIcon: function (acsIconDiv, descIconDiv) {
            if (domClass.contains(acsIconDiv, "esriCTSortAsc")) {
                domClass.replace(acsIconDiv, "esriCTSortAscDisable", "esriCTSortAsc");
            }
            if (acsIconDiv && !domClass.contains(acsIconDiv, "esriCTVisibilityHidden")) {
                domClass.add(acsIconDiv, "esriCTVisibilityHidden");
            }
            if (domClass.contains(descIconDiv, "esriCTSortDescDisable")) {
                domClass.replace(descIconDiv, "esriCTSortDesc", "esriCTSortDescDisable");
            }
            if (descIconDiv && domClass.contains(descIconDiv, "esriCTVisibilityHidden")) {
                domClass.remove(descIconDiv, "esriCTVisibilityHidden");
            }
        },

        /**
        * This function is used to create filter widget
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createFilterWidget: function (filterParentContainer, index, label) {
            var filterParameters;
            // filter widget parameters
            filterParameters = {
                "appConfig": this.appConfig,
                "appUtils": this.appUtils,
                "filterParentContainer": filterParentContainer,
                "index": index,
                "itemInfo": this.itemInfo,
                "displayColumn": label,
                "selectedOperationalLayerID": this.selectedOperationalLayerID,
                "selectedOperationalLayer": this.selectedOperationalLayer
            };
            // Instantiating filter object for the fields configured with 'ask for value'
            this._filterWidgetObj = new Filter(filterParameters, domConstruct.create("div", {}, filterParentContainer));
            // creating UI Filters, only if the field contains 'ask for value' filters checked for the layer
            this._filterWidgetObj.startup();
            this._filterWidgetObj.filterRefresh = lang.hitch(this, function () {
                this.storeDataForFilterRefresh();
            });
        },

        /**
        * This function will
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createClassName: function (className) {
            return className.split(" ").join("");
        },

        /**
        * This function will instantiate table sorter
        * @memberOf widgets/data-viewer/data-viewer
        */
        _bindTableSorterEvent: function () {
            $(this._table).tablesorter({
                headers: {
                    // disable default sorting event on table header click
                    'table thead th': {
                        // disable it by setting the property sorter to false
                        sorter: false
                    }
                }
            });
            $("table").stickyTableHeaders({ container: ".esriCTDataViewerContainer" });
        },

        /**
        * This function binds events to sort the table in ascending or
        * descending order on column wise
        * @memberOf widgets/data-viewer/data-viewer
        */
        _sortByColoumn: function (columnNumber, sortingOrder) {
            // if the sorting flag is set as "ASC" the sort in ascending order
            // otherwise sort in descending order
            if (sortingOrder === "ASC") {
                this._manualRefreshDataObj.sortingOrder = "ASC";
                this._setAscIconEnable(columnNumber);
                $('table').trigger('sorton', [[[columnNumber, 0]]]);
            } else {
                this._manualRefreshDataObj.sortingOrder = "DESC";
                this._setDescIconEnable(columnNumber);
                $('table').trigger('sorton', [[[columnNumber, 1]]]);
            }
            this._manualRefreshDataObj.columnNumber = columnNumber;
            this._scrollToActivatedFeature(0, false);
            this._hideFilterContainer();
        },

        /**
        * This function is used to highlight feature on row click.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _onRowClick: function (tr) {
            // click event binded on table rows for feature selection
            on(tr, "click", lang.hitch(this, function (evt) {
                this.hideWebMapList();
                this._hideFilterContainer();
                this.appUtils.showLoadingIndicator();
                this._featureObjectID = parseInt(domAttr.get(evt.currentTarget, "OBJID"), 10);
                this._highLightFeatureOnRowClick(this._featureObjectID, evt);
            }));
        },

        /**
        * This function will clear selected faetures
        * @memberOf widgets/data-viewer/data-viewer
        */
        _clearSelection: function () {
            this._selectRowGraphicsLayer.clear();
        },

        /**
        * This function de select the selected rows
        * @memberOf widgets/data-viewer/data-viewer
        */
        _deselectTableRows: function () {
            var selectedRow;
            selectedRow = query(".esriCTRowHighlighted", this._table);
            // querying and looping through all the highlighted rows for de selecting if already selected
            array.forEach(selectedRow, lang.hitch(this, function (key) {
                domClass.remove(key, "esriCTRowHighlighted");
            }));
        },

        /**
        * This function is used attach click event to features
        * @memberOf widgets/data-viewer/data-viewer
        */
        onFeatureClick: function (evt) {
            this.appUtils.showLoadingIndicator();
            this._hideFilterContainer();
            this._selectFeatureOnMapClick(evt);
        },

        /**
        * This function is used to select feature on map
        * @param{object} feature that needs to be selected
        * @memberOf widgets/data-viewer/data-viewer
        */
        _selectFeatureOnMapClick: function (evt) {
            var objectId, featureQuery, featureLayer, feature, ctrlFlag = false, selectFlag, definitionExpression;
            featureQuery = new Query();
            feature = evt.graphic;
            objectId = feature.attributes[this._selectedOperationalLayer.objectIdField];
            featureQuery.objectIds = [parseInt(objectId, 10)];
            featureQuery.outSpatialReference = this.map.spatialReference;
            featureQuery.returnGeometry = true;
            featureQuery.outFields = ["*"];
            // Consider if feature is selected & updated with certain value.
            // Now if user selects same feature from the map and pans the map. Since we retain the selected features in the grid.
            // So to maintain updated value of the selected feature, a new object of the feature layer is required.
            // If a new object is not created than the previous value of feature appears and not the updated one.
            featureLayer = new FeatureLayer(this._selectedOperationalLayer.url);
            definitionExpression = this._selectedOperationalLayer.getDefinitionExpression();
            if (definitionExpression) {
                featureLayer.setDefinitionExpression(definitionExpression);
            }
            if (this.popupInfo) {
                featureLayer.setInfoTemplate(new PopupTemplate(this.popupInfo));
            }
            featureLayer.queryFeatures(featureQuery, lang.hitch(this, function (featureSet) {

                this._getSelectedLayerOnTop();
                // if ctrl key is pressed for multiple feature selection
                // then set ctrlFlag to true else keep it as false
                if (!evt.ctrlKey) {
                    this._clearSelection();
                } else {
                    ctrlFlag = true;
                }

                if (this.updatedfeature) {
                    this.updatedfeature = null;
                }

                if (this.isManualRefreshedClicked) {
                    this.isManualRefreshedClicked = false;
                    selectFlag = this._selectRowOnFeatureClick(objectId, false, ctrlFlag);
                } else {
                    selectFlag = this._selectRowOnFeatureClick(objectId, true, ctrlFlag);
                }

                if (featureSet.features && featureSet.features.length > 0) {
                    // feature is selected on table row click
                    if (selectFlag) {
                        // if feature geometry found them show selected feature on map else
                        // show error message
                        if (featureSet.features[0].geometry) {
                            this._selectRowGraphicsLayer.add(this._getHighLightSymbol(featureSet.features[0], false));
                        } else {
                            this._selectRowGraphicsLayer.add(featureSet.features[0]);
                            this.appUtils.showMessage(this.appConfig.i18n.dataviewer.noFeatureGeometry);
                        }
                    }
                }
                //open details panel with feature information
                var showDetailsPanelDataObj = {};
                showDetailsPanelDataObj.singleFeature = featureSet;
                showDetailsPanelDataObj.multipleFeature = this._selectRowGraphicsLayer.graphics;
                this.showDetailsPanel(showDetailsPanelDataObj);
                this.appUtils.hideLoadingIndicator();
            }), lang.hitch(this, function () {
                this.appUtils.hideLoadingIndicator();
            }));
        },

        /**
        * This function is used to highlight feature.
        * @param{object} objectId of feature that needs to be high-lighted
        * @memberOf widgets/data-viewer/data-viewer
        */
        _highLightFeatureOnRowClick: function (objectId, evt) {
            var featureQuery, featureLayer, ctrlFlag = false, selectFlag, definitionExpression;
            featureQuery = new Query();
            featureQuery.outSpatialReference = this.map.spatialReference;
            featureQuery.objectIds = [parseInt(objectId, 10)];
            featureQuery.returnGeometry = true;
            featureQuery.outFields = ["*"];
            // Consider if feature is selected & updated with certain value.
            // Now if user selects same feature from the grid and pans the map. Since we retain the selected features in the grid.
            // So to maintain updated value of the selected feature, a new object of the feature layer is required.
            // If a new object is not created than the previous value of feature appears and not the updated one.
            featureLayer = new FeatureLayer(this._selectedOperationalLayer.url);
            definitionExpression = this._selectedOperationalLayer.getDefinitionExpression();
            if (definitionExpression) {
                featureLayer.setDefinitionExpression(definitionExpression);
            }
            if (this.popupInfo) {
                featureLayer.setInfoTemplate(new PopupTemplate(this.popupInfo));
            }
            featureLayer.queryFeatures(featureQuery, lang.hitch(this,
                function (featureSet) {
                    this._getSelectedLayerOnTop();
                    // if ctrl key is pressed for multiple feature selection
                    // then set ctrlFlag to true else keep it as false
                    if (!evt.ctrlKey) {
                        this._clearSelection();
                    } else {
                        ctrlFlag = true;
                    }
                    selectFlag = this._selectRowOnFeatureClick(objectId, false, ctrlFlag);
                    if (featureSet.features && featureSet.features.length > 0) {
                        // feature is selected on table row click
                        if (selectFlag) {
                            // if feature geometry found them show selected feature on map else
                            // show error message
                            if (featureSet.features[0] && featureSet.features[0].geometry) {
                                this._selectRowGraphicsLayer.add(this._getHighLightSymbol(featureSet.features[0]));
                            } else {
                                this._selectRowGraphicsLayer.add(featureSet.features[0]);
                                this.appUtils.showMessage(this.appConfig.i18n.dataviewer.noFeatureGeometry);
                            }
                        }
                        // if single feature selection event occurs
                        if (!ctrlFlag && featureSet.features[0].geometry) {
                            if (this._isPointLayer) {
                                this.map.setLevel(this.appConfig.zoomLevel);
                                this.map.centerAt(featureSet.features[0].geometry);
                            } else {
                                this.map.setExtent(featureSet.features[0].geometry.getExtent(), true);
                            }
                        }
                    }
                    //open details panel with feature information
                    var showDetailsPanelDataObj = {};
                    showDetailsPanelDataObj.singleFeature = featureSet;
                    showDetailsPanelDataObj.multipleFeature = this._selectRowGraphicsLayer.graphics;
                    this.showDetailsPanel(showDetailsPanelDataObj);
                    this.appUtils.hideLoadingIndicator();
                }), lang.hitch(this, function () { this.appUtils.hideLoadingIndicator(); }));
        },

        /**
        * This function is used to highlight feature.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _selectRowOnFeatureClick: function (objectId, selectRow, ctrlFlag) { //ignore jslint
            var i, selectedRowObjID, rowNumber, isRowSelected = false;
            this._isRowFound = false;
            if (this._table && this._table.rows && this._table.rows.length > 1) {
                for (i = 0; i < this._table.rows.length; i++) {
                    selectedRowObjID = parseInt(domAttr.get(this._table.rows[i], "OBJID"), 10);
                    if (objectId === selectedRowObjID) {
                        this._isRowFound = true;
                        rowNumber = i;
                        if (domClass.contains(this._table.rows[i], "esriCTRowHighlighted")) {
                            if (ctrlFlag) {
                                this._removeHighLightedFeatureOnRowClick(objectId);
                                domClass.remove(this._table.rows[i], "esriCTRowHighlighted");
                                isRowSelected = false;
                            } else {
                                if (query(".esriCTRowHighlighted", this._table).length > 1) {
                                    this._clearSelection();
                                    this._deselectTableRows();
                                    domClass.add(this._table.rows[i], "esriCTRowHighlighted");
                                    isRowSelected = true;
                                } else {
                                    this._clearSelection();
                                    this._deselectTableRows();
                                    domClass.remove(this._table.rows[i], "esriCTRowHighlighted");
                                    isRowSelected = false;
                                }
                            }
                        } else {
                            if (ctrlFlag) {
                                domClass.add(this._table.rows[i], "esriCTRowHighlighted");
                                isRowSelected = true;
                            } else {
                                this._clearSelection();
                                this._deselectTableRows();
                                domClass.add(this._table.rows[i], "esriCTRowHighlighted");
                                isRowSelected = true;
                            }
                        }
                        break;
                    }
                }
                this.appUtils.hideLoadingIndicator();
            }
            if (this._isRowFound && selectRow) {
                this._scrollToActivatedFeature(rowNumber);
            } else {
                if (this._isRowFound) {
                    this.appUtils.hideLoadingIndicator();
                }
            }
            return isRowSelected;
        },

        /**
        * This function is used to remove highlighted feature from map.
        * @param{object} objectId of feature that needs to be removed
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeHighLightedFeatureOnRowClick: function (objectId) {
            var i, objectID;
            for (i = 0; i < this._selectRowGraphicsLayer.graphics.length; i++) {
                objectID = this._selectRowGraphicsLayer.graphics[i].attributes[this._selectedOperationalLayer.objectIdField];
                if (parseInt(objectID, 10) === parseInt(objectId, 10)) {
                    this._selectRowGraphicsLayer.remove(this._selectRowGraphicsLayer
                            .graphics[i]);
                    break;
                }
            }
        },

        /**
        * This function is used to scroll data-viewer to selected feature row
        * @param{integer} row number of data-viewer grid
        * @memberOf widgets/data-viewer/data-viewer
        */
        _scrollToActivatedFeature: function (rowNumber, manualRefreshScroll) {
            var scrollTopValue, scrollLeftValue;
            $('.esriCTDataViewerContainer').animate({
                scrollTop: 0
            }, 0);
            if ($('.esriCTDataViewerContainer tr:eq(' + rowNumber + ')').offset() && $('.esriCTDataViewerContainer tr:eq(' + rowNumber + ')').offset().top) {
                // if last vertical scroll position is set before manual refresh then set scroll
                // position same as it was earlier else set the scroll top to the selected row
                if (this._manualRefreshDataObj && this._manualRefreshDataObj.lastVerticalScrollPosition && manualRefreshScroll) {
                    scrollTopValue = this._manualRefreshDataObj.lastVerticalScrollPosition;
                } else {
                    // Get row position by index
                    scrollTopValue = $('.esriCTDataViewerContainer tr:eq(' + rowNumber + ')').offset().top;
                    scrollTopValue = scrollTopValue - 150;
                }
                // if last horizontal scroll position is set before filter applied then set scroll
                // position same as it was earlier else set the scroll to left 0
                if (this._filterRefreshDataObj && this._filterRefreshDataObj.lastHorizontalScrollPosition !== "" && this.isFilterRefreshClicked) {
                    scrollLeftValue = this._filterRefreshDataObj.lastHorizontalScrollPosition;
                    this.isFilterRefreshClicked = false;
                }

                $('.esriCTDataViewerContainer').animate({
                    scrollTop: $('.esriCTDataViewerContainer').scrollTop() + scrollTopValue,
                    scrollLeft: scrollLeftValue
                }, 400);
            }
            this.appUtils.hideLoadingIndicator();
        },

        /**
        * This function is used to get selected layer on top
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getSelectedLayerOnTop: function () {
            this.map.reorderLayer(this.map.getLayer("selectedRowGraphicsLayer"), 1000);
        },

        /**
        * This function is used to get symbol i.e, used for highlighting feature.
        * For point feature graphic layer is used to highlighting it. Because arcgis api do not have capability
        * of highlighting point symbol with cross-hair. Other than point geometry like polygon, polyline, etc...
        * selectFeatures method of feature layer is used which has the capability of highlighting it with cyan color
        * @param{object} selected feature which needs to be highlighted
        * @param{boolean} whether feature is to be selected/activated
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getHighLightSymbol: function (graphic) {
            // If feature geometry is of type point, add a crosshair symbol
            // If feature geometry is of type polyline, highlight the line
            // If feature geometry is of type polygon, highlight the boundary of the polygon
            switch (graphic.geometry.type) {
            case "point":
                return this._getPointSymbol(graphic);
            case "polyline":
                return this._getPolyLineSymbol(graphic);
            case "polygon":
                return this._getPolygonSymbol(graphic);
            }
        },

        /**
        * This function is used to get symbol for point geometry
        * @param{object} selected feature which needs to be highlighted
        * @param{boolean} whether feature is to be selected/activated
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getPointSymbol: function (graphic) {
            var symbol, isSymbolFound, graphics, point, graphicInfoValue, layerInfoValue, i;
            isSymbolFound = false;
            symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, null, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), 3));
            symbol.setColor(null);
            symbol.size = 30; //set default Symbol size which will be used in case symbol not found.
            //check if layer is valid and have valid renderer object then only check for other symbol properties
            if (this._selectedOperationalLayer && this._selectedOperationalLayer.renderer) {
                if (this._selectedOperationalLayer.renderer.symbol) {
                    isSymbolFound = true;
                    symbol = this._updatePointSymbolProperties(symbol, this._selectedOperationalLayer.renderer.symbol);
                } else if (this._selectedOperationalLayer.renderer.infos && (this._selectedOperationalLayer.renderer.infos.length > 0)) {
                    for (i = 0; i < this._selectedOperationalLayer.renderer.infos.length; i++) {
                        if (this._selectedOperationalLayer.typeIdField) {
                            graphicInfoValue = graphic.attributes[this._selectedOperationalLayer.typeIdField];
                        } else if (this._selectedOperationalLayer.renderer.attributeField) {
                            graphicInfoValue = graphic.attributes[this._selectedOperationalLayer.renderer.attributeField];
                        }
                        layerInfoValue = this._selectedOperationalLayer.renderer.infos[i].value;
                        // To get properties of symbol when infos contains other than class break renderer.
                        if (graphicInfoValue !== undefined && graphicInfoValue !== null && graphicInfoValue !== "" && layerInfoValue !== undefined && layerInfoValue !== null && layerInfoValue !== "") {
                            if (graphicInfoValue.toString() === layerInfoValue.toString()) {
                                isSymbolFound = true;
                                symbol = this._updatePointSymbolProperties(symbol, this._selectedOperationalLayer.renderer.infos[i].symbol);
                            }
                        }
                    }
                    if (!isSymbolFound) {
                        if (this._selectedOperationalLayer.renderer.defaultSymbol) {
                            isSymbolFound = true;
                            symbol = this._updatePointSymbolProperties(symbol, this._selectedOperationalLayer.renderer.defaultSymbol);
                        }
                    }
                }
            }
            point = new Point(graphic.geometry.x, graphic.geometry.y, new SpatialReference({
                wkid: graphic.geometry.spatialReference.wkid
            }));
            graphics = new Graphic(point, symbol, graphic.attributes);
            return graphics;
        },

        /**
        * This function is used to get symbol for polyline geometry
        * @param{object} selected feature which needs to be highlighted
        * @param{boolean} whether feature is to be selected/activated
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getPolyLineSymbol: function (graphic) {
            var symbol, graphics, polyline, symbolWidth, graphicInfoValue, layerInfoValue, i;
            symbolWidth = 5; // default line width
            //check if layer is valid and have valid renderer object then only check for other  symbol properties
            if (this._selectedOperationalLayer && this._selectedOperationalLayer.renderer) {
                if (this._selectedOperationalLayer.renderer.symbol && this._selectedOperationalLayer.renderer.symbol.hasOwnProperty("width")) {
                    symbolWidth = this._selectedOperationalLayer.renderer.symbol.width;
                } else if ((this._selectedOperationalLayer.renderer.infos) && (this._selectedOperationalLayer.renderer.infos.length > 0)) {
                    for (i = 0; i < this._selectedOperationalLayer.renderer.infos.length; i++) {
                        if (this._selectedOperationalLayer.typeIdField) {
                            graphicInfoValue = graphic.attributes[this._selectedOperationalLayer.typeIdField];
                        } else if (this._selectedOperationalLayer.renderer.attributeField) {
                            graphicInfoValue = graphic.attributes[this._selectedOperationalLayer.renderer.attributeField];
                        }
                        layerInfoValue = this._selectedOperationalLayer.renderer.infos[i].value;
                        // To get properties of symbol when infos contains other than class break renderer.
                        if (graphicInfoValue !== undefined && graphicInfoValue !== null && graphicInfoValue !== "" && layerInfoValue !== undefined && layerInfoValue !== null && layerInfoValue !== "") {
                            if (graphicInfoValue.toString() === layerInfoValue.toString() && this._selectedOperationalLayer.renderer.infos[i].symbol.hasOwnProperty("width")) {
                                symbolWidth = this._selectedOperationalLayer.renderer.infos[i].symbol.width;
                            }
                        }
                    }
                } else if (this._selectedOperationalLayer.renderer.defaultSymbol && this._selectedOperationalLayer.renderer.defaultSymbol.hasOwnProperty("width")) {
                    symbolWidth = this._selectedOperationalLayer.renderer.defaultSymbol.width;
                }
            }
            symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), symbolWidth);

            polyline = new Polyline(new SpatialReference({
                wkid: graphic.geometry.spatialReference.wkid
            }));
            if (graphic.geometry.paths && graphic.geometry.paths.length > 0) {
                polyline.addPath(graphic.geometry.paths[0]);
            }
            graphics = new Graphic(polyline, symbol, graphic.attributes);
            return graphics;
        },

        /**
        * This function is used to get symbol for polygon geometry
        * @param{object} selected feature which needs to be highlighted
        * @param{boolean} whether feature is to be selected/activated
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getPolygonSymbol: function (graphic) {
            var symbol, graphics, polygon;
            symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), 4), new Color([0, 0, 0, 0]));
            polygon = new Polygon(new SpatialReference({
                wkid: graphic.geometry.spatialReference.wkid
            }));
            if (graphic.geometry.rings) {
                polygon.rings = lang.clone(graphic.geometry.rings);
            }
            graphics = new Graphic(polygon, symbol, graphic.attributes);
            return graphics;
        },

        /**
        * This function is used to update symbol properties
        * @param{object} symbol that needs to be assigned to selected/activated feature
        * @param{object} renderer layer Symbol
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updatePointSymbolProperties: function (symbol, layerSymbol) {
            var height, width, size;
            if (layerSymbol.hasOwnProperty("height") && layerSymbol.hasOwnProperty("width")) {
                height = layerSymbol.height;
                width = layerSymbol.width;
                // To display cross hair properly around feature its size needs to be calculated
                size = (height > width) ? height : width;
                size = size + 10;
                symbol.size = size;
            }
            if (layerSymbol.hasOwnProperty("size")) {
                if (!size || size < layerSymbol.size) {
                    symbol.size = layerSymbol.size + 10;
                }
            }
            if (layerSymbol.hasOwnProperty("xoffset")) {
                symbol.xoffset = layerSymbol.xoffset;
            }
            if (layerSymbol.hasOwnProperty("yoffset")) {
                symbol.yoffset = layerSymbol.yoffset;
            }
            return symbol;
        },

        /**
        * This function is used to hide webmap list
        * @memberOf widgets/data-viewer/data-viewer
        */
        hideWebMapList: function () {
            return;
        },

        /**
        * This function is used to store data needed to retain when user does manual refresh
        * @memberOf widgets/data-viewer/data-viewer
        */
        storeDataForManualRefresh: function () {
            var manualRefreshDataObj = {};
            manualRefreshDataObj.lastVerticalScrollPosition = (this._manualRefreshDataObj && this._manualRefreshDataObj.lastVerticalScrollPosition) ? this._manualRefreshDataObj.lastVerticalScrollPosition : 0;
            manualRefreshDataObj.lastSelectedField = (this._manualRefreshDataObj && this._manualRefreshDataObj.columnNumber) ? this._manualRefreshDataObj.columnNumber : "";
            manualRefreshDataObj.lastSelectedFieldOrder = (this._manualRefreshDataObj && this._manualRefreshDataObj.sortingOrder) ? this._manualRefreshDataObj.sortingOrder : "";
            this.updateManualRefreshData(manualRefreshDataObj);
        },

        /**
        * This function is used to store data needed to retain scroll position
        * when user apply filter
        * @memberOf widgets/data-viewer/data-viewer
        */
        storeDataForFilterRefresh: function () {
            var filterRefreshDataObj;
            filterRefreshDataObj = {};
            filterRefreshDataObj.lastHorizontalScrollPosition = (this._filterRefreshDataObj && this._filterRefreshDataObj.lastHorizontalScrollPosition !== "") ? this._filterRefreshDataObj.lastHorizontalScrollPosition : 0;
            this.updateFilterRefreshData(filterRefreshDataObj);
        },

        /**
        * This function is used to update manual refresh data
        * @memberOf widgets/data-viewer/data-viewer
        */
        updateManualRefreshData: function (manualRefreshDataObj) {
            return manualRefreshDataObj;
        },

        /**
        * This function is used to update filter refresh data
        * @memberOf widgets/data-viewer/data-viewer
        */
        updateFilterRefreshData: function (filterRefreshDataObj) {
            return filterRefreshDataObj;
        },

        /**
        * This function binds on scroll event to hide the FilterParentContainer's
        * @memberOf widgets/data-viewer/data-viewer
        */
        _bindDataViewerScrollEvent: function () {
            var lastPos = 0;
            // binding on scroll event on data viewer parent container
            on(this.dataViewerContainer, "scroll", lang.hitch(this, function (event) {
                this.hideWebMapList();
                this._manualRefreshDataObj.lastVerticalScrollPosition = event.currentTarget.scrollTop;
                this._filterRefreshDataObj.lastHorizontalScrollPosition = event.currentTarget.scrollLeft;
                this._hideFilterContainer();
                var currPos = $(this.dataViewerContainer).scrollLeft();
                if (lastPos < currPos) {
                    this._hideFilterContainer();
                }
                if (lastPos > currPos) {
                    this._hideFilterContainer();
                }
                lastPos = currPos;
            }));
        },

        /**
        * This function hides all the FilterParentContainer's
        * @memberOf widgets/data-viewer/data-viewer
        */
        _hideFilterContainer: function () {
            $(".esriCTFilterParentContainer").css("display", "none");
            $(".bootstrap-datetimepicker-widget.dropdown-menu").remove();
        }
    });
});
