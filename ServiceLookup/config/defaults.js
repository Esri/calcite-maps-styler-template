define([], function() {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "aaa8531613db45d2855542c2bf544d1c", // ""
        "oauthappid": null, //"AFTKRmv16wj14N3z",
        //Group templates must support a group url parameter. This will contain the id of the group. 
        //group: "",
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
      
        "serviceAreaLayerName": "Service Area",
        "storeLocation":true,
        "serviceRequestLayerName": "Request Tracking",
        "serviceRequestLayerAvailibiltyField": "REQSTATUS",
        "serviceRequestLayerAvailibiltyFieldValueAvail": "Intersected",
        "serviceRequestLayerAvailibiltyFieldValueNotAvail": "Not Intersected",
        "serviceUnavailableTitle": "Service Unavailable",
        "serviceUnavailableMessage": "Thank you for your interest in service!  The selected location is not within the service area. We apologize for the inconvenience. If you have any questions or comments, please contact us at 555-5555 or by email at email@email.com",
        "bingMapsKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": location.protocol + "//" + "www.arcgis.com" //Defaults to arcgis.com. Set this value to your portal or organization host name. 
    };
    return defaults;
});