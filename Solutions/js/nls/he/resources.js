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
            error: "לא ניתן ליצור מפה"
        },
        tooltips: {
            search: "מצא",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "מיקום נוכחי",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "שלח תיקון",  // Command button to submit a correction to the app's host
            collect: "כפתור לפתיחת פילטר ובורר תבנית להוספת ישויות למפה ולעריכתם מאוחר יותר",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "הצג מקרא",  //Display the legend
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
            Twitter: "טוויטר",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "כותרת",  // Shown as title hint in print specification box if a title hint is not configured
            author: "מחבר"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "מצא:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "צייר",  // Appears before a set of tools for drawing on the map
            mapLayers: "שכבות מפה:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "מצא שדות בשכבה:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "לאתר זה אין הרשאה לקבל את המיקום הנוכחי",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "הדפדפן לא יכול לקבל את המיקום הנוכחי",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "הדפדפן לא יכול לקבל מיקום נוכחי בזמן סביר",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "לא הוגדרה שכבת חיפוש",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "מופיע לפני רשימה של שכבות מפה; מוצג כאשר לא מוגדרת שכבה לכפתור החיפוש באפליקציה; עובד עם בקשה להזנת שכבת מפה",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "לא ניתן למצא שדות בשכבת המפה.<br><br>בדוק אם שכבה זו קיימת במקור של תכולת המפה. שירותים מקוננים, כגון שירותים דינמיים של ArcGIS for Server , יש להוסיפם למפה אחד בכל פעם (כולל מספר האינדקס של השכבה) כדי שישמשו כשכבות לחיפוש. לא ניתן להשתמש בשירות אריחים כשכבות לחיפוש.",
            searchFieldMissing: "מופיע לפני רשימת שדות בזמן הגדרת שכבת חיפוש למפה",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "לא נמצא אף אחד מהשדות האלו בשכבת החיפוש; מוצג כאשר האפליקציה לא מוצאת אף שדה שהוגדר לפקודת החיפוש;",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "השדה הזה לא קיים באף שכבה במפה",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "התוכן שלך נשלח. תודה.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "לא ניתן לגשת לתצורת האפליקציה",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "לא ניתן להפעיל את האפליקציה"  // Appears for any failure to build the user interface
        }
    })
);
