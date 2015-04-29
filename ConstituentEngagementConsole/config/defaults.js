/*global define,location */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
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
    //default group, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "oauthappid": null,
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "d3e11b4398984ec481d3ae9bde0d2810",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "proxy.ashx",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "theme": "#d15706",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "arcgis.com",
    "helperServices": {
        "geometry": {
            "url": "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
        }
    },
    // name of the application
    "applicationName": "",
    // application icon
    "applicationIcon": "",
    // application favicon icon
    "applicationFavicon": "/images/favicon.ico",
    // to display any null values
    "showNullValueAs": "",
    // to set zoom level of map when single feature is selected
    "zoomLevel": 12,
    // when web-map thumbnail icon is not available it will get replaced by this default icon
    "noThumbnailIcon": "/images/default-webmap-thumbnail.png",
    // when attachment is not available it will get replaced by this default icon
    "noAttachmentIcon": "/images/no-attachment.png",
    // to set description field whether it needs to be displayed or not in web-map description area
    "webMapInfoDescription": true,
    // to set snippet field whether it needs to be displayed or not in web-map description area
    "webMapInfoSnippet": false,
    // to set owner field whether it needs to be displayed or not in web-map description area
    "webMapInfoOwner": true,
    // to set created field whether it needs to be displayed or not in web-map description area
    "webMapInfoCreated": false,
    // to set modified field whether it needs to be displayed or not in web-map description area
    "webMapInfoModified": false,
    // to set license info field whether it needs to be displayed or not in web-map description area
    "webMapInfoLicenseInfo": false,
    // to set access information field whether it needs to be displayed or not in web-map description area
    "webMapInfoAccessInformation": false,
    // to set tags field whether it needs to be displayed or not in web-map description area
    "webMapInfoTags": false,
    // to set views field whether it needs to be displayed or not in web-map description area
    "webMapInfoNumViews": false,
    // to set rating field whether it needs to be displayed or not in web-map description area
    "webMapInfoAvgRating": false,
    // to set the color of feature that is activated by selecting particular row
    "activeRow": "#C8C8C8"
});