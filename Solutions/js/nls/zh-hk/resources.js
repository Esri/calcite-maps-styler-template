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
  "map": {
    "error": "無法建立地圖"
  },
  "tooltips": {
    "search": "查詢",
    "locate": "目前位置",
    "markup": "提交修正",
    "collect": "篩選/編輯",
    "dijitLegend": "顯示圖例",
    "filter": "篩選地圖圖層",
    "basemap": "切換底圖",
    "share": "分享",
    "shareViaEmail": "透過電子郵件分享",
    "shareViaFacebook": "透過 Facebook 分享",
    "shareViaTwitter": "透過 Twitter 分享",
    "print": "列印地圖",
    "fetchPrint": "檢視列印的地圖",
    "landscape": "橫向頁面方向",
    "portrait": "縱向頁面方向",
    "help": "說明"
  },
  "labels": {
    "email": "電子郵件",
    "Facebook": "Facebook",
    "Twitter": "Twitter",
    "title": "標題",
    "author": "作者"
  },
  "prompts": {
    "search": "查詢:",
    "markup": "繪圖",
    "mapLayers": "地圖圖層:",
    "layerFields": "查詢圖層欄位:"
  },
  "messages": {
    "geolocationDenied": "該網站沒有取得目前位置的權限",
    "geolocationUnavailable": "瀏覽器無法取得目前位置",
    "geolocationTimeout": "瀏覽器無法及時取得目前位置",
    "noSearchLayerConfigured": "尚未設定任何查詢圖層",
    "searchLayerMissing": "在地圖中未找到此查詢圖層",
    "searchLayerNotSearchable": "無法找到地圖圖層的欄位。<br><br>請確認此圖層存在於地圖內容的根目錄。巢狀服務(例如 ArcGIS for Server 動態地圖服務)必須新增到地圖(一次新增到一個圖層)(包括圖層索引編號)，以做為“查詢圖層”。並排服務不能用作“查詢圖層”。",
    "searchFieldMissing": "在地圖查詢圖層中未找到此欄位",
    "allSearchFieldsMissing": "在地圖查詢圖層中未找到這些欄位",
    "fieldNotFound": "此欄位不存在於任何地圖圖層中",
    "yourContentSubmitted": "您的內容已提交。謝謝。",
    "noConfiguration": "無法存取應用程式的設定",
    "unableToLaunchApp": "無法啟動應用程式"
  }
});