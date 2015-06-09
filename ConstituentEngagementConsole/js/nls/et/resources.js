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
            error: "Š_Unable to create map_______ä" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Š_No group configured_______ä" // Appears when no group is configured
        },
        webMapList: {
            owner: "Š_Owner___ä", // Appears in web-map list description panel when it is set to true
            created: "Š_Date created_____ä", // Appears in web-map list description panel when it is set to true
            modified: "Š_Date modified_____ä", // Appears in web-map list description panel when it is set to true
            description: "Š_Description____ä", // Appears in web-map list description panel when it is set to true
            snippet: "Š_Summary___ä", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Š_Access and use constraints_________ä", // Appears in web-map list description panel when it is set to true
            accessInformation: "Š_Credits___ä", // Appears in web-map list description panel when it is set to true
            tags: "Š_Tags__ä", // Appears in web-map list description panel when it is set to true
            numViews: "Š_Number of views______ä", // Appears in web-map list description panel when it is set to true
            avgRating: "Š_Rating___ä", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Š_Configured group is invalid or no items have been shared with this group yet________________________ä", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Š_Map information______ä" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Š_Sign Out___ä", // Command button to sign-out from the application
            pleaseSignInText: "Š_Please sign in_____ä", // Appears when user needs to sign-in into the application
            showSelectedOption: "Š_Show Selected_____ä", // Command button to show selected records in data-viewer
            showAllOption: "Š_Show All___ä", // Command button to show all the records in data-viewer
            clearSelectionOption: "Š_Clear Selection______ä", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Š_Zoom to Selected______ä", // Command button to zoom map to selected records
            gridViewOption: "Š_List View____ä", // Command button to display list view
            mapViewOption: "Š_Map View___ä", // Command button to display map view
            gridMapViewOption: "Š_Split View____ä", // Command button to display split view
            settingsBtnToolTip: "Š_Selection options______ä", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Š_Display options______ä", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Š_Search this layer______ä", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Š_Refresh___ä", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Š_All selections and unsaved changes will be discarded_________________ä", // Appears when user wants to do manual refresh
            signInOption: "Š_Sign In___ä" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Š_No reports available_______ä", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Š_Attachments____ä", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Š_Please enter an integer________ä ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Š_Please enter an integer________ä", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Š_Please enter a number_______ä", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Š_Please enter a number_______ä", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Š_Please enter a value_______ä", // Shown when user enters invalid string value
            invalidDate: "Š_Please enter a valid date_________ä", // Shown when user enters invalid date value
            invalidNumericRange: "Š_Please enter a value between ${minValue} and ${maxValue}__________________ä", // Shown when user enters value which is out of range
            moreInfolink: "Š_Link__ä", // Shown when value in field contains only URL.
            commentsText: "Š_Comments___ä", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Š_No comments available_______ä", // Appears when no comments are available
            noFeatureGeometry: "Š_Feature cannot be displayed_________ä" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Š_No configuration defined________ä" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Š_No results found______ä" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Š_View more details for the active feature_____________ä", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Š_View map___ä", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Š_Zoom in___ä", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Š_Zoom out___ä" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Š_You've been successfully signed out____________ä", // Appears when user is successfully signed-out from application
            reSignInMessage: "Š_Click here to sign in_______ä" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Š_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ä.", // Appears when preview page is loaded
            section2: "Š_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ä.", // Appears when preview page is loaded
            section3: "Š_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ä." // Appears when preview page is loaded
        }
    })
);