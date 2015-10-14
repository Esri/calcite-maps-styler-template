/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "b007e3561ff94591b68575e974882e4d",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    //group: "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    "proxyurl": "./proxy.php",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
    //default values for any items you need using the helper services and units properties.
    "queryForOrg": true,
    //If you need localization set the localize value to true to get the localized strings
    //from the javascript/nls/resource files.
    //Note that we've included a placeholder nls folder and a resource file with one error string
    //to show how to setup the strings file.
    "localize": true,
    "units": null,
    
    // **************************** //
    // ** UI SPECIFIC PARAMETERS ** //
    "color" : "#80ab00",
    "title" : "Find Nearest",
    "prompt" : "Enter address",
    "styleBasemap" : 1,
    // **************************** //
    
    // **************************** //
    // ** TEMPLATE PARAMETERS    ** //
    "destination" : "",
    "longitude" : null,
    "latitude": null,
    "address" : null,
    "destLayer" : null,
    "destObjectId" : null,
    "distanceUnits": "miles", // options: miles or kilometers
    "defaultZoomLevel" : 13,
    "useClosestFacility" : false,
    "closestFacilityURL" : "",
    // **************************** //
    
    // **************************** //
    // ** UTILITY PARAMETERS     ** //
    "routeUtility" : "",
    
    // **************************** //
    
    
    //This option demonstrates how to handle additional custom url parameters. For example
    //if you want users to be able to specify lat/lon coordinates that define the map's center or
    //specify an alternate basemap via a url parameter.
    "urlItems": [
        "extent",
        "color",
        "title",
        "styleBasemap",
        "destination",
        "longitude",
        "latitude",
        "address"
    ],
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "routeTask": {
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
