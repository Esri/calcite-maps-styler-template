  dojo.require("esri.widgets");
  dojo.require("esri.layout");
  dojo.require("esri.arcgis.utils");
  var map, configOptions;

  function initMap(options) {
    configOptions = options;


    dojo.byId('footerText').innerHTML = configOptions.i18n.viewer.footer.label;
    dojo.byId('legendHeader').innerHTML = configOptions.i18n.viewer.sidePanel.title;
 

    createMap();

  }

  function createMap() {

    //add the custom theme
    //load the specified theme 
    var ss = document.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = "css/" + configOptions.theme + ".css";
    document.getElementsByTagName("head")[0].appendChild(ss);

    var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
      mapOptions: {
        slider: true
      },
      ignorePopups: false,
      bingMapsKey: configOptions.bingmapskey
    });
    mapDeferred.addCallback(function (response) {
      document.title = configOptions.title || response.itemInfo.item.title;
      dojo.byId("title").innerHTML = configOptions.title || response.itemInfo.item.title;
      dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";
      dojo.byId("owner").innerHTML = configOptions.owner || response.itemInfo.item.owner;
      map = response.map;

      if (map.loaded) {
        initUI(response);
      } else {
        dojo.connect(map, "onLoad", function () {
          initUI(response);
        });
      }
      //resize the map when the browser resizes
      dojo.connect(dijit.byId('map'), 'resize', map, map.resize);
    });
    mapDeferred.addErrback(function (error) {
      alert(configOptions.i18n.viewer.errors.createMap + " : " + error.message);
    });
  }

  function initUI(response) {
    //resize the layout and map to match the specified theme
    dijit.byId('mainWindow').resize();
    map.reposition();
    map.resize();
    //add theme for popup
    dojo.addClass(map.infoWindow.domNode, configOptions.theme);
    //add the scalebar 
    var scalebar = new esri.dijit.Scalebar({
      map: map,
      scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
    });
    var layerInfo = esri.arcgis.utils.getLegendLayers(response);
    if (layerInfo.length > 0) {
      var legendDijit = new esri.dijit.Legend({
        map: map,
        layerInfos: layerInfo
      }, "legendDiv");
      legendDijit.startup();
    } else {
      dojo.byId('legendDiv').innerHTML = configOptions.i18n.viewer.sidePanel.message;
    }
  }


