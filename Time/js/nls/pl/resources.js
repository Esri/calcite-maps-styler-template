﻿/*global define */
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
define(
   ({
    map: {
      error: "ł_Unable to create map_______ą"
    },
    legend:{
      title: "ł_Legend___ą"
    },
    share: {
      title: "ł_Share___ą"
    },
    about: {
      title: "ł_About___ą",
      error: "ł_By default the web map description or snippet will be used. Configure the app to add a custom snippet for the about panel______________________________________ą."
    },
    time: {
        enableTimeMessage: "ł_The specified web map does not contain any time enabled layers. View the <a target='_blank' href='http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727'>Configure time settings</a> help topic for details. To use the template without displaying time use the configuration panel to disable the time option_______________________________________________________________________________________________________________ą.",
        datePattern: "ł_MMMM d, yyyy_____ą",
        hourTimePattern: "ł_h a__ą",
        millisecondTimePattern: "ł_h:mm:ss a____ą",
        minuteTimePattern: "ł_h:mm a___ą",
        secondTimePattern: "ł_h:mm:ss a____ą",
        timeRange: "ł_${startTime} to ${endTime}_________ą",
        yearPattern: "ł_yyyy__ą"
    },
    histogram:{
      error: "ł_No time-enabled feature layers, in snapshot mode, are available in the web map. Configure the app to use another web map or disable the histogram option_______________________________________________ą."
    }
  })
);