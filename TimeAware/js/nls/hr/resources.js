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
      error: "Nije moguće stvoriti kartu"
    },
    legend: {
      title: "Legenda"
    },
    share: {
      title: "Podijeli"
    },
    about: {
      title: "Informacije",
      error: "Prema zadanim postavkama upotrijebit će se opis web-karte ili isječak. Konfigurirajte app za dodavanje prilagođenog isječka za ploču s informacijama."
    },
    time: {
      enableTimeMessage: "Č_The specified web map does not contain any time enabled layers. View the ${link} help topic for details. To use the template without displaying time use the configuration panel to disable the time option______________________________________________________________ž.",
      enableTimeMessageLink: "Č_http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727____________________________________ž"
    },
    histogram: {
      error: "Slojevi s omogućenim praćenjem vremena u načinu snimke nisu dostupni u web-karti. Konfigurirajte app za upotrebu druge web-karte ili onemogućite opciju histograma."
    }
  })
);
