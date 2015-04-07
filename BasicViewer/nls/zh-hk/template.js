define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "試_english_驗" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "試_Unable to create map_驗",
      bitly: '試_bitly is used to shorten the url for sharing. View the readme file for details on creating and using a bitly key_驗',
      general: "試_Error_驗"
    }
  },
  tools: {
    basemap: {
    title: "試_Switch Basemap_驗",
    label: "試_Basemap_驗"
    },
    print: {
    layouts:{
      label1: '試_Landscape (PDF)_驗',
      label2: '試_Portrait (PDF)_驗',
      label3: '試_Landscape (Image)_驗',
      label4: '試_Portrait (Image)_驗'
    },
    title: "試_Print Map_驗",
    label: "試_Print_驗"
    },
    share: {
    title: "試_Share Map_驗",
    label: "試_Share_驗",
    menu: {
      facebook: {
        label: "試_Facebook_驗"
       },
      twitter: {
        label: "試_Twitter_驗"
      },
      email: {
        label: "試_Email_驗",
        message: "試_Check out this map_驗"
      }    
    }
    },
    measure: {
      title: "試_Measure_驗",
      label: "試_Measure_驗"
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
      datePattern: "試_MMMM d, yyyy_驗",
      yearPattern: "試_yyyy_驗",
      hourTimePattern: "試_h a_驗",
      minuteTimePattern: "試_h:mm a_驗",
      secondTimePattern: "試_h:m:s.SSS a_驗",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "試_Display Time Slider_驗",
      label: "試_Time_驗",
      timeRange: "試_${start_time} to ${end_time}_驗",
      timeRangeSingle: "試_<b>Time Range:</b> ${time}_驗"
    },
    editor: {
      title: "試_Display Editor_驗",
      label: "試_Editor_驗"
    },
    legend: {
      title: "試_Display Legend_驗",
      label: "試_Legend_驗"
    },
    details: {
      title: "試_Display Map Details_驗",
      label: "試_Details_驗"
    },
    bookmark:{
      title: "試_Display Bookmarks_驗",
      label: "試_Bookmarks_驗",
      details: "試_Click a bookmark to navigate to the location_驗"
    },
    layers: {
      title: "試_Display layer list_驗",
      label: "試_Layers_驗"
    },
    search: {
      title: "試_Find address or place_驗",
      popupTitle: "試_Location_驗",
      currentLocation: "試_Current location_驗",
      notWhatYouWanted: "試_Not what you wanted_驗?" ,
      selectAnother: "試_Select another location_驗",
      errors:{
       missingLocation: "試_Location not found_驗"
      }
    }
  },
  panel: {
    close: {
      title: "試_Close Panel_驗",
      label: "試_Close_驗"
    }
  }
})
);
