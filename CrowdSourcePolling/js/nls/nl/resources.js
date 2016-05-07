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
            error: "Kaart kan niet gemaakt worden",
            layerLoad: "De kaart kan niet volledig worden geladen",
            missingItemsFeatureLayer: "Configureer de applicatie om een objectlaag te gebruiken"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Menu tonen",
            signInButton: "Aanmelden",
            signInButtonTooltip: "Aanmelden",
            signOutButton: "Afmelden",
            signOutButtonTooltip: "Meld u af",
            helpButtonLabel: "Help",
            helpButtonTooltip: "Meer weten",
            gotoListViewLabel: "Lijstweergave",
            gotoListViewTooltip: "Ga naar lijstweergave", // Go to List view tooltip text
            gotoMapViewLabel: "Kaartweergave",
            gotoMapViewTooltip: "Ga naar kaartweergave" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Sluiten"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Aanmelden met Facebook",
            signIntoGooglePlusTooltip: "Aanmelden met Google+",
            signIntoTwitterTooltip: "Aanmelden met Twitter",
            signOutOfFacebookTooltip: "Afmelden bij Facebook",
            signOutOfGooglePlusTooltip: "Afmelden bij Google+",
            signOutOfTwitterTooltip: "Afmelden bij Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (optioneel)",
            requiredFormItemFlag: " (vereist)",
            unsettableRequiredField: "Een verplicht veld is noch geïnitialiseerd noch in het formulier",
            countOfRemainingCharactersTooltip: "Resterende tekens",
            cancelButtonLabel: "Annuleren",
            submitButtonLabel: "Verzenden"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Op dit item stemmen",
            commentButtonTooltip: "Een opmerking toevoegen",
            gotoMapViewTooltip: "Ga naar kaartweergave",
            galleryButtonTooltip: "Zie bijgesloten bestanden",
            commentsListHeading: "Opmerkingen",
            noCommentsPlaceholder: "Geen opmerkingen"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Lijst filteren op kaart",
            linkToMapViewOptionTooltip: "Lijstobjecten die zichtbaar zijn in de huidige kaart",
            likesForThisItemTooltip: "Stemmen op dit item"
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
