dojo.require("esri.map");
dojo.require("esri.layout");
dojo.require("esri.widgets");
dojo.require("esri.arcgis.utils");
dojo.require("esri.IdentityManager");
dojo.require("dojo.Deferred");



var mapChange = false;
var mapExtent;
var firstMap = false;
var mapsLoaded = 1;
var urlObject;
var embed;



function initMap(options) {
    configOptions = options;



    var dirNode = document.getElementsByTagName("html")[0];
    if (configOptions.i18n.isRightToLeft) {
        dirNode.setAttribute("dir", "rtl");
        dojo.addClass(dirNode, "esriRtl");
        //Page Specific
        dojo.forEach(dojo.query(".legend"), function (leg) {
            dojo.attr(leg, "dir", "rtl");
        });
        dojo.forEach(dojo.query(".description"), function (leg) {
            dojo.attr(leg, "dir", "rtl");
        });
    } else {
        dirNode.setAttribute("dir", "ltr");
        dojo.addClass(dirNode, "esriLtr");
        //Page Specific
        dojo.forEach(dojo.query(".legend"), function (leg) {
            dojo.attr(leg, "dir", "ltr");
        });
        dojo.forEach(dojo.query(".description"), function (leg) {
            dojo.attr(leg, "dir", "ltr");
        });
    }



    dojo.byId('loadText').innerHTML = configOptions.i18n.viewer.loading.message;
    dojo.byId('syncHead').innerHTML = configOptions.i18n.viewer.sync.head;
    dojo.byId('scale').innerHTML = configOptions.i18n.viewer.sync.scale;
    dojo.byId('location').innerHTML = configOptions.i18n.viewer.sync.location;
    dojo.byId('legText').innerHTML = configOptions.i18n.viewer.toggles.legend;
    dojo.byId('desText').innerHTML = configOptions.i18n.viewer.toggles.description;

    urlObject = esri.urlToObject(document.location.href);
    urlObject.query = urlObject.query || {};

    if(urlObject.query.embed){
      embed = urlObject.query.embed;
    }

    
    if(configOptions.webmap){
      configOptions.webmaps = getWebMaps(configOptions.webmap);
    }
    initMaps();
    //bannerSetup();

}


function createMap(j) {

    //esriConfig.defaults.map.slider = { left:200 };
    if(embed === "true" || $("#mainWindow").width() < 768 && embed != "false"){
      $("#banner").hide();
      $("#header").css("height",70);
      dijit.byId("mainWindow").layout();
    }

    var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmaps[j].id, "mapDiv" + [j], {
        mapOptions: {
            slider: true,
            sliderPosition: "top-right",
            nav: false,
            wrapAround180: true,
            extent: mapExtent
        },
        ignorePopups: false,
        bingMapsKey: configOptions.bingmapskey
    });

    mapDeferred.addCallback(function (response) {
        //if no title is defined in the config use the web map's title instead. 
        configOptions.title = configOptions.title || response.itemInfo.item.title || "";
        configOptions.subtitle = configOptions.subtitle || response.itemInfo.item.snippet || "";
        dojo.byId("title" + [j]).innerHTML = response.itemInfo.item.title;

        dojo.byId("description" + [j]).innerHTML = response.itemInfo.item.description;

        eval("map" + [j] + " = response.map");

        dojo.connect(eval("map" + [j]), "onUpdateEnd", hideLoader);
        dojo.connect(eval("map" + [j]), "onExtentChange", syncMaps);
        dojo.connect(eval("map" + [j]), "onPanEnd", enableSyncing);
        dojo.connect(eval("map" + [j]), "onZoomEnd", enableSyncing);

        var layers = response.itemInfo.itemData.operationalLayers;
        if (eval("map" + [j]).loaded) {
            initUI(layers, j);
        } else {
            dojo.connect(eval("map" + [j]), "onLoad", function () {
                initUI(layers, j);
            });
        }
    });

    mapDeferred.addErrback(function (error) {
        alert(configOptions.i18n.viewer.errors.createMap + " " + dojo.toJson(error.message));
    });



}

