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
            error: "Karte kann nicht erstellt werden",
            layerLoad: "Karte kann nicht vollständig geladen werden",
            missingItemsFeatureLayer: "Konfigurieren Sie die Anwendung für die Verwendung eines Feature-Layers"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Menü anzeigen",
            signInButton: "Anmelden",
            signInButtonTooltip: "Anmelden",
            signOutButton: "Abmelden",
            signOutButtonTooltip: "Abmelden",
            helpButtonLabel: "Hilfe",
            helpButtonTooltip: "Weitere Informationen",
            gotoListViewLabel: "Listenansicht",
            gotoListViewTooltip: "Zur Listenansicht wechseln", // Go to List view tooltip text
            gotoMapViewLabel: "Kartenansicht",
            gotoMapViewTooltip: "Zur Kartenansicht wechseln" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Schließen"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Mit Facebook anmelden",
            signIntoGooglePlusTooltip: "Mit Google+ anmelden",
            signIntoTwitterTooltip: "Mit Twitter anmelden",
            signOutOfFacebookTooltip: "Bei Facebook abmelden",
            signOutOfGooglePlusTooltip: "Bei Google+ abmelden",
            signOutOfTwitterTooltip: "Bei Twitter abmelden"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (optional)",
            requiredFormItemFlag: " (erforderlich)",
            unsettableRequiredField: "Ein erforderliches Feld wurde weder initialisiert noch ist es im Formular enthalten",
            countOfRemainingCharactersTooltip: "Verbleibende Zeichen",
            cancelButtonLabel: "Abbrechen",
            submitButtonLabel: "Senden"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Für dieses Element stimmen",
            commentButtonTooltip: "Kommentar hinzufügen",
            gotoMapViewTooltip: "Zur Kartenansicht wechseln",
            galleryButtonTooltip: "Angehängte Dateien anzeigen",
            commentsListHeading: "Kommentare",
            noCommentsPlaceholder: "Keine Kommentare"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Liste nach Karte filtern",
            linkToMapViewOptionTooltip: "Features auflisten, die in der aktuellen Karte sichtbar sind",
            likesForThisItemTooltip: "Stimmen für dieses Element"
        }
    })
);
