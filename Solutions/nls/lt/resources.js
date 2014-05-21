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
            search: "Ieškoti",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Esama padėtis",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Pateikti korekciją",  // Command button to submit a correction to the app's host
            collect: "Filtruoti/Keisti",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Rodyti legendą",  //Display the legend
            filter: "Filtruoti žemėlapio sluoksnius",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Pakeisti pagrindo žemėlapį",  // Command button to open a dialog box for switching basemaps
            share: "Bendrinti",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Bendrinti naudojant el. paštą",  // Command button to share the current map extents via email
            shareViaFacebook: "Bendrinti per Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Bendrinti per Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Spausdinti žemėlapį",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Peržiūrėti spausdintą žemėlapį",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Horizontalus išdėstymas",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Vertikalus išdėstymas",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Pagalba"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "el. paštas",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "pavadinimas",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autorius"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Ieškoti:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Piešti",  // Appears before a set of tools for drawing on the map
            mapLayers: "Žemėlapio sluoksniai:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Ieškoti sluoksnio laukų:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Ši svetainė neturi teisės nustatyti esamą vietą",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Naršyklei nepavyko nustatyti esamos vietos",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Naršyklei per priimtiną laiką nepavyko nustatyti esamos vietos",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Paieškos sluoksnis žemėlapyje nerastas",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchFieldMissing: "Žemėlapio paieškos sluoksnyje šis laukas nerastas",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Laukai nerasti žemėlapio paieškos sluoksnyje",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Šio lauko nėra nė viename žemėlapio sluoksnyje",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Turinys buvo įkeltas. Ačiū.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Nepavyksta pasiekti aplikacijos konfigūracijos",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Nepavyksta paleisti aplikacijos"  // Appears for any failure to build the user interface
        }
    })
);
