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
            error: "å_Unable to create map_______ø",
            zoomInTooltip: "å_Zoom in___ø",  // Command button to zoom in to the map
            zoomOutTooltip: "å_Zoom out___ø",  // Command button to zoom out of the map
            geolocationTooltip: "å_Current location______ø"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "å_No group configured_______ø", // Shown when no group is configured in the configuration file
            submitReportButtonText: "å_Submit a report______ø", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "å_List view____ø", // Go to List view tooltip text
            noFeatureGeomtery: "å_Feature cannot be displayed_________ø" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "å_Proceed as Guest______ø", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "å_Or__ø", // Or text on sign in screen
            signinOptionsText: "å_Sign in with_____ø:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "å_Please sign in_____ø", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "å_Sign in as a guest______ø", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "å_Sign in with Facebook_______ø", // Command button to access the application via Facebook login
            twitterLoginTooltip: "å_Sign in with Twitter_______ø", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "å_Sign in with Google+_______ø", // Command button to access the application via Google+ login
            agolLoginTooltip: "å_Sign in with ArcGIS_______ø" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "å_Owner___ø", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "å_Date dreated_____ø", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "å_Date modified_____ø", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "å_Description____ø", // Shown in the 'Map information' section describing the webmap
            snippet: "å_Summary___ø", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "å_Access and use constraints_________ø", // Shown in the map information section indicating the webmap license information
            accessInformation: "å_Credits___ø", // Shown in the 'Map information' section indicating account credits
            tags: "å_Tags__ø", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "å_Number of views______ø", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "å_Rating___ø", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "å_Configured group is invalid or no items have been shared with this group yet________________________ø.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "å_Map information______ø" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "å_No reports available in the current area_____________ø", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "å_Go to main list______ø", // Tooltip for back icon in list header
            gotoMapViewTooltip: "å_Map view___ø" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "å_My Reports____ø", // Command button shown in mobile menu list
            signIn: "å_Sign In___ø", // Command button shown in mobile menu list and in appheader
            signOut: "å_Sign Out___ø", // Command button shown in mobile menu list
            help: "å_Help__ø", // Command button shown in mobile menu list
            signInTooltip: "å_Sign in___ø", // Tooltip to 'Sign in' option
            signOutTooltip: "å_Sign out___ø", // Tooltip  to 'Sign out' option
            myReportTooltip: "å_View reports submitted by me_________ø", // Tooltip  to 'My Reports' option
            helpTooltip: "å_Help__ø" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "å_Details___ø", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "å_Attachments____ø", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "å_Browse___ø", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "å_Location___ø", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "å_Report It____ø", // Command button to submit the geoform to report an issue
            cancelButton: "å_Cancel___ø", //Command button to close the geoform
            requiredField: "å_(required)____ø", // Shown next to the field in which the data is mandatory
            selectDefaultText: "å_Select&hellip;_____ø", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "å_Please enter valid value_________ø.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "å_Layer fields are not configured to capture data_______________ø", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "å_Please enter an integer________ø", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "å_Please enter an integer________ø", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "å_Please enter a number_______ø", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "å_Please enter a number_______ø", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "å_Please provide values for all required fields_______________ø", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "å_Please select the location for your report______________ø", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "å_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ø", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "å_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ø", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "å_Issue could not be reported_________ø", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "å_attachment(s) selected________ø", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "å_${failed} of ${total} attachment(s) failed to upload_________________ø", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "å_Current location not available__________ø",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "å_Current location is out of basemap extent_____________ø",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "å_Report It____ø", // Command button to open the geoform
            cancelButtonTooltip: "å_Cancel___ø", //tooltip for cancel button
            geoformBackButtonTooltip: "å_Go to the report list_______ø" //tooltip for Geoform back button

        },
        locator: {
            addressText: "å_Address___ø:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "å_USNG__ø", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "å_MGRS__ø", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "å_Latitude/Longitude______ø", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "å_No results found______ø", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "å_Enter an address to search_________ø", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "å_Located address is out of basemap extent_____________ø", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "å_Search___ø", // Tooltip for search button
            clearButtonTooltip: "å_Clear search value______ø" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "å_My Reports____ø", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "å_My Reports____ø", // Command button to access issues reported by the logged in user
            noResultsFound: "å_No reports found______ø" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "å_Like__ø", // Command button shown in details panel
            likeButtonTooltip: "å_Vote for this report_______ø",  // Tooltip for command button shown in details panel
            commentButtonLabel: "å_Comment___ø", // Command button shown in details panel
            commentButtonTooltip: "å_Comment on this report________ø", // Tooltip for command button shown in details panel
            galleryButtonLabel: "å_Gallery___ø", // Command button shown in details panel
            galleryButtonTooltip: "å_See attached documents________ø", // Tooltip for command button shown in details panel
            mapButtonLabel: "å_View on Map____ø", // Command button shown in details panel
            mapButtonTooltip: "å_View the location of this report___________ø", // Tooltip for command button shown in details panel
            commentsListHeading: "å_Comments___ø", // List heading for Comments section in details panel
            unableToUpdateVoteField: "å_Your vote cannot be added at this time_____________ø.", // Error message for feature unable to update
            gotoIssueListTooltip: "å_Go to the report list_______ø" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "å_Votes for this report_______ø" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "å_Comment___ø",
            commentsFormSubmitButton: "å_Submit Comment_____ø",
            commentsFormCancelButton: "å_Cancel___ø",
            errorInSubmittingComment: "å_Comment could not be submitted__________ø.", // Shown when user is unable to add comments
            emptyCommentMessage: "å_Please enter a comment________ø.", // Shown when user submits a comment without any text/character
            placeHolderText: "å_Type a comment_____ø", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "å_No comments available_______ø", // Shown when no comments are available for the selected issue
            remainingTextCount: "å_${0} character(s) remain________ø", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "å_No__ø" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "å_Gallery___ø",
            noAttachmentsAvailableText: "å_No attachments found_______ø" // Shown when no comments are available for the selected issue
        }
    })
);
