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
            error: "ķ_Unable to create map_______ū",
            zoomInTooltip: "ķ_Zoom in___ū",  // Command button to zoom in to the map
            zoomOutTooltip: "ķ_Zoom out___ū",  // Command button to zoom out of the map
            geolocationTooltip: "ķ_Current location______ū"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "ķ_No group configured_______ū", // Shown when no group is configured in the configuration file
            submitReportButtonText: "ķ_Submit a report______ū", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "ķ_List view____ū", // Go to List view tooltip text
            noFeatureGeomtery: "ķ_Feature cannot be displayed_________ū" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "ķ_Proceed as Guest______ū", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "ķ_Or__ū", // Or text on sign in screen
            signinOptionsText: "ķ_Sign in with_____ū:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "ķ_Please sign in_____ū", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "ķ_Sign in as a guest______ū", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "ķ_Sign in with Facebook_______ū", // Command button to access the application via Facebook login
            twitterLoginTooltip: "ķ_Sign in with Twitter_______ū", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "ķ_Sign in with Google+_______ū", // Command button to access the application via Google+ login
            agolLoginTooltip: "ķ_Sign in with ArcGIS_______ū" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "ķ_Owner___ū", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "ķ_Date dreated_____ū", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "ķ_Date modified_____ū", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "ķ_Description____ū", // Shown in the 'Map information' section describing the webmap
            snippet: "ķ_Summary___ū", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "ķ_Access and use constraints_________ū", // Shown in the map information section indicating the webmap license information
            accessInformation: "ķ_Credits___ū", // Shown in the 'Map information' section indicating account credits
            tags: "ķ_Tags__ū", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "ķ_Number of views______ū", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "ķ_Rating___ū", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "ķ_Configured group is invalid or no items have been shared with this group yet________________________ū.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "ķ_Map information______ū" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "ķ_No reports available in the current area_____________ū", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "ķ_Go to main list______ū", // Tooltip for back icon in list header
            gotoMapViewTooltip: "ķ_Map view___ū" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "ķ_My Reports____ū", // Command button shown in mobile menu list
            signIn: "ķ_Sign In___ū", // Command button shown in mobile menu list and in appheader
            signOut: "ķ_Sign Out___ū", // Command button shown in mobile menu list
            help: "ķ_Help__ū", // Command button shown in mobile menu list
            signInTooltip: "ķ_Sign in___ū", // Tooltip to 'Sign in' option
            signOutTooltip: "ķ_Sign out___ū", // Tooltip  to 'Sign out' option
            myReportTooltip: "ķ_View reports submitted by me_________ū", // Tooltip  to 'My Reports' option
            helpTooltip: "ķ_Help__ū" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "ķ_Details___ū", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ķ_Attachments____ū", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ķ_Browse___ū", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ķ_Location___ū", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ķ_Report It____ū", // Command button to submit the geoform to report an issue
            cancelButton: "ķ_Cancel___ū", //Command button to close the geoform
            requiredField: "ķ_(required)____ū", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ķ_Select&hellip;_____ū", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ķ_Please enter valid value_________ū.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ķ_Layer fields are not configured to capture data_______________ū", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ķ_Please enter an integer________ū", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "ķ_Please enter an integer________ū", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "ķ_Please enter a number_______ū", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "ķ_Please enter a number_______ū", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ķ_Please provide values for all required fields_______________ū", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ķ_Please select the location for your report______________ū", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ķ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ū", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ķ_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ū", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ķ_Issue could not be reported_________ū", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ķ_attachment(s) selected________ū", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ķ_${failed} of ${total} attachment(s) failed to upload_________________ū", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ķ_Current location not available__________ū",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ķ_Current location is out of basemap extent_____________ū",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ķ_Report It____ū", // Command button to open the geoform
            cancelButtonTooltip: "ķ_Cancel___ū", //tooltip for cancel button
            geoformBackButtonTooltip: "ķ_Go to the report list_______ū" //tooltip for Geoform back button

        },
        locator: {
            addressText: "ķ_Address___ū:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "ķ_USNG__ū", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "ķ_MGRS__ū", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "ķ_Latitude/Longitude______ū", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "ķ_No results found______ū", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "ķ_Enter an address to search_________ū", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "ķ_Located address is out of basemap extent_____________ū", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "ķ_Search___ū", // Tooltip for search button
            clearButtonTooltip: "ķ_Clear search value______ū" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "ķ_My Reports____ū", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "ķ_My Reports____ū", // Command button to access issues reported by the logged in user
            noResultsFound: "ķ_No reports found______ū" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "ķ_Like__ū", // Command button shown in details panel
            likeButtonTooltip: "ķ_Vote for this report_______ū",  // Tooltip for command button shown in details panel
            commentButtonLabel: "ķ_Comment___ū", // Command button shown in details panel
            commentButtonTooltip: "ķ_Comment on this report________ū", // Tooltip for command button shown in details panel
            galleryButtonLabel: "ķ_Gallery___ū", // Command button shown in details panel
            galleryButtonTooltip: "ķ_See attached documents________ū", // Tooltip for command button shown in details panel
            mapButtonLabel: "ķ_View on Map____ū", // Command button shown in details panel
            mapButtonTooltip: "ķ_View the location of this report___________ū", // Tooltip for command button shown in details panel
            commentsListHeading: "ķ_Comments___ū", // List heading for Comments section in details panel
            unableToUpdateVoteField: "ķ_Your vote cannot be added at this time_____________ū.", // Error message for feature unable to update
            gotoIssueListTooltip: "ķ_Go to the report list_______ū" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "ķ_Votes for this report_______ū" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "ķ_Comment___ū",
            commentsFormSubmitButton: "ķ_Submit Comment_____ū",
            commentsFormCancelButton: "ķ_Cancel___ū",
            errorInSubmittingComment: "ķ_Comment could not be submitted__________ū.", // Shown when user is unable to add comments
            emptyCommentMessage: "ķ_Please enter a comment________ū.", // Shown when user submits a comment without any text/character
            placeHolderText: "ķ_Type a comment_____ū", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ķ_No comments available_______ū", // Shown when no comments are available for the selected issue
            remainingTextCount: "ķ_${0} character(s) remain________ū", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ķ_No__ū" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "ķ_Gallery___ū",
            noAttachmentsAvailableText: "ķ_No attachments found_______ū" // Shown when no comments are available for the selected issue
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
