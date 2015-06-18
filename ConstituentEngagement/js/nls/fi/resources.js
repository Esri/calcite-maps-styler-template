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
            error: "Å_Unable to create map_______ö",
            zoomInTooltip: "Å_Zoom in___ö",  // Command button to zoom in to the map
            zoomOutTooltip: "Å_Zoom out___ö",  // Command button to zoom out of the map
            geolocationTooltip: "Å_Current location______ö"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "Å_No group configured_______ö", // Shown when no group is configured in the configuration file
            submitReportButtonText: "Å_Submit a report______ö", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "Å_List view____ö", // Go to List view tooltip text
            noFeatureGeomtery: "Å_Feature cannot be displayed_________ö" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "Å_Proceed as Guest______ö", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "Å_Or__ö", // Or text on sign in screen
            signinOptionsText: "Å_Sign in with_____ö:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "Å_Please sign in_____ö", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "Å_Sign in as a guest______ö", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "Å_Sign in with Facebook_______ö", // Command button to access the application via Facebook login
            twitterLoginTooltip: "Å_Sign in with Twitter_______ö", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "Å_Sign in with Google+_______ö", // Command button to access the application via Google+ login
            agolLoginTooltip: "Å_Sign in with ArcGIS_______ö" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "Å_Owner___ö", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "Å_Date dreated_____ö", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "Å_Date modified_____ö", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "Å_Description____ö", // Shown in the 'Map information' section describing the webmap
            snippet: "Å_Summary___ö", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "Å_Access and use constraints_________ö", // Shown in the map information section indicating the webmap license information
            accessInformation: "Å_Credits___ö", // Shown in the 'Map information' section indicating account credits
            tags: "Å_Tags__ö", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "Å_Number of views______ö", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "Å_Rating___ö", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "Å_Configured group is invalid or no items have been shared with this group yet________________________ö.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "Å_Map information______ö" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "Å_No reports available in the current area_____________ö", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "Å_Go to main list______ö", // Tooltip for back icon in list header
            gotoMapViewTooltip: "Å_Map view___ö" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "Å_My Reports____ö", // Command button shown in mobile menu list
            signIn: "Å_Sign In___ö", // Command button shown in mobile menu list and in appheader
            signOut: "Å_Sign Out___ö", // Command button shown in mobile menu list
            help: "Å_Help__ö", // Command button shown in mobile menu list
            signInTooltip: "Å_Sign in___ö", // Tooltip to 'Sign in' option
            signOutTooltip: "Å_Sign out___ö", // Tooltip  to 'Sign out' option
            myReportTooltip: "Å_View reports submitted by me_________ö", // Tooltip  to 'My Reports' option
            helpTooltip: "Å_Help__ö" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "Å_Details___ö", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Å_Attachments____ö", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Å_Browse___ö", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Å_Location___ö", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Å_Report It____ö", // Command button to submit the geoform to report an issue
            cancelButton: "Å_Cancel___ö", //Command button to close the geoform
            requiredField: "Å_(required)____ö", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Å_Select&hellip;_____ö", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Å_Please enter valid value_________ö.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Å_Layer fields are not configured to capture data_______________ö", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Å_Please enter an integer________ö", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Å_Please enter an integer________ö", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Å_Please enter a number_______ö", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Å_Please enter a number_______ö", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Å_Please provide values for all required fields_______________ö", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Å_Please select the location for your report______________ö", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Å_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ö", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Å_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ö", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Å_Issue could not be reported_________ö", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Å_attachment(s) selected________ö", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Å_${failed} of ${total} attachment(s) failed to upload_________________ö", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Å_Current location not available__________ö",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Å_Current location is out of basemap extent_____________ö",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Å_Report It____ö", // Command button to open the geoform
            cancelButtonTooltip: "Å_Cancel___ö", //tooltip for cancel button
            geoformBackButtonTooltip: "Å_Go to the report list_______ö" //tooltip for Geoform back button

        },
        locator: {
            addressText: "Å_Address___ö:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "Å_USNG__ö", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "Å_MGRS__ö", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "Å_Latitude/Longitude______ö", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "Å_No results found______ö", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "Å_Enter an address to search_________ö", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "Å_Located address is out of basemap extent_____________ö", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "Å_Search___ö", // Tooltip for search button
            clearButtonTooltip: "Å_Clear search value______ö" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "Å_My Reports____ö", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "Å_My Reports____ö", // Command button to access issues reported by the logged in user
            noResultsFound: "Å_No reports found______ö" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "Å_Like__ö", // Command button shown in details panel
            likeButtonTooltip: "Å_Vote for this report_______ö",  // Tooltip for command button shown in details panel
            commentButtonLabel: "Å_Comment___ö", // Command button shown in details panel
            commentButtonTooltip: "Å_Comment on this report________ö", // Tooltip for command button shown in details panel
            galleryButtonLabel: "Å_Gallery___ö", // Command button shown in details panel
            galleryButtonTooltip: "Å_See attached documents________ö", // Tooltip for command button shown in details panel
            mapButtonLabel: "Å_View on Map____ö", // Command button shown in details panel
            mapButtonTooltip: "Å_View the location of this report___________ö", // Tooltip for command button shown in details panel
            commentsListHeading: "Å_Comments___ö", // List heading for Comments section in details panel
            unableToUpdateVoteField: "Å_Your vote cannot be added at this time_____________ö.", // Error message for feature unable to update
            gotoIssueListTooltip: "Å_Go to the report list_______ö" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "Å_Votes for this report_______ö" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "Å_Comment___ö",
            commentsFormSubmitButton: "Å_Submit Comment_____ö",
            commentsFormCancelButton: "Å_Cancel___ö",
            errorInSubmittingComment: "Å_Comment could not be submitted__________ö.", // Shown when user is unable to add comments
            emptyCommentMessage: "Å_Please enter a comment________ö.", // Shown when user submits a comment without any text/character
            placeHolderText: "Å_Type a comment_____ö", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Å_No comments available_______ö", // Shown when no comments are available for the selected issue
            remainingTextCount: "Å_${0} character(s) remain________ö", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Å_No__ö" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "Å_Gallery___ö",
            noAttachmentsAvailableText: "Å_No attachments found_______ö" // Shown when no comments are available for the selected issue
        }
    })
);
