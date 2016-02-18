/*global define */
/*
 | Copyright 2014 Esri
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
            error: "Δεν είναι δυνατή η δημιουργία χάρτη" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Δεν έχει παραμετροποιηθεί κάποια ομάδα" // Appears when no group is configured
        },
        webMapList: {
            owner: "Κάτοχος", // Appears in web-map list description panel when it is set to true
            created: "Ημερομηνία δημιουργίας", // Appears in web-map list description panel when it is set to true
            modified: "Ημερομηνία τροποποίησης", // Appears in web-map list description panel when it is set to true
            description: "Περιγραφή", // Appears in web-map list description panel when it is set to true
            snippet: "Σύνοψη", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Περιορισμοί στην πρόσβαση και τη χρήση", // Appears in web-map list description panel when it is set to true
            accessInformation: "Συντελεστές", // Appears in web-map list description panel when it is set to true
            tags: "Ετικέτες", // Appears in web-map list description panel when it is set to true
            numViews: "Αριθμός προβολών", // Appears in web-map list description panel when it is set to true
            avgRating: "Αξιολόγηση", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Η παραμετροποιημένη ομάδα δεν είναι έγκυρη ή δεν έχει γίνει ακόμη κοινοποίηση στοιχείων σε αυτήν την ομάδα", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Πληροφορίες χάρτη" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Έξοδος", // Command button to sign-out from the application
            pleaseSignInText: "Εισέλθετε", // Appears when user needs to sign-in into the application
            showSelectedOption: "Εμφάνιση επιλεγμένων", // Command button to show selected records in data-viewer
            showAllOption: "Εμφάνιση όλων", // Command button to show all the records in data-viewer
            clearSelectionOption: "Απαλοιφή επιλογής", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Εστίαση στα επιλεγμένα", // Command button to zoom map to selected records
            gridViewOption: "Προβολή λίστας", // Command button to display list view
            mapViewOption: "Προβολή χάρτη", // Command button to display map view
            gridMapViewOption: "Διαιρεμένη προβολή λίστας", // Command button to display split view
            settingsBtnToolTip: "Δυνατότητες επιλογής", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Επιλογές εμφάνισης", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Αναζήτηση σε αυτό το θεματικό επίπεδο", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Ανανέωση", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Όλες οι επιλογές και οι μη αποθηκευμένες αλλαγές θα απορριφθούν", // Appears when user wants to do manual refresh
            signInOption: "Είσοδος" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Δεν υπάρχουν διαθέσιμες αναφορές", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Συνημμένα", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Εισαγάγετε έναν ακέραιο αριθμό ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Εισαγάγετε έναν ακέραιο αριθμό", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Εισαγάγετε έναν αριθμό", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Εισαγάγετε έναν αριθμό", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Εισαγάγετε μια τιμή", // Shown when user enters invalid string value
            invalidDate: "Εισαγάγετε μια έγκυρη ημερομηνία", // Shown when user enters invalid date value
            invalidNumericRange: "Εισαγάγετε μια τιμή μεταξύ ${minValue} και ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Σύνδεσμος", // Shown when value in field contains only URL.
            commentsText: "Σχόλια", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Δεν υπάρχουν διαθέσιμα σχόλια", // Appears when no comments are available
            noFeatureGeometry: "Δεν είναι δυνατή η εμφάνιση του στοιχείου" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Δεν έχει οριστεί κάποια παραμετροποίηση" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Δεν βρέθηκαν αποτελέσματα" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Προβολή περισσότερων λεπτομερειών για το ενεργό στοιχείο", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Προβολή χάρτη", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Εστίαση σε μεγαλύτερη κλίμακα", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Απομάκρυνση σε μικρότερη κλίμακα" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Αποσυνδεθήκατε με επιτυχία", // Appears when user is successfully signed-out from application
            reSignInMessage: "Κάντε κλικ εδώ για να συνδεθείτε" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);