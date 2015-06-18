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
            error: "试_Unable to create map_______验" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "试_No group configured_______验" // Appears when no group is configured
        },
        webMapList: {
            owner: "试_Owner___验", // Appears in web-map list description panel when it is set to true
            created: "试_Date created_____验", // Appears in web-map list description panel when it is set to true
            modified: "试_Date modified_____验", // Appears in web-map list description panel when it is set to true
            description: "试_Description____验", // Appears in web-map list description panel when it is set to true
            snippet: "试_Summary___验", // Appears in web-map list description panel when it is set to true
            licenseInfo: "试_Access and use constraints_________验", // Appears in web-map list description panel when it is set to true
            accessInformation: "试_Credits___验", // Appears in web-map list description panel when it is set to true
            tags: "试_Tags__验", // Appears in web-map list description panel when it is set to true
            numViews: "试_Number of views______验", // Appears in web-map list description panel when it is set to true
            avgRating: "试_Rating___验", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "试_Configured group is invalid or no items have been shared with this group yet________________________验", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "试_Map information______验" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "试_Sign Out___验", // Command button to sign-out from the application
            pleaseSignInText: "试_Please sign in_____验", // Appears when user needs to sign-in into the application
            showSelectedOption: "试_Show Selected_____验", // Command button to show selected records in data-viewer
            showAllOption: "试_Show All___验", // Command button to show all the records in data-viewer
            clearSelectionOption: "试_Clear Selection______验", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "试_Zoom to Selected______验", // Command button to zoom map to selected records
            gridViewOption: "试_List View____验", // Command button to display list view
            mapViewOption: "试_Map View___验", // Command button to display map view
            gridMapViewOption: "试_Split View____验", // Command button to display split view
            settingsBtnToolTip: "试_Selection options______验", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "试_Display options______验", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "试_Search this layer______验", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "试_Refresh___验", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "试_All selections and unsaved changes will be discarded_________________验", // Appears when user wants to do manual refresh
            signInOption: "试_Sign In___验" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "试_No reports available_______验", // Appears when no issues are available in current extent
            photoAttachmentHeader: "试_Attachments____验", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "试_Please enter an integer________验 ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "试_Please enter an integer________验", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "试_Please enter a number_______验", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "试_Please enter a number_______验", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "试_Please enter a value_______验", // Shown when user enters invalid string value
            invalidDate: "试_Please enter a valid date_________验", // Shown when user enters invalid date value
            invalidNumericRange: "试_Please enter a value between ${minValue} and ${maxValue}__________________验", // Shown when user enters value which is out of range
            moreInfolink: "试_Link__验", // Shown when value in field contains only URL.
            commentsText: "试_Comments___验", // Appears when comments are available for display in details tab
            noCommentsAvailable: "试_No comments available_______验", // Appears when no comments are available
            noFeatureGeometry: "试_Feature cannot be displayed_________验" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "试_No configuration defined________验" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "试_No results found______验" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "试_View more details for the active feature_____________验", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "试_View map___验", // Display tool-tip on command button to view map panel
            zoomInToolTip: "试_Zoom in___验", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "试_Zoom out___验" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "试_You've been successfully signed out____________验", // Appears when user is successfully signed-out from application
            reSignInMessage: "试_Click here to sign in_______验" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "试_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________验.", // Appears when preview page is loaded
            section2: "试_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________验.", // Appears when preview page is loaded
            section3: "试_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________验." // Appears when preview page is loaded
        }
    })
);