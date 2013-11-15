{
    "configurationSettings":[{
        "category":"General Settings",
        "fields":[{
            "type":"string",
            "fieldName":"serviceAreaLayerName",
            "label":"Lookup Layer Name",
            "tooltip":"Polygon Layer used for service lookup"
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
        "serviceAreaLayerName": "ServiceArea",
        "serviceUnavailableTitle":"Service Unavailable",
        "serviceUnavailableMessage":"Thank you for your interest in service!  The selected location is not within the service area. We apologize for the inconvenience. If you have any questions or comments, please contact us at 555-5555 or by email at email@email.com",
        "storeLocation": true,
        "serviceRequestLayerName": "Request Tracking",
        "serviceRequestLayerAvailibiltyField": "REQSTATUS",
        "serviceRequestLayerAvailibiltyFieldValueAvail":"Intersected",
        "serviceRequestLayerAvailibiltyFieldValueNotAvail": "Not Intersected"

    }
}