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
            search: "ø_Find_å",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Aktuel placering",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Send rettelse",  // Command button to submit a correction to the app's host
            collect: "ø_Filter/Edit_å",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            filter: "Filtr\ér kortlag",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Skift baggrundskort",  // Command button to open a dialog box for switching basemaps
            share: "Del",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Del via e-mail",  // Command button to share the current map extents via email
            shareViaFacebook: "Del via Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Del via Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Udskriv kort",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Vis udskrevet kort",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Liggende sideretning",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Stående sideretning",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Hjælp"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "titel",  // Shown as title hint in print specification box if a title hint is not configured
            author: "forfatter"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Søg:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Tegn",  // Appears before a set of tools for drawing on the map
            mapLayers: "Kortlag:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Søg i lag-felter:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Dette sted har ikke rettigheder til at hente den aktuelle position",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Browseren kunne ikke hente den aktuelle position",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Browseren kunne ikke hente den aktuelle position i tide",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Dette søgelag blev ikke fundet på kortet",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Dette felt blev ikke fundet i kortets søgelag",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
            allSearchFieldsMissing: "Ingen af disse felter blev fundet i kortsøgelaget",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find any of the fields that were configured for the search command; works with the layerFields prompt
            fieldNotFound: "Dette felt findes ikke i nogen af kortlagene",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Dit indhold er sendt. Tak.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Kunne ikke få adgang til applikationens konfiguration",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Kunne ikke starte applikationen"  // Appears for any failure to build the user interface
        }
    })
);
