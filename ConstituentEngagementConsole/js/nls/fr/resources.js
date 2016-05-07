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
            error: "Impossible de créer la carte"
        },
        webMapList: {
            owner: "Propriétaire", // Appears in web-map list description panel when it is set to true
            created: "Date de création", // Appears in web-map list description panel when it is set to true
            modified: "Date de modification", // Appears in web-map list description panel when it is set to true
            description: "Description", // Appears in web-map list description panel when it is set to true
            snippet: "Résumé", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Restrictions d\'accès et d\'utilisation", // Appears in web-map list description panel when it is set to true
            accessInformation: "Crédits", // Appears in web-map list description panel when it is set to true
            tags: "Balises", // Appears in web-map list description panel when it is set to true
            numViews: "Nombre de vues", // Appears in web-map list description panel when it is set to true
            avgRating: "Evaluation", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Le groupe configuré n\'est pas valide ou aucun élément n\'a encore été partagé avec ce groupe", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informations sur la carte", // Display tool-tip on command button to display description of web-map
            openWebmapList: "æ_Open panel____Â", //tooltip for toggle button
            closeWebmapList: "æ_Close panel____Â" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "æ_Details___Â", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "æ_Attachments____Â", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "æ_Browse___Â", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "æ_Location___Â", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "æ_Submit___Â", // Command button to submit the geoform to report an issue
            cancelButton: "æ_Cancel___Â", //Command button to close the geoform
            requiredField: "æ_(required)____Â", // Shown next to the field in which the data is mandatory
            selectDefaultText: "æ_Select&hellip;_____Â", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "æ_Please enter valid value_________Â.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "æ_Layer fields are not configured to capture data_______________Â", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "æ_Please enter an integer________Â", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Entrez un entier", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Please enter a number", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Please enter a number", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "æ_Please provide values for all required fields_______________Â", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "æ_Please select the location for your report______________Â", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "æ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________Â", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "æ_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________Â", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "æ_Report could not be submitted__________Â", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "æ_attachment(s) selected________Â", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "æ_${failed} of ${total} attachment(s) failed to upload_________________Â", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "æ_Current location not available__________Â", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "æ_Current location is out of basemap extent_____________Â", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "æ_Save__Â", // Command button to open the geoform
            cancelButtonTooltip: "æ_Cancel___Â", //tooltip for cancel button
            geoformBackButtonTooltip: "æ_Return to the report list_________Â", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "æ_${count} features will be updated___________Â", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "æ_Attachments____Â" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "æ_Zoom in___Â", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom arrière" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Connexion", // Appears when user has not signed in
            signOutOption: "Déconnexion", // Appears when user has not signed in
            pleaseSignInText: "Connectez-vous" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Aucun rapport disponible", // Appears when no issues are available in current extent
            noFeatureGeometry: "Impossible d\'afficher l\'entité", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "æ_Sort in ascending order________Â", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "æ_Sort in descending order________Â", // Appears as a label for Descending flag as a sorting option
            filterLabel: "æ_Filter___Â", // Appears as a label for Filter container
            valueRadioButtonLabel: "æ_Value___Â", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "æ_Unique___Â", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "æ_Select a category to get started___________Â", // for showing default message on application load
            layerFeatureCount: "æ_${featureCount} records________Â" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "æ_Time range____Â", // Appears beside time slider widget
            timeSliderInEditModeAlert: "æ_Time slider unavailable while editing____________Â" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "æ_Save__Â", // Displayed on submit button to display comments
            commentsFormCancelButton: "æ_Cancel___Â", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "æ_Edits could not be saved_________Â.", // Shown when user is unable to add comments
            emptyCommentMessage: "æ_Value required_____Â", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "æ_No records available_______Â", // Shown when no comments are available for the selected issue
            remainingTextCount: "æ_${0} character(s) remain________Â", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "æ_No__Â" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Aucun groupe configuré" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "æ_Search this layer______Â", // Displayed on hover of search icon
            noResultFoundText: "æ_No results found______Â", // Displayed when no results are found after search
            searchInEditModeAlert: "æ_Search unavailable while editing___________Â" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "æ_Refresh___Â", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Toutes les sélections et les modifications non enregistrées seront ignorées" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "æ_Help__Â" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "æ_No feature found for this value___________Â.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "æ_No distinct values found for the field_____________Â.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "æ_and__Â", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "æ_Filters unavailable while editing___________Â", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "æ_Select___Â" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "æ_Edit record____Â" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Vous avez été déconnecté", // Appears when user is successfully signed-out from application
            reSignInMessage: "Cliquez ici pour vous connecter" // Appears when user is signed-out from application and wants to sign-in again
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