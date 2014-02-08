define([], function () {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "",
        "oauthappid": null,
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        "bingMapsKey": "",  //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": location.protocol + "//" + "www.arcgis.com", //Defaults to arcgis.com. Set this value to your portal or organization host name. 


        "serviceAreaLayerNames": "Service Area",
        "popupTitle": "Service Information",
        "serviceUnavailableTitle": "Outside Utility Service Area",
        "serviceUnavailableMessage": "The utility does not provide service to the selected location",
        "zoomLevel": 16,
        "storeLocation": true,
        "serviceRequestLayerName": "Request Tracking",
        "serviceRequestLayerAvailibiltyField": "REQSTATUS",
        "serviceRequestLayerAvailibiltyFieldValueAvail": "Intersected",
        "serviceRequestLayerAvailibiltyFieldValueNotAvail": "Not Intersected",
       

    };
    return defaults;
});