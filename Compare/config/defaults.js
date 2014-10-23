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
    "webmap": "18f5afcaed8d47d0a36526b850f14f5e",
    "webmaps": ["106d8ef38ae04a1eb120fa8645207a95","ba79af12ce584940a72eaabc711b6e88"],//,"4a675e9bc2994a7594ffeec7aaefd749"],
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "title": "Compare Maps",
    "description": "This is a sample app that compares multiple maps. You could put some cool info about the maps here",
    "home": true,
    "theme_color":"#575757",
    "theme_bg_color": "#fff",
    //If your applcation needs to edit feature layer fields set this value to true. When false the map will
    //be dreated with layers that are not set to editable which allows the FeatureLayer to load features optimally. 
    "editable": false,
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
