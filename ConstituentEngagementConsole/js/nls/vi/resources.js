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
    "openWebmapList": "Mở bảng điều khiển",
    "closeWebmapList": "Đóng bảng điều khiển"
  },
  "geoform": {
    "enterInformation": "Chi tiết",
    "selectAttachments": "Tệp đính kèm",
    "selectFileText": "Duyệt",
    "enterLocation": "Vị trí",
    "reportItButton": "Gửi",
    "cancelButton": "Hủy",
    "requiredField": "(bắt buộc)",
    "selectDefaultText": "Chọn&hellip;",
    "invalidInputValue": "Vui lòng nhập giá trị hợp lệ.",
    "noFieldsConfiguredMessage": "Các trường không được cấu hình để chụp dữ liệu",
    "invalidSmallNumber": "Vui lòng nhập số nguyên",
    "invalidNumber": "Vui lòng nhập số nguyên",
    "invalidFloat": "Vui lòng nhập một số",
    "invalidDouble": "Vui lòng nhập một số",
    "requiredFields": "Vui lòng cung cấp giá trị cho tất cả các trường yêu cầu",
    "selectLocation": "Vui lòng chọn vị trí cho báo cáo của bạn",
    "numericRangeHintMessage": "${openStrong}Gợi ý:${closeStrong} Giá trị tối thiểu ${minValue} và giá trị tối đa ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Gợi ý:${closeStrong} Ngày tối thiểu ${minValue} và Ngày tối đa ${maxValue}",
    "errorsInApplyEdits": "Không thể gửi báo cáo",
    "attachmentSelectedMsg": "(các) tệp đính kèm được chọn",
    "attachmentUploadStatus": "Không thể tải lên ${failed} trên ${total} tệp đính kèm",
    "geoLocationError": "Vị trí hiện tại không khả dụng",
    "geoLocationOutOfExtent": "Vị trí hiện tại ngoài phạm vi bản đồ nền",
    "submitButtonTooltip": "Lưu",
    "cancelButtonTooltip": "Hủy",
    "geoformBackButtonTooltip": "Quay lại danh sách báo cáo",
    "updateFeaturesConfirmationMsg": "${count} đối tượng sẽ được cập nhật",
    "attachmentHeaderText": "Tệp đính kèm"
  },
  "mapViewer": {
    "zoomInToolTip": "Thu nhỏ",
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
    "ascendingFlagTitle": "Sắp xếp theo thứ tự tăng dần",
    "descendingFlagTitle": "Sắp xếp theo thứ tự giảm dần",
    "filterLabel": "Bộ lọc",
    "valueRadioButtonLabel": "Giá trị",
    "uniqueRadioButtonLabel": "Duy nhất",
    "selectLayerToBegin": "Chọn một danh mục để bắt đầu",
    "layerFeatureCount": "Đ_${selectedFeatureCount} selected / ${featureCount} records__________________ớ"
  },
  "timeSlider": {
    "timeSliderLabel": "Khoảng thời gian",
    "timeSliderInEditModeAlert": "Thanh trượt thời gian không khả dụng trong khi chỉnh sửa"
  },
  "comment": {
    "commentsFormSubmitButton": "Lưu",
    "commentsFormCancelButton": "Hủy",
    "errorInSubmittingComment": "Không thể lưu các chỉnh sửa.",
    "emptyCommentMessage": "Yêu cầu nhập giá trị",
    "placeHolderText": "",
    "noCommentsAvailableText": "Không có bản ghi nào",
    "remainingTextCount": "Còn ${0} ký tự",
    "showNoText": "Không",
    "selectAttachments": "Đ_Attachments____ớ",
    "selectFileText": "Đ_Browse___ớ",
    "attachmentSelectedMsg": "Đ_attachment(s) selected________ớ",
    "attachmentHeaderText": "Đ_Attachments____ớ",
    "addRecordText": "Đ_Add Record____ớ"
  },
  "main": {
    "noGroup": "Không có nhóm nào được cấu hình"
  },
  "search": {
    "searchIconTooltip": "Tìm kiếm lớp này",
    "noResultFoundText": "Không tìm thấy kết quả",
    "searchInEditModeAlert": "Tìm kiếm không khả dụng trong khi chỉnh sửa"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Làm mới",
    "confirmManualRefreshText": "Đ_All selections and unsaved changes will be discarded_________________ớ"
  },
  "help": {
    "helpIconTooltip": "Trợ giúp"
  },
  "filter": {
    "noFeatureFoundText": "Không tìm thấy đối tượng nào cho giá trị này.",
    "distinctQueryFailed": "Đ_No distinct values found for the field_____________ớ.",
    "andText": "và",
    "filterInEditModeAlert": "Đ_Filters unavailable while editing___________ớ.",
    "dropdownSelectOption": "Chọn",
    "filterInShowSelectedEditModeAlert": "Đ_Filters unavailable in 'Show Selected' mode______________ớ."
  },
  "detailsPanel": {
    "editContentText": "Chỉnh sửa bản ghi"
  },
  "signOutPage": {
    "signOutMessage": "Bạn đã đăng xuất thành công",
    "reSignInMessage": "Bấm vào đây để đăng nhập"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "Đ_Selection Options______ớ",
    "showAllOptionText": "Đ_Show All___ớ",
    "showSelectedOptionText": "Đ_Show Selected_____ớ"
  }
});