
dojo.require('esri.widgets');
dojo.require("esri.arcgis.utils");
dojo.require("dojo.DeferredList");


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


// INITIALIZE APPLICATION
function initMap(options) {

userConfig = options;



userConfig.title = userConfig.title ||  userConfig.i18n.viewer.title;

dojo.byId('mapHeader').innerHTML = userConfig.i18n.viewer.sidePanel.map.label;
dojo.byId('syncHeader').innerHTML = userConfig.i18n.viewer.sidePanel.sync.label;

dojo.byId("scaleLabel").innerHTML = userConfig.i18n.viewer.sidePanel.sync.scaleLabel;
dojo.byId('locationLabel').innerHTML = userConfig.i18n.viewer.sidePanel.sync.locationLabel;
dojo.byId('displayLegendLabel').innerHTML = userConfig.i18n.viewer.sidePanel.map.legendLabel;
dojo.byId("contentLabel").innerHTML = userConfig.i18n.viewer.sidePanel.map.contentLabel;
dojo.byId('descriptionLabel').innerHTML = userConfig.i18n.viewer.sidePanel.map.descriptionLabel;
dojo.byId("loadingDialog").title = userConfig.i18n.viewer.main.loading.title;
dojo.byId("loadingMessage").innerHTML = userConfig.i18n.viewer.main.loading.loadingMessage;




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

createApp();

}

function createApp() {
if(userConfig.webmap){
  userConfig.webMaps = getWebMaps(userConfig.webmap);
}

document.title = userConfig.title;
dojo.byId('title').innerHTML = userConfig.title;


applyTheme();


// HIDE RIGHT PANE IF WE ONLY HAVE TWO WEBMAPS        
if (userConfig.webMaps.length === 2) {
  esri.hide(dojo.byId('mapContainer.2'));
  dojo.style('mapContainer.0', 'width', '50%');
  dojo.style('mapContainer.1', 'width', '50%');
  dijit.byId('mainWindow').resize();
}
// CREATE WEB MAPS
var createMapDeferreds = dojo.map(userConfig.webMaps, function (userWebMap, containerNum) {
  return esri.arcgis.utils.createMap(dojo.string.trim(userWebMap.id), 'map.' + containerNum, {
	mapOptions: {
	  slider: true,
	  nav: true,
    showAttribution:false,
	  wrapAround180: true
	},
	bingMapsKey: userConfig.bingmapskey
  });
});
var createMapDeferredsList = new dojo.DeferredList(createMapDeferreds);
createMapDeferredsList.addErrback(function (error) {
  alert(userConfig.i18n.viewer.errors.createMap + " " + dojo.toJson(response.message));
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

function applyTheme() {
var ss = document.createElement("link");
ss.type = "text/css";
ss.rel = "stylesheet";
ss.href = "css/" + userConfig.theme + ".css";
document.getElementsByTagName("head")[0].appendChild(ss);
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
function initUI(map,response){

  // CONTAINER NUMBER
  var containerNum = map.id.split('.')[1];
  // ADD MAP TO ARRAY OF MAPS  
  _maps[containerNum] = map;
  //size the info window
  var h = dojo.number.round(map.height / 2);
  var w = dojo.number.round(map.width * .45);

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


  // FIX DESCRIPTION
  if (!webMapItem.item.description) {
  webMapItem.item.description = userConfig.i18n.viewer.errors.webmapDescription;
  }

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



  // CONNECT ONMOUSEOVER EVENT
  dojo.connect(map, 'onMouseOver', function (evt) {
  // INFORM USER OF MAP CONTEXTMENU
  dojo.byId(map.id).title = userConfig.i18n.viewer.main.contextMenu.title;
  });

    dojo.connect(map,"onDblClick",function(evt){
      connectEvents(map);
     } );

  dojo.connect(map, "onMouseWheel", function (evt) {
  // CONNECT ONEXTENTCHANGE EVENT
  connectEvents(map);
  });
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
disconnectEvents();
_mapExtentChangeEvent = dojo.connect(map, 'onExtentChange', function (extent, delta, levelChange, lod) {
  if (_syncScale && levelChange) {
	// SYNC SCALES
	syncMapScales(map);
  } else {
	if (_syncLocation) {
	  // SYNC LOCATIN
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
  if (otherMap.id !== thisMap.id) {
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
  if (otherMap.id !== thisMap.id) {
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
var thisMapScale = getMapScale(thisMap);
dojo.forEach(_maps, function (otherMap) {
  if (otherMap.id !== thisMap.id) {
	var otherMapLevel = getMapLevelByScale(otherMap, thisMapScale);
	if (otherMapLevel) {
	  otherMap.setLevel(otherMapLevel);
	}
  }
});
}

// ADJUST OTHER MAPS TO LOCAITON
function adjustToMyLocation() {
// GET MAP
var thisMap = getMap(_menuContentPane.id);
// ADJUST LOCATIONS
syncMapLocations(thisMap);
}

// ADJUST OTHER MAPS TO SCALE AND LOCAITON
function adjustToMyScaleAndLocation() {
// GET MAP
var thisMap = getMap(_menuContentPane.id);
var thisMapScale = getMapScale(thisMap);
dojo.forEach(_maps, function (otherMap) {
  if (otherMap.id !== thisMap.id) {
	var otherMapLevel = getMapLevelByScale(otherMap, thisMapScale);
	if (otherMapLevel) {
	  getCenter(thisMap, otherMap, function (otherCenter) {
		otherMap.centerAndZoom(otherCenter, otherMapLevel);
	  });
	}
  }
});
}

// GET MAP BASED ON MAP ID
function getMap(mapId) {
return dojo.filter(_maps, function (map) {
  return (map.id === mapId);
})[0];
}

// GET MAP SCALE
function getMapScale(map) {
return esri.geometry.getScale(map);
}

// GET MAP LEVEL BASED ON SCALE
function getMapLevelByScale(map, mapScale) {
var nearLODs = dojo.filter(map.__tileInfo.lods, function (lod) {
  return (parseInt(lod.scale, 10) <= parseInt(mapScale, 10));
});
if (nearLODs.length > 0) {
  return nearLODs[0].level;
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
  updateInformationForMap(map);
});
}

function updateInformationForMap(map) {
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

// GET LEGEND ITEMS
function buildLayersList(webMapItem) {
  var layers = webMapItem.itemData.operationalLayers; 
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