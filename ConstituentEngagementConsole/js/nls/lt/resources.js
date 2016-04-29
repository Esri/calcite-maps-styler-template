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
            error: "Žemėlapio sukurti nepavyko"
        },
        webMapList: {
            owner: "Savininkas", // Appears in web-map list description panel when it is set to true
            created: "Sukūrimo data", // Appears in web-map list description panel when it is set to true
            modified: "Paskutinis pakeitimas", // Appears in web-map list description panel when it is set to true
            description: "Aprašas", // Appears in web-map list description panel when it is set to true
            snippet: "Santrauka", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Prieigos ir naudojimo apribojimai", // Appears in web-map list description panel when it is set to true
            accessInformation: "Autoriai", // Appears in web-map list description panel when it is set to true
            tags: "Raktažodžiai", // Appears in web-map list description panel when it is set to true
            numViews: "Peržiūrų skaičius", // Appears in web-map list description panel when it is set to true
            avgRating: "Vertinimas", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Sukonfigūruota grupė neteisinga arba šioje grupėje nebendrinamas nė vienas elementas", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Žemėlapio informacija", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Į_Open panel____š", //tooltip for toggle button
            closeWebmapList: "Į_Close panel____š" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Į_Details___š", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Į_Attachments____š", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Į_Browse___š", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Į_Location___š", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Į_Submit___š", // Command button to submit the geoform to report an issue
            cancelButton: "Į_Cancel___š", //Command button to close the geoform
            requiredField: "Į_(required)____š", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Į_Select&hellip;_____š", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Į_Please enter valid value_________š.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Į_Layer fields are not configured to capture data_______________š", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Į_Please enter an integer________š", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Įveskite sveikąjį skaičių", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Įveskite skaičių", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Įveskite skaičių", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Į_Please provide values for all required fields_______________š", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Į_Please select the location for your report______________š", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Į_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________š", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Į_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________š", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Į_Report could not be submitted__________š", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Į_attachment(s) selected________š", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Į_${failed} of ${total} attachment(s) failed to upload_________________š", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Į_Current location not available__________š", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Į_Current location is out of basemap extent_____________š", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Į_Save__š", // Command button to open the geoform
            cancelButtonTooltip: "Į_Cancel___š", //tooltip for cancel button
            geoformBackButtonTooltip: "Į_Return to the report list_________š", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Į_${count} features will be updated___________š", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Į_Attachments____š" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Į_Zoom in___š", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Tolinti" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Prisijungti", // Appears when user has not signed in
            signOutOption: "Atsijungti", // Appears when user has not signed in
            pleaseSignInText: "Prisijunkite" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Ataskaitų nėra", // Appears when no issues are available in current extent
            noFeatureGeometry: "Elemento parodyti negalima", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Į_Sort in ascending order________š", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Į_Sort in descending order________š", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Į_Filter___š", // Appears as a label for Filter container
            valueRadioButtonLabel: "Į_Value___š", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Į_Unique___š", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Į_Select a category to get started___________š", // for showing default message on application load
            layerFeatureCount: "Į_${featureCount} records________š" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "Į_Time range____š", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Į_Time slider unavailable while editing____________š" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Į_Save__š", // Displayed on submit button to display comments
            commentsFormCancelButton: "Į_Cancel___š", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Į_Edits could not be saved_________š.", // Shown when user is unable to add comments
            emptyCommentMessage: "Į_Value required_____š", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Į_No records available_______š", // Shown when no comments are available for the selected issue
            remainingTextCount: "Į_${0} character(s) remain________š", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Į_No__š" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Sukonfigūruotų grupių nėra" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Į_Search this layer______š", // Displayed on hover of search icon
            noResultFoundText: "Į_No results found______š", // Displayed when no results are found after search
            searchInEditModeAlert: "Į_Search unavailable while editing___________š" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Į_Refresh___š", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Visi pasirinkimai ir neišsaugoti pakeitimai bus atmesti" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Į_Help__š" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Į_No feature found for this value___________š.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Į_No distinct values found for the field_____________š.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Į_and__š", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Į_Filters unavailable while editing___________š", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "Į_Select___š" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "Į_Edit record____š" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Sėkmingai atsijungėte", // Appears when user is successfully signed-out from application
            reSignInMessage: "Paspauskite prisijungti" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);