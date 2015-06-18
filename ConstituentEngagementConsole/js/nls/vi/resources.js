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
            error: "Đ_Unable to create map_______ớ" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Đ_No group configured_______ớ" // Appears when no group is configured
        },
        webMapList: {
            owner: "Đ_Owner___ớ", // Appears in web-map list description panel when it is set to true
            created: "Đ_Date created_____ớ", // Appears in web-map list description panel when it is set to true
            modified: "Đ_Date modified_____ớ", // Appears in web-map list description panel when it is set to true
            description: "Đ_Description____ớ", // Appears in web-map list description panel when it is set to true
            snippet: "Đ_Summary___ớ", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Đ_Access and use constraints_________ớ", // Appears in web-map list description panel when it is set to true
            accessInformation: "Đ_Credits___ớ", // Appears in web-map list description panel when it is set to true
            tags: "Đ_Tags__ớ", // Appears in web-map list description panel when it is set to true
            numViews: "Đ_Number of views______ớ", // Appears in web-map list description panel when it is set to true
            avgRating: "Đ_Rating___ớ", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Đ_Configured group is invalid or no items have been shared with this group yet________________________ớ", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Đ_Map information______ớ" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Đ_Sign Out___ớ", // Command button to sign-out from the application
            pleaseSignInText: "Đ_Please sign in_____ớ", // Appears when user needs to sign-in into the application
            showSelectedOption: "Đ_Show Selected_____ớ", // Command button to show selected records in data-viewer
            showAllOption: "Đ_Show All___ớ", // Command button to show all the records in data-viewer
            clearSelectionOption: "Đ_Clear Selection______ớ", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Đ_Zoom to Selected______ớ", // Command button to zoom map to selected records
            gridViewOption: "Đ_List View____ớ", // Command button to display list view
            mapViewOption: "Đ_Map View___ớ", // Command button to display map view
            gridMapViewOption: "Đ_Split View____ớ", // Command button to display split view
            settingsBtnToolTip: "Đ_Selection options______ớ", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Đ_Display options______ớ", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Đ_Search this layer______ớ", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Đ_Refresh___ớ", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Đ_All selections and unsaved changes will be discarded_________________ớ", // Appears when user wants to do manual refresh
            signInOption: "Đ_Sign In___ớ" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Đ_No reports available_______ớ", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Đ_Attachments____ớ", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Đ_Please enter an integer________ớ ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Đ_Please enter an integer________ớ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Đ_Please enter a number_______ớ", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Đ_Please enter a number_______ớ", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Đ_Please enter a value_______ớ", // Shown when user enters invalid string value
            invalidDate: "Đ_Please enter a valid date_________ớ", // Shown when user enters invalid date value
            invalidNumericRange: "Đ_Please enter a value between ${minValue} and ${maxValue}__________________ớ", // Shown when user enters value which is out of range
            moreInfolink: "Đ_Link__ớ", // Shown when value in field contains only URL.
            commentsText: "Đ_Comments___ớ", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Đ_No comments available_______ớ", // Appears when no comments are available
            noFeatureGeometry: "Đ_Feature cannot be displayed_________ớ" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Đ_No configuration defined________ớ" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Đ_No results found______ớ" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Đ_View more details for the active feature_____________ớ", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Đ_View map___ớ", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Đ_Zoom in___ớ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Đ_Zoom out___ớ" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Đ_You've been successfully signed out____________ớ", // Appears when user is successfully signed-out from application
            reSignInMessage: "Đ_Click here to sign in_______ớ" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Đ_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ớ.", // Appears when preview page is loaded
            section2: "Đ_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ớ.", // Appears when preview page is loaded
            section3: "Đ_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ớ." // Appears when preview page is loaded
        }
    })
);