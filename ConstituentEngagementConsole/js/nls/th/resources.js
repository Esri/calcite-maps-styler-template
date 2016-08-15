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
    "openWebmapList": "เปิดพาแนล",
    "closeWebmapList": "ปิดพาแนล"
  },
  "geoform": {
    "enterInformation": "รายละเอียด",
    "selectAttachments": "แนบ",
    "selectFileText": "ค้นหา",
    "enterLocation": "ตำแหน่ง",
    "reportItButton": "ส่ง",
    "cancelButton": "ยกเลิก",
    "requiredField": "(จำเป็นต้องใช้)",
    "selectDefaultText": "เลือก;",
    "invalidInputValue": "กรุณากรอกข้อมูลที่ถูกต้อง",
    "noFieldsConfiguredMessage": "ฟิลด์ชั้นข้อมูลไม่ได้ระบุเพื่อกำหนดการเก็บข้อมู,",
    "invalidSmallNumber": "โปรดกรอกเลขจำนวนเต็ม",
    "invalidNumber": "โปรดกรอกเลขจำนวนเต็ม",
    "invalidFloat": "โปรดกรอกตัวเลข",
    "invalidDouble": "โปรดกรอกตัวเลข",
    "requiredFields": "โปรดระปุค่าสำหรับฟิลด์ที่จำเป็นทั้งหมด",
    "selectLocation": "โปรดเลือกสถานที่สำหรับรายงานของคุณ",
    "numericRangeHintMessage": "${openStrong}แนะนำ:${closeStrong} ค่าต่ำสุด${minValue} และค่าสูงสุด${maxValue}",
    "dateRangeHintMessage": "${openStrong}แนะนำ:${closeStrong} วันต่ำสุด${minValue} และวันศูงสุด${maxValue}",
    "errorsInApplyEdits": "รายงานไม่สามารถส่งได้",
    "attachmentSelectedMsg": "เลือกไฟล์แนบ",
    "attachmentUploadStatus": "${failed} จาก ${total} ไฟล์แนบที่ไม่สามารถอัพโหลดได้",
    "geoLocationError": "ไม่พร้อมใช้ตำแหน่งปัจจุบัน",
    "geoLocationOutOfExtent": "ตำแหน่งปัจจุบันอยู่นอกขอบเขตของแผนที่ฐาน",
    "submitButtonTooltip": "บันทึก",
    "cancelButtonTooltip": "ยกเลิก",
    "geoformBackButtonTooltip": "กลับสู่ลิสต์ของรายงาน",
    "updateFeaturesConfirmationMsg": "${count} ฟีเจอร์จะถูกอัพเดท",
    "attachmentHeaderText": "แนบ"
  },
  "mapViewer": {
    "zoomInToolTip": "ขยายภาพ",
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
    "ascendingFlagTitle": "เรียงตามน้อยไปหามาก",
    "descendingFlagTitle": "เรียงจากมากไปหาน้อย",
    "filterLabel": "ตัวกรอง",
    "valueRadioButtonLabel": "มูลค่า",
    "uniqueRadioButtonLabel": "ลักษณะเฉพาะ",
    "selectLayerToBegin": "เลือกประเภทเพื่อเริ่มงาน",
    "layerFeatureCount": "ก้_${selectedFeatureCount} selected / ${featureCount} records__________________ษฺ"
  },
  "timeSlider": {
    "timeSliderLabel": "ช่วงเวลา",
    "timeSliderInEditModeAlert": "เครื่องมือไทม์สไลเดอร์ไม่ทำงานขณะแก้ไข"
  },
  "comment": {
    "commentsFormSubmitButton": "บันทึก",
    "commentsFormCancelButton": "ยกเลิก",
    "errorInSubmittingComment": "ไม่ถูกบันทึกการแก้ไข",
    "emptyCommentMessage": "ต้องกรอกค่าข้อมูล",
    "placeHolderText": "",
    "noCommentsAvailableText": "ไม่มีเรคคอร์ทื่ใช้งานได้",
    "remainingTextCount": "${0} ตัวอักษร ที่เหลือ",
    "showNoText": "ไม่",
    "selectAttachments": "ก้_Attachments____ษฺ",
    "selectFileText": "ก้_Browse___ษฺ",
    "attachmentSelectedMsg": "ก้_attachment(s) selected________ษฺ",
    "attachmentHeaderText": "ก้_Attachments____ษฺ",
    "addRecordText": "ก้_Add Record____ษฺ"
  },
  "main": {
    "noGroup": "ยังไม่กำหนดกลุ่ม"
  },
  "search": {
    "searchIconTooltip": "ค้นหาชั้นข้อมูล",
    "noResultFoundText": "ไม่พบผลลัพธ์",
    "searchInEditModeAlert": "ไม่สามารถค้นหาในขณะที่แก้ไข"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "รีเฟรช",
    "confirmManualRefreshText": "ก้_All selections and unsaved changes will be discarded_________________ษฺ"
  },
  "help": {
    "helpIconTooltip": "ช่วยเหลือ"
  },
  "filter": {
    "noFeatureFoundText": "ไม่พบฟีเจอร์สำหรับค่านี้",
    "distinctQueryFailed": "ก้_No distinct values found for the field_____________ษฺ.",
    "andText": "และ",
    "filterInEditModeAlert": "ก้_Filters unavailable while editing___________ษฺ.",
    "dropdownSelectOption": "เลือก",
    "filterInShowSelectedEditModeAlert": "ก้_Filters unavailable in 'Show Selected' mode______________ษฺ."
  },
  "detailsPanel": {
    "editContentText": "แก้ไขเรคคอร์ท"
  },
  "signOutPage": {
    "signOutMessage": "คุณได้ลงชื่อออกเรียบร้อยแล้ว",
    "reSignInMessage": "กดที่นี่ เพื่อลงชื่อเข้าใช้"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "ก้_Selection Options______ษฺ",
    "showAllOptionText": "ก้_Show All___ษฺ",
    "showSelectedOptionText": "ก้_Show Selected_____ษฺ"
  }
});