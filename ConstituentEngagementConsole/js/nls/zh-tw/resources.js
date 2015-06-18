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
            error: "試_Unable to create map_______驗" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "試_No group configured_______驗" // Appears when no group is configured
        },
        webMapList: {
            owner: "試_Owner___驗", // Appears in web-map list description panel when it is set to true
            created: "試_Date created_____驗", // Appears in web-map list description panel when it is set to true
            modified: "試_Date modified_____驗", // Appears in web-map list description panel when it is set to true
            description: "試_Description____驗", // Appears in web-map list description panel when it is set to true
            snippet: "試_Summary___驗", // Appears in web-map list description panel when it is set to true
            licenseInfo: "試_Access and use constraints_________驗", // Appears in web-map list description panel when it is set to true
            accessInformation: "試_Credits___驗", // Appears in web-map list description panel when it is set to true
            tags: "試_Tags__驗", // Appears in web-map list description panel when it is set to true
            numViews: "試_Number of views______驗", // Appears in web-map list description panel when it is set to true
            avgRating: "試_Rating___驗", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "試_Configured group is invalid or no items have been shared with this group yet________________________驗", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "試_Map information______驗" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "試_Sign Out___驗", // Command button to sign-out from the application
            pleaseSignInText: "試_Please sign in_____驗", // Appears when user needs to sign-in into the application
            showSelectedOption: "試_Show Selected_____驗", // Command button to show selected records in data-viewer
            showAllOption: "試_Show All___驗", // Command button to show all the records in data-viewer
            clearSelectionOption: "試_Clear Selection______驗", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "試_Zoom to Selected______驗", // Command button to zoom map to selected records
            gridViewOption: "試_List View____驗", // Command button to display list view
            mapViewOption: "試_Map View___驗", // Command button to display map view
            gridMapViewOption: "試_Split View____驗", // Command button to display split view
            settingsBtnToolTip: "試_Selection options______驗", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "試_Display options______驗", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "試_Search this layer______驗", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "試_Refresh___驗", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "試_All selections and unsaved changes will be discarded_________________驗", // Appears when user wants to do manual refresh
            signInOption: "試_Sign In___驗" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "試_No reports available_______驗", // Appears when no issues are available in current extent
            photoAttachmentHeader: "試_Attachments____驗", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "試_Please enter an integer________驗 ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "試_Please enter an integer________驗", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "試_Please enter a number_______驗", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "試_Please enter a number_______驗", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "試_Please enter a value_______驗", // Shown when user enters invalid string value
            invalidDate: "試_Please enter a valid date_________驗", // Shown when user enters invalid date value
            invalidNumericRange: "試_Please enter a value between ${minValue} and ${maxValue}__________________驗", // Shown when user enters value which is out of range
            moreInfolink: "試_Link__驗", // Shown when value in field contains only URL.
            commentsText: "試_Comments___驗", // Appears when comments are available for display in details tab
            noCommentsAvailable: "試_No comments available_______驗", // Appears when no comments are available
            noFeatureGeometry: "試_Feature cannot be displayed_________驗" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "試_No configuration defined________驗" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "試_No results found______驗" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "試_View more details for the active feature_____________驗", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "試_View map___驗", // Display tool-tip on command button to view map panel
            zoomInToolTip: "試_Zoom in___驗", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "試_Zoom out___驗" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "試_You've been successfully signed out____________驗", // Appears when user is successfully signed-out from application
            reSignInMessage: "試_Click here to sign in_______驗" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "試_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________驗.", // Appears when preview page is loaded
            section2: "試_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________驗.", // Appears when preview page is loaded
            section3: "試_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________驗." // Appears when preview page is loaded
        }
    })
);