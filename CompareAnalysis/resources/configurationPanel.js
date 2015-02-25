{
    "configurationSettings": [
        {
            "category": "<b>Map Settings</b>",
            "fields": [
                {
                    "type": "webmap",
                    "selection": "multiple"
                }
            ]
        },
        {
            "category": "<b>Side Panel Settings</b>",
            "fields": [
                {
                    "type":"paragraph",
                    "value": "Uncheck the 'Display side panel' box to remove the side panel from the app. To hide the side panel on load check the 'Hide side panel' checkbox."
                },
                {
                    "type":"boolean",
                    "fieldName":"showTitleAndDescription",
                    "label": "Include side panel"
                },
                {
                    "type":"boolean",
                    "fieldName":"openPanelOnLoad",
                    "label": "Show side panel"
                },
                {
                    "placeHolder": "Defaults to Compare Analysis",
                    "type": "string",
                    "fieldName": "title",
                    "label": "Title",
                    "tooltip": "Defaults to Compare Analysis"
                },
                {
                    "type": "string",
                    "fieldName": "description",
                    "label": "Details",
                    "placeHolder": "Provide a description for the application",
                    "tooltip": "Enter a description for the application",
                    "stringFieldOption": "richtext"
                }
            ]
        },
        {
            "category": "<b>Theme</b>",
            "fields": [
                {
                    "type": "color",
                    "fieldName": "theme_color",
                    "tooltip": "Text color",
                    "label": "Text color:"
                },
                {
                    "type": "color",
                    "fieldName": "theme_bg_color",
                    "tooltip": "Background color for panel",
                    "label": "Panel background color:"
                }

            ]
        },
        {
            "category": "<b>Optional Tools</b>",
            "fields": [
                {
                    "type": "boolean",
                    "fieldName": "home",
                    "label": "Home Extent Button"
                }
            ]
        }
    ],
    "values": {
        "home": true,
        "theme_color": "#575757",
        "theme_bg_color": "#fff",
        "openPanelOnLoad": true,
        "showTitleAndDescription": true
    }
}
