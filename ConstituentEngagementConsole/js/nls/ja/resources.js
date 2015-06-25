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
            error: "マップを作成できません" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "グループが構成されていません" // Appears when no group is configured
        },
        webMapList: {
            owner: "所有者", // Appears in web-map list description panel when it is set to true
            created: "作成日", // Appears in web-map list description panel when it is set to true
            modified: "更新日", // Appears in web-map list description panel when it is set to true
            description: "説明", // Appears in web-map list description panel when it is set to true
            snippet: "サマリー", // Appears in web-map list description panel when it is set to true
            licenseInfo: "アクセスと使用の制限", // Appears in web-map list description panel when it is set to true
            accessInformation: "著作権", // Appears in web-map list description panel when it is set to true
            tags: "タグ", // Appears in web-map list description panel when it is set to true
            numViews: "ビュー数", // Appears in web-map list description panel when it is set to true
            avgRating: "評価", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "構成済みのグループが無効であるか、アイテムがこのグループと共有されていません", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "マップ情報" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "サイン アウト", // Command button to sign-out from the application
            pleaseSignInText: "サイン インしてください", // Appears when user needs to sign-in into the application
            showSelectedOption: "選択レイヤーの表示", // Command button to show selected records in data-viewer
            showAllOption: "すべて表示", // Command button to show all the records in data-viewer
            clearSelectionOption: "選択の解除", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "選択セットにズーム", // Command button to zoom map to selected records
            gridViewOption: "リスト ビュー", // Command button to display list view
            mapViewOption: "マップ ビュー", // Command button to display map view
            gridMapViewOption: "ビューの分割", // Command button to display split view
            settingsBtnToolTip: "選択オプション", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "表示オプション", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "このレイヤーを検索", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "更新", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "すべての選択セットおよび保存されていない変更は破棄されます", // Appears when user wants to do manual refresh
            signInOption: "サイン イン" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "レポートがありません", // Appears when no issues are available in current extent
            photoAttachmentHeader: "添付ファイル", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "整数を入力してください ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "整数を入力してください", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "数字を入力してください", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "数字を入力してください", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "値を入力してください。", // Shown when user enters invalid string value
            invalidDate: "有効な日付を入力してください", // Shown when user enters invalid date value
            invalidNumericRange: "${minValue} ～ ${maxValue} の値を入力してください", // Shown when user enters value which is out of range
            moreInfolink: "リンク", // Shown when value in field contains only URL.
            commentsText: "コメント", // Appears when comments are available for display in details tab
            noCommentsAvailable: "コメントがありません", // Appears when no comments are available
            noFeatureGeometry: "フィーチャを表示できません" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "構成が定義されていません" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "結果が見つかりません" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "アクティブなフィーチャの詳細を表示", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "マップの表示", // Display tool-tip on command button to view map panel
            zoomInToolTip: "拡大", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "縮小" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "正常にサイン アウトしました", // Appears when user is successfully signed-out from application
            reSignInMessage: "ここをクリックしてサイン インします" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager は、<a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a> のコンパニオン グループ テンプレートであり、レスポンシブ グループ アプリケーション テンプレート (デスクトップおよびタブレット デバイス向け) です。組織内のユーザーは Manager アプリを使って送信された問題や観測を確認できます。", // Appears when preview page is loaded
            section2: "アプリでは、ユーザーが問題や観測データを確認するためのマップが 1 つ以上表示されます。ユーザーは、パターンとクラスターの検索、問題詳細の確認、ステータスの更新、役割の割り当てを行うことができます。", // Appears when preview page is loaded
            section3: "アプリケーションのソース コードをダウンロードして詳細に構成できます。アプリケーションのこの追加構成は、ArcGIS Online の構成可能な Web アプリケーション アイテムに適用し直したり、独自の Web サーバー上でホストしたりすることができます。<br />このアプリの構成の詳細については、<a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a> のドキュメントをご参照ください。" // Appears when preview page is loaded
        }
    })
);