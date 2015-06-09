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
            error: "Å_Unable to create map_______ö" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Å_No group configured_______ö" // Appears when no group is configured
        },
        webMapList: {
            owner: "Å_Owner___ö", // Appears in web-map list description panel when it is set to true
            created: "Å_Date created_____ö", // Appears in web-map list description panel when it is set to true
            modified: "Å_Date modified_____ö", // Appears in web-map list description panel when it is set to true
            description: "Å_Description____ö", // Appears in web-map list description panel when it is set to true
            snippet: "Å_Summary___ö", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Å_Access and use constraints_________ö", // Appears in web-map list description panel when it is set to true
            accessInformation: "Å_Credits___ö", // Appears in web-map list description panel when it is set to true
            tags: "Å_Tags__ö", // Appears in web-map list description panel when it is set to true
            numViews: "Å_Number of views______ö", // Appears in web-map list description panel when it is set to true
            avgRating: "Å_Rating___ö", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Å_Configured group is invalid or no items have been shared with this group yet________________________ö", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Å_Map information______ö" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Å_Sign Out___ö", // Command button to sign-out from the application
            pleaseSignInText: "Å_Please sign in_____ö", // Appears when user needs to sign-in into the application
            showSelectedOption: "Å_Show Selected_____ö", // Command button to show selected records in data-viewer
            showAllOption: "Å_Show All___ö", // Command button to show all the records in data-viewer
            clearSelectionOption: "Å_Clear Selection______ö", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Å_Zoom to Selected______ö", // Command button to zoom map to selected records
            gridViewOption: "Å_List View____ö", // Command button to display list view
            mapViewOption: "Å_Map View___ö", // Command button to display map view
            gridMapViewOption: "Å_Split View____ö", // Command button to display split view
            settingsBtnToolTip: "Å_Selection options______ö", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Å_Display options______ö", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Å_Search this layer______ö", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Å_Refresh___ö", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Å_All selections and unsaved changes will be discarded_________________ö", // Appears when user wants to do manual refresh
            signInOption: "Å_Sign In___ö" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Å_No reports available_______ö", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Å_Attachments____ö", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Å_Please enter an integer________ö ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Å_Please enter an integer________ö", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Å_Please enter a number_______ö", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Å_Please enter a number_______ö", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Å_Please enter a value_______ö", // Shown when user enters invalid string value
            invalidDate: "Å_Please enter a valid date_________ö", // Shown when user enters invalid date value
            invalidNumericRange: "Å_Please enter a value between ${minValue} and ${maxValue}__________________ö", // Shown when user enters value which is out of range
            moreInfolink: "Å_Link__ö", // Shown when value in field contains only URL.
            commentsText: "Å_Comments___ö", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Å_No comments available_______ö", // Appears when no comments are available
            noFeatureGeometry: "Å_Feature cannot be displayed_________ö" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Å_No configuration defined________ö" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Å_No results found______ö" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Å_View more details for the active feature_____________ö", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Å_View map___ö", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Å_Zoom in___ö", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Å_Zoom out___ö" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Å_You've been successfully signed out____________ö", // Appears when user is successfully signed-out from application
            reSignInMessage: "Å_Click here to sign in_______ö" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Å_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ö.", // Appears when preview page is loaded
            section2: "Å_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ö.", // Appears when preview page is loaded
            section3: "Å_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ö." // Appears when preview page is loaded
        }
    })
);