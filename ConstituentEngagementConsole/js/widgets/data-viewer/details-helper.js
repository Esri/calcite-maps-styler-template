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
    "dojo/dom",
    "esri/tasks/query",
    "esri/layers/FeatureLayer",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/string",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-style",
    "esri/tasks/RelationshipQuery",
    "dijit/layout/ContentPane",
    "dojo/_base/array",
    "esri/dijit/PopupTemplate"
], function (
    declare,
    dom,
    Query,
    FeatureLayer,
    lang,
    domConstruct,
    on,
    string,
    domClass,
    domAttr,
    domStyle,
    RelationshipQuery,
    ContentPane,
    array,
    PopupTemplate
) {
    return declare(null, {
        _contentPane: null, // stores object of content pane
        _commentsTable: null, // stores object of comments table
        _commentPopupTable: null, // stores object of comments popup table

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @memberOf widgets/data-viewer/details-helper
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        /**
        * This function is used to check single/mutliple selection of features before displaying details tab
        * @memberOf widgets/data-viewer/details-helper
        */
        validateDetailsData: function () {
            var selectedFeaturesLength;
            selectedFeaturesLength = this.activeRowGraphicsLayer.graphics.length;
            if (selectedFeaturesLength === 1) {
                this.appUtils.showLoadingIndicator();
                this.removeControlsFromPreviousRow();
                this.displayDetailsTab();
                this._createContentPane();
                this._showFeatureDetails(this.activeRowGraphicsLayer.graphics[
                    0]);
            }
        },

        /**
        * This function is used to create content pane to display feature details
        * @memberOf widgets/data-viewer/details-helper
        */
        _createContentPane: function () {
            var parentDiv, contentPaneDiv;
            if (this._contentPane) {
                this._contentPane.destroy();
            }
            this._contentPane = null;
            parentDiv = dom.byId("detailsContentDiv");
            parentDiv.innerHTML = "";
            contentPaneDiv = domConstruct.create("div", {
                "class": "esriCTPopupContent"
            }, parentDiv);
            this._contentPane = new ContentPane({}, contentPaneDiv);
            this._contentPane.startup();
        },

        /**
        * This function is used to display fields of features in details tab
        * @memberOf widgets/data-viewer/details-helper
        */
        _showFeatureDetails: function (graphic) {
            var parentDiv, i;
            parentDiv = dom.byId("detailsContentDiv");
            for (i = 0; i < this.selectedOperationalLayer.graphics.length; i++) {
                if (this.selectedOperationalLayer.graphics[i].attributes[this
                        .selectedOperationalLayer.objectIdField] === this.activeRowGraphicsLayer
                    .graphics[0].attributes[this.selectedOperationalLayer.objectIdField]
                ) {
                    this._contentPane.set("content", this.selectedOperationalLayer
                        .graphics[i].getContent());
                    break;
                }
            }
            // if layer has attachments & also pop-up has info has attachment property as true
            if ((this.selectedOperationalLayer.hasAttachments) && (this.popupInfo
                    .showAttachments)) {
                this._showAttachments(graphic, parentDiv);
            } else {
                this._showComments(graphic, parentDiv);
                this.appUtils.hideLoadingIndicator();
            }
        },

        /**
        * This function is used to show attachments if any
        * @memberOf widgets/data-viewer/details-helper
        */
        _showAttachments: function (graphic, parentDiv) {
            var objectID, fieldContent, imageDiv, imageContent, imagePath,
                i, attachmentContainer;
            objectID = graphic.attributes[this.selectedOperationalLayer.objectIdField];
            this.selectedOperationalLayer.queryAttachmentInfos(objectID,
                lang.hitch(this, function (infos) {
                    // if attachments found
                    if (infos && infos.length > 0) {
                        attachmentContainer = domConstruct.create("div", {
                            "class": "esriCTAttachmentsContainer"
                        }, parentDiv);
                        domConstruct.create("div", {
                            "innerHTML": this.appConfig.i18n.dataviewer.photoAttachmentHeader,
                            "class": "esriCTDetailsFieldHeader"
                        }, attachmentContainer);
                        fieldContent = domConstruct.create("div", {
                            "class": "esriCTDetailsFieldValue row"
                        }, attachmentContainer);
                        // display all attached images in thumbnails
                        for (i = 0; i < infos.length; i++) {
                            imagePath = dojoConfig.baseURL + this.appConfig.noAttachmentIcon;
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
                            on(imageDiv, "click", lang.hitch(this, this._displayImageAttachments));
                        }
                    }
                    this._showComments(graphic, parentDiv);
                }), lang.hitch(this, function (err) {
                    this.appUtils.hideLoadingIndicator();
                }));
        },

        /**
        * Method will get related table info and check if any relationship exist for comments.
        * If Comments relationship exist as per the configured field then it will get the related table info for further use
        * Considering only the first related table although the layer has many related table
        * @memberOf widgets/issue-wall/issue-wall
        */
        _showComments: function (graphic, parentDiv) {
            var relatedTableURL;
            // if comment field is present in config file and the layer contains related table, fetch the first related table URL
            if (this.selectedOperationalLayer.relationships.length > 0) {
                // Construct the related table URL form operational layer URL and the related table id
                // We are considering only first related table although the layer has many related table.
                // Hence, we are fetching relatedTableId from relationships[0] ie:"operationalLayer.relationships[0].relatedTableId"

                // Create Comments table if not exist from the first related table of the layer
                if (!this._commentsTable) {
                    relatedTableURL = this.selectedOperationalLayer.url.substr(
                        0, this.selectedOperationalLayer.url.lastIndexOf('/') +
                        1) + this.selectedOperationalLayer.relationships[0].relatedTableId;
                    this._commentsTable = new FeatureLayer(relatedTableURL);
                    if (this.itemInfo && this.itemInfo.itemData && this.itemInfo
                        .itemData.tables) {
                        array.some(this.itemInfo.itemData.tables, lang.hitch(this,
                            function (currentTable) {
                                if (this._commentsTable && this._commentsTable.url) {
                                    if (currentTable.url === this._commentsTable.url &&
                                        currentTable.popupInfo) {
                                        this._commentPopupTable = currentTable;
                                    }
                                }
                            }));
                    }
                }
                if (!this._commentsTable.loaded) {
                    on(this._commentsTable, "load", lang.hitch(this, function (
                        evt) {
                        this._loadCommentsIfExist(graphic, parentDiv);
                    }));
                } else {
                    this._loadCommentsIfExist(graphic, parentDiv);
                }
            } else {
                this.appUtils.hideLoadingIndicator();
            }
        },

        /**
        * This function is used to check whether comments are available or not to display
        * @memberOf widgets/data-viewer/details-helper
        */
        _loadCommentsIfExist: function (graphic, parentDiv) {
            if ((this.appConfig.usePopupConfigurationForComment) && (this._commentPopupTable)) {
                this._fetchComments(graphic, parentDiv);
            }
            if ((!this.appConfig.usePopupConfigurationForComment) && (this._hasCommentsField())) {
                this._fetchComments(graphic, parentDiv);
            } else {
                this.appUtils.hideLoadingIndicator();
            }
        },

        /**
        * This function is used to check whether comment's field that is configured is available in comments table or not.
        * @memberOf widgets/data-viewer/details-helper
        */
        _hasCommentsField: function () {
            var k, hasCommentField;
            hasCommentField = false;
            if (this.appConfig.commentField) {
                // if the related table contains comment field set commentIconFlag to true
                for (k = 0; k < this._commentsTable.fields.length; k++) {
                    if (this._commentsTable.fields[k].name === this.appConfig.commentField) {
                        hasCommentField = true;
                        break;
                    }
                }
            }
            return hasCommentField;
        },

        /**
        * This function is used to fetch comments from table
        * @memberOf widgets/data-viewer/details-helper
        */
        _fetchComments: function (graphic, parentDiv) {
            var relatedQuery, currentID, i;
            currentID = graphic.attributes[this.selectedOperationalLayer.objectIdField];
            relatedQuery = new RelationshipQuery();
            relatedQuery.outFields = ["*"];
            relatedQuery.relationshipId = this.selectedOperationalLayer.relationships[
                0].id;
            relatedQuery.objectIds = [currentID];
            // Query for related features and showing comments
            this.selectedOperationalLayer.queryRelatedFeatures(relatedQuery,
                lang.hitch(this, function (relatedRecords) {
                    var commentsParentDiv, pThis, commentsContainerDiv, commentContentPaneContainer, commentContentPane;
                    pThis = this;
                    commentsContainerDiv = domConstruct.create("div", {
                        "class": "esriCTcommentsContainerDiv"
                    }, parentDiv);
                    commentsParentDiv = domConstruct.create("div", {
                        "class": "esriCTcommentsParentDiv"
                    }, commentsContainerDiv);
                    domConstruct.create("div", {
                        "innerHTML": this.appConfig.i18n.dataviewer.commentsText,
                        "class": "esriCTDetailsFieldHeader"
                    }, commentsParentDiv);

                    function sortComments(a, b) {
                        if (a.attributes[pThis._commentsTable.objectIdField] >
                            b.attributes[pThis._commentsTable.objectIdField]) {
                            return -1; // order a before b
                        }
                        if (a.attributes[pThis._commentsTable.objectIdField] <
                            b.attributes[pThis._commentsTable.objectIdField]) {
                            return 1; // order b before a
                        }
                        return 0; // a & b have same date, so relative order doesn't matter
                    }
                    if (relatedRecords[currentID] && relatedRecords[
                            currentID].features && relatedRecords[currentID].features
                        .length > 0) {
                        relatedRecords[currentID].features.sort(sortComments);
                        for (i = 0; i < relatedRecords[currentID].features.length; i++) {
                            if (this.appConfig.usePopupConfigurationForComment) {
                                relatedRecords[currentID].features[i].setInfoTemplate(
                                    new PopupTemplate(this._commentPopupTable.popupInfo)
                                );
                                commentContentPaneContainer = domConstruct.create(
                                    "div", {
                                        "class": "esriCTCommentsPopup"
                                    }, commentsParentDiv);
                                commentContentPane = new ContentPane({},
                                    commentContentPaneContainer);
                                commentContentPane.startup();
                                commentContentPane.set('content', relatedRecords[
                                    currentID].features[i].getContent());
                            } else {
                                domConstruct.create("div", {
                                    "class": "esriCTDetailsFieldValue",
                                    "innerHTML": relatedRecords[currentID].features[
                                        i].attributes[this.appConfig.commentField]
                                }, commentsParentDiv);
                            }
                        }
                    } else {
                        domConstruct.create("div", {
                            "class": "esriCTDetailsFieldValue esriCTNoCommentsAvailable",
                            "innerHTML": this.appConfig.i18n.dataviewer.noCommentsAvailable
                        }, commentsParentDiv);
                    }
                    this.appUtils.hideLoadingIndicator();
                }), lang.hitch(this, function (err) {
                    this.appUtils.hideLoadingIndicator();
                }));
        },

        /**
        * This function is used to show attachments in new window when user clicks on the attachment thumbnail
        * @param{object} event argument
        * @memberOf widgets/data-viewer/details-helper
        */
        _displayImageAttachments: function (evt) {
            window.open(evt.target.alt);
        },

        /**
        * This function is used to notify that image is loaded
        * Hide the image loader once the image is loaded, and set the image dimensions so that complete image will be shown in thumbnail.
        * @param{object} event argument
        * @memberOf widgets/data-viewer/details-helper
        */
        _onImageLoad: function (evt) {
            domClass.remove(evt.target.parentNode, "esriCTImageLoader");
            this._setImageDimensions(evt.target, true);
        },

        /**
        * This function is used to set the images dimensions so that the complete image will be shown in thumbnail
        * @param{object} imgModule - Image object
        * @param{Boolean} isOnLoad - set this flag this function is called after image load.
        * @memberOf widgets/data-viewer/details-helper
        */
        _setImageDimensions: function (imgModule, isOnLoad) {
            var aspectRatio, newWidth, newHeight, imgWidth, imgContainer =
                imgModule.parentElement;
            if (isOnLoad && imgModule && imgModule.offsetHeight > 0) {
                //set original dimensions of image as it max dimensions.
                domAttr.set(imgModule, "originalWidth", imgModule.offsetWidth);
                domStyle.set(imgModule, "maxHeight", imgModule.offsetHeight +
                    'px');
                domStyle.set(imgModule, "maxWidth", imgModule.offsetWidth +
                    'px');
            }
            imgWidth = parseFloat(domAttr.get(imgModule, "originalWidth"));
            if ((imgContainer.offsetWidth > 0) && (imgContainer.offsetWidth <
                    imgModule.offsetWidth || imgWidth > imgContainer.offsetWidth
                )) {
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
        },

        /**
        * This function is used to generate event to show details tab
        * @memberOf widgets/data-viewer/details-helper
        */
        displayDetailsTab: function () {
            return null;
        },

        /**
        * This function is used to remove controls from the row when user clicks on other row or user de-selects it etc...
        * @memberOf widgets/data-viewer/details-helper
        */
        removeControlsFromPreviousRow: function () {
            return null;
        }
    });
});