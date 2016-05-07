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
            error: "Kaarti ei saa luua",
            layerLoad: "Kaarti ei saa täielikult laadida",
            missingItemsFeatureLayer: "Konfigureerige rakendus kasutama objektikihti"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Näita menüüd",
            signInButton: "Logi sisse",
            signInButtonTooltip: "Logi sisse",
            signOutButton: "Logi välja",
            signOutButtonTooltip: "Logi välja",
            helpButtonLabel: "Abi",
            helpButtonTooltip: "Lisateave",
            gotoListViewLabel: "Vaadete loend",
            gotoListViewTooltip: "Mine vaadete loendisse", // Go to List view tooltip text
            gotoMapViewLabel: "Kaardivaade",
            gotoMapViewTooltip: "Mine kaardivaatesse" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Sulge"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Logige sisse Facebooki konto kaudu",
            signIntoGooglePlusTooltip: "Logige sisse Google+ kasutajana",
            signIntoTwitterTooltip: "Logige sisse Twitteri konto kaudu",
            signOutOfFacebookTooltip: "Logi välja Facebookist",
            signOutOfGooglePlusTooltip: "Logi välja Google+ kontost",
            signOutOfTwitterTooltip: "Logi välja Twitterist"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (valikuline)",
            requiredFormItemFlag: " (nõutud)",
            unsettableRequiredField: "Vajalikku välja pole initsialiseeritud ega ka vormis",
            countOfRemainingCharactersTooltip: "Järelejäänud tähemärgid",
            cancelButtonLabel: "Tühista",
            submitButtonLabel: "Esita"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Hääletage selle objekti kohta",
            commentButtonTooltip: "Lisa kommentaar",
            gotoMapViewTooltip: "Mine kaardivaatesse",
            galleryButtonTooltip: "Vaadake manustatud faile",
            commentsListHeading: "Kommentaarid",
            noCommentsPlaceholder: "Kommentaarid puuduvad"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtreeri loend kaardi järgi",
            linkToMapViewOptionTooltip: "Loetle praegusel kaardil nähtavad objektid",
            likesForThisItemTooltip: "Selle objekti kohta antud hääled"
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
