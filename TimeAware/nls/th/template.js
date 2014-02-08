define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "ไม่สามารถสร้างแผนที่ได้",
      general: "ข้อผิดพลาด"
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
      datePattern: "ก้_MMMM d, yyyy_ษฺ",
      yearPattern: "ก้_yyyy_ษฺ",
      hourTimePattern: "ชั่วโมง",
      minuteTimePattern: "ชั่วโมง:นาที",
      secondTimePattern: "ชั่วโมง:นาที:วินาที",
      millisecondTimePattern:"h:m:ss.SSS a",
      timeRange: "ก้_${start_time} to ${end_time}_ษฺ",
      timeRangeSingle: "<b>ช่วงเวลา:</b> ${time}"
    },
    legend: {
      label: "คำอธิบายสัญลักษณ์",
      layerMessage: "ไม่มีชั้นข้อมูลที่ทำงานอยู่"
    }
  }
})
);
