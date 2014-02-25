dojo.require("esri.layout");
dojo.require("esri.widgets");
dojo.require("esri.dijit.PopupMobile");
dojo.require("esri.arcgis.utils");
dojo.require("esri.geometry.Extent");
dojo.require("utilities.CreateContent");
dojo.require("dojo.Deferred");
dojo.require("dojo.DeferredList");
dojo.require("esri.dijit.LocateButton");
dojo.require("esri.dijit.HomeButton");
dojo.require("esri.dijit.Geocoder");


var map;
var options;
var appcontent;
var allResults = null;
function init(initOptions) {

    options = initOptions;

    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
    //IE8 doesn't support addEventListener so check before calling
    if (window.addEventListener) {
        window.addEventListener(orientationEvent, function() {
            orientationChanged();
        }, false);
    }


    //Build the user interface for the application. In this case it's a simple app with a header, content and a left (or floating) panel 
    appcontent = new utilities.CreateContent();
    appcontent.createLayout().then(function() {

        esri.arcgis.utils.getItem(options.webmap).then(dojo.hitch(this, function(itemInfo) {
            //let's get the web map item and update the extent if needed. 
            if (options.appid && this.options.application_extent.length > 0) {
                itemInfo.item.extent = [
                    [parseFloat(options.application_extent[0][0]), parseFloat(options.application_extent[0][1])],
                    [parseFloat(options.application_extent[1][0]), parseFloat(options.application_extent[1][1])]
                ];
            }
            createMap(itemInfo);
        }));




    });

}

