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
        map: {
            error: "Unable to create map"
        },
        tooltips: {
            location: "Use your location",
            charactersRemaining: "Characters remaining",
            returnToList: "Return to list",
            votes: "Number of votes; click to add",
            comments: "Number of comments; click to add",
            hidePanel: "Hide this panel",
            showPanel: "Show summary panel"
        },
        labels: {
            sort: "Sort",
            signInLabel: "Sign in",
            signOutLabel: "Sign out",
            location: "Location",
            locationTip: "(Enter address, use locate button or click on map)",
            attachment: "Attach image (optional)",
            submit: "Submit",
            optional: " (optional)",
            addComment: "Add comment",
            commentName: "Your name",
            author: "by",
            anonymous: "Anonymous",
            currentLocation: "Current location:"
        },
        prompts: {
            confirmHTTPSRedirect: "Your browser is not CORS enabled. You need to redirect to HTTPS. Continue?"
        },
        messages: {
            yourContentSubmitted: "Your content has been submitted. Thank you.",  // Appears after content has been added to the map and successfully submitted to the server
            noEditableLayer: "No editable layer is available for accepting data",
            noConfiguration: "Unable to access application's configuration",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            incompleteForm: "Incomplete form",  // Appears when new-item form is missing required items
            noLocation: "No location specified."  // Appears when a new item is submitted with specifying the submitter's location
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "en": 1,
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
    "zh-cn": 1
});
