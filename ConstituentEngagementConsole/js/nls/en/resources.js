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
        created: "Created",
        modified: "Modified",
        description: "Description",
        snippet: "Summary",
        licenseInfo: "Access and use constraints",
        accessInformation: "Credits",
        tags: "Tags",
        numViews: "Number of views",
        avgRating: "Rating",
        noWebMapInGroup: "Configured group is invalid or no items have been shared with this group yet",
        infoBtnToolTip: "Map Information"
    },
    applicationHeader: {
        signOutOption: "Sign Out",
        pleaseSignInText: "Please sign in",
        showSelectedOption: "Show Selected",
        showAllOption: "Show All",
        clearSelectionOption: "Clear Selection",
        zoomToSelectedOption: "Zoom To Selected",
        gridViewOption: "List View",
        mapViewOption: "Map View",
        gridMapViewOption: "Split View",
        settingsBtnToolTip: "Selection Options",
        viewModeBtnToolTip: "View Options",
        searchModeBtnToolTip: "Layer Search",
        manualRefreshBtnToolTip: "Refresh",
        confirmManualRefeshText: "All changes/selections will be lost",
        signInOption: "Sign in"
    },
    dataviewer: {
        noIssuesReported: "No issues reported for this layer",
        activateFeature: "Please activate a single feature to view the item details",
        photoAttachmentHeader: "Photo",
        invalidSmallNumber: "Please enter valid integer value between -32768 and 32767",
        invalidNumber: "Please enter valid integer value between -2147483648 and 2147483647",
        invalidFloat: "Please enter valid floating point value between -3.4E38 and 1.2E38",
        invalidDouble: "Please enter valid double value between -2.2E308 and 1.8E308",
        invalidString: "Please enter valid value",
        invalidDate: "Please enter valid date",
        invalidNumericRange: "Minimum value ${minValue} and Maximum value ${maxValue}",
        moreInfolink: "Link"
    },
    config: {
        configNotDefined: "No configuration defined"
    },
    searchPanel: {
        noResultsFound: "No results found"
    },
    mapViewer: {
        detailsBtnToolTip: "View details for a single activated feature",
        locationBtnToolTip: "View Map",
        zoomInToolTip: "Zoom In",
        zoomOutToolTip: "Zoom Out"
    },
    signOutPage: {
        signOutMessage: "You've been successfully signed out.",
        reSignInMessage: "Click here to sign in"
    }
}));
