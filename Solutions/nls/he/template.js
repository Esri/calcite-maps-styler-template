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
            search: "חפש",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "מיקום נוכחי",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "שלח תיקון",  // Command button to submit a correction to the app's host
            collect: "הוסף תוכן למפה",  // Command button to open a template picker to add features to the map
            filter: "סנן שכבות מפה",  // Explains purpose of type-in box affiliated with template picker
            basemap: "החלף מפת בסיס",  // Command button to open a dialog box for switching basemaps
            share: "שיתוף",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "שתף בדוא\"ל",  // Command button to share the current map extents via email
            shareViaFacebook: "שתף בפייסבוק",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "שתף בטוויטר",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "הדפס מפה",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "צפייה במפה המודפסת",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "כיוון דף לרוחב",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "כיוון דף לאורך",  // Command button in the print map dialog box to select the portrait page orientation
            help: "עזרה"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "דוא\"ל",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "פייסבוק",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "טוויטר"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "חיפוש:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "צייר",  // Appears before a set of tools for drawing on the map
            mapLayers: "שכבות מפה:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "שדות שכבת חיפוש:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "לאתר זה אין הרשאה לקבל את המיקום הנוכחי",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "הדפדפן לא יכול לקבל את המיקום הנוכחי",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "הדפדפן לא יכול לקבל מיקום נוכחי בזמן סביר",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "שכבת חיפוש זו לא נמצאה במפה",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "שדה זה לא נמצא בשכבת חיפוש מפה"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
