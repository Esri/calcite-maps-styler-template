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
            error: "No se puede crear el mapa"
        },
        webMapList: {
            owner: "Propietario", // Appears in web-map list description panel when it is set to true
            created: "Fecha creada", // Appears in web-map list description panel when it is set to true
            modified: "Fecha de modificación", // Appears in web-map list description panel when it is set to true
            description: "Descripción", // Appears in web-map list description panel when it is set to true
            snippet: "Resumen", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Restricciones de acceso y uso", // Appears in web-map list description panel when it is set to true
            accessInformation: "Créditos", // Appears in web-map list description panel when it is set to true
            tags: "Etiquetas", // Appears in web-map list description panel when it is set to true
            numViews: "Número de vistas", // Appears in web-map list description panel when it is set to true
            avgRating: "Calificación", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "El grupo configurado no es válido o todavía no se han compartido elementos con este grupo", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Información del mapa", // Display tool-tip on command button to display description of web-map
            openWebmapList: "á_Open panel____Ó", //tooltip for toggle button
            closeWebmapList: "á_Close panel____Ó" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "á_Details___Ó", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "á_Attachments____Ó", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "á_Browse___Ó", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "á_Location___Ó", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "á_Submit___Ó", // Command button to submit the geoform to report an issue
            cancelButton: "á_Cancel___Ó", //Command button to close the geoform
            requiredField: "á_(required)____Ó", // Shown next to the field in which the data is mandatory
            selectDefaultText: "á_Select&hellip;_____Ó", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "á_Please enter valid value_________Ó.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "á_Layer fields are not configured to capture data_______________Ó", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "á_Please enter an integer________Ó", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Introduce un entero", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Por favor, entre un número", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Por favor, entre un número", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "á_Please provide values for all required fields_______________Ó", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "á_Please select the location for your report______________Ó", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "á_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________Ó", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "á_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________Ó", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "á_Report could not be submitted__________Ó", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "á_attachment(s) selected________Ó", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "á_${failed} of ${total} attachment(s) failed to upload_________________Ó", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "á_Current location not available__________Ó", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "á_Current location is out of basemap extent_____________Ó", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "á_Save__Ó", // Command button to open the geoform
            cancelButtonTooltip: "á_Cancel___Ó", //tooltip for cancel button
            geoformBackButtonTooltip: "á_Return to the report list_________Ó", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "á_${count} features will be updated___________Ó", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "á_Attachments____Ó" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "á_Zoom in___Ó", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Alejar" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Iniciar sesión", // Appears when user has not signed in
            signOutOption: "Cerrar sesión", // Appears when user has not signed in
            pleaseSignInText: "Inicia sesión" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "No hay informes disponibles", // Appears when no issues are available in current extent
            noFeatureGeometry: "No se puede mostrar la entidad", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "á_Sort in ascending order________Ó", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "á_Sort in descending order________Ó", // Appears as a label for Descending flag as a sorting option
            filterLabel: "á_Filter___Ó", // Appears as a label for Filter container
            valueRadioButtonLabel: "á_Value___Ó", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "á_Unique___Ó", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "á_Select a category to get started___________Ó" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "á_Time range____Ó", // Appears beside time slider widget
            timeSliderInEditModeAlert: "á_Time slider unavailable while editing____________Ó" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "á_Save__Ó", // Displayed on submit button to display comments
            commentsFormCancelButton: "á_Cancel___Ó", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "á_Edits could not be saved_________Ó.", // Shown when user is unable to add comments
            emptyCommentMessage: "á_Value required_____Ó", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "á_No records available_______Ó", // Shown when no comments are available for the selected issue
            remainingTextCount: "á_${0} character(s) remain________Ó", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "á_No__Ó" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "No hay ningún grupo configurado" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "á_Search this layer______Ó", // Displayed on hover of search icon
            noResultFoundText: "á_No results found______Ó", // Displayed when no results are found after search
            searchInEditModeAlert: "á_Search unavailable while editing___________Ó" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "á_Refresh___Ó", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Se descartarán todas las seleccione y cambios sin guardar" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "á_Help__Ó" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "á_No feature found for this value___________Ó.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "á_No distinct values found for the field_____________Ó.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "á_and__Ó", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "á_Filters unavailable while editing___________Ó" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "á_Edit record____Ó" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Has cerrado sesión correctamente", // Appears when user is successfully signed-out from application
            reSignInMessage: "Haz clic aquí para iniciar sesión" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);