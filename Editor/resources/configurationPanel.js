{  
   "configurationSettings":[
      {  
         "category":"<b>App Settings</b>",
         "fields":[ 
            {
               "type": "appproxies"
            }, 
            {  
               "type":"webmap"
            },
            {  
               "placeHolder":"Defaults to web map title",
               "label":"Title:",
               "fieldName":"title",
               "type":"string",
               "tooltip":"Defaults to web map title"
            }
         ]
      },{
         "category": "Theme",
         "fields":[
            {  
               "type":"color",
               "fieldName":"theme",
               "tooltip":"Color theme to use",
               "label":"Color Theme:"
            },
            {  
               "type":"color",
               "fieldName":"color",
               "tooltip":"Title bar text color",
               "label":"Title Color:"
            }
         ]
      },{
         "category": "Search Settings",
         "fields":[
            {  
               "type":"boolean",
               "fieldName":"search",
               "label":"Enable search tool"
            },{
               "type":"search",
               "fieldName": "searchConfig",
               "label": "Configure search tool"
            }
         ]
      },
      {  
         "category":"Tools",
         "fields":[  
            {
               "type":"boolean",
               "fieldName":"edittoolbar",
               "label":"Display Edit Toolbar"
            },
           
            {
               "type": "paragraph",
               "value": "Enable the Locate Button to add a button to the map that allows users to identify thier current location. To track the users current location set Locate Button and Location Tracking to true."
            },
            {  
               "type":"boolean",
               "fieldName":"locate",
               "label":"Locate Button"
            },{
               "type": "boolean",
               "fieldName": "locatetrack",
               "label": "Location Tracking"
            },
            {  
               "type":"boolean",
               "fieldName":"home",
               "label":"Home Button"
            },
            {  
               "type":"boolean",
               "fieldName":"scale",
               "label":"Scalebar"
            },{
               "type": "paragraph",
               "value": "Enable the basemap toggle button. The button will use the web map's default basemap as the map main. Select an alternate basemap from the list to toggle."
            },{
               "type": "boolean",
               "fieldName": "basemap",
               "label": "Basemap Toggle"
            },{
               "type": "string",
               "fieldName": "alt_basemap",
               "tooltip": "Select the alternate basemap",
               "label": "Alternate Basmap",
               "options":[
                  {
                     "label": "Dark Gray",
                     "value": "dark-gray"
                  },{
                     "label": "Light Gray",
                     "value": "gray"
                  },{
                     "label": "Imagery with Labels",
                     "value": "hybrid"
                  },{
                     "label": "National Geographic",
                     "value": "national-geographic"
                  },{
                     "label": "Oceans",
                     "value": "oceans"
                  },{
                     "label": "Open Street Map",
                     "value": "osm"
                  },{
                     "label": "Imagery",
                     "value": "satellite"
                  },{
                     "label": "Streets",
                     "value": "streets"
                  },{
                     "label": "Terrain with Labels",
                     "value": "terrain"
                  },{
                     "label": "Topographic",
                     "value": "topo"
                  }
               ]
            }
         ]
      }
   ],
   "values":{  
      "color":"#4c4c4c",
      "theme":"#f7f8f8",
      "scale":true,
      "home":true,
      "edittoolbar": false,
      "locate":false,
      "locatetrack": false,
      "search":true,
      "basemap": false,
      "alt_basemap": "satellite"
   }
}
