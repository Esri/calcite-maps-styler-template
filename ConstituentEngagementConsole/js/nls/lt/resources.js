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
            error: "Į_Unable to create map_______š" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Į_No group configured_______š" // Appears when no group is configured
        },
        webMapList: {
            owner: "Į_Owner___š", // Appears in web-map list description panel when it is set to true
            created: "Į_Date created_____š", // Appears in web-map list description panel when it is set to true
            modified: "Į_Date modified_____š", // Appears in web-map list description panel when it is set to true
            description: "Į_Description____š", // Appears in web-map list description panel when it is set to true
            snippet: "Į_Summary___š", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Į_Access and use constraints_________š", // Appears in web-map list description panel when it is set to true
            accessInformation: "Į_Credits___š", // Appears in web-map list description panel when it is set to true
            tags: "Į_Tags__š", // Appears in web-map list description panel when it is set to true
            numViews: "Į_Number of views______š", // Appears in web-map list description panel when it is set to true
            avgRating: "Į_Rating___š", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Į_Configured group is invalid or no items have been shared with this group yet________________________š", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Į_Map information______š" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Į_Sign Out___š", // Command button to sign-out from the application
            pleaseSignInText: "Į_Please sign in_____š", // Appears when user needs to sign-in into the application
            showSelectedOption: "Į_Show Selected_____š", // Command button to show selected records in data-viewer
            showAllOption: "Į_Show All___š", // Command button to show all the records in data-viewer
            clearSelectionOption: "Į_Clear Selection______š", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Į_Zoom to Selected______š", // Command button to zoom map to selected records
            gridViewOption: "Į_List View____š", // Command button to display list view
            mapViewOption: "Į_Map View___š", // Command button to display map view
            gridMapViewOption: "Į_Split View____š", // Command button to display split view
            settingsBtnToolTip: "Į_Selection options______š", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Į_Display options______š", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Į_Search this layer______š", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Į_Refresh___š", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Į_All selections and unsaved changes will be discarded_________________š", // Appears when user wants to do manual refresh
            signInOption: "Į_Sign In___š" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Į_No reports available_______š", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Į_Attachments____š", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Į_Please enter an integer________š ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Į_Please enter an integer________š", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Į_Please enter a number_______š", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Į_Please enter a number_______š", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Į_Please enter a value_______š", // Shown when user enters invalid string value
            invalidDate: "Į_Please enter a valid date_________š", // Shown when user enters invalid date value
            invalidNumericRange: "Į_Please enter a value between ${minValue} and ${maxValue}__________________š", // Shown when user enters value which is out of range
            moreInfolink: "Į_Link__š", // Shown when value in field contains only URL.
            commentsText: "Į_Comments___š", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Į_No comments available_______š", // Appears when no comments are available
            noFeatureGeometry: "Į_Feature cannot be displayed_________š" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Į_No configuration defined________š" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Į_No results found______š" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Į_View more details for the active feature_____________š", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Į_View map___š", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Į_Zoom in___š", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Į_Zoom out___š" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Į_You've been successfully signed out____________š", // Appears when user is successfully signed-out from application
            reSignInMessage: "Į_Click here to sign in_______š" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Į_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________š.", // Appears when preview page is loaded
            section2: "Į_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________š.", // Appears when preview page is loaded
            section3: "Į_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________š." // Appears when preview page is loaded
        }
    })
);