function createMap(itemInfo) {
    var mapOptions = {
        sliderStyle: "small"
    };
    if (appcontent._isMobile) {
        var popup = new esri.dijit.PopupMobile(null, dojo.create("div"));
        mapOptions.infoWindow = popup;
    }
    var mapDeferred = esri.arcgis.utils.createMap(itemInfo, "map", {
        mapOptions: mapOptions,
        ignorePopups: false,
        bingMapsKey: options.bingmapskey
    });
    mapDeferred.then(function(response) {
        document.title = options.title || response.itemInfo.item.title;
        dojo.byId("title").innerHTML = options.title || response.itemInfo.item.title;
        if (dojo.byId("subtitle")) {
            dojo.byId("subtitle").innerHTML = options.subtitle || response.itemInfo.item.snippet || "";
        }


        map = response.map;

        var layers = response.itemInfo.itemData.operationalLayers;
        var filter_layers = [];
        dojo.forEach(layers, function(layer) {
            if (layer.definitionEditor) {
                filter_layers.push(getLayerFields(layer));
            } else if (layer.layers) {
                //Check ArcGISDynamicMapService layers for filters 
                dojo.forEach(layer.layers, dojo.hitch(this, function(sublayer) {
                    if (sublayer.definitionEditor) {
                        sublayer.title = layer.title;
                        sublayer.layerId = layer.id;
                        filter_layers.push(getLayerFields(sublayer));
                    }
                }));
            }
        });
        var dList = new dojo.DeferredList(filter_layers);
        dList.then(function(response) {
            var layers = [];
            /*If there are interactive filters build the filter display*/
            dojo.forEach(response, function(r, index) {
                if (response[index][0] === true) {
                    layers.push(response[index][1]);
                }
            });
            var content;
            if (layers.length > 0) {
                content = buildFilterDialog(layers);
            } else {
                content = "<div>" + options.i18n.viewer.filterNo + "</div>";
            }
            /*
             *Once the filter dialog has been created add it to the left (or floating mobile) panel
             */
            appcontent.setPanelContent(options.i18n.viewer.content_title, content, "340px");
            
            addWidgets();
        });

    }, function(error) {
        alert(options.i18n.viewer.errors.message, error);

    });

}
function addWidgets(){
    if(options.home_button){
        var homeButton = new esri.dijit.HomeButton({
            map: map
        },dojo.create("div",{},dojo.query(".esriSimpleSliderIncrementButton")[0],"after"));
        homeButton.startup();
    }
    
    if(options.locate_button){
        var locateDiv = dojo.create("div",{id:"locateDiv"}, "map");
        var locationButton = new esri.dijit.LocateButton({
            map: map
        },locateDiv);
        locationButton.startup();
    }
    
    
    if(options.geocoder){
        createGeocoder();

    }

}
function createGeocoder(){
        //add the geocoder widget as a child of the map div. This widget
        //is positioned using css. Search main.css for the geocoderDiv selector

        var options = createGeocoderOptions();

        var geocoderDiv = dojo.create("div",{id:"geocoderDiv"},"map");
        var geocoder = new esri.dijit.Geocoder(options,geocoderDiv);


        geocoder.startup();

        geocoder.on("find-results", checkResults); 
        geocoder.on("select", showGeocodingResult);
        geocoder.on("auto-complete", clearGeocodeResults);
        geocoder.on("clear", clearGeocodeResults);

}
function createGeocoderOptions(){
            //Check for multiple geocoder support and setup options for geocoder widget. 
            var hasEsri = false,
                geocoders = dojo.clone(options.helperServices.geocode);

            dojo.forEach(geocoders, function (geocoder, index) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    hasEsri = true;
                    geocoder.name = "Esri World Geocoder";
                    geocoder.outFields = "Match_addr, stAddr, City";
                    geocoder.singleLineFieldName = "Single Line";
                    geocoder.esri = geocoder.placefinding = true;
  
                }

            });
            //only use geocoders with a singleLineFieldName that allow placefinding
            geocoders = dojo.filter(geocoders, function (geocoder) {
                return (esri.isDefined(geocoder.singleLineFieldName) && esri.isDefined(geocoder.placefinding) && geocoder.placefinding);
            });
            var esriIdx;
            if (hasEsri) {
                for (var i = 0; i < geocoders.length; i++) {
                    if (esri.isDefined(geocoders[i].esri) && geocoders[i].esri === true) {
                        esriIdx = i;
                        break;
                    }
                }
            }
            var goptions = {
                map: this.map,
                autoNavigate: false,
                theme: "simpleGeocoder",
                autoComplete:hasEsri

            }
   
   
            if (hasEsri && esriIdx === 0) {

                goptions.minCharacters = 0;
                goptions.maxLocations = 5;
                goptions.searchDelay = 100
                goptions.arcgisGeocoder = geocoders.splice(0, 1)[0]; //geocoders[0];
                if (geocoders.length > 0) {
                    goptions.geocoders = geocoders;
                }
            } else {
                //options.autoComplete = false;
                goptions.arcgisGeocoder = false;
                goptions.geocoders = geocoders;
            }

            return goptions;

}
function checkResults(geocodeResults){
        allResults = null;
        if (geocodeResults && geocodeResults.results && geocodeResults.results.results) {
            geocodeResults.results = geocodeResults.results.results;
        }
        if ((!geocodeResults || !geocodeResults.results || !geocodeResults.results.length)) {
            //No results
            console.log("No results found");
        } else if (geocodeResults) {
            allResults = geocodeResults.results;
        }

}
function clearGeocodeResults(){
        if(map.infoWindow.isShowing){
            map.infoWindow.hide();
        }
        allResults = null;


}
function showGeocodingResult(geocodeResult, pos) {
    if (!esri.isDefined(pos)) {
        pos = 0;
    }

    if (geocodeResult.result) {
        geocodeResult = geocodeResult.result;
    }

    if (geocodeResult.extent) {
        setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, geocodeResult.extent, geocodeResult, pos);
    } else { //best view 
        var bestView = map.extent.centerAt(geocodeResult.feature.geometry).expand(0.0625);
        setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, bestView, geocodeResult, pos);
    }
}
function setupInfoWindowAndZoom(content, geocodeLocation, newExtent, geocodeResult, pos) {
    map.infoWindow.clearFeatures();

    //Show info window
    if (allResults && allResults.length > 1) {
        //let's update the content to show additional results 
        var currentLocationName = content;
        var attr = allResults[pos].feature.attributes;
        content = "<div id='geocodeCurrentResult' style='display:none;'><span style='font-weight:bold;'>";
        content += "Current Location";
        content += "</span></div>";
        content += "<span>";

        if (!attr.Match_addr) {
            content += currentLocationName;
        } else {
            content += attr.Match_addr;
            if (attr.stAddr && attr.City) {
                content += " - " + attr.stAddr + ", " + attr.City;
            } else if (attr.stAddr) {
                content += " - " + attr.stAddr;
            }
        }

        content += "</span>";
        content += "<div id='geocodeWantOtherResults'>";
        content += "<A onClick='showOtherResults();' href='#'>";

        content += "Not what you wanted";
        content += "</A>";
        content += "</div>";
        content += "<div id='geocodeOtherResults' style='display:none;'><span style='font-weight:bold;'>";
        content += "Select another";
        content += "</span><br/>";
        for (var i = 0; i < allResults.length; i++) {
            if (i !== pos) {
                var result = allResults[i];
                attr = result.feature.attributes;
                content += "<A href='#' onClick='selectAnotherResult(" + i + ")'>";
                if (!attr.Match_addr) {
                    content += result.name;
                } else {
                    //content += result.feature.attributes.Place_addr ? (" - " + result.feature.attributes.Place_addr) : ""
                    content += attr.Match_addr;
                    if (attr.stAddr && attr.City) {
                        content += " - " + attr.stAddr + ", " + attr.City;
                    } else if (attr.stAddr) {
                        content += " - " + attr.stAddr;
                    }
                }

                content += "</A><br/>";
            }
        }
        content += "</div>";

    }

    //display a popup for the result
    map.infoWindow.setTitle("Location");
    map.infoWindow.setContent(content);
    //Ensure popups don't interfere with the editor window contents. 
    var handler = dojo.connect(map.infoWindow, "onHide", function () {
        dojo.disconnect(handler);
        if (editorWidget) {
            destroyEditor();
            createEditor();
        }
    });

    var location = new esri.geometry.Point(geocodeLocation.x, geocodeLocation.y, geocodeLocation.spatialReference);
    var extentHandler = dojo.connect(map, "onExtentChange", function () {
        map.infoWindow.show(location);
        dojo.disconnect(extentHandler);
    });

    map.setExtent(newExtent);

}
function showOtherResults() {
    dojo.style(dojo.byId("geocodeWantOtherResults"), "display", "none");
    dojo.style(dojo.byId("geocodeCurrentResult"), "display", "block");
    dojo.style(dojo.byId("geocodeOtherResults"), "display", "block");

}

