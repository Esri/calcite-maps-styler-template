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
            error: "한_Unable to create map_______빠" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "한_No group configured_______빠" // Appears when no group is configured
        },
        webMapList: {
            owner: "한_Owner___빠", // Appears in web-map list description panel when it is set to true
            created: "한_Date created_____빠", // Appears in web-map list description panel when it is set to true
            modified: "한_Date modified_____빠", // Appears in web-map list description panel when it is set to true
            description: "한_Description____빠", // Appears in web-map list description panel when it is set to true
            snippet: "한_Summary___빠", // Appears in web-map list description panel when it is set to true
            licenseInfo: "한_Access and use constraints_________빠", // Appears in web-map list description panel when it is set to true
            accessInformation: "한_Credits___빠", // Appears in web-map list description panel when it is set to true
            tags: "한_Tags__빠", // Appears in web-map list description panel when it is set to true
            numViews: "한_Number of views______빠", // Appears in web-map list description panel when it is set to true
            avgRating: "한_Rating___빠", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "한_Configured group is invalid or no items have been shared with this group yet________________________빠", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "한_Map information______빠" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "한_Sign Out___빠", // Command button to sign-out from the application
            pleaseSignInText: "한_Please sign in_____빠", // Appears when user needs to sign-in into the application
            showSelectedOption: "한_Show Selected_____빠", // Command button to show selected records in data-viewer
            showAllOption: "한_Show All___빠", // Command button to show all the records in data-viewer
            clearSelectionOption: "한_Clear Selection______빠", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "한_Zoom to Selected______빠", // Command button to zoom map to selected records
            gridViewOption: "한_List View____빠", // Command button to display list view
            mapViewOption: "한_Map View___빠", // Command button to display map view
            gridMapViewOption: "한_Split View____빠", // Command button to display split view
            settingsBtnToolTip: "한_Selection options______빠", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "한_Display options______빠", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "한_Search this layer______빠", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "한_Refresh___빠", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "한_All selections and unsaved changes will be discarded_________________빠", // Appears when user wants to do manual refresh
            signInOption: "한_Sign In___빠" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "한_No reports available_______빠", // Appears when no issues are available in current extent
            photoAttachmentHeader: "한_Attachments____빠", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "한_Please enter an integer________빠 ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "한_Please enter an integer________빠", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "한_Please enter a number_______빠", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "한_Please enter a number_______빠", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "한_Please enter a value_______빠", // Shown when user enters invalid string value
            invalidDate: "한_Please enter a valid date_________빠", // Shown when user enters invalid date value
            invalidNumericRange: "한_Please enter a value between ${minValue} and ${maxValue}__________________빠", // Shown when user enters value which is out of range
            moreInfolink: "한_Link__빠", // Shown when value in field contains only URL.
            commentsText: "한_Comments___빠", // Appears when comments are available for display in details tab
            noCommentsAvailable: "한_No comments available_______빠", // Appears when no comments are available
            noFeatureGeometry: "한_Feature cannot be displayed_________빠" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "한_No configuration defined________빠" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "한_No results found______빠" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "한_View more details for the active feature_____________빠", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "한_View map___빠", // Display tool-tip on command button to view map panel
            zoomInToolTip: "한_Zoom in___빠", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "한_Zoom out___빠" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "한_You've been successfully signed out____________빠", // Appears when user is successfully signed-out from application
            reSignInMessage: "한_Click here to sign in_______빠" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "한_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________빠.", // Appears when preview page is loaded
            section2: "한_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________빠.", // Appears when preview page is loaded
            section3: "한_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________빠." // Appears when preview page is loaded
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