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
            error: "Kan ikke opprette kart"
        },
        webMapList: {
            owner: "Eier", // Appears in web-map list description panel when it is set to true
            created: "Opprettingsdato", // Appears in web-map list description panel when it is set to true
            modified: "Oppdatert dato", // Appears in web-map list description panel when it is set to true
            description: "Beskrivelse", // Appears in web-map list description panel when it is set to true
            snippet: "Sammendrag", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Begrensning av tilgang og bruk", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Merker", // Appears in web-map list description panel when it is set to true
            numViews: "Antall visninger", // Appears in web-map list description panel when it is set to true
            avgRating: "Vurdering", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigurert gruppe er ugyldig, eller ingen elementer er blitt delt med denne gruppen ennå", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kartinformasjon", // Display tool-tip on command button to display description of web-map
            openWebmapList: "å_Open panel____ø", //tooltip for toggle button
            closeWebmapList: "å_Close panel____ø" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "å_Details___ø", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "å_Attachments____ø", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "å_Browse___ø", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "å_Location___ø", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "å_Submit___ø", // Command button to submit the geoform to report an issue
            cancelButton: "å_Cancel___ø", //Command button to close the geoform
            requiredField: "å_(required)____ø", // Shown next to the field in which the data is mandatory
            selectDefaultText: "å_Select&hellip;_____ø", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "å_Please enter valid value_________ø.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "å_Layer fields are not configured to capture data_______________ø", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "å_Please enter an integer________ø", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Angi et heltall", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Angi et tall", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Angi et tall", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "å_Please provide values for all required fields_______________ø", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "å_Please select the location for your report______________ø", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "å_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ø", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "å_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ø", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "å_Report could not be submitted__________ø", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "å_attachment(s) selected________ø", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "å_${failed} of ${total} attachment(s) failed to upload_________________ø", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "å_Current location not available__________ø", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "å_Current location is out of basemap extent_____________ø", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "å_Save__ø", // Command button to open the geoform
            cancelButtonTooltip: "å_Cancel___ø", //tooltip for cancel button
            geoformBackButtonTooltip: "å_Return to the report list_________ø", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "å_${count} features will be updated___________ø", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "å_Attachments____ø" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "å_Zoom in___ø", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom ut" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Logg på", // Appears when user has not signed in
            signOutOption: "Logg ut", // Appears when user has not signed in
            pleaseSignInText: "Du må logge på" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Ingen tilgjengelige rapporter", // Appears when no issues are available in current extent
            noFeatureGeometry: "Kan ikke vise geoobjekt", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "å_Sort in ascending order________ø", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "å_Sort in descending order________ø", // Appears as a label for Descending flag as a sorting option
            filterLabel: "å_Filter___ø", // Appears as a label for Filter container
            valueRadioButtonLabel: "å_Value___ø", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "å_Unique___ø", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "å_Select a category to get started___________ø" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "å_Time range____ø", // Appears beside time slider widget
            timeSliderInEditModeAlert: "å_Time slider unavailable while editing____________ø" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "å_Save__ø", // Displayed on submit button to display comments
            commentsFormCancelButton: "å_Cancel___ø", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "å_Edits could not be saved_________ø.", // Shown when user is unable to add comments
            emptyCommentMessage: "å_Value required_____ø", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "å_No records available_______ø", // Shown when no comments are available for the selected issue
            remainingTextCount: "å_${0} character(s) remain________ø", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "å_No__ø" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Ingen gruppe er konfigurert" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "å_Search this layer______ø", // Displayed on hover of search icon
            noResultFoundText: "å_No results found______ø", // Displayed when no results are found after search
            searchInEditModeAlert: "å_Search unavailable while editing___________ø" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "å_Refresh___ø", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Alle utvalg og endringer som ikke er lagret, forkastes" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "å_Help__ø" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "å_No feature found for this value___________ø.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "å_No distinct values found for the field_____________ø.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "å_and__ø", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "å_Filters unavailable while editing___________ø" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "å_Edit record____ø" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Du er logget av", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klikk her for å logge på" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);