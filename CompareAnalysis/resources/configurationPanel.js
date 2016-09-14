{
   "configurationSettings":[
      {
         "category":"<b>Map</b>",
         "fields":[
            {
               "type":"webmap",
               "selection":"multiple",
               "limit": 4
            },
            {
               "type":"appproxies"
            }
         ]
      },
      {
         "category":"<b>Theme</b>",
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
            },{
            "type": "paragraph",
            "value": "Use the Custom css option to paste css that overwrites rules in the app."
          }, {
            "type": "string",
            "fieldName": "customstyle",
            "tooltip": "Custom css",
            "label": "Custom css"
          }
         ]
      },
      {
         "category":"<b>Side Panel</b>",
         "fields":[
            {
               "type":"paragraph",
               "value":"Uncheck the 'Include side panel' box to remove the side panel from the app. To hide the side panel on load uncheck the 'Show side panel' checkbox."
            },
            {
               "type":"boolean",
               "fieldName":"showTitleAndDescription",
               "label":"Include side panel"
            },
            {
               "type":"boolean",
               "fieldName":"openPanelOnLoad",
               "label":"Show side panel"
            },
            {
               "placeHolder":"Defaults to Compare Analysis",
               "type":"string",
               "fieldName":"title",
               "label":"Title (Displays on side panel)",
               "tooltip":"Defaults to Compare Analysis"
            },
            {
               "type":"string",
               "fieldName":"description",
               "label":"Details (Displays on side panel)",
               "placeHolder":"Provide a description for the application",
               "tooltip":"Enter a description for the application",
               "stringFieldOption":"richtext"
            }
         ]
      },
      {
         "category":"<b>Options</b>",
         "fields":[
            {
               "type":"boolean",
               "fieldName":"home",
               "label":"Home Extent Button"
            },
            {
               "type":"boolean",
               "fieldName":"sync",
               "label":"Add sync tool",
               "tooltip":"When true sync option will show on map"
            },
            {
               "type":"boolean",
               "fieldName":"auto_sync",
               "label":"Auto sync maps",
               "tooltip":"When true maps will be synced to the extent of the first map."
            },
            {
               "type":"boolean",
               "fieldName":"search",
               "label":"Place search",
               "tooltip":"Add location search tool"
            },
            {
               "type":"boolean",
               "fieldName":"searchExtent",
               "label":"Display search results in current extent"
            }
         ]
      }
   ],
   "values":{
      "home":true,
      "theme_color":"#575757",
      "theme_bg_color":"#fff",
      "openPanelOnLoad":true,
      "showTitleAndDescription":true,
      "sync":true,
      "auto_sync":true,
      "search":false,
      "searchExtent":true
   }
}
