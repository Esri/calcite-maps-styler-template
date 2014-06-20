{
    "configurationSettings": [{
        "category": "<b>Configure template</b>",
        "fields": [{
            "type": "webmap"
        },{
            "placeHolder": "Defaults to web map title",
            "label": "Title:",
            "fieldName": "title",
            "type": "string",
            "tooltip": "Defaults to web map title"
        }, {
            "type": "color",
            "fieldName": "theme",
            "tooltip": "Color theme to use",
            "label": "Color Theme:"
        },{
            "type": "color",
            "fieldName": "color",
            "tooltip": "Text color",
            "label": "Text Color:"
        },{
            "type": "color",
            "fieldName": "paneltheme",
            "tooltip": "Color theme for the drawer",
            "label": "Drawer Title Theme:"
        },
        {
               "type":"string",
               "fieldName":"about",
               "label":"Description",
               "tooltip":"Enter content for the description panel",
               "stringFieldOption":"richtext"
            }
    ]
    },{
        "category": "Tools",
        "fields":[
            {
                "type": "boolean",
                "fieldName": "search",
                "label": "Address Finder"
            },{
                "type": "boolean",
                "fieldName": "locate",
                "label": "Find Location"
            },{
                "type": "boolean",
                "fieldName": "home",
                "label": "Home Extent Button"
            }
        ]

    }],
    "values": {
        "search": true,
        "locate": true,
        "color": "#2f4f4f",
        "theme": "#949494",
        "paneltheme": "#ededed"

    }
}
