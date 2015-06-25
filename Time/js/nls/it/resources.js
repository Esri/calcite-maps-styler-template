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
      error: "Impossibile creare la mappa"
    },
    legend:{
      title: "Legenda"
    },
    share: {
      title: "Condividi"
    },
    about: {
      title: "Info",
      error: "Per impostazione predefinita, verrà utilizzato un frammento o la descrizione della mappa Web. Configurare l\'app per aggiungere un frammento personalizzato per il pannello Informazioni."
    },
    time: {
        enableTimeMessage: "La mappa Web specificata non contiene layer abilitati per variazioni temporali. Per ulteriori informazioni, vedere l\'argomento della Guida <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Configurare le impostazioni temporali</a>. Per utilizzare il modello senza visualizzare l\'ora, utilizzare il pannello di configurazione per disabilitare l\'opzione dell\'ora.",
        datePattern: "d MMMM yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "H.mm.ss",
        minuteTimePattern: "H.mm",
        secondTimePattern: "H.mm.ss",
        timeRange: "Dalle ore ${startTime} alle ore ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Nessun feature layer abilitato per variazioni temporali, in modalità snapshot, è disponibile nella mappa Web. Configurare l\'app per utilizzare un\'altra mappa Web o disabilitare l\'opzione istogramma."
    }
  })
);