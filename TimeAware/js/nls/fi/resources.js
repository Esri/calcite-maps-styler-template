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
      error: "Karttaa ei voi luoda"
    },
    legend:{
      title: "Selite"
    },
    share: {
      title: "Jaa"
    },
    about: {
      title: "Tietoja",
      error: "Oletusarvon mukaan järjestelmä käyttää Web-kartan kuvausta tai koodikatkelmaa. Määritä sovellus lisäämään mukautettu koodikatkelma Tietoja-ruutua varten."
    },
    time: {
        enableTimeMessage: "Määritetty Web-kartta ei sisällä yhtäkään tasoa, jossa on aika käytössä. Lisätietoja on ohjeaiheessa ${link}. Jos haluat käyttää mallipohjaa ilman ajan näyttöä, poista asetus käytöstä määritysruudun avulla.",
        enableTimeMessageLink: "http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727",
        datePattern: "d. MMMM yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "t:mm:ss",
        minuteTimePattern: "h:mm a",
        secondTimePattern: "t:mm:ss",
        timeRange: "${startTime} - ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Web-kartan tilannekuvatilassa ei ole käytössä yhtäkään kohdekarttatasoa, jossa on aika käytössä. Määritä sovellus käyttämään toista Web-karttaa tai poista histogrammiasetus käytöstä."
    }
  })
);