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
            error: "Ă_Unable to create map_______ș",
            zoomInTooltip: "Ă_Zoom in___ș",  // Command button to zoom in to the map
            zoomOutTooltip: "Ă_Zoom out___ș",  // Command button to zoom out of the map
            geolocationTooltip: "Ă_Current location______ș"  // Command button to navigate to the current geographical position
        },
        main: {
            noGroup: "Ă_No group configured_______ș", // Shown when no group is configured in the configuration file
            submitReportButtonText: "Ă_Submit a report______ș", //Submit report  text for buttons on map and list
            gotoListViewTooltip: "Ă_List view____ș", // Go to List view tooltip text
            noFeatureGeomtery: "Ă_Feature cannot be displayed_________ș" // Error message when geomtery is not available
        },
        signin: {
            guestSigninText: "Ă_Proceed as Guest______ș", // Shown in the 'Sign in' page below the icon for accessing application as an anonymous user
            signInOrText: "Ă_Or__ș", // Or text on sign in screen
            signinOptionsText: "Ă_Sign in with_____ș:", // Shown in the 'Sign in' page above the icons for social media sign in
            noGroupNameText: "Ă_Please sign in_____ș", // Shown when the group title is not available or the group is private
            guestLoginTooltip: "Ă_Sign in as a guest______ș", // Command button to access the application as an anonymous user
            facebookLoginTooltip: "Ă_Sign in with Facebook_______ș", // Command button to access the application via Facebook login
            twitterLoginTooltip: "Ă_Sign in with Twitter_______ș", // Command button to access the application via Twitter login
            googlePlusLoginTooltip: "Ă_Sign in with Google+_______ș", // Command button to access the application via Google+ login
            agolLoginTooltip: "Ă_Sign in with ArcGIS_______ș" // Command button to access the application via AGOL login
        },
        webMapList: {
            owner: "Ă_Owner___ș", // Shown in the 'Map information' section indicating the owner of the webmap
            created: "Ă_Date dreated_____ș", // Shown in the 'Map information' section indicating the date when the webmap was created
            modified: "Ă_Date modified_____ș", // Shown in the 'Map information' section indicating the date when the webmap was modified
            description: "Ă_Description____ș", // Shown in the 'Map information' section describing the webmap
            snippet: "Ă_Summary___ș", // Shown in the 'Map information' section providing the summary of the webmap
            licenseInfo: "Ă_Access and use constraints_________ș", // Shown in the map information section indicating the webmap license information
            accessInformation: "Ă_Credits___ș", // Shown in the 'Map information' section indicating account credits
            tags: "Ă_Tags__ș", // Shown in the 'Map information' section indicating tags of the webmap
            numViews: "Ă_Number of views______ș", // Shown in the 'Map information' section indicating number of times the webmap has been viewed
            avgRating: "Ă_Rating___ș", // Shown in the 'Map information' section indicating webmap rating
            noWebMapInGroup: "Ă_Configured group is invalid or no items have been shared with this group yet________________________ș.", // Shown when the configured group is invalid/private or no items have been shared with the group
            infoBtnToolTip: "Ă_Map information______ș" // Command button to view the 'Map information'
        },
        issueWall: {
            noResultsFound: "Ă_No reports available in the current area_____________ș", // Shown in the issue wall when no issues are present in the current map extent
            gotoWebmapListTooltip: "Ă_Go to main list______ș", // Tooltip for back icon in list header
            gotoMapViewTooltip: "Ă_Map view___ș" // Tooltip for map-it icon in list header
        },
        appHeader: {
            myReport: "Ă_My Reports____ș", // Command button shown in mobile menu list
            signIn: "Ă_Sign In___ș", // Command button shown in mobile menu list and in appheader
            signOut: "Ă_Sign Out___ș", // Command button shown in mobile menu list
            help: "Ă_Help__ș", // Command button shown in mobile menu list
            signInTooltip: "Ă_Sign in___ș", // Tooltip to 'Sign in' option
            signOutTooltip: "Ă_Sign out___ș", // Tooltip  to 'Sign out' option
            myReportTooltip: "Ă_View reports submitted by me_________ș", // Tooltip  to 'My Reports' option
            helpTooltip: "Ă_Help__ș" // Tooltip  to 'Help' option
        },
        geoform: {
            enterInformation: "Ă_Details___ș", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ă_Attachments____ș", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ă_Browse___ș", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ă_Location___ș", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ă_Report It____ș", // Command button to submit the geoform to report an issue
            cancelButton: "Ă_Cancel___ș", //Command button to close the geoform
            requiredField: "Ă_(required)____ș", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ă_Select&hellip;_____ș", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ă_Please enter valid value_________ș.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ă_Layer fields are not configured to capture data_______________ș", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ă_Please enter an integer________ș", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Ă_Please enter an integer________ș", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Ă_Please enter a number_______ș", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Ă_Please enter a number_______ș", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ă_Please provide values for all required fields_______________ș", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ă_Please select the location for your report______________ș", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ă_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}___________________________ș", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ă_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}___________________________ș", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ă_Issue could not be reported_________ș", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ă_attachment(s) selected________ș", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ă_${failed} of ${total} attachment(s) failed to upload_________________ș", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ă_Current location not available__________ș",  // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ă_Current location is out of basemap extent_____________ș",  // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ă_Report It____ș", // Command button to open the geoform
            cancelButtonTooltip: "Ă_Cancel___ș", //tooltip for cancel button
            geoformBackButtonTooltip: "Ă_Go to the report list_______ș" //tooltip for Geoform back button

        },
        locator: {
            addressText: "Ă_Address___ș:", // Shown as a title for a group of addresses returned on performing unified search
            usngText: "Ă_USNG__ș", // Shown as a title for a group of USNG values returned on performing unified search
            mgrsText: "Ă_MGRS__ș", // Shown as a title for a group of MGRS values returned on performing unified search
            latLongText: "Ă_Latitude/Longitude______ș", // Shown as a title for a group of latitude longitude values returned on performing unified search
            invalidSearch: "Ă_No results found______ș", // Shown in the address container when no results are returned on performing unified search
            locatorPlaceholder: "Ă_Enter an address to search_________ș", // Shown in the address container textbox as a placeholder
            locationOutOfExtent: "Ă_Located address is out of basemap extent_____________ș", // Shown as an alert when the selected address in the search result is out of basemap extent
            searchButtonTooltip: "Ă_Search___ș", // Tooltip for search button
            clearButtonTooltip: "Ă_Clear search value______ș" // Tooltip for Geocoder clear button
        },
        myIssues: {
            title: "Ă_My Reports____ș", // Shown as a title in 'My issues' panel
            myIssuesTooltip: "Ă_My Reports____ș", // Command button to access issues reported by the logged in user
            noResultsFound: "Ă_No reports found______ș" // Shown when no issues are reported by the logged in user
        },
        itemDetails: {  // Detailed information about an item and a list of its comments
            likeButtonLabel: "Ă_Like__ș", // Command button shown in details panel
            likeButtonTooltip: "Ă_Vote for this report_______ș",  // Tooltip for command button shown in details panel
            commentButtonLabel: "Ă_Comment___ș", // Command button shown in details panel
            commentButtonTooltip: "Ă_Comment on this report________ș", // Tooltip for command button shown in details panel
            galleryButtonLabel: "Ă_Gallery___ș", // Command button shown in details panel
            galleryButtonTooltip: "Ă_See attached documents________ș", // Tooltip for command button shown in details panel
            mapButtonLabel: "Ă_View on Map____ș", // Command button shown in details panel
            mapButtonTooltip: "Ă_View the location of this report___________ș", // Tooltip for command button shown in details panel
            commentsListHeading: "Ă_Comments___ș", // List heading for Comments section in details panel
            unableToUpdateVoteField: "Ă_Your vote cannot be added at this time_____________ș.", // Error message for feature unable to update
            gotoIssueListTooltip: "Ă_Go to the report list_______ș" // Tooltip for back icon in Issue list header
        },
        itemList: {  // List of feature layer items shown in my-issues and issue-wall
            likesForThisItemTooltip: "Ă_Votes for this report_______ș" //Shown on hovering of the like icon in my-issues and issue-wall
        },
        comment: {
            commentsFormText: "Ă_Comment___ș",
            commentsFormSubmitButton: "Ă_Submit Comment_____ș",
            commentsFormCancelButton: "Ă_Cancel___ș",
            errorInSubmittingComment: "Ă_Comment could not be submitted__________ș.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ă_Please enter a comment________ș.", // Shown when user submits a comment without any text/character
            placeHolderText: "Ă_Type a comment_____ș", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ă_No comments available_______ș", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ă_${0} character(s) remain________ș", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ă_No__ș" // Shown when comments character limit is exceeded
        },
        gallery: {
            galleryHeaderText: "Ă_Gallery___ș",
            noAttachmentsAvailableText: "Ă_No attachments found_______ș" // Shown when no comments are available for the selected issue
        }
    })
);
