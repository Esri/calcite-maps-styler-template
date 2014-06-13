/*global define,location */
define([], function () {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",//
        "webmap": "25660c0facdb419191c8b2dec5da74d7", 
       "oauthappid": null, //"AFTKRmv16wj14N3z",
	    //Group templates must support a group url parameter. This will contain the id of the group.
	    //group: "",
	    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
	    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
	    "proxyurl": "",
	    //Example of a template specific property. If your template had several color schemes
	    //you could define the default here and setup configuration settings to allow users to choose a different
	    //color theme.
	    "theme": "black",
	    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
	    //Defaults to arcgis.com. Set this value to your portal or organization host name.
	    "sharinghost": location.protocol + "//" + "www.arcgis.com",
	    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
	    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
	    //default values for any items you need using the helper services and units properties.
	    "queryForOrg": true,
	    //If you need localization set the supportsLocalization value to true to get the localized strings
	    //from the javascript/nls/resource files.
	    //Note that we've included a placeholder nls folder and a resource file with one error string
	    //to show how to setup the strings file.
	    "localize": true,
	    "units": null,
	    //This option demonstrates how to handle additional custom url parameters. For example
	    //if you want users to be able to specify lat/lon coordinates that define the map's center or
	    //specify an alternate basemap via a url parameter.
	    "urlItems": [
	        "theme" // example param. ?theme=<my theme>
	    ],
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
        "popupWidth": null,
        "popupHeight": null,
        "serviceUnavailableTitle": "Outside Utility Service Area",
        "serviceUnavailableMessage": "The utility does not provide service to the selected location",
        "zoomLevel": 16,
        "storeLocation": false,
        "serviceRequestLayerName": "Request Tracking",
        "serviceRequestLayerAvailibiltyField": "REQSTATUS",
        "serviceRequestLayerAvailibiltyFieldValueAvail": "Intersected",
        "serviceRequestLayerAvailibiltyFieldValueNotAvail": "Not Intersected",
        "showSplash": false,
        "splashText": "<center>Information Lookup is a configurable web application template that can be used to provide the general public, internal staff and other interested parties the with information about a location. If no features are found at that location, a general message is displayed. Optionally, the location entered can be stored in a point layer. The template can be configured using the ArcGIS Online Configuration dialog.</center>",
        
    };
    return defaults;
});