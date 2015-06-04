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
define(({
    map: {
        error: "Unable to create map"
    },
    main: {
        noGroup: "No group configured"
    },
    webMapList: {
        owner: "Owner",
        created: "Date created", 
        modified: "Date modified", 
        description: "Description", 
        snippet: "Summary", 
        licenseInfo: "Access and use constraints", 
        accessInformation: "Credits", 
        tags: "Tags", 
        numViews: "Number of views", 
        avgRating: "Rating", 
        noWebMapInGroup: "Configured group is invalid or no items have been shared with this group yet", 
        infoBtnToolTip: "Map information" 
    },
    applicationHeader: {
        signOutOption: "Sign Out", 
        pleaseSignInText: "Please sign in", 
        showSelectedOption: "Show Selected", 
        showAllOption: "Show All", 
        clearSelectionOption: "Clear Selection", 
        zoomToSelectedOption: "Zoom to Selected", 
        gridViewOption: "List View", 
        mapViewOption: "Map View", 
        gridMapViewOption: "Split View", 
        settingsBtnToolTip: "Selection options", 
        viewModeBtnToolTip: "Display options", 
        searchModeBtnToolTip: "Search this layer", 
        manualRefreshBtnToolTip: "Refresh", 
        confirmManualRefeshText: "All selections and unsaved changes will be discarded", 
        signInOption: "Sign In" 
    },
    dataviewer: {
        noIssuesReported: "No reports available", 
        photoAttachmentHeader: "Attachments", 
        invalidSmallNumber: "Please enter an integer ", 
        invalidNumber: "Please enter an integer", 
        invalidFloat: "Please enter a number", 
        invalidDouble: "Please enter a number",
        invalidString: "Please enter a value", 
        invalidDate: "Please enter a valid date",
        invalidNumericRange: "Please enter a value between ${minValue} and ${maxValue}",
        moreInfolink: "Link",
        commentsText: "Comments",
        noCommentsAvailable: "No comments available",
        noFeatureGeometry: "Feature cannot be displayed"
    },
    config: {
        configNotDefined: "No configuration defined"
    },
    searchPanel: {
        noResultsFound: "No results found"
    },
    mapViewer: {
        detailsBtnToolTip: "View more details for the active feature",
        locationBtnToolTip: "View map", 
        zoomInToolTip: "Zoom in", 
        zoomOutToolTip: "Zoom out"
    },
    signOutPage: {
        signOutMessage: "You've been successfully signed out",
        reSignInMessage: "Click here to sign in"
    },
    preview: {
        section1: "Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app.",
        section2: "The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility.",
        section3: "The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation."
    }
}));