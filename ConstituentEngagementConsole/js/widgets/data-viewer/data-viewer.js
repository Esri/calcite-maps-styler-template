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
    "dojo/dom-style",
    "dojo/dom-geometry",
    "widgets/data-viewer/details-helper",
    "dojo/Deferred"
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
    domStyle,
    domGeometry,
    DetailsHelper,
    Deferred
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: dijitTemplate,
        _dataViewerTable: null, // store data-viewer table object
        _features: [], // store features that are selected
        _selectedOperationalLayer: null, // store object of feature layer that is selected by user
        _selectRowGraphicsLayer: null, // store object of graphics layer needed for highlighting point feature
        _isPointLayer: false, // keep track whether operational layer that is selected by user if of type point or polygon or polyline etc...
        _isTextInputInFocus: false, // keep track whether text input is in focus or not
        _isDropDownClicked: false, // keep track whether drop-down of coded domain value is clicked or not
        _featureObjectID: null, // store objectid of feature selected
        _lastEditedControl: null, // store control that was last edited
        _isDateTextInputInFocus: false, // keep track whether date text input is in focus or not
        _displayColumn: [], // store columns that needs to be displayed
        _lastSelectedRow: null, // store last selected row
        _isDatePickerValueRetained: false, // keep track whether old value of date-pciker is retained
        _showDatePickerErrorMessage: false, // show error message when update of date-picker gets failed
        _updatedGraphic: null, // store graphic when it is updated
        _updatedField: null, // store name of the field when it is updated
        _existingDefinitionExpression: null, // store existing definition expression that is set to feature layer
        _newDefinitionExpression: null, // store new definition expression that is set to feature layer
        _updatedFieldAttribute: {}, // to store dependent field attributes that needs to be updated
        _updatedTextInputControl: [], // to store dependent text input control which are updated
        _updatedDropDownControl: [], // to store dependent drop down control which are updated
        _updateDatePickerControl: [], // to store dependent date picker control which are updated
        _isShowSelectedClickedInMapView: false, // track whether show selected is clicked in map view or not
        _existingRowData: null, // to store internal row data of data-viewer that was last edited
        _detailsHelper: null, // to store object of details-helper
        _isCheckBoxClicked: false, // keeps track whether checkbox is clicked or row is clicked
        objectIdColumnNumber: null, // to store column number which contains object id
        isOrientationChangedInListView: false, // to keep track whether orientation is changed in list view or not
        isMapViewClicked: false, // keep track whether map view option is clicked or not
        isGridViewClicked: false, // keep track whether grid view is clicked or not
        isDetailsTabClicked: false, // keep track whether details tab is clicked or not,
        isShowSelectedClicked: false, // keep track whether show selected option is clicked or not
        noResultFound: false, // keep track that after search results were found or not

        /** WIDGET INSTANTIATION **/

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @param{object} parent node of widget
        * @memberOf widgets/data-viewer/data-viewer
        */
        constructor: function (options, srcRefNode) {
            lang.mixin(this, options);
        },

        /**
        * This function is called after all properties of a widget are defined
        * @memberOf widgets/data-viewer/data-viewer
        */
        postCreate: function () {
            this.inherited(arguments);
        },

        /** WIDGET INSTANTIATION **/

        /** DATA-GRID **/

        /**
        * This function is used to create UI for web map list.
        * @param{boolean} whether new operational layer is selected or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        createDataViewerUI: function (operationalLayerSelected) {
            var selectedFeatureArr;
            domConstruct.empty(this.dataViewerParentDiv);
            // If a new operational layer is selected than reset panel & clear selected records etc...
            if (operationalLayerSelected) {
                // If a new operational layer is selected initially store, it's existing definition expression, if any
                this._setExistingDefinitionExpression();
                // If a new operational layer is selected close search panel if open & also clear searched data
                if (this.noResultFound) {
                    this.noResultFound = false;
                } else {
                    this._resetSearchPanel();
                }
                // If a new operational layer is selected by default show map panel
                this.showLocationTab();
                // If a new operational layer is selected by default show map panel and clear data of details tab
                this._resetDetailsTab();
                // If a new operational layer is selected hide show selected option
                if (!domClass.contains(query(".esriCTShowSelected")[0], "esriCTVisible")) {
                    this.isShowSelectedClicked = false;
                    this.toggleSelectionViewOption(false);
                }
                this._selectedOperationalLayer = this.map.getLayer(this.selectedOperationalLayerID);
                // Add a graphic layer on a map which used in highlighting feature
                this._addDataViewerGraphicsLayer();
                this._addActiveRowGraphicLayer();
                // If a new operational layer is selected than clear previously selected features
                this._clearSelectedFeatures();
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
            // to display only selected features
            // else display all features available in current extent
            if (this.isShowSelectedClicked) {
                // if it is point feature than get selected feature from graphics layer
                // if it is other than point feature get selected feature from feature layer
                if (this._isPointLayer) {
                    this._features = this._selectRowGraphicsLayer.graphics;
                } else {
                    // If selected operational exists.
                    if (this._selectedOperationalLayer) {
                        this._features = this._selectedOperationalLayer.getSelectedFeatures();
                    }
                }
                this._createDataViewerPanel();
            } else {
                // If selected operational exists.
                if (this._selectedOperationalLayer) {
                    this._features = this._selectedOperationalLayer.graphics;
                    // if it is point feature than get selected feature from graphics layer
                    // if it is other than point feature get selected feature from feature layer
                    if (this._isPointLayer) {
                        selectedFeatureArr = this._selectRowGraphicsLayer.graphics;
                    } else {
                        selectedFeatureArr = this._selectedOperationalLayer.getSelectedFeatures();
                    }
                    // to combine both selected feature and new features in current extent
                    if (selectedFeatureArr.length > 0) {
                        this._features = this._features.concat(selectedFeatureArr);
                        this._features = this._removeDuplicateFeatures(this._features);
                    }
                    // Display data-viewer if features are available in current map extent
                    if (this._features.length > 0) {
                        this._createDataViewerPanel();
                    } else {
                        // Display message if no feature is available in current map extent for display
                        domClass.remove(this.noFeatureDiv, "esriCTHidden");
                        domClass.add(this.dataViewerParentDiv, "esriCTHidden");
                        this.noFeatureDiv.innerHTML = this.appConfig.i18n.dataviewer.noIssuesReported;
                        this.appUtils.hideLoadingIndicator();
                    }
                }
            }
        },

        /**
        * This function is used to create data-viewer and retain selected feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        _recreateDataViewer: function () {
            // first check if show selected option is clicked
            // if it is clicked than no action should be performed
            // if not than refresh data-viewer grid with new features which are visible in extent
            if ((!this.isShowSelectedClicked) && (!this.isMapViewClicked)) {
                this.createDataViewerUI(false);
                // Retain previously selected features
                this._retainSelectedFeature();
            } else if ((this._isShowSelectedClickedInMapView) && (!this.isMapViewClicked)) {
                this._isShowSelectedClickedInMapView = false;
                // Retain show selected mode after re-size of the window
                this.retainShowSelectedModeAfterResize();
            } else {
                this.appUtils.hideLoadingIndicator();
            }
        },

        /**
        * This function is used to create panel of data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerPanel: function () {
            domClass.remove(this.dataViewerParentDiv, "esriCTHidden");
            domClass.add(this.noFeatureDiv, "esriCTHidden");
            this._createDataViewerHeaderPanel();
            this._createDataViewerDataPanel();
        },

        /**
        * This function is used to create data-viewer table header panel.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerHeaderPanel: function () {
            var tableHeader, table, thead, tr, i;
            domConstruct.empty(this.dataViewerParentDiv);
            // Initially creating HTML table of data-viewer
            table = domConstruct.create("table", { "class": "display esriCTDataViewer", "id": "dataViewerTable" });
            thead = domConstruct.create("thead", {}, table);
            tr = domConstruct.create("tr", {}, thead);
            // To create table headers
            if (this._features.length > 0) {
                // To filter columns that need to be displayed
                this._getFieldProperties();
                for (i = 0; i < this._displayColumn.length; i++) {
                    if (this._displayColumn[i].type === "checkbox") {
                        // To add check box header column
                        tableHeader = domConstruct.create("th", { "class": "esriCTDataViewerTableHeaderCheckbox" });
                        tableHeader.innerHTML = "";
                        domAttr.set(tableHeader, "fieldName", "checkbox");
                        this._onTableHeaderClick(tableHeader);
                        tr.appendChild(tableHeader);
                    } else {
                        tableHeader = domConstruct.create("th", { "class": "esriCTDataViewerTableHeaderContent" });
                        tableHeader.innerHTML = this._displayColumn[i].label;
                        domAttr.set(tableHeader, "fieldName", this._displayColumn[i].fieldName);
                        // Draw data-viewer table for sorting data properly
                        this._onTableHeaderClick(tableHeader);
                        tr.appendChild(tableHeader);
                    }
                }
            }
            this.dataViewerParentDiv.appendChild(table);
        },

        /**
        * This function is used to redraw data-viewer on header click
        * @memberOf widgets/data-viewer/data-viewer
        */
        _onTableHeaderClick: function (tableHeader) {
            on(tableHeader, "click", lang.hitch(this, function () {
                // If data-viewer table exists.
                if (this._dataViewerTable) {
                    // To sort data properly
                    this._dataViewerTable.draw();
                }
            }));
        },

        /**
        * This function is used to maintain array of column that needs to be displayed
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getFieldProperties: function () {
            var i, j, obj;
            this._displayColumn = [];
            this._displayColumn.push({ "displayField": false, "type": "checkbox" });
            // to fetch type from layer
            // to fetch label from popup info
            // to fetch editable status from popup info
            // to fetch date format from popup info
            for (i = 0; i < this.popupInfo.fieldInfos.length; i++) {
                for (j = 0; j < this._selectedOperationalLayer.fields.length; j++) {
                    if (this._selectedOperationalLayer.fields[j].name === this.popupInfo.fieldInfos[i].fieldName) {
                        // If fields are editable or visible than only display it.
                        if ((this.popupInfo.fieldInfos[i].visible) || (this.popupInfo.fieldInfos[i].fieldName.toLowerCase() === this._selectedOperationalLayer.objectIdField.toLowerCase()) || (this.popupInfo.fieldInfos[i].isEditable)) {
                            obj = {};
                            obj.type = this._selectedOperationalLayer.fields[j].type;
                            obj.displayField = true;
                            obj.label = this.popupInfo.fieldInfos[i].label || this.popupInfo.fieldInfos[i].fieldName;
                            // Tracks whether a field is editable or not
                            if (this.popupInfo.fieldInfos[i].isEditable) {
                                obj.isFieldEditable = true;
                            } else {
                                obj.isFieldEditable = false;
                            }
                            // Tracks whether a date format is applied or not
                            if ((this.popupInfo.fieldInfos[i].format) && (this.popupInfo.fieldInfos[i].format.dateFormat)) {
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
                            if ((this.popupInfo.fieldInfos[i].format) && (this.popupInfo.fieldInfos[i].format.digitSeparator) && (this.popupInfo.fieldInfos[i].format.places)) {
                                // If places is applied to number formatter.
                                if (this.popupInfo.fieldInfos[i].format.places > 0) {
                                    obj.numberFormat = this.popupInfo.fieldInfos[i].format;
                                }
                            }
                            obj.length = this._selectedOperationalLayer.fields[j].length;
                            obj.fieldName = this.popupInfo.fieldInfos[i].fieldName;
                            obj.nullable = this._selectedOperationalLayer.fields[j].nullable;
                            // Tracks whether a type is applied or not
                            if (this._selectedOperationalLayer.typeIdField === this.popupInfo.fieldInfos[i].fieldName) {
                                obj.types = this._selectedOperationalLayer.types;
                            }
                            if (this.popupInfo.fieldInfos[i].visible || this.popupInfo.fieldInfos[i].isEditable) {
                                obj.showInDetailsTab = true;
                            }
                            if ((this.popupInfo.fieldInfos[i].visible) && (this.popupInfo.fieldInfos[i].fieldName.toLowerCase() === this._selectedOperationalLayer.objectIdField.toLowerCase())) {
                                obj.showObjectIdField = true;
                            }
                            this._displayColumn.push(obj);
                        }
                    }
                }
            }
        },

        /**
        * This function is used to create data that needs to be added in data-viewer table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDataViewerDataPanel: function () {
            var i, j, number, fieldName, format, type, value, dateFormat, k, n, id, m, isCodeMatched, entireFeatureDataArr, dataSet;
            // Stores all rows
            entireFeatureDataArr = [];
            for (i = 0; i < this._features.length; i++) {
                // Stores single row
                dataSet = [];
                dataSet.push(this._addCheckBox(i, null, null));
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
                            break;
                        case "esriFieldTypeDate":
                            // If the field contains date value
                            if (value && value !== 0) {
                                dataSet.push((moment(value)).format(dateFormat));
                            } else {
                                if (value === 0) {
                                    dataSet.push("");
                                } else {
                                    dataSet.push(value);
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
                                            number = value.toFixed(this._displayColumn[j].numberFormat.places);
                                            number = this.appUtils.convertNumberToThousandSeperator(number);
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
            this._convertHtmlTableToDataTable(entireFeatureDataArr);
        },

        /**
        * This function is used to add checkbox in data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addCheckBox: function (index, id, checked) {
            // GIT-HUB checkbox
            var checkboxString, checkBoxId;
            if (index || index === 0) {
                checkBoxId = "checkBox" + index;
                if (this.isShowSelectedClicked) {
                    checkboxString = '<p class="esriCTCheckBoxParentContainer"><input type="checkbox" class="esriCTCheckBox" id="' + checkBoxId + '" checked="checked"/><label for="' + checkBoxId + '"></label></p>';
                } else {
                    checkboxString = '<p class="esriCTCheckBoxParentContainer"><input type="checkbox" class="esriCTCheckBox" id="' + checkBoxId + '"/><label for="' + checkBoxId + '"></label></p>';
                }
            } else if (id && checked) {
                checkboxString = '<p class="esriCTCheckBoxParentContainer"><input type="checkbox" class="esriCTCheckBox" id="' + id + '" checked="checked"/><label for="' + id + '"></label></p>';
            } else {
                checkboxString = '<p class="esriCTCheckBoxParentContainer"><input type="checkbox" class="esriCTCheckBox" id="' + id + '"/><label for="' + id + '"></label></p>';
            }
            return checkboxString;
        },

        /**
        * This function is used to convert HTML table to data table
        * @param{array} contains entire data for data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _convertHtmlTableToDataTable: function (entireFeatureDataArr) {
            var domNodeWidth, columnWidth, displayColumnCount, objectIdFieldClass, i;
            domNodeWidth = domGeometry.getMarginBox(this.dataViewerParentDiv).w;
            columnWidth = "250px";
            if (this._displayColumn.length > 0) {
                // If the objectID field is visible than display it else hides it
                for (i = 0; i < this._displayColumn.length; i++) {
                    if (this._displayColumn[i].fieldName === this._selectedOperationalLayer.objectIdField) {
                        if (this._displayColumn[i].showObjectIdField) {
                            objectIdFieldClass = null;
                            displayColumnCount = this._displayColumn.length;
                            this.objectIdColumnNumber = i;
                        } else {
                            objectIdFieldClass = "esriCTHiddenColumn";
                            displayColumnCount = this._displayColumn.length - 1;
                            this.objectIdColumnNumber = i;
                        }
                    }
                }
            }
            // The minimum width of each column is 250px.
            // If the total width of all columns is less than entire width.
            // Then calculate and re-assign a width to columns to that it fits properly in the panel
            if ((displayColumnCount * 250) < domNodeWidth) {
                columnWidth = (domNodeWidth / displayColumnCount) + 10;
                columnWidth += "px";
            }
            this._dataViewerTable = $('#dataViewerTable').DataTable({
                "destroy": true,
                "aaData": entireFeatureDataArr.sort(lang.hitch(this, function (a, b) {
                    a = a[this.objectIdColumnNumber];
                    b = b[this.objectIdColumnNumber];
                    return a === b ? 0 : (a < b ? 1 : -1);
                })), // data that needs to be displayed
                "dom": 'rt', // to show only record panel
                "scrollY": "150px", // to display vertical scroll bar
                "scrollX": true, // to display horizontal scroll bar
                "scrollCollapse": true,
                "paging": false, // to disable pagination
                "aoColumnDefs": [{
                    "sClass": objectIdFieldClass,
                    "aTargets": [this.objectIdColumnNumber]
                }, {
                    "sDefaultContent": "", // when no data is available to display
                    "sWidth": columnWidth, // width of each columns
                    "aTargets": "_all" // to apply condition to all column when no data is there to display,
                }],
                "autoWidth": true
            });
            // Attach a click event to rows
            this._onRowClick();
            this._restrictSizeOfTableCellContent();
            this._retainSelectedFeature();
            this._setDataViewerHeight();
            this.appUtils.hideLoadingIndicator();
        },

        /**
        * This function is used to set data-viewer height in split view & list view
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setDataViewerHeight: function () {
            var tableBodyNodes = query(".dataTables_scrollBody");
            if (tableBodyNodes.length > 0) {
                if (this.isGridViewClicked) {
                    domClass.replace(tableBodyNodes[0], "dataTables_listViewHeight", "dataTables_splitViewHeight");
                } else {
                    domClass.replace(tableBodyNodes[0], "dataTables_splitViewHeight", "dataTables_listViewHeight");
                }
            }
        },

        /**
        * This function is used to restrict size of table cell content
        * @memberOf widgets/data-viewer/data-viewer
        */
        _restrictSizeOfTableCellContent: function () {
            $('#dataViewerTable tr').each(function () {
                $(this).children('td').filter(function () {
                    if ((this.childNodes[0]) && (this.childNodes[0].childNodes[0]) && (domClass.contains(this.childNodes[0].childNodes[0], "esriCTCheckBox"))) {
                        // Set width of each table cell so that its content displays properly
                        $(this).addClass('esriCTCheckBoxColumn');
                    } else {
                        // Set width of each table cell so that its content displays properly
                        $(this).addClass('esriCTDataViewerTableCellContent');
                    }
                });
            });
        },

        /**
        * This function is used to destroy data-viewer table
        * @memberOf widgets/data-viewer/data-viewer
        */
        destroyDataViewerTable: function (value) {
            if (this._dataViewerTable) {
                this._dataViewerTable.destroy();
            }
        },

        /**
        * This function is used to fetch object id associated with each row.
        * @param{object} row of data-viewer table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _fetchObjectID: function (row) {
            var objectId, objectIDFieldName, count, objectIdColumnNumber;
            count = 0;
            objectIDFieldName = this._selectedOperationalLayer.objectIdField;
            // The object ID column number is traced and its value if fetched after that
            $('#dataViewerTable th').each(function () {
                if ($(this)[0].attributes.fieldName.value === objectIDFieldName) {
                    objectIdColumnNumber = count;
                }
                count++;
            });
            objectId = $('td', row).eq(objectIdColumnNumber).text();
            return objectId;
        },

        /** DATA-GRID **/

        /** SELECTION OPTIONS **/

        /**
        * This function is used to show selected records in the grid
        * @memberOf widgets/data-viewer/data-viewer
        */
        showSelectedRecords: function () {
            var selectedFeaturesLength;
            // if it is point feature than get selected feature length from graphics layer
            // if it is other than point feature get selected feature length from feature layer
            if (this._isPointLayer) {
                selectedFeaturesLength = this._selectRowGraphicsLayer.graphics.length;
            } else {
                selectedFeaturesLength = this._selectedOperationalLayer.getSelectedFeatures().length;
            }
            if (selectedFeaturesLength > 0) {
                this.toggleSelectionViewOption(true);
                this.isShowSelectedClicked = true;
                if (this.isMapViewClicked) {
                    this._isShowSelectedClickedInMapView = true;
                }
                // To disable search functionality in show selected mode
                this._addDisabledSearchIcon();
                // To show selected records in a data-viewer table
                this._showSelectedFeatureInDataViewer();
            }
        },

        /**
        * This function is used to show all the records in the grid
        * @memberOf widgets/data-viewer/data-viewer
        */
        showAllRecords: function () {
            var i;
            this.toggleSelectionViewOption(false);
            this._showAllFeaturesInDataViewer();
            // After showing all the records in data-viewer, enabled/disable search functionality depending on layer search capability
            if (this.itemInfo.itemData.applicationProperties.viewing.search && this.itemInfo.itemData.applicationProperties.viewing.search.enabled) {
                for (i = 0; i < this.itemInfo.itemData.applicationProperties.viewing.search.layers.length; i++) {
                    if (this.selectedOperationalLayerID === this.itemInfo.itemData.applicationProperties.viewing.search.layers[i].id) {
                        this._addRegularSearchIcon();
                        break;
                    }
                }
            }
        },

        /**
        * This function is used to implement event when clear selection option is clicked
        * It is also used to clear selected features from grid & map
        * If show selected option is clicked than this functionality will be freezed
        * @memberOf widgets/data-viewer/data-viewer
        */
        clearSelection: function (hideMessage, clearCheckBoxes) {
            // If user is in show selected mode than do not do clear selection.
            if (!this.isShowSelectedClicked) {
                $(".esriCTRowSelected").removeClass("esriCTRowSelected");
                // if it is point layer than clear feature from graphics layer
                // else clear it from feature layer
                if (this._isPointLayer) {
                    this._activeRowGraphicsLayer.clear();
                    if (clearCheckBoxes) {
                        this._selectRowGraphicsLayer.clear();
                    }
                } else {
                    this._selectedOperationalLayer.clearSelection();
                }
                this._resetDetailsTab(hideMessage);
                // If user is in edit mode and clicks clear selection than remove all the edited controls
                this._removeControlsFromPreviousRow();
                if (clearCheckBoxes) {
                    this._unCheckAllCheckboxes();
                }
            }
        },

        /**
        * This function is used to clear active row data
        * @memberOf widgets/data-viewer/data-viewer
        */
        _clearActiveRowData: function () {
            if (!this.isShowSelectedClicked) {
                $(".esriCTRowActivated").removeClass("esriCTRowActivated");
                if (this._isPointLayer) {
                    this._activeRowGraphicsLayer.clear();
                } else {
                    this._selectedOperationalLayer.clearSelection();
                }
                this._resetDetailsTab();
                this._removeControlsFromPreviousRow();
            }
        },

        /**
        * This function is used uncheck all the checkbox
        * @memberOf widgets/data-viewer/data-viewer
        */
        _unCheckAllCheckboxes: function () {
            var checkBoxArr, i;
            checkBoxArr = $(".esriCTCheckBox");
            for (i = 0; i < checkBoxArr.length; i++) {
                this._toggleCheckBox(false, checkBoxArr[i].parentElement.parentElement.parentElement);
            }
        },

        /**
        * This function is used to zoom map to selected feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        zoomToSelected: function () {
            // If zoom to option is clicked, and if details tab is visible, then switched it to map panel
            if (this.isDetailsTabClicked) {
                var selectedFeaturesLength;
                // if it is point feature than get selected feature length from graphics layer
                // if it is other than point feature get selected feature length from feature layer
                if (this._isPointLayer) {
                    selectedFeaturesLength = this._selectRowGraphicsLayer.graphics.length;
                } else {
                    selectedFeaturesLength = this._selectedOperationalLayer.getSelectedFeatures().length;
                }
                if (selectedFeaturesLength === 1) {
                    this.showLocationTab();
                    this.isDetailsTabClicked = false;
                    this._resetDetailsTab();
                    // Zoom map extent to selected features
                    this._zoomMapExtentToSelectedFeature();
                }
            } else {
                // Zoom map extent to selected features
                this._zoomMapExtentToSelectedFeature();
            }
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
        * This function is used to retain show selected mode after resize
        * @memberOf widgets/data-viewer/data-viewer
        */
        retainShowSelectedModeAfterResize: function () {
            // For Android and IOS devices do not re-create data-viewer in show selected mode on window resize
            if (((this.appUtils.isAndroid()) && (this.isGridViewClicked)) || ((this.appUtils.isIos()) && (this.isGridViewClicked))) {
                this.isOrientationChangedInListView = false;
            } else {
                this.createDataViewerUI(false);
                this._retainSelectedFeature();
            }
        },

        /**
        * This function is used to show selected features in data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _showSelectedFeatureInDataViewer: function () {
            this.appUtils.showLoadingIndicator();
            this.createDataViewerUI(false);
            // Highlight row that was selected previously
            $('#dataViewerTable tr').each(function () {
                $(this).addClass("esriCTRowSelected");
            });
        },

        /**
        * This function is used to show all the features in data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _showAllFeaturesInDataViewer: function () {
            this.isShowSelectedClicked = false;
            this.appUtils.showLoadingIndicator();
            this.createDataViewerUI(false);
            this._retainSelectedFeature();
        },

        /**
        * This function is used to retain selected feature in table
        * @memberOf widgets/data-viewer/data-viewer
        */
        _retainSelectedFeature: function () {
            var i, objectID, selectedFeatureArr;
            // if it is point feature than get selected feature from graphics layer
            // if it is other than point feature get selected feature from feature layer
            if (this._isPointLayer) {
                selectedFeatureArr = this._activeRowGraphicsLayer.graphics;
            } else {
                // If selected operational layer exists.
                if (this._selectedOperationalLayer) {
                    selectedFeatureArr = this._selectedOperationalLayer.getSelectedFeatures();
                }
            }
            if (selectedFeatureArr) {
                for (i = 0; i < selectedFeatureArr.length; i++) {
                    objectID = selectedFeatureArr[i].attributes[this._selectedOperationalLayer.objectIdField];
                    this._highlightRowOnFeatureClick(objectID);
                }
            }
        },

        /**
        * This function is used to zoom map extent to selected feature
        * @memberOf widgets/data-viewer/data-viewer
        */
        _zoomMapExtentToSelectedFeature: function () {
            var selectedFeatureArr, geometryService, selectedFeaturesGeometryArr = [],
                i;
            geometryService = new GeometryService(this.appConfig.helperServices.geometry.url);
            // if it is point feature than get selected feature from graphics layer
            // if it is other than point feature get selected feature from feature layer
            if (this._isPointLayer) {
                selectedFeatureArr = this._selectRowGraphicsLayer.graphics;
            } else {
                selectedFeatureArr = this._selectedOperationalLayer.getSelectedFeatures();
            }
            for (i = 0; i < selectedFeatureArr.length; i++) {
                selectedFeaturesGeometryArr.push(selectedFeatureArr[i].geometry);
            }
            // If single feature is selected, then zoom map to configure zoom level
            if (selectedFeaturesGeometryArr.length === 1 && this._isPointLayer) {
                this.map.setLevel(this.appConfig.zoomLevel);
                this.map.centerAt(selectedFeaturesGeometryArr[0]);
            } else if (selectedFeaturesGeometryArr.length > 0) {
                // If multiple features are selected, then do union of selected feature's geometry and set map extent of it
                geometryService.union(selectedFeaturesGeometryArr).then(lang.hitch(this, function (response) {
                    this.map.setExtent(response.getExtent(), true);
                }), function (err) {
                    this.appUtils.showError(err.message);
                });
            }
        },

        /**
        * This function is used to clear selected features of feature layer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _clearSelectedFeatures: function () {
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
        },

        /**
        * This function is used to remove duplicate feature from array
        * @param{array} array of features
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeDuplicateFeatures: function (arr) {
            var n, i, arrResult = {},
                unique = [],
                item,
                objectID;
            for (i = 0, n = arr.length; i < n; i++) {
                item = arr[i];
                objectID = item.attributes[this._selectedOperationalLayer.objectIdField];
                arrResult[objectID] = item;
            }
            i = 0;
            for (item in arrResult) {
                if (arrResult.hasOwnProperty(item)) {
                    unique[i++] = arrResult[item];
                }
            }
            return unique;
        },

        /** SELECTION OPTIONS **/

        /** LAYER SEARCH **/

        /**
        * This function is used to validate search criteria
        * @memberOf widgets/data-viewer/data-viewer
        */
        searchDataInDataViewer: function () {
            $(".esriCTNoResults").addClass("esriCTHidden");
            // If the value/search string exists than search it
            if (!this.isShowSelectedClicked && lang.trim($(".esriCTSearchBox")[0].value) !== "") {
                $(".esriCTSearchBox")[0].value = lang.trim($(".esriCTSearchBox")[0].value);
                this.clearSelection(false, true);
                // Before searching clear edit mode
                this._removeControlsFromPreviousRow();
                // Search records based on the value entered by the user
                this._searchData();
            } else {
                $(".esriCTSearchBox")[0].value = "";
            }
        },

        /**
        * This function is used to search data in data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _searchData: function () {
            this.appUtils.showLoadingIndicator();
            // If a user searches in the details tab than first toggle to map panel
            if (this.isDetailsTabClicked) {
                this.showLocationTab();
                this.isDetailsTabClicked = false;
            }
            // Track existing definition expression
            this._setExistingDefinitionExpression();
            var searchValue = lang.trim($(".esriCTSearchBox")[0].value);
            // If the search string exists.
            if (searchValue) {
                this._newDefinitionExpression = this._getDefinitionExpression(searchValue);
            } else {
                $(".esriCTNoResults").addClass("esriCTHidden");
                this._newDefinitionExpression = this._existingDefinitionExpression;
            }
            this._resetDefinitionExpression();
        },

        /**
        * This function is used to display search data
        * @memberOf widgets/data-viewer/data-viewer
        */
        _displaySearchData: function () {
            var filteredIconNode;
            // If no records are found after search then display all existing records
            // And display message of no result
            if (this._selectedOperationalLayer.graphics.length === 0) {
                $(".esriCTNoResults").removeClass("esriCTHidden");
                $(".esriCTSearchBox")[0].value = "";
                this._newDefinitionExpression = this._existingDefinitionExpression;
                this._resetDefinitionExpression();
                filteredIconNode = query(".esriCTSearchFiltered");
                if (filteredIconNode.length > 0) {
                    this._addRegularSearchIcon();
                    setTimeout(lang.hitch(this, function () {
                        this._setMapExtentToDefaultExtent();
                    }), 1000);
                } else {
                    this._addRegularSearchIcon();
                }
                this.appUtils.hideLoadingIndicator();
            } else {
                // If records are found after a search than display it and set map extent to selected records
                if (this._newDefinitionExpression === this._existingDefinitionExpression) {
                    this._addRegularSearchIcon();
                    this._setMapExtentToDefaultExtent();
                } else {
                    this._addFilteredSearchIcon();
                    this._createNewDataSet();
                }
            }
        },

        /**
        * This function is used to set map extent to default web-map extent
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setMapExtentToDefaultExtent: function () {
            var extentDeferred = new Deferred();
            extentDeferred = this.map.setExtent(this.lastSelectedWebMapExtent, true);
            extentDeferred.then(lang.hitch(this, function () {
                var zoomLevelDeferred = new Deferred();
                zoomLevelDeferred = this.map.setZoom(this.lastMapZoomLevel);
                zoomLevelDeferred.then(lang.hitch(this, function () {
                    this.map.setScale(this.lastMapScale);
                }));
            }));
        },

        /**
        * This function is used to clear contents of search input control
        * @memberOf widgets/data-viewer/data-viewer
        */
        clearSearchText: function () {
            var filteredIconNode;
            $(".esriCTNoResults").addClass("esriCTHidden");
            $(".esriCTSearchBox")[0].value = lang.trim($(".esriCTSearchBox")[0].value);
            if (lang.trim($(".esriCTSearchBox")[0].value)) {
                $(".esriCTSearchBox")[0].value = "";
            }
            filteredIconNode = query(".esriCTSearchFiltered");
            // After clearing searched data re-set data-viewer to all existing records
            if (filteredIconNode.length > 0) {
                this._searchData();
            }
        },

        /**
        * This function is used to reset search panel
        * @memberOf widgets/data-viewer/data-viewer
        */
        _resetSearchPanel: function () {
            var i;
            if ($(".esriCTSearchBox").length > 0) {
                $(".esriCTSearchBox")[0].value = "";
                $(".esriCTSearchBox")[0].placeholder = "";
            }
            $(".esriCTNoResults").addClass("esriCTHidden");
            $(".esriCTOptionsSearchMode").removeClass("esriCTVisible");
            $(".esriCTOptionsSearchMode").addClass("esriCTHidden");
            this._addDisabledSearchIcon();
            // Enable/disable search functionality depending on layer search capabilities
            if (this.itemInfo.itemData.applicationProperties.viewing.search && this.itemInfo.itemData.applicationProperties.viewing.search.enabled) {
                for (i = 0; i < this.itemInfo.itemData.applicationProperties.viewing.search.layers.length; i++) {
                    if (this.selectedOperationalLayerID === this.itemInfo.itemData.applicationProperties.viewing.search.layers[i].id) {
                        // Enable search functionality
                        this._addRegularSearchIcon();
                        if ($(".esriCTSearchBox").length > 0 && this.itemInfo.itemData.applicationProperties.viewing.search.hintText) {
                            $(".esriCTSearchBox")[0].placeholder = this.itemInfo.itemData.applicationProperties.viewing.search.hintText;
                            if (typeof $(".esriCTSearchBox, textarea").placeholder === 'function') {
                                $(".esriCTSearchBox, textarea").placeholder();
                            }
                        }
                        break;
                    }
                }
            } else {
                // Disbale search functionality
                this._addDisabledSearchIcon();
            }
        },

        /**
        * This function is used to create a new data set after definition expression is set
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createNewDataSet: function () {
            this.clearSelection();
            var selectedFeatureArr, geometryService, selectedFeaturesGeometryArr = [],
                i;
            geometryService = new GeometryService(this.appConfig.helperServices.geometry.url);
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
                this.appUtils.showError(err.message);
            });
        },

        /**
        * This function is used to re-set definition expression
        * @memberOf widgets/data-viewer/data-viewer
        */
        _resetDefinitionExpression: function () {
            this._selectedOperationalLayer.setDefinitionExpression(this._newDefinitionExpression);
        },

        /**
        * This function is used to add filtered search icon
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addFilteredSearchIcon: function () {
            var searchIconNode;
            searchIconNode = query(".esriCTSearch");
            if (searchIconNode.length > 0) {
                domClass.add(searchIconNode[0], "esriCTSearchFiltered");
            }
        },

        /**
        * This function is used to add disable search icon
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addDisabledSearchIcon: function () {
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
        },

        /**
        * This function is used to add regular search icon
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addRegularSearchIcon: function () {
            var disableIconNode, filteredIconNode;
            disableIconNode = query(".esriCTSearchDisable");
            filteredIconNode = query(".esriCTSearchFiltered");
            if (disableIconNode.length > 0) {
                domClass.replace(disableIconNode[0], "esriCTSearch", "esriCTSearchDisable");
            } else if (filteredIconNode.length > 0) {
                domClass.remove(filteredIconNode[0], "esriCTSearchFiltered");
            }
        },

        /**
        * This function is used to set existing definition expression.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _setExistingDefinitionExpression: function () {
            var j;
            // Initially, if a layer has some definition expression than store it
            for (j = 0; j < this.itemInfo.itemData.operationalLayers.length; j++) {
                if (this.selectedOperationalLayerID === this.itemInfo.itemData.operationalLayers[j].id) {
                    if (this.itemInfo.itemData.operationalLayers[j].layerDefinition && this.itemInfo.itemData.operationalLayers[j].layerDefinition.definitionExpression) {
                        this._existingDefinitionExpression = this.itemInfo.itemData.operationalLayers[j].layerDefinition.definitionExpression;
                        this._newDefinitionExpression = this.itemInfo.itemData.operationalLayers[j].layerDefinition.definitionExpression;
                    } else {
                        this._existingDefinitionExpression = null;
                        this._newDefinitionExpression = null;
                    }
                }
            }
        },

        /**
        * This function is used to get definition expression
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getDefinitionExpression: function (searchValue) {
            var layerObject, i, definitionExpression = null;
            // After user search for a particular value that definition expression, including the default one if merged together and returned
            if (this.itemInfo.itemData.applicationProperties.viewing.search && this.itemInfo.itemData.applicationProperties.viewing.search.enabled) {
                for (i = 0; i < this.itemInfo.itemData.applicationProperties.viewing.search.layers.length; i++) {
                    if (this.selectedOperationalLayerID === this.itemInfo.itemData.applicationProperties.viewing.search.layers[i].id) {
                        layerObject = this.itemInfo.itemData.applicationProperties.viewing.search.layers[i];
                        if (this._existingDefinitionExpression) {
                            definitionExpression = this._existingDefinitionExpression;
                            if (layerObject.field.exactMatch) {
                                // For exact match case
                                definitionExpression += " AND " + layerObject.field.name.toUpperCase() + " = '" + lang.trim(searchValue).toUpperCase() + "'";
                            } else {
                                // For contains case
                                definitionExpression += " AND " + layerObject.field.name.toUpperCase() + " LIKE '%" + lang.trim(searchValue).toUpperCase() + "%'";
                            }
                        } else {
                            if (layerObject.field.exactMatch) {
                                // For exact match case
                                definitionExpression = layerObject.field.name.toUpperCase() + " = '" + lang.trim(searchValue).toUpperCase() + "'";
                            } else {
                                // For contains case
                                definitionExpression = layerObject.field.name.toUpperCase() + " LIKE '%" + lang.trim(searchValue).toUpperCase() + "%'";
                            }
                        }
                        return definitionExpression;
                    }
                }
            }
            return definitionExpression;
        },

        /** LAYER SEARCH **/

        /** DETAILS TAB **/

        /**
        * This function is used to reset details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        _resetDetailsTab: function (hideMessage) {
            var parentDiv;
            parentDiv = dom.byId("detailsContentDiv");
            if (!hideMessage) {
                parentDiv.innerHTML = this.appConfig.i18n.dataviewer.activateFeature;
            }
        },

        /**
        * This function is used to validate & show fields of features in details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        showDetails: function () {
            if (domClass.contains("detailsBtnDiv", "esriCTBGColor")) {
                var detailsHelperParameters;
                detailsHelperParameters = { "activeRowGraphicsLayer": this._activeRowGraphicsLayer, "selectedOperationalLayer": this._selectedOperationalLayer, "isPointLayer": this._isPointLayer, "displayColumn": this._displayColumn, "popupInfo": this.popupInfo, "map": this.map, "appConfig": this.appConfig, "appUtils": this.appUtils };
                // Create details helper to display fields
                this._detailsHelper = new DetailsHelper(detailsHelperParameters);
                // To show display tab
                this._detailsHelper.displayDetailsTab = lang.hitch(this, this.setAndDisplayDetailsTab);
                // If user is in edit mode than clear it first and switch it to details mode
                this._detailsHelper.removeControlsFromPreviousRow = lang.hitch(this, this._removeControlsFromPreviousRow);
                // Check if numbers of records are selected properly to switch to details tab
                this._detailsHelper.validateDetailsData();
            }
        },

        /**
        * This function is used to update flag which tracks whether details tab is clicked or not. It is also used to display details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        setAndDisplayDetailsTab: function () {
            this.isDetailsTabClicked = true;
            this.showDetailsTab();
        },

        /**
        * This function is used to show details tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        showDetailsTab: function () {
            return null;
        },

        /** DETAILS TAB **/

        /** MAP PANEL **/

        /**
        * This function is used to add graphic layer on map
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addDataViewerGraphicsLayer: function () {
            try {
                this._selectRowGraphicsLayer = this.map.getLayer("dataViewerGraphicsLayer");
                // if graphic layer is available than clear it else create it and add on map
                if (this._selectRowGraphicsLayer) {
                    this._selectRowGraphicsLayer.clear();
                } else {
                    this._selectRowGraphicsLayer = new GraphicsLayer({
                        "id": "dataViewerGraphicsLayer"
                    });
                    this.attachEventToGraphicsLayer(this._selectRowGraphicsLayer);
                    // Create and add a graphic layer on the map
                    this.map.addLayer(this._selectRowGraphicsLayer);
                }
            } catch (ignore) { }
        },

        /**
        * This function is used to add graphic layer on map for active row
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addActiveRowGraphicLayer: function () {
            try {
                this._activeRowGraphicsLayer = this.map.getLayer("activeRowGraphicsLayer");
                // if graphic layer is available than clear it else create it and add on map
                if (this._activeRowGraphicsLayer) {
                    this._activeRowGraphicsLayer.clear();
                } else {
                    this._activeRowGraphicsLayer = new GraphicsLayer({
                        "id": "activeRowGraphicsLayer"
                    });
                    this.attachEventToActiveRowLayer(this._activeRowGraphicsLayer);
                    // Create and add a graphic layer on the map
                    this.map.addLayer(this._activeRowGraphicsLayer);
                }
            } catch (ignore) { }
        },

        /**
        * This function is used to attach events to the graphics layer
        * @memberOf widgets/data-viewer/data-viewer
        */
        attachEventToGraphicsLayer: function (graphicsLayer) {
            return graphicsLayer;
        },

        /**
        * This function is used to attach events to the active row graphics layer
        * @memberOf widgets/data-viewer/data-viewer
        */
        attachEventToActiveRowLayer: function (graphicsLayer) {
            return graphicsLayer;
        },

        /**
        * This function is used to change details button to enabled or disabled mode
        * @param{Boolean} to identify layer is graphic layer or feature layer
        * @memberOf widgets/data-viewer/data-viewer
        */
        changeDetailsButtonMode: function (graphicsLayer) {
            if (graphicsLayer) {
                if (this._selectRowGraphicsLayer && this._selectRowGraphicsLayer.graphics && this._selectRowGraphicsLayer.graphics.length > 0) {
                    this._changeSelectionOptionMode(true);
                } else {
                    this._changeSelectionOptionMode(false);
                }
            } else {
                if (this._selectedOperationalLayer && this._selectedOperationalLayer.getSelectedFeatures().length > 0) {
                    this._changeSelectionOptionMode(true);
                } else {
                    this._changeSelectionOptionMode(false);
                }
            }
        },

        /**
        * This function is used to enable or disable selection options
        * @memberOf widgets/data-viewer/data-viewer
        */
        _changeSelectionOptionMode: function (toggle) {
            var showAllOption, showSelectedOption, clearSelectionOption, zoomToSelectedOption;
            showAllOption = query(".esriCTShowAll")[0];
            showSelectedOption = query(".esriCTShowSelected")[0];
            clearSelectionOption = query(".esriCTClearSelection")[0];
            zoomToSelectedOption = query(".esriCTZoomToSelected")[0];
            if (toggle) { // To enable selection options
                if (this._selectRowGraphicsLayer && this._selectRowGraphicsLayer.graphics && this._selectRowGraphicsLayer.graphics.length > 0) {
                    if (domClass.contains(showAllOption, "esriCTDisableShowAll")) {
                        domClass.remove(showAllOption, "esriCTDisableShowAll");
                    }
                    if (domClass.contains(showSelectedOption, "esriCTDisableShowSelected")) {
                        domClass.remove(showSelectedOption, "esriCTDisableShowSelected");
                    }
                    if (domClass.contains(clearSelectionOption, "esriCTDisableClearSelection")) {
                        domClass.remove(clearSelectionOption, "esriCTDisableClearSelection");
                    }
                    if (domClass.contains(zoomToSelectedOption, "esriCTDisableCTZoomToSelected")) {
                        domClass.remove(zoomToSelectedOption, "esriCTDisableCTZoomToSelected");
                    }
                }
            } else { // To disable selection options
                domClass.add(showAllOption, "esriCTDisableShowAll");
                domClass.add(showSelectedOption, "esriCTDisableShowSelected");
                domClass.add(clearSelectionOption, "esriCTDisableClearSelection");
                domClass.add(zoomToSelectedOption, "esriCTDisableCTZoomToSelected");
            }
        },

        /**
        * This function is used to return features within current map extent
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getFilteredFeatureLayer: function () {
            var featureLayer;
            featureLayer = new FeatureLayer(this._selectedOperationalLayer.url);
            if (this._newDefinitionExpression !== this._existingDefinitionExpression) {
                // If the user has searched for some value and new definition expression is formed
                featureLayer.setDefinitionExpression(this._newDefinitionExpression);
                featureLayer.refresh();
            }
            if (this._newDefinitionExpression === this._existingDefinitionExpression) {
                // To set existing definition expression after creation of new feature layer object
                featureLayer.setDefinitionExpression(this._existingDefinitionExpression);
                featureLayer.refresh();
            }
            return featureLayer;
        },

        /**
        * This function is used to generate event to show location tab
        * @memberOf widgets/data-viewer/data-viewer
        */
        showLocationTab: function () {
            return null;
        },

        /** MAP PANEL **/

        /** EDITING CONTROLS **/

        /**
        * This function is used to create drop-down for coded domain value
        * @param{object} coded domain values
        * @param{string} code of value
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDropDown: function (obj, code, key) {
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
        },

        /**
        * This function is used to create drop-down for dependent coded domain value
        * @param{object} coded domain values
        * @param{string} code of value
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _createDependentDropDown: function (obj, code, key) {
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
                if ((obj.types[j].id !== null) && (obj.types[j].id !== "") && (code !== null) && (code !== "")) {
                    if (obj.types[j].id.toString() === code.toString()) {
                        dependentValueOptions = dependentValueOptions.replace("displayValue", '<option value="' + value + '">' + obj.types[j].name + '</option>');
                    } else {
                        dependentValueOptions += '<option value="' + value + '">' + obj.types[j].name + '</option>';
                    }
                } else if ((obj.types[j].id === null || obj.types[j].id === "") && (code === null || code === "")) {
                    dependentValueOptions = dependentValueOptions.replace("displayValue", '<option value="' + value + '">' + obj.types[j].name + '</option>');
                } else {
                    dependentValueOptions += '<option value="' + value + '">' + obj.types[j].name + '</option>';
                }
            }
            dependentValueOptions += '</select>';
            return dependentValueOptions;
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
            var datePickerString = '<div class="input-group date esriCTDateTimePicker">';
            datePickerString += '<input type="text" class="form-control esriCTDateInputField" name="' + key + "|" + date + "|" + format.dateFormat + "|" + minValue + "|" + maxValue + "|" + format.showTime + '"></input>';
            datePickerString += '<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>';
            datePickerString += '</div>';
            return datePickerString;
        },

        /**
        * This function is used to notify that editing is started
        * @memberOf widgets/data-viewer/data-viewer
        */
        OnEditingStart: function () {
            return;
        },

        /**
        * This function is used to notify that editing is completed
        * @memberOf widgets/data-viewer/data-viewer
        */
        OnEditingComplete: function () {
            return;
        },

        /**
        * This function is used to detach events
        * @memberOf widgets/data-viewer/data-viewer
        */
        _detachEvents: function () {
            // detach blur & focus event of text input
            $(".esriCTTextInput").off("blur");
            $(".esriCTTextInput").off("focus");
            // detach change & click event of drop down
            $(".esriCTCodedDomain").off("change");
            $(".esriCTCodedDomain").off("click");
            // detach blur & focus event of date picker control
            $(".esriCTDateInputField").off("blur");
            $(".esriCTDateInputField").off("focus");
        },

        /**
        * This function is used to attach events to controls that needs for editing
        * @memberOf widgets/data-viewer/data-viewer
        */
        _attachEventToControls: function () {
            $(".esriCTTextInput").on({
                // update feature on focus out of text-box
                blur: lang.hitch(this, function (evt) {
                    this._emptyDependentControls();
                    this._isTextInputInFocus = false;
                    if (evt.currentTarget.defaultValue !== evt.currentTarget.value) {
                        this.appUtils.showLoadingIndicator();
                        this._lastEditedControl = evt;
                        this._updateFeature(evt.currentTarget.value, evt.currentTarget.name);
                    }
                    this.OnEditingComplete();
                }),
                focus: lang.hitch(this, function (evt) {
                    this._emptyDependentControls();
                    this._featureObjectID = this._fetchObjectID(evt.currentTarget.parentElement.parentElement);
                    this._isTextInputInFocus = true;
                    this.OnEditingStart();
                })
            });
            $(".esriCTCodedDomain").on({
                // update feature on change of drop-down
                change: lang.hitch(this, function (evt) {
                    this._emptyDependentControls();
                    var field, value;
                    this._isDropDownClicked = true;
                    this.appUtils.showLoadingIndicator();
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
                    this.OnEditingComplete();
                }),
                focus: lang.hitch(this, function (evt) {
                    this._emptyDependentControls();
                    this._isDateTextInputInFocus = true;
                    this.OnEditingStart();
                })
            });
        },

        /**
        * This function is used to create date-time picker control
        * @memberOf widgets/data-viewer/data-viewer
        */
        _renderDateTimePicker: function () {
            var datePickerArr = $(".esriCTDateTimePicker"),
                i,
                date,
                format,
                datePicker,
                min,
                max,
                showTime;
            for (i = 0; i < datePickerArr.length; i++) {
                date = datePickerArr[i].childNodes[0].name.split('|')[1];
                format = datePickerArr[i].childNodes[0].name.split('|')[2];
                min = datePickerArr[i].childNodes[0].name.split('|')[3];
                max = datePickerArr[i].childNodes[0].name.split('|')[4];
                showTime = datePickerArr[i].childNodes[0].name.split('|')[5];
                showTime = (showTime === "true") ? true : false;
                datePicker = $(datePickerArr[i]).datetimepicker({
                    useSeconds: false,
                    useStrict: false,
                    format: format,
                    pickTime: showTime
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
        },

        /**
        * This function is used to attach event to date-picker
        * @param{object} datePicker object
        * @memberOf widgets/data-viewer/data-viewer
        */
        _attachDatePickerEvent: function (datePicker) {
            // update value when date is changed
            datePicker.on('dp.change', lang.hitch(this, function (evt) {
                if (this._isDatePickerValueRetained) {
                    this._isDatePickerValueRetained = false;
                } else {
                    var value, field;
                    this._lastEditedControl = evt;
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
                        // Retain the old date if the user enters any wrong date
                        this._retainOldValue();
                        this._isDatePickerValueRetained = false;
                    }
                    if (this._showDatePickerErrorMessage) {
                        this._showDatePickerErrorMessage = false;
                        this.appUtils.showMessage(this.appConfig.i18n.dataviewer.invalidDate);
                    }
                }
            }));
        },

        /**
        * This function is used to remove controls from the row when user clicks on other row or user de-selects it etc...
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeControlsFromPreviousRow: function () {
            var i, className, selectedIndex, value, date, dateFormat;
            this._existingRowData = null;
            if (this._lastSelectedRow) {
                this._existingRowData = this._dataViewerTable.row(this._lastSelectedRow.currentTarget).data();
                for (i = 1; i < this._lastSelectedRow.currentTarget.childNodes.length; i++) {
                    if (this._lastSelectedRow.currentTarget.childNodes[i].childNodes.length > 0) {
                        if (this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].className) {
                            className = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].className;
                            // Remove text-input control
                            if (className.indexOf("esriCTTextInput") > -1) {
                                value = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].value;
                                this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = value;
                                this._updateInternalData(i, value);
                            } else if (className.indexOf("esriCTCodedDomain") > -1) {
                                // Remove drop-down control
                                selectedIndex = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].selectedIndex;
                                value = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0][selectedIndex];
                                if (value) {
                                    this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = value.text;
                                    this._updateInternalData(i, value.text);
                                } else {
                                    this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = "";
                                    this._updateInternalData(i, "");
                                }
                            } else if (className.indexOf("esriCTDateTimePicker") > -1) {
                                // Remove date picker control
                                date = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].childNodes[0].name.split('|')[1];
                                dateFormat = this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].childNodes[0].name.split('|')[2];
                                if (date === "null" || date === "") {
                                    this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = "";
                                    this._updateInternalData(i, "");
                                } else {
                                    date = parseInt(date, 10);
                                    this._lastSelectedRow.currentTarget.childNodes[i].innerHTML = (moment(date)).format(dateFormat);
                                    this._updateInternalData(i, (moment(date)).format(dateFormat));
                                }
                            }
                        }
                    }
                }
                if (this._dataViewerTable) {
                    if (this._existingRowData) {
                        this._dataViewerTable.row(this._lastSelectedRow.currentTarget).data(this._existingRowData);
                    }
                }
            }
            this._lastSelectedRow = null;
        },

        /**
        * This function is used to add controls to all the fields in row that are editable.
        * @param{object} feature details that needs to be edited
        * @memberOf widgets/data-viewer/data-viewer
        */
        _addControlsToRow: function (featureSet) {
            var i, j, fieldName, format, type, length, value, dateFormat, isFieldEditable, number, k, id, m, n;
            if (this._lastSelectedRow) {
                for (i = 0; i < featureSet.features.length; i++) {
                    for (j = 0; j < this._displayColumn.length; j++) {
                        if (this._displayColumn[j].displayField) {
                            fieldName = this._displayColumn[j].fieldName;
                            format = this._displayColumn[j].format;
                            type = this._displayColumn[j].type;
                            length = this._displayColumn[j].length;
                            value = featureSet.features[i].attributes[fieldName];
                            dateFormat = this.appUtils.getDateFormat(format);
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
                                            this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = (moment(value)).format(dateFormat.dateFormat);
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
                                    // add drop-down for dependent drop-down value
                                    if (isFieldEditable) {
                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDependentDropDown(this._displayColumn[j], value, fieldName);
                                    } else {
                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = value;
                                    }
                                } else if (this._selectedOperationalLayer.types && this._selectedOperationalLayer.types.length > 0 && this._selectedOperationalLayer.types[0].domains && this._selectedOperationalLayer.types[0].domains[fieldName] && this._selectedOperationalLayer.types[0].domains[fieldName].codedValues) {
                                    id = featureSet.features[i].attributes[this._selectedOperationalLayer.typeIdField];
                                    for (m = 0; m < this._selectedOperationalLayer.types.length; m++) {
                                        if (this._selectedOperationalLayer.types[m].id === id) {
                                            if (isFieldEditable) {
                                                this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._createDropDown(this._selectedOperationalLayer.types[m].domains[fieldName], value, fieldName);
                                            } else {
                                                for (n = 0; n < this._selectedOperationalLayer.types[m].domains[fieldName].codedValues.length; n++) {
                                                    if (value === this._selectedOperationalLayer.types[m].domains[fieldName].codedValues[n].code) {
                                                        this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = this._selectedOperationalLayer.types[m].domains[fieldName].codedValues[n].name;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    // add text input control
                                    if (this._displayColumn[j].numberFormat) {
                                        if (value || value === 0) {
                                            // if number has digit seperator
                                            if (this._displayColumn[j].numberFormat.digitSeparator) {
                                                number = value.toFixed(this._displayColumn[j].numberFormat.places);
                                                number = this.appUtils.convertNumberToThousandSeperator(number);
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
                                            if (value !== null && value !== "") {
                                                this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = value;
                                            } else {
                                                this._lastSelectedRow.currentTarget.childNodes[j].innerHTML = "";
                                            }
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
            }
        },

        /** EDITING CONTROLS **/

        /** ROW SELECTION/DE-SELECTION **/

        /**
        * This function is used to highlight row
        * @param{int} object id associated with each row
        * @memberOf widgets/data-viewer/data-viewer
        */
        _highlightRowOnFeatureClick: function (objectId) {
            setTimeout(lang.hitch(this, function () {
                var objectIDFieldName, count, objectIdColumnNumber, rows, i, rowNumber;
                count = 0;
                objectIDFieldName = this._selectedOperationalLayer.objectIdField;
                // Track the object ID column number and fetched value from it
                $('#dataViewerTable th').each(function () {
                    if ($(this)[0].attributes.fieldName.value === objectIDFieldName) {
                        objectIdColumnNumber = count;
                    }
                    count++;
                });
                rows = $('#dataViewerTable tr');
                for (i = 0; i < rows.length; i++) {
                    if (parseInt($(rows[i]).find('td').eq(objectIdColumnNumber).text(), 10) === objectId) {
                        rowNumber = i;
                        $(rows[i]).addClass("esriCTRowActivated");
                        $(rows[i]).addClass("esriCTRowSelected");
                    }
                }
                this._scrollToActivatedFeature(rowNumber);
            }), 1500);
        },

        /**
        * This function is used to scroll data-viewer to activated row
        * @memberOf widgets/data-viewer/data-viewer
        */
        _scrollToActivatedFeature: function (rowNumber) {
            $('.dataTables_scrollBody').animate({
                scrollTop: 0
            }, 0);
            setTimeout(lang.hitch(this, function () {
                if (($('#dataViewerTable tbody tr').eq(rowNumber).offset()) && ($('#dataViewerTable tbody tr').eq(rowNumber).offset().top)) {
                    $('.dataTables_scrollBody').animate({
                        scrollTop: $('#dataViewerTable tbody tr').eq(rowNumber).offset().top - 140
                    }, 400);
                }
                this.appUtils.hideLoadingIndicator();
            }), 10);
        },

        /**
        * This function is used to de-select row
        * @param{int} object id associated with each row
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeHighlightedRowOnFeatureClick: function (objectId) {
            var objectIDFieldName, count, objectIdColumnNumber;
            count = 0;
            objectIDFieldName = this._selectedOperationalLayer.objectIdField;
            // Track the object ID column number and fetched value from it
            $('#dataViewerTable th').each(function () {
                if ($(this)[0].attributes.fieldName.value === objectIDFieldName) {
                    objectIdColumnNumber = count;
                }
                count++;
            });
            $('#dataViewerTable tr').each(function () {
                if (parseInt($(this).find('td').eq(objectIdColumnNumber).text(), 10) === objectId) {
                    $(this).removeClass("esriCTRowActivated");
                }
            });
        },

        /** ROW SELECTION/DE-SELECTION **/

        /** FEATURE SELECTION/DE-SELECTION **/

        /**
        * This function is used to select feature on map
        * @param{object} feature that needs to be highlighted
        * @memberOf widgets/data-viewer/data-viewer
        */
        _selectFeatureOnMapClick: function (feature) {
            var objectId, featureQuery, featureLayer;
            featureQuery = new Query();
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
            featureLayer.queryFeatures(featureQuery, lang.hitch(this, function (featureSet) {
                // if it is point feature than add selected feature on graphics layer
                // if it is other than point feature than select feature using selectFeatures method & FeatureLayer.SELECTION_ADD option
                if (this._isPointLayer) {
                    this._activeRowGraphicsLayer.add(this._getHighLightSymbol(featureSet.features[0], true));
                } else {
                    this._selectedOperationalLayer.setSelectionSymbol(this._getHighLightSymbol(featureSet.features[0], true));
                    this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_ADD);
                }
                this._highlightRowOnFeatureClick(objectId);
            }), function (err) {
                this.appUtils.hideLoadingIndicator();
                this.appUtils.showError(err.message);
            });
        },

        /**
        * This function is used to de-select feature on map
        * @param{object} feature that needs to be de-selected
        * @memberOf widgets/data-viewer/data-viewer
        */
        _deSelectFeatureOnMapClick: function (feature) {
            var objectId, i, objectID, featureQuery;
            // if it is point feature than de-select it from graphics layer
            // if it is other than point feature than de-select it from feature layer
            if (this._isPointLayer) {
                objectId = feature.attributes[this._selectedOperationalLayer.objectIdField];
                for (i = 0; i < this._activeRowGraphicsLayer.graphics.length; i++) {
                    objectID = this._activeRowGraphicsLayer.graphics[i].attributes[this._selectedOperationalLayer.objectIdField];
                    if (parseInt(objectID, 10) === parseInt(objectId, 10)) {
                        this._activeRowGraphicsLayer.remove(this._activeRowGraphicsLayer.graphics[i]);
                        break;
                    }
                }
            } else {
                featureQuery = new Query();
                objectId = feature.attributes[this._selectedOperationalLayer.objectIdField];
                featureQuery.objectIds = [parseInt(objectId, 10)];
                featureQuery.outSpatialReference = this.map.spatialReference;
                featureQuery.returnGeometry = false;
                this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_SUBTRACT);
            }
            this._removeHighlightedRowOnFeatureClick(objectId);
        },

        /**
        * This function is used check whether current feature is selected or not
        * @param{object} feature that needs to be checked whether it is selected or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        _isCurrentFeatureSelected: function (feature) {
            var objectId, i, objectID, selectedFeatureArr;
            // if it is point feature than get status whether feature is selected or not from graphics layer
            // if it is other than point feature than get status whether feature is selected or not from feature layer
            if (this._isPointLayer) {
                objectId = feature.attributes[this._selectedOperationalLayer.objectIdField];
                for (i = 0; i < this._activeRowGraphicsLayer.graphics.length; i++) {
                    objectID = this._activeRowGraphicsLayer.graphics[i].attributes[this._selectedOperationalLayer.objectIdField];
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
        },

        /**
        * This function is used attach click event to features
        * @memberOf widgets/data-viewer/data-viewer
        */
        onFeatureClick: function (evt) {
            if (!this.isShowSelectedClicked) {
                this._removeControlsFromPreviousRow();
                if (this._isCurrentFeatureSelected(evt.graphic)) {
                    this._deSelectFeatureOnMapClick(evt.graphic);
                } else {
                    this.appUtils.showLoadingIndicator();
                    this._clearActiveRowData();
                    this._selectFeatureOnMapClick(evt.graphic);
                }
            }
        },

        /**
        * This function is used to remove highlighted feature from map.
        * @param{object} objectId of feature that needs to be removed
        * @memberOf widgets/data-viewer/data-viewer
        */
        _removeHighLightedFeatureOnRowClick: function (objectId) {
            var i, objectID, featureQuery;
            // if it is point feature than remove selected feature from graphics layer
            // if it is other than point feature than remove selected feature using selectFeatures method & FeatureLayer.SELECTION_SUBTRACT option
            if (this._isPointLayer) {
                if (this._isCheckBoxClicked) {
                    for (i = 0; i < this._selectRowGraphicsLayer.graphics.length; i++) {
                        objectID = this._selectRowGraphicsLayer.graphics[i].attributes[this._selectedOperationalLayer.objectIdField];
                        if (parseInt(objectID, 10) === parseInt(objectId, 10)) {
                            this._selectRowGraphicsLayer.remove(this._selectRowGraphicsLayer.graphics[i]);
                            break;
                        }
                    }
                } else {
                    for (i = 0; i < this._activeRowGraphicsLayer.graphics.length; i++) {
                        objectID = this._activeRowGraphicsLayer.graphics[i].attributes[this._selectedOperationalLayer.objectIdField];
                        if (parseInt(objectID, 10) === parseInt(objectId, 10)) {
                            this._activeRowGraphicsLayer.remove(this._activeRowGraphicsLayer.graphics[i]);
                            break;
                        }
                    }
                }
            } else {
                featureQuery = new Query();
                featureQuery.outSpatialReference = this.map.spatialReference;
                featureQuery.objectIds = [parseInt(objectId, 10)];
                featureQuery.returnGeometry = false;
                this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_SUBTRACT);
            }
        },

        /**
        * This function is used to highlight feature.
        * @param{object} objectId of feature that needs to be high-lighted
        * @memberOf widgets/data-viewer/data-viewer
        */
        _highLightFeatureOnRowClick: function (objectId) {
            var featureQuery, featureLayer;
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
            featureLayer.queryFeatures(featureQuery, lang.hitch(this, function (featureSet) {
                // if it is point feature than add selected feature on graphics layer
                // if it is other than point feature than select feature using selectFeatures method & FeatureLayer.SELECTION_ADD option
                if (this._isPointLayer) {
                    if (this._isCheckBoxClicked) {
                        this._selectRowGraphicsLayer.add(this._getHighLightSymbol(featureSet.features[0], false));
                    } else {
                        if (this._activeRowGraphicsLayer) {
                            this._activeRowGraphicsLayer.clear();
                        }
                        this._activeRowGraphicsLayer.add(this._getHighLightSymbol(featureSet.features[0], true));
                        this.map.setLevel(this.appConfig.zoomLevel);
                        this.map.centerAt(featureSet.features[0].geometry);
                    }
                } else {
                    this._selectedOperationalLayer.setSelectionSymbol(this._getHighLightSymbol(featureSet.features[0], true));
                    this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_ADD);
                    this.map.setExtent(featureSet.features[0].geometry.getExtent(), true);
                }
                // if details tab is displayed than display fields of feature in it
                if (this.isDetailsTabClicked) {
                    if (this._detailsHelper) {
                        this._detailsHelper.showFeatureDetails(featureSet.features[0]);
                    }
                } else {
                    if (this._isCheckBoxClicked) {
                        this._isCheckBoxClicked = false;
                    } else {
                        // used to add controls in row so that user can edit it
                        this._addControlsToRow(featureSet);
                    }
                }
            }), function (err) {
                if (this._isCheckBoxClicked) {
                    this._isCheckBoxClicked = false;
                }
                this.appUtils.showError(err.message);
            });
        },

        /**
        * This function is used to highlight feature on row click.
        * @memberOf widgets/data-viewer/data-viewer
        */
        _onRowClick: function () {
            $('#dataViewerTable tbody').on('click', 'tr', lang.hitch(this, function (evt) {
                event.stop(evt);
                this._featureObjectID = this._fetchObjectID(evt.currentTarget);
                // Do not perform any operation if it is in show selected mode
                if ((!this.isShowSelectedClicked) && (!this._isTextInputInFocus) && (!this._isDropDownClicked) && (!this._isDateTextInputInFocus)) {
                    if (evt.target.tagName === "LABEL") {
                        return;
                    }
                    if (domClass.contains(evt.currentTarget, "esriCTRowActivated")) {
                        if (!this.isDetailsTabClicked) {
                            this._clearActiveRowData();
                            this._resetDetailsTab(false);
                        }
                    } else {
                        this._clearActiveRowData();
                        $(evt.currentTarget).toggleClass('esriCTRowActivated');
                    }
                    this._isCheckBoxClicked = false;
                    if (this.isDetailsTabClicked) {
                        this.clearSelection(true);
                    }
                    if (!((evt.currentTarget.childNodes[0].innerHTML.indexOf("checked") > -1) && (domClass.contains(evt.currentTarget, "esriCTRowSelected")) && (!this._isCheckBoxClicked))) {
                        if (!(domClass.contains(evt.currentTarget, "esriCTRowActivated") && domClass.contains(evt.currentTarget, "esriCTRowSelected"))) {
                            $(evt.currentTarget).toggleClass('esriCTRowSelected');
                        } else {
                            domClass.add(evt.currentTarget, "esriCTSelectedActive");
                        }
                    } else {
                        if (domClass.contains(evt.currentTarget, "esriCTSelectedActive")) {
                            domClass.remove(evt.currentTarget, "esriCTSelectedActive");
                            $(evt.currentTarget).toggleClass('esriCTRowSelected');
                        } else {
                            domClass.add(evt.currentTarget, "esriCTSelectedActive");
                        }
                    }
                    if (domClass.contains(evt.currentTarget, "esriCTRowSelected")) {
                        this._removeControlsFromPreviousRow();
                        this._lastSelectedRow = evt;
                        if (evt.target.tagName === "LABEL") {
                            this._toggleCheckBox(true, this._lastSelectedRow.currentTarget);
                        }
                        // to highlighted feature on map
                        this._highLightFeatureOnRowClick(this._featureObjectID);
                    } else {
                        if ((evt.currentTarget.childNodes[0].innerHTML.indexOf("checked") > -1) && (!this._isCheckBoxClicked)) {
                            $(evt.currentTarget).toggleClass('esriCTRowSelected');
                        }
                        this._removeControlsFromPreviousRow();
                        this._lastSelectedRow = evt;
                        if (evt.target.tagName === "LABEL") {
                            this._toggleCheckBox(false, this._lastSelectedRow.currentTarget);
                        }
                        // to remove highlighted feature from map
                        this._removeHighLightedFeatureOnRowClick(this._featureObjectID);
                    }
                }
            }));
        },

        /**
        * This function is used to activate checkbox on click of it
        * @memberOf widgets/data-viewer/data-viewer
        */
        _toggleCheckBox: function (checked, rowObject) {
            this._existingRowData = this._dataViewerTable.row(rowObject).data();
            if (checked) {
                this._existingRowData[0] = this._addCheckBox(null, rowObject.childNodes[0].childNodes[0].childNodes[0].id, true);
            } else {
                this._existingRowData[0] = this._addCheckBox(null, rowObject.childNodes[0].childNodes[0].childNodes[0].id, false);
            }
            if (this._dataViewerTable) {
                if (this._existingRowData) {
                    this._dataViewerTable.row(rowObject).data(this._existingRowData);
                }
            }
        },

        /** FEATURE SELECTION/DE-SELECTION **/

        /** DEPENDENT FIELDS **/

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
        * This function is used to change the value of dependent field
        * @memberOf widgets/data-viewer/data-viewer
        */
        _changeValueOfDependentField: function (id) {
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
                                    // change value if dependent field contains text input control
                                    if (className.indexOf("esriCTTextInput") > -1) {
                                        this._updatedTextInputControl.push({
                                            "control": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0],
                                            "newValue": defaultValue,
                                            "oldValue": this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].value
                                        });
                                        this._lastSelectedRow.currentTarget.childNodes[i].childNodes[0].value = defaultValue;
                                    } else if (className.indexOf("esriCTCodedDomain") > -1) {
                                        // change value if dependent field contains drop down control
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
                                        // change value if dependent field contains date picker control
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
        },

        /** DEPENDENT FIELDS **/

        /** UPDATE FIELD **/

        /**
        * This function is used to update feature
        * @param{string} new value of field that needs to be updated
        * @param{string} field in which value needs to be updated
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updateFeature: function (newValue, field) {
            try {
                var featureLayerQuery;
                featureLayerQuery = new Query();
                featureLayerQuery.outSpatialReference = this.map.spatialReference;
                featureLayerQuery.objectIds = [parseInt(this._featureObjectID, 10)];
                featureLayerQuery.returnGeometry = true;
                featureLayerQuery.outFields = ["*"];
                this._selectedOperationalLayer.queryFeatures(featureLayerQuery, lang.hitch(this, function (featureSet) {
                    if (featureSet.features.length > 0) {
                        var i, type, obj, attrname, attr;
                        attr = {};
                        attr[this._selectedOperationalLayer.objectIdField] = parseInt(this._featureObjectID, 10);
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
                        // If a user has changed dependent drop down than update different attributes of graphics
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
                            // Once a feature is created with its updated value do apply edits
                            this._selectedOperationalLayer.applyEdits(null, [this._updatedGraphic], null, lang.hitch(this, function (adds, updates, deletes) {
                                if (updates[0].success) {
                                    // Update value that is stored inside date picker control
                                    var className, newValueArr, newValueStr;
                                    className = this._lastEditedControl.currentTarget.className;
                                    if (className.indexOf("esriCTDateTimePicker") > -1) {
                                        if (this._lastEditedControl.currentTarget.parentElement && this._lastEditedControl.currentTarget.parentElement.childNodes && this._lastEditedControl.currentTarget.parentElement.childNodes[0] && this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes && this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0]) {
                                            newValueArr = this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0].name.split('|');
                                            if (newValue) {
                                                newValueStr = newValueArr[0] + "|" + parseInt(newValue, 10) + "|" + newValueArr[2];
                                            } else {
                                                newValueStr = newValueArr[0] + "||" + newValueArr[2];
                                            }
                                            this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0].name = newValueStr;
                                        }
                                    }
                                    // Update value that is stored inside text input control
                                    if (className.indexOf("esriCTTextInput") > -1) {
                                        this._lastEditedControl.currentTarget.defaultValue = this._lastEditedControl.currentTarget.value;
                                    }
                                    // Update value that is stored inside drop down control
                                    if (className.indexOf("esriCTCodedDomain") > -1) {
                                        this._lastEditedControl.currentTarget.name = newValue;
                                    }
                                    if (this._isDropDownClicked) {
                                        this._isDropDownClicked = false;
                                    }
                                    // Update value that is stored inside dependent controls
                                    if (!$.isEmptyObject(this._updatedFieldAttribute)) {
                                        this._updateDependentFieldControls();
                                    }
                                    // Refresh layer once its value gets updated
                                    this.map.getLayer(this.selectedOperationalLayerID).refresh();
                                    this._updateFieldInActivatedFeaturesList(field);
                                    this.appUtils.hideLoadingIndicator();
                                } else {
                                    // If update fails then retain its old value
                                    this._retainOldValue();
                                    this.appUtils.showError(updates[0].error.message);
                                }
                            }), lang.hitch(this, function (err) {
                                // If update fails then retain its old value
                                this._retainOldValue();
                                this.appUtils.showError(err.message);
                            }));
                        } else {
                            // If update fails then retain its old value
                            this._retainOldValue();
                            this.appUtils.showError(obj.errorMessage);
                        }
                    } else {
                        // If update fails then retain its old value
                        this._retainOldValue();
                    }
                }), lang.hitch(this, function (err) {
                    // If update fails then retain its old value
                    this._retainOldValue();
                    this.appUtils.showError(err.message);
                }));
            } catch (err) {
                // If update fails then retain its old value
                this._retainOldValue();
            }
        },

        /**
        * This function is used to update field in selected features list
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updateFieldInActivatedFeaturesList: function (field) {
            var i, objectID, updatedObjectID, featureQuery, featureLayer;
            // If some features are selected and updated after that, so it also needs to be updated in the selected feature record list
            if (this._isPointLayer) {
                // Update value in selected features records containing point geometry
                updatedObjectID = this._updatedGraphic.attributes[this._selectedOperationalLayer.objectIdField];
                for (i = 0; i < this._activeRowGraphicsLayer.graphics.length; i++) {
                    objectID = this._activeRowGraphicsLayer.graphics[i].attributes[this._selectedOperationalLayer.objectIdField];
                    if (objectID === updatedObjectID) {
                        this._activeRowGraphicsLayer.graphics[i].attributes[field] = this._updatedGraphic.attributes[field];
                        break;
                    }
                }
            } else {
                // Update value in selected features records containing other than point geometry
                featureQuery = new Query();
                objectID = this._updatedGraphic.attributes[this._selectedOperationalLayer.objectIdField];
                featureQuery.objectIds = [parseInt(objectID, 10)];
                featureQuery.outSpatialReference = this.map.spatialReference;
                featureQuery.returnGeometry = true;
                featureQuery.outFields = ["*"];
                this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_SUBTRACT);
                this.map.getLayer(this.selectedOperationalLayerID).refresh();
                // Consider if feature is selected & updated with certain value.
                // Then that particular value of feature needs to be updated in its selected feature memory.
                // If a new object is not created than the previous value of feature appears and not the updated one.
                featureLayer = new FeatureLayer(this._selectedOperationalLayer.url);
                featureLayer.queryFeatures(featureQuery, lang.hitch(this, function (featureSet) {
                    this._selectedOperationalLayer.setSelectionSymbol(this._getHighLightSymbol(featureSet.features[0]));
                    this._selectedOperationalLayer.selectFeatures(featureQuery, FeatureLayer.SELECTION_ADD);
                }), function (err) {
                    this.appUtils.showError(err.message);
                });
            }
        },

        /**
        * This function is used to update dependent field controls
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updateDependentFieldControls: function () {
            var i, newValueArr, newValueStr;
            this._detachEvents();
            // Update dependent text input control
            for (i = 0; i < this._updatedTextInputControl.length; i++) {
                this._updatedTextInputControl[i].control.defaultValue = this._updatedTextInputControl[i].newValue;
            }
            // Update dependent drop down control
            for (i = 0; i < this._updatedDropDownControl.length; i++) {
                this._updatedDropDownControl[i].control.name = this._updatedDropDownControl[i].newValue;
            }
            // Update dependent date picker control
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
        },

        /**
        * This function is used to retain old value in control if updation of feature fails
        * @memberOf widgets/data-viewer/data-viewer
        */
        _retainOldValue: function () {
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
                if (this._lastEditedControl.currentTarget.parentElement && this._lastEditedControl.currentTarget.parentElement.childNodes && this._lastEditedControl.currentTarget.parentElement.childNodes[0] && this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes && this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0]) {
                    date = this._lastEditedControl.currentTarget.parentElement.childNodes[0].childNodes[0].name.split('|')[1];
                    if (date === "null") {
                        this._isDatePickerValueRetained = true;
                        $(this._lastEditedControl.currentTarget).data("DateTimePicker").setDate(null);
                    } else {
                        this._isDatePickerValueRetained = true;
                        $(this._lastEditedControl.currentTarget).data("DateTimePicker").setDate(parseInt(date, 10));
                    }
                }
            }
            this.appUtils.hideLoadingIndicator();
        },

        /**
        * This function is used to update internal data of data-viewer
        * @memberOf widgets/data-viewer/data-viewer
        */
        _updateInternalData: function (index, value) {
            // After updating data internal cache data of data-viewer should also be updated so that sorting is executed properly
            if ((this._existingRowData) && (this._existingRowData[index])) {
                switch (typeof this._existingRowData[index]) {
                case "string":
                    if (typeof value === "string") {
                        this._existingRowData[index] = value;
                    }
                    break;
                case "object":
                    if ((this._existingRowData[index] === null) && (value !== "" && value !== null)) {
                        this._existingRowData[index] = value;
                    }
                    break;
                case "number":
                    if (typeof value === "number") {
                        this._existingRowData[index] = value;
                    }
                    break;
                }
            } else if ((this._existingRowData) && (this._existingRowData[index] === null || this._existingRowData[index] === "") && (value !== "" && value !== null)) {
                this._existingRowData[index] = value;
            }
        },

        /** UPDATE FIELD **/

        /**
        * This function is used to extract field
        * @memberOf widgets/data-viewer/data-viewer
        */
        _extractField: function (className, index) {
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
        },

        /** VALIDATION **/

        /**
        * This function is used to check whether null value is allowed in field or not
        * @param{string} field that allows null value or not
        * @memberOf widgets/data-viewer/data-viewer
        */
        _isNullableValueAllowed: function (field) {
            var i;
            for (i = 0; i < this._displayColumn.length; i++) {
                if (this._displayColumn[i].fieldName === field) {
                    if (this._displayColumn[i].nullable) {
                        return true;
                    }
                }
            }
            return false;
        },

        /**
        * This function is used to check whether value entered is in range or not
        * @param{number} value that needs to be checked
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _isValueInRange: function (field, value) {
            var rangeObj = { "valueInRange": true, "errorMessage": null },
                i,
                error;
            for (i = 0; i < this._displayColumn.length; i++) {
                if (this._displayColumn[i].fieldName === field) {
                    if (this._displayColumn[i].domain) {
                        // Check if value entered by user is within valid range
                        if ((value >= this._displayColumn[i].domain.minValue) && (value <= this._displayColumn[i].domain.maxValue)) {
                            rangeObj.valueInRange = true;
                        } else {
                            error = string.substitute(this.appConfig.i18n.dataviewer.invalidNumericRange, {
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
        },

        /**
        * This function is used to validate data that is entered in text-input during update
        * @param{string} data type of value
        * @param{string} field containing value
        * @memberOf widgets/data-viewer/data-viewer
        */
        _validateControl: function (inputType, field) {
            var inputValue, className, typeCastedInputValue, decimal, float, rangeObj, obj = { "isValueValid": true, "errorMessage": null };
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
                            obj.errorMessage = this.appConfig.i18n.dataviewer.invalidString;
                        }
                        break;
                    case "esriFieldTypeSmallInteger":
                        typeCastedInputValue = parseFloat(inputValue);
                        rangeObj = this._isValueInRange(field, typeCastedInputValue);
                        if (rangeObj.valueInRange) {
                            if ((inputValue.match(decimal) && typeCastedInputValue >= -32768 && typeCastedInputValue <= 32767) && inputValue.length !== 0) {
                                obj.isValueValid = true;
                            } else {
                                obj.isValueValid = false;
                                obj.errorMessage = this.appConfig.i18n.dataviewer.invalidSmallNumber;
                            }
                        } else {
                            obj.isValueValid = false;
                            obj.errorMessage = rangeObj.errorMessage;
                        }
                        break;
                    case "esriFieldTypeInteger":
                        typeCastedInputValue = parseFloat(inputValue);
                        rangeObj = this._isValueInRange(field, typeCastedInputValue);
                        if (rangeObj.valueInRange) {
                            if ((inputValue.match(decimal) && typeCastedInputValue >= -2147483648 && typeCastedInputValue <= 2147483647) && inputValue.length !== 0) {
                                obj.isValueValid = true;
                            } else {
                                obj.isValueValid = false;
                                obj.errorMessage = this.appConfig.i18n.dataviewer.invalidNumber;
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
                                obj.errorMessage = this.appConfig.i18n.dataviewer.invalidFloat;
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
                                obj.errorMessage = this.appConfig.i18n.dataviewer.invalidDouble;
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
        },

        /** VALIDATION **/

        /** MANUAL REFRESH **/

        /**
        * This function is used to do manual refresh
        * @memberOf widgets/data-viewer/data-viewer
        */
        _doManualRefresh: function () {
            var extentDeferred = new Deferred();
            extentDeferred = this.map.setExtent(this.lastSelectedWebMapExtent, true);
            extentDeferred.then(lang.hitch(this, function () {
                var zoomLevelDeferred = new Deferred();
                zoomLevelDeferred = this.map.setZoom(this.lastMapZoomLevel);
                zoomLevelDeferred.then(lang.hitch(this, function () {
                    this._newDefinitionExpression = this._existingDefinitionExpression;
                    this._resetDefinitionExpression();
                }));
            }));
        },

        /** MANUAL REFRESH **/

        /** HIGHLIGHT SYMBOL **/

        /**
        * This function is used to get symbol i.e, used for highlighting feature.
        * For point feature graphic layer is used to highlighting it. Because arcgis api do not have capability
        * of highlighting point symbol with cross-hair. Other than point geometry like polygon, polyline, etc...
        * selectFeatures method of feature layer is used which has the capability of highlighting it with cyan color
        * @param{object} selected feature which needs to be highlighted
        * @memberOf widgets/data-viewer/data-viewer
        */
        _getHighLightSymbol: function (graphic, activeRow) {
            var i, symbol, point, graphics, symbolWidth, symbolFillColor, height, width, size, isSymbolFound, graphicInfoValue, layerInfoValue;
            isSymbolFound = false;
            // If feature geometry is of type point, add a crosshair symbol
            // If feature geometry is of type polyline, highlight the line
            // If feature geometry is of type polygon, highlight the boundary of the polygon
            switch (graphic.geometry.type) {
            case "point":
                if (activeRow) {
                    symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, null, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color(this.appConfig.activeRow), 3));
                } else {
                    symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, null, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), 3));
                }
                symbol.setColor(null);
                symbol.size = 30; //set default Symbol size which will be used in case symbol not found.
                if (this._selectedOperationalLayer.renderer.symbol) {
                    isSymbolFound = true;
                    if (this._selectedOperationalLayer.renderer.symbol.hasOwnProperty("height") && this._selectedOperationalLayer.renderer.symbol.hasOwnProperty("width")) {
                        height = this._selectedOperationalLayer.renderer.symbol.height;
                        width = this._selectedOperationalLayer.renderer.symbol.width;
                        // To display cross hair properly around feature its size needs to be calculated
                        size = (height > width) ? height : width;
                        size = size + 10;
                        symbol.size = size;
                    }
                    if (this._selectedOperationalLayer.renderer.symbol.hasOwnProperty("size")) {
                        if (!size || size < this._selectedOperationalLayer.renderer.symbol.size) {
                            symbol.size = this._selectedOperationalLayer.renderer.symbol.size + 10;
                        }
                    }
                    if (this._selectedOperationalLayer.renderer.symbol.hasOwnProperty("xoffset")) {
                        symbol.xoffset = this._selectedOperationalLayer.renderer.symbol.xoffset;
                    }
                    if (this._selectedOperationalLayer.renderer.symbol.hasOwnProperty("yoffset")) {
                        symbol.yoffset = this._selectedOperationalLayer.renderer.symbol.yoffset;
                    }
                } else if ((this._selectedOperationalLayer.renderer.infos) && (this._selectedOperationalLayer.renderer.infos.length > 0)) {
                    for (i = 0; i < this._selectedOperationalLayer.renderer.infos.length; i++) {
                        if (this._selectedOperationalLayer.typeIdField) {
                            graphicInfoValue = graphic.attributes[this._selectedOperationalLayer.typeIdField];
                        } else if (this._selectedOperationalLayer.renderer.attributeField) {
                            graphicInfoValue = graphic.attributes[this._selectedOperationalLayer.renderer.attributeField];
                        }
                        layerInfoValue = this._selectedOperationalLayer.renderer.infos[i].value;
                        if (graphicInfoValue !== null && graphicInfoValue !== "") {
                            if (graphicInfoValue.toString() === layerInfoValue.toString()) {
                                isSymbolFound = true;
                                if (this._selectedOperationalLayer.renderer.infos[i].symbol.hasOwnProperty("height") && this._selectedOperationalLayer.renderer.infos[i].symbol.hasOwnProperty("width")) {
                                    height = this._selectedOperationalLayer.renderer.infos[i].symbol.height;
                                    width = this._selectedOperationalLayer.renderer.infos[i].symbol.width;
                                    // To display cross hair properly around feature its size needs to be calculated
                                    size = (height > width) ? height : width;
                                    size = size + 10;
                                    symbol.size = size;
                                }
                                if (this._selectedOperationalLayer.renderer.infos[i].symbol.hasOwnProperty("size")) {
                                    if (!size || size < this._selectedOperationalLayer.renderer.infos[i].symbol.size) {
                                        symbol.size = this._selectedOperationalLayer.renderer.infos[i].symbol.size + 10;
                                    }
                                }
                                if (this._selectedOperationalLayer.renderer.infos[i].symbol.hasOwnProperty("xoffset")) {
                                    symbol.xoffset = this._selectedOperationalLayer.renderer.infos[i].symbol.xoffset;
                                }
                                if (this._selectedOperationalLayer.renderer.infos[i].symbol.hasOwnProperty("yoffset")) {
                                    symbol.yoffset = this._selectedOperationalLayer.renderer.infos[i].symbol.yoffset;
                                }
                            }
                        }
                    }
                    if (!isSymbolFound) {
                        if (this._selectedOperationalLayer.renderer.defaultSymbol) {
                            isSymbolFound = true;
                            if (this._selectedOperationalLayer.renderer.defaultSymbol.hasOwnProperty("height") && this._selectedOperationalLayer.renderer.defaultSymbol.hasOwnProperty("width")) {
                                height = this._selectedOperationalLayer.renderer.defaultSymbol.height;
                                width = this._selectedOperationalLayer.renderer.defaultSymbol.width;
                                // To display cross hair properly around feature its size needs to be calculated
                                size = (height > width) ? height : width;
                                size = size + 10;
                                symbol.size = size;
                            }
                            if (this._selectedOperationalLayer.renderer.defaultSymbol.hasOwnProperty("size")) {
                                if (!size || size < this._selectedOperationalLayer.renderer.defaultSymbol.size) {
                                    symbol.size = this._selectedOperationalLayer.renderer.defaultSymbol.size + 10;
                                }
                            }
                            if (this._selectedOperationalLayer.renderer.defaultSymbol.hasOwnProperty("xoffset")) {
                                symbol.xoffset = this._selectedOperationalLayer.renderer.defaultSymbol.xoffset;
                            }
                            if (this._selectedOperationalLayer.renderer.defaultSymbol.hasOwnProperty("yoffset")) {
                                symbol.yoffset = this._selectedOperationalLayer.renderer.defaultSymbol.yoffset;
                            }
                        }
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
                if (activeRow) {
                    symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color(this.appConfig.activeRow), symbolWidth);
                } else {
                    symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), symbolWidth);
                }
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
                if (activeRow) {
                    symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color(this.appConfig.activeRow), 4), symbolFillColor);
                } else {
                    symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), 4), symbolFillColor);
                }
                return symbol;
            }
        }

        /** HIGHLIGHT SYMBOL **/
    });
});
