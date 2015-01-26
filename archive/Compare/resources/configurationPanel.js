{
   "configurationSettings":[
      {
         "category":"<b>Map Properties</b>",
         "fields":[
            {
               "type":"webmap",
               "selection":"multiple"
            },
            {
               "placeHolder":"Defaults to Compare Maps",
               "type":"string",
               "fieldName":"title",
               "label":"Title",
               "tooltip":"Defaults to Compare Maps"
            },
            {
               "type":"string",
               "fieldName":"description",
               "label":"Details",
               "placeHolder":"Provide a description for the application",
               "tooltip":"Enter a description for the application",
               "stringFieldOption":"richtext"
            }
         ]
      },
      {
         "category":"<b>Color Themes</b>",
         "fields":[
            {
               "type":"color",
               "fieldName":"theme_color",
               "tooltip":"Text color",
               "label":"Text color:"
            },
            {
               "type":"color",
               "fieldName":"theme_bg_color",
               "tooltip":"Background color for panel",
               "label":"Panel background color:"
            }
         ]
      },
      {
         "category":"<b>Tools</b>",
         "fields":[
            {
               "type":"boolean",
               "fieldName":"home",
               "label":"Home Extent Button"
            }
         ]
      }
   ],
   "values":{
      "home":true,
      "theme_color":"#575757",
      "theme_bg_color":"#fff"
   }
}
