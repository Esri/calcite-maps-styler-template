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
            error: "Č_Unable to create map_______ž"
        },
        tooltips: {
            search: "Č_Find__ž",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Č_Current location______ž",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Č_Submit correction______ž",  // Command button to submit a correction to the app's host
            collect: "Č_Filter/Edit____ž",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Č_Show the legend______ž",  //Display the legend
            filter: "Č_Filter map layers______ž",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Č_Switch basemap_____ž",  // Command button to open a dialog box for switching basemaps
            share: "Č_Share___ž",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Č_Share via email______ž",  // Command button to share the current map extents via email
            shareViaFacebook: "Č_Share via Facebook______ž",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Č_Share via Twitter______ž",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Č_Print map____ž",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Č_View printed map______ž",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Č_Landscape page orientation_________ž",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Č_Portrait page orientation_________ž",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Č_Help__ž"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "Č_email___ž",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Č_Facebook___ž",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Č_Twitter___ž",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "Č_title___ž",  // Shown as title hint in print specification box if a title hint is not configured
            author: "Č_author___ž"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Č_Find___ž:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Č_Draw__ž",  // Appears before a set of tools for drawing on the map
            mapLayers: "Č_Map layers____ž:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Č_Find layer fields______ž:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Č_This site does not have permission to get the current location____________________ž",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Č_The browser was not able to get the current location_________________ž",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Č_The browser was not able to get the current location in a timely fashion_______________________ž",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Č_No find layer has been configured___________ž",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Č_This find layer was not found in the map_____________ž",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Č_Fields could not be found for the map layer.<br><br>Verify that this layer exists at the root of the map Contents. Nested services, such as ArcGIS for Server dynamic map services, must be added to the map one layer at a time (including layer index number) to be used as Find Layers. Tiled services cannot be used as Find Layers___________________________________________________________________________________________________ž.",
            searchFieldMissing: "Č_This field was not found in the map find layer_______________ž",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Č_None of these fields was found in the map find layer_________________ž",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Č_This field does not exist in any of the map layers________________ž",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Č_Your content has been submitted. Thank you______________ž.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Č_Unable to access application's configuration______________ž",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Č_Unable to launch application_________ž"  // Appears for any failure to build the user interface
        }
    })
);
