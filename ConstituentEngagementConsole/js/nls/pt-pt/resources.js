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
            error: "Não foi possível criar mapa"
        },
        webMapList: {
            owner: "Proprietário", // Appears in web-map list description panel when it is set to true
            created: "Data criada", // Appears in web-map list description panel when it is set to true
            modified: "Data de modificação", // Appears in web-map list description panel when it is set to true
            description: "Descrição", // Appears in web-map list description panel when it is set to true
            snippet: "Resumo", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Restrições de utilização e acesso", // Appears in web-map list description panel when it is set to true
            accessInformation: "Créditos", // Appears in web-map list description panel when it is set to true
            tags: "Palavras-chave", // Appears in web-map list description panel when it is set to true
            numViews: "Número de visualizações", // Appears in web-map list description panel when it is set to true
            avgRating: "Avaliação", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Grupo configurado é inválido ou itens ainda não foram partilhados com este grupo", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informação de mapa", // Display tool-tip on command button to display description of web-map
            openWebmapList: "ã_Open panel____Ç", //tooltip for toggle button
            closeWebmapList: "ã_Close panel____Ç" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "ã_Details___Ç", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ã_Attachments____Ç", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ã_Browse___Ç", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ã_Location___Ç", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ã_Submit___Ç", // Command button to submit the geoform to report an issue
            cancelButton: "ã_Cancel___Ç", //Command button to close the geoform
            requiredField: "ã_(required)____Ç", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ã_Select&hellip;_____Ç", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ã_Please enter valid value_________Ç.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ã_Layer fields are not configured to capture data_______________Ç", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ã_Please enter an integer________Ç", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Por favor introduza um número inteiro", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Por favor introduza um número", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Por favor introduza um número", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ã_Please provide values for all required fields_______________Ç", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ã_Please select the location for your report______________Ç", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ã_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________Ç", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ã_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________Ç", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ã_Report could not be submitted__________Ç", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ã_attachment(s) selected________Ç", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ã_${failed} of ${total} attachment(s) failed to upload_________________Ç", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ã_Current location not available__________Ç", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ã_Current location is out of basemap extent_____________Ç", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ã_Save__Ç", // Command button to open the geoform
            cancelButtonTooltip: "ã_Cancel___Ç", //tooltip for cancel button
            geoformBackButtonTooltip: "ã_Return to the report list_________Ç", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "ã_${count} features will be updated___________Ç", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "ã_Attachments____Ç" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "ã_Zoom in___Ç", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Reduzir zoom" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Iniciar sessão", // Appears when user has not signed in
            signOutOption: "Terminar sessão", // Appears when user has not signed in
            pleaseSignInText: "Por favor inicie sessão" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Não existem relatórios disponíveis", // Appears when no issues are available in current extent
            noFeatureGeometry: "Elemento não pode ser exibido", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "ã_Sort in ascending order________Ç", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "ã_Sort in descending order________Ç", // Appears as a label for Descending flag as a sorting option
            filterLabel: "ã_Filter___Ç", // Appears as a label for Filter container
            valueRadioButtonLabel: "ã_Value___Ç", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "ã_Unique___Ç", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "ã_Select a category to get started___________Ç" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "ã_Time range____Ç", // Appears beside time slider widget
            timeSliderInEditModeAlert: "ã_Time slider unavailable while editing____________Ç" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "ã_Save__Ç", // Displayed on submit button to display comments
            commentsFormCancelButton: "ã_Cancel___Ç", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "ã_Edits could not be saved_________Ç.", // Shown when user is unable to add comments
            emptyCommentMessage: "ã_Value required_____Ç", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ã_No records available_______Ç", // Shown when no comments are available for the selected issue
            remainingTextCount: "ã_${0} character(s) remain________Ç", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ã_No__Ç" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Nenhum grupo configurado" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "ã_Search this layer______Ç", // Displayed on hover of search icon
            noResultFoundText: "ã_No results found______Ç", // Displayed when no results are found after search
            searchInEditModeAlert: "ã_Search unavailable while editing___________Ç" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "ã_Refresh___Ç", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Todas as selecções e alterações não guardadas serão discartadas" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "ã_Help__Ç" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "ã_No feature found for this value___________Ç.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "ã_No distinct values found for the field_____________Ç.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "ã_and__Ç", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "ã_Filters unavailable while editing___________Ç" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "ã_Edit record____Ç" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Terminou sessão com sucesso", // Appears when user is successfully signed-out from application
            reSignInMessage: "Clique aqui para iniciar sessão" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);