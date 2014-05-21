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
            search: "Zoeken",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Huidige locatie",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Correctie verzenden",  // Command button to submit a correction to the app's host
            collect: "Filteren/Bewerken",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Legenda weergeven",  //Display the legend
            filter: "Kaartlagen filteren",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Basiskaart wijzigen",  // Command button to open a dialog box for switching basemaps
            share: "Delen",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Delen via e-mail",  // Command button to share the current map extents via email
            shareViaFacebook: "Delen via Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Delen via Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Kaart afdrukken",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Afgedrukte kaart weergeven",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Liggende stand",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Staande stand",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Help"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "titel",  // Shown as title hint in print specification box if a title hint is not configured
            author: "auteur"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Zoeken:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Tekenen",  // Appears before a set of tools for drawing on the map
            mapLayers: "Kaartlagen:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Zoeklaagvelden:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Deze site heeft geen toestemming om de huidige locatie op te halen",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "De browser kon de huidige locatie niet ophalen",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "De browser kon de huidige locatie niet tijdig ophalen",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Deze zoeklaag is niet gevonden op de kaart",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchFieldMissing: "Dit veld is niet gevonden in de zoeklaag van de kaart",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Deze velden zijn niet gevonden in de zoeklaag van de kaart",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Dit veld bestaat in geen enkele van de kaartlagen",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Uw content is verzonden. Dank u.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Geen toegang tot de configuratie van de applicatie",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Kan de applicatie niet starten"  // Appears for any failure to build the user interface
        }
    })
);