function selectAnotherResult(pos) {
    showGeocodingResult(allResults[pos], pos);
}


function buildFilterDialog(layers) {
    /*
     *  Build the filter dialog including explanatory text and add a submit button for each filter group.
     */
    var filterContainer = dojo.create("div", {
        id: "container",
        className: options.i18n.isRightToLeft ? 'esriRtl' : 'esriLtr',
        innerHTML: options.filterInstructions || options.i18n.viewer.filterInstructions
    });
    dojo.forEach(layers, function(layer) { //add a list item for each layer and add the filters 
        var filterGroup = dojo.create("div", {
            className: "filter"
        }, filterContainer);

        dojo.create("legend", {
            innerHTML: layer.title
        }, filterGroup);

        //add friendly text that explains the query - first get parameter inputs then update the expression 
        var exp = layer.definitionEditor.parameterizedExpression;
        var infoText = "";
        if (exp.indexOf("OR") !== -1) {
            infoText = options.i18n.viewer.filterOr;
        } else if (exp.indexOf("AND") !== -1) {
            infoText = options.i18n.viewer.filterAnd;
        }

        dojo.create("div", {
            className: "instructions",
            innerHTML: infoText
        }, filterGroup);


        var results = addFilter(layer);
        dojo.place(results, filterGroup);


        //add an apply button to the layer filter group

        var b = dojo.create("input", {
            type: "button",
            className: "submitButton",
            value: options.button_text || options.i18n.viewer.button_text
        }, filterGroup, "last");

        dojo.connect(b, "onclick", dojo.hitch(this, function() {
            //if it's a mobile device close the filter panel 
            appcontent.hidePanelContent();

            //hide the info window if displayed
            if (map.infoWindow.isShowing) {
                map.infoWindow.hide();
            }

            //start the busy indicator 
            esri.show(dojo.byId("loader"));

            //get the input values to the filter - if not value is specified use the defaults 
            var values = [];
            dojo.forEach(layer.definitionEditor.inputs, function(input) {
                dojo.forEach(input.parameters, function(param) {
                    var widget_id = layer.id + "." + param.parameterId + ".value";
                    var widget = dojo.byId(widget_id);
                    var value = widget.value;


                    //is it a number

                    var defaultValue = isNaN(param.defaultValue) ? param.defaultValue : dojo.number.parse(param.defaultValue);

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
                });
            });

            var defExp = dojo.replace(layer.definitionEditor.parameterizedExpression, values);

            //Apply the filter - different approach for Feature Layer and Dynamic Layer 
            if (layer.layerObject && layer.layerObject.type === "Feature Layer") {
                stopIndicator(layer.layerObject);
                layer.layerObject.setDefinitionExpression(defExp);
            } else if (layer.layerId) { //dynamic layer
                var layerDef = [];
                layerDef[layer.id] = defExp;
                var mapLayer = map.getLayer(layer.layerId);
                stopIndicator(mapLayer);
                mapLayer.setLayerDefinitions(layerDef);
            }

        }));

    });

    return filterContainer;

}

