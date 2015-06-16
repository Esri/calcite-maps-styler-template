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
            error: "ı_Unable to create map_______İ",
            zoomInTooltip: "ı_Zoom in___İ",  // Command button to zoom in to the map
            zoomOutTooltip: "ı_Zoom out___İ",  // Command button to zoom out of the map
            geolocationTooltip: "ı_Current location______İ"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "ı_No group configured_______İ", // Shown when no group is configured in the configuration file
            submitReportButtonText: "ı_Submit a report______İ", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "ı_List view____İ", // Go to List view tooltip text
            noFeatureGeomtery: "ı_Feature cannot be displayed_________İ" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "ı_Proceed as Guest______İ", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "ı_Or__İ", // Or text on sign in screen
            signinOptionsText: "ı_Sign in with_____İ:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "ı_Please sign in_____İ", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "ı_Sign in as a guest______İ", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "ı_Sign in with Facebook_______İ", // Command button to access the application via Facebook login
            twitterLoginTooltip: "ı_Sign in with Twitter_______İ", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "ı_Sign in with Google+_______İ", // Command button to access the application via Google+ login
            agolLoginTooltip: "ı_Sign in with ArcGIS_______İ" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "ı_Owner___İ", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "ı_Date dreated_____İ", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "ı_Date modified_____İ", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "ı_Description____İ", // Shown in the 'Map information' section describing the webmap
            snippet: "ı_Summary___İ", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "ı_Access and use constraints_________İ", // Shown in the map information section indicating the webmap license information
            accessInformation: "ı_Credits___İ", // Shown in the 'Map information' section indicating account credits
            tags: "ı_Tags__İ", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "ı_Number of views______İ", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "ı_Rating___İ", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "ı_Configured group is invalid or no items have been shared with this group yet________________________İ.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "ı_Map information______İ" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "ı_No reports available in the current area_____________İ", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "ı_Go to main list______İ", // Tooltip for back icon in list header
            gotoMapViewTooltip: "ı_Map view___İ" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "ı_My Reports____İ", // Command button shown in mobile menu list
            signIn: "ı_Sign In___İ", // Command button shown in mobile menu list and in appheader
            signOut: "ı_Sign Out___İ", // Command button shown in mobile menu list
            help: "ı_Help__İ", // Command button shown in mobile menu list
            signInTooltip: "ı_Sign in___İ", // Tooltip to 'Sign in' option
            signOutTooltip: "ı_Sign out___İ", // Tooltip  to 'Sign out' option
            myReportTooltip: "ı_View reports submitted by me_________İ", // Tooltip  to 'My Reports' option
            helpTooltip: "ı_Help__İ" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "ı_Details___İ", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ı_Attachments____İ", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ı_Browse___İ", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ı_Location___İ", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ı_Report It____İ", // Command button to submit the geoform to report an issue
            cancelButton: "ı_Cancel___İ", //Command button to close the geoform
            requiredField: "ı_(required)____İ", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ı_Select&hellip;_____İ", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ı_Please enter valid value_________İ.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ı_Layer fields are not configured to capture data_______________İ", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ı_Please enter an integer________İ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "ı_Please enter an integer________İ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "ı_Please enter a number_______İ", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "ı_Please enter a number_______İ", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ı_Please provide values for all required fields_______________İ", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ı_Please select the location for your report______________İ", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ı_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________İ", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ı_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________İ", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ı_Issue could not be reported_________İ", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ı_attachment(s) selected________İ", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ı_${failed} of ${total} attachment(s) failed to upload_________________İ", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ı_Current location not available__________İ",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ı_Current location is out of basemap extent_____________İ",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ı_Report It____İ", // Command button to open the geoform
            cancelButtonTooltip: "ı_Cancel___İ", //tooltip for cancel button
            geoformBackButtonTooltip: "ı_Go to the report list_______İ" //tooltip for Geoform back button

        },
        locator: {
            addressText: "ı_Address___İ:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "ı_USNG__İ", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "ı_MGRS__İ", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "ı_Latitude/Longitude______İ", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "ı_No results found______İ", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "ı_Enter an address to search_________İ", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "ı_Located address is out of basemap extent_____________İ", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "ı_Search___İ", // Tooltip for search button
            clearButtonTooltip: "ı_Clear search value______İ" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "ı_My Reports____İ", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "ı_My Reports____İ", // Command button to access issues reported by the logged in user
            noResultsFound: "ı_No reports found______İ" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "ı_Like__İ", // Command button shown in details panel
            likeButtonTooltip: "ı_Vote for this report_______İ",  // Tooltip for command button shown in details panel
            commentButtonLabel: "ı_Comment___İ", // Command button shown in details panel
            commentButtonTooltip: "ı_Comment on this report________İ", // Tooltip for command button shown in details panel
            galleryButtonLabel: "ı_Gallery___İ", // Command button shown in details panel
            galleryButtonTooltip: "ı_See attached documents________İ", // Tooltip for command button shown in details panel
            mapButtonLabel: "ı_View on Map____İ", // Command button shown in details panel
            mapButtonTooltip: "ı_View the location of this report___________İ", // Tooltip for command button shown in details panel
            commentsListHeading: "ı_Comments___İ", // List heading for Comments section in details panel
            unableToUpdateVoteField: "ı_Your vote cannot be added at this time_____________İ.", // Error message for feature unable to update
            gotoIssueListTooltip: "ı_Go to the report list_______İ" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "ı_Votes for this report_______İ" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "ı_Comment___İ",
            commentsFormSubmitButton: "ı_Submit Comment_____İ",
            commentsFormCancelButton: "ı_Cancel___İ",
            errorInSubmittingComment: "ı_Comment could not be submitted__________İ.", // Shown when user is unable to add comments
            emptyCommentMessage: "ı_Please enter a comment________İ.", // Shown when user submits a comment without any text/character
            placeHolderText: "ı_Type a comment_____İ", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ı_No comments available_______İ", // Shown when no comments are available for the selected issue
            remainingTextCount: "ı_${0} character(s) remain________İ", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ı_No__İ" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "ı_Gallery___İ",
            noAttachmentsAvailableText: "ı_No attachments found_______İ" // Shown when no comments are available for the selected issue
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
