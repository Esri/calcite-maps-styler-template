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
            error: "ä_Unable to create map_______Ü" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "ä_No group configured_______Ü" // Appears when no group is configured
        },
        webMapList: {
            owner: "ä_Owner___Ü", // Appears in web-map list description panel when it is set to true
            created: "ä_Date created_____Ü", // Appears in web-map list description panel when it is set to true
            modified: "ä_Date modified_____Ü", // Appears in web-map list description panel when it is set to true
            description: "ä_Description____Ü", // Appears in web-map list description panel when it is set to true
            snippet: "ä_Summary___Ü", // Appears in web-map list description panel when it is set to true
            licenseInfo: "ä_Access and use constraints_________Ü", // Appears in web-map list description panel when it is set to true
            accessInformation: "ä_Credits___Ü", // Appears in web-map list description panel when it is set to true
            tags: "ä_Tags__Ü", // Appears in web-map list description panel when it is set to true
            numViews: "ä_Number of views______Ü", // Appears in web-map list description panel when it is set to true
            avgRating: "ä_Rating___Ü", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "ä_Configured group is invalid or no items have been shared with this group yet________________________Ü", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ä_Map information______Ü" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "ä_Sign Out___Ü", // Command button to sign-out from the application
            pleaseSignInText: "ä_Please sign in_____Ü", // Appears when user needs to sign-in into the application
            showSelectedOption: "ä_Show Selected_____Ü", // Command button to show selected records in data-viewer
            showAllOption: "ä_Show All___Ü", // Command button to show all the records in data-viewer
            clearSelectionOption: "ä_Clear Selection______Ü", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "ä_Zoom to Selected______Ü", // Command button to zoom map to selected records
            gridViewOption: "ä_List View____Ü", // Command button to display list view
            mapViewOption: "ä_Map View___Ü", // Command button to display map view
            gridMapViewOption: "ä_Split View____Ü", // Command button to display split view
            settingsBtnToolTip: "ä_Selection options______Ü", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "ä_Display options______Ü", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "ä_Search this layer______Ü", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "ä_Refresh___Ü", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "ä_All selections and unsaved changes will be discarded_________________Ü", // Appears when user wants to do manual refresh
            signInOption: "ä_Sign In___Ü" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "ä_No reports available_______Ü", // Appears when no issues are available in current extent
            photoAttachmentHeader: "ä_Attachments____Ü", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "ä_Please enter an integer________Ü ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "ä_Please enter an integer________Ü", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "ä_Please enter a number_______Ü", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "ä_Please enter a number_______Ü", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "ä_Please enter a value_______Ü", // Shown when user enters invalid string value
            invalidDate: "ä_Please enter a valid date_________Ü", // Shown when user enters invalid date value
            invalidNumericRange: "ä_Please enter a value between ${minValue} and ${maxValue}__________________Ü", // Shown when user enters value which is out of range
            moreInfolink: "ä_Link__Ü", // Shown when value in field contains only URL.
            commentsText: "ä_Comments___Ü", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ä_No comments available_______Ü", // Appears when no comments are available
            noFeatureGeometry: "ä_Feature cannot be displayed_________Ü" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "ä_No configuration defined________Ü" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "ä_No results found______Ü" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "ä_View more details for the active feature_____________Ü", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "ä_View map___Ü", // Display tool-tip on command button to view map panel
            zoomInToolTip: "ä_Zoom in___Ü", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ä_Zoom out___Ü" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "ä_You've been successfully signed out____________Ü", // Appears when user is successfully signed-out from application
            reSignInMessage: "ä_Click here to sign in_______Ü" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "ä_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________Ü.", // Appears when preview page is loaded
            section2: "ä_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________Ü.", // Appears when preview page is loaded
            section3: "ä_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________Ü." // Appears when preview page is loaded
        }
    })
);