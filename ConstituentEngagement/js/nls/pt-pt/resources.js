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
            error: "ã_Unable to create map_______Ç",
            zoomInTooltip: "ã_Zoom in___Ç",  // Command button to zoom in to the map
            zoomOutTooltip: "ã_Zoom out___Ç",  // Command button to zoom out of the map
            geolocationTooltip: "ã_Current location______Ç"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "ã_No group configured_______Ç", // Shown when no group is configured in the configuration file
            submitReportButtonText: "ã_Submit a report______Ç", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "ã_List view____Ç", // Go to List view tooltip text
            noFeatureGeomtery: "ã_Feature cannot be displayed_________Ç" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "ã_Proceed as Guest______Ç", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "ã_Or__Ç", // Or text on sign in screen
            signinOptionsText: "ã_Sign in with_____Ç:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "ã_Please sign in_____Ç", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "ã_Sign in as a guest______Ç", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "ã_Sign in with Facebook_______Ç", // Command button to access the application via Facebook login
            twitterLoginTooltip: "ã_Sign in with Twitter_______Ç", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "ã_Sign in with Google+_______Ç", // Command button to access the application via Google+ login
            agolLoginTooltip: "ã_Sign in with ArcGIS_______Ç" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "ã_Owner___Ç", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "ã_Date dreated_____Ç", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "ã_Date modified_____Ç", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "ã_Description____Ç", // Shown in the 'Map information' section describing the webmap
            snippet: "ã_Summary___Ç", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "ã_Access and use constraints_________Ç", // Shown in the map information section indicating the webmap license information
            accessInformation: "ã_Credits___Ç", // Shown in the 'Map information' section indicating account credits
            tags: "ã_Tags__Ç", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "ã_Number of views______Ç", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "ã_Rating___Ç", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "ã_Configured group is invalid or no items have been shared with this group yet________________________Ç.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "ã_Map information______Ç" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "ã_No reports available in the current area_____________Ç", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "ã_Go to main list______Ç", // Tooltip for back icon in list header
            gotoMapViewTooltip: "ã_Map view___Ç" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "ã_My Reports____Ç", // Command button shown in mobile menu list
            signIn: "ã_Sign In___Ç", // Command button shown in mobile menu list and in appheader
            signOut: "ã_Sign Out___Ç", // Command button shown in mobile menu list
            help: "ã_Help__Ç", // Command button shown in mobile menu list
            signInTooltip: "ã_Sign in___Ç", // Tooltip to 'Sign in' option
            signOutTooltip: "ã_Sign out___Ç", // Tooltip  to 'Sign out' option
            myReportTooltip: "ã_View reports submitted by me_________Ç", // Tooltip  to 'My Reports' option
            helpTooltip: "ã_Help__Ç" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "ã_Details___Ç", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ã_Attachments____Ç", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ã_Browse___Ç", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ã_Location___Ç", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ã_Report It____Ç", // Command button to submit the geoform to report an issue
            cancelButton: "ã_Cancel___Ç", //Command button to close the geoform
            requiredField: "ã_(required)____Ç", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ã_Select&hellip;_____Ç", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ã_Please enter valid value_________Ç.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ã_Layer fields are not configured to capture data_______________Ç", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ã_Please enter an integer________Ç", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "ã_Please enter an integer________Ç", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "ã_Please enter a number_______Ç", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "ã_Please enter a number_______Ç", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ã_Please provide values for all required fields_______________Ç", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ã_Please select the location for your report______________Ç", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ã_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________Ç", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ã_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________Ç", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ã_Issue could not be reported_________Ç", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ã_attachment(s) selected________Ç", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ã_${failed} of ${total} attachment(s) failed to upload_________________Ç", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ã_Current location not available__________Ç",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ã_Current location is out of basemap extent_____________Ç",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ã_Report It____Ç", // Command button to open the geoform
            cancelButtonTooltip: "ã_Cancel___Ç", //tooltip for cancel button
            geoformBackButtonTooltip: "ã_Go to the report list_______Ç" //tooltip for Geoform back button

        },
        locator: {
            addressText: "ã_Address___Ç:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "ã_USNG__Ç", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "ã_MGRS__Ç", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "ã_Latitude/Longitude______Ç", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "ã_No results found______Ç", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "ã_Enter an address to search_________Ç", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "ã_Located address is out of basemap extent_____________Ç", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "ã_Search___Ç", // Tooltip for search button
            clearButtonTooltip: "ã_Clear search value______Ç" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "ã_My Reports____Ç", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "ã_My Reports____Ç", // Command button to access issues reported by the logged in user
            noResultsFound: "ã_No reports found______Ç" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "ã_Like__Ç", // Command button shown in details panel
            likeButtonTooltip: "ã_Vote for this report_______Ç",  // Tooltip for command button shown in details panel
            commentButtonLabel: "ã_Comment___Ç", // Command button shown in details panel
            commentButtonTooltip: "ã_Comment on this report________Ç", // Tooltip for command button shown in details panel
            galleryButtonLabel: "ã_Gallery___Ç", // Command button shown in details panel
            galleryButtonTooltip: "ã_See attached documents________Ç", // Tooltip for command button shown in details panel
            mapButtonLabel: "ã_View on Map____Ç", // Command button shown in details panel
            mapButtonTooltip: "ã_View the location of this report___________Ç", // Tooltip for command button shown in details panel
            commentsListHeading: "ã_Comments___Ç", // List heading for Comments section in details panel
            unableToUpdateVoteField: "ã_Your vote cannot be added at this time_____________Ç.", // Error message for feature unable to update
            gotoIssueListTooltip: "ã_Go to the report list_______Ç" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "ã_Votes for this report_______Ç" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "ã_Comment___Ç",
            commentsFormSubmitButton: "ã_Submit Comment_____Ç",
            commentsFormCancelButton: "ã_Cancel___Ç",
            errorInSubmittingComment: "ã_Comment could not be submitted__________Ç.", // Shown when user is unable to add comments
            emptyCommentMessage: "ã_Please enter a comment________Ç.", // Shown when user submits a comment without any text/character
            placeHolderText: "ã_Type a comment_____Ç", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ã_No comments available_______Ç", // Shown when no comments are available for the selected issue
            remainingTextCount: "ã_${0} character(s) remain________Ç", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ã_No__Ç" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "ã_Gallery___Ç",
            noAttachmentsAvailableText: "ã_No attachments found_______Ç" // Shown when no comments are available for the selected issue
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
