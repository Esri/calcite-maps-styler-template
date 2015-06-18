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
            error: "試_Unable to create map_______驗",
            zoomInTooltip: "試_Zoom in___驗",  // Command button to zoom in to the map
            zoomOutTooltip: "試_Zoom out___驗",  // Command button to zoom out of the map
            geolocationTooltip: "試_Current location______驗"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "試_No group configured_______驗", // Shown when no group is configured in the configuration file
            submitReportButtonText: "試_Submit a report______驗", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "試_List view____驗", // Go to List view tooltip text
            noFeatureGeomtery: "試_Feature cannot be displayed_________驗" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "試_Proceed as Guest______驗", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "試_Or__驗", // Or text on sign in screen
            signinOptionsText: "試_Sign in with_____驗:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "試_Please sign in_____驗", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "試_Sign in as a guest______驗", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "試_Sign in with Facebook_______驗", // Command button to access the application via Facebook login
            twitterLoginTooltip: "試_Sign in with Twitter_______驗", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "試_Sign in with Google+_______驗", // Command button to access the application via Google+ login
            agolLoginTooltip: "試_Sign in with ArcGIS_______驗" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "試_Owner___驗", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "試_Date dreated_____驗", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "試_Date modified_____驗", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "試_Description____驗", // Shown in the 'Map information' section describing the webmap
            snippet: "試_Summary___驗", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "試_Access and use constraints_________驗", // Shown in the map information section indicating the webmap license information
            accessInformation: "試_Credits___驗", // Shown in the 'Map information' section indicating account credits
            tags: "試_Tags__驗", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "試_Number of views______驗", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "試_Rating___驗", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "試_Configured group is invalid or no items have been shared with this group yet________________________驗.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "試_Map information______驗" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "試_No reports available in the current area_____________驗", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "試_Go to main list______驗", // Tooltip for back icon in list header
            gotoMapViewTooltip: "試_Map view___驗" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "試_My Reports____驗", // Command button shown in mobile menu list
            signIn: "試_Sign In___驗", // Command button shown in mobile menu list and in appheader
            signOut: "試_Sign Out___驗", // Command button shown in mobile menu list
            help: "試_Help__驗", // Command button shown in mobile menu list
            signInTooltip: "試_Sign in___驗", // Tooltip to 'Sign in' option
            signOutTooltip: "試_Sign out___驗", // Tooltip  to 'Sign out' option
            myReportTooltip: "試_View reports submitted by me_________驗", // Tooltip  to 'My Reports' option
            helpTooltip: "試_Help__驗" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "試_Details___驗", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "試_Attachments____驗", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "試_Browse___驗", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "試_Location___驗", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "試_Report It____驗", // Command button to submit the geoform to report an issue
            cancelButton: "試_Cancel___驗", //Command button to close the geoform
            requiredField: "試_(required)____驗", // Shown next to the field in which the data is mandatory
            selectDefaultText: "試_Select&hellip;_____驗", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "試_Please enter valid value_________驗.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "試_Layer fields are not configured to capture data_______________驗", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "試_Please enter an integer________驗", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "試_Please enter an integer________驗", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "試_Please enter a number_______驗", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "試_Please enter a number_______驗", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "試_Please provide values for all required fields_______________驗", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "試_Please select the location for your report______________驗", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "試_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________驗", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "試_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________驗", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "試_Issue could not be reported_________驗", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "試_attachment(s) selected________驗", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "試_${failed} of ${total} attachment(s) failed to upload_________________驗", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "試_Current location not available__________驗",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "試_Current location is out of basemap extent_____________驗",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "試_Report It____驗", // Command button to open the geoform
            cancelButtonTooltip: "試_Cancel___驗", //tooltip for cancel button
            geoformBackButtonTooltip: "試_Go to the report list_______驗" //tooltip for Geoform back button

        },
        locator: {
            addressText: "試_Address___驗:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "試_USNG__驗", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "試_MGRS__驗", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "試_Latitude/Longitude______驗", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "試_No results found______驗", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "試_Enter an address to search_________驗", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "試_Located address is out of basemap extent_____________驗", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "試_Search___驗", // Tooltip for search button
            clearButtonTooltip: "試_Clear search value______驗" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "試_My Reports____驗", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "試_My Reports____驗", // Command button to access issues reported by the logged in user
            noResultsFound: "試_No reports found______驗" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "試_Like__驗", // Command button shown in details panel
            likeButtonTooltip: "試_Vote for this report_______驗",  // Tooltip for command button shown in details panel
            commentButtonLabel: "試_Comment___驗", // Command button shown in details panel
            commentButtonTooltip: "試_Comment on this report________驗", // Tooltip for command button shown in details panel
            galleryButtonLabel: "試_Gallery___驗", // Command button shown in details panel
            galleryButtonTooltip: "試_See attached documents________驗", // Tooltip for command button shown in details panel
            mapButtonLabel: "試_View on Map____驗", // Command button shown in details panel
            mapButtonTooltip: "試_View the location of this report___________驗", // Tooltip for command button shown in details panel
            commentsListHeading: "試_Comments___驗", // List heading for Comments section in details panel
            unableToUpdateVoteField: "試_Your vote cannot be added at this time_____________驗.", // Error message for feature unable to update
            gotoIssueListTooltip: "試_Go to the report list_______驗" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "試_Votes for this report_______驗" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "試_Comment___驗",
            commentsFormSubmitButton: "試_Submit Comment_____驗",
            commentsFormCancelButton: "試_Cancel___驗",
            errorInSubmittingComment: "試_Comment could not be submitted__________驗.", // Shown when user is unable to add comments
            emptyCommentMessage: "試_Please enter a comment________驗.", // Shown when user submits a comment without any text/character
            placeHolderText: "試_Type a comment_____驗", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "試_No comments available_______驗", // Shown when no comments are available for the selected issue
            remainingTextCount: "試_${0} character(s) remain________驗", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "試_No__驗" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "試_Gallery___驗",
            noAttachmentsAvailableText: "試_No attachments found_______驗" // Shown when no comments are available for the selected issue
        }
    })
);
