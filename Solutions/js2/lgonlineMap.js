/*global define,dojo,js,window,esri */
/*jslint sloppy:true */
/*
 | Copyright 2012 Esri
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
define("js/lgonlineMap", ["dojo/dom-construct", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Deferred", "esri/arcgis/utils", "esri/dijit/Popup", "js/lgonlineBase"], function (domConstruct, on, lang, array, Deferred, utils, Popup) {

    //========================================================================================================================//

    dojo.declare("js.LGMapDependency", js.LGDependency, {
        /**
         * Constructs an LGMapDependency.
         *
         * @class
         * @name js.LGMapDependency
         * @extends js.LGDependency
         * @classdesc
         * Provides a mixin for handling a ready dependency on a map
         * object.
         */

        /**
         * Performs class-specific setup before waiting for a
         * dependency; saves a copy of the dependency instance.
         * @memberOf js.LGMapDependency#
         * @param {object} dependsOn LG object that this object depends
         *        on
         * @override
         */
        onDependencyPrep: function (dependsOn) {
            this.mapObj = dependsOn;
            this.inherited(arguments);
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGMap", js.LGGraphic, {
        /**
         * Constructs an LGMap.
         * <br><b>N.B.: this implementation does not support more
         * than one map per app.</b>
         * <br>All four extents parameters must be supplied in order for
         * extents to be modified; otherwise, web map's extents are
         * used.
         * <br>Listens for "position" messages of the form
         * {latitude:<number>, longitude:<number>}, recenters the map to
         * that position, and displays a location indicator at the
         * position (indicator currently hardcoded to
         * "images/youAreHere.png").
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the object's div is to be placed;
         *        required for subsequent searching for this object by
         *        id (LGObject)
         * @param {string} args.rootId Id for root div of created object
         *        (LGObject)
         * @param {string} [args.rootClass] Name of CSS class to
         *        use for the root container of the object (LGObject)
         * @param {boolean} [args.fill=false] Whether the object should
         *        fill its parent's div or not; if fill is true, the
         *        horizOffset and vertOffset parameters are ignored
         *        (LGGraphic)
         * @param {number} [args.horizOffset] Horizontal offset
         *        flag/value: >0: left side; 0: center; <0: right side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         * @param {number} [args.vertOffset] Vertical offset
         *        flag/value: >0: top side; 0: center; <0: bottom side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         *
         * @param {object} [args.mapOptions] Options to be sent to
         *        created map; see
         *        <a
         *        href="http://help.arcgis.com/en/webapi/javascript/arcgis/jsapi/map.html#MapConst">API
         *        for JavaScript map constructor</a>
         *
         * @param {object} args.values Key-value pairs for configurable
         *        elements (LGGraphic)
         * @param {string} args.values.webmap ArcGIS.com id of web map
         *        to display
         * @param {string|number} [args.values.xmin] Westernmost map
         *        extent
         * @param {string|number} [args.values.ymin] Southernmost map
         *        extent
         * @param {string|number} [args.values.xmax] Easternmost map
         *        extent
         * @param {string|number} [args.values.ymax] Northernmost map
         *        extent
         * @param {string|number} [args.values.wkid] wkid for extents
         *        coordinates
         *
         * @param {object} [args.i18n] Key-value pairs for text
         *        strings for non-configurable elements (LGGraphic)
         *
         * @constructor
         * @class
         * @name js.LGMap
         * @extends js.LGGraphic
         * @classdesc
         * Provides a UI web map display.
         */
        constructor: function () {
            var options, extents = null, pThis = this;

            /**
             * Provides a way to test the success or failure of the map
             * loading.
             * @member {Deferred} ready
             * @memberOf js.LGMap#
             */
            this.ready = new Deferred();

            options = { ignorePopups: this.toBoolean(this.ignorePopups, false) };
            options.mapOptions = this.mapOptions || {};
            options.mapOptions.showAttribution = true;

            this.popup = new Popup(null, domConstruct.create("div"));
            options.mapOptions.infoWindow = this.popup;

            // Set up configured extents
            if (this.xmin && this.ymin && this.xmax && this.ymax) {
                try {
                    extents = {
                        xmin: this.xmin,
                        ymin: this.ymin,
                        xmax: this.xmax,
                        ymax: this.ymax
                    };

                    extents.spatialReference = {};
                    if (this.wkid) {
                        extents.spatialReference.wkid = Number(this.wkid);
                    } else {
                        extents.spatialReference.wkid = 102100;
                    }
                    extents = new esri.geometry.Extent(extents);
                } catch (err1) {
                    extents = null;
                }
            }

            // Override the initial extent from the configuration with URL extent values;
            // need to have a complete set of the latter
            if (this.ex) {
                extents = this.getExtentsFromString(this.ex);
            }

            // Do we have a Bing maps key?
            if (this.commonConfig && this.commonConfig.bingMapsKey) {
                options.bingMapsKey = this.commonConfig.bingMapsKey;
            }

            // Create the map
            if (this.webmap) {
                this.mapId = this.webmap;
            }

            utils.createMap(this.mapId, this.rootDiv, options).then(
                function (response) {
                    var projectionParams;
                    pThis.mapInfo = response;

                    // For some reason if the webmap uses a bing map basemap the response doesn't have a spatialReference defined.
                    // This is a bit of a hack to set it manually
                    if (!response.map.spatialReference) {
                        pThis.mapInfo.map.spatialReference = new esri.SpatialReference(102100);
                    }

                    //pThis.listeners.push(
                    //    dojo.connect(pThis.mapInfo.map, "onUnload", function () {  // release event listeners upon unload
                    //        // http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/inside_events.html
                    //        dojo.forEach(var fred in pThis.listeners) {
                    //            dojo.disconnect(fred);
                    //        }
                    //    });
                    //);
                    //pThis.listeners.push(
                    on(window, "resize", lang.hitch(pThis.mapInfo.map, function () {
                        pThis.mapInfo.map.resize();
                        pThis.mapInfo.map.reposition();
                    }));
                    //);

                    // Jump to the initial extents
                    if (extents) {
                        // Set the initial extent, but keep the map's spatial reference,
                        // so we have to convert the extents to match the map
                        if (extents.spatialReference.wkid !== pThis.mapInfo.map.spatialReference.wkid) {
                            if (esri.config.defaults.geometryService) {
                                projectionParams = new esri.tasks.ProjectParameters();
                                projectionParams.geometries = [extents];
                                projectionParams.outSR = pThis.mapInfo.map.spatialReference;
                                esri.config.defaults.geometryService.project(projectionParams).then(
                                    function (geometries) {
                                        extents = geometries[0];
                                        pThis.mapInfo.map.setExtent(extents);
                                    }
                                );
                            } else {
                                pThis.log("LGMap_1: " + "Need geometry service to convert extents from wkid "
                                    + extents.spatialReference.wkid
                                    + " to map's " + pThis.mapInfo.map.spatialReference.wkid);
                            }
                        } else {
                            pThis.mapInfo.map.setExtent(extents);
                        }
                    }

                    // Set up a graphics layer for receiving position updates and feature highlights
                    pThis.tempGraphicsLayer = pThis.createGraphicsLayer("tempGraphicsLayer");

                    // Start listening for position updates
                    pThis.positionHandle = pThis.subscribeToMessage("position", function (newCenterPoint) {
                        var projectionParams2;

                        // Highlight the point's position if it's in the same coord system as the map
                        if (newCenterPoint.spatialReference.wkid === pThis.mapInfo.map.spatialReference.wkid) {
                            pThis.publishMessage("highlightItem", newCenterPoint);

                        // Otherwise, convert the position into the map's spatial reference before highlighting it
                        } else {
                            // Use a shortcut routine for the geographic --> web mercator conversion
                            if (newCenterPoint.spatialReference.wkid === 4326
                                    && pThis.mapInfo.map.spatialReference.wkid === 102100) {
                                newCenterPoint = esri.geometry.geographicToWebMercator(newCenterPoint);
                                pThis.publishMessage("highlightItem", newCenterPoint);

                            // Otherwise, use the geometry service
                            } else if (esri.config.defaults.geometryService) {
                                projectionParams2 = new esri.tasks.ProjectParameters();
                                projectionParams2.geometries = [newCenterPoint];
                                projectionParams2.outSR = pThis.mapInfo.map.spatialReference;
                                esri.config.defaults.geometryService.project(projectionParams2).then(
                                    function (geometries) {
                                        newCenterPoint = geometries[0];
                                        pThis.publishMessage("highlightItem", newCenterPoint);
                                    }
                                );

                            // If we can't convert, we can't highlight
                            } else {
                                pThis.log("LGMap_1: " + "Need geometry service to convert position from wkid "
                                    + newCenterPoint.spatialReference.wkid
                                    + " to map's " + pThis.mapInfo.map.spatialReference.wkid);
                            }
                        }
                    });

                    // Start listening for feature highlights
                    pThis.showFeatureHandle = pThis.subscribeToMessage("showFeature", function (feature) {
                        pThis.publishMessage("highlightItem", feature);
                    });

                    // Start broadcasting map clicks
                    pThis.clickHandle = on(pThis.mapInfo.map, "click", function (evt) {
                        pThis.publishMessage("mapClick", evt);
                    });

                    pThis.ready.resolve(pThis);
                },
                function () {
                    pThis.ready.reject(pThis);
                }
            );
        },

        /**
         * Returns the object's mapInfo object, which contains the
         * webmap creation information and the ArcGIS API map object.
         * @return {object} Object's mapInfo object
         * @memberOf js.LGMap#
         */
        mapInfo: function () {
            return this.mapInfo;
        },

        /**
         * Shows the map's popup using content from the supplied feature.
         * @param {object} popupLocation Map position to use for popup
         * @param {object} feature Feature whose content is to be used in the popup
         * @memberOf js.LGMap#
         */
        showPopupWithFeature: function (popupLocation, feature) {
            this.popup.clearFeatures();
            this.popup.setContent(feature.getContent());
            this.mapInfo.map.infoWindow.show(this.mapInfo.map.toScreen(popupLocation));
        },

        /**
         * Hides the map's popup.
         * @memberOf js.LGMap#
         */
        hidePopup: function () {
            this.mapInfo.map.infoWindow.hide();
        },

        /**
         * Sets the map's extent.
         * @param {extent} extent The desired map display extent
         * @memberOf js.LGMap#
         */
        setExtent: function (extent) {
            return this.mapInfo.map.setExtent(extent);
        },

        /**
         * Centers the map at the specified point.
         * @param {point} mapPoint The desired map centerpoint
         * @memberOf js.LGMap#
         */
        centerAt: function (mapPoint) {
            return this.mapInfo.map.centerAt(mapPoint);
        },

        /**
         * Zooms the map to the specified level, constrained
         * to the map's minimum-maximum zoom level range if
         * that range exists.
         * @param {number} zoom The desired zoom level
         * @memberOf js.LGMap#
         */
        setZoom: function (zoom) {
            var minZoom = this.mapInfo.map.getMinZoom(),
                maxZoom = this.mapInfo.map.getMaxZoom();

            // Constrain the zoom to the map's zoom levels if the map has them
            if (minZoom >= 0 && maxZoom >= 0) {
                zoom = Math.max(minZoom, Math.min(maxZoom, zoom));
            }
            return this.mapInfo.map.setZoom(zoom);
        },

        /**
         * Creates a string from the map's current extents.
         * @return {string} Comma-separated extents in the order xmin,
         *         ymin, xmax, ymax, spatial reference's wkid
         * @memberOf js.LGMap#
         */
        getMapExtentsAsString: function () {
            var extentsString = "";
            if (this.mapInfo && this.mapInfo.map) {
                extentsString = this.getStringFromExtents(this.mapInfo.map.extent);
            }
            return extentsString;
        },

        /**
         * Creates a string from extents.
         * @param {object} extents Extents structure
         * @return {string} Comma-separated extents in the order xmin,
         *         ymin, xmax, ymax, spatial reference's wkid or wkt
         * @see getExtentsFromString
         * @memberOf js.LGMap#
         */
        getStringFromExtents: function (extents) {
            var extentsString =
                    extents.xmin.toFixed().toString() + "," +
                    extents.ymin.toFixed().toString() + "," +
                    extents.xmax.toFixed().toString() + "," +
                    extents.ymax.toFixed().toString(),
                sr = extents.spatialReference;

            if (sr) {
                if (sr.wkid) {
                    extentsString = extentsString + "," + sr.wkid.toString();
                } else if (sr.wkt) {
                    extentsString = extentsString + "," + encodeURIComponent(sr.wkt);
                }
            }
            return extentsString;
        },

        /**
         * Creates extents from a string.
         * @param {string} extentsString String containing comma-
         *         separated xmin, ymin, xmax, ymax, and (optionally)
         *         the spatial reference's wkid or wkt; comma separator
         *         may take the escaped form "%2C"
         * @return {object} Extents object containing xmin,
         *         ymin, xmax, ymax set to the first four numbers
         *         in the string; if the string contains a fifth
         *         number, it is used as the wkid of the extents'
         *         spatial reference; if it contains a fifth element,
         *         it is used as the wkt of the spatial reference;
         *         otherwise 102100 is used
         * @see getStringFromExtents
         * @memberOf js.LGMap#
         */
        getExtentsFromString: function (extentsString) {
            var minmax, extents = null, wkid, iPROJCS;

            // Get the four to five comma-separated parts
            minmax = extentsString.split(",");

            // If there are no commas, then they're escaped.
            if (minmax.length === 1) {
                // Split the string on "PROJCS" if it exists
                iPROJCS = extentsString.indexOf("PROJCS");
                if (iPROJCS > 0) {
                    // Split the numbers on the escaped commas
                    minmax = extentsString.substr(0, iPROJCS).split("%2C");

                    // And put the wkt in the list's last slot
                    minmax[4] = (extentsString.substr(iPROJCS));
                } else {
                    // Split the whole string on the escaped commas
                    minmax = extentsString.split("%2C");
                }
            }

            try {
                extents = {
                    xmin: Number(minmax[0]),
                    ymin: Number(minmax[1]),
                    xmax: Number(minmax[2]),
                    ymax: Number(minmax[3])
                };

                extents.spatialReference = {};
                if (minmax.length > 4) {
                    wkid = Number(minmax[4]);
                    if (!isNaN(wkid)) {
                        extents.spatialReference.wkid = wkid;
                    } else {
                        extents.spatialReference.wkt = decodeURIComponent(minmax[4]);
                    }
                } else {
                    extents.spatialReference.wkid = 102100;
                }
                extents = new esri.geometry.Extent(extents);
            } catch (err2) {
                extents = null;
            }
            return extents;
        },

        /**
         * Returns the layer with the specified name.
         * @param {string} name Layer name to look for
         * @return {object} Layer or null
         * @memberOf js.LGMap#
         */
        getLayer: function (name) {
            var layer;

            // Find the operational layer that matches the specified search layer
            array.some(this.mapInfo.itemInfo.itemData.operationalLayers, function (opLayer) {
                if (opLayer.title === name) {
                    layer = opLayer.layerObject;
                    return true;
                }
                return false;
            });

            return layer;
        },

        /**
         * Returns the names of the operational layers in the map.
         * @return {array} List of layers
         * @memberOf js.LGMap#
         */
        getLayerNameList: function () {
            var layerNameList = [];

            array.forEach(this.mapInfo.itemInfo.itemData.operationalLayers, function (layer) {
                layerNameList.push(layer.title);
            });

            return layerNameList;
        },

        /**
         * Returns the operational layers in the map.
         * @return {array} List of layers
         * @memberOf js.LGMap#
         */
        getOperationalLayers: function () {
            return this.mapInfo.itemInfo.itemData.operationalLayers;
        },

        /**
         * Creates a graphics layer for the object's map.
         * @param {string} layerId Name for layer
         * @return {GraphicsLayer} Created graphics layer
         * @memberOf js.LGMap#
         */
        createGraphicsLayer: function (layerId) {
            var gLayer = new esri.layers.GraphicsLayer();
            gLayer.id = layerId;
            return this.mapInfo.map.addLayer(gLayer);
        },

        /**
         * Enables popups using the map's popup handler.
         * @memberOf js.LGMap#
         * @see From ArcGIS Online's Basic Viewer
         * (http://arcgis4localgov2.maps.arcgis.com/home/item.html?id=f232cac140a8495f9990cc9d2bb66dd9)
         */
        enablePopups: function () {
            // Not usable until we've created the map
            if (this.mapInfo && this.mapInfo.clickEventListener) {
                this.mapInfo.clickEventHandle = on(this.mapInfo.map, "click", this.mapInfo.clickEventListener);
            }
        },

        /**
         * Disables popups.
         * @memberOf js.LGMap#
         * @see From ArcGIS Online's Basic Viewer
         * (http://arcgis4localgov2.maps.arcgis.com/home/item.html?id=f232cac140a8495f9990cc9d2bb66dd9)
         */
        disablePopups: function () {
            // Not usable until we've created the map
            if (this.mapInfo && this.mapInfo.clickEventHandle) {
                this.mapInfo.clickEventHandle.remove();
            }
        }
    });

    //========================================================================================================================//

});
