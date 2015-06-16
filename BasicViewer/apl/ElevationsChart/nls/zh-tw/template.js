define({
  root: ({
  display: {
    elevationProfileTitle: "高程剖面圖",
    showMe: "顯示",
    selectLine: "在地圖中選擇圖徵。",
    popupRequirement: "注意：該圖徵必須位於圖徵圖層中或是已啟用快顯之地圖服務的一部分。",
    digitizeDistanceMeasureTool: "使用<b>測量</b>按鈕。",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "將滑鼠懸停在 ",
    touchIPad: "觸碰 iPad",
    locationOnMap: "用於顯示海拔並註明其在地圖上對應位置的高程剖面圖圖表。"
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "海拔: {0} 公尺",
  chart: {
    title: "高程剖面圖",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "海拔 (以 {0} 為單位)",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "距離(以 {0} 為單位)",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "最小值:{min}   最大值:{max}   起始值:{start}   終止值:{end}   變化值:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: '無效的設定錯誤',
      message: '無效的設定。'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: '缺少建構函式參數錯誤',
      message: '缺少建構函式參數。'
    },
    MissingInitParameter: {
      code: 17056603,
      name: '缺少初始化參數錯誤',
      message: '缺少初始參數。'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: '操作不受支援錯誤',
      message: '此版本的 SOE 不支援此操作。'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: '多元件幾何不受支援錯誤',
      message: "注意: 目前不支援多元件線。"
    }
  }
}),
"ar": 1,
"de": 1,
"es": 1,
"fr": 1,
"it": 1,
"ja": 1,
"ko": 1,
"nl": 1,
"no": 1,
"pl": 1,
"pt-br": 1,
"ro": 1,
"ru": 1,
"sv": 1,
"zh-cn": 1
});
