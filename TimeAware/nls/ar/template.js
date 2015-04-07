define({
  root: ({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "يتعذر إنشاء الخريطة",
      general: "خطأ"
    }
  },
  tools:{
    time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      datePattern: "dd MMMM, yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      timeRange: "${start_time} إلى ${end_time}",
      timeRangeSingle: "<b> نطاق الوقت: </b> ${time}"
    },
    legend: {
      label: "مفتاح الخريطة",
      layerMessage: "لا توجد طبقات تشغيلية"
    }
  }
}),
"ar": 1,
"cs": 1,
"da": 1,
"de": 1,
"el": 1,
"es": 1,
"et": 1,
"fi": 1,
"fr": 1,
"he": 1,
"it": 1,
"ja": 1,
"ko": 1,
"lt": 1,
"lv": 1,
"nl": 1,
"nb": 1,
"pl": 1,
"pt-br": 1,
"pt-pt": 1,
"ro": 1,
"ru": 1,
"sv": 1,
"tr": 1,
"th": 1,
"vi": 1,
"zh-cn": 1
});
