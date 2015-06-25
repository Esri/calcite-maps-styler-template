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
      error: "Nevar izveidot karti"
    },
    legend:{
      title: "Apzīmējumi"
    },
    share: {
      title: "Kopīgot"
    },
    about: {
      title: "Par",
      error: "Pēc noklusējuma tiks izmantots tīmekļa kartes apraksts vai atgriezums. Konfigurējiet lietotni, lai pievienotu pielāgotu atgriezumu apkārtējam panelim."
    },
    time: {
        enableTimeMessage: "Noteiktā tīmekļa karte nesatur slāņus, kas iespējoti visiem laikiem. Informāciju skatiet palīdzības tēmā <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Konfigurēt laika iestatījumus</a>. Lai izmantotu veidni, neparādot laiku, izmantojiet konfigurācijas paneli, lai atspējotu laika opciju.",
        datePattern: "dd.MM.yyyy",
        hourTimePattern: "H a",
        millisecondTimePattern: "HH:mm:ss",
        minuteTimePattern: "HH:mm",
        secondTimePattern: "HH:mm:ss",
        timeRange: "${startTime} līdz ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Momentuzņēmuma režīmā tīmekļa kartē nav pieejami ar laiku iespējoti funkciju slāņi. Konfigurējiet lietotni, lai izmantotu citu tīmekļa karti vai atspējotu histogrammas opciju."
    }
  })
);