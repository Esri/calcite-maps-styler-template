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
               "placeHolder":"Defaults to map title",
               "label":"Title:",
               "fieldName":"title",
               "type":"string",
               "tooltip":"Defaults to map title"
            },{  
               "type":"boolean",
               "fieldName":"showSubTitle",
               "label":"Display subtitle"
            },{  
               "placeHolder":"Defaults to map summary",
               "label":"Subtitle:",
               "fieldName":"subtitle",
               "type":"string",
               "tooltip":"Defaults to map summary"
            },
            {  
               "type":"string",
               "fieldName":"headerHeight",
               "placeHolder":"115",
               "label":"Header height",
               "tooltip":"Defaults to 115 pixels - resize to fit your content."
            }
         ]
      },{
         "category": "Header Logo and links",
         "fields": [
            {
               "type": "boolean", 
               "fieldName": "showLogo",
               "label": "Show logo"
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
            },{
               "type": "boolean",
               "fieldName": "showSocialIcons",
               "label": "Show Sharing Icons"
            },{
               "type": "boolean",
               "fieldName": "showSocialText",
               "label": "Show header link"
            },{
               "type": "string",
               "fieldName": "socialText",
               "label": "Header text",
               "placeHolder": "A story map"
            },{
               "type": "string",
               "fieldName": "socialLink",
               "label": "Header link",
               "tooltip": "Url to navigate to when text is clicked"
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
               "tooltip":"Title text color",
               "label":"Title text color"
            },{
               "type": "color",
               "fieldName": "subtitleColor",
               "tooltip": "Summary text color",
               "label": "Summary text color"
            },
            {  
               "type":"color",
               "fieldName":"legendTitleBackground",
               "label":"Legend header color",
               "tooltip":"Choose a background color for the clickable legend header"
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
      "showSocialIcons": true,
      "showLogo": true,
      "showTitle": true,
      "showSubTitle": true,
      "showSocialText": true,
      "subtitleColor": "#CECECE",
      "legend": true,
      "scalebar": true,
      "search": false
   }
}
