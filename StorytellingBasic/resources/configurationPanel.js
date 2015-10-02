{  
   "configurationSettings":[
      {  
         "category":"<b>Map Settings</b>",
         "fields":[  
            {
               "type": "appproxies"
            },
            {  
               "type":"webmap"
            },
            {  
               "type":"boolean",
               "fieldName":"showTitle",
               "label":"Display Map Title"
            },
            {  
               "placeHolder":"Defaults to web map title",
               "label":"Title:",
               "fieldName":"title",
               "type":"string",
               "tooltip":"Defaults to web map title"
            },{  
               "type":"boolean",
               "fieldName":"showSubTitle",
               "label":"Display subtitle"
            },{  
               "placeHolder":"Defaults to web map snippet",
               "label":"Subtitle:",
               "fieldName":"subtitle",
               "type":"string",
               "tooltip":"Defaults to web map snippet"
            },
            {  
               "label":"Custom logo:",
               "fieldName":"logo",
               "type":"string",
               "tooltip":"Optional logo to display"
            },
            {  
               "label":"Logo link",
               "fieldName":"logoLink",
               "type":"string",
               "tooltip":"Url to navigate to when logo is clicked"
            },
            {  
               "type":"string",
               "fieldName":"headerHeight",
               "placeHolder":"115",
               "label":"Header height",
               "tooltip":"Defaults to 115 pixels - resize to fit your content."
            }
         ]
      },
      {  
         "category":"Color Theme",
         "fields":[  
            {  
               "type":"paragraph",
               "value":"Define a custom color scheme for the application."
            },
            {  
               "type":"color",
               "fieldName":"background",
               "tooltip":"Choose a header background color",
               "label":"Header background color"
            },
            {  
               "type":"color",
               "fieldName":"color",
               "tooltip":"Choose a text color",
               "label":"Header text color"
            },
            {  
               "type":"color",
               "fieldName":"legendTitleBackground",
               "label":"Legend header color",
               "tooltip":"Choose a color for the clickable legend header"
            }
         ]
      },
      {  
         "category":"Optional Tools",
         "fields":[  
            {
               "type":"boolean",
               "fieldName": "legend",
               "label": "Legend"
            },{
               "type": "boolean",
               "fieldName": "scalebar",
               "label": "Scalebar"
            }
         ]
      }, {  
         "category":"Search Settings",
         "fields":[  
            {
               "type":"paragraph",
               "value": "Enable search to allow users to find a location or data in the map. Configure the search settings to refine the experience in your app by setting the default search resource, placeholder text, etc."
            },
            {  
               "type":"boolean",
               "fieldName":"search",
               "label":"Enable search tool"
            },{
               "type": "search",
               "fieldName":"searchConfig",
               "label": "Configure search tool"
            }
         ]
      }
   ],
   "values":{  
      "background": "#444",
      "color": "#fff",
      "legendTitleBackground": "#848484",
      "showTitle": true,
      "showSubTitle": true,
      "legend": true,
      "scalebar": true,
      "search": false
   }
}
