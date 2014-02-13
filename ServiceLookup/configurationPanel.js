{
    "configurationSettings":[{
        "category":"General Settings",

        "fields":[
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
        {
            "type":"string",
            "fieldName":"popupTitle", 
            "label": "Popup Title",
            "tooltip": "Popup title when service information is available"
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
            "type":"string",
            "fieldName":"serviceRequestLayerName",
            "label":"Storage Layer Name",
            "tooltip":"Point layer used for to store request locations",
            "stringFieldOption": "text"
        },
        {
            "type":"string",
            "fieldName":"serviceRequestLayerAvailibiltyField",
            "label":"Storage Layer Field",
            "tooltip":"Field used to store if the request intersected a lookup feature",
            "stringFieldOption": "text"
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
        }
        
        ]
    }],
    "values":{
         "serviceAreaLayerNames": "Service Area",
         "popupTitle": "Service Information",
         "serviceUnavailableTitle": "Outside Utility Service Area",
         "serviceUnavailableMessage": "The utility does not provide service to the selected location",
         "zoomLevel": 16,
         "storeLocation": false,
         "serviceRequestLayerName": "Request Tracking",
         "serviceRequestLayerAvailibiltyField": "REQSTATUS",
         "serviceRequestLayerAvailibiltyFieldValueAvail": "Intersected",
         "serviceRequestLayerAvailibiltyFieldValueNotAvail": "Not Intersected"
        

    }
}