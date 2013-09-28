define({root:
({
  viewer:{
    main:{
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Unable to create map",
      general: "Error"
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
      centuryPattern: "yyyy G",
      decadePattern: "yyyy", 
      yearPattern: "MMMM yyyy",
      weekPattern: "MMMM d, yyyy",
      hourTimePattern: "h a",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "h:mm a",
      // e.g. for German: "H:mm"
      monthPattern: "MMMM d, y",
      secondTimePattern: "h:m:s.SSS a",
      timeRange: "<b>Time Range:</b> ${start_time} to ${end_time}",
      timeRangeSingle: "<b>Time Range:</b> ${time}"
    },
    legend: {
      label: "Legend",
      layerMessage: "No operational Layers"
    }
  }
}),
"ar":1,
"cs":1,
"da":1,
"de":1,
"es":1,
"et":1,
"fi":1,
"fr":1,
"he":1,
"it":1,
"ja":1,
"ko":1,
"lt":1,
"lv":1,
"nl":1,
"nb":1,
"pl":1,
"pt-br":1,
"pt-pt":1,
"ro":1,
"ru":1,
"sv":1,
"zh-cn":1
});
