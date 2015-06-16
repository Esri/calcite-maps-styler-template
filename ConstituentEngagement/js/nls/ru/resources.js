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
            error: "Ж_Unable to create map_______Я",
            zoomInTooltip: "Ж_Zoom in___Я",  // Command button to zoom in to the map
            zoomOutTooltip: "Ж_Zoom out___Я",  // Command button to zoom out of the map
            geolocationTooltip: "Ж_Current location______Я"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "Ж_No group configured_______Я", // Shown when no group is configured in the configuration file
            submitReportButtonText: "Ж_Submit a report______Я", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "Ж_List view____Я", // Go to List view tooltip text
            noFeatureGeomtery: "Ж_Feature cannot be displayed_________Я" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "Ж_Proceed as Guest______Я", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "Ж_Or__Я", // Or text on sign in screen
            signinOptionsText: "Ж_Sign in with_____Я:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "Ж_Please sign in_____Я", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "Ж_Sign in as a guest______Я", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "Ж_Sign in with Facebook_______Я", // Command button to access the application via Facebook login
            twitterLoginTooltip: "Ж_Sign in with Twitter_______Я", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "Ж_Sign in with Google+_______Я", // Command button to access the application via Google+ login
            agolLoginTooltip: "Ж_Sign in with ArcGIS_______Я" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "Ж_Owner___Я", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "Ж_Date dreated_____Я", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "Ж_Date modified_____Я", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "Ж_Description____Я", // Shown in the 'Map information' section describing the webmap
            snippet: "Ж_Summary___Я", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "Ж_Access and use constraints_________Я", // Shown in the map information section indicating the webmap license information
            accessInformation: "Ж_Credits___Я", // Shown in the 'Map information' section indicating account credits
            tags: "Ж_Tags__Я", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "Ж_Number of views______Я", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "Ж_Rating___Я", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "Ж_Configured group is invalid or no items have been shared with this group yet________________________Я.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "Ж_Map information______Я" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "Ж_No reports available in the current area_____________Я", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "Ж_Go to main list______Я", // Tooltip for back icon in list header
            gotoMapViewTooltip: "Ж_Map view___Я" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "Ж_My Reports____Я", // Command button shown in mobile menu list
            signIn: "Ж_Sign In___Я", // Command button shown in mobile menu list and in appheader
            signOut: "Ж_Sign Out___Я", // Command button shown in mobile menu list
            help: "Ж_Help__Я", // Command button shown in mobile menu list
            signInTooltip: "Ж_Sign in___Я", // Tooltip to 'Sign in' option
            signOutTooltip: "Ж_Sign out___Я", // Tooltip  to 'Sign out' option
            myReportTooltip: "Ж_View reports submitted by me_________Я", // Tooltip  to 'My Reports' option
            helpTooltip: "Ж_Help__Я" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "Ж_Details___Я", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ж_Attachments____Я", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ж_Browse___Я", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ж_Location___Я", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ж_Report It____Я", // Command button to submit the geoform to report an issue
            cancelButton: "Ж_Cancel___Я", //Command button to close the geoform
            requiredField: "Ж_(required)____Я", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ж_Select&hellip;_____Я", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ж_Please enter valid value_________Я.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ж_Layer fields are not configured to capture data_______________Я", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ж_Please enter an integer________Я", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Ж_Please enter an integer________Я", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Ж_Please enter a number_______Я", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Ж_Please enter a number_______Я", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ж_Please provide values for all required fields_______________Я", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ж_Please select the location for your report______________Я", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ж_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________Я", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ж_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________Я", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ж_Issue could not be reported_________Я", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ж_attachment(s) selected________Я", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ж_${failed} of ${total} attachment(s) failed to upload_________________Я", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ж_Current location not available__________Я",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ж_Current location is out of basemap extent_____________Я",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ж_Report It____Я", // Command button to open the geoform
            cancelButtonTooltip: "Ж_Cancel___Я", //tooltip for cancel button
            geoformBackButtonTooltip: "Ж_Go to the report list_______Я" //tooltip for Geoform back button

        },
        locator: {
            addressText: "Ж_Address___Я:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "Ж_USNG__Я", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "Ж_MGRS__Я", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "Ж_Latitude/Longitude______Я", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "Ж_No results found______Я", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "Ж_Enter an address to search_________Я", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "Ж_Located address is out of basemap extent_____________Я", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "Ж_Search___Я", // Tooltip for search button
            clearButtonTooltip: "Ж_Clear search value______Я" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "Ж_My Reports____Я", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "Ж_My Reports____Я", // Command button to access issues reported by the logged in user
            noResultsFound: "Ж_No reports found______Я" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "Ж_Like__Я", // Command button shown in details panel
            likeButtonTooltip: "Ж_Vote for this report_______Я",  // Tooltip for command button shown in details panel
            commentButtonLabel: "Ж_Comment___Я", // Command button shown in details panel
            commentButtonTooltip: "Ж_Comment on this report________Я", // Tooltip for command button shown in details panel
            galleryButtonLabel: "Ж_Gallery___Я", // Command button shown in details panel
            galleryButtonTooltip: "Ж_See attached documents________Я", // Tooltip for command button shown in details panel
            mapButtonLabel: "Ж_View on Map____Я", // Command button shown in details panel
            mapButtonTooltip: "Ж_View the location of this report___________Я", // Tooltip for command button shown in details panel
            commentsListHeading: "Ж_Comments___Я", // List heading for Comments section in details panel
            unableToUpdateVoteField: "Ж_Your vote cannot be added at this time_____________Я.", // Error message for feature unable to update
            gotoIssueListTooltip: "Ж_Go to the report list_______Я" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "Ж_Votes for this report_______Я" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "Ж_Comment___Я",
            commentsFormSubmitButton: "Ж_Submit Comment_____Я",
            commentsFormCancelButton: "Ж_Cancel___Я",
            errorInSubmittingComment: "Ж_Comment could not be submitted__________Я.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ж_Please enter a comment________Я.", // Shown when user submits a comment without any text/character
            placeHolderText: "Ж_Type a comment_____Я", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ж_No comments available_______Я", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ж_${0} character(s) remain________Я", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ж_No__Я" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "Ж_Gallery___Я",
            noAttachmentsAvailableText: "Ж_No attachments found_______Я" // Shown when no comments are available for the selected issue
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
