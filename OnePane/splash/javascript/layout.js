  dojo.require("esri.widgets");
  dojo.require("esri.arcgis.utils");



  var map, urlObject;
  var i18n;

  function initMap() {

    //get the localization strings
    i18n = dojo.i18n.getLocalization("esriTemplate", "template");

    dojo.byId('headerTitle').innerHTML = i18n.viewer.sidePanel.title;
    dojo.byId('continue').innerHTML = i18n.viewer.splash.title;
    dojo.byId('loading').innerHTML = i18n.viewer.loading.message;

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
    //is an appid specified - if so read json from there
    if (configOptions.appid || (urlObject.query && urlObject.query.appid)) {
      var appid = configOptions.appid || urlObject.query.appid;
      var requestHandle = esri.request({
        url: configOptions.sharingurl + "/" + appid + "/data",
        content: {
          f: "json"
        },
        callbackParamName: "callback",
        load: function (response) {
          if (response.values.webmap !== undefined) {
            configOptions.webmap = response.values.webmap;
          }
          if (response.values.introTitle !== undefined) {
            configOptions.introTitle = response.values.introTitle;
          }
          if (response.values.introText !== undefined) {
            configOptions.introText = '<p>' + response.values.introText + '</p>';
          }
          if (response.values.introImage !== undefined) {
            configOptions.introImage = response.values.introImage;
          }
          createApp();
        },
        error: function (response) {
          var e = response.message;
          alert(i18n.viewer.errors.createMap + " : " + response.message);
        }
      });
    } else {
      createApp();
    }

  }


  function createApp() {

    if (urlObject.query.title) {
      configOptions.introTitle = urlObject.query.title;
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


    var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
      mapOptions: {
        slider: true,
        nav: false,
        sliderStyle:'small',
        showAttribution:true,
        wrapAround180: true
      },
      ignorePopups: false,
      bingMapsKey: configOptions.bingmapskey
    });

    mapDeferred.addCallback(function (response) {

      document.title = configOptions.introTitle || response.itemInfo.item.title || "";
      dojo.byId("introHeader").innerHTML = configOptions.introTitle || response.itemInfo.item.title;
      dojo.byId("introText").innerHTML = configOptions.introText || response.itemInfo.item.description || "";
      document.getElementById('introImg').src = configOptions.introImage || "";
      dojo.byId("title").innerHTML = configOptions.introTitle || response.itemInfo.item.title;
      dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";
      dojo.byId("description").innerHTML = configOptions.description || response.itemInfo.item.description || "";
      $("#continue").fadeIn();

      map = response.map;

      dojo.connect(map, "onUpdateEnd", hideLoader);

      var layers = response.itemInfo.itemData.operationalLayers;
      if (map.loaded) {
        initUI(layers);
        resizeLegend();
      } else {
        dojo.connect(map, "onLoad", function () {
          initUI(layers);
          resizeLegend();
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
    //add chrome theme for popup
    dojo.addClass(map.infoWindow.domNode, "chrome");
    //add the scalebar 
    var scalebar = new esri.dijit.Scalebar({
      map: map,
      scalebarUnit: i18n.viewer.main.scaleBarUnits //metric or english
    });

    var layerInfo = buildLayersList(layers);


    if (layerInfo.length > 0) {
      var legendDijit = new esri.dijit.Legend({
        map: map,
        layerInfos: layerInfo
      }, "legendDiv");
      legendDijit.startup();
    } else {
      dojo.byId('legendDiv').innerHTML = i18n.viewer.sidePanel.message;
    }
  }

  function buildLayersList(layers){

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

  function hideLoader() {
    $("#loadingCon").hide();
  }

  function resizeLegend() {
    legHeight = (($("#leftPane").height()) - ($("#descriptionPanel").height()) - ($("#legendHeader").height()) - 30);
    $("#legendPanel").css('height', legHeight);
  }

  //Jquery Layout
  $(document).ready(function (e) {
    $("#modalBackground").fadeTo('fast', '0.9');
    $("#intro").css('left', (($(document).width() / 2) - 400));
    $("#intro").fadeIn();
    $("#continue").click(function () {
      $("#modalBackground").fadeOut('slow');
      $("#intro").fadeOut('slow');
    });
    $("#introImg").load(function (e) {
      if (($("#introImg").width()) == 405) {
        $("#introImg").css("margin-top", (((455 - ($("#introImg").height())) / 2) + 15));
      } else if (($("#introImg").height()) == 440) {
        $("#introImg").css("margin-right", (((420 - ($("#introImg").width())) / 2) + 15));
      } else {
        $("#introImg").css("margin-right", (((420 - ($("#introImg").width())) / 2) + 15));
        $("#introImg").css("margin-top", (((455 - ($("#introImg").height())) / 2) + 15));
      }
      $("#introImg").show();
    });
  });

  $(window).resize(function (e) {
    resizeLegend();
  });