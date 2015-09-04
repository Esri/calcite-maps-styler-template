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
   ({
    map: {
      error: "Žemėlapio sukurti nepavyko"
    },
    legend:{
      title: "Legenda"
    },
    share: {
      title: "Bendrinti"
    },
    about: {
      title: "Apie",
      error: "Pagal numatytuosius nustatymus bus naudojamas internetinio žemėlapio aprašas arba fragmentas. Konfigūruokite aplikaciją, jei norite pridėti adaptuotą skydelio fragmentą."
    },
    time: {
        enableTimeMessage: "Nurodytame internetiniame žemėlapyje nėra sluoksnių su laiko informacija. Daugiau informacijos žr. pagalbos temoje <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Laiko nustatymų konfigūravimas</a>. Jei norite, kad šablone nebūtų rodomas laikas, konfigūravimo skydelyje išjunkite laiko parinktį.",
        datePattern: "yyyy MMMM dd",
        hourTimePattern: "H a",
        millisecondTimePattern: "HH:mm:ss",
        minuteTimePattern: "HH:mm",
        secondTimePattern: "HH:mm:ss",
        timeRange: "${startTime} iki ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Snapshot režimu internetiniame žemėlapyje nėra sluoksnių su laiku. Sukonfigūruokite aplikaciją naudoti kitą internetinį žemėlapį arba išjunkite histogramos parinktį."
    }
  })
);