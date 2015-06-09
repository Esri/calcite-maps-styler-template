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
            error: "á_Unable to create map_______Ó",
            zoomInTooltip: "á_Zoom in___Ó",  // Command button to zoom in to the map
            zoomOutTooltip: "á_Zoom out___Ó",  // Command button to zoom out of the map
            geolocationTooltip: "á_Current location______Ó"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "á_No group configured_______Ó", // Shown when no group is configured in the configuration file
            submitReportButtonText: "á_Submit a report______Ó", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "á_List view____Ó", // Go to List view tooltip text
            noFeatureGeomtery: "á_Feature cannot be displayed_________Ó" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "á_Proceed as Guest______Ó", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "á_Or__Ó", // Or text on sign in screen
            signinOptionsText: "á_Sign in with_____Ó:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "á_Please sign in_____Ó", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "á_Sign in as a guest______Ó", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "á_Sign in with Facebook_______Ó", // Command button to access the application via Facebook login
            twitterLoginTooltip: "á_Sign in with Twitter_______Ó", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "á_Sign in with Google+_______Ó", // Command button to access the application via Google+ login
            agolLoginTooltip: "á_Sign in with ArcGIS_______Ó" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "á_Owner___Ó", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "á_Date dreated_____Ó", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "á_Date modified_____Ó", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "á_Description____Ó", // Shown in the 'Map information' section describing the webmap
            snippet: "á_Summary___Ó", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "á_Access and use constraints_________Ó", // Shown in the map information section indicating the webmap license information
            accessInformation: "á_Credits___Ó", // Shown in the 'Map information' section indicating account credits
            tags: "á_Tags__Ó", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "á_Number of views______Ó", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "á_Rating___Ó", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "á_Configured group is invalid or no items have been shared with this group yet________________________Ó.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "á_Map information______Ó" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "á_No reports available in the current area_____________Ó", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "á_Go to main list______Ó", // Tooltip for back icon in list header
            gotoMapViewTooltip: "á_Map view___Ó" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "á_My Reports____Ó", // Command button shown in mobile menu list
            signIn: "á_Sign In___Ó", // Command button shown in mobile menu list and in appheader
            signOut: "á_Sign Out___Ó", // Command button shown in mobile menu list
            help: "á_Help__Ó", // Command button shown in mobile menu list
            signInTooltip: "á_Sign in___Ó", // Tooltip to 'Sign in' option
            signOutTooltip: "á_Sign out___Ó", // Tooltip  to 'Sign out' option
            myReportTooltip: "á_View reports submitted by me_________Ó", // Tooltip  to 'My Reports' option
            helpTooltip: "á_Help__Ó" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "á_Details___Ó", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "á_Attachments____Ó", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "á_Browse___Ó", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "á_Location___Ó", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "á_Report It____Ó", // Command button to submit the geoform to report an issue
            cancelButton: "á_Cancel___Ó", //Command button to close the geoform
            requiredField: "á_(required)____Ó", // Shown next to the field in which the data is mandatory
            selectDefaultText: "á_Select&hellip;_____Ó", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "á_Please enter valid value_________Ó.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "á_Layer fields are not configured to capture data_______________Ó", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "á_Please enter an integer________Ó", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "á_Please enter an integer________Ó", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "á_Please enter a number_______Ó", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "á_Please enter a number_______Ó", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "á_Please provide values for all required fields_______________Ó", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "á_Please select the location for your report______________Ó", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "á_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________Ó", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "á_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________Ó", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "á_Issue could not be reported_________Ó", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "á_attachment(s) selected________Ó", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "á_${failed} of ${total} attachment(s) failed to upload_________________Ó", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "á_Current location not available__________Ó",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "á_Current location is out of basemap extent_____________Ó",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "á_Report It____Ó", // Command button to open the geoform
            cancelButtonTooltip: "á_Cancel___Ó", //tooltip for cancel button
            geoformBackButtonTooltip: "á_Go to the report list_______Ó" //tooltip for Geoform back button

        },
        locator: {
            addressText: "á_Address___Ó:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "á_USNG__Ó", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "á_MGRS__Ó", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "á_Latitude/Longitude______Ó", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "á_No results found______Ó", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "á_Enter an address to search_________Ó", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "á_Located address is out of basemap extent_____________Ó", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "á_Search___Ó", // Tooltip for search button
            clearButtonTooltip: "á_Clear search value______Ó" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "á_My Reports____Ó", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "á_My Reports____Ó", // Command button to access issues reported by the logged in user
            noResultsFound: "á_No reports found______Ó" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "á_Like__Ó", // Command button shown in details panel
            likeButtonTooltip: "á_Vote for this report_______Ó",  // Tooltip for command button shown in details panel
            commentButtonLabel: "á_Comment___Ó", // Command button shown in details panel
            commentButtonTooltip: "á_Comment on this report________Ó", // Tooltip for command button shown in details panel
            galleryButtonLabel: "á_Gallery___Ó", // Command button shown in details panel
            galleryButtonTooltip: "á_See attached documents________Ó", // Tooltip for command button shown in details panel
            mapButtonLabel: "á_View on Map____Ó", // Command button shown in details panel
            mapButtonTooltip: "á_View the location of this report___________Ó", // Tooltip for command button shown in details panel
            commentsListHeading: "á_Comments___Ó", // List heading for Comments section in details panel
            unableToUpdateVoteField: "á_Your vote cannot be added at this time_____________Ó.", // Error message for feature unable to update
            gotoIssueListTooltip: "á_Go to the report list_______Ó" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "á_Votes for this report_______Ó" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "á_Comment___Ó",
            commentsFormSubmitButton: "á_Submit Comment_____Ó",
            commentsFormCancelButton: "á_Cancel___Ó",
            errorInSubmittingComment: "á_Comment could not be submitted__________Ó.", // Shown when user is unable to add comments
            emptyCommentMessage: "á_Please enter a comment________Ó.", // Shown when user submits a comment without any text/character
            placeHolderText: "á_Type a comment_____Ó", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "á_No comments available_______Ó", // Shown when no comments are available for the selected issue
            remainingTextCount: "á_${0} character(s) remain________Ó", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "á_No__Ó" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "á_Gallery___Ó",
            noAttachmentsAvailableText: "á_No attachments found_______Ó" // Shown when no comments are available for the selected issue
        }
    })
);
