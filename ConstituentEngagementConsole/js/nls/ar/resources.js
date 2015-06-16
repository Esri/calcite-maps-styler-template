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
            error: "بيت_Unable to create map_______لاحقة" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "بيت_No group configured_______لاحقة" // Appears when no group is configured
        },
        webMapList: {
            owner: "بيت_Owner___لاحقة", // Appears in web-map list description panel when it is set to true
            created: "بيت_Date created_____لاحقة", // Appears in web-map list description panel when it is set to true
            modified: "بيت_Date modified_____لاحقة", // Appears in web-map list description panel when it is set to true
            description: "بيت_Description____لاحقة", // Appears in web-map list description panel when it is set to true
            snippet: "بيت_Summary___لاحقة", // Appears in web-map list description panel when it is set to true
            licenseInfo: "بيت_Access and use constraints_________لاحقة", // Appears in web-map list description panel when it is set to true
            accessInformation: "بيت_Credits___لاحقة", // Appears in web-map list description panel when it is set to true
            tags: "بيت_Tags__لاحقة", // Appears in web-map list description panel when it is set to true
            numViews: "بيت_Number of views______لاحقة", // Appears in web-map list description panel when it is set to true
            avgRating: "بيت_Rating___لاحقة", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "بيت_Configured group is invalid or no items have been shared with this group yet________________________لاحقة", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "بيت_Map information______لاحقة" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "بيت_Sign Out___لاحقة", // Command button to sign-out from the application
            pleaseSignInText: "بيت_Please sign in_____لاحقة", // Appears when user needs to sign-in into the application
            showSelectedOption: "بيت_Show Selected_____لاحقة", // Command button to show selected records in data-viewer
            showAllOption: "بيت_Show All___لاحقة", // Command button to show all the records in data-viewer
            clearSelectionOption: "بيت_Clear Selection______لاحقة", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "بيت_Zoom to Selected______لاحقة", // Command button to zoom map to selected records
            gridViewOption: "بيت_List View____لاحقة", // Command button to display list view
            mapViewOption: "بيت_Map View___لاحقة", // Command button to display map view
            gridMapViewOption: "بيت_Split View____لاحقة", // Command button to display split view
            settingsBtnToolTip: "بيت_Selection options______لاحقة", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "بيت_Display options______لاحقة", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "بيت_Search this layer______لاحقة", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "بيت_Refresh___لاحقة", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "بيت_All selections and unsaved changes will be discarded_________________لاحقة", // Appears when user wants to do manual refresh
            signInOption: "بيت_Sign In___لاحقة" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "بيت_No reports available_______لاحقة", // Appears when no issues are available in current extent
            photoAttachmentHeader: "بيت_Attachments____لاحقة", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "بيت_Please enter an integer________لاحقة ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "بيت_Please enter an integer________لاحقة", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "بيت_Please enter a number_______لاحقة", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "بيت_Please enter a number_______لاحقة", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "بيت_Please enter a value_______لاحقة", // Shown when user enters invalid string value
            invalidDate: "بيت_Please enter a valid date_________لاحقة", // Shown when user enters invalid date value
            invalidNumericRange: "بيت_Please enter a value between ${minValue} and ${maxValue}__________________لاحقة", // Shown when user enters value which is out of range
            moreInfolink: "بيت_Link__لاحقة", // Shown when value in field contains only URL.
            commentsText: "بيت_Comments___لاحقة", // Appears when comments are available for display in details tab
            noCommentsAvailable: "بيت_No comments available_______لاحقة", // Appears when no comments are available
            noFeatureGeometry: "بيت_Feature cannot be displayed_________لاحقة" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "بيت_No configuration defined________لاحقة" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "بيت_No results found______لاحقة" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "بيت_View more details for the active feature_____________لاحقة", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "بيت_View map___لاحقة", // Display tool-tip on command button to view map panel
            zoomInToolTip: "بيت_Zoom in___لاحقة", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "بيت_Zoom out___لاحقة" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "بيت_You've been successfully signed out____________لاحقة", // Appears when user is successfully signed-out from application
            reSignInMessage: "بيت_Click here to sign in_______لاحقة" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "بيت_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________لاحقة.", // Appears when preview page is loaded
            section2: "بيت_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________لاحقة.", // Appears when preview page is loaded
            section3: "بيت_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________لاحقة." // Appears when preview page is loaded
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