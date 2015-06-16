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
            error: "ı_Unable to create map_______İ" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "ı_No group configured_______İ" // Appears when no group is configured
        },
        webMapList: {
            owner: "ı_Owner___İ", // Appears in web-map list description panel when it is set to true
            created: "ı_Date created_____İ", // Appears in web-map list description panel when it is set to true
            modified: "ı_Date modified_____İ", // Appears in web-map list description panel when it is set to true
            description: "ı_Description____İ", // Appears in web-map list description panel when it is set to true
            snippet: "ı_Summary___İ", // Appears in web-map list description panel when it is set to true
            licenseInfo: "ı_Access and use constraints_________İ", // Appears in web-map list description panel when it is set to true
            accessInformation: "ı_Credits___İ", // Appears in web-map list description panel when it is set to true
            tags: "ı_Tags__İ", // Appears in web-map list description panel when it is set to true
            numViews: "ı_Number of views______İ", // Appears in web-map list description panel when it is set to true
            avgRating: "ı_Rating___İ", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "ı_Configured group is invalid or no items have been shared with this group yet________________________İ", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ı_Map information______İ" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "ı_Sign Out___İ", // Command button to sign-out from the application
            pleaseSignInText: "ı_Please sign in_____İ", // Appears when user needs to sign-in into the application
            showSelectedOption: "ı_Show Selected_____İ", // Command button to show selected records in data-viewer
            showAllOption: "ı_Show All___İ", // Command button to show all the records in data-viewer
            clearSelectionOption: "ı_Clear Selection______İ", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "ı_Zoom to Selected______İ", // Command button to zoom map to selected records
            gridViewOption: "ı_List View____İ", // Command button to display list view
            mapViewOption: "ı_Map View___İ", // Command button to display map view
            gridMapViewOption: "ı_Split View____İ", // Command button to display split view
            settingsBtnToolTip: "ı_Selection options______İ", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "ı_Display options______İ", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "ı_Search this layer______İ", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "ı_Refresh___İ", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "ı_All selections and unsaved changes will be discarded_________________İ", // Appears when user wants to do manual refresh
            signInOption: "ı_Sign In___İ" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "ı_No reports available_______İ", // Appears when no issues are available in current extent
            photoAttachmentHeader: "ı_Attachments____İ", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "ı_Please enter an integer________İ ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "ı_Please enter an integer________İ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "ı_Please enter a number_______İ", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "ı_Please enter a number_______İ", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "ı_Please enter a value_______İ", // Shown when user enters invalid string value
            invalidDate: "ı_Please enter a valid date_________İ", // Shown when user enters invalid date value
            invalidNumericRange: "ı_Please enter a value between ${minValue} and ${maxValue}__________________İ", // Shown when user enters value which is out of range
            moreInfolink: "ı_Link__İ", // Shown when value in field contains only URL.
            commentsText: "ı_Comments___İ", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ı_No comments available_______İ", // Appears when no comments are available
            noFeatureGeometry: "ı_Feature cannot be displayed_________İ" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "ı_No configuration defined________İ" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "ı_No results found______İ" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "ı_View more details for the active feature_____________İ", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "ı_View map___İ", // Display tool-tip on command button to view map panel
            zoomInToolTip: "ı_Zoom in___İ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ı_Zoom out___İ" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "ı_You've been successfully signed out____________İ", // Appears when user is successfully signed-out from application
            reSignInMessage: "ı_Click here to sign in_______İ" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "ı_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________İ.", // Appears when preview page is loaded
            section2: "ı_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________İ.", // Appears when preview page is loaded
            section3: "ı_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________İ." // Appears when preview page is loaded
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