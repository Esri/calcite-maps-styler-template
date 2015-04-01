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
  "webmap": "3c226baaa63f4616a423e0d8bc8e59c9",
  "oauthappid": null, //"AFTKRmv16wj14N3z",
  //Group templates must support a group url parameter. This will contain the id of the group.
  "group": "",
  //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
  //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  "proxyurl": "",
  //Example of a template specific property. If your template had several color schemes
  //you could define the default here and setup configuration settings to allow users to choose a different
  //color theme.
  "theme": "blue",
  "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
  //Defaults to arcgis.com. Set this value to your portal or organization host name.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "units": null,
  //If your applcation needs to edit feature layer fields set this value to true. When false the map will
  //be dreated with layers that are not set to editable which allows the FeatureLayer to load features optimally. 
  "editable": false,
  "time": true,
  //Overwrite the calculated date time format with a custom value. 
  "datetimeformat": null,
  //Disable slider ticks when true
  "sliderticks":false, //display slider tics
  "looptime": true,//loop through time 
  "autoplay": false, //auto play the slider when app starts 
  "nocontrols":false, //hide slider and play controls and just show time
  //position time and legend containers. Valid values are top-right, bottom-right, top-left
  //bottom-left. Note that if you set both to the same value they'll occupy the same space and the 
  //layout will look odd.
  "timeposition":"bottom-left",
  "legendposition": "top-right",
  "panelbackground": null, //panel background color as hex value
  "panelcolor":null, //text color as hex value 
  "timecolor": null, //color for play and slider controls
  "legend": true, //Add legend to map 
  "title": true, //add title and optionally subtitle
  "titletext": null,
  "subtitletext": null,
  "zoomslider":true,
  //add the search tool 
  "search": true,
  "locationSearch": true,
  //When searchExtent is true the locator will prioritize results within the current map extent.
  "searchExtent": false,
  "searchLayers":[{
      "id": "",
      "fields": []
  }],
  "scale": false, //display a scale bar on the map 
  "helperServices": {
    "geometry": {
      "url": null
    },
    "printTask": {
      "url": null
    },
    "elevationSync": {
      "url": "http://ahn.arcgisonline.nl/arcgis/rest/services/Geoprocessing/Profile/GPServer/Profile"
    },
    "geocode": [{
      "url": null
        }]
  }
});