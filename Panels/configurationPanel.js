{
    "configurationSettings": [{
        "category": "<b>Choose template theme</b>",
        "fields": [{
            "type": "string",
            "fieldName": "theme",
            "tooltip": "Color theme to use",
            "label": "Color Scheme:",
            "options": [{
                "label": "Chrome",
                "value": "chrome"
            },{
                "label": "Gray",
                "value": "gray"
            },{
                "label": "Seaside",
                "value": "seaside"
            }, {
                "label": "Pavement",
                "value": "pavement"
            }]
        }]
    },{
        "category": "<b>Header</b>",
        "fields": [
            {
                "type": "paragraph",
                "value": "Set to true to add a header section to the application. The header will display the specified title and subtitle. If title and subtitle and not specified the default webmap title and subtitle values will be used."
            },
            {
                "type": "boolean",
                "fieldName":"header",
                "label": "Show Header",
                "tooltip": "Add a header"

            },{
                "type": "string",
                "fieldName": "title",
                "label": "Title",
                "tooltip": "Enter title text"
            },{
                "type": "string",
                "fieldName": "subtitle",
                "label": "Subtitle",
                "tooltip": "Enter subtitle text"
            }
        ]
    },{
        "category": "<b>Footer</b>",
        "fields": [
            {
                "type": "paragraph",
                "value": "Set to true to add a footer to the application. The footer will display the text specified in the footer content field."
            },
            {
                "type": "boolean",
                "fieldName":"footer",
                "label": "Show Footer",
                "tooltip": "Add a footer"

            },{
                "type": "string",
                "fieldName": "footer_text",
                "label": "Footer content",
                "tooltip": "Enter content for the footer",
                "stringFieldOption": "richtext"
            }
        ]
    },{
        "category": "<b>Description</b>",
        "fields": [
            {
                "type": "paragraph",
                "value": "Set to true to add a panel to the right or left side of the map. This panel will display the content specified in the description content field. If no text is specified then the web map description will display."
            },
            {
                "type": "boolean",
                "fieldName":"description",
                "label": "Show Description Panel",
                "tooltip": "Add a side panel"

            },{
                "type": "options",
                "fieldName": "description_side",
                "label": "Panel Location",
                "options": [{
                    "label": "Left",
                    "value": "left"
                },{
                    "label": "Right",
                    "value": "right"
                }]
            },{
                "type": "string",
                "fieldName": "description_content",
                "label": "Description content",
                "tooltip": "Enter content for the description panel",
                "stringFieldOption": "richtext"
            }
        ]
    },{
        "category": "<b>Legend</b>",
        "fields": [
            {
                "type": "paragraph",
                "value": "Set to true to add a panel to the right or left side of the map. This panel will display a legend for the map."
            },
            {
                "type": "boolean",
                "fieldName":"legend",
                "label": "Show Legend Panel",
                "tooltip": "Add a side panel"

            },{
                "type": "options",
                "fieldName": "legend_side",
                "label": "Panel Location",
                "options": [{
                    "label": "Right",
                    "value": "right"
                },{
                    "label": "Left",
                    "value": "left"
                }]
            }
        ]
    },{
        "category": "<b>Optional Widgets</b>",
        "fields": [
            {
                "type": "paragraph",
                "value": "Add one or more of the following widgets to the application."
            },
            {
                "type": "boolean",
                "fieldName":"home_button",
                "label": "Full extent button"

            },{
                "type": "boolean",
                "fieldName": "locate_button",
                "label": "Location button"
            },{
                "type": "boolean",
                "fieldName": "geocoder",
                "label": "Place search"

            },{
                "type": "options",
                "fieldName": "basemap_option",
                "label": "Basemap to switch between",
                "options":[{
                    "label": "Topographic",
                    "value": "topo"
                },{
                    "label": "Street",
                    "value": "street"
                },{
                    "label": "Satellite",
                    "value": "satellite"
                },{
                    "label": "Hybrid",
                    "value": "hybrid"
                },{
                    "label": "Gray",
                    "value": "gray"
                },{
                    "label": "Oceans",
                    "value": "oceans"
                },{
                    "label": "National Geographic",
                    "value": "national-geographic"
                },{
                    "label": "Open Street Map",
                    "value": "osm"
                }]
            }
        ]
    }
    ],
    "values": {
        "theme": "chrome",
        "header": false,
        "footer": false,
        "description": false,
        "description_side": "left",
        "legend": false,
        "legend_side": "left",
        "home_button": false,
        "locate_button": false,
        "geocoder": false
    }
}
