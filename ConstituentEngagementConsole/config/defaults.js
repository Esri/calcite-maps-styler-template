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
    "group": "e96bd5b249a04235bcd7399cb80ee3cf",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "proxy.ashx",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "theme": "#d15706",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "arcgis.com/",
    //If your applcation needs to edit feature layer fields set this value to true. When false the map will
    //be treated with layers that are not set to editable which allows the FeatureLayer to load features optimally.
    "editable": false,
    "helperServices": {
        "geometry": {
            "url": "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
        }
    },
    // name of the application
    "applicationName": "",
    // application icon
    "applicationIcon": "/images/app-icon.png",
    // application favicon icon
    "applicationFavicon": "/images/favicon.ico",
    // to display any null values
    "showNullValueAs": "",
    // to set zoom level of map when single feature is selected
    "zoomLevel": 14,
    // when web-map thumbnail icon is not available it will get replaced by this default icon
    "noThumbnailIcon": "/images/no-thumbnail.png",
    // when attachment is not available it will get replaced by this default icon
    "noAttachmentIcon": "/images/no-attachment.png",
    // to set description field whether it needs to be displayed or not in web-map description area
    "webMapInfoDescription": true,
    // to set snippet field whether it needs to be displayed or not in web-map description area
    "webMapInfoSnippet": true,
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
    "webMapInfoAvgRating": false
});