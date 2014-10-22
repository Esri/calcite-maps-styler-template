/*global define,document */
/*jslint sloppy:true,nomen:true */
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
define(["dojo/_base/declare", "dojo/_base/Color", "dojo/parser", "dojo/has", "dojo/query", "dijit/registry", "dojo/window", "dojo/promise/all", "dojo/_base/lang", "esri/arcgis/utils", "dojo/dom", "dojo/dom-construct", "dojo/dom-style", "dojo/dom-class", "dojo/on", "esri/dijit/Legend", "esri/dijit/HomeButton", "esri/lang", "dojo/domReady!"], function (
declare, Color, parser, has, query, registry, win, all, lang, arcgisUtils, dom, domConstruct, domStyle, domClass, on, Legend, HomeButton, esriLang) {
    return declare(null, {
        config: {},
        mapInfo: [],
        panels: [],
        startup: function (config) {
            parser.parse();
            if (config) {
                this.config = config;
                //get the default panel content from the config
                this._updatePanelContent(this.config, registry.byId("detailContent"));

                //Configured apps will have web map as an array. 
                if(lang.isArray(this.config.webmap)){
                    this.config.webmaps = this.config.webmap;
                }else{
                    this.config.webmaps.push(this.config.webmap);
                }

                this._createGrid();

            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }
            on(window, "resize", lang.hitch(this, this._resizeMap));
        },
        reportError: function (error) {
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
            domClass.add(document.body, "app-error");

            var node = dom.byId("loading_message");
            if (node) {
                if (this.config && this.config.i18n) {
                    node.innerHTML = this.config.i18n.map.error + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to create map: " + error.message;
                }
            }
        },
        _createGrid: function () {
            var row = null,
                promiseList = [],
                cell = null;

            for (var i = 0; i < this.config.webmaps.length; i++) {
                if (this.config.webmaps.length == 1) {
                    //if only one map fill up the page 
                    row = this._createRow();
                    cell = this._createCell(2, 2, row, i);
                }
                else if (this.config.webmaps.length % 3 === 0) {
                    //multiples of three  so show in rows of three 
                    if (i % 3 === 0) { //create a new row for all even values
                        row = this._createRow();
                    }
                    //Create a cell for each map and size to fit the number of rows
                    cell = this._createCell(1, 3, row, i);

                }
                else {
                    //not a multiple of three so let's just show in rows of two 
                    if (i % 2 === 0) { //create a new row for all even values 
                        row = this._createRow();
                    }
                    cell = this._createCell(1, 2, row, i);
                }

                var def = arcgisUtils.createMap(this.config.webmaps[i], cell.id, {
                    usePopupManager: true,
                    editable: this.config.editable,
                    bingMapsKey: this.config.bingKey
                });
                promiseList.push(def);
            }


            all(promiseList).then(lang.hitch(this, function (results) {
                for (i = 0; i < results.length; i++) {
                    if (results[i] && results[i].map) {
                        var result = results[i];
                        this.mapInfo.push(result);

                        //Enable the home extent button if configured
                        if (this.config.home) {
                            var id = "#map_" + i + " .esriSimpleSliderIncrementButton";
                            var home = new HomeButton({
                                map: result.map
                            }, domConstruct.create("div", {}, query(id)[0], "after"));
                            home.startup();
                        }
                        //Create an info icon for each map 
                        //when clicked this will show legend and 
                        //map details in left pane
                        var info = domConstruct.create("span", {
                            "class": "icon-info fg",
                            "title": this.config.i18n.tools.info.tooltip,
                            "click": lang.hitch(this, this._displayContent, result)
                        }, result.map.id);

                        //Create a sync button for each map
                        //when clicked it will sync other maps to that extent. 
                        //if only one map don't enable
                        if (results && results.length > 1) {
                            var sync = domConstruct.create("span", {
                                "class": "icon-sync fg",
                                "title": this.config.i18n.tools.sync.tooltip,
                                "click": lang.hitch(this, this._syncMaps, result.map)
                            }, result.map.id);
                        }


                    }
                }

                //update theme
                this._updateTheme();
            }));

            //remove after all maps have loaded. 
            domClass.remove(document.body, "app-loading");
        },
        _createCell: function (count, cols, row, i) {
            //Create a cell for each map and size to fit the number of rows
            var cell = domConstruct.create("div", {
                "class": "col span_" + count + "_of_" + cols,
                //2 or 3
                "id": "map_" + i,
                "style": "height: " + win.getBox().h / Math.ceil(this.config.webmaps.length / cols) + "px;"
            }, row);
            return cell;
        },
        _createRow: function () {
            var row = domConstruct.create("div", {
                "class": "section group",
            }, "container");
            return row;
        },
        _syncMaps: function (extent_map) {
            for (var i = 0; i < this.mapInfo.length; i++) {
                var map = this.mapInfo[i].map;
                if (map.id !== extent_map.id) {
                    map.setExtent(extent_map.extent);
                }
            }
        },
        _displayContent: function (selected, evt) {

            //remove the selected class from all the icons then 
            //add to current one. 
            var sel = domClass.contains(evt.target, "icon-selected");
            var pane = registry.byId("detailContent");
            query(".icon-info").forEach(function (node) {
                domClass.remove(node, "icon-selected");
            });

            if (!sel) { //Toggle the selection capability 
                domClass.add(evt.target, "icon-selected");
            } else {
                this._updatePanelContent(this.config, pane);
                return;
            }


            if (typeof(this.panels[selected.map.id]) !== "undefined") {
                //rehydrate the existing content
                var content = this.panels[selected.map.id];
                pane.set("content", content);
                var title = "";
                query(".panel_title").forEach(function (node) {
                    title = node.innerHTML;
                });
                registry.byId("expandoPane").set("title", title);

            } else {
                //build the content and save. 
                selected.itemInfo.item.legendId = "legend_" + selected.map.id;
                this._updatePanelContent(selected.itemInfo.item, pane);

                var legendLayers = arcgisUtils.getLegendLayers(selected);

                if (legendLayers && legendLayers.length > 0) {
                    var legend = new Legend({
                        map: selected.map,
                        layerInfos: arcgisUtils.getLegendLayers(selected)
                    }, selected.itemInfo.item.legendId);
                    legend.startup();
                }
                this.panels[selected.map.id] = pane.get("content");
            }
        },
        setColor: function (value) {
            var colorValue = null;
            var rgb = Color.fromHex(value).toRgb();

            if (has("ie") == 8) {
                colorValue = value;
            } else {
                rgb.push(0.9);
                colorValue = Color.fromArray(rgb);
            }
            return colorValue;

        },
        _updateTheme: function () {
            var bgcolor = this.setColor(this.config.theme_bg_color);
            var color = this.setColor(this.config.theme_color);


            query(".bg").style("backgroundColor", bgcolor.toString());
            query(".fg").style("color", bgcolor.toString()); //icon color
            query(".dojoxExpandoIcon").style("color", color.toString()); //hamburger menu
            query(".dojoxExpandoTitleNode").style("color", color.toString()); //title 
        },
        _updatePanelContent: function (details, pane) {
            registry.byId("expandoPane").set("title", details.title);
            //details is an object with a title and description
            var template = "<div class='panel_title'>${title}</div><div class='panel_desc'>${description}</div><div id=${legendId}></div>";
            var content = esriLang.substitute(details, template);
            pane.set("content", content);
        },
        _resizeMap: function () {
            if (this.mapInfo && this.mapInfo.length === 0) {
                return;
            }
            var mapHFactor = (this.config.webmaps.length % 3 === 0) ? 3 : 2;
            for (var i = 0; i < this.mapInfo.length; i++) {
                var map = this.mapInfo[i].map;
                domStyle.set(map.id, {
                    height: win.getBox().h / Math.ceil(this.config.webmaps.length / mapHFactor) + "px"
                });
                map.resize();
                map.reposition();
            }
        }
    });
});
