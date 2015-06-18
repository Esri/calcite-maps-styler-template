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
define(
     ({
        map: {
            error: "Đ_Unable to create map_______ớ",
            zoomInTooltip: "Đ_Zoom in___ớ",  // Command button to zoom in to the map
            zoomOutTooltip: "Đ_Zoom out___ớ",  // Command button to zoom out of the map
            geolocationTooltip: "Đ_Current location______ớ"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "Đ_No group configured_______ớ", // Shown when no group is configured in the configuration file
            submitReportButtonText: "Đ_Submit a report______ớ", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "Đ_List view____ớ", // Go to List view tooltip text
            noFeatureGeomtery: "Đ_Feature cannot be displayed_________ớ" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "Đ_Proceed as Guest______ớ", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "Đ_Or__ớ", // Or text on sign in screen
            signinOptionsText: "Đ_Sign in with_____ớ:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "Đ_Please sign in_____ớ", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "Đ_Sign in as a guest______ớ", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "Đ_Sign in with Facebook_______ớ", // Command button to access the application via Facebook login
            twitterLoginTooltip: "Đ_Sign in with Twitter_______ớ", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "Đ_Sign in with Google+_______ớ", // Command button to access the application via Google+ login
            agolLoginTooltip: "Đ_Sign in with ArcGIS_______ớ" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "Đ_Owner___ớ", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "Đ_Date dreated_____ớ", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "Đ_Date modified_____ớ", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "Đ_Description____ớ", // Shown in the 'Map information' section describing the webmap
            snippet: "Đ_Summary___ớ", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "Đ_Access and use constraints_________ớ", // Shown in the map information section indicating the webmap license information
            accessInformation: "Đ_Credits___ớ", // Shown in the 'Map information' section indicating account credits
            tags: "Đ_Tags__ớ", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "Đ_Number of views______ớ", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "Đ_Rating___ớ", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "Đ_Configured group is invalid or no items have been shared with this group yet________________________ớ.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "Đ_Map information______ớ" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "Đ_No reports available in the current area_____________ớ", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "Đ_Go to main list______ớ", // Tooltip for back icon in list header
            gotoMapViewTooltip: "Đ_Map view___ớ" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "Đ_My Reports____ớ", // Command button shown in mobile menu list
            signIn: "Đ_Sign In___ớ", // Command button shown in mobile menu list and in appheader
            signOut: "Đ_Sign Out___ớ", // Command button shown in mobile menu list
            help: "Đ_Help__ớ", // Command button shown in mobile menu list
            signInTooltip: "Đ_Sign in___ớ", // Tooltip to 'Sign in' option
            signOutTooltip: "Đ_Sign out___ớ", // Tooltip  to 'Sign out' option
            myReportTooltip: "Đ_View reports submitted by me_________ớ", // Tooltip  to 'My Reports' option
            helpTooltip: "Đ_Help__ớ" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "Đ_Details___ớ", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Đ_Attachments____ớ", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Đ_Browse___ớ", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Đ_Location___ớ", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Đ_Report It____ớ", // Command button to submit the geoform to report an issue
            cancelButton: "Đ_Cancel___ớ", //Command button to close the geoform
            requiredField: "Đ_(required)____ớ", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Đ_Select&hellip;_____ớ", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Đ_Please enter valid value_________ớ.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Đ_Layer fields are not configured to capture data_______________ớ", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Đ_Please enter an integer________ớ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Đ_Please enter an integer________ớ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Đ_Please enter a number_______ớ", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Đ_Please enter a number_______ớ", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Đ_Please provide values for all required fields_______________ớ", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Đ_Please select the location for your report______________ớ", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Đ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ớ", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Đ_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ớ", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Đ_Issue could not be reported_________ớ", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Đ_attachment(s) selected________ớ", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Đ_${failed} of ${total} attachment(s) failed to upload_________________ớ", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Đ_Current location not available__________ớ",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Đ_Current location is out of basemap extent_____________ớ",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Đ_Report It____ớ", // Command button to open the geoform
            cancelButtonTooltip: "Đ_Cancel___ớ", //tooltip for cancel button
            geoformBackButtonTooltip: "Đ_Go to the report list_______ớ" //tooltip for Geoform back button

        },
        locator: {
            addressText: "Đ_Address___ớ:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "Đ_USNG__ớ", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "Đ_MGRS__ớ", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "Đ_Latitude/Longitude______ớ", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "Đ_No results found______ớ", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "Đ_Enter an address to search_________ớ", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "Đ_Located address is out of basemap extent_____________ớ", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "Đ_Search___ớ", // Tooltip for search button
            clearButtonTooltip: "Đ_Clear search value______ớ" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "Đ_My Reports____ớ", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "Đ_My Reports____ớ", // Command button to access issues reported by the logged in user
            noResultsFound: "Đ_No reports found______ớ" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "Đ_Like__ớ", // Command button shown in details panel
            likeButtonTooltip: "Đ_Vote for this report_______ớ",  // Tooltip for command button shown in details panel
            commentButtonLabel: "Đ_Comment___ớ", // Command button shown in details panel
            commentButtonTooltip: "Đ_Comment on this report________ớ", // Tooltip for command button shown in details panel
            galleryButtonLabel: "Đ_Gallery___ớ", // Command button shown in details panel
            galleryButtonTooltip: "Đ_See attached documents________ớ", // Tooltip for command button shown in details panel
            mapButtonLabel: "Đ_View on Map____ớ", // Command button shown in details panel
            mapButtonTooltip: "Đ_View the location of this report___________ớ", // Tooltip for command button shown in details panel
            commentsListHeading: "Đ_Comments___ớ", // List heading for Comments section in details panel
            unableToUpdateVoteField: "Đ_Your vote cannot be added at this time_____________ớ.", // Error message for feature unable to update
            gotoIssueListTooltip: "Đ_Go to the report list_______ớ" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "Đ_Votes for this report_______ớ" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "Đ_Comment___ớ",
            commentsFormSubmitButton: "Đ_Submit Comment_____ớ",
            commentsFormCancelButton: "Đ_Cancel___ớ",
            errorInSubmittingComment: "Đ_Comment could not be submitted__________ớ.", // Shown when user is unable to add comments
            emptyCommentMessage: "Đ_Please enter a comment________ớ.", // Shown when user submits a comment without any text/character
            placeHolderText: "Đ_Type a comment_____ớ", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Đ_No comments available_______ớ", // Shown when no comments are available for the selected issue
            remainingTextCount: "Đ_${0} character(s) remain________ớ", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Đ_No__ớ" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "Đ_Gallery___ớ",
            noAttachmentsAvailableText: "Đ_No attachments found_______ớ" // Shown when no comments are available for the selected issue
        }
    })
);
