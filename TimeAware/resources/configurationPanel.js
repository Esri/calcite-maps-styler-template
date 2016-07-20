{
  "configurationSettings": [{
    "category": "<b>Map</b>",
    "fields": [{
      "type": "webmap"
    }, {
      "type": "appproxies"
    }]
  }, {
    "category": "General",
    "fields": [{
      "type": "boolean",
      "fieldName": "title",
      "label": "Display title"
    }, {
      "placeHolder": "Defaults to web map title",
      "label": "Title:",
      "fieldName": "titletext",
      "type": "string",
      "tooltip": "Defaults to web map title"
    }, {
      "type": "paragraph",
      "value": "Enter the url to a logo image and optionally provide the url to a site that will open when the logo image is clicked. The logo image will display in the title bar to the left of the title. "
    }, {
      "type": "string",
      "fieldName": "logo",
      "label": "Logo image url"
    }, {
      "type": "string",
      "fieldName": "logolink",
      "label": "Logo url"
    }, {
      "type": "boolean",
      "fieldName": "about",
      "label": "Display about dialog"
    }, {
      "type": "string",
      "fieldName": "abouttext",
      "label": "About",
      "placeHolder": "Defaults to web map description.",
      "tooltip": "Enter content for the about panel.",
      "stringFieldOption": "richtext"
    }]
  }, {
    "category": "Theme",
    "fields": [{
      "type": "paragraph",
      "value": "Use the color pickers to define a new color scheme for the application"
    }, {
      "type": "color",
      "fieldName": "panelbackground",
      "tooltip": "Background color for panels and title bar",
      "label": "Background color:"
    }, {
      "type": "color",
      "fieldName": "panelcolor",
      "tooltip": "Title bar text color",
      "label": "Text color:"
    },{
      "type": "paragraph",
      "value": "Use the Custom css option to paste css that overwrites rules in the app."
    },{
      "type": "string",
      "fieldName": "customstyle",
      "tooltip": "Custom css",
      "label": "Custom css"
    }]
  }, {
    "category": "Options",
    "fields": [{
      "type": "boolean",
      "fieldName": "legend",
      "label": "Legend"
    }, {
      "type": "string",
      "fieldName": "legendposition",
      "tooltip": "Select location for legend",
      "label": "Legend location",
      "options": [{
        "label": "Top right",
        "value": "top-right"
      }, {
        "label": "Top left",
        "value": "top-left"
      }]
    }, {
      "type": "boolean",
      "fieldName": "zoomslider",
      "label": "Zoom controls"
    }, {
      "type": "boolean",
      "fieldName": "scale",
      "label": "Scalebar"
    }, {
      "type": "boolean",
      "fieldName": "share",
      "label": "Display share dialog"
    }]
  }, {
    "category": "Time Slider Options",
    "fields": [{
      "type": "paragraph",
      "value": "If the selected web map is time aware use the options in this section to configure the time behavior for the application. To disable time in the app set <i>Display time</i> to false. "
    }, {
      "type": "boolean",
      "fieldName": "time",
      "label": "Display time"
    }, {
      "type": "boolean",
      "fieldName": "looptime",
      "label": "Loop time continuously"
    }, {
      "type": "boolean",
      "fieldName": "autoplay",
      "label": "Automatically play slider"
    }, {
      "type": "paragraph",
      "value": "Set 'Update time immediately' to true if you want to see time data update as you drag the time slider handles. Note: if your dataset is large you may see performance decrease with this enabled."
    }, {
      "type": "boolean",
      "fieldName": "intermediatechanges",
      "label": "Update time immediately"
    }, {
      "type": "paragraph",
      "value": "Set <i>Hide slider control</i> to true to hide the slider portion of the time display and show just the play control and date."
    }, {
      "type": "boolean",
      "fieldName": "noslider",
      "label": "Hide slider control"
    }, {
      "type": "boolean",
      "fieldName": "timenav",
      "label": "Show navigation buttons"
    }, {
      "type": "boolean",
      "fieldName": "sliderticks",
      "label": "Add tick marks to slider"
    }, {
      "placeHolder": "1000",
      "label": "Playback speed:",
      "fieldName": "thumbmovingrate",
      "type": "string",
      "tooltip": "The default playback speed is 1000 milliseconds (one second) per time interval. Providing a smaller number will increase the playback speed of the animation by shortening the duration of each interval."
    }, {
      "type": "string",
      "fieldName": "timeposition",
      "tooltip": "Select location for time control",
      "label": "Time control location",
      "options": [{
        "label": "Bottom center",
        "value": "bottom-center"
      }, {
        "label": "Bottom right",
        "value": "bottom-right"
      }, {
        "label": "Bottom left",
        "value": "bottom-left"
      }]
    }, {
      "type": "color",
      "fieldName": "timecolor",
      "tooltip": "Color for the time slider controls",
      "label": "Play button and slider handles"
    }, {
      "type": "color",
      "fieldName": "slidercolor",
      "tooltip": "Color for the time slider bar",
      "label": "Time slider color"
    }]
  }, {
    "category": "Date/Time Format",
    "fields": [{
      "type": "paragraph",
      "value": "By default the application will calculate an appropriate date format as the time slider progresses based on the current time extent. If you'd like to modify the default behavior you can do so using the options below. "
    }, {
      "type": "boolean",
      "fieldName": "singleLineDate",
      "label": "Show dates on one line",
      "tooltip": "Uncheck to show dates on two lines"
    }, {
      "type": "boolean",
      "fieldName": "showStartDate",
      "label": "Show start date",
      "tooltip": "Show start date"
    }, {
      "type": "boolean",
      "fieldName": "showEndDate",
      "label": "Show end date",
      "tooltip": "Show end date"
    }, {
      "type": "string",
      "fieldName": "dateSeparator",
      "placeHolder": "-",
      "label": "Specify date separator value",
      "tooltip": "Defaults to - "
    }, {
      "type": "string",
      "fieldName": "preDefinedFormatOption",
      "label": "Pre-defined date format",
      "options": [{
        "label": "July 2015",
        "value": "MMMM YYYY"
      }, {
        "label": "Jul 2015",
        "value": "MMM YYYY"
      }, {
        "label": "July 21,2015",
        "value": "MMMM D,YYYY"
      }, {
        "label": "Tue Jul 21,2015",
        "value": "ddd MMM DD,YYYY"
      }, {
        "label": "7/21/2015",
        "value": "M/DD/YYYY"
      }, {
        "label": "2015/7/21",
        "value": "YYYY/M/DD"
      }, {
        "label": "7/21/15",
        "value": "M/DD/YY "
      }, {
        "label": "2015",
        "value": "YYYY"
      }, {
        "label": "7/21/2015 8:00 am",
        "value": "M/DD/YYYY  h:mm a"
      }, {
        "label": "Tue Jul 21 8:00 am",
        "value": "ddd MMM DD  h:mm a"
      }]
    }, {
      "type": "paragraph",
      "value": "If the above options don't provide enough control over the date time you can specify a custom one. See the  <a href='http://momentjs.com/docs/#/displaying/format/'>format help</a> for more information."
    }, {
      "type": "string",
      "label": "Custom Date Format",
      "fieldName": "customFormatOption",
      "placeHolder": "YYYY-MM-dd h:m:s Z"
    }]
  }, {
    "category": "Live Data Options",
    "fields": [{
      "type": "paragraph",
      "value": "If your data contains live or recent data you can use the options below to show data for the specified period of time. For example you could look at all the features in the last hour, week etc. When you use this option the end time will be the current date and time when the app is run."
    }, {
      "type": "number",
      "fieldName": "durationTime",
      "label": "Duration time",
      "constraints": {
        "min": 0,
        "places": 0
      }
    }, {
      "type": "options",
      "fieldName": "durationPeriod",
      "label": "Duration period",
      "options": [{
        "label": "Seconds",
        "value": "seconds"
      }, {
        "label": "Minutes",
        "value": "minutes"
      }, {
        "label": "Hours",
        "value": "hours"
      }, {
        "label": "Days",
        "value": "days"
      }, {
        "label": "Weeks",
        "value": "weeks"
      }, {
        "label": "Months",
        "value": "months"
      }, {
        "label": "Years",
        "value": "years"
      }]
    }, {
      "type": "number",
      "fieldName": "tickTime",
      "label": "Tick time",
      "tooltip": "Number of steps slider will contain",
      "constraints": {
        "min": 0,
        "places": 0
      }
    }, {
      "type": "options",
      "fieldName": "tickPeriod",
      "label": "Tick period",
      "options": [{
        "label": "Seconds",
        "value": "esriTimeUnitsSeconds"
      }, {
        "label": "Minutes",
        "value": "esriTimeUnitsMinutes"
      }, {
        "label": "Hours",
        "value": "esriTimeUnitsHours"
      }, {
        "label": "Days",
        "value": "esriTimeUnitsDays"
      }, {
        "label": "Weeks",
        "value": "esriTimeUnitsWeeks"
      }, {
        "label": "Months",
        "value": "esriTimeUnitsMonths"
      }, {
        "label": "Years",
        "value": "esriTimeUnitsYears"
      }]
    }, {
      "type": "paragraph",
      "value": "Humanize duration text uses relative time threseholds to determine when a unit of time should be considered an hour, day, etc for presentation purposes. Currently at least 45 seconds is considered a minute, 45 minutes is considered an hour, 22 hours is considered a day, 26 days is consdiered a month, and 11 months is considered a year.  If a custom date format has been configured above, this option will be ignored."
    }, {
      "type": "boolean",
      "fieldName": "humanizeDuration",
      "label": "Humanize duration text",
      "tooltip": "Humanize time label so values will be comparitive time like '2 hours ago'"
    }]
  }, {
    "category": "Search",
    "fields": [{
      "type": "paragraph",
      "value": "Enable search to allow users to find a location or data in the map. Configure the search settings to refine the experience in your app by setting the default search resource, placeholder text, etc."
    }, {
      "type": "boolean",
      "fieldName": "search",
      "label": "Enable search tool"
    }, {
      "type": "search",
      "fieldName": "searchConfig",
      "label": "Configure Search"
    }]
  }],
  "values": {
    "panelcolor": "#FFF",
    "panelbackground": "#575757",
    "timecolor": "#4992CD",
    "slidercolor": "#7CC5FF",
    "sliderticks": false,
    "looptime": false,
    "autoplay": false,
    "noslider": false,
    "timenav": false,
    "showStartDate": true,
    "showEndDate": true,
    "singleLineDate": true,
    "humanizeDuration": false,
    "scale": true,
    "zoomslider": true,
    "share": true,
    "about": true,
    "legend": true,
    "legendposition": "top-right",
    "search": true,
    "timeposition": "bottom-center"
  }
}
