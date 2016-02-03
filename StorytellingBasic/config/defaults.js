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
  "background":"#444",
  "color": "#fff",
  "legendTitleBackground": "#848484",
  "subtitleColor": "#CECECE",
  "showTitle": true,
  "showSubTitle": true,
  "title": null,
  "subtitle": null,
  "showLogo": true,
  "logoLink": "http://www.esri.com",
  "logo": "./images/esri-logo.png",
  "showSocialIcons": true,
  "showSocialText": true,
  "socialLink": "http://storymaps.arcgis.com",
  "socialText": "A story map",
  "headerHeight": "115",
  "embed": false,
  "legend": true,
  "scalebar": true,
  "markerSymbol": "./images/EsriBluePinCircle26.png",
  "markerSymbolWidth": 26,
  "markerSymbolHeight": 26,
  //When true the geocoder search box is displayed in the title area
  //When searchextent is true the geocoder will prioritize results within
  //the current map extent
  "search": false,
  "searchExtent": true, 
  "locationSearch": true,
  "searchLayers":[{
      "id": "",
      "fields": []
  }], 
  //Replace these with your own bitly key
  "bitlyLogin": "arcgis",
  "bitlyKey": "R_b8a169f3a8b978b9697f64613bf1db6d",
  "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
  //Defaults to arcgis.com. Set this value to your portal or organization host name.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "units": null,
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