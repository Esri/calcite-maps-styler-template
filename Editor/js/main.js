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
define(["dojo/_base/declare", "dojo/has", "dojo/_base/lang", "dojo/_base/Color", "dojo/_base/array", "dojo/on", "dijit/registry", "esri/arcgis/utils", "esri/lang", "dojo/dom", "dojo/dom-attr", "dojo/dom-style", "dojo/query", "dojo/dom-construct", "dojo/dom-class", "application/Drawer", "esri/layers/FeatureLayer", "esri/dijit/editing/Editor", "esri/dijit/AttributeInspector", "esri/dijit/editing/TemplatePicker", "esri/tasks/query", "esri/domUtils", "application/SearchSources", "dojo/domReady!"], function (
declare, has, lang, Color, array, on, registry, arcgisUtils, esriLang, dom, domAttr, domStyle, query, domConstruct, domClass, Drawer, FeatureLayer, Editor, AttributeInspector, TemplatePicker, esriQuery, domUtils, SearchSources) {
    return declare(null, {
        config: {},
        editor: null,
        editable: false,
        editableLayers: [],
        timeFormats: ["shortDateShortTime", "shortDateLEShortTime", "shortDateShortTime24", "shortDateLEShortTime24", "shortDateLongTime", "shortDateLELongTime", "shortDateLongTime24", "shortDateLELongTime24"],
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;

                this.config.color = this._setColor(this.config.color);
                this.config.theme = this._setColor(this.config.theme);

                // responsive drawer
                this._drawer = new Drawer({
                    // Pixel size when the drawer is automatically opened
                    borderContainer: "border_container",
                    // border container node id
                    contentPaneCenter: "cp_center",
                    // center content pane node id
                    contentPaneSide: "cp_left",
                    // side content pane id
                    toggleButton: "toggle_button",
                    // button node to toggle drawer id
                    config: this.config,
                    direction: this.config.i18n.direction // i18n direction "ltr" or "rtl"
                });

                // startup drawer
                this._drawer.startup();



                //supply either the webmap id or, if available, the item info
                var itemInfo = this.config.itemInfo || this.config.webmap;
                this._createWebMap(itemInfo);
            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }
        },
        reportError: function (error) {
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
            domClass.add(document.body, "app-error");
            // an error occurred - notify the user. In this example we pull the string from the
            // resource.js file located in the nls folder because we've set the application up
            // for localization. If you don't need to support multiple languages you can hardcode the
            // strings here and comment out the call in index.html to get the localization strings.
            // set message
            var node = dom.byId("loading_message");
            if (node) {
                if (this.config && this.config.i18n) {
                    node.innerHTML = this.config.i18n.map.error + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to create map: " + error.message;
                }
            }

        },
        _addMapWidgets: function () {
            if (this.config.scale) {
                require(["esri/dijit/Scalebar"], lang.hitch(this, function (Scalebar) {
                    var scalebar = new Scalebar({
                        map: this.map,
                        scalebarUnit: this.config.units
                    });
                }));
            }
            if (this.config.home) {
                require(["esri/dijit/HomeButton"], lang.hitch(this, function (HomeButton) {
                    if (!HomeButton) {
                        return;
                    }
                    var home = new HomeButton({
                        map: this.map
                    }, domConstruct.create("div", {}, query(".esriSimpleSliderIncrementButton")[0], "after"));
                    home.startup();

                }));
            }

            //add the location button if enabled.
            if (this.config.locate) {
                require(["esri/dijit/LocateButton"], lang.hitch(this, function (LocateButton) {
                    if (!LocateButton) {
                        return;
                    }
                    //add the location button as a child of the map div. 
                    var locateDiv = domConstruct.create("div", {
                        id: "locateDiv"
                    }, "mapDiv");
                    var locationButton = new LocateButton({
                        map: this.map,
                        useTracking: this.config.locatetrack
                    }, locateDiv);
                    locationButton.startup();
                }));
            }

            //add the basemap toggle if enabled. 
            if (this.config.basemap) {
                require(["esri/dijit/BasemapToggle", "esri/basemaps"], lang.hitch(this, function (BasemapToggle, basemaps) {
                    if (!BasemapToggle && basemaps) {
                        return;
                    }

                    var toggle_container = domConstruct.create("div", {}, "mapDiv"); /*Remove at JSAPI 4.0*/
                    var bmLayers = [],
                        mapLayers = this.map.getLayersVisibleAtScale(this.map.getScale());
                    if (mapLayers) {
                        for (var i = 0; i < mapLayers.length; i++) {
                            if (mapLayers[i]._basemapGalleryLayerType) {
                                var bmLayer = this.map.getLayer(mapLayers[i].id);
                                if (bmLayer) {
                                    bmLayers.push(bmLayer);
                                }
                            }
                        }
                    }
                    on.once(this.map, "basemap-change", lang.hitch(this, function () {
                        if (bmLayers && bmLayers.length) {
                            for (var j = 0; j < bmLayers.length; j++) {
                                bmLayers[j].setVisibility(false);
                            }
                        }
                    })); /*End Remove*/

                    var toggle = new BasemapToggle({
                        map: this.map,
                        basemap: this.config.alt_basemap || "satellite"
                    }, toggle_container);
                    if (this.config.response && this.config.response.itemInfo && this.config.response.itemInfo.itemData && this.config.response.itemInfo.itemData.baseMap) {
                        var b = this.config.response.itemInfo.itemData.baseMap;
                        if (b.title === "World Dark Gray Base") {
                            b.title = "Dark Gray Canvas";
                        }
                        if (b.title) {
                            for (var i in basemaps) {
                                //use this to handle translated titles
                                if (b.title === this._getBasemapName(i)) {
                                    toggle.defaultBasemap = i;
                                    //remove at 4.0
                                    if (i === "dark-gray") {
                                        if (this.map.layerIds && this.map.layerIds.length > 0) {
                                            this.map.basemapLayerIds = this.map.layerIds.slice(0);
                                            this.map._basemap = "dark-gray";
                                        }
                                    }
                                    //end remove at 4.0
                                    this.map.setBasemap(i);
                                }
                            }
                        }
                    }
                    toggle.startup();
                }));
            }

            //Add the location search widget
            if (this.config.search) {

                require(["esri/dijit/Search", "esri/tasks/locator", "esri/lang"], lang.hitch(this, function (Search, Locator, esriLang) {
                    if (!Search && !Locator) {
                        return;
                    }

                    var searchOptions = {
                        map: this.map,
                        useMapExtent: this.config.searchExtent,
                        itemData: this.config.response.itemInfo.itemData
                    };

                    if (this.config.searchConfig) {
                        searchOptions.applicationConfiguredSources = this.config.searchConfig.sources || [];
                    } else if (this.config.searchLayers) {
                        var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);
                        searchOptions.configuredSearchLayers = configuredSearchLayers;
                        searchOptions.geocoders = this.config.locationSearch ? this.config.helperServices.geocode : [];
                    }
                    var searchSources = new SearchSources(searchOptions);
                    var createdOptions = searchSources.createOptions();
                    if (this.config.searchConfig && this.config.searchConfig.activeSourceIndex) {
                        createdOptions.activeSourceIndex = this.config.searchConfig.activeSourceIndex;
                    }
                    createdOptions.enableButtonMode = true;
                    createdOptions.expanded = false;


                    var search = new Search(createdOptions, domConstruct.create("div", {
                        id: "search"
                    }, "mapDiv"));


                    search.on("select-result", lang.hitch(this, function () {
                        //if edit tool is enabled we'll have to delete/create 
                        //so info window behaves correctly. 
                        on.once(this.map.infoWindow, "hide", lang.hitch(this, function () {
                            search.clearGraphics();
                            if (this.editor) {
                                this._destroyEditor();
                                this._createEditor();
                            }
                        }));

                    }));

                    search.startup();

                }));
            }
            this._updateTheme();

        },
        // create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            itemInfo = this._setExtent(itemInfo);
            var mapOptions = {};
            mapOptions = this._setLevel(mapOptions);
            mapOptions = this._setCenter(mapOptions);

            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: mapOptions,
                usePopupManager: true,
                editable: this.config.editable,
                layerMixins: this.config.layerMixins || [],
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {
                // Once the map is created we get access to the response which provides important info
                // such as the map, operational layers, popup info and more. This object will also contain
                // any custom options you defined for the template.
                this.map = response.map;
                this.config.response = response;
                domClass.add(this.map.infoWindow.domNode, "light");
                this.map.setInfoWindowOnClick(false);
                //set the title 
                var title = this.config.title || this.config.response.itemInfo.item.title;
                document.title = title;
                dom.byId("title").innerHTML = title;


                //do we have any editable layers? 
                this.editableLayers = this._getEditableLayers(response.itemInfo.itemData.operationalLayers);
                if (this.editableLayers.length > 0) {
                    this.editable = true;
                    if (esriLang.isDefined(this.config.userPrivileges)) {
                        if (array.indexOf(this.config.userPrivileges, "features:user:edit") === -1) {
                            this.editable = false;
                        }
                    }

                    this._createEditor();
                } else {
                    //add note that map doesn't contain editable layers 
                    registry.byId("cp_left").set("content", "<div style='padding:5px;'>" + this.config.i18n.map.noEditLayers + "</div>");
                }


                // remove loading class from body
                domClass.remove(document.body, "app-loading");
                this._addMapWidgets();

                // If you need map to be loaded, listen for it's load event.
            }), this.reportError);
        },
        _createEditor: function () {
            if (this.editable) {
                //add class we have a toolbar 
                if (this.config.edittoolbar) {
                    domClass.add(document.body, "edit-toolbar");
                }


                var settings = {
                    map: this.map,
                    layerInfos: this.editableLayers,
                    toolbarVisible: this.config.edittoolbar
                };
                this.editor = new Editor({
                    settings: settings
                }, domConstruct.create("div"));
                domConstruct.place(this.editor.domNode, dom.byId("editorDiv"));

                this.editor.startup();

                this._drawer.resize();
            }
        },
        _destroyEditor: function () {
            if (this.editor) {
                this.editor.destroy();
                this.editor = null;
            }
        },
        _getEditableLayers: function (layers) {
            var editableLayers = [];
            array.forEach(layers, lang.hitch(this, function (layer) {
                if (layer && layer.layerObject) {
                    var eLayer = layer.layerObject;
                    if (eLayer instanceof FeatureLayer && eLayer.isEditable()) {
                        editableLayers.push({
                            "featureLayer": eLayer
                        });
                    }
                }
            }));

            array.forEach(editableLayers, lang.hitch(this, function (hintLayer) {

                if (hintLayer.featureLayer && hintLayer.featureLayer.infoTemplate && hintLayer.featureLayer.infoTemplate.info && hintLayer.featureLayer.infoTemplate.info.fieldInfos) {
                    //only display visible fields 
                    var fields = hintLayer.featureLayer.infoTemplate.info.fieldInfos;

                    var fieldInfos = [];
                    array.forEach(fields, function (field) {

                        //add date support
                        if (field.format && field.format.dateFormat && array.indexOf(this.timeFormats, field.format.dateFormat) > -1) {
                            field.format = {
                                time: true
                            };
                        }
                        if (field.visible) {
                            fieldInfos.push(field);
                        }
                    });
                    hintLayer.fieldInfos = fieldInfos;
                }
            }));

            return editableLayers;
        },
        _updateTheme: function () {
            //Set the background color using the configured theme value
            query(".bg").style("backgroundColor", this.config.theme.toString());
            query(".esriPopup .pointer").style("backgroundColor", this.config.theme.toString());
            query(".esriPopup .titlePane").style("backgroundColor", this.config.theme.toString());


            //Set the font color using the configured color value
            query(".fc").style("color", this.config.color.toString());
            query(".esriPopup .titlePane").style("color", this.config.color.toString());
            query(".esriPopup. .titleButton").style("color", this.config.color.toString());


            //Set the Slider +/- color to match the icon style. Valid values are white and black
            // White is default so we just need to update if using black.
            //Also update the menu icon to match the tool color. Default is white.
            if (this.config.icons === "black") {
                query(".esriSimpleSlider").style("color", "#000");
                query(".icon-color").style("color", "#000");
            }
        },
        _setColor: function (color) {
            var rgb = Color.fromHex(color).toRgb();
            var outputColor = null;
            if (has("ie") < 9) {
                outputColor = color;
            } else {
                //rgba supported so add
                rgb.push(0.9);
                outputColor = Color.fromArray(rgb);

            }
            return outputColor;
        },

        _getBasemapName: function (name) {
            var current = null;
            switch (name) {
            case "dark-gray":
                current = "Dark Gray Canvas";
                break;
            case "gray":
                current = "Light Gray Canvas";
                break;
            case "hybrid":
                current = "Imagery with Labels";
                break;
            case "national-geographic":
                current = "National Geographic";
                break;
            case "oceans":
                current = "Oceans";
                break;
            case "osm":
                current = "OpenStreetMap";
                break;
            case "satellite":
                current = "Imagery";
                break;
            case "streets":
                current = "Streets";
                break;
            case "terrain":
                current = "Terrain with Labels";
                break;
            case "topo":
                current = "Topographic";
                break;
            }
            return current;
        },

        _setLevel: function (options) {
            var level = this.config.level;
            //specify center and zoom if provided as url params 
            if (level) {
                options.zoom = level;
            }
            return options;
        },

        _setCenter: function (options) {
            var center = this.config.center;
            if (center) {
                var points = center.split(",");
                if (points && points.length === 2) {
                    options.center = [parseFloat(points[0]), parseFloat(points[1])];
                }
            }
            return options;
        },

        _setExtent: function (info) {
            var e = this.config.extent;
            //If a custom extent is set as a url parameter handle that before creating the map
            if (e) {
                var extArray = e.split(",");
                var extLength = extArray.length;
                if (extLength === 4) {
                    info.item.extent = [
                        [parseFloat(extArray[0]), parseFloat(extArray[1])],
                        [parseFloat(extArray[2]), parseFloat(extArray[3])]
                    ];
                }
            }
            return info;
        }
    });
});
