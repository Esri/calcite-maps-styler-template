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
define({
    root: ({
        map: {
            error: "Kan ikke oprette kort"
        },
        webMapList: {
            owner: "Ejer", // Appears in web-map list description panel when it is set to true
            created: "Oprettelsesdato", // Appears in web-map list description panel when it is set to true
            modified: "Dato for ændring", // Appears in web-map list description panel when it is set to true
            description: "Beskrivelse", // Appears in web-map list description panel when it is set to true
            snippet: "Summary", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Få adgang til og brug begrænsninger", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Antal visninger", // Appears in web-map list description panel when it is set to true
            avgRating: "Vurdering", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigureret gruppe er ugyldig, eller ingen elementer er endnu blevet delt med denne gruppe", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kortoplysninger", // Display tool-tip on command button to display description of web-map
            openWebmapList: "ø_Open panel____å", //tooltip for toggle button
            closeWebmapList: "ø_Close panel____å" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "ø_Details___å", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ø_Attachments____å", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ø_Browse___å", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ø_Location___å", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ø_Submit___å", // Command button to submit the geoform to report an issue
            cancelButton: "ø_Cancel___å", //Command button to close the geoform
            requiredField: "ø_(required)____å", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ø_Select&hellip;_____å", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ø_Please enter valid value_________å.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ø_Layer fields are not configured to capture data_______________å", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ø_Please enter an integer________å", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Indtast et heltal", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Indtast et tal", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Indtast et tal", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ø_Please provide values for all required fields_______________å", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ø_Please select the location for your report______________å", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________å", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________å", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ø_Report could not be submitted__________å", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ø_attachment(s) selected________å", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ø_${failed} of ${total} attachment(s) failed to upload_________________å", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ø_Current location not available__________å", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ø_Current location is out of basemap extent_____________å", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ø_Save__å", // Command button to open the geoform
            cancelButtonTooltip: "ø_Cancel___å", //tooltip for cancel button
            geoformBackButtonTooltip: "ø_Return to the report list_________å", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "ø_${count} features will be updated___________å", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "ø_Attachments____å" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "ø_Zoom in___å", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom ud" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Log ind", // Appears when user has not signed in
            signOutOption: "Log ud", // Appears when user has not signed in
            pleaseSignInText: "Log ind" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Ingen tilgængelige rapporter", // Appears when no issues are available in current extent
            noFeatureGeometry: "Objekt kan ikke vises", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "ø_Sort in ascending order________å", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "ø_Sort in descending order________å", // Appears as a label for Descending flag as a sorting option
            filterLabel: "ø_Filter___å", // Appears as a label for Filter container
            valueRadioButtonLabel: "ø_Value___å", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "ø_Unique___å", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "ø_Select a category to get started___________å", // for showing default message on application load
            layerFeatureCount: "ø_${featureCount} records________å" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "ø_Time range____å", // Appears beside time slider widget
            timeSliderInEditModeAlert: "ø_Time slider unavailable while editing____________å" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "ø_Save__å", // Displayed on submit button to display comments
            commentsFormCancelButton: "ø_Cancel___å", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "ø_Edits could not be saved_________å.", // Shown when user is unable to add comments
            emptyCommentMessage: "ø_Value required_____å", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ø_No records available_______å", // Shown when no comments are available for the selected issue
            remainingTextCount: "ø_${0} character(s) remain________å", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ø_No__å" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Ingen gruppe konfigureret" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "ø_Search this layer______å", // Displayed on hover of search icon
            noResultFoundText: "ø_No results found______å", // Displayed when no results are found after search
            searchInEditModeAlert: "ø_Search unavailable while editing___________å" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "ø_Refresh___å", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Alle markeringer og ikke-gemte ændringer vil gå tabt" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "ø_Help__å" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "ø_No feature found for this value___________å.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "ø_No distinct values found for the field_____________å.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "ø_and__å", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "ø_Filters unavailable while editing___________å", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "ø_Select___å" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "ø_Edit record____å" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Du er blevet logget ud", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klik her for at logge ind" // Appears when user is signed-out from application and wants to sign-in again
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "hr": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nb": 1,
    "nl": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sr": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});