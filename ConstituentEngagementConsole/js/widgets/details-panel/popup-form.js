/*global define,dojo,$,setTimeout,confirm*/
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
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/_base/kernel",
    "dojo/dom-construct",
    "dojo/dom-class",
    "dojo/query",
    "dojo/dom",
    "dojo/string",
    "dojo/on",
    'dojo/dom-attr',
    "esri/graphic",
    "dojo/dom-style",
    "dojo/dom-geometry",
    "dojo/text!./templates/popup-form.html"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    lang,
    array,
    kernel,
    domConstruct,
    domClass,
    query,
    dom,
    string,
    on,
    domAttr,
    Graphic,
    domStyle,
    domGeom,
    popupForm
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: popupForm,
        _sortedFields: [],
        i18n: {},
        item: null,
        _rangeHelpText: null,
        _layerHasReportedByField: false,
        selectedLayer: null,
        _featureAttributes: {},

        /**
        * This function is called when widget is constructed.
        * @param{object} configData
        * @constructor
        * @memberOf widgets/details-panel/popup-form
        */
        constructor: function (popupData) {
            this.inherited(arguments);
            // check if configData is present, then merge it with config object
            if (popupData) {
                lang.mixin(this, popupData);
            }
            this.i18n = this.config.i18n;
        },

        /**
        * Widget post-create, called automatically in widget creation
        * life cycle, after constructor. Sets class variables.
        * @memberOf widgets/details-panel/popup-form
        */
        postCreate: function () {
            this.inherited(arguments);
            this._featureAttributes = lang.clone(this.selectedFeatures[0].attributes);
            if (this.selectedFeatures.length > 1) {
                this._filterCommonAttributes();
            }
            this._initializePopupForm();
            // click event for submit popup form on submit button click
            on(this.postPopupButton, 'click', lang.hitch(this, function () {
                this._submitPopupForm();
            }));
            on(this.cancelPopupButton, 'click', lang.hitch(this, function (evt) {
                this.onCancelButtonClick(evt);
            }));
        },

        /**
        * This function is designed to handle processing after any DOM fragments have been actually added to the document.
        * @memberOf widgets/details-panel/popup-form
        */
        startup: function () {
            this.inherited(arguments);
        },

        /**
        * This function is designed to handle creation of popup form.
        * @memberOf widgets/details-panel/popup-form
        */
        _initializePopupForm: function () {
            this._filterLayerFields();
            // Sort fields array by type
            this._sortedTypeFormElement();
        },

        /**
        * fetch common attribute values from the selected features
        * @memberOf widgets/details-panel/popup-form
        */
        _filterCommonAttributes: function () {
            var field, i;
            for (field in this._featureAttributes) {
                if (this._featureAttributes.hasOwnProperty(field)) {
                    for (i = 0; i < this.selectedFeatures.length; i++) {
                        if (this.selectedFeatures[i].attributes && this.selectedFeatures[i].attributes.hasOwnProperty(field)) {
                            if (this.selectedFeatures[i].attributes[field] !== this._featureAttributes[field]) {
                                this._featureAttributes[field] = "";
                                break;
                            }
                        }
                    }
                }
            }
        },
        /**
        * Select fields from info pop up
        * @param{object} Map response
        * @memberOf widgets/details-panel/popup-form
        */
        _filterLayerFields: function () {
            var layerFields = [],
                excludeDataTypes = [],
                layerField;
            this._sortedFields = [];
            // DataTypes to be excluded from Geo Form
            excludeDataTypes = ["esriFieldTypeOID", "esriFieldTypeBlob", "esriFieldTypeRaster", "esriFieldTypeGUID", "esriFieldTypeGlobalID", "esriFieldTypeXML"];
            if (this.itemInfos && this.itemInfos.itemData) {
                //To maintain the order of the fields form pop up configuration first get all fields info in layerFields array
                //then iterate through popupInfo and create fields to be shown in geo form.
                // Create layerFields Key value pair according to fieldName
                array.forEach(this.selectedLayer.fields, lang.hitch(this, function (layerField) {
                    layerFields[layerField.name] = layerField;
                }));
                // Iterate through all the fields in popup info,Merge field info from layer details and popup details and create sortedFields array.
                array.forEach(this.popupInfo.fieldInfos, lang.hitch(this, function (popupField) {
                    // If 'ReportedBy' field is present in the layer, set _layerHasReportedByField flag
                    if (popupField.fieldName === this.config.reportedByField) {
                        this._layerHasReportedByField = true;
                    }
                    // have to do Check for reported by field in case logged in user
                    layerField = layerFields[popupField.fieldName];
                    // check if layer is editable
                    if (layerField && popupField.isEditable && $.inArray(layerField.type, excludeDataTypes) === -1) {
                        layerField.alias = popupField.label;
                        layerField.editable = popupField.isEditable;
                        layerField.tooltip = popupField.tooltip;
                        layerField.stringFieldOption = popupField.stringFieldOption;
                        // if field has format
                        if (popupField.format) {
                            layerField.format = popupField.format;
                        }
                        // if layer has type field set subTypes else set typeField as false
                        if (layerField.name === this.selectedLayer.typeIdField) {
                            layerField.subTypes = this.selectedLayer.types;
                            layerField.typeField = true;
                        } else {
                            layerField.typeField = false;
                        }
                        this._sortedFields.push(layerField);
                    }
                }));
            }
        },

        /**
        * Sort form elements by type
        * @memberOf widgets/details-panel/popup-form
        */
        _sortedTypeFormElement: function () {
            var hasDomainValue, hasDefaultValue;
            array.forEach(this._sortedFields, lang.hitch(this, function (currentField, index) {
                // Set true/false value to property 'isTypeDependent' of the field.
                currentField.isTypeDependent = false;
                array.forEach(this.selectedLayer.types, function (currentType) {
                    hasDomainValue = null;
                    hasDefaultValue = null;
                    hasDomainValue = currentType.domains[currentField.name];
                    hasDefaultValue = currentType.templates[0].prototype.attributes[currentField.name];
                    // If hasDefaultValue is 0 then we need to set isTypeDependent property to true
                    if (hasDefaultValue === 0) {
                        hasDefaultValue = true;
                    }
                    if ((hasDomainValue && hasDomainValue.type !== "inherited") || (hasDefaultValue && !currentField.typeField)) {
                        currentField.isTypeDependent = true;
                    }
                });
                // If isTypeDependent is true then it will return true
                if (currentField.isTypeDependent) {
                    return true;
                }
                // Create form elements (referenceNode is passed null)
                this._createFormElement(currentField, index, null);
            }));
        },

        /**
        * This function is called when click event occurs on submit buttons click
        * @memberOf widgets/details-panel/popup-form
        */
        _submitPopupForm: function () {
            var erroneousFields = [], featureArray = [], updatedAttributes = {}, confirmationMsg, isConfirmed = true;
            erroneousFields = this._checkForFields();
            if (erroneousFields.length !== 0) {
                // Scroll to the erroneous field node
                $('#tabContent').animate({
                    scrollTop: erroneousFields[0].offsetTop
                }, 1000);
            } else {
                //get confirmation from user if multiple features are selected to update
                if (this.selectedFeatures.length > 1) {
                    confirmationMsg = string.substitute(this.config.i18n.geoform.updateFeaturesConfirmationMsg, {
                        count: this.selectedFeatures.length
                    });
                    //display confirmation message
                    isConfirmed = confirm(confirmationMsg);
                }
                if (isConfirmed) {
                    //get update attribute values
                    updatedAttributes = this._getUpdatedAttributes();
                    //get features to be updated on layer
                    featureArray = this._getFeaturesToBeUpdated(updatedAttributes);
                    //Show loading indicator
                    this.appUtils.showLoadingIndicator();
                    // Add the popup to the popup table
                    this.selectedLayer.applyEdits(null, featureArray, null, lang.hitch(this, function () {
                        //send last feature to the handler
                        this.onPopupFormSubmitted(this.selectedFeatures[this.selectedFeatures.length - 1]);
                    }), lang.hitch(this, function (err) {
                        //Hide loading indicator
                        this.appUtils.hideLoadingIndicator();
                        // Show error message
                        this.appUtils.showError(err);
                        // Show error message in header
                        this._showHeaderMessageDiv();
                    }));
                } else {
                    this.appUtils.hideLoadingIndicator();
                }
            }
        },

        /**
        * get updated attributes from the form input elements
        * @memberOf widgets/details-panel/popup-form
        */
        _getUpdatedAttributes: function () {
            var key, value, attributes = {}, datePicker;
            array.forEach(query(".popupFormQuestionare .form-control", this.enterPopupContainer), lang.hitch(this, function (currentField) {
                // get id of the field
                key = domAttr.get(currentField, "id");
                if (currentField.value !== "") {
                    // check for date time picker and assign value
                    if (domClass.contains(currentField, "hasDatetimepicker")) {
                        datePicker = $(currentField.parentNode).data('DateTimePicker').date();
                        if (datePicker) {
                            // need to get time of date in ms for service
                            value = datePicker.valueOf();
                        }
                    } else {
                        value = lang.trim(currentField.value);
                    }
                    // Assign value to the attributes
                    attributes[key] = value;
                } else if (currentField.value !== this._featureAttributes[key]) {
                    attributes[key] = null;
                }
            }));
            return attributes;
        },

        /**
        * get selected features to be updated on layer
        * @memberOf widgets/details-panel/popup-form
        */
        _getFeaturesToBeUpdated: function (updatedAttributes) {
            var featureArray = [], featureData, fieldName;
            array.forEach(this.selectedFeatures, lang.hitch(this, function (feature) {
                // Create instance of graphic
                featureData = new Graphic();
                // create an empty array object
                featureData.attributes = {};
                for (fieldName in updatedAttributes) { //ignore jslint
                    if (updatedAttributes.hasOwnProperty(fieldName)) {
                        featureData.attributes[fieldName] = updatedAttributes[fieldName];
                    }
                }
                featureData.attributes[this.selectedLayer.objectIdField] = feature.attributes[this.selectedLayer.objectIdField];
                featureArray.push(featureData);
            }));
            return featureArray;
        },
        /**
        * This function is called when click event occurs on submit buttons click
        * to check for errors, all the fields in Popup form
        * @memberOf widgets/details-panel/popup-form
        */
        _checkForFields: function () {
            var erroneousFields = [], currentInput;
            // for all the fields in popup form
            array.forEach(query(".popupFormQuestionare"), lang.hitch(this, function (currentField) {
                currentInput = query(".form-control", currentField)[0];
                // to check for errors in form before submitting.
                if (currentInput) {
                    // condition to check if the entered values are erroneous.
                    if (domClass.contains(currentField, "has-error") && query("select", currentField).length === 0) {
                        erroneousFields.push(currentField);
                    }
                    // condition to check if mandatory fields are kept empty.
                    if (currentInput.value === "" && domClass.contains(currentField, "mandatory")) {
                        if (this._featureAttributes[currentInput.id] !== currentInput.value) {
                            this._validateUserInput(this.config.i18n.geoform.requiredFields, currentField, currentInput.value, true);
                            erroneousFields.push(currentField);
                        }
                    } else if (domClass.contains(currentField, "mandatory")) {
                        this._validateUserInput(false, currentField, currentInput.value, true);
                    }
                }
            }));
            return erroneousFields;
        },

        /**
        * Create error message container
        * @param{string} errorMessage, error massage which need to show on error
        * @param{object} errorMessageNode, node to bind error massage
        * @memberOf widgets/details-panel/popup-form
        */
        _showErrorMessageDiv: function (errorMessage, errorMessageNode) {
            var errorNode, place = "after";
            // create error handler container
            errorNode = domConstruct.create("div", {
                className: "alert alert-danger errorMessage",
                id: "errorMessage",
                innerHTML: errorMessage
            }, null);
            domConstruct.place(errorNode, errorMessageNode, place);
        },

        /**
        * Display message on header of form
        * @memberOf widgets/details-panel/popup-form
        */
        _showHeaderMessageDiv: function () {
            on(this.headerMessageButton, "click", lang.hitch(this, function () {
                if (domClass.contains(this.headerMessageDiv, "esriCTVisible")) {
                    domClass.replace(this.headerMessageDiv, "esriCTHidden", "esriCTVisible");
                }
            }));
            if (domClass.contains(this.headerMessageDiv, "esriCTHidden")) {
                domClass.replace(this.headerMessageDiv, "esriCTVisible", "esriCTHidden");
            }
        },

        /**
        * Remove the error message container.
        * @param{object} node, node to bind error massage
        * @memberOf widgets/details-panel/popup-form
        */
        _removeErrorNode: function (node) {
            if (domClass.contains(node, "errorMessage")) {
                // destroy parent node
                domConstruct.destroy(node);
            }
        },

        /**
        * Create form elements
        * @param{object} currentField, object of current field in the info pop
        * @param{int} index, index of current field in the array
        * @param{object} referenceNode, Parent Node for dependent field
        * @memberOf widgets/details-panel/popup-form
        */
        _createFormElement: function (currentField, index, referenceNode) {
            var fieldname, labelContent, fieldLabelText, formContent, requireField, userFormNode, fieldAttribute;
            userFormNode = this.popupForm;
            //code to put asterisk mark for mandatory fields and also to give it a mandatory class.
            formContent = domConstruct.create("div", {}, userFormNode);
            // If dependent field has Reference Node
            if (referenceNode) {
                domConstruct.place(formContent, referenceNode, "after");
                domClass.add(formContent, "fade");
                setTimeout(function () {
                    domClass.add(formContent, "in");
                }, 100);
            }
            // If fields are not null able set to mandatory fields
            if (!currentField.nullable || currentField.typeField) {
                domClass.add(formContent, "form-group popupFormQuestionare mandatory");
                requireField = domConstruct.create("small", {
                    className: 'esriCTRequireFieldStyle',
                    innerHTML: this.config.i18n.geoform.requiredField
                }, formContent);
            } else {
                domClass.add(formContent, "form-group popupFormQuestionare");
            }
            // If field has alias
            // else Set field name
            if (currentField.alias) {
                fieldLabelText = currentField.alias;
            } else {
                fieldLabelText = currentField.name;
            }
            // assign field name
            fieldname = currentField.name;
            // Create Label
            labelContent = domConstruct.create("label", {
                "for": fieldname,
                className: "control-label",
                innerHTML: fieldLabelText,
                id: fieldname + "_label_" + index
            }, formContent);
            // Set required field with label
            if (requireField && labelContent) {
                domConstruct.place(requireField, labelContent, "last");
            }
            // set default Values to the fields
            if (this.selectedLayer.templates[0] && !currentField.defaultValue) {
                for (fieldAttribute in this.selectedLayer.templates[0].prototype.attributes) {
                    if (this.selectedLayer.templates[0].prototype.attributes.hasOwnProperty(fieldAttribute)) {
                        if (fieldAttribute.toLowerCase() === fieldname.toLowerCase()) {
                            if (this.selectedLayer.templates[0].prototype.attributes[fieldAttribute] !== null && lang.trim(this.selectedLayer.templates[0].prototype.attributes[fieldAttribute].toString()) !== "") {
                                currentField.defaultValue = this.selectedLayer.templates[0].prototype.attributes[fieldAttribute];
                            }
                        }
                    }
                }
            }
            // If field has coded domain value and typeField set to true then create form elements for domain fields
            // else create form elements for non domain fields
            if (currentField.domain || currentField.typeField) {
                this._createDomainValueFormElements(currentField, formContent, fieldname);
            } else {
                this._createInputFormElements(currentField, formContent, fieldname);
            }
            // Set hint text for range domain Value
            this._createRangeText(currentField, formContent, fieldname);
        },

        /**
        * Create range help text for elements.
        * @param{object} currentField, object of current field in the info pop
        * @param{object} formContent, Parent Node of the field inside geo form
        * @param{string} fieldname, name of the field
        * @memberOf widgets/details-panel/popup-form
        */
        _createRangeText: function (currentField, formContent, fieldname) {
            var options = {};
            // if field is required and field exists then set required field as a true
            if (!currentField.nullable && this.inputContent) {
                this.inputContent.setAttribute("aria-required", true);
                this.inputContent.setAttribute("required", "");
            }
            // if info pop has tooltip then create info popup hint text
            if (currentField.tooltip) {
                domConstruct.create("p", {
                    className: "help-block",
                    innerHTML: currentField.tooltip
                }, formContent);
            }
            // If field has range domain help text
            if (this._rangeHelpText) {
                options = {
                    trigger: 'focus',
                    placement: 'top',
                    container: 'body',
                    content: this._rangeHelpText,
                    html: true
                };
                $('#' + fieldname).popover(options);
                this._rangeHelpText = null;
            }
        },

        /**
        * Create Domain coded value elements of form.
        * @param{object} currentField, object of current field in the info pop
        * @param{object} formContent, Parent Node of the field inside geo form
        * @param{string} fieldname, name of the field
        * @memberOf widgets/details-panel/popup-form
        */
        _createDomainValueFormElements: function (currentField, formContent, fieldname) {
            var inputRangeDateGroupContainer, defaultValue, fieldValue;
            if ((currentField.domain && (currentField.domain.type === 'undefined' || currentField.domain.type === undefined || currentField.domain.type === 'codedValue')) || currentField.typeField) {
                this._createCodedValueFormElements(currentField, formContent, fieldname);
            } else {
                //get field value
                defaultValue = this._featureAttributes[fieldname];
                // if field type is date create date field
                if (currentField.type === "esriFieldTypeDate") {
                    // create notation Icon for date field
                    inputRangeDateGroupContainer = this._addNotationIcon(formContent, "glyphicon-calendar");
                    // create date field
                    this.inputContent = this._createDateField(inputRangeDateGroupContainer, true, fieldname, currentField);
                    if (defaultValue) {
                        fieldValue = new Date(defaultValue);
                        //set date in date picker
                        $(inputRangeDateGroupContainer).data("DateTimePicker").date(fieldValue);
                    } else {
                        this.inputContent.value = "";
                        domClass.remove(this.inputContent.parentNode.parentNode, "has-success");
                    }
                    if (currentField.domain.minValue && currentField.domain.maxValue) {
                        // Assign value to the range help text
                        this._rangeHelpText = string.substitute(this.i18n.geoform.dateRangeHintMessage, {
                            minValue: $(inputRangeDateGroupContainer).data("DateTimePicker").minDate(),
                            maxValue: $(inputRangeDateGroupContainer).data("DateTimePicker").maxDate(),
                            openStrong: "<strong>",
                            closeStrong: "</strong>"
                        });
                    }
                } else {
                    // if field type is integer
                    this._rangeHelpText = this._setRangeForm(currentField, formContent, fieldname);
                }
            }
        },

        /**
        * Create coded value elements of form
        * @param{object} currentField, object of current field in the info pop
        * @param{object} formContent, Parent Node of the field inside geo form
        * @param{string} fieldname, name of the field
        * @memberOf widgets/details-panel/popup-form
        */
        _createCodedValueFormElements: function (currentField, formContent, fieldname) {
            var selectOptions;
            // check for fieldType: if not present create dropdown
            // If present check for fieldType value and accordingly populate the control
            // create controls for select
            this.inputContent = domConstruct.create("select", {
                className: "form-control selectDomain",
                "id": fieldname
            }, formContent);
            selectOptions = domConstruct.create("option", {}, this.inputContent);
            selectOptions.innerHTML = this.config.i18n.geoform.selectDefaultText;
            selectOptions.value = "";
            // On selection Change
            this._codedValueOnChange(currentField);
            // check for domain value and create control for drop down list
            if (currentField.domain && !currentField.typeField) {
                array.forEach(currentField.domain.codedValues, lang.hitch(this, function (currentOption) {
                    selectOptions = domConstruct.create("option", {}, this.inputContent);
                    selectOptions.innerHTML = currentOption.name;
                    selectOptions.value = currentOption.code;
                    // if field contain default value, make that option selected
                    if (this._featureAttributes[fieldname] === currentOption.code) {
                        // set attribute value selected in the select list
                        domAttr.set(this.inputContent, "value", currentOption.code);
                        domClass.add(this.inputContent.parentNode, "has-success");
                    }
                }));
            } else {
                // default values for subtypes(if any) has to be handled here
                array.forEach(currentField.subTypes, lang.hitch(this, function (currentOption) {
                    selectOptions = domConstruct.create("option", {}, this.inputContent);
                    selectOptions.innerHTML = currentOption.name;
                    selectOptions.value = currentOption.id;
                    // if field contain default value, make that option selected
                    if (this._featureAttributes[fieldname] === currentOption.id) {
                        domAttr.set(this.inputContent, "value", currentOption.id);
                        domClass.add(this.inputContent.parentNode, "has-success");
                    }
                }));
                // function call to take appropriate actions on selection of a subtype
                if (currentField.typeField) {
                    this._validateTypeFields({ 'currentTarget': this.inputContent }, currentField);
                }
            }
        },

        /**
        * Take appropriate actions on selection of a subtype
        * @param{object} currentField, object of current field in the info pop
        * @memberOf widgets/details-panel/popup-form
        */
        _codedValueOnChange: function (currentField) {
            // event on change
            on(this.inputContent, "change", lang.hitch(this, function (evt) {
                // function call to take appropriate actions on selection of a subtype
                if (currentField.typeField) {
                    this._validateTypeFields(evt, currentField);
                }
                // To apply has-success class on selection of a valid option
                // else remove has-success class
                if (evt.target.value !== "") {
                    var targetNode = evt.currentTarget || evt.srcElement;
                    if (query(".errorMessage", targetNode.parentNode).length !== 0) {
                        domConstruct.destroy(query(".errorMessage", targetNode.parentNode)[0]);
                        domClass.remove(evt.target.parentNode, "has-error");
                    }
                    domClass.add($(evt.target.parentNode)[0], "has-success");
                } else {
                    domClass.remove($(evt.target.parentNode)[0], "has-success");
                }
            }));
        },

        /**
        * Validate fields defined within subtypes
        * @param{object} currentTarget, on change event current target field
        * @param{object} currentField, object of current field in the info pop
        * @memberOf widgets/details-panel/popup-form
        */
        _validateTypeFields: function (evt, currentField) {
            var selectedType, defaultValue, referenceNode, currentTarget = evt.currentTarget || evt.srcElement;
            // Validation for empty field
            // if field value is empty reset subtypes field
            if (currentTarget.value === "") {
                // if no type is selected, remove type dependent fields
                array.forEach(this._sortedFields, lang.hitch(this, function (currentInput) {
                    if (!currentInput.isTypeDependent) {
                        return true;
                    }
                    // rest form field and show dependent field in the form
                    this._resetSubTypeFields(currentInput);
                }));
            } else {
                // get all the domains and default values of the selected subtype
                array.some(currentField.subTypes, function (currentSelection) {
                    if (currentTarget.value === currentSelection.id.toString()) {
                        selectedType = currentSelection;
                        return true;
                    }
                });

                // initial point of reference to put elements
                referenceNode = dom.byId(this.selectedLayer.typeIdField).parentNode;
                // code to populate type dependent fields
                array.forEach(this._sortedFields, lang.hitch(this, function (currentInput, index) {
                    var field = null, hasDomainValue, hasDefaultValue, fieldAttribute;
                    hasDomainValue = selectedType.domains[currentInput.name];
                    hasDefaultValue = selectedType.templates[0].prototype.attributes[currentInput.name];
                    if ((hasDomainValue && hasDomainValue.type !== "inherited") || (hasDefaultValue && !currentInput.typeField)) {
                        currentInput.isTypeDependent = true;
                    }
                    // condition to filter out fields independent of subtypes
                    if (!currentInput.isTypeDependent) {
                        return true;
                    }
                    // mixin array of sorted field and info pop field
                    array.some(this.selectedLayer.fields, function (layerField) {
                        if (layerField.name === currentInput.name) {
                            field = lang.clone(lang.mixin(layerField, currentInput));
                            return true;
                        }
                    });
                    // fetch the default value of a field for selected subtype.
                    if (selectedType.templates[0]) {
                        for (fieldAttribute in selectedType.templates[0].prototype.attributes) {
                            if (selectedType.templates[0].prototype.attributes.hasOwnProperty(fieldAttribute)) {
                                if (fieldAttribute.toLowerCase() === field.name.toLowerCase()) {
                                    if (selectedType.templates[0].prototype.attributes[fieldAttribute] !== null && lang.trim(selectedType.templates[0].prototype.attributes[fieldAttribute].toString()) !== "") {
                                        defaultValue = selectedType.templates[0].prototype.attributes[fieldAttribute];
                                        field.defaultValue = defaultValue;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    // validate dependent values
                    this._validateTypeFieldsValue(selectedType, field, referenceNode, index);
                }));
            }
        },

        /**
        * Populate domain properties for current field in form elements
        * @param{string} selectedType, current selected type
        * @param{array} field, an array of field details
        * @param{object} referenceNode, parent node for dependent field
        * @param{int} index , field index
        * @memberOf widgets/details-panel/popup-form
        */
        _validateTypeFieldsValue: function (selectedType, field, referenceNode, index) {
            var switchDomainType, i;
            // check for domain values
            for (i in selectedType.domains) {
                if (selectedType.domains.hasOwnProperty(i)) {
                    //condition to find the domain properties for current field
                    if (i === field.name) {
                        switchDomainType = selectedType.domains[i].type || "codedValue";
                        switch (switchDomainType) {
                        case "inherited":
                            break;
                        case "codedValue":
                            if (!field.domain) {
                                field.domain = {};
                            }
                            field.domain.codedValues = selectedType.domains[i].codedValues;
                            break;
                        case "range":
                            // Condition to change the range domain values of field already having domain.
                            if (!field.domain) {
                                field.domain = {};
                            }
                            field.domain.minValue = selectedType.domains[i].minValue;
                            field.domain.maxValue = selectedType.domains[i].maxValue;
                            break;
                        }
                    }
                }
            }
            // executed when the input is already present
            if (dom.byId(field.name)) {
                this._resetSubTypeFields(field);
            }
            // create form elements for dependent values
            this._createFormElement(field, index, referenceNode);
            // assign reference node to the dependent values
            if (field.type === "esriFieldTypeDate" || ((field.type === "esriFieldTypeSingle" || field.type === "esriFieldTypeDouble" || field.type === "esriFieldTypeSmallInteger" || field.type === "esriFieldTypeInteger") && (field.domain && field.domain.type && field.domain.type === "range"))) {
                referenceNode = dom.byId(field.name).parentNode.parentNode;
            } else {
                referenceNode = dom.byId(field.name).parentNode;
            }
        },

        /**
        * Reset subtype fields
        * @param{object} currentInput, parent node to destroy dependent field
        * @memberOf widgets/details-panel/popup-form
        */
        _resetSubTypeFields: function (currentInput) {
            if (currentInput.type === "esriFieldTypeDate" || ((currentInput.type === "esriFieldTypeSmallFloat" || currentInput.type === "esriFieldTypeSmallInteger" || currentInput.type === "esriFieldTypeDouble" || currentInput.type === "esriFieldTypeInteger") && (currentInput.domain && currentInput.domain.type && currentInput.domain.type === "range"))) {
                if (dom.byId(currentInput.name)) {
                    domConstruct.destroy(dom.byId(currentInput.name).parentNode.parentNode);
                }
            } else {
                if (dom.byId(currentInput.name)) {
                    domConstruct.destroy(dom.byId(currentInput.name).parentNode);
                }
            }
        },

        /**
        * Validate date range field
        * @param{object} currentField, object of current field in the info pop
        * @param{object} formContent, Parent Node of the field inside geo form
        * @param{string} fieldname, name of the field
        * @memberOf widgets/details-panel/popup-form
        */
        _setRangeForm: function (currentField, formContent, fieldname) {
            var setStep, stepDivisibility = 'none',
                decimalPoints = 0,
                inputcontentSpinner, rangeHelpText;
            // create container for range text and assign minimum and maximum values
            this.inputContent = domConstruct.create("input", {
                id: fieldname,
                type: "text",
                className: "form-control",
                min: currentField.domain.minValue.toString(),
                max: currentField.domain.maxValue.toString()
            }, formContent);
            domAttr.set(this.inputContent, "data-input-type", currentField.type.replace("esriFieldType", ""));

            // Set minimum and maximum value in range domain
            if (domAttr.get(this.inputContent, "data-input-type") === "Double" || domAttr.get(this.inputContent, "data-input-type") === "Single") {
                decimalPoints = 2;
                if (currentField.domain.minValue - Math.floor(currentField.domain.minValue) === 0.5) {
                    setStep = 0.5;
                } else {
                    setStep = 0.1;
                }
            } else {
                setStep = 1;
                stepDivisibility = 'round';
            }
            // Set Touch Spinner for domain coded numeric values
            inputcontentSpinner = $(this.inputContent).TouchSpin({
                initval: this._featureAttributes[fieldname],
                min: currentField.domain.minValue.toString(),
                max: currentField.domain.maxValue.toString(),
                forcestepdivisibility: stepDivisibility,
                step: setStep,
                boostat: 5,
                decimals: decimalPoints,
                maxboostedstep: 10
            });
            // Touch Spinner on keyup event
            this._inputTouchspinOnKeyup(inputcontentSpinner, currentField);
            // Set minimum and maximum value to the rangeHelpText
            rangeHelpText = string.substitute(this.config.i18n.geoform.numericRangeHintMessage, {
                minValue: currentField.domain.minValue.toString(),
                maxValue: currentField.domain.maxValue.toString(),
                openStrong: "<strong>",
                closeStrong: "</strong>"
            });
            if (this.inputContent.value) {
                domClass.add(this.inputContent.parentNode.parentNode, "has-success");
            }
            // return value
            return rangeHelpText;
        },

        /**
        * Event to address validations for manual entry in the touch-spinner input
        * @param{object} inputcontentSpinner, container of TouchSpin
        * @param{object} currentField, object of current field in the info pop
        * @memberOf widgets/details-panel/popup-form
        */
        _inputTouchspinOnKeyup: function (inputcontentSpinner, currentField) {
            // Touch Spinner on keyup event
            on(this.inputContent, "keyup", function () {
                // replace classes on key up event
                if (this.value === "") {
                    domClass.remove(this.parentNode.parentNode, "has-success");
                } else {
                    domClass.add(this.parentNode.parentNode, "has-success");
                }
            });
            // Touch Spinner event
            on(inputcontentSpinner, "touchspin.on.startspin", lang.hitch(this, function (evt) {
                inputcontentSpinner.trigger("touchspin.updatesettings", {});
                var targetNode = evt.currentTarget || evt.srcElement;
                domClass.add(targetNode.parentNode.parentNode, "has-success");
            }));
            // if not nullable field
            if (!currentField.nullable) {
                this.inputContent.setAttribute("aria-required", true);
                this.inputContent.setAttribute("required", "");
            }
        },
        /**
        * Create input elements of form.
        * @param{object} currentField, object of current field in the info pop
        * @param{object} formContent, Parent Node of the field inside geo form
        * @param{string} fieldname, name of the field
        * @memberOf widgets/details-panel/popup-form
        */
        _createInputFormElements: function (currentField, formContent, fieldname) {
            var inputDateGroupContainer;
            // Create field controls on basis of their type
            switch (currentField.type) {
            case "esriFieldTypeString":
                if (currentField.stringFieldOption === "textbox") {
                    this.inputContent = domConstruct.create("input", {
                        type: "text",
                        className: "form-control",
                        "data-input-type": "String",
                        "maxLength": currentField.length,
                        "id": fieldname
                    }, formContent);
                } else {
                    this.inputContent = domConstruct.create("textarea", {
                        className: "form-control",
                        "data-input-type": "String",
                        "rows": 4,
                        "maxLength": currentField.length,
                        "id": fieldname
                    }, formContent);
                }
                break;
            case "esriFieldTypeSmallInteger":
                this.inputContent = domConstruct.create("input", {
                    type: "text",
                    className: "form-control",
                    "data-input-type": "SmallInteger",
                    "id": fieldname,
                    "pattern": "[0-9]*"
                }, formContent);
                break;
            case "esriFieldTypeInteger":
                this.inputContent = domConstruct.create("input", {
                    type: "text",
                    className: "form-control",
                    "data-input-type": "Integer",
                    "id": fieldname,
                    "pattern": "[0-9]*"
                }, formContent);
                break;
            case "esriFieldTypeSingle":
                this.inputContent = domConstruct.create("input", {
                    type: "text",
                    className: "form-control",
                    "data-input-type": "Single",
                    "id": fieldname
                }, formContent);
                break;
            case "esriFieldTypeDouble":
                this.inputContent = domConstruct.create("input", {
                    type: "text",
                    className: "form-control",
                    "data-input-type": "Double",
                    "id": fieldname,
                    step: ".1"
                }, formContent);
                break;
            case "esriFieldTypeDate":
                // add notation icon for calendar
                inputDateGroupContainer = this._addNotationIcon(formContent, "glyphicon-calendar");
                this.inputContent = this._createDateField(inputDateGroupContainer, false, fieldname, currentField);
                break;
            }
            // add default values to the fields
            this._addInputElementsValue(currentField, formContent);
        },

        /**
        * Clear header message
        * @memberOf widgets/details-panel/popup-form
        */
        clearHeaderMessage: function () {
            //Hide error message div, if it is visible
            if (domClass.contains(this.headerMessageDiv, "esriCTVisible")) {
                domClass.replace(this.headerMessageDiv, "esriCTHidden", "esriCTVisible");
            }
        },

        /**
        * Add default values to the fields
        * @param{object} currentField, object of current field in the info pop
        * @param{object} formContent, Parent Node of the field inside geo form
        * @memberOf widgets/details-panel/popup-form
        */
        _addInputElementsValue: function (currentField, formContent) {
            var fieldValue, defaultValue;
            //get default field value if t is not exist in feature attributes
            defaultValue = this._featureAttributes[this.inputContent.id];
            //check field type and set the value for respective fields
            if (currentField.type !== "esriFieldTypeDate") {
                domAttr.set(this.inputContent, "value", defaultValue);
                if (defaultValue || defaultValue === 0) {
                    domClass.add(formContent, "has-success");
                    this._validateField({ 'target': this.inputContent }, currentField, true);
                }
            } else {
                //check date field value if exists
                if (defaultValue) {
                    fieldValue = new Date(defaultValue);
                    // set format to the date
                    $(this.inputContent.parentElement).data('DateTimePicker').date(fieldValue);
                } else {
                    this.inputContent.value = "";
                }
            }
            // If field type is not date, validate fields on focus out
            if (currentField.type !== "esriFieldTypeDate") {
                // Set Validation for the field on focus out
                on(this.inputContent, "focusout", lang.hitch(this, function (evt) {
                    this._validateField(evt, currentField, true);
                }));
            }
        },

        /**
        * Validate form field
        * @param{object} currentNode, apply validation on current node
        * @param{object} currentField, object of current field in the info pop
        * @param{Boolean} iskeyPress, set Boolean value true or false
        * @memberOf widgets/details-panel/popup-form
        */
        _validateField: function (currentNode, currentField, iskeyPress) {
            var inputType, inputValue, node, typeCastedInputValue, error, targetNode = currentNode.target || currentNode.currentTarget || currentNode.srcElement,
                floatVal = /^[-+]?[0-9]+\.[0-9]+$/, //ignore jslint
                decimal = /^[-+]?[0-9]+$/; //ignore jslint
            // trim current value
            inputValue = lang.trim(targetNode.value);
            // get value of data-input-type
            inputType = domAttr.get(targetNode, "data-input-type");
            // check for the target node and assign the parent node value
            node = $(targetNode.parentNode)[0];
            // Set validation on the field by their types
            switch (inputType) {
            case "String":
                if (inputValue.length !== 0) {
                    this._validateUserInput(false, node, inputValue, iskeyPress);
                } else {
                    error = string.substitute(this.config.i18n.geoform.invalidInputValue, {
                        openStrong: "<strong>",
                        closeStrong: "</strong>"
                    });
                    this._validateUserInput(error, node, inputValue, iskeyPress);
                }
                break;
            case "SmallInteger":
                typeCastedInputValue = parseInt(inputValue, 10);
                if ((inputValue.match(decimal) && typeCastedInputValue >= -32768 && typeCastedInputValue <= 32767) && inputValue.length !== 0) {
                    this._validateUserInput(false, node, inputValue);
                    this._setFormatToValue(currentField, typeCastedInputValue, targetNode);
                } else {
                    error = string.substitute(this.config.i18n.geoform.invalidSmallNumber, {
                        openStrong: "<strong>",
                        closeStrong: "</strong>"
                    });
                    this._validateUserInput(error, node, inputValue, iskeyPress);
                }
                break;
            case "Integer":
                typeCastedInputValue = parseInt(inputValue, 10);
                if ((inputValue.match(decimal) && typeCastedInputValue >= -2147483648 && typeCastedInputValue <= 2147483647) && inputValue.length !== 0) {
                    this._validateUserInput(false, node, inputValue, iskeyPress);
                    this._setFormatToValue(currentField, typeCastedInputValue, targetNode);
                } else {
                    error = string.substitute(this.config.i18n.geoform.invalidNumber, {
                        openStrong: "<strong>",
                        closeStrong: "</strong>"
                    });
                    this._validateUserInput(error, node, inputValue, iskeyPress);
                }
                break;
            case "Single":
                // zero or more occurrence of (+-) at the start of expression
                // at least one occurrence of digits between o-9
                // occurrence of .
                // at least one occurrence of digits between o-9 in the end
                typeCastedInputValue = parseFloat(inputValue);
                if (((inputValue.match(decimal) || inputValue.match(floatVal)) && typeCastedInputValue >= -3.4 * Math.pow(10, 38) && typeCastedInputValue <= 1.2 * Math.pow(10, 38)) && inputValue.length !== 0) {
                    this._validateUserInput(false, node, inputValue, iskeyPress);
                    this._setFormatToValue(currentField, typeCastedInputValue, targetNode);
                } else {
                    error = string.substitute(this.config.i18n.geoform.invalidFloat, {
                        openStrong: "<strong>",
                        closeStrong: "</strong>"
                    });
                    this._validateUserInput(error, node, inputValue, iskeyPress);
                }
                break;
            case "Double":
                typeCastedInputValue = parseFloat(inputValue);
                if (((inputValue.match(decimal) || inputValue.match(floatVal)) && typeCastedInputValue >= -2.2 * Math.pow(10, 308) && typeCastedInputValue <= 1.8 * Math.pow(10, 38)) && inputValue.length !== 0) {
                    this._validateUserInput(false, node, inputValue, iskeyPress);
                    this._setFormatToValue(currentField, typeCastedInputValue, targetNode);
                } else {
                    error = string.substitute(this.config.i18n.geoform.invalidDouble, {
                        openStrong: "<strong>",
                        closeStrong: "</strong>"
                    });
                    this._validateUserInput(error, node, inputValue, iskeyPress);
                }
                break;
            }
        },

        /**
        * Format input values
        * @param{object} currentField, current targeted field
        * @param{int} typeCastedInputValue , input integer value of field
        * @memberOf widgets/details-panel/popup-form
        */
        _setFormatToValue: function (currentField, typeCastedInputValue, node) {
            var toFixedValue;
            // check if field has format and digitSeparator is true
            if (currentField.format && currentField.format.digitSeparator) {
                // set format to the field and set toFixed value on focus out
                toFixedValue = typeCastedInputValue.toFixed(currentField.format.places);
                domAttr.set(node, "value", toFixedValue);
            }
        },

        /**
        * Validate form input
        * @param{string} error, error found in the node
        * @param{object} node, parent node to add and remove classes based on validation
        * @param{string} inputValue , input value
        * @param{string} iskeyPress, check for flag
        * @memberOf widgets/details-panel/popup-form
        */
        _validateUserInput: function (error, node, inputValue, iskeyPress) {
            if (query(".errorMessage", node)[0]) {
                domConstruct.destroy(query(".errorMessage", node)[0]);
            }
            if (!error || (inputValue.length === 0 && !domClass.contains(node, "mandatory"))) {
                domClass.add(node, "has-success");
                domClass.remove(node, "has-error");
            } else {
                // On Error show error massage
                // Change the class of node
                this._showErrorMessageDiv(error, node.children[0]);
                domClass.add(node, "has-error");
                domClass.remove(node, "has-success");
            }
            if (iskeyPress && inputValue.length === 0 && !domClass.contains(node, "mandatory")) {
                domClass.remove(node, "has-error");
                domClass.remove(node, "has-success");
            }
        },

        /**
        * Add calendar notation icon
        * @param{object} formContent, Parent Node to attached field
        * @param{string} imageIconClass,default class of image icon calendar
        * @memberOf widgets/details-panel/popup-form
        */
        _addNotationIcon: function (formContent, imageIconClass) {
            var inputIconGroupContainer, inputIconGroupAddOn;
            // create container for calendar for date time picker
            inputIconGroupContainer = domConstruct.create("div", {
                className: "input-group"
            }, formContent);
            inputIconGroupAddOn = domConstruct.create("span", {
                className: "input-group-addon"
            }, inputIconGroupContainer);
            domConstruct.create("span", {
                className: "glyphicon " + imageIconClass
            }, inputIconGroupAddOn);
            // return Value
            return inputIconGroupContainer;
        },

        /**
        * Create date time picker
        * @param{object} parentNode, parent node to attached date time picker
        * @param{Boolean} isRangeField, set flag true or false depends on range
        * @param{string} fieldname, name of the field
        * @param{object} currentField, object of Current Field Details
        * @memberOf widgets/details-panel/popup-form
        */
        _createDateField: function (parentNode, isRangeField, fieldname, currentField) {
            var dateInputField, picker, selectedDate, minValue, maxValue, value, dateFormat;
            domClass.add(parentNode, "date");
            // create input container for DateTimePicker
            dateInputField = domConstruct.create("input", {
                type: "text",
                value: "",
                className: "form-control hasDatetimepicker",
                "data-input-type": "Date",
                "id": fieldname
            }, parentNode);

            // on focus
            on(dateInputField, "focus", function () {
                if (!isRangeField) {
                    $(this.parentElement).data("DateTimePicker").show();
                }
            });
            // on blur
            on(dateInputField, "blur", function () {
                $(this.parentElement).data("DateTimePicker").hide();
            });
            // Attach datetime picker to the container
            $(parentNode).datetimepicker({ locale: kernel.locale }).on('dp.show', function (evt) {
                var datePickerDialogBox, datePickerDialogBoxPosition;
                datePickerDialogBox = query(".bootstrap-datetimepicker-widget.dropdown-menu")[0];
                if (datePickerDialogBox) {
                    datePickerDialogBoxPosition = domGeom.position(datePickerDialogBox, true);
                    domConstruct.place(datePickerDialogBox, dojo.body(), "first");
                    domStyle.set(datePickerDialogBox, "position", "absolute");
                    domStyle.set(datePickerDialogBox, "top", (datePickerDialogBoxPosition.y + "px"));
                    domStyle.set(datePickerDialogBox, "left", (datePickerDialogBoxPosition.x + "px"));
                    domStyle.set(datePickerDialogBox, "height", (datePickerDialogBoxPosition.h + "px"));
                }
                if (isRangeField) {
                    value = new Date(query("input", this)[0].value);
                    minValue = new Date(currentField.domain.minValue);
                    maxValue = new Date(currentField.domain.maxValue);
                    if ((value > minValue && value > maxValue) || (value < minValue && value < maxValue)) {
                        query("input", this)[0].value = "";
                    }
                }
                // on Datetime picker show event
                picker = $(this).data('DateTimePicker');
                selectedDate = picker.date();
                if (selectedDate === null) {
                    query("input", this)[0].value = "";
                }
                if (query(".errorMessage", query(evt.target).parents(".popupFormQuestionare")[0])[0]) {
                    domConstruct.destroy(query(".errorMessage", query(evt.target).parents(".popupFormQuestionare")[0])[0]);
                }
                domClass.remove(query(evt.target).parents(".popupFormQuestionare")[0], "has-error");
                domClass.add(query(evt.target).parents(".popupFormQuestionare")[0], "has-success");
                if (query("input", this)[0].value === "") {
                    domClass.remove(query(evt.target).parents(".popupFormQuestionare")[0], "has-success");
                    domClass.remove(query(evt.target).parents(".popupFormQuestionare")[0], "has-error");
                }
            }).on('dp.error', function (evt) {
                // on error
                evt.target.value = '';
                domClass.remove(query(evt.target).parents(".popupFormQuestionare")[0], "has-success");
                domClass.add(query(evt.target).parents(".popupFormQuestionare")[0], "has-error");
            }).on("dp.hide", function (evt) {
                // on Datetime picker hide event
                if (query("input", this)[0].value === "") {
                    domClass.remove(query(evt.target).parents(".popupFormQuestionare")[0], "has-success");
                    domClass.remove(query(evt.target).parents(".popupFormQuestionare")[0], "has-error");
                }
            }).on('dp.change', function (evt) {
                // on change
                domClass.add(query(evt.target).parents(".popupFormQuestionare")[0], "has-success");
                domClass.remove(query(evt.target).parents(".popupFormQuestionare")[0], "has-error");
            });
            // if isRangeField is set to true for range Domain value then assign maximum and minimum value to the date time picker
            if (isRangeField) {
                $(parentNode).data("DateTimePicker").maxDate(new Date(currentField.domain.maxValue));
                $(parentNode).data("DateTimePicker").minDate(new Date(currentField.domain.minValue));
            }
            //set date format in date picker
            if (currentField.format && currentField.format.dateFormat) {
                dateFormat = this.appUtils.getDateFormat(currentField.format.dateFormat).dateFormat;
                $(parentNode).data("DateTimePicker").format(dateFormat);
            }
            // return Value
            return dateInputField;
        },

        /**
        * Callback after popup form is submitted
        * @param{item} selected item
        * @memberOf widgets/details-panel/popup-form
        */
        onPopupFormSubmitted: function (feature) {
            return feature;
        },

        /**
        * Callback after clicking cancel button of popup form
        * @memberOf widgets/details-panel/popup-form
        */
        onCancelButtonClick: function (evt) {
            return evt;
        }
    });
});
