
{
   "configurationSettings":[
      {
         "category":"<b>General Settings</b>",
         "fields":[
         	{
         		"type":"webmap",
         		"label":"Select a map"
         	},
            {
               "type":"string",
               "fieldName":"title",
               "label":"Title",
               "tooltip":"Title",
               "placeHolder":"Title"
            },
            {
               "type":"string",
               "fieldName":"logo",
               "label":"Logo URL",
               "tooltip":"Logo",
               "placeHolder":"Logo URL"
            },
            {
               "type":"color",
               "fieldName":"color",
               "label":"Color",
               "tooltip":"Color"
            },
            {
               "type":"layerAndFieldSelector",
               "fields":[ 
                    {
                        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeString"],
                        "multipleSelection": false,
                        "fieldName": "filterField",
                        "label": "Field to filter features",
                        "tooltip":"Field used to filter features"

                    },{
                        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                        "multipleSelection": true,
                        "fieldName": "sumFields",
                        "label": "Summary fields",
                        "tooltip": "List of numeric fields where the sum will be displayed"

                    },
                    {
                        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                        "multipleSelection": true,
                        "fieldName": "avgFields",
                        "label": "Average fields",
                        "tooltip": "List of numeric fields where the average value will be displayed"

                    },
                    {
                        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                        "multipleSelection": true,
                        "fieldName": "minFields",
                        "label": "Minimum fields",
                        "tooltip": "List of numeric fields where the minimum value will be displayed"

                    },
                    {
                        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                        "multipleSelection": true,
                        "fieldName": "maxFields",
                        "label": "Maximum fields",
                        "tooltip": "List of numeric fields where the maximum value will be displayed"

                    }  
                  ],
               "layerOptions":{
                  "supportedTypes":[
                     "FeatureLayer"
                  ],      
                  "geometryTypes":[
                     "esriGeometryPoint",
                     "esriGeometryLine",
                     "esriGeometryPolygon"
                  ]
               },
               "fieldName":"summaryLayer",
               "label":"Summary layer",
               "tooltip": "Layer that will be summarized"
            },
            {
               "type":"boolean",
               "fieldName":"cluster",
               "label":"Display summary as clusters ",
               "tooltip":"Summary layer points will be displayed as clusters"
            }
         ]
      }
   ],
   "values":{
      "title":"",
      "logo":"images/logo.png",
      "color":"#80ab00",
      "cluster":true
   }
}
