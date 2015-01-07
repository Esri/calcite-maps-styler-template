{
    "configurationSettings":[{
        "category":"General Settings",

        "fields":[
        {
            "type":"paragraph",
            "value": "<font size='3'><b>Solution Configurations</b></font><br /><font size='3'>------------------------------------</font><br /><font size='2'>To see this application configured for an industry, visit the following configurations on <a style='color: blue ! important' target='_blank' href='http://solutions.arcgis.com'>solutions.ArcGIS.com</a><br />&nbsp;-&nbsp;&nbsp;<a style='color: blue ! important' target='_blank' href='http://solutions.arcgis.com/utilities/electric/help/system-improvement/'>Electric System Improvement</a><br />&nbsp;-&nbsp;&nbsp;<a style='color: blue ! important' target='_blank' href='http://solutions.arcgis.com/utilities/water/help/sewer-service-lookup/'>Sewer Service Lookup</a><br />&nbsp;-&nbsp;&nbsp;<a style='color: blue ! important' target='_blank' href='http://solutions.arcgis.com/utilities/water/help/water-restrictions/'>Water Restrictions</a><br />&nbsp;-&nbsp;&nbsp;<a style='color: blue ! important' target='_blank' href='http://solutions.arcgis.com/utilities/gas/help/gas-service-lookup/'>Gas Service Lookup</a></font>"

        },
        {
            "type": "webmap",
            "label": "Select a map"
        },
        
        {
            "type":"string",
            "fieldName":"serviceAreaLayerNames",
            "label":"Lookup Layers",
            "tooltip":"Polygon Layers used for service lookup delimited by a vertical bar"
        }, 
        //{
        //        "label": "Lookup Layers",
        //        "fieldName": "serviceAreaLayerNamesSelector",
        //        "type": "multilayerandfieldselector",
        //        "tooltip": "Polygon Layers used for combined popup",
        //        "layerOptions": {
        //            "supportedTypes": ["FeatureLayer","FeatureCollection","DynamicLayer"],
        //            "geometryTypes": ["esriGeometryPolygon"]
        //        }
        //},
        {
            "type":"string",
            "fieldName":"popupTitle", 
            "label": "Popup Title",
            "tooltip": "Popup title when service information is available"
        },
        {
            "type":"number",
            "fieldName":"popupWidth", 
            "label": "Popup Width",
            "tooltip": "Popup dialog width",
            "constraints" :{"min":0,"places":0}
        },
        {
            "type":"number",
            "fieldName":"popupHeight", 
            "label": "Popup Max Height",
            "tooltip": "Popup dialog max height",
            "constraints" :{"min":0,"places":0}
        },
         
        {
            "type":"string",
            "fieldName":"serviceUnavailableTitle",
            "label":"Unavailable Popup Title:",
            "tooltip":"Popup title when outside an area"
        },
        {
            "type":"string",
            "fieldName":"serviceUnavailableMessage",
            "label":"Unavailable Popup Message",
            "tooltip":"Popup message when outside an area",
            "stringFieldOption": "richtext"
        },
       {
           "label": "Zoom level for location",
           "fieldName": "zoomLevel",
           "type": "number",
           "constraints": {"min": 0, "places": 0},
           "tooltip": "Sets the map zoom level to this level after location is entered"
       },
        {
            "type": "boolean",
            "fieldName": "storeLocation",
            "label": "Store location",
            "tooltip": "Check this to store the location in a layer in the webmap"
        },
        {
            "type":"layerAndFieldSelector",
            "fields":[ 
                    {
                        "supportedTypes": ["esriFieldTypeString"],
                        "multipleSelection": false,
                        "fieldName": "serviceRequestLayerAvailibiltyField",
                        "label": "Field used to store the Yes or No value",
                        "tooltip":"Field used to store the Yes or No value"

                    }
            ],
            "layerOptions":{
                "supportedTypes":[
                    "FeatureLayer"
                ],      
                "geometryTypes":[
                    "esriGeometryPoint"
                ]
            },
            "fieldName":"serviceRequestLayerName",
            "label":"Storage Layer Name",
            "tooltip":"Point layer used for to store request locations"
        },

        {
            "type":"string",
            "fieldName":"serviceRequestLayerAvailibiltyFieldValueAvail",
            "label":"Yes value",
            "tooltip":"Value to set when the request location intersects a lookup feature",
            "stringFieldOption": "text"
        },{
            "type":"string",
            "fieldName":"serviceRequestLayerAvailibiltyFieldValueNotAvail",
            "label":"No value",
            "tooltip":"Value to set when the request location does not intersects a lookup feature",
            "stringFieldOption": "text"
        },
        {
            "type": "boolean",
            "fieldName": "showSplash",
            "label": "Display Splash Screen on Startup",
            "tooltip": "Check on if you want to display a splash screen at startup"
        },
         {
             "type":"string",
             "fieldName":"splashText",
             "label":"Splash Screen message",
             "tooltip":"Message to display when application is loaded",
             "stringFieldOption": "richtext"
         },{
             "type":"string",
             "fieldName":"theme",
             "tooltip":"Color schema for the splash screen",
             "label":"Splash Screen Theme:",
             "options":[
                {
                    "label":"Black",
                    "value":"black"
                },
                {
                    "label":"Blue",
                    "value":"blue"
                }
             ]
         },
        {
            "type": "boolean",
            "fieldName": "basemapWidgetVisible",
            "label": "Show or hide the basemap selector button",
            "tooltip": "Check on if you want to display the basemap selector"
        }
        ]
    }],
    "values":{
        "serviceAreaLayerNames": "Service Area",
        "serviceAreaLayerNamesSelector": null,
        "popupTitle": "Service Information",
        "popupWidth": null,
        "popupHeight": null,
        "serviceUnavailableTitle": "Outside Utility Service Area",
        "serviceUnavailableMessage": "The utility does not provide service to the selected location",
        "zoomLevel": 16,
        "storeLocation": false,
        "serviceRequestLayerAvailibiltyFieldValueAvail": "Intersected",
        "serviceRequestLayerAvailibiltyFieldValueNotAvail": "Not Intersected",
        "showSplash": false,
        "splashText":"<center>Information Lookup is a configurable web application template that can be used to provide the general public, internal staff and other interested parties the with information about a location. If no features are found at that location, a general message is displayed. Optionally, the location entered can be stored in a point layer. The template can be configured using the ArcGIS Online Configuration dialog.</center>",
        "theme":"black",
        "basemapWidgetVisible": false
    }
}