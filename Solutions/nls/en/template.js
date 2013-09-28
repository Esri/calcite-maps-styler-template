/*
 | ArcGIS for Local Government
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
            search: "Search",
            locate: "Current location",
            markup: "Submit correction",
            basemap: "Switch basemap",
            share: "Share",
            shareViaEmail: "Share via email",
            shareViaFacebook: "Share via Facebook",
            shareViaTwitter: "Share via Twitter",
            print: "Print map",
            fetchPrint: "View printed map",
            landscape: "Landscape page orientation",
            portrait: "Portrait page orientation",
            help: "Help"
        },
        labels: {
            email: "email",
            Facebook: "Facebook",
            Twitter: "Twitter"
        },
        prompts: {
            search: "Search:",
            markup: "Draw",
            mapLayers: "Map layers:",
            layerFields: "Search layer fields:"
        },
        messages: {
            geolocationDenied: "This site does not have permission to get the current location",
            geolocationUnavailable: "The browser was not able to get the current location",
            geolocationTimeout: "The browser was not able to get the current location in a timely fashion",
            searchLayerMissing: "This search layer was not found in the map",
            searchFieldMissing: "This field was not found in the map search layer"
        }
    })
);