function initUI(layers, j) {
    //add chrome theme for popup
    dojo.addClass(eval("map" + [j]).infoWindow.domNode, "chrome");
    //add the scalebar
    /*
    var scalebar = new esri.dijit.Scalebar({
      map: eval("map"+[j]),
      scalebarUnit:configOptions.i18n.viewer.main.scaleBarUnits //metric or english
    });
  */
    var layerInfo = buildLayersList(layers);

    if (layerInfo.length > 0) {
        var legendDijit = new esri.dijit.Legend({
            map: eval("map" + [j]),
            layerInfos: layerInfo
        }, 'legend' + [j]);
        legendDijit.startup();
    } else {
        dojo.byId('legend' + [j]).innerHTML = 'No Legend';
    }

}
 //build a list of layers to dispaly in the legend

function buildLayersList(layers) {

    //layers  arg is  response.itemInfo.itemData.operationalLayers;
    var layerInfos = [];
    dojo.forEach(layers, function (mapLayer, index) {
        var layerInfo = {};
        if (mapLayer.featureCollection && mapLayer.type !== "CSV") {
            if (mapLayer.featureCollection.showLegend === true) {
                dojo.forEach(mapLayer.featureCollection.layers, function (fcMapLayer) {
                    if (fcMapLayer.showLegend !== false) {
                        layerInfo = {
                            "layer": fcMapLayer.layerObject,
                            "title": mapLayer.title,
                            "defaultSymbol": false
                        };
                        if (mapLayer.featureCollection.layers.length > 1) {
                            layerInfo.title += " - " + fcMapLayer.layerDefinition.name;
                        }
                        layerInfos.push(layerInfo);
                    }
                });
            }
        } else if (mapLayer.showLegend !== false && mapLayer.layerObject) {
            var showDefaultSymbol = false;
            if (mapLayer.layerObject.version < 10.1 && (mapLayer.layerObject instanceof esri.layers.ArcGISDynamicMapServiceLayer || mapLayer.layerObject instanceof esri.layers.ArcGISTiledMapServiceLayer)) {
                showDefaultSymbol = true;
            }
            layerInfo = {
                "layer": mapLayer.layerObject,
                "title": mapLayer.title,
                "defaultSymbol": showDefaultSymbol
            };
            //does it have layers too? If so check to see if showLegend is false
            if (mapLayer.layers) {
                var hideLayers = dojo.map(dojo.filter(mapLayer.layers, function (lyr) {
                    return (lyr.showLegend === false);
                }), function (lyr) {
                    return lyr.id;
                });
                if (hideLayers.length) {
                    layerInfo.hideLayers = hideLayers;
                }
            }
            layerInfos.push(layerInfo);
        }
    });
    return layerInfos;
}



function setExtent() {
    if (configOptions.syncMaps == true) {
        if (firstMap == false) {
            mapExtent = map0.extent();
            firstMap = true;
        }
    }
}

function hideLoader() {
    bannerSetup();
    if (mapsLoaded == configOptions.webmaps.length) {
        $("#loadingCon").hide();
        syncMaps();
        if (configOptions.webmaps.length == 2) {
            $("#mapDiv1_zoom_slider").show();
        }
    } else {
        mapsLoaded++
    }
}

function resizeMaps() {
    if (map0 != null) {
        map0.resize();
    }
    if (map1 != null) {
        map1.resize();
    }
    if (map2 != null) {
        map2.resize();
    }
}

$(window).resize(function (e) {
    resizeMaps();
});

function getWebMaps(webmaps) {
    if (webmaps.indexOf(',') !== -1) {
        var mapIds = webmaps.split(',');
        
        webmapresults = dojo.map(mapIds, function (mapId) {
            return {
                id: dojo.string.trim(mapId)
            };
        });
    } else {
        var previewWebMap = {
            id: webmaps
        };
        webmapresults = [previewWebMap, previewWebMap, previewWebMap];
    }

    if (webmapresults.length < 2) {
        webmapresults[1] = webmapresults[0];
    }

    return webmapresults;
}