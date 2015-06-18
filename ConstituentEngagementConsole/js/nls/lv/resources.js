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
            error: "ķ_Unable to create map_______ū" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "ķ_No group configured_______ū" // Appears when no group is configured
        },
        webMapList: {
            owner: "ķ_Owner___ū", // Appears in web-map list description panel when it is set to true
            created: "ķ_Date created_____ū", // Appears in web-map list description panel when it is set to true
            modified: "ķ_Date modified_____ū", // Appears in web-map list description panel when it is set to true
            description: "ķ_Description____ū", // Appears in web-map list description panel when it is set to true
            snippet: "ķ_Summary___ū", // Appears in web-map list description panel when it is set to true
            licenseInfo: "ķ_Access and use constraints_________ū", // Appears in web-map list description panel when it is set to true
            accessInformation: "ķ_Credits___ū", // Appears in web-map list description panel when it is set to true
            tags: "ķ_Tags__ū", // Appears in web-map list description panel when it is set to true
            numViews: "ķ_Number of views______ū", // Appears in web-map list description panel when it is set to true
            avgRating: "ķ_Rating___ū", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "ķ_Configured group is invalid or no items have been shared with this group yet________________________ū", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ķ_Map information______ū" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "ķ_Sign Out___ū", // Command button to sign-out from the application
            pleaseSignInText: "ķ_Please sign in_____ū", // Appears when user needs to sign-in into the application
            showSelectedOption: "ķ_Show Selected_____ū", // Command button to show selected records in data-viewer
            showAllOption: "ķ_Show All___ū", // Command button to show all the records in data-viewer
            clearSelectionOption: "ķ_Clear Selection______ū", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "ķ_Zoom to Selected______ū", // Command button to zoom map to selected records
            gridViewOption: "ķ_List View____ū", // Command button to display list view
            mapViewOption: "ķ_Map View___ū", // Command button to display map view
            gridMapViewOption: "ķ_Split View____ū", // Command button to display split view
            settingsBtnToolTip: "ķ_Selection options______ū", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "ķ_Display options______ū", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "ķ_Search this layer______ū", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "ķ_Refresh___ū", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "ķ_All selections and unsaved changes will be discarded_________________ū", // Appears when user wants to do manual refresh
            signInOption: "ķ_Sign In___ū" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "ķ_No reports available_______ū", // Appears when no issues are available in current extent
            photoAttachmentHeader: "ķ_Attachments____ū", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "ķ_Please enter an integer________ū ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "ķ_Please enter an integer________ū", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "ķ_Please enter a number_______ū", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "ķ_Please enter a number_______ū", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "ķ_Please enter a value_______ū", // Shown when user enters invalid string value
            invalidDate: "ķ_Please enter a valid date_________ū", // Shown when user enters invalid date value
            invalidNumericRange: "ķ_Please enter a value between ${minValue} and ${maxValue}__________________ū", // Shown when user enters value which is out of range
            moreInfolink: "ķ_Link__ū", // Shown when value in field contains only URL.
            commentsText: "ķ_Comments___ū", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ķ_No comments available_______ū", // Appears when no comments are available
            noFeatureGeometry: "ķ_Feature cannot be displayed_________ū" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "ķ_No configuration defined________ū" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "ķ_No results found______ū" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "ķ_View more details for the active feature_____________ū", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "ķ_View map___ū", // Display tool-tip on command button to view map panel
            zoomInToolTip: "ķ_Zoom in___ū", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ķ_Zoom out___ū" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "ķ_You've been successfully signed out____________ū", // Appears when user is successfully signed-out from application
            reSignInMessage: "ķ_Click here to sign in_______ū" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "ķ_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ū.", // Appears when preview page is loaded
            section2: "ķ_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ū.", // Appears when preview page is loaded
            section3: "ķ_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ū." // Appears when preview page is loaded
        }
    })
);