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
    "webmap": "24e01ef45d40423f95300ad2abc5038a",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "units": null,
    //Custom Basic Viewer properties
    "title": null, //enter a title if no title is specified web map title is used. 
    "showtitle": true,
    "description": null, //Description if not entered web map desc is used. 
    "theme": "#545454",
    "titlecolor": "#333",
    "color": "#fff",
    "iconcolortheme": "#fff",
    "showdescription": true,
    "showpanel": true,
    "panelwidth": 228,
    "legend": true,
    "activepanel": "legend",
    //If your applcation needs to edit feature layer fields set this value to true. When false the map will
    //be dreated with layers that are not set to editable which allows the FeatureLayer to load features optimally. 
    "editor": false,
    "editable": false,
    "editortoolbar": false,    
    "search": true,
    "searchExtent": true,
    "searchLayers":[{
        "id": null,//"Boston_Marathon_7694",
        "fields": [] //"STATE_NAME"
    }],
    "table": true,
    "tableLayer": {
        "id": "SeattleBikes_5154",
        "fields":[
            {"id":"hiddenFields",
            "fields":["SEGKEY","COMPKEY","COMPTYPE","DISTANCE","WIDTH","UNITID","UNITDESC","BIKE_FACIL","DELINEATOR","FINISH_TYP","SURFACE_TY","INSTALL_DA","MOUNT_TYPE"]}
        ]
    },
    "layerlist": true,
    "bookmarks": false,
    "basemaps": true,
    "print": true,
    "printlegend": true,
    "printlayouts": true,
    "printformat": "pdf",
    "zoom": true,
    "zoom_position": "top-left",
    "home" : true,
    "locate": false,
    "scale": false,
    "share": false,
    "basemapgroup": {
        "title": null,
        "owner": null
    },
    "logoimage":null,
    "logolink":null,
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
    //Replace these with your own bitly key
    "bitlyLogin": "esrimarketing",
    "bitlyKey": "R_52f84981da0e75b23aea2b3b20cbafbc"
});
