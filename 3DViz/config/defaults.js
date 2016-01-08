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
  //default web scene, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
  "appid": "",
  "webscene": "e21786a657814675bd39e091d6e395cd", //"203eb0c74988469e90f9965c65a800a4",
  "oauthappid": null, //"AFTKRmv16wj14N3z",
  //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
  //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  "proxyurl": "",
  //Example of a template specific property. If your template had several color schemes
  //you could define the default here and setup configuration settings to allow users to choose a different
  //color theme.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "units": null,
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
  // Template configuration settings
  // Template UI settings
  "title": "WORLD BANK INDICATORS",
  "cycleColors": true,
  "colors": ['#2cbade', '#5da022', '#a1bd20', '#b8d824', '#eebd15', '#f59704', '#f56b0f', '#d12929', '#e02d7f', '#b17ec4', '#48aaf6'],
  "color": "#2cbade",
  "colorText": "",
  "reverse": true,
  // Template Scene settings
  "directShadows": true,
  "atmosphere": "none",
  "stars": "none",
  // Template Viz settings
  "vizType": "Point Extrusion",
  "vizLayer": null,
  "vizFields": [],
  "displayField": null,
  "maxZ": 2000000,
  "maxW": 100000,
  "interval": 20000,
  "showPercent": true
});
