{
    "configurationSettings": [
            {
            "category": "1. About",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "title",
                    "label": "Title (Provide a great name for your mapping app!)",
                    "placeHolder": "e.g. California Demographics",
                    "tooltip": "Provide a meaningful name to help users understand what the app is about. This uses the webmap or webscene name by default."
                },
                {
                    "type": "string",
                    "fieldName": "subtitle",
                    "label": "Subtitle (Add secondary text to help users know what to do next - opitonal)",
                    "placeHolder": "e.g. Explore population, age and income",
                    "tooltip": "Provide some additional information for users or a call-to-action to help them take the next step. What should they do next?"
                },
                {
                    "type": "string",
                    "fieldName": "abouttext",
                    "label": "About Panel (Provide a little background about your app or your organization - opitonal)",
                    "tooltip": "",
                    "stringFieldOption": "richtext",
                    "placeHolder": "Tell everyone a little about your app. Add text, logo and contact information if applicable. This info will appear in the About panel."
                },
                {
                     "type": "boolean",
                     "fieldName": "aboutsummary",
                     "label": "Add item Summary to the About panel (optional)",
                     "tooltip": "Append the webmap or webscene Summary to the text in the About panel"
                },
                {
                     "type": "boolean",
                     "fieldName": "aboutdescription",
                     "label": "Add item Description to the About panel (optional)",
                     "tooltip": "Append the webmap or webscene Description to the text in the About panel"
                }
            ]
        },
        {
            "category": "2. Colors",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Select the application and widget base colors:"
                },
                {
                    "type": "options",
                    "fieldName": "theme",
                    "label": "App Theme",
                    "tooltip": "Select a base color for the entire app (navbar and panel).",
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
                    "fieldName": "widgettheme",
                    "label": "Widget Theme",
                    "tooltip": "Set the color for the widget and popup.",
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
                    "type": "paragraph",
                    "value": "<br><hr>"
                },
                {
                    "type": "paragraph",
                    "value": "<b>Color Override (optional)</b>"
                },
                {
                    "type": "paragraph",
                    "value": "Select a custom color for the navbar:"
                },
                {
                    "type": "options",
                    "fieldName": "bgcolor",
                    "label": "Color",
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
                    "label": "Color (custom)",
                    "tooltip": "Select a custom background color. NOTE: This will override the background color selected above."
                },
                { 
                     "type": "options",
                     "fieldName": "opacity",
                     "label": "Opacity",
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
                    "type": "paragraph",
                    "value": "&nbsp;"
                },
                {
                     "type": "boolean",
                     "fieldName": "themecustom",
                     "label": "Apply color to panels",
                     "tooltip": "Overrides the default theme and applies your color to the panels"
                },
                {
                    "type": "paragraph",
                    "value": "<br><hr>"
                },
                {
                    "type": "paragraph",
                    "value": "<b>Text Color Override (optional)</b>"
                },
                                {
                    "type": "paragraph",
                    "value": "Override the text color:"
                },
                {
                    "type": "options",
                    "fieldName": "textcolor",
                    "label": "Color",
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
                }
            ]
        },
        {
            "category": "3. Navbar",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Set the location of the navbar and the style of the dropdown menu:"
                },
                {
                    "type": "options",
                    "fieldName": "layout",
                    "tooltip": "Set the location of the title bar. Position at the top to make the title stand our more. Position at the bottom to encourage users to interact with the map.",
                    "label": "Position/Size",
                    "options": [
                        {
                            "label": "Top Small",
                            "value": "top-small"
                        },
                        {
                            "label": "Top Medium",
                            "value": "top-medium"
                        },
                        {
                            "label": "Top Large",
                            "value": "top-large"
                        },
                        {
                            "label": "Bottom Small",
                            "value": "bottom-small"
                        },
                        {
                            "label": "Bottom Medium",
                            "value": "bottom-medium"
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
                    "label": "Dropdown Menu Style",
                    "options": [
                        {
                            "label": "Popup",
                            "value": false
                        },
                        {
                            "label": "Drawer",
                            "value": true
                        }
                    ]
                }
            ]
        },
        {
            "category": "4. Panels",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Select the menus and panels to include:"
                },
                {
                    "type": "boolean",
                    "fieldName": "menuabout",
                    "tooltip": "Include menu and panel for About information",
                    "label": "About"
                },
                {
                    "type": "boolean",
                    "fieldName": "menulegend",
                    "tooltip": "Include menu and panel for legend",
                    "label": "Legend"
                },
                {
                    "type": "boolean",
                    "fieldName": "menubasemaps",
                    "tooltip": "Include menu and panel for basemaps",
                    "label": "Basemaps"
                },
                {
                    "type": "boolean",
                    "fieldName": "menuslides",
                    "tooltip": "Include menu and panel for slides/bookmarks. NOTE: Only applies to webmaps and webscenes that have slides and bookmarks previously saved.",
                    "label": "Slides/Bookmarks"
                },
                {
                    "type": "boolean",
                    "fieldName": "menushare",
                    "tooltip": "Include menu for sharing out your current map via URL.",
                    "label": "Share"
                },
                {
                    "type": "boolean",
                    "fieldName": "menutogglenav",
                    "tooltip": "Include a menu item that can show and hide the title bar",
                    "label": "Full Map Toggle"
                },
                {
                    "type": "options",
                    "fieldName": "activepanel",
                    "tooltip": "Select the panel to show when the app starts",
                    "label": "Show this panel at start up:",
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
                            "label": "Slides/Bookmarks",
                            "value": "slides"
                        }
                    ]
                }

            ]
        },
        {
            "category": "5. Popup",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Set the behavior of the popup:"
                },
                {
                    "type": "options",
                    "fieldName": "dockposition",
                    "tooltip": "Set the docking position for the popup",
                    "label": "Docking Position",
                    "options": [
                        {
                            "label": "Top Left",
                            "value": "top-left"
                        },
                        {
                            "label": "Top Center",
                            "value": "top-center"
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
                            "label": "Bottom Center",
                            "value": "bottom-center"
                        },
                        {
                            "label": "Bottom Right",
                            "value": "bottom-right"
                        },
                        {
                            "label": "No Docking",
                            "value": "none"
                        }
                    ]
                }
            ]
        },
        {
            "category": "6. Widgets",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Choose a default layout for all of the widgets:"
                },
                {
                    "type": "options",
                    "fieldName": "widgetslayout",
                    "tooltip": "Set the position for all of the widgets and the panel:",
                    "label": "",
                    "options": [
                        {
                            "label": "Nav [Top Left] - Panels [Right]",
                            "value": "top-left"
                        },
                        {
                            "label": "Nav [Top Right] - Panels [Left]",
                            "value": "top-right"
                        },
                        {
                            "label": "Nav [Bottom Left] - Panels [Right]",
                            "value": "bottom-left"
                        },
                        {
                            "label": "Nav [Bottom Right] - Panels [Left]",
                            "value": "bottom-right"
                        }

                    ]
                },
                {
                    "type": "paragraph",
                    "value": "<br><hr>"
                },                
                {
                    "type": "paragraph",
                    "value": "<b>Widget Position Overrides (optional)</b><br>"
                },
                {
                    "type": "options",
                    "fieldName": "widgetzoom",
                    "tooltip": "Manually position the zoom widget.",
                    "label": "Zoom",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgethome",
                    "tooltip": "Manually position the home widget. This widget will zoom to the default location of the map.",
                    "label": "Home",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgetnavtoggle",
                    "tooltip": "Manually position the NavigationToggle widget. This widget will allow you to rotate and pan 3D views.",
                    "label": "Nav (3D only)",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgetlocate",
                    "tooltip": "Manually position the locate widget. This widget will navigate to your current geolocation.",
                    "label": "Locate",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgettrack",
                    "tooltip": "Manually position the track widget. This widget will continually navigate to your current geolocation.",
                    "label": "Track",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgetcompass",
                    "tooltip": "Manually position the compass widget. This widget will show you the orientation of the map.",
                    "label": "Compass",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgetsearch",
                    "tooltip": "Manually position the search widget on the map.",
                    "label": "Search",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },                
                {
                    "type": "options",
                    "fieldName": "widgetbasemaptoggle",
                    "tooltip": "Manually position the basemaptoggle widget. This widget will change the basemap.",
                    "label": "Basemap Toggle",
                    "options": [
                        {
                            "label": "Default",
                            "value": "show"
                        },
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
                        },
                        {
                            "label": "Hide",
                            "value": "hide"
                        }
                    ]
                },
                {
                    "type": "options",
                    "fieldName": "widgetnextbasemap",
                    "tooltip": "Select a basemap to toggle to.",
                    "label": "Secondary basemap for the Basemap Toggle",
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
                            "label": "Streets Vector (2D)",
                            "value": "streets-vector"
                        },
                        {
                            "label": "Gray Vector (2D)",
                            "value": "gray-vector"
                        },
                        {
                            "label": "Dark Gray Vector (2D)",
                            "value": "dark-gray-vector"
                        },
                        {
                            "label": "Topo Vector (2D)",
                            "value": "topo-vector"
                        },
                        {
                            "label": "Streets Relief Vector (2D)",
                            "value": "streets-relief-vector"
                        },
                        {
                            "label": "Streets Navigation Vector (2D)",
                            "value": "streets-navigation-vector"
                        },
                        {
                            "label": "Streets Night Vector (2D)",
                            "value": "streets-night-vector"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "value": "<br><hr>"
                },                
                {
                    "type": "paragraph",
                    "value": "<b>Map Widgets (optional)</b><br>"
                },
                {
                    "type": "boolean",
                    "fieldName": "widgetcoords",
                    "tooltip": "Show map coordinates on the map or scene.",
                    "label": "Show map coordinates"
                }
            ]
        },
        {
            "category": "7. Search",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Set the search behavior:"
                },
                {
                    "type": "boolean",
                    "fieldName": "widgetsearchnav",
                    "tooltip": "Show search widget in nav.",
                    "label": "Show search in navbar"
                },
                {
                    "type": "boolean",
                    "fieldName": "findplaces",
                    "tooltip": "Allow the app to find places when the user long-taps (holds) on the map. Search cities, neighborhoods, parks, restaurants...",
                    "label": "Find places (click-hold/long-tap on the map to find neighborhoods, parks, restaurants...)"
                }
            ]
        },
        {
            "category": "8. Map",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "<b>Override the current webmap or webscene (optional)</b><br>"
                },
                {
                  "type": "webmap"
                }, {
                  "type": "appproxies"
                },
                 {
                    "type": "paragraph",
                    "value": "<b>Override the basemap (optional)</b><br>"
                },
                {
                    "type": "options",
                    "fieldName": "basemap",
                    "tooltip": "Select a basemap that will override the default basemap.",
                    "label": "Basemap",
                    "options": [
                        {
                            "label": "Default",
                            "value": ""
                        },
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
                            "label": "Streets Vector (2D)",
                            "value": "streets-vector"
                        },
                        {
                            "label": "Gray Vector (2D)",
                            "value": "gray-vector"
                        },
                        {
                            "label": "Dark Gray Vector (2D)",
                            "value": "dark-gray-vector"
                        },
                        {
                            "label": "Topo Vector (2D)",
                            "value": "topo-vector"
                        },
                        {
                            "label": "Streets Relief Vector (2D)",
                            "value": "streets-relief-vector"
                        },
                        {
                            "label": "Streets Navigation Vector (2D)",
                            "value": "streets-navigation-vector"
                        },
                        {
                            "label": "Streets Night Vector (2D)",
                            "value": "streets-night-vector"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "value": "<b>Override the start up location (optional)</b><br>"
                },
                {
                    "fieldName": "lat",
                    "type": "number",
                    "value": 32,
                    "label": "Latitude (-90-90)"
                },
                {
                    "fieldName": "lon",
                    "type": "number",
                    "value": -120,
                    "label": "Longitude (-180-180)"
                },
                {
                    "fieldName": "zoom",
                    "type": "number",
                    "value": 10,
                    "label": "Zoom (1-20)"
                },
                {
                    "fieldName": "scale",
                    "type": "number",
                    "value": 1000000,
                    "label": "Scale"
                },
                {
                    "fieldName": "rotation",
                    "type": "number",
                    "value": 0,
                    "label": "Rotation (0-360) 2D Only"
                },
                {
                    "fieldName": "heading",
                    "type": "number",
                    "value": 0,
                    "label": "Heading (0-360) 3D Only"
                },
                {
                    "fieldName": "tilt",
                    "type": "number",
                    "value": 45,
                    "label": "Tilt (0-90) 3D Only"
                },
                {
                    "fieldName": "altitude",
                    "type": "number",
                    "value": 1000,
                    "label": "Altitude 3D Only"
                },
                {
                    "type": "boolean",
                    "fieldName": "showerrors",
                    "tooltip": "Show error messages when webmaps or webscenes fail to load completely.",
                    "label": "Show layer load and other errors in a message box (optional)."
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
        "theme": "dark",
        "themecustom": false,
        "bgcolor": "",
        "opacity": 1,
        "textcolor": "",
        "widgettheme": "light",
        "layout": "top",
        "panelslayout": "right",
        "menuabout": true,
        "menulegend": true,
        "menubasemaps": true,
        "menuslides": true,
        "menushare": true,
        "menutogglenav": true,
        "menustyledrawer": false,
        "dockposition": "top-right",
        "widgetslayout": "top-left",
        "widgetzoom": "show",
        "widgethome": "show",
        "widgetnavtoggle": "show",
        "widgetlocate": "show",
        "widgettrack": "hide",
        "widgetcompass": "show",
        "widgetsearch": "hide",
        "widgetbasemaptoggle": "show",
        "widgetnextbasemap": "satellite",
        "widgetcoords": true,
        "widgetsearchnav": true,
        "activepanel": "about",
        "findplaces": true,
        "showerrors": true,
        "lon": null,
        "lat": null,
        "zoom": null,
        "scale": null,
        "rotation": null,
        "heading": null,
        "tilt": null,
        "altitude": null,
        "basemap": ""
    }
}