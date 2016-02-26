{
   "configurationSettings":[
      {
         "category":"Scene",
         "fields":[
            {
               "type": "paragraph",
               "value": "Choose up to two web scenes to compare"
            },
           {
              "type":"webscene",
              "selection":"multiple"
           },
            {
               "type":"appproxies"
            }
         ]
      },
      {
         "category":"Theme",
         "fields":[
            {
               "type":"color",
               "fieldName":"backgroundColor",
               "tooltip":"Background color",
               "label":"Background color:"
            },
            {
               "type":"color",
               "fieldName":"textColor",
               "tooltip":"Text color",
               "label":"Text color:"
            },
            {
               "type":"color",
               "fieldName":"slideColorTheme",
               "tooltip":"Slide gallery color theme",
               "label":"Slide gallery color theme"
            }
         ]
      },
      {
         "category":"Options",
         "fields":[
            {
               "type":"boolean",
               "fieldName":"link",
               "label":"Link Views",
               "tooltip":"When true view extents linked at start"
            },
            {
               "type":"boolean",
               "fieldName":"panelsOpen",
               "label":"Open info panels at start"
            }
         ]
      }
   ],
   "values":{
      "link":true,
      "panelsOpen":true,
      "color":"#fff",
      "backgroundColor":"#333",
      "slideColorTheme":"#05668D"
   }
}
