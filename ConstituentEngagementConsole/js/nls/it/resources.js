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
            error: "Impossibile creare la mappa"
        },
        webMapList: {
            owner: "Proprietario", // Appears in web-map list description panel when it is set to true
            created: "Data creazione", // Appears in web-map list description panel when it is set to true
            modified: "Data modifica", // Appears in web-map list description panel when it is set to true
            description: "Descrizione", // Appears in web-map list description panel when it is set to true
            snippet: "Riepilogo", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Vincoli di accesso e uso", // Appears in web-map list description panel when it is set to true
            accessInformation: "Crediti", // Appears in web-map list description panel when it is set to true
            tags: "Tag", // Appears in web-map list description panel when it is set to true
            numViews: "Numero di visualizzazioni", // Appears in web-map list description panel when it is set to true
            avgRating: "Classificazione", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Il gruppo configurato non è valido oppure non sono stati ancora condivisi elementi con il gruppo.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informazioni mappa", // Display tool-tip on command button to display description of web-map
            openWebmapList: "é_Open panel____È", //tooltip for toggle button
            closeWebmapList: "é_Close panel____È" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "é_Details___È", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "é_Attachments____È", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "é_Browse___È", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "é_Location___È", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "é_Submit___È", // Command button to submit the geoform to report an issue
            cancelButton: "é_Cancel___È", //Command button to close the geoform
            requiredField: "é_(required)____È", // Shown next to the field in which the data is mandatory
            selectDefaultText: "é_Select&hellip;_____È", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "é_Please enter valid value_________È.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "é_Layer fields are not configured to capture data_______________È", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "é_Please enter an integer________È", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Immettere un numero intero", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Si prega di immettere un numero", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Si prega di immettere un numero", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "é_Please provide values for all required fields_______________È", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "é_Please select the location for your report______________È", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "é_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________È", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "é_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________È", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "é_Report could not be submitted__________È", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "é_attachment(s) selected________È", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "é_${failed} of ${total} attachment(s) failed to upload_________________È", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "é_Current location not available__________È", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "é_Current location is out of basemap extent_____________È", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "é_Save__È", // Command button to open the geoform
            cancelButtonTooltip: "é_Cancel___È", //tooltip for cancel button
            geoformBackButtonTooltip: "é_Return to the report list_________È", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "é_${count} features will be updated___________È", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "é_Attachments____È" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "é_Zoom in___È", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom indietro" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Accedi", // Appears when user has not signed in
            signOutOption: "Esci", // Appears when user has not signed in
            pleaseSignInText: "Effettuare l\'accesso" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Nessun report disponibile", // Appears when no issues are available in current extent
            noFeatureGeometry: "Impossibile visualizzare la feature", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "é_Sort in ascending order________È", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "é_Sort in descending order________È", // Appears as a label for Descending flag as a sorting option
            filterLabel: "é_Filter___È", // Appears as a label for Filter container
            valueRadioButtonLabel: "é_Value___È", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "é_Unique___È", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "é_Select a category to get started___________È", // for showing default message on application load
            layerFeatureCount: "é_${featureCount} records________È" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "é_Time range____È", // Appears beside time slider widget
            timeSliderInEditModeAlert: "é_Time slider unavailable while editing____________È" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "é_Save__È", // Displayed on submit button to display comments
            commentsFormCancelButton: "é_Cancel___È", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "é_Edits could not be saved_________È.", // Shown when user is unable to add comments
            emptyCommentMessage: "é_Value required_____È", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "é_No records available_______È", // Shown when no comments are available for the selected issue
            remainingTextCount: "é_${0} character(s) remain________È", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "é_No__È" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Nessun gruppo configurato" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "é_Search this layer______È", // Displayed on hover of search icon
            noResultFoundText: "é_No results found______È", // Displayed when no results are found after search
            searchInEditModeAlert: "é_Search unavailable while editing___________È" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "é_Refresh___È", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Tutte le selezioni e le modifiche non salvate verranno ignorate" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "é_Help__È" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "é_No feature found for this value___________È.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "é_No distinct values found for the field_____________È.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "é_and__È", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "é_Filters unavailable while editing___________È", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "é_Select___È" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "é_Edit record____È" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Disconnessione riuscita", // Appears when user is successfully signed-out from application
            reSignInMessage: "Fare clic qui per effettuare l\'accesso" // Appears when user is signed-out from application and wants to sign-in again
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