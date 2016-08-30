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
    "layerFeatureCount": "${นับข้อมูลที่เลือก} เลือก / ${นับข้อมูล} เรคคอร์ด"
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
    "selectAttachments": "แนบ",
    "selectFileText": "ค้นหา",
    "attachmentSelectedMsg": "เลือกไฟล์แนบ",
    "attachmentHeaderText": "แนบ",
    "addRecordText": "เพิ่มเรคคอร์ด"
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
    "confirmManualRefreshText": "การเลือกทั้งหมดและสิ่งที่ไม่ได้บันทึกการเปลี่ยนแปลงจะถูกละทิ้ง"
  },
  "help": {
    "helpIconTooltip": "ช่วยเหลือ"
  },
  "filter": {
    "noFeatureFoundText": "ไม่พบฟีเจอร์สำหรับค่านี้",
    "distinctQueryFailed": "ไม่พบค่าที่แตกต่างกันในฟิลด์นี้",
    "andText": "และ",
    "filterInEditModeAlert": "ฟิลเตอร์ไม่ทำงานเมื่อมีการแก้ไข",
    "dropdownSelectOption": "เลือก",
    "filterInShowSelectedEditModeAlert": "ฟิลเตอร์ไม่ทำงาน เมื่ออยู่ในโหมดแสดงการเลือก"
  },
  "detailsPanel": {
    "editContentText": "แก้ไขเรคคอร์ท"
  },
  "signOutPage": {
    "signOutMessage": "คุณได้ลงชื่อออกเรียบร้อยแล้ว",
    "reSignInMessage": "กดที่นี่ เพื่อลงชื่อเข้าใช้"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "เลือกการตั้งค่า",
    "showAllOptionText": "แสดงทั้งหมด",
    "showSelectedOptionText": "แสดงที่เลือก"
  }
});