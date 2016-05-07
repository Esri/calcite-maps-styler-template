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
            error: "Harita oluşturulamıyor",
            layerLoad: "Harita tam olarak yüklenemiyor",
            missingItemsFeatureLayer: "Uygulamayı bir detay katmanı kullanacak biçimde yapılandırın"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Menüyü göster",
            signInButton: "Oturum Açma",
            signInButtonTooltip: "Hesabınıza",
            signOutButton: "Oturum Kapat",
            signOutButtonTooltip: "Oturumu kapat",
            helpButtonLabel: "Yardım",
            helpButtonTooltip: "Daha fazla bilgi",
            gotoListViewLabel: "Liste Görünümü",
            gotoListViewTooltip: "List görünümüne git", // Go to List view tooltip text
            gotoMapViewLabel: "Harita Görünümü",
            gotoMapViewTooltip: "Harita görünümüne git" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Kapat"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Facebook ile oturum aç",
            signIntoGooglePlusTooltip: "Google+ ile oturum aç",
            signIntoTwitterTooltip: "Twitter ile oturum aç",
            signOutOfFacebookTooltip: "Facebook oturumunu kapat",
            signOutOfGooglePlusTooltip: "Google+ oturumunu kapat",
            signOutOfTwitterTooltip: "Twitter oturumunu kapat"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (tercihe göre)",
            requiredFormItemFlag: " (gerekli)",
            unsettableRequiredField: "Gerekli bir alan başlatılamadı veya form içinde değil",
            countOfRemainingCharactersTooltip: "Karakter kaldı",
            cancelButtonLabel: "İptal",
            submitButtonLabel: "Gönder"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Bu öğeye oy ver",
            commentButtonTooltip: "Yorum ekle",
            gotoMapViewTooltip: "Harita görünümüne git",
            galleryButtonTooltip: "Ekteki dosyaları incele",
            commentsListHeading: "Yorumlar",
            noCommentsPlaceholder: "Yorum yok"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Listeyi haritaya göre filtrele",
            linkToMapViewOptionTooltip: "Geçerli haritada görünen detayları listele",
            likesForThisItemTooltip: "oy, bu öğe için"
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
