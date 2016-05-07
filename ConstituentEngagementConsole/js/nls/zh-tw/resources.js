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
            error: "無法建立地圖"
        },
        webMapList: {
            owner: "擁有者", // Appears in web-map list description panel when it is set to true
            created: "建立日期", // Appears in web-map list description panel when it is set to true
            modified: "修改日期", // Appears in web-map list description panel when it is set to true
            description: "描述", // Appears in web-map list description panel when it is set to true
            snippet: "摘要(S)", // Appears in web-map list description panel when it is set to true
            licenseInfo: "存取和使用限制", // Appears in web-map list description panel when it is set to true
            accessInformation: "點數", // Appears in web-map list description panel when it is set to true
            tags: "標記", // Appears in web-map list description panel when it is set to true
            numViews: "視圖數量", // Appears in web-map list description panel when it is set to true
            avgRating: "評級次數", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "已配置的群組無效，或者沒有與該群組共用的任何項目", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "地圖資訊", // Display tool-tip on command button to display description of web-map
            openWebmapList: "試_Open panel____驗", //tooltip for toggle button
            closeWebmapList: "試_Close panel____驗" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "試_Details___驗", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "試_Attachments____驗", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "試_Browse___驗", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "試_Location___驗", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "試_Submit___驗", // Command button to submit the geoform to report an issue
            cancelButton: "試_Cancel___驗", //Command button to close the geoform
            requiredField: "試_(required)____驗", // Shown next to the field in which the data is mandatory
            selectDefaultText: "試_Select&hellip;_____驗", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "試_Please enter valid value_________驗.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "試_Layer fields are not configured to capture data_______________驗", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "試_Please enter an integer________驗", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "請輸入一個整數", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "請輸入一個數字", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "請輸入一個數字", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "試_Please provide values for all required fields_______________驗", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "試_Please select the location for your report______________驗", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "試_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________驗", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "試_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________驗", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "試_Report could not be submitted__________驗", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "試_attachment(s) selected________驗", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "試_${failed} of ${total} attachment(s) failed to upload_________________驗", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "試_Current location not available__________驗", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "試_Current location is out of basemap extent_____________驗", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "試_Save__驗", // Command button to open the geoform
            cancelButtonTooltip: "試_Cancel___驗", //tooltip for cancel button
            geoformBackButtonTooltip: "試_Return to the report list_________驗", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "試_${count} features will be updated___________驗", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "試_Attachments____驗" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "試_Zoom in___驗", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "縮小" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "登入", // Appears when user has not signed in
            signOutOption: "登出", // Appears when user has not signed in
            pleaseSignInText: "請登入" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "無任何報告可用", // Appears when no issues are available in current extent
            noFeatureGeometry: "無法顯示圖徵", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "試_Sort in ascending order________驗", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "試_Sort in descending order________驗", // Appears as a label for Descending flag as a sorting option
            filterLabel: "試_Filter___驗", // Appears as a label for Filter container
            valueRadioButtonLabel: "試_Value___驗", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "試_Unique___驗", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "試_Select a category to get started___________驗", // for showing default message on application load
            layerFeatureCount: "試_${featureCount} records________驗" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "試_Time range____驗", // Appears beside time slider widget
            timeSliderInEditModeAlert: "試_Time slider unavailable while editing____________驗" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "試_Save__驗", // Displayed on submit button to display comments
            commentsFormCancelButton: "試_Cancel___驗", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "試_Edits could not be saved_________驗.", // Shown when user is unable to add comments
            emptyCommentMessage: "試_Value required_____驗", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "試_No records available_______驗", // Shown when no comments are available for the selected issue
            remainingTextCount: "試_${0} character(s) remain________驗", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "試_No__驗" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "未配置任何群組" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "試_Search this layer______驗", // Displayed on hover of search icon
            noResultFoundText: "試_No results found______驗", // Displayed when no results are found after search
            searchInEditModeAlert: "試_Search unavailable while editing___________驗" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "試_Refresh___驗", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "將放棄所有選擇和未儲存的更改" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "試_Help__驗" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "試_No feature found for this value___________驗.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "試_No distinct values found for the field_____________驗.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "試_and__驗", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "試_Filters unavailable while editing___________驗", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "試_Select___驗" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "試_Edit record____驗" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "您已成功登出", // Appears when user is successfully signed-out from application
            reSignInMessage: "按一下此處以登入" // Appears when user is signed-out from application and wants to sign-in again
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