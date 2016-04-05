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
      error: "Imposibil de creat harta"
    },
    legend:{
      title: "Legendă"
    },
    share: {
      title: "Partajarea"
    },
    about: {
      title: "Despre",
      error: "În mod implicit, este utilizată descrierea elementului hărţii web sau un snippet. Configuraţi aplicaţia pentru a adăuga un snippet particularizat pentru panoul Despre."
    },
    time: {
        enableTimeMessage: "Harta web specificată nu conţine straturi tematice cu variaţie temporală. Vizualizaţi secţiunea de ajutor ${link} pentru detalii. Pentru a utiliza şablonul fără să afişaţi timpul, utilizaţi panoul de configurare pentru a dezactiva opţiunea pentru timp.",
        enableTimeMessageLink: "http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727",
        datePattern: "d. MMMM yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "H:mm:ss",
        minuteTimePattern: "H:mm",
        secondTimePattern: "H:mm:ss",
        timeRange: "De la ${startTime} la ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "În harta web, în modul snapshot, nu sunt disponibile straturi tematice de obiecte spaţiale cu variaţie temporală. Configuraţi aplicaţia pentru a utiliza o altă hartă web sau dezactivaţi opţiunea pentru histogramă."
    }
  })
);