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
            error: "á»‡_Unable to create the map_á»"
        },
        tooltips: {
            search: "á»‡_Find_á»",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "á»‡_Current location_á»",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "á»‡_Submit correction_á»",  // Command button to submit a correction to the app's host
            collect: "á»‡_Filter/Edit_á»",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "á»‡_Show the legend_á»",  //Display the legend
            filter: "á»‡_Filter map layers_á»",  // Explains purpose of type-in box affiliated with template picker
            basemap: "á»‡_Switch basemap_á»",  // Command button to open a dialog box for switching basemaps
            share: "á»‡_Share_á»",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "á»‡_Share via email_á»",  // Command button to share the current map extents via email
            shareViaFacebook: "á»‡_Share via Facebook_á»",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "á»‡_Share via Twitter_á»",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "á»‡_Print map_á»",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "á»‡_View printed map_á»",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "á»‡_Landscape page orientation_á»",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "á»‡_Portrait page orientation_á»",  // Command button in the print map dialog box to select the portrait page orientation
            help: "á»‡_Help_á»"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "á»‡_email_á»",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "á»‡_Facebook_á»",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "á»‡_Twitter_á»",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "á»‡_title_á»",  // Shown as title hint in print specification box if a title hint is not configured
            author: "á»‡_author_á»"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "á»‡_Find_á»:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "á»‡_Draw_á»",  // Appears before a set of tools for drawing on the map
            mapLayers: "á»‡_Map layers_á»:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "á»‡_Find layer fields_á»:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "á»‡_This site does not have permission to get the current location_á»",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "á»‡_The browser was not able to get the current location_á»",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "á»‡_The browser was not able to get the current location in a timely fashion_á»",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "á»‡_No find layer has been configured_á»",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "á»‡_This find layer was not found in the map_á»",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "á»‡_Fields could not be found for the map layer.<br><br>Verify that this layer exists at the root of the map Contents. Nested services, such as ArcGIS for Server dynamic map services, must be added to the map one layer at a time (including layer index number) to be used as Find Layers. Tiled services cannot be used as Find Layers_á».",
            searchFieldMissing: "á»‡_This field was not found in the map find layer_á»",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "á»‡_None of these fields was found in the map find layer_á»",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "á»‡_This field does not exist in any of the map layers_á»",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "á»‡_Your content has been submitted. Thank you_á».",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "á»‡_Unable to access application's configuration_á»",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "á»‡_Unable to launch application_á»"  // Appears for any failure to build the user interface
        }
    })
);
