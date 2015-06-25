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
      error: "マップを作成できません"
    },
    legend:{
      title: "凡例"
    },
    share: {
      title: "共有"
    },
    about: {
      title: "情報",
      error: "デフォルトで Web マップの説明またはスニペットが使用されます。情報パネル用にカスタム スニペットを追加するようにアプリを構成します。"
    },
    time: {
        enableTimeMessage: "指定した Web マップに時間対応レイヤーが含まれていません。詳細については、「<a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>時間設定の構成</a>」ヘルプ トピックをご参照ください。時間を表示せずにこのテンプレートを使用するには、構成パネルを使用して時間オプションを無効にします。",
        datePattern: "yyyy\'年\'M\'月\'d\'日\'",
        hourTimePattern: "h a",
        millisecondTimePattern: "h:mm:ss a",
        minuteTimePattern: "h:mm a",
        secondTimePattern: "h:mm:ss a",
        timeRange: "${startTime} ～ ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "スナップショット モードの時間対応フィーチャ レイヤーを Web マップで使用できません。別の Web マップを使用するようにアプリを構成するか、ヒストグラム オプションを無効にします。"
    }
  })
);