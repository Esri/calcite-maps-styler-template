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
define(
     ({
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Č_Unable to create map_______ž",
            layerLoad: "Č_Unable to fully load map________ž",
            missingItemsFeatureLayer: "Č_Please configure the application to use a feature layer__________________ž"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Č_Show menu____ž",
            signInButton: "Č_Sign In___ž",
            signInButtonTooltip: "Č_Sign in___ž",
            signOutButton: "Č_Sign Out___ž",
            signOutButtonTooltip: "Č_Sign out___ž",
            helpButtonLabel: "Č_Help__ž",
            helpButtonTooltip: "Č_Learn more____ž",
            gotoListViewLabel: "Č_List View____ž",
            gotoListViewTooltip: "Č_Go to list view______ž", // Go to List view tooltip text
            gotoMapViewLabel: "Č_Map View___ž",
            gotoMapViewTooltip: "Č_Go to map view_____ž" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Č_Close___ž"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Č_Sign in with Facebook_______ž",
            signIntoGooglePlusTooltip: "Č_Sign in with Google+_______ž",
            signIntoTwitterTooltip: "Č_Sign in with Twitter_______ž",
            signOutOfFacebookTooltip: "Č_Sign out of Facebook_______ž",
            signOutOfGooglePlusTooltip: "Č_Sign out of Google+_______ž",
            signOutOfTwitterTooltip: "Č_Sign out of Twitter_______ž"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " Č_(optional)____ž",
            requiredFormItemFlag: " Č_(required)____ž",
            unsettableRequiredField: "Č_A required field is neither initialized nor in the form__________________ž",
            countOfRemainingCharactersTooltip: "Č_Characters remaining_______ž",
            cancelButtonLabel: "Č_Cancel___ž",
            submitButtonLabel: "Č_Submit___ž"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Č_Vote for this item______ž",
            commentButtonTooltip: "Č_Add a comment_____ž",
            gotoMapViewTooltip: "Č_Go to map view_____ž",
            galleryButtonTooltip: "Č_See attached files______ž",
            commentsListHeading: "Č_Comments___ž",
            noCommentsPlaceholder: "Č_No comments____ž"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Č_Filter list by map______ž",
            linkToMapViewOptionTooltip: "Č_List features that are visible in the current map________________ž",
            likesForThisItemTooltip: "Č_Votes for this item_______ž"
        }
    })
);
