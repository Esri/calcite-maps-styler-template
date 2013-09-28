function geoLocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, locationError);
  } else {
    // user did not permit geolocation. or browser/device does not support it
  }
}

function locationError(error) {
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
}

function zoomToLocation(location) {
  var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(location.coords.longitude, location.coords.latitude));
  map.centerAndZoom(pt, 16);
}

function showLocation(location) {
  var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(location.coords.longitude, location.coords.latitude));
  var graphic = new esri.Graphic(new esri.geometry.Point(pt, map.spatialReference), null, null);
  map.centerAndZoom(graphic.geometry, 16);
}