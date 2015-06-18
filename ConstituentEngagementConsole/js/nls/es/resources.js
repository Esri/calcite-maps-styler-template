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
            error: "á_Unable to create map_______Ó" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "á_No group configured_______Ó" // Appears when no group is configured
        },
        webMapList: {
            owner: "á_Owner___Ó", // Appears in web-map list description panel when it is set to true
            created: "á_Date created_____Ó", // Appears in web-map list description panel when it is set to true
            modified: "á_Date modified_____Ó", // Appears in web-map list description panel when it is set to true
            description: "á_Description____Ó", // Appears in web-map list description panel when it is set to true
            snippet: "á_Summary___Ó", // Appears in web-map list description panel when it is set to true
            licenseInfo: "á_Access and use constraints_________Ó", // Appears in web-map list description panel when it is set to true
            accessInformation: "á_Credits___Ó", // Appears in web-map list description panel when it is set to true
            tags: "á_Tags__Ó", // Appears in web-map list description panel when it is set to true
            numViews: "á_Number of views______Ó", // Appears in web-map list description panel when it is set to true
            avgRating: "á_Rating___Ó", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "á_Configured group is invalid or no items have been shared with this group yet________________________Ó", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "á_Map information______Ó" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "á_Sign Out___Ó", // Command button to sign-out from the application
            pleaseSignInText: "á_Please sign in_____Ó", // Appears when user needs to sign-in into the application
            showSelectedOption: "á_Show Selected_____Ó", // Command button to show selected records in data-viewer
            showAllOption: "á_Show All___Ó", // Command button to show all the records in data-viewer
            clearSelectionOption: "á_Clear Selection______Ó", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "á_Zoom to Selected______Ó", // Command button to zoom map to selected records
            gridViewOption: "á_List View____Ó", // Command button to display list view
            mapViewOption: "á_Map View___Ó", // Command button to display map view
            gridMapViewOption: "á_Split View____Ó", // Command button to display split view
            settingsBtnToolTip: "á_Selection options______Ó", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "á_Display options______Ó", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "á_Search this layer______Ó", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "á_Refresh___Ó", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "á_All selections and unsaved changes will be discarded_________________Ó", // Appears when user wants to do manual refresh
            signInOption: "á_Sign In___Ó" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "á_No reports available_______Ó", // Appears when no issues are available in current extent
            photoAttachmentHeader: "á_Attachments____Ó", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "á_Please enter an integer________Ó ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "á_Please enter an integer________Ó", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "á_Please enter a number_______Ó", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "á_Please enter a number_______Ó", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "á_Please enter a value_______Ó", // Shown when user enters invalid string value
            invalidDate: "á_Please enter a valid date_________Ó", // Shown when user enters invalid date value
            invalidNumericRange: "á_Please enter a value between ${minValue} and ${maxValue}__________________Ó", // Shown when user enters value which is out of range
            moreInfolink: "á_Link__Ó", // Shown when value in field contains only URL.
            commentsText: "á_Comments___Ó", // Appears when comments are available for display in details tab
            noCommentsAvailable: "á_No comments available_______Ó", // Appears when no comments are available
            noFeatureGeometry: "á_Feature cannot be displayed_________Ó" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "á_No configuration defined________Ó" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "á_No results found______Ó" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "á_View more details for the active feature_____________Ó", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "á_View map___Ó", // Display tool-tip on command button to view map panel
            zoomInToolTip: "á_Zoom in___Ó", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "á_Zoom out___Ó" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "á_You've been successfully signed out____________Ó", // Appears when user is successfully signed-out from application
            reSignInMessage: "á_Click here to sign in_______Ó" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "á_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________Ó.", // Appears when preview page is loaded
            section2: "á_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________Ó.", // Appears when preview page is loaded
            section3: "á_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________Ó." // Appears when preview page is loaded
        }
    })
);