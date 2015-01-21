{  
   "configurationSettings":[  
      {  
         "category":"<b>Configure template</b>",
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
               "tooltip":"Title bar text color",
               "label":"Title Color:"
            },
            {  
               "type":"boolean",
               "fieldName":"edittoolbar",
               "label":"Display Edit Toolbar"
            }
         ]
      },
      {  
         "category":"Tools",
         "fields":[  
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
               "type":"boolean",
               "fieldName":"locate",
               "label":"Locate Button"
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
      "search":true,
      "searchExtent":false
   }
}