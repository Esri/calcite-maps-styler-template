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
            error: "須_Unable to create map_______鷗",
            zoomInTooltip: "須_Zoom in___鷗",  // Command button to zoom in to the map
            zoomOutTooltip: "須_Zoom out___鷗",  // Command button to zoom out of the map
            geolocationTooltip: "須_Current location______鷗"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "須_No group configured_______鷗", // Shown when no group is configured in the configuration file
            submitReportButtonText: "須_Submit a report______鷗", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "須_List view____鷗", // Go to List view tooltip text
            noFeatureGeomtery: "須_Feature cannot be displayed_________鷗" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "須_Proceed as Guest______鷗", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "須_Or__鷗", // Or text on sign in screen
            signinOptionsText: "須_Sign in with_____鷗:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "須_Please sign in_____鷗", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "須_Sign in as a guest______鷗", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "須_Sign in with Facebook_______鷗", // Command button to access the application via Facebook login
            twitterLoginTooltip: "須_Sign in with Twitter_______鷗", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "須_Sign in with Google+_______鷗", // Command button to access the application via Google+ login
            agolLoginTooltip: "須_Sign in with ArcGIS_______鷗" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "須_Owner___鷗", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "須_Date dreated_____鷗", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "須_Date modified_____鷗", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "須_Description____鷗", // Shown in the 'Map information' section describing the webmap
            snippet: "須_Summary___鷗", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "須_Access and use constraints_________鷗", // Shown in the map information section indicating the webmap license information
            accessInformation: "須_Credits___鷗", // Shown in the 'Map information' section indicating account credits
            tags: "須_Tags__鷗", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "須_Number of views______鷗", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "須_Rating___鷗", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "須_Configured group is invalid or no items have been shared with this group yet________________________鷗.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "須_Map information______鷗" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "須_No reports available in the current area_____________鷗", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "須_Go to main list______鷗", // Tooltip for back icon in list header
            gotoMapViewTooltip: "須_Map view___鷗" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "須_My Reports____鷗", // Command button shown in mobile menu list
            signIn: "須_Sign In___鷗", // Command button shown in mobile menu list and in appheader
            signOut: "須_Sign Out___鷗", // Command button shown in mobile menu list
            help: "須_Help__鷗", // Command button shown in mobile menu list
            signInTooltip: "須_Sign in___鷗", // Tooltip to 'Sign in' option
            signOutTooltip: "須_Sign out___鷗", // Tooltip  to 'Sign out' option
            myReportTooltip: "須_View reports submitted by me_________鷗", // Tooltip  to 'My Reports' option
            helpTooltip: "須_Help__鷗" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "須_Details___鷗", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "須_Attachments____鷗", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "須_Browse___鷗", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "須_Location___鷗", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "須_Report It____鷗", // Command button to submit the geoform to report an issue
            cancelButton: "須_Cancel___鷗", //Command button to close the geoform
            requiredField: "須_(required)____鷗", // Shown next to the field in which the data is mandatory
            selectDefaultText: "須_Select&hellip;_____鷗", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "須_Please enter valid value_________鷗.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "須_Layer fields are not configured to capture data_______________鷗", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "須_Please enter an integer________鷗", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "須_Please enter an integer________鷗", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "須_Please enter a number_______鷗", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "須_Please enter a number_______鷗", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "須_Please provide values for all required fields_______________鷗", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "須_Please select the location for your report______________鷗", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "須_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________鷗", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "須_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________鷗", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "須_Issue could not be reported_________鷗", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "須_attachment(s) selected________鷗", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "須_${failed} of ${total} attachment(s) failed to upload_________________鷗", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "須_Current location not available__________鷗",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "須_Current location is out of basemap extent_____________鷗",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "須_Report It____鷗", // Command button to open the geoform
            cancelButtonTooltip: "須_Cancel___鷗", //tooltip for cancel button
            geoformBackButtonTooltip: "須_Go to the report list_______鷗" //tooltip for Geoform back button

        },
        locator: {
            addressText: "須_Address___鷗:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "須_USNG__鷗", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "須_MGRS__鷗", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "須_Latitude/Longitude______鷗", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "須_No results found______鷗", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "須_Enter an address to search_________鷗", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "須_Located address is out of basemap extent_____________鷗", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "須_Search___鷗", // Tooltip for search button
            clearButtonTooltip: "須_Clear search value______鷗" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "須_My Reports____鷗", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "須_My Reports____鷗", // Command button to access issues reported by the logged in user
            noResultsFound: "須_No reports found______鷗" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "須_Like__鷗", // Command button shown in details panel
            likeButtonTooltip: "須_Vote for this report_______鷗",  // Tooltip for command button shown in details panel
            commentButtonLabel: "須_Comment___鷗", // Command button shown in details panel
            commentButtonTooltip: "須_Comment on this report________鷗", // Tooltip for command button shown in details panel
            galleryButtonLabel: "須_Gallery___鷗", // Command button shown in details panel
            galleryButtonTooltip: "須_See attached documents________鷗", // Tooltip for command button shown in details panel
            mapButtonLabel: "須_View on Map____鷗", // Command button shown in details panel
            mapButtonTooltip: "須_View the location of this report___________鷗", // Tooltip for command button shown in details panel
            commentsListHeading: "須_Comments___鷗", // List heading for Comments section in details panel
            unableToUpdateVoteField: "須_Your vote cannot be added at this time_____________鷗.", // Error message for feature unable to update
            gotoIssueListTooltip: "須_Go to the report list_______鷗" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "須_Votes for this report_______鷗" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "須_Comment___鷗",
            commentsFormSubmitButton: "須_Submit Comment_____鷗",
            commentsFormCancelButton: "須_Cancel___鷗",
            errorInSubmittingComment: "須_Comment could not be submitted__________鷗.", // Shown when user is unable to add comments
            emptyCommentMessage: "須_Please enter a comment________鷗.", // Shown when user submits a comment without any text/character
            placeHolderText: "須_Type a comment_____鷗", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "須_No comments available_______鷗", // Shown when no comments are available for the selected issue
            remainingTextCount: "須_${0} character(s) remain________鷗", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "須_No__鷗" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "須_Gallery___鷗",
            noAttachmentsAvailableText: "須_No attachments found_______鷗" // Shown when no comments are available for the selected issue
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
