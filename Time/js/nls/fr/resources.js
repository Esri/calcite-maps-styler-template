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
      error: "Impossible de créer la carte"
    },
    legend:{
      title: "Légende"
    },
    share: {
      title: "Partager"
    },
    about: {
      title: "À propos de",
      error: "Par défaut, la description de la carte Web ou l\'extrait est utilisé. Configurez l\'application afin d\'ajouter un extrait personnalisé pour le volet A propos."
    },
    time: {
        enableTimeMessage: "La carte Web spécifiée ne contient aucune couche temporelle. Consultez la rubrique d\'aide <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Configurer les paramètres temporels</a> pour en savoir plus. Pour utiliser le modèle sans afficher les données temporelles, désactivez l\'option temporelle dans le volet de configuration.",
        datePattern: "d MMMM yyyy",
        hourTimePattern: "HH",
        millisecondTimePattern: "HH:mm:ss",
        minuteTimePattern: "HH:mm",
        secondTimePattern: "HH:mm:ss",
        timeRange: "${startTime} à ${endTime}",
        yearPattern: "aaaa"
    },
    histogram:{
      error: "Aucune couche d\'entités temporelles, en mode de capture instantanée, n\'est disponible dans la carte Web. Configurez l\'application de façon à utiliser une autre carte Web ou désactivez l\'option d\'histogramme."
    }
  })
);