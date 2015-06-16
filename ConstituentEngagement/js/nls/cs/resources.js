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
            error: "Ř_Unable to create map_______ů",
            zoomInTooltip: "Ř_Zoom in___ů",  // Command button to zoom in to the map
            zoomOutTooltip: "Ř_Zoom out___ů",  // Command button to zoom out of the map
            geolocationTooltip: "Ř_Current location______ů"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "Ř_No group configured_______ů", // Shown when no group is configured in the configuration file
            submitReportButtonText: "Ř_Submit a report______ů", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "Ř_List view____ů", // Go to List view tooltip text
            noFeatureGeomtery: "Ř_Feature cannot be displayed_________ů" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "Ř_Proceed as Guest______ů", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "Ř_Or__ů", // Or text on sign in screen
            signinOptionsText: "Ř_Sign in with_____ů:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "Ř_Please sign in_____ů", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "Ř_Sign in as a guest______ů", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "Ř_Sign in with Facebook_______ů", // Command button to access the application via Facebook login
            twitterLoginTooltip: "Ř_Sign in with Twitter_______ů", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "Ř_Sign in with Google+_______ů", // Command button to access the application via Google+ login
            agolLoginTooltip: "Ř_Sign in with ArcGIS_______ů" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "Ř_Owner___ů", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "Ř_Date dreated_____ů", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "Ř_Date modified_____ů", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "Ř_Description____ů", // Shown in the 'Map information' section describing the webmap
            snippet: "Ř_Summary___ů", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "Ř_Access and use constraints_________ů", // Shown in the map information section indicating the webmap license information
            accessInformation: "Ř_Credits___ů", // Shown in the 'Map information' section indicating account credits
            tags: "Ř_Tags__ů", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "Ř_Number of views______ů", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "Ř_Rating___ů", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "Ř_Configured group is invalid or no items have been shared with this group yet________________________ů.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "Ř_Map information______ů" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "Ř_No reports available in the current area_____________ů", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "Ř_Go to main list______ů", // Tooltip for back icon in list header
            gotoMapViewTooltip: "Ř_Map view___ů" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "Ř_My Reports____ů", // Command button shown in mobile menu list
            signIn: "Ř_Sign In___ů", // Command button shown in mobile menu list and in appheader
            signOut: "Ř_Sign Out___ů", // Command button shown in mobile menu list
            help: "Ř_Help__ů", // Command button shown in mobile menu list
            signInTooltip: "Ř_Sign in___ů", // Tooltip to 'Sign in' option
            signOutTooltip: "Ř_Sign out___ů", // Tooltip  to 'Sign out' option
            myReportTooltip: "Ř_View reports submitted by me_________ů", // Tooltip  to 'My Reports' option
            helpTooltip: "Ř_Help__ů" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "Ř_Details___ů", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ř_Attachments____ů", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ř_Browse___ů", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ř_Location___ů", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ř_Report It____ů", // Command button to submit the geoform to report an issue
            cancelButton: "Ř_Cancel___ů", //Command button to close the geoform
            requiredField: "Ř_(required)____ů", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ř_Select&hellip;_____ů", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ř_Please enter valid value_________ů.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ř_Layer fields are not configured to capture data_______________ů", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ř_Please enter an integer________ů", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Ř_Please enter an integer________ů", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Ř_Please enter a number_______ů", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Ř_Please enter a number_______ů", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ř_Please provide values for all required fields_______________ů", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ř_Please select the location for your report______________ů", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ř_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ů", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ř_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ů", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ř_Issue could not be reported_________ů", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ř_attachment(s) selected________ů", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ř_${failed} of ${total} attachment(s) failed to upload_________________ů", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ř_Current location not available__________ů",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ř_Current location is out of basemap extent_____________ů",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ř_Report It____ů", // Command button to open the geoform
            cancelButtonTooltip: "Ř_Cancel___ů", //tooltip for cancel button
            geoformBackButtonTooltip: "Ř_Go to the report list_______ů" //tooltip for Geoform back button

        },
        locator: {
            addressText: "Ř_Address___ů:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "Ř_USNG__ů", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "Ř_MGRS__ů", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "Ř_Latitude/Longitude______ů", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "Ř_No results found______ů", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "Ř_Enter an address to search_________ů", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "Ř_Located address is out of basemap extent_____________ů", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "Ř_Search___ů", // Tooltip for search button
            clearButtonTooltip: "Ř_Clear search value______ů" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "Ř_My Reports____ů", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "Ř_My Reports____ů", // Command button to access issues reported by the logged in user
            noResultsFound: "Ř_No reports found______ů" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "Ř_Like__ů", // Command button shown in details panel
            likeButtonTooltip: "Ř_Vote for this report_______ů",  // Tooltip for command button shown in details panel
            commentButtonLabel: "Ř_Comment___ů", // Command button shown in details panel
            commentButtonTooltip: "Ř_Comment on this report________ů", // Tooltip for command button shown in details panel
            galleryButtonLabel: "Ř_Gallery___ů", // Command button shown in details panel
            galleryButtonTooltip: "Ř_See attached documents________ů", // Tooltip for command button shown in details panel
            mapButtonLabel: "Ř_View on Map____ů", // Command button shown in details panel
            mapButtonTooltip: "Ř_View the location of this report___________ů", // Tooltip for command button shown in details panel
            commentsListHeading: "Ř_Comments___ů", // List heading for Comments section in details panel
            unableToUpdateVoteField: "Ř_Your vote cannot be added at this time_____________ů.", // Error message for feature unable to update
            gotoIssueListTooltip: "Ř_Go to the report list_______ů" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "Ř_Votes for this report_______ů" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "Ř_Comment___ů",
            commentsFormSubmitButton: "Ř_Submit Comment_____ů",
            commentsFormCancelButton: "Ř_Cancel___ů",
            errorInSubmittingComment: "Ř_Comment could not be submitted__________ů.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ř_Please enter a comment________ů.", // Shown when user submits a comment without any text/character
            placeHolderText: "Ř_Type a comment_____ů", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ř_No comments available_______ů", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ř_${0} character(s) remain________ů", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ř_No__ů" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "Ř_Gallery___ů",
            noAttachmentsAvailableText: "Ř_No attachments found_______ů" // Shown when no comments are available for the selected issue
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
