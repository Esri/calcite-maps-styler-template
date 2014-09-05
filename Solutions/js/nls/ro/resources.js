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
            error: "Nu se poate crea harta"
        },
        tooltips: {
            search: "Căutare",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Locaţie curentă",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Trimitere corecţie",  // Command button to submit a correction to the app's host
            collect: "Filtrare/Editare",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Afişare legendă",  //Display the legend
            filter: "Filtrare straturi tematice de hartă",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Comutare hartă fundal",  // Command button to open a dialog box for switching basemaps
            share: "Partajare",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Partajare prin e-mail",  // Command button to share the current map extents via email
            shareViaFacebook: "Partajare prin Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Partajare prin Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Imprimare dată",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Vizualizare hartă imprimată",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientare pagină peisaj",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientare pagină portret",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Ajutor"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "titlu",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Găsire:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Trasare",  // Appears before a set of tools for drawing on the map
            mapLayers: "Straturi tematice hartă:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Câmpuri strat tematic de căutare:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Acest site nu are permisiunea de a obţine locaţia curentă",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Browserul nu a putut obţine locaţia curentă",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Browserul nu a putut obţine locaţia curentă la timp",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Ă_No find layer has been configured_ș",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Acest strat tematic de căutare nu a fost găsit în hartă",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Nu au putut fi găsite câmpuri pentru stratul tematic de hartă.<br><br>Verificaţi dacă acest strat tematic există în rădăcina Resurselor hărţii. Serviciile imbricate, cum ar fi serviciile de hărţi dinamice ArcGIS for Server, trebuie adăugate în hartă pe straturi tematice (inclusiv numărul de indexare a straturilor tematice) pentru a fi utilizate ca Straturi tematice de căutare. Serviciile optimizate nu pot fi utilizate ca Straturi tematice de căutare.",
            searchFieldMissing: "Acest câmp nu a fost găsit în stratul tematic de căutare al hărţii",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Niciunul dintre aceste câmpuri nu a fost găsit în stratul tematic de căutare al hărţii",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Acest câmp nu există în niciunul din straturile tematice de hartă",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "S-a remis conţinutul dvs. Vă mulţumim.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Imposibil de accesat configuraţia aplicaţiei",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Imposibil de lansat aplicaţia"  // Appears for any failure to build the user interface
        }
    })
);
