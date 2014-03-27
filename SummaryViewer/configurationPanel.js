{
    "configurationSettings": [
        {
        "category": "<b>General Settings</b>",
        "fields": [
            {
                "type": "string",
                "fieldName": "title",
                "label": "Title",
                "tooltip": "Title",
                "placeHolder": "Title"
            }, 
            {
                "type": "string",
                "fieldName": "logo",
                "label": "Logo URL",
                "tooltip": "Logo",
                "placeHolder": "Logo URL"
            }, 
            {
               "type":"color",
               "fieldName":"color",
               "label":"Color",
               "tooltip":"Color"
            },
            {
               "type": "string",
               "fieldName": "summaryLayer",
               "label": "Summary Layer",
               "tooltip": "Layer that will be summarized",
               "placeHolder": "Layer Name"
            },
            {
               "type": "string",
               "fieldName": "filterField",
               "label": "Filter Field",
               "tooltip": "Field used to filter features",
               "placeHolder": "Field Name"
            },
            {
               "type": "string",
               "fieldName": "sumFields",
               "label": "Summary Fields",
               "tooltip": "List of fields where the sum will be displayed",
               "placeHolder": "Field_1,Field_2"
            },
            {
               "type": "string",
               "fieldName": "avgFields",
               "label": "Average Fields",
               "tooltip": "List of fields where the average value will be displayed",
               "placeHolder": "Field_1,Field_2"
            },
            {
               "type": "string",
               "fieldName": "minFields",
               "label": "Minimum Fields",
               "tooltip": "List of fields where the minimum value will be displayed",
               "placeHolder": "Field_1,Field_2"
            },
            {
               "type": "string",
               "fieldName": "maxFields",
               "label": "Maximum Fields",
               "tooltip": "List of fields where the maximum value will be displayed",
               "placeHolder": "Field_1,Field_2"
            },
            {
               "type": "boolean",
               "fieldName": "cluster",
               "label": "Cluster Summary Layer",
               "tooltip": "Summary layer points will be displayed as clusters"
            },
        ]
    }],
    "values": {
        "title": "",
        "logo": "images/logo.png",
        "color": "#80ab00",
        "cluster": true
    }
}