define(["dojo/_base/declare", "dojo/_base/array", "dojo/_base/lang", "dojo/_base/kernel", "dojo/number", "dojo/dom", "dojo/query", "dojo/dom-construct", "dojo/dom-style", "dojo/dom-class", "dojo/Deferred", "dojo/promise/all", "dojo/ready", "dojo/request/script", "dojo/Stateful", "dojo/string", "dojo/Evented", "dojo/i18n!application/nls/resources", "dojo/on", "esri/request", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (
declare, array, lang, dojo, number, dom, dojoQuery, domConstruct, domStyle, domClass, Deferred, all, ready, script, Stateful, string, Evented, i18n, on, esriRequest, Query, QueryTask) {
    return declare("application.Filter", [Stateful, Evented], {
        options: {
            map: null,
            layers: [],
            filterLayers: [],
            filterDropdown: null,
            button_text: null,
            webmap: null,
            displayClear: false,
            dislayZoom: false,
            filterOnLoad: false,
            filterInstructions: null
        },
        constructor: function (options) {
            // mixin options
            var defaults = lang.mixin({}, this.options, options);
            // properties
            this.set("map", defaults.map);
            this.set("layers", defaults.layers);
            this.set("filterDropdown", defaults.dropdown);

            // private vars
            this._deferreds = [];
            this._events = [];


            // map required
            if (!this.map) {
                console.log("Filter::Reference to esri.Map object required");
                return;
            }

            // dom ready
            ready(lang.hitch(this, function () {
                // query when map loads
                if (this.map.loaded) {
                    this._init();
                }
                else {
                    var onLoad = on.once(this.map, "load", lang.hitch(this, function () {
                        this._init();
                    }));
                    this._events.push(onLoad);
                }
                // loaded
                this.set("loaded", true);
                this.emit("load", {});
            }));
        },
        destroy: function () {
            // remove events
            if (this._events && this._events.length) {
                for (var i = 0; i < this._events.length; i++) {
                    this._events[i].remove();
                }
            }
        },
        _init: function () {

        },
        createFilterContent: function () {
            var deferred = new Deferred();
            this._filterLayers();
            all(this.filterLayers).then(lang.hitch(this, function (response) {
                var layers = []; /*If there are interactive filters build the filter display*/
                array.forEach(response, lang.hitch(this, function (r, index) {
                    layers.push(r);
                }));
                var content;
                if (layers.length > 0) {
                    content = this._buildFilterDialog(layers);
                } else {
                    var noFilterText = string.substitute(i18n.viewer.filterNo,{"link":"<a target='_blank' href='" + i18n.viewer.filterLink  +"'>" + i18n.viewer.filterLink + "</a>"});
                    content = "<div style='padding:8px;'>" + noFilterText + "</div>";
                }
                deferred.resolve(content);


            }));
            return deferred.promise;

        },
        _filterLayers: function () {
            var filterLayers = [];
            array.forEach(this.layers, lang.hitch(this, function (layer) {
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
                    if (this.webmap.itemInfo && this.webmap.itemInfo.relatedItemsData && this.webmap.itemInfo.relatedItemsData[layer.itemId]) {
                        var item = this.webmap.itemInfo.relatedItemsData[layer.itemId];
                        if (item.definitionEditor) {
                            layer.definitionEditor = item.definitionEditor;
                            filterLayers.push(this._getLayerFields(layer));
                        }
                    }
                }
            }));
            this.filterLayers = filterLayers;
            return filterLayers;
        },
        _stopIndicator: function (layer) {
            domClass.remove(dom.byId("loader"), "startLoader");
        },
        _startIndicator: function () {
            domClass.add(dom.byId("loader"), "startLoader");
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
                        paramInputs += " <div class='connector'> AND</div> ";
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
        _buildFilterDialog: function (layers) {

            //If only one layer has a filter then display it.
            //If multiple layers have a filter create a dropdown then show/hide the filters.
            // Build the filter dialog including explanatory text and add a submit button for each filter group.
            var filterContainer = domConstruct.create("div", {
                id: "container",
                className: i18n.isRightToLeft ? "esriRtl" : "esriLtr",
                innerHTML: this.filterInstructions || i18n.viewer.filterInstructions
            });
            if (this.filterDropdown) {
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
                        options[index] = new Option(val.name || val.title, index);
                    });
                    on(select, "change", function () {
                        var value = select.value;
                        //Show the selected filter
                        dojoQuery(".filter").forEach(lang.hitch(this, function (node) {
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
                if (this.filterDropdown && index > 0) {
                    domStyle.set(filterGroup, "display", "none");
                }

                if (this.filterDropdown === false) {
                    domConstruct.create("legend", {
                        innerHTML: "<span>" + layer.title + "</span>"
                    }, filterGroup);
                } else if (this.filterDropdown && layers.length === 1) {
                    domConstruct.create("legend", {
                        innerHTML: "<span>" + layer.title + "</span>"
                    }, filterGroup);
                }
                //add friendly text that explains the query - first get parameter inputs then update the expression
                var exp = layer.definitionEditor.parameterizedExpression;
                var infoText = "";
                if (exp.indexOf("OR") !== -1) {
                    infoText = i18n.viewer.filterOr;
                } else if (exp.indexOf("AND") !== -1) {
                    infoText = i18n.viewer.filterAnd;
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
                    value: this.button_text || i18n.viewer.button_text
                }, filterGroup, "last");



                if (this.displayClear) {

                    var clear = domConstruct.create("span", {
                        className: "cancelButton icon-cancel",
                        id: layer.id + "_clear",
                        title: "Clear" //i18n.viewer.clear_text
                    }, filterGroup);
                    on(clear, "click", lang.hitch(this, function () {
                        if (layer.layerType && layer.layerType === "ArcGISStreamLayer") {
                            layer.clear();
                        } else {
                            this._applyDefinitionExpression(layer, null);
                        }
                        if (this.map.infoWindow.isShowing) {
                            this.map.infoWindow.hide();
                        }
                    }));

                }

                //only valid for hosted feature layers.
                if (this.displayZoom) {
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
                if (this.filterOnLoad === false) {
                    this._applyDefinitionExpression(layer, null);

                }

                on(b, "click", lang.hitch(this, function () {
                    this._startIndicator();
                    this._createDefinitionExpression(layer);

                }));

            }));

            return filterContainer;

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
                var q = new Query();
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
        }
    });
});