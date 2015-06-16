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
define({
    root: ({
        map: {
            error: "Nevar izveidot karti"
        },
        tooltips: {
            search: "Atrast",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Pašreizējais izvietojums",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Pieteikt korekciju",  // Command button to submit a correction to the app's host
            collect: "Filtrēt/Rediģēt",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Parādīt leģendu",  //Display the legend
            filter: "Filtrēt kartes slāņus",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Pārslēgt pamatkarti",  // Command button to open a dialog box for switching basemaps
            share: "Koplietot",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Koplietot caur epastu",  // Command button to share the current map extents via email
            shareViaFacebook: "Koplietot caur Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Koplietot caur Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Drukāt karti",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Skatīties kartes druku",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Ainavas lapas izvietojums",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Portreta lapas izvietojums",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Palīdzība"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "epasts",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "virsraksts",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autors"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Atrast:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Zīmēt",  // Appears before a set of tools for drawing on the map
            mapLayers: "Kartes slāņi:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Atrast slāņa laukus:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Šai vietnei nav atļaujas, lai darbotos pašreizējā izvietojumā",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Pārlūks nevarēja iegūt pašreizējo izvietojumu",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Pārlūks nevarēja savlaicīgi iegūt pašreizējo izvietojumu",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Neviens meklēšanai paredzētais slānis nav konfigurēts",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Meklētais slānis kartē netika atrasts",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Kartes slānim nevarēja atrast laukus.<br><br>Pārliecinieties, ka šis slānis pastāv kartes satura saknē. Ligzdoti pakalpojumi, piemēram, ArcGIS for Server dinamiskās kartes pakalpojumi, jāpievieno kartei pa vienam slānim (tostarp slāņa indeksa numurs), lai izmantotu kā meklēšanas slāņus. Mozaīkas pakalpojumus nevar izmantot kā meklēšanas slāņus.",
            searchFieldMissing: "Lauks netika atrasts meklētajā kartes slānī",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Neviens no šiem laukiem kartes meklēšanas slānī nav atrasts",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Šis lauks nepastāv nevienā no kartes slāņiem",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Jūsu saturs ir iesniegts. Paldies!",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Nevar piekļūt lietotnes konfigurācijai",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Nevar palaist lietotni"  // Appears for any failure to build the user interface
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "en": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nb": 1,
    "nl": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});
