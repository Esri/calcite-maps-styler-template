define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "ก้_Unable to create map_ษฺ",
      bitly: 'ก้_bitly is used to shorten the url for sharing. View the readme file for details on creating and using a bitly key_ษฺ',
      general: "ก้_Error_ษฺ"
    }
  },
  tools:{
    basemap: {
    title: "ก้_Switch Basemap_ษฺ",
    label: "ก้_Basemap_ษฺ"
    },
    print: {
    layouts:{
      label1: 'ก้_Landscape (PDF)_ษฺ',
      label2: 'ก้_Portrait (PDF)_ษฺ',
      label3: 'ก้_Landscape (Image)_ษฺ',
      label4: 'ก้_Portrait (Image)_ษฺ'
    },
    title: "ก้_Print Map_ษฺ",
    label: "ก้_Print_ษฺ"
    },
    share: {
    title: "ก้_Share Map_ษฺ",
    label: "ก้_Share_ษฺ",
    menu:{
      facebook:{
        label: "ก้_Facebook_ษฺ"
       },
      twitter:{
        label: "ก้_Twitter_ษฺ"
      },
      email:{
        label: "ก้_Email_ษฺ",
        message: "ก้_Check out this map_ษฺ"
      }    
    }
    },
    measure: {
      title: "ก้_Measure_ษฺ",
      label: "ก้_Measure_ษฺ"
    },
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
      title: "ก้_Display Time Slider_ษฺ",
      label: "ก้_Time_ษฺ",
      timeRange: "ก้_<b>Time Range:</b> ${start_time} to ${end_time}_ษฺ",
      timeRangeSingle: "ก้_<b>Time Range:</b> ${time}_ษฺ"
    },
    editor: {
      title: "ก้_Display Editor_ษฺ",
      label: "ก้_Editor_ษฺ"
    },
    legend: {
      title: "ก้_Display Legend_ษฺ",
      label: "ก้_Legend_ษฺ"
    },
    details: {
      title: "ก้_Display Map Details_ษฺ",
      label: "ก้_Details_ษฺ"
    },
    bookmark:{
      title: "ก้_Display Bookmarks_ษฺ",
      label: "ก้_Bookmarks_ษฺ",
      details: "ก้_Click a bookmark to navigate to the location_ษฺ"
    },
    layers: {
      title: "ก้_Display layer list_ษฺ",
      label: "ก้_Layers_ษฺ"
    },
    search: {
      title: "ก้_Find address or place_ษฺ",
      popupTitle: "ก้_Location_ษฺ",
      currentLocation: "ก้_Current location_ษฺ",
      notWhatYouWanted: "ก้_Not what you wanted?_ษฺ" ,
      selectAnother: "ก้_Select another location_ษฺ",
      errors:{
       missingLocation: "ก้_Location not found_ษฺ"
      }
    }
  },
  panel:{
    close:{
      title: "ก้_Close Panel_ษฺ",
      label: "ก้_Close_ษฺ"
    }
  }
})
);