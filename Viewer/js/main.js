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
define(["dojo/ready", "dojo/json", "dojo/_base/array", "dojo/_base/Color", "dojo/_base/declare", "dojo/_base/lang", "dojo/dom", "dojo/dom-attr", "dojo/dom-class", "dojo/dom-construct", "dojo/dom-style", "dojo/on", "dojo/Deferred", "dojo/promise/all", "dojo/query", "dijit/registry", "dijit/Menu", "dijit/CheckedMenuItem", "application/toolbar", "application/has-config", "esri/arcgis/utils", "esri/dijit/HomeButton", "esri/dijit/LocateButton", "esri/dijit/Legend", "esri/dijit/BasemapGallery", "esri/dijit/Measurement", "esri/dijit/OverviewMap", "esri/geometry/Extent", "esri/layers/FeatureLayer"], function (
ready, JSON, array, Color, declare, lang, dom, domAttr, domClass, domConstruct, domStyle, on, Deferred, all, query, registry, Menu, CheckedMenuItem, Toolbar, has, arcgisUtils, HomeButton, LocateButton, Legend, BasemapGallery, Measurement, OverviewMap, Extent, FeatureLayer) {


    return declare(null, {
        config: {},
        color: null,
        theme: null,
        map: null,
        initExt: null,
        mapExt: null,

        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id and any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                this.color = this.setColor(this.config.color);
                this.theme = this.setColor(this.config.theme);
                // document ready   
                ready(lang.hitch(this, function () {
                    //supply either the webmap id or, if available, the item info
                    var itemInfo = this.config.itemInfo || this.config.webmap;
                    //If a custom extent is set as a url parameter handle that before creating the map 
                    if (this.config.extent) {
                        var extArray = decodeURIComponent(this.config.extent).split(",");

                        if (extArray.length === 4) {
                            itemInfo.item.extent = [
                                [parseFloat(extArray[0]), parseFloat(extArray[1])],
                                [parseFloat(extArray[2]), parseFloat(extArray[3])]
                            ];
                        } else if (extArray.length === 5) {
                            this.initExt = new Extent(JSON.parse(this.config.extent));

                        }
                    }
                    this._createWebMap(itemInfo);


                }));
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

        setColor: function (color) {
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

        // Map is ready
        _mapLoaded: function () {
            query(".esriSimpleSlider").style("backgroundColor", this.theme.toString());
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
        },

        // Create UI
        _createUI: function () {

            //Add tools to the toolbar. The tools are listed in the defaults.js file 
            var toolbar = new Toolbar(this.config);
            toolbar.startup().then(lang.hitch(this, function () {

                // set map so that it can be repositioned when page is scrolled
                toolbar.map = this.map;

                var toolList = [];
                for (var i = 0; i < this.config.tools.length; i++) {
                    switch (this.config.tools[i].name) {
                    case "legend":
                        toolList.push(this._addLegend(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "bookmarks":
                        toolList.push(this._addBookmarks(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "layers":
                        toolList.push(this._addLayers(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "basemap":
                        toolList.push(this._addBasemapGallery(this.config.tools[i], toolbar, "large"));
                        break;
                    case "overview":
                        toolList.push(this._addOverviewMap(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "measure":
                        toolList.push(this._addMeasure(this.config.tools[i], toolbar, "small"));
                        break;
                    case "edit":
                        toolList.push(this._addEditor(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "print":
                        toolList.push(this._addPrint(this.config.tools[i], toolbar, "small"));
                        break;
                    case "details":
                        toolList.push(this._addDetails(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "share":
                        toolList.push(this._addShare(this.config.tools[i], toolbar, "medium"));
                        break;
                    default:
                        break;
                    }
                }

                all(toolList).then(lang.hitch(this, function (results) {
                    //If all the results are undefined and locate and home are also false we can hide the toolbar
                    var tools = array.every(results, function (r) {
                        return r === undefined;
                    });
                    var home = has("home");
                    var locate = has("locate");

                    //No tools are specified in the configuration so hide the panel and update the title area styles 
                    if (tools && !home && !locate) {
                        domConstruct.destroy("panelTools");
                        domStyle.set("panelContent", "display", "none");
                        domStyle.set("panelTitle", "border-bottom", "none");
                        domStyle.set("panelTop", "height", "52px");
                        this._updateTheme();
                        return;
                    }

                    //Now that all the tools have been added to the toolbar we can add page naviagation
                    //to the toolbar panel, update the color theme and set the active tool. 
                    this._updateTheme();
                    toolbar.updatePageNavigation();
                    toolbar.activateTool(this.config.activeTool);
                    on(toolbar, "updateTool", lang.hitch(this, function (name) {
                        var activate = (name === "measure" || name === "edit") ? false : true;
                        this.map.setInfoWindowOnClick(activate);
                    }));



                }));
            }));
        },
        _addBasemapGallery: function (tool, toolbar, panelClass) {
            //Add the basemap gallery to the toolbar. 
            var deferred = new Deferred();
            if (has("basemap")) {
                var basemapDiv = toolbar.createTool(tool, panelClass);
                var basemap = new BasemapGallery({
                    id: "basemapGallery",
                    map: this.map,
                    showArcGISBasemaps: true,
                    portalUrl: this.config.sharinghost,
                    basemapGroup: this._getBasemapGroup()
                }, domConstruct.create("div", {}, basemapDiv));
                basemap.startup();
            }
            deferred.resolve();
            return deferred.promise;
        },

        _addBookmarks: function (tool, toolbar, panelClass) {
            //Add the bookmarks tool to the toolbar. Only activated if the webmap contains bookmarks. 
            var deferred = new Deferred();
            if (this.config.response.itemInfo.itemData.bookmarks) {
                //Conditionally load this module since most apps won't have bookmarks
                require(["application/has-config!bookmarks?esri/dijit/Bookmarks"], lang.hitch(this, function (Bookmarks) {
                    if (!Bookmarks) {
                        deferred.resolve();
                        return;
                    }
                    var bookmarkDiv = toolbar.createTool(tool, panelClass);
                    var bookmarks = new Bookmarks({
                        map: this.map,
                        bookmarks: this.config.response.itemInfo.itemData.bookmarks
                    }, bookmarkDiv);

                    deferred.resolve();

                }));

            } else {
                deferred.resolve();
            }

            return deferred.promise;
        },
        _addDetails: function (tool, toolbar, panelClass) {
            //Add the default map description panel 
            var deferred = new Deferred();
            if (has("details")) {
                var description = this.config.description || this.config.response.itemInfo.item.description || this.config.response.itemInfo.item.snippet;
                if (description) {
                    var descLength = description.length;
                    //Change the panel class based on the string length
                    if (descLength < 200) {
                        panelClass = "small";
                    } else if (descLength < 400) {
                        panelClass = "medium";
                    } else {
                        panelClass = "large";
                    }

                    var detailDiv = toolbar.createTool(tool, panelClass);
                    detailDiv.innerHTML = description;
                }
            }
            deferred.resolve();
            return deferred.promise;

        },
        _addEditor: function (tool, toolbar, panelClass) {

            //Add the editor widget to the toolbar if the web map contains editable layers 
            var deferred = new Deferred();
            var layers = this._getEditableLayers(this.config.response.itemInfo.itemData.operationalLayers);
            if (layers.length > 0) {

                require(["application/has-config!edit?esri/dijit/editing/Editor"], lang.hitch(this, function (Editor) {
                    if (!Editor) {
                        deferred.resolve();
                        return;
                    }
                    var editorDiv = toolbar.createTool(tool, panelClass);

                    //add field infos if necessary. Field infos will contain hints if defined in the popup and hide fields where visible is set
                    //to false. The popup logic takes care of this for the info window but not the edit window. 
                    array.forEach(layers, lang.hitch(this, function (layer) {
                        if (layer.featureLayer && layer.featureLayer.infoTemplate && layer.featureLayer.infoTemplate.info && layer.featureLayer.infoTemplate.info.fieldInfos) {
                            //only display visible fields 
                            var fields = layer.featureLayer.infoTemplate.info.fieldInfos;
                            var fieldInfos = [];
                            array.forEach(fields, function (field) {
                                if (field.visible) {
                                    fieldInfos.push(field);
                                }
                            });
                            layer.fieldInfos = fieldInfos;
                        }
                    }));
                    var settings = {
                        map: this.map,
                        layerInfos: layers,
                        toolbarVisible: has("edit-toolbar")
                    };
                    var editor = new Editor({
                        settings: settings
                    }, editorDiv);


                    editor.startup();
                    deferred.resolve();

                }));

            } else {
                console.log("No Editable Layers");
                deferred.resolve();
            }
            return deferred.promise;
        },
        _addLayers: function (tool, toolbar, panelClass) {
            //Toggle layer visibility if web map has operational layers 
            var deferred = new Deferred();

            var layers = this.config.response.itemInfo.itemData.operationalLayers;

            if (layers.length === 0) {
                deferred.resolve();
            } else {
                if (has("layers")) {
                    //Build a menu to display the layers in the web map. 
                    var layerInfos = this._getVisibleLayers(layers);
                    if (layerInfos.length > 0) {
                        layerInfos.reverse();

                        //Use small panel class if layer layer is less than 5
                        if (layerInfos.length < 5) {
                            panelClass = "small";
                        } else if (layerInfos.length < 15) {
                            panelClass = "medium";
                        } else {
                            panelClass = "large";
                        }

                        var layersDiv = toolbar.createTool(tool, panelClass);
                        var menu = new Menu({
                            id: "layerMenu",
                            className: "layer-menu"
                        }, domConstruct.create("div", {}, layersDiv));
                        array.forEach(layerInfos, function (layer) {
                            menu.addChild(new CheckedMenuItem({
                                label: layer.title,
                                checked: layer.visible,
                                onChange: function () {

                                    if (layer.layer.featureCollection) {
                                        array.forEach(layer.layer.featureCollection.layers, function (layer) {
                                            layer.layerObject.setVisibility(!layer.layerObject.visible);
                                        });
                                    } else {
                                        layer.layer.setVisibility(!layer.layer.visible);
                                    }
                                }
                            }));

                        });

                    }
                    deferred.resolve();
                } else {
                    deferred.resolve();
                }
            }
            return deferred.promise;
        },
        _addLegend: function (tool, toolbar, panelClass) {
            //Add the legend tool to the toolbar. Only activated if the web map has operational layers. 
            var deferred = new Deferred();
            var layers = arcgisUtils.getLegendLayers(this.config.response);


            if (layers.length === 0) {
                deferred.resolve();
            } else {
                if (has("legend")) {
                    var legendLength = 0;
                    array.forEach(layers, lang.hitch(this, function (layer) {
                        if (layer.infos && layer.infos.length) {
                            legendLength += layer.infos.length;
                        }
                    }));

                    if (legendLength.length < 5) {
                        panelClass = "small";
                    } else if (legendLength.length < 15) {
                        panelClass = "medium";
                    } else {
                        panelClass = "large";
                    }

                    var legendDiv = toolbar.createTool(tool, panelClass);
                    var legend = new Legend({
                        map: this.map
                    }, domConstruct.create("div", {}, legendDiv));
                    domClass.add(legend.domNode, "legend");
                    legend.startup();
                    toolbar.activateTool(this.config.activeTool || "legend");

                }
                deferred.resolve();


            }
            return deferred.promise;
        },

        _addMeasure: function (tool, toolbar, panelClass) {
            //Add the measure widget to the toolbar.
            var deferred = new Deferred();
            if (has("measure")) {

                var measureDiv = toolbar.createTool(tool, panelClass);
                var areaUnit = (this.config.units === "metric") ? "esriSquareKilometers" : "esriSquareMiles";
                var lengthUnit = (this.config.units === "metric") ? "esriKilometers" : "esriMiles";

                var measure = new Measurement({
                    map: this.map,
                    defaultAreaLength: areaUnit,
                    defaultLengthUnit: lengthUnit
                }, domConstruct.create("div", {}, measureDiv));

                measure.startup();

            }
            deferred.resolve();


            return deferred.promise;
        },
        _addOverviewMap: function (tool, toolbar, panelClass) {
            //Add the overview map to the toolbar 
            var deferred = new Deferred();

            if (has("overview")) {
                var ovMapDiv = toolbar.createTool(tool, panelClass);


                domStyle.set(ovMapDiv, {
                    "height": "100%",
                    "width": "100%"
                });

                var panelHeight = this.map.height;
                if (panelClass === "small") {
                    panelHeight = 250;
                } else if (panelClass === "medium") {
                    panelHeight = 350;
                }

                var ovMap = new OverviewMap({
                    id: "overviewMap",
                    map: this.map,
                    height: panelHeight
                }, domConstruct.create("div", {}, ovMapDiv));

                ovMap.startup();

                on(this.map, "layer-add", lang.hitch(this, function (args) {
                    //delete and re-create the overview map if the basemap gallery changes  
                    if (args.layer.hasOwnProperty("_basemapGalleryLayerType") && args.layer._basemapGalleryLayerType === "basemap") {
                        registry.byId("overviewMap").destroy();
                        var ovMap = new OverviewMap({
                            id: "overviewMap",
                            map: this.map,
                            height: panelHeight,
                            visible: false
                        }, domConstruct.create("div", {}, ovMapDiv));

                        ovMap.startup();
                    }
                }));
            }
            deferred.resolve();

            return deferred.promise;
        },
        _addPrint: function (tool, toolbar, panelClass) {
            //Add the print widget to the toolbar. TODO: test custom layouts. 
            var deferred = new Deferred(),
                legendNode = null,
                print = null;


            require(["application/has-config!print?esri/dijit/Print"], lang.hitch(this, function (Print) {
                var layoutOptions = {
                    "titleText": this.config.title,
                    "scalebarUnit": this.config.units,
                    "legendLayers": []
                };
                if (!Print) {
                    deferred.resolve();
                    return;
                }

                var printDiv = toolbar.createTool(tool, panelClass);
                if (has("print-legend")) {
                    legendNode = domConstruct.create("input", {
                        id: "legend_ck",
                        className: "checkbox",
                        type: "checkbox",
                        checked: false
                    }, domConstruct.create("div", {
                        "class": "checkbox"
                    }));

                    var labelNode = domConstruct.create("label", {
                        "for": "legend_ck",
                        "className": "checkbox",
                        "innerHTML": "  " + this.config.i18n.tools.print.legend
                    }, domConstruct.create("div"));
                    domConstruct.place(legendNode, printDiv);
                    domConstruct.place(labelNode, printDiv);

                    on(legendNode, "change", lang.hitch(this, function (arg) {


                        if (legendNode.checked) {
                            var layers = arcgisUtils.getLegendLayers(this.config.response);
                            var legendLayers = array.map(layers, function (layer) {
                                return {
                                    "layerId": layer.layer.id
                                };
                            });
                            if (legendLayers.length > 0) {
                                layoutOptions.legendLayers = legendLayers;
                            }
                            array.forEach(print.templates, function (template) {
                                template.layoutOptions = layoutOptions;
                            });


                        } else {
                            array.forEach(print.templates, function (template) {
                                if (template.layoutOptions && template.layoutOptions.legendLayers) {
                                    template.layoutOptions.legendLayers = [];
                                }

                            });
                        }


                    }));
                }

                require(["application/has-config!print-layouts?esri/request", "application/has-config!print-layouts?esri/tasks/PrintTemplate"], lang.hitch(this, function (esriRequest, PrintTemplate) {
                    if (!esriRequest && !PrintTemplate) {
                        //Use the default print templates 
                        var templates = [{
                            layout: "Letter ANSI A Landscape",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label1,
                            format: "PDF"
                        },
                        {
                            layout: "Letter ANSI A Portrait",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label2,
                            format: "PDF"
                        },
                        {
                            layout: "Letter ANSI A Landscape",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label3,
                            format: "PNG32"
                        },
                        {
                            layout: "Letter ANSI A Portrait",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label4,
                            format: "PNG32"
                        }];



                        print = new Print({
                            map: this.map,
                            templates: templates,
                            url: this.config.helperServices.printTask.url
                        }, domConstruct.create("div")); //domConstruct.create("div",{}),printDiv); 
                        domConstruct.place(print.printDomNode, printDiv, "first");

                        print.startup();



                        deferred.resolve();
                        return;
                    }

                    esriRequest({
                        url: this.config.helperServices.printTask.url,
                        content: {
                            "f": "json"
                        },
                        "callbackParamName": "callback"
                    }).then(lang.hitch(this, function (response) {
                        var layoutTemplate, templateNames, mapOnlyIndex, templates;

                        layoutTemplate = array.filter(response.parameters, function (param, idx) {
                            return param.name === "Layout_Template";
                        });

                        if (layoutTemplate.length === 0) {
                            console.log("print service parameters name for templates must be \"Layout_Template\"");
                            return;
                        }
                        templateNames = layoutTemplate[0].choiceList;

                        // remove the MAP_ONLY template then add it to the end of the list of templates 
                        mapOnlyIndex = array.indexOf(templateNames, "MAP_ONLY");
                        if (mapOnlyIndex > -1) {
                            var mapOnly = templateNames.splice(mapOnlyIndex, mapOnlyIndex + 1)[0];
                            templateNames.push(mapOnly);
                        }

                        // create a print template for each choice
                        templates = array.map(templateNames, function (name) {
                            var plate = new PrintTemplate();
                            plate.layout = plate.label = name;
                            plate.format = "pdf";
                            plate.layoutOptions = layoutOptions;
                            return plate;
                        });


                        print = new Print({
                            map: this.map,
                            templates: templates,
                            url: this.config.helperServices.printTask.url
                        }, domConstruct.create("div")); //domConstruct.create("div",{}),printDiv); 
                        domConstruct.place(print.printDomNode, printDiv, "first");

                        print.startup();
                        deferred.resolve();

                    }));
                }));

            }));


            return deferred.promise;
        },
        _addShare: function (tool, toolbar, panelClass) {
            //Add share links for facebook, twitter and direct linking. 
            //Add the measure widget to the toolbar.
            var deferred = new Deferred();
            require(["application/has-config!share?application/ShareDialog"], lang.hitch(this, function (ShareDialog) {

                if (!ShareDialog) {
                    deferred.resolve();
                    return;
                }
                var shareDiv = toolbar.createTool(tool, panelClass);

                var shareDialog = new ShareDialog({
                    bitlyLogin: this.config.bitlyLogin,
                    bitlyKey: this.config.bitlyKey,
                    map: this.map,
                    image: this.config.sharinghost + "/sharing/rest/content/items/" + this.config.response.itemInfo.item.id + "/info/" + this.config.response.itemInfo.thumbnail,
                    title: this.config.title,
                    summary: this.config.response.itemInfo.snippet
                }, shareDiv);
                domClass.add(shareDialog.domNode, "pageBody");
                shareDialog.startup();

                deferred.resolve();

            }));

            return deferred.promise;

        },
        _getEditableLayers: function (layers) {
            var layerInfos = [];
            array.forEach(layers, lang.hitch(this, function (layer) {

                if (layer && layer.layerObject) {
                    var eLayer = layer.layerObject;
                    if (eLayer instanceof FeatureLayer && eLayer.isEditable()) {
                        layerInfos.push({
                            "featureLayer": eLayer
                        });
                    }
                }
            }));
            return layerInfos;
        },
        _getVisibleLayers: function (layers) {
            //Function that creates the list of layers for the layers tool. 
            var layerInfos = [];
            array.forEach(layers, lang.hitch(this, function (mapLayer) {
                if (mapLayer.featureCollection && !mapLayer.layerObject) {
                    if (mapLayer.featureCollection.layers) {
                        //add the first layer in the layer collection... not all  - when we turn off the layers we'll 
                        //turn them all off 
                        if (mapLayer.featureCollection.layers) {
                            layerInfos.push({
                                "layer": mapLayer,
                                "visible": mapLayer.visibility,
                                "title": mapLayer.title
                            });
                        }
                    }
                } else if (mapLayer.layerObject) {
                    layerInfos.push({
                        layer: mapLayer.layerObject,
                        visible: mapLayer.layerObject.visible,
                        title: mapLayer.title
                    });
                }
            }));
            return layerInfos;
        },

        _getBasemapGroup: function () {
            //Get the id or owner and title for an organizations custom basemap group. 
            var basemapGroup = null;
            if (this.config.basemapgroup && this.config.basemapgroup.title && this.config.basemapgroup.owner) {
                basemapGroup = {
                    "owner": this.config.basemapgroup.owner,
                    "title": this.config.basemapgroup.title
                };
            } else if (this.config.basemapgroup && this.config.basemapgroup.id) {
                basemapGroup = {
                    "id": this.config.basemapgroup.id
                };
            }
            return basemapGroup;
        },


        _createMapUI: function () {
            // Add map specific widgets like the Home  and locate buttons. Also add the geocoder. 
            if (has("home")) {
                domConstruct.create("div", {
                    id: "panelHome",
                    className: "icon-color tool",
                    innerHTML: "<div id='btnHome'></div>"
                }, dom.byId("panelTools"), 0);
                var home = new HomeButton({
                    map: this.map
                }, dom.byId("btnHome"));

                if (!has("touch")) {
                    //add a tooltip 
                    domAttr.set("btnHome", "data-title", this.config.i18n.tooltips.home);
                } else {
                    //remove no-touch class from body 
                    domClass.remove(document.body, "no-touch");

                }

                home.startup();
            }

            if (has("locate")) {
                domConstruct.create("div", {
                    id: "panelLocate",
                    className: "icon-color tool",
                    innerHTML: "<div id='btnLocate'></div>"
                }, dom.byId("panelTools"), 1);
                var geoLocate = new LocateButton({
                    map: this.map
                }, dom.byId("btnLocate"));
                if (!has("touch")) {
                    //add a tooltip 
                    domAttr.set("btnLocate", "data-title", this.config.i18n.tooltips.locate);
                }


                geoLocate.startup();

            }

            //Add the location search widget 
            require(["application/has-config!search?application/CreateGeocoder"], lang.hitch(this, function (CreateGeocoder) {
                if (!CreateGeocoder) {
                    return;
                }

                var geocoder = new CreateGeocoder({
                    map: this.map,
                    config: this.config
                });
                if (geocoder.geocoder && geocoder.geocoder.domNode) {
                    domConstruct.place(geocoder.geocoder.domNode, "panelGeocoder");
                }
            }));

            //create the tools 
            this._createUI();

        },
        _updateTheme: function () {

            //Set the background color using the configured theme value 
            query(".bg").style("backgroundColor", this.theme.toString());
            query(".esriPopup .pointer").style("backgroundColor", this.theme.toString());
            query(".esriPopup .titlePane").style("backgroundColor", this.theme.toString());


            //Set the font color using the configured color value   
            query(".fc").style("color", this.color.toString());
            query(".calcite .esriPopup .titlePane").style("color", this.color.toString());


            //Set the Slider +/- color to match the icon style. Valid values are white and black
            // White is default so we just need to update if using black. 
            //Also update the menu icon to match the tool color. Default is white. 
            if (this.config.icons === "black") {
                query(".esriSimpleSlider").style("color", "#000");
                query(".icon-color").style("color", "#000");
            }

        },
        _checkExtent: function () {
            var pt = this.map.extent.getCenter();
            if (!this.initExt.contains(pt)) {
                this.map.setExtent(this.mapExt);
            } else {
                this.mapExt = this.map.extent;
            }
        },
        _createWebMap: function (itemInfo) {
            // create a map based on the input web map id
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                usePopupManager: true,
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {

                this.map = response.map;

                this._updateTheme();


                //Add a logo if provided
                if (this.config.logo) {
                    domConstruct.create("div", {
                        id: "panelLogo",
                        innerHTML: "<img id='logo' src=" + this.config.logo + "></>"
                    }, dom.byId("panelTitle"), "first");
                }

                //Set the application title
                this.map = response.map;
                //Set the title - use the config value if provided. 
                var title = (this.config.title === null) ? response.itemInfo.item.title : this.config.title;
                this.config.title = title;
                document.title = title;
                dom.byId("panelText").innerHTML = title;
                this.config.response = response;
                window.config = this.config;

                if (this.initExt !== null) {
                    this.map.setExtent(this.initExt);
                }
                this.initExt = this.map.extent;
                on.once(this.map, "extent-change", lang.hitch(this, this._checkExtent));

                this._createMapUI();
                // make sure map is loaded
                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        // do something with the map
                        this._mapLoaded();
                    }));
                }
            }), this.reportError);
        }
    });
});