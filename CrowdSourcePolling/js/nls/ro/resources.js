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
define({
    root: ({
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Imposibil de creat harta",
            layerLoad: "Imposibil de încărcat complet harta",
            missingItemsFeatureLayer: "Configuraţi aplicaţia pentru a utiliza un strat tematic de obiecte spaţiale"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Afişare meniu",
            signInButton: "Autentificare",
            signInButtonTooltip: "Autentificaţi-vă",
            signOutButton: "Deconectare",
            signOutButtonTooltip: "Deconectare",
            helpButtonLabel: "Ajutor",
            helpButtonTooltip: "Aflaţi mai multe",
            gotoListViewLabel: "Vizualizare listă",
            gotoListViewTooltip: "Accesare vizualizare listă", // Go to List view tooltip text
            gotoMapViewLabel: "Vizualizare hartă",
            gotoMapViewTooltip: "Accesare vizualizare hartă" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Închidere"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Autentificare cu Facebook",
            signIntoGooglePlusTooltip: "Autentificare cu Google+",
            signIntoTwitterTooltip: "Autentificare cu Twitter",
            signOutOfFacebookTooltip: "Deconectare de la Facebook",
            signOutOfGooglePlusTooltip: "Deconectare de la Google+",
            signOutOfTwitterTooltip: "Deconectare de la Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (opţional)",
            requiredFormItemFlag: " (obligatoriu)",
            unsettableRequiredField: "Un câmp obligatoriu nu este iniţializat sau nu este prezent în formular",
            countOfRemainingCharactersTooltip: "Caractere rămase",
            cancelButtonLabel: "Anulare",
            submitButtonLabel: "Trimitere"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Votaţi pentru acest element",
            commentButtonTooltip: "Adăugare comentariu",
            gotoMapViewTooltip: "Accesare vizualizare hartă",
            galleryButtonTooltip: "Vizualizare fişiere ataşate",
            commentsListHeading: "Comentarii",
            noCommentsPlaceholder: "Niciun comentariu"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrare listă după hartă",
            linkToMapViewOptionTooltip: "Obiecte spaţiale din listă care sunt vizibile pe harta curentă",
            likesForThisItemTooltip: "Voturi pentru acest element"
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "hr": 1,
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
    "sr": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});
