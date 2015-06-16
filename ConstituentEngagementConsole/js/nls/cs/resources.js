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
            error: "Ř_Unable to create map_______ů" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Ř_No group configured_______ů" // Appears when no group is configured
        },
        webMapList: {
            owner: "Ř_Owner___ů", // Appears in web-map list description panel when it is set to true
            created: "Ř_Date created_____ů", // Appears in web-map list description panel when it is set to true
            modified: "Ř_Date modified_____ů", // Appears in web-map list description panel when it is set to true
            description: "Ř_Description____ů", // Appears in web-map list description panel when it is set to true
            snippet: "Ř_Summary___ů", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ř_Access and use constraints_________ů", // Appears in web-map list description panel when it is set to true
            accessInformation: "Ř_Credits___ů", // Appears in web-map list description panel when it is set to true
            tags: "Ř_Tags__ů", // Appears in web-map list description panel when it is set to true
            numViews: "Ř_Number of views______ů", // Appears in web-map list description panel when it is set to true
            avgRating: "Ř_Rating___ů", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Ř_Configured group is invalid or no items have been shared with this group yet________________________ů", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Ř_Map information______ů" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Ř_Sign Out___ů", // Command button to sign-out from the application
            pleaseSignInText: "Ř_Please sign in_____ů", // Appears when user needs to sign-in into the application
            showSelectedOption: "Ř_Show Selected_____ů", // Command button to show selected records in data-viewer
            showAllOption: "Ř_Show All___ů", // Command button to show all the records in data-viewer
            clearSelectionOption: "Ř_Clear Selection______ů", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Ř_Zoom to Selected______ů", // Command button to zoom map to selected records
            gridViewOption: "Ř_List View____ů", // Command button to display list view
            mapViewOption: "Ř_Map View___ů", // Command button to display map view
            gridMapViewOption: "Ř_Split View____ů", // Command button to display split view
            settingsBtnToolTip: "Ř_Selection options______ů", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Ř_Display options______ů", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Ř_Search this layer______ů", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Ř_Refresh___ů", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Ř_All selections and unsaved changes will be discarded_________________ů", // Appears when user wants to do manual refresh
            signInOption: "Ř_Sign In___ů" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Ř_No reports available_______ů", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Ř_Attachments____ů", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Ř_Please enter an integer________ů ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Ř_Please enter an integer________ů", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Ř_Please enter a number_______ů", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Ř_Please enter a number_______ů", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Ř_Please enter a value_______ů", // Shown when user enters invalid string value
            invalidDate: "Ř_Please enter a valid date_________ů", // Shown when user enters invalid date value
            invalidNumericRange: "Ř_Please enter a value between ${minValue} and ${maxValue}__________________ů", // Shown when user enters value which is out of range
            moreInfolink: "Ř_Link__ů", // Shown when value in field contains only URL.
            commentsText: "Ř_Comments___ů", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Ř_No comments available_______ů", // Appears when no comments are available
            noFeatureGeometry: "Ř_Feature cannot be displayed_________ů" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Ř_No configuration defined________ů" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Ř_No results found______ů" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Ř_View more details for the active feature_____________ů", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Ř_View map___ů", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Ř_Zoom in___ů", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Ř_Zoom out___ů" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Ř_You've been successfully signed out____________ů", // Appears when user is successfully signed-out from application
            reSignInMessage: "Ř_Click here to sign in_______ů" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Ř_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ů.", // Appears when preview page is loaded
            section2: "Ř_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ů.", // Appears when preview page is loaded
            section3: "Ř_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ů." // Appears when preview page is loaded
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