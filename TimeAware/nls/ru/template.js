define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Не удалось создать карту",
      general: "Ошибка"
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
      datePattern: "Ж_MMMM d, yyyy_Я",
      yearPattern: "Ж_yyyy_Я",
      hourTimePattern: "H",
      minuteTimePattern: "H:mm",
      secondTimePattern: "ч:м:с.ССС a",
      millisecondTimePattern:"h:m:ss.SSS a",
      timeRange: "Ж_${start_time} to ${end_time}_Я",
      timeRangeSingle: "<b>Временной диапазон:</b> ${time}"
    },
    legend: {
      label: "Легенда",
      layerMessage: "Нет рабочих слоев"
    }
  }
})
);
