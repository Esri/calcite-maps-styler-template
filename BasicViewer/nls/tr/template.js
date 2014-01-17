define(
({
  viewer:{
    main:{
      scaleBarUnits: "ı_english_İ" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "ı_Unable to create map_İ",
      bitly: 'ı_bitly is used to shorten the url for sharing. View the readme file for details on creating and using a bitly key_İ',
      general: "ı_Error_İ"
    }
  },
  tools:{
    basemap: {
    title: "ı_Switch Basemap_İ",
    label: "ı_Basemap_İ"
    },
    print: {
    layouts:{
      label1: 'ı_Landscape (PDF)_İ',
      label2: 'ı_Portrait (PDF)_İ',
      label3: 'ı_Landscape (Image)_İ',
      label4: 'ı_Portrait (Image)_İ'
    },
    title: "ı_Print Map_İ",
    label: "ı_Print_İ"
    },
    share: {
    title: "ı_Share Map_İ",
    label: "ı_Share_İ",
    menu:{
      facebook:{
        label: "ı_Facebook_İ"
       },
      twitter:{
        label: "ı_Twitter_İ"
      },
      email:{
        label: "ı_Email_İ",
        message: "ı_Check out this map_İ"
      }    
    }
    },
    measure: {
      title: "ı_Measure_İ",
      label: "ı_Measure_İ"
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
      title: "ı_Display Time Slider_İ",
      label: "ı_Time_İ",
      timeRange: "ı_<b>Time Range:</b> ${start_time} to ${end_time}_İ",
      timeRangeSingle: "ı_<b>Time Range:</b> ${time}_İ"
    },
    editor: {
      title: "ı_Display Editor_İ",
      label: "ı_Editor_İ"
    },
    legend: {
      title: "ı_Display Legend_İ",
      label: "ı_Legend_İ"
    },
    details: {
      title: "ı_Display Map Details_İ",
      label: "ı_Details_İ"
    },
    bookmark:{
      title: "ı_Display Bookmarks_İ",
      label: "ı_Bookmarks_İ",
      details: "ı_Click a bookmark to navigate to the location_İ"
    },
    layers: {
      title: "ı_Display layer list_İ",
      label: "ı_Layers_İ"
    },
    search: {
      title: "ı_Find address or place_İ",
      popupTitle: "ı_Location_İ",
      currentLocation: "ı_Current location_İ",
      notWhatYouWanted: "ı_Not what you wanted?_İ" ,
      selectAnother: "ı_Select another location_İ",
      errors:{
       missingLocation: "ı_Location not found_İ"
      }
    }
  },
  panel:{
    close:{
      title: "ı_Close Panel_İ",
      label: "ı_Close_İ"
    }
  }
})
);