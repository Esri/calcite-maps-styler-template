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
            error: "ã_Unable to create map_______Ç" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "ã_No group configured_______Ç" // Appears when no group is configured
        },
        webMapList: {
            owner: "ã_Owner___Ç", // Appears in web-map list description panel when it is set to true
            created: "ã_Date created_____Ç", // Appears in web-map list description panel when it is set to true
            modified: "ã_Date modified_____Ç", // Appears in web-map list description panel when it is set to true
            description: "ã_Description____Ç", // Appears in web-map list description panel when it is set to true
            snippet: "ã_Summary___Ç", // Appears in web-map list description panel when it is set to true
            licenseInfo: "ã_Access and use constraints_________Ç", // Appears in web-map list description panel when it is set to true
            accessInformation: "ã_Credits___Ç", // Appears in web-map list description panel when it is set to true
            tags: "ã_Tags__Ç", // Appears in web-map list description panel when it is set to true
            numViews: "ã_Number of views______Ç", // Appears in web-map list description panel when it is set to true
            avgRating: "ã_Rating___Ç", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "ã_Configured group is invalid or no items have been shared with this group yet________________________Ç", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ã_Map information______Ç" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "ã_Sign Out___Ç", // Command button to sign-out from the application
            pleaseSignInText: "ã_Please sign in_____Ç", // Appears when user needs to sign-in into the application
            showSelectedOption: "ã_Show Selected_____Ç", // Command button to show selected records in data-viewer
            showAllOption: "ã_Show All___Ç", // Command button to show all the records in data-viewer
            clearSelectionOption: "ã_Clear Selection______Ç", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "ã_Zoom to Selected______Ç", // Command button to zoom map to selected records
            gridViewOption: "ã_List View____Ç", // Command button to display list view
            mapViewOption: "ã_Map View___Ç", // Command button to display map view
            gridMapViewOption: "ã_Split View____Ç", // Command button to display split view
            settingsBtnToolTip: "ã_Selection options______Ç", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "ã_Display options______Ç", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "ã_Search this layer______Ç", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "ã_Refresh___Ç", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "ã_All selections and unsaved changes will be discarded_________________Ç", // Appears when user wants to do manual refresh
            signInOption: "ã_Sign In___Ç" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "ã_No reports available_______Ç", // Appears when no issues are available in current extent
            photoAttachmentHeader: "ã_Attachments____Ç", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "ã_Please enter an integer________Ç ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "ã_Please enter an integer________Ç", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "ã_Please enter a number_______Ç", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "ã_Please enter a number_______Ç", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "ã_Please enter a value_______Ç", // Shown when user enters invalid string value
            invalidDate: "ã_Please enter a valid date_________Ç", // Shown when user enters invalid date value
            invalidNumericRange: "ã_Please enter a value between ${minValue} and ${maxValue}__________________Ç", // Shown when user enters value which is out of range
            moreInfolink: "ã_Link__Ç", // Shown when value in field contains only URL.
            commentsText: "ã_Comments___Ç", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ã_No comments available_______Ç", // Appears when no comments are available
            noFeatureGeometry: "ã_Feature cannot be displayed_________Ç" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "ã_No configuration defined________Ç" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "ã_No results found______Ç" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "ã_View more details for the active feature_____________Ç", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "ã_View map___Ç", // Display tool-tip on command button to view map panel
            zoomInToolTip: "ã_Zoom in___Ç", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ã_Zoom out___Ç" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "ã_You've been successfully signed out____________Ç", // Appears when user is successfully signed-out from application
            reSignInMessage: "ã_Click here to sign in_______Ç" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "ã_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________Ç.", // Appears when preview page is loaded
            section2: "ã_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________Ç.", // Appears when preview page is loaded
            section3: "ã_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________Ç." // Appears when preview page is loaded
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