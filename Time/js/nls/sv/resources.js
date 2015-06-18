/*global define */
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
      error: "Å_Unable to create map_______ö"
    },
    legend:{
      title: "Å_Legend___ö"
    },
    share: {
      title: "Å_Share___ö"
    },
    about: {
      title: "Å_About___ö",
      error: "Å_By default the web map description or snippet will be used. Configure the app to add a custom snippet for the about panel______________________________________ö."
    },
    time: {
        enableTimeMessage: "Å_The specified web map does not contain any time enabled layers. View the <a target='_blank' href='http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727'>Configure time settings</a> help topic for details. To use the template without displaying time use the configuration panel to disable the time option_______________________________________________________________________________________________________________ö.",
        datePattern: "Å_MMMM d, yyyy_____ö",
        hourTimePattern: "Å_h a__ö",
        millisecondTimePattern: "Å_h:mm:ss a____ö",
        minuteTimePattern: "Å_h:mm a___ö",
        secondTimePattern: "Å_h:mm:ss a____ö",
        timeRange: "Å_${startTime} to ${endTime}_________ö",
        yearPattern: "Å_yyyy__ö"
    },
    histogram:{
      error: "Å_No time-enabled feature layers, in snapshot mode, are available in the web map. Configure the app to use another web map or disable the histogram option_______________________________________________ö."
    }
  })
);