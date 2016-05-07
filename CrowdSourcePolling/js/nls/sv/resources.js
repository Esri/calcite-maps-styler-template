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
            error: "Det går inte att skapa kartan",
            layerLoad: "Det går inte att läsa in hela kartan",
            missingItemsFeatureLayer: "Konfigurera programmet så att det använder ett geoobjektslager"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Visa meny",
            signInButton: "Logga in",
            signInButtonTooltip: "Logga in",
            signOutButton: "Logga ut",
            signOutButtonTooltip: "Logga ut",
            helpButtonLabel: "Hjälp",
            helpButtonTooltip: "Läs mer",
            gotoListViewLabel: "Listvy",
            gotoListViewTooltip: "Gå till listvy", // Go to List view tooltip text
            gotoMapViewLabel: "Kartvy",
            gotoMapViewTooltip: "Gå till kartvy" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Stäng"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Logga in med Facebook",
            signIntoGooglePlusTooltip: "Logga in med Google+",
            signIntoTwitterTooltip: "Logga in med Twitter",
            signOutOfFacebookTooltip: "Logga ut från Facebook",
            signOutOfGooglePlusTooltip: "Logga ut från Google+",
            signOutOfTwitterTooltip: "Logga ut från Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (tillval)",
            requiredFormItemFlag: " (obligatoriskt)",
            unsettableRequiredField: "Ett obligatoriskt fält har varken initierats eller har rätt format",
            countOfRemainingCharactersTooltip: "Tecken kvar",
            cancelButtonLabel: "Avbryt",
            submitButtonLabel: "Skicka"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Rösta på det här objektet",
            commentButtonTooltip: "Lägg till en kommentar",
            gotoMapViewTooltip: "Gå till kartvy",
            galleryButtonTooltip: "Se bifogade filer",
            commentsListHeading: "Kommentarer",
            noCommentsPlaceholder: "Inga kommentarer"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrera lista efter karta",
            linkToMapViewOptionTooltip: "Visa en lista med geoobjekt som är synliga på den aktuella kartan",
            likesForThisItemTooltip: "Röster på det här objektet"
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
