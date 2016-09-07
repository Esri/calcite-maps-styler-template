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
  "webmap": "60fa51b9e28749f485ce0bceced9e798", // dc2593ea70c04bfbbf6c5f3ae331890a, 60fa51b9e28749f485ce0bceced9e798
  "oauthappid": null, //"AFTKRmv16wj14N3z",
  //Group templates must support a group url parameter. This will contain the id of the group.
  "group": "",
  //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
  //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  "proxyurl": "",
  "title": null,
  "description": null,
  "legend": true,
  "layerInfo": {
    "id": null, //id of the search layer as defined in the web map
    "fields": [] //Name of the string field to search
  },
  //"layerId": "OSMPTrails_5787",
  //"field": "Length_mi",
  "order": "ASC", // ASC or DESC
  "rankLabelTemplate": "Rank {current} of {total}",
  "count": 10,
  "symbolcolor": "#337ab7",
  "symbolsize": "11",
  "symbolopacity": ".8",
  "navcolor": "black", // white or black
  "bgcolor": "#fff", // side panel background color
  "textcolor": "#5D5D5D", //text color
  "buttontext": null,
  "buttoncolor": "#e0e0e0",
  "customstyle": null, //'#mapDiv { background-color: #cfdfec; } .arcgisSearch .searchGroup .searchInput { border: 0px solid #BDBDBD; background-color: #fff!important; height: 27px; font-size: 16px; color: #333; } .esriIconZoom:before { color: white; } .arcgisSearch .searchBtn { border: 0px solid #57585A; rgba(0, 0, 0, 0.41); } #mapDiv_graphics_layer path { stroke: rgba(221, 0, 32, 1); stroke-width: 4px; opacity: 0.01; } .icon-menu:before { opacity: 0.01; } input#search_input:focus { outline: none; } .arcgisSearch .searchMenu { border: 0px solid #57585A; } .esriIconClose:before { color: white; } #panelLogo img { max-width: 80px; max-height: 68px; } #panelLogo { width: 81px; padding-top: 3px; } .titleButton.maximize:before { visibility: hidden!important; } .pageHeaderImg { display: none; } .pageTitle { display: none; } .arcgisSearch .hasMultipleSources .searchToggle { display: none!important; } #search_input::-webkit-input-placeholder { color: #3B3C3D; } #search_input::-moz-placeholder { color: #3B3C3D; } #search_input:-ms-input-placeholder { color: #3B3C3D; } #panelTop { height: 79px!important; } #search > div > div.searchBtn.searchSubmit { height: 27px; } .arcgisSearch .searchIcon { line-height: 29px; } #panelSearch { margin: 10px 10px 10px 20px!important; } .esriIconClose:before { color: rgb(134, 134, 134); padding-right: 7px; } #panelTitle { border-bottom: none; } .no-search #panelLogo { width: 87px; padding-right: 19px; } .no-search #panelLogo img { max-width: 86px !important; } #panelText { max-width: 500px; }',
  "buttontextcolor": "#5D5D5D",
  "selectionZoomLevel": null, // set zoom level
  "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
  //Defaults to arcgis.com. Set this value to your portal or organization host name.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "units": null,
  //If your applcation needs to edit feature layer fields set this value to true. When false the map will
  //be dreated with layers that are not set to editable which allows the FeatureLayer to load features optimally.
  "editable": false,
  "markerSymbol": "./images/EsriBluePinCircle26.png",
  "markerSymbolWidth": 26,
  "markerSymbolHeight": 26,
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
