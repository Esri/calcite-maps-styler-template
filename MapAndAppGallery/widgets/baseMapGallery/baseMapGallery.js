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
    "dojo/_base/lang",
    "dojo/on",
    "dojo/text!./templates/baseMapGalleryTemplate.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/query"
], function (declare, domConstruct, lang, on, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, query) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        /**
        @class
        @name:baseMapGallery
        */
        startup: function () {
            var baseMapUrl = 0, baseMapUrlCount = 0, baseMapLayers = dojo.configData.BaseMapLayers, i, basemapContainer, layer;

            for (i = 0; i < baseMapLayers.length; i++) {
                if (baseMapLayers[i].MapURL) {
                    this.map.addLayer(this._createBaseMapLayer(baseMapLayers[i].MapURL, baseMapLayers[i].Key, (i === 0) ? true : false));
                    if (baseMapUrlCount === 0) {
                        baseMapUrl = i;
                    }
                    baseMapUrlCount++;
                }
            }
            basemapContainer = domConstruct.create("div", {}, query(".esriCTRightPanelMap")[0]);
            basemapContainer.appendChild(this.esriCTDivLayerContainer);
            this.layerList.appendChild(this._createBaseMapElement(baseMapUrl, baseMapUrlCount));

            if (baseMapUrlCount >= 1) {
                layer = this.map.getLayer(baseMapLayers[baseMapUrl].Key);
                layer.show();
            }
        },

        /**
        * Create BaseMap layers
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */

        _createBaseMapLayer: function (layerURL, layerId, isVisible) {
            var layer = new esri.layers.ArcGISTiledMapServiceLayer(layerURL, { id: layerId, visible: isVisible });
            return layer;
        },

        /**
        * Create BaseMap images
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _createBaseMapElement: function (baseMapUrl, baseMapUrlCount) {
            var presentThumbNail, divContainer, imgThumbnail, presentBaseMap;

            divContainer = domConstruct.create("div", { "class": "esriCTbaseMapContainerNode" });
            imgThumbnail = domConstruct.create("img", { "class": "esriCTBasemapThumbnail", "src": dojo.configData.BaseMapLayers[baseMapUrl + 1].ThumbnailSource }, null);
            presentBaseMap = baseMapUrl + 1;
            presentThumbNail = baseMapUrl + 2;
            on(imgThumbnail, "click", lang.hitch(this, function () {
                imgThumbnail.src = dojo.configData.BaseMapLayers[presentThumbNail].ThumbnailSource;
                this._changeBaseMap(presentBaseMap);
                if (baseMapUrlCount - 1 === presentThumbNail) {
                    presentThumbNail = baseMapUrl;
                } else {
                    presentThumbNail++;
                }
                if (baseMapUrlCount - 1 === presentBaseMap) {
                    presentBaseMap = baseMapUrl;
                } else {
                    presentBaseMap++;
                }
            }));
            divContainer.appendChild(imgThumbnail);
            return divContainer;
        },

        /**
        * Changes the BaseMap and hides the previous basemap
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _changeBaseMap: function (spanControl) {
            this._hideMapLayers();
            var layer = this.map.getLayer(dojo.configData.BaseMapLayers[spanControl].Key);
            layer.show();
        },

        /**
        * hides the BaseMap
        * @memberOf widgets/baseMapGallery/baseMapGallery
        */
        _hideMapLayers: function () {
            var i, layer;

            for (i = 0; i < dojo.configData.BaseMapLayers.length; i++) {
                if (dojo.configData.BaseMapLayers[i].MapURL) {
                    layer = this.map.getLayer(dojo.configData.BaseMapLayers[i].Key);
                    if (layer) {
                        layer.hide();
                    }
                }
            }
        }
    });
});
