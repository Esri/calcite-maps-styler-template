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
            error: "לא ניתן ליצור מפה",
            layerLoad: "לא ניתן לטעון את המפה במלואה",
            missingItemsFeatureLayer: "הגדר את תצורת האפליקציה לשימוש בשכבת ישויות"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "הצג תפריט",
            signInButton: "הירשם",
            signInButtonTooltip: "התחבר",
            signOutButton: "התנתק",
            signOutButtonTooltip: "יציאה",
            helpButtonLabel: "עזרה",
            helpButtonTooltip: "מידע נוסף",
            gotoListViewLabel: "תצוגת רשימה",
            gotoListViewTooltip: "עבור לתצוגת רשימה", // Go to List view tooltip text
            gotoMapViewLabel: "תצוגת מפה",
            gotoMapViewTooltip: "עבור לתצוגת מפה" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "סגור"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "התחבר עם Facebook",
            signIntoGooglePlusTooltip: "התחבר עם Google+‎",
            signIntoTwitterTooltip: "התחבר עם טוויטר",
            signOutOfFacebookTooltip: "התנתק מ-Facebook",
            signOutOfGooglePlusTooltip: "התנתק מ-Google+‎",
            signOutOfTwitterTooltip: "התנתק מ-Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (אופציונלי)",
            requiredFormItemFlag: " (נדרש)",
            unsettableRequiredField: "שדה נדרש כלשהו לא מופעל ולא קיים בטופס",
            countOfRemainingCharactersTooltip: "תווים שנותרו",
            cancelButtonLabel: "ביטול",
            submitButtonLabel: "שלח"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "הצבע עבור פריט זה",
            commentButtonTooltip: "הוסף הערה",
            gotoMapViewTooltip: "עבור לתצוגת מפה",
            galleryButtonTooltip: "ראה קצבים מצורפים",
            commentsListHeading: "הערות",
            noCommentsPlaceholder: "אין הערות"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "סנן את הרשימה לפי מפה",
            linkToMapViewOptionTooltip: "ציין ישויות שנראות במפה הנוכחית",
            likesForThisItemTooltip: "הצבעות עבור פריט זה"
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
