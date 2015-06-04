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
            error: "Unable to create map" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "No group configured" // Appears when no group is configured
        },
        webMapList: {
            owner: "Owner", // Appears in web-map list description panel when it is set to true
            created: "Date created", // Appears in web-map list description panel when it is set to true
            modified: "Date modified", // Appears in web-map list description panel when it is set to true
            description: "Description", // Appears in web-map list description panel when it is set to true
            snippet: "Summary", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Access and use constraints", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Number of views", // Appears in web-map list description panel when it is set to true
            avgRating: "Rating", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Configured group is invalid or no items have been shared with this group yet", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Map information" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Sign Out", // Command button to sign-out from the application
            pleaseSignInText: "Please sign in", // Appears when user needs to sign-in into the application
            showSelectedOption: "Show Selected", // Command button to show selected records in data-viewer
            showAllOption: "Show All", // Command button to show all the records in data-viewer
            clearSelectionOption: "Clear Selection", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom to Selected", // Command button to zoom map to selected records
            gridViewOption: "List View", // Command button to display list view
            mapViewOption: "Map View", // Command button to display map view
            gridMapViewOption: "Split View", // Command button to display split view
            settingsBtnToolTip: "Selection options", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Display options", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Search this layer", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Refresh", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "All selections and unsaved changes will be discarded", // Appears when user wants to do manual refresh
            signInOption: "Sign In" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "No reports available", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Attachments", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Please enter an integer ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Please enter an integer", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Please enter a number", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Please enter a number", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Please enter a value", // Shown when user enters invalid string value
            invalidDate: "Please enter a valid date", // Shown when user enters invalid date value
            invalidNumericRange: "Please enter a value between ${minValue} and ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Link", // Shown when value in field contains only URL.
            commentsText: "Comments", // Appears when comments are available for display in details tab
            noCommentsAvailable: "No comments available", // Appears when no comments are available
            noFeatureGeometry: "Feature cannot be displayed" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "No configuration defined" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "No results found" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "View more details for the active feature", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "View map", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Zoom in", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom out" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "You've been successfully signed out", // Appears when user is successfully signed-out from application
            reSignInMessage: "Click here to sign in" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app.", // Appears when preview page is loaded
            section2: "The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility.", // Appears when preview page is loaded
            section3: "The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation." // Appears when preview page is loaded
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
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});