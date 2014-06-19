{
   "configurationSettings":[
      {
         "category":"General",
         "fields":[
            {
               "type":"webmap",
               "label":"Select a map"
            },
            {
               "placeHolder":"Defaults to Apply",
               "label":"Filter button Text:",
               "fieldName":"button_text",
               "type":"string",
               "tooltip":"Enter button text"
            },
            {
               "placeHolder":"Defaults to map title",
               "label":"Title Text:",
               "fieldName":"title",
               "type":"string",
               "tooltip":"Defaults to map title"
            },
            {
               "placeHolder":"Defaults to the web map snippet",
               "label":"Subtitle Text:",
               "fieldName":"subtitle",
               "type":"string",
               "tooltip":"Defaults to webmap snippet"
            },
            {
               "placeHolder":"Filter the layer by specifying values.",
               "label":"Filter Text:",
               "fieldName":"filterInstructions",
               "type":"string",
               "tooltip":"Specify filter instructions"
            },
            {
               "type":"paragraph",
               "value":"The filter instructions provide text that explains to application users how to use the filter."
            }
         ]
      },{
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
      "home_button":true,
      "locate_button":true,
      "geocoder":true
   }
}