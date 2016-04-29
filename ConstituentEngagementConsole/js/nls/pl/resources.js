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
            error: "Nie można utworzyć"
        },
        webMapList: {
            owner: "Właściciel", // Appears in web-map list description panel when it is set to true
            created: "Data utworzenia", // Appears in web-map list description panel when it is set to true
            modified: "Ostatnia modyfikacja", // Appears in web-map list description panel when it is set to true
            description: "Opis", // Appears in web-map list description panel when it is set to true
            snippet: "Summary", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ograniczenia dostępu i użytkowania", // Appears in web-map list description panel when it is set to true
            accessInformation: "Udostępniający zasoby", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Liczba wyświetleń", // Appears in web-map list description panel when it is set to true
            avgRating: "Ocena", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Skonfigurowana grupa jest nieprawidłowa lub tej grupie nie udostępniono jeszcze żadnych elementów", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informacje o mapie", // Display tool-tip on command button to display description of web-map
            openWebmapList: "ł_Open panel____ą", //tooltip for toggle button
            closeWebmapList: "ł_Close panel____ą" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "ł_Details___ą", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ł_Attachments____ą", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ł_Browse___ą", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ł_Location___ą", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ł_Submit___ą", // Command button to submit the geoform to report an issue
            cancelButton: "ł_Cancel___ą", //Command button to close the geoform
            requiredField: "ł_(required)____ą", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ł_Select&hellip;_____ą", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ł_Please enter valid value_________ą.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ł_Layer fields are not configured to capture data_______________ą", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ł_Please enter an integer________ą", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Wprowadź liczbę całkowitą", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Wprowadź liczbę", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Wprowadź liczbę", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ł_Please provide values for all required fields_______________ą", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ł_Please select the location for your report______________ą", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ł_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ą", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ł_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ą", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ł_Report could not be submitted__________ą", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ł_attachment(s) selected________ą", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ł_${failed} of ${total} attachment(s) failed to upload_________________ą", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ł_Current location not available__________ą", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ł_Current location is out of basemap extent_____________ą", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ł_Save__ą", // Command button to open the geoform
            cancelButtonTooltip: "ł_Cancel___ą", //tooltip for cancel button
            geoformBackButtonTooltip: "ł_Return to the report list_________ą", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "ł_${count} features will be updated___________ą", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "ł_Attachments____ą" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "ł_Zoom in___ą", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Pomniejsz" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Zaloguj się", // Appears when user has not signed in
            signOutOption: "Wyloguj się", // Appears when user has not signed in
            pleaseSignInText: "Zaloguj się" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Brak dostępnych raportów", // Appears when no issues are available in current extent
            noFeatureGeometry: "Nie można wyświetlić obiektu", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "ł_Sort in ascending order________ą", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "ł_Sort in descending order________ą", // Appears as a label for Descending flag as a sorting option
            filterLabel: "ł_Filter___ą", // Appears as a label for Filter container
            valueRadioButtonLabel: "ł_Value___ą", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "ł_Unique___ą", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "ł_Select a category to get started___________ą", // for showing default message on application load
            layerFeatureCount: "ł_${featureCount} records________ą" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "ł_Time range____ą", // Appears beside time slider widget
            timeSliderInEditModeAlert: "ł_Time slider unavailable while editing____________ą" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "ł_Save__ą", // Displayed on submit button to display comments
            commentsFormCancelButton: "ł_Cancel___ą", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "ł_Edits could not be saved_________ą.", // Shown when user is unable to add comments
            emptyCommentMessage: "ł_Value required_____ą", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ł_No records available_______ą", // Shown when no comments are available for the selected issue
            remainingTextCount: "ł_${0} character(s) remain________ą", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ł_No__ą" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Nie skonfigurowano żadnej grupy" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "ł_Search this layer______ą", // Displayed on hover of search icon
            noResultFoundText: "ł_No results found______ą", // Displayed when no results are found after search
            searchInEditModeAlert: "ł_Search unavailable while editing___________ą" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "ł_Refresh___ą", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Wszystkie selekcje i niezapisane zmiany zostaną odrzucone" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "ł_Help__ą" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "ł_No feature found for this value___________ą.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "ł_No distinct values found for the field_____________ą.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "ł_and__ą", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "ł_Filters unavailable while editing___________ą", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "ł_Select___ą" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "ł_Edit record____ą" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Wylogowanie pomyślne", // Appears when user is successfully signed-out from application
            reSignInMessage: "Kliknij tutaj, aby się zalogować" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);