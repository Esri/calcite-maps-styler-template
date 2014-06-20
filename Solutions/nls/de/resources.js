/*global define */
/*
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
            search: "Suchen",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Aktuelle Position",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Korrektur senden",  // Command button to submit a correction to the app's host
            collect: "Filtern/Bearbeiten",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Legende anzeigen",  //Display the legend
            filter: "Karten-Layer filtern",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Grundkarte wechseln",  // Command button to open a dialog box for switching basemaps
            share: "Freigeben",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Per E-Mail freigeben",  // Command button to share the current map extents via email
            shareViaFacebook: "Über Facebook freigeben",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Über Twitter freigeben",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Karte drucken",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Gedruckte Karte anzeigen",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Seitenausrichtung im Querformat",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Seitenausrichtung im Hochformat",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Hilfe"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "E-Mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "Titel",  // Shown as title hint in print specification box if a title hint is not configured
            author: "Autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Suchen:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Zeichnen",  // Appears before a set of tools for drawing on the map
            mapLayers: "Karten-Layer:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Layer-Felder suchen:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Diese Site verfügt nicht über die Berechtigung, die aktuelle Position zu ermitteln",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Der Browser konnte die aktuelle Position nicht ermitteln",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Der Browser konnte die aktuelle Position nicht rechtzeitig ermitteln",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Der Such-Layer wurde nicht auf der Karte gefunden",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Für den Karten-Layer wurden keine Felder gefunden.<br><br>Überprüfen Sie, ob dieser Layer im Stammverzeichnis des Karteninhalts vorhanden ist. Geschachtelte Services, wie dynamische Karten-Services von ArcGIS for Server, müssen den Layern der Karte jeweils einzeln hinzugefügt werden (einschließlich der Layer-Indexnummer), um als Such-Layer verwendet zu werden. Gekachelte Services können als Such-Layer verwendet werden.",
            searchFieldMissing: "Dieses Feld wurde nicht im Such-Layer für die Karte gefunden",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Keines dieser Felder wurde im Such-Layer der Karte gefunden",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Dieses Feld ist in keinem der Karten-Layer vorhanden",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Ihr Inhalt wurde gesendet. Vielen Dank.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Auf die Konfiguration der Anwendung kann nicht zugegriffen werden",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Die Anwendung kann nicht gestartet werden"  // Appears for any failure to build the user interface
        }
    })
);
