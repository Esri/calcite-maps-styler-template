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
            error: "无法创建地图" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "未配置任何群组" // Appears when no group is configured
        },
        webMapList: {
            owner: "所有者", // Appears in web-map list description panel when it is set to true
            created: "创建日期", // Appears in web-map list description panel when it is set to true
            modified: "修改日期", // Appears in web-map list description panel when it is set to true
            description: "描述", // Appears in web-map list description panel when it is set to true
            snippet: "摘要", // Appears in web-map list description panel when it is set to true
            licenseInfo: "访问和使用限制", // Appears in web-map list description panel when it is set to true
            accessInformation: "制作者名单", // Appears in web-map list description panel when it is set to true
            tags: "标签", // Appears in web-map list description panel when it is set to true
            numViews: "查看次数", // Appears in web-map list description panel when it is set to true
            avgRating: "评级", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "已配置的群组无效，或者没有与该群组共享的任何项目", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "地图信息" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "登出", // Command button to sign-out from the application
            pleaseSignInText: "请登录", // Appears when user needs to sign-in into the application
            showSelectedOption: "显示所选", // Command button to show selected records in data-viewer
            showAllOption: "显示全部", // Command button to show all the records in data-viewer
            clearSelectionOption: "清除所选内容", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "缩放至所选项", // Command button to zoom map to selected records
            gridViewOption: "列表视图", // Command button to display list view
            mapViewOption: "地图视图", // Command button to display map view
            gridMapViewOption: "分割视图", // Command button to display split view
            settingsBtnToolTip: "选择选项", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "显示选项", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "搜索此图层", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "刷新", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "将放弃所有选择和未保存的更改", // Appears when user wants to do manual refresh
            signInOption: "登录" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "无任何报告可用", // Appears when no issues are available in current extent
            photoAttachmentHeader: "附件", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "请输入一个整数 ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "请输入一个整数", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "请输入一个数字", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "请输入一个数字", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "请输入一个值", // Shown when user enters invalid string value
            invalidDate: "请输入一个有效日期", // Shown when user enters invalid date value
            invalidNumericRange: "请输入一个介于 ${minValue} 和 ${maxValue} 之间的值", // Shown when user enters value which is out of range
            moreInfolink: "链接", // Shown when value in field contains only URL.
            commentsText: "评论", // Appears when comments are available for display in details tab
            noCommentsAvailable: "没有任何评论可用", // Appears when no comments are available
            noFeatureGeometry: "无法显示要素" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "未定义任何配置" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "未找到任何结果" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "查看活动要素的更多详细信息", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "浏览地图", // Display tool-tip on command button to view map panel
            zoomInToolTip: "放大", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "缩小" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "您已成功登出", // Appears when user is successfully signed-out from application
            reSignInMessage: "单击此处以登录" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager 作为 <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a> 应用程序的配套组模板，是一款面向桌面设备和平板设备的响应型组应用程序模板，组织内用户可利用该模板查看通过 Manager 应用程序提交的问题和观测结果。", // Appears when preview page is loaded
            section2: "此应用程序可显示一张或多张地图以便用户查看问题或观测结果。用户可查找模式和聚类、查看问题详细信息、更新状态和分配职责。", // Appears when preview page is loaded
            section3: "可下载应用程序源代码以进行进一步配置。应用程序的这一附加配置可重新应用至 ArcGIS Online 可配置 web 应用程序项目或在您自己的 web 服务器上进行托管。<br />有关配置此应用程序的详细信息，请参阅 <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a> 文档。" // Appears when preview page is loaded
        }
    })
);