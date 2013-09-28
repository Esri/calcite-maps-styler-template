// dojo.provide() tells the loader that the module has been provided for the given name.
// It also creates a JavaScript object for the name.
dojo.provide('customUtils.mapUtils');

/**
 *
 * @type {Object}
 */
var customMapUtils = {

  /**
   *
   * @param layers
   */
  initMap:function (layers) {
    customMapUtils.registerNavBarHandlers(map);
    $('#legendDiv').toggle();
    // Fires after all layers are added to the map using the map.addLayers method.
    dojo.connect(map, 'onLayersAddResult', function (results) {
      // Applies callback to each layer of given array of layers and return an Array with information about each layer.
      var layerInfo = dojo.map(results, function (layer, index) {
        // layer: layer added to the map
        // name: layer name
        return {
          layer:layer.layer,
          title:layer.layer.name
        };
      });
      // check if there are any layers
      if (layerInfo.length > 0) {
        customMapUtils.addLegend(map, layerInfo);
      }
    });
    // hide the loading overlay
    utils.hideLoader();
  },

  /**
   *
   * @param itemId
   */
  addLayer:function (itemId) {
    $('#legendDiv').toggle();
    dojo.connect(map, 'onLayersAddResult', function (results) {
      var l = results[0].layer;
      map.setExtent(l.fullExtent);
    });

    esri.arcgis.utils.getItem(itemId).then(function (result) {
      var url = result.item.url;
      var request = esri.request({
        url              :url,
        'content'        :{
          f:'json'
        },
        callbackParamName:"callback"
      });
      request.then(function (result) {
        var layers = dojo.map(result.layers, function (layer) {
          return new esri.layers.FeatureLayer(url + "/" + layer.id);
        });
        map.addLayers(layers);
      });
    });
  },

  addScaleBar:function (map) {
    var scalebar = new esri.dijit.Scalebar({
      map         :map,
      scalebarUnit:'english'
    });
  },

  addBaseMapGallery:function (map) {
    var basemapGallery = new esri.dijit.BasemapGallery({
      showArcGISBasemaps:true,
      map               :map
    }, 'basemapGallery');

    basemapGallery.startup();
    $('#basemapGallery').fadeToggle('slow');
    dojo.connect(basemapGallery, 'onSelectionChange', this.basemapGalleryHandler);
  },

  basemapGalleryHandler:function () {
    $('#basemapGallery').fadeToggle('slow');
  },

  addGeocoder:function (map) {
    var geocoder = new esri.dijit.Geocoder({
      map         :map,
      autoComplete:true,
      maxLocations:10,
      showResults :true
    }, 'search');
    geocoder.startup();
    geocoder.hide();
    dojo.connect(geocoder, 'onFindResults', this.geocodeResultsHandler);
    dojo.connect(geocoder, 'onSelect', this.geocodeResultsHandler);
  },

  geocodeResultsHandler:function (results) {
    $('#search').fadeToggle('slow');
    geocoder.clear();
  },

  addLegend:function (map, layerInfo) {
    console.dir(layerInfo);
    var legendDijit = new esri.dijit.Legend({
      map       :map,
      layerInfos:layerInfo
    }, 'legendDiv');
    legendDijit.startup();
  },

  getLocation:function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.zoomToLocation, this.locationError);
    }
  },

  locationError:function (error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Location not provided");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Current location not available");
        break;
      case error.TIMEOUT:
        alert("Timeout");
        break;
      default:
        alert("unknown error");
        break;
    }
  },

  zoomToLocation:function (location) {
    map.graphics.clear();
    var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(location.coords.longitude, location.coords.latitude));
    var symbol = new esri.symbol.PictureMarkerSymbol('img/bluedot.png', 30, 30);
    graphic = new esri.Graphic(pt, symbol);
    map.graphics.add(graphic);
    map.centerAt(pt);
  },

  registerNavBarHandlers: function (map) {
    this.addScaleBar(map);
    this.addBaseMapGallery(map);
    this.addGeocoder(map);
  }
};