define(
({
  display: {
    elevationProfileTitle: "פרופיל גבהים",
    showMe: "הצג בפניי",
    selectLine: "<b>בחר</b> ישות במפה.",
    popupRequirement: "הערה: הישות חייבת להיות בשכבה עם חלון קופץ מאופשר.",
    digitizeDistanceMeasureTool: "השתמש בכלי <b>מדידה</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "רחף מעל או גע בתשריט פרופיל גבהים בכדי להציג גבהים ולהראות מיקום על המפה."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "גובה: {0} מטרים",
  chart: {
    title: "פרופיל גבהים",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "גובה ב {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "מרחק ב {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "מינימום:{min}   מקסימום:{max}   התחלה:{start}   סוף:{end}   שינוי:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'שגיאת תצורה לא תקינה',
      message: 'תצורה לא תקינה.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'שגיאת פרמטר Constructor חסר',
      message: 'פרמטר Constructor חסר'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'שגיאת פרמטר איתחול חסר',
      message: 'מחסור בפרמטר Init'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'שגיאת פעולה לא נתמכת',
      message: 'גרסה זו של SOE לא תומכת בפעולה זו.'
    }
  }
})
);
