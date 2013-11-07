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
            search: "Hledat",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Aktuální umístění",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Odeslat korekci",  // Command button to submit a correction to the app's host
            collect: "Ř_Add content to map_ů",  // Command button to open a template picker to add features to the map
            filter: "Ř_Filter map layers_ů",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Přepnout podkladovou mapu",  // Command button to open a dialog box for switching basemaps
            share: "Sdílet",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Sdílet e-mailem",  // Command button to share the current map extents via email
            shareViaFacebook: "Sdílet na Facebooku",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Sdílet na Twitteru",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Vytisknout mapu",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Zobrazit vytištěnou mapu",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientace stránky na šířku",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientace stránky na výšku",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Nápověda"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "Hledat:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Vykreslit",  // Appears before a set of tools for drawing on the map
            mapLayers: "Mapové vrstvy:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Pole vrstvy vyhledávání:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Tato stránka nemá povolení k získání aktuálního umístění.",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Prohlížeči se nepovedlo získat aktuální umístění.",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Prohlížeči se nepovedlo včas získat aktuální umístění.",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Tato vrstva vyhledávání nebyla v mapě nalezena.",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Toto pole nebylo ve vrstvě vyhledávání nalezeno."  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
