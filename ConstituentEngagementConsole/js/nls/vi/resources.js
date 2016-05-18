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
    "error": "Không thể tạo bản đồ"
  },
  "webMapList": {
    "owner": "Chủ sở hữu",
    "created": "Ngày tạo",
    "modified": "Ngày sửa đổi",
    "description": "Mô tả",
    "snippet": "Tóm tắt",
    "licenseInfo": "Những ràng buộc về Truy cập và Sử dụng",
    "accessInformation": "Service Credits",
    "tags": "Từ khóa",
    "numViews": "Số lần xem",
    "avgRating": "Xếp loại",
    "noWebMapInGroup": "Nhóm được cấu hình không hợp lệ hoặc vẫn chưa có mục nào được chia sẻ với nhóm này",
    "infoBtnToolTip": "Thông tin bản đồ",
    "openWebmapList": "Đ_Open panel____ớ",
    "closeWebmapList": "Đ_Close panel____ớ"
  },
  "geoform": {
    "enterInformation": "Đ_Details___ớ",
    "selectAttachments": "Đ_Attachments____ớ",
    "selectFileText": "Đ_Browse___ớ",
    "enterLocation": "Đ_Location___ớ",
    "reportItButton": "Đ_Submit___ớ",
    "cancelButton": "Đ_Cancel___ớ",
    "requiredField": "Đ_(required)____ớ",
    "selectDefaultText": "Đ_Select&hellip;_____ớ",
    "invalidInputValue": "Đ_Please enter valid value_________ớ.",
    "noFieldsConfiguredMessage": "Đ_Layer fields are not configured to capture data_______________ớ",
    "invalidSmallNumber": "Đ_Please enter an integer________ớ",
    "invalidNumber": "Vui lòng nhập số nguyên",
    "invalidFloat": "Vui lòng nhập một số",
    "invalidDouble": "Vui lòng nhập một số",
    "requiredFields": "Đ_Please provide values for all required fields_______________ớ",
    "selectLocation": "Đ_Please select the location for your report______________ớ",
    "numericRangeHintMessage": "Đ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ớ",
    "dateRangeHintMessage": "Đ_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ớ",
    "errorsInApplyEdits": "Đ_Report could not be submitted__________ớ",
    "attachmentSelectedMsg": "Đ_attachment(s) selected________ớ",
    "attachmentUploadStatus": "Đ_${failed} of ${total} attachment(s) failed to upload_________________ớ",
    "geoLocationError": "Đ_Current location not available__________ớ",
    "geoLocationOutOfExtent": "Đ_Current location is out of basemap extent_____________ớ",
    "submitButtonTooltip": "Đ_Save__ớ",
    "cancelButtonTooltip": "Đ_Cancel___ớ",
    "geoformBackButtonTooltip": "Đ_Return to the report list_________ớ",
    "updateFeaturesConfirmationMsg": "Đ_${count} features will be updated___________ớ",
    "attachmentHeaderText": "Đ_Attachments____ớ"
  },
  "mapViewer": {
    "zoomInToolTip": "Đ_Zoom in___ớ",
    "zoomOutToolTip": "Phóng to"
  },
  "applicationHeader": {
    "signInOption": "Đăng nhập",
    "signOutOption": "Đăng xuất",
    "pleaseSignInText": "Vui lòng đăng nhập"
  },
  "dataviewer": {
    "noIssuesReported": "Không có báo cáo",
    "noFeatureGeometry": "Không thể hiển thị đối tượng",
    "ascendingFlagTitle": "Đ_Sort in ascending order________ớ",
    "descendingFlagTitle": "Đ_Sort in descending order________ớ",
    "filterLabel": "Đ_Filter___ớ",
    "valueRadioButtonLabel": "Đ_Value___ớ",
    "uniqueRadioButtonLabel": "Đ_Unique___ớ",
    "selectLayerToBegin": "Đ_Select a category to get started___________ớ",
    "layerFeatureCount": "Đ_${featureCount} records________ớ"
  },
  "timeSlider": {
    "timeSliderLabel": "Đ_Time range____ớ",
    "timeSliderInEditModeAlert": "Đ_Time slider unavailable while editing____________ớ"
  },
  "comment": {
    "commentsFormSubmitButton": "Đ_Save__ớ",
    "commentsFormCancelButton": "Đ_Cancel___ớ",
    "errorInSubmittingComment": "Đ_Edits could not be saved_________ớ.",
    "emptyCommentMessage": "Đ_Value required_____ớ",
    "placeHolderText": "",
    "noCommentsAvailableText": "Đ_No records available_______ớ",
    "remainingTextCount": "Đ_${0} character(s) remain________ớ",
    "showNoText": "Đ_No__ớ"
  },
  "main": {
    "noGroup": "Không có nhóm nào được cấu hình"
  },
  "search": {
    "searchIconTooltip": "Đ_Search this layer______ớ",
    "noResultFoundText": "Đ_No results found______ớ",
    "searchInEditModeAlert": "Đ_Search unavailable while editing___________ớ"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Đ_Refresh___ớ",
    "confirmManualRefeshText": "Tất cả các lựa chọn và các thay đổi chưa lưu sẽ bị hủy"
  },
  "help": {
    "helpIconTooltip": "Đ_Help__ớ"
  },
  "filter": {
    "noFeatureFoundText": "Đ_No feature found for this value___________ớ.",
    "distinctQueryFalied": "Đ_No distinct values found for the field_____________ớ.",
    "andText": "Đ_and__ớ",
    "filterInEditModeAlert": "Đ_Filters unavailable while editing___________ớ",
    "dropdownSelectOption": "Đ_Select___ớ"
  },
  "detailsPanel": {
    "editContentText": "Đ_Edit record____ớ"
  },
  "signOutPage": {
    "signOutMessage": "Bạn đã đăng xuất thành công",
    "reSignInMessage": "Bấm vào đây để đăng nhập"
  }
});