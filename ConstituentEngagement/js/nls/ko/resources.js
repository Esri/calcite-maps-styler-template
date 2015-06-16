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
            error: "한_Unable to create map_______빠",
            zoomInTooltip: "한_Zoom in___빠",  // Command button to zoom in to the map
            zoomOutTooltip: "한_Zoom out___빠",  // Command button to zoom out of the map
            geolocationTooltip: "한_Current location______빠"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "한_No group configured_______빠", // Shown when no group is configured in the configuration file
            submitReportButtonText: "한_Submit a report______빠", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "한_List view____빠", // Go to List view tooltip text
            noFeatureGeomtery: "한_Feature cannot be displayed_________빠" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "한_Proceed as Guest______빠", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "한_Or__빠", // Or text on sign in screen
            signinOptionsText: "한_Sign in with_____빠:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "한_Please sign in_____빠", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "한_Sign in as a guest______빠", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "한_Sign in with Facebook_______빠", // Command button to access the application via Facebook login
            twitterLoginTooltip: "한_Sign in with Twitter_______빠", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "한_Sign in with Google+_______빠", // Command button to access the application via Google+ login
            agolLoginTooltip: "한_Sign in with ArcGIS_______빠" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "한_Owner___빠", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "한_Date dreated_____빠", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "한_Date modified_____빠", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "한_Description____빠", // Shown in the 'Map information' section describing the webmap
            snippet: "한_Summary___빠", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "한_Access and use constraints_________빠", // Shown in the map information section indicating the webmap license information
            accessInformation: "한_Credits___빠", // Shown in the 'Map information' section indicating account credits
            tags: "한_Tags__빠", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "한_Number of views______빠", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "한_Rating___빠", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "한_Configured group is invalid or no items have been shared with this group yet________________________빠.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "한_Map information______빠" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "한_No reports available in the current area_____________빠", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "한_Go to main list______빠", // Tooltip for back icon in list header
            gotoMapViewTooltip: "한_Map view___빠" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "한_My Reports____빠", // Command button shown in mobile menu list
            signIn: "한_Sign In___빠", // Command button shown in mobile menu list and in appheader
            signOut: "한_Sign Out___빠", // Command button shown in mobile menu list
            help: "한_Help__빠", // Command button shown in mobile menu list
            signInTooltip: "한_Sign in___빠", // Tooltip to 'Sign in' option
            signOutTooltip: "한_Sign out___빠", // Tooltip  to 'Sign out' option
            myReportTooltip: "한_View reports submitted by me_________빠", // Tooltip  to 'My Reports' option
            helpTooltip: "한_Help__빠" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "한_Details___빠", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "한_Attachments____빠", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "한_Browse___빠", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "한_Location___빠", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "한_Report It____빠", // Command button to submit the geoform to report an issue
            cancelButton: "한_Cancel___빠", //Command button to close the geoform
            requiredField: "한_(required)____빠", // Shown next to the field in which the data is mandatory
            selectDefaultText: "한_Select&hellip;_____빠", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "한_Please enter valid value_________빠.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "한_Layer fields are not configured to capture data_______________빠", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "한_Please enter an integer________빠", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "한_Please enter an integer________빠", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "한_Please enter a number_______빠", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "한_Please enter a number_______빠", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "한_Please provide values for all required fields_______________빠", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "한_Please select the location for your report______________빠", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "한_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________빠", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "한_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________빠", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "한_Issue could not be reported_________빠", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "한_attachment(s) selected________빠", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "한_${failed} of ${total} attachment(s) failed to upload_________________빠", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "한_Current location not available__________빠",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "한_Current location is out of basemap extent_____________빠",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "한_Report It____빠", // Command button to open the geoform
            cancelButtonTooltip: "한_Cancel___빠", //tooltip for cancel button
            geoformBackButtonTooltip: "한_Go to the report list_______빠" //tooltip for Geoform back button

        },
        locator: {
            addressText: "한_Address___빠:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "한_USNG__빠", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "한_MGRS__빠", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "한_Latitude/Longitude______빠", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "한_No results found______빠", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "한_Enter an address to search_________빠", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "한_Located address is out of basemap extent_____________빠", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "한_Search___빠", // Tooltip for search button
            clearButtonTooltip: "한_Clear search value______빠" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "한_My Reports____빠", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "한_My Reports____빠", // Command button to access issues reported by the logged in user
            noResultsFound: "한_No reports found______빠" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "한_Like__빠", // Command button shown in details panel
            likeButtonTooltip: "한_Vote for this report_______빠",  // Tooltip for command button shown in details panel
            commentButtonLabel: "한_Comment___빠", // Command button shown in details panel
            commentButtonTooltip: "한_Comment on this report________빠", // Tooltip for command button shown in details panel
            galleryButtonLabel: "한_Gallery___빠", // Command button shown in details panel
            galleryButtonTooltip: "한_See attached documents________빠", // Tooltip for command button shown in details panel
            mapButtonLabel: "한_View on Map____빠", // Command button shown in details panel
            mapButtonTooltip: "한_View the location of this report___________빠", // Tooltip for command button shown in details panel
            commentsListHeading: "한_Comments___빠", // List heading for Comments section in details panel
            unableToUpdateVoteField: "한_Your vote cannot be added at this time_____________빠.", // Error message for feature unable to update
            gotoIssueListTooltip: "한_Go to the report list_______빠" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "한_Votes for this report_______빠" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "한_Comment___빠",
            commentsFormSubmitButton: "한_Submit Comment_____빠",
            commentsFormCancelButton: "한_Cancel___빠",
            errorInSubmittingComment: "한_Comment could not be submitted__________빠.", // Shown when user is unable to add comments
            emptyCommentMessage: "한_Please enter a comment________빠.", // Shown when user submits a comment without any text/character
            placeHolderText: "한_Type a comment_____빠", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "한_No comments available_______빠", // Shown when no comments are available for the selected issue
            remainingTextCount: "한_${0} character(s) remain________빠", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "한_No__빠" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "한_Gallery___빠",
            noAttachmentsAvailableText: "한_No attachments found_______빠" // Shown when no comments are available for the selected issue
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
