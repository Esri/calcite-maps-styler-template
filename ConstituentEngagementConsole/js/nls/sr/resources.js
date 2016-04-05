/*global define */
/*jslint sloppy:true */
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
            error: "Č_Unable to create map_______ž"
        },
        webMapList: {
            owner: "Č_Owner___ž", // Appears in web-map list description panel when it is set to true
            created: "Č_Date created_____ž", // Appears in web-map list description panel when it is set to true
            modified: "Č_Date modified_____ž", // Appears in web-map list description panel when it is set to true
            description: "Č_Description____ž", // Appears in web-map list description panel when it is set to true
            snippet: "Č_Summary___ž", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Č_Access and use constraints_________ž", // Appears in web-map list description panel when it is set to true
            accessInformation: "Č_Credits___ž", // Appears in web-map list description panel when it is set to true
            tags: "Č_Tags__ž", // Appears in web-map list description panel when it is set to true
            numViews: "Č_Number of views______ž", // Appears in web-map list description panel when it is set to true
            avgRating: "Č_Rating___ž", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Č_Configured group is invalid or no items have been shared with this group yet________________________ž", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Č_Map information______ž", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Č_Open panel____ž", //tooltip for toggle button
            closeWebmapList: "Č_Close panel____ž" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Č_Details___ž", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Č_Attachments____ž", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Č_Browse___ž", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Č_Location___ž", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Č_Submit___ž", // Command button to submit the geoform to report an issue
            cancelButton: "Č_Cancel___ž", //Command button to close the geoform
            requiredField: "Č_(required)____ž", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Č_Select&hellip;_____ž", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Č_Please enter valid value_________ž.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Č_Layer fields are not configured to capture data_______________ž", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Č_Please enter an integer________ž", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Č_Please enter an integer________ž", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Č_Please enter a number_______ž", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Č_Please enter a number_______ž", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Č_Please provide values for all required fields_______________ž", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Č_Please select the location for your report______________ž", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Č_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ž", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Č_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ž", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Č_Report could not be submitted__________ž", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Č_attachment(s) selected________ž", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Č_${failed} of ${total} attachment(s) failed to upload_________________ž", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Č_Current location not available__________ž", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Č_Current location is out of basemap extent_____________ž", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Č_Save__ž", // Command button to open the geoform
            cancelButtonTooltip: "Č_Cancel___ž", //tooltip for cancel button
            geoformBackButtonTooltip: "Č_Return to the report list_________ž", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Č_${count} features will be updated___________ž", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Č_Attachments____ž" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Č_Zoom in___ž", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Č_Zoom out___ž" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Č_Sign In___ž", // Appears when user has not signed in
            signOutOption: "Č_Sign Out___ž", // Appears when user has not signed in
            pleaseSignInText: "Č_Please sign in_____ž" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Č_No reports available_______ž", // Appears when no issues are available in current extent
            noFeatureGeometry: "Č_Feature cannot be displayed_________ž", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Č_Sort in ascending order________ž", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Č_Sort in descending order________ž", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Č_Filter___ž", // Appears as a label for Filter container
            valueRadioButtonLabel: "Č_Value___ž", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Č_Unique___ž", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Č_Select a category to get started___________ž" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "Č_Time range____ž", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Č_Time slider unavailable while editing____________ž" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Č_Save__ž", // Displayed on submit button to display comments
            commentsFormCancelButton: "Č_Cancel___ž", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Č_Edits could not be saved_________ž.", // Shown when user is unable to add comments
            emptyCommentMessage: "Č_Value required_____ž", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Č_No records available_______ž", // Shown when no comments are available for the selected issue
            remainingTextCount: "Č_${0} character(s) remain________ž", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Č_No__ž" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Č_No group configured_______ž" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Č_Search this layer______ž", // Displayed on hover of search icon
            noResultFoundText: "Č_No results found______ž", // Displayed when no results are found after search
            searchInEditModeAlert: "Č_Search unavailable while editing___________ž" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Č_Refresh___ž", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Č_All selections and unsaved changes will be discarded_________________ž" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Č_Help__ž" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Č_No feature found for this value___________ž.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Č_No distinct values found for the field_____________ž.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Č_and__ž", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Č_Filters unavailable while editing___________ž" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "Č_Edit record____ž" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Č_You've been successfully signed out____________ž", // Appears when user is successfully signed-out from application
            reSignInMessage: "Č_Click here to sign in_______ž" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);