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
      error: "å_Unable to create map_______ø"
    },
    legend:{
      title: "å_Legend___ø"
    },
    share: {
      title: "å_Share___ø"
    },
    about: {
      title: "å_About___ø",
      error: "å_By default the web map description or snippet will be used. Configure the app to add a custom snippet for the about panel______________________________________ø."
    },
    time: {
        enableTimeMessage: "å_The specified web map does not contain any time enabled layers. View the <a target='_blank' href='http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727'>Configure time settings</a> help topic for details. To use the template without displaying time use the configuration panel to disable the time option_______________________________________________________________________________________________________________ø.",
        datePattern: "å_MMMM d, yyyy_____ø",
        hourTimePattern: "å_h a__ø",
        millisecondTimePattern: "å_h:mm:ss a____ø",
        minuteTimePattern: "å_h:mm a___ø",
        secondTimePattern: "å_h:mm:ss a____ø",
        timeRange: "å_${startTime} to ${endTime}_________ø",
        yearPattern: "å_yyyy__ø"
    },
    histogram:{
      error: "å_No time-enabled feature layers, in snapshot mode, are available in the web map. Configure the app to use another web map or disable the histogram option_______________________________________________ø."
    }
  })
);