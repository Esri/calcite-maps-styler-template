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
            error: "试_Unable to create map_______验",
            zoomInTooltip: "试_Zoom in___验",  // Command button to zoom in to the map
            zoomOutTooltip: "试_Zoom out___验",  // Command button to zoom out of the map
            geolocationTooltip: "试_Current location______验"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "试_No group configured_______验", // Shown when no group is configured in the configuration file
            submitReportButtonText: "试_Submit a report______验", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "试_List view____验", // Go to List view tooltip text
            noFeatureGeomtery: "试_Feature cannot be displayed_________验" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "试_Proceed as Guest______验", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "试_Or__验", // Or text on sign in screen
            signinOptionsText: "试_Sign in with_____验:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "试_Please sign in_____验", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "试_Sign in as a guest______验", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "试_Sign in with Facebook_______验", // Command button to access the application via Facebook login
            twitterLoginTooltip: "试_Sign in with Twitter_______验", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "试_Sign in with Google+_______验", // Command button to access the application via Google+ login
            agolLoginTooltip: "试_Sign in with ArcGIS_______验" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "试_Owner___验", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "试_Date dreated_____验", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "试_Date modified_____验", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "试_Description____验", // Shown in the 'Map information' section describing the webmap
            snippet: "试_Summary___验", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "试_Access and use constraints_________验", // Shown in the map information section indicating the webmap license information
            accessInformation: "试_Credits___验", // Shown in the 'Map information' section indicating account credits
            tags: "试_Tags__验", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "试_Number of views______验", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "试_Rating___验", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "试_Configured group is invalid or no items have been shared with this group yet________________________验.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "试_Map information______验" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "试_No reports available in the current area_____________验", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "试_Go to main list______验", // Tooltip for back icon in list header
            gotoMapViewTooltip: "试_Map view___验" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "试_My Reports____验", // Command button shown in mobile menu list
            signIn: "试_Sign In___验", // Command button shown in mobile menu list and in appheader
            signOut: "试_Sign Out___验", // Command button shown in mobile menu list
            help: "试_Help__验", // Command button shown in mobile menu list
            signInTooltip: "试_Sign in___验", // Tooltip to 'Sign in' option
            signOutTooltip: "试_Sign out___验", // Tooltip  to 'Sign out' option
            myReportTooltip: "试_View reports submitted by me_________验", // Tooltip  to 'My Reports' option
            helpTooltip: "试_Help__验" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "试_Details___验", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "试_Attachments____验", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "试_Browse___验", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "试_Location___验", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "试_Report It____验", // Command button to submit the geoform to report an issue
            cancelButton: "试_Cancel___验", //Command button to close the geoform
            requiredField: "试_(required)____验", // Shown next to the field in which the data is mandatory
            selectDefaultText: "试_Select&hellip;_____验", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "试_Please enter valid value_________验.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "试_Layer fields are not configured to capture data_______________验", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "试_Please enter an integer________验", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "试_Please enter an integer________验", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "试_Please enter a number_______验", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "试_Please enter a number_______验", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "试_Please provide values for all required fields_______________验", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "试_Please select the location for your report______________验", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "试_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________验", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "试_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________验", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "试_Issue could not be reported_________验", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "试_attachment(s) selected________验", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "试_${failed} of ${total} attachment(s) failed to upload_________________验", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "试_Current location not available__________验",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "试_Current location is out of basemap extent_____________验",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "试_Report It____验", // Command button to open the geoform
            cancelButtonTooltip: "试_Cancel___验", //tooltip for cancel button
            geoformBackButtonTooltip: "试_Go to the report list_______验" //tooltip for Geoform back button

        },
        locator: {
            addressText: "试_Address___验:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "试_USNG__验", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "试_MGRS__验", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "试_Latitude/Longitude______验", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "试_No results found______验", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "试_Enter an address to search_________验", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "试_Located address is out of basemap extent_____________验", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "试_Search___验", // Tooltip for search button
            clearButtonTooltip: "试_Clear search value______验" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "试_My Reports____验", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "试_My Reports____验", // Command button to access issues reported by the logged in user
            noResultsFound: "试_No reports found______验" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "试_Like__验", // Command button shown in details panel
            likeButtonTooltip: "试_Vote for this report_______验",  // Tooltip for command button shown in details panel
            commentButtonLabel: "试_Comment___验", // Command button shown in details panel
            commentButtonTooltip: "试_Comment on this report________验", // Tooltip for command button shown in details panel
            galleryButtonLabel: "试_Gallery___验", // Command button shown in details panel
            galleryButtonTooltip: "试_See attached documents________验", // Tooltip for command button shown in details panel
            mapButtonLabel: "试_View on Map____验", // Command button shown in details panel
            mapButtonTooltip: "试_View the location of this report___________验", // Tooltip for command button shown in details panel
            commentsListHeading: "试_Comments___验", // List heading for Comments section in details panel
            unableToUpdateVoteField: "试_Your vote cannot be added at this time_____________验.", // Error message for feature unable to update
            gotoIssueListTooltip: "试_Go to the report list_______验" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "试_Votes for this report_______验" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "试_Comment___验",
            commentsFormSubmitButton: "试_Submit Comment_____验",
            commentsFormCancelButton: "试_Cancel___验",
            errorInSubmittingComment: "试_Comment could not be submitted__________验.", // Shown when user is unable to add comments
            emptyCommentMessage: "试_Please enter a comment________验.", // Shown when user submits a comment without any text/character
            placeHolderText: "试_Type a comment_____验", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "试_No comments available_______验", // Shown when no comments are available for the selected issue
            remainingTextCount: "试_${0} character(s) remain________验", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "试_No__验" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "试_Gallery___验",
            noAttachmentsAvailableText: "试_No attachments found_______验" // Shown when no comments are available for the selected issue
        }
    })
);
