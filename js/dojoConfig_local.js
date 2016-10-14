/* global dojoConfig:true */
var package_path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
dojoConfig = {
  isDebug: true,
  packages: [
  {
    name: "dojo",
    location: "http://localhost/GitHub/arcgis-js-api/dojo/"
  }, 
  {
    name: "application",
    location: package_path + "/js/application",
    main: "main"
  }, {
    name: "boilerplate",
    location: package_path + "/js/boilerplate",
    main: "Boilerplate"
  }, {
    name: "config",
    location: package_path + "/config"
  }, {
    name: "bootstrap",
    location: "https://esri.github.io/calcite-maps/dist/vendor/dojo-bootstrap"
  }, {
    name: "calcite-maps",
    location: "https://esri.github.io/calcite-maps/dist/js/dojo"
  }]
};
if (location.search.match(/locale=([\w-]+)/)) {
  dojoConfig.locale = RegExp.$1;
}