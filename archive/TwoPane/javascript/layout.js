
    dojo.require("esri.map");
    dojo.require("esri.arcgis.utils");
    dojo.require("esri.IdentityManager");

    var map;
    var configOptions;


    function initMap(options) {

      configOptions = options;

      dojo.byId('footerText').innerHTML = configOptions.i18n.viewer.footer.label;
      dojo.byId('leftPaneHeader').innerHTML = configOptions.i18n.viewer.leftPane.title;
      dojo.byId('rightPaneHeader').innerHTML = configOptions.i18n.viewer.rightPane.title;


    //add the custom theme
    var ss = document.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = "css/" + configOptions.theme + ".css";
    document.getElementsByTagName("head")[0].appendChild(ss);

      createMap();


    }

    function createMap(){

    var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
      mapOptions: {
      },
      ignorePopups: false,
      bingMapsKey: configOptions.bingmapskey
    });

    mapDeferred.addCallback(function (response) {
      map = response.map;
      document.title = configOptions.title || response.itemInfo.item.title;
      dojo.byId("title").innerHTML = configOptions.title || response.itemInfo.item.title;
      dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";
      dojo.byId("owner").innerHTML = configOptions.owner ||  response.itemInfo.item.owner;
      dojo.byId("description").innerHTML = configOptions.description || response.itemInfo.item.description || "";


      if (map.loaded) {
        initUI(response);

      } else {
        dojo.connect(map, "onLoad", function () {
        initUI(response);
        });
      }

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

    //add scalebar
    var scalebar = new esri.dijit.Scalebar({
     map: map,
     scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
    });



    var layerInfo = (esri.arcgis.utils.getLegendLayers(response));
    if (layerInfo.length > 0) {
      var legendDijit = new esri.dijit.Legend({
        map: map,
        layerInfos: layerInfo
      }, "legendDiv");
      legendDijit.startup();
      } else {
      dojo.byId('legendDiv').innerHTML = configOptions.i18n.viewer.rightPane.message;
    }
    }

