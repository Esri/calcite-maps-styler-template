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
            error: "マップを作成できません",
            layerLoad: "マップを完全に読み込めません",
            missingItemsFeatureLayer: "フィーチャ レイヤーを使用するようアプリケーションを構成してください。"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "メニューを表示",
            signInButton: "サイン イン",
            signInButtonTooltip: "サイン イン",
            signOutButton: "サイン アウト",
            signOutButtonTooltip: "サイン アウト",
            helpButtonLabel: "ヘルプ",
            helpButtonTooltip: "詳細を見る",
            gotoListViewLabel: "リスト ビュー",
            gotoListViewTooltip: "リスト ビューに移動", // Go to List view tooltip text
            gotoMapViewLabel: "マップ ビュー",
            gotoMapViewTooltip: "マップ ビューに移動" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "閉じる"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Facebook を使用してサイン イン",
            signIntoGooglePlusTooltip: "Google+ を使用してサイン イン",
            signIntoTwitterTooltip: "Twitter を使用してサイン イン",
            signOutOfFacebookTooltip: "Facebook からサイン アウト",
            signOutOfGooglePlusTooltip: "Google+ からサイン アウト",
            signOutOfTwitterTooltip: "Twitter からサイン アウト"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (オプション)",
            requiredFormItemFlag: " (必須)",
            unsettableRequiredField: "必須フィールドが初期化されておらず、フォーム内にありません",
            countOfRemainingCharactersTooltip: "残りの文字数",
            cancelButtonLabel: "キャンセル",
            submitButtonLabel: "送信"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "このアイテムに投票",
            commentButtonTooltip: "コメントを追加",
            gotoMapViewTooltip: "マップ ビューに移動",
            galleryButtonTooltip: "添付したファイルを参照",
            commentsListHeading: "コメント",
            noCommentsPlaceholder: "コメントはありません"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "マップ別のフィルター リスト",
            linkToMapViewOptionTooltip: "現在のマップで表示できるフィーチャを一覧表示",
            likesForThisItemTooltip: "このアイテムに投票"
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
