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
            error: "Nije moguće stvoriti kartu",
            layerLoad: "Nije moguće učitati kartu do kraja",
            missingItemsFeatureLayer: "Konfigurirajte aplikaciju za upotrebu sloja geoobjekata"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Prikaz izbornika",
            signInButton: "Prijava",
            signInButtonTooltip: "Prijava",
            signOutButton: "Odjava",
            signOutButtonTooltip: "Odjava",
            helpButtonLabel: "Pomoć",
            helpButtonTooltip: "Saznaj više",
            gotoListViewLabel: "Prikaz u popisu",
            gotoListViewTooltip: "Idi na prikaz u popisu", // Go to List view tooltip text
            gotoMapViewLabel: "Prikaz karte",
            gotoMapViewTooltip: "Idi na prikaz karte" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Zatvori"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Prijava preko Facebooka",
            signIntoGooglePlusTooltip: "Prijava preko Google+",
            signIntoTwitterTooltip: "Prijava preko Twittera",
            signOutOfFacebookTooltip: "Odjava s Facebooka",
            signOutOfGooglePlusTooltip: "Odjava s Google+",
            signOutOfTwitterTooltip: "Odjava s Twittera"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (neobavezno)",
            requiredFormItemFlag: " (obavezno)",
            unsettableRequiredField: "Obavezno polje nije ni započeto ni u obrascu",
            countOfRemainingCharactersTooltip: "Preostalo znakova",
            cancelButtonLabel: "Odustani",
            submitButtonLabel: "Pošalji"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Glasaj za ovu stavku",
            commentButtonTooltip: "Dodaj komentar",
            gotoMapViewTooltip: "Idi na prikaz karte",
            galleryButtonTooltip: "Vidi datoteke u privitku",
            commentsListHeading: "Komentari",
            noCommentsPlaceholder: "Nema komentara"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtriraj popis prema karti",
            linkToMapViewOptionTooltip: "Popis geoobjekata koji su vidljivi na trenutačnoj karti",
            likesForThisItemTooltip: "Glasovi za ovu stavku"
        }
    })
);
