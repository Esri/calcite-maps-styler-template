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
            error: "ł_Unable to create map_______ą" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "ł_No group configured_______ą" // Appears when no group is configured
        },
        webMapList: {
            owner: "ł_Owner___ą", // Appears in web-map list description panel when it is set to true
            created: "ł_Date created_____ą", // Appears in web-map list description panel when it is set to true
            modified: "ł_Date modified_____ą", // Appears in web-map list description panel when it is set to true
            description: "ł_Description____ą", // Appears in web-map list description panel when it is set to true
            snippet: "ł_Summary___ą", // Appears in web-map list description panel when it is set to true
            licenseInfo: "ł_Access and use constraints_________ą", // Appears in web-map list description panel when it is set to true
            accessInformation: "ł_Credits___ą", // Appears in web-map list description panel when it is set to true
            tags: "ł_Tags__ą", // Appears in web-map list description panel when it is set to true
            numViews: "ł_Number of views______ą", // Appears in web-map list description panel when it is set to true
            avgRating: "ł_Rating___ą", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "ł_Configured group is invalid or no items have been shared with this group yet________________________ą", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ł_Map information______ą" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "ł_Sign Out___ą", // Command button to sign-out from the application
            pleaseSignInText: "ł_Please sign in_____ą", // Appears when user needs to sign-in into the application
            showSelectedOption: "ł_Show Selected_____ą", // Command button to show selected records in data-viewer
            showAllOption: "ł_Show All___ą", // Command button to show all the records in data-viewer
            clearSelectionOption: "ł_Clear Selection______ą", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "ł_Zoom to Selected______ą", // Command button to zoom map to selected records
            gridViewOption: "ł_List View____ą", // Command button to display list view
            mapViewOption: "ł_Map View___ą", // Command button to display map view
            gridMapViewOption: "ł_Split View____ą", // Command button to display split view
            settingsBtnToolTip: "ł_Selection options______ą", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "ł_Display options______ą", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "ł_Search this layer______ą", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "ł_Refresh___ą", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "ł_All selections and unsaved changes will be discarded_________________ą", // Appears when user wants to do manual refresh
            signInOption: "ł_Sign In___ą" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "ł_No reports available_______ą", // Appears when no issues are available in current extent
            photoAttachmentHeader: "ł_Attachments____ą", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "ł_Please enter an integer________ą ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "ł_Please enter an integer________ą", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "ł_Please enter a number_______ą", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "ł_Please enter a number_______ą", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "ł_Please enter a value_______ą", // Shown when user enters invalid string value
            invalidDate: "ł_Please enter a valid date_________ą", // Shown when user enters invalid date value
            invalidNumericRange: "ł_Please enter a value between ${minValue} and ${maxValue}__________________ą", // Shown when user enters value which is out of range
            moreInfolink: "ł_Link__ą", // Shown when value in field contains only URL.
            commentsText: "ł_Comments___ą", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ł_No comments available_______ą", // Appears when no comments are available
            noFeatureGeometry: "ł_Feature cannot be displayed_________ą" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "ł_No configuration defined________ą" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "ł_No results found______ą" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "ł_View more details for the active feature_____________ą", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "ł_View map___ą", // Display tool-tip on command button to view map panel
            zoomInToolTip: "ł_Zoom in___ą", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ł_Zoom out___ą" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "ł_You've been successfully signed out____________ą", // Appears when user is successfully signed-out from application
            reSignInMessage: "ł_Click here to sign in_______ą" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "ł_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ą.", // Appears when preview page is loaded
            section2: "ł_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ą.", // Appears when preview page is loaded
            section3: "ł_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ą." // Appears when preview page is loaded
        }
    })
);