define(
({
  viewer:{
    main:{
      scaleBarUnits: "ı_english_İ" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "ı_Unable to create map_İ",
      general: "ı_Error_İ"
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
      centuryPattern: "ı_yyyy G_İ",
      decadePattern: "ı_yyyy_İ", 
      yearPattern: "ı_MMMM yyyy_İ",
      weekPattern: "ı_MMMM d, yyyy_İ",
      hourTimePattern: "ı_h a_İ",
      // e.g. for German: "ı_H:mm:ss:SSS_İ"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "ı_h:mm a_İ",
      // e.g. for German: "ı_H:mm_İ"
      monthPattern: "ı_MMMM d, y_İ",
      secondTimePattern: "ı_h:m:s.SSS a_İ",
      timeRange: "ı_<b>Time Range:</b> ${start_time} to ${end_time}_İ",
      timeRangeSingle: "ı_<b>Time Range:</b> ${time}_İ"
    },
    legend: {
      label: "ı_Legend_İ",
      layerMessage: "ı_No operational Layers_İ"
    }
  }
})
);
