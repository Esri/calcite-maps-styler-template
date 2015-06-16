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
define({
    root: ({
        map: {
            error: "ø_Unable to create map_______å",
            zoomInTooltip: "ø_Zoom in___å",  // Command button to zoom in to the map
            zoomOutTooltip: "ø_Zoom out___å",  // Command button to zoom out of the map
            geolocationTooltip: "ø_Current location______å"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "ø_No group configured_______å", // Shown when no group is configured in the configuration file
            submitReportButtonText: "ø_Submit a report______å", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "ø_List view____å", // Go to List view tooltip text
            noFeatureGeomtery: "ø_Feature cannot be displayed_________å" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "ø_Proceed as Guest______å", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "ø_Or__å", // Or text on sign in screen
            signinOptionsText: "ø_Sign in with_____å:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "ø_Please sign in_____å", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "ø_Sign in as a guest______å", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "ø_Sign in with Facebook_______å", // Command button to access the application via Facebook login
            twitterLoginTooltip: "ø_Sign in with Twitter_______å", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "ø_Sign in with Google+_______å", // Command button to access the application via Google+ login
            agolLoginTooltip: "ø_Sign in with ArcGIS_______å" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "ø_Owner___å", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "ø_Date dreated_____å", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "ø_Date modified_____å", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "ø_Description____å", // Shown in the 'Map information' section describing the webmap
            snippet: "ø_Summary___å", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "ø_Access and use constraints_________å", // Shown in the map information section indicating the webmap license information
            accessInformation: "ø_Credits___å", // Shown in the 'Map information' section indicating account credits
            tags: "ø_Tags__å", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "ø_Number of views______å", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "ø_Rating___å", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "ø_Configured group is invalid or no items have been shared with this group yet________________________å.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "ø_Map information______å" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "ø_No reports available in the current area_____________å", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "ø_Go to main list______å", // Tooltip for back icon in list header
            gotoMapViewTooltip: "ø_Map view___å" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "ø_My Reports____å", // Command button shown in mobile menu list
            signIn: "ø_Sign In___å", // Command button shown in mobile menu list and in appheader
            signOut: "ø_Sign Out___å", // Command button shown in mobile menu list
            help: "ø_Help__å", // Command button shown in mobile menu list
            signInTooltip: "ø_Sign in___å", // Tooltip to 'Sign in' option
            signOutTooltip: "ø_Sign out___å", // Tooltip  to 'Sign out' option
            myReportTooltip: "ø_View reports submitted by me_________å", // Tooltip  to 'My Reports' option
            helpTooltip: "ø_Help__å" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "ø_Details___å", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ø_Attachments____å", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ø_Browse___å", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ø_Location___å", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ø_Report It____å", // Command button to submit the geoform to report an issue
            cancelButton: "ø_Cancel___å", //Command button to close the geoform
            requiredField: "ø_(required)____å", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ø_Select&hellip;_____å", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ø_Please enter valid value_________å.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ø_Layer fields are not configured to capture data_______________å", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ø_Please enter an integer________å", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "ø_Please enter an integer________å", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "ø_Please enter a number_______å", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "ø_Please enter a number_______å", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ø_Please provide values for all required fields_______________å", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ø_Please select the location for your report______________å", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________å", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________å", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ø_Issue could not be reported_________å", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ø_attachment(s) selected________å", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ø_${failed} of ${total} attachment(s) failed to upload_________________å", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ø_Current location not available__________å",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ø_Current location is out of basemap extent_____________å",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ø_Report It____å", // Command button to open the geoform
            cancelButtonTooltip: "ø_Cancel___å", //tooltip for cancel button
            geoformBackButtonTooltip: "ø_Go to the report list_______å" //tooltip for Geoform back button

        },
        locator: {
            addressText: "ø_Address___å:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "ø_USNG__å", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "ø_MGRS__å", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "ø_Latitude/Longitude______å", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "ø_No results found______å", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "ø_Enter an address to search_________å", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "ø_Located address is out of basemap extent_____________å", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "ø_Search___å", // Tooltip for search button
            clearButtonTooltip: "ø_Clear search value______å" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "ø_My Reports____å", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "ø_My Reports____å", // Command button to access issues reported by the logged in user
            noResultsFound: "ø_No reports found______å" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "ø_Like__å", // Command button shown in details panel
            likeButtonTooltip: "ø_Vote for this report_______å",  // Tooltip for command button shown in details panel
            commentButtonLabel: "ø_Comment___å", // Command button shown in details panel
            commentButtonTooltip: "ø_Comment on this report________å", // Tooltip for command button shown in details panel
            galleryButtonLabel: "ø_Gallery___å", // Command button shown in details panel
            galleryButtonTooltip: "ø_See attached documents________å", // Tooltip for command button shown in details panel
            mapButtonLabel: "ø_View on Map____å", // Command button shown in details panel
            mapButtonTooltip: "ø_View the location of this report___________å", // Tooltip for command button shown in details panel
            commentsListHeading: "ø_Comments___å", // List heading for Comments section in details panel
            unableToUpdateVoteField: "ø_Your vote cannot be added at this time_____________å.", // Error message for feature unable to update
            gotoIssueListTooltip: "ø_Go to the report list_______å" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "ø_Votes for this report_______å" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "ø_Comment___å",
            commentsFormSubmitButton: "ø_Submit Comment_____å",
            commentsFormCancelButton: "ø_Cancel___å",
            errorInSubmittingComment: "ø_Comment could not be submitted__________å.", // Shown when user is unable to add comments
            emptyCommentMessage: "ø_Please enter a comment________å.", // Shown when user submits a comment without any text/character
            placeHolderText: "ø_Type a comment_____å", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ø_No comments available_______å", // Shown when no comments are available for the selected issue
            remainingTextCount: "ø_${0} character(s) remain________å", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ø_No__å" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "ø_Gallery___å",
            noAttachmentsAvailableText: "ø_No attachments found_______å" // Shown when no comments are available for the selected issue
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "en": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nb": 1,
    "nl": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});
