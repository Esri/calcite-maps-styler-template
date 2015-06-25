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
      error: "Kan ikke opprette kart"
    },
    legend:{
      title: "Tegnforklaring"
    },
    share: {
      title: "Dele"
    },
    about: {
      title: "Om",
      error: "Som standard brukes webkartbeskrivelsen eller snutten. Konfigurer appen slik at det legges til en egendefinert snutt om panelet."
    },
    time: {
        enableTimeMessage: "Det angitte webkartet inneholder ikke noen tidsaktiverte lag. Vis hjelpeemnet <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Konfigurer tidsinnstillinger</a> hvis du vil ha flere opplysninger. Hvis du vil bruke malen uten å vise tid, bruker du konfigurasjonspanelet til å deaktivere tidsalternativet.",
        datePattern: "MMMM d, åååå",
        hourTimePattern: "H",
        millisecondTimePattern: "H.mm.ss",
        minuteTimePattern: "H.mm",
        secondTimePattern: "H.mm.ss",
        timeRange: "${startTime} til ${endTime}",
        yearPattern: "åååå"
    },
    histogram:{
      error: "Ingen tidsaktiverte geoobjektlag i øyeblikksbildemodus er tilgjengelige i webkartet. Konfigurer appen slik at den bruker et annet webkart, eller deaktiver histogramalternativet."
    }
  })
);