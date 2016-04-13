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
            error: "Не удалось создать карту"
        },
        webMapList: {
            owner: "Владелец", // Appears in web-map list description panel when it is set to true
            created: "Время создания", // Appears in web-map list description panel when it is set to true
            modified: "Дата изменения", // Appears in web-map list description panel when it is set to true
            description: "Описание", // Appears in web-map list description panel when it is set to true
            snippet: "Итоговая информация", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ограничения доступа и использования", // Appears in web-map list description panel when it is set to true
            accessInformation: "Сведения об авторах", // Appears in web-map list description panel when it is set to true
            tags: "Теги", // Appears in web-map list description panel when it is set to true
            numViews: "Количество просмотров", // Appears in web-map list description panel when it is set to true
            avgRating: "Рейтинг", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Настроенная группа недействительна, или в указанной группе нет доступных элементов.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Информация карты", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Ж_Open panel____Я", //tooltip for toggle button
            closeWebmapList: "Ж_Close panel____Я" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Ж_Details___Я", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ж_Attachments____Я", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ж_Browse___Я", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ж_Location___Я", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ж_Submit___Я", // Command button to submit the geoform to report an issue
            cancelButton: "Ж_Cancel___Я", //Command button to close the geoform
            requiredField: "Ж_(required)____Я", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ж_Select&hellip;_____Я", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ж_Please enter valid value_________Я.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ж_Layer fields are not configured to capture data_______________Я", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ж_Please enter an integer________Я", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Введите целое число", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Введите число", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Введите число", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ж_Please provide values for all required fields_______________Я", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ж_Please select the location for your report______________Я", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ж_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________Я", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ж_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________Я", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ж_Report could not be submitted__________Я", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ж_attachment(s) selected________Я", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ж_${failed} of ${total} attachment(s) failed to upload_________________Я", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ж_Current location not available__________Я", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ж_Current location is out of basemap extent_____________Я", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ж_Save__Я", // Command button to open the geoform
            cancelButtonTooltip: "Ж_Cancel___Я", //tooltip for cancel button
            geoformBackButtonTooltip: "Ж_Return to the report list_________Я", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Ж_${count} features will be updated___________Я", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Ж_Attachments____Я" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Ж_Zoom in___Я", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Уменьшить" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Вход", // Appears when user has not signed in
            signOutOption: "Выход", // Appears when user has not signed in
            pleaseSignInText: "Выполните вход" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Нет доступных отчетов", // Appears when no issues are available in current extent
            noFeatureGeometry: "Объекты невозможно отобразить", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Ж_Sort in ascending order________Я", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Ж_Sort in descending order________Я", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Ж_Filter___Я", // Appears as a label for Filter container
            valueRadioButtonLabel: "Ж_Value___Я", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Ж_Unique___Я", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Ж_Select a category to get started___________Я", // for showing default message on application load
            layerFeatureCount: "Ж_No of records: ${featureCount}__________Я" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "Ж_Time range____Я", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Ж_Time slider unavailable while editing____________Я" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Ж_Save__Я", // Displayed on submit button to display comments
            commentsFormCancelButton: "Ж_Cancel___Я", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Ж_Edits could not be saved_________Я.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ж_Value required_____Я", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ж_No records available_______Я", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ж_${0} character(s) remain________Я", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ж_No__Я" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Не задана группа" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Ж_Search this layer______Я", // Displayed on hover of search icon
            noResultFoundText: "Ж_No results found______Я", // Displayed when no results are found after search
            searchInEditModeAlert: "Ж_Search unavailable while editing___________Я" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Ж_Refresh___Я", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Все выборки и несохраненные изменения будут удалены" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Ж_Help__Я" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Ж_No feature found for this value___________Я.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Ж_No distinct values found for the field_____________Я.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Ж_and__Я", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Ж_Filters unavailable while editing___________Я", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "Ж_Select___Я" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "Ж_Edit record____Я" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Выход успешно выполнен", // Appears when user is successfully signed-out from application
            reSignInMessage: "Щелкните здесь, чтобы выполнить вход" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);