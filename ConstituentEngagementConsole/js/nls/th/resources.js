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
  "map": {
    "error": "ไม่สามารถสร้างแผนที่ได้"
  },
  "webMapList": {
    "owner": "เจ้าของ",
    "created": "วันที่สร้าง",
    "modified": "วันที่แก้ไข",
    "description": "คำบรรยาย",
    "snippet": "สรุป",
    "licenseInfo": "การเข้าถึงและข้อจำกัด",
    "accessInformation": "เครดิต",
    "tags": "แท็กส์",
    "numViews": "จำนวนวิว",
    "avgRating": "อันดับ",
    "noWebMapInGroup": "กำหนดกลุ่มไม่ถูกต้องหรือยังไม่มีไอเท็มแชร์อยู่ในกลุ่ม",
    "infoBtnToolTip": "ข้อมูลรายละเอียดแผนที่",
    "openWebmapList": "ก้_Open panel____ษฺ",
    "closeWebmapList": "ก้_Close panel____ษฺ"
  },
  "geoform": {
    "enterInformation": "ก้_Details___ษฺ",
    "selectAttachments": "ก้_Attachments____ษฺ",
    "selectFileText": "ก้_Browse___ษฺ",
    "enterLocation": "ก้_Location___ษฺ",
    "reportItButton": "ก้_Submit___ษฺ",
    "cancelButton": "ก้_Cancel___ษฺ",
    "requiredField": "ก้_(required)____ษฺ",
    "selectDefaultText": "ก้_Select&hellip;_____ษฺ",
    "invalidInputValue": "ก้_Please enter valid value_________ษฺ.",
    "noFieldsConfiguredMessage": "ก้_Layer fields are not configured to capture data_______________ษฺ",
    "invalidSmallNumber": "ก้_Please enter an integer________ษฺ",
    "invalidNumber": "โปรดกรอกเลขจำนวนเต็ม",
    "invalidFloat": "โปรดกรอกตัวเลข",
    "invalidDouble": "โปรดกรอกตัวเลข",
    "requiredFields": "ก้_Please provide values for all required fields_______________ษฺ",
    "selectLocation": "ก้_Please select the location for your report______________ษฺ",
    "numericRangeHintMessage": "ก้_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ษฺ",
    "dateRangeHintMessage": "ก้_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ษฺ",
    "errorsInApplyEdits": "ก้_Report could not be submitted__________ษฺ",
    "attachmentSelectedMsg": "ก้_attachment(s) selected________ษฺ",
    "attachmentUploadStatus": "ก้_${failed} of ${total} attachment(s) failed to upload_________________ษฺ",
    "geoLocationError": "ก้_Current location not available__________ษฺ",
    "geoLocationOutOfExtent": "ก้_Current location is out of basemap extent_____________ษฺ",
    "submitButtonTooltip": "ก้_Save__ษฺ",
    "cancelButtonTooltip": "ก้_Cancel___ษฺ",
    "geoformBackButtonTooltip": "ก้_Return to the report list_________ษฺ",
    "updateFeaturesConfirmationMsg": "ก้_${count} features will be updated___________ษฺ",
    "attachmentHeaderText": "ก้_Attachments____ษฺ"
  },
  "mapViewer": {
    "zoomInToolTip": "ก้_Zoom in___ษฺ",
    "zoomOutToolTip": "ย่อภาพ"
  },
  "applicationHeader": {
    "signInOption": "ลงชื่อเข้าใช้",
    "signOutOption": "ลงชื่อออก",
    "pleaseSignInText": "กรุณาลงชื่อเข้าใช้"
  },
  "dataviewer": {
    "noIssuesReported": "ไม่มีรายงานให้",
    "noFeatureGeometry": "ไม่สามารถแสดงฟีเจอร์ได้",
    "ascendingFlagTitle": "ก้_Sort in ascending order________ษฺ",
    "descendingFlagTitle": "ก้_Sort in descending order________ษฺ",
    "filterLabel": "ก้_Filter___ษฺ",
    "valueRadioButtonLabel": "ก้_Value___ษฺ",
    "uniqueRadioButtonLabel": "ก้_Unique___ษฺ",
    "selectLayerToBegin": "ก้_Select a category to get started___________ษฺ",
    "layerFeatureCount": "ก้_${featureCount} records________ษฺ"
  },
  "timeSlider": {
    "timeSliderLabel": "ก้_Time range____ษฺ",
    "timeSliderInEditModeAlert": "ก้_Time slider unavailable while editing____________ษฺ"
  },
  "comment": {
    "commentsFormSubmitButton": "ก้_Save__ษฺ",
    "commentsFormCancelButton": "ก้_Cancel___ษฺ",
    "errorInSubmittingComment": "ก้_Edits could not be saved_________ษฺ.",
    "emptyCommentMessage": "ก้_Value required_____ษฺ",
    "placeHolderText": "",
    "noCommentsAvailableText": "ก้_No records available_______ษฺ",
    "remainingTextCount": "ก้_${0} character(s) remain________ษฺ",
    "showNoText": "ก้_No__ษฺ"
  },
  "main": {
    "noGroup": "ยังไม่กำหนดกลุ่ม"
  },
  "search": {
    "searchIconTooltip": "ก้_Search this layer______ษฺ",
    "noResultFoundText": "ก้_No results found______ษฺ",
    "searchInEditModeAlert": "ก้_Search unavailable while editing___________ษฺ"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "ก้_Refresh___ษฺ",
    "confirmManualRefeshText": "การเลือกทั้งหมดและสิ่งที่ไม่ได้บันทึกการเปลี่ยนแปลงจะถูกละทิ้ง"
  },
  "help": {
    "helpIconTooltip": "ก้_Help__ษฺ"
  },
  "filter": {
    "noFeatureFoundText": "ก้_No feature found for this value___________ษฺ.",
    "distinctQueryFalied": "ก้_No distinct values found for the field_____________ษฺ.",
    "andText": "ก้_and__ษฺ",
    "filterInEditModeAlert": "ก้_Filters unavailable while editing___________ษฺ",
    "dropdownSelectOption": "ก้_Select___ษฺ"
  },
  "detailsPanel": {
    "editContentText": "ก้_Edit record____ษฺ"
  },
  "signOutPage": {
    "signOutMessage": "คุณได้ลงชื่อออกเรียบร้อยแล้ว",
    "reSignInMessage": "กดที่นี่ เพื่อลงชื่อเข้าใช้"
  }
});