{
    "configurationSettings": [{
        "category": "<b>Configure template</b>",
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
                "label": "Address Finder"
            },{
                "type": "boolean",
                "fieldName": "searchExtent",
                "label": "Search within current extent"
            },{
               "type":"paragraph",
               "value": "When Location Search is true the search widget will allow users to search for addresses and locations using one or more locators and also search the layers and fields specified in the Search Layers configuration option. Unchecking the Location Search option will remove the locator search and only configured search layers will be displayed."
            },{
               "type": "boolean",
               "fieldName": "locationSearch",
               "label": "Location Search"
            },{  
               "type":"paragraph",
               "value":"Select search layers and fields. These layers will appear in the search tool allowing application users to search for particular values in the specified layers and fields."
            },
            {
               "label": "Select layers and fields",
               "fieldName": "searchLayers",
               "type": "multilayerandfieldselector",
               "tooltip": "Select layer and fields to search",
               "layerOptions":{
                  "supportedTypes": ["FeatureLayer"],
                  "geometryTypes": ["esriGeometryPoint", "esriGeometryLine", "esriGeometryPolyline", "esriGeometryPolygon"]
               },
               "fieldOptions":{
                  "supportedTypes": ["esriFieldTypeString"]
               }
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

    }],
    "values": {
        "search": true,
        "searchExtent": true,
        "locationSearch": true,
        "locate": true,
        "color": "#2f4f4f",
        "theme": "#949494",
        "paneltheme": "#ededed"

    }
}
