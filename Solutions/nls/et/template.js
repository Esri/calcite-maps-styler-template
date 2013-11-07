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
            search: "Otsi",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Praegune asukoht",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Esita parandus",  // Command button to submit a correction to the app's host
            collect: "Š_Add content to map_ä",  // Command button to open a template picker to add features to the map
            filter: "Š_Filter map layers_ä",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Vaheta aluskaart",  // Command button to open a dialog box for switching basemaps
            share: "Jaga",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Jaga e-maili teel",  // Command button to share the current map extents via email
            shareViaFacebook: "Jaga läbi Facebook-i",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Jaga läbi Twitter-i",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Prindi kaart",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Vaata prinditud kaarti",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Horisontaalpaigutusega leht",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Vertikaalpaigutusega leht",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Abi"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "Otsing:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Joonista",  // Appears before a set of tools for drawing on the map
            mapLayers: "Kaardikihid:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Otsi kihi väljadelt:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "See lehekülg ei oma luba praeguse asukoha saamiseks",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Veebibrauser ei saanud praegust asukohta",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Veebibrauser ei saanud praegust asukohta õigeaegselt",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Seda otsitud kihti ei leitud kaardilt",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Seda välja ei leitud otsitud kaardikihilt"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
