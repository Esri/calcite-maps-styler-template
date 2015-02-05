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
define(["dojo/_base/declare", "dojo/has", "dojo/_base/lang", "dojo/_base/Color", "dojo/_base/array", "dojo/on", "dijit/registry", "esri/arcgis/utils", "esri/lang", "dojo/dom", "dojo/dom-attr","dojo/dom-style", "dojo/query", "dojo/dom-construct", "dojo/dom-class", "application/Drawer", "esri/layers/FeatureLayer", "esri/dijit/editing/Editor", "esri/dijit/AttributeInspector", "esri/dijit/editing/TemplatePicker", "esri/tasks/query", "esri/domUtils", "dojo/domReady!"], function (
declare, has, lang, Color, array, on, registry, arcgisUtils, esriLang, dom, domAttr, domStyle, query, domConstruct, domClass, Drawer, FeatureLayer, Editor, AttributeInspector, TemplatePicker, esriQuery, domUtils) {
    return declare(null, {
        config: {},
        editor: null,
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
                if (!LocateButton) {
                    return;
                }
                require(["esri/dijit/LocateButton"], lang.hitch(this, function (LocateButton) {
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
                    on.once(this.map, 'basemap-change', lang.hitch(this, function () {
                        if (bmLayers && bmLayers.length) {
                            for (var i = 0; i < bmLayers.length; i++) {
                                bmLayers[i].setVisibility(false);
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
                    var options = {
                        map: this.map,
                        enableButtonMode: true,
                        expanded: false,
                        addLayersFromMap: false
                    };
                var searchLayers = false;
                var search = new Search(options, domConstruct.create("div", {
                    id: "search"
                }, "mapDiv"));
                var defaultSources = [];

                //setup geocoders defined in common config 
                if (this.config.helperServices.geocode && this.config.locationSearch) {
                    var geocoders = lang.clone(this.config.helperServices.geocode);
                    array.forEach(geocoders, lang.hitch(this, function (geocoder) {
                        if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {

                            geocoder.hasEsri = true;
                            geocoder.locator = new Locator(geocoder.url);

                            geocoder.singleLineFieldName = "SingleLine";

                            geocoder.name = geocoder.name || "Esri World Geocoder";

                            if (this.config.searchExtent) {
                                geocoder.searchExtent = this.map.extent;
                                geocoder.localSearchOptions = {
                                    minScale: 300000,
                                    distance: 50000
                                };
                            }
                            defaultSources.push(geocoder);
                        } else if (esriLang.isDefined(geocoder.singleLineFieldName)) {

                            //Add geocoders with a singleLineFieldName defined 
                            geocoder.locator = new Locator(geocoder.url);

                            defaultSources.push(geocoder);
                        }
                    }));
                }
                //add configured search layers to the search widget 
                var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);

                array.forEach(configuredSearchLayers, lang.hitch(this, function (layer) {
                  
                    var mapLayer = this.map.getLayer(layer.id);
                    if (mapLayer) {
                        var source = {};
                        source.featureLayer = mapLayer;

                        if (layer.fields && layer.fields.length && layer.fields.length > 0) {
                            source.searchFields = layer.fields;
                            searchLayers = true;
                            defaultSources.push(source);
                        }
                    }
                }));
                //Add search layers defined on the web map item 
                if (this.config.response.itemInfo.itemData && this.config.response.itemInfo.itemData.applicationProperties && this.config.response.itemInfo.itemData.applicationProperties.viewing && this.config.response.itemInfo.itemData.applicationProperties.viewing.search) {
                    var searchOptions = this.config.response.itemInfo.itemData.applicationProperties.viewing.search;
                
                    array.forEach(searchOptions.layers, lang.hitch(this, function (searchLayer) {
                        //we do this so we can get the title specified in the item
                        var operationalLayers = this.config.itemInfo.itemData.operationalLayers;
                        var layer = null;
                        array.some(operationalLayers, function (opLayer) {
                            if (opLayer.id === searchLayer.id) {
                                layer = opLayer;
                                return true;
                            }
                        });

                        if (layer && layer.url) {
                            var source = {};
                            var url = layer.url;

                            if (esriLang.isDefined(searchLayer.subLayer)) {
                                url = url + "/" + searchLayer.subLayer;
                                array.some(layer.layerObject.layerInfos, function (info) {
                                    if (info.id == searchLayer.subLayer) {
                                        name += " - " + layer.layerObject.layerInfos[searchLayer.subLayer].name;
                                        return true;
                                    }

                                });
                            }

                            source.featureLayer = new FeatureLayer(url);


                            source.name = layer.title || layer.name;

                            source.exactMatch = searchLayer.field.exactMatch;
                            source.searchField = [searchLayer.field.name];
                            source.placeholder = searchOptions.hintText;
                            defaultSources.push(source);
                            searchLayers = true;
                        }

                    }));
                }




                search.set("sources", defaultSources);
                //set the first non esri layer as active if search layers are defined. 
                var activeIndex = 0;
                if (searchLayers) {
                    array.some(defaultSources, function (s, index) {
                        if (!s.hasEsri) {
                            activeIndex = index;
                            return true;
                        }
                    });

                    if (activeIndex > 0) {
                        search.set("activeSourceIndex", activeIndex);
                    }
                }


                search.startup();
                }));
            }
            this._updateTheme();

        },
        // create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {
                    // Optionally define additional map config here for example you can
                    // turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                usePopupManager: true,
                editable: this.config.editable,
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {
                // Once the map is created we get access to the response which provides important info
                // such as the map, operational layers, popup info and more. This object will also contain
                // any custom options you defined for the template.
                this.map = response.map;
                this.config.response = response;
                domClass.add(this.map.infoWindow.domNode, "light");
                //set the title 
                var title = this.config.title || this.config.response.itemInfo.item.title;
                document.title = title;
                dom.byId("title").innerHTML = title;


                //do we have any editable layers? 
                var editableLayers = this._getEditableLayers(response.itemInfo.itemData.operationalLayers);
                if (editableLayers.length > 0) {
                    var editable = true;
                    if (esriLang.isDefined(this.config.userPrivileges)) {
                        if (array.indexOf(this.config.userPrivileges, "features:user:edit") === -1) {
                            editable = false;
                        }
                    }

                    if (editable) {
                        //add class we have a toolbar 
                        if (this.config.edittoolbar) {
                            domClass.add(document.body, "edit-toolbar");
                        }


                        var settings = {
                            map: this.map,
                            layerInfos: editableLayers,
                            toolbarVisible: this.config.edittoolbar
                        };
                        this.editor = new Editor({
                            settings: settings
                        }, dom.byId("editorDiv"));


                        this.editor.startup();
                        console.log(this.editor);
                        this._drawer.resize();

                    }
                }else{
                    //add note that map doesn't contain editable layers 
                    registry.byId("cp_left").set("content", "<div style='padding:5px;'>" + this.config.i18n.map.noEditLayers + "</div>");
                }


                // remove loading class from body
                domClass.remove(document.body, "app-loading");
                this._addMapWidgets();

                // If you need map to be loaded, listen for it's load event.
            }), this.reportError);
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
    });
});
