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
define(
     ({
        map: {
            error: "ก้_Unable to create map_______ษฺ" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "ก้_No group configured_______ษฺ" // Appears when no group is configured
        },
        webMapList: {
            owner: "ก้_Owner___ษฺ", // Appears in web-map list description panel when it is set to true
            created: "ก้_Date created_____ษฺ", // Appears in web-map list description panel when it is set to true
            modified: "ก้_Date modified_____ษฺ", // Appears in web-map list description panel when it is set to true
            description: "ก้_Description____ษฺ", // Appears in web-map list description panel when it is set to true
            snippet: "ก้_Summary___ษฺ", // Appears in web-map list description panel when it is set to true
            licenseInfo: "ก้_Access and use constraints_________ษฺ", // Appears in web-map list description panel when it is set to true
            accessInformation: "ก้_Credits___ษฺ", // Appears in web-map list description panel when it is set to true
            tags: "ก้_Tags__ษฺ", // Appears in web-map list description panel when it is set to true
            numViews: "ก้_Number of views______ษฺ", // Appears in web-map list description panel when it is set to true
            avgRating: "ก้_Rating___ษฺ", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "ก้_Configured group is invalid or no items have been shared with this group yet________________________ษฺ", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ก้_Map information______ษฺ" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "ก้_Sign Out___ษฺ", // Command button to sign-out from the application
            pleaseSignInText: "ก้_Please sign in_____ษฺ", // Appears when user needs to sign-in into the application
            showSelectedOption: "ก้_Show Selected_____ษฺ", // Command button to show selected records in data-viewer
            showAllOption: "ก้_Show All___ษฺ", // Command button to show all the records in data-viewer
            clearSelectionOption: "ก้_Clear Selection______ษฺ", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "ก้_Zoom to Selected______ษฺ", // Command button to zoom map to selected records
            gridViewOption: "ก้_List View____ษฺ", // Command button to display list view
            mapViewOption: "ก้_Map View___ษฺ", // Command button to display map view
            gridMapViewOption: "ก้_Split View____ษฺ", // Command button to display split view
            settingsBtnToolTip: "ก้_Selection options______ษฺ", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "ก้_Display options______ษฺ", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "ก้_Search this layer______ษฺ", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "ก้_Refresh___ษฺ", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "ก้_All selections and unsaved changes will be discarded_________________ษฺ", // Appears when user wants to do manual refresh
            signInOption: "ก้_Sign In___ษฺ" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "ก้_No reports available_______ษฺ", // Appears when no issues are available in current extent
            photoAttachmentHeader: "ก้_Attachments____ษฺ", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "ก้_Please enter an integer________ษฺ ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "ก้_Please enter an integer________ษฺ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "ก้_Please enter a number_______ษฺ", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "ก้_Please enter a number_______ษฺ", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "ก้_Please enter a value_______ษฺ", // Shown when user enters invalid string value
            invalidDate: "ก้_Please enter a valid date_________ษฺ", // Shown when user enters invalid date value
            invalidNumericRange: "ก้_Please enter a value between ${minValue} and ${maxValue}__________________ษฺ", // Shown when user enters value which is out of range
            moreInfolink: "ก้_Link__ษฺ", // Shown when value in field contains only URL.
            commentsText: "ก้_Comments___ษฺ", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ก้_No comments available_______ษฺ", // Appears when no comments are available
            noFeatureGeometry: "ก้_Feature cannot be displayed_________ษฺ" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "ก้_No configuration defined________ษฺ" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "ก้_No results found______ษฺ" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "ก้_View more details for the active feature_____________ษฺ", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "ก้_View map___ษฺ", // Display tool-tip on command button to view map panel
            zoomInToolTip: "ก้_Zoom in___ษฺ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ก้_Zoom out___ษฺ" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "ก้_You've been successfully signed out____________ษฺ", // Appears when user is successfully signed-out from application
            reSignInMessage: "ก้_Click here to sign in_______ษฺ" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "ก้_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ษฺ.", // Appears when preview page is loaded
            section2: "ก้_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ษฺ.", // Appears when preview page is loaded
            section3: "ก้_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ษฺ." // Appears when preview page is loaded
        }
    })
);