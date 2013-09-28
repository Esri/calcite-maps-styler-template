{
   "configurationSettings":[
      {
         "category":"General Settings",
         "fields":[
            {
               "type":"string",
               "fieldName":"webmap",
               "label":"Web Map Id",
               "tooltip":"The id of the web map"
            },
            {
               "type":"string",
               "fieldName":"bingmapskey",
               "label":"Bings Map Key",
               "tooltip":"The Bings Map key"
            },
            {
               "type":"options",
               "fieldName":"scalebarUnits",
               "label":"Scalebar Units",
               "tooltip":"Scalebar and Elevation Profile Units",
               "options":[
                  {
                     "label":"METRIC (Kilometes / Meters)",
                     "value":"metric"
                  },
                  {
                     "label":"ENGLISH (Miles / Feet)",
                     "value":"english"
                  }
               ]
            }
         ]
      },
      {
         "category":"Elevations SOE",
         "fields":[
            {
               "type":"string",
               "fieldName":"soeMapServiceUrl",
               "label":"Url",
               "tooltip":"Url of the map service"
            },
            {
               "type":"string",
               "fieldName":"soeName",
               "label":"Name",
               "tooltip":"Name of the SOE"
            },
            {
               "type":"number",
               "fieldName":"soeResourceIndex",
               "label":"Resource Index",
               "tooltip":"Map service resource index"
            }
         ]
      }
   ],
   "values":{
      "webmap":"2681eac657594e608945ea5bd6aa2a36",
      "bingmapskey":null,
      "scalebarUnits":"metric",
      "soeMapServiceUrl":"http://talus:6080/arcgis/rest/services/Elevations/GlobalElevation/MapServer",
      "soeName":"ElevationsSOE_JAVA",
      "soeResourceIndex":0
   }
}