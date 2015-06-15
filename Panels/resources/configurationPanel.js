{
    "configurationSettings": [
        {
            "category": "Premium Content",
            "fields": [
                {
                    "type": "appproxies"
                }
            ]
        },
        {
            "category": "<b>App Settings</b>",
            "fields": [
                {
                    "type": "webmap",
                    "label": "Select a map"
                },
                {
                    "type": "boolean",
                    "fieldName": "home_button",
                    "label": "Full extent button"
                },
                {
                    "type": "boolean",
                    "fieldName": "locate_button",
                    "label": "Location button"
                }
            ]
        },
        {
            "category": "Color Scheme",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Choose from one of the predefined color themes or use the color pickers to define a custom color scheme."
                },
                {
                    "type": "string",
                    "fieldName": "theme",
                    "tooltip": "Color theme to use",
                    "label": "Color Scheme:",
                    "options": [
                        {
                            "label": "Chrome",
                            "value": "chrome"
                        },
                        {
                            "label": "Gray",
                            "value": "gray"
                        },
                        {
                            "label": "Seaside",
                            "value": "seaside"
                        },
                        {
                            "label": "Pavement",
                            "value": "pavement"
                        }
                    ]
                },
                {
                    "type": "color",
                    "fieldName": "panelcolor",
                    "tooltip": "Specify a color for the side panel background",
                    "label": "Side panel color"
                },
                {
                    "type": "color",
                    "fieldName": "backgroundcolor",
                    "tooltip": "Specify a color for the application background.",
                    "label": "Background color"
                },
                {
                    "type": "color",
                    "fieldName": "textcolor",
                    "tooltip": "Specify a color for the title and side panel text",
                    "label": "Text color"
                }
            ]
        },
        {
            "category": "Header",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Add a header section to the application. The header will display the specified title and subtitle. If title and subtitle and not specified the default webmap title and subtitle values will be used."
                },
                {
                    "type": "boolean",
                    "fieldName": "header",
                    "label": "Show Header",
                    "tooltip": "Add a header"
                },
                {
                    "type": "string",
                    "fieldName": "title",
                    "label": "Title",
                    "tooltip": "Enter title text"
                },
                {
                    "type": "string",
                    "fieldName": "subtitle",
                    "label": "Subtitle",
                    "tooltip": "Enter subtitle text"
                }
            ]
        },
        {
            "category": "Footer",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Add a footer section to the application. The footer will display the text specified in the footer content field."
                },
                {
                    "type": "boolean",
                    "fieldName": "footer",
                    "label": "Show Footer",
                    "tooltip": "Add a footer"
                },
                {
                    "type": "string",
                    "fieldName": "footer_text",
                    "label": "Footer content",
                    "tooltip": "Enter content for the footer",
                    "stringFieldOption": "richtext"
                }
            ]
        },
        {
            "category": "Description Panel",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Add a side panel that contains descriptive information to the application. This panel will display the content specified in the description content field. If no text is specified then the web map description will display."
                },
                {
                    "type": "boolean",
                    "fieldName": "description",
                    "label": "Show Description Panel",
                    "tooltip": "Add a side panel"
                },
                {
                    "type": "options",
                    "fieldName": "description_side",
                    "label": "Panel Location",
                    "options": [
                        {
                            "label": "Left",
                            "value": "left"
                        },
                        {
                            "label": "Right",
                            "value": "right"
                        }
                    ]
                },
                {
                    "type": "string",
                    "fieldName": "description_content",
                    "label": "Description content",
                    "tooltip": "Enter content for the description panel",
                    "stringFieldOption": "richtext"
                }
            ]
        },
        {
            "category": "Legend Panel",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Add a side panel that displays a legend to the map."
                },
                {
                    "type": "boolean",
                    "fieldName": "legend",
                    "label": "Show Legend Panel",
                    "tooltip": "Add a side panel"
                },
                {
                    "type": "options",
                    "fieldName": "legend_side",
                    "label": "Panel Location",
                    "options": [
                        {
                            "label": "Right",
                            "value": "right"
                        },
                        {
                            "label": "Left",
                            "value": "left"
                        }
                    ]
                }
            ]
        },
        {
            "category": "<b>Search Settings</b>",
            "fields": [
                {
                    "type": "boolean",
                    "fieldName": "geocoder",
                    "label": "Enable search tool"
                },
                {
                    "type": "search",
                    "fieldName": "searchConfig",
                    "label": "Configure search tool"
                }
            ],
            "values": {
                "theme": "chrome",
                "header": true,
                "footer": false,
                "description": true,
                "description_side": "left",
                "legend": false,
                "legend_side": "right",
                "home_button": true,
                "locate_button": true,
                "geocoder": true
            }
        }
    ]
}
