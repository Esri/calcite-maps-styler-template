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
            error: "Ă_Unable to create map_______ș" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Ă_No group configured_______ș" // Appears when no group is configured
        },
        webMapList: {
            owner: "Ă_Owner___ș", // Appears in web-map list description panel when it is set to true
            created: "Ă_Date created_____ș", // Appears in web-map list description panel when it is set to true
            modified: "Ă_Date modified_____ș", // Appears in web-map list description panel when it is set to true
            description: "Ă_Description____ș", // Appears in web-map list description panel when it is set to true
            snippet: "Ă_Summary___ș", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ă_Access and use constraints_________ș", // Appears in web-map list description panel when it is set to true
            accessInformation: "Ă_Credits___ș", // Appears in web-map list description panel when it is set to true
            tags: "Ă_Tags__ș", // Appears in web-map list description panel when it is set to true
            numViews: "Ă_Number of views______ș", // Appears in web-map list description panel when it is set to true
            avgRating: "Ă_Rating___ș", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Ă_Configured group is invalid or no items have been shared with this group yet________________________ș", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Ă_Map information______ș" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Ă_Sign Out___ș", // Command button to sign-out from the application
            pleaseSignInText: "Ă_Please sign in_____ș", // Appears when user needs to sign-in into the application
            showSelectedOption: "Ă_Show Selected_____ș", // Command button to show selected records in data-viewer
            showAllOption: "Ă_Show All___ș", // Command button to show all the records in data-viewer
            clearSelectionOption: "Ă_Clear Selection______ș", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Ă_Zoom to Selected______ș", // Command button to zoom map to selected records
            gridViewOption: "Ă_List View____ș", // Command button to display list view
            mapViewOption: "Ă_Map View___ș", // Command button to display map view
            gridMapViewOption: "Ă_Split View____ș", // Command button to display split view
            settingsBtnToolTip: "Ă_Selection options______ș", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Ă_Display options______ș", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Ă_Search this layer______ș", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Ă_Refresh___ș", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Ă_All selections and unsaved changes will be discarded_________________ș", // Appears when user wants to do manual refresh
            signInOption: "Ă_Sign In___ș" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Ă_No reports available_______ș", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Ă_Attachments____ș", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Ă_Please enter an integer________ș ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Ă_Please enter an integer________ș", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Ă_Please enter a number_______ș", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Ă_Please enter a number_______ș", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Ă_Please enter a value_______ș", // Shown when user enters invalid string value
            invalidDate: "Ă_Please enter a valid date_________ș", // Shown when user enters invalid date value
            invalidNumericRange: "Ă_Please enter a value between ${minValue} and ${maxValue}__________________ș", // Shown when user enters value which is out of range
            moreInfolink: "Ă_Link__ș", // Shown when value in field contains only URL.
            commentsText: "Ă_Comments___ș", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Ă_No comments available_______ș", // Appears when no comments are available
            noFeatureGeometry: "Ă_Feature cannot be displayed_________ș" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Ă_No configuration defined________ș" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Ă_No results found______ș" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Ă_View more details for the active feature_____________ș", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Ă_View map___ș", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Ă_Zoom in___ș", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Ă_Zoom out___ș" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Ă_You've been successfully signed out____________ș", // Appears when user is successfully signed-out from application
            reSignInMessage: "Ă_Click here to sign in_______ș" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Ă_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ș.", // Appears when preview page is loaded
            section2: "Ă_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ș.", // Appears when preview page is loaded
            section3: "Ă_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ș." // Appears when preview page is loaded
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