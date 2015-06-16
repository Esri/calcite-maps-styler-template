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
            error: "須_Unable to create map_______鷗" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "須_No group configured_______鷗" // Appears when no group is configured
        },
        webMapList: {
            owner: "須_Owner___鷗", // Appears in web-map list description panel when it is set to true
            created: "須_Date created_____鷗", // Appears in web-map list description panel when it is set to true
            modified: "須_Date modified_____鷗", // Appears in web-map list description panel when it is set to true
            description: "須_Description____鷗", // Appears in web-map list description panel when it is set to true
            snippet: "須_Summary___鷗", // Appears in web-map list description panel when it is set to true
            licenseInfo: "須_Access and use constraints_________鷗", // Appears in web-map list description panel when it is set to true
            accessInformation: "須_Credits___鷗", // Appears in web-map list description panel when it is set to true
            tags: "須_Tags__鷗", // Appears in web-map list description panel when it is set to true
            numViews: "須_Number of views______鷗", // Appears in web-map list description panel when it is set to true
            avgRating: "須_Rating___鷗", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "須_Configured group is invalid or no items have been shared with this group yet________________________鷗", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "須_Map information______鷗" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "須_Sign Out___鷗", // Command button to sign-out from the application
            pleaseSignInText: "須_Please sign in_____鷗", // Appears when user needs to sign-in into the application
            showSelectedOption: "須_Show Selected_____鷗", // Command button to show selected records in data-viewer
            showAllOption: "須_Show All___鷗", // Command button to show all the records in data-viewer
            clearSelectionOption: "須_Clear Selection______鷗", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "須_Zoom to Selected______鷗", // Command button to zoom map to selected records
            gridViewOption: "須_List View____鷗", // Command button to display list view
            mapViewOption: "須_Map View___鷗", // Command button to display map view
            gridMapViewOption: "須_Split View____鷗", // Command button to display split view
            settingsBtnToolTip: "須_Selection options______鷗", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "須_Display options______鷗", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "須_Search this layer______鷗", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "須_Refresh___鷗", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "須_All selections and unsaved changes will be discarded_________________鷗", // Appears when user wants to do manual refresh
            signInOption: "須_Sign In___鷗" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "須_No reports available_______鷗", // Appears when no issues are available in current extent
            photoAttachmentHeader: "須_Attachments____鷗", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "須_Please enter an integer________鷗 ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "須_Please enter an integer________鷗", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "須_Please enter a number_______鷗", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "須_Please enter a number_______鷗", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "須_Please enter a value_______鷗", // Shown when user enters invalid string value
            invalidDate: "須_Please enter a valid date_________鷗", // Shown when user enters invalid date value
            invalidNumericRange: "須_Please enter a value between ${minValue} and ${maxValue}__________________鷗", // Shown when user enters value which is out of range
            moreInfolink: "須_Link__鷗", // Shown when value in field contains only URL.
            commentsText: "須_Comments___鷗", // Appears when comments are available for display in details tab
            noCommentsAvailable: "須_No comments available_______鷗", // Appears when no comments are available
            noFeatureGeometry: "須_Feature cannot be displayed_________鷗" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "須_No configuration defined________鷗" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "須_No results found______鷗" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "須_View more details for the active feature_____________鷗", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "須_View map___鷗", // Display tool-tip on command button to view map panel
            zoomInToolTip: "須_Zoom in___鷗", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "須_Zoom out___鷗" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "須_You've been successfully signed out____________鷗", // Appears when user is successfully signed-out from application
            reSignInMessage: "須_Click here to sign in_______鷗" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "須_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________鷗.", // Appears when preview page is loaded
            section2: "須_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________鷗.", // Appears when preview page is loaded
            section3: "須_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________鷗." // Appears when preview page is loaded
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