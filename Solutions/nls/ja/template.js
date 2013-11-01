/*
 | ArcGIS Solutions
 | Version 10.2
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
        tooltips: {
            search: "検索",
            locate: "現在の位置",
            markup: "補正の送信",
            basemap: "ベースマップの切り替え",
            share: "共有",
            shareViaEmail: "電子メールで共有",
            shareViaFacebook: "Facebook で共有",
            shareViaTwitter: "Twitter で共有",
            print: "マップの印刷",
            fetchPrint: "印刷されたマップの表示",
            landscape: "横向きページ",
            portrait: "縦向きページ",
            help: "ヘルプ"
        },
        labels: {
            email: "電子メール",
            Facebook: "Facebook",
            Twitter: "Twitter"
        },
        prompts: {
            search: "検索:",
            markup: "描画",
            mapLayers: "マップ レイヤ:",
            layerFields: "検索レイヤ フィールド:"
        },
        messages: {
            geolocationDenied: "このサイトには、現在の位置を取得する権限がありません。",
            geolocationUnavailable: "ブラウザが現在の位置を取得できませんでした",
            geolocationTimeout: "ブラウザが現在の位置を適切な時間内に取得できませんでした",
            searchLayerMissing: "この検索レイヤは、マップ内に見つかりませんでした。",
            searchFieldMissing: "このフィールドは、マップ検索レイヤ内に見つかりませんでした。"
        }
    })
);
