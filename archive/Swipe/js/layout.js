dojo.require("esri.map");
dojo.require("esri.arcgis.utils");
dojo.require("esri.dijit.Legend");
dojo.require("esri.dijit.Scalebar");
dojo.require("esri.dijit.InfoWindow");
dojo.require("esri.IdentityManager");

var bottomMap;
var topMap;
var _inProgress = false;
var mapExtent = null;
var k = 0;
var configOptions;

function initMaps(options) {
  configOptions = options;


  dojo.byId('loadingMsg').innerHTML = configOptions.i18n.viewer.main.loadingMessage;
  
  //replace the web maps in the config file with the url params
  if(configOptions.webmap){
      configOptions.webmaps = getWebMaps(configOptions.webmap);
  }
 
  if(!configOptions.title){
  	configOptions.title = configOptions.i18n.viewer.main.title;
  }
  if(!configOptions.subtitle){
  	configOptions.subtitle = configOptions.i18n.viewer.main.subtitle;
  }
 
  document.title = configOptions.title;
  dojo.byId('title').innerHTML = configOptions.title;
  dojo.byId('subtitle').innerHTML = configOptions.subtitle;

  /*****************
   * Hook up jQuery
   *****************/
  $(document).ready(jQueryReady);
  
  initBottomMap();
	
}
  
  
function initBottomMap(){
  var bottomMapDeferred = esri.arcgis.utils.createMap(configOptions.webmaps[0].id,"map1",{
    mapOptions: {
      extent: mapExtent,
      slider: true,
      showAttribution:true,
      nav: false,
      wrapAround180: true
    },
    bingMapsKey:configOptions.bingmapskey
  });

  bottomMapDeferred.addCallback(function (response) {

    dojo.byId("bottomMapTitle").innerHTML = response.itemInfo.item.title;

    bottomMap = response.map;

    dojo.connect(bottomMap, "onExtentChange", syncTopMap);
   //dojo.connect(bottomMap, "onUpdateEnd", hideLoader);

 
    if (bottomMap.loaded) {
      bottomMapLayers(response);
      setMapExtent();
    } else {
      dojo.connect(bottomMap, "onLoad", function () {
        bottomMapLayers(response);
        setMapExtent();
      });
    }
  });
  bottomMapDeferred.addErrback(function (error) {
     alert(configOptions.i18n.viewer.errors.createMap + " : " +  error.message);
  });
}

function initTopMap() {
  var topMapDeferred = esri.arcgis.utils.createMap(configOptions.webmaps[1].id,"map2",{
    mapOptions: {
      extent: mapExtent,
      slider: true,
      showAttribution:true,
      nav: false,
      wrapAround180: true
    },
    bingMapsKey: configOptions.bingmapskey
  });

  topMapDeferred.addCallback(function (response) {

    dojo.byId("topMapTitle").innerHTML = response.itemInfo.item.title;

    topMap = response.map;

    dojo.connect(topMap, "onExtentChange", syncBottomMap);

    //add the legend

    if (topMap.loaded) {
      topMapLayers(response);
       initiateSwipe();
    } else {
      dojo.connect(topMap, "onLoad", function () {
        topMapLayers(response);
		    initiateSwipe();
      });
    }
  });
  topMapDeferred.addErrback(function (error) {
    alert(configOptions.i18n.viewer.errors.createMap + " : " +  error.message);
  });
}

function topMapLayers(response) {
  //add chrome theme for popup
  dojo.addClass(topMap.infoWindow.domNode, "chrome");

  //add a scalebar
  var scalebar = new esri.dijit.Scalebar({
    map: topMap,
    scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
  });
  var layerInfos = esri.arcgis.utils.getLegendLayers(response);
  //add a legend
  var legend = new esri.dijit.Legend({
    layerInfos:layerInfos,
    map: topMap
  }, "legendDiv");
  legend.startup();


}

function bottomMapLayers(response) {
  //add chrome theme for popup
  dojo.addClass(bottomMap.infoWindow.domNode, "chrome");

  //add a scalebar
  var scalebar = new esri.dijit.Scalebar({
    map: bottomMap,
    scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
  });
  //add a legend
  var layerInfos = esri.arcgis.utils.getLegendLayers(response);
  var legend = new esri.dijit.Legend({
    layerInfos:layerInfos,
    map: bottomMap
  }, "legendDiv2");
  legend.startup();
}

function initiateSwipe() {

  setTimeout(function(){
    $("#resizeWrapper").animate({
      width: 450
    }, "200");
  }, 800);
  
  setTimeout(function(){
    syncBottomMap();
    $("#map2").css('width', dojo.byId('map1').clientWidth);
  }, 400);

}

function syncTopMap() {
  if (k == 1){
	  if (_inProgress == true) {
		_inProgress = false;
		return;
	  }
	  _inProgress = true;
	  topMap.setExtent(bottomMap.extent);
  }
}

function syncBottomMap() {
  if (_inProgress == true) {
    _inProgress = false;
    return;
  }
  _inProgress = true;
  bottomMap.setExtent(topMap.extent);
   k = 1;
  hideLoader();
}

function hideLoader() {

  //if (k == 1) {
    $("#loadingCon").hide();
  //}
}

function setMapExtent() {
  mapExtent = bottomMap.extent;
  initTopMap();
}

function resizeMapDiv() {
  $("#map2").css('width', dojo.byId('map1').clientWidth);
  $("#map2").css('height', dojo.byId('map1').clientHeight);
  if(bottomMap){
    bottomMap.resize();
  }
  if(topMap){
  topMap.resize();
  }
}




function jQueryReady(){
$(function () {
  $("#resizeWrapper").resizable({
    handles: 'e',
    containment: 'parent',
    minWidth: 2
  });
});

  $("#legendToggle").click(function () {
    if ($("#legendDiv").css('display') == 'none') {
      $("#legImg1").attr('src', 'images/legendUp.png');
    } else {
      $("#legImg1").attr('src', 'images/legendDown.png');
    }
    $("#legendDiv").slideToggle();
  });
  $("#legendToggle2").click(function () {
    if ($("#legendDiv2").css('display') == 'none') {
      $("#legImg2").attr('src', 'images/legendUp.png');
    } else {
      $("#legImg2").attr('src', 'images/legendDown.png');
    }
    $("#legendDiv2").slideToggle();
  });
  $("#map1, #map2, .ui-resizable-e").mousedown(function () {
    $("#legendDiv").slideUp('fast');
    $("#legendDiv2").slideUp('fast');
    $("#legImg1").attr('src', 'images/legendDown.png');
    $("#legImg2").attr('src', 'images/legendDown.png');
  });
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
    webmapresults = [previewWebMap, previewWebMap];
  }
  return webmapresults;
}
