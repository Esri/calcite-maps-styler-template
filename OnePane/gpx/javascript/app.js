dojo.require("esri.layout");
dojo.require("esri.widgets");

dojo.require("esri.arcgis.utils");

dojo.require("extras.FeatureLayerChart");

var app = {}; 
app.map = null;
app.flPoints = null;
app.info = null;
app.pointData = null;
app.pointLayerId = null;
app.timeSlider = null;
app.timeStart = null;
app.timeEnd = null;
app.timeStops = [];
app.elevations = [];
app.chartTimer = null;
app.chartQuery = null;


function initApp(options) {
  app.options = options;
  dojo.byId("currentText").innerHTML = app.options.i18n.appStrings.current;
  dojo.byId("startText").innerHTML = app.options.i18n.appStrings.start;
  dojo.byId("endText").innerHTML = app.options.i18n.appStrings.end;
  dojo.byId("descText").innerHTML = app.options.i18n.appStrings.desc;

  var ss = document.createElement("link");
  ss.type = "text/css";
  ss.rel = "stylesheet";
  ss.href = "css/" + app.options.theme + ".css";
  document.getElementsByTagName("head")[0].appendChild(ss);

  // Get webmap info and populate title, subtitle and sidebar sections of the app
  var arcgisItem = esri.arcgis.utils.getItem(app.options.webmap);
  
  arcgisItem.then(
    function(resp) {
      handleItem(resp);
      document.title = app.options.title || resp.item.title || " ";	
      dojo.byId("appTitle").innerHTML = app.options.title || resp.item.title || " ";
      dojo.byId("subTitle").innerHTML = app.options.subtitle || resp.item.snippet || " ";
      var description = app.options.sidebarContent || resp.item.description;
      if ( description ) {
        dojo.byId("itemDesc").innerHTML += description.replace(/^\s+|\s+$/g,"");
      }
    }, 
    function(error) {
      alert(app.options.i18n.appStrings.errors.createMap + dojo.toJson(error.message));
    }
  );
}

function handleItem(info) {
  app.info = info;
  var opLayers = app.info.itemData.operationalLayers,
      pointLayerIdx = -1;

  // loop through each operational layer
  dojo.forEach(opLayers, function(layer) {
    // all gpx layers are prefixed with "gpx"
    if ( layer.id &&  layer.id.slice(0, 3) == "gpx" ) {
      var fcLayers = layer.featureCollection.layers;
      // look for point feature layers
      dojo.forEach(fcLayers, function(lyr, idx) {
        if ( lyr.featureSet.geometryType == "esriGeometryPoint" ) {
          // Do not use waypoint layers, waypoints have a 'cmt' attribute
          // Save a reference to the point data 
          if ( ! lyr.featureSet.features[0].attributes.hasOwnProperty('cmt') ) {
            app.pointData = lyr.featureSet.features;
            // Save the point layer id to use later to build a TimeSlider
            pointLayerIdx = idx;
          } else {
            // console.log("waypoint layer: ", lyr);
          }
        } else {
          // console.log(lyr, " is not a point or line layer.");
        }
      });
    }
  });

  if ( pointLayerIdx > -1 ) {
    // Find start and end time, used to set up the TimeSlider
    app.timeStart = findStart(app.pointData);
    app.timeEnd = findEnd(app.pointData);

    // Create a timeInfo object for the points layer
    // so it can be connected to a TimeSlider
    var timeInfo = {
      "startTimeField": "time",
      "timeExtent": [ app.timeStart, app.timeEnd ],
      "timeInterval": 1,
      "timeIntervalUnits": "esriTimeUnitsMilliseconds"
    };

    // Time enable the point layer by setting a timeInfo property
    app.info.itemData.operationalLayers[0].featureCollection.layers[pointLayerIdx].layerDefinition.timeInfo = timeInfo;
    
    // Save the point layer id 
    app.pointLayerId = app.info.itemData.operationalLayers[0].id + '_' + pointLayerIdx;
  } else {
    // console.log("no point layer!");
    dojo.destroy(dojo.byId("sidebar"));
    dojo.destroy(dojo.byId("elevInfo"));
    // alert(app.options.i18n.appStrings.errors.noData);
  }

  // Create the map from the itemInfo
  var mapDeferred = esri.arcgis.utils.createMap(info, "map", {
    bingMapsKey: app.options.bingmapskey,
    mapOptions: {
      wrapAround180: true
    } 
  });
  
  mapDeferred.then(
    function(response) {
      app.map = response.map;
      
      // Handle resize of the browser
      dojo.connect(dijit.byId("map"), "resize", app.map, app.map.resize);

      if ( app.map.getLayer(app.pointLayerId || "") ) {
        app.flPoints = app.map.getLayer(app.pointLayerId);
        
        // Check for 'time' attribute and create time slider
        if ( app.flPoints.graphics[0].attributes && 
             app.flPoints.graphics[0].attributes.hasOwnProperty("time") ) {
          collectTimes(app.flPoints.graphics);
        } else {
          dojo.byId("currentWrapper").innerHTML = "";
          dojo.byId("timeInfo").innerHTML = app.options.i18n.appStrings.errors.noTimeData;
          // open the info window using the first point in the feature layer
          selectFirstPoint([app.flPoints.graphics[0]]);
        }

        // Check for 'ele' attribute to create elevation chart
        if ( app.flPoints.graphics[0].hasOwnProperty("attributes") && 
             app.flPoints.graphics[0].attributes.hasOwnProperty("ele") ) {
          createElevChart();
        } else {
          useElevationSOE();
        }
      }
      fadeOutLoading(); // fade out the loading div
    }, 
    function(error) {
      alert(app.options.i18n.appStrings.errors.createMap + dojo.toJson(error.message));
    }
  );
}

