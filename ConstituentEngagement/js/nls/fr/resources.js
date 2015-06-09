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
            error: "æ_Unable to create map_______Â",
            zoomInTooltip: "æ_Zoom in___Â",  // Command button to zoom in to the map
            zoomOutTooltip: "æ_Zoom out___Â",  // Command button to zoom out of the map
            geolocationTooltip: "æ_Current location______Â"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "æ_No group configured_______Â", // Shown when no group is configured in the configuration file
            submitReportButtonText: "æ_Submit a report______Â", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "æ_List view____Â", // Go to List view tooltip text
            noFeatureGeomtery: "æ_Feature cannot be displayed_________Â" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "æ_Proceed as Guest______Â", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "æ_Or__Â", // Or text on sign in screen
            signinOptionsText: "æ_Sign in with_____Â:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "æ_Please sign in_____Â", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "æ_Sign in as a guest______Â", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "æ_Sign in with Facebook_______Â", // Command button to access the application via Facebook login
            twitterLoginTooltip: "æ_Sign in with Twitter_______Â", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "æ_Sign in with Google+_______Â", // Command button to access the application via Google+ login
            agolLoginTooltip: "æ_Sign in with ArcGIS_______Â" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "æ_Owner___Â", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "æ_Date dreated_____Â", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "æ_Date modified_____Â", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "æ_Description____Â", // Shown in the 'Map information' section describing the webmap
            snippet: "æ_Summary___Â", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "æ_Access and use constraints_________Â", // Shown in the map information section indicating the webmap license information
            accessInformation: "æ_Credits___Â", // Shown in the 'Map information' section indicating account credits
            tags: "æ_Tags__Â", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "æ_Number of views______Â", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "æ_Rating___Â", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "æ_Configured group is invalid or no items have been shared with this group yet________________________Â.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "æ_Map information______Â" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "æ_No reports available in the current area_____________Â", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "æ_Go to main list______Â", // Tooltip for back icon in list header
            gotoMapViewTooltip: "æ_Map view___Â" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "æ_My Reports____Â", // Command button shown in mobile menu list
            signIn: "æ_Sign In___Â", // Command button shown in mobile menu list and in appheader
            signOut: "æ_Sign Out___Â", // Command button shown in mobile menu list
            help: "æ_Help__Â", // Command button shown in mobile menu list
            signInTooltip: "æ_Sign in___Â", // Tooltip to 'Sign in' option
            signOutTooltip: "æ_Sign out___Â", // Tooltip  to 'Sign out' option
            myReportTooltip: "æ_View reports submitted by me_________Â", // Tooltip  to 'My Reports' option
            helpTooltip: "æ_Help__Â" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "æ_Details___Â", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "æ_Attachments____Â", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "æ_Browse___Â", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "æ_Location___Â", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "æ_Report It____Â", // Command button to submit the geoform to report an issue
            cancelButton: "æ_Cancel___Â", //Command button to close the geoform
            requiredField: "æ_(required)____Â", // Shown next to the field in which the data is mandatory
            selectDefaultText: "æ_Select&hellip;_____Â", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "æ_Please enter valid value_________Â.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "æ_Layer fields are not configured to capture data_______________Â", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "æ_Please enter an integer________Â", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "æ_Please enter an integer________Â", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "æ_Please enter a number_______Â", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "æ_Please enter a number_______Â", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "æ_Please provide values for all required fields_______________Â", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "æ_Please select the location for your report______________Â", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "æ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________Â", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "æ_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________Â", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "æ_Issue could not be reported_________Â", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "æ_attachment(s) selected________Â", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "æ_${failed} of ${total} attachment(s) failed to upload_________________Â", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "æ_Current location not available__________Â",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "æ_Current location is out of basemap extent_____________Â",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "æ_Report It____Â", // Command button to open the geoform
            cancelButtonTooltip: "æ_Cancel___Â", //tooltip for cancel button
            geoformBackButtonTooltip: "æ_Go to the report list_______Â" //tooltip for Geoform back button

        },
        locator: {
            addressText: "æ_Address___Â:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "æ_USNG__Â", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "æ_MGRS__Â", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "æ_Latitude/Longitude______Â", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "æ_No results found______Â", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "æ_Enter an address to search_________Â", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "æ_Located address is out of basemap extent_____________Â", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "æ_Search___Â", // Tooltip for search button
            clearButtonTooltip: "æ_Clear search value______Â" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "æ_My Reports____Â", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "æ_My Reports____Â", // Command button to access issues reported by the logged in user
            noResultsFound: "æ_No reports found______Â" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "æ_Like__Â", // Command button shown in details panel
            likeButtonTooltip: "æ_Vote for this report_______Â",  // Tooltip for command button shown in details panel
            commentButtonLabel: "æ_Comment___Â", // Command button shown in details panel
            commentButtonTooltip: "æ_Comment on this report________Â", // Tooltip for command button shown in details panel
            galleryButtonLabel: "æ_Gallery___Â", // Command button shown in details panel
            galleryButtonTooltip: "æ_See attached documents________Â", // Tooltip for command button shown in details panel
            mapButtonLabel: "æ_View on Map____Â", // Command button shown in details panel
            mapButtonTooltip: "æ_View the location of this report___________Â", // Tooltip for command button shown in details panel
            commentsListHeading: "æ_Comments___Â", // List heading for Comments section in details panel
            unableToUpdateVoteField: "æ_Your vote cannot be added at this time_____________Â.", // Error message for feature unable to update
            gotoIssueListTooltip: "æ_Go to the report list_______Â" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "æ_Votes for this report_______Â" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "æ_Comment___Â",
            commentsFormSubmitButton: "æ_Submit Comment_____Â",
            commentsFormCancelButton: "æ_Cancel___Â",
            errorInSubmittingComment: "æ_Comment could not be submitted__________Â.", // Shown when user is unable to add comments
            emptyCommentMessage: "æ_Please enter a comment________Â.", // Shown when user submits a comment without any text/character
            placeHolderText: "æ_Type a comment_____Â", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "æ_No comments available_______Â", // Shown when no comments are available for the selected issue
            remainingTextCount: "æ_${0} character(s) remain________Â", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "æ_No__Â" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "æ_Gallery___Â",
            noAttachmentsAvailableText: "æ_No attachments found_______Â" // Shown when no comments are available for the selected issue
        }
    })
);
