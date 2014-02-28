{
   "configurationSettings":[
      {
         "category":"<b>General</b>",
         "fields":[
            {
               "type":"webmap",
               "label":"Select a map"
            }
         ]
      },
      {
         "category":"<b>Define template options</b>",
         "fields":[
            {
               "type":"string",
               "fieldName":"theme",
               "tooltip":"Color theme to use",
               "label":"Color Scheme:",
               "options":[
                  {
                     "label":"Blue",
                     "value":"blue"
                  },
                  {
                     "label":"Black",
                     "value":"black"
                  },
                  {
                     "label":"Green",
                     "value":"green"
                  }
               ]
            },
            {
               "type":"boolean",
               "fieldName":"displaytoolbar",
               "label":"Show Toolbar",
               "tooltip":"True to display toolbar (Desktop only)"
            }
         ]
      },
      {
         "category":"<b>Optional Widgets</b>",
         "fields":[
            {
               "type":"paragraph",
               "value":"Add one or more of the following widgets to the application."
            },
            {
               "type":"boolean",
               "fieldName":"home_button",
               "label":"Full extent button"
            },
            {
               "type":"boolean",
               "fieldName":"locate_button",
               "label":"Location button"
            },
            {
               "type":"boolean",
               "fieldName":"geocoder",
               "label":"Place search"
            }
         ]
      }
   ],
   "values":{
      "displaytoolbar":false,
      "home_button":true,
      "locate_button":true,
      "geocoder":true
   }
}