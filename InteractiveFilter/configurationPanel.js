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
               "type":"color",
               "fieldName":"theme",
               "tooltip":"Color theme to use",
               "label":"Color Theme:"
            },
            {
               "type":"color",
               "fieldName":"color",
               "tooltip":"Text color",
               "label":"Text Color:"
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
      },
      {
         "category":"<b>Filter Options</b>",
         "fields":[
            {
               "type":"paragraph",
               "value":"Set Display dropdown to true if your app contains multiple filters and you want to display a dropdown list of the filters and allow application users to select and view the options for one filter at a time."
            },
            {
               "type":"boolean",
               "fieldName":"filterDropdown",
               "label":"Display dropdown"
            },
            {
               "type":"boolean",
               "fieldName":"filterOnLoad",
               "label":"Remove filters when app loads."
            },
            {
              "type": "paragraph",
              "value": "Display a zoom button that allows application users to zoom to the filtered results. Only applicable for hosted feature services"
            },
            {
               "type":"boolean",
               "fieldName":"displayZoom",
               "label":"Display zoom button"
            },
            {
              "type": "paragraph",
              "value": "Display a clear button that allows application users to remove the applied filter."
            },
              {
              "type": "boolean",
              "fieldName": "displayClear",
              "label": "Display clear button"
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
               "fieldName":"home",
               "label":"Full extent button"
            },
            {
               "type":"boolean",
               "fieldName":"locate",
               "label":"Location button"
            },
            {
               "type":"boolean",
               "fieldName":"search",
               "label":"Place search"
            }
         ]
      }
   ],
   "values":{
      "home":true,
      "locate":true,
      "search":true,
      "color":"#fff",
      "theme":"#666",
      "filterDropdown":false,
      "filterOnLoad": true,
      "displayZoom": false,
      "displayClear": false

   }
}
