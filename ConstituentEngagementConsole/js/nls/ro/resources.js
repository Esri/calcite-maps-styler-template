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
            error: "Imposibil de creat harta"
        },
        webMapList: {
            owner: "Proprietar", // Appears in web-map list description panel when it is set to true
            created: "Data creării", // Appears in web-map list description panel when it is set to true
            modified: "Dată modificată", // Appears in web-map list description panel when it is set to true
            description: "Descriere", // Appears in web-map list description panel when it is set to true
            snippet: "Rezumat", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Reguli de accesare şi utilizare", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credite", // Appears in web-map list description panel when it is set to true
            tags: "Etichete", // Appears in web-map list description panel when it is set to true
            numViews: "Număr de vizualizări", // Appears in web-map list description panel when it is set to true
            avgRating: "Calificativ", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Grupul configurat nu este valid sau niciun element nu a fost încă partajat cu grupul", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informaţii hartă", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Ă_Open panel____ș", //tooltip for toggle button
            closeWebmapList: "Ă_Close panel____ș" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Ă_Details___ș", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ă_Attachments____ș", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ă_Browse___ș", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ă_Location___ș", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ă_Submit___ș", // Command button to submit the geoform to report an issue
            cancelButton: "Ă_Cancel___ș", //Command button to close the geoform
            requiredField: "Ă_(required)____ș", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ă_Select&hellip;_____ș", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ă_Please enter valid value_________ș.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ă_Layer fields are not configured to capture data_______________ș", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ă_Please enter an integer________ș", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Introduceţi un număr întreg", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Introduceţi un număr", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Introduceţi un număr", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ă_Please provide values for all required fields_______________ș", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ă_Please select the location for your report______________ș", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ă_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ș", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ă_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ș", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ă_Report could not be submitted__________ș", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ă_attachment(s) selected________ș", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ă_${failed} of ${total} attachment(s) failed to upload_________________ș", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ă_Current location not available__________ș", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ă_Current location is out of basemap extent_____________ș", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ă_Save__ș", // Command button to open the geoform
            cancelButtonTooltip: "Ă_Cancel___ș", //tooltip for cancel button
            geoformBackButtonTooltip: "Ă_Return to the report list_________ș", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Ă_${count} features will be updated___________ș", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Ă_Attachments____ș" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Ă_Zoom in___ș", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Micşorare" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Autentificare", // Appears when user has not signed in
            signOutOption: "Deconectare", // Appears when user has not signed in
            pleaseSignInText: "Autentificaţi-vă" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Nu există niciun raport disponibil", // Appears when no issues are available in current extent
            noFeatureGeometry: "Obiectul spaţial nu poate fi afişat", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Ă_Sort in ascending order________ș", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Ă_Sort in descending order________ș", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Ă_Filter___ș", // Appears as a label for Filter container
            valueRadioButtonLabel: "Ă_Value___ș", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Ă_Unique___ș", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Ă_Select a category to get started___________ș" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "Ă_Time range____ș", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Ă_Time slider unavailable while editing____________ș" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Ă_Save__ș", // Displayed on submit button to display comments
            commentsFormCancelButton: "Ă_Cancel___ș", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Ă_Edits could not be saved_________ș.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ă_Value required_____ș", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ă_No records available_______ș", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ă_${0} character(s) remain________ș", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ă_No__ș" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Niciun grup configurat" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Ă_Search this layer______ș", // Displayed on hover of search icon
            noResultFoundText: "Ă_No results found______ș", // Displayed when no results are found after search
            searchInEditModeAlert: "Ă_Search unavailable while editing___________ș" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Ă_Refresh___ș", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Toate selecţiile şi modificările nesalvate vor fi eliminate" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Ă_Help__ș" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Ă_No feature found for this value___________ș.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Ă_No distinct values found for the field_____________ș.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Ă_and__ș", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Ă_Filters unavailable while editing___________ș" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "Ă_Edit record____ș" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "V-aţi deconectat cu succes", // Appears when user is successfully signed-out from application
            reSignInMessage: "Faceţi clic aici pentru a vă autentifica" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);