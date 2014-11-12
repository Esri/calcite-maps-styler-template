/*global define */
/*
 | Copyright 2012 Esri
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
            error: "á»‡_Unable to create map_á»"
        },
        tooltips: {
            search: "Tìm",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Vị trí hiện tại",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Đệ trình hiệu chỉnh",  // Command button to submit a correction to the app's host
            collect: "Lọc/Sửa",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Hiển thị chú giải",  //Display the legend
            filter: "Lọc lớp bản đồ",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Chuyển bản đồ nền",  // Command button to open a dialog box for switching basemaps
            share: "Chia sẻ",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Chia sẻ qua email",  // Command button to share the current map extents via email
            shareViaFacebook: "Chia sẻ qua Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Chia sẻ qua Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "In bản đồ",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Xem bản đồ đã in",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Hướng trang ngang",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Hướng trang dọc",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Trợ giúp"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "email",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "tiêu đề",  // Shown as title hint in print specification box if a title hint is not configured
            author: "tác giả"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Tìm:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Vẽ",  // Appears before a set of tools for drawing on the map
            mapLayers: "Lớp bản đồ:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Tìm trường lớp:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Trang web này không được phép nhận vị trí hiện tại",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Trình duyệt này không thể nhận vị trí hiện tại",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Trình duyệt này không thể nhận vị trí hiện tại kịp thời",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "á»‡_No find layer has been configured_á»",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Không tìm thấy lớp cần tìm trong bản đồ",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Không thể tìm thấy các trường cho lớp bản đồ.<br><br>Xác nhận rằng lớp này tồn tại ở thư mục gốc của Nội dung bản đồ. Dịch vụ lồng nhau, chẳng hạn như dịch vụ bản đồ năng động ArcGIS cho Máy chủ phải được thêm vào một lớp bản đồ tại một thời điểm (bao gồm cả số chỉ số lớp) được sử dụng để Tìm Lớp. Không thể sử dụng dịch vụ lát để Tìm Lớp.",
            searchFieldMissing: "Không tìm thấy trường này trong lớp bản đồ cần tìm",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Không tìm thấy trường nào trong các trường này trong lớp bản đồ cần tìm",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Trường này không tồn tại trong bất kỳ lớp bản đồ nào",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Nội dung của bạn đã được đệ trình. Xin cảm ơn.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Không thể truy cập cấu hình ứng dụng",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Không thể khởi chạy ứng dụng"  // Appears for any failure to build the user interface
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nl": 1,
    "nb": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sv": 1,
    "tr": 1,
    "th": 1,
    "vi": 1,
    "zh-cn": 1
});
