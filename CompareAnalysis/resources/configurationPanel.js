{
    "configurationSettings": [ {
         "category": "Subscriber Content",
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
                    "selection": "multiple"
                },{
                    "type":"boolean",
                    "fieldName": "auto_sync",
                    "label": "Auto sync maps",
                    "tooltip": "When true maps will be synced to the extent of the first map."
                }
            ]
        },{
            "category": "Search Settings",
            "fields":[
                {
                    "type": "boolean",
                    "fieldName": "search",
                    "label": "Place search",
                    "tooltip": "Add location search tool"
                },{
                    "type":"boolean",
                    "fieldName": "searchExtent",
                    "label": "Display search results in current extent"
                }

            ]
        },
        {
            "category": "<b>Side Panel Settings</b>",
            "fields": [
                {
                    "type":"paragraph",
                    "value": "Uncheck the 'Include side panel' box to remove the side panel from the app. To hide the side panel on load uncheck the 'Show side panel' checkbox."
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
        "showTitleAndDescription": true,
        "auto_sync": true,
        "search": false,
        "searchExtent": true
    }
}
