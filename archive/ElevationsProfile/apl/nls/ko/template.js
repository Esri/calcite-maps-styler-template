define(
({
  display: {
    elevationProfileTitle: "언덕 프로필",
    showMe: "표시",
    selectLine: "맵에서 피처를 <b>선택</b>하세요.",
    popupRequirement: "참고: 팝업을 활성화하려면 레이어에 피처가 있어야 합니다.",
    digitizeDistanceMeasureTool: "<b>측정</b> 도구를 사용하세요.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "고도 프로파일 차트를 가리키거나 터치하면 고도가 나타나고 맵에 위치가 표시됩니다."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "언덕: {0}미터",
  chart: {
    title: "언덕 프로필",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "언덕({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "거리({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "분:{min}   최대:{max}   시작:{start}   종료:{end}   변경:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: '유효하지 않은 구성 오류',
      message: '유효하지 않은 구성입니다.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: '누락 생성자 매개변수 오류',
      message: '생성자 매개변수가 누락되었습니다.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: '초기화 매개변수 누락 오류',
      message: '초기화 매개변수가 누락되었습니다.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: '지원되지 않는 작업 오류',
      message: '이 SOE 버전은 이 작업을 지원하지 않습니다.'
    }
  }
})
);
