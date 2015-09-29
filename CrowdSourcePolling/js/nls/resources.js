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
            error: "Unable to create map",
            layerLoad: "Unable to fully load map",
            missingItemsFeatureLayer: "Please configure the application to use a feature layer"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Open the menu",
            signInButton: "Sign in",
            signInButtonTooltip: "Sign in to a social medium",
            signOutButton: "Sign out",
            signOutButtonTooltip: "Disconnect this app from your social medium",
            helpButtonLabel: "Help",
            helpButtonTooltip: "Find out more about this app",
            gotoListViewLabel: "List view",
            gotoListViewTooltip: "Go to list view", // Go to List view tooltip text
            gotoMapViewLabel: "Map view",
            gotoMapViewTooltip: "Go to map view" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Close"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Sign in to Facebook",
            signIntoGooglePlusTooltip: "Sign in to Google+",
            signIntoTwitterTooltip: "Sign in to Twitter",
            signOutOfFacebookTooltip: "Sign out of Facebook",
            signOutOfGooglePlusTooltip: "Sign out of Google+",
            signOutOfTwitterTooltip: "Sign out of Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (optional)",
            requiredFormItemFlag: " (required)",
            unsettableRequiredField: "A required field is neither initialized nor in the form",
            countOfRemainingCharactersTooltip: "Characters remaining",
            cancelButtonLabel: "Cancel",
            submitButtonLabel: "Submit"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Vote for this",
            commentButtonTooltip: "Add a comment about this",
            gotoMapViewTooltip: "Go to map view",
            galleryButtonTooltip: "See attached files",
            commentsListHeading: "Comments",
            noCommentsPlaceholder: "No comments"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filter list by map",
            linkToMapViewOptionTooltip: "Apply filter to list only features that are visible in the current map",
            likesForThisItemTooltip: "Votes for this"
        }
    }),
    "ar": 0,
    "cs": 0,
    "da": 0,
    "de": 0,
    "el": 0,
    "es": 0,
    "et": 0,
    "fi": 0,
    "fr": 1,
    "he": 0,
    "it": 0,
    "ja": 0,
    "ko": 0,
    "lt": 0,
    "lv": 0,
    "nb": 0,
    "nl": 0,
    "pl": 0,
    "pt-br": 0,
    "pt-pt": 0,
    "ro": 0,
    "ru": 0,
    "sv": 0,
    "th": 0,
    "tr": 0,
    "vi": 0,
    "zh-cn": 0,
    "zh-hk": 0,
    "zh-tw": 0
});
