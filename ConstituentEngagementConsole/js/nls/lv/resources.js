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
            error: "Nevar izveidot karti"
        },
        webMapList: {
            owner: "Īpašnieks", // Appears in web-map list description panel when it is set to true
            created: "Izveides datums", // Appears in web-map list description panel when it is set to true
            modified: "Modificēšanas datums", // Appears in web-map list description panel when it is set to true
            description: "Apraksts", // Appears in web-map list description panel when it is set to true
            snippet: "Kopsavilkums", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Piekļuves un izmantošanas ierobežojumi", // Appears in web-map list description panel when it is set to true
            accessInformation: "Kredīti", // Appears in web-map list description panel when it is set to true
            tags: "Tagi", // Appears in web-map list description panel when it is set to true
            numViews: "Skatījumu skaits", // Appears in web-map list description panel when it is set to true
            avgRating: "Vērtējums", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigurētā grupa nav derīga vai ar šo grupu vēl nav kopīgots neviens elements", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kartes informācija", // Display tool-tip on command button to display description of web-map
            openWebmapList: "ķ_Open panel____ū", //tooltip for toggle button
            closeWebmapList: "ķ_Close panel____ū" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "ķ_Details___ū", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ķ_Attachments____ū", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ķ_Browse___ū", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ķ_Location___ū", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ķ_Submit___ū", // Command button to submit the geoform to report an issue
            cancelButton: "ķ_Cancel___ū", //Command button to close the geoform
            requiredField: "ķ_(required)____ū", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ķ_Select&hellip;_____ū", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ķ_Please enter valid value_________ū.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ķ_Layer fields are not configured to capture data_______________ū", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ķ_Please enter an integer________ū", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Lūdzu ievadiet veselu skaitli", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Lūdzu ievadiet numuru", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Lūdzu ievadiet numuru", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ķ_Please provide values for all required fields_______________ū", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ķ_Please select the location for your report______________ū", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ķ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ū", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ķ_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ū", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ķ_Report could not be submitted__________ū", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ķ_attachment(s) selected________ū", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ķ_${failed} of ${total} attachment(s) failed to upload_________________ū", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ķ_Current location not available__________ū", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ķ_Current location is out of basemap extent_____________ū", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ķ_Save__ū", // Command button to open the geoform
            cancelButtonTooltip: "ķ_Cancel___ū", //tooltip for cancel button
            geoformBackButtonTooltip: "ķ_Return to the report list_________ū", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "ķ_${count} features will be updated___________ū", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "ķ_Attachments____ū" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "ķ_Zoom in___ū", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Attālināt" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Pierakstīties", // Appears when user has not signed in
            signOutOption: "Izrakstīties", // Appears when user has not signed in
            pleaseSignInText: "Lūdzu, pierakstieties" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Nav pieejamu ziņojumu", // Appears when no issues are available in current extent
            noFeatureGeometry: "Funkciju nevar parādīt", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "ķ_Sort in ascending order________ū", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "ķ_Sort in descending order________ū", // Appears as a label for Descending flag as a sorting option
            filterLabel: "ķ_Filter___ū", // Appears as a label for Filter container
            valueRadioButtonLabel: "ķ_Value___ū", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "ķ_Unique___ū", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "ķ_Select a category to get started___________ū" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "ķ_Time range____ū", // Appears beside time slider widget
            timeSliderInEditModeAlert: "ķ_Time slider unavailable while editing____________ū" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "ķ_Save__ū", // Displayed on submit button to display comments
            commentsFormCancelButton: "ķ_Cancel___ū", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "ķ_Edits could not be saved_________ū.", // Shown when user is unable to add comments
            emptyCommentMessage: "ķ_Value required_____ū", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ķ_No records available_______ū", // Shown when no comments are available for the selected issue
            remainingTextCount: "ķ_${0} character(s) remain________ū", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ķ_No__ū" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Nav konfigurētas grupas" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "ķ_Search this layer______ū", // Displayed on hover of search icon
            noResultFoundText: "ķ_No results found______ū", // Displayed when no results are found after search
            searchInEditModeAlert: "ķ_Search unavailable while editing___________ū" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "ķ_Refresh___ū", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Visas atlases un nesaglabātās izmaiņas tiks atmestas" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "ķ_Help__ū" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "ķ_No feature found for this value___________ū.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "ķ_No distinct values found for the field_____________ū.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "ķ_and__ū", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "ķ_Filters unavailable while editing___________ū" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "ķ_Edit record____ū" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Jūs esat veiksmīgi izrakstījies", // Appears when user is successfully signed-out from application
            reSignInMessage: "Noklikšķiniet šeit, lai pierakstītos" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);