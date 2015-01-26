{  
   "configurationSettings":[  
      {  
         "category":"<b>Map Settings</b>",
         "fields":[  
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
               "type":"paragraph",
               "value":"Select search layers and fields. These layers will appear in the search tool allowing application users to search for particular values in the specified layers and fields."
            },
            {  
               "label":"Select layers and fields",
               "fieldName":"searchLayers",
               "type":"multilayerandfieldselector",
               "tooltip":"Select layer and fields to search",
               "layerOptions":{  
                  "supportedTypes":[  
                     "FeatureLayer"
                  ],
                  "geometryTypes":[  
                     "esriGeometryPoint",
                     "esriGeometryLine",
                     "esriGeometryPolyline",
                     "esriGeometryPolygon"
                  ]
               },
               "fieldOptions":{  
                  "supportedTypes":[  
                     "esriFieldTypeString"
                  ]
               }
            },
            {  
               "type":"boolean",
               "fieldName":"search",
               "label":"Address Finder"
            },
            {  
               "type":"boolean",
               "fieldName":"searchExtent",
               "label":"Prioritize search results in current extent."
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
            }
         ]
      }
   ],
   "values":{  
      "color":"#4c4c4c",
      "theme":"#f7f8f8",
      "scale":true,
      "home":true,
      "locate":false,
      "locatetrack": false,
      "search":true,
      "searchExtent":false
   }
}