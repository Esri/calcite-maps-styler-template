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
            error: "Į_Unable to create map_______š",
            zoomInTooltip: "Į_Zoom in___š",  // Command button to zoom in to the map
            zoomOutTooltip: "Į_Zoom out___š",  // Command button to zoom out of the map
            geolocationTooltip: "Į_Current location______š"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "Į_No group configured_______š", // Shown when no group is configured in the configuration file
            submitReportButtonText: "Į_Submit a report______š", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "Į_List view____š", // Go to List view tooltip text
            noFeatureGeomtery: "Į_Feature cannot be displayed_________š" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "Į_Proceed as Guest______š", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "Į_Or__š", // Or text on sign in screen
            signinOptionsText: "Į_Sign in with_____š:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "Į_Please sign in_____š", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "Į_Sign in as a guest______š", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "Į_Sign in with Facebook_______š", // Command button to access the application via Facebook login
            twitterLoginTooltip: "Į_Sign in with Twitter_______š", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "Į_Sign in with Google+_______š", // Command button to access the application via Google+ login
            agolLoginTooltip: "Į_Sign in with ArcGIS_______š" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "Į_Owner___š", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "Į_Date dreated_____š", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "Į_Date modified_____š", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "Į_Description____š", // Shown in the 'Map information' section describing the webmap
            snippet: "Į_Summary___š", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "Į_Access and use constraints_________š", // Shown in the map information section indicating the webmap license information
            accessInformation: "Į_Credits___š", // Shown in the 'Map information' section indicating account credits
            tags: "Į_Tags__š", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "Į_Number of views______š", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "Į_Rating___š", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "Į_Configured group is invalid or no items have been shared with this group yet________________________š.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "Į_Map information______š" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "Į_No reports available in the current area_____________š", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "Į_Go to main list______š", // Tooltip for back icon in list header
            gotoMapViewTooltip: "Į_Map view___š" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "Į_My Reports____š", // Command button shown in mobile menu list
            signIn: "Į_Sign In___š", // Command button shown in mobile menu list and in appheader
            signOut: "Į_Sign Out___š", // Command button shown in mobile menu list
            help: "Į_Help__š", // Command button shown in mobile menu list
            signInTooltip: "Į_Sign in___š", // Tooltip to 'Sign in' option
            signOutTooltip: "Į_Sign out___š", // Tooltip  to 'Sign out' option
            myReportTooltip: "Į_View reports submitted by me_________š", // Tooltip  to 'My Reports' option
            helpTooltip: "Į_Help__š" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "Į_Details___š", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Į_Attachments____š", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Į_Browse___š", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Į_Location___š", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Į_Report It____š", // Command button to submit the geoform to report an issue
            cancelButton: "Į_Cancel___š", //Command button to close the geoform
            requiredField: "Į_(required)____š", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Į_Select&hellip;_____š", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Į_Please enter valid value_________š.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Į_Layer fields are not configured to capture data_______________š", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Į_Please enter an integer________š", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Į_Please enter an integer________š", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Į_Please enter a number_______š", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Į_Please enter a number_______š", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Į_Please provide values for all required fields_______________š", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Į_Please select the location for your report______________š", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Į_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________š", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Į_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________š", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Į_Issue could not be reported_________š", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Į_attachment(s) selected________š", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Į_${failed} of ${total} attachment(s) failed to upload_________________š", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Į_Current location not available__________š",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Į_Current location is out of basemap extent_____________š",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Į_Report It____š", // Command button to open the geoform
            cancelButtonTooltip: "Į_Cancel___š", //tooltip for cancel button
            geoformBackButtonTooltip: "Į_Go to the report list_______š" //tooltip for Geoform back button

        },
        locator: {
            addressText: "Į_Address___š:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "Į_USNG__š", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "Į_MGRS__š", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "Į_Latitude/Longitude______š", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "Į_No results found______š", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "Į_Enter an address to search_________š", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "Į_Located address is out of basemap extent_____________š", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "Į_Search___š", // Tooltip for search button
            clearButtonTooltip: "Į_Clear search value______š" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "Į_My Reports____š", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "Į_My Reports____š", // Command button to access issues reported by the logged in user
            noResultsFound: "Į_No reports found______š" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "Į_Like__š", // Command button shown in details panel
            likeButtonTooltip: "Į_Vote for this report_______š",  // Tooltip for command button shown in details panel
            commentButtonLabel: "Į_Comment___š", // Command button shown in details panel
            commentButtonTooltip: "Į_Comment on this report________š", // Tooltip for command button shown in details panel
            galleryButtonLabel: "Į_Gallery___š", // Command button shown in details panel
            galleryButtonTooltip: "Į_See attached documents________š", // Tooltip for command button shown in details panel
            mapButtonLabel: "Į_View on Map____š", // Command button shown in details panel
            mapButtonTooltip: "Į_View the location of this report___________š", // Tooltip for command button shown in details panel
            commentsListHeading: "Į_Comments___š", // List heading for Comments section in details panel
            unableToUpdateVoteField: "Į_Your vote cannot be added at this time_____________š.", // Error message for feature unable to update
            gotoIssueListTooltip: "Į_Go to the report list_______š" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "Į_Votes for this report_______š" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "Į_Comment___š",
            commentsFormSubmitButton: "Į_Submit Comment_____š",
            commentsFormCancelButton: "Į_Cancel___š",
            errorInSubmittingComment: "Į_Comment could not be submitted__________š.", // Shown when user is unable to add comments
            emptyCommentMessage: "Į_Please enter a comment________š.", // Shown when user submits a comment without any text/character
            placeHolderText: "Į_Type a comment_____š", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Į_No comments available_______š", // Shown when no comments are available for the selected issue
            remainingTextCount: "Į_${0} character(s) remain________š", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Į_No__š" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "Į_Gallery___š",
            noAttachmentsAvailableText: "Į_No attachments found_______š" // Shown when no comments are available for the selected issue
        }
    })
);
