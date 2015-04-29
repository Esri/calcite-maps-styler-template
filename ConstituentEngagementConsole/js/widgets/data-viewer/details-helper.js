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
    "esri/tasks/RelationshipQuery"
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
    RelationshipQuery
) {
    return declare(null, {

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
            // if it is point feature than get selected feature length from graphics layer
            // if it is other than point feature get selected feature length from feature layer
            if (this.isPointLayer) {
                selectedFeaturesLength = this.activeRowGraphicsLayer.graphics.length;
            } else {
                selectedFeaturesLength = this.selectedOperationalLayer.getSelectedFeatures().length;
            }
            // if only one record is selected than show details tab else display message
            if (selectedFeaturesLength === 1) {
                this.displayDetailsTab();
                this.showFeatureDetails();
                this.removeControlsFromPreviousRow();
            } else {
                this.appUtils.showMessage(this.appConfig.i18n.dataviewer.activateFeature);
            }
        },

        /**
        * This function is used to display fields of features in details tab
        * @memberOf widgets/data-viewer/details-helper
        */
        showFeatureDetails: function (graphic) {
            var parentDiv, objectId, featureQuery, featureLayer;
            parentDiv = dom.byId("detailsContentDiv");
            parentDiv.innerHTML = "";
            if (!graphic) {
                if (this.isPointLayer) {
                    graphic = this.activeRowGraphicsLayer.graphics[0];
                    this._showConfiguredAttribute(graphic, parentDiv);
                } else {
                    graphic = this.selectedOperationalLayer.getSelectedFeatures()[0];
                    objectId = graphic.attributes[this.selectedOperationalLayer.objectIdField];
                    featureQuery = new Query();
                    featureQuery.outSpatialReference = this.map.spatialReference;
                    featureQuery.objectIds = [parseInt(objectId, 10)];
                    featureQuery.returnGeometry = true;
                    featureQuery.outFields = ["*"];
                    featureLayer = new FeatureLayer(this.selectedOperationalLayer.url);
                    featureLayer.queryFeatures(featureQuery, lang.hitch(this, function (featureSet) {
                        this._showConfiguredAttribute(featureSet.features[0], parentDiv);
                    }));
                }
            } else {
                this._showConfiguredAttribute(graphic, parentDiv);
            }
        },

        /**
        * This function is used to show configured attribute in details tab
        * @memberOf widgets/data-viewer/details-helper
        */
        _showConfiguredAttribute: function (graphic, parentDiv) {
            // custom popup
            if (this.popupInfo && this.popupInfo.description) {
                this._showCustomPopupConfiguration(graphic, parentDiv);
            } else {
                this._showAttributeConfiguration(graphic, parentDiv);
            }
            // if layer has attachments & also pop-up has info has attachment property as true
            if ((this.selectedOperationalLayer.hasAttachments) && (this.popupInfo.showAttachments)) {
                this._showAttachments(graphic, parentDiv);
            }
        },

        /**
        * This function is used to get the value of field.
        * @memberOf widgets/data-viewer/details-helper
        */
        _getFieldValue: function (obj, graphic, key) {
            var fieldValue, j, n, isCodeMatched, id, m, number;
            switch (obj.type) {
            case "esriFieldTypeDate":
                if (graphic.attributes[key] && graphic.attributes[key] !== 0) {
                    fieldValue = (moment(graphic.attributes[key])).format(this.appUtils.getDateFormat(obj.format).dateFormat);
                } else {
                    if (graphic.attributes[key] === 0) {
                        fieldValue = this.appConfig.showNullValueAs;
                    } else {
                        if (!graphic.attributes[key] || lang.trim(String(graphic.attributes[key])) === "") {
                            fieldValue = this.appConfig.showNullValueAs;
                        } else {
                            fieldValue = graphic.attributes[key];
                        }
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
                        if (!graphic.attributes[key] || lang.trim(String(graphic.attributes[key])) === "") {
                            fieldValue = this.appConfig.showNullValueAs;
                        } else {
                            fieldValue = graphic.attributes[key];
                        }
                    }
                } else if (obj.types) {
                    if (graphic.attributes[key] || graphic.attributes[key] === 0) {
                        for (n = 0; n < obj.types.length; n++) {
                            if (obj.types[n].id.toString() === graphic.attributes[key].toString()) {
                                fieldValue = obj.types[n].name;
                            }
                        }
                    } else {
                        if (!graphic.attributes[key] || lang.trim(String(graphic.attributes[key])) === "") {
                            fieldValue = this.appConfig.showNullValueAs;
                        } else {
                            fieldValue = graphic.attributes[key];
                        }
                    }
                } else if (this.selectedOperationalLayer.types && this.selectedOperationalLayer.types.length > 0 && this.selectedOperationalLayer.types[0].domains && this.selectedOperationalLayer.types[0].domains[key] && this.selectedOperationalLayer.types[0].domains[key].codedValues) {
                    isCodeMatched = false;
                    id = graphic.attributes[this.selectedOperationalLayer.typeIdField];
                    for (m = 0; m < this.selectedOperationalLayer.types.length; m++) {
                        if (this.selectedOperationalLayer.types[m].id === id) {
                            for (n = 0; n < this.selectedOperationalLayer.types[m].domains[key].codedValues.length; n++) {
                                if (graphic.attributes[key] === this.selectedOperationalLayer.types[m].domains[key].codedValues[n].code) {
                                    isCodeMatched = true;
                                    if (graphic.attributes[key] || graphic.attributes[key] === 0) {
                                        fieldValue = this.selectedOperationalLayer.types[m].domains[key].codedValues[n].name;
                                    } else {
                                        if (!graphic.attributes[key] || lang.trim(String(graphic.attributes[key])) === "") {
                                            fieldValue = this.appConfig.showNullValueAs;
                                        } else {
                                            fieldValue = graphic.attributes[key];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!isCodeMatched) {
                        if (!graphic.attributes[key] || lang.trim(String(graphic.attributes[key])) === "") {
                            fieldValue = this.appConfig.showNullValueAs;
                        } else {
                            fieldValue = graphic.attributes[key];
                        }
                    }
                } else {
                    if (obj.numberFormat) {
                        if ((graphic.attributes[key]) || (graphic.attributes[key] === 0)) {
                            if (obj.numberFormat.digitSeparator) {
                                number = graphic.attributes[key].toFixed(obj.numberFormat.places);
                                number = this.appUtils.convertNumberToThousandSeperator(number);
                                fieldValue = number;
                            } else {
                                fieldValue = graphic.attributes[key].toFixed(obj.numberFormat.places);
                            }
                        } else {
                            if (!graphic.attributes[key] || lang.trim(String(graphic.attributes[key])) === "") {
                                fieldValue = this.appConfig.showNullValueAs;
                            } else {
                                fieldValue = graphic.attributes[key];
                            }
                        }
                    } else {
                        if (!graphic.attributes[key] || lang.trim(String(graphic.attributes[key])) === "") {
                            fieldValue = this.appConfig.showNullValueAs;
                        } else {
                            fieldValue = graphic.attributes[key];
                        }
                    }
                }
            }
            return fieldValue;
        },

        /**
        * This function is used to show attribute configuration in details tab
        * @memberOf widgets/data-viewer/details-helper
        */
        _showAttributeConfiguration: function (graphic, parentDiv) {
            var i, obj, key, isDisplayFieldAvailable, fieldValue, regex, spanLink;
            for (i = 0; i < this.displayColumn.length; i++) {
                obj = this.displayColumn[i];
                key = this.displayColumn[i].fieldName;
                if (obj.showInDetailsTab) {
                    isDisplayFieldAvailable = true;
                    domConstruct.create("div", { "innerHTML": obj.label, "class": "esriCTDetailsFieldHeader" }, parentDiv);
                    fieldValue = "";
                    fieldValue = this._getFieldValue(obj, graphic, key);
                    if (!fieldValue || lang.trim(String(fieldValue)) === "") {
                        fieldValue = this.appConfig.showNullValueAs + "<br/>";
                    }
                    if (isNaN(fieldValue) && (fieldValue.match("http:") || fieldValue.match("https:"))) {
                        regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
                        if (fieldValue.match(regex)) {
                            spanLink = domConstruct.create("span", { "class": "esriCTInfoLink", "innerHTML": this.appConfig.i18n.dataviewer.moreInfolink }, parentDiv);
                            on(spanLink, "click", lang.hitch(this, this.openWindowHandler(fieldValue)));
                        } else {
                            domConstruct.create("div", { "class": "esriCTDetailsFieldValue", "innerHTML": fieldValue }, parentDiv);
                        }
                    } else {
                        domConstruct.create("div", { "class": "esriCTDetailsFieldValue", "innerHTML": fieldValue }, parentDiv);
                    }
                }
            }
            if (!isDisplayFieldAvailable) {
                domConstruct.create("div", { "class": "", "innerHTML": "" }, parentDiv);
            }
        },

        /**
        * open link in a new window
        * @param {url} get link url
        * @memberOf widgets/data-viewer/details-helper
        */
        openWindowHandler: function (link) {
            return function () {
                window.open(link);
            };
        },

        /**
        * This function is used to show custom popup configuration in details tab
        * @memberOf widgets/data-viewer/details-helper
        */
        _showCustomPopupConfiguration: function (graphic, parentDiv) {
            var fieldValue, i, splittedArrayForClosingBraces, field, k, obj, key;
            //Assuming Fields will be configure within the curly braces'{}'
            //check if Custom Configuration has any fields Configured in it.
            if (this.popupInfo.description.split("{").length > 0) {
                //Add the data before 1st instance on curly '{' braces
                fieldValue = this.popupInfo.description.split("{")[0];
                // Loop through the possible number of configured fields
                for (i = 1; i < this.popupInfo.description.split("{").length; i++) {
                    //check if string is having closing curly braces '}'. i.e. it has some field
                    if (this.popupInfo.description.split("{")[i].indexOf("}") !== -1) {
                        splittedArrayForClosingBraces = this.popupInfo.description.split("{")[i].split("}");
                        field = string.substitute(splittedArrayForClosingBraces[0]);
                        //Check if the field is valid field or not, if it valid then substitute its value.
                        if (field !== null && field !== "") {
                            for (k = 0; k < this.displayColumn.length; k++) {
                                obj = this.displayColumn[k];
                                key = this.displayColumn[k].fieldName;
                                if (key === field) {
                                    fieldValue += this._getFieldValue(obj, graphic, key);
                                }
                            }
                        } else if (field === "") {
                            //if field is empty means only curly braces are configured in pop-up
                            fieldValue += "{}";
                        }
                        splittedArrayForClosingBraces.shift();
                        //if splittedArrayForClosingBraces length is more than 1, then there are more closing braces in the string, so join the array with }
                        if (splittedArrayForClosingBraces.length > 1) {
                            fieldValue += splittedArrayForClosingBraces.join("}");
                        } else {
                            fieldValue += splittedArrayForClosingBraces.join("");
                        }
                    } else {
                        //if there is no closing bracket then add the rest of the string preponding with '{' as we have split it with '{'
                        fieldValue += "{" + this.popupInfo.description.split("{")[i];
                    }
                }
            } else {
                //no '{' braces means no field has been configured only Custom description is present in pop-up
                fieldValue = this.popupInfo.description;
            }
            //create a div with popup info description and add it to details div
            domConstruct.create("div", { "innerHTML": fieldValue, "class": "esriCTCustomPopupDiv" }, parentDiv);
        },

        /**
        * This function is used to show attachments if any
        * @memberOf widgets/data-viewer/details-helper
        */
        _showAttachments: function (graphic, parentDiv) {
            var objectID, fieldContent, imageDiv, imageContent, imagePath, i;
            objectID = graphic.attributes[this.selectedOperationalLayer.objectIdField];
            this.selectedOperationalLayer.queryAttachmentInfos(objectID, lang.hitch(this, function (infos) {
                // if attachments found
                if (infos && infos.length > 0) {
                    domConstruct.create("div", { "innerHTML": this.appConfig.i18n.dataviewer.photoAttachmentHeader, "class": "esriCTDetailsFieldHeader" }, parentDiv);
                    fieldContent = domConstruct.create("div", { "class": "esriCTDetailsFieldValue row" }, parentDiv);
                    // display all attached images in thumbnails
                    for (i = 0; i < infos.length; i++) {
                        imagePath = dojoConfig.baseURL + this.appConfig.noAttachmentIcon;
                        if (infos[i].contentType.indexOf("image") > -1) {
                            imagePath = infos[i].url;
                        }
                        imageContent = domConstruct.create("span", { "class": "esriCTDetailsTabImgSpan col" }, fieldContent);
                        domClass.add(imageContent, "esriCTImageLoader");
                        imageDiv = domConstruct.create("img", { "alt": infos[i].url, "class": "esriCTDetailsTabImg esriCTPointerCursor", "src": imagePath }, imageContent);
                        // Hide loader Image after image loaded
                        on(imageDiv, "load", lang.hitch(this, this._onImageLoad));
                        // Show image in new tab on click of the image thumbnail
                        on(imageDiv, "click", lang.hitch(this, this._showAttachements));
                    }
                }
            }), function (err) {
                this.appUtils.showError(err.message);
            });
        },

        /**
        * This function is used to show attachments in new window when user clicks on the attachment thumbnail
        * @param{object} event argument
        * @memberOf widgets/data-viewer/details-helper
        */
        _showAttachements: function (evt) {
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
