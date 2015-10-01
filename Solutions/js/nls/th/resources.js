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
define(
    ({
        map: {
            error: "ไม่สามารถสร้างแผนที่"
        },
        tooltips: {
            search: "ค้นหา",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "ตำแหน่งปัจจุบัน",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "ส่งการแก้ไข",  // Command button to submit a correction to the app's host
            collect: "ตัวกรอง/แก้ไข",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "แสดงคำอธิบาย",  //Display the legend
            filter: "คัดกรองชั้นข้อมูลแผนที่",  // Explains purpose of type-in box affiliated with template picker
            basemap: "เปลี่ยนแผนที่ฐาน",  // Command button to open a dialog box for switching basemaps
            share: "แชร์",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "แชร์ผ่านอีเมล์",  // Command button to share the current map extents via email
            shareViaFacebook: "แชร์ผ่านเฟสบุค",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "แชร์ผ่านทวิตเตอร์",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "พิมพ์แผนที่",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "เปิดดูแผนที่ที่พิมพ์แล้ว",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "แนวนอน",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "แสดงหน้ากระดาษในแนวตั้ง",  // Command button in the print map dialog box to select the portrait page orientation
            help: "ช่วยเหลือ"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "อีเมล์",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "เฟสบุค",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "ทวิตเตอร์",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "ชื่อเรื่อง",  // Shown as title hint in print specification box if a title hint is not configured
            author: "ผู้แต่ง"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "ค้นหา:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "วาด",  // Appears before a set of tools for drawing on the map
            mapLayers: "ชั้นข้อมูลของแผนที่:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "ค้นหาฟิลด์ของชั้นข้อมูล"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "ไม่ได้รับอนุญาตให้ค้นหาตำแหน่งปัจจุบัน",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "บราวเซอร์ไม่สามารถหาตำแหน่งปัจจุบันได้",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "บราวเซอร์ไม่สามารถหาตำแหน่งปัจจุบันได้ทันที",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "ไม่พบชั้นข้อมูลที่ถูกปรัแต่ง",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "ไม่พบชั้นข้อมูลที่ต้องการค้นหาในแผนที่",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "ไม่พบฟิลด์ที่ค้นหาบนชั้นข้อมูลแผนที่ <br><br> ตรวจสอบว่าชั้นข้อมูลนี้อยู่ที่ส่วนเนื้อหาของแผนที่หรือไม่ เซอร์วิสที่ทับซ้อนกัน เช่น ArcGIS for Server dynamic map services ต้องเพิ่มไปยังแผนที่ 1 ชั้นข้อมูล (รวมถึงชั้นข้อมูลสารบัญ) เพื่อใช้สำหรับชั้นข้อมูลที่ค้นหา สำหรับไทล์เซอร์วิสไม่สามารถใช้เป็นชั้นข้อมูลที่ค้นหาได้",
            searchFieldMissing: "ไม่พบฟิลด์ที่ต้องการค้นหาในชั้นข้อมูลของแผนที่",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "ไม่พบข้อมูลฟิลด์ใดๆ จากการค้นหาชั้นข้อมูลในแผนที่นี้",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "ฟิลด์นี้จะไม่อยู่ในที่ใด ๆ ของชั้นแผนที่",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "ข้อมูลของคุณได้ถูกส่งแล้ว ขอบคุณ",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "ไม่สามารถเข้าถึงการตั้งค่าของแอพพลิเคชั่นได้",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "ไม่สามารถเริ่มใช้แอพพลิเคชั่นได้"  // Appears for any failure to build the user interface
        }
    })
);
