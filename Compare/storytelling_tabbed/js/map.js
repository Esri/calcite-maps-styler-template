dojo.require("esri.layout");
dojo.require("esri.widgets");


dojo.require("esri.arcgis.utils");



var map;
var configOptions;

var j = 0;
var mapChange = false;
var mapExtent;
//var firstMap = false;
var _maps = [];

function initMap(options) {

    configOptions = options;


    configOptions.introTitle = configOptions.introTitle || configOptions.i18n.viewer.splash.introTitle
    configOptions.introText = configOptions.introText ||  configOptions.i18n.viewer.splash.introText
    configOptions.title = configOptions.title || configOptions.i18n.viewer.splash.title;

    if(configOptions.navigationTabs[0]){
        configOptions.navigationTabs[0].title = configOptions.navigationTabs[0].title || configOptions.i18n.viewer.tabs.map1Label;  
    }
    if(configOptions.navigationTabs[1]){
        configOptions.navigationTabs[1].title = configOptions.navigationTabs[1].title || configOptions.i18n.viewer.tabs.map2Label;  
    }
    if(configOptions.navigationTabs[2]){
        configOptions.navigationTabs[2].title = configOptions.navigationTabs[2].title || configOptions.i18n.viewer.tabs.map3Label;  
    }
    if(configOptions.navigationTabs[3]){
        configOptions.navigationTabs[3].title = configOptions.navigationTabs[3].title || configOptions.i18n.viewer.tabs.map4Label;  
    }

    dojo.byId('continue').innerHTML = configOptions.i18n.viewer.splash.title;
    dojo.byId('introTab').innerHTML = configOptions.i18n.viewer.tabs.title;


    if (configOptions.webmap) {
        configOptions.webmaps = getWebMaps(configOptions.webmap);
    }


    createMap();
    introImgSetup();
    bannerSetup();

}


function createMap() {

    $("#mapContainer").append("<div id='mapDiv" + [j] + "' class='map'></div>");

    $("#sidePanel").append("<table id='content" + [j] + "' class='sideContent'><tr><td><h3 id='title" + [j] + "' class='mapTitle'></h3></td></tr><tr><td><div id='description" + [j] + "' class='mapText'></div></td></tr><tr><td><div id='legend" + [j] + "' class='legText' style='padding-top:20px;'></div></td></tr></table>");


    var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmaps[j].id, "mapDiv" + [j], {
        mapOptions: {
            slider: true,
            nav: false,
            wrapAround180: true,
            extent: mapExtent
        },
        ignorePopups: false,
        bingMapsKey: configOptions.bingmapskey
    });

    mapDeferred.addCallback(function (response) {

        dojo.byId("title" + [j]).innerHTML = response.itemInfo.item.title || "";
        dojo.byId("description" + [j]).innerHTML = response.itemInfo.item.description || "";
        map = response.map;
        eval("map" + [j] + " = response.map");
        _maps.push(response.map);
        if(configOptions.syncMaps === true){
            mapExtent = map.extent;
        }


        dojo.connect(eval("map" + [j]), "onUpdateEnd", mapLoaded);
        dojo.connect(eval("map" + [j]), "onExtentChange", syncMaps);
        dojo.connect(eval("map" + [j]), "onUpdateEnd", syncMaps);


        var layers = response.itemInfo.itemData.operationalLayers;
        if (eval("map" + [j]).loaded) {
            initUI(layers);
        } else {
            dojo.connect(eval("map" + [j]), "onLoad", function () {
                initUI(layers);
            });
        }
        //resize the map when the browser resizes
        dojo.connect(dijit.byId('map'), 'resize', eval("map" + [j]), eval("map" + [j]).resize);
    });

    mapDeferred.addErrback(function (error) {
        alert(configOptions.i18n.viewer.errors.createMap + " : " + error.message);
    });



}

function initUI(layers) {
    //add chrome theme for popup
    dojo.addClass(eval("map" + [j]).infoWindow.domNode, "chrome");
    //add the scalebar
    var scalebar = new esri.dijit.Scalebar({
        map: eval("map" + [j]),
        scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
    });

    var layerInfo = buildLayersList(layers);

    if (layerInfo.length > 0) {
        var legendDijit = new esri.dijit.Legend({
            map: eval("map" + [j]),
            layerInfos: layerInfo
        }, 'legend' + [j]);
        legendDijit.startup();
    } else {
        dojo.byId('legend' + [j]).innerHTML = configOptions.i18n.viewer.sidePanel.message;
    }

}

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


function getWebMaps(webmaps) {
    if (webmaps.indexOf(',') !== -1) {
        var mapIds = webmaps.split(',');
        webmapresults = dojo.map(mapIds, function (mapId) {
            return {
                id: mapId
            };
        });
    } else {
        var previewWebMap = {
            id: webmaps
        };
        webmapresults = [previewWebMap, previewWebMap, previewWebMap];
    }
    return webmapresults;
}

function getTabs(tabs) {
    if (tabs.indexOf(',') !== -1) {
        var mapIds = tabs.split(',');
        tabresults = dojo.map(mapIds, function (mapId) {
            return {
                title: mapId
            };
        });
    } else {
        var previewTab = {
            title: tabs
        };
        tabresults = [previewTab, previewTab, previewTab];
    }
    return tabresults;
}

/*function setExtent() {
    if (configOptions.syncMaps == true) {
        if (firstMap == false) {
            mapExtent = map0.extent();
            firstMap = true;
        }
    }
}*/

function mapLoaded() {
    mapChange = true;
    $('#loadImg').hide();
    $(".links").css('cursor', 'pointer');
    $(".selected").css('cursor', 'default');
}