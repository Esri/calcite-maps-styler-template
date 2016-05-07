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
            error: "Kreiranje mape nije moguće",
            layerLoad: "Potpuno učitavanje mape nije moguće",
            missingItemsFeatureLayer: "Konfigurišite aplikaciju da koristite sloj geoobjekta"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Pokaži meni",
            signInButton: "Prijavite se",
            signInButtonTooltip: "Prijavite se",
            signOutButton: "Odjavite se",
            signOutButtonTooltip: "Odjavite se",
            helpButtonLabel: "Pomoć",
            helpButtonTooltip: "Saznaj više",
            gotoListViewLabel: "Prikaz liste",
            gotoListViewTooltip: "Idi na prikaz liste", // Go to List view tooltip text
            gotoMapViewLabel: "Prikaz mape",
            gotoMapViewTooltip: "Idi na prikaz mape" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Zatvori"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Prijavite se putem Facebook naloga",
            signIntoGooglePlusTooltip: "Prijavite se putem Google+ naloga",
            signIntoTwitterTooltip: "Prijavite se putem Twitter naloga",
            signOutOfFacebookTooltip: "Odjavite se sa Facebook naloga",
            signOutOfGooglePlusTooltip: "Odjavite se sa Google+ naloga",
            signOutOfTwitterTooltip: "Odjavite se sa Twitter naloga"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (opciono)",
            requiredFormItemFlag: " (obavezno)",
            unsettableRequiredField: "Obavezno polje nije ni pokrenuto niti u obrascu",
            countOfRemainingCharactersTooltip: "Preostalo karaktera",
            cancelButtonLabel: "Otkaži",
            submitButtonLabel: "Prosledi"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Glasaj za ovu stavku",
            commentButtonTooltip: "Dodaj komentar",
            gotoMapViewTooltip: "Idi na prikaz mape",
            galleryButtonTooltip: "Pogledaj priložene datoteke",
            commentsListHeading: "Komentari",
            noCommentsPlaceholder: "Nema komentara"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtriraj listu po mapi",
            linkToMapViewOptionTooltip: "Navedi geoobjekte koji su vidljivi na trenutnoj mapi",
            likesForThisItemTooltip: "Glasovi za ovu stavku"
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
