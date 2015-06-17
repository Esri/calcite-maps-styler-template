{  
   "configurationSettings":[
      {  
         "category":"<b>General</b>",
         "fields":[  
            {
               "type": "appproxies"
            },
            {  
               "type":"webmap"
            },
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
            },{
               "type":"paragraph",
               "value":"Enter the url to a logo image and optionally provide the url to a site that will open when the logo image is clicked. The logo image will display in the title bar to the left of the title. "
            },{
               "type":"string",
               "fieldName":"logo",
               "label": "Logo image url"
            },{
               "type":"string",
               "fieldName":"logolink",
               "label":"Logo url"
            },
            {
               "type":"boolean",
               "fieldName": "about",
               "label": "Display about dialog"
            },
            {  
               "type":"string",
               "fieldName":"abouttext",
               "label":"About",
               "placeHolder":"Defaults to web map description.",
               "tooltip":"Enter content for the about panel.",
               "stringFieldOption":"richtext"
            },
            {
               "type":"boolean",
               "fieldName": "share",
               "label": "Display share dialog"
            }
         ]
      },{
         "category": "Theme",
         "fields":[
            {
               "type": "paragraph",
               "value": "Use the color pickers to define a new color scheme for the application"
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
      },{
         "category": "Time Display",
         "fields":[{
               "type": "paragraph",
               "value": "If the selected web map is time aware use the options in this section to configure the time behavior for the application. To disable time in the app set <i>Display time</i> to false. "
            },
            {
               "type":"boolean",
               "fieldName": "time",
               "label": "Display time"
            },{
               "type":"boolean",
               "fieldName": "looptime",
               "label": "Loop time continuously"
            },{
               "type": "boolean",
               "fieldName": "autoplay",
               "label": "Automatically play slider"
            },{
               "type": "paragraph",
               "value": "Set <i>Hide slider control</i> to true to hide the slider portion of the time display and show just the play control and date."
            },{
               "type": "boolean",
               "fieldName": "noslider",
               "label": "Hide slider control"
            },{
               "type": "boolean",
               "fieldName": "timenav",
               "label": "Show navigation buttons"
            },{
               "type": "boolean",
               "fieldName": "sliderticks",
               "label": "Add tick marks to slider"
            },{
               "placeHolder":"500",
               "label":"Playback speed:",
               "fieldName":"sliderrate",
               "type":"string",
               "tooltip":"Rate at which slider plays (in milliseconds)"
            },{
               "type":"paragraph",
               "value":"By default the application will calculate an appropriate date format as the time slider progresses based on the time extent. Alternatively you can specify a custom date/time extent by providing a custom date string. See the examples in the <a href='http://dojotoolkit.org/reference-guide/1.10/dojo/date/locale/format.html'>dojo date format help</a> for more information. "
            },{
               "type":"string",
               "label": "Date Format",
               "fieldName": "datetimeformat",
               "placeHolder": "yyyy-MM-dd"
            },
            {
               "type":"color",
               "fieldName": "timecolor",
               "tooltip": "Color for the time slider controls",
               "label": "Play button and slider handles"
            },{
               "type":"color",
               "fieldName": "slidercolor",
               "tooltip": "Color for the time slider bar",
               "label": "Time slider color"
            }, {
               "type": "string",
               "fieldName": "timeposition",
               "tooltip": "Select location for time control",
               "label": "Time control location",
               "options":[
                  {
                     "label":"Bottom center",
                     "value":"bottom-center"
                  },{
                     "label": "Bottom right",
                     "value": "bottom-right"
                  },{
                     "label": "Bottom left",
                     "value": "bottom-left"
                  }
               ]
            }
         ]
      },
      {  
         "category":"Map Tools",
         "fields":[  
            {  
               "type":"boolean",
               "fieldName":"legend",
               "label":"Legend"
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
            }
         ]
      },{
         "category": "Search",
         "fields": [
            {  
               "type":"boolean",
               "fieldName":"search",
               "label":"Enable search tool"
            },{
               "type": "search",
               "fieldName": "searchConfig",
               "label": "Configure Search"
            }
         ]
      }
   ],
   "values":{  
      "panelcolor": "#FFF",
      "panelbackground": "#575757",
      "timecolor": "#4992CD",
      "slidercolor":"#7CC5FF",
      "sliderticks":false,
      "looptime":true,
      "autoplay": false,
      "sliderrate": 500,
      "noslider": false,
      "timenav": false,
      "scale":false,
      "zoomslider": true,
      "share": true,
      "about": true,
      "legend": true,
      "search": true,
      "scale":false,
      "timeposition": "bottom-center"
   }
}
