{
   "configurationSettings":[
      {
         "category":"Map Settings",
         "fields":[
            {
               "type":"webmap",
               "label":"Select a map"
            },
            {
               "placeHolder":"Defaults to map title",
               "label":"Title Text:",
               "fieldName":"title",
               "type":"string",
               "tooltip":"Defaults to map title"
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
               "tooltip":"Text color",
               "label":"Text Color:"
            }
         ]
      },
      {
         "category":"Filter Options",
         "fields":[
            {
               "placeHolder":"Defaults to Apply",
               "label":"Filter button Text:",
               "fieldName":"button_text",
               "type":"string",
               "tooltip":"Enter button text"
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
            },
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
               "label":"Apply filters when app loads."
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
            }
         ]
      },{
         "category": "Search Settings",
         "fields": [
            {
               "type": "paragraph",
               "value": "Enable/disable the search tool and optionally select layers (and fields) to add to the search tool."
            },
            {  
               "label":"Select search layers and fields",
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
                     "esriFieldTypeString",                       
                     "esriFieldTypeDate",
                     "esriFieldTypeSmallInteger",
                     "esriFieldTypeInteger",
                     "esriFieldTypeSingle",
                     "esriFieldTypeDouble"
                  ]
               }
            },{  
               "type":"boolean",
               "fieldName":"search",
               "label":"Address Finder"
            },
            {  
               "type":"boolean",
               "fieldName":"searchExtent",
               "label":"Prioritize search results in current extent."
            },{
               "type":"paragraph",
               "value": "When Location Search is true the search widget will allow users to search for addresses and locations using one or more locators and also search the layers and fields specified in the Search Layers configuration option. Unchecking the Location Search option will remove the locator search and only configured search layers will be displayed."
            },{
               "type": "boolean",
               "fieldName": "locationSearch",
               "label": "Location Search"
            }
         ]
      }
   ],
   "values":{
      "home":true,
      "locate":true,
      "search":true,
      "locationSearch": true,
      "searchExtent": false,
      "color":"#fff",
      "theme":"#666",
      "filterDropdown":false,
      "filterOnLoad": true,
      "displayZoom": false,
      "displayClear": false

   }
}
