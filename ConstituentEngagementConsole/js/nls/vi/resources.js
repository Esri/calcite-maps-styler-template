/*global define */
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
            error: "Không thể tạo bản đồ" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Không có nhóm nào được cấu hình" // Appears when no group is configured
        },
        webMapList: {
            owner: "Chủ sở hữu", // Appears in web-map list description panel when it is set to true
            created: "Ngày tạo", // Appears in web-map list description panel when it is set to true
            modified: "Ngày sửa đổi", // Appears in web-map list description panel when it is set to true
            description: "Mô tả", // Appears in web-map list description panel when it is set to true
            snippet: "Tóm tắt", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Những ràng buộc về Truy cập và Sử dụng", // Appears in web-map list description panel when it is set to true
            accessInformation: "Service Credits", // Appears in web-map list description panel when it is set to true
            tags: "Từ khóa", // Appears in web-map list description panel when it is set to true
            numViews: "Số lần xem", // Appears in web-map list description panel when it is set to true
            avgRating: "Xếp loại", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Nhóm được cấu hình không hợp lệ hoặc vẫn chưa có mục nào được chia sẻ với nhóm này", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Thông tin bản đồ" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Đăng xuất", // Command button to sign-out from the application
            pleaseSignInText: "Vui lòng đăng nhập", // Appears when user needs to sign-in into the application
            showSelectedOption: "Hiện Mục được Chọn", // Command button to show selected records in data-viewer
            showAllOption: "Hiển thị tất cả", // Command button to show all the records in data-viewer
            clearSelectionOption: "Xóa lựa chọn", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Thu phóng đến Mục được Chọn", // Command button to zoom map to selected records
            gridViewOption: "Chế độ xem dạng Danh sách", // Command button to display list view
            mapViewOption: "Chế độ xem Bản đồ", // Command button to display map view
            gridMapViewOption: "Chế độ xem dưới dạng Phân chia", // Command button to display split view
            settingsBtnToolTip: "Các tùy chọn lựa chọn", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Các tùy chọn hiển thị", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Tìm kiếm lớp này", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Làm mới", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Tất cả các lựa chọn và các thay đổi chưa lưu sẽ bị hủy", // Appears when user wants to do manual refresh
            signInOption: "Đăng nhập" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Không có báo cáo", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Tệp đính kèm", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Vui lòng nhập số nguyên ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Vui lòng nhập số nguyên", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Vui lòng nhập một số", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Vui lòng nhập một số", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Vui lòng nhập một giá trị", // Shown when user enters invalid string value
            invalidDate: "Vui lòng nhập một ngày hợp lệ", // Shown when user enters invalid date value
            invalidNumericRange: "Vui lòng nhập một giá trị trong khoảng từ ${minValue} đến ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Liên kết", // Shown when value in field contains only URL.
            commentsText: "Bình luận", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Không có bình luận", // Appears when no comments are available
            noFeatureGeometry: "Không thể hiển thị đối tượng" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Không có cấu hình được xác định" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Không tìm thấy kết quả" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Xem thêm chi tiết cho đối tượng hoạt động", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Xem bản đồ", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Thu nhỏ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Phóng to" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Bạn đã đăng xuất thành công", // Appears when user is successfully signed-out from application
            reSignInMessage: "Bấm vào đây để đăng nhập" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);