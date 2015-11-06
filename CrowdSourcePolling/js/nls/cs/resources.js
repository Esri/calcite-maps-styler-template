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
            error: "Nelze vytvořit mapu",
            layerLoad: "Mapu nelze zcela načíst",
            missingItemsFeatureLayer: "Nakonfigurujte aplikaci pro použití vrstvy prvků."
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Zobrazit nabídku",
            signInButton: "Přihlásit",
            signInButtonTooltip: "Přihlásit se",
            signOutButton: "Odhlásit",
            signOutButtonTooltip: "Odhlásit se",
            helpButtonLabel: "Nápověda",
            helpButtonTooltip: "Více informací",
            gotoListViewLabel: "Zobrazení seznamu",
            gotoListViewTooltip: "Přejít na zobrazení seznamu", // Go to List view tooltip text
            gotoMapViewLabel: "Zobrazení mapy",
            gotoMapViewTooltip: "Přejít na zobrazení mapy" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Zavřít"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Přihlásit se pomocí Facebooku",
            signIntoGooglePlusTooltip: "Přihlásit se pomocí Google+",
            signIntoTwitterTooltip: "Přihlásit se pomocí Twitteru",
            signOutOfFacebookTooltip: "Odhlásit se z Facebooku",
            signOutOfGooglePlusTooltip: "Odhlásit se z Google+",
            signOutOfTwitterTooltip: "Odhlásit se z Twitteru"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (volitelné)",
            requiredFormItemFlag: " (vyžadováno)",
            unsettableRequiredField: "Vyžadované pole není inicializováno a není ani ve formuláři.",
            countOfRemainingCharactersTooltip: "Zbývající znaky",
            cancelButtonLabel: "Storno",
            submitButtonLabel: "Odeslat"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Hlasovat pro tuto položku",
            commentButtonTooltip: "Přidat komentář",
            gotoMapViewTooltip: "Přejít na zobrazení mapy",
            galleryButtonTooltip: "Zobrazit připojené soubory",
            commentsListHeading: "Komentáře",
            noCommentsPlaceholder: "Žádné komentáře"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrovat seznam podle mapy",
            linkToMapViewOptionTooltip: "Vypsat prvky, které jsou viditelné v současné mapě",
            likesForThisItemTooltip: "Hlasy pro tuto položku"
        }
    })
);
