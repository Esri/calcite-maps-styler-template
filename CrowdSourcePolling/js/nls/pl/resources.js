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
            error: "Nie można utworzyć mapy",
            layerLoad: "Nie można w pełni wczytać mapy",
            missingItemsFeatureLayer: "Skonfiguruj korzystanie z warstwy obiektów w aplikacji"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Pokaż menu",
            signInButton: "Zaloguj się",
            signInButtonTooltip: "Zaloguj się",
            signOutButton: "Wyloguj się",
            signOutButtonTooltip: "Wyloguj się",
            helpButtonLabel: "Pomoc",
            helpButtonTooltip: "Dowiedz się więcej",
            gotoListViewLabel: "Widok listy",
            gotoListViewTooltip: "Przejdź do widoku listy", // Go to List view tooltip text
            gotoMapViewLabel: "Widok mapy",
            gotoMapViewTooltip: "Przejdź do widoku mapy" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Zamknij"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Zaloguj się, używając danych dostępowych z serwisu Facebook",
            signIntoGooglePlusTooltip: "Zaloguj się, używając danych dostępowych z serwisu Google+",
            signIntoTwitterTooltip: "Zaloguj się, używając danych dostępowych z serwisu Twitter",
            signOutOfFacebookTooltip: "Wyloguj się z Facebooka",
            signOutOfGooglePlusTooltip: "Wyloguj się z Google+",
            signOutOfTwitterTooltip: "Wyloguj się z Twittera"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (opcjonalne)",
            requiredFormItemFlag: " (wymagane)",
            unsettableRequiredField: "Pole wymagane nie zostało zainicjowane ani umieszczona na formularzu",
            countOfRemainingCharactersTooltip: "Liczba pozostałych znaków",
            cancelButtonLabel: "Anuluj",
            submitButtonLabel: "Prześlij"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Głosuj na ten element",
            commentButtonTooltip: "Dodaj komentarz",
            gotoMapViewTooltip: "Przejdź do widoku mapy",
            galleryButtonTooltip: "Zobacz załączone pliki",
            commentsListHeading: "Komentarze",
            noCommentsPlaceholder: "Brak komentarzy"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtruj listę wg mapy",
            linkToMapViewOptionTooltip: "Wyświetl listę obiektów widocznych na bieżącej mapie",
            likesForThisItemTooltip: "Głosy oddane na ten element"
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
