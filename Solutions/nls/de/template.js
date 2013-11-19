/*global define */
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
            search: "Suchen",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Aktuelle Position",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Korrektur senden",  // Command button to submit a correction to the app's host
            collect: "Inhalt zur Karte hinzufügen",  // Command button to open a template picker to add features to the map
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
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "Suche:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Zeichnen",  // Appears before a set of tools for drawing on the map
            mapLayers: "Karten-Layer:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Felder des Such-Layers:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Diese Site verfügt nicht über die Berechtigung, die aktuelle Position zu ermitteln",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Der Browser konnte die aktuelle Position nicht ermitteln",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Der Browser konnte die aktuelle Position nicht rechtzeitig ermitteln",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Der Such-Layer wurde nicht auf der Karte gefunden",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Dieses Feld wurde nicht im Such-Layer für die Karte gefunden"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
