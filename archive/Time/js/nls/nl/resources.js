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
      error: "Kaart kan niet gemaakt worden"
    },
    legend:{
      title: "Legenda"
    },
    share: {
      title: "Delen"
    },
    about: {
      title: "Over",
      error: "Standaard wordt de webmapbeschrijving of snippet gebruikt. Configureer de app om een aangepaste snippet toe te voegen voor het deelvenster Over."
    },
    time: {
        enableTimeMessage: "De gespecificeerde webmap bevat geen lagen met tijdondersteuning. Zie het hulponderwerp ${link} configureren voor details. Gebruik om de template te gebruiken zonder de tijd weer te geven het configuratiepaneel om de tijdoptie uit te schakelen.",
        enableTimeMessageLink: "http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727",
        datePattern: "d. MMMM yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "H:mm:ss",
        minuteTimePattern: "H:mm",
        secondTimePattern: "H:mm:ss",
        timeRange: "${startTime} tot ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Er zijn geen objectlagen met tijdondersteuning, in snapshotmodus, beschikbaar in de webmap. Configureer de app om een andere webmap te gebruiken of schakel de histogramoptie uit."
    }
  })
);