define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/string",
    "dijit/_WidgetBase",
    "dojo/_base/array",
    "dojo/Deferred",
    "dojo/dom-attr",
    "dojo/dom",
    "dojo/on",
    "dojo/query",
    "dojo/dom-construct",
    "dojo/dom-class",
    "dojo/dom-style",
    "dijit/Dialog",
    "esri/request",
    "esri/tasks/Geoprocessor",
    "application/ConfigDefaultVariables",
    "dojo/i18n!application/nls/Geoenrichment",
    "dojo/domReady!"
], function (declare, lang, string, _WidgetBase, array, Deferred, domAttr, dom, on, query, domConstruct, domClass, domStyle, Dialog, esriRequest, Geoprocessor, defaultVariables, nls) {
    return declare([_WidgetBase], {
        declaredClass: "application.EnrichLayer",
        map: null,
        userInfo: null,
        categoryTitles: [],
        selectedCountryValue: "US",
        inputDistance: null,
        bufferAreaUnit: null,
        analysisUrl: null,
        selectedDefaultVariables: [],
        nextButtonDiv: null,
        dataBrowserWindow: null,
        populationVariable: [],
        housingVariable: [],
        businessVariable: [],
        enrichVariableCountText: null,
        selectedCountryDefaultVariables: [],
        enrichedLayerName: null,
        bufferType: null,
        enrichCategoriesDialog: null,
        selectedCategory: null,
        executionDialog: null,
        progressString: null,
        createServiceURL: "${portalUrl}content/users/${username}/createService",
        checkLayerNameURL: "${userInfoPortalUrl}/sharing/portals/${userInfoPortalId}/isServiceNameAvailable",
        showCreditsURL: "${gpServiceUrl}/exts/Estimate/EnrichLayer",
        addLayerURL: "${portalUrl}content/users/${username}/items/${webMapInfoItemId}/update",
        refreshURL: "${userInfoPortalUrl}/sharing/content/users/${userInfoUsername}/items/${enrichitemId}/refresh",
        geoEnrichURL: "${analysisUrl}/EnrichLayer/jobs/${enrichJobId}/results/enrichedLayer?f=json&returnType=data&token=${userInfoToken}",
        updateServiceURL: "${userInfoPortalUrl}/sharing/content/users/${username}/items/${enrichitemId}/update",
        deleteURL: "${portalUrl}/sharing/rest/content/users/${username}/items/${enrichitemId}/delete",
        shareURL: "${userInfoPortalUrl}/sharing/content/users/${username}/items/${enrichUrlItemId}/share",
        constructor: function (options) {
            this.map = options.map;
            this.userInfo = options.userInfo;
            this.config = options.config;
            this.analysisUrl = this.userInfo.portal.helperServices.analysis ? this.userInfo.portal.helperServices.analysis.url : null;
            this.categoryTitles = [{
                "title": nls.widgets.geoEnrichment.populationText,
                "tabImage": window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/images/population.png"
            }, {
                "title": nls.widgets.geoEnrichment.housingText,
                "tabImage": window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/images/households.png"
            }, {
                "title": nls.widgets.geoEnrichment.businessText,
                "tabImage": window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/images/business.png"
            }];
        },
        startup: function (layerChange) {
            this._createDataSelectionBox(layerChange);
        },
        _createDataSelectionBox: function (layerChange) {
            if (this.enrichCategoriesDialog && !layerChange) {
                this.enrichCategoriesDialog.show();
            } else {
                this.enrichGeoenrichmentParameterDialog = "";
                var enrichCategoriesDialogContent = this._createEnrichVariableContent();
                this.enrichCategoriesDialog = this._createDialogBox(nls.widgets.geoEnrichment.geoenrichDialogText);
                this.enrichCategoriesDialog.setContent(enrichCategoriesDialogContent);
                this.enrichCategoriesDialog.show();
            }
        },
        _createDialogBox: function (title, isFixedHeight) {
            var dialog = new Dialog({
                title: title,
                "style": "min-width:700",
                "class": "esriDijitDialog",
                draggable: false
            });
            if (isFixedHeight) {
                dialog.domNode.style.width = "400px";
                dialog.domNode.style.height = "350px";
                dialog.domNode.style.overflow = "auto";
            }
            return dialog;
        },
        _createEnrichVariableContent: function () {
            var enrichCategoriesContainer, variableContanier, backButton, enrichVariableContent, previousButtonDiv, selectedVariablesText,
                isSureToReset, viewVariableText, enrichCustomizeLinkText, enrichResetLinkText, prevNextButtonContainer;
            if (dom.byId("enrichDiv")) {
                domConstruct.destroy(dom.byId("enrichDiv"));
            }
            enrichCategoriesContainer = domConstruct.create("div", {
                "id": "enrichDiv",
                "class": "esriConfigurationPanel"
            }, null);
            this.enrichCategoriesSelect = domConstruct.create("div", {}, enrichCategoriesContainer);
            //Options to select between U.S. and Global
            this._createCountrySelectOption(this.enrichCategoriesSelect);
            //Options to select variables to enrich
            this._createVariableSelectOption(this.enrichCategoriesSelect);
            this.customVariableContainer = domConstruct.create("div", {
                "class": "variableContainer"
            }, this.enrichCategoriesSelect);
            this.variableContainerAnchor = domConstruct.create("div", {
                "class": "esriUpArrow"
            }, this.customVariableContainer);
            this.enrichVariableCountText = domConstruct.create("span", {
                "class": "enrichVariableCount"
            }, this.customVariableContainer);
            variableContanier = domConstruct.create("div", {
                "class": "variableContent"
            }, this.customVariableContainer);
            viewVariableText = domConstruct.create("span", {
                "class": "enrichReset",
                "innerHTML": nls.widgets.geoEnrichment.viewVariablestext
            }, variableContanier);
            enrichCustomizeLinkText = domConstruct.create("span", {
                "class": "enrichCustomize",
                "innerHTML": nls.widgets.geoEnrichment.customizeVariables
            }, variableContanier);
            enrichResetLinkText = domConstruct.create("span", {
                "class": "enrichCustomize",
                "innerHTML": nls.widgets.geoEnrichment.resetVariables
            }, variableContanier);
            prevNextButtonContainer = domConstruct.create("div", {
                "class": "esriButtonInnerConfig"
            }, this.enrichCategoriesSelect);
            this.enrichVariableContainer = domConstruct.create("div", {
                "class": "esriVariable"
            }, enrichCategoriesContainer);
            enrichVariableContent = domConstruct.create("div", {
                "class": "enrichVariableContent"
            }, this.enrichVariableContainer);
            backButton = domConstruct.create("button", {
                "class": "esriButton enrichNextPreviousButton",
                "innerHTML": nls.widgets.geoEnrichment.backButtonText
            }, this.enrichVariableContainer);
            this.nextButtonDiv = domConstruct.create("button", {
                "class": "esriButton enrichNextPreviousButton",
                "innerHTML": nls.widgets.geoEnrichment.nextButtonText
            }, prevNextButtonContainer);
            previousButtonDiv = domConstruct.create("button", {
                "class": "esriButton enrichNextPreviousButton lighterButton",
                "innerHTML": nls.widgets.geoEnrichment.prevButtonText
            }, prevNextButtonContainer);
            this._updateDefaultVariables();
            on(previousButtonDiv, "click", lang.hitch(this, function () {
                this._showPreviousDialog();
            }));
            on(backButton, "click", lang.hitch(this, function () {
                this.enrichCategoriesDialog.hide();
                this.closeHandler.remove();
                domStyle.set(this.enrichCategoriesSelect, "display", "block");
                domStyle.set(this.enrichVariableContainer, "display", "none");
                this.enrichCategoriesDialog.show();
            }));
            on(enrichResetLinkText, "click", lang.hitch(this, function () {
                isSureToReset = confirm(nls.widgets.geoEnrichment.message.resetVariableMessage);
                if (!isSureToReset) {
                    return;
                } else {
                    this.selectedDefaultVariables = [];
                    for (var category in this.configDefaultVariables[this.selectedCountryValue]) {
                        if (category === this.selectedCategory) {
                            array.forEach(this.configDefaultVariables[this.selectedCountryValue][category], lang.hitch(this, function (variableLabel) {
                                this.selectedDefaultVariables.push(variableLabel.value);
                            }));
                        }
                    }
                }
                if (this.selectedDefaultVariables.length > 0) {
                    if (domClass.contains(this.nextButtonDiv, "esriButtonDisabled")) {
                        domClass.remove(this.nextButtonDiv, "esriButtonDisabled");
                    }
                } else {
                    domClass.add(this.nextButtonDiv, "esriButtonDisabled");
                }
                this._updateSelectedVariables(this.selectedDefaultVariables.join(), this.selectedCategory);
            }));
            on(viewVariableText, "click", lang.hitch(this, function () {
                this.enrichCategoriesDialog.hide();
                this.closeHandler = on.pausable(this.enrichCategoriesDialog, "hide", lang.hitch(this, function () {
                    domStyle.set(this.enrichVariableContainer, "display", "none");
                    domStyle.set(this.enrichCategoriesSelect, "display", "block");
                    this.enrichCategoriesDialog.show();
                    this.closeHandler.remove();
                }));
                selectedVariablesText = this._updateDataBrowserSelection();
                domStyle.set(this.enrichCategoriesSelect, "display", "none");
                domStyle.set(this.enrichVariableContainer, "display", "block");
                domAttr.set(enrichVariableContent, "innerHTML", "");
                array.forEach(selectedVariablesText, lang.hitch(this, function (variableLabel) {
                    domConstruct.create("div", {
                        "innerHTML": variableLabel,
                        "class": "variableLabel"
                    }, enrichVariableContent);
                    domConstruct.create("div", {
                        "class": "variableLabelSpace"
                    }, enrichVariableContent);
                }));
                this.enrichCategoriesDialog.show();
            }));
            on(enrichCustomizeLinkText, "click", lang.hitch(this, function () {
                var selectedVariables = this._updateDataBrowserSelection();
                this._openDataBrowser(selectedVariables);
            }));
            on(this.nextButtonDiv, "click", lang.hitch(this, function () {
                if (domClass.contains(this.nextButtonDiv, "esriButtonDisabled")) {
                    return;
                }
                this._selectedVariablesTotal = [];
                this._mergeSelectedVariables(this.populationVariable, "Population");
                this._mergeSelectedVariables(this.housingVariable, "Household");
                this._mergeSelectedVariables(this.businessVariable, "Business");
                if ((this._selectedVariablesTotal && this._selectedVariablesTotal.length > 0)) {
                    this.enrichCategoriesDialog.hide();
                    if (this.enrichGeoenrichmentParameterDialog) {
                        this.enrichGeoenrichmentParameterDialog.show();
                    } else {
                        this._defineArea();
                    }
                } else {
                    alert(nls.widgets.geoEnrichment.message.selectData);
                }
            }));
            return enrichCategoriesContainer;
        },
        // function to check if the entered value is a number
        _validateNumber: function (num) {
            // the entered text should only be a number
            var numPattern = /^([0-9]+[\.]?[0-9]?[0-9]?|[0-9]+)$/;
            if (numPattern.test(num)) {
                return true;
            } else {
                return false;
            }
        },
        _setAnchorPosition: function (editIconIndex) {
            switch (editIconIndex) {
                case "0":
                    domStyle.set(query(".esriUpArrow")[0], "marginLeft", "10%");
                    break;
                case "1":
                    domStyle.set(query(".esriUpArrow")[0], "marginLeft", "40%");
                    break;
                case "2":
                    domStyle.set(query(".esriUpArrow")[0], "marginLeft", "70%");
                    break;
                default:
                    domStyle.set(query(".esriUpArrow")[0], "marginLeft", "10%");
            }
        },
        _updateDefaultVariables: function () {
            this.populationVariable = [];
            this.housingVariable = [];
            this.businessVariable = [];
            for (var category in this.configDefaultVariables[this.selectedCountryValue]) {
                this.selectedDefaultVariables = [];
                array.forEach(this.configDefaultVariables[this.selectedCountryValue][category], lang.hitch(this, function (variableLabel) {
                    this.selectedDefaultVariables.push(variableLabel.value);
                }));
                this._updateSelectedVariables(this.selectedDefaultVariables.join(), category);
            }
        },
        _updateDataBrowserSelection: function () {
            var selectedVariablesList;
            this.selectedCountryDefaultVariables = [];
            for (var category in this.configDefaultVariables[this.selectedCountryValue]) {
                if (category === this.selectedCategory) {
                    array.forEach(this.configDefaultVariables[this.selectedCountryValue][category], lang.hitch(this, function (variableLabel) {
                        this.selectedCountryDefaultVariables.push(variableLabel.value);
                    }));
                }
            }
            switch (this.selectedCategory) {
                case "Population":
                    selectedVariablesList = this._showSelectedVariables(this.population, this.populationVariable);
                    break;
                case "Household":
                    selectedVariablesList = this._showSelectedVariables(this.household, this.housingVariable);
                    break;
                case "Business":
                    selectedVariablesList = this._showSelectedVariables(this.businesses, this.businessVariable);
                    break;
                default:
            }
            return selectedVariablesList;
        },
        _showSelectedVariables: function (variableSelected, variableArray) {
            var selectedVariables;
            if (variableSelected || variableSelected === "") {
                selectedVariables = variableArray;
            } else {
                selectedVariables = this.selectedCountryDefaultVariables;
            }
            return selectedVariables;
        },
        _updateSelectVariables: function () {
            for (var category in this.configDefaultVariables[this.selectedCountryValue]) {
                if (category === this.selectedCategory) {
                    array.forEach(this.configDefaultVariables[this.selectedCountryValue][category], lang.hitch(this, function (variableLabel) {
                        this.selectedCountryDefaultVariables.push(variableLabel.value);
                    }));
                }
            }
        },
        _openDataBrowser: function (selectedVariables) {
            var selectedBrowserData = {
                "selectedCountry": this.selectedCountryValue,
                "selectedVariables": selectedVariables,
                "selectedTab": this.selectedCategory,
                "userInfo": this.userInfo
            };
            this.dataBrowserWindow = window.open("dataBrowser.html", "Data browser");
            this.dataBrowserWindow.focus();
            window._showData = lang.hitch(this, function () {
                this._updateSelectedVariables(window.selectedVariables, window.selectedTab);
            });
            this.dataBrowserWindow.opener.selectedData = selectedBrowserData;
        },
        _updateSelectedVariables: function (selection, tabCurrentSelection) {
            var countForVariables;
            if (tabCurrentSelection) {
                switch (tabCurrentSelection) {
                    case "Population":
                        this.population = selection;
                        this.populationVariable = this._updateFromDataBrower(selection);
                        break;
                    case "Household":
                        this.household = selection;
                        this.housingVariable = this._updateFromDataBrower(selection);
                        break;
                    case "Business":
                        this.businesses = selection;
                        this.businessVariable = this._updateFromDataBrower(selection);
                }
            }
            if (this.populationVariable.length === 0 && this.housingVariable.length === 0 && this.businessVariable.length === 0) {
                if (!domClass.contains(this.nextButtonDiv, "esriButtonDisabled")) {
                    domClass.add(this.nextButtonDiv, "esriButtonDisabled");
                }
            } else {
                domClass.remove(this.nextButtonDiv, "esriButtonDisabled");
            }
            if (selection === "") {
                countForVariables = 0;
            } else {
                countForVariables = selection.split(",").length;
            }
            domAttr.set(this.enrichVariableCountText, "innerHTML", nls.widgets.geoEnrichment.variableCount + countForVariables);
        },
        _updateFromDataBrower: function (selection) {
            if (selection === "") {
                return [];
            } else {
                return selection.split(",");
            }
        },

        _mergeSelectedVariables: function (variableTotal, variableText) {
            if (variableTotal.length !== 0) {
                array.forEach(variableTotal, lang.hitch(this, function (variablespopulation) {
                    this._selectedVariablesTotal.push(variablespopulation);
                }));
            } else {
                array.forEach(this.configDefaultVariables[this.selectedCountryValue][variableText], lang.hitch(this, function (variableLabel) {
                    this._selectedVariablesTotal.push(variableLabel.value);
                }));
            }
        },
        // function to select the country for data browser
        _createCountrySelectOption: function (countrySelectContainer) {
            var enrichCountryContanier, countrytitle, divCountryUS, enrichCountryUS, divUnitedStatesText, divCountryGlobal,
                enrichCountryGlobal, divCategoryText;
            countrytitle = domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.countrySelectTitle
            }, countrySelectContainer);
            enrichCountryContanier = domConstruct.create("div", {
                "class": "enrichCountryButtonContainer"
            }, countrytitle);
            divCountryUS = domConstruct.create("div", {
                "class": "enrichCountryContent enrichCountry selectedEnrichCategory"
            }, enrichCountryContanier);
            enrichCountryUS = domConstruct.create("img", {
                "class": "enrichCountryImage",
                "src": window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/images/US_Map.png"
            }, divCountryUS);
            divUnitedStatesText = domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.unitedStates,
                "class": "enrichCountryText"
            }, divCountryUS);
            divCountryGlobal = domConstruct.create("div", {
                "class": "enrichCountryContent"
            }, enrichCountryContanier);
            enrichCountryGlobal = domConstruct.create("img", {
                "class": "enrichCountryImage",
                "src": window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/images/Globe.png"
            }, divCountryGlobal);
            divCategoryText = domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.global,
                "class": "enrichCountryText"
            }, divCountryGlobal);
            on(divCountryUS, "click", lang.hitch(this, function () {
                this.selectedCountryValue = "US";
                this._highlightSelectedCountry(divCountryUS, divCountryGlobal);
                this._resetVariables();
            }));
            on(divCountryGlobal, "click", lang.hitch(this, function () {
                this.selectedCountryValue = "";
                this._highlightSelectedCountry(divCountryGlobal, divCountryUS);
                this._resetVariables();
            }));
        },
        _highlightSelectedCountry: function (selectedCountry, unselectedCountry) {
            if (domClass.contains(selectedCountry, "selectedEnrichCategory")) {
                domClass.remove(selectedCountry, "selectedEnrichCategory");
            } else {
                domClass.add(selectedCountry, "selectedEnrichCategory");
                domClass.remove(unselectedCountry, "selectedEnrichCategory");
            }
        },
        //function to select a category for data browsing.
        _createVariableSelectOption: function (dataContainer) {
            var enrichCategoriesDiv, divCategoryText, enrichDivContanier, divCategory, currentNodeIndex, selectedVariables;
            this.configDefaultVariables = defaultVariables;
            domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.selectDataText
            }, dataContainer);
            enrichCategoriesDiv = domConstruct.create("div", {
                "class": "enrichCategory"
            }, dataContainer);
            array.forEach(this.categoryTitles, lang.hitch(this, function (selectTitle, index) {
                enrichDivContanier = domConstruct.create("div", {
                    "class": "enrichCategoryContainer"
                }, enrichCategoriesDiv);
                divCategory = domConstruct.create("div", {
                    "class": "enrichCategoryContent"
                }, enrichDivContanier);
                domConstruct.create("img", {
                    "class": "tabImage",
                    "src": selectTitle.tabImage
                }, divCategory);
                domAttr.set(divCategory, "nodeIndex", index);
                divCategoryText = domConstruct.create("div", {
                    "innerHTML": selectTitle.title,
                    "class": "enrichCountryText"
                }, divCategory);
                on(divCategory, "click", lang.hitch(this, function (evt) {
                    array.forEach(query(".enrichCategoryContent"), lang.hitch(this, function (selectedVariable) {
                        if (domClass.contains(selectedVariable, "selectedEnrichCategory")) {
                            domClass.remove(selectedVariable, "selectedEnrichCategory");
                            return true;
                        }
                    }));
                    currentNodeIndex = domAttr.get(evt.currentTarget, "nodeIndex");
                    this._setAnchorPosition(currentNodeIndex);
                    this.selectedCategory = evt.currentTarget.textContent;
                    domStyle.set(this.customVariableContainer, "display", "block");
                    domStyle.set(this.variableContainerAnchor, "display", "block");
                    domClass.add(evt.currentTarget, "selectedEnrichCategory");
                    selectedVariables = this._updateDataBrowserSelection();
                    domAttr.set(this.enrichVariableCountText, "innerHTML", nls.widgets.geoEnrichment.variableCount + selectedVariables.length);
                }));
            }));
        },
        _resetVariables: function () {
            this._updateDefaultVariables();
            domStyle.set(this.customVariableContainer, "display", "none");
            domStyle.set(this.variableContainerAnchor, "display", "none");
            array.some(query(".enrichCategoryContent"), lang.hitch(this, function (node) {
                if (domClass.contains(node, "selectedEnrichCategory")) {
                    domClass.remove(node, "selectedEnrichCategory");
                    return true;
                }
            }));
        },
        //areas to enrich with additional information found in the data collection
        _defineArea: function () {
            var geoenrichmentParametersDialogContent = this._setAreaParameter();
            this.enrichGeoenrichmentParameterDialog = this._createDialogBox("Enrich Layer");
            this.enrichGeoenrichmentParameterDialog.setContent(geoenrichmentParametersDialogContent);
            this.enrichGeoenrichmentParameterDialog.show();
        },
        _createUnitOptions: function (units) {
            domConstruct.empty(this.bufferAreaUnit);
            array.forEach(units, lang.hitch(this, function (parameter) {
                var options = domConstruct.create("option");
                options.value = options.text = parameter.value;
                this.bufferAreaUnit.appendChild(options);
            }));
        },
        //define area-parameters if your analysis layer contains points or lines,
        //areas are created around each point or line using a straight-line distance or a driving time
        _setAreaParameter: function () {
            var lineDistanceUnits, drivingTimeUnits, enrichParameterContainer, radioOptionContainer, currentExtentButton, defineAreaImageContainer,
                imageDriveTime, divInputContainer, previousButtonDiv, geoenrichmentCredits, buttonContainer, nextButtonDiv, divLabelContainer, defineAreaDiv, showCreditsDiv, bufferAreaHelpText;
            lineDistanceUnits = [{
                value: "Meters"
            }, {
                value: "Kilometers"
            }, {
                value: "Feet"
            }, {
                value: "Miles"
            }, {
                value: "Yards"
            }];
            drivingTimeUnits = [{
                value: "Seconds"
            }, {
                value: "Minutes"
            }, {
                value: "Hours"
            }];
            enrichParameterContainer = domConstruct.create("div", {
                "class": "esriConfigurationPanel"
            }, null);
            defineAreaDiv = domConstruct.create("div", {}, enrichParameterContainer);
            this.disableAreaDiv = domConstruct.create("div", {
                "class": "disableAreaParameters"
            }, defineAreaDiv);
            domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.defineAreaTitle
            }, defineAreaDiv);
            divLabelContainer = domConstruct.create("div", {}, defineAreaDiv);
            this.lineDistanceTextLabelDiv = domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.lineDistanceText,
                "class": "labelBufferType"
            }, divLabelContainer);
            if (this.map.getLayer(this.config.summaryLayer.id).geometryType !== "esriGeometryPolyline") {
            this.driveTimeTextLabelDiv = domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.drivingTime,
                "class": "labelBufferType"
            }, divLabelContainer);
            }
            defineAreaImageContainer = domConstruct.create("div", {
                "class": "imageAreaContanier"
            }, defineAreaDiv);
            this.imageLineDistance = domConstruct.create("div", {
                "class": "imgStraightLine"
            }, defineAreaImageContainer);
            if (this.map.getLayer(this.config.summaryLayer.id).geometryType !== "esriGeometryPolyline") {
            imageDriveTime = domConstruct.create("div", {
                "class": "imgDriveTime"
            }, defineAreaImageContainer);
            }
            this.bufferType = "StraightLine";
            if (this.map.getLayer(this.config.summaryLayer.id).geometryType !== "esriGeometryPolyline") {
            on(this.imageLineDistance, "click", lang.hitch(this, function (evt) {
                this.bufferType = "StraightLine";
                this._highlightAreaParameters(evt.currentTarget, imageDriveTime);
                this._createUnitOptions(lineDistanceUnits);
                domClass.remove(this.driveTimeTextLabelDiv, "labelHighlight");
                domClass.add(this.lineDistanceTextLabelDiv, "labelHighlight");
                    if (this.inputDistance.value.match(/^[0-9]+(\.\d+)?$/)) {
                        this._validateBufferInputs(bufferAreaHelpText, divInputContainer, nextButtonDiv);
                    }
                    else {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, nls.widgets.geoEnrichment.message.invalidBufferInput);
                    }
            }));
            on(imageDriveTime, "click", lang.hitch(this, function (evt) {
                this.bufferType = "DrivingTime";
                this._highlightAreaParameters(evt.currentTarget, this.imageLineDistance);
                this._createUnitOptions(drivingTimeUnits);
                domClass.add(this.driveTimeTextLabelDiv, "labelHighlight");
                domClass.remove(this.lineDistanceTextLabelDiv, "labelHighlight");
                    if (this.inputDistance.value.match(/^[0-9]+(\.\d+)?$/)) {
                        this._validateBufferInputs(bufferAreaHelpText, divInputContainer, nextButtonDiv);
                    } else {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, nls.widgets.geoEnrichment.message.invalidBufferInput);
                    }
            }));
            }
            divInputContainer = domConstruct.create("div", {
                "class": "inputDiv"
            }, defineAreaDiv);
            this.inputDistance = domConstruct.create("input", {
                "type": "text",
                "value": 1,
                "class": "inputDistance",
                "placeholder": nls.widgets.geoEnrichment.placeholder.enterValue
            }, divInputContainer);
            bufferAreaHelpText = domConstruct.create("div", { "class": "bufferAreaHelpText" }, defineAreaDiv);
            domStyle.set(bufferAreaHelpText, "display", "none");
            on(this.inputDistance, "keyup", lang.hitch(this, function () {
                this._checkBufferInputs(/^[0-9]+(\.\d+)?$/, bufferAreaHelpText, divInputContainer, nextButtonDiv);
            }));
            this.bufferAreaUnit = domConstruct.create("select", {
                "class": "unitInput"
            }, divInputContainer);
            this._createUnitOptions(lineDistanceUnits);
            on(this.bufferAreaUnit, "change", lang.hitch(this, function () {
                this._checkBufferInputs(/^[0-9]+(\.\d+)?$/, bufferAreaHelpText, divInputContainer, nextButtonDiv);
            }));
            if (this.map.getLayer(this.config.summaryLayer.id).geometryType === "esriGeometryPolygon") {
                domClass.add(this.disableAreaDiv, "displayBlock");
                this.inputDistance.disabled = true;
                this.bufferAreaUnit.disabled = true;
                domClass.remove(this.disableAreaDiv, "displayNone");
                domClass.remove(this.imageLineDistance, "imgHighlight");
                domClass.remove(this.lineDistanceTextLabelDiv, "labelHighlight");
            } else {
                domClass.add(this.disableAreaDiv, "displayNone");
                this.inputDistance.disabled = false;
                this.bufferAreaUnit.disabled = false;
                domClass.remove(this.disableAreaDiv, "displayBlock");
                if (this.map.getLayer(this.config.summaryLayer.id).geometryType !== "esriGeometryPolyline") {
                domClass.add(this.imageLineDistance, "imgHighlight");
                domClass.add(this.lineDistanceTextLabelDiv, "labelHighlight");
                }
            }
            domConstruct.create("div", {
                "innerHTML": nls.widgets.geoEnrichment.enrichLayerName
            }, defineAreaDiv);
            this.inputLayerName = domConstruct.create("input", {
                "type": "text",
                "class": "inputLayerName",
                "placeholder": nls.widgets.geoEnrichment.placeholder.layerName
            }, defineAreaDiv);
            domAttr.set(this.inputLayerName, "value", "Enriched - " + this.map.getLayer(this.config.summaryLayer.id).name);
            //Use current map extent to enrich
            radioOptionContainer = domConstruct.create("div", {
                "class": "radioOptionContainer"
            }, enrichParameterContainer);
            domConstruct.create("div", {
                "class": "labelNumber",
                "innerHTML": "5. "
            }, radioOptionContainer);
            currentExtentButton = domConstruct.create("div", {
                "class": "esriDeselectIcon"
            }, radioOptionContainer);
            on(currentExtentButton, "click", lang.hitch(this, function () {
                this.selectCurrentExtent = false;
                this.selectCurrentExtent = this._toggleCheckBox(currentExtentButton);
            }));
            domConstruct.create("div", {
                "class": "currentMapExtentLabel",
                "innerHTML": nls.widgets.geoEnrichment.currentMapExtent
            }, radioOptionContainer);
            showCreditsDiv = domConstruct.create("div", {
                "class": "creditsUsedText",
                "innerHTML": nls.widgets.geoEnrichment.showCreditsText
            }, enrichParameterContainer);
            //previous-next buttons
            buttonContainer = domConstruct.create("div", {
                "class": "esriButtonInnerConfig"
            }, enrichParameterContainer);
            nextButtonDiv = domConstruct.create("button", {
                "class": "esriButton enrichNextPreviousButton",
                "innerHTML": nls.widgets.geoEnrichment.enrichButtonText
            }, buttonContainer);
            previousButtonDiv = domConstruct.create("button", {
                "class": "esriButton enrichNextPreviousButton",
                "innerHTML": nls.widgets.geoEnrichment.prevButtonText
            }, buttonContainer);
            on(previousButtonDiv, "click", lang.hitch(this, function () {
                this.enrichGeoenrichmentParameterDialog.hide();
                this.enrichCategoriesDialog.show();
            }));
            on(showCreditsDiv, "click", lang.hitch(this, function () {
                this._getShowCredits().then(lang.hitch(this, function (responseCredits) {
                    geoenrichmentCredits = this._showCreditsDialog(responseCredits);
                    this.enrichGeoenrichmentCreditsDialog = this._createDialogBox(nls.widgets.geoEnrichment.showCreditsDialogText);
                    this.enrichGeoenrichmentCreditsDialog.setContent(geoenrichmentCredits);
                    this.enrichGeoenrichmentCreditsDialog.show();
                }));
            }));
            on(nextButtonDiv, "click", lang.hitch(this, function () {
                this._startEnrichProcess();
            }));
            return enrichParameterContainer;
        },
        _checkBufferInputs: function (regEx, bufferAreaHelpText, divInputContainer, nextButtonDiv) {
            if (this.inputDistance.value === "") {
                this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, nls.widgets.geoEnrichment.message.emptyBufferInput);
                return;
            }
            if (this.inputDistance.value.match(regEx)) {
                this._validateBufferInputs(bufferAreaHelpText, divInputContainer, nextButtonDiv);
            } else {
                this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, nls.widgets.geoEnrichment.message.invalidBufferInput);
            }
        },
        _validateBufferInputs: function (bufferAreaHelpText, divInputContainer, nextButtonDiv) {
            domStyle.set(bufferAreaHelpText, "display", "none");
            domClass.replace(divInputContainer, "inputDiv", "noMargin");
            domAttr.set(nextButtonDiv, "disabled", false);
            domClass.remove(nextButtonDiv, "esriButtonDisabled");
            switch (this.bufferAreaUnit.value) {
                case "Meters":
                    if (this.inputDistance.value > 16093440) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 16093440);
                    }
                    break;
                case "Kilometers":
                    if (this.inputDistance.value > 16093.44) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 16093.44);
                    }
                    break;
                case "Miles":
                    if (this.inputDistance.value > 10000) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 10000);
                    }
                    break;
                case "Feet":
                    if (this.inputDistance.value > 52800000) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 52800000);
                    }
                    break;
                case "Yards":
                    if (this.inputDistance.value > 17600000) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 17600000);
                    }
                    break;
                case "Seconds":
                    if (this.inputDistance.value > 36000) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 36000);
                    }
                    break;
                case "Minutes":
                    if (this.inputDistance.value > 600) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 600);
                    }
                    break;
                case "Hours":
                    if (this.inputDistance.value > 10) {
                        this._showHintTextMessage(bufferAreaHelpText, divInputContainer, nextButtonDiv, 10);
                    }
                    break;
            }
        },
        _showHintTextMessage: function (bufferAreaHelpText, divInputContainer, nextButtonDiv, value) {
            if (typeof (value) == "number") {
                domAttr.set(bufferAreaHelpText, "innerHTML", nls.widgets.geoEnrichment.message.bufferAreaHelpText + value);
            } else {
                domAttr.set(bufferAreaHelpText, "innerHTML", value);
            }
            domStyle.set(bufferAreaHelpText, "display", "block");
            domClass.replace(divInputContainer, "noMargin", "inputDiv");
            domAttr.set(nextButtonDiv, "disabled", "disabled");
            domClass.add(nextButtonDiv, "esriButtonDisabled");
        },
        _startEnrichProcess: function () {
            var layerName, featuresVisibleOnMap;
            if (this.inputLayerName.value.trim() === "") {
                alert(nls.widgets.geoEnrichment.message.emptyTextFieldLayerName);
                return;
            }
            layerName = this._blockSpecialCharacters(this.inputLayerName.value);
            if (!layerName) {
                alert(nls.widgets.geoEnrichment.message.enrichLayerNameError);
                return;
            }
            if (this.selectCurrentExtent) {
                featuresVisibleOnMap = this._getExtentData();
                if (featuresVisibleOnMap.length === 0) {
                    this.featuresCurrentExtent = false;
                } else {
                    this.featuresCurrentExtent = true;
                }
            }
            if (this.selectCurrentExtent && this.featuresCurrentExtent !== undefined && !this.featuresCurrentExtent) {
                alert(nls.widgets.geoEnrichment.message.nofeatures);
                return;
            }
            this._showAnalysisExecutionDialog();
            this._performGeoEnrichment();
            this.enrichGeoenrichmentParameterDialog.hide();
        },
        _highlightAreaParameters: function (currentTarget, unselectParameter) {
            domClass.add(currentTarget, "imgHighlight");
            domClass.remove(unselectParameter, "imgHighlight");
        },
        _blockSpecialCharacters: function (LayerNameValue) {
            var numPattern = /^[^<>#%:?&+\\\/"]+$/;
            if (numPattern.test(LayerNameValue.trim())) {
                return true;
            } else {
                return false;
            }
        },
        _showCreditsDialog: function (responseCredits) {
            var divRecordsContainer, enrichCreditsContainer, divCostContainer, countryButtonContainer, enrichCountryUS;
            enrichCreditsContainer = domConstruct.create("div", {
                "class": "esriConfigurationPanel"
            }, null);
            divRecordsContainer = domConstruct.create("div", {}, enrichCreditsContainer);
            domConstruct.create("div", {
                "class": "creditsRecords",
                "innerHTML": nls.widgets.geoEnrichment.totalRecords
            }, divRecordsContainer);
            domConstruct.create("div", {
                "class": "creditsRecordsText",
                "innerHTML": responseCredits.totalRecords
            }, divRecordsContainer);
            divCostContainer = domConstruct.create("div", {}, enrichCreditsContainer);
            countryButtonContainer = domConstruct.create("div", {
                "class": "creditsRecords",
                "innerHTML": nls.widgets.geoEnrichment.cost
            }, divCostContainer);
            enrichCountryUS = domConstruct.create("div", {
                "class": "creditsRecordsText",
                "innerHTML": responseCredits.cost
            }, divCostContainer);
            return enrichCreditsContainer;
        },
        _toggleCheckBox: function (currentCheckBox) {
            var configParameter;
            this.map.getLayer(this.config.summaryLayer.id); //function to toggle checkBox state
            if (domClass.contains(currentCheckBox, "esriSelectIcon")) {
                domClass.replace(currentCheckBox, "esriDeselectIcon", "esriSelectIcon");
                configParameter = false;
            } else {
                domClass.replace(currentCheckBox, "esriSelectIcon", "esriDeselectIcon");
                configParameter = true;
            }
            return configParameter;
        },
        //query to get the features in current extent
        _getExtentData: function () {
            var graphicExtent, extentGraphics = [];
            //to loop all the graphics of the layer and then check if the current graphic falls in the current extent of map
            array.forEach(this.map.getLayer(this.config.summaryLayer.id).graphics, lang.hitch(this, function (feature) {
                graphicExtent = this.map.extent.contains(feature._extent);
                //if graphic is present in the current extent
                if (graphicExtent) {
                    extentGraphics.push(feature);
                }
            }));
            return extentGraphics;
        },
        _performGeoEnrichment: function () {
            var fieldInfosPopup = [];
            this._checkForLayerName().then(lang.hitch(this, function (response) {
                if (response) {
                    this._createService().then(lang.hitch(this, function (result) {
                        this.enrichitemID = result.itemId;
                        this._performAnalysis(result).then(lang.hitch(this, function (enrichJobID) {
                            this.enrichJobID = enrichJobID.jobId;
                            this._updateService().then(lang.hitch(this, function () {
                                this._geoEnrichLayer().then(lang.hitch(this, function (enrichedLayerUrl) {
                                    this.enrichedUrl = enrichedLayerUrl.value.url;
                                    this._shareItem(enrichedLayerUrl.value.itemId).then(lang.hitch(this, function () {
                                        this._refreshService().then(lang.hitch(this, function () {
                                            this._updateService().then(lang.hitch(this, function () {
                                                this._createJsonForLayer().then(lang.hitch(this, function (layerInfo) {
                                                    array.forEach(layerInfo.fields, lang.hitch(this, function (field) {
                                                        fieldInfosPopup.push({
                                                            "fieldName": field.name,
                                                            "label": field.alias,
                                                            "visible": true,
                                                            "isEditable": true,
                                                            "tooltip": "",
                                                            "stringFieldOption": "textbox"
                                                        });
                                                    }));
                                                    var popupInfo = {
                                                        "title": layerInfo.objectIdField,
                                                        "fieldInfos": fieldInfosPopup
                                                    };

                                                    layerInfo.htmlPopupType = "esriServerHTMLPopupTypeAsHTMLText";
                                                    var newWebmapData = this._createWebmapData(layerInfo, this.webmapInfo.itemData, popupInfo);
                                                    this._addLayerToWebMap(newWebmapData, this.webmapInfo.itemData);
                                                }));
                                            }));
                                        }));
                                    }));
                                }));
                            }));
                        }));
                    }));
                }
            }));
        },
        _createWebmapData: function (layerInfo, webmapInformationData, popupInfo) {
            this.progressString += nls.widgets.geoEnrichment.message.addingLayer + "<br/>";
            this.executionDialog.setContent(this.progressString);
            var newLayersArray = [];
            array.forEach(webmapInformationData.operationalLayers, lang.hitch(this, function (layer) {
                delete layer["layerObject"];
                newLayersArray.push(layer);
            }));
            JSON.stringify(webmapInformationData.spatialReference);
            var layerJson = {
                "id": layerInfo.name + layerInfo.id,
                "layerType": "ArcGISFeatureLayer",
                "url": this.enrichedUrl,
                "visibility": true,
                "opacity": 1,
                "title": layerInfo.name,
                "itemId": this.enrichitemID,
                "popupInfo": popupInfo
            };
            newLayersArray.push(layerJson);
            webmapInformationData.operationalLayers = newLayersArray;
            var webmapInformation = {
                "baseMap": {
                    "baseMapLayers": [{
                        "id": webmapInformationData.baseMap.baseMapLayers[0].id,
                        "opacity": webmapInformationData.baseMap.baseMapLayers[0].opacity,
                        "visibility": webmapInformationData.baseMap.baseMapLayers[0].visibility,
                        "url": webmapInformationData.baseMap.baseMapLayers[0].url
                    }]
                },
                "operationalLayers": webmapInformationData.operationalLayers,
                "spatialReference": this.webmapInfo.itemData.spatialReference,
                "version": this.webmapInfo.itemData.version
            };
            webmapInformationData.baseMap = webmapInformation.baseMap;
            this.config.summaryLayer.id = layerInfo.name + layerInfo.id;
            delete webmapInformationData["applicationProperties"];
            delete webmapInformationData["runningAnalysisJobs"];
            return webmapInformationData;
        },
        _shareItem: function (enrichUrlItemID) {
            var shareUrl, deferred = new Deferred();
            this.progressString += nls.widgets.geoEnrichment.message.sharingLayer + "<br/>";
            this.executionDialog.setContent(this.progressString);
            shareUrl = string.substitute(this.shareURL, {
                enrichUrlItemId: enrichUrlItemID,
                userInfoPortalUrl: this.userInfo.portal.url,
                username: this.userInfo.username
            });
            esriRequest({
                url: shareUrl,
                content: {
                    "everyone": true,
                    "org": true,
                    "groups": "",
                    "f": "json",
                    "token": this.userInfo.token
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    deferred.resolve(response);
                }),
                error: lang.hitch(this, function (e) {
                    this._deleteService();
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.shareFailed);
                    deferred.reject(e);
                })
            }, {
                usePost: true
            });
            return deferred.promise;
        },
        _checkForLayerName: function () {
            var deferred = new Deferred(), checkLayerNameUrl;
            checkLayerNameUrl = string.substitute(this.checkLayerNameURL, {
                userInfoPortalUrl: this.userInfo.portal.url,
                userInfoPortalId: this.userInfo.portal.id
            });
            this.enrichedLayerName = domAttr.get(this.inputLayerName, "value");
            if (this.enrichedLayerName === "") {
                this.enrichedLayerName = "Enriched" + this.map.getLayer(this.config.summaryLayer.id).name;
                this.inputLayerName = this.enrichedLayerName;
            }
            this.progressString += nls.widgets.geoEnrichment.message.checkLayerName + "<br/>";
            this.executionDialog.setContent(this.progressString);
            esriRequest({
                url: checkLayerNameUrl,
                content: {
                    f: "json",
                    name: this.enrichedLayerName,
                    type: "Feature Service",
                    token: this.userInfo.token
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    if (response.available) {
                        deferred.resolve(response);
                    } else {
                        this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.layerNameExist);
                    }
                }),
                error: lang.hitch(this, function (e) {
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.layerNameExist);
                    deferred.reject(e);
                })
            });
            return deferred.promise;
        },
        _getShowCredits: function () {
            var deferred = new Deferred(), enrichLayerName, outputValues, layerUrl, currentExtent, showCreditsUrl;
            enrichLayerName = domAttr.get(this.inputLayerName, "value");
            outputValues = {
                "serviceProperties": {
                    "name": enrichLayerName
                }
            };
            layerUrl = {
                "url": this.map.getLayer(this.config.summaryLayer.id).url
            };
            showCreditsUrl = string.substitute(this.showCreditsURL, {
                gpServiceUrl: this.analysisUrl
            });
            currentExtent = {
                "extent": this.map.extent
            };
            esriRequest({
                url: showCreditsUrl,
                content: {
                    f: "json",
                    "inputLayer": JSON.stringify(layerUrl),
                    "country": this.selectedCountryValue,
                    "bufferType": this.bufferType,
                    "distance": this.inputDistance.value,
                    "units": this.bufferAreaUnit.value,
                    "context": this.selectCurrentExtent ? JSON.stringify(currentExtent) : null,
                    "analysisVariables": JSON.stringify(this._selectedVariablesTotal),
                    "OutputName": JSON.stringify(outputValues),
                    "token": this.userInfo.token
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    deferred.resolve(response);
                }),
                error: lang.hitch(this, function (e) {
                    deferred.reject(e);
                })
            }, {
                usePost: true
            });
            return deferred.promise;
        },
        _createService: function () {
            var deferred = new Deferred(), createServiceUrl, Obj;
            this.progressString += nls.widgets.geoEnrichment.message.creatingService + "</br>";
            this.executionDialog.setContent(this.progressString);
            this.map.getLayer(this.config.summaryLayer.id);
            createServiceUrl = string.substitute(this.createServiceURL, {
                username: this.userInfo.username,
                portalUrl: this.userInfo.portal.portalUrl
            });
            Obj = {
                "name": domAttr.get(this.inputLayerName, "value")
            };
            esriRequest({
                url: createServiceUrl,
                content: {
                    f: "json",
                    token: this.userInfo.token,
                    createParameters: JSON.stringify(Obj),
                    outputType: "featureService"
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    deferred.resolve(response);
                    this.progressString += status + "<br/>";
                    this.executionDialog.setContent(this.progressString);
                }),
                error: lang.hitch(this, function (e) {
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.createService);
                    deferred.reject(e);
                })
            }, {
                usePost: true
            });
            return deferred.promise;
        },
        _performAnalysis: function (result) {
            var deferred = new Deferred(), layerUrl, currentExtent, outputValues, params, gpTaskPdf;
            this.progressString += nls.widgets.geoEnrichment.message.performingAnalysis;
            this.executionDialog.setContent(this.progressString);
            gpTaskPdf = new Geoprocessor(this.analysisUrl + "/EnrichLayer?token=" + this.userInfo.token);
            layerUrl = {
                "url": this.map.getLayer(this.config.summaryLayer.id).url
            };
            delete this.map.extent["clip"];
            delete this.map.extent["_parts"];
            currentExtent = {
                "extent": this.map.extent
            };
            outputValues = {
                "serviceProperties": {
                    "name": this.enrichedLayerName,
                    "serviceUrl": result.serviceurl
                },
                "itemProperties": {
                    "itemId": this.enrichitemID
                }
            };
            params = {
                "inputLayer": JSON.stringify(layerUrl),
                "bufferType": domClass.contains(this.disableAreaDiv, "displayNone") ? this.bufferType : null,
                "distance": domClass.contains(this.disableAreaDiv, "displayNone") ? this.inputDistance.value : null,
                "units": domClass.contains(this.disableAreaDiv, "displayNone") ? this.bufferAreaUnit.value : null,
                "country": this.selectedCountryValue,
                "OutputName": JSON.stringify(outputValues),
                "context": this.selectCurrentExtent ? JSON.stringify(currentExtent) : null,
                "analysisVariables": JSON.stringify(this._selectedVariablesTotal)
            };
            gpTaskPdf.submitJob(params, lang.hitch(this, function (jobInfo) {
                deferred.resolve(jobInfo);
            }), lang.hitch(this, function (jobInfo) {
                var status = jobInfo.jobStatus;
                if (status === "esriJobExecuting" && this.progressString.search("esriJobExecuting") > 0) {
                    return;
                }
                if (status === "esriJobSubmitted" && this.progressString.search("esriJobSubmitted") > 0) {
                    return;
                }
                this.progressString += status + "...</br>";
                this.executionDialog.setContent(this.progressString);
                console.log(status);
                if (status === "esriJobFailed") {
                    this._deleteService();
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.analysisFailed);
                } else if (status === "esriJobSucceeded") { }
            }), lang.hitch(this, function () {
                this._deleteService();
                this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.errorOccurred);
                deferred.reject();
            }));
            return deferred.promise;
        },
        _deleteService: function () {
            var deleteUrl = string.substitute(this.deleteURL, {
                portalUrl: this.userInfo.portal.url,
                username: this.userInfo.username,
                enrichitemId: this.enrichitemID
            });
            esriRequest({
                url: deleteUrl,
                content: {
                    f: "json",
                    "token": this.userInfo.token
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function () { }),
                error: lang.hitch(this, function () { })
            }, {
                usePost: true
            });
        },
        _updateService: function () {
            var deferred = new Deferred(), updateServiceUrl;
            updateServiceUrl = string.substitute(this.updateServiceURL, {
                userInfoPortalUrl: this.userInfo.portal.url,
                username: this.userInfo.username,
                enrichitemId: this.enrichitemID
            });
            esriRequest({
                url: updateServiceUrl,
                content: {
                    f: "json",
                    "token": this.userInfo.token
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    deferred.resolve(response);
                }),
                error: lang.hitch(this, function (e) {
                    this._deleteService();
                    this._removeLoadingIndicator();
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.updateItemFailed, false);
                    deferred.reject(e);
                })
            }, {
                usePost: true
            });
            return deferred.promise;
        },
        _geoEnrichLayer: function () {
            var deferred = new Deferred(), geoEnrichUrl;
            geoEnrichUrl = string.substitute(this.geoEnrichURL, {
                analysisUrl: this.analysisUrl,
                enrichJobId: this.enrichJobID,
                userInfoToken: this.userInfo.token
            });
            esriRequest({
                url: geoEnrichUrl,
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    deferred.resolve(response);
                }),
                error: lang.hitch(this, function (e) {
                    this._deleteService();
                    this._removeLoadingIndicator();
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.geoEnrichFailed, false);
                    deferred.reject(e);
                })
            }, {
                usePost: false
            });
            return deferred.promise;
        },
        _refreshService: function () {
            var deferred = new Deferred(), resfresheUrl;
            resfresheUrl = string.substitute(this.refreshURL, {
                userInfoUsername: this.userInfo.username,
                userInfoPortalUrl: this.userInfo.portal.url,
                enrichitemId: this.enrichitemID
            });
            esriRequest({
                url: resfresheUrl,
                content: {
                    f: "json"
                },
                load: lang.hitch(this, function (response) {
                    deferred.resolve(response);
                }),
                error: lang.hitch(this, function (e) {
                    this._deleteService();
                    this._removeLoadingIndicator();
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.refreshServiceFailed, false);
                    deferred.reject(e);
                })
            }, {
                usePost: true
            });
            return deferred.promise;
        },
        _addLayerToWebMap: function (newWebmapData) {
            var deferred = new Deferred(), addLayerUrl;
            addLayerUrl = string.substitute(this.addLayerURL, {
                portalUrl: this.userInfo.portal.portalUrl,
                username: this.userInfo.username,
                webMapInfoItemId: this.webmapInfo.item.id
            });
            esriRequest({
                url: addLayerUrl,
                content: {
                    f: "json",
                    "token": this.userInfo.token,
                    "text": JSON.stringify(newWebmapData)
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    this.progressString += nls.widgets.geoEnrichment.message.layerAdded;
                    this.executionDialog.setContent(this.progressString);
                    domAttr.set(this.okButtonDiv, "innerHTML", nls.widgets.geoEnrichment.saveButtonText);
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.layerAdded, true);
                    deferred.resolve(response);
                }),
                error: lang.hitch(this, function (e) {
                    this._deleteService();
                    this._removeLoadingIndicator();
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.addToWebmapFailed, false);
                    deferred.reject(e);
                })
            }, {
                usePost: true
            });
            return deferred.promise;
        },
        _createJsonForLayer: function () {
            var deferred = new Deferred();
            esriRequest({
                url: this.enrichedUrl,
                content: {
                    f: "json",
                    "token": this.userInfo.token
                },
                handleAs: "json",
                callbackParamName: "callback",
                load: lang.hitch(this, function (response) {
                    deferred.resolve(response);
                }),
                error: lang.hitch(this, function (e) {
                    this._deleteService();
                    this._removeLoadingIndicator();
                    this._gotoPreviousDialog(nls.widgets.geoEnrichment.message.layerJsonFailed, false);
                    deferred.reject(e);
                })
            }, {
                usePost: true
            });
            return deferred.promise;
        },
        _showPreviousDialog: function () {
            var previousDialogDiv = {
                "selectedCountry": this.selectedCountryValue,
                "selectedPopulation": this.selectedCategory
            };
            this.enrichCategoriesDialog.hide();
            return previousDialogDiv;
        },
        _showAnalysisExecutionDialog: function () {
            if (this.executionDialog) {
                this.executionDialog.destroy();
            }
            this.progressString = nls.widgets.geoEnrichment.message.starting + "<br/>";
            this.executionDialog = this._createDialogBox("Enrich Layer", true);
            domConstruct.create("div", {
                "class": "loadingIndicatorContainer"
            }, this.executionDialog.domNode);
            this.okButtonDiv = domConstruct.create("div", {
                "class": "messageDialogNext esriButton",
                "innerHTML": nls.widgets.geoEnrichment.ok
            }, this.executionDialog.domNode, "last");
            this.messageBox = domConstruct.create("div", {
                "class": "esriLayerHelpEnrichText showMessage"
            }, this.executionDialog.domNode, "last");
            this.executionDialog.setContent(this.progressString);
            this.executionDialog.containerNode.style.height = "75.7%";
            this.executionDialog.show();
        },
        _gotoPreviousDialog: function (message, success) {
            domStyle.set(this.okButtonDiv, "display", "block");
            if (success) {
                domAttr.set(this.messageBox, "innerHTML", message + nls.widgets.geoEnrichment.message.clickOnSave);
            } else {
                domAttr.set(this.messageBox, "innerHTML", message + nls.widgets.geoEnrichment.message.clickOnOk);
            }
            this._removeLoadingIndicator();
            domStyle.set(this.messageBox, "display", "block");
            on(this.okButtonDiv, "click", lang.hitch(this, function (evt) {
                if (evt.currentTarget.innerHTML == nls.widgets.geoEnrichment.ok) {
                    this.executionDialog.hide();
                    this.enrichGeoenrichmentParameterDialog.show();
                } else {
                    this._completeProcess();
                }
            }));
        },
        _removeLoadingIndicator: function () {
            var loadingIndicatorDiv = query(".loadingIndicatorContainer")[0];
            if (loadingIndicatorDiv) {
                if (domClass.contains(loadingIndicatorDiv, "loadingIndicatorContainer")) {
                    domClass.replace(loadingIndicatorDiv, "hideLoadingIndicator", "loadingIndicatorContainer");
                }
            }
        },
        _completeProcess: function () {
            //This function will be called when user is done with selecting all variables
            //TODO:Trying to find more convenient approach to communicate with templateBuilder.js
        }
    });
});