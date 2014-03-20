define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "21633896293248b7a40d4e3126c93621",
    "oauthappid": null,
    //"AFTKRmv16wj14N3z",
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "",
    "summary": "",
    "defaultPanel": "map",
    "summaryLayer": {
        "id": ""
    },
    "enableTitle": true,
    "enableEntireAreaButton": true,
    "selectEntireAreaOnStart": true,
    "enableSummary": true,
    "enableMapPanel": true,
    "enableLegendPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": true,
    "enableAboutDialog": true,
    "showAboutOnLoad": false,
    "enableShareDialog": true,
    "nextBasemap": "hybrid",
    "defaultBasemap": "topo",
    "summaryAttributeOrder": "DESC",
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
    "summaryAttributes": [
        {
            "attribute": "",
            "label": "Add Variable",
            "dataSourceUrl": "",
            "children": [

              ]
           },
        {
            "attribute": "",
            "label": "Add Variable",
            "dataSourceUrl": "",
            "children": [

              ]
           },
        {
            "attribute": "",
            "label": "Add Variable",
            "dataSourceUrl": "",
            "children": [

              ]
           },
        {
            "attribute": "",
            "label": "Add Variable",
            "dataSourceUrl": "",
            "children": [

              ]
           }
        ],
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "urlItems": [
        "edit",
        "extent"
    ],
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
    //default values for any items you need using the helper services and units properties.
    "queryForOrg": false,
    "localize": false,
    "units": null,
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
           }]
    }
});