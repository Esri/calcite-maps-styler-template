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
        map: {
            error: "Kreiranje mape nije moguće"
        },
        tooltips: {
            search: "Pronađi",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Trenutna lokacija",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Prosledi ispravku",  // Command button to submit a correction to the app's host
            collect: "Filtriraj/uredi",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Pokaži legende",  //Display the legend
            filter: "Filtriraj slojeve mape",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Promeni pozadinsku mapu",  // Command button to open a dialog box for switching basemaps
            share: "Podeli",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Podelite putem e-pošte",  // Command button to share the current map extents via email
            shareViaFacebook: "Podelite na mreži Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Podelite na mreži Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Štampaj mapu",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Prikaži odštampanu mapu",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Položena orijentacija stranice",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Uspravna orijentacija stranice",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Pomoć"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-pošta",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "naslov",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Pronađi:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Nacrtaj",  // Appears before a set of tools for drawing on the map
            mapLayers: "Slojevi mape:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Pronađi polja sloja:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Ova lokacija nema dozvolu da dobije trenutnu lokaciju",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Pregledač nije uspeo da dobije trenutnu lokaciju",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Pregledač nije uspeo da na vreme dobije trenutnu lokaciju",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Nijedan pronađeni sloj nije konfigurisan",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Ovaj pronađeni sloj nije pronađen na mapi",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Pronalaženje polja u sloju mape nije moguće.<br><br>Potvrdite da sloj postoji u korenu sadržaja mape. Ugnežđeni servisi, kao što je servis dinamične mape ArcGIS for Server moraju da budu dodate na mapu sloj po sloj (uključujući broj sloja indeksa da bi bili korišćeni kao pronađeni slojevi. Naporedni servisi ne mogu da budu korišćeni kao pronađeni servisi.",
            searchFieldMissing: "Ovo polje nije pronađeno u pronađenom sloju mape",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Nijedno od ovih polja nije pronađeno u pronađenom sloju mape",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Ovo polje ne postoji ni u jednom sloju mape",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Vaš sadržaj je prosleđen. Hvala vam.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Pristupanje konfiguraciji aplikacije nije moguće",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Pokretanje aplikacije nije moguće"  // Appears for any failure to build the user interface
        }
    })
);
