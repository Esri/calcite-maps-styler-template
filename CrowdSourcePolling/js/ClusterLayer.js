/*global define,dojo,console */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
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
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/_base/lang',
    'dojo/_base/Color',
    'dojo/_base/fx',
    'dojo/number',
    'esri/layers/GraphicsLayer',
    'esri/graphic',
    'esri/graphicsUtils',
    'esri/SpatialReference',
    'esri/geometry/Extent',
    'esri/geometry/Point',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/Font',
    'esri/symbols/TextSymbol'
], function (
    declare,
    array,
    lang,
    Color,
    fx,
    number,
    GraphicsLayer,
    Graphic,
    graphicsUtils,
    SpatialReference,
    Extent,
    Point,
    SimpleMarkerSymbol,
    SimpleLineSymbol,
    Font,
    TextSymbol
) {
    var clusterLayer = declare('ClusterLayer', [GraphicsLayer], {

        constructor: function (options) {
            var me = this;

            //basic esri.layers.GraphicsLayer option(s)
            me.displayOnPan = options.displayOnPan || false;

            //set the map
            me._map = options.map;

            me.clusterSize = options.clusterSize || 100;

            me.color = options.color || '#ff0000';

            me.countField = options.countField;

            //base connections to update clusters during user/map interaction
            me._map.on('zoom-start', lang.hitch(me, me._handleMapZoomStart));
            me._map.on('extent-change', lang.hitch(me, me._handleMapExtentChange));

            //holds all the features for this cluster layer
            me._features = [];

            //holds all the clusters this cluster layer
            me._clusters = [];

            //holds the max number of points in a cluster
            me._maxCount = 0;

            //holds the flare id
            me._flared = null;

            //set incoming features
            try {
                me.setFeatures(options.features);
            } catch (ex) {
                console.log(ex);
            }

            //connects for cluster layer itself that handles the loading and mouse events on the graphics
            me.on('load', lang.hitch(me, me._handleLayerLoaded));
            me.on('click', lang.hitch(me, me._handleClick));

            //following the basics of creating a custom layer
            me.loaded = true;
            me.onLoad(me);
        },

        //clear all graphics when zoom starts
        _handleMapZoomStart: function () {
            this.clear();
        },

        //re-cluster on extent change
        _handleMapExtentChange: function (extent, delta, leveChange, lod) {
            if (this._map.infoWindow.isShowing) {
                this._map.infoWindow.hide();
            }
            this.clear();
            this._clusters = [];
            this._clusterFeatures();
        },

        //set features
        setFeatures: function (features) {
            var me = this;
            // if (me._map.infoWindow.isShowing)
            // me._map.infoWindow.hide();

            me._features = [];
            array.forEach(features, function (feature) {
                feature.attributes.child = 1;
                me._features.push(feature);
            }, me);
            me._clusterFeatures();
        },

        //fires when cluster layer is loaded, but not added to map yet.
        _handleLayerLoaded: function (lyr) {
            this._clusterFeatures();
        },

        // cluster features
        _clusterFeatures: function (redraw) {
            var clusterGraphics, features, clusterSize, sr, mapExt, o, rows, cols, distX, distY,
                r, c, id, x1, y1, x2, y2, ext, data, i, feature, cPt;

            clusterGraphics = [];
            this._flared = null;

            features = this._features;
            if (features.length > 0) {

                clusterSize = this.clusterSize;

                sr = this._map.spatialReference;
                mapExt = this._map.extent;
                o = new Point(mapExt.xmin, mapExt.ymax, sr);

                rows = Math.ceil(this._map.height / clusterSize);
                cols = Math.ceil(this._map.width / clusterSize);
                distX = mapExt.getWidth() / this._map.width * clusterSize;
                distY = mapExt.getHeight() / this._map.height * clusterSize;

                for (r = 0; r < rows; r++) {
                    for (c = 0; c < cols; c++) {
                        id = "R" + r + "C" + c;
                        x1 = o.x + (distX * c);
                        y2 = o.y - (distY * r);
                        x2 = x1 + distX;
                        y1 = y2 - distY;

                        ext = new Extent(x1, y1, x2, y2, sr);

                        data = [];
                        for (i in features) {
                            if (features.hasOwnProperty(i)) {
                                feature = features[i];
                                if (ext.contains(feature.geometry)) {
                                    data.push(feature);
                                }
                            }
                        }
                        if (data.length > 0) {
                            if (data.length > this._maxCount) {
                                this._maxCount = data.length;
                            }
                            cPt = this._getClusterCenter(data);
                            clusterGraphics.push({
                                id: id,
                                center: cPt,
                                graphics: data
                            });
                        }
                    }
                }

            }
            this._clusters = clusterGraphics;
            this._renderClusters();
        },

        // render clusters
        _renderClusters: function () {
            var rgb, rgba, fnt, g, clusterGraphic, id, pt, data, count, label, size,
                symL, symC, symR, symP, symText, attr, flared, newC, newR, newL;

            this.clear();

            // color, font
            rgb = Color.fromString(this.color).toRgb();
            rgba = rgb.slice();
            rgba.push(0.4);

            fnt = new Font();
            fnt.family = "Arial";
            fnt.size = "8px";

            function setSymbol(symP) {
                return function (f) {
                    f.setSymbol(symP);
                    this.add(f);
                };
            }

            for (g in this._clusters) {
                if (this._clusters.hasOwnProperty(g)) {

                    clusterGraphic = this._clusters[g];
                    id = clusterGraphic.id;
                    pt = clusterGraphic.center;
                    data = clusterGraphic.graphics;
                    count = data.length; //this._getClusterCount(data);
                    label = this._getLabel(count);
                    size = 26 + count;

                    symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL, new Color([0, 0, 0, 0]), 0);
                    symC = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, size, symL, new Color.fromArray(rgba));
                    symR = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 20, symL, new Color.fromArray(rgb));
                    symP = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, symL, new Color.fromArray(rgb));

                    symText = new TextSymbol(label, fnt, "#ffffff");
                    symText.setOffset(0, -3);

                    attr = {
                        id: id,
                        count: count,
                        flared: 0,
                        data: data
                    };

                    flared = false;
                    if (this._flared && id === this._flared) {
                        flared = true;
                    }

                    if (count > 1 && !flared) {
                        newC = new Graphic(pt, symC, attr);
                        newC.visible = !flared;
                        this.add(newC);

                        newR = new Graphic(pt, symR, attr);
                        newR.visible = !flared;
                        this.add(newR);

                        newL = new Graphic(pt, symText, attr);
                        newL.visible = !flared;
                        this.add(newL);

                    } else {
                        array.forEach(data, lang.hitch(this, setSymbol(symP)));
                        /*array.forEach(data, lang.hitch(this, function (f) {
                            f.setSymbol(symP);
                            this.add(f);
                        }));*/
                    }

                }
            }

        },

        _getClusterCount: function (graphics) {
            var count = 0, i, g;

            for (i = 0; i < graphics.length; i++) {
                g = graphics[i];
                if (this.countField && g.attributes[this.countField]) {
                    count += g.attributes[this.countField];
                } else {
                    count += 1;
                }
            }
            return count;
        },

        // get label
        _getLabel: function (num) {
            var label = num.toString();
            if (num >= 1000) {
                label = (num / 1000).toFixed(1) + "K";
            } else if (num >= 1000000) {
                label = (num / 1000000).toFixed(1) + "M";
            } else if (num >= 1000000000) {
                label = (num / 1000000000).toFixed(1) + "B";
            }
            return label;
        },

        // get cluster center
        _getClusterCenter: function (graphics) {
            var me, xSum, ySum, count, sum, cPt;

            me = this;
            xSum = 0;
            ySum = 0;
            count = 0;
            //count = graphics.length;
            array.forEach(graphics, function (graphic) {
                sum = 1;
                if (me.countField) {
                    sum = graphic.attributes[me.countField];
                }
                xSum += graphic.geometry.x * sum;
                ySum += graphic.geometry.y * sum;
                count += sum;
            }, this);
            cPt = new Point(xSum / count, ySum / count, graphics[0].geometry.spatialReference);
            return cPt;
        },


        // handle click
        _handleClick: function (evt) {
            var gra, attr;

            gra = evt.graphic;
            attr = gra.attributes;
            if (!attr.child) {
                this._hideFlare();
                this._flared = attr.id;
                if (attr.data.length > 1) {
                    //ext = graphicsUtils.graphicsExtent(attr.data);
                    //this._map.setExtent(ext.expand(1.8));
                    this._renderClusters();
                }
            }
        },

        // hide flare
        _hideFlare: function () {
            this._flared = null;
            this._renderClusters();
        }

    });

    return clusterLayer;

});
