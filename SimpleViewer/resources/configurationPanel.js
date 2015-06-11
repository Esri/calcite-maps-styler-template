{
    "configurationSettings": [{
         "category": "Premium Content",
         "fields": [
            {
               "type": "appproxies"
            }
         ]
         },{
        "category": "<b>App settings</b>",
        "fields": [{
            "type": "webmap"
        },{
            "placeHolder": "Defaults to web map title",
            "label": "Title:",
            "fieldName": "title",
            "type": "string",
            "tooltip": "Defaults to web map title"
        }, 
        {
               "type":"string",
               "fieldName":"about",
               "label":"Description",
               "tooltip":"Enter content for the description panel",
               "stringFieldOption":"richtext"
            }
    ]
    },{
      "category": "Theme",
      "fields":[
      {
            "type": "color",
            "fieldName": "theme",
            "tooltip": "Color theme to use",
            "label": "Color Theme:"
        },{
            "type": "color",
            "fieldName": "color",
            "tooltip": "Text color",
            "label": "Text Color:"
        },{
            "type": "color",
            "fieldName": "paneltheme",
            "tooltip": "Color theme for the drawer",
            "label": "Drawer Title Theme:"
        }

      ]
    },{
      "category": "Search Settings",
      "fields":[
            {
                "type": "boolean",
                "fieldName": "search",
                "label": "Enable search tool"
            },{
              "type": "search",
              "fieldName": "searchConfig",
              "label": "Configure search tool"
            }
      ]
    },{
        "category": "Tools",
        "fields":[
            {
                "type": "boolean",
                "fieldName": "locate",
                "label": "Find Location"
            },{
                "type": "boolean",
                "fieldName": "home",
                "label": "Home Extent Button"
            }
        ]

    },{
         "category": "Custom URL Parameter",
         "fields": [
            {
               "type": "paragraph",
               "value": "Setup the app to support a custom url parameter. For example if your map contains a feature layer with parcel information and you'd like to be able to find parcels using a url parameter you can use this section to do so. Select a layer and search field then define the name of a custom param. Once you've defined these values you can append the custom search to your application url using the custom parameter name you define. For example, if I set the custom param value to parcels a custom url would look like this index.html?parcel=3045"
            },{
               "placeHolder":"i.e. parcels",
               "label":"URL param name:",
               "fieldName":"customUrlParam",
               "type":"string",
               "tooltip":"Custom URL param name"
            },{  
               "type":"layerAndFieldSelector",
               "fieldName":"customUrlLayer",
               "label":"Layer to search for custom url param value",
               "tooltip":"Url param search layer",
               "fields":[  
                  {  
                     "supportedTypes":[  
                        "esriFieldTypeString"
                     ],
                     "multipleSelection":false,
                     "fieldName":"urlField",
                     "label":"URL param search field",
                     "tooltip":"URL param search field"
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
               }
            }

         ]
      }],
    "values": {
        "search": true,
        "locate": true,
        "color": "#2f4f4f",
        "theme": "#949494",
        "paneltheme": "#ededed"

    }
}
