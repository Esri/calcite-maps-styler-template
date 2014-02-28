define([], function () {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "25660c0facdb419191c8b2dec5da74d7", // "" 
        "oauthappid": null, //"AFTKRmv16wj14N3z",
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        "bingMapsKey": "",  //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": location.protocol + "//" + "www.arcgis.com", //Defaults to arcgis.com. Set this value to your portal or organization host name. 
        "queryForOrg": true,
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
        },

        "serviceAreaLayerNames": "Service Area",
        "popupTitle": "Service Information",
        "serviceUnavailableTitle": "Outside Utility Service Area",
        "serviceUnavailableMessage": "The utility does not provide service to the selected location",
        "zoomLevel": 16,
        "storeLocation": false,
        "serviceRequestLayerName": "Request Tracking",
        "serviceRequestLayerAvailibiltyField": "REQSTATUS",
        "serviceRequestLayerAvailibiltyFieldValueAvail": "Intersected",
        "serviceRequestLayerAvailibiltyFieldValueNotAvail": "Not Intersected"

    };
    return defaults;
});