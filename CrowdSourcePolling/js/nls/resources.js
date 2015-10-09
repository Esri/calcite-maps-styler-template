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
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});
