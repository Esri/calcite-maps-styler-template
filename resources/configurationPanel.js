{
    "configurationSettings": [
            {
            "category": "Map",
                "fields": [{
                  "type": "webmap"
                }, {
                  "type": "appproxies"
                }]
            },
            {
            "category": "About",
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
                    "label": "Subtitle (Optional - Add secondary text or a call-to-action to help users take the next step)",
                    "placeHolder": "e.g. Explore population, age and income",
                    "tooltip": "Provide some additional information for users or a call-to-action. What should they do next?"
                },
                {
                    "type": "string",
                    "fieldName": "abouttext",
                    "label": "About Panel (Provide a little background about your app or your organization)",
                    "tooltip": "",
                    "stringFieldOption": "richtext",
                    "placeHolder": "Tell everyone a little about your app. Add text, logo and contact information if applicable. This info will appear in the About panel."
                },
                {
                     "type": "boolean",
                     "fieldName": "aboutsummary",
                     "label": "Add item Summary to the About panel",
                     "tooltip": "Append the webmap or webscene Summary to the text in the About panel"
                },
                {
                     "type": "boolean",
                     "fieldName": "aboutdescription",
                     "label": "Add item Description to the About panel",
                     "tooltip": "Append the webmap or webscene Description to the text in the About panel"
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
                        },
                           {
                            "label": "Custom",
                            "value": "custom"
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
                            "label": "Light",
                            "value": "light"
                        },
                        {
                            "label": "Dark",
                            "value": "dark"
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
            "category": "Navbar",
            "fields": [
              {
                    "type": "options",
                    "fieldName": "layout",
                    "tooltip": "Set the location of the title bar. Position at the top to make the title stand our more. Position at the bottom to encourage users to interact with the map.",
                    "label": "Navbar:",
                    "options": [
                        {
                            "label": "Top",
                            "value": "top"
                        },
                        {
                            "label": "Top Large",
                            "value": "top-large"
                        },
                        {
                            "label": "Bottom",
                            "value": "bottom"
                        },
                        {
                            "label": "Bottom Large",
                            "value": "bottom-large"
                        }

                    ]
                },
                {
                    "type": "options",
                    "fieldName": "menustyledrawer",
                    "tooltip": "Show the main menu as a full sliding drawer",
                    "label": "Menu:",
                    "options": [
                        {
                            "label": "Default",
                            "value": ""
                        },
                        {
                            "label": "Drawer",
                            "value": "drawer"
                        }
                    ]
                }
            ]
        },
        {
            "category": "Panels",
            "fields": [
                {
                    "type": "boolean",
                    "fieldName": "menuabout",
                    "tooltip": "Show menu and panel for About information",
                    "label": "About"
                },
                {
                    "type": "boolean",
                    "fieldName": "menulegend",
                    "tooltip": "Show menu and panel for legend",
                    "label": "Legend"
                },
                {
                    "type": "boolean",
                    "fieldName": "menubasemaps",
                    "tooltip": "Show menu and panel for basemaps",
                    "label": "Basemaps"
                },
                {
                    "type": "boolean",
                    "fieldName": "menuslides",
                    "tooltip": "Show menu and panel for slides",
                    "label": "Slide Show"
                },
                {
                    "type": "boolean",
                    "fieldName": "menutogglenav",
                    "tooltip": "Show a menu item that can show and hide the title bar",
                    "label": "Full Map"
                },
                {
                    "type": "options",
                    "fieldName": "activepanel",
                    "tooltip": "Select the panel to show when the app starts",
                    "label": "Active Panel:",
                    "options": [
                        {
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "About",
                            "value": "about"
                        },
                        {
                            "label": "Legend",
                            "value": "legend"
                        },
                        {
                            "label": "Basemaps",
                            "value": "basemaps"
                        },
                        {
                            "label": "Slides",
                            "value": "slides"
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
                    "fieldName": "widgetzoom",
                    "tooltip": "Zoom the map in or out.",
                    "label": "Zoom"
                },
                {
                    "type": "boolean",
                    "fieldName": "widgethome",
                    "tooltip": "Move map back to default position.",
                    "label": "Home"
                },
                {
                    "type": "boolean",
                    "fieldName": "widgetlocate",
                    "tooltip": "Move the map to your geolocation.",
                    "label": "Locate"
                },
                {
                    "type": "boolean",
                    "fieldName": "widgettrack",
                    "tooltip": "Continuously moves the map to your geolocation.",
                    "label": "Track"
                },
                {
                    "type": "boolean",
                    "fieldName": "widgetsearch",
                    "tooltip": "Show expanding search in nav.",
                    "label": "Search"
                },
                {
                    "type": "boolean",
                    "fieldName": "widgetbasemaptoggle",
                    "tooltip": "Show basemaptoggle on map.",
                    "label": "Basemap Toggle (For best results select Basemap Toggle OR Menu > Basemaps, not both.)"
                }, 
                {
                    "type": "options",
                    "fieldName": "nextbasemap",
                    "tooltip": "Select a basemap to toggle to.",
                    "label": "Select a second basemap to toggle to:",
                    "options": [
                        {
                            "label": "Streets",
                            "value": "streets"
                        },
                        {
                            "label": "Satellite",
                            "value": "satellite"
                        },
                        {
                            "label": "Hybrid",
                            "value": "hybrid"
                        },
                        {
                            "label": "Topography",
                            "value": "topo"
                        },
                        {
                            "label": "Gray",
                            "value": "gray"
                        },
                        {
                            "label": "Dark Gray",
                            "value": "dark-gray"
                        },
                        {
                            "label": "Oceans",
                            "value": "oceans"
                        },
                        {
                            "label": "National Geographic",
                            "value": "national-geographic"
                        },
                        {
                            "label": "Streets Vector",
                            "value": "streets-vector"
                        },
                        {
                            "label": "Gray Vector",
                            "value": "gray-vector"
                        },
                        {
                            "label": "Dark Gray Vector",
                            "value": "dark-gray-vector"
                        },
                        {
                            "label": "Topo Vector",
                            "value": "topo-vector"
                        },
                        {
                            "label": "Streets Relief Vector",
                            "value": "streets-relief-vector"
                        },
                        {
                            "label": "Streets Navigation Vector",
                            "value": "streets-navigation-vector"
                        },
                        {
                            "label": "Streets Night Vector",
                            "value": "streets-night-vector"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgetslayout",
                    "tooltip": "Set the location of the widgets on the map.",
                    "label": "Position Sets:",
                    "options": [
                        {
                            "label": "Top Left",
                            "value": "top-left"
                        },
                        {
                            "label": "Top Right",
                            "value": "top-right"
                        },
                        {
                            "label": "Bottom Left",
                            "value": "bottom-left"
                        },
                        {
                            "label": "Bottom Right",
                            "value": "bottom-right"
                        }

                    ]
                }
            ]
        }
    ],
    "values": {
        "title": "",
        "subtitle": "",
        "abouttext": "",
        "aboutsummary": true,
        "aboutdescription": false,
        "theme": "",
        "bgcolor": "",
        "opacity": 1,
        "textcolor": "",
        "widgettheme": "light",
        "layout": "top",
        "widgetslayout": "top-left",
        "panelslayout": "right",
        "menuabout": true,
        "menulegend": true,
        "menubasemaps": true,
        "menuslides": true,
        "menutogglenav": true,
        "menustyledrawer": "",
        "widgetzoom": true,
        "widgethome": true,
        "widgetlocate": true,
        "widgettrack": false,
        "widgetsearch": true,
        "widgetbasemaptoggle": false,
        "widgetnextbasemap": "imagery",
        "activepanel": "about"
    }
}