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
            error: "맵을 생성할 수 없음",
            layerLoad: "전체 맵을 불러올 수 없음",
            missingItemsFeatureLayer: "피처 레이어를 사용하려는 응용프로그램을 구성하세요."
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "메뉴 보기",
            signInButton: "로그인",
            signInButtonTooltip: "로그인",
            signOutButton: "로그아웃",
            signOutButtonTooltip: "로그아웃",
            helpButtonLabel: "도움말",
            helpButtonTooltip: "자세한 정보",
            gotoListViewLabel: "목록 보기",
            gotoListViewTooltip: "목록 보기로 이동", // Go to List view tooltip text
            gotoMapViewLabel: "맵 보기",
            gotoMapViewTooltip: "맵 보기로 이동" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "닫기"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Facebook으로 로그인",
            signIntoGooglePlusTooltip: "Google+로 로그인",
            signIntoTwitterTooltip: "Twitter로 로그인",
            signOutOfFacebookTooltip: "Facebook 로그아웃",
            signOutOfGooglePlusTooltip: "Google+ 로그아웃",
            signOutOfTwitterTooltip: "Twitter 로그아웃"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (선택 사항)",
            requiredFormItemFlag: " (필수)",
            unsettableRequiredField: "필수 필드가 초기화되지 않았거나 양식에 없습니다.",
            countOfRemainingCharactersTooltip: "남은 문자 수",
            cancelButtonLabel: "취소",
            submitButtonLabel: "제출"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "이 항목에 투표",
            commentButtonTooltip: "설명 추가",
            gotoMapViewTooltip: "맵 보기로 이동",
            galleryButtonTooltip: "첨부 파일 보기",
            commentsListHeading: "설명",
            noCommentsPlaceholder: "설명 없음"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "맵별 필터 목록",
            linkToMapViewOptionTooltip: "현재 맵에 보이는 피처를 나열합니다.",
            likesForThisItemTooltip: "이 항목에 투표"
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
