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
            error: "يتعذر إنشاء الخريطة"
        },
        webMapList: {
            owner: "المالك", // Appears in web-map list description panel when it is set to true
            created: "التاريخ الذي تم إنشائه", // Appears in web-map list description panel when it is set to true
            modified: "تاريخ التعديل", // Appears in web-map list description panel when it is set to true
            description: "الوصف", // Appears in web-map list description panel when it is set to true
            snippet: "الملخص", // Appears in web-map list description panel when it is set to true
            licenseInfo: "الدخول والاستخدام", // Appears in web-map list description panel when it is set to true
            accessInformation: "اعتمادات", // Appears in web-map list description panel when it is set to true
            tags: "علامات", // Appears in web-map list description panel when it is set to true
            numViews: "عدد مرات العرض", // Appears in web-map list description panel when it is set to true
            avgRating: "التقييم", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "المجموعات التي تم تكوينها غير صحيحة أو لم تتم مشاركة العناصر مع هذه المجموعة بعد", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "معلومات الخريطة", // Display tool-tip on command button to display description of web-map
            openWebmapList: "بيت_Open panel____لاحقة", //tooltip for toggle button
            closeWebmapList: "بيت_Close panel____لاحقة" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "بيت_Details___لاحقة", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "بيت_Attachments____لاحقة", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "بيت_Browse___لاحقة", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "بيت_Location___لاحقة", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "بيت_Submit___لاحقة", // Command button to submit the geoform to report an issue
            cancelButton: "بيت_Cancel___لاحقة", //Command button to close the geoform
            requiredField: "بيت_(required)____لاحقة", // Shown next to the field in which the data is mandatory
            selectDefaultText: "بيت_Select&hellip;_____لاحقة", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "بيت_Please enter valid value_________لاحقة.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "بيت_Layer fields are not configured to capture data_______________لاحقة", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "بيت_Please enter an integer________لاحقة", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "برجاء إدخال عدد صحيح", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Please enter a number", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Please enter a number", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "بيت_Please provide values for all required fields_______________لاحقة", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "بيت_Please select the location for your report______________لاحقة", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "بيت_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________لاحقة", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "بيت_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________لاحقة", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "بيت_Report could not be submitted__________لاحقة", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "بيت_attachment(s) selected________لاحقة", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "بيت_${failed} of ${total} attachment(s) failed to upload_________________لاحقة", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "بيت_Current location not available__________لاحقة", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "بيت_Current location is out of basemap extent_____________لاحقة", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "بيت_Save__لاحقة", // Command button to open the geoform
            cancelButtonTooltip: "بيت_Cancel___لاحقة", //tooltip for cancel button
            geoformBackButtonTooltip: "بيت_Return to the report list_________لاحقة", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "بيت_${count} features will be updated___________لاحقة", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "بيت_Attachments____لاحقة" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "بيت_Zoom in___لاحقة", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "التصغير." // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "تسجيل الدخول", // Appears when user has not signed in
            signOutOption: "تسجيل الخروج", // Appears when user has not signed in
            pleaseSignInText: "الرجاء تسجيل الدخول" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "لا توجد تقارير متاحة", // Appears when no issues are available in current extent
            noFeatureGeometry: "يتعذر عرض المعالم", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "بيت_Sort in ascending order________لاحقة", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "بيت_Sort in descending order________لاحقة", // Appears as a label for Descending flag as a sorting option
            filterLabel: "بيت_Filter___لاحقة", // Appears as a label for Filter container
            valueRadioButtonLabel: "بيت_Value___لاحقة", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "بيت_Unique___لاحقة", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "بيت_Select a category to get started___________لاحقة", // for showing default message on application load
            layerFeatureCount: "بيت_${featureCount} records________لاحقة" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "بيت_Time range____لاحقة", // Appears beside time slider widget
            timeSliderInEditModeAlert: "بيت_Time slider unavailable while editing____________لاحقة" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "بيت_Save__لاحقة", // Displayed on submit button to display comments
            commentsFormCancelButton: "بيت_Cancel___لاحقة", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "بيت_Edits could not be saved_________لاحقة.", // Shown when user is unable to add comments
            emptyCommentMessage: "بيت_Value required_____لاحقة", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "بيت_No records available_______لاحقة", // Shown when no comments are available for the selected issue
            remainingTextCount: "بيت_${0} character(s) remain________لاحقة", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "بيت_No__لاحقة" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "لم يتم تكوين المجموعة" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "بيت_Search this layer______لاحقة", // Displayed on hover of search icon
            noResultFoundText: "بيت_No results found______لاحقة", // Displayed when no results are found after search
            searchInEditModeAlert: "بيت_Search unavailable while editing___________لاحقة" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "بيت_Refresh___لاحقة", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "سيتم تجاهل جميع عمليات التحديد والتغييرات غير المحفوظة" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "بيت_Help__لاحقة" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "بيت_No feature found for this value___________لاحقة.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "بيت_No distinct values found for the field_____________لاحقة.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "بيت_and__لاحقة", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "بيت_Filters unavailable while editing___________لاحقة", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "بيت_Select___لاحقة" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "بيت_Edit record____لاحقة" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "تم تسجيل الخروج بنجاح", // Appears when user is successfully signed-out from application
            reSignInMessage: "انقر هنا لتسجيل الدخول" // Appears when user is signed-out from application and wants to sign-in again
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