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
define(["dojo/_base/declare", "dojo/window", "dojo/_base/array", "dojo/_base/Color", "dojo/promise/all", "dojo/Deferred", "dojo/_base/lang", "esri/domUtils", "esri/request", "esri/lang", "esri/arcgis/utils", "dojo/query", "dojo/dom", "dijit/registry", "dojo/dom-class", "dojo/dom-style", "dojo/dom-geometry", "dojo/dom-construct", "dojo/on", "esri/layers/FeatureLayer", "esri/graphic", "dojo/domReady!"], function (
declare, win, array, Color, all, Deferred, lang, domUtils, esriRequest, esriLang, arcgisUtils, query, dom, registry, domClass, domStyle, domGeometry, domConstruct, on, FeatureLayer, Graphic) {
    return declare(null, {
        config: {},
        ovmap: null,
        map: null,
        editor: null,
        tableHandler: null,
        timeFormats: ["shortDateShortTime", "shortDateLEShortTime", "shortDateShortTime24", "shortDateLEShortTime24", "shortDateLongTime", "shortDateLELongTime", "shortDateLongTime24", "shortDateLELongTime24"],
        startup: function (config) {

            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                window.config = config;

                //supply either the webmap id or, if available, the item info
                var itemInfo = this.config.itemInfo || this.config.webmap;
                this._createWebMap(itemInfo);

                //update app theme            
                query(".bg").style("backgroundColor", this.config.theme.toString());
                query("#titleDiv").style("color", this.config.titlecolor.toString());


            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }
        },
        loadMapWidgets: function () { /*Add all the widgets that live on the map*/
            require(["application/sniff!scale?esri/dijit/Scalebar"], lang.hitch(this, function (Scalebar) {
                if (!Scalebar) {
                    return;
                }
                var scalebar = new Scalebar({
                    map: this.map,
                    scalebarUnit: this.config.units
                });
            }));

            if (this.config.zoom) {
                //setup icon fonts 
                query(".esriSimpleSliderIncrementButton").forEach(function (node) {
                    domClass.add(node, "icon-zoomin");
                });
                query(".esriSimpleSliderDecrementButton").forEach(function (node) {
                    domClass.add(node, "icon-zoomout");
                });

                query(".esriSimpleSlider").style("color", this.config.iconcolortheme.toString());
                query(".esriSimpleSlider").style("background-color", this.config.theme.toString());
                query(".esriSimpleSlider").style("background", this.config.theme.toString());
            }
            //add classes to manage positioning locate, zoom,  home buttons
            if (this.config.zoom === false || this.config.zoom_position !== "top-left") {
                domClass.add(document.body, "no-zoom");
            }
            if (this.config.home === false) {
                domClass.add(document.body, "no-home");
            }
            if (this.config.locate === false) {
                domClass.add(document.body, "no-locate");
            }
            //Zoom slider needs to be visible to add home
            if (this.config.home && this.config.zoom) {
                require(["application/sniff!home?esri/dijit/HomeButton"], lang.hitch(this, function (HomeButton) {
                    if (!HomeButton) {
                        return;
                    }
                    var home = new HomeButton({
                        map: this.map
                    }, domConstruct.create("div", {}, query(".esriSimpleSliderIncrementButton")[0], "after"));
                    //Use the home icon from the esri Fonts 
                    query(".HomeButton .home").forEach(function (node) {
                        domClass.add(node, "icon-home");
                        domClass.add(node, "icon-color");
                    });
                    home.startup();
                    this._updateTheme();

                }));
            }
            require(["application/sniff!search?esri/dijit/Search", "application/sniff!search?esri/tasks/locator"], lang.hitch(this, function (Search, Locator) {
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
                            source.displayField = layer.fields[0];
                            source.outFields = ["*"];
                            searchLayers = true;
                            defaultSources.push(source);
                            if (mapLayer.infoTemplate) {
                                source.infoTemplate = mapLayer.infoTemplate;
                            }
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

                          if (layer && layer.hasOwnProperty("url")) {
                            var source = {};
                            var url = layer.url;
                            var name = layer.title || layer.name;

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


                            source.name = name;


                            source.exactMatch = searchLayer.field.exactMatch;
                            source.displayField = searchLayer.field.name;
                            source.searchFields = [searchLayer.field.name];
                            source.placeholder = searchOptions.hintText;
                            defaultSources.push(source);
                            searchLayers = true;
                        }

                    }));
                }


                search.set("sources", defaultSources);
                search.startup();
                
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

                query(".arcgisSearch .searchBtn").style("backgroundColor", this.config.theme.toString());
                query(".arcgisSearch .esriIconSearch").style("color", this.config.iconcolortheme.toString());

                query(".searchIcon").style("color", this.config.iconcolortheme.toString());



            }));

            require(["application/sniff!locate?esri/dijit/LocateButton"], lang.hitch(this, function (LocateButton) {
                if (!LocateButton) {
                    domClass.add(document.body, "no-locate");
                    return;
                }
                var locate = new LocateButton({
                    map: this.map
                }, domConstruct.create("div", {}, "mapDiv"));
                query(".LocateButton .zoomLocateButton").forEach(function (node) {
                    domClass.add(node, "icon-locate");
                    domClass.add(node, "icon-color");
                });
                locate.startup();
                query(".LocateButton .zoomLocateButton").style("background-color", this.config.theme.toString());

            }));

        },
        _addToolbarWidgets: function () {

            var shareDef = new Deferred(),
                basemapDef = new Deferred(),
                layerDef = new Deferred(),
                tableDef = new Deferred(),
                printDef = new Deferred();
            var toolDeferreds = [shareDef, tableDef, printDef, layerDef, basemapDef];

            /*Toolbar widgets ( print, layers, share, basemap etc)*/

            require(["application/sniff!table?esri/dijit/FeatureTable", "application/sniff!table?esri/tasks/query"], lang.hitch(this, function (FeatureTable, esriQuery) {

                if (!FeatureTable) {
                    tableDef.resolve(null);
                    return;
                }
                this.tableHandler = null;
                /*Create the table if a layer and field have been defined or if there's a feature layer in the map
                */
                var layer = null;

                if (this.config.tableLayer && this.config.tableLayer.id) {
                    layer = this.map.getLayer(this.config.tableLayer.id);

                    if (layer) {
                        //get hidden fields
                        var hiddenFields = null;
                        if (this.config.tableLayer.fields) {
                            if (this.config.tableLayer.fields.length && this.config.tableLayer.fields.length > 0) {
                                hiddenFields = this.config.tableLayer.fields[0].fields;
                            }
                        }
                    } else {
                        layer = null;
                    }
                }

                if (layer === null) {
                    //get first feature layer from map if no feature layers then return
                    array.some(this.map.graphicsLayerIds, lang.hitch(this, function (id) {
                        var l = this.map.getLayer(id);
                        if (l && l.type === "Feature Layer") {
                            layer = l;
                            return true;
                        }
                    }));
                }
                //if no layer don't create table 
                if (layer === null) {
                    tableDef.resolve(null);
                    return;
                }

                var btn = this._createToolbarButton("table_toggle", "icon-table", this.config.i18n.tools.tableTool);

                on(btn, "click", lang.hitch(this, function () {
                    this._closeContainers("tableDiv");

                    //Toggle table display 
                    var table = dom.byId("tableDiv");
                    var height = domStyle.get(table, "height");
                    if (height === 0) { //show table 
                        domClass.add(btn, "tool-selected");
                        this._openTable(table);
                    } else { //hide table 
                        domClass.remove(btn, "tool-selected");
                        this._closeTable(table, layer);
                    }
                    this.map.graphics.clear();
                    registry.byId("featureTable").selectRows([]);
                    this.map.resize();
                    this.map.reposition();
                    registry.byId("bc").resize();
                    registry.byId("mapbc").resize();
                }));

                var table = new FeatureTable({
                    id: "featureTable",
                    "featureLayer": layer,
                    "hiddenFields": hiddenFields,
                    "map": this.map
                }, "featureTable");



                //Use the popup selection symbol (Need to test this)
                //fillSymbol, lineSymbol, markerSymbol
                var selectionSymbol = null;
                if (layer.geometryType === "esriGeometryPoint") {
                    selectionSymbol = this.map.infoWindow.markerSymbol;
                } else if (layer.geometryType === "esriGeometryPolyline") {
                    selectionSymbol = this.map.infoWindow.lineSymbol;
                } else if (layer.geometryType === "esriGeometryPolygon") {
                    selectionSymbol = this.map.infoWindow.fillSymbol;
                }


                this.tableHandler = on.pausable(layer, "click", lang.hitch(this, function (results) {
                    table.selectRows([results.graphic]);
                    this._zoomToFeature(results.graphic.geometry, selectionSymbol);

                }));

                this.tableHandler.pause();

                table.startup();




                //sync feature selection and table selection
                on(table, "dgrid-select", lang.hitch(this, function (evt) {
                    if (evt && evt.length > 0) {
                        var id = evt[0].data[layer.objectIdField];

                        for (var i = 0; i < layer.graphics.length; i++) {
                            var f = layer.graphics[i];
                            if (f.attributes[layer.objectIdField] === id) {
                                this._zoomToFeature(f.geometry, selectionSymbol);
                            }
                        }

                    } else {
                        return;
                    }

                }));

                tableDef.resolve(btn);
                return tableDef.promise;
            }));

            require(["application/sniff!print?esri/dijit/Print", "application/sniff!print?esri/tasks/PrintTemplate"], lang.hitch(this, function (Print, PrintTemplate) {

                if (!Print) {
                    printDef.resolve(null);
                    return;
                }
                var print = null;
                var btn = this._createToolbarButton("print_toggle", "icon-printer", this.config.i18n.tools.printTool);

                on(btn, "click", lang.hitch(this, function () {
                    this._displayContainer("print_container", "print_toggle");
                }));

                this._createContainer("print_container", "printDiv");


                var layoutOptions = {
                    "titleText": this.config.title,
                    "scalebarUnit": this.config.units,
                    "legendLayers": []
                };

                this.config.printformat = this.config.printformat.toLowerCase();
                if (this.config.printlegend) {

                    var legendNode = domConstruct.create("input", {
                        id: "legend_ck",
                        className: "checkbox legendnode",
                        type: "checkbox",
                        checked: false
                    }, domConstruct.create("div", {
                        "class": "checkbox"
                    }));

                    var labelNode = domConstruct.create("label", {
                        "for": "legend_ck",
                        "className": "checkbox labelnode",
                        "innerHTML": "  " + this.config.i18n.tools.printLegend
                    }, domConstruct.create("div"));
                    domConstruct.place(legendNode, dom.byId("printDiv"));
                    domConstruct.place(labelNode, dom.byId("printDiv"));

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

                    this._updateTheme();
                }

                if (this.config.printlayouts) {
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
                        templates = array.map(templateNames, lang.hitch(this, function (name) {
                            var plate = new PrintTemplate();
                            plate.layout = plate.label = name;
                            plate.format = this.format;
                            plate.layoutOptions = layoutOptions;
                            return plate;
                        }));


                        print = new Print({
                            map: this.map,
                            templates: templates,
                            url: this.config.helperServices.printTask.url
                        }, domConstruct.create("div"));
                        domConstruct.place(print.printDomNode, dom.byId("printDiv"), "first");


                        print.startup();


                    }));
                } else { //use the default layouts 
                    var templates = [{
                        layout: "Letter ANSI A Landscape",
                        layoutOptions: layoutOptions,
                        label: this.config.i18n.tools.printLayouts.label1 + " ( " + this.config.printformat + " )",
                        format: this.format
                    },
                    {
                        layout: "Letter ANSI A Portrait",
                        layoutOptions: layoutOptions,
                        label: this.config.i18n.tools.printLayouts.label2 + " ( " + this.config.printformat + " )",
                        format: this.format
                    },
                    {
                        layout: "Letter ANSI A Landscape",
                        layoutOptions: layoutOptions,
                        label: this.config.i18n.tools.printLayouts.label3 + " ( image )",
                        format: "PNG32"
                    },
                    {
                        layout: "Letter ANSI A Portrait",
                        layoutOptions: layoutOptions,
                        label: this.config.i18n.tools.printLayouts.label4 + " ( image )",
                        format: "PNG32"
                    }];
                    print = new Print({
                        map: this.map,
                        id: "printButton",
                        templates: templates,
                        url: this.config.helperServices.printTask.url
                    }, domConstruct.create("div"));
                    domConstruct.place(print.printDomNode, dom.byId("printDiv"), "first");
                    print.startup();

                }

                printDef.resolve(btn);
                return printDef.promise;
            }));

            require(["application/sniff!basemaps?esri/dijit/BasemapGallery"], lang.hitch(this, function (BasemapGallery) {

                if (!BasemapGallery) {
                    basemapDef.resolve(null);
                    return;
                }
                var galleryOptions = {
                    showArcGISBasemaps: true,
                    portalUrl: this.config.sharinghost,
                    basemapsGroup: this._getBasemapGroup(),
                    map: this.map
                };

                var btn = this._createToolbarButton("basemap_toggle", "icon-basemap", this.config.i18n.tools.basemapTool);

                on(btn, "click", lang.hitch(this, function () {
                    this._displayContainer("gallery_container", "basemap_toggle");
                }));

                this._createContainer("gallery_container", "galleryDiv");

                var gallery = new BasemapGallery(galleryOptions, dom.byId("galleryDiv"));


                gallery.startup();
                basemapDef.resolve(btn);
                return basemapDef.promise;

            }));

            require(["application/sniff!layerlist?application/TableOfContents"], lang.hitch(this, function (TableOfContents) {

                if (!TableOfContents) {
                    layerDef.resolve(null);
                    return;
                }

                var layers = this.config.response.itemInfo.itemData.operationalLayers;
                if (layers && layers.length && layers.length === 0) {
                    console.log("No Map Layers");
                    return;
                }

                var btn = this._createToolbarButton("layer_toggle", "icon-layers", this.config.i18n.tools.layerTool);

                on(btn, "click", lang.hitch(this, function () {
                    this._displayContainer("layer_container", "layer_toggle");
                }));
                this._createContainer("layer_container", "layerDiv");


                var toc = new TableOfContents({
                    map: this.map,
                    layers: layers
                }, domConstruct.create("div", {}, "layerDiv"));
                toc.startup();
                layerDef.resolve(btn);
                return layerDef.proimse;
            }));

            require(["application/sniff!share?application/ShareDialog"], lang.hitch(this, function (ShareDialog) {

                if (!ShareDialog) {
                    shareDef.resolve(null);
                    return;
                }

                var btn = this._createToolbarButton("share_toggle", "icon-share", this.config.i18n.tools.shareTool);

                on(btn, "click", lang.hitch(this, function () {
                    this._displayContainer("share_container", "share_toggle");
                }));
                this._createContainer("share_container", "shareDiv");

                var shareDialog = new ShareDialog({
                    bitlyLogin: this.config.bitlyLogin,
                    bitlyKey: this.config.bitlyKey,
                    map: this.map,
                    image: this.config.sharinghost + "/sharing/rest/content/items/" + this.config.response.itemInfo.item.id + "/info/" + this.config.response.itemInfo.thumbnail,
                    title: this.config.title,
                    summary: this.config.response.itemInfo.item.snippet || ""
                }, "shareDiv");

                shareDialog.startup();
                shareDef.resolve(btn);
                return shareDef.promise;

            }));


            //Wait until all the tools have been created then position on the toolbar
            //otherwise we'd get the tools placed in a random order 
            all(toolDeferreds).then(lang.hitch(this, function (results) {
                array.forEach(results, function (node) {
                    if (node) {
                        domConstruct.place(node, "toolbar-trailing");
                    }
                });
                this._updateTheme();
            }));

        },
        _zoomToFeature: function (geom, selectionSymbol) {
            this.map.graphics.clear();
            var graphic = new Graphic(geom, selectionSymbol);
            this.map.graphics.add(graphic);
            // graphic.getShape().moveToFront();
            if (geom.type === "point") {
                var maxZoom = this.map.getMaxZoom();
                if (maxZoom > -1) {
                    this.map.centerAndZoom(geom, maxZoom - 2);
                } else {
                    this.map.centerAndZoom(geom, 0.25);
                }

            } else {
                this.map.setExtent(geom.getExtent());
            }
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
        // create a map based on the input web map id
        _createWebMap: function (itemInfo) {

            //modify the extent if provided via url params
            if (this.config.extent) {
                var extent = decodeURIComponent(this.config.extent).split(",");
                if (extent && extent.length && extent.length === 4) {
                    itemInfo.item.extent = [
                        [parseFloat(extent[0]), parseFloat(extent[1])],
                        [parseFloat(extent[2]), parseFloat(extent[3])]
                    ];
                }
            }

            //Define map options
            var options = {
                slider: this.config.zoom,
                sliderPosition: this.config.zoom_position,
                logo: (this.config.logoimage === null) ? true : false
            };

            //specify center and zoom if provided as url params 
            if (this.config.level) {
                options.zoom = this.config.level;
            }
            if (this.config.center) {
                var points = this.config.center.split(",");
                if (points && points.length === 2) {
                    options.center = [parseFloat(points[0]), parseFloat(points[1])];
                }

            }
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: options,
                usePopupManager: true,
                editable: this.config.editable,
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {
                this.map = response.map;
                this.config.response = response;

                if (this.config.logoimage) {

                    query(".esriControlsBR").forEach(lang.hitch(this, function (node) {
                        var link = null;
                        if (this.config.logolink) {
                            link = domConstruct.create("a", {
                                href: this.config.logolink,
                                target: "_blank"
                            }, node);
                        }

                        var logoimg = domConstruct.create("img", {
                            width: "65px",
                            height: "36px",
                            src: this.config.logoimage,
                            "class": "logo"
                        }, link || node);

                    }));
                }


                //Set the popup theme so it doesn't use sprite also update colors
                domClass.add(this.map.infoWindow.domNode, "light");
                query(".esriPopup .pointer").style("backgroundColor", this.config.theme.toString());
                query(".esriPopup .titlePane").style("backgroundColor", this.config.theme.toString());
       
                //Set the font color using the configured color value
                query(".esriPopup .titlePane").style("color", this.config.color.toString());
                query(".esriPopup. .titleButton").style("color", this.config.color.toString());  
                

                //Add a title 
                this.config.title = this.config.title || response.itemInfo.item.title;
                //set browser tab title 
                document.title = this.config.title;
                //add application title 
                if (this.config.showtitle) {
                    dom.byId("titleDiv").innerHTML = this.config.title;
                } else {
                    domClass.add(document.body, "no-title");
                    registry.byId("bc").resize();
                }


                //create editor, details and legend
                this._createSidePanelContent(response.itemInfo);


                // remove loading class from body
                domClass.remove(document.body, "app-loading");
                this._addToolbarWidgets();
                this.loadMapWidgets();

                // map has been created. You can start using it.
                // If you need map to be loaded, listen for it's load event.
            }), this.reportError);
        },
        _createSidePanelContent: function (itemInfo) {

            //legend, details, editor 
            domClass.add(this.map.container, "has-sidepanel");
            //add the legend 
            require(["application/sniff!legend?esri/dijit/Legend"], lang.hitch(this, function (Legend) {
                if (!Legend) {
                    return;
                }
                var btn = this._createToolbarButton("legend_toggle", "icon-legend", this.config.i18n.tools.legendTool);
                domConstruct.place(btn, "toolbar-leading");
                on(btn, "click", lang.hitch(this, function () {
                    this._navigateStack("legendPanel", "legend_toggle");
                }));

                var legend = new Legend({
                    map: this.map,
                    layerInfos: (arcgisUtils.getLegendLayers(this.config.response))
                }, domConstruct.create("div", {}, "legendPanel"));

                legend.startup();

                if (this.config.showpanel && this.config.activepanel === "legend") {
                    this._navigateStack("legendPanel", "legend_toggle");
                }

            }));
            this.config.description = this.config.description || itemInfo.item.description;
            if (this.config.description) {
                //add the desc button to the toolbar
                var btn = this._createToolbarButton("details_toggle", "icon-file-text", this.config.i18n.tools.detailsTool);
                domConstruct.place(btn, "toolbar-leading");
                on(btn, "click", lang.hitch(this, function () {
                    this._navigateStack("detailsPanel", "details_toggle");
                }));
                domConstruct.create("div", {
                    innerHTML: this.config.description
                }, "detailsPanel");

                if (this.config.showpanel && this.config.activepanel === "details") {
                    this._navigateStack("detailsPanel", "details_toggle");
                }
            }
            //add the editor 
            require(["application/sniff!editor?esri/dijit/editing/Editor"], lang.hitch(this, function (Editor) {
                if (!Editor) {
                    return;
                }
                var layers = this._getEditableLayers(this.config.response.itemInfo.itemData.operationalLayers);
                if (layers && layers.length === 0) {
                    return;
                }
                var btn = this._createToolbarButton("edit_toggle", "icon-edit", this.config.i18n.tools.editTool);
                domConstruct.place(btn, "toolbar-leading");
                on(btn, "click", lang.hitch(this, function () {
                    this._navigateStack("editorPanel", "edit_toggle");

                }));

                if (this.config.showpanel && this.config.activepanel === "editor") {
                    this._navigateStack("editorPanel", "edit_toggle");
                }

            }));

        },
        _createToolbarButton: function (toolid, icon, label) {

            var button = domConstruct.create("button", {
                type: "icon-color button",
                id: toolid,
                title: label,
                innerHTML: "<span aria-hidden=true class='icon-color " + icon + "'></span><span class='tool-label'>" + label + "</span>"
            });
            return button;

        },
        _createContainer: function (galleryId, contentId) {
            var container = domConstruct.create("div", {
                id: galleryId,
                "className": "tool_container"
            }, dom.byId("mapDiv"));

            domConstruct.create("div", {
                "class": "container_box",
                innerHTML: "<div id='" + contentId + "'></div>"
            }, container);
            domUtils.hide(dom.byId(galleryId));
        },
        _closeContainers: function (container) {
            query(".tool_container").forEach(lang.hitch(this, function (container_node) {
                //close any open containers when another tool is open
                var visible = domStyle.get(container_node, "display");
                if (visible === "block" && (container !== container_node.id)) {
                    domUtils.hide(container_node);
                }
            }));

            //remove any selected styles 
            query("#toolbar-trailing .tool-selected").forEach(function (node) {
                if (node && node.id !== "table_toggle") {
                    domClass.remove(node, "tool-selected");
                }
            });


        },
        _displayContainer: function (container, button) {

            this._closeContainers(container);

            var node = dom.byId(container);
            domUtils.toggle(node);

            if (domStyle.get(node, "display") === "none") {
                //remove tool selected style from node
                domClass.remove(dom.byId(button), "tool-selected");
            } else {
                //add the selected style
                domClass.add(dom.byId(button), "tool-selected");
            }

            var pos = domGeometry.position(dom.byId(button));
            var winWidth = win.getBox();
            var buttonSize = pos.x + pos.w;
            if (buttonSize === winWidth.w) {
                domStyle.set(node, "right", 0);
            } else {
                domStyle.set(node, "right", (pos.w) + "px");
            }
        },
        _navigateStack: function (panelLabel, buttonLabel) {
            var stackContainer = registry.byId("stackContainer");
            //remove the selected class from all nodes 
            query("#toolbar-leading .tool-selected").forEach(function (node) {
                domClass.remove(node, "tool-selected");
            });

            //Buttons can also act like toggles to show/hide the panel so
            //if we click the button for a panel that's already selected we close it
            var panel_width = domStyle.get("sideDiv", "width");
            if (panel_width > 0 && stackContainer.selectedChildWidget.id === panelLabel) {
                this._destroyEditor();
                domStyle.set(dom.byId("sideDiv"), "width", 0);
            } else { //toggle between the panels 
                //add selected style to current node
                domClass.add(dom.byId(buttonLabel), "tool-selected");
                domStyle.set(dom.byId("sideDiv"), "width", this.config.panelwidth + "px");
                stackContainer.selectChild(panelLabel);
                if (panelLabel === "editorPanel") {
                    this._createEditor();
                } else {
                    this._destroyEditor();
                }
            }

            registry.byId("bc").resize();
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
        _openTable: function (table) {
            //enable click handler for layer
            if (this.tableHandler) {
                this.tableHandler.resume();
            }
            this.map.setInfoWindowOnClick(false);
            domStyle.set(table, "height", "30%");

        },
        _closeTable: function (table, layer) {

            if (this.tableHandler) {
                this.tableHandler.pause();
            }
            this.map.setInfoWindowOnClick(true);
            domStyle.set(table, "height", 0);
        },
        _createEditor: function () {
            //add the editor 
            require(["application/sniff!editor?esri/dijit/editing/Editor"], lang.hitch(this, function (Editor) {
                if (!Editor) {
                    return;
                }
                this._destroyEditor();
                //close any containers 
                this._closeContainers("");
                this._closeTable(dom.byId("tableDiv"));
                //disable the table button 
                var tableButton = dom.byId("table_toggle");
                if (tableButton) {
                    tableButton.disabled = true;
                }
                //disable map info window 
                this.map.setInfoWindowOnClick(false);
                var editableLayers = this._getEditableLayers(this.config.response.itemInfo.itemData.operationalLayers);

                //add field infos if necessary. Field infos will contain hints if defined in the popup and hide fields where visible is set
                //to false. The popup logic takes care of this for the info window but not the edit window.
                array.forEach(editableLayers, lang.hitch(this, function (layer) {
                    if (layer.featureLayer && layer.featureLayer.infoTemplate && layer.featureLayer.infoTemplate.info && layer.featureLayer.infoTemplate.info.fieldInfos) {
                        //only display visible fields
                        var fields = layer.featureLayer.infoTemplate.info.fieldInfos;
                        var fieldInfos = [];
                        array.forEach(fields, lang.hitch(this, function (field) {

                            //added support for editing date and time
                            if (field.format && field.format.dateFormat && array.indexOf(this.timeFormats, field.format.dateFormat) > -1) {
                                field.format = {
                                    time: true
                                };
                            }

                            if (field.visible) {
                                fieldInfos.push(field);
                            }

                        }));

                        layer.fieldInfos = fieldInfos;
                    }
                }));
                var settings = {
                    map: this.map,
                    layerInfos: editableLayers,
                    toolbarVisible: this.config.editortoolbar
                };
                this.editor = new Editor({
                    settings: settings
                }, domConstruct.create("div", {}, "editorPanel"));


                this.editor.startup();


            }));
        },
        _destroyEditor: function () {
            if (this.editor) {
                this.editor.destroy();
                this.editor = null;
                this.map.setInfoWindowOnClick(true);

                //re-activate the table button 
                var tableButton = dom.byId("table_toggle");
                if (tableButton) {
                    tableButton.disabled = false;
                }
            }

        },

        _updateTheme: function () {

            //Set the Slider +/- color to match the icon style. 
            //Also update the menu icon to match the tool color. 
            query(".tool-label").style("color", this.config.color.toString());
            query("[class^='icon-'], [class*=' icon-']").style("color", this.config.iconcolortheme.toString());
            
            if(this.map){
                this.map.resize();
                this.map.reposition();
                registry.byId("bc").resize();
                registry.byId("mapbc").resize();
            }


        }
    });
});
