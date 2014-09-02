/*global define,dojo,js,esri */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
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
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/dom",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/Deferred",
    "dojo/dom-class",
    "dojo/dom-attr",
    "esri/arcgis/utils",
    "esri/dijit/Popup",
    "esri/layers/GraphicsLayer",
    "esri/tasks/ProjectParameters",
    "js/lgonlineBase"
], function (
    declare,
    domConstruct,
    dom,
    on,
    lang,
    array,
    Deferred,
    domClass,
    domAttr,
    utils,
    Popup,
    GraphicsLayer,
    ProjectParameters
) {

    //========================================================================================================================//

    declare("js.LGMapDependency", js.LGDependency, {
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

    declare("js.LGMap", js.LGGraphic, {
        /**
         * Constructs an LGMap.
         * <br><b>N.B.: this implementation does not support more
         * than one map per app.</b>
         * <br>All four extent parameters must be supplied in order for
         * extent to be modified; otherwise, web map's extent are
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
         * @param {string|number} [args.values.wkid] wkid for extent
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
        constructor: function (args) {
            var extent = null, urlExtent = null, pThis = this, map, saveInitialExtent, projectionParams;

            /**
             * Provides a way to test the success or failure of the map
             * loading.
             * @member {Deferred} ready
             * @memberOf js.LGMap#
             */
            this.ready = new Deferred();

            map = this.appConfig.map;

            // Save the initial map extent to re-apply it to the map after the map's div
            // is reparented (and perhaps resized) if no other source of extent is provided
            saveInitialExtent = map.extent;

            // Replace the standard div associated with this object with the one created
            // by the application boilerplate
            domConstruct.destroy(this.rootDiv);
            this.rootDiv = dom.byId("mapDiv");
            domConstruct.place(this.rootDiv, this.parentDiv);

            // Patch the map div to have the expected attributes
            domClass.add(this.rootDiv, this.rootClass);
            domAttr.set(this.rootDiv, "id", this.rootId);
            this.rootDiv.getLGObject = function () {
                return pThis;
            };

            // The map div may have been resized if it has gone from filling the window to being
            // contained within the parent, so fix its sizing
            this.handleWindowResize();
            map.resize(true);
            map.reposition();

            // Update the initial extent. There are three sources for the initial extent, listed in increasing importance:
            //   1. webmap visible extent when saved
            //   2. application extent on the application item
            //   3. configured in LGMap item
            //   4. supplied in the URL using the format ex=xmin,ymin,xmax,ymax[,wkid]
            //      e.g., ex=-9279312,5238092,-9259324,5256972,102100
            //      or as ex=xmin,ymin,xmax,ymax[,wkt]
            //      e.g., ex=1028046,1861694,1028981,1862568,PROJCS%5B%22NAD_1983_HARN_StatePlane_Illinois_East_FIPS_1201%22%2CGEOGCS%5B%22...%5D%2CUNIT%5B%22Foot_US%22%2C0.3048006096012192%5D%5D
            //      If wkid and wkt are not supplied, the coordinates are intepreted as wkid 102100
            if (this.xmin && this.ymin && this.xmax && this.ymax) {
                try {
                    extent = {
                        xmin: this.xmin,
                        ymin: this.ymin,
                        xmax: this.xmax,
                        ymax: this.ymax
                    };

                    extent.spatialReference = {};
                    if (this.wkid) {
                        extent.spatialReference.wkid = Number(this.wkid);
                    } else {
                        extent.spatialReference.wkid = 102100;
                    }
                    extent = new esri.geometry.Extent(extent);
                } catch (err1) {
                    extent = null;
                }
            }

            // Override the initial extent from the configuration with URL extent values;
            // need to have a complete set of the latter
            if (this.appConfig.ex) {
                urlExtent = this.getExtentsFromString(this.appConfig.ex);
                if (urlExtent) {
                    extent = urlExtent;
                }
            }

            // Jump to the initial extent
            if (extent) {
                // Set the initial extent, but keep the map's spatial reference,
                // so we have to convert the extent to match the map
                if (extent.spatialReference.wkid !== map.spatialReference.wkid) {
                    if (esri.config.defaults.geometryService) {
                        projectionParams = new ProjectParameters();
                        projectionParams.geometries = [extent];
                        projectionParams.outSR = map.spatialReference;
                        esri.config.defaults.geometryService.project(projectionParams).then(
                            function (geometries) {
                                extent = geometries[0];
                                map.setExtent(extent);
                            }
                        );
                    } else {
                        this.log("LGMap_1: " + "Need geometry service to convert extent from wkid "
                            + extent.spatialReference.wkid
                            + " to map's " + map.spatialReference.wkid);
                    }
                } else {
                    map.setExtent(extent);
                }
            } else {
                // Re-apply the initial extent
                map.setExtent(saveInitialExtent);
            }


            // For some reason if the webmap uses a bing map basemap the response doesn't have a spatialReference defined.
            // This is a bit of a hack to set it manually
            if (!map.spatialReference) {
                map.spatialReference = new esri.SpatialReference(102100);
            }

            on(window, "resize", lang.hitch(this, function () {
                map.resize();
                map.reposition();
            }));

            // Set up a graphics layer for receiving position updates and feature highlights
            this.tempGraphicsLayer = this.createGraphicsLayer("tempGraphicsLayer");

            // Start listening for position updates
            this.positionHandle = this.subscribeToMessage("position", function (newCenterPoint) {
                var projectionParams2;

                // Highlight the point's position if it's in the same coord system as the map
                if (newCenterPoint.spatialReference.wkid === pThis.appConfig.map.spatialReference.wkid) {
                    pThis.publishMessage("highlightItem", newCenterPoint);

                // Otherwise, convert the position into the map's spatial reference before highlighting it
                } else {
                    // Use a shortcut routine for the geographic --> web mercator conversion
                    if (newCenterPoint.spatialReference.wkid === 4326
                            && pThis.appConfig.map.spatialReference.wkid === 102100) {
                        newCenterPoint = esri.geometry.geographicToWebMercator(newCenterPoint);
                        pThis.publishMessage("highlightItem", newCenterPoint);

                    // Otherwise, use the geometry service
                    } else if (esri.config.defaults.geometryService) {
                        projectionParams2 = new esri.tasks.ProjectParameters();
                        projectionParams2.geometries = [newCenterPoint];
                        projectionParams2.outSR = pThis.appConfig.map.spatialReference;
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
                            + " to map's " + pThis.appConfig.map.spatialReference.wkid);
                    }
                }
            });

            // Start listening for feature highlights
            this.showFeatureHandle = this.subscribeToMessage("showFeature", function (feature) {
                pThis.publishMessage("highlightItem", feature);
            });

            // Start broadcasting map clicks
            this.clickHandle = on(map, "click", function (evt) {
                pThis.publishMessage("mapClick", evt);
            });

            this.ready.resolve(this);
        },

        /**
         * Shows the map's popup using content from the supplied feature.
         * @param {object} popupLocation Map position to use for popup
         * @param {object} feature Feature whose content is to be used in the popup
         * @memberOf js.LGMap#
         */
        showPopupWithFeature: function (popupLocation, feature) {
            var infoWin = this.appConfig.map.infoWindow;

            infoWin.clearFeatures();
            infoWin.setContent(feature.getContent());
            infoWin.show(popupLocation);
        },

        /**
         * Hides the map's popup.
         * @memberOf js.LGMap#
         */
        hidePopup: function () {
            this.appConfig.map.infoWindow.hide();
        },

        /**
         * Sets the map's extent.
         * @param {extent} extent The desired map display extent
         * @memberOf js.LGMap#
         */
        setExtent: function (extent) {
            return this.appConfig.map.setExtent(extent);
        },

        /**
         * Centers the map at the specified point.
         * @param {point} mapPoint The desired map centerpoint
         * @memberOf js.LGMap#
         */
        centerAt: function (mapPoint) {
            return this.appConfig.map.centerAt(mapPoint);
        },

        /**
         * Zooms the map to the specified level, constrained
         * to the map's minimum-maximum zoom level range if
         * that range exists.
         * @param {number} zoom The desired zoom level
         * @memberOf js.LGMap#
         */
        setZoom: function (zoom) {
            var minZoom = this.appConfig.map.getMinZoom(),
                maxZoom = this.appConfig.map.getMaxZoom(),
                zoomFinished;

            // Constrain the zoom to the map's zoom levels if the map has them
            if (minZoom >= 0 && maxZoom >= 0) {
                zoom = Math.max(minZoom, Math.min(maxZoom, zoom));
                zoomFinished = this.appConfig.map.setZoom(zoom);
            } else {
                zoomFinished = new Deferred();
                zoomFinished.resolve();
            }
            return zoomFinished;
        },

        /**
         * Creates a string from the map's current extent.
         * @return {string} Comma-separated extent in the order xmin,
         *         ymin, xmax, ymax, spatial reference's wkid
         * @memberOf js.LGMap#
         */
        getMapExtentsAsString: function () {
            var extentString = "";
            if (this.appConfig.map) {
                extentString = this.getStringFromExtents(this.appConfig.map.extent);
            }
            return extentString;
        },

        /**
         * Creates a string from extent.
         * @param {object} extent Extent structure
         * @return {string} Comma-separated extent in the order xmin,
         *         ymin, xmax, ymax, spatial reference's wkid or wkt
         * @see getExtentsFromString
         * @memberOf js.LGMap#
         */
        getStringFromExtents: function (extent) {
            var extentString =
                    extent.xmin.toFixed().toString() + "," +
                    extent.ymin.toFixed().toString() + "," +
                    extent.xmax.toFixed().toString() + "," +
                    extent.ymax.toFixed().toString(),
                sr = extent.spatialReference;

            if (sr) {
                if (sr.wkid) {
                    extentString = extentString + "," + sr.wkid.toString();
                } else if (sr.wkt) {
                    extentString = extentString + "," + encodeURIComponent(sr.wkt);
                }
            }
            return extentString;
        },

        /**
         * Creates extent from a string.
         * @param {string} extentString String containing comma-
         *         separated xmin, ymin, xmax, ymax, and (optionally)
         *         the spatial reference's wkid or wkt; comma separator
         *         may take the escaped form "%2C"
         * @return {object} Extent object containing xmin,
         *         ymin, xmax, ymax set to the first four numbers
         *         in the string; if the string contains a fifth
         *         number, it is used as the wkid of the extent'
         *         spatial reference; if it contains a fifth element,
         *         it is used as the wkt of the spatial reference;
         *         otherwise 102100 is used
         * @see getStringFromExtents
         * @memberOf js.LGMap#
         */
        getExtentsFromString: function (extentString) {
            var minmax, extent = null, wkid, iPROJCS;

            // Get the four to five comma-separated parts
            // If extentString is an array, then the URL contained more than one
            // ex parameter; the last one is what we want
            if (extentString instanceof Array) {
                extentString = extentString[extentString.length - 1];
            }
            minmax = extentString.split(",");

            // If there are no commas, then they're escaped.
            if (minmax.length === 1) {
                // Split the string on "PROJCS" if it exists
                iPROJCS = extentString.indexOf("PROJCS");
                if (iPROJCS > 0) {
                    // Split the numbers on the escaped commas
                    minmax = extentString.substr(0, iPROJCS).split("%2C");

                    // And put the wkt in the list's last slot
                    minmax[4] = (extentString.substr(iPROJCS));
                } else {
                    // Split the whole string on the escaped commas
                    minmax = extentString.split("%2C");
                }
            }

            try {
                extent = {
                    xmin: Number(minmax[0]),
                    ymin: Number(minmax[1]),
                    xmax: Number(minmax[2]),
                    ymax: Number(minmax[3])
                };

                extent.spatialReference = {};
                if (minmax.length === 5) {
                    wkid = Number(minmax[4]);
                    if (!isNaN(wkid)) {
                        extent.spatialReference.wkid = wkid;
                    } else {
                        extent.spatialReference.wkid = 102100;
                    }
                } else if (minmax.length > 5) {
                    // The boilerplate unescapes url params, so our split above also splits the wkt;
                    // rejoin the parts of the wkt
                    extent.spatialReference.wkt = minmax.slice(4).join(",");
                } else {
                    extent.spatialReference.wkid = 102100;
                }
                extent = new esri.geometry.Extent(extent);
            } catch (err2) {
                extent = null;
            }
            return extent;
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
            array.some(this.appConfig.itemInfo.itemData.operationalLayers, function (opLayer) {
                if (opLayer.title === name) {
                    layer = opLayer;
                    return true;
                }
                return false;
            });

            // Try name as an id
            if (!layer) {
                layer = this.appConfig.map.getLayer(name);
            }

            return layer;
        },

        /**
         * Returns the names of the operational layers in the map.
         * @return {array} List of layers
         * @memberOf js.LGMap#
         */
        getLayerNameList: function () {
            var layerNameList = [];

            array.forEach(this.appConfig.itemInfo.itemData.operationalLayers, function (layer) {
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
            return this.appConfig.itemInfo.itemData.operationalLayers;
        },

        /**
         * Creates a graphics layer for the object's map.
         * @param {string} layerId Name for layer
         * @return {GraphicsLayer} Created graphics layer
         * @memberOf js.LGMap#
         */
        createGraphicsLayer: function (layerId) {
            var gLayer = new GraphicsLayer();
            gLayer.id = layerId;
            on(gLayer, "graphic-add", function () {
                gLayer.disableMouseEvents();
            });
            return this.appConfig.map.addLayer(gLayer);
        },

        /**
         * Enables popups using the map's popup handler.
         * @memberOf js.LGMap#
         * @see From ArcGIS Online's Basic Viewer
         * (http://arcgis4localgov2.maps.arcgis.com/home/item.html?id=f232cac140a8495f9990cc9d2bb66dd9)
         */
        enablePopups: function () {
            // Not usable until we've created the map
            if (this.appConfig.mapInfo.clickEventListener) {
                this.appConfig.mapInfo.clickEventHandle = on(this.appConfig.map, "click", this.appConfig.mapInfo.clickEventListener);
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
            if (this.appConfig.mapInfo.clickEventHandle) {
                this.appConfig.mapInfo.clickEventHandle.remove();
            }
        }
    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
5e8776036f46a8a2 2014-09-02 07:17:15 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
