/*global define,dojo,js,esri,setTimeout,clearTimeout,setInterval,clearInterval */
/*jslint sloppy:true,plusplus:true */
/*
 | Copyright 2013 Esri
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
define("js/lgonlineDrawing", ["dojo/Deferred", "dojo/_base/Color", "esri/lang", "js/lgonlineMap"], function (Deferred, Color, esriLang) {

    //========================================================================================================================//

    dojo.declare("js.LGHighlighter", [js.LGObject, js.LGMapDependency], {
        /**
         * Constructs an LGHighlighter.
         * <br>Highlights a polyline or polygon by drawing a line symbol
         * over its boundaries and centers the map on a multiple of
         * the extents of the feature; highlights a point by drawing
         * a pulsating marker over it and centers the map on the point.
         *
         * @constructor
         * @class
         * @name js.LGHighlighter
         * @extends js.LGObject, js.LGMapDependency
         * @classdesc
         * Manages the app's highlighter.
         */
        constructor: function () {
            // Correct for stringized boolean
            this.showFeaturePopup = this.toBoolean(this.showFeaturePopup, true);
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGHighlighter#
         * @override
         */
        onDependencyReady: function () {
            var extent, newMapCenter, pThis = this;
            // Now that the map (our dependency) is ready, finish setup

            // Create a graphics layer to hold the highlights
            this.highlighterLayer = pThis.mapObj.createGraphicsLayer("highlighterLayer");

            // Convert the color definitions to Dojo Colors--required for AGOL printing
            this.lineHiliteColor = new Color(this.lineHiliteColor || "#0000ff");
            this.fillHiliteColor = new Color(this.fillHiliteColor || [0, 0, 255, 0.1]);

            // Hold on to the current animating timeout ID and interval ID so that we can
            // clear an active animating highlight before creating a new one
            this.intervalTerminator = null;
            this.intervalID = null;

            // Cache the URL to the print when triggered
            this.subscribeToMessage("highlightItem", function (focalItem) {
                var geometry, attributes, infoTemplate, highlightGraphics;

                // Normalize focal item into attributes, geometry, and infoTemplate components
                if (!focalItem) {
                    return;
                }
                if (focalItem.geometry) {
                    geometry = focalItem.geometry;
                } else {
                    geometry = focalItem;
                }
                if (focalItem.attributes) {
                    attributes = focalItem.attributes;
                }
                if (focalItem.infoTemplate) {
                    infoTemplate = focalItem.infoTemplate;
                }

                // Create highlight graphic(s)
                highlightGraphics = pThis.createHighlightGraphics(geometry, attributes, infoTemplate);

                // Pan & zoom to highlight graphic(s)
                if (highlightGraphics.length > 0) {
                    extent = geometry.getExtent();
                    if (extent) {
                        newMapCenter = extent.getCenter();
                    } else {
                        newMapCenter = geometry;
                    }
                    pThis.showHighlight(highlightGraphics, newMapCenter, pThis.highlightZoomLevel,
                        esriLang.isDefined(attributes) && esriLang.isDefined(infoTemplate) && pThis.showFeaturePopup);
                }
            });
        },

        /**
         * Creates an array of graphics that can be used for highlighting.
         * @param {object} geometry Geometry to be used to create graphics
         * @param {object} attributes Attributes to be used to create graphics
         * @param {object} infoTemplate Info template to be used to create graphics
         * @return {array} An array of graphics for highlighting the content;
         *        consists of a single graphic for a line or polygon and of
         *        a set of concentric circles for a point
         * @memberOf js.LGHighlighter#
         */
        createHighlightGraphics: function (geometry, attributes, infoTemplate) {
            var i, highlightGraphics = [];

            if (geometry.type === "polyline") {
                // Create a line symbol using the configured line highlight color
                highlightGraphics.push(new esri.Graphic(geometry,
                    new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                        this.lineHiliteColor, 3),
                    attributes, infoTemplate));

            } else {
                if (geometry.type === "point") {
                    // JSAPI does not want NaN coordinates
                    if (!geometry.x || !geometry.y || isNaN(geometry.x) || isNaN(geometry.y)) {
                        return highlightGraphics;
                    }

                    // Create a series of concentric circle symbols using the configured line highlight color
                    for (i = 0; i <= 4; ++i) {
                        highlightGraphics.push(new esri.Graphic(geometry,
                            new esri.symbol.SimpleMarkerSymbol(
                                esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE,
                                (i + 16) * 2.5,
                                new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                                    new dojo.Color(this.lineHiliteColor), 3),
                                new dojo.Color([0, 0, 0, 0])
                            ),
                            attributes, infoTemplate));
                    }

                } else if (geometry.type) {
                    // Create a polygon symbol using the configured line & fill highlight colors
                    highlightGraphics.push(new esri.Graphic(geometry,
                        new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                            new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                                this.lineHiliteColor, 3), this.fillHiliteColor),
                        attributes, infoTemplate));
                }
            }

            return highlightGraphics;
        },

        /**
         * Shows highlight graphics with optional panning and zooming.
         * @param {object} highlightGraphics Graphics to add to highlight
         *        graphics layer; layer is always cleared first
         * @param {point} [newMapCenter] Pans the map to this point
         * @param {number} [newZoomLevel] Zooms the map to this level
         * @param {boolean} [showFeaturePopup] Shows the graphic's popup
         *        after pan and zoom are finished; default is to not show
         * @memberOf js.LGHighlighter#
         */
        showHighlight: function (highlightGraphics, newMapCenter, newZoomLevel, showFeaturePopup) {
            var focusFinished, zoomFinished, i, increasingRadius, pThis = this;

            if (newMapCenter) {
                focusFinished = this.mapObj.centerAt(newMapCenter);
            } else {
                focusFinished = new Deferred();
                focusFinished.resolve();
            }
            focusFinished.then(  //??? centerAt/setZoom conflict workaround
                function () {    //??? centerAt/setZoom conflict workaround

                    if (newZoomLevel) {
                        zoomFinished = pThis.mapObj.setZoom(newZoomLevel);
                    } else {
                        zoomFinished = new Deferred();
                        zoomFinished.resolve();
                    }
                    zoomFinished.then(  //??? centerAt/setZoom conflict workaround
                        function () {   //??? centerAt/setZoom conflict workaround

                            // Clear extant animated highlight and any existing highlight graphics & popup
                            if (pThis.intervalTerminator) {
                                clearTimeout(pThis.intervalTerminator);
                                clearInterval(pThis.intervalID);
                            }
                            pThis.highlighterLayer.clear();
                            pThis.mapObj.hidePopup();

                            // Display the highlight graphic
                            if (highlightGraphics.length > 1) {

                                // Create a highlight
                                i = 0;
                                increasingRadius = true;
                                pThis.intervalID = setInterval(function () {
                                    pThis.highlighterLayer.clear();
                                    pThis.highlighterLayer.add(highlightGraphics[i]);

                                    if (increasingRadius) {
                                        ++i;
                                    } else {
                                        --i;
                                    }
                                    if (i === highlightGraphics.length) {
                                        increasingRadius = false;
                                        --i;
                                    } else if (i < 0) {
                                        increasingRadius = true;
                                        i = 0;
                                    }
                                }, 120);  // ms

                                // Discard the highlight after some time
                                pThis.intervalTerminator = setTimeout(function () {
                                    clearInterval(pThis.intervalID);
                                    pThis.intervalTerminator = null;
                                    pThis.intervalID = null;
                                    pThis.highlighterLayer.clear();
                                }, 5000);  // ms
                            } else {
                                pThis.highlighterLayer.add(highlightGraphics[0]);
                            }

                            // If we have attributes and a desire to complement the highlight with
                            // a popup, prep & display the popup
                            if (showFeaturePopup) {
                                //??? centerAt/setZoom conflict workaround
                                //???(new DeferredList([focusFinished, zoomFinished])).then(
                                //???    function (results) {
                                pThis.mapObj.showPopupWithFeature(newMapCenter, highlightGraphics[0]);
                                //???    }
                                //???);
                            }

                        }
                    );  //??? centerAt/setZoom conflict workaround
                }
            );  //??? centerAt/setZoom conflict workaround
        }
    });

    //========================================================================================================================//

});
