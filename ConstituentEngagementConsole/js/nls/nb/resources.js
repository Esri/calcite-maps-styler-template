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
            error: "å_Unable to create map_______ø" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "å_No group configured_______ø" // Appears when no group is configured
        },
        webMapList: {
            owner: "å_Owner___ø", // Appears in web-map list description panel when it is set to true
            created: "å_Date created_____ø", // Appears in web-map list description panel when it is set to true
            modified: "å_Date modified_____ø", // Appears in web-map list description panel when it is set to true
            description: "å_Description____ø", // Appears in web-map list description panel when it is set to true
            snippet: "å_Summary___ø", // Appears in web-map list description panel when it is set to true
            licenseInfo: "å_Access and use constraints_________ø", // Appears in web-map list description panel when it is set to true
            accessInformation: "å_Credits___ø", // Appears in web-map list description panel when it is set to true
            tags: "å_Tags__ø", // Appears in web-map list description panel when it is set to true
            numViews: "å_Number of views______ø", // Appears in web-map list description panel when it is set to true
            avgRating: "å_Rating___ø", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "å_Configured group is invalid or no items have been shared with this group yet________________________ø", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "å_Map information______ø" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "å_Sign Out___ø", // Command button to sign-out from the application
            pleaseSignInText: "å_Please sign in_____ø", // Appears when user needs to sign-in into the application
            showSelectedOption: "å_Show Selected_____ø", // Command button to show selected records in data-viewer
            showAllOption: "å_Show All___ø", // Command button to show all the records in data-viewer
            clearSelectionOption: "å_Clear Selection______ø", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "å_Zoom to Selected______ø", // Command button to zoom map to selected records
            gridViewOption: "å_List View____ø", // Command button to display list view
            mapViewOption: "å_Map View___ø", // Command button to display map view
            gridMapViewOption: "å_Split View____ø", // Command button to display split view
            settingsBtnToolTip: "å_Selection options______ø", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "å_Display options______ø", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "å_Search this layer______ø", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "å_Refresh___ø", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "å_All selections and unsaved changes will be discarded_________________ø", // Appears when user wants to do manual refresh
            signInOption: "å_Sign In___ø" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "å_No reports available_______ø", // Appears when no issues are available in current extent
            photoAttachmentHeader: "å_Attachments____ø", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "å_Please enter an integer________ø ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "å_Please enter an integer________ø", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "å_Please enter a number_______ø", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "å_Please enter a number_______ø", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "å_Please enter a value_______ø", // Shown when user enters invalid string value
            invalidDate: "å_Please enter a valid date_________ø", // Shown when user enters invalid date value
            invalidNumericRange: "å_Please enter a value between ${minValue} and ${maxValue}__________________ø", // Shown when user enters value which is out of range
            moreInfolink: "å_Link__ø", // Shown when value in field contains only URL.
            commentsText: "å_Comments___ø", // Appears when comments are available for display in details tab
            noCommentsAvailable: "å_No comments available_______ø", // Appears when no comments are available
            noFeatureGeometry: "å_Feature cannot be displayed_________ø" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "å_No configuration defined________ø" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "å_No results found______ø" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "å_View more details for the active feature_____________ø", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "å_View map___ø", // Display tool-tip on command button to view map panel
            zoomInToolTip: "å_Zoom in___ø", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "å_Zoom out___ø" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "å_You've been successfully signed out____________ø", // Appears when user is successfully signed-out from application
            reSignInMessage: "å_Click here to sign in_______ø" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "å_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ø.", // Appears when preview page is loaded
            section2: "å_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ø.", // Appears when preview page is loaded
            section3: "å_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ø." // Appears when preview page is loaded
        }
    })
);