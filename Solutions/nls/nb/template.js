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
            search: "Søk",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Gjeldende plassering",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Send rettelse",  // Command button to submit a correction to the app's host
            collect: "Filtrer/rediger",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "å_Show the legend_ø",  //Display the legend
            filter: "Filtrer kartlag",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Bytt bakgrunnskart",  // Command button to open a dialog box for switching basemaps
            share: "Del",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Del via e-post",  // Command button to share the current map extents via email
            shareViaFacebook: "Del via Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Del via Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Skriv ut kart",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Vis kartutskriften",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Liggende papirretning",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Stående papirretning",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Hjelp"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-post",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "tittel",  // Shown as title hint in print specification box if a title hint is not configured
            author: "oppretter"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Søk etter:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Tegn",  // Appears before a set of tools for drawing on the map
            mapLayers: "Kartlag:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "å_Find layer fields:_ø"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Dette området har ikke tillatelse til å hente gjeldende plassering",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Nettleseren kunne ikke hente gjeldende plassering",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Nettleseren kunne ikke hente gjeldende plassering innen rimelig tid",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Fant ikke dette søkelaget i kartet",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchFieldMissing: "Fant ikke dette feltet i kartsøkelaget",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Ingen av disse feltene ble funnet i kartsøkelaget",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Dette feltet finnes ikke i noen av kartlagene",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Innholdet ditt er sendt inn. Takk!",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Får ikke tilgang til programmets konfigurasjon",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Kan ikke starte programmet"  // Appears for any failure to build the user interface
        }
    })
);
