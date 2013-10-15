 dojo.require("esri.widgets");

  dojo.require("esri.arcgis.utils");
  dojo.require("dojo.DeferredList");
  dojo.require("dojo.cookie");
  dojo.require("dijit.Tooltip");
  dojo.require("dojo.dnd.Source");
  dojo.require("dojo.string");


  // APPLICAITON VARIABLES
  var _maps = [];
  var _mapExtentChangeEvent;

  // MAP CONTEXT MENU
  var _menuContentPane;

  // SYNC OPTIONS
  var _syncScale = false;
  var _syncLocation = false;

  // MAP INFORMATION TYPES
  var _mapInfoType = {
    description: 0,
    content: 1,
    legend: 2
  };
  var _mapInfo = _mapInfoType.description;

  // DRAG-N-DROP CATALOG
  var _resultsCatalog;

  // USERCONFIG SAVED
  var _userConfigSaved = true;

  var userConfig;

  // INITIALIZE APPLICATION
  function initMap(options) {
    userConfig = options;


    userConfig.sharingurl = userConfig.sharingurl + "/sharing/content/items";
    
    userConfig.title = userConfig.title ||  userConfig.i18n.viewer.title;

    dojo.byId('saveLabel').innerHTML = userConfig.i18n.viewer.sidePanel.save.label;
    dojo.byId('findLabel').innerHTML = userConfig.i18n.viewer.sidePanel.find.label;
    dojo.byId('saveWebMapsImg').alt = userConfig.i18n.viewer.sidePanel.save.alt;
    dojo.byId('saveWebMapsImg').title = userConfig.i18n.viewer.sidePanel.save.title;
    dojo.byId('clearWebMapsImg').alt = userConfig.i18n.viewer.sidePanel.clear.alt;
    dojo.byId('clearWebMapsImg').title = userConfig.i18n.viewer.sidePanel.clear.title;
    dojo.byId('saveWebMapsMsg').innerHTML = userConfig.i18n.viewer.sidePanel.save.message;
    dojo.byId('searchText').placeholder = userConfig.i18n.viewer.sidePanel.search.placeholder;
    dojo.byId('searchImage').alt = userConfig.i18n.viewer.sidePanel.search.alt;
    dojo.byId("searchImage").title = userConfig.i18n.viewer.sidePanel.search.title;
    dojo.byId('mapHeader').innerHTML = userConfig.i18n.viewer.sidePanel.map.label;
    dojo.byId('syncHeader').innerHTML = userConfig.i18n.viewer.sidePanel.sync.label;


    dojo.byId("scaleLabel").innerHTML = userConfig.i18n.viewer.sidePanel.sync.scaleLabel;
    dojo.byId('locationLabel').innerHTML = userConfig.i18n.viewer.sidePanel.sync.locationLabel;
    dojo.byId('displayLegendLabel').innerHTML = userConfig.i18n.viewer.sidePanel.map.legendLabel;
    dojo.byId("contentLabel").innerHTML = userConfig.i18n.viewer.sidePanel.map.contentLabel;
    dojo.byId('descriptionLabel').innerHTML = userConfig.i18n.viewer.sidePanel.map.descriptionLabel;
    dojo.byId("loadingDialog").title = userConfig.i18n.viewer.main.loading.title;
    dojo.byId("loadingMessage").innerHTML = userConfig.i18n.viewer.main.loading.loadingMessage;





    // DRAG-N-DROP: ON DND DROP  
    dojo.subscribe("/dnd/drop", null, onDndDrop);

    // TURN SEARCH RESULTS PANE INTO DND SOURCE
    _resultsCatalog = new dojo.dnd.Source("searchResults", {
      accept: ["resultItem"],
      copyOnly: true,
      selfAccept: false,
      singular: true,
      creator: catalogNodeCreator
    });

    //CREATE THE CONTEXT MENU
    var ctxtMenu = new dijit.Menu({
      id: 'itemMenu',
      style: "color:darkblue;"
    });

    ctxtMenu.addChild(new dijit.MenuItem({
      id: "itemMenu.zoomToInitial",
      label: userConfig.i18n.viewer.main.contextMenu.zoom,
      iconClass: "dijitIconZoomTo"
    }));


    var subMenu = new dijit.Menu({
      parentMenu: ctxtMenu,
      style: "color:darkblue;"
    });

    subMenu.addChild(new dijit.MenuItem({
      id: "itemMenu.adjustToMyScale",
      label: userConfig.i18n.viewer.main.contextMenu.scale,
      iconClass: "dijitIconScale"
    }));

    subMenu.addChild(new dijit.MenuItem({
      id: "itemMenu.adjustToMyLocation",
      label: userConfig.i18n.viewer.main.contextMenu.location,
      iconClass: "dijitIconLocation"
    }));

    subMenu.addChild(new dijit.MenuItem({
      id: "itemMenu.adjustToMyScaleAndLocation",
      label: userConfig.i18n.viewer.main.contextMenu.scaleAndLocation,
      iconClass: "dijitIconScaleLocation"
    }));

    ctxtMenu.addChild(new dijit.PopupMenuItem({
      label: userConfig.i18n.viewer.main.contextMenu.adjust,
      popup: subMenu
    }));

    ctxtMenu.startup();

    // CONNECT CONTEXT MENU EVENTS
    dojo.connect(dijit.byId("itemMenu"), '_openMyself', 'onMenuItemOpen');
    dojo.connect(dijit.byId("itemMenu.zoomToInitial"), "onClick", "zoomToInitialExtent");
    dojo.connect(dijit.byId("itemMenu.adjustToMyScale"), "onClick", "adjustToMyScale");
    dojo.connect(dijit.byId("itemMenu.adjustToMyLocation"), "onClick", "adjustToMyLocation");
    dojo.connect(dijit.byId("itemMenu.adjustToMyScaleAndLocation"), "onClick", "adjustToMyScaleAndLocation");

    // ADJUST INITIAL LAYOUT  
    dijit.byId('mainWindow').layout();

    // SHOW LOADING DIALOG
    dijit.byId('loadingDialog').show();

    // GET USERCONFIG FROM COOKIE
    if (!dojo.cookie.isSupported()) {
      esri.hide(dojo.byId('saveWebMapsPanel'));
    } else {
      var userConfigFromCookie = getUserConfig();
      if (userConfigFromCookie) {
        userConfig = userConfigFromCookie;
      }
    }

    createApp();
  }

  function createApp() {
    if(userConfig.webmap){
      userConfig.webMaps = getWebMaps(userConfig.webmap);
    }


    // ======================= PREVIEW SPECIFIC ================================
    applyTheme();

    dojo.byId('title').innerHTML = userConfig.title;
    document.title = userConfig.title;

    // HIDE RIGHT PANE IF WE ONLY HAVE TWO WEBMAPS
    if (userConfig.webMaps.length === 2) {
      esri.hide(dojo.byId('mapContainer.2'));
      dojo.style('mapContainer.0', 'width', '50%');
	    dojo.style('mapContainer.1', 'width','50%');
      dijit.byId('mainWindow').resize();
    }

    // CREATE WEB MAPS
    var createMapDeferreds = dojo.map(userConfig.webMaps, function (userWebMap, containerNum) {
      return esri.arcgis.utils.createMap(dojo.string.trim(userWebMap.id), 'map.' + containerNum, {
        mapOptions: {
          slider: true,
          showAttribution:false,
          nav: true
        },
        bingMapsKey: userConfig.bingMapsKey
      });
    });
    var createMapDeferredsList = new dojo.DeferredList(createMapDeferreds);
    createMapDeferredsList.addErrback(function (error) {
      console.warn(error);
    });
    createMapDeferredsList.addCallback(function (createMapResponses) {
      dojo.forEach(createMapResponses, function (createMapResponse) {
        if (createMapResponse[0]) {
          // INITIALIZE WEBMAP UI
          InitWebMapUI(createMapResponse[1]);
        }
      });
      // HIDE LOADING DIALOG  
      dijit.byId('loadingDialog').hide();

      // SET INITIAL SYNC    
      if (_syncScale) {
        syncMapScales(_maps[0]);
      }
      if (_syncLocation) {
        syncMapLocations(_maps[0]);
      }
    });

    dijit.byId('syncScale').set('checked', _syncScale);
    dijit.byId('syncLocation').set('checked', _syncLocation);
  }

  function applyTheme() {
    var ss = document.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = "css/" + userConfig.theme + ".css";
    document.getElementsByTagName("head")[0].appendChild(ss);
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

  // CREATE WEBMAP UI
  function InitWebMapUI(response) {

    try {

  // MAP
  var map = response.map;
  map.webId = response.itemInfo.item.id;
  if (map.loaded) {
    initUI(map,response);
  } else {
    dojo.connect(map, "onLoad", function () {
      initUI(map,response);
    });
  }


    } catch (error) {
      console.warn(error);
    }
  }

  function initUI(map, response){
    
      // CONTAINER NUMBER
      var containerNum = map.id.split('.')[1];
      // ADD MAP TO ARRAY OF MAPS  
      _maps[containerNum] = map;


      //size the info window
      var h = dojo.number.round(map.height / 2);
      var w = dojo.number.round(map.width * .75);
      map.infoWindow.resize(w, h);


      // SET POPUP EVENTS AND LISTENERS
      map.clickEventListener = response.clickEventListener;
      map.clickEventHandle = response.clickEventHandle;

      // POPUP WINDOW EVENTS        
      dojo.connect(map.infoWindow, 'onShow', function () {
        selectOthers(map);
      });

      dojo.connect(map.infoWindow, 'onHide', function () {
        dojo.forEach(_maps, function (map) {
          if (map.infoWindow.isShowing) {
            map.infoWindow.clearFeatures();
            map.infoWindow.hide();

          }
        });
      });

      // WEBMAPITEM
      var webMapItem = response.itemInfo;
      //console.log(webMapItem);
      // SET TITLE
      dojo.byId('city.' + containerNum).innerHTML = webMapItem.item.title;

      // SET DESCRIPTION
      var descNode = dojo.byId('info.' + containerNum + '.description');
      descNode.innerHTML = (webMapItem.item.description) ? webMapItem.item.description : webMapItem.item.snippet;
      if (descNode.textContent === '') {
        // FIX DESCRIPTION
        descNode.innerHTML = '<span style="color:darkred;font-style:italic;">' + userConfig.i18n.viewer.errors.webmapDescription + '</span>';
      }

      // CREATE CONTENS
      var infoContentsPane = dojo.byId('info.' + containerNum + '.content');
      infoContentsPane.innerHTML = '';
      getMapContents(webMapItem, infoContentsPane);

      // GET LEGEND PANE
      var legendPane = dojo.byId('info.' + containerNum + '.legend');
      // DESTROY PREVIOUS LEGEND
      var legend = dijit.byId('legend.' + containerNum);
      if (legend) {
        legend.destroy();
      }

      // CREATE LEGEND        
      var legendNode = dojo.create('div');
      legendNode.id = 'legend.' + containerNum;
      legendPane.innerHTML = '';
      legendPane.appendChild(legendNode);
      if (webMapItem.itemData.operationalLayers.length > 0) {
        legend = esri.dijit.Legend({
          map: map,
          layerInfos: esri.arcgis.utils.getLegendLayers(response)
        }, legendNode);
        legend.startup();
      } else {
        legendNode.innerHTML = userConfig.i18n.viewer.errors.legend;
      }

      // SET INITIAL STATE OF MAP ELEMEMENTS
      if (_syncScale) {
        map.hideZoomSlider();
      }
      if (_syncLocation) {
        map.hidePanArrows();
      }

      // SCALEBAR
      var scalebar = new esri.dijit.Scalebar({
        map: map,
        attachTo: "bottom-left",
        scalebarUnit: userConfig.i18n.viewer.main.scaleBarUnits //metric or english
      });
      map.scalebar = scalebar;



      // SET WEBMAPINFO
      dijit.byId(map.id).webMapItem = webMapItem;

      // CREATE DND TARGET
      var dndTarget = new dojo.dnd.Target(dojo.byId(map.id), {
        accept: ["resultItem"],
        checkAcceptance: checkAcceptanceWebMap
      });


      // CONNECT ONMOUSEOVER EVENT
      dojo.connect(map, 'onMouseOver', function (evt) {
        // INFORM USER OF MAP CONTEXTMENU
        dojo.byId(map.id).title = userConfig.i18n.viewer.main.contextMenu.title;
      });

      dojo.connect(map, "onMouseWheel", function (evt) {
        // CONNECT ONEXTENTCHANGE EVENT
        connectEvents(map);
      });
      dojo.connect(map,"onDblClick",function(evt){
        connectEvents(map);
       } );


      dojo.connect(map, "onMouseDragStart", function (evt) {
        // CONNECT ONEXTENTCHANGE EVENT
        connectEvents(map);
      });

      // BIND CONTEXT MENU TO CONTETPANE
      dijit.byId('itemMenu').bindDomNode(dijit.byId(map.id).domNode);

      // UPDATE INFORMATION FOR MAP
      updateInformationForMap(map);

  }
function selectOthers(theMap) {
  var mapPoint = theMap.infoWindow._location;


  dojo.forEach(_maps, function (map) {
  if(!map.infoWindow.isShowing){
    if (theMap.webId === map.webId) {
      if (theMap.infoWindow.features) {
        map.infoWindow.setFeatures(theMap.infoWindow.features);
        map.infoWindow.show(map.toScreen(mapPoint));
      } else if (theMap.infoWindow.deferreds) {
 
        var defs = theMap.infoWindow.deferreds;
        dojo.forEach(defs, function (def) {
          def.promise.then(function (response) {
            map.infoWindow.setFeatures(response);
            map.infoWindow.show(map.toScreen(mapPoint));
          });

        });
      }
    } else {
      var query = new esri.tasks.Query();
      var deferreds = [];
      var layerIds = map.graphicsLayerIds;
      var selectionDeferredArray= []; 
      dojo.forEach(layerIds,function(id){
        var layer = map.getLayer(id);
        if(layer.declaredClass === 'esri.layers.FeatureLayer' ){//&& isLayerVisible(layer)){
            var geom;
            if(layer.geometryType === "esriGeometryTypePoint"){
              query.geometry =  pointToExtent(theMap, theMap.infoWindow._location, 1);
            }else{
              query.geometry = theMap.infoWindow._location;
    
            }

           deferreds.push(layer.selectFeatures(query,esri.layers.FeatureLayer.SELECTION_NEW));
        }
      });

      var deferredList = new dojo.DeferredList(deferreds);
      deferredList.then(function(r){
        //filter out empty results 
        var results = [];
        r = dojo.filter(r, function (result) {
            return r[0];
        }); //filter out any failed tasks
        for (i=0;i<r.length;i++) {
            results = results.concat(r[i][1]);
        }
        console.log(results);
        map.infoWindow.setFeatures(results);
        map.infoWindow.show(map.toScreen(mapPoint));
      });

    }
    }
  });
}

// CHECK LAYER SCALE RANGE AGAINST CURRENT MAPS SCALE

function isLayerVisible(layer) {
 var mapScale = Math.round(esri.geometry.getScale(layer._map));  
  var isWithinScaleRange;

 isWithinScaleRange = (layer.minScale > mapScale) && (layer.maxScale < mapScale);

  return isWithinScaleRange;
}

  // POPUP FEATURES IN OTHER WEBMAPS
  function pointToExtent(map, point, toleranceInPixel) {
    var pixelWidth = map.extent.getWidth() / map.width;
    var toleraceInMapCoords = toleranceInPixel * pixelWidth;
    return new esri.geometry.Extent(point.x - toleraceInMapCoords, point.y - toleraceInMapCoords, point.x + toleraceInMapCoords, point.y + toleraceInMapCoords, map.spatialReference);
  }




  // DISCONNECT ONEXTENTCHANGE EVENT
  function disconnectEvents() {
    if (_mapExtentChangeEvent) {
      dojo.disconnect(_mapExtentChangeEvent);
    }
  }

  // CONNECT ONEXTENTCHANGE EVENT
  function connectEvents(map) {
   // disconnectEvents();
    _mapExtentChangeEvent = dojo.connect(map, 'onExtentChange', function (extent, delta, levelChange, lod) {
      if (_syncScale && levelChange) {
        // SYNC SCALES
        syncMapScales(map);
      } else {
        if (_syncLocation) {
          // SYNC LOCATOIN
          syncMapLocations(map);
        }
      }
      // DISCONNECT ONEXTENTCHANGE EVENT
      disconnectEvents();
    });
  }

  // IS THE SPATIAL REFERNECE WEB MERCATOR
  function isWebMercator(spatialReference) {
    return (dojo.indexOf([3857, 102100, 102113], spatialReference.wkid) > -1);
  }

  // GET CENTER OF OTHER MAP BASED ON THIS MAP
  function getCenter(thisMap, otherMap, callback) {
    if (thisMap.spatialReference.wkid === otherMap.spatialReference.wkid) {
      if (callback) {
        callback(thisMap.extent.getCenter());
      }
    } else if (isWebMercator(thisMap.spatialReference) && isWebMercator(otherMap.spatialReference)) {
      if (callback) {
        callback(thisMap.extent.getCenter());
      }
    } else {
      var geomSrv = new esri.tasks.GeometryService(userConfig.geometryServiceURL);
      geomSrv.project([thisMap.extent.getCenter()], otherMap.spatialReference, function (projectedGeoms) {
        if (callback) {
          callback(projectedGeoms[0]);
        }
      });
    }
  }

  // SYNC MAP SCALES
  function syncMapScales(thisMap) {
    var thisMapScale = getMapScale(thisMap);
    dojo.forEach(_maps, function (otherMap) {
      if (otherMap && (otherMap.id !== thisMap.id)) {
        var otherMapLevel = getMapLevelByScale(otherMap, thisMapScale);
        if (otherMapLevel) {
          if (_syncLocation) {
            getCenter(thisMap, otherMap, function (otherCenter) {
              otherMap.centerAndZoom(otherCenter, otherMapLevel);
            });
          } else {
            otherMap.setLevel(otherMapLevel);
          }
        }
      }
    });
  }

  // SYNC MAP LOCATIONS
  function syncMapLocations(thisMap) {
    dojo.forEach(_maps, function (otherMap) {
      if (otherMap && (otherMap.id !== thisMap.id)) {
        getCenter(thisMap, otherMap, function (otherCenter) {
          otherMap.centerAt(otherCenter);
        });
      }
    });
  }

  // CONTEXT MENU OPENED
  function onMenuItemOpen(evt) {
    // GET CONTENT PANE
    _menuContentPane = dijit.getEnclosingWidget(evt.target);
  }

  // ZOOM TO INITIAL EXTENT
  function zoomToInitialExtent() {
    // GET MAP
    var map = getMap(_menuContentPane.id);
    if (map) {
      // GET PREVIOUSLY STORED WEBMAPITEM 
      var itemExtent = dijit.byId(map.id).webMapItem.item.extent;
      // WEBMAP EXTENT IS GEOGRAPHIC
      var webMapExtent = new esri.geometry.Extent(itemExtent[0][0], itemExtent[0][1], itemExtent[1][0], itemExtent[1][1], {
        'wkid': 4326
      });
      // CHECK MAP SPATIAL REFERENCE
      if (map.spatialReference.wkid === 4326) {
        // WGS84
        map.setExtent(webMapExtent);
      } else if (isWebMercator(map.spatialReference)) {
        // WEB MERCATOR
        map.setExtent(esri.geometry.geographicToWebMercator(webMapExtent));
      } else {
        // OTHER
        var geomSrv = new esri.tasks.GeometryService(userConfig.geometryServiceURL);
        geomSrv.project([webMapExtent], map.spatialReference, function (projectedGeoms) {
          map.setExtent(projectedGeoms[0]);
        });
      }
    }
  }

  // ADJUST OTHER MAPS TO SCALE
  function adjustToMyScale() {
    // GET MAP
    var thisMap = getMap(_menuContentPane.id);
    if (thisMap) {
      var thisMapScale = getMapScale(thisMap);
      dojo.forEach(_maps, function (otherMap) {
        if (otherMap && (otherMap.id !== thisMap.id)) {
          var otherMapLevel = getMapLevelByScale(otherMap, thisMapScale);
          if (otherMapLevel) {
            otherMap.setLevel(otherMapLevel);
          }
        }
      });
    }
  }

  // ADJUST OTHER MAPS TO LOCAITON
  function adjustToMyLocation() {
    // GET MAP
    var thisMap = getMap(_menuContentPane.id);
    if (thisMap) {
      // ADJUST LOCATIONS
      syncMapLocations(thisMap);
    }
  }

  // ADJUST OTHER MAPS TO SCALE AND LOCAITON
  function adjustToMyScaleAndLocation() {
    // GET MAP
    var thisMap = getMap(_menuContentPane.id);
    if (thisMap) {
      var thisMapScale = getMapScale(thisMap);
      dojo.forEach(_maps, function (otherMap) {
        if (otherMap && (otherMap.id !== thisMap.id)) {
          var otherMapLevel = getMapLevelByScale(otherMap, thisMapScale);
          if (otherMapLevel) {
            getCenter(thisMap, otherMap, function (otherCenter) {
              otherMap.centerAndZoom(otherCenter, otherMapLevel);
            });
          }
        }
      });
    }
  }

  // GET MAP BASED ON MAP ID
  function getMap(mapId) {
    return dojo.filter(_maps, function (map) {
      return (map && (map.id === mapId));
    })[0];
  }

  // GET MAP SCALE
  function getMapScale(map) {
    return esri.geometry.getScale(map);
  }

  // GET MAP LEVEL BASED ON SCALE
  function getMapLevelByScale(map, mapScale) {
    if (map.__tileInfo) {
      var nearLODs = dojo.filter(map.__tileInfo.lods, function (lod) {
        return (parseInt(lod.scale, 10) <= parseInt(mapScale, 10));
      });
      if (nearLODs.length > 0) {
        return nearLODs[0].level;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  // SYNCHRONIZE SCALE CHECKBOX
  function synchronizeScale() {
    // SET NEW SYNC VALUE
    _syncScale = (!_syncScale);
    // UPDATE CHECKBOX AND SCALEBAR UI
    if (_syncScale) {
      // HIDE ZOOM SLIDERS
      dojo.forEach(_maps, function (map) {
        if (map) {
          map.hideZoomSlider();
        }
      });
      syncMapScales(_maps[0]);
    } else {
      // DISPLAY ZOOM SLIDERS
      dojo.forEach(_maps, function (map) {
        if (map) {
          map.showZoomSlider();
        }
      });
    }
  }

  // SYNCHRONIZE LOCATION CHECKBOX
  function synchronizeLocation() {
    // SET NEW SYNC VALUE
    _syncLocation = (!_syncLocation);
    // UPDATE CHECKBOX UI
    if (_syncLocation) {
      syncMapLocations(_maps[0]);
      // DISPLAY ZOOM SLIDERS
      dojo.forEach(_maps, function (map) {
        if (map) {
          map.hidePanArrows();
        }
      });
    } else {
      // DISPLAY ZOOM SLIDERS
      dojo.forEach(_maps, function (map) {
        if (map) {
          map.showPanArrows();
        }
      });
    }
  }

  // SET INFORMATION TYPE
  function setInformaitonType(informationType) {
    _mapInfo = informationType;
    updateInformation();
  }

  // DISPLAY INFORMATION ABOUT THE MAPS
  function updateInformation() {
    // UPDATE MAP INFORMATION
    dojo.forEach(_maps, function (map) {
      if (map) {
        updateInformationForMap(map);
      }
    });
  }

  function updateInformationForMap(map) {
    if (map) {
      // CONTAINER NUMBER
      var containerNum = map.id.split('.')[1];
      // MAP INFOPANE
      var infoPane = dijit.byId('info.' + containerNum);

      // SET MAP INFORMATION
      switch (_mapInfo) {
      case _mapInfoType.legend:
        // DISPLAY LEGEND				
        infoPane.selectChild(dijit.byId('info.' + containerNum + '.legend'));
        break;
      case _mapInfoType.content:
        // DISPLAY CONTENTS
        infoPane.selectChild(dijit.byId('info.' + containerNum + '.content'));
        break;
      case _mapInfoType.description:
        // DISPLAY DESCRIPTION
        infoPane.selectChild(dijit.byId('info.' + containerNum + '.description'));
        break;
      default:
        //...		
        break;
      }
    }
  }


  function buildLayerVisibleList(layers) {
    var layerInfos = [];
    dojo.forEach(layers, function (mapLayer, index) {
      if (mapLayer.featureCollection && !mapLayer.layerObject) {
        if (mapLayer.featureCollection.layers) {
          //add the first layer in the layer collection... not all  - when we turn off the layers we'll 
          //turn them all off 
          if (mapLayer.featureCollection.layers) {
            layerInfos.push({
              "layer": mapLayer,
              "visible": mapLayer.visibility,
              "title": mapLayer.title
            });
          }
        }
      } else if (mapLayer.layerObject) {
        layerInfos.push({
          layer: mapLayer.layerObject,
          visible: mapLayer.layerObject.visible,
          title: mapLayer.title
        });
      }
    });
    return layerInfos;
  }

  function getMapContents(webMapItem, parentNode) {
    // CONTENTS NODE
    var contentsNode = dojo.create('ul', {}, parentNode);
    var layerList = buildLayerVisibleList(webMapItem.itemData.operationalLayers);

    if (layerList.length > 0) {
      dojo.forEach(layerList, function (myLayer) {

        var isVisibleDefault = myLayer.visible;
        // OPERATIONAL LAYER NODE
        var operationalLayerNode = dojo.create('li', {
          'title': myLayer.title,
          //operationalLayer.url,
          'style': 'marginBottom:10px;',
          'class': (!isVisibleDefault) ? 'mapServiceLayerLI mapServiceLayerOffLI' : 'mapServiceLayerLI'
        }, contentsNode, 'first');

        // LABEL NODE
        var labelNode = dojo.create('span', {
          'innerHTML': myLayer.title,
          //operationalLayer.title,
          'style': 'cursor:pointer'
        }, operationalLayerNode);
        labelNode.onclick = function () {
          // TOGGLE MAPSERVICELAYER VISIBILITY
          if (myLayer.layer && myLayer.layer.featureCollection) {
            dojo.forEach(myLayer.layer.featureCollection.layers, function (layer) {
              layer.layerObject.setVisibility(!layer.layerObject.visible);
            });
            //myLayer.layer.setVisibility(!myLayer.visible);
          } else if (myLayer.layer && !myLayer.layer.featureColleciton) {
            myLayer.layer.setVisibility(!myLayer.layer.visible);
          } else {
            myLayer.setVisibility(!myLayer.visible);
          }
          // TOGGLE ICONS
          dojo.toggleClass(operationalLayerNode, 'mapServiceLayerOffLI');
          dojo.query('.LayerLI', operationalLayerNode).forEach(function (node) {
            dojo.toggleClass(node, 'LayerOffLI');
          });
          dojo.query('.groupLayerLI', operationalLayerNode).forEach(function (node) {
            dojo.toggleClass(node, 'groupLayerOffLI');
          });
          dojo.query('.subLayerLI', operationalLayerNode).forEach(function (node) {
            dojo.toggleClass(node, 'subLayerOffLI');
          });
        };

        // DOES THIS LAYER HAVE ANY SUBLAYERS
        if (myLayer.layers || myLayer.layer.featureCollection || myLayer.layer.layerInfos) {
          var sublayers;
          if (myLayer.layers) {
            subLayers = myLayer.layers;
          } else if (myLayer.layer.featureCollection && myLayer.layer.featureCollection.layers) {
            sublayers = myLayer.layer.featureCollection.layers;
          } else if (myLayer.layer && myLayer.layer.layerInfos) {
            sublayers = myLayer.layer.layerInfos;
          }
          // SUBLAYERS NODE
          var subLayersNode = dojo.create('ul', {}, operationalLayerNode);

          // BUILD LIST OF SUBLAYERS
          dojo.forEach(sublayers, function (layer) {
            // SUBLAYER NODE
            //only add sublayer if it has a name
            if (layer.name) {
              var layerNode = dojo.create('li', {
                'id': myLayer.title,
                'title': myLayer.title,
                'innerHTML': layer.name
              });

              // SET ICON
              if (layer.parentLayerId > -1) {
                if (layer.subLayerIds != null) {
                  dojo.addClass(layerNode, 'groupLayerLI');
                  if (!isVisibleDefault) {
                    dojo.addClass(layerNode, 'groupLayerOffLI');
                  }
                } else {
                  dojo.addClass(layerNode, 'subLayerLI');
                  if (!isVisibleDefault) {
                    dojo.addClass(layerNode, 'subLayerOffLI');
                  }
                }
                var parentNode = dojo.byId(myLayer.title + "/" + layer.parentLayerId);
                if (parentNode) {
                  parentNode.appendChild(layerNode);
                } else {
                  subLayersNode.appendChild(layerNode);
                }
              } else if (layer.subLayerIds != null) {
                dojo.addClass(layerNode, 'groupLayerLI');
                if (!isVisibleDefault) {
                  dojo.addClass(layerNode, 'groupLayerOffLI');
                }
                subLayersNode.appendChild(layerNode);
              } else {
                dojo.addClass(layerNode, 'LayerLI');
                if (!isVisibleDefault) {
                  dojo.addClass(layerNode, 'LayerOffLI');
                }
                subLayersNode.appendChild(layerNode);
              }
            }
          });
        } else {
          //console.log(operationalLayer.resourceInfo);
        }
      });
    }

    //end build list of layers
    // BUILD LIST OF BASEMAP LAYERS 
    dojo.forEach(webMapItem.itemData.baseMap.baseMapLayers, function (baseMapLayer) {
      // BASEMAPLAYER NODE     
      var baseMapTitle = (baseMapLayer.resourceInfo) ? baseMapLayer.resourceInfo.documentInfo.Title : webMapItem.itemData.baseMap.title;
      var baseMapType = (baseMapLayer.isReference) ? 'Reference' : 'Basemap';
      var baseMapLabel = dojo.replace("{0} <span style='font-size:smaller;color:gray;'> ( {1} )</span>", [baseMapTitle, baseMapType]);

      var baseMapNode = dojo.create('li', {
        'innerHTML': baseMapLabel,
        'title': dojo.toJson(baseMapLayer.layerObject.spatialReference),
        'class': 'baseMapLayerLI'
      }, contentsNode, ((baseMapLayer.isReference) ? 'first' : 'last'));

    });
    // RETURN CONTENTS NODE
    return contentsNode;
  }



  // SEARCH KEYPRESS
  function searchKey(e) {
    //console.log(e);
    // GET USER KEY
    var keycode = window.event ? window.event.keyCode : e ? e.which : 0;
    // USER HITS RETURN
    if (keycode === 13) {
      // SEARCH ARCGIS.COM
      searchArcGIS();
    } else if (keycode !== 0) {
      // UPDATE SEARCH MESSAGE
      dojo.byId('searchInfo').innerHTML = '';
      // CLEAR SEARCH RESULTS
      dojo.byId('searchResults').innerHTML = '';
    }

    return true;
  }

  // SEARCH ARCGIS.COM
  function searchArcGIS() {

    // CLEAR SEARCH RESULTS
    dojo.byId('searchResults').innerHTML = '';

    // GET SEARCH TEXT
    var searchText = dijit.byId('searchText').attr('value');
    if (searchText !== '') {
      // UPDATE SEARCH MESSAGE
      dojo.byId('searchInfo').innerHTML = userConfig.i18n.viewer.sidePanel.search.message;
      // SEARCH PARAMS: WEB MAPS ONLY
      var searchParams = ' (type:"web map" -type:"web mapping application" -type:"feature collection" -type:"mobile application")';
      // SEARCH 
      esri.request({
        url: userConfig.searchurl,
        content: {
          q: searchText + searchParams,
          start: 1,
          num: 50,
          f: 'json'
        },
        callbackParamName: "callback",
        load: function (response, io) {
          // SEARCH RESULTS
          var results = response.results;
          // DISPLAY RESULTS COUNT
          dojo.byId('searchInfo').innerHTML = results.length + " " + userConfig.i18n.viewer.sidePanel.search.results;
          // dojo.byId('searchInfo').innerHTML = dojo.replace("{0} Web Maps found", [results.length]);
          if (results.length > 0) {
            // ADD SEARCH RESULTS TO DOJO.DND.SOURCE CATALOG
            _resultsCatalog.insertNodes(false, results);
          }
        }
      });
    }
  }

  function catalogNodeCreator(result, hint) {
    //console.log(result);
    // AVATAR
    if (hint === 'avatar') {
      return {
          node: dojo.create("span",{
            innerHTML: result.avatar.innerHTML            
          })
        //node: dojo.dnd._createSpan(result.avatar.innerHTML)
      };
    } else {
      // FIX DESCRIPTION
      var descNode = dojo.create('div', {
        'innerHTML': result.description
      });
      if (descNode.textContent === '') {
        result.description = '<span style="color:salmon;font-style:italic;">No description available.</span>';
      }

      // RESULT NODE  
      var resultNode = dojo.create('div', {
        'id': 'result.' + result.id,
        'class': 'dojoDndItem'
      });
      resultNode.result = result;

      // TITLE  
      var titleNode = dojo.create('div', {
        'innerHTML': result.title,
        'style': 'font-size:small;margin:2px;'
      }, resultNode);

      // THUMBMAIL  
      var resultImg = dojo.create('img', {}, resultNode);
      if (result.thumbnail) {
        result.thumbnail = dojo.replace(userConfig.sharingurl + "/{id}/info/{thumbnail}", result);
        resultImg.style.width = '125px';
      } else {
        result.thumbnail = 'images/Map32.png';
      }
      resultImg.src = result.thumbnail;

      // TOOLTIP  
      var tooltip = new dijit.Tooltip({
        connectId: [resultNode],
        label: dojo.replace('<div class="tooltipLabel">{title}</div><hr/><div style="padding:15px;">{description}</div>', result)
      });
      // HIDE TOOLTIP ON MOUSE DOWN: HELPS WITH DND UX  
      resultNode.onmousedown = function () {
        tooltip.close();
      };

      // SET AVATAR
      result.avatar = resultNode;

      // RETURN DOJO.DND.SOURCE OBJECT  
      return {
        node: resultNode,
        data: result,
        type: ['resultItem']
      };
    }
  }

  // MAKE SURE THAT WE ONLY ACCEPT NODES WITH WEB MAP INFORMATION
  function checkAcceptanceWebMap(source, nodes) {
    var result = nodes[0].result;
    return (result && (result.type === 'Web Map'));
  }

  // CLEAR WEBMAP
  function clearWebMap(containerNum) {

    // CLEAR PREVIOUS MAP
    if (_maps[containerNum]) {
      try {
        if (_maps[containerNum].scalebar) {
          dojo.destroy(_maps[containerNum].scalebar.domNode);
        }
        _maps[containerNum].destroy();
        _maps[containerNum] = null;
      } catch (error) {
        console.error(error);
      }
    }

    // CLEAR TITLE
    dojo.byId('city.' + containerNum).innerHTML = '';
    // CLEAR DESCRIPTION
    dojo.byId('info.' + containerNum + '.description').innerHTML = '';
    // CLEAR CONTENT
    dojo.byId('info.' + containerNum + '.content').innerHTML = '';
    // CLEAR LEGEND
    dojo.byId('info.' + containerNum + '.legend').innerHTML = '';


  }

  function onDndDrop(source, nodes, copy, target) {
    //console.log(source);
    //console.log(nodes);
    //console.log(copy);
    //console.log(target);
    // GET SEARCH RESULT  
    var result = nodes[0].result;
    // GET MAP ID
    var mapId = target.node.id;
    // GET CONATINER NUMBER
    var containerNum = mapId.split('.')[1];
    // WEBMAP ID
    var webMapId = result.id;

    var getItemDeferred = esri.arcgis.utils.getItem(webMapId);
    getItemDeferred.addErrback(function (error) {
      // REMOVE DROPPED/COPIED NODE
      dojo.query('.dojoDndItem', target.parent).orphan();
      console.warn(error);
    });
    getItemDeferred.addCallback(function (response) {
      // REMOVE DROPPED/COPIED NODE
      dojo.query('.dojoDndItem', target.parent).orphan();
      // CLEAR WEBMAP
      clearWebMap(containerNum);

      var usesBing = dojo.string.contains('Bing', response.itemData.baseMap.title, false);
      if (usesBing && (userConfig.bingMapsKey === '')) {
        // INFORM USER OF MISSING BING KEY
        dojo.byId('info.' + containerNum + '.description').innerHTML = userConfig.i18n.viewer.errors.bingMessage;
        dojo.byId('info.' + containerNum + '.content').innerHTML = userConfig.i18n.viewer.errors.bingMessage;
        dojo.byId('info.' + containerNum + '.legend').innerHTML = userConfig.i18n.viewer.errors.bingMessage;

      } else {

        // CREATE MAP FROM ARCGIS.COM ID
        var deferred = esri.arcgis.utils.createMap(webMapId, mapId, {
          mapOptions: {
            nav: true
          },
          ignorePopups: false,
          bingMapsKey: userConfig.bingMapsKey,
          geometryServiceURL: userConfig.geometryServiceURL
        });
        deferred.addErrback(function (error) {
          // REMOVE DROPPED/COPIED NODE
          dojo.query('.dojoDndItem', target.parent).orphan();
          console.warn(error);
        });
        deferred.addCallback(function (response) {
          // REMOVE DROPPED/COPIED NODE
          dojo.query('.dojoDndItem', target.parent).orphan();
          // REBUILD WEBMAP UI  
          InitWebMapUI(response);
          // UPDATE USERCONFIG      
          userConfig.webMaps[containerNum].id = webMapId;
          dojo.byId('saveWebMapsMsg').innerHTML = userConfig.i18n.viewer.sidePanel.save.changeMessage;
          dojo.byId('saveWebMapsImg').src = 'images/GenericSave_B_22.png';
          _userConfigSaved = false;
        });
      }
    });
  }

  // GET USERCONFIG FROM COOKIE
  function getUserConfig() {
    var userConfigStr = dojo.cookie('CompareWebMaps.userConfig');
    if (userConfigStr) {
      var newUserConfig = dojo.fromJson(userConfigStr);
      // VALIDATE USERCONFIG
      if ((newUserConfig.webMaps) && (newUserConfig.webMaps.length === 3) && (newUserConfig.bingMapsKey) && (newUserConfig.geometryServiceURL)) {
        return newUserConfig;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  // SAVE USERCONIG AS COOKIE
  function saveUserConfig() {
    if (!_userConfigSaved) {
      // COOKIE GOOD FOR ONE YEAR...
      dojo.cookie('CompareWebMaps.userConfig', dojo.toJson(userConfig), {
        expires: 360
      });
      dojo.byId('saveWebMapsMsg').innerHTML = userConfig.i18n.viewer.sidePanel.save.changeMessage;
      dojo.byId('saveWebMapsImg').src = 'images/GenericSave_B_22_disabled.png';
      _userConfigSaved = true;
    }
  }

  // CLEAR USERCONFIG COOKIE
  function clearUserConfig() {
    // INVALIDATE COOKIE
    dojo.cookie('CompareWebMaps.userConfig', '...deleting....', {
      expires: -1
    });
    dojo.byId('saveWebMapsMsg').innerHTML = userConfig.i18n.viewer.sidePanel.save.clearMessage;
    dojo.byId('saveWebMapsImg').src = 'images/GenericSave_B_22_disabled.png';
    _userConfigSaved = true;
  }
  
  dojo.string.contains = function(/* string */ needle, /* string */ haystack, /* bool */ caseInsensitive) {
    if(caseInsensitive) {
        needle = needle.toLowerCase();
        haystack = haystack.toLowerCase();
    }
    return haystack.indexOf(needle) !== -1;
}