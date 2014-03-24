define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/layout/ContentPane",
    "dojo/dom",
    "dojo/on",
    "dojo/string",
    "dojo/query",
    "dojo/_base/array",
    "dojo/dom-construct",
    "dojo/dom-class",
    "dijit/Dialog",
    "esri/request",
    "dojo/dom-attr",
    "dojo/dom-style",
    "dojo/i18n!application/nls/TemplateBuilder",
    "dojo/topic",
    "dojo/keys",
    "dijit/Editor",
    "dijit/TooltipDialog",
    "dijit/popup",
    "dijit/_editor/plugins/LinkDialog",
    "application/BrowseIdDlg"
],
function (
    declare,
    lang,
    _WidgetBase,
    ContentPane,
    dom, on, string, query, array, domConstruct, domClass, Dialog, esriRequest, domAttr, domStyle, nls, topic, keys, Editor, TooltipDialog, popup, LinkDialog, BrowseIdDlg) {
    var Widget = declare([_WidgetBase], {
        declaredClass: "application.TemplateBuilder",
        //URL for updating Item
        //Predefined keywords for basemap's available on AGOL
        availableBaseMaps: ["streets", "satellite", "hybrid", "topo", "gray", "oceans", "national-geographic", "osm"],
        unSavedChanges: false,
        previousConfigObj: null,
        configDialog: null,
        browseDlg: null,
        // lifecycle: 1
        constructor: function(options) {
            // mix in settings and defaults
            var defaults = lang.mixin({}, this.options, options);
            // set properties
            this.set("drawer", defaults.drawer);
            // CSS classes
            this.css = {
                builderMode: 'builder-mode',
                root: 'template-builder',
                rootContainer: 'template-builder-container'
            };
            delete defaults.config.itemInfo;
            this.previousConfigObj = lang.clone(defaults.config);
        },
        // start widget. called by user
        startup: function() {

            console.log('edit mode');

            // builder mode class to body
            domClass.add(document.body, this.css.builderMode);
            // builder node
            var builderNode = domConstruct.create('div', {
                className: this.css.root
            });
            // place node in body
            // top content pane
            var builderContentPane = new ContentPane({
                region: "top"
            }, builderNode);
            // add pane to border container
            this.get("drawer")._borderContainer.addChild(builderContentPane);
            this.get("drawer").resize();
            var bulilderModeHelpText = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.builderModeHelpText, "class": this.css.rootContainer }, builderNode);
            // resize border container
            if (this.config.edit) {
                this._showBuilderMode(builderNode);
            }
            else {
                //show button to allow user to enter builder mode
                domAttr.set(bulilderModeHelpText, "innerHTML", nls.widgets.TemplateBuilder.enterBuilderModeHelpText);
                var buttonContainer = domConstruct.create("div", { "class": "esriButtonContainer" }, builderNode);
                var switchTOBuilderModeButton = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.enterBuilderButtonText, "class": "esriButton" }, buttonContainer);
                on(switchTOBuilderModeButton, "click", function () {
                    var newURL = location.href + "&edit=true";
                    window.location.href = newURL;
                });
            }
            this._loadCSS();
            setTimeout(lang.hitch(this, function () {
                this.get("drawer").resize();
            }), 200);
        },

        _loadCSS: function () {
            //Load claro css
            if (dom.byId("claroTheme")) {
                domAttr.set(dom.byId("claroTheme"), "href", location.protocol + "//js.arcgis.com/3.9/js/dojo/dijit/themes/claro/claro.css");
            }
            domClass.add(dojo.body(), "claro");
            //Load browser dialog
            var cssStyle = document.createElement('link');
            cssStyle.rel = 'stylesheet';
            cssStyle.type = 'text/css';
            cssStyle.href = "css/browseDialog.css";
            document.getElementsByTagName('head')[0].appendChild(cssStyle);
        },

        _showBuilderMode: function (builderNode) {
            var buttonContainer, dataConfigurationButton, appSettingConfigurationButton, previewModeButton, saveButtonContainer,
            applicationSettingSaveButton, unsavedChangesText, browseParams;
            buttonContainer = domConstruct.create("div", { "class": "esriButtonContainer" }, builderNode);
            dataConfigurationButton = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.dataConfigurationButtonText, "class": "esriButton" }, buttonContainer);
            appSettingConfigurationButton = domConstruct.create("button", { "style": "margin-left:10px;", "class": "esriButton", innerHTML: nls.widgets.TemplateBuilder.applicationSettingText }, buttonContainer);
            previewModeButton = domConstruct.create("button", { "style": "margin-left:10px;", "class": "esriButton", innerHTML: nls.widgets.TemplateBuilder.exitBuilderButtonText }, buttonContainer);
            saveButtonContainer = domConstruct.create("div", { "class": "esriSaveButtonContainer" }, builderNode);
            applicationSettingSaveButton = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.saveButtonText, "class": "esriButton esriSaveButton" }, saveButtonContainer);
            unsavedChangesText = domConstruct.create("div", { "class": "esriUnsavedChanges", innerHTML: nls.widgets.TemplateBuilder.alertMessage.unsavedChangesMessage }, saveButtonContainer);
            on(applicationSettingSaveButton, "click", lang.hitch(this, function () {
                domAttr.set(unsavedChangesText, "innerHTML", nls.widgets.TemplateBuilder.savingChangesMessage);
                this._updateItem(false);
            }));
            on(dataConfigurationButton, "click", lang.hitch(this, function () {
                this._createConfigurationPanel(true);
            }));

            on(appSettingConfigurationButton, "click", lang.hitch(this, function () {
                this._createAppSettingsPanel();
            }));

            on(previewModeButton, "click", lang.hitch(this, function () {
                var isSaveRequire, currentURL, newURL;
                currentURL = location.href.split("&edit");
                newURL = currentURL[0];
                this.previousConfigObj.edit = "";
                if (this.unSavedChanges) {
                    isSaveRequire = confirm(nls.widgets.TemplateBuilder.alertMessage.saveChangesAlert);
                }
                isSaveRequire ? this._updateItem(false, newURL) : this._updateItem(true, newURL);
            }));

            this._showEditableUI();
            browseParams = {
                portal: dojo.portal,
                galleryType: "webmap" //valid values are webmap or group
            };
            this.browseDlg = new BrowseIdDlg(browseParams);
            on(this.browseDlg, "close", lang.hitch(this, function () {
                if (this.browseDlg.get("selected") !== null && this.browseDlg.get("selectedWebmap") !== null) {
                    var currentWebmapTitle = string.substitute(nls.widgets.TemplateBuilder.loadMapMessage, { webmapTitle: this.browseDlg.get("selected") });
                    domAttr.set(query(".selectMapMessage")[0], "innerHTML", currentWebmapTitle);
                    if (this.browseDlg.get("selectedWebmap") != this.config.webmap) {
                        this.config.webmap = this.browseDlg.get("selectedWebmap");
                        domAttr.set(query(".esriNextButton")[0], "disabled", true);
                        domClass.replace(query(".esriNextButton")[0], "esriButtonDisabled", "esriButtonColorEnable");
                    }
                }
            }));
            if (this.config.summaryLayer.id === "") {
                this._createConfigurationPanel(false);
            }
        },

        /* This section creates Application setting dialog which will be used to configureentire application at one go */
        //function to create Application settigns panel
        //function creates Left,Right,Basemap and Bottom panel
        _createAppSettingsPanel: function () {

            var settingsContainer;
            settingsContainer = domConstruct.create("div", { "class": "esriAppSettingPanelContainer" }, null);
            this._storeCurrentAppSetting();
            this._createAppSettingsLeftPanel(settingsContainer);
            this._createAppSettingsRightPanel(settingsContainer);
            this._createAppSettingBasemapPanel(settingsContainer);
            this._createAppSettingBottomPanel(settingsContainer);
        },

        //Store required settings into object which will be used to maintain the stat of application
        _storeCurrentAppSetting: function () {
            this.appSetting = {};
            this.appSetting.title = this.config.title;
            this.appSetting.summary = this.config.summary;
            this.appSetting.enableAboutDialog = this.config.enableAboutDialog;
            this.appSetting.enableEntireAreaButton = this.config.enableEntireAreaButton;
            this.appSetting.summaryAttributeOrder = this.config.summaryAttributeOrder;
            this.appSetting.showAboutOnLoad = this.config.showAboutOnLoad;
            this.appSetting.enableShareDialog = this.config.enableShareDialog;
            this.appSetting.enableBasemapToggle = this.config.enableBasemapToggle;
            this.appSetting.nextBasemap = this.config.nextBasemap;
            this.appSetting.defaultBasemap = this.config.defaultBasemap;
        },

        //Revert application settigns with previously stored object if user clicks cancel button
        _revertGlobalAppSetting: function () {
            for (var key in this.appSetting) {
                if (this.appSetting.hasOwnProperty(key))
                    this.config[key] = this.appSetting[key];
            }
        },

        _createAppSettingsLeftPanel: function (settingsContainer) {
            var leftSettingsContent, appTitleLabelContainer, appTitleLabel, appTitleInputContainer, appTitleInput,
            appDescriptionLabelContainer, appDescriptionLabel, appDescriptionInputContainer, appDijitInputContainer, dijitValue;

            leftSettingsContent = domConstruct.create("div", { "class": "esriSettingsLeftContent" }, settingsContainer);
            appTitleLabelContainer = domConstruct.create("div", { "class": "esriClear" }, leftSettingsContent);
            appTitleLabel = domConstruct.create("label", { innerHTML: nls.widgets.TemplateBuilder.appSettingsTitleText }, appTitleLabelContainer);
            appTitleInputContainer = domConstruct.create("div", { "class": "esriClear" }, leftSettingsContent);
            appTitleInput = domConstruct.create("input", { "style": "width:89%;", value: this.config.title || this.response.itemData.values.title }, appTitleInputContainer);
            on(appTitleInput, "blur", lang.hitch(this, function () {
                if (appTitleInput.value.trim() === "") {
                    alert(nls.widgets.TemplateBuilder.alertMessage.emptyAppTitleMessage);
                    appTitleInput.value = dom.byId("title").innerHTML;
                }
                else {
                    this.config.title = domAttr.get(appTitleInput, "value");
                }
            }));
            appDescriptionLabelContainer = domConstruct.create("div", { "class": "esriClear" }, leftSettingsContent);
            appDescriptionLabel = domConstruct.create("label", { innerHTML: nls.widgets.TemplateBuilder.appSettingsDescriptionText }, appDescriptionLabelContainer);
            appDescriptionInputContainer = domConstruct.create("div", { "class": "esriClear" }, leftSettingsContent);
            dijitValue = this.config.summary ? this.config.summary : this.response ? this.response.item.snippet : "";
            appDijitInputContainer = this._createTextEditor(appDescriptionInputContainer, dijitValue);
            appDijitInputContainer.onLoadDeferred.then(lang.hitch(this, function () {
                setTimeout(function () {
                    appDijitInputContainer.execCommand('selectAll');
                    appDijitInputContainer.execCommand('fontName', "Lato ,sans-serif");
                }, 300);
            }));
            on(appDijitInputContainer, "change", lang.hitch(this, function () {
                if (domAttr.get(appDijitInputContainer, "value").trim() !== "") {
                    setTimeout(lang.hitch(this, function () {
                        this.config.summary = domAttr.get(appDijitInputContainer, "value");
                    }), 0);
                }
                else {
                    alert(nls.widgets.TemplateBuilder.alertMessage.emptyDescriptionMessage);
                    appDijitInputContainer.set("value", appDijitInputContainer.value);
                }
            }));
        },

        _createAppSettingsRightPanel: function (settingsContainer) {
            var rightSettingsContent = domConstruct.create("div", { "class": "esriSettingsRightContent" }, settingsContainer);
            //create Rendererd Area column
            this._createFirstColumn(rightSettingsContent);
            //create share dialog column
            this._createSecondColumn(rightSettingsContent);
            //Create about dialog column
            this._createThirdColumn(rightSettingsContent);
            //Create basemap column
            this._createFourthColumn(rightSettingsContent);
        },

        _createAppSettingBasemapPanel: function (settingsContainer) {
            var baseMapSelectionTemplate, basemapSelectionText, currentBaseMapContainer, basemapSwitchDivContainer,
                nextBasemapSwitchDivText, nextBasemapSelect, defaultBasemapSelect, defaultBasemapSiwtchDiv, defaultBasemapSiwtchDivText,
                nextBasemapSwitchDiv, basemapText, selectDiv, style, currentBasemapContainer;
            style = this.config.enableBasemapToggle ? "visible" : "hidden";
            baseMapSelectionTemplate = domConstruct.create("div", { "class": "esriBasemapSelection", "style": "visibility:" + style }, settingsContainer);
            basemapSelectionText = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.basemapSelectionText, "class": "esriBasmapSelection" }, baseMapSelectionTemplate);

            currentBaseMapContainer = domConstruct.create("div", { "class": "esriSettingsLeftContent" }, baseMapSelectionTemplate);
            basemapSwitchDivContainer = domConstruct.create("div", { "class": "esriBasemapSwitchDivLeft" }, currentBaseMapContainer);
            defaultBasemapSiwtchDiv = domConstruct.create("div", { "class": "esriBasemapSwitchDiv esriBasicBasemapStyle " + "esri" + this.config.defaultBasemap }, basemapSwitchDivContainer);
            defaultBasemapSiwtchDivText = domConstruct.create("div", { innerHTML: this.config.defaultBasemap, "class": "esriBasemapSwitchDivText" }, basemapSwitchDivContainer);

            basemapText = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.defaultBasemapText, "class": "esriBasemapSwitchDivRight" }, currentBaseMapContainer);
            selectDiv = domConstruct.create("div", {}, currentBaseMapContainer);
            defaultBasemapSelect = domConstruct.create("select", {}, selectDiv);
            this.own(on(defaultBasemapSelect, "change", lang.hitch(this, function (evt) {
                if (nextBasemapSelect.value != evt.currentTarget.value) {
                    this._changeBasemap(defaultBasemapSiwtchDiv, evt.currentTarget.value, this.config.defaultBasemap, defaultBasemapSiwtchDivText);
                    this.config.defaultBasemap = evt.currentTarget.value;
                }
                else {
                    defaultBasemapSelect.value = this.config.defaultBasemap;
                }
            })));
            this._createBasemapMenu(defaultBasemapSelect, this.config.defaultBasemap);

            currentBasemapContainer = domConstruct.create("div", { "class": "esriSettingsRightContent" }, baseMapSelectionTemplate);
            basemapSwitchDivContainer = domConstruct.create("div", { "class": "esriBasemapSwitchDivLeft" }, currentBasemapContainer);
            nextBasemapSwitchDiv = domConstruct.create("div", { "class": "esriBasemapSwitchDiv esriBasicBasemapStyle " + "esri" + this.config.nextBasemap }, basemapSwitchDivContainer);
            nextBasemapSwitchDivText = domConstruct.create("div", { innerHTML: this.config.nextBasemap, "class": "esriBasemapSwitchDivText" }, basemapSwitchDivContainer);

            basemapText = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.secondaryBasemapText, "class": "esriBasemapSwitchDivRight" }, currentBasemapContainer);
            selectDiv = domConstruct.create("div", {}, currentBasemapContainer);
            nextBasemapSelect = domConstruct.create("select", {}, selectDiv);
            this.own(on(nextBasemapSelect, "change", lang.hitch(this, function (evt) {
                if (defaultBasemapSelect.value != evt.currentTarget.value) {
                    this._changeBasemap(nextBasemapSwitchDiv, evt.currentTarget.value, this.config.nextBasemap, nextBasemapSwitchDivText);
                    this.config.nextBasemap = evt.currentTarget.value;
                }
                else {
                    nextBasemapSelect.value = this.config.nextBasemap;
                }
            })));
            this._createBasemapMenu(nextBasemapSelect, this.config.nextBasemap);
        },

        _createAppSettingBottomPanel: function (settingsContainer) {
            var bottomcontainer, botomInnerContainer, saveButton, cancelButton, settingsDialog;
            bottomcontainer = domConstruct.create("div", { "class": "esriAppSettingBottomContainer" }, settingsContainer);
            botomInnerContainer = domConstruct.create("div", { "style": "float:right" }, bottomcontainer);
            saveButton = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.saveButtonText, "class": "esriButton esriAppSettingButton" }, botomInnerContainer);
            cancelButton = domConstruct.create("button", { innerHTML: "Cancel", "class": "esriButton esriAppSettingButton" }, botomInnerContainer);

            on(saveButton, "click", lang.hitch(this, function () {
                if (settingsDialog) {
                    settingsDialog.destroy();
                }
                this.unSavedChanges = true;
                this._displayMessage();
                setTimeout(lang.hitch(this, function () {
                    domAttr.set(dom.byId("title"), "innerHTML", this.config.title);
                    domAttr.set(dom.byId("title"), "title", this.config.title);
                    domAttr.set(dom.byId("summary"), "innerHTML", this.config.summary);
                    if (domStyle.get(query(".editAreaDescriptionButtonContainer")[0], "display") == "block") {
                        domStyle.set(query(".editAreaDescriptionButtonContainer")[0], "display", "none");
                        domStyle.set(query(".editAreaDescriptionIcon")[0], "display", "block");
                    }
                }), 0);
            }));

            on(cancelButton, "click", lang.hitch(this, function () {
                if (query(".icon-info-circled-1")[0]) this._disableComponent(this.appSetting.enableAboutDialog, query(".icon-info-circled-1")[0]);
                if (query(".icon-share")[0]) this._disableComponent(this.appSetting.enableShareDialog, query(".icon-share")[0]);
                if (query(".BasemapToggle")[0]) this._disableComponent(this.appSetting.enableBasemapToggle, query(".BasemapToggle")[0]);
                if (settingsDialog) {
                    settingsDialog.destroy();
                }
                this._revertGlobalAppSetting();
                domAttr.set(dom.byId("title"), "innerHTML", this.appSetting.title);
                domAttr.set(dom.byId("summary"), "innerHTML", this.appSetting.summary);
                if (domStyle.get(query(".editAreaDescriptionButtonContainer")[0])) {
                    if (domStyle.get(query(".editAreaDescriptionButtonContainer")[0], "display") == "block") {
                        domStyle.set(query(".editAreaDescriptionButtonContainer")[0], "display", "none");
                        domStyle.set(query(".editAreaDescriptionIcon")[0], "display", "block");
                    }
                }
            }));
            //create dialog and show entire application settings
            settingsDialog = new Dialog({
                title: nls.widgets.TemplateBuilder.applicationSettingText,
                "style": "min-width:700px !important",
                "class": "esriDijitDialog",
                draggable: false
            });
            on(settingsDialog, "hide", lang.hitch(this, function () {
                if (query(".icon-info-circled-1")[0]) this._disableComponent(this.appSetting.enableAboutDialog, query(".icon-info-circled-1")[0]);
                if (query(".icon-share")[0]) this._disableComponent(this.appSetting.enableShareDialog, query(".icon-share")[0]);
                if (query(".BasemapToggle")[0]) this._disableComponent(this.appSetting.enableBasemapToggle, query(".BasemapToggle")[0]);
                this._revertGlobalAppSetting();
                settingsDialog.destroy();
            }));
            settingsDialog.setContent(settingsContainer);
            settingsDialog.show();
        },

        _createFirstColumn: function (rightSettingsContent) {
            var rendererContainer, rendererLabelContainer, rendererLabel, rendererbuttonContainer, onOffButtondiv,
                currentState, currentClass, parameterStatus, areaOnOffButtonLabel, areaOnOffButton, rendererSortContainer, rendererSortInnerContainer, rendererSortLabel,
                rendererSorttoggle;

            rendererContainer = domConstruct.create("div", { "class": "esriClear" }, rightSettingsContent);
            rendererLabelContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm1" }, rendererContainer);
            rendererLabel = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.appSetingsRendererAreaText }, rendererLabelContainer);
            rendererbuttonContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm2" }, rendererContainer);
            currentState = this._checkButtonState(this.config.enableEntireAreaButton);
            areaOnOffButtonLabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriOnOffButtonLabel" }, rendererbuttonContainer);
            onOffButtondiv = domConstruct.create("div", { "class": "esriOnOffButtonDiv" }, rendererbuttonContainer);
            areaOnOffButton = domConstruct.create("div", { "class": currentState.class }, onOffButtondiv);
            on(areaOnOffButton, "click", lang.hitch(this, function () {
                parameterStatus = this._toggleButtonState(areaOnOffButton, this.config.enableEntireAreaButton, areaOnOffButtonLabel);
                this.config.enableEntireAreaButton = parameterStatus;
            }));
            rendererSortContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm3" }, rendererContainer);
            rendererSortInnerContainer = domConstruct.create("div", { "class": "esriParentinner" }, rendererSortContainer);
            rendererSortLabel = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.summaryAttrAscendingOrderTooltip, "style": "float:left;margin-right:5px;" }, rendererSortInnerContainer);
            currentClass = this.config.summaryAttributeOrder == "ASC" ? "esriSelectIcon" : "esriDeselectIcon";
            rendererSorttoggle = domConstruct.create("div", { "class": currentClass }, rendererSortInnerContainer);
            on(rendererSorttoggle, "click", lang.hitch(this, function () {
                parameterStatus = this._toggleCheckBoxSate(rendererSorttoggle, this.config.summaryAttributeOrder, areaOnOffButton);
                var order = parameterStatus ? "ASC" : "DESC";
                this.config.summaryAttributeOrder = order;
            }));
        },

        _createSecondColumn: function (rightSettingsContent) {
            var shareContainer, shareLabelContainer, shareLabel, sharebuttonContainer, parameterStatus,
            currentState, shareOnOffButtonLabel, onOffButtondiv, shareOnOffButton;
            shareContainer = domConstruct.create("div", { "class": "esriClear" }, rightSettingsContent);
            shareLabelContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm1" }, shareContainer);
            shareLabel = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.shareText }, shareLabelContainer);
            sharebuttonContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm2" }, shareContainer);
            currentState = this._checkButtonState(this.config.enableShareDialog);
            shareOnOffButtonLabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriOnOffButtonLabel" }, sharebuttonContainer);
            onOffButtondiv = domConstruct.create("div", { "class": "esriOnOffButtonDiv" }, sharebuttonContainer);
            shareOnOffButton = domConstruct.create("div", { "class": currentState.class }, onOffButtondiv);
            on(shareOnOffButton, "click", lang.hitch(this, function () {
                parameterStatus = this._toggleButtonState(shareOnOffButton, this.config.enableShareDialog, shareOnOffButtonLabel);
                this.config.enableShareDialog = parameterStatus;
                if (query(".icon-share")[0]) {
                    this._disableComponent(parameterStatus, query(".icon-share")[0]);
                }
            }));
            domConstruct.create("div", { "class": "esriParentContainerStyleClm3" }, shareContainer);
        },

        _createThirdColumn: function (rightSettingsContent) {
            var aboutContainer, aboutLabelContainer, aboutButtonContainer, aboutShowContainer, aboutOnOffButton, aboutOnOffButtonLabel,
            currentState, currentClass, aboutShowInnerContainer, parameterStatus, abouttoggle, onOffButtondiv;
            aboutContainer = domConstruct.create("div", { "class": "esriClear" }, rightSettingsContent);
            aboutLabelContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm1" }, aboutContainer);
            domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.aboutText }, aboutLabelContainer);
            aboutButtonContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm2" }, aboutContainer);
            currentState = this._checkButtonState(this.config.enableAboutDialog);
            aboutOnOffButtonLabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriOnOffButtonLabel" }, aboutButtonContainer);
            onOffButtondiv = domConstruct.create("div", { "class": "esriOnOffButtonDiv" }, aboutButtonContainer);
            aboutOnOffButton = domConstruct.create("div", { "class": currentState.class }, onOffButtondiv);
            on(aboutOnOffButton, "click", lang.hitch(this, function () {
                parameterStatus = this._toggleButtonState(aboutOnOffButton, this.config.enableAboutDialog, aboutOnOffButtonLabel);
                this.config.enableAboutDialog = parameterStatus;
                if (query(".icon-info-circled-1")[0]) {
                    this._disableComponent(parameterStatus, query(".icon-info-circled-1")[0]);
                }
            }));
            aboutShowContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm3" }, aboutContainer);
            aboutShowInnerContainer = domConstruct.create("div", { "class": "esriParentinner" }, aboutShowContainer);
            domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.aboutDialogOnLoadText, "style": "float:left; margin-right:5px;" }, aboutShowInnerContainer);
            currentClass = this.config.showAboutOnLoad ? "esriSelectIcon" : "esriDeselectIcon";
            abouttoggle = domConstruct.create("div", { "class": currentClass }, aboutShowInnerContainer);
            on(abouttoggle, "click", lang.hitch(this, function () {
                parameterStatus = this._toggleCheckBoxSate(abouttoggle, this.config.showAboutOnLoad, aboutOnOffButton);
                this.config.showAboutOnLoad = parameterStatus;
            }));
        },

        _createFourthColumn: function (rightSettingsContent) {
            var basemapContainer, basemapLabelContainer, basemapLabel, basmapButtonContainer, parameterStatus, currentState,
            basemapOnOffButtonLabel, basemapOnOffButton, onOffButtondiv;
            basemapContainer = domConstruct.create("div", { "class": "esriClear" }, rightSettingsContent);
            basemapLabelContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm1 esriParentContainerStyleClmBrdNone" }, basemapContainer);
            basemapLabel = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.basemapText }, basemapLabelContainer);
            basmapButtonContainer = domConstruct.create("div", { "class": "esriParentContainerStyleClm2 esriParentContainerStyleClmBrdNone" }, basemapContainer);
            currentState = this._checkButtonState(this.config.enableBasemapToggle);
            basemapOnOffButtonLabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriOnOffButtonLabel" }, basmapButtonContainer);
            onOffButtondiv = domConstruct.create("div", { "class": "esriOnOffButtonDiv" }, basmapButtonContainer);
            basemapOnOffButton = domConstruct.create("div", { "class": currentState.class }, onOffButtondiv);
            on(basemapOnOffButton, "click", lang.hitch(this, function () {
                parameterStatus = this._toggleButtonState(basemapOnOffButton, this.config.enableBasemapToggle, basemapOnOffButtonLabel);
                this.config.enableBasemapToggle = parameterStatus;
                if (query(".BasemapToggle")[0]) {
                    this._disableComponent(parameterStatus, query(".BasemapToggle")[0]);
                }
                if (!parameterStatus) {
                    query(".esriBasemapSelection")[0].style.visibility = "hidden";
                }
                else {
                    query(".esriBasemapSelection")[0].style.visibility = "visible";
                }
            }));
        },

        //function to create and return text editor
        _createTextEditor: function (appDescriptionInputContainer, dijitValue) {
            var dijitInputContainer;
            dijitInputContainer = new Editor({
                height: '250px',
                required: true,
                plugins: ['bold', 'italic', 'underline', 'createLink'],
                value: dijitValue
            }, appDescriptionInputContainer);
            dijitInputContainer.startup();
            return dijitInputContainer;
        },

        //function to fill dropdown with all available basemaps
        _createBasemapMenu: function (basemapSelect, configuredBasemap) {
            array.forEach(this.availableBaseMaps, lang.hitch(this, function (currentBasemap) {
                var basemapOption = domConstruct.create("option");
                basemapOption.text = currentBasemap;
                basemapOption.value = currentBasemap;
                if (basemapOption.value == configuredBasemap) {
                    basemapOption.selected = "selected";
                }
                basemapSelect.appendChild(basemapOption);
            }));
        },

        /*End of Application settings dialog*/

        _changeBasemap: function (domNode, currentValue, previousValue, basemapLabel) {
            domClass.replace(domNode, " esri" + currentValue, " esri" + previousValue);
            domAttr.set(basemapLabel, "innerHTML", currentValue);
        },

        //function to check button state
        _checkButtonState: function (isButtonEnabled) {
            var buttonState = {};
            isButtonEnabled ? buttonState.class = "esriOnButton" : buttonState.class = "esriOffButton";
            isButtonEnabled ? buttonState.label = nls.widgets.TemplateBuilder.onButtonLabel : buttonState.label = nls.widgets.TemplateBuilder.offButtonLabel;
            return buttonState;
        },

        //function to toggle button state
        _toggleButtonState: function (currentButton, configParameter, buttonLabel) {
            if (domClass.contains(currentButton, "esriOnButton")) {
                domClass.replace(currentButton, "esriOffButton", "esriOnButton");
                domAttr.set(buttonLabel, "innerHTML", nls.widgets.TemplateBuilder.offButtonLabel);
                configParameter = false;
            }
            else {
                domClass.replace(currentButton, "esriOnButton", "esriOffButton");
                domAttr.set(buttonLabel, "innerHTML", nls.widgets.TemplateBuilder.onButtonLabel);
                configParameter = true;
            }
            this.unSavedChanges = true;
            this._displayMessage();
            return configParameter;
        },

        //function to toggle checkBox state
        _toggleCheckBoxSate: function (currentCheckBox, configParameter, paramterStatusButton) {
            if (domClass.contains(paramterStatusButton, "esriOnButton")) {
                if (domClass.contains(currentCheckBox, "esriSelectIcon")) {
                    domClass.replace(currentCheckBox, "esriDeselectIcon", "esriSelectIcon");
                    configParameter = false;
                }
                else {
                    domClass.replace(currentCheckBox, "esriSelectIcon", "esriDeselectIcon");
                    configParameter = true;
                }
                this.unSavedChanges = true;
                this._displayMessage();
                return configParameter;
            }
        },

        // connections/subscriptions will be cleaned up during the destroy() lifecycle phase
        destroy: function () {
            this.inherited(arguments);
        },

        //This function internally calls other functions which will create Editable components
        _showEditableUI: function () {
            this._createEditableTitle();
            this._createEditableAreaDescription();
            this._editStatsPanel();
            this._createTooltip();

            topic.subscribe("createEditIcons", (lang.hitch(this, function () {
                this._editStatsPanel();
            })));
        },

        _toggleStatsPanelEditIcon: function () {
            array.forEach(query(".esriStatspanelEditIcon"), lang.hitch(this, function (icon) {
                this._toggleContainer(icon);
            }));
        },

        //function to toggle show/about dialog  container
        _toggleContainer: function (container) {
            var computedStyle, styleDisplay;
            computedStyle = domStyle.getComputedStyle(container);
            styleDisplay = (computedStyle.display == "none") ? "block" : "none";
            domStyle.set(container, "display", styleDisplay);
        },


        _createConfigurationPanel: function (isConfigurationPanel) {
            //Function internally create configuration panel for webmap or layer
            var content = this._createConfigurationPanelUI(isConfigurationPanel);
            if (!this.configDialog) {
                this.configDialog = new Dialog({
                    title: "Data Configuration",
                    "style": "min-width:500",
                    "class": "esriDijitDialog",
                    draggable: false
                });
            }
            this.configDialog.setContent(content);
            this.configDialog.show();
        },

        _createConfigurationPanelUI: function (isConfigurationPanel) {
            var variableContainer, fieldsetContainer;
            variableContainer = domConstruct.create("div", { "class": "esriConfigurationPanel" }, null);
            fieldsetContainer = domConstruct.create("div", { "class": "esriFieldsetContainer" }, variableContainer);
            if (isConfigurationPanel) {
                this._createWebmapConfigurationPanel(fieldsetContainer);
            }
            else {
                this._createLayerConfigurationPanel(fieldsetContainer);
            }
            return variableContainer;
        },

        //webmap configuration panel for users to select and add new webmap into application
        _createWebmapConfigurationPanel: function (fieldsetContainer) {
            var webmapTitle, variableContainerBtn, innerButtonContainer,
            saveWebmapBtn, webmapNextBtn;
            webmapTitle = domConstruct.create("div", { innerHTML: string.substitute(nls.widgets.TemplateBuilder.selectMapMessage, { displaying: "displaying", webmapTitle: this.map.webmapTitle }), "class": "selectMapMessage" }, fieldsetContainer);

            var selectWebmapBtn = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.changeWebmap, "class": "esriButton", "style": "float: right;" }, fieldsetContainer);
            on(selectWebmapBtn, "click", lang.hitch(this, function () {
                this.browseDlg.show();
            }));
            variableContainerBtn = domConstruct.create("div", { "class": "esriButtonConfig" }, fieldsetContainer);
            innerButtonContainer = domConstruct.create("div", { "class": "esriButtonInnerConfig" }, variableContainerBtn);
            saveWebmapBtn = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.saveButtonText, "class": "esriButton esriSpaceStyle" }, innerButtonContainer);
            webmapNextBtn = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.webmapNextButtonText, "class": "esriButton esriButtonColorEnable esriNextButton" }, innerButtonContainer);
            on(saveWebmapBtn, "click", lang.hitch(this, function () {
                var variableAttributes = {};
                this.config.summaryAttributes = [];
                for (var i = 0; i < 4; i++) {
                    variableAttributes.attribute = "";
                    variableAttributes.label = "Add Variable";
                    variableAttributes.dataSourceUrl = "";
                    variableAttributes.children = {};
                    this.config.summaryAttributes.push(variableAttributes);
                    this.config.summaryLayer.id = "";
                }
                var newURL = location.href.split('&webmap');
                if (newURL.length >= 2) {
                    newURL = newURL[0] + "&edit=true";
                }
                this._updateItem(false, newURL);
            }));
            on(webmapNextBtn, "click", lang.hitch(this, function () {
                this._createConfigurationPanel(false);
            }));
        },

        //Populate all featurelayer into dropdown and allow user to change the impact layer
        _createLayerConfigurationPanel: function (fieldsetContainer) {
            var layerLabel, layerSelect, layerSelectOption,
            configurePreviousVariableButton, layerHelperText, legendLabeldiv, configurationPanelButtonContainer, innerButtonContainer, configureSaveVariableButton;
            legendLabeldiv = domConstruct.create("div", { "class": "esriLegendLabelDiv" }, fieldsetContainer);
            layerLabel = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.layerLabelText, "class": "esriSettingsLabel" }, legendLabeldiv);
            layerSelect = domConstruct.create("select", { "class": "esriSelect" }, legendLabeldiv);
            layerHelperText = domConstruct.create("div", { "class": "esriLayerHelpText", innerHTML: "This application requires a polygon layer with numeric fields" }, fieldsetContainer);
            layerSelectOption = domConstruct.create("option");
            layerSelectOption.value = "";
            layerSelectOption.text = nls.widgets.TemplateBuilder.selectLayer;
            layerSelect.appendChild(layerSelectOption);
            for (var i = 0; i < this.map.getLayersVisibleAtScale().length; i++) {
                if ((this.map.getLayersVisibleAtScale()[i].declaredClass == "esri.layers.FeatureLayer")) {
                    layerSelectOption = domConstruct.create("option");
                    layerSelectOption.value = this.map.getLayersVisibleAtScale()[i].id;
                    layerSelectOption.text = this.map.getLayersVisibleAtScale()[i].name;
                    layerSelect.appendChild(layerSelectOption);
                }
                if (this.config.summaryLayer.id == this.map.getLayersVisibleAtScale()[i].id) {
                    layerSelectOption.selected = "selected";
                }
            }
            if (layerSelect.options.length < 1) {
                layerSelectOption = domConstruct.create("option");
                layerSelectOption.value = nls.widgets.TemplateBuilder.noLayerFoundText;
                layerSelectOption.text = nls.widgets.TemplateBuilder.noLayerFoundText;
                layerSelect.appendChild(layerSelectOption);
            }
            if (layerSelect.options.length == 1) {
                this.config.summaryLayer.id = layerSelect.value;
            }
            on(layerSelect, "change", lang.hitch(this, function (value) {
                this.config.summaryLayer.id = value.currentTarget.value;
                var variableAttributes = {};
                this.config.summaryAttributes = [];
                for (var i = 0; i < 4; i++) {
                    variableAttributes.attribute = "";
                    variableAttributes.label = "Add Variable";
                    variableAttributes.dataSourceUrl = "";
                    variableAttributes.children = {};
                    this.config.summaryAttributes.push(variableAttributes);
                }
            }));
            configurationPanelButtonContainer = domConstruct.create("div", { "class": "esriButtonConfig" }, fieldsetContainer);
            innerButtonContainer = domConstruct.create("div", { "class": "esriButtonInnerConfig" }, configurationPanelButtonContainer);
            configurePreviousVariableButton = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.previousButtonText, "class": "esriPreviousButton esriButton" }, innerButtonContainer);
            configureSaveVariableButton = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.saveButtonText, "class": "esriButton" }, innerButtonContainer);
            on(configureSaveVariableButton, "click", lang.hitch(this, function () {
                this._updateItem(false);
            }));
            on(configurePreviousVariableButton, "click", lang.hitch(this, function () {
                this._createConfigurationPanel(true);
            }));
        },

        _createBaseMapSelectPanel: function () {
            var baseMapSelectPanel, currentBaseMapOption, nextBaseMap, nextBaseMapLabel;
            baseMapSelectPanel = domConstruct.create("div", { "class": "esriSelectBasemapPanel" }, dojo.body());
            nextBaseMapLabel = domConstruct.create("div", { innerHTML: "Next Basemap" }, baseMapSelectPanel);
            nextBaseMap = domConstruct.create("select", { "class": "esriBaseMapSelect" }, baseMapSelectPanel);
            //Loop all the available basemaps
            array.forEach(this.availableBaseMaps, lang.hitch(this, function (basemap) {
                currentBaseMapOption = domConstruct.create("option");
                currentBaseMapOption.value = basemap;
                currentBaseMapOption.text = basemap;
                if (this.config.nextBasemap == currentBaseMapOption.value) {
                    currentBaseMapOption.selected = true;
                    this.nextBasmapSelectedOption = currentBaseMapOption.value;
                }
                nextBaseMap.appendChild(currentBaseMapOption);
            }));

            on(nextBaseMap, "change", lang.hitch(this, function () {
                this.config.nextBasemap = nextBaseMap.value;
                this.unSavedChanges = true;
                this._displayMessage();
                this.nextBasmapSelectedOption = nextBaseMap.value;
            }));
        },

        //create editable title
        _createEditableTitle: function () {
            var appTitle = dom.byId("title");
            var editTitleIcon = domConstruct.create("div", { "class": "esriEditTitleIcon" }, null);
            domConstruct.place(editTitleIcon, appTitle, "after");
            on(editTitleIcon, "click", lang.hitch(this, function () {
                domConstruct.empty(appTitle);
                var titleInputBox = domConstruct.create("input", { value: this.config.title, "class": "esriEditTitleInput" }, appTitle);
                titleInputBox.select();
                on(titleInputBox, "blur", lang.hitch(this, function () {
                    this._saveAppTitle(appTitle, titleInputBox, editTitleIcon);
                }));
                on(titleInputBox, "keypress", lang.hitch(this, function (evt) {
                    if (evt.charCode == keys.ENTER) {
                        this._saveAppTitle(appTitle, titleInputBox, editTitleIcon);
                    }
                }));
            }));
        },

        _saveAppTitle: function (appTitle, titleInputBox, editTitleIcon) {
            domConstruct.empty(appTitle);
            if (titleInputBox.value.trim() !== "") {
                appTitle.innerHTML = titleInputBox.value;
                appTitle.title = appTitle.innerHTML;
                this.config.title = appTitle.title;
                this.unSavedChanges = true;
                this._displayMessage();
            }
            else {
                alert(nls.widgets.TemplateBuilder.alertMessage.emptyAppTitleMessage);
                appTitle.innerHTML = this.config.title;
                appTitle.title = appTitle.innerHTML;
            }
            domConstruct.place(editTitleIcon, appTitle, "after");
        },

        //Allows user to edit area description with dojo rich text editor
        _createEditableAreaDescription: function () {
            var areaDescription, editAreaDescriptionIcon, dijitEditorParentDiv, editAreaDescriptionButtonContainer,
            dijitInputContainer, editAreaDescriptionButton;
            if (dom.byId("summary")) {
                areaDescription = dom.byId("summary");
                editAreaDescriptionIcon = domConstruct.create("div", { "class": "editAreaDescriptionIcon" }, null);
                editAreaDescriptionButtonContainer = domConstruct.create("div", { "class": "editAreaDescriptionButtonContainer" }, null);
                editAreaDescriptionButton = domConstruct.create("button", { innerHTML: nls.widgets.TemplateBuilder.subVariablePanelButtonText, "class": "esriButton editAreaDescriptionButton" }, editAreaDescriptionButtonContainer);
                domConstruct.place(editAreaDescriptionIcon, areaDescription, "after");
                on(editAreaDescriptionIcon, "click", lang.hitch(this, function () {
                    domStyle.set(editAreaDescriptionIcon, "display", "none");
                    domStyle.set(editAreaDescriptionButtonContainer, "display", "block");
                    domConstruct.place(editAreaDescriptionButtonContainer, areaDescription, "after");
                    var innerText = areaDescription.innerHTML;
                    areaDescription.innerHTML = "";
                    dijitEditorParentDiv = domConstruct.create("div", {}, areaDescription);
                    dijitInputContainer = this._createTextEditor(dijitEditorParentDiv, innerText);
                    on(editAreaDescriptionButton, "click", lang.hitch(this, function () {
                        this._saveAppDescription(dijitInputContainer, editAreaDescriptionIcon, editAreaDescriptionButtonContainer, areaDescription);
                    }));
                }));
            }
        },

        _saveAppDescription: function (dijitInputContainer, editAreaDescriptionIcon, editAreaDescriptionButtonContainer, areaDescription) {
            if (dijitInputContainer.get("value") !== "") {
                domConstruct.empty(areaDescription);
                var innerText = dijitInputContainer.get("value").trim();
                domStyle.set(editAreaDescriptionIcon, "display", "block");
                domStyle.set(editAreaDescriptionButtonContainer, "display", "none");
                domAttr.set(areaDescription, "innerHTML", innerText);
                this.config.summary = innerText;
                this.unSavedChanges = true;
                this._displayMessage();
            }
            else {
                alert(nls.widgets.TemplateBuilder.alertMessage.emptyDescriptionMessage);
                dijitInputContainer.set("value", dijitInputContainer.value);
            }
        },

        //edit and confiure stats panel
        _editStatsPanel: function () {
            var statsPanel, currentNodeIndex;
            statsPanel = query(".panel .count");
            array.forEach(statsPanel, lang.hitch(this, function (panel, index) {
                domAttr.set(panel, "nodeIndex", index);
                on(panel, "click", lang.hitch(this, function (evt) {
                    evt.stopPropagation();
                    if (query(".esriDataContainer").length) {
                        domConstruct.destroy(query(".esriDataContainer")[0]);
                    }
                    //create panel which will allow user to add/update stats panel configuration
                    currentNodeIndex = domAttr.get(evt.currentTarget, "nodeIndex");
                    this._createVariablePanel(currentNodeIndex);

                }));
            }));
        },

        //function to create variable panel to add/update stats panel configuration
        _createVariablePanel: function (currentNodeIndex) {
            var parentAttributeName, populateSubVariables = false, variableContainer, variableContent, closebtnContainer, labelContainer,
            selectLabel, variableName, inputContainer, slectInputContainer, selectInput, variableInputContainer, variableInput, parentVariableOption,
            soureLinkContainer, sourceLinkLabel, soureLinkInputContainer, sourceLinkInputContent, sourceLinkInput, subVariableContainer,
            subVariableLabel, subVariableInputContainer, subVariableContentContainer, buttonContainer, buttonSaveButton,
            subVariablePanelAnchor, leftButtonContainer, rightButtonContainer, deleteButtonDiv, buttonState, buttonClass, buttonVisibilty,
            nextButtonDiv, previousButtonDiv;

            variableContainer = domConstruct.create("div", { "class": "esriDataContainer" }, query(".content-pane-center")[0], "last");
            variableContent = domConstruct.create("div", { "class": "esriVariableContentContainer" }, variableContainer);
            closebtnContainer = domConstruct.create("div", { "class": "esriVarPanelCloseButton icon-cancel-1", title: "Cancel" }, variableContent);
            on(closebtnContainer, "click", function () {
                domConstruct.destroy(variableContainer);
            });

            labelContainer = domConstruct.create("div", { "class": "esriVariableContainer" }, variableContent);
            selectLabel = domConstruct.create("div", { "class": "esriVariableContent", innerHTML: nls.widgets.TemplateBuilder.selectVariableText }, labelContainer);
            variableName = domConstruct.create("div", { "class": "esriVariableContent", innerHTML: nls.widgets.TemplateBuilder.label }, labelContainer);

            inputContainer = domConstruct.create("div", { "class": "esriVariableContainer" }, variableContent);
            slectInputContainer = domConstruct.create("div", { "class": "esriVariableContent" }, inputContainer);
            selectInput = domConstruct.create("select", { "class": "esriVariableSelect" }, slectInputContainer);
            parentVariableOption = domConstruct.create("option");
            parentVariableOption.value = nls.widgets.TemplateBuilder.selectVariableDropdown;
            parentVariableOption.text = nls.widgets.TemplateBuilder.selectVariableDropdown;
            selectInput.appendChild(parentVariableOption);
            on(selectInput, "change", lang.hitch(this, function (evt) {
                array.forEach(this.map.getLayer(this.config.summaryLayer.id).fields, lang.hitch(this, function (currentField) {
                    if (currentField.name == evt.currentTarget.value) {
                        query(".esriVariableSelectInput")[0].value = currentField.alias;
                    }
                }));
                if (evt.currentTarget.value == "Select A Variable") {
                    domConstruct.empty(subVariableContentContainer);
                    query(".esriVariableSelectInput")[0].value = nls.widgets.TemplateBuilder.enterLabelText;
                    domClass.replace(buttonSaveButton, "esriButtonDisabled", "esriButtonEnabled" + currentNodeIndex);
                    if (domClass.contains(buttonSaveButton, "esriButtonDisabled")) {
                        domStyle.set(deleteButtonDiv, "display", "none");
                    }
                    else {
                        domStyle.set(deleteButtonDiv, "display", "block");
                    }
                    buttonSaveButton.disabled = true;
                    return;
                }
                else {
                    domClass.replace(buttonSaveButton, "esriButtonEnabled" + currentNodeIndex, "esriButtonDisabled");
                    if (domClass.contains(buttonSaveButton, "esriButtonDisabled")) {
                        domStyle.set(deleteButtonDiv, "display", "none");
                    }
                    else {
                        domStyle.set(deleteButtonDiv, "display", "block");
                    }
                    buttonSaveButton.disabled = false;
                }
                domConstruct.empty(subVariableContentContainer);
                this._populateSubVariables(subVariableContentContainer, currentNodeIndex, evt.currentTarget.value);
            }));

            //populate all fields of layer and append it to dropdown
            array.forEach(this.map.getLayer(this.config.summaryLayer.id).fields, lang.hitch(this, function (currentField) {
                if (currentField.type == "esriFieldTypeInteger" || currentField.type == "esriFieldTypeDouble") {
                    parentVariableOption = domConstruct.create("option");
                    parentVariableOption.value = currentField.name;
                    parentVariableOption.text = currentField.name;
                    selectInput.appendChild(parentVariableOption);
                    if (this.config.summaryAttributes[currentNodeIndex].attribute == currentField.name) {
                        parentVariableOption.selected = "selected";
                        parentAttributeName = this.config.summaryAttributes[currentNodeIndex].label;
                        populateSubVariables = true;
                    }
                }
            }));
            variableInputContainer = domConstruct.create("div", { "class": "esriVariableContent" }, inputContainer);
            variableInput = domConstruct.create("input", { "class": "esriVariableSelectInput", value: parentAttributeName ? parentAttributeName : nls.widgets.TemplateBuilder.enterLabelText }, variableInputContainer);

            soureLinkContainer = domConstruct.create("div", { "class": "esriVariableContainer" }, variableContent);
            sourceLinkLabel = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.sourceLinkText }, soureLinkContainer);

            soureLinkInputContainer = domConstruct.create("div", { "class": "esriVariableContainer" }, variableContent);
            sourceLinkInputContent = domConstruct.create("div", { "class": "esriSourceLink" }, soureLinkInputContainer);
            sourceLinkInput = domConstruct.create("input", { "class": "esriSourceLinkInput", value: this.config.summaryAttributes[currentNodeIndex].dataSourceUrl }, sourceLinkInputContent);

            subVariableContainer = domConstruct.create("div", { "class": "esriVariableContainer" }, variableContent);
            subVariableLabel = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.selectSubVariableText }, subVariableContainer);

            subVariableInputContainer = domConstruct.create("div", { "class": "esriVariableContainer" }, variableContent);
            subVariableContentContainer = domConstruct.create("div", { "class": "esrisubVariableContent" }, subVariableInputContainer);
            if (populateSubVariables) {
                this._populateSubVariables(subVariableContentContainer, currentNodeIndex, this.config.summaryAttributes[currentNodeIndex].attribute);
            }

            buttonContainer = domConstruct.create("div", { "class": "esriSubVariableButtonContainer" }, variableContent);
            rightButtonContainer = domConstruct.create("div", { "style": "float:right" }, buttonContainer);
            leftButtonContainer = domConstruct.create("div", { "style": "float:left" }, buttonContainer);
            populateSubVariables ? buttonState = false : buttonState = true;
            buttonState ? buttonClass = "esriButtonDisabled" : buttonClass = "esriButtonEnabled" + currentNodeIndex;
            if (buttonClass == "esriButtonDisabled") {
                buttonVisibilty = "none";
            }
            else {
                buttonVisibilty = "block";
            }
            nextButtonDiv = domConstruct.create("button", { "class": "esriButton esriNextPreviousButton", innerHTML: nls.widgets.TemplateBuilder.nextButtonText }, leftButtonContainer);
            previousButtonDiv = domConstruct.create("button", { "class": "esriButton esriNextPreviousButton", innerHTML: nls.widgets.TemplateBuilder.prevButtonText }, leftButtonContainer);
            deleteButtonDiv = domConstruct.create("div", { "class": "esriClearButton", innerHTML: "Clear Data" }, rightButtonContainer);
            domStyle.set(deleteButtonDiv, "display", buttonVisibilty);
            buttonSaveButton = domConstruct.create("button", { "style": "float:right", "class": "esriButton " + buttonClass, innerHTML: nls.widgets.TemplateBuilder.subVariablePanelButtonText, disabled: buttonState }, rightButtonContainer);
            if (Number(currentNodeIndex) === 3) {
                domStyle.set(nextButtonDiv, "display", "none");
            }
            if (Number(currentNodeIndex) === 0) {
                domStyle.set(previousButtonDiv, "display", "none");
            }
            on(buttonSaveButton, "click", lang.hitch(this, function () {
                var ex = this._saveStatsPanelState(currentNodeIndex);
                if (ex)
                    domConstruct.destroy(variableContainer);
            }));
            on(deleteButtonDiv, "click", lang.hitch(this, function () {
                this._resetStatsPanelState(currentNodeIndex);
                alert(nls.widgets.TemplateBuilder.alertMessage.resetVariableMessage);
                domConstruct.destroy(variableContainer);
                this.unSavedChanges = true;
                this._displayMessage();
            }));
            on(nextButtonDiv, "click", lang.hitch(this, function () {
                if (query(".esriVariableSelectInput")[0].value != nls.widgets.TemplateBuilder.enterLabelText) {
                    var statsSaved = this._saveStatsPanelState(currentNodeIndex);
                    if (!statsSaved) {
                        return;
                    }
                }
                if (query(".esriDataContainer").length) {
                    domConstruct.destroy(query(".esriDataContainer")[0]);
                }
                if (Number(currentNodeIndex) < 3) {
                    currentNodeIndex++;
                    this._createVariablePanel(currentNodeIndex.toString());
                }
                if (Number(currentNodeIndex) === 3) {
                    domStyle.set(nextButtonDiv, "display", "none");
                }
            }));
            on(previousButtonDiv, "click", lang.hitch(this, function () {
                if (query(".esriVariableSelectInput")[0].value != nls.widgets.TemplateBuilder.enterLabelText) {
                    var statsSaved = this._saveStatsPanelState(currentNodeIndex);
                    if (!statsSaved) {
                        return;
                    }
                }
                if (query(".esriDataContainer").length) {
                    domConstruct.destroy(query(".esriDataContainer")[0]);
                }
                if (Number(currentNodeIndex) >= 0) {
                    currentNodeIndex--;
                    this._createVariablePanel(currentNodeIndex.toString());
                }
                if (Number(currentNodeIndex) === 0) {
                    domStyle.set(previousButtonDiv, "display", "none");
                }
            }));

            subVariablePanelAnchor = domConstruct.create("div", { "class": "esriDownArrow" }, variableContainer);
            this._setAnchorPosition(currentNodeIndex);
        },

        //function to populate sub variables and allow users to add/update the same
        _populateSubVariables: function (subVariableContentContainer, currentNodeIndex, parentAttributeName) {
            var count = 0, currentFieldAlias;
            array.forEach(this.map.getLayer(this.config.summaryLayer.id).fields, lang.hitch(this, function (currentField) {
                var subVariableContentDiv, subVariableContentFirstDiv, checkBox, subVariableContentSecondDiv, label,
                subVariableContentThirdDiv, inputText, checkBoxStatusClass, className;
                checkBoxStatusClass = "esriUncheckIcon";
                currentFieldAlias = "";
                if (parentAttributeName != currentField.name && (currentField.type == "esriFieldTypeInteger" || currentField.type == "esriFieldTypeDouble")) {
                    for (var i = 0; i < this.config.summaryAttributes[currentNodeIndex].children.length; i++) {
                        if (currentField.name == this.config.summaryAttributes[currentNodeIndex].children[i].attribute) {
                            checkBoxStatusClass = "esriCheckIcon";
                            currentFieldAlias = this.config.summaryAttributes[currentNodeIndex].children[i].label;
                            break;
                        }
                    }
                    count % 2 !== 0 ? className = "esriRowEvenColor" : className = "";
                    subVariableContentDiv = domConstruct.create("div", { "class": "esriSubVariableContainer" }, subVariableContentContainer);
                    subVariableContentFirstDiv = domConstruct.create("div", { "class": " esriSubVariable esriFirstColumn " + className }, subVariableContentDiv);
                    checkBox = domConstruct.create("div", { "class": "esriCheckBoxIcon" + " " + checkBoxStatusClass }, subVariableContentFirstDiv);
                    domAttr.set(checkBox, "index", count);
                    subVariableContentSecondDiv = domConstruct.create("div", { "class": " esriSubVariable esriSecondColumn " + className }, subVariableContentDiv);
                    label = domConstruct.create("label", { "class": "esriVariableLabel", innerHTML: currentField.name }, subVariableContentSecondDiv);
                    domAttr.set(label, "index", count);
                    subVariableContentThirdDiv = domConstruct.create("div", { "class": " esriSubVariable esriThirdColumn " + className }, subVariableContentDiv);
                    inputText = domConstruct.create("input", { "class": "esriVariableInput" }, subVariableContentThirdDiv);
                    domAttr.set(inputText, "index", count);
                    inputText.value = currentFieldAlias ? currentFieldAlias : currentField.alias;
                    count++;
                    on(checkBox, "click", function (evt) {
                        if (domClass.contains(checkBox, "esriCheckIcon")) {
                            domClass.replace(checkBox, "esriUncheckIcon", "esriCheckIcon");
                        }
                        else {
                            domClass.replace(checkBox, "esriCheckIcon", "esriUncheckIcon");
                        }
                        var totalSubVariable = query(".esriCheckBoxIcon.esriCheckIcon").length;
                        if (totalSubVariable > 25) {
                            domClass.replace(evt.currentTarget, "esriUncheckIcon", "esriCheckIcon");
                            alert(nls.widgets.TemplateBuilder.alertMessage.maxVariableSelection);
                        }
                    });
                }
            }));
        },

        //funtion to save stats panel configuration
        _saveStatsPanelState: function (currentNodeIndex) {
            var subVariables, columnIndex, parentAttribute, variableSourceLink, parentAttributeLabel, subVariableAttribute, subVariableLabel,
            summaryAttributes = [], validationRequire = false;
            subVariables = query(".esriCheckBoxIcon.esriCheckIcon");
            parentAttribute = query(".esriVariableSelect")[0].value;
            parentAttributeLabel = query(".esriVariableSelectInput")[0].value;
            variableSourceLink = query(".esriSourceLinkInput")[0].value;
            if (parentAttributeLabel === "") {
                alert(nls.widgets.TemplateBuilder.alertMessage.variableLabelValidation);
                return false;
            }

            //loop selected sub variables and save them
            array.forEach(subVariables, lang.hitch(this, function (currentCheckdField) {
                columnIndex = domAttr.get(currentCheckdField, "index");
                subVariableAttribute = query(".esriVariableInput")[columnIndex].value;
                if (subVariableAttribute === "") {
                    validationRequire = true;
                }
                subVariableLabel = query(".esriVariableLabel")[columnIndex].innerHTML;
                summaryAttributes.push({ "attribute": subVariableLabel, "label": subVariableAttribute });
            }));
            if (validationRequire) {
                alert(nls.widgets.TemplateBuilder.alertMessage.subVariableLabelValidation);
                return false;
            }

            this.config.summaryAttributes[currentNodeIndex].attribute = parentAttribute;
            this.config.summaryAttributes[currentNodeIndex].label = parentAttributeLabel ? parentAttributeLabel : "No Label";
            this.config.summaryAttributes[currentNodeIndex].dataSourceUrl = variableSourceLink;

            this.unSavedChanges = true;
            this._displayMessage();
            this.config.summaryAttributes[currentNodeIndex].children = [];
            this.config.summaryAttributes[currentNodeIndex].children = summaryAttributes;
            return true;
        },

        _resetStatsPanelState: function (currentNodeIndex) {
            this.config.summaryAttributes[currentNodeIndex].attribute = "";
            this.config.summaryAttributes[currentNodeIndex].label = "Add Variable";
            this.config.summaryAttributes[currentNodeIndex].dataSourceUrl = "";
            this.config.summaryAttributes[currentNodeIndex].children = [];
        },

        //function to set anchor point for variable panel
        _setAnchorPosition: function (editIconIndex) {
            switch (editIconIndex) {
                case "0":
                    domStyle.set(query(".esriDownArrow")[0], "marginLeft", "12.5%");
                    break;
                case "1":
                    domStyle.set(query(".esriDownArrow")[0], "marginLeft", "36%");
                    break;
                case "2":
                    domStyle.set(query(".esriDownArrow")[0], "marginLeft", "61%");
                    break;
                default:
                    domStyle.set(query(".esriDownArrow")[0], "marginLeft", "86%");
            }
        },

        _displayMessage: function () {
            if (domStyle.get(query(".esriSaveButtonContainer")[0], "display") == "none" || this.unSavedChanges) {
                domStyle.set(query(".esriSaveButtonContainer")[0], "display", "block");
            }
            else {
                domStyle.set(query(".esriSaveButtonContainer")[0], "display", "none");
            }
            this.get("drawer").resize();
        },

        //function to update item on AGOL with changed configuration settings
        _updateItem: function (isRollBackRequired, newURL) {
            //Here we are using the response,so we dont need to create whole item again.
            //we are just modifying required parameters.
            isRollBackRequired ? this.config = this.previousConfigObj : this.config = this.config;
            delete this.config.i18n;
            if (this.config.edit) {
                delete this.config.edit;
            }
            lang.mixin(this.response.itemData.values, this.config);
            this.response.item.tags = typeof (this.response.item.tags) == "object" ? this.response.item.tags.join(',') : this.response.item.tags;
            this.response.item.typeKeywords = typeof (this.response.item.typeKeywords) == "object" ? this.response.item.typeKeywords.join(',') : this.response.item.typeKeywords;
            var rqData = lang.mixin(this.response.item, {
                id: this.config.appid,
                item: this.config.appid,
                itemType: "text",
                f: 'json',
                token: dojo.token,
                title: this.config.title,
                text: JSON.stringify(this.response.itemData),
                type: "Web Mapping Application",
                overwrite: true
            });
            var updateURL = dojo.portal.url + "/sharing/content/users/" + dojo.currentLoggedInUser + (this.response.item.ownerFolder ? ("/" + this.response.item.ownerFolder) : "") + "/items/" + this.config.appid + "/update";
            esriRequest({
                url: updateURL,
                content: rqData,
                handleAs: 'json'
            }, { usePost: true }).then(lang.hitch(this, function (result) {
                if (result.success) {
                    if (newURL) {
                        window.location.href = newURL;
                    }
                    else if (!isRollBackRequired) {
                        location.reload();
                    }
                    else {
                    }
                }
            }), function () {
                alert(nls.widgets.TemplateBuilder.alertMessage.failMessage);
            });
        },

        _createTooltip: function () {
            var myTooltipDialog, isShowing = false;
            myTooltipDialog = new TooltipDialog({
                id: 'tooltipDialog',
                style: "max-width: 300px; font-size: 12px;",
                onMouseLeave: function () {
                    popup.close(myTooltipDialog);
                },
                onShow: function () {
                    isShowing = true;
                    myTooltipDialog.focus();
                    myTooltipDialog.set("focused", true);
                },
                onHide: function () {
                    isShowing = false;
                },
                onBlur: function () {
                    if (isShowing) {
                        popup.close(myTooltipDialog);
                    }
                }
            });
            this._attachMouseEvents(myTooltipDialog);
        },

        _attachMouseEvents: function (myTooltipDialog) {
            var _this = this;
            //tooltip for About dialog
            on(dom.byId('AboutDialog'), "mouseover", function () {
                var aboutDialogContent, aboutOnOfButton, aboutLoadtext, onLoadCheckIcon, parameterStatus, currentClass, currentState,
                aboutlabel;
                aboutDialogContent = domConstruct.create("div", { "class": "esriTooltipDialog" }, null);
                currentState = _this._checkButtonState(_this.config.enableAboutDialog);
                aboutlabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriFloatLeftStyle esriToggleButtonClass" }, aboutDialogContent);
                aboutOnOfButton = domConstruct.create("div", { "class": "esriFloatLeftStyle " + currentState.class }, aboutDialogContent);
                aboutLoadtext = domConstruct.create("div", { innerHTML: nls.widgets.TemplateBuilder.aboutDialogOnLoadText, "class": "esriFloatLeftlabel" }, aboutDialogContent);
                currentClass = _this.config.showAboutOnLoad ? "esriSelectIcon" : "esriDeselectIcon";
                onLoadCheckIcon = domConstruct.create("div", { "class": "esriFloatLeftStyle " + currentClass, "style": "margin-left:5px;" }, aboutDialogContent);
                on(aboutOnOfButton, "click", function () {
                    parameterStatus = _this._toggleButtonState(aboutOnOfButton, _this.config.enableAboutDialog, aboutlabel);
                    _this.config.enableAboutDialog = parameterStatus;
                    _this._disableComponent(parameterStatus, query(".icon-info-circled-1")[0]);
                });
                on(onLoadCheckIcon, "click", lang.hitch(this, function () {
                    parameterStatus = _this._toggleCheckBoxSate(onLoadCheckIcon, _this.config.showAboutOnLoad, aboutOnOfButton);
                    _this.config.showAboutOnLoad = parameterStatus;
                }));
                _this._displayTooltip(myTooltipDialog, aboutDialogContent, this, false);
            });
            //tooltip for Share dialog
            on(dom.byId('ShareDialog'), "mouseover", function () {
                var shareDialogContent, sharelabel, shareOnOfButton, currentState, parameterStatus;
                shareDialogContent = domConstruct.create("div", { "class": "esriTooltipDialog" }, null);
                currentState = _this._checkButtonState(_this.config.enableShareDialog);
                sharelabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriFloatLeftStyle esriToggleButtonClass" }, shareDialogContent);
                shareOnOfButton = domConstruct.create("div", { "class": "esriFloatLeftStyle " + currentState.class }, shareDialogContent);
                on(shareOnOfButton, "click", function () {
                    parameterStatus = _this._toggleButtonState(shareOnOfButton, _this.config.enableShareDialog, sharelabel);
                    _this.config.enableShareDialog = parameterStatus;
                    _this._disableComponent(parameterStatus, query(".icon-share")[0]);
                });
                _this._displayTooltip(myTooltipDialog, shareDialogContent, this, false);
            });
            //tooltip for basemap
            on(dom.byId('BasemapToggle'), "mouseover", function () {
                var basemapContent, basemapLabel, basemapOnOfButton, basmeapPencilIcon, currentState, parameterStatus;
                basemapContent = domConstruct.create("div", { "class": "esriTooltipDialog" }, null);
                currentState = _this._checkButtonState(_this.config.enableBasemapToggle);
                basemapLabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriFloatLeftStyle esriToggleButtonClass" }, basemapContent);
                basemapOnOfButton = domConstruct.create("div", { "class": "esriFloatLeftStyle " + currentState.class }, basemapContent);
                basmeapPencilIcon = domConstruct.create("div", { "class": "esriEditBasemapIcon esriFloatLeftStyle" }, basemapContent);
                on(basemapOnOfButton, "click", function () {
                    parameterStatus = _this._toggleButtonState(basemapOnOfButton, _this.config.enableBasemapToggle, basemapLabel);
                    _this.config.enableBasemapToggle = parameterStatus;
                    _this._disableComponent(parameterStatus, query(".BasemapToggle")[0]);
                });
                on(basmeapPencilIcon, "click", function () {
                    _this._createAppSettingsPanel();
                });
                _this._displayTooltip(myTooltipDialog, basemapContent, this, false);
            });
            if (dom.byId('renderer_menu')) {
                on(dom.byId('renderer_menu'), "mouseover", function () {
                    var rendererContent, rendererLabel, rendererOnOfButton, rendererSort, currentClass, currentState, rendererSortLabel,
                    parameterStatus;
                    rendererContent = domConstruct.create("div", { "class": "esriTooltipDialog" }, null);
                    currentState = _this._checkButtonState(_this.config.enableEntireAreaButton);
                    rendererLabel = domConstruct.create("div", { innerHTML: currentState.label, "class": "esriFloatLeftStyle esriToggleButtonClass" }, rendererContent);
                    rendererOnOfButton = domConstruct.create("div", { "class": "esriFloatLeftStyle " + currentState.class }, rendererContent);
                    currentClass = _this.config.summaryAttributeOrder == "ASC" ? "esriSelectIcon" : "esriDeselectIcon";
                    rendererSortLabel = domConstruct.create("label", { innerHTML: nls.widgets.TemplateBuilder.summaryAttrAscendingOrderTooltip, "class": "esriFloatLeftStyle" }, rendererContent);
                    rendererSort = domConstruct.create("div", { "class": "esriFloatLeftStyle " + currentClass, "style": "margin-left:5px;" }, rendererContent);
                    on(rendererOnOfButton, "click", function () {
                        parameterStatus = _this._toggleButtonState(rendererOnOfButton, _this.config.enableEntireAreaButton, rendererLabel);
                        _this.config.enableEntireAreaButton = parameterStatus;
                    });
                    on(rendererSort, "click", function () {
                        parameterStatus = _this._toggleCheckBoxSate(rendererSort, _this.config.summaryAttributeOrder, rendererOnOfButton);
                        var order = parameterStatus ? "ASC" : "DESC";
                        _this.config.summaryAttributeOrder = order;
                    });
                    _this._displayTooltip(myTooltipDialog, rendererContent, this, true);
                });
            }
        },

        //function to show tooltip on hover
        _displayTooltip: function (myTooltipDialog, content, parentNode, rendererMenu) {
            myTooltipDialog.setContent(content);
            var orientation = rendererMenu ? ["below-centered", "above-centered"] : ["below-centered"];
            popup.open({
                popup: myTooltipDialog,
                around: parentNode,
                orient: orientation
            });
        },

        //function to disable the configurable component
        _disableComponent: function (parameterStatus, domNode) {
            if (parameterStatus) {
                domStyle.set(domNode, "opacity", "1.0");
                domStyle.set(domNode, "border", "none");
            }
            else {
                domStyle.set(domNode, "opacity", "0.3");
            }
        }
    });
    return Widget;
});
