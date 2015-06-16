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
            error: "Ĳ_Unable to create map_______ä",
            zoomInTooltip: "Ĳ_Zoom in___ä",  // Command button to zoom in to the map
            zoomOutTooltip: "Ĳ_Zoom out___ä",  // Command button to zoom out of the map
            geolocationTooltip: "Ĳ_Current location______ä"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "Ĳ_No group configured_______ä", // Shown when no group is configured in the configuration file
            submitReportButtonText: "Ĳ_Submit a report______ä", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "Ĳ_List view____ä", // Go to List view tooltip text
            noFeatureGeomtery: "Ĳ_Feature cannot be displayed_________ä" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "Ĳ_Proceed as Guest______ä", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "Ĳ_Or__ä", // Or text on sign in screen
            signinOptionsText: "Ĳ_Sign in with_____ä:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "Ĳ_Please sign in_____ä", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "Ĳ_Sign in as a guest______ä", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "Ĳ_Sign in with Facebook_______ä", // Command button to access the application via Facebook login
            twitterLoginTooltip: "Ĳ_Sign in with Twitter_______ä", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "Ĳ_Sign in with Google+_______ä", // Command button to access the application via Google+ login
            agolLoginTooltip: "Ĳ_Sign in with ArcGIS_______ä" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "Ĳ_Owner___ä", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "Ĳ_Date dreated_____ä", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "Ĳ_Date modified_____ä", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "Ĳ_Description____ä", // Shown in the 'Map information' section describing the webmap
            snippet: "Ĳ_Summary___ä", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "Ĳ_Access and use constraints_________ä", // Shown in the map information section indicating the webmap license information
            accessInformation: "Ĳ_Credits___ä", // Shown in the 'Map information' section indicating account credits
            tags: "Ĳ_Tags__ä", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "Ĳ_Number of views______ä", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "Ĳ_Rating___ä", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "Ĳ_Configured group is invalid or no items have been shared with this group yet________________________ä.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "Ĳ_Map information______ä" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "Ĳ_No reports available in the current area_____________ä", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "Ĳ_Go to main list______ä", // Tooltip for back icon in list header
            gotoMapViewTooltip: "Ĳ_Map view___ä" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "Ĳ_My Reports____ä", // Command button shown in mobile menu list
            signIn: "Ĳ_Sign In___ä", // Command button shown in mobile menu list and in appheader
            signOut: "Ĳ_Sign Out___ä", // Command button shown in mobile menu list
            help: "Ĳ_Help__ä", // Command button shown in mobile menu list
            signInTooltip: "Ĳ_Sign in___ä", // Tooltip to 'Sign in' option
            signOutTooltip: "Ĳ_Sign out___ä", // Tooltip  to 'Sign out' option
            myReportTooltip: "Ĳ_View reports submitted by me_________ä", // Tooltip  to 'My Reports' option
            helpTooltip: "Ĳ_Help__ä" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "Ĳ_Details___ä", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ĳ_Attachments____ä", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ĳ_Browse___ä", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ĳ_Location___ä", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ĳ_Report It____ä", // Command button to submit the geoform to report an issue
            cancelButton: "Ĳ_Cancel___ä", //Command button to close the geoform
            requiredField: "Ĳ_(required)____ä", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ĳ_Select&hellip;_____ä", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ĳ_Please enter valid value_________ä.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ĳ_Layer fields are not configured to capture data_______________ä", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ĳ_Please enter an integer________ä", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Ĳ_Please enter an integer________ä", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Ĳ_Please enter a number_______ä", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Ĳ_Please enter a number_______ä", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ĳ_Please provide values for all required fields_______________ä", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ĳ_Please select the location for your report______________ä", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ĳ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ä", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ĳ_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ä", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ĳ_Issue could not be reported_________ä", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ĳ_attachment(s) selected________ä", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ĳ_${failed} of ${total} attachment(s) failed to upload_________________ä", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ĳ_Current location not available__________ä",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ĳ_Current location is out of basemap extent_____________ä",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ĳ_Report It____ä", // Command button to open the geoform
            cancelButtonTooltip: "Ĳ_Cancel___ä", //tooltip for cancel button
            geoformBackButtonTooltip: "Ĳ_Go to the report list_______ä" //tooltip for Geoform back button

        },
        locator: {
            addressText: "Ĳ_Address___ä:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "Ĳ_USNG__ä", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "Ĳ_MGRS__ä", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "Ĳ_Latitude/Longitude______ä", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "Ĳ_No results found______ä", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "Ĳ_Enter an address to search_________ä", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "Ĳ_Located address is out of basemap extent_____________ä", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "Ĳ_Search___ä", // Tooltip for search button
            clearButtonTooltip: "Ĳ_Clear search value______ä" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "Ĳ_My Reports____ä", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "Ĳ_My Reports____ä", // Command button to access issues reported by the logged in user
            noResultsFound: "Ĳ_No reports found______ä" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "Ĳ_Like__ä", // Command button shown in details panel
            likeButtonTooltip: "Ĳ_Vote for this report_______ä",  // Tooltip for command button shown in details panel
            commentButtonLabel: "Ĳ_Comment___ä", // Command button shown in details panel
            commentButtonTooltip: "Ĳ_Comment on this report________ä", // Tooltip for command button shown in details panel
            galleryButtonLabel: "Ĳ_Gallery___ä", // Command button shown in details panel
            galleryButtonTooltip: "Ĳ_See attached documents________ä", // Tooltip for command button shown in details panel
            mapButtonLabel: "Ĳ_View on Map____ä", // Command button shown in details panel
            mapButtonTooltip: "Ĳ_View the location of this report___________ä", // Tooltip for command button shown in details panel
            commentsListHeading: "Ĳ_Comments___ä", // List heading for Comments section in details panel
            unableToUpdateVoteField: "Ĳ_Your vote cannot be added at this time_____________ä.", // Error message for feature unable to update
            gotoIssueListTooltip: "Ĳ_Go to the report list_______ä" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "Ĳ_Votes for this report_______ä" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "Ĳ_Comment___ä",
            commentsFormSubmitButton: "Ĳ_Submit Comment_____ä",
            commentsFormCancelButton: "Ĳ_Cancel___ä",
            errorInSubmittingComment: "Ĳ_Comment could not be submitted__________ä.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ĳ_Please enter a comment________ä.", // Shown when user submits a comment without any text/character
            placeHolderText: "Ĳ_Type a comment_____ä", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ĳ_No comments available_______ä", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ĳ_${0} character(s) remain________ä", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ĳ_No__ä" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "Ĳ_Gallery___ä",
            noAttachmentsAvailableText: "Ĳ_No attachments found_______ä" // Shown when no comments are available for the selected issue
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
