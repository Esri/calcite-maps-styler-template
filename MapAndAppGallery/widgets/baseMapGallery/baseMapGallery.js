/*global define,dojo,esri */
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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/dom",
    "dojo/query",
    "dojo/text!./templates/baseMapGalleryTemplate.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "esri/layers/ArcGISTiledMapServiceLayer"
], function (declare, domConstruct, array, lang, on, dom, query, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, ArcGISTiledMapServiceLayer) {

    //========================================================================================================================//

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        enableToggling: true,
        /**
        * create baseMapGallery widget
        *
        * @class
        * @name widgets/baseMapGallery/baseMapGallery
        */
        postCreate: function () {
            query(".esriCTRightPanelMap")[0].appendChild(this.esriCTDivLayerContainer);
            this.layerList.appendChild(this._createBaseMapElement());
            this._loadSharedBasemap();
        },

        /**
        * create UI for basemap toggle widget
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _createBaseMapElement: function () {
            var divContainer, imgThumbnail, thumbnailPath, basemap;
            if (dojo.selectedBasemapIndex === dojo.configData.values.baseMapLayers.length - 1) {
                basemap = dojo.configData.values.baseMapLayers[0];
            } else {
                basemap = dojo.configData.values.baseMapLayers[dojo.selectedBasemapIndex + 1];
            }

            if (basemap.length) {
                thumbnailPath = basemap[0].ThumbnailSource;
            } else {
                thumbnailPath = basemap.ThumbnailSource;
            }
            divContainer = domConstruct.create("div", { "class": "esriCTbaseMapContainerNode" });
            imgThumbnail = domConstruct.create("img", { "class": "esriCTBasemapThumbnail", "src": thumbnailPath }, null);
            on(imgThumbnail, "click", lang.hitch(this, function () {
                if (this.enableToggling) {
                    dojo.selectedBasemapIndex++;
                    this._changeBasemapThumbnail();
                }
            }));
            divContainer.appendChild(imgThumbnail);
            return divContainer;
        },

        /**
        * change basemap layer
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _changeBaseMap: function (preLayerIndex) {
            var basemap, basemapLayers, basemapLayerId = "defaultBasemap";
            basemapLayers = dojo.configData.values.baseMapLayers[preLayerIndex];
            this.map.onLayerRemove = lang.hitch(this, function (layer) {
                this._addBasemapLayerOnMap(basemapLayerId);
            });

            if (basemapLayers.length) {
                array.forEach(basemapLayers, lang.hitch(this, function (layer, index) {
                    basemap = this.map.getLayer(basemapLayerId + index);
                    if (basemap) {
                        this.enableToggling = false;
                        this.map.removeLayer(basemap);
                    }
                }));
            } else {
                basemap = this.map.getLayer(basemapLayerId);
                if (basemap) {
                    this.enableToggling = false;
                    this.map.removeLayer(basemap);
                }
            }
        },

        /**
        * get shared basemap
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _addBasemapLayerOnMap: function (basemapLayerId) {
            var layer, basemapLayers = dojo.configData.values.baseMapLayers[dojo.selectedBasemapIndex];
            if (basemapLayers.length) {
                array.forEach(basemapLayers, lang.hitch(this, function (basemap, index) {
                    this.enableToggling = false;
                    layer = new ArcGISTiledMapServiceLayer(basemap.MapURL, { id: basemapLayerId + index, visible: true });
                    this.map.addLayer(layer, index);
                }));
            } else {
                this.enableToggling = false;
                layer = new ArcGISTiledMapServiceLayer(basemapLayers.MapURL, { id: basemapLayerId, visible: true });
                this.map.addLayer(layer, 0);
            }

            this.map.onLayerAdd = lang.hitch(this, function (layer) {
                this.enableToggling = true;
                dojo.currentExtent = this.map.extent;
            });
        },

        /**
        * get shared basemap
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _loadSharedBasemap: function () {
            if (window.location.toString().split("$selectedBasemapIndex=").length > 1) {
                dojo.selectedBasemapIndex = parseInt(window.location.toString().split("$selectedBasemapIndex=")[1].split("$")[0], 10);
                var preLayerIndex = dojo.configData.values.baseMapLayers.length - 1;
                this._changeBasemapThumbnail(preLayerIndex);
            }
        },

        /**
        * change basemap thumbnail
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _changeBasemapThumbnail: function (preIndex) {
            var baseMapURLCount, presentThumbNail, preLayerIndex, thumbnailPath;
            baseMapURLCount = dojo.configData.values.baseMapLayers.length;
            preLayerIndex = dojo.selectedBasemapIndex - 1;

            if (dojo.selectedBasemapIndex === baseMapURLCount) {
                dojo.selectedBasemapIndex = 0;
            }
            if (dojo.selectedBasemapIndex === 0) {
                preLayerIndex = baseMapURLCount - 1;
            }
            presentThumbNail = dojo.selectedBasemapIndex + 1;
            if (dojo.selectedBasemapIndex === baseMapURLCount - 1) {
                presentThumbNail = 0;
            }
            if (preIndex) {
                preLayerIndex = preIndex;
            }
            this._changeBaseMap(preLayerIndex);
            if (dojo.configData.values.baseMapLayers[presentThumbNail].length) {
                thumbnailPath = dojo.configData.values.baseMapLayers[presentThumbNail][0].ThumbnailSource;
            } else {
                thumbnailPath = dojo.configData.values.baseMapLayers[presentThumbNail].ThumbnailSource;
            }
            query('.esriCTBasemapThumbnail')[0].src = thumbnailPath;
        }

    });
});
