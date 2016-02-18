{
   "configurationSettings":[
      {
         "category":"<b>Map</b>",
         "fields":[
            {
               "type":"webmap"
            },
            {
               "type":"appproxies"
            }
         ]
      },
      {
         "category":"General",
         "fields":[
            {
               "type":"boolean",
               "fieldName":"title",
               "label":"Display title"
            },
            {
               "placeHolder":"Defaults to web map title",
               "label":"Title:",
               "fieldName":"titletext",
               "type":"string",
               "tooltip":"Defaults to web map title"
            },
            {
               "type":"paragraph",
               "value":"Enter the url to a logo image and optionally provide the url to a site that will open when the logo image is clicked. The logo image will display in the title bar to the left of the title. "
            },
            {
               "type":"string",
               "fieldName":"logo",
               "label":"Logo image url"
            },
            {
               "type":"string",
               "fieldName":"logolink",
               "label":"Logo url"
            },
            {
               "type":"boolean",
               "fieldName":"about",
               "label":"Display about dialog"
            },
            {
               "type":"string",
               "fieldName":"abouttext",
               "label":"About",
               "placeHolder":"Defaults to web map description.",
               "tooltip":"Enter content for the about panel.",
               "stringFieldOption":"richtext"
            }
         ]
      },
      {
         "category":"Theme",
         "fields":[
            {
               "type":"paragraph",
               "value":"Use the color pickers to define a new color scheme for the application"
            },
            {
               "type":"color",
               "fieldName":"panelbackground",
               "tooltip":"Background color for panels and title bar",
               "label":"Background color:"
            },
            {
               "type":"color",
               "fieldName":"panelcolor",
               "tooltip":"Title bar text color",
               "label":"Text color:"
            }
         ]
      },
      {
         "category":"Options",
         "fields":[
            {
               "type":"boolean",
               "fieldName":"legend",
               "label":"Legend"
            },
            {
               "type":"string",
               "fieldName":"legendposition",
               "tooltip":"Select location for legend",
               "label":"Legend location",
               "options":[
                  {
                     "label":"Top right",
                     "value":"top-right"
                  },
                  {
                     "label":"Top left",
                     "value":"top-left"
                  }
               ]
            },
            {
               "type":"boolean",
               "fieldName":"zoomslider",
               "label":"Zoom controls"
            },
            {
               "type":"boolean",
               "fieldName":"scale",
               "label":"Scalebar"
            },
            {
               "type":"boolean",
               "fieldName":"share",
               "label":"Display share dialog"
            }
         ]
      },
      {
         "category":"Time",
         "fields":[
            {
               "type":"paragraph",
               "value":"If the selected web map is time aware use the options in this section to configure the time behavior for the application. To disable time in the app set <i>Display time</i> to false. "
            },
            {
               "type":"boolean",
               "fieldName":"time",
               "label":"Display time"
            },
            {
               "type":"boolean",
               "fieldName":"looptime",
               "label":"Loop time continuously"
            },
            {
               "type":"boolean",
               "fieldName":"autoplay",
               "label":"Automatically play slider"
            },
            {
               "type":"paragraph",
               "value":"Set 'Update time immediately' to true if you want to see time data update as you drag the time slider handles. Note: if your dataset is large you may see performance decrease with this enabled."
            },
            {
               "type":"boolean",
               "fieldName":"intermediatechanges",
               "label":"Update time immediately"
            },
            {
               "type":"boolean",
               "fieldName":"endtimenewline",
               "label":"Show end time on new line"
            },
            {
               "type":"paragraph",
               "value":"Set <i>Hide slider control</i> to true to hide the slider portion of the time display and show just the play control and date."
            },
            {
               "type":"boolean",
               "fieldName":"noslider",
               "label":"Hide slider control"
            },
            {
               "type":"boolean",
               "fieldName":"timenav",
               "label":"Show navigation buttons"
            },
            {
               "type":"boolean",
               "fieldName":"sliderticks",
               "label":"Add tick marks to slider"
            },
            {
               "placeHolder":"500",
               "label":"Playback speed:",
               "fieldName":"sliderrate",
               "type":"string",
               "tooltip":"Rate at which slider plays (in milliseconds)"
            },
            {
               "type":"paragraph",
               "value":"By default the application will calculate an appropriate date format as the time slider progresses based on the time extent. Alternatively you can choose a pre-defined date/timem format or specify a custom date/time extent by providing a custom date string. See the examples in the <a href='http://dojotoolkit.org/reference-guide/1.10/dojo/date/locale/format.html'>dojo date format help</a> for more information. "
            },
            {
               "type":"string",
               "fieldName":"dateformat",
               "tooltip":"Select a pre-set date format",
               "label":"Date Format",
               "options":[
                  {
                     "label":"none",
                     "value":null
                  },
                  {
                     "label":"July 2015",
                     "value":"MMMM/yyyy"
                  },
                  {
                     "label":"Jul 2015",
                     "value":"MMM yyyy"
                  },
                  {
                     "label":"July 21,2015",
                     "value":"MMMM d,yyyy"
                  },
                  {
                     "label":"Tue Jul 21,2015",
                     "value":"EE MMM dd,yyyy"
                  },
                  {
                     "label":"7/21/2015",
                     "value":"M/dd/yyyy"
                  },
                  {
                     "label":"2015/7/21",
                     "value":"yyyy/M/dd"
                  },
                  {
                     "label":"7/21/15",
                     "value":"M/dd/yy "
                  },
                  {
                     "label":"2015",
                     "value":"yyyy"
                  }
               ]
            },
            {
               "type":"string",
               "fieldName":"timeformat",
               "tooltip":"Select a pre-set time format",
               "label":"Time Format",
               "options":[
                  {
                     "label":"none",
                     "value":null
                  },
                  {
                     "label":"17:16",
                     "value":"HH:mm"
                  },
                  {
                     "label":"17:16:00",
                     "value":"HH:mm:ss"
                  },
                  {
                     "label":"17:16 PDT",
                     "value":"H:mm v"
                  },
                  {
                     "label":"8:46 AM",
                     "value":"h:m a"
                  },
                  {
                     "label":"8:46 AM PDT",
                     "value":"h:m a v"
                  },
                  {
                     "label":"08:46 AM",
                     "value":"hh:mm a"
                  },
                  {
                     "label":"8:46:00 AM",
                     "value":"h:mm:ss a"
                  }
               ]
            },
            {
               "type":"string",
               "label":"Custom Date Format",
               "fieldName":"datetimeformat",
               "placeHolder":"yyyy-MM-dd"
            },
            {
               "type":"string",
               "fieldName":"timeposition",
               "tooltip":"Select location for time control",
               "label":"Time control location",
               "options":[
                  {
                     "label":"Bottom center",
                     "value":"bottom-center"
                  },
                  {
                     "label":"Bottom right",
                     "value":"bottom-right"
                  },
                  {
                     "label":"Bottom left",
                     "value":"bottom-left"
                  }
               ]
            },
            {
               "type":"color",
               "fieldName":"timecolor",
               "tooltip":"Color for the time slider controls",
               "label":"Play button and slider handles"
            },
            {
               "type":"color",
               "fieldName":"slidercolor",
               "tooltip":"Color for the time slider bar",
               "label":"Time slider color"
            }
         ]
      },
      {
         "category":"Search",
         "fields":[
            {
               "type":"paragraph",
               "value":"Enable search to allow users to find a location or data in the map. Configure the search settings to refine the experience in your app by setting the default search resource, placeholder text, etc."
            },
            {
               "type":"boolean",
               "fieldName":"search",
               "label":"Enable search tool"
            },
            {
               "type":"search",
               "fieldName":"searchConfig",
               "label":"Configure Search"
            }
         ]
      }
   ],
   "values":{
      "panelcolor":"#FFF",
      "panelbackground":"#575757",
      "timecolor":"#4992CD",
      "slidercolor":"#7CC5FF",
      "sliderticks":false,
      "looptime":false,
      "autoplay":false,
      "sliderrate":500,
      "noslider":false,
      "timenav":false,
      "intermediatechanges":false,
      "endtimenewline":false,
      "scale":true,
      "zoomslider":true,
      "share":true,
      "about":true,
      "legend":true,
      "legendposition":"top-right",
      "search":true,
      "timeposition":"bottom-center"
   }
}
