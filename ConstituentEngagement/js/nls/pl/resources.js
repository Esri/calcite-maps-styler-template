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
            error: "ł_Unable to create map_______ą",
            zoomInTooltip: "ł_Zoom in___ą",  // Command button to zoom in to the map
            zoomOutTooltip: "ł_Zoom out___ą",  // Command button to zoom out of the map
            geolocationTooltip: "ł_Current location______ą"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "ł_No group configured_______ą", // Shown when no group is configured in the configuration file
            submitReportButtonText: "ł_Submit a report______ą", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "ł_List view____ą", // Go to List view tooltip text
            noFeatureGeomtery: "ł_Feature cannot be displayed_________ą" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "ł_Proceed as Guest______ą", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "ł_Or__ą", // Or text on sign in screen
            signinOptionsText: "ł_Sign in with_____ą:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "ł_Please sign in_____ą", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "ł_Sign in as a guest______ą", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "ł_Sign in with Facebook_______ą", // Command button to access the application via Facebook login
            twitterLoginTooltip: "ł_Sign in with Twitter_______ą", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "ł_Sign in with Google+_______ą", // Command button to access the application via Google+ login
            agolLoginTooltip: "ł_Sign in with ArcGIS_______ą" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "ł_Owner___ą", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "ł_Date dreated_____ą", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "ł_Date modified_____ą", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "ł_Description____ą", // Shown in the 'Map information' section describing the webmap
            snippet: "ł_Summary___ą", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "ł_Access and use constraints_________ą", // Shown in the map information section indicating the webmap license information
            accessInformation: "ł_Credits___ą", // Shown in the 'Map information' section indicating account credits
            tags: "ł_Tags__ą", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "ł_Number of views______ą", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "ł_Rating___ą", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "ł_Configured group is invalid or no items have been shared with this group yet________________________ą.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "ł_Map information______ą" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "ł_No reports available in the current area_____________ą", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "ł_Go to main list______ą", // Tooltip for back icon in list header
            gotoMapViewTooltip: "ł_Map view___ą" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "ł_My Reports____ą", // Command button shown in mobile menu list
            signIn: "ł_Sign In___ą", // Command button shown in mobile menu list and in appheader
            signOut: "ł_Sign Out___ą", // Command button shown in mobile menu list
            help: "ł_Help__ą", // Command button shown in mobile menu list
            signInTooltip: "ł_Sign in___ą", // Tooltip to 'Sign in' option
            signOutTooltip: "ł_Sign out___ą", // Tooltip  to 'Sign out' option
            myReportTooltip: "ł_View reports submitted by me_________ą", // Tooltip  to 'My Reports' option
            helpTooltip: "ł_Help__ą" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "ł_Details___ą", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ł_Attachments____ą", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ł_Browse___ą", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ł_Location___ą", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ł_Report It____ą", // Command button to submit the geoform to report an issue
            cancelButton: "ł_Cancel___ą", //Command button to close the geoform
            requiredField: "ł_(required)____ą", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ł_Select&hellip;_____ą", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ł_Please enter valid value_________ą.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ł_Layer fields are not configured to capture data_______________ą", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ł_Please enter an integer________ą", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "ł_Please enter an integer________ą", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "ł_Please enter a number_______ą", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "ł_Please enter a number_______ą", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ł_Please provide values for all required fields_______________ą", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ł_Please select the location for your report______________ą", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ł_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ą", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ł_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ą", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ł_Issue could not be reported_________ą", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ł_attachment(s) selected________ą", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ł_${failed} of ${total} attachment(s) failed to upload_________________ą", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ł_Current location not available__________ą",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ł_Current location is out of basemap extent_____________ą",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ł_Report It____ą", // Command button to open the geoform
            cancelButtonTooltip: "ł_Cancel___ą", //tooltip for cancel button
            geoformBackButtonTooltip: "ł_Go to the report list_______ą" //tooltip for Geoform back button

        },
        locator: {
            addressText: "ł_Address___ą:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "ł_USNG__ą", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "ł_MGRS__ą", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "ł_Latitude/Longitude______ą", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "ł_No results found______ą", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "ł_Enter an address to search_________ą", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "ł_Located address is out of basemap extent_____________ą", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "ł_Search___ą", // Tooltip for search button
            clearButtonTooltip: "ł_Clear search value______ą" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "ł_My Reports____ą", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "ł_My Reports____ą", // Command button to access issues reported by the logged in user
            noResultsFound: "ł_No reports found______ą" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "ł_Like__ą", // Command button shown in details panel
            likeButtonTooltip: "ł_Vote for this report_______ą",  // Tooltip for command button shown in details panel
            commentButtonLabel: "ł_Comment___ą", // Command button shown in details panel
            commentButtonTooltip: "ł_Comment on this report________ą", // Tooltip for command button shown in details panel
            galleryButtonLabel: "ł_Gallery___ą", // Command button shown in details panel
            galleryButtonTooltip: "ł_See attached documents________ą", // Tooltip for command button shown in details panel
            mapButtonLabel: "ł_View on Map____ą", // Command button shown in details panel
            mapButtonTooltip: "ł_View the location of this report___________ą", // Tooltip for command button shown in details panel
            commentsListHeading: "ł_Comments___ą", // List heading for Comments section in details panel
            unableToUpdateVoteField: "ł_Your vote cannot be added at this time_____________ą.", // Error message for feature unable to update
            gotoIssueListTooltip: "ł_Go to the report list_______ą" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "ł_Votes for this report_______ą" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "ł_Comment___ą",
            commentsFormSubmitButton: "ł_Submit Comment_____ą",
            commentsFormCancelButton: "ł_Cancel___ą",
            errorInSubmittingComment: "ł_Comment could not be submitted__________ą.", // Shown when user is unable to add comments
            emptyCommentMessage: "ł_Please enter a comment________ą.", // Shown when user submits a comment without any text/character
            placeHolderText: "ł_Type a comment_____ą", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ł_No comments available_______ą", // Shown when no comments are available for the selected issue
            remainingTextCount: "ł_${0} character(s) remain________ą", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ł_No__ą" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "ł_Gallery___ą",
            noAttachmentsAvailableText: "ł_No attachments found_______ą" // Shown when no comments are available for the selected issue
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
