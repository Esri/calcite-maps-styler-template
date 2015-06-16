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
            error: "ก้_Unable to create map_______ษฺ",
            zoomInTooltip: "ก้_Zoom in___ษฺ",  // Command button to zoom in to the map
            zoomOutTooltip: "ก้_Zoom out___ษฺ",  // Command button to zoom out of the map
            geolocationTooltip: "ก้_Current location______ษฺ"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "ก้_No group configured_______ษฺ", // Shown when no group is configured in the configuration file
            submitReportButtonText: "ก้_Submit a report______ษฺ", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "ก้_List view____ษฺ", // Go to List view tooltip text
            noFeatureGeomtery: "ก้_Feature cannot be displayed_________ษฺ" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "ก้_Proceed as Guest______ษฺ", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "ก้_Or__ษฺ", // Or text on sign in screen
            signinOptionsText: "ก้_Sign in with_____ษฺ:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "ก้_Please sign in_____ษฺ", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "ก้_Sign in as a guest______ษฺ", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "ก้_Sign in with Facebook_______ษฺ", // Command button to access the application via Facebook login
            twitterLoginTooltip: "ก้_Sign in with Twitter_______ษฺ", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "ก้_Sign in with Google+_______ษฺ", // Command button to access the application via Google+ login
            agolLoginTooltip: "ก้_Sign in with ArcGIS_______ษฺ" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "ก้_Owner___ษฺ", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "ก้_Date dreated_____ษฺ", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "ก้_Date modified_____ษฺ", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "ก้_Description____ษฺ", // Shown in the 'Map information' section describing the webmap
            snippet: "ก้_Summary___ษฺ", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "ก้_Access and use constraints_________ษฺ", // Shown in the map information section indicating the webmap license information
            accessInformation: "ก้_Credits___ษฺ", // Shown in the 'Map information' section indicating account credits
            tags: "ก้_Tags__ษฺ", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "ก้_Number of views______ษฺ", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "ก้_Rating___ษฺ", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "ก้_Configured group is invalid or no items have been shared with this group yet________________________ษฺ.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "ก้_Map information______ษฺ" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "ก้_No reports available in the current area_____________ษฺ", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "ก้_Go to main list______ษฺ", // Tooltip for back icon in list header
            gotoMapViewTooltip: "ก้_Map view___ษฺ" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "ก้_My Reports____ษฺ", // Command button shown in mobile menu list
            signIn: "ก้_Sign In___ษฺ", // Command button shown in mobile menu list and in appheader
            signOut: "ก้_Sign Out___ษฺ", // Command button shown in mobile menu list
            help: "ก้_Help__ษฺ", // Command button shown in mobile menu list
            signInTooltip: "ก้_Sign in___ษฺ", // Tooltip to 'Sign in' option
            signOutTooltip: "ก้_Sign out___ษฺ", // Tooltip  to 'Sign out' option
            myReportTooltip: "ก้_View reports submitted by me_________ษฺ", // Tooltip  to 'My Reports' option
            helpTooltip: "ก้_Help__ษฺ" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "ก้_Details___ษฺ", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ก้_Attachments____ษฺ", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ก้_Browse___ษฺ", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ก้_Location___ษฺ", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ก้_Report It____ษฺ", // Command button to submit the geoform to report an issue
            cancelButton: "ก้_Cancel___ษฺ", //Command button to close the geoform
            requiredField: "ก้_(required)____ษฺ", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ก้_Select&hellip;_____ษฺ", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ก้_Please enter valid value_________ษฺ.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ก้_Layer fields are not configured to capture data_______________ษฺ", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ก้_Please enter an integer________ษฺ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "ก้_Please enter an integer________ษฺ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "ก้_Please enter a number_______ษฺ", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "ก้_Please enter a number_______ษฺ", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ก้_Please provide values for all required fields_______________ษฺ", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ก้_Please select the location for your report______________ษฺ", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ก้_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ษฺ", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ก้_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ษฺ", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ก้_Issue could not be reported_________ษฺ", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ก้_attachment(s) selected________ษฺ", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ก้_${failed} of ${total} attachment(s) failed to upload_________________ษฺ", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ก้_Current location not available__________ษฺ",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ก้_Current location is out of basemap extent_____________ษฺ",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ก้_Report It____ษฺ", // Command button to open the geoform
            cancelButtonTooltip: "ก้_Cancel___ษฺ", //tooltip for cancel button
            geoformBackButtonTooltip: "ก้_Go to the report list_______ษฺ" //tooltip for Geoform back button

        },
        locator: {
            addressText: "ก้_Address___ษฺ:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "ก้_USNG__ษฺ", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "ก้_MGRS__ษฺ", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "ก้_Latitude/Longitude______ษฺ", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "ก้_No results found______ษฺ", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "ก้_Enter an address to search_________ษฺ", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "ก้_Located address is out of basemap extent_____________ษฺ", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "ก้_Search___ษฺ", // Tooltip for search button
            clearButtonTooltip: "ก้_Clear search value______ษฺ" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "ก้_My Reports____ษฺ", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "ก้_My Reports____ษฺ", // Command button to access issues reported by the logged in user
            noResultsFound: "ก้_No reports found______ษฺ" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "ก้_Like__ษฺ", // Command button shown in details panel
            likeButtonTooltip: "ก้_Vote for this report_______ษฺ",  // Tooltip for command button shown in details panel
            commentButtonLabel: "ก้_Comment___ษฺ", // Command button shown in details panel
            commentButtonTooltip: "ก้_Comment on this report________ษฺ", // Tooltip for command button shown in details panel
            galleryButtonLabel: "ก้_Gallery___ษฺ", // Command button shown in details panel
            galleryButtonTooltip: "ก้_See attached documents________ษฺ", // Tooltip for command button shown in details panel
            mapButtonLabel: "ก้_View on Map____ษฺ", // Command button shown in details panel
            mapButtonTooltip: "ก้_View the location of this report___________ษฺ", // Tooltip for command button shown in details panel
            commentsListHeading: "ก้_Comments___ษฺ", // List heading for Comments section in details panel
            unableToUpdateVoteField: "ก้_Your vote cannot be added at this time_____________ษฺ.", // Error message for feature unable to update
            gotoIssueListTooltip: "ก้_Go to the report list_______ษฺ" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "ก้_Votes for this report_______ษฺ" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "ก้_Comment___ษฺ",
            commentsFormSubmitButton: "ก้_Submit Comment_____ษฺ",
            commentsFormCancelButton: "ก้_Cancel___ษฺ",
            errorInSubmittingComment: "ก้_Comment could not be submitted__________ษฺ.", // Shown when user is unable to add comments
            emptyCommentMessage: "ก้_Please enter a comment________ษฺ.", // Shown when user submits a comment without any text/character
            placeHolderText: "ก้_Type a comment_____ษฺ", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ก้_No comments available_______ษฺ", // Shown when no comments are available for the selected issue
            remainingTextCount: "ก้_${0} character(s) remain________ษฺ", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ก้_No__ษฺ" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "ก้_Gallery___ษฺ",
            noAttachmentsAvailableText: "ก้_No attachments found_______ษฺ" // Shown when no comments are available for the selected issue
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
