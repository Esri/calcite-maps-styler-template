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
  "webscene": null,
  "webscenes":["19dcff93eeb64f208d09d328656dd492","126b3e5b650c468fb97639c175b229b7"],
  "oauthappid": null, //"AFTKRmv16wj14N3z",
  //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
  //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  // Specify the background color for the app (buttons and panel)
  "backgroundColor": "#333",
  "textColor": "#fff",
  // Specify the color for the slide gallery. This gallery only displays when your web scene has slides.
  "slideColorTheme": "#05668D",
  // When true view extent will be linked so if you zoom, pan on one the behavior will be the same on the other
  "link": true,
  "panelsOpen": false,
  "proxyurl": "",
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "units": null,
  "components": ["attribution", "zoom", "compass"],
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
