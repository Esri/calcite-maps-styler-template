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
  "webmap": "99af95d49bda4efd891cbbbbb067ee6f",
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
  "customstyle": null, //'#mapDiv { background-color: #cfdfec; } .arcgisSearch .searchGroup .searchInput { border: 0px solid #BDBDBD; background-color: #fff!important; height: 27px; font-size: 16px; color: #333; } .esriIconZoom:before { color: white; } .arcgisSearch .searchBtn { border: 0px solid #57585A; rgba(0, 0, 0, 0.41); } #mapDiv_graphics_layer path { stroke: rgba(221, 0, 32, 1); stroke-width: 4px; opacity: 0.01; } .icon-menu:before { opacity: 0.01; } input#search_input:focus { outline: none; } .arcgisSearch .searchMenu { border: 0px solid #57585A; } .esriIconClose:before { color: white; } #panelLogo img { max-width: 80px; max-height: 68px; } #panelLogo { width: 81px; padding-top: 3px; } .titleButton.maximize:before { visibility: hidden!important; } .pageHeaderImg { display: none; } .pageTitle { display: none; } .arcgisSearch .hasMultipleSources .searchToggle { display: none!important; } #search_input::-webkit-input-placeholder { color: #3B3C3D; } #search_input::-moz-placeholder { color: #3B3C3D; } #search_input:-ms-input-placeholder { color: #3B3C3D; } #panelTop { height: 79px!important; } #search > div > div.searchBtn.searchSubmit { height: 27px; } .arcgisSearch .searchIcon { line-height: 29px; } #panelSearch { margin: 10px 10px 10px 20px!important; } .esriIconClose:before { color: rgb(134, 134, 134); padding-right: 7px; } #panelTitle { border-bottom: none; } .no-search #panelLogo { width: 87px; padding-right: 19px; } .no-search #panelLogo img { max-width: 86px !important; } #panelText { max-width: 500px; }',
  "time": true,
  "showStartDate": true, // switch to 2 lines by default ?? or refresh div
  "showEndDate": true,
  "dateSeparator": "-", // TODO no sep option
  "singleLineDate": true, // when true start/end dates on single line
  "customFormatOption": null, // "dddd, MMMM Do YYYY, h:mm:ss a"
  // Show date for specified time period. Time period starts from now and goes back the specified amount. So if you specify 2 days the
  // time slider will show the current time as the end time and 2 days ago as the start. Note only valid if your dataset has
  // data for the specified dates.
  "durationTime": null, // Number of duration period(s) to show (1, 2, 3, )
  "durationPeriod": null, // weeks, days, months, hours etc
  "humanizeDuration": false, // When true duration is displayed in human terms like an hour ago
  "tickTime": null, // Number of tick period(s) to show (1, 2, 3 etc)
  "tickPeriod": null, //"esriTimeUnitsDays", // break ticks into x days, years, weeks, hours, minutes
  "thumbMovingRate": null, // set a custom thumb speed (milliseconds)
  "sliderticks": false, //display slider tics
  "looptime": false, //loop through time
  "autoplay": false, //auto play the slider when app starts
  "noslider": false, //hide slider and play controls and just show time
  "intermediatechanges": true, // update map as the slider is moved. When false map doesn't update until slider thumb is dropped.
  "timenav": false, //When true show the time navigation (next previous arrows)
  //position time container. Valid values are  bottom-right,
  //bottom-left, bottom-center.
  "timeposition": "bottom-center",
  "legendposition": null, //valid values are top-right and top-left
  "panelbackground": "#575757", //panel and title bar background color as hex value
  "panelcolor": "#FFF", //text color as hex value
  "timecolor": "#a8a8a8", //#007AC2 //color for play and slider controls
  "slidercolor": "#868686", //color for the slider bar on time slider
  "legend": true, //Add legend to map
  "title": true, //add title
  "titletext": null, //specify title text
  "logo": null, //Provide the url to a logo image
  "logolink": null, //optionally provide link text for the logo image
  "about": true, //Enable the about dialog
  //Define text that appears in the about dialog. If no text is specified the web map desc is used.
  "abouttext": null,
  //Enable the social sharing dialog (email, facebook, twitter etc)
  "share": true,
  //Enable the map zoom slider
  "zoomslider": true,
  //add the search tool
  "search": true,
  "scale": true, //display a scale bar on the map
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
      "url": "http://ahn.arcgisonline.nl/arcgis/rest/services/Geoprocessing/Profile/GPServer/Profile"
    },
    "geocode": [{
      "url": null
    }]
  }
});
