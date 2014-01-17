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
            search: "ı_Search_İ",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "ı_Current location_İ",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "ı_Submit correction_İ",  // Command button to submit a correction to the app's host
            collect: "ı_Add content to map_İ",  // Command button to open a template picker to add features to the map
            filter: "ı_Filter map layers_İ",  // Explains purpose of type-in box affiliated with template picker
            basemap: "ı_Switch basemap_İ",  // Command button to open a dialog box for switching basemaps
            share: "ı_Share_İ",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "ı_Share via email_İ",  // Command button to share the current map extents via email
            shareViaFacebook: "ı_Share via Facebook_İ",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "ı_Share via Twitter_İ",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "ı_Print map_İ",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "ı_View printed map_İ",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "ı_Landscape page orientation_İ",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "ı_Portrait page orientation_İ",  // Command button in the print map dialog box to select the portrait page orientation
            help: "ı_Help_İ"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "ı_email_İ",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "ı_Facebook_İ",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "ı_Twitter_İ",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "ı_title_İ",  // Shown as title hint in print specification box if a title hint is not configured
            author: "ı_author_İ"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "ı_Search:_İ",  // Appears before a search text field in dialog box for searching for a feature
            markup: "ı_Draw_İ",  // Appears before a set of tools for drawing on the map
            mapLayers: "ı_Map layers:_İ",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "ı_Search layer fields:_İ"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "ı_This site does not have permission to get the current location_İ",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "ı_The browser was not able to get the current location_İ",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "ı_The browser was not able to get the current location in a timely fashion_İ",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "ı_This search layer was not found in the map_İ",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "ı_This field was not found in the map search layer_İ",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
            allSearchFieldsMissing: "ı_None of these fields was found in the map search layer_İ"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find any of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
