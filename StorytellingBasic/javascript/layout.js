dojo.require("esri.map");
dojo.require("esri.layout");
dojo.require("esri.widgets");
dojo.require("esri.arcgis.utils");



var map;
var configOptions;
var urlObject;
var embed;

function initMap(options) {
configOptions = options;



var dirNode = document.getElementsByTagName("html")[0];
if (configOptions.i18n.isRightToLeft) {
  dirNode.setAttribute("dir", "rtl");
  dojo.addClass(dirNode, "esriRtl");
  //Page Specific
  dojo.attr(dojo.byId("legendCon"), "dir", "rtl");
} else {
  dirNode.setAttribute("dir", "ltr");
  dojo.addClass(dirNode, "esriLtr");
  //Page Specific
  dojo.attr(dojo.byId("legendCon"), "dir", "ltr");
}

dojo.byId('loading').innerHTML = configOptions.i18n.viewer.loading.message;
dojo.byId('legTogText').innerHTML = configOptions.i18n.viewer.legToggle.down;

urlObject = esri.urlToObject(document.location.href);
urlObject.query = urlObject.query || {};

if(urlObject.query.embed){
  embed = urlObject.query.embed;
}

createMap();

}

function createMap() {

if (configOptions.legend === "false" || configOptions.legend === false) {
  $("#legendCon").hide();
}
if(embed === "true" || $("#mainWindow").width() < 768 && embed != "false"){
  $("#header").hide();
  $("#legendDiv").css("max-height",200);
  dijit.byId("mainWindow").layout();
}

var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
  mapOptions: {
      slider: true,
      sliderStyle: "small",
      nav: false,
      wrapAround180: true
  },
  editable: false,
  ignorePopups: false,
  bingMapsKey: configOptions.bingmapskey
});

mapDeferred.addCallback(function (response) {

  document.title = configOptions.title || response.itemInfo.item.title || "";
  dojo.byId("title").innerHTML = configOptions.title || response.itemInfo.item.title || "";
  dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";

  map = response.map;

  dojo.connect(map, "onUpdateEnd", hideLoader);

  var layers = response.itemInfo.itemData.operationalLayers;
  if (map.loaded) {
      initUI(response);
  } else {
      dojo.connect(map, "onLoad", function () {
          initUI(response);
      });
  }

});

mapDeferred.addErrback(function (error) {
  alert(configOptions.i18n.viewer.errors.createMap + dojo.toJson(error.message));
});

}


function initUI(response) {
//add chrome theme for popup
dojo.addClass(map.infoWindow.domNode, "chrome");
//add the scalebar
var scalebar = new esri.dijit.Scalebar({
  map: map,
  scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
});

$(".esriSimpleSliderIncrementButton").addClass("zoomButtonIn");
$(".zoomButtonIn").each(function (i) {
  $(this).after("<div class='esriSimpleSliderIncrementButton initExtentButton'><img style='margin-top:5px' src='images/home.png'></div>");
  $(".initExtentButton").click(function () {
      map.setExtent(map._mapParams.extent);
  });
});


var layerInfo = esri.arcgis.utils.getLegendLayers(response);

if (layerInfo.length > 0) {
  var legendDijit = new esri.dijit.Legend({
      map: map,
      layerInfos: layerInfo
  }, "legendDiv");
  legendDijit.startup();
} else {
  $("#legendCon").hide();
}
}


function hideLoader() {
$("#loadingCon").hide();
}

//Jquery Layout
$(document).ready(function (e) {
$("#legendToggle").click(function () {
  if ($("#legendDiv").css('display') == 'none') {
      $("#legTogText").html(configOptions.i18n.viewer.legToggle.up);
  } else {
      $("#legTogText").html(configOptions.i18n.viewer.legToggle.down);
  }
  $("#legendDiv").stop(true, true).slideToggle();
});
});