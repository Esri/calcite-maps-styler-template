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
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Δεν είναι δυνατή η δημιουργία χάρτη",
            layerLoad: "Δεν είναι δυνατή η πλήρης φόρτωση του χάρτη",
            missingItemsFeatureLayer: "Διαμορφώστε την εφαρμογή ώστε να είναι δυνατή η χρήση feature layer"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Εμφάνιση μενού",
            signInButton: "Είσοδος",
            signInButtonTooltip: "Είσοδος",
            signOutButton: "Έξοδος",
            signOutButtonTooltip: "Έξοδος",
            helpButtonLabel: "Βοήθεια",
            helpButtonTooltip: "Μάθετε περισσότερα",
            gotoListViewLabel: "Προβολή λίστας",
            gotoListViewTooltip: "Μετάβαση στην προβολή λίστας", // Go to List view tooltip text
            gotoMapViewLabel: "Προβολή χάρτη",
            gotoMapViewTooltip: "Μετάβαση στην προβολή χάρτη" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Κλείσιμο"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Σύνδεση με Facebook",
            signIntoGooglePlusTooltip: "Σύνδεση με Google+",
            signIntoTwitterTooltip: "Σύνδεση με Twitter",
            signOutOfFacebookTooltip: "Αποσύνδεση από το Facebook",
            signOutOfGooglePlusTooltip: "Αποσύνδεση από το Google+",
            signOutOfTwitterTooltip: "Αποσύνδεση από το Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (προαιρετικά)",
            requiredFormItemFlag: " (απαιτούμενο)",
            unsettableRequiredField: "Ένα απαιτούμενο πεδίο ούτε έχει αρχικοποιηθεί ούτε βρίσκεται στη φόρμα",
            countOfRemainingCharactersTooltip: "Χαρακτήρες που απομένουν",
            cancelButtonLabel: "Ακύρωση",
            submitButtonLabel: "Υποβολή"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Ψηφίστε για αυτό το αντικείμενο",
            commentButtonTooltip: "Προσθήκη σχολίου",
            gotoMapViewTooltip: "Μετάβαση στην προβολή χάρτη",
            galleryButtonTooltip: "Προβολή συνημμένων αρχείων",
            commentsListHeading: "Σχόλια",
            noCommentsPlaceholder: "Χωρίς σχόλια"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Φιλτράρισμα λίστας βάσει χάρτη",
            linkToMapViewOptionTooltip: "Αναγραφή στοιχείων που είναι ορατά στον τρέχοντα χάρτη",
            likesForThisItemTooltip: "Ψήφοι για αυτό το αντικείμενο"
        }
    })
);
