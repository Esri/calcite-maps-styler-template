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
            error: "無法建立地圖"
        },
        tooltips: {
            search: "查詢",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "目前位置",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "提交修正",  // Command button to submit a correction to the app's host
            collect: "篩選/編輯",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "顯示圖例",  //Display the legend
            filter: "篩選地圖圖層",  // Explains purpose of type-in box affiliated with template picker
            basemap: "切換底圖",  // Command button to open a dialog box for switching basemaps
            share: "分享",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "透過電子郵件分享",  // Command button to share the current map extents via email
            shareViaFacebook: "透過 Facebook 分享",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "透過 Twitter 分享",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "列印地圖",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "檢視列印的地圖",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "橫向頁面方向",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "縱向頁面方向",  // Command button in the print map dialog box to select the portrait page orientation
            help: "說明"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "電子郵件",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "標題",  // Shown as title hint in print specification box if a title hint is not configured
            author: "作者"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "查詢:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "繪圖",  // Appears before a set of tools for drawing on the map
            mapLayers: "地圖圖層:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "查詢圖層欄位:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "該網站沒有取得目前位置的權限",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "瀏覽器無法取得目前位置",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "瀏覽器無法及時取得目前位置",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "尚未設定任何查詢圖層",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "在地圖中未找到此查詢圖層",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "無法找到地圖圖層的欄位。<br><br>請確認此圖層存在於地圖內容的根目錄。巢狀服務(例如 ArcGIS for Server 動態地圖服務)必須新增到地圖(一次新增到一個圖層)(包括圖層索引編號)，以做為“查詢圖層”。並排服務不能用作“查詢圖層”。",
            searchFieldMissing: "在地圖查詢圖層中未找到此欄位",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "在地圖查詢圖層中未找到這些欄位",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "此欄位不存在於任何地圖圖層中",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "您的內容已提交。謝謝。",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "無法存取應用程式的設定",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "無法啟動應用程式"  // Appears for any failure to build the user interface
        }
    })
);
