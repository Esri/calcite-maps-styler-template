define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "ก้_Unable to create map_ษฺ",
      general: "ก้_Error_ษฺ"
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
      centuryPattern: "ก้_yyyy G_ษฺ",
      decadePattern: "ก้_yyyy_ษฺ", 
      yearPattern: "ก้_MMMM yyyy_ษฺ",
      weekPattern: "ก้_MMMM d, yyyy_ษฺ",
      hourTimePattern: "ก้_h a_ษฺ",
      // e.g. for German: "ก้_H:mm:ss:SSS_ษฺ"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "ก้_h:mm a_ษฺ",
      // e.g. for German: "ก้_H:mm_ษฺ"
      monthPattern: "ก้_MMMM d, y_ษฺ",
      secondTimePattern: "ก้_h:m:s.SSS a_ษฺ",
      timeRange: "ก้_<b>Time Range:</b> ${start_time} to ${end_time}_ษฺ",
      timeRangeSingle: "ก้_<b>Time Range:</b> ${time}_ษฺ"
    },
    legend: {
      label: "ก้_Legend_ษฺ",
      layerMessage: "ก้_No operational Layers_ษฺ"
    }
  }
})
);
