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
            error: "ไม่สามารถสร้างแผนที่ได้"
        },
        webMapList: {
            owner: "เจ้าของ", // Appears in web-map list description panel when it is set to true
            created: "วันที่สร้าง", // Appears in web-map list description panel when it is set to true
            modified: "วันที่แก้ไข", // Appears in web-map list description panel when it is set to true
            description: "คำบรรยาย", // Appears in web-map list description panel when it is set to true
            snippet: "สรุป", // Appears in web-map list description panel when it is set to true
            licenseInfo: "การเข้าถึงและข้อจำกัด", // Appears in web-map list description panel when it is set to true
            accessInformation: "เครดิต", // Appears in web-map list description panel when it is set to true
            tags: "แท็กส์", // Appears in web-map list description panel when it is set to true
            numViews: "จำนวนวิว", // Appears in web-map list description panel when it is set to true
            avgRating: "อันดับ", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "กำหนดกลุ่มไม่ถูกต้องหรือยังไม่มีไอเท็มแชร์อยู่ในกลุ่ม", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ข้อมูลรายละเอียดแผนที่", // Display tool-tip on command button to display description of web-map
            openWebmapList: "ก้_Open panel____ษฺ", //tooltip for toggle button
            closeWebmapList: "ก้_Close panel____ษฺ" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "ก้_Details___ษฺ", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ก้_Attachments____ษฺ", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ก้_Browse___ษฺ", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ก้_Location___ษฺ", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ก้_Submit___ษฺ", // Command button to submit the geoform to report an issue
            cancelButton: "ก้_Cancel___ษฺ", //Command button to close the geoform
            requiredField: "ก้_(required)____ษฺ", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ก้_Select&hellip;_____ษฺ", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ก้_Please enter valid value_________ษฺ.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ก้_Layer fields are not configured to capture data_______________ษฺ", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ก้_Please enter an integer________ษฺ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "โปรดกรอกเลขจำนวนเต็ม", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "โปรดกรอกตัวเลข", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "โปรดกรอกตัวเลข", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ก้_Please provide values for all required fields_______________ษฺ", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ก้_Please select the location for your report______________ษฺ", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ก้_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ษฺ", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ก้_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ษฺ", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ก้_Report could not be submitted__________ษฺ", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ก้_attachment(s) selected________ษฺ", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ก้_${failed} of ${total} attachment(s) failed to upload_________________ษฺ", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ก้_Current location not available__________ษฺ", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ก้_Current location is out of basemap extent_____________ษฺ", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ก้_Save__ษฺ", // Command button to open the geoform
            cancelButtonTooltip: "ก้_Cancel___ษฺ", //tooltip for cancel button
            geoformBackButtonTooltip: "ก้_Return to the report list_________ษฺ", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "ก้_${count} features will be updated___________ษฺ", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "ก้_Attachments____ษฺ" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "ก้_Zoom in___ษฺ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ย่อภาพ" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "ลงชื่อเข้าใช้", // Appears when user has not signed in
            signOutOption: "ลงชื่อออก", // Appears when user has not signed in
            pleaseSignInText: "กรุณาลงชื่อเข้าใช้" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "ไม่มีรายงานให้", // Appears when no issues are available in current extent
            noFeatureGeometry: "ไม่สามารถแสดงฟีเจอร์ได้", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "ก้_Sort in ascending order________ษฺ", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "ก้_Sort in descending order________ษฺ", // Appears as a label for Descending flag as a sorting option
            filterLabel: "ก้_Filter___ษฺ", // Appears as a label for Filter container
            valueRadioButtonLabel: "ก้_Value___ษฺ", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "ก้_Unique___ษฺ", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "ก้_Select a category to get started___________ษฺ", // for showing default message on application load
            layerFeatureCount: "ก้_${featureCount} records________ษฺ" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "ก้_Time range____ษฺ", // Appears beside time slider widget
            timeSliderInEditModeAlert: "ก้_Time slider unavailable while editing____________ษฺ" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "ก้_Save__ษฺ", // Displayed on submit button to display comments
            commentsFormCancelButton: "ก้_Cancel___ษฺ", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "ก้_Edits could not be saved_________ษฺ.", // Shown when user is unable to add comments
            emptyCommentMessage: "ก้_Value required_____ษฺ", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ก้_No records available_______ษฺ", // Shown when no comments are available for the selected issue
            remainingTextCount: "ก้_${0} character(s) remain________ษฺ", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ก้_No__ษฺ" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "ยังไม่กำหนดกลุ่ม" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "ก้_Search this layer______ษฺ", // Displayed on hover of search icon
            noResultFoundText: "ก้_No results found______ษฺ", // Displayed when no results are found after search
            searchInEditModeAlert: "ก้_Search unavailable while editing___________ษฺ" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "ก้_Refresh___ษฺ", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "การเลือกทั้งหมดและสิ่งที่ไม่ได้บันทึกการเปลี่ยนแปลงจะถูกละทิ้ง" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "ก้_Help__ษฺ" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "ก้_No feature found for this value___________ษฺ.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "ก้_No distinct values found for the field_____________ษฺ.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "ก้_and__ษฺ", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "ก้_Filters unavailable while editing___________ษฺ", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "ก้_Select___ษฺ" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "ก้_Edit record____ษฺ" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "คุณได้ลงชื่อออกเรียบร้อยแล้ว", // Appears when user is successfully signed-out from application
            reSignInMessage: "กดที่นี่ เพื่อลงชื่อเข้าใช้" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);