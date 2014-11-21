define(["dojo/ready", "dojo/_base/declare", "dojo/dom", "dojo/Deferred", "dojo/promise/all", "dojo/number", "dojo/_base/Color", "dojo/query", "dojo/_base/lang", "dojo/_base/array", "dojo/dom-construct", "dojo/dom-style", "dijit/registry", "dojo/has", "dojo/sniff", "esri/arcgis/utils", "esri/request", "dojo/on", "application/Drawer", "application/CreateGeocoder", "dojo/dom-class", "esri/tasks/query", "esri/tasks/QueryTask", "esri/dijit/LocateButton", "esri/dijit/HomeButton"], function (
ready, declare, dom, Deferred, all, number, Color, query, lang, array, domConstruct, domStyle, registry, has, sniff, arcgisUtils, esriRequest, on, Drawer, CreateGeocoder, domClass, esriQuery, QueryTask, LocateButton, HomeButton) {
    return declare("", null, {
        config: {},
        theme: null,
        color: null,
        constructor: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            this.config = config;
            // responsive drawer
            this._drawer = new Drawer({
                showDrawerSize: 850,
                // Pixel size when the drawer is automatically opened
                borderContainer: "border_container",
                // border container node id
                contentPaneCenter: "cp_center",
                // center content pane node id
                contentPaneSide: "cp_left",
                // side content pane id
                toggleButton: "toggle_button",
                // button node to toggle drawer id
                direction: this.config.i18n.direction // i18n direction "ltr" or "rtl"
            });
            // startup drawer
            this._drawer.startup();

            // document ready
            ready(lang.hitch(this, function () {

                this.theme = this.setColor(this.config.theme);
                this.color = this.setColor(this.config.color);

                //supply either the webmap id or, if available, the item info
                var itemInfo = this.config.itemInfo || this.config.webmap;

                this._createWebMap(itemInfo);
            }));
        },
        _mapLoaded: function () {

            //add the loading icon
            domConstruct.create("img", {
                id: "loader",
                src: "images/loading.gif",
                className: "loader"
            }, "mapDiv");

            //Build the filter display if there are interactive filters
            var layers = this.config.response.itemInfo.itemData.operationalLayers;
            var filterLayers = [];
            array.forEach(layers, lang.hitch(this, function (layer) {
                if (layer.definitionEditor) {
                    filterLayers.push(this._getLayerFields(layer));
                } else if (layer.layers) {
                    //Check ArcGISDynamicMapService layers for filters
                    array.forEach(layer.layers, lang.hitch(this, function (sublayer) {
                        if (sublayer.definitionEditor) {
                            sublayer.title = layer.title;
                            sublayer.layerId = layer.id;
                            filterLayers.push(this._getLayerFields(sublayer));
                        }
                    }));
                } else if (layer.layerDefinition && layer.itemId) {
                    //is there an associated item in the web map response
                    if (this.config.response.itemInfo && this.config.response.itemInfo.relatedItemsData && this.config.response.itemInfo.relatedItemsData[layer.itemId]) {
                        var item = this.config.response.itemInfo.relatedItemsData[layer.itemId];
                        if (item.definitionEditor) {
                            layer.definitionEditor = item.definitionEditor;
                            filterLayers.push(this._getLayerFields(layer));
                        }
                    }
                }

            }));

            all(filterLayers).then(lang.hitch(this, function (response) {
                var layers = []; /*If there are interactive filters build the filter display*/
                array.forEach(response, lang.hitch(this, function (r, index) {
                    layers.push(r);
                }));

                var content;
                if (layers.length > 0) {
                    content = this._buildFilterDialog(layers);
                } else {
                    content = "<div style='padding:8px;'>" + this.config.i18n.viewer.filterNo + "</div>";
                }

                registry.byId("cp_left").set("content", content);
                this._updateTheme();

            }));

            //Add the geocoder if search is enabled
            if (this.config.search) {
                var options = {
                    map: this.map,
                    config: this.config
                };
                var myGeocoder = new CreateGeocoder(options);

                if (myGeocoder.geocoder && myGeocoder.geocoder.domNode) {
                    domConstruct.place(myGeocoder.geocoder.domNode, "search");
                }
            }

            //Add the location button if enabled
            if (this.config.locate) {
                var location = new LocateButton({
                    map: this.map
                }, domConstruct.create("div", {
                    id: "locateDiv"
                }, "mapDiv"));
                location.startup();
            }

            //Add the home button if configured
            if (this.config.home) {
                var homeButton = new HomeButton({
                    map: this.map
                }, domConstruct.create("div", {
                    id: "homeDiv"
                }, "mapDiv"));
                homeButton.startup();
            }

            // remove loading class
            //domClass.remove(document.body, "app-loading");
            this._stopIndicator();
            this._updateTheme();
        },
        _buildFilterDialog: function (layers) {

            //If only one layer has a filter then display it.
            //If multiple layers have a filter create a dropdown then show/hide the filters.
            // Build the filter dialog including explanatory text and add a submit button for each filter group.
            var filterContainer = domConstruct.create("div", {
                id: "container",
                className: this.config.i18n.isRightToLeft ? "esriRtl" : "esriLtr",
                innerHTML: this.config.filterInstructions || this.config.i18n.viewer.filterInstructions
            });
            if (this.config.filterDropdown) {
                if (layers.length && layers.length > 1) {
                    var selectContainer = domConstruct.create("div", {
                        className: "styled-select"
                    }, filterContainer);
                    var select = domConstruct.create("select", {
                        className: "layerList"
                    }, selectContainer);

                    var options = select.options;
                    options.length = 0;
                    array.forEach(layers, function (val, index) {
                        options[index] = new Option(val.title, index);
                    });
                    on(select, "change", function () {
                        var value = select.value;
                        //Show the selected filter
                        query(".filter").forEach(lang.hitch(this, function (node) {
                            if (node.id === "filter_" + value) {
                                domStyle.set(node, "display", "block");
                            } else {
                                domStyle.set(node, "display", "none");
                            }
                        }));

                    });
                }
            }

            array.forEach(layers, lang.hitch(this, function (layer, index) { //add a list item for each layer and add the filters
                var filterGroup = domConstruct.create("div", {
                    className: "filter",
                    id: "filter_" + index
                }, filterContainer);
                //hide all filters except the first if displayed in a dropdown
                if (this.config.filterDropdown && index > 0) {
                    domStyle.set(filterGroup, "display", "none");
                }

                if (this.config.filterDropdown === false) {
                    domConstruct.create("legend", {
                        innerHTML: "<span>" + layer.title + "</span>"
                    }, filterGroup);
                } else if (this.config.filterDropdown && layers.length === 1) {
                    domConstruct.create("legend", {
                        innerHTML: "<span>" + layer.title + "</span>"
                    }, filterGroup);
                }
                //add friendly text that explains the query - first get parameter inputs then update the expression
                var exp = layer.definitionEditor.parameterizedExpression;
                var infoText = "";
                if (exp.indexOf("OR") !== -1) {
                    infoText = this.config.i18n.viewer.filterOr;
                } else if (exp.indexOf("AND") !== -1) {
                    infoText = this.config.i18n.viewer.filterAnd;
                }

                domConstruct.create("div", {
                    className: "instructions",
                    innerHTML: infoText
                }, filterGroup);


                var results = this._addFilter(layer);
                domConstruct.place(results, filterGroup);

                //add an apply button to the layer filter group
                var b = domConstruct.create("input", {
                    type: "button",
                    className: "submitButton bg fc",
                    id: layer.id + "_apply",
                    value: this.config.button_text || this.config.i18n.viewer.button_text
                }, filterGroup, "last");



                if (this.config.displayClear) {

                    var clear = domConstruct.create("span", {
                        className: "cancelButton icon-cancel",
                        id: layer.id + "_clear",
                        title: "Clear" //this.config.i18n.viewer.clear_text
                    }, filterGroup);
                    on(clear, "click", lang.hitch(this, function () {
                        if (layer.layerType && layer.layerType === "ArcGISStreamLayer") {
                            layer.clear();
                        } else {
                            this._applyDefinitionExpression(layer, null);
                        }
                    }));

                }

                //only valid for hosted feature layers.
                if (this.config.displayZoom) {
                    if (layer.layerObject && layer.layerObject.type && layer.layerObject.type === "Feature Layer" && layer.layerObject.url && this._isHosted(layer.layerObject.url)) {
                        var zoom = domConstruct.create("span", {
                            className: "zoomButton icon-search",
                            id: layer.id + "_zoom",
                            title: "Zoom"
                        }, filterGroup);
                        on(zoom, "click", lang.hitch(this, function () {
                            this._zoomFilter(layer);
                        }));
                    }
                }


                //clear the default filter if config option is set
                if (this.config.filterOnLoad === false) {
                    this._applyDefinitionExpression(layer, null);

                }

                on(b, "click", lang.hitch(this, function () {
                    this._startIndicator();
                    this._createDefinitionExpression(layer);

                }));

            }));

            return filterContainer;

        },
        _createDefinitionExpression: function (layer) {
            this._startIndicator();
            //get the input values to the filter - if not value is specified use the defaults
            var values = [];

            array.forEach(layer.definitionEditor.inputs, lang.hitch(this, function (input) {

                array.forEach(input.parameters, lang.hitch(this, function (param) {
                    var widget_id = layer.id + "." + param.parameterId + ".value";
                    var widget = dom.byId(widget_id);
                    var value = widget.value;

                    //is it a number
                    var defaultValue = isNaN(param.defaultValue) ? param.defaultValue : number.parse(param.defaultValue);
                    if (isNaN(value)) {
                        values.push((value === "") ? defaultValue : value);
                    } else {
                        //for some reason "" returns false for is  nan
                        if (value === "") {
                            values.push((value === "") ? defaultValue : value);
                        } else {
                            values.push(value);
                        }
                    }
                }));
            }));
            var defExp = lang.replace(layer.definitionEditor.parameterizedExpression, values);


            this._applyDefinitionExpression(layer, defExp);
        },
        _applyDefinitionExpression: function (layer, defExp) {
            //Apply the filter
            if (layer.layerType && layer.layerType === "ArcGISStreamLayer") {
                // on(layer, "filter-change", lang.hitch(this, function(){
                //    console.log("Change");
                // }));
                layer.layerObject.setDefinitionExpression(defExp);
                this._stopIndicator();
            } else if (layer.layerObject) { //Image Service, Stream layer or Feature Layer
                if (layer.definitionEditor || (layer.layerObject.type && layer.layerObject.type === "Feature Layer")) {
                    var l = layer.layerObject.setDefinitionExpression(defExp);
                    on.once(l, "update-end", lang.hitch(this, function () {
                        this._stopIndicator();
                    }));
                }
            } else if (layer.layerId) { //dynamic layer
                var layerDef = [];
                layerDef[layer.id] = defExp;
                var mapLayer = this.map.getLayer(layer.layerId);
                mapLayer.setLayerDefinitions(layerDef);
                this._stopIndicator();
            }

        },
        _stopIndicator: function (layer) {
            domClass.remove(dom.byId("loader"), "startLoader");

        },
        _startIndicator: function () {
            domClass.add(dom.byId("loader"), "startLoader");
        },
        _addFilter: function (layer) {
            var content = domConstruct.create("div");


            array.forEach(layer.definitionEditor.inputs, lang.hitch(this, function (input) {
                domConstruct.create("label", {
                    innerHTML: input.prompt
                }, content); //add prompt text to panel
                var pcontent = domConstruct.create("div", {
                    className: "row"
                }, content);
                array.forEach(input.parameters, function (param, index) {
                    //at this release only numeric and string inputs are supported for interactive queries.  Dates will come later.
                    var paramInputs = null;
                    param.inputId = layer.id + "." + param.parameterId + ".value";
                    var field = null;
                    var fields = null;
                    if (layer.layerObject && layer.layerObject.fields) {
                        fields = layer.layerObject.fields;
                    } else if (layer.fields) {
                        fields = layer.fields;
                    }
                    array.some(fields, function (f) {
                        if (f.name === param.fieldName) {
                            field = f;
                            return true;
                        }
                    });
                    if (field && field.domain && field.domain.codedValues) {
                        //create a select tag
                        var select = domConstruct.create("select", {
                            id: param.inputId
                        });
                        var options = select.options;
                        options.length = 0;
                        array.forEach(field.domain.codedValues, function (val, index) {
                            options[index] = new Option(val.name, val.code);
                        });
                        paramInputs = select;
                    } else if (field && field.type === "esriFieldTypeInteger") { //the pattern forces the numeric keyboard on iOS. The numeric type works on webkit browsers only
                        paramInputs = lang.replace("<input class='param_inputs'  type='number'  id='{inputId}' pattern='[0-9]*'  value='{defaultValue}' />", param);
                    } else { //string
                        paramInputs = lang.replace("<input class='param_inputs'  type='text'  id='{inputId}' value='{defaultValue}' />", param);
                    }
                    if (index < input.parameters.length - 1) {
                        //insert an AND into the expression
                        paramInputs += " <div> AND</div> ";
                    }
                    domConstruct.place(paramInputs, pcontent);
                });

                domConstruct.create("label", {
                    className: "hint",
                    innerHTML: input.hint
                }, content); //add  help tip for inputs
                domConstruct.create("div", {
                    className: "clearBoth"
                }, content);
            }));

            return content;
            //create a label and input for each filter param
        },
        _getLayerFields: function (layer) {
            var deferred = new Deferred();
            if (layer.layerObject) {
                deferred.resolve(layer);
            } else if (layer.layerId) {
                var l = this.map.getLayer(layer.layerId);
                esriRequest({
                    url: l.url + "/" + layer.id,
                    content: {
                        "f": "json"
                    },
                    callbackParamName: "callback"
                }).then(lang.hitch(this, function (response) {
                    layer.fields = response.fields;
                    deferred.resolve(layer);
                }));
            }
            return deferred.promise;
        },
        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {
                    //Optionally define additional map config here for example you can
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                editable: false,
                usePopupManager: true,
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function (response) {

                this.map = response.map;
                this.config.response = response;
                domClass.add(this.map.infoWindow.domNode, "light");
                //define the application title
                var title = this.config.title || response.itemInfo.item.title;
                dom.byId("title").innerHTML = title;
                document.title = title;


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
            }), lang.hitch(this, function (error) {
                //an error occurred - notify the user. In this example we pull the string from the
                //resource.js file located in the nls folder because we've set the application up
                //for localization. If you don't need to support multiple languages you can hardcode the
                //strings here and comment out the call in index.html to get the localization strings.
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.map.error + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
            }));
        },
        _isHosted: function (url) {
            var services = "//services";
            var features = "//features";

            return (url.indexOf(services) !== -1 || url.indexOf(features) !== -1);

        },
        _zoomFilter: function (layer) {
            //only zoom for hosted feature layers
            if (!this._isHosted(layer.layerObject.url)) {
                return;
            }
            this._startIndicator();
            if (layer.layerObject && layer.layerObject.type && layer.layerObject.type === "Feature Layer") {
                var whereClause = layer.layerObject.getDefinitionExpression() || "1=1";
                var q = new esriQuery();
                q.where = whereClause;

                var qt = new QueryTask(layer.layerObject.url);
                qt.executeForExtent(q, lang.hitch(this, function (result) {
                    if (result.extent) {
                        this.map.setExtent(result.extent, true);
                        this._stopIndicator();
                    }
                }), function (error) {
                    this._stopIndicator();
                });

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
            //Apply the configured theme to the template
            //Add the bg class to any elements that you want to display using the specified background color
            //Apply the fc class to elements that should display using the specified font color
            query(".bg").style("backgroundColor", this.theme.toString());
            query(".bg").style("color", this.color.toString());
            query(".fc").style("color", this.color.toString());
            //Style the popup title bar to use the theme color.
            query(".esriPopup .pointer").style("backgroundColor", this.theme.toString());
            query(".esriPopup .titlePane").style("backgroundColor", this.theme.toString());
            query(".esriPopup .titlePane").style("color", this.color.toString());
            query(".esriPopup. .titleButton").style("color", this.color.toString());

            registry.byId("border_container").resize();
        }
    });
});
