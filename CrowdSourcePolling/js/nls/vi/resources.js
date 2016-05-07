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
define({
    root: ({
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Không thể tạo bản đồ",
            layerLoad: "Không thể tải đầy đủ bản đồ",
            missingItemsFeatureLayer: "Vui lòng cấu hình ứng dụng để sử dụng lớp đối tượng"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Hiện menu",
            signInButton: "Đăng nhập",
            signInButtonTooltip: "Đăng nhập",
            signOutButton: "Đăng xuất",
            signOutButtonTooltip: "Đăng xuất",
            helpButtonLabel: "Trợ giúp",
            helpButtonTooltip: "Tìm hiểu thêm",
            gotoListViewLabel: "Chế độ xem dạng Danh sách",
            gotoListViewTooltip: "Đến chế độ xem dạng danh sách", // Go to List view tooltip text
            gotoMapViewLabel: "Chế độ xem Bản đồ",
            gotoMapViewTooltip: "Đến chế độ xem bản đồ" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Đóng"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Đăng nhập bằng Facebook",
            signIntoGooglePlusTooltip: "Đăng nhập bằng Google+",
            signIntoTwitterTooltip: "Đăng nhập bằng Twitter",
            signOutOfFacebookTooltip: "Đăng xuất khỏi Facebook",
            signOutOfGooglePlusTooltip: "Đăng xuất khỏi Google+",
            signOutOfTwitterTooltip: "Đăng xuất khỏi Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (tùy chọn)",
            requiredFormItemFlag: " (bắt buộc)",
            unsettableRequiredField: "Một trường bắt buộc không được khởi tạo và cũng không có trong mẫu",
            countOfRemainingCharactersTooltip: "Ký tự còn lại",
            cancelButtonLabel: "Hủy",
            submitButtonLabel: "Đệ trình"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Bình chọn cho mục này",
            commentButtonTooltip: "Thêm một bình luận",
            gotoMapViewTooltip: "Đến chế độ xem bản đồ",
            galleryButtonTooltip: "Xem tệp đính kèm",
            commentsListHeading: "Bình luận",
            noCommentsPlaceholder: "Không có bình luận"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Lọc danh sách theo bản đồ",
            linkToMapViewOptionTooltip: "Liệt kê các đối tượng hiện ra trên bản đồ hiện tại",
            likesForThisItemTooltip: "Bình chọn cho mục này"
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
