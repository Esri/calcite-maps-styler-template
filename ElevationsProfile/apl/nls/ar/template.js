define(
  ({
  display: {
    elevationProfileTitle: "ارتفاع الملف التعريفي",
    showMe: "عرض",
    selectLine: "<b>تحديد</b> معلم في الخريطة.",
    popupRequirement: "ملاحظة: يجب وجود المعلم في طبقة مع تعطيل العناصر المنبثقة.",
    digitizeDistanceMeasureTool: "استخدم أدوات <b>قياس</b>",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "التحويم فوق مخطط الملف التعريفي للارتفاع أو لمسه لعرض الارتفاعات وعرض المواقع على الخريطة."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "الارتفاع: {0} متر",
  chart: {
    title: "ارتفاع الملف التعريفي",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "الارتفاع بـ {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "المسافة بـ {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "الحد الأدنى:{min}   الحد الأقصى:{max}   البداية:{start}   النهاية:{end}   تغيير:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'خطأ تكوين غير صالح',
      message: 'تكوين غير صالح.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'خطأ في معطيات مفقودة في المنشئ',
      message: 'يوجد معطى مفقود في المنشئ.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'خطأ معطى مفقود في التهيئة.',
      message: 'يوجد معطى مفقود في التهيئة.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'خطأ لأن العملية غير مدعومة',
      message: 'لا يقوم إصدار SOE الحالي بدعم العملية.'
    }
  }
})
);

