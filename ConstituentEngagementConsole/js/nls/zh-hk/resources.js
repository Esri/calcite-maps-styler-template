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
            error: "無法建立地圖" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "未配置任何群組" // Appears when no group is configured
        },
        webMapList: {
            owner: "擁有者", // Appears in web-map list description panel when it is set to true
            created: "建立日期", // Appears in web-map list description panel when it is set to true
            modified: "修改日期", // Appears in web-map list description panel when it is set to true
            description: "描述", // Appears in web-map list description panel when it is set to true
            snippet: "摘要(S)", // Appears in web-map list description panel when it is set to true
            licenseInfo: "存取和使用限制", // Appears in web-map list description panel when it is set to true
            accessInformation: "點數", // Appears in web-map list description panel when it is set to true
            tags: "標記", // Appears in web-map list description panel when it is set to true
            numViews: "視圖數量", // Appears in web-map list description panel when it is set to true
            avgRating: "評級次數", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "已配置的群組無效，或者沒有與該群組共用的任何項目", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "地圖資訊" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "登出", // Command button to sign-out from the application
            pleaseSignInText: "請登入", // Appears when user needs to sign-in into the application
            showSelectedOption: "顯示所選", // Command button to show selected records in data-viewer
            showAllOption: "顯示全部(S)", // Command button to show all the records in data-viewer
            clearSelectionOption: "清除所選內容(C)", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "縮放至所選項", // Command button to zoom map to selected records
            gridViewOption: "清單視圖(L)", // Command button to display list view
            mapViewOption: "地圖視圖", // Command button to display map view
            gridMapViewOption: "分割視圖", // Command button to display split view
            settingsBtnToolTip: "選擇選項", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "顯示選項", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "搜尋此圖層", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "重新整理(R)", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "將放棄所有選擇和未儲存的更改", // Appears when user wants to do manual refresh
            signInOption: "登入" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "無任何報告可用", // Appears when no issues are available in current extent
            photoAttachmentHeader: "附件(A)", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "請輸入一個整數 ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "請輸入一個整數", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "請輸入一個數字", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "請輸入一個數字", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "請輸入一個值", // Shown when user enters invalid string value
            invalidDate: "請輸入一個有效日期", // Shown when user enters invalid date value
            invalidNumericRange: "請輸入一個介於 ${minValue} 和 ${maxValue} 之間的值", // Shown when user enters value which is out of range
            moreInfolink: "連結", // Shown when value in field contains only URL.
            commentsText: "評論", // Appears when comments are available for display in details tab
            noCommentsAvailable: "沒有可提供的評論", // Appears when no comments are available
            noFeatureGeometry: "無法顯示圖徵" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "未定義任何配置" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "未找到任何結果" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "檢視活動圖徵的更多詳細資訊", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "瀏覽地圖", // Display tool-tip on command button to view map panel
            zoomInToolTip: "放大", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "縮小" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "您已成功登出", // Appears when user is successfully signed-out from application
            reSignInMessage: "按一下此處以登入" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "群眾外包管理程式作為<a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>群眾外包報告程式</a>的配套群組範本，是一款面向桌面設備和平板設備的回應型群組應用程式範本，組織內使用者可利用該範本檢視透過管理器應用程式提交的問題和觀測結果。", // Appears when preview page is loaded
            section2: "此應用程式可為使用者顯示一張或多張地圖以檢視問題或觀測結果。使用者可尋找模式和叢集、檢視問題詳細資訊、更新狀態和分配職責。", // Appears when preview page is loaded
            section3: "可下載應用程式原始程式碼以進行進一步配置。應用程式的此附加配置可重新套用至 ArcGIS Online 的可配置 web 應用程式項目，也可在您自己的 web 伺服器上進行託管。<br />有關配置此應用程式的詳細資訊，請參閱<a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>群眾外包管理程式</a>說明文件。" // Appears when preview page is loaded
        }
    })
);