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
            error: "Nije moguće stvoriti kartu"
        },
        tooltips: {
            search: "Pronađi",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Trenutačna lokacija",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Pošalji ispravak",  // Command button to submit a correction to the app's host
            collect: "Filtriraj/uredi",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Prikaži legendu",  //Display the legend
            filter: "Filtriraj slojeve karte",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Promijeni kartografsku podlogu",  // Command button to open a dialog box for switching basemaps
            share: "Podijeli",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Podijeli e-poštom",  // Command button to share the current map extents via email
            shareViaFacebook: "Podijeli preko Facebooka",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Podijeli preko Twittera",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Ispiši kartu",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Prikaz ispisane karte",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Vodoravna orijentacija stranice",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Okomita orijentacija stranice",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Pomoć"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-pošta",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "naziv",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Pronađi:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Crtanje",  // Appears before a set of tools for drawing on the map
            mapLayers: "Slojevi karte:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Pronađi polja sloja:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Ovo web-mjesto nema dopuštenje za dohvaćanje trenutačne lokacije",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Preglednik nije mogao dohvatiti trenutačnu lokaciju",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Preglednik nije mogao pravovremeno dohvatiti trenutačnu lokaciju",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Sloj za pretraživanje nije konfiguriran",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Sloj za pretraživanje nije pronađen na karti",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Nije moguće pronaći polja za sloj karte.<br><br>Provjerite postoji li ovaj sloj u korijenu sadržaja karte. Ugniježđene usluge, poput ArcGIS for Server dinamičnih usluga karte, treba dodati na kartu sloj po sloj (uključujući indeksni broj sloja) za uporabu pri pretrazi slojeva. Popločene usluge ne mogu se upotrebljavati kao slojevi za pretragu.",
            searchFieldMissing: "Ovo polje nije pronađeno u sloju za pretragu karte",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Ova polja nisu pronađena u sloju za pretragu karte",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Ovo polje ne postoji ni u jednom sloju karte",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Vaš je sadržaj poslan. Hvala vam.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Nije moguće pristupiti konfiguraciji aplikacije",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Nije moguće pokrenuti aplikaciju"  // Appears for any failure to build the user interface
        }
    })
);
