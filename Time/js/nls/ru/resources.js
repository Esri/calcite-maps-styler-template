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
define({
  root: ({
    map: {
      error: "Ж_Unable to create map_______Я"
    },
    legend:{
      title: "Ж_Legend___Я"
    },
    share: {
      title: "Ж_Share___Я"
    },
    about: {
      title: "Ж_About___Я",
      error: "Ж_By default the web map description or snippet will be used. Configure the app to add a custom snippet for the about panel______________________________________Я."
    },
    time: {
        enableTimeMessage: "Ж_The specified web map does not contain any time enabled layers. View the <a target='_blank' href='http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727'>Configure time settings</a> help topic for details. To use the template without displaying time use the configuration panel to disable the time option_______________________________________________________________________________________________________________Я.",
        datePattern: "Ж_MMMM d, yyyy_____Я",
        hourTimePattern: "Ж_h a__Я",
        millisecondTimePattern: "Ж_h:mm:ss a____Я",
        minuteTimePattern: "Ж_h:mm a___Я",
        secondTimePattern: "Ж_h:mm:ss a____Я",
        timeRange: "Ж_${startTime} to ${endTime}_________Я",
        yearPattern: "Ж_yyyy__Я"
    },
    histogram:{
      error: "Ж_No time-enabled feature layers, in snapshot mode, are available in the web map. Configure the app to use another web map or disable the histogram option_______________________________________________Я."
    }
  }),
  "fr": 1
});