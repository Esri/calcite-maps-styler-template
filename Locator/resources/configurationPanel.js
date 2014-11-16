{
    "configurationSettings": [
        {
            "category": "<b>General Settings</b>",
            "fields": [
                {
                    "type": "webmap",
                    "label": "Select a map"
                },
                {
                    "type": "string",
                    "fieldName": "title",
                    "label": "Title",
                    "tooltip": "Title",
                    "placeHolder": "Title"
                },
                {
                    "type": "string",
                    "fieldName": "prompt",
                    "label": "Prompt for address search",
                    "tooltip": "Prompt for address search",
                    "placeHolder": "Enter address"
                },
                {
                    "type": "color",
                    "fieldName": "color",
                    "label": "Color",
                    "tooltip": "Color"
                },
                {
                    "type": "boolean",
                    "fieldName": "styleBasemap",
                    "label": "Display basemap in grayscale",
                    "tooltip": "Display basemap in grayscale"
                },
                {
                    "type": "layerAndFieldSelector",
                    "layerOptions": {
                        "supportedTypes": [
                            "FeatureLayer",
                            "FeatureCollection"
                        ],
                        "geometryTypes": [
                            "esriGeometryPoint",
                            "esriGeometryLine",
                            "esriGeometryPolygon"
                        ]
                    },
                    "fieldName": "destLayer",
                    "label": "Destination layer",
                    "tooltip": "Layer that will be used as destinations"
                },
                {
                    "type": "string",
                    "fieldName": "routeUtility",
                    "label": "Route utility item (with stored credentials)",
                    "tooltip": "URL to route utility item",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "View the <a  target=\"_blank\" href=\"\\apps\\Directions\\resources\\doc\\addpremiumservice.html\">Configure a premium service for anonymous access<\/a> help topic for more details" 
                }
            ]
        },
        {
            "category": "<b>Optional Destination Settings</b> (if no destination layer is specified)",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "destination",
                    "label": "Destination name",
                    "tooltip": "Destination name",
                    "placeHolder": ""
                },
                {
                    "type": "number",
                    "fieldName": "latitude",
                    "label": "Destination latitude",
                    "tooltip": "Destination latitude",
                    "placeHolder": ""
                },
                {
                    "type": "number",
                    "fieldName": "longitude",
                    "label": "Destination longitude",
                    "tooltip": "Destination longitude",
                    "placeHolder": ""
                },
                {
                    "type": "string",
                    "fieldName": "address",
                    "label": "Destination address (if destination latititude and longitude are not specified)",
                    "tooltip": "Destination address",
                    "placeHolder": ""
                }
            ]
        }
    ],
    "values": {
        "title": "",
        "prompt": "Enter address",
        "color": "#80ab00",
        "styleBasemap": true
    }
}