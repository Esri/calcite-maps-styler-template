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
            error: "כן_Unable to create map_______ש",
            zoomInTooltip: "כן_Zoom in___ש",  // Command button to zoom in to the map
            zoomOutTooltip: "כן_Zoom out___ש",  // Command button to zoom out of the map
            geolocationTooltip: "כן_Current location______ש"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "כן_No group configured_______ש", // Shown when no group is configured in the configuration file
            submitReportButtonText: "כן_Submit a report______ש", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "כן_List view____ש", // Go to List view tooltip text
            noFeatureGeomtery: "כן_Feature cannot be displayed_________ש" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "כן_Proceed as Guest______ש", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "כן_Or__ש", // Or text on sign in screen
            signinOptionsText: "כן_Sign in with_____ש:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "כן_Please sign in_____ש", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "כן_Sign in as a guest______ש", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "כן_Sign in with Facebook_______ש", // Command button to access the application via Facebook login
            twitterLoginTooltip: "כן_Sign in with Twitter_______ש", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "כן_Sign in with Google+_______ש", // Command button to access the application via Google+ login
            agolLoginTooltip: "כן_Sign in with ArcGIS_______ש" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "כן_Owner___ש", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "כן_Date dreated_____ש", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "כן_Date modified_____ש", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "כן_Description____ש", // Shown in the 'Map information' section describing the webmap
            snippet: "כן_Summary___ש", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "כן_Access and use constraints_________ש", // Shown in the map information section indicating the webmap license information
            accessInformation: "כן_Credits___ש", // Shown in the 'Map information' section indicating account credits
            tags: "כן_Tags__ש", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "כן_Number of views______ש", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "כן_Rating___ש", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "כן_Configured group is invalid or no items have been shared with this group yet________________________ש.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "כן_Map information______ש" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "כן_No reports available in the current area_____________ש", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "כן_Go to main list______ש", // Tooltip for back icon in list header
            gotoMapViewTooltip: "כן_Map view___ש" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "כן_My Reports____ש", // Command button shown in mobile menu list
            signIn: "כן_Sign In___ש", // Command button shown in mobile menu list and in appheader
            signOut: "כן_Sign Out___ש", // Command button shown in mobile menu list
            help: "כן_Help__ש", // Command button shown in mobile menu list
            signInTooltip: "כן_Sign in___ש", // Tooltip to 'Sign in' option
            signOutTooltip: "כן_Sign out___ש", // Tooltip  to 'Sign out' option
            myReportTooltip: "כן_View reports submitted by me_________ש", // Tooltip  to 'My Reports' option
            helpTooltip: "כן_Help__ש" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "כן_Details___ש", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "כן_Attachments____ש", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "כן_Browse___ש", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "כן_Location___ש", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "כן_Report It____ש", // Command button to submit the geoform to report an issue
            cancelButton: "כן_Cancel___ש", //Command button to close the geoform
            requiredField: "כן_(required)____ש", // Shown next to the field in which the data is mandatory
            selectDefaultText: "כן_Select&hellip;_____ש", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "כן_Please enter valid value_________ש.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "כן_Layer fields are not configured to capture data_______________ש", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "כן_Please enter an integer________ש", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "כן_Please enter an integer________ש", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "כן_Please enter a number_______ש", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "כן_Please enter a number_______ש", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "כן_Please provide values for all required fields_______________ש", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "כן_Please select the location for your report______________ש", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "כן_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ש", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "כן_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ש", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "כן_Issue could not be reported_________ש", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "כן_attachment(s) selected________ש", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "כן_${failed} of ${total} attachment(s) failed to upload_________________ש", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "כן_Current location not available__________ש",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "כן_Current location is out of basemap extent_____________ש",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "כן_Report It____ש", // Command button to open the geoform
            cancelButtonTooltip: "כן_Cancel___ש", //tooltip for cancel button
            geoformBackButtonTooltip: "כן_Go to the report list_______ש" //tooltip for Geoform back button

        },
        locator: {
            addressText: "כן_Address___ש:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "כן_USNG__ש", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "כן_MGRS__ש", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "כן_Latitude/Longitude______ש", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "כן_No results found______ש", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "כן_Enter an address to search_________ש", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "כן_Located address is out of basemap extent_____________ש", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "כן_Search___ש", // Tooltip for search button
            clearButtonTooltip: "כן_Clear search value______ש" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "כן_My Reports____ש", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "כן_My Reports____ש", // Command button to access issues reported by the logged in user
            noResultsFound: "כן_No reports found______ש" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "כן_Like__ש", // Command button shown in details panel
            likeButtonTooltip: "כן_Vote for this report_______ש",  // Tooltip for command button shown in details panel
            commentButtonLabel: "כן_Comment___ש", // Command button shown in details panel
            commentButtonTooltip: "כן_Comment on this report________ש", // Tooltip for command button shown in details panel
            galleryButtonLabel: "כן_Gallery___ש", // Command button shown in details panel
            galleryButtonTooltip: "כן_See attached documents________ש", // Tooltip for command button shown in details panel
            mapButtonLabel: "כן_View on Map____ש", // Command button shown in details panel
            mapButtonTooltip: "כן_View the location of this report___________ש", // Tooltip for command button shown in details panel
            commentsListHeading: "כן_Comments___ש", // List heading for Comments section in details panel
            unableToUpdateVoteField: "כן_Your vote cannot be added at this time_____________ש.", // Error message for feature unable to update
            gotoIssueListTooltip: "כן_Go to the report list_______ש" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "כן_Votes for this report_______ש" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "כן_Comment___ש",
            commentsFormSubmitButton: "כן_Submit Comment_____ש",
            commentsFormCancelButton: "כן_Cancel___ש",
            errorInSubmittingComment: "כן_Comment could not be submitted__________ש.", // Shown when user is unable to add comments
            emptyCommentMessage: "כן_Please enter a comment________ש.", // Shown when user submits a comment without any text/character
            placeHolderText: "כן_Type a comment_____ש", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "כן_No comments available_______ש", // Shown when no comments are available for the selected issue
            remainingTextCount: "כן_${0} character(s) remain________ש", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "כן_No__ש" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "כן_Gallery___ש",
            noAttachmentsAvailableText: "כן_No attachments found_______ש" // Shown when no comments are available for the selected issue
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
