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
            error: "ä_Unable to create map_______Ü",
            zoomInTooltip: "ä_Zoom in___Ü",  // Command button to zoom in to the map
            zoomOutTooltip: "ä_Zoom out___Ü",  // Command button to zoom out of the map
            geolocationTooltip: "ä_Current location______Ü"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "ä_No group configured_______Ü", // Shown when no group is configured in the configuration file
            submitReportButtonText: "ä_Submit a report______Ü", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "ä_List view____Ü", // Go to List view tooltip text
            noFeatureGeomtery: "ä_Feature cannot be displayed_________Ü" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "ä_Proceed as Guest______Ü", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "ä_Or__Ü", // Or text on sign in screen
            signinOptionsText: "ä_Sign in with_____Ü:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "ä_Please sign in_____Ü", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "ä_Sign in as a guest______Ü", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "ä_Sign in with Facebook_______Ü", // Command button to access the application via Facebook login
            twitterLoginTooltip: "ä_Sign in with Twitter_______Ü", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "ä_Sign in with Google+_______Ü", // Command button to access the application via Google+ login
            agolLoginTooltip: "ä_Sign in with ArcGIS_______Ü" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "ä_Owner___Ü", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "ä_Date dreated_____Ü", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "ä_Date modified_____Ü", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "ä_Description____Ü", // Shown in the 'Map information' section describing the webmap
            snippet: "ä_Summary___Ü", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "ä_Access and use constraints_________Ü", // Shown in the map information section indicating the webmap license information
            accessInformation: "ä_Credits___Ü", // Shown in the 'Map information' section indicating account credits
            tags: "ä_Tags__Ü", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "ä_Number of views______Ü", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "ä_Rating___Ü", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "ä_Configured group is invalid or no items have been shared with this group yet________________________Ü.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "ä_Map information______Ü" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "ä_No reports available in the current area_____________Ü", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "ä_Go to main list______Ü", // Tooltip for back icon in list header
            gotoMapViewTooltip: "ä_Map view___Ü" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "ä_My Reports____Ü", // Command button shown in mobile menu list
            signIn: "ä_Sign In___Ü", // Command button shown in mobile menu list and in appheader
            signOut: "ä_Sign Out___Ü", // Command button shown in mobile menu list
            help: "ä_Help__Ü", // Command button shown in mobile menu list
            signInTooltip: "ä_Sign in___Ü", // Tooltip to 'Sign in' option
            signOutTooltip: "ä_Sign out___Ü", // Tooltip  to 'Sign out' option
            myReportTooltip: "ä_View reports submitted by me_________Ü", // Tooltip  to 'My Reports' option
            helpTooltip: "ä_Help__Ü" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "ä_Details___Ü", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ä_Attachments____Ü", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ä_Browse___Ü", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ä_Location___Ü", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ä_Report It____Ü", // Command button to submit the geoform to report an issue
            cancelButton: "ä_Cancel___Ü", //Command button to close the geoform
            requiredField: "ä_(required)____Ü", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ä_Select&hellip;_____Ü", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ä_Please enter valid value_________Ü.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ä_Layer fields are not configured to capture data_______________Ü", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ä_Please enter an integer________Ü", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "ä_Please enter an integer________Ü", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "ä_Please enter a number_______Ü", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "ä_Please enter a number_______Ü", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ä_Please provide values for all required fields_______________Ü", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ä_Please select the location for your report______________Ü", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ä_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________Ü", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ä_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________Ü", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ä_Issue could not be reported_________Ü", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ä_attachment(s) selected________Ü", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ä_${failed} of ${total} attachment(s) failed to upload_________________Ü", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ä_Current location not available__________Ü",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ä_Current location is out of basemap extent_____________Ü",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ä_Report It____Ü", // Command button to open the geoform
            cancelButtonTooltip: "ä_Cancel___Ü", //tooltip for cancel button
            geoformBackButtonTooltip: "ä_Go to the report list_______Ü" //tooltip for Geoform back button

        },
        locator: {
            addressText: "ä_Address___Ü:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "ä_USNG__Ü", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "ä_MGRS__Ü", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "ä_Latitude/Longitude______Ü", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "ä_No results found______Ü", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "ä_Enter an address to search_________Ü", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "ä_Located address is out of basemap extent_____________Ü", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "ä_Search___Ü", // Tooltip for search button
            clearButtonTooltip: "ä_Clear search value______Ü" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "ä_My Reports____Ü", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "ä_My Reports____Ü", // Command button to access issues reported by the logged in user
            noResultsFound: "ä_No reports found______Ü" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "ä_Like__Ü", // Command button shown in details panel
            likeButtonTooltip: "ä_Vote for this report_______Ü",  // Tooltip for command button shown in details panel
            commentButtonLabel: "ä_Comment___Ü", // Command button shown in details panel
            commentButtonTooltip: "ä_Comment on this report________Ü", // Tooltip for command button shown in details panel
            galleryButtonLabel: "ä_Gallery___Ü", // Command button shown in details panel
            galleryButtonTooltip: "ä_See attached documents________Ü", // Tooltip for command button shown in details panel
            mapButtonLabel: "ä_View on Map____Ü", // Command button shown in details panel
            mapButtonTooltip: "ä_View the location of this report___________Ü", // Tooltip for command button shown in details panel
            commentsListHeading: "ä_Comments___Ü", // List heading for Comments section in details panel
            unableToUpdateVoteField: "ä_Your vote cannot be added at this time_____________Ü.", // Error message for feature unable to update
            gotoIssueListTooltip: "ä_Go to the report list_______Ü" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "ä_Votes for this report_______Ü" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "ä_Comment___Ü",
            commentsFormSubmitButton: "ä_Submit Comment_____Ü",
            commentsFormCancelButton: "ä_Cancel___Ü",
            errorInSubmittingComment: "ä_Comment could not be submitted__________Ü.", // Shown when user is unable to add comments
            emptyCommentMessage: "ä_Please enter a comment________Ü.", // Shown when user submits a comment without any text/character
            placeHolderText: "ä_Type a comment_____Ü", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ä_No comments available_______Ü", // Shown when no comments are available for the selected issue
            remainingTextCount: "ä_${0} character(s) remain________Ü", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ä_No__Ü" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "ä_Gallery___Ü",
            noAttachmentsAvailableText: "ä_No attachments found_______Ü" // Shown when no comments are available for the selected issue
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
