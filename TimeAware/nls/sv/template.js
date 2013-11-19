define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Det går inte att skapa kartan",
      general: "Fel"
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
      timeRange: "<b>Tidsintervall:</b> ${start_time} till ${end_time}",
      timeRangeSingle: "<b>Tidsintervall:</b> ${time}"
    },
    legend: {
      label: "Teckenförklaring",
      layerMessage: "Inga operativa lager"
    }
  }
})
);
