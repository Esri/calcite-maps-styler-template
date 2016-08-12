{
    "configurationSettings": [
        {
            "category": "App",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "title",
                    "label": "Title (Provide a great name for your map app!)",
                    "placeHolder": "e.g. California Demographics",
                    "tooltip": "Provide a meaningful name to help users understand what the app is about."
                },
                {
                    "type": "string",
                    "fieldName": "subtitle",
                    "label": "Subtitle (Optional - Add some secondary text or a call-to-action to help users explore the app)",
                    "placeHolder": "e.g. Explore population, age and income",
                    "tooltip": "Provide some additional information for users or a call-to-action. What should they do next?"
                },
                {
                    "type": "string",
                    "fieldName": "about",
                    "label": "About (Provide a little background about the app or your organization)",
                    "tooltip": "",
                    "stringFieldOption": "richtext",
                    "placeHolder": "Tell everyone a little about your app. Add text, logo and contact information if applicable. This info will appear in the About panel."
                },
                {
                     "type": "boolean",
                     "fieldName": "showabout",
                     "label": "Show the About window when app starts",
                     "tooltip": "Show the about window when the app starts."
               }
            ]
        },
        {
            "category": "Colors",
            "fields": [
                {
                    "type": "options",
                    "fieldName": "theme",
                    "label": "Theme:",
                    "tooltip": "Select a base color for the entire app.",
                    "options": [
                        {
                            "label": "Light",
                            "value": "light"
                        }, 
                        {
                            "label": "Dark",
                            "value": "dark"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "bgcolor",
                    "label": "Background Color:",
                    "tooltip": "Select the background color for the main title bar.",
                    "options": [
                        {
                            "label": "Default",
                            "value": ""
                        },
                        {
                            "label": "Transparent",
                            "value": "transparent"
                        },
                        {
                            "label": "White",
                            "value": "white"
                        },
                        {
                            "label": "Light Grey",
                            "value": "light-grey"
                        },
                        {
                            "label": "Grey",
                            "value": "grey"
                        },
                        {
                            "label": "Dark Grey",
                            "value": "dark-grey"
                        },
                        {
                            "label": "Black",
                            "value": "black"
                        },
                        {
                            "label": "Blue",
                            "value": "dark-blue"
                        },
                        {
                            "label": "Purple",
                            "value": "dark-purple"
                        },
                        {
                            "label": "Green",
                            "value": "dark-green"
                        },
                        {
                            "label": "Orange",
                            "value": "dark-orange"
                        },
                        {
                            "label": "Brown",
                            "value": "dark-brown"
                        },
                        {
                            "label": "Red",
                            "value": "dark-red"
                        },
                        {
                            "label": "Yellow",
                            "value": "dark-yellow"
                        }
                    ]
                },
                {
                    "type": "color",
                    "fieldName": "bgcolor",
                    "label": "Background Color (custom):",
                    "tooltip": "Select a custom background color. NOTE: This will override the background color selected above."
                },
                { 
                     "type": "options",
                     "fieldName": "opacity",
                     "label": "Background Color Opacity:",
                     "tooltip": "Make the navbar background semi-transparent",
                      "options": [
                        {
                            "label": "1.0 (Solid)",
                            "value": 1
                        },
                        {
                            "label": ".75",
                            "value": 0.75
                        },
                        {
                            "label": ".5",
                            "value": 0.5
                        },
                        {
                            "label": ".25",
                            "value": 0.25
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "textcolor",
                    "label": "Text Color (optional):",
                    "tooltip": "Select the text color. Your selection will override the default.",
                    "options": [
                        {
                            "label": "Default",
                            "value": ""
                        },
                        {
                            "label": "Light",
                            "value": "light"
                        }, {
                            "label": "Dark",
                            "value": "dark"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgettheme",
                    "label": "Widget theme:",
                    "tooltip": "Select a base color for the widgets.",
                    "options": [
                        {
                            "label": "Light",
                            "value": "light"
                        }, 
                        {
                            "label": "Dark",
                            "value": "dark"
                        }
                    ]
                }
            ]
        },
        {
            "category": "Layout",
            "fields": [
              {
                    "type": "options",
                    "fieldName": "layout",
                    "tooltip": "Set the location of the title bar. Position at the top to make the title stand our more. Position at the bottom to encourage users to interact with the map.",
                    "label": "Navbar Position:",
                    "options": [
                        {
                            "label": "Top",
                            "value": "top"
                        },
                        {
                            "label": "Bottom",
                            "value": "bottom"
                        }

                    ]
              },
              {
                    "type": "options",
                    "fieldName": "navsize",
                    "tooltip": "Set the height of the title bar. Use Larger to emphasize the name of you map more.",
                    "label": "Navbar Size:",
                    "options": [
                        {
                            "label": "Standard",
                            "value": "standard"
                        },
                        {
                            "label": "Larger",
                            "value": "larger"
                        }
                    ]
                }
            ]
        },
        {
            "category": "Widgets",
            "fields": [
                {
                    "type": "boolean",
                    "fieldName": "search",
                    "tooltip": "Show expanding search in nav.",
                    "label": "Show search"
                }
            ]
        }
    ],
    "values": {
        "about": "",
        "showabout": false,
        "title": "",
        "subtitle": "",
        "theme": "light",
        "bgcolor": "dark-blue",
        "opacity": 1,
        "textcolor": "",
        "widgettheme": "dark",
        "all": false,
        "layout": "top",
        "navsize": "standard",
        "search": true
    }
}