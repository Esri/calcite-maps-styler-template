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
            error: "無法建立地圖",
            layerLoad: "無法完全載入地圖",
            missingItemsFeatureLayer: "請配置應用程式以使用圖徵圖層"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "顯示功能表",
            signInButton: "登入",
            signInButtonTooltip: "登入",
            signOutButton: "登出",
            signOutButtonTooltip: "登出",
            helpButtonLabel: "說明",
            helpButtonTooltip: "瞭解詳細資訊",
            gotoListViewLabel: "清單視圖(L)",
            gotoListViewTooltip: "轉至清單檢視", // Go to List view tooltip text
            gotoMapViewLabel: "地圖視圖",
            gotoMapViewTooltip: "轉至地圖檢視" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "關閉"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "使用 Facebook 登入",
            signIntoGooglePlusTooltip: "使用 Google+ 登入",
            signIntoTwitterTooltip: "使用 Twitter 登入",
            signOutOfFacebookTooltip: "登出 Facebook",
            signOutOfGooglePlusTooltip: "登出 Google+",
            signOutOfTwitterTooltip: "登出 Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (可選)",
            requiredFormItemFlag: " (必填)",
            unsettableRequiredField: "必填的欄位既未初始化也未在表單中",
            countOfRemainingCharactersTooltip: "剩餘字元數",
            cancelButtonLabel: "取消",
            submitButtonLabel: "提交"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "票選此項目",
            commentButtonTooltip: "增加評論",
            gotoMapViewTooltip: "轉至地圖檢視",
            galleryButtonTooltip: "參閱隨附的檔案",
            commentsListHeading: "評論",
            noCommentsPlaceholder: "無評論"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "按地圖的篩選程式清單",
            linkToMapViewOptionTooltip: "條列在目前地圖上可見的圖徵",
            likesForThisItemTooltip: "票選此項目"
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
