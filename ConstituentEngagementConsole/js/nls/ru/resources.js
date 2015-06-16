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
            error: "Ж_Unable to create map_______Я" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Ж_No group configured_______Я" // Appears when no group is configured
        },
        webMapList: {
            owner: "Ж_Owner___Я", // Appears in web-map list description panel when it is set to true
            created: "Ж_Date created_____Я", // Appears in web-map list description panel when it is set to true
            modified: "Ж_Date modified_____Я", // Appears in web-map list description panel when it is set to true
            description: "Ж_Description____Я", // Appears in web-map list description panel when it is set to true
            snippet: "Ж_Summary___Я", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ж_Access and use constraints_________Я", // Appears in web-map list description panel when it is set to true
            accessInformation: "Ж_Credits___Я", // Appears in web-map list description panel when it is set to true
            tags: "Ж_Tags__Я", // Appears in web-map list description panel when it is set to true
            numViews: "Ж_Number of views______Я", // Appears in web-map list description panel when it is set to true
            avgRating: "Ж_Rating___Я", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Ж_Configured group is invalid or no items have been shared with this group yet________________________Я", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Ж_Map information______Я" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Ж_Sign Out___Я", // Command button to sign-out from the application
            pleaseSignInText: "Ж_Please sign in_____Я", // Appears when user needs to sign-in into the application
            showSelectedOption: "Ж_Show Selected_____Я", // Command button to show selected records in data-viewer
            showAllOption: "Ж_Show All___Я", // Command button to show all the records in data-viewer
            clearSelectionOption: "Ж_Clear Selection______Я", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Ж_Zoom to Selected______Я", // Command button to zoom map to selected records
            gridViewOption: "Ж_List View____Я", // Command button to display list view
            mapViewOption: "Ж_Map View___Я", // Command button to display map view
            gridMapViewOption: "Ж_Split View____Я", // Command button to display split view
            settingsBtnToolTip: "Ж_Selection options______Я", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Ж_Display options______Я", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Ж_Search this layer______Я", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Ж_Refresh___Я", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Ж_All selections and unsaved changes will be discarded_________________Я", // Appears when user wants to do manual refresh
            signInOption: "Ж_Sign In___Я" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Ж_No reports available_______Я", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Ж_Attachments____Я", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Ж_Please enter an integer________Я ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Ж_Please enter an integer________Я", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Ж_Please enter a number_______Я", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Ж_Please enter a number_______Я", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Ж_Please enter a value_______Я", // Shown when user enters invalid string value
            invalidDate: "Ж_Please enter a valid date_________Я", // Shown when user enters invalid date value
            invalidNumericRange: "Ж_Please enter a value between ${minValue} and ${maxValue}__________________Я", // Shown when user enters value which is out of range
            moreInfolink: "Ж_Link__Я", // Shown when value in field contains only URL.
            commentsText: "Ж_Comments___Я", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Ж_No comments available_______Я", // Appears when no comments are available
            noFeatureGeometry: "Ж_Feature cannot be displayed_________Я" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Ж_No configuration defined________Я" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Ж_No results found______Я" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Ж_View more details for the active feature_____________Я", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Ж_View map___Я", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Ж_Zoom in___Я", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Ж_Zoom out___Я" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Ж_You've been successfully signed out____________Я", // Appears when user is successfully signed-out from application
            reSignInMessage: "Ж_Click here to sign in_______Я" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Ж_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________Я.", // Appears when preview page is loaded
            section2: "Ж_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________Я.", // Appears when preview page is loaded
            section3: "Ж_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________Я." // Appears when preview page is loaded
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