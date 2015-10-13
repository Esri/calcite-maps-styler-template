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
      error: "Không thể tạo bản đồ"
    },
    legend:{
      title: "Chú giải"
    },
    share: {
      title: "Chia sẻ"
    },
    about: {
      title: "Giới thiệu",
      error: "Theo mặc định, mô tả bản đồ web hoặc đoạn trích sẽ được sử dụng. Cấu 
hình ứng dụng để thêm một đoạn trích tùy chọn cho bảng điều khiển."
    },
    time: {
        enableTimeMessage: "Đ_The specified web map does not contain any time enabled layers. View the ${link} help topic for details. To use the template without displaying time use the configuration panel to disable the time option______________________________________________________________ớ.",
        enableTimeMessageLink: "Đ_http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727____________________________________ớ",
        datePattern: "d MMMM, yyyy",
        hourTimePattern: "h a",
        millisecondTimePattern: "h:mm:ss a",
        minuteTimePattern: "h:mm a",
        secondTimePattern: "h:mm:ss a",
        timeRange: "${startTime} đến ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Không có lớp đối tượng nào có chức năng kích hoạt thời gian, trong chế 
độ chụp nhanh, trên bản đồ web. Cấu hình ứng dụng để sử dụng một bản đồ 
web khác hoặc tắt tùy chọn biểu đồ."
    }
  })
);