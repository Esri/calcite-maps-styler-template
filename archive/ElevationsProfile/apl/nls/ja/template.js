define(
({
  display: {
    elevationProfileTitle: "標高グラフ",
    showMe: "表示",
    selectLine: "マップ内のフィーチャを<b>選択します</b>。",
    popupRequirement: "注意: フィーチャはポップアップが有効になっているレイヤ内にある必要があります。",
    digitizeDistanceMeasureTool: "<b>計測</b>ツールを使用します。",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "地形の断面図をマウスでポイントすると、断面図上に標高値とマップ上に位置が表示されます。"
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "標高: {0} メートル",
  chart: {
    title: "標高グラフ",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "標高 ({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "距離 ({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "最小: {min}   最大: {max}   始点: {start}   終点: {end}   標高差: {gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: '無効な構成のエラー',
      message: '構成が無効です。'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'コンストラクタ パラメータが見つからないエラー',
      message: 'コンストラクタ パラメータが見つかりません。'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'init パラメータが見つからないエラー',
      message: 'init パラメータが見つかりません。'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'サポートされていない操作のエラー',
      message: 'この操作は、このバージョンの SOE ではサポートされていません。'
    }
  }
})
);
