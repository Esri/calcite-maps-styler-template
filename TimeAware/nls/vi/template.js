define(
({
  viewer:{
    main:{
      scaleBarUnits: "á»‡_english_á»" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "á»‡_Unable to create map_á»",
      general: "á»‡_Error_á»"
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
      datePattern: "á»‡_MMMM d, yyyy_á»",
      yearPattern: "á»‡_yyyy_á»",
      hourTimePattern: "á»‡_h a_á»",
      minuteTimePattern: "á»‡_h:mm a_á»",
      secondTimePattern: "á»‡_h:m:s.SSS a_á»",
      millisecondTimePattern:"h:m:ss.SSS a",
      timeRange: "á»‡_${start_time} to ${end_time}_á»",
      timeRangeSingle: "á»‡_<b>Time Range:</b> ${time}_á»"
    },
    legend: {
      label: "á»‡_Legend_á»",
      layerMessage: "á»‡_No operational Layers_á»"
    }
  }
})
);
