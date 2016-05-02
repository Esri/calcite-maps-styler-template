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
            error: "Karte kann nicht erstellt werden"
        },
        webMapList: {
            owner: "Besitzer", // Appears in web-map list description panel when it is set to true
            created: "Erstellungsdatum", // Appears in web-map list description panel when it is set to true
            modified: "Änderungsdatum", // Appears in web-map list description panel when it is set to true
            description: "Beschreibung", // Appears in web-map list description panel when it is set to true
            snippet: "Zusammenfassung", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Zugriffs- und Nutzungsbeschränkungen", // Appears in web-map list description panel when it is set to true
            accessInformation: "Quellennachweise", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Anzahl der Ansichten", // Appears in web-map list description panel when it is set to true
            avgRating: "Bewertung", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Die konfigurierte Gruppe ist ungültig oder es wurden noch keine Elemente für diese Gruppe freigegeben", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Karteninformationen", // Display tool-tip on command button to display description of web-map
            openWebmapList: "ä_Open panel____Ü", //tooltip for toggle button
            closeWebmapList: "ä_Close panel____Ü" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "ä_Details___Ü", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ä_Attachments____Ü", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ä_Browse___Ü", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ä_Location___Ü", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ä_Submit___Ü", // Command button to submit the geoform to report an issue
            cancelButton: "ä_Cancel___Ü", //Command button to close the geoform
            requiredField: "ä_(required)____Ü", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ä_Select&hellip;_____Ü", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ä_Please enter valid value_________Ü.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ä_Layer fields are not configured to capture data_______________Ü", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ä_Please enter an integer________Ü", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Geben Sie einen ganzzahligen Wert ein", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Geben Sie eine Zahl ein", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Geben Sie eine Zahl ein", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ä_Please provide values for all required fields_______________Ü", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ä_Please select the location for your report______________Ü", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ä_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________Ü", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ä_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________Ü", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ä_Report could not be submitted__________Ü", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ä_attachment(s) selected________Ü", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ä_${failed} of ${total} attachment(s) failed to upload_________________Ü", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ä_Current location not available__________Ü", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ä_Current location is out of basemap extent_____________Ü", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ä_Save__Ü", // Command button to open the geoform
            cancelButtonTooltip: "ä_Cancel___Ü", //tooltip for cancel button
            geoformBackButtonTooltip: "ä_Return to the report list_________Ü", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "ä_${count} features will be updated___________Ü", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "ä_Attachments____Ü" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "ä_Zoom in___Ü", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Verkleinern" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Anmelden", // Appears when user has not signed in
            signOutOption: "Abmelden", // Appears when user has not signed in
            pleaseSignInText: "Melden Sie sich an" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Keine Berichte verfügbar", // Appears when no issues are available in current extent
            noFeatureGeometry: "Feature kann nicht angezeigt werden", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "ä_Sort in ascending order________Ü", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "ä_Sort in descending order________Ü", // Appears as a label for Descending flag as a sorting option
            filterLabel: "ä_Filter___Ü", // Appears as a label for Filter container
            valueRadioButtonLabel: "ä_Value___Ü", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "ä_Unique___Ü", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "ä_Select a category to get started___________Ü", // for showing default message on application load
            layerFeatureCount: "ä_${featureCount} records________Ü" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "ä_Time range____Ü", // Appears beside time slider widget
            timeSliderInEditModeAlert: "ä_Time slider unavailable while editing____________Ü" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "ä_Save__Ü", // Displayed on submit button to display comments
            commentsFormCancelButton: "ä_Cancel___Ü", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "ä_Edits could not be saved_________Ü.", // Shown when user is unable to add comments
            emptyCommentMessage: "ä_Value required_____Ü", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ä_No records available_______Ü", // Shown when no comments are available for the selected issue
            remainingTextCount: "ä_${0} character(s) remain________Ü", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ä_No__Ü" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Keine Gruppe konfiguriert" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "ä_Search this layer______Ü", // Displayed on hover of search icon
            noResultFoundText: "ä_No results found______Ü", // Displayed when no results are found after search
            searchInEditModeAlert: "ä_Search unavailable while editing___________Ü" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "ä_Refresh___Ü", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Gesamte Auswahl und nicht gespeicherte Änderungen werden verworfen" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "ä_Help__Ü" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "ä_No feature found for this value___________Ü.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "ä_No distinct values found for the field_____________Ü.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "ä_and__Ü", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "ä_Filters unavailable while editing___________Ü", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "ä_Select___Ü" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "ä_Edit record____Ü" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Sie wurden erfolgreich abgemeldet", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klicken Sie hier, um sich anzumelden" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);