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
            error: "試_Unable to create map_驗"
        },
        tooltips: {
            search: "試_Find_驗",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "試_Current location_驗",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "試_Submit correction_驗",  // Command button to submit a correction to the app's host
            collect: "試_Filter/Edit_驗",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "試_Show the legend_驗",  //Display the legend
            filter: "試_Filter map layers_驗",  // Explains purpose of type-in box affiliated with template picker
            basemap: "試_Switch basemap_驗",  // Command button to open a dialog box for switching basemaps
            share: "試_Share_驗",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "試_Share via email_驗",  // Command button to share the current map extents via email
            shareViaFacebook: "試_Share via Facebook_驗",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "試_Share via Twitter_驗",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "試_Print map_驗",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "試_View printed map_驗",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "試_Landscape page orientation_驗",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "試_Portrait page orientation_驗",  // Command button in the print map dialog box to select the portrait page orientation
            help: "試_Help_驗"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "試_email_驗",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "試_Facebook_驗",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "試_Twitter_驗",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "試_title_驗",  // Shown as title hint in print specification box if a title hint is not configured
            author: "試_author_驗"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "試_Find_驗:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "試_Draw_驗",  // Appears before a set of tools for drawing on the map
            mapLayers: "試_Map layers_驗:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "試_Find layer fields_驗:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "試_This site does not have permission to get the current location_驗",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "試_The browser was not able to get the current location_驗",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "試_The browser was not able to get the current location in a timely fashion_驗",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "試_No find layer has been configured_驗",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "試_This find layer was not found in the map_驗",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "試_Fields could not be found for the map layer.<br><br>Verify that this layer exists at the root of the map Contents. Nested services, such as ArcGIS for Server dynamic map services, must be added to the map one layer at a time (including layer index number) to be used as Find Layers. Tiled services cannot be used as Find Layers_驗.",
            searchFieldMissing: "試_This field was not found in the map find layer_驗",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "試_None of these fields was found in the map find layer_驗",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "試_This field does not exist in any of the map layers_驗",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "試_Your content has been submitted. Thank you_驗.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "試_Unable to access application's configuration_驗",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "試_Unable to launch application_驗"  // Appears for any failure to build the user interface
        }
    })
);
