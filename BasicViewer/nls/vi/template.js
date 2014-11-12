define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "á»‡_english_á»" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "á»‡_Unable to create map_á»",
      bitly: 'á»‡_bitly is used to shorten the url for sharing. View the readme file for details on creating and using a bitly key_á»',
      general: "á»‡_Error_á»"
    }
  },
  tools: {
    basemap: {
    title: "á»‡_Switch Basemap_á»",
    label: "á»‡_Basemap_á»"
    },
    print: {
    layouts:{
      label1: 'á»‡_Landscape (PDF)_á»',
      label2: 'á»‡_Portrait (PDF)_á»',
      label3: 'á»‡_Landscape (Image)_á»',
      label4: 'á»‡_Portrait (Image)_á»'
    },
    title: "á»‡_Print Map_á»",
    label: "á»‡_Print_á»"
    },
    share: {
    title: "á»‡_Share Map_á»",
    label: "á»‡_Share_á»",
    menu: {
      facebook: {
        label: "á»‡_Facebook_á»"
       },
      twitter: {
        label: "á»‡_Twitter_á»"
      },
      email: {
        label: "á»‡_Email_á»",
        message: "á»‡_Check out this map_á»"
      }    
    }
    },
    measure: {
      title: "á»‡_Measure_á»",
      label: "á»‡_Measure_á»"
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
      datePattern: "á»‡_MMMM d, yyyy_á»",
      yearPattern: "á»‡_yyyy_á»",
      hourTimePattern: "á»‡_h a_á»",
      minuteTimePattern: "á»‡_h:mm a_á»",
      secondTimePattern: "á»‡_h:m:s.SSS a_á»",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "á»‡_Display Time Slider_á»",
      label: "á»‡_Time_á»",
      timeRange: "á»‡_${start_time} to ${end_time}_á»",
      timeRangeSingle: "á»‡_<b>Time Range:</b> ${time}_á»"
    },
    editor: {
      title: "á»‡_Display Editor_á»",
      label: "á»‡_Editor_á»"
    },
    legend: {
      title: "á»‡_Display Legend_á»",
      label: "á»‡_Legend_á»"
    },
    details: {
      title: "á»‡_Display Map Details_á»",
      label: "á»‡_Details_á»"
    },
    bookmark:{
      title: "á»‡_Display Bookmarks_á»",
      label: "á»‡_Bookmarks_á»",
      details: "á»‡_Click a bookmark to navigate to the location_á»"
    },
    layers: {
      title: "á»‡_Display layer list_á»",
      label: "á»‡_Layers_á»"
    },
    search: {
      title: "á»‡_Find address or place_á»",
      popupTitle: "á»‡_Location_á»",
      currentLocation: "á»‡_Current location_á»",
      notWhatYouWanted: "á»‡_Not what you wanted_á»?" ,
      selectAnother: "á»‡_Select another location_á»",
      errors:{
       missingLocation: "á»‡_Location not found_á»"
      }
    }
  },
  panel: {
    close: {
      title: "á»‡_Close Panel_á»",
      label: "á»‡_Close_á»"
    }
  }
})
);
