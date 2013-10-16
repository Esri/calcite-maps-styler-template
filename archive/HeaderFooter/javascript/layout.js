dojo.provide("utilities.layout");
dojo.require("esri.arcgis.utils");

var map;
var configOptions;

function initMap(options) {
   
    configOptions = options;
    createMap();

}

function createMap() {
    //load the specified theme 
    var ss = document.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = "css/" + configOptions.theme + ".css";
    document.getElementsByTagName("head")[0].appendChild(ss);

    var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
        mapOptions: {
            slider: true,
            nav: false,
            showAttribution: true
        },
        ignorePopups: false,
        bingMapsKey: configOptions.bingmapskey
    });
    mapDeferred.addCallback(function (response) {

        dojo.byId('footerText').innerHTML = configOptions.i18n.viewer.footer.label;
        document.title = configOptions.title || response.itemInfo.item.title;
        dojo.byId("title").innerHTML = configOptions.title || response.itemInfo.item.title;
        dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";
        dojo.byId("owner").innerHTML = configOptions.owner || response.itemInfo.item.owner;
        map = response.map;
        if (map.loaded) {
            initUI();
        } else {
            dojo.connect(map, "onLoad", function () {
                initUI();
            });
        }
        //resize the map when the browser resizes
        dojo.connect(dijit.byId('map'), 'resize', map, map.resize);
    });
    mapDeferred.addErrback(function (error) {
        alert(configOptions.i18n.viewer.errors.createMap + " : " + error.message);
    });
}

function initUI() {
    //resize the layout and map to match the specified theme
    dijit.byId("mainWindow").resize();
    if (map) {
        map.reposition();
        map.resize();
    }

    //add theme for popup
    dojo.addClass(map.infoWindow.domNode, configOptions.theme);
    var scalebar = new esri.dijit.Scalebar({
        map: map,
        scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
    });
}