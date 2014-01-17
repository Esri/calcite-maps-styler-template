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
            search: "ก้_Search_ษฺ",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "ก้_Current location_ษฺ",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "ก้_Submit correction_ษฺ",  // Command button to submit a correction to the app's host
            collect: "ก้_Add content to map_ษฺ",  // Command button to open a template picker to add features to the map
            filter: "ก้_Filter map layers_ษฺ",  // Explains purpose of type-in box affiliated with template picker
            basemap: "ก้_Switch basemap_ษฺ",  // Command button to open a dialog box for switching basemaps
            share: "ก้_Share_ษฺ",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "ก้_Share via email_ษฺ",  // Command button to share the current map extents via email
            shareViaFacebook: "ก้_Share via Facebook_ษฺ",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "ก้_Share via Twitter_ษฺ",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "ก้_Print map_ษฺ",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "ก้_View printed map_ษฺ",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "ก้_Landscape page orientation_ษฺ",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "ก้_Portrait page orientation_ษฺ",  // Command button in the print map dialog box to select the portrait page orientation
            help: "ก้_Help_ษฺ"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "ก้_email_ษฺ",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "ก้_Facebook_ษฺ",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "ก้_Twitter_ษฺ",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "ก้_title_ษฺ",  // Shown as title hint in print specification box if a title hint is not configured
            author: "ก้_author_ษฺ"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "ก้_Search:_ษฺ",  // Appears before a search text field in dialog box for searching for a feature
            markup: "ก้_Draw_ษฺ",  // Appears before a set of tools for drawing on the map
            mapLayers: "ก้_Map layers:_ษฺ",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "ก้_Search layer fields:_ษฺ"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "ก้_This site does not have permission to get the current location_ษฺ",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "ก้_The browser was not able to get the current location_ษฺ",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "ก้_The browser was not able to get the current location in a timely fashion_ษฺ",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "ก้_This search layer was not found in the map_ษฺ",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "ก้_This field was not found in the map search layer_ษฺ",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
            allSearchFieldsMissing: "ก้_None of these fields was found in the map search layer_ษฺ"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find any of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
