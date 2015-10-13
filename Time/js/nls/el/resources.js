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
      error: "Δεν είναι δυνατή η δημιουργία χάρτη"
    },
    legend:{
      title: "Υπόμνημα"
    },
    share: {
      title: "Κοινοποίηση"
    },
    about: {
      title: "Πληροφορίες",
      error: "Από προεπιλογή, θα χρησιμοποιηθεί η περιγραφή ή το τμήμα κώδικα του web χάρτη. Παραμετροποιήστε την εφαρμογή για να προσθέσετε ένα προσαρμοσμένο τμήμα κώδικα για το πλαίσιο πληροφοριών."
    },
    time: {
        enableTimeMessage: "Đ_The specified web map does not contain any time enabled layers. View the ${link} help topic for details. To use the template without displaying time use the configuration panel to disable the time option______________________________________________________________ớ.",
        enableTimeMessageLink: "Đ_http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727____________________________________ớ",
        datePattern: "d MMMM yyyy",
        hourTimePattern: "h",
        millisecondTimePattern: "hh:mm:ss",
        minuteTimePattern: "hh:mm",
        secondTimePattern: "hh:mm:ss",
        timeRange: "${startTime} έως ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Δεν υπάρχουν διαθέσιμα χωρο-χρονικά feature layer, σε λειτουργία snapshot, στο web χάρτη. Παραμετροποιήστε την εφαρμογή ώστε να χρησιμοποιεί κάποιον άλλο web χάρτη ή απενεργοποιήστε την επιλογή ιστογράμματος."
    }
  })
);