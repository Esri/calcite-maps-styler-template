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
            error: "Не удалось создать карту",
            layerLoad: "Не удалось полностью загрузить карту",
            missingItemsFeatureLayer: "Настройте приложение для использования векторного слоя."
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Показать меню",
            signInButton: "Вход",
            signInButtonTooltip: "Вход",
            signOutButton: "Выход",
            signOutButtonTooltip: "Выход",
            helpButtonLabel: "Справка",
            helpButtonTooltip: "Более подробно",
            gotoListViewLabel: "Вид списка",
            gotoListViewTooltip: "Перейти в вид списка", // Go to List view tooltip text
            gotoMapViewLabel: "Вид карты",
            gotoMapViewTooltip: "Перейти к виду карты" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Закрыть"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Войти через Facebook",
            signIntoGooglePlusTooltip: "Войти через Google+",
            signIntoTwitterTooltip: "Войти через Twitter",
            signOutOfFacebookTooltip: "Выйти из Facebook",
            signOutOfGooglePlusTooltip: "Выйти из Google+",
            signOutOfTwitterTooltip: "Выйти из Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (дополнительно)",
            requiredFormItemFlag: " (необходимо)",
            unsettableRequiredField: "Требуемое поле неактивно либо отсутствует в форме",
            countOfRemainingCharactersTooltip: "Символов осталось",
            cancelButtonLabel: "Отмена",
            submitButtonLabel: "Подтвердить"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Голосовать за этот элемент",
            commentButtonTooltip: "Добавить комментарий",
            gotoMapViewTooltip: "Перейти к виду карты",
            galleryButtonTooltip: "Просмотр вложенных файлов",
            commentsListHeading: "Комментарии",
            noCommentsPlaceholder: "Комментарии отсутствуют"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Фильтр списка по картам",
            linkToMapViewOptionTooltip: "Список объектов, видимых в текущей карте",
            likesForThisItemTooltip: "Голоса, поданные за этот элемент"
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
