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
define({
    root: ({
        map: {
            error: "Δεν είναι δυνατή η δημιουργία χάρτη"
        },
        tooltips: {
            search: "Εύρεση",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Τρέχουσα τοποθεσία",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Υποβολή διόρθωσης",  // Command button to submit a correction to the app's host
            collect: "Φίλτρο/Επεξεργασία",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Εμφάνιση υπομνήματος",  //Display the legend
            filter: "Φιλτράρισμα θεματικών επιπέδων χάρτη",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Αλλαγή υποβάθρου",  // Command button to open a dialog box for switching basemaps
            share: "Κοινοποίηση",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Κοινοποίηση μέσω email",  // Command button to share the current map extents via email
            shareViaFacebook: "Κοινοποίηση μέσω Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Κοινοποίηση μέσω Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Εκτύπωση χάρτη",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Προβολή εκτυπωμένου χάρτη",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Οριζόντιος προσανατολισμός σελίδας",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Κατακόρυφος προσανατολισμός σελίδας",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Βοήθεια"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "email",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "τίτλος",  // Shown as title hint in print specification box if a title hint is not configured
            author: "συντάκτης"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Εύρεση:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Σχεδίαση",  // Appears before a set of tools for drawing on the map
            mapLayers: "Θεματικά επίπεδα χάρτη:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Πεδία θεματικού επιπέδου εύρεσης:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Αυτός ο ιστότοπος δεν έχει δικαίωμα λήψης της τρέχουσας τοποθεσίας",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Δεν ήταν δυνατή η λήψη της τρέχουσας τοποθεσίας από το πρόγραμμα περιήγησης",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Δεν ήταν δυνατή η λήψη της τρέχουσας τοποθεσίας από το πρόγραμμα περιήγησης εντός του χρονικού ορίου",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Δεν έχει διαμορφωθεί θεματικό επίπεδο εύρεσης",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Αυτό το θεματικό επίπεδο εύρεσης δεν βρέθηκε στο χάρτη",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Δεν ήταν δυνατή η εύρεση των πεδίων για το θεματικό επίπεδο χάρτη.<br><br>Επαληθεύστε ότι αυτό το θεματικό επίπεδο υπάρχει στη ρίζα των περιεχομένων του χάρτη. Οι ένθετες υπηρεσίες, όπως τα ArcGIS for Server dynamic map services, πρέπει να προστίθενται στο χάρτη ένα επίπεδο τη φορά (συμπεριλαμβανομένου του αριθμού ευρετηρίου του επιπέδου) για να χρησιμοποιηθούν ως θεματικά επίπεδα εύρεσης. Τα Tiled services  δεν μπορούν να χρησιμοποιηθούν ως θεματικά επίπεδα εύρεσης.",
            searchFieldMissing: "Αυτό το πεδίο δεν βρέθηκε στο θεματικό επίπεδο εύρεσης του χάρτη",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Κανένα από αυτά τα πεδία δεν βρέθηκε στο θεματικό επίπεδο εύρεσης του χάρτη",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Αυτό το πεδίο δεν υπάρχει σε κανένα από τα θεματικά επίπεδα του χάρτη",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Το περιεχόμενό σας έχει υποβληθεί. Σας ευχαριστούμε.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Δεν είναι δυνατή η πρόσβαση στη διαμόρφωση της εφαρμογής",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Δεν είναι δυνατή η εκκίνηση της εφαρμογής"  // Appears for any failure to build the user interface
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "en": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nb": 1,
    "nl": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});
