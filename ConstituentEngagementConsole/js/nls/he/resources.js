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
            error: "כן_Unable to create map_______ש" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "כן_No group configured_______ש" // Appears when no group is configured
        },
        webMapList: {
            owner: "כן_Owner___ש", // Appears in web-map list description panel when it is set to true
            created: "כן_Date created_____ש", // Appears in web-map list description panel when it is set to true
            modified: "כן_Date modified_____ש", // Appears in web-map list description panel when it is set to true
            description: "כן_Description____ש", // Appears in web-map list description panel when it is set to true
            snippet: "כן_Summary___ש", // Appears in web-map list description panel when it is set to true
            licenseInfo: "כן_Access and use constraints_________ש", // Appears in web-map list description panel when it is set to true
            accessInformation: "כן_Credits___ש", // Appears in web-map list description panel when it is set to true
            tags: "כן_Tags__ש", // Appears in web-map list description panel when it is set to true
            numViews: "כן_Number of views______ש", // Appears in web-map list description panel when it is set to true
            avgRating: "כן_Rating___ש", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "כן_Configured group is invalid or no items have been shared with this group yet________________________ש", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "כן_Map information______ש" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "כן_Sign Out___ש", // Command button to sign-out from the application
            pleaseSignInText: "כן_Please sign in_____ש", // Appears when user needs to sign-in into the application
            showSelectedOption: "כן_Show Selected_____ש", // Command button to show selected records in data-viewer
            showAllOption: "כן_Show All___ש", // Command button to show all the records in data-viewer
            clearSelectionOption: "כן_Clear Selection______ש", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "כן_Zoom to Selected______ש", // Command button to zoom map to selected records
            gridViewOption: "כן_List View____ש", // Command button to display list view
            mapViewOption: "כן_Map View___ש", // Command button to display map view
            gridMapViewOption: "כן_Split View____ש", // Command button to display split view
            settingsBtnToolTip: "כן_Selection options______ש", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "כן_Display options______ש", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "כן_Search this layer______ש", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "כן_Refresh___ש", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "כן_All selections and unsaved changes will be discarded_________________ש", // Appears when user wants to do manual refresh
            signInOption: "כן_Sign In___ש" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "כן_No reports available_______ש", // Appears when no issues are available in current extent
            photoAttachmentHeader: "כן_Attachments____ש", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "כן_Please enter an integer________ש ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "כן_Please enter an integer________ש", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "כן_Please enter a number_______ש", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "כן_Please enter a number_______ש", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "כן_Please enter a value_______ש", // Shown when user enters invalid string value
            invalidDate: "כן_Please enter a valid date_________ש", // Shown when user enters invalid date value
            invalidNumericRange: "כן_Please enter a value between ${minValue} and ${maxValue}__________________ש", // Shown when user enters value which is out of range
            moreInfolink: "כן_Link__ש", // Shown when value in field contains only URL.
            commentsText: "כן_Comments___ש", // Appears when comments are available for display in details tab
            noCommentsAvailable: "כן_No comments available_______ש", // Appears when no comments are available
            noFeatureGeometry: "כן_Feature cannot be displayed_________ש" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "כן_No configuration defined________ש" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "כן_No results found______ש" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "כן_View more details for the active feature_____________ש", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "כן_View map___ש", // Display tool-tip on command button to view map panel
            zoomInToolTip: "כן_Zoom in___ש", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "כן_Zoom out___ש" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "כן_You've been successfully signed out____________ש", // Appears when user is successfully signed-out from application
            reSignInMessage: "כן_Click here to sign in_______ש" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "כן_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________ש.", // Appears when preview page is loaded
            section2: "כן_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________ש.", // Appears when preview page is loaded
            section3: "כן_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________ש." // Appears when preview page is loaded
        }
    })
);