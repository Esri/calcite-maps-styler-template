/* global dojoConfig:true */
var package_path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
dojoConfig = {
  async: true,
  packages: [{
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
    location: "//esri.github.com/calcite-maps/dist/vendor/dojo-bootstrap"
  }, {
    name: "calcite-maps",
    location: "//esri.github.com/calcite-maps/dist/js/dojo"
  }]
};
if (location.search.match(/locale=([\w-]+)/)) {
  dojoConfig.locale = RegExp.$1;
}
