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
            error: "æ_Unable to create map_______Â" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "æ_No group configured_______Â" // Appears when no group is configured
        },
        webMapList: {
            owner: "æ_Owner___Â", // Appears in web-map list description panel when it is set to true
            created: "æ_Date created_____Â", // Appears in web-map list description panel when it is set to true
            modified: "æ_Date modified_____Â", // Appears in web-map list description panel when it is set to true
            description: "æ_Description____Â", // Appears in web-map list description panel when it is set to true
            snippet: "æ_Summary___Â", // Appears in web-map list description panel when it is set to true
            licenseInfo: "æ_Access and use constraints_________Â", // Appears in web-map list description panel when it is set to true
            accessInformation: "æ_Credits___Â", // Appears in web-map list description panel when it is set to true
            tags: "æ_Tags__Â", // Appears in web-map list description panel when it is set to true
            numViews: "æ_Number of views______Â", // Appears in web-map list description panel when it is set to true
            avgRating: "æ_Rating___Â", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "æ_Configured group is invalid or no items have been shared with this group yet________________________Â", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "æ_Map information______Â" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "æ_Sign Out___Â", // Command button to sign-out from the application
            pleaseSignInText: "æ_Please sign in_____Â", // Appears when user needs to sign-in into the application
            showSelectedOption: "æ_Show Selected_____Â", // Command button to show selected records in data-viewer
            showAllOption: "æ_Show All___Â", // Command button to show all the records in data-viewer
            clearSelectionOption: "æ_Clear Selection______Â", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "æ_Zoom to Selected______Â", // Command button to zoom map to selected records
            gridViewOption: "æ_List View____Â", // Command button to display list view
            mapViewOption: "æ_Map View___Â", // Command button to display map view
            gridMapViewOption: "æ_Split View____Â", // Command button to display split view
            settingsBtnToolTip: "æ_Selection options______Â", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "æ_Display options______Â", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "æ_Search this layer______Â", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "æ_Refresh___Â", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "æ_All selections and unsaved changes will be discarded_________________Â", // Appears when user wants to do manual refresh
            signInOption: "æ_Sign In___Â" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "æ_No reports available_______Â", // Appears when no issues are available in current extent
            photoAttachmentHeader: "æ_Attachments____Â", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "æ_Please enter an integer________Â ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "æ_Please enter an integer________Â", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "æ_Please enter a number_______Â", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "æ_Please enter a number_______Â", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "æ_Please enter a value_______Â", // Shown when user enters invalid string value
            invalidDate: "æ_Please enter a valid date_________Â", // Shown when user enters invalid date value
            invalidNumericRange: "æ_Please enter a value between ${minValue} and ${maxValue}__________________Â", // Shown when user enters value which is out of range
            moreInfolink: "æ_Link__Â", // Shown when value in field contains only URL.
            commentsText: "æ_Comments___Â", // Appears when comments are available for display in details tab
            noCommentsAvailable: "æ_No comments available_______Â", // Appears when no comments are available
            noFeatureGeometry: "æ_Feature cannot be displayed_________Â" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "æ_No configuration defined________Â" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "æ_No results found______Â" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "æ_View more details for the active feature_____________Â", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "æ_View map___Â", // Display tool-tip on command button to view map panel
            zoomInToolTip: "æ_Zoom in___Â", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "æ_Zoom out___Â" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "æ_You've been successfully signed out____________Â", // Appears when user is successfully signed-out from application
            reSignInMessage: "æ_Click here to sign in_______Â" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "æ_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________Â.", // Appears when preview page is loaded
            section2: "æ_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________Â.", // Appears when preview page is loaded
            section3: "æ_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________Â." // Appears when preview page is loaded
        }
    })
);