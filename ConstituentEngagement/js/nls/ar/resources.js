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
            error: "بيت_Unable to create map_______لاحقة",
            zoomInTooltip: "بيت_Zoom in___لاحقة",  // Command button to zoom in to the map
            zoomOutTooltip: "بيت_Zoom out___لاحقة",  // Command button to zoom out of the map
            geolocationTooltip: "بيت_Current location______لاحقة"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "بيت_No group configured_______لاحقة", // Shown when no group is configured in the configuration file
            submitReportButtonText: "بيت_Submit a report______لاحقة", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "بيت_List view____لاحقة", // Go to List view tooltip text
            noFeatureGeomtery: "بيت_Feature cannot be displayed_________لاحقة" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "بيت_Proceed as Guest______لاحقة", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "بيت_Or__لاحقة", // Or text on sign in screen
            signinOptionsText: "بيت_Sign in with_____لاحقة:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "بيت_Please sign in_____لاحقة", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "بيت_Sign in as a guest______لاحقة", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "بيت_Sign in with Facebook_______لاحقة", // Command button to access the application via Facebook login
            twitterLoginTooltip: "بيت_Sign in with Twitter_______لاحقة", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "بيت_Sign in with Google+_______لاحقة", // Command button to access the application via Google+ login
            agolLoginTooltip: "بيت_Sign in with ArcGIS_______لاحقة" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "بيت_Owner___لاحقة", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "بيت_Date dreated_____لاحقة", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "بيت_Date modified_____لاحقة", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "بيت_Description____لاحقة", // Shown in the 'Map information' section describing the webmap
            snippet: "بيت_Summary___لاحقة", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "بيت_Access and use constraints_________لاحقة", // Shown in the map information section indicating the webmap license information
            accessInformation: "بيت_Credits___لاحقة", // Shown in the 'Map information' section indicating account credits
            tags: "بيت_Tags__لاحقة", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "بيت_Number of views______لاحقة", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "بيت_Rating___لاحقة", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "بيت_Configured group is invalid or no items have been shared with this group yet________________________لاحقة.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "بيت_Map information______لاحقة" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "بيت_No reports available in the current area_____________لاحقة", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "بيت_Go to main list______لاحقة", // Tooltip for back icon in list header
            gotoMapViewTooltip: "بيت_Map view___لاحقة" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "بيت_My Reports____لاحقة", // Command button shown in mobile menu list
            signIn: "بيت_Sign In___لاحقة", // Command button shown in mobile menu list and in appheader
            signOut: "بيت_Sign Out___لاحقة", // Command button shown in mobile menu list
            help: "بيت_Help__لاحقة", // Command button shown in mobile menu list
            signInTooltip: "بيت_Sign in___لاحقة", // Tooltip to 'Sign in' option
            signOutTooltip: "بيت_Sign out___لاحقة", // Tooltip  to 'Sign out' option
            myReportTooltip: "بيت_View reports submitted by me_________لاحقة", // Tooltip  to 'My Reports' option
            helpTooltip: "بيت_Help__لاحقة" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "بيت_Details___لاحقة", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "بيت_Attachments____لاحقة", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "بيت_Browse___لاحقة", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "بيت_Location___لاحقة", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "بيت_Report It____لاحقة", // Command button to submit the geoform to report an issue
            cancelButton: "بيت_Cancel___لاحقة", //Command button to close the geoform
            requiredField: "بيت_(required)____لاحقة", // Shown next to the field in which the data is mandatory
            selectDefaultText: "بيت_Select&hellip;_____لاحقة", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "بيت_Please enter valid value_________لاحقة.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "بيت_Layer fields are not configured to capture data_______________لاحقة", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "بيت_Please enter an integer________لاحقة", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "بيت_Please enter an integer________لاحقة", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "بيت_Please enter a number_______لاحقة", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "بيت_Please enter a number_______لاحقة", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "بيت_Please provide values for all required fields_______________لاحقة", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "بيت_Please select the location for your report______________لاحقة", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "بيت_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________لاحقة", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "بيت_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________لاحقة", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "بيت_Issue could not be reported_________لاحقة", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "بيت_attachment(s) selected________لاحقة", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "بيت_${failed} of ${total} attachment(s) failed to upload_________________لاحقة", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "بيت_Current location not available__________لاحقة",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "بيت_Current location is out of basemap extent_____________لاحقة",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "بيت_Report It____لاحقة", // Command button to open the geoform
            cancelButtonTooltip: "بيت_Cancel___لاحقة", //tooltip for cancel button
            geoformBackButtonTooltip: "بيت_Go to the report list_______لاحقة" //tooltip for Geoform back button

        },
        locator: {
            addressText: "بيت_Address___لاحقة:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "بيت_USNG__لاحقة", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "بيت_MGRS__لاحقة", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "بيت_Latitude/Longitude______لاحقة", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "بيت_No results found______لاحقة", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "بيت_Enter an address to search_________لاحقة", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "بيت_Located address is out of basemap extent_____________لاحقة", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "بيت_Search___لاحقة", // Tooltip for search button
            clearButtonTooltip: "بيت_Clear search value______لاحقة" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "بيت_My Reports____لاحقة", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "بيت_My Reports____لاحقة", // Command button to access issues reported by the logged in user
            noResultsFound: "بيت_No reports found______لاحقة" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "بيت_Like__لاحقة", // Command button shown in details panel
            likeButtonTooltip: "بيت_Vote for this report_______لاحقة",  // Tooltip for command button shown in details panel
            commentButtonLabel: "بيت_Comment___لاحقة", // Command button shown in details panel
            commentButtonTooltip: "بيت_Comment on this report________لاحقة", // Tooltip for command button shown in details panel
            galleryButtonLabel: "بيت_Gallery___لاحقة", // Command button shown in details panel
            galleryButtonTooltip: "بيت_See attached documents________لاحقة", // Tooltip for command button shown in details panel
            mapButtonLabel: "بيت_View on Map____لاحقة", // Command button shown in details panel
            mapButtonTooltip: "بيت_View the location of this report___________لاحقة", // Tooltip for command button shown in details panel
            commentsListHeading: "بيت_Comments___لاحقة", // List heading for Comments section in details panel
            unableToUpdateVoteField: "بيت_Your vote cannot be added at this time_____________لاحقة.", // Error message for feature unable to update
            gotoIssueListTooltip: "بيت_Go to the report list_______لاحقة" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "بيت_Votes for this report_______لاحقة" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "بيت_Comment___لاحقة",
            commentsFormSubmitButton: "بيت_Submit Comment_____لاحقة",
            commentsFormCancelButton: "بيت_Cancel___لاحقة",
            errorInSubmittingComment: "بيت_Comment could not be submitted__________لاحقة.", // Shown when user is unable to add comments
            emptyCommentMessage: "بيت_Please enter a comment________لاحقة.", // Shown when user submits a comment without any text/character
            placeHolderText: "بيت_Type a comment_____لاحقة", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "بيت_No comments available_______لاحقة", // Shown when no comments are available for the selected issue
            remainingTextCount: "بيت_${0} character(s) remain________لاحقة", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "بيت_No__لاحقة" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "بيت_Gallery___لاحقة",
            noAttachmentsAvailableText: "بيت_No attachments found_______لاحقة" // Shown when no comments are available for the selected issue
        }
    })
);
