dojo.require("esri.widgets");
dojo.require("esri.arcgis.utils");


var map, urlObject;
var i18n;

function initMap() {


  i18n = dojo.i18n.getLocalization("esriTemplate", "template");
  
  //Bi-directional language support added to support right-to-left languages like Arabic and Hebrew
  //Note: The map must stay ltr
  dojo.some(["ar","he"], function(l){
    if(dojo.locale.indexOf(l) !== -1){
        configOptions.isRightToLeft = true;
        return true;
    }
  });
  var dirNode = document.getElementsByTagName("html")[0];
  if(configOptions.isRightToLeft){
        dirNode.setAttribute("dir","rtl");
        dojo.addClass( dirNode,"esriRtl");
  }else{
    dirNode.setAttribute("dir","ltr");
    dojo.addClass(dirNode,"esriLtr");
  }
	
  dojo.byId('sidebarHeader').innerHTML = i18n.viewer.sidePanel.label;
  dojo.byId('footerText').innerHTML = i18n.viewer.footer.label;

  if (configOptions.geometryserviceurl && location.protocol === "https:") {
    configOptions.geometryserviceurl = configOptions.geometryserviceurl.replace('http:', 'https:');
  }
  esri.config.defaults.geometryService = new esri.tasks.GeometryService(configOptions.geometryserviceurl);

  if (!configOptions.sharingurl) {
    configOptions.sharingurl = location.protocol + '//' + location.host + "/sharing/content/items";
  }
  esri.arcgis.utils.arcgisUrl = configOptions.sharingurl;

  if (!configOptions.proxyurl) {
    configOptions.proxyurl = location.protocol + '//' + location.host + "/sharing/proxy";
  }

  esri.config.defaults.io.proxyUrl = configOptions.proxyurl;

  esri.config.defaults.io.alwaysUseProxy = false;

  urlObject = esri.urlToObject(document.location.href);
  urlObject.query = urlObject.query || {};
  if (urlObject.query.title) {
    configOptions.title = urlObject.query.title;
  }
  if (urlObject.query.subtitle) {
    configOptions.title = urlObject.query.subtitle;
  }
  if (urlObject.query.webmap) {
    configOptions.webmap = urlObject.query.webmap;
  }
  if (urlObject.query.bingMapsKey) {
    configOptions.bingmapskey = urlObject.query.bingMapsKey;
  }
  if(urlObject.query.owner){
    configOptions.owner = urlObject.query.owner;
  }
  if (configOptions.geometryserviceurl) {
    esri.config.defaults.geometryService = new esri.tasks.GeometryService(configOptions.geometryserviceurl);
  }


 


  var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
    mapOptions: {
      slider: true,
      wrapAround180: true
    },
    bingMapsKey: configOptions.bingmapskey
  });

  mapDeferred.addCallback(function (response) {
	document.title = configOptions.title || response.itemInfo.item.title;
    dojo.byId("title").innerHTML = configOptions.title || response.itemInfo.item.title;			
    dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";
    dojo.byId("owner").innerHTML = configOptions.owner || response.itemInfo.item.owner;

    map = response.map;

    dojo.disconnect(response.clickEventHandle);
    var layers = response.itemInfo.itemData.operationalLayers;
    if (map.loaded) {
      initUI(layers);
    } else {
      dojo.connect(map, "onLoad", function () {
        initUI(layers);
      });
    }
    //resize the map when the browser resizes
    dojo.connect(dijit.byId('map'), 'resize', map, map.resize);
  });

  mapDeferred.addErrback(function (error) {
    alert(i18n.viewer.errors.createMap + " : " + error.message);
  });


}


function initUI(layers) {
  //add the scalebar and editor
  var scalebar = new esri.dijit.Scalebar({
    map: map,
    scalebarUnit: i18n.viewer.main.scaleBarUnits //metric or english
  });

  var editLayerInfo = [];
  dojo.forEach(layers, function (layer) {
    if (layer && layer.layerObject && layer.layerObject.isEditable) {
      editLayerInfo.push({
        'featureLayer': layer.layerObject
      });
    }

  });
     //add field infos if applicable - this will contain hints if defined in the popup. 
     dojo.forEach(editLayerInfo, function(layer){
        if(layer.featureLayer && layer.featureLayer.infoTemplate && layer.featureLayer.infoTemplate.info && layer.featureLayer.infoTemplate.info.fieldInfos){
            layer.fieldInfos = layer.featureLayer.infoTemplate.info.fieldInfos;
        }
     });

  if (editLayerInfo.length > 0) {
    var settings = {
      map: map,
      layerInfos: editLayerInfo,
      toolbarVisible: true
    };

    var params = {
      settings: settings
    };

    var editorWidget = new esri.dijit.editing.Editor(params, 'editorDiv');
    editorWidget.startup();
  } else {
    dojo.byId('editorDiv').innerHTML = i18n.viewer.editor.message;
  }

}