function stopIndicator(layer) {
    //stop the busy indicator when the layer's updated 
    var handler = dojo.connect(layer, "onUpdateEnd", function() {
        esri.hide(dojo.byId("loader"));
        dojo.disconnect(handler);
    });
}

function addFilter(layer) {
    /*
     *Build UI for each filter associated with the layer . Layers can have
     *more than one filter and each filter can have multiple input parameters.
     */
    var content = dojo.create("div");


    dojo.forEach(layer.definitionEditor.inputs, function(input) {
        dojo.create("label", {
            innerHTML: input.prompt
        }, content); //add prompt text to panel 

        var pcontent = dojo.create("div", {
            className: "row"
        }, content);
        dojo.forEach(input.parameters, function(param, index) {
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
            dojo.some(fields, function(f) {
                if (f.name === param.fieldName) {
                    field = f;
                    return true;
                }
            });
            if (field && field.domain && field.domain.codedValues) {
                //create a select tag
                var select = dojo.create("select", {
                    id: param.inputId
                });
                var options = select.options;
                options.length = 0;
                dojo.forEach(field.domain.codedValues, function(val, index) {
                    options[index] = new Option(val.name, val.code);
                });
                paramInputs = select;
            } else if (field && field.type === "esriFieldTypeInteger") { //the pattern forces the numeric keyboard on iOS. The numeric type works on webkit browsers only
                paramInputs = dojo.replace("<input class='param_inputs'  type='number'  id='{inputId}' pattern='[0-9]*'  value='{defaultValue}' />", param);
            } else { //string 
                paramInputs = dojo.replace("<input class='param_inputs'  type='text'  id='{inputId}' value='{defaultValue}' />", param);
            }
            if (index < input.parameters.length - 1) {
                //insert an AND into the expression 
                paramInputs += " <div> AND</div> ";
            }
            dojo.place(paramInputs, pcontent);
        });

        dojo.create("label", {
            className: "hint",
            innerHTML: input.hint
        }, content); //add  help tip for inputs 

        dojo.create("div", {
            className: "clearBoth"
        }, content);
    });

    return content;
    //create a label and input for each filter param 

}

function getLayerFields(layer) {

    if (layer.layerObject) {
        var deferred = new dojo.Deferred();
        deferred.resolve(layer);
        return deferred.promise;
    } else if (layer.layerId) {
        var l = map.getLayer(layer.layerId);
        return esri.request({
            url: l.url + "/" + layer.id,
            content: {
                "f": "json"
            },
            callbackParamName: "callback",
            load: function(response) {
                layer.fields = response.fields;
                return layer;
            }
        });
    }


}

function orientationChanged() {
    if (map) {
        map.reposition();
        map.resize();
    }
}
