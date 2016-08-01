/*global define,$,setTimeout,moment,dojoConfig*/
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
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/webmap-list.html",
    "dojo/dom-construct",
    "dojo/DeferredList",
    "dojo/text!./templates/webmap-item.html",
    "dojo/text!./templates/operational-layer.html",
    "dojo/_base/event",
    "dojo/string",
    "dojo/dom-attr",
    "dojo/on",
    "esri/layers/FeatureLayer",
    "dojo/dom",
    "dojo/dom-class",
    "widgets/bootstrapmap/bootstrapmap",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/query",
    "dojo/_base/array",
    "dojo/aspect"
], function (
    declare,
    lang,
    _WidgetBase,
    _TemplatedMixin,
    dijitTemplate,
    domConstruct,
    DeferredList,
    webMapItemTemplate,
    operationalLayerTemplate,
    event,
    string,
    domAttr,
    on,
    FeatureLayer,
    dom,
    domClass,
    BootstrapMap,
    _WidgetsInTemplateMixin,
    query,
    array,
    aspect
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: dijitTemplate,
        _filteredWebMapResponseArr: [], // to store web-map that needs to be displayed in list
        _lastWebMapSelected: "", // used to store last web map that is selected
        _layersToRemove: {}, // object of arrays for each webmap item having list of operational id's which are not valid.
        _selectedMapResponse: null, // object of selected map response object, this will reduce the unnecessary calls to API to get all the required properties of layer or map
        mapDivID: "webMapListMapDiv", // id of div in which web-map is created
        lastSelectedWebMapExtent: null, // to store last extent of web-map that was selected
        lastSelectedWebMapItemInfo: null, // to store item info of web-map that was last selected
        selectedLayerId: null, // to store id of selected layer

        /**
        * This function is called when widget is constructed.
        * @param{object} options to be mixed
        * @param{object} source reference node
        * @memberOf widgets/webmap-list/webmap-list
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        /**
        * This function is called on startup of widget.
        * @memberOf widgets/webmap-list/webmap-list
        */
        startup: function () {
            this._filteredWebMapResponseArr = [];
            this._createFilteredWebMapArr();
            this._toggleWebMapList();
            if (this.appConfig.logInDetails && this.appConfig.logInDetails.token) {
                if (domClass.contains(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListClose")) {
                    this._animateWebMapList();
                }
            }
            //Check for the flag and accordingly show/hide non editable layers
            if (this.appConfig.showNonEditableLayers) {
                //Show all the non editable feature servers in webmap after selecting a layer from webmap list
                aspect.after(this, "_displaySelectedOperationalLayer", lang.hitch(this, function () {
                    this._displayNonEditableLayers();
                }));
            }
        },

        /**
        * This function is used when there is no web map to display
        * @memberOf widgets/webmap-list/webmap-list
        */
        noMapsFound: function () {
            return true;
        },

        /**
        * This function is used to return selected operational layer
        * @param{object} details of operational layer selected
        * @memberOf widgets/webmap-list/webmap-list
        */
        onOperationalLayerSelected: function (details) {
            return details;
        },

        /**
        * This function is used to create web-map array that needs to be displayed in list
        * @memberOf widgets/webmap-list/webmap-list
        */
        _createFilteredWebMapArr: function () {
            var i, itemInfo, requestArray = [],
                dl, results = this.appConfig.groupItems.results, mapContainerID;
            for (i = 0; i < results.length; i++) {
                itemInfo = results[i];
                // Set the itemInfo config option. This can be used when calling createMap instead of the webmap id
                if (itemInfo.type === "Web Map") {
                    requestArray.push(this._createMap(itemInfo.id, "webMapListMapDiv"));
                }
            }
            dl = new DeferredList(requestArray);
            dl.then(lang.hitch(this, function (response) {
                this._filterWebMaps(response);
                // if atleast 1 web-map is available than display it
                if (this._filteredWebMapResponseArr.length > 0) {
                    if ((this._filteredWebMapResponseArr.length === 1) && (this._filteredWebMapResponseArr[0][1].itemInfo.itemData.operationalLayers.length === 1)) {
                        mapContainerID = this.mapDivID;
                    } else {
                        mapContainerID = "webMapListMapDiv";
                    }
                    this._createMap(this._filteredWebMapResponseArr[0][1].itemInfo.item.id, mapContainerID).then(lang.hitch(this, function (response) {
                        this.lastSelectedWebMapExtent = response.map.extent;
                        this.lastSelectedWebMapItemInfo = response.itemInfo;
                        this._createWebMapListUI();
                    }));
                } else {
                    // display message if no web-map is available to display
                    this.noMapsFound();
                }
            }));
        },

        /**
        * This function is used to create map
        * @param{string} web-map ID
        * @param{string} map container ID
        * @memberOf widgets/webmap-list/webmap-list
        */
        _createMap: function (webMapID, mapDivID) {
            if (this.map) {
                this.map.destroy();
            }
            domConstruct.empty(mapDivID);
            var webMapInstance = BootstrapMap.createWebMap(webMapID, mapDivID, {
                ignorePopups: false,
                editable: false,
                bingMapsKey: this.appConfig.bingKey,
                scrollWheelZoom: true,
                autoResize: this.autoResize
            });
            webMapInstance.then(lang.hitch(this, function (response) {
                this._selectedMapResponse = response;
                this.map = response.map;
                //Disable default infowindow
                this.map.infoWindow.set("popupWindow", false);
                //Disable default symbol highlighting of infowindow
                this.map.infoWindow.set("highlight", false);
                //Raise map loaded event
                this.onMapLoaded(response);
            }));
            return webMapInstance;
        },

        /**
        * This function is used to indicate that map is loaded
        * @param{object} response of web-map created
        */
        onMapLoaded: function () {
            return;
        },

        /**
        * This function is used to validate web map.
        * @param{object} response of web-map created
        * @memberOf widgets/webmap-list/webmap-list
        */
        _filterWebMaps: function (response) {
            var i, showWebmapInList, j, removeLayerFromList, operationalLayerCount;
            for (i = 0; i < response.length; i++) {
                // check if webmap has any operational layer if not then dont show that webmap in list
                if (response[i][0] && response[i][1].itemInfo.itemData.operationalLayers.length > 0) {
                    showWebmapInList = false;
                    operationalLayerCount = response[i][1].itemInfo.itemData.operationalLayers.length;
                    // this loop will check if the layer is having valid capabilities and popup info
                    // if not then it will remove that layer from array
                    for (j = 0; j < operationalLayerCount; j++) {
                        removeLayerFromList = true;
                        if (response[i][1].itemInfo.itemData.operationalLayers[j].visibility && response[i][1].itemInfo.itemData.operationalLayers[j].resourceInfo && response[i][1].itemInfo.itemData.operationalLayers[j].layerObject) {
                            // check if layer is having valid capabilities and valid popup info
                            if (this._validateLayerCapabilities(response[i][1].itemInfo.itemData.operationalLayers[j].resourceInfo.capabilities)) {
                                if (this._validatePopupFields(response[i][1].itemInfo.itemData.operationalLayers[j].popupInfo, response[i][1].itemInfo.itemData.operationalLayers[j].layerObject.fields)) {
                                    showWebmapInList = true;
                                    removeLayerFromList = false;
                                }
                            }
                        }
                        // if layer is not valid remove it from array
                        if (removeLayerFromList) {
                            if (!this._layersToRemove[response[i][1].itemInfo.item.id]) {
                                this._layersToRemove[response[i][1].itemInfo.item.id] = [];
                            }
                            if (this.appConfig.showNonEditableLayers) {
                                if (!(response[i][1].itemInfo.itemData.operationalLayers[j].visibility)) {
                                    this._layersToRemove[response[i][1].itemInfo.item.id].push(response[i][1].itemInfo.itemData.operationalLayers[j].id);
                                }
                            } else {
                                if (!(response[i][1].itemInfo.itemData.operationalLayers[j].layerType === "ArcGISFeatureLayer" && response[i][1].itemInfo.itemData.operationalLayers[j].visibility)) {
                                    this._layersToRemove[response[i][1].itemInfo.item.id].push(response[i][1].itemInfo.itemData.operationalLayers[j].id);
                                }
                            }
                            response[i][1].itemInfo.itemData.operationalLayers.splice(j, 1);
                            operationalLayerCount = response[i][1].itemInfo.itemData.operationalLayers.length;
                            j--;
                        }
                    }
                    // if not then dont show that layer in webmap list
                    if (showWebmapInList) {
                        this._filteredWebMapResponseArr.push(response[i]);
                    }
                    //If their are any auto refreshed layer on the map browser will send request for those layers although that layer may not be selected on main map.
                    //destroy the map instance once all the operation is completed.
                    response[i][1].map.destroy();
                }
            }
        },

        /**
        * This function is used to create description info.
        * @param{object} web map item
        * @memberOf widgets/webmap-list/webmap-list
        */
        _createWebMapDescription: function (webMapItem) {
            var descriptionInfo = "",
                field,
                value = "";
            for (field in this.webMapDescriptionFields) {
                if (this.webMapDescriptionFields.hasOwnProperty(field)) {
                    if (this.webMapDescriptionFields[field]) {
                        // to display date field
                        if (field === "created" || field === "modified") {
                            value = webMapItem.itemInfo.item[field] ? ((moment(webMapItem.itemInfo.item[field]).toDate()).toLocaleDateString()) : this.appConfig.showNullValueAs + "<br/>";
                            if (lang.trim(value) === "") {
                                value = this.appConfig.showNullValueAs + "<br/>";
                            }
                        } else {
                            value = webMapItem.itemInfo.item[field] || this.appConfig.showNullValueAs + "<br/>";
                        }
                        descriptionInfo +=
                            "<div class='esriCTDetailsContainerRow'><div class='esriCTDetailsContainerCell'>" +
                            "<div class='esriCTInfoHeader'>" +
                            this.appConfig.i18n.webMapList[field] +
                            "</div><div class='esriCTInfoDetails'>" + value +
                            "</div></div></div>";
                    }
                }
            }
            return descriptionInfo;
        },

        /**
        * This function is used to highlight selected web map
        * @param{string} selected web map ID
        * @memberOf widgets/webmap-list/webmap-list
        */
        _selectWebMapItem: function (selectedWebMapID) {
            if ($('div[webMapID="' + this._lastWebMapSelected + '"]').length > 0) {
                domClass.replace($('div[webMapID="' + this._lastWebMapSelected + '"]')[0], "esriCTWebMapBorder", "esriCTBorder");
            }
            if ($('div[webMapID="' + selectedWebMapID + '"]').length > 0) {
                domClass.replace($('div[webMapID="' + selectedWebMapID + '"]')[0], "esriCTBorder", "esriCTWebMapBorder");
            }
            this._lastWebMapSelected = selectedWebMapID;
        },

        /**
        * This function is used to create UI for web map list.
        * @memberOf widgets/webmap-list/webmap-list
        */
        _createWebMapListUI: function () {
            var parentDiv, i, templateString, thumbnailSrc, tokenString, infoDescription, editCapabilityLayerCount, operationalLayersLength, obj;
            thumbnailSrc = "";
            infoDescription = "";
            for (i = 0; i < this._filteredWebMapResponseArr.length; i++) {
                editCapabilityLayerCount = this._filteredWebMapResponseArr[i][1].itemInfo.itemData.operationalLayers.length;
                // set token for private groups to fetch thumbnail
                // first check if web-map thumbnail is available than display it
                // second check if web-map thumbnail is configured than display it
                // third if none of above scenario is valid than display fallback icon
                if (this._filteredWebMapResponseArr[i][1].itemInfo.item.thumbnail) {
                    tokenString = "";
                    if (this.appConfig.logInDetails && this.appConfig.logInDetails.token) {
                        tokenString = "?token=" + this.appConfig.logInDetails.token;
                    }
                    thumbnailSrc = this.appConfig.sharinghost + "/sharing/rest/content/items/" + this._filteredWebMapResponseArr[i][1].itemInfo.item.id + "/info/" + this._filteredWebMapResponseArr[i][1].itemInfo.item.thumbnail + tokenString;
                } else {
                    if (this.appConfig.noThumbnailIcon && lang.trim(this.appConfig.noThumbnailIcon).length !== 0) {
                        if (this.appConfig.noThumbnailIcon.indexOf("http") === 0) {
                            thumbnailSrc = this.appConfig.noThumbnailIcon;
                        } else {
                            if (this.appConfig.noThumbnailIcon.indexOf("/") === 0) {
                                thumbnailSrc = dojoConfig.baseURL + this.appConfig.noThumbnailIcon;
                            } else {
                                thumbnailSrc = dojoConfig.baseURL + "/" + this.appConfig.noThumbnailIcon;
                            }
                        }
                    } else {
                        thumbnailSrc = dojoConfig.baseURL +
                            "/images/default-webmap-thumbnail.png";
                    }
                }
                infoDescription = this._createWebMapDescription(this._filteredWebMapResponseArr[i][1]);
                templateString = string.substitute(webMapItemTemplate, {
                    WebmapThumbnail: thumbnailSrc,
                    WebmapTitle: this._filteredWebMapResponseArr[i][1].itemInfo.item.title,
                    InfoDescription: infoDescription
                });
                parentDiv = domConstruct.toDom(templateString);
                domClass.add(parentDiv, "esriCTDisplayWebMapTemplate esriCTWebMapBorder");
                domAttr.set(parentDiv, "webMapID", this._filteredWebMapResponseArr[i][1].itemInfo.item.id);
                if (query('.esriCTInfoImg', parentDiv).length > 0) {
                    domAttr.set(query('.esriCTInfoImg', parentDiv)[0], "title",
                        this.appConfig.i18n.webMapList.infoBtnToolTip);
                }
                if ((this._filteredWebMapResponseArr[i][1].itemInfo.itemData.operationalLayers.length > 1) && (editCapabilityLayerCount > 1)) {
                    domAttr.set(parentDiv, "displayOperationalLayerList", true);
                    this._handleWebMapClick(parentDiv, null);
                } else {
                    domAttr.set(parentDiv, "displayOperationalLayerList", false);
                    domAttr.set(parentDiv, "operationalLayerID", this._filteredWebMapResponseArr[i][1].itemInfo.itemData.operationalLayers[0].id);
                    this._handleWebMapClick(parentDiv, this._filteredWebMapResponseArr[i][1].itemInfo.itemData.operationalLayers[0]);
                }
                this.esriCTWebMapListParentDiv.appendChild(parentDiv);
                this._attachInformationClick(infoDescription, parentDiv);
                if ((this._filteredWebMapResponseArr[i][1].itemInfo.itemData.operationalLayers.length > 1) && (editCapabilityLayerCount > 1)) {
                    this._createOperationalLayerList(query('.esriCTLayerList', parentDiv)[0], this._filteredWebMapResponseArr[i][1]);
                }
            }
            if ((this._filteredWebMapResponseArr.length === 1) && (this._filteredWebMapResponseArr[0][1].itemInfo.itemData.operationalLayers.length > 0)) {
                operationalLayersLength = this._filteredWebMapResponseArr[0][1].itemInfo.itemData.operationalLayers.length;
                obj = {
                    "webMapId": this._filteredWebMapResponseArr[0][1].itemInfo.item.id,
                    "operationalLayerId": this._filteredWebMapResponseArr[0][1].itemInfo.itemData.operationalLayers[operationalLayersLength - 1].id,
                    "operationalLayerDetails": this._filteredWebMapResponseArr[0][1].itemInfo.itemData.operationalLayers[operationalLayersLength - 1],
                    "itemInfo": this._filteredWebMapResponseArr[0][1].itemInfo
                };
                if (operationalLayersLength === 1) {
                    // by default select first webmap in list
                    this._selectWebMapItem(this._filteredWebMapResponseArr[0][1].itemInfo.item.id);
                    this._displaySelectedOperationalLayer(obj);
                    this.hideWebMapList();
                } else {
                    this._handleWebmapToggling(parentDiv, this._filteredWebMapResponseArr[0][1].itemInfo.itemData.operationalLayers[0]);
                    this.displayInitialLoad();
                }
            } else {
                this.displayInitialLoad();
            }
        },

        /**
        * This function is used to hide header icons like search, manual refresh
        * @memberOf widgets/webmap-list/webmap-list
        */
        displayInitialLoad: function () {
            return;
        },

        /**
        * This function is used to hide layer
        * @param{string} web-map ID
        * @param{string} operational layer ID
        * @param{object} operational layer details
        * @memberOf widgets/webmap-list/webmap-list
        */
        _displaySelectedOperationalLayer: function (obj) {
            var layer, featureLayer, i;
            this.selectedLayerId = obj.operationalLayerId;
            if (this.map) {
                for (layer in this.map._layers) {
                    if (this.map._layers.hasOwnProperty(layer)) {
                        if (this.map._layers[layer].type) {
                            // only show feature layer that is selected by user
                            // and hide rest of layers
                            if (this.map._layers[layer].type === "Feature Layer") {
                                if (this.map._layers[layer].id !== obj.operationalLayerId) {
                                    this.map._layers[layer].hide();
                                } else {
                                    this.map._layers[layer].show();
                                    this.map.getLayer(obj.operationalLayerId).refresh();
                                    featureLayer = new FeatureLayer(this.map._layers[layer].url);
                                    this._onFeatureLayerLoad(featureLayer, obj.webMapId, obj.operationalLayerId, obj.operationalLayerDetails, obj.itemInfo);
                                }
                            }
                        }
                    }
                }
                //Remove Invalid Layers from map
                if (this._layersToRemove[obj.webMapId]) {
                    for (i = 0; i < this._layersToRemove[obj.webMapId].length; i++) {
                        if (this.map._layers.hasOwnProperty(this._layersToRemove[obj.webMapId][i])) {
                            this.map.removeLayer(this.map._layers[this._layersToRemove[obj.webMapId][i]]);
                        }
                    }
                }
            } else {
                this.appUtils.hideLoadingIndicator();
            }
        },

        /**
        * This function is used to highlight(change font to bold) the selected webmap item and selected layer
        * @param{string} web map ID
        * @param{string} operational layer ID
        * @memberOf widgets/webmap-list/webmap-list
        */
        _highlightSelectedItem: function (webMapID, layerID) {
            //Remove Selected class from previously selected WebMap and Layer
            query(".esriCTSelectedItem").removeClass("esriCTSelectedItem");
            //Add Selected Class to WebMap Item
            query(".esriCTMediaBody", $('div[webMapID="' + webMapID + '"]', this.domNode)[0]).addClass("esriCTSelectedItem");
            //Add Selected Class to Layer in that webmap only if exist
            if ($('div[operationalLayerID="' + layerID + '"]', $('div[webMapID="' + webMapID + '"]', this.domNode)[0]).length > 0) {
                domClass.add($('div[operationalLayerID="' + layerID + '"]', $('div[webMapID="' + webMapID + '"]', this.domNode)[0])[0], "esriCTSelectedItem");
            }
        },

        /**
        * This function is used to process execution on load of feature layer
        * @param{object} feature layer to attach on-load event
        * @param{string} web map ID
        * @param{string} operational layer ID
        * @param{object} operational layer details
        * @param{object} web-map item info
        * @memberOf widgets/webmap-list/webmap-list
        */
        _onFeatureLayerLoad: function (featureLayer, webMapID, layerID, layerDetails, itemInfo) {
            if (!featureLayer.loaded) {
                on(featureLayer, "load", lang.hitch(this, function () {
                    this._featureLayerLoaded(webMapID, layerID, layerDetails, itemInfo);
                }));
            } else {
                this._featureLayerLoaded(webMapID, layerID, layerDetails, itemInfo);
            }
            on(featureLayer, "error", lang.hitch(this, function (evt) {
                this.appUtils.showError(evt.error.message);
            }));
        },

        /**
        * This function is used to process execution after the feature layer is loaded
        * @param{string} web map ID
        * @param{string} operational layer ID
        * @param{object} operational layer details
        * @param{object} web-map item info
        * @memberOf widgets/webmap-list/webmap-list
        */
        _featureLayerLoaded: function (webMapID, layerID, layerDetails, itemInfo) {
            //Highlight the Selected Item in webmap list
            this._highlightSelectedItem(webMapID, layerID);
            setTimeout(lang.hitch(this, function () {
                this.onOperationalLayerSelected({
                    "map": this.map,
                    "webMapId": webMapID,
                    "operationalLayerId": layerID,
                    "operationalLayerDetails": layerDetails,
                    "itemInfo": itemInfo
                });
                this.appUtils.hideLoadingIndicator();
            }), 500);
        },

        /**
        * This function is used to handle web map click
        * @param{object} parent div container in which web-map list will be added
        * @param{object} details of operational layer
        * @memberOf widgets/webmap-list/webmap-list
        */
        _handleWebMapClick: function (parentDiv, operationalLayerDetails) {
            this.appUtils.showLoadingIndicator();
            on($(".esriCTMediaBody", parentDiv)[0], "click", lang.hitch(this, function () {
                this._handleWebmapToggling(parentDiv, operationalLayerDetails);
            }));
            on($(".esriCTWebMapImg", parentDiv)[0], "click", lang.hitch(this, function () {
                this._handleWebmapToggling(parentDiv, operationalLayerDetails);
            }));
        },

        /**
        * This function is used to handle web map Toggling
        * @param{object} parent div container in which web-map list will be added
        * @param{object} details of operational layer
        * @memberOf widgets/webmap-list/webmap-list
        */
        _handleWebmapToggling: function (node, operationalLayerDetails) {
            var webMapId, selectedWebMapList, operationalLayerId, descriptionDiv;
            this.appUtils.showLoadingIndicator();
            webMapId = domAttr.get(node, "webMapID");
            // to display operational layer list if web-map contains more than 1 layer
            if (domAttr.get(node, "displayOperationalLayerList") === true) {
                selectedWebMapList = dom.byId(webMapId);
                // if operational layer list is visible than hide it
                // & if it is hidden than display it
                if (domClass.contains(selectedWebMapList, "esriCTDisplayList")) {
                    $("#" + webMapId).slideUp({
                        duration: 500,
                        easing: "linear"
                    });
                    setTimeout(lang.hitch(this, function () {
                        domClass.replace(selectedWebMapList, "esriCTHidden",
                            "esriCTDisplayList");
                    }), 500);

                } else {
                    descriptionDiv = query('.esriCTDescription', selectedWebMapList.parentElement.parentElement)[0];
                    if (descriptionDiv) {
                        $('.esriCTDescription', selectedWebMapList.parentElement.parentElement).slideUp(0);
                        domClass.replace(descriptionDiv, "esriCTHidden", "esriCTDisplayList");
                    }
                    $("#" + webMapId).slideDown({
                        duration: 500,
                        easing: "linear"
                    });
                    setTimeout(lang.hitch(this, function () {
                        domClass.replace(selectedWebMapList,
                            "esriCTDisplayList", "esriCTHidden");
                    }), 500);

                }
                this.appUtils.hideLoadingIndicator();
            } else {
                if (this._lastWebMapSelected !== webMapId) {
                    this.hideWebMapList();
                    this.setDefaultHeightOfContainers();
                    this._selectWebMapItem(webMapId);
                    operationalLayerId = domAttr.get(node, "operationalLayerID");
                    this._createMap(webMapId, this.mapDivID).then(lang.hitch(this, function (evt) {
                        var obj;
                        this.lastSelectedWebMapExtent = evt.map.extent;
                        obj = {
                            "webMapId": webMapId,
                            "operationalLayerId": operationalLayerId,
                            "operationalLayerDetails": operationalLayerDetails,
                            "itemInfo": evt.itemInfo
                        };
                        this._displaySelectedOperationalLayer(obj);
                    }));
                } else {
                    this.onSelectedWebMapClicked(webMapId);
                    this.appUtils.hideLoadingIndicator();
                }
            }
        },

        /**
        * This function is used to generate event on all-ready selected webmap clicked
        * @memberOf widgets/webmap-list/webmap-list
        */
        onSelectedWebMapClicked: function (webMapId) {
            return webMapId;
        },

        /**
        * This function is used to add operational layer in list
        * @param{object} parent container in which operational layer list will be added
        * @param{object} details of web map
        * @memberOf widgets/webmap-list/webmap-list
        */
        _createOperationalLayerList: function (parentContainer, webMap) {
            var i, parentListNode, childListNode, operationalLayerString;
            parentListNode = domConstruct.create("div", {
                "class": "esriCTHidden  esriCTMediaBorder",
                "id": webMap.itemInfo.item.id
            });
            // to create operational layer list
            for (i = webMap.itemInfo.itemData.operationalLayers.length - 1; i >= 0; i--) {
                operationalLayerString = string.substitute(operationalLayerTemplate, { OperationalLayerTitle: webMap.itemInfo.itemData.operationalLayers[i].title });
                childListNode = domConstruct.toDom(operationalLayerString);
                domAttr.set(childListNode, "webMapID", webMap.itemInfo.item.id);
                domAttr.set(childListNode, "operationalLayerID", webMap.itemInfo.itemData.operationalLayers[i].id);
                this._handleOperationalLayerClick(childListNode, webMap.itemInfo.itemData.operationalLayers[i]);
                parentListNode.appendChild(childListNode);
            }
            // stop event propagation so that no other event gets executed
            on(parentListNode, "click", lang.hitch(this, function (evt) {
                event.stop(evt);
            }));
            parentContainer.appendChild(parentListNode);
        },

        /**
        * This function is used to handle operational layer click.
        * @param{object} operational layer node
        * @param{object} operational layer details
        * @memberOf widgets/webmap-list/webmap-list
        */
        _handleOperationalLayerClick: function (childListNode, operationalLayerDetails) {
            var operationalLayerId;
            on(childListNode, "click", lang.hitch(this, function (evt) {
                var webMapId, obj;
                event.stop(evt);
                this.appUtils.showLoadingIndicator();
                webMapId = domAttr.get(evt.currentTarget, "webMapID");
                operationalLayerId = domAttr.get(evt.currentTarget, "operationalLayerID");
                // if other layer of same web-map is clicked than just display it
                // & if other layer of other web-map is clicked than do create map
                if (this._lastWebMapSelected !== webMapId) {
                    this.setDefaultHeightOfContainers();
                    this._selectWebMapItem(webMapId);
                    this._createMap(webMapId, this.mapDivID).then(lang.hitch(this, function (response) {
                        this.lastSelectedWebMapExtent = response.map.extent;
                        this.lastSelectedWebMapItemInfo = response.itemInfo;
                        obj = {
                            "webMapId": webMapId,
                            "operationalLayerId": operationalLayerId,
                            "operationalLayerDetails": operationalLayerDetails,
                            "itemInfo": response.itemInfo
                        };
                        this._displaySelectedOperationalLayer(obj);
                    }));
                } else {
                    obj = {
                        "webMapId": webMapId,
                        "operationalLayerId": operationalLayerId,
                        "operationalLayerDetails": operationalLayerDetails,
                        "itemInfo": this.lastSelectedWebMapItemInfo
                    };
                    this._displaySelectedOperationalLayer(obj);
                    if (this.changeExtentOnLayerChange) {
                        this.map.setExtent(this.lastSelectedWebMapExtent);
                    }
                }
            }));
        },

        /**
        * This function is used to set default height of upper and lower container
        * @memberOf widgets/webmap-list/webmap-list
        */
        setDefaultHeightOfContainers: function () {
            return;
        },

        /**
        * This function is used to handle information click
        * @param{object} information of web map
        * @param{object} web-map item div container
        * @memberOf widgets/webmap-list/webmap-list
        */
        _attachInformationClick: function (information, parentDiv) {
            var infoIcon, descriptionDiv, webMapId, layerList;
            infoIcon = query('.esriCTInfoImg', parentDiv)[0];
            if (lang.trim(information).length !== 0 && infoIcon) {
                on(infoIcon, "click", function (evt) {
                    event.stop(evt);
                    descriptionDiv = query('.esriCTDescription', this.parentElement.parentElement)[0];
                    webMapId = domAttr.get(this.parentElement.parentElement, "webMapID");
                    layerList = dom.byId(webMapId);
                    // if description div is hidden than display it &
                    // if it is visible than hide it
                    if (domClass.contains(descriptionDiv, "esriCTHidden")) {
                        if (layerList) {
                            $("#" + webMapId).slideUp(0);
                            domClass.replace(layerList, "esriCTHidden", "esriCTDisplayList");
                        }
                        $('.esriCTDescription', this.parentElement.parentElement).slideDown({
                            duration: 250,
                            easing: "linear"
                        });
                        setTimeout(lang.hitch(this, function () {
                            domClass.replace(descriptionDiv, "esriCTDisplayList", "esriCTHidden");
                        }), 250);
                    } else {
                        $('.esriCTDescription', this.parentElement.parentElement).slideUp({
                            duration: 250,
                            easing: "linear"
                        });
                        setTimeout(lang.hitch(this, function () {
                            domClass.replace(descriptionDiv, "esriCTHidden", "esriCTDisplayList");
                        }), 250);
                    }
                });
            } else {
                if (infoIcon) {
                    domClass.replace(infoIcon, "esriCTHidden");
                }
            }
        },

        /**
        * This function is used to validate the capabilities of the layer
        * @param{object} capabilities of layer
        * @memberOf widgets/webmap-list/webmap-list
        */
        _validateLayerCapabilities: function (layerCapabilities) {
            // if layer has capability of create & update than return true
            if (layerCapabilities && layerCapabilities.indexOf("Create") > -1 && layerCapabilities.indexOf("Update") > -1) {
                return true;
            }
            // if layer has capability of create & editing than return true
            if (layerCapabilities && layerCapabilities.indexOf("Create") > -1 && layerCapabilities.indexOf("Editing") > -1) {
                return true;
            }
            return false;
        },

        /**
        * This function is used to validate popup fields
        * @param{object} pop-up info
        * @param{object} layer fields
        * @memberOf widgets/webmap-list/webmap-list
        */
        _validatePopupFields: function (popupInfo, fields) {
            var i, j;
            // check if popup-info is available if not then return false
            if (popupInfo) {
                for (i = 0; i < popupInfo.fieldInfos.length; i++) {
                    for (j = 0; j < fields.length; j++) {
                        if (popupInfo.fieldInfos[i].fieldName === fields[j].name) {
                            // check if field is Editable
                            if (popupInfo.fieldInfos[i].isEditable) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        },

        /**
        * This function is used maintain and toggle the state of web map list
        * @memberOf widgets/webmap-list/webmap-list
        */
        _toggleWebMapList: function () {
            var toggleButton = dom.byId("webmapListToggleButton"), requiredClass;
            this._setTooltip(toggleButton, true);
            if (this.appConfig.i18n.direction === "rtl") {
                domClass.add(toggleButton, "esriCTWebMapPanelToggleButtonCloseDisabled");
                requiredClass = "esriCTWebMapPanelToggleButtonCloseDisabled";
            } else {
                domClass.add(toggleButton, "esriCTWebMapPanelToggleButtonOpenDisabled");
                requiredClass = "esriCTWebMapPanelToggleButtonOpenDisabled";
            }
            this.own(on(toggleButton, "click", lang.hitch(this, function () {
                $(".esriCTFilterParentContainer").css("display", "none");
                if (!domClass.contains(toggleButton, requiredClass)) {
                    this._animateWebMapList();
                }
            })));
        },

        /**
        * This function is used to animate webmap list
        * @memberOf widgets/webmap-list/webmap-list
        */
        _animateWebMapList: function () {
            var toggleButton = dom.byId("webmapListToggleButton");
            if (this.appConfig.i18n.direction === "rtl") {
                if (domClass.contains(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListOpen")) { // close webmap list
                    domClass.replace(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListClose", "esriCTWebMapListOpen");
                    domClass.replace(toggleButton, "esriCTWebMapPanelToggleButtonOpen", "esriCTWebMapPanelToggleButtonClose");
                    domClass.add(dom.byId("webMapListContainer"), "esriCTWebMapListContainerScrollIE11");
                    domClass.replace(dom.byId("webMapPanelToggleBtnPosition"), "esriCTWebMapPanelToggleBtnPositionClose", "esriCTWebMapPanelToggleBtnPosition");
                    domClass.replace(dom.byId("webMapListBannerContainer"), "esriCTWebMapListBannerContainerFull", "esriCTWebMapListBannerContainer");
                    this._setTooltip(toggleButton, false);
                    $('#webMapListWrapperContainer').animate({
                        'right': "-30%" //moves left
                    }, 1000);
                } else { // open webmap list
                    domClass.replace(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListOpen", "esriCTWebMapListClose");
                    domClass.replace(toggleButton, "esriCTWebMapPanelToggleButtonClose", "esriCTWebMapPanelToggleButtonOpen");
                    domClass.remove(dom.byId("webMapListContainer"), "esriCTWebMapListContainerScrollIE11");
                    domClass.replace(dom.byId("webMapPanelToggleBtnPosition"), "esriCTWebMapPanelToggleBtnPosition", "esriCTWebMapPanelToggleBtnPositionClose");
                    domClass.replace(dom.byId("webMapListBannerContainer"), "esriCTWebMapListBannerContainer", "esriCTWebMapListBannerContainerFull");
                    this._setTooltip(toggleButton, true);
                    $('#webMapListWrapperContainer').animate({
                        'right': "0%" //moves left
                    }, 1000);
                }
            } else {
                if (domClass.contains(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListOpen")) { // close webmap list
                    domClass.replace(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListClose", "esriCTWebMapListOpen");
                    domClass.replace(toggleButton, "esriCTWebMapPanelToggleButtonClose", "esriCTWebMapPanelToggleButtonOpen");
                    domClass.add(dom.byId("webMapListContainer"), "esriCTWebMapListContainerScrollIE11");
                    domClass.replace(dom.byId("webMapPanelToggleBtnPosition"), "esriCTWebMapPanelToggleBtnPositionClose", "esriCTWebMapPanelToggleBtnPosition");
                    domClass.replace(dom.byId("webMapListBannerContainer"), "esriCTWebMapListBannerContainerFull", "esriCTWebMapListBannerContainer");
                    this._setTooltip(toggleButton, false);

                    $('#webMapListWrapperContainer').animate({
                        'left': "-30%" //moves left
                    }, 1000);
                } else { // open webmap list
                    domClass.replace(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListOpen", "esriCTWebMapListClose");
                    domClass.replace(toggleButton, "esriCTWebMapPanelToggleButtonOpen", "esriCTWebMapPanelToggleButtonClose");
                    domClass.remove(dom.byId("webMapListContainer"), "esriCTWebMapListContainerScrollIE11");
                    domClass.replace(dom.byId("webMapPanelToggleBtnPosition"), "esriCTWebMapPanelToggleBtnPosition", "esriCTWebMapPanelToggleBtnPositionClose");
                    domClass.replace(dom.byId("webMapListBannerContainer"), "esriCTWebMapListBannerContainer", "esriCTWebMapListBannerContainerFull");
                    this._setTooltip(toggleButton, true);
                    $('#webMapListWrapperContainer').animate({
                        'left': "0%" //moves left
                    }, 1000);
                }
            }
        },

        /**
        * This function is used to display non editable layers along with single selected editable layer
        * @memberOf widgets/webmap-list/webmap-list
        */
        _displayNonEditableLayers: function () {
            array.forEach(this._selectedMapResponse.itemInfo.itemData.operationalLayers, lang.hitch(this, function (currentLayer, index) { //ignore jslint
                if (currentLayer.resourceInfo && currentLayer.resourceInfo.capabilities && currentLayer.layerType === "ArcGISFeatureLayer") {
                    // condition to check if feature layer is non-editable & it is visible in the TOC
                    if ((currentLayer.resourceInfo.capabilities.indexOf("Create") === -1) &&
                        ((currentLayer.resourceInfo.capabilities.indexOf("Update") === -1) || (currentLayer.resourceInfo.capabilities.indexOf("Editing") === -1)) &&
                        currentLayer.visibility) {
                        currentLayer.layerObject.show();
                        // condition to check feature layer with create, edit, delete permissions and popup enabled, but all fields marked display only
                    } else if ((currentLayer.resourceInfo.capabilities.indexOf("Create") !== -1) &&
                        (currentLayer.resourceInfo.capabilities.indexOf("Editing") !== -1) &&
                        (currentLayer.resourceInfo.capabilities.indexOf("Update") !== -1) &&
                        (currentLayer.popupInfo) &&
                        this._checkDisplayPropertyOfFields(currentLayer.popupInfo, currentLayer.layerObject.fields) &&
                        this.selectedLayerId !== currentLayer.id) {
                        currentLayer.layerObject.show(); // display non-editable layer
                        // display layer which is not having popup
                    } else if ((!currentLayer.popupInfo) &&
                        (currentLayer.visibility)) {
                        currentLayer.layerObject.show(); // display non-editable layer
                    } else {
                        currentLayer.layerObject.hide();
                    }
                }
            }));
        },

        /**
        * This function is used to check whether all fields are marked display or not
        * @memberOf widgets/webmap-list/webmap-list
        */
        _checkDisplayPropertyOfFields: function (popupInfo, fields) {
            var i, j;
            if (!popupInfo) {
                return false;
            }
            for (i = 0; i < popupInfo.fieldInfos.length; i++) {
                if (popupInfo.fieldInfos[i].isEditable) {
                    return false;
                }
            }
            // check if popup-info is available if not then return false
            if (popupInfo) {
                for (i = 0; i < popupInfo.fieldInfos.length; i++) {
                    for (j = 0; j < fields.length; j++) {
                        if (popupInfo.fieldInfos[i].fieldName === fields[j].name) {
                            // check if at least one field is visible in popup
                            if (popupInfo.fieldInfos[i].visible) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        },

        /**
        * This function is used to set tooltip to webmap list toggle button
        * @memberOf widgets/webmap-list/webmap-list
        */
        _setTooltip: function (toggleButton, isOpen) {
            if (isOpen) {
                domAttr.set(toggleButton, "title", this.appConfig.i18n.webMapList.closeWebmapList);
            } else {
                domAttr.set(toggleButton, "title", this.appConfig.i18n.webMapList.openWebmapList);
            }
        },

        /**
        * This function is used to hide webmap list
        * @memberOf widgets/webmap-list/webmap-list
        */
        hideWebMapList: function () {
            var toggleButton = dom.byId("webmapListToggleButton");
            if (this.appConfig.i18n.direction === "rtl") {
                if (domClass.contains(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListOpen")) { // close webmap list
                    domClass.replace(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListClose", "esriCTWebMapListOpen");
                    domClass.replace(toggleButton, "esriCTWebMapPanelToggleButtonOpen", "esriCTWebMapPanelToggleButtonClose");
                    domClass.add(dom.byId("webMapListContainer"), "esriCTWebMapListContainerScrollIE11");
                    domClass.replace(dom.byId("webMapPanelToggleBtnPosition"), "esriCTWebMapPanelToggleBtnPositionClose", "esriCTWebMapPanelToggleBtnPosition");
                    domClass.replace(dom.byId("webMapListBannerContainer"), "esriCTWebMapListBannerContainerFull", "esriCTWebMapListBannerContainer");
                    this._setTooltip(toggleButton, false);
                    $('#webMapListWrapperContainer').animate({
                        'right': "-30%" //moves left
                    }, 1000);
                }
            } else {
                if (domClass.contains(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListOpen")) { // close webmap list
                    domClass.replace(dom.byId("webMapListWrapperContainer"), "esriCTWebMapListClose", "esriCTWebMapListOpen");
                    domClass.replace(toggleButton, "esriCTWebMapPanelToggleButtonClose", "esriCTWebMapPanelToggleButtonOpen");
                    domClass.add(dom.byId("webMapListContainer"), "esriCTWebMapListContainerScrollIE11");
                    domClass.replace(dom.byId("webMapPanelToggleBtnPosition"), "esriCTWebMapPanelToggleBtnPositionClose", "esriCTWebMapPanelToggleBtnPosition");
                    domClass.replace(dom.byId("webMapListBannerContainer"), "esriCTWebMapListBannerContainerFull", "esriCTWebMapListBannerContainer");
                    this._setTooltip(toggleButton, false);
                    $('#webMapListWrapperContainer').animate({
                        'left': "-30%" //moves left
                    }, 1000);
                }
            }
        }
    });
});