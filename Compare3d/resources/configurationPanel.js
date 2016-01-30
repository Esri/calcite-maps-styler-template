{
    "configurationSettings": [
        {
            "category": "App Settings",
            "fields": [
                {
                "type": "appproxies"
                },
                {
                    "type": "webscene",
                    "selection": "multiple"
                }
            ]
        },{
            "category": "View Settings",
            "fields":[
              {
                  "type":"boolean",
                  "fieldName": "link",
                  "label": "Link Views",
                  "tooltip": "When true view extents linked at start"
              },{
                    "type":"boolean",
                    "fieldName": "panelsOpen",
                    "label": "Open info panels at start"
                }

            ]
        },
        {
            "category": "Color Theme",
            "fields": [
              {
                  "type": "color",
                  "fieldName": "backgroundColor",
                  "tooltip": "Background color",
                  "label": "Background color:"
              },
              {
                  "type": "color",
                  "fieldName": "textColor",
                  "tooltip": "Text color",
                  "label": "Text color:"
              },{
                "type": "color",
                "fieldName": "slideColorTheme",
                "tooltip": "Slide gallery color theme",
                "label": "Slide gallery color theme"
              }
            ]
        }
    ],
    "values": {
        "link": true,
        "panelsOpen": false,
        "color": "#fff",
        "backgroundColor": "#333",
        "slideColorTheme": "#05668D"
    }
}
