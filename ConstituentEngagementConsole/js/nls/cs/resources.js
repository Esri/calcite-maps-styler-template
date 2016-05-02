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
            error: "Nelze vytvořit mapu"
        },
        webMapList: {
            owner: "Vlastník", // Appears in web-map list description panel when it is set to true
            created: "Datum vytvoření", // Appears in web-map list description panel when it is set to true
            modified: "Datum změny", // Appears in web-map list description panel when it is set to true
            description: "Popis", // Appears in web-map list description panel when it is set to true
            snippet: "Souhrn", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Přístup a omezení použití", // Appears in web-map list description panel when it is set to true
            accessInformation: "Poděkování", // Appears in web-map list description panel when it is set to true
            tags: "Klíčová slova", // Appears in web-map list description panel when it is set to true
            numViews: "Počet zobrazení", // Appears in web-map list description panel when it is set to true
            avgRating: "Hodnocení", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Nakonfigurovaná skupina je neplatné, případně s touto skupinou ještě nebyly sdíleny žádné položky.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informace o mapě", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Ř_Open panel____ů", //tooltip for toggle button
            closeWebmapList: "Ř_Close panel____ů" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Ř_Details___ů", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ř_Attachments____ů", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ř_Browse___ů", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ř_Location___ů", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ř_Submit___ů", // Command button to submit the geoform to report an issue
            cancelButton: "Ř_Cancel___ů", //Command button to close the geoform
            requiredField: "Ř_(required)____ů", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ř_Select&hellip;_____ů", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ř_Please enter valid value_________ů.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ř_Layer fields are not configured to capture data_______________ů", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ř_Please enter an integer________ů", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Zadejte celé číslo.", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Zadejte číslo.", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Zadejte číslo.", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ř_Please provide values for all required fields_______________ů", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ř_Please select the location for your report______________ů", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ř_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ů", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ř_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ů", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ř_Report could not be submitted__________ů", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ř_attachment(s) selected________ů", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ř_${failed} of ${total} attachment(s) failed to upload_________________ů", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ř_Current location not available__________ů", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ř_Current location is out of basemap extent_____________ů", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ř_Save__ů", // Command button to open the geoform
            cancelButtonTooltip: "Ř_Cancel___ů", //tooltip for cancel button
            geoformBackButtonTooltip: "Ř_Return to the report list_________ů", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Ř_${count} features will be updated___________ů", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Ř_Attachments____ů" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Ř_Zoom in___ů", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Oddálit" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Přihlásit", // Appears when user has not signed in
            signOutOption: "Odhlásit", // Appears when user has not signed in
            pleaseSignInText: "Prosím přihlaste se" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Nejsou k dispozici žádné zprávy.", // Appears when no issues are available in current extent
            noFeatureGeometry: "Prvek nelze zobrazit.", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Ř_Sort in ascending order________ů", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Ř_Sort in descending order________ů", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Ř_Filter___ů", // Appears as a label for Filter container
            valueRadioButtonLabel: "Ř_Value___ů", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Ř_Unique___ů", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Ř_Select a category to get started___________ů", // for showing default message on application load
            layerFeatureCount: "Ř_${featureCount} records________ů" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "Ř_Time range____ů", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Ř_Time slider unavailable while editing____________ů" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Ř_Save__ů", // Displayed on submit button to display comments
            commentsFormCancelButton: "Ř_Cancel___ů", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Ř_Edits could not be saved_________ů.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ř_Value required_____ů", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ř_No records available_______ů", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ř_${0} character(s) remain________ů", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ř_No__ů" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Není nakonfigurována žádná skupina" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Ř_Search this layer______ů", // Displayed on hover of search icon
            noResultFoundText: "Ř_No results found______ů", // Displayed when no results are found after search
            searchInEditModeAlert: "Ř_Search unavailable while editing___________ů" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Ř_Refresh___ů", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Všechny výběry a neuložené změny budou zrušeny." // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Ř_Help__ů" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Ř_No feature found for this value___________ů.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Ř_No distinct values found for the field_____________ů.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Ř_and__ů", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Ř_Filters unavailable while editing___________ů", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "Ř_Select___ů" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "Ř_Edit record____ů" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Byli jste úspěšně odhlášeni.", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klikněte sem pro přihlášení." // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);