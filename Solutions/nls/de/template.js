/*
 | ArcGIS Solutions
 | Version 10.2
 | Copyright 2012 Esri
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
        tooltips: {
            search: "Suchen",
            locate: "Aktuelle Position",
            markup: "Korrektur senden",
            basemap: "Grundkarte wechseln",
            share: "Freigeben",
            shareViaEmail: "Per E-Mail freigeben",
            shareViaFacebook: "Über Facebook freigeben",
            shareViaTwitter: "Über Twitter freigeben",
            print: "Karte drucken",
            fetchPrint: "Gedruckte Karte anzeigen",
            landscape: "Seitenausrichtung im Querformat",
            portrait: "Seitenausrichtung im Hochformat",
            help: "Hilfe"
        },
        labels: {
            email: "E-Mail",
            Facebook: "Facebook",
            Twitter: "Twitter"
        },
        prompts: {
            search: "Suche:",
            markup: "Zeichnen",
            mapLayers: "Karten-Layer:",
            layerFields: "Felder des Such-Layers:"
        },
        messages: {
            geolocationDenied: "Diese Site verfügt nicht über die Berechtigung, die aktuelle Position zu ermitteln",
            geolocationUnavailable: "Der Browser konnte die aktuelle Position nicht ermitteln",
            geolocationTimeout: "Der Browser konnte die aktuelle Position nicht rechtzeitig ermitteln",
            searchLayerMissing: "Der Such-Layer wurde nicht auf der Karte gefunden",
            searchFieldMissing: "Dieses Feld wurde nicht im Such-Layer für die Karte gefunden"
        }
    })
);
