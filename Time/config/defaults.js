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
  "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
  //Defaults to arcgis.com. Set this value to your portal or organization host name.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "units": null,
  "time": true,
  //Overwrite the calculated date time format with a custom value. 
  "datetimeformat": "yyyy",//"MMMM d yyyy, h:m:s.SSS a",
  //Disable slider ticks when true
  "sliderticks":false, //display slider tics
  "looptime": false,//loop through time 
  "autoplay": false, //auto play the slider when app starts 
  "sliderrate": 500, //rate at which time slider plays in milliseconds.
  "noslider":false, //hide slider and play controls and just show time
  "timenav": false, //When true show the time navigation (next previous arrows)
  //position time and legend containers. Valid values are top-right, bottom-right, top-left
  //bottom-left, top-center, bottom-center. Note that if you set both to the same value they'll occupy the same space and the 
  //layout won't position correctly.
  "timeposition":"bottom-center", 
  "legendposition": "top-right",
  "panelbackground": "#575757", //panel and title bar background color as hex value
  "panelcolor":"#FFF", //text color as hex value 
  "timecolor": "#4992CD", //color for play and slider controls
  "slidercolor": "#7CC5FF", //color for the slider bar on time slider
  "legend": true, //Add legend to map 
  "title": true, //add title
  "titletext": null, //specify title text 
  "logo": null, //Provide the url to a logo image 
  "logolink":null,//optionally provide link text for the logo image 
  "about":true, //Enable the about dialog
  //Define text that appears in the about dialog. If no text is specified the web map desc is used. 
  "abouttext": null,
  //Enable the social sharing dialog (email, facebook, twitter etc)
  "share":true,
  //Enable the map zoom slider 
  "zoomslider":true,
  //add the search tool 
  "search": true,
  //Set locationSearch to false to disable search with the locators. Only feature layer search
  //will be enabled. 
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