function timeChange(timeExtent) {
  dojo.byId("raceCurrent").innerHTML = formatTime(timeExtent.startTime.getTime());

  // Select the current point on the run
  // only select when the time slider is playing
  if ( app.timeSlider && app.timeSlider.playing ) {
    var query = new esri.tasks.Query();
    query.timeExtent = timeExtent;
    // Select the current point on the run
    // 3 is the same as:
    // esri.layers.FeatureLayer.SELECTION_NEW
    app.flPoints.selectFeatures(query, 3, selectFirstPoint);
  }
}

function selectFirstPoint(features) {
  if ( features && features.length ) {
    app.map.infoWindow.setFeatures(features);
    app.map.infoWindow.show(features[0].geometry);
  }
}

function collectTimes(graphics) {
  dojo.forEach(graphics, function(g, idx) {
    app.timeStops[idx] = new Date(g.attributes.time);
  });
  
  // Display start and end times
  showStartAndEnd(app.timeStart, app.timeEnd);

  // Create the time slider
  createTimeSlider(app.timeStops);
}

function findStart(points) {
  var timeStart = Infinity;
  dojo.forEach(points, function(p) {
    if ( p.attributes.time < timeStart ) {
      timeStart = p.attributes.time;
    }
  });
  return timeStart;
}

function findEnd(points) {
  var timeEnd = -Infinity;
  dojo.forEach(points, function(p) {
    if ( p.attributes.time > timeEnd ) {
      timeEnd = p.attributes.time;
    }
  });
  return timeEnd;
}

function showStartAndEnd(start, end) {
  dojo.byId("raceCurrent").innerHTML = formatTime(start);
  dojo.byId("raceStart").innerHTML = formatTime(start);
  dojo.byId("raceEnd").innerHTML = formatTime(end);
}

function createTimeSlider(timeStops) {
  var tsDiv = dojo.create("div", null, dojo.byId("timeSliderDiv"));
  app.timeSlider = new esri.dijit.TimeSlider({
    style: "width: 380px;",
    id: "timeSlider",
    options: {
      excludeDataAtLeadingThumb: true
    }
  }, tsDiv);

  app.timeSlider.setThumbCount(1);
  app.timeSlider.setTimeStops(timeStops); 
  app.timeSlider.singleThumbAsTimeInstant(true);
  app.timeSlider.setTickCount(0); // no ticks because there would be 253
  app.timeSlider.setThumbMovingRate(300); // default is 1000
  app.timeSlider.setLoop(true);
  // Show time and select a point as time slider changes
  dojo.connect(app.timeSlider, "onTimeExtentChange", timeChange);
  app.timeSlider.startup();
}

function createElevChart() {
  app.flChart = new extras.FeatureLayerChart({
    "elevationString": app.options.i18n.appStrings.elev, 
    "featureLayer": app.flPoints,
    "layerAttribute": "ele"
  }, "elevChart");

  // highlight the current point on the elevation profile
  dojo.connect(app.flPoints, "onSelectionComplete", function(e) {
    // console.log("on sel complete: ", e);
    // update the time slider, if it exists
    if ( app.timeSlider && ! app.timeSlider.playing ) {
      // find the index for the first selected graphic 
      var idx = dojo.indexOf(app.flPoints.graphics, e[0]);
      app.timeSlider.setThumbIndexes([idx]);
    }
  });
}

function useElevationSOE() {
  // If points from a .gpx file do not have elevations,
  // use the GetElevations server object extension (SOE)
  // hosted on sample server 4. 
  // 
  // The SOE takes an array of geometries(points in this case)
  // and returns an array of elevations, one for each point.
  var geoms = dojo.map(app.flPoints.graphics, function(g) {
    return g.geometry.toJson();
  });
  esri.request({
    url: "http://sampleserver4.arcgisonline.com/ArcGIS/rest/services/Elevation/ESRI_Elevation_World/MapServer/exts/ElevationsSOE/ElevationLayers/1/GetElevations",
    content: {
      "f": "json",
      "geometries": dojo.toJson(geoms)
    }
  }).then(function(results) { // process results
    console.log("got elevations from sample server");
    app.elevations = dojo.map(results.elevations, function(r) {
      return parseFloat(r[0].toFixed(2));
    });
    // console.log('app elevs: ', app.elevations);
    // once we have elevations, create an elevation profile from them
    createElevChart(app.elevations);
  }, function(err) { // handle error
    // console.log('GetElevations using the SOE on sample server 4 failed. ', err);
    alert(app.options.i18n.appStrings.noElev);
  });
}

function formatTime(time) {
  return dojo.date.locale.format(new Date(time), {
    "selector": "time", "timePattern": "h:mm:ss a"
  });
}

function fadeOutLoading() {
  var fade = dojo.fadeOut({ "node": "loading" });
  var fadeAnim = dojo.connect(fade, "onEnd", function() { 
    dojo.style(dijit.byId("mainWindow").domNode, "visibility", "visible");
    dojo.destroy(dojo.byId("loading")); 
    dojo.disconnect(fadeAnim);
  });
  fade.play();
}



