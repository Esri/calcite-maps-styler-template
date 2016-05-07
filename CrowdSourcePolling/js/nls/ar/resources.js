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
            error: "يتعذر إنشاء الخريطة",
            layerLoad: "يتعذر تحميل الخريطة بالكامل",
            missingItemsFeatureLayer: "يرجى تكوين التطبيق لاستخدام طبقة معالم"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "عرض القائمة",
            signInButton: "تسجيل الدخول",
            signInButtonTooltip: "تسجيل الدخول",
            signOutButton: "تسجيل الخروج",
            signOutButtonTooltip: "تسجيل الخروج",
            helpButtonLabel: "المساعدة",
            helpButtonTooltip: "على المزيد عن",
            gotoListViewLabel: "عرض القائمة",
            gotoListViewTooltip: "الانتقال إلى عرض القائمة", // Go to List view tooltip text
            gotoMapViewLabel: "عرض الخريطة",
            gotoMapViewTooltip: "انتقال إلى عرض الخريطة" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "إغلاق"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "تسجيل الدخول باستخدام Facebook",
            signIntoGooglePlusTooltip: "تسجيل الدخول باستخدام Google+",
            signIntoTwitterTooltip: "تسجيل الدخول باستخدام Twitter",
            signOutOfFacebookTooltip: "تسجيل الخروج من Facebook",
            signOutOfGooglePlusTooltip: "تسجيل الخروج من Google+",
            signOutOfTwitterTooltip: "تسجيل الخروج من Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (اختياري)",
            requiredFormItemFlag: " (مطلوب)",
            unsettableRequiredField: "حقل مطلوب لم يتم تهيئته ولا يوجد في النموذج",
            countOfRemainingCharactersTooltip: "الأحرف المتبقية",
            cancelButtonLabel: "إلغاء الأمر",
            submitButtonLabel: "ارسال"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "تصويت لهذا العنصر",
            commentButtonTooltip: "إضافة تعليق",
            gotoMapViewTooltip: "انتقال إلى عرض الخريطة",
            galleryButtonTooltip: "روية الملفات المرفقة",
            commentsListHeading: "التعليقات",
            noCommentsPlaceholder: "لا يوجد تعليقات"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "تصفية القائمة بواسطة الخريطة",
            linkToMapViewOptionTooltip: "إدراج المعالم المرئية في الخريطة الحالية",
            likesForThisItemTooltip: "تصويت لهذا العنصر"
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
