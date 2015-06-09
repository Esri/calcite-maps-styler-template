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
            error: "é_Unable to create map_______È",
            zoomInTooltip: "é_Zoom in___È",  // Command button to zoom in to the map
            zoomOutTooltip: "é_Zoom out___È",  // Command button to zoom out of the map
            geolocationTooltip: "é_Current location______È"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "é_No group configured_______È", // Shown when no group is configured in the configuration file
            submitReportButtonText: "é_Submit a report______È", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "é_List view____È", // Go to List view tooltip text
            noFeatureGeomtery: "é_Feature cannot be displayed_________È" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "é_Proceed as Guest______È", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "é_Or__È", // Or text on sign in screen
            signinOptionsText: "é_Sign in with_____È:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "é_Please sign in_____È", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "é_Sign in as a guest______È", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "é_Sign in with Facebook_______È", // Command button to access the application via Facebook login
            twitterLoginTooltip: "é_Sign in with Twitter_______È", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "é_Sign in with Google+_______È", // Command button to access the application via Google+ login
            agolLoginTooltip: "é_Sign in with ArcGIS_______È" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "é_Owner___È", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "é_Date dreated_____È", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "é_Date modified_____È", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "é_Description____È", // Shown in the 'Map information' section describing the webmap
            snippet: "é_Summary___È", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "é_Access and use constraints_________È", // Shown in the map information section indicating the webmap license information
            accessInformation: "é_Credits___È", // Shown in the 'Map information' section indicating account credits
            tags: "é_Tags__È", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "é_Number of views______È", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "é_Rating___È", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "é_Configured group is invalid or no items have been shared with this group yet________________________È.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "é_Map information______È" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "é_No reports available in the current area_____________È", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "é_Go to main list______È", // Tooltip for back icon in list header
            gotoMapViewTooltip: "é_Map view___È" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "é_My Reports____È", // Command button shown in mobile menu list
            signIn: "é_Sign In___È", // Command button shown in mobile menu list and in appheader
            signOut: "é_Sign Out___È", // Command button shown in mobile menu list
            help: "é_Help__È", // Command button shown in mobile menu list
            signInTooltip: "é_Sign in___È", // Tooltip to 'Sign in' option
            signOutTooltip: "é_Sign out___È", // Tooltip  to 'Sign out' option
            myReportTooltip: "é_View reports submitted by me_________È", // Tooltip  to 'My Reports' option
            helpTooltip: "é_Help__È" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "é_Details___È", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "é_Attachments____È", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "é_Browse___È", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "é_Location___È", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "é_Report It____È", // Command button to submit the geoform to report an issue
            cancelButton: "é_Cancel___È", //Command button to close the geoform
            requiredField: "é_(required)____È", // Shown next to the field in which the data is mandatory
            selectDefaultText: "é_Select&hellip;_____È", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "é_Please enter valid value_________È.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "é_Layer fields are not configured to capture data_______________È", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "é_Please enter an integer________È", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "é_Please enter an integer________È", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "é_Please enter a number_______È", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "é_Please enter a number_______È", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "é_Please provide values for all required fields_______________È", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "é_Please select the location for your report______________È", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "é_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________È", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "é_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________È", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "é_Issue could not be reported_________È", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "é_attachment(s) selected________È", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "é_${failed} of ${total} attachment(s) failed to upload_________________È", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "é_Current location not available__________È",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "é_Current location is out of basemap extent_____________È",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "é_Report It____È", // Command button to open the geoform
            cancelButtonTooltip: "é_Cancel___È", //tooltip for cancel button
            geoformBackButtonTooltip: "é_Go to the report list_______È" //tooltip for Geoform back button

        },
        locator: {
            addressText: "é_Address___È:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "é_USNG__È", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "é_MGRS__È", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "é_Latitude/Longitude______È", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "é_No results found______È", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "é_Enter an address to search_________È", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "é_Located address is out of basemap extent_____________È", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "é_Search___È", // Tooltip for search button
            clearButtonTooltip: "é_Clear search value______È" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "é_My Reports____È", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "é_My Reports____È", // Command button to access issues reported by the logged in user
            noResultsFound: "é_No reports found______È" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "é_Like__È", // Command button shown in details panel
            likeButtonTooltip: "é_Vote for this report_______È",  // Tooltip for command button shown in details panel
            commentButtonLabel: "é_Comment___È", // Command button shown in details panel
            commentButtonTooltip: "é_Comment on this report________È", // Tooltip for command button shown in details panel
            galleryButtonLabel: "é_Gallery___È", // Command button shown in details panel
            galleryButtonTooltip: "é_See attached documents________È", // Tooltip for command button shown in details panel
            mapButtonLabel: "é_View on Map____È", // Command button shown in details panel
            mapButtonTooltip: "é_View the location of this report___________È", // Tooltip for command button shown in details panel
            commentsListHeading: "é_Comments___È", // List heading for Comments section in details panel
            unableToUpdateVoteField: "é_Your vote cannot be added at this time_____________È.", // Error message for feature unable to update
            gotoIssueListTooltip: "é_Go to the report list_______È" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "é_Votes for this report_______È" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "é_Comment___È",
            commentsFormSubmitButton: "é_Submit Comment_____È",
            commentsFormCancelButton: "é_Cancel___È",
            errorInSubmittingComment: "é_Comment could not be submitted__________È.", // Shown when user is unable to add comments
            emptyCommentMessage: "é_Please enter a comment________È.", // Shown when user submits a comment without any text/character
            placeHolderText: "é_Type a comment_____È", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "é_No comments available_______È", // Shown when no comments are available for the selected issue
            remainingTextCount: "é_${0} character(s) remain________È", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "é_No__È" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "é_Gallery___È",
            noAttachmentsAvailableText: "é_No attachments found_______È" // Shown when no comments are available for the selected issue
        }
    })
);
