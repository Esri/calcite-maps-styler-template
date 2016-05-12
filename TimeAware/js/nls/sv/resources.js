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
      error: "Det går inte att skapa kartan"
    },
    legend: {
      title: "Teckenförklaring"
    },
    share: {
      title: "Dela"
    },
    about: {
      title: "Om",
      error: "Som standard används webbkartbeskrivningen eller snippet. Konfigurera appen för att lägga till en anpassad snippet för panelen Om."
    },
    time: {
      enableTimeMessage: "Å_The specified web map does not contain any time enabled layers. View the ${link} help topic for details. To use the template without displaying time use the configuration panel to disable the time option______________________________________________________________ö.",
      enableTimeMessageLink: "Å_http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727____________________________________ö"
    },
    histogram: {
      error: "Inga tidsaktiverade geoobjektslager, i snapshotläge, finns tillgängliga i webbkartan. Konfigurera appen att använda en annan webbkarta eller inaktivera histogramalternativet."
    }
  })
);
