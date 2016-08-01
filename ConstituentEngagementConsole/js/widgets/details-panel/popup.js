/*global define,$,setTimeout,window,dojoConfig */
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
    "dojo/text!./templates/popup.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/_base/lang",
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/on",
    "dijit/layout/ContentPane",
    "widgets/details-panel/popup-form",
    "esri/tasks/query",
    "dojo/_base/array",
    "dojo/domReady!"
], function (
    declare,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    lang,
    dom,
    domAttr,
    domClass,
    domConstruct,
    on,
    ContentPane,
    PopupForm,
    Query,
    array
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        isShowSelectedClicked: null, // to notify that show selected option is clicked
        isShowAllClicked: null, // to notify that show all option is clicked

        /**
        * This function is called when widget is constructed
        * @param{object} options contains parameters of widget
        * @memberOf widgets/details-panel/popup
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        startup: function () {
            //display popup panel
            this._showPopupPanel();
        },

        /**
        * Show selected feature's popup content
        * @memberOf widgets/details-panel/popup
        */
        _showPopupPanel: function () {
            //check whether multiple features selected
            if (this.multipleFeatures.length === 1) {
                //show popup info if single feature is selected
                this._hidePanel(this.popupFormContainer);
                this._showPanel(this.popupInfoParentContainer);
                this._displayPopupContent(this.multipleFeatures[0]);
                this.popupEditModeEnabled(false);
            } else {
                //create edit popup form if multiple feature selected
                this._createPopupForm();
            }
        },

        /**
        * display popup content for selected feature
        * @memberOf widgets/details-panel/popup
        */
        _displayPopupContent: function (selectedFeature) {
            if (selectedFeature) {
                var queryFeature, currentDateTime = new Date().getTime();
                queryFeature = new Query();
                queryFeature.objectIds = [parseInt(selectedFeature.attributes[this.selectedOperationalLayer.objectIdField], 10)];
                queryFeature.outFields = ["*"];
                queryFeature.outSpatialReference = this.selectedOperationalLayer.spatialReference;
                queryFeature.where = currentDateTime + "=" + currentDateTime;
                queryFeature.returnGeometry = true;
                this.selectedOperationalLayer.queryFeatures(queryFeature, lang.hitch(this, function (result) {
                    if (this.multipleFeatures[0]) {
                        var popupContentPane = new ContentPane({}, this.popupContainer);
                        popupContentPane.startup();
                        popupContentPane.set("content", result.features[0].getContent());
                        this._checkAttachments();
                        this._createEditFormButton();
                    }
                }));
            }
        },

        /**
        * This function is used to create edit button
        * @memberOf widgets/details-panel/popup
        */
        _createEditFormButton: function () {
            var editFeatureButton = domConstruct.create("div", { "class": "esriCTEditFeatureButton", "title": this.appConfig.i18n.detailsPanel.editContentText }, this.popupContainer);
            //attach 'click event on edit button to display form
            on(editFeatureButton, "click", lang.hitch(this, function () {
                this._createPopupForm();
            }));
        },

        /**
        * create form to update feature attributes
        * @memberOf widgets/details-panel/popup
        */
        _createPopupForm: function () {
            //destroy existing popup-form instance
            if (this.popupFormInstance) {
                this.popupFormInstance.destroy();
            }
            domConstruct.empty(this.popupFormContainer);
            this.popupEditModeEnabled(true);
            //Create new instance of PopupForm
            this.popupFormInstance = new PopupForm({
                config: this.appConfig,
                itemInfos: this.itemInfo,
                appUtils: this.appUtils,
                nls: this.appConfig.i18n,
                selectedLayer: this.selectedOperationalLayer,
                popupInfo: this.popupInfo,
                selectedFeatures: this.multipleFeatures
            }, domConstruct.create("div", {}, this.popupFormContainer));
            // attach handler on cancel button click
            this.popupFormInstance.onCancelButtonClick = lang.hitch(this, this._onFeatureUpdateCancel);
            // attach handler on save button click
            this.popupFormInstance.onPopupFormSubmitted = lang.hitch(this, function (feature) {
                if ((!this.isShowSelectedClicked) ||
                    ((this.isShowSelectedClicked) && (this.multipleFeatures) && (this.multipleFeatures.length === 1))) {
                    // Close the comment form after submitting new comment
                    this._hidePanel(this.popupFormContainer);
                    this._showPanel(this.popupInfoParentContainer);
                }
                this.onFeatureUpdated(feature, this.isShowSelectedClicked);
            });
            this._showPanel(this.popupFormContainer);
            this._hidePanel(this.popupInfoParentContainer);
        },

        /**
        * hide popup form on canceling editing
        * @memberOf widgets/details-panel/popup
        */
        _onFeatureUpdateCancel: function () {
            // if not show selected
            // if show selected & only one features is selected
            if ((!this.isShowSelectedClicked) ||
                ((this.isShowSelectedClicked) && (this.multipleFeatures) && (this.multipleFeatures.length === 1))) {
                this._hidePanel(this.popupFormContainer);
                this._showPanel(this.popupInfoParentContainer);
                //display popup content for recently selected feature
                if (this.multipleFeatures.length > 1) {
                    var selectedFeature = this.multipleFeatures[this.multipleFeatures.length - 1];
                    this.onMultipleFeatureEditCancel(selectedFeature);
                }
                //Scroll to top position when clicked cancel need ID to use scrollTop
                dom.byId("tabContent").scrollTop = 0;
                this.popupEditModeEnabled(false);
            }
        },

        /**
        * shows and hides the div content
        * @memberOf widgets/details-panel/popup
        */
        _showPanel: function (domNode) {
            if (domClass.contains(domNode, "esriCTHidden")) {
                domClass.remove(domNode, "esriCTHidden");
            }
        },

        /**
        * shows and hides the div content
        * @memberOf widgets/details-panel/popup
        */
        _hidePanel: function (domNode) {
            if (!domClass.contains(domNode, "esriCTHidden")) {
                domClass.add(domNode, "esriCTHidden");
            }
        },

        /**
        * handler when popup form gets submitted successfully
        * @memberOf widgets/details-panel/popup
        */
        onFeatureUpdated: function (feature) {
            return feature;
        },

        /**
        * handler when multiple feature editing gets canceled
        * @memberOf widgets/details-panel/popup
        */
        onMultipleFeatureEditCancel: function (feature) {
            return feature;
        },

        /**
        * check whether attachments are available in layer and enabled in webmap
        * @memberOf widgets/details-panel/popup
        **/
        _checkAttachments: function () {
            if (this.selectedOperationalLayer.hasAttachments && this.popupInfo.showAttachments) {
                var attachmentsDiv = $(".attachmentsSection", this.popupContainer)[0];
                if (attachmentsDiv) {
                    domConstruct.empty(attachmentsDiv);
                    domClass.remove(attachmentsDiv, "hidden");
                    this._loadAttachmentTimer = setTimeout(lang.hitch(this, function () {
                        this._showAttachments(this.multipleFeatures[0], attachmentsDiv);
                    }), 500);
                }
            }
        },

        /**
        * query layer to get attachments
        * @param{object} graphic
        * @param{object} attachmentContainer
        * @memberOf widgets/details-panel/popup
        **/
        _showAttachments: function (graphic, attachmentContainer) {
            var objectID, fieldContent, imageDiv, imagePath, i, isAttachmentAvailable = false, imageThumbnailContainer, attachmentWrapper, imageThumbnailContent, imageContainer, fileTypeContainer;
            if (graphic) {
                objectID = graphic.attributes[this.selectedOperationalLayer.objectIdField];
                domConstruct.empty(attachmentContainer);
                this.selectedOperationalLayer.queryAttachmentInfos(objectID, lang.hitch(this, function (infos) {
                    // check if a hyperlink contains tiff image, then convert it into a non-image document
                    infos = this._checkForHyperlinks(infos);
                    // check if infoMedia contains tiff images then show them as non-image document
                    infos = this._checkTiffFormatImagesInPopupMedia(infos);
                    //check if attachments found
                    if (infos && infos.length > 0) {
                        //Create attachment header text
                        domConstruct.create("div", {
                            "innerHTML": this.appConfig.i18n.geoform.attachmentHeaderText,
                            "class": "esriCTAttachmentHeader"
                        }, attachmentContainer);

                        fieldContent = domConstruct.create("div", {
                            "class": "esriCTThumbnailContainer"
                        }, attachmentContainer);

                        // display all attached images in thumbnails
                        for (i = 0; i < infos.length; i++) {
                            // check if a attachment is of tiff image, then convert it into a non-image document
                            if (infos[i].contentType.indexOf("image") !== -1 && infos[i].contentType.match(/(\/tiff)/)) {
                                infos[i].contentType = "application/tiff";
                            }
                            if (infos[i].contentType.indexOf("image") === -1) {
                                attachmentWrapper = domConstruct.create("div", {}, fieldContent);

                                imageThumbnailContainer = domConstruct.create("div", {
                                    "class": "esriCTNonImageContainer",
                                    "alt": infos[i].url
                                }, attachmentWrapper);

                                imageThumbnailContent = domConstruct.create("div", {
                                    "class": "esriCTNonImageContent"
                                }, imageThumbnailContainer);

                                imageContainer = domConstruct.create("div", {}, imageThumbnailContent);

                                fileTypeContainer = domConstruct.create("div", {
                                    "class": "esriCTNonFileTypeContent"
                                }, imageThumbnailContent);

                                isAttachmentAvailable = true;
                                //set default image path if attachment has no image URL
                                imagePath = dojoConfig.baseURL + this.appConfig.noAttachmentIcon;
                                imageDiv = domConstruct.create("img", {
                                    "alt": infos[i].url,
                                    "class": "esriCTAttachmentImg",
                                    "src": imagePath
                                }, imageContainer);
                                this._fetchDocumentContentType(infos[i], fileTypeContainer);
                                this._fetchDocumentName(infos[i], imageThumbnailContainer);
                                on(imageThumbnailContainer, "click", lang.hitch(this, this._displayImageAttachments));
                            }
                        }
                        if (!isAttachmentAvailable) {
                            domClass.add(attachmentContainer, "hidden");
                        }
                    }
                }));
            }
        },

        /**
        * Function to fetch document content type
        * @param{object} attachment object
        * @memberOf widgets/details-panel/popup
        **/
        _fetchDocumentContentType: function (attachmentData, fileTypeContainer) {
            var attachmentType = attachmentData.contentType.split("/")[1], typeText;
            switch (attachmentType) {
            case "pdf":
                typeText = ".PDF";
                break;
            case "plain":
                typeText = ".TXT";
                break;
            case "vnd.ms-powerpoint":
                typeText = ".PPT";
                break;
            case "vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                typeText = ".XLSX";
                break;
            case "vnd.openxmlformats-officedocument.wordprocessingml.document":
                typeText = ".DOCX";
                break;
            case "octet-stream":
                typeText = ".ZIP";
                break;
            case "tiff":
                typeText = ".TIFF";
                break;
            default:
                typeText = ".DOCX";
            }
            domAttr.set(fileTypeContainer, "innerHTML", typeText);
        },

        /**
        * Function to fetch document name
        * @param{object} attachment object
        * @param{object} dom node
        * @memberOf widgets/details-panel/popup
        **/
        _fetchDocumentName: function (attachmentData, container) {
            var attachmentNameWrapper, attachmentName;
            attachmentNameWrapper = domConstruct.create("div", {
                "class": "esriCTNonImageName"
            }, container);

            attachmentName = domConstruct.create("div", {
                "class": "esriCTNonImageNameMiddle",
                "innerHTML": attachmentData.name
            }, attachmentNameWrapper);
        },

        /**
        * This function is used to show attachments in new window when user clicks on the attachment thumbnail
        * @param{object} evt
        * @memberOf widgets/details-panel/popup
        **/
        _displayImageAttachments: function (evt) {
            window.open(domAttr.get(evt.currentTarget, "alt"));
        },

        /**
        * Event listener for edit mode
        * @memberOf widgets/details-panel/popup
        **/
        popupEditModeEnabled: function (isEditMode) {
            return isEditMode;
        },

        /**
        * This function is used to get tiff images from hyperlinks
        * @param{object} contains attachments information
        * @memberOf widgets/details-panel/popup
        */
        _checkForHyperlinks: function (infos) {
            var attributes, name;
            attributes = [];
            attributes = this.multipleFeatures[0].attributes;
            for (name in attributes) {
                if (attributes.hasOwnProperty(name) && attributes[name] && String(attributes[name]).match(/^(http(s?):)/) && String(attributes[name]).match(/\.(tif|tiff)(\/|$)/i)) {
                    // if the hyperlink contains a tiff image
                    infos.push(this._getTiffImageObject(attributes[name]));
                }
            }
            return infos;
        },

        /**
        * This function is use to get tiff images from media info
        * @param{object} contains attachments information
        * @memberOf widgets/details-panel/popup
        */
        _checkTiffFormatImagesInPopupMedia: function (infos) {
            var mediaInfos;
            if (this.selectedOperationalLayer.infoTemplate && this.selectedOperationalLayer.infoTemplate.info && this.selectedOperationalLayer.infoTemplate.info.mediaInfos && this.selectedOperationalLayer.infoTemplate.info.mediaInfos.length > 0) {
                mediaInfos = this.selectedOperationalLayer.infoTemplate.info.mediaInfos;
                // loop all the media info array for tiff image
                array.forEach(mediaInfos, lang.hitch(this, function (mediaInfo) {
                    if (mediaInfo.type === "image" && mediaInfo.value.sourceURL !== "" && mediaInfo.value.sourceURL.match(/\.(tiff|tif)/)) {
                        // if the hyperlink contains a tiff image
                        infos.push(this._getTiffImageObject(mediaInfo.value.sourceURL));
                    }
                }));
            }
            return infos;
        },

        /**
        * This function will return an object as document type of tiff image
        * @param{string} contains url
        * @memberOf widgets/details-panel/popup
        */
        _getTiffImageObject: function (url) {
            var tiffImageObject = {};
            tiffImageObject.contentType = 'application/tiff';
            tiffImageObject.url = url;
            tiffImageObject.name = url.substr(url.lastIndexOf('/') + 1);
            return tiffImageObject;
        }
    });
});
