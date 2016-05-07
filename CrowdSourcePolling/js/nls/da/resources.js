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
            error: "Kan ikke oprette kort",
            layerLoad: "Kan ikke indlæse kortet helt",
            missingItemsFeatureLayer: "Konfigurér applikationen til at bruge et vektorlag"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Vis menu",
            signInButton: "Log ind",
            signInButtonTooltip: "Log ind",
            signOutButton: "Log ud",
            signOutButtonTooltip: "Log ud",
            helpButtonLabel: "Hjælp",
            helpButtonTooltip: "Lær mere",
            gotoListViewLabel: "Listevisning",
            gotoListViewTooltip: "Gå til listevisning", // Go to List view tooltip text
            gotoMapViewLabel: "Kortvisning",
            gotoMapViewTooltip: "Gå til kortvisning" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Luk"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Log ind med Facebook",
            signIntoGooglePlusTooltip: "Log ind med Google+",
            signIntoTwitterTooltip: "Log ind med Twitter",
            signOutOfFacebookTooltip: "Log ud af Facebook",
            signOutOfGooglePlusTooltip: "Log ud af Google+",
            signOutOfTwitterTooltip: "Log ud af Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (valgfri)",
            requiredFormItemFlag: " (obligatorisk)",
            unsettableRequiredField: "Et obligatorisk felt er hverken initialiseret eller placeret i formularen",
            countOfRemainingCharactersTooltip: "Resterende tegn",
            cancelButtonLabel: "Annullér",
            submitButtonLabel: "Indsend"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Stem på dette element",
            commentButtonTooltip: "Tilføj en kommentar",
            gotoMapViewTooltip: "Gå til kortvisning",
            galleryButtonTooltip: "Se vedhæftede filer",
            commentsListHeading: "Comments",
            noCommentsPlaceholder: "Ingen kommentarer"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrér liste efter kort",
            linkToMapViewOptionTooltip: "Angiv de objekter, der er synlige på det aktuelle kort, på en liste",
            likesForThisItemTooltip: "Stemmer på dette element"
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
