define([], function() {
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "8c59dfba1f9b46ca88331f1a830a0ee9",
        "oauthappid": null,
        //"AFTKRmv16wj14N3z",
        //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //Example of a template specific property. If your template had several color schemes
        //you could define the default here and setup configuration settings to allow users to choose a different
        //color theme.
        "title":"",
        "summary":"",
        "defaultPanel":"map",
        "enableTitle":true,
        "enableEntireAreaButton": true,
        "enableSummary":true,
        "enableMapPanel": true,
        "enableLegendPanel": true,
        "enableLayersPanel":true,
        "enableHomeButton": true,
        "enableLocateButton":true,
        "enableBasemapToggle": true,
        "enableAboutDialog":true,
        "showAboutOnLoad":false,
        "enableShareDialog":true,
        "nextBasemap": "hybrid",
        "defaultBasemap": "topo",
        "summaryAttributeOrder":"DESC",
        "bitlyLogin": "esri",
        "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
        //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "bingmapskey": "",
        //Defaults to arcgis.com. Set this value to your portal or organization host name.
        "sharinghost": location.protocol + "//" + "www.arcgis.com"
    };
    return defaults;
});