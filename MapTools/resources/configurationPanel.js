{  
   "configurationSettings":[  
      {  
         "category":"<b>Map Settings</b>",
         "fields":[  
            {  
               "type":"webmap"
            },
            {  
               "type":"boolean",
               "fieldName":"showtitle",
               "label":"Display Map Title"
            },
            {  
               "placeHolder":"Defaults to web map title",
               "label":"Title:",
               "fieldName":"title",
               "type":"string",
               "tooltip":"Defaults to web map title"
            },
            {  
               "label":"Map logo:",
               "fieldName":"logoimage",
               "type":"string",
               "tooltip":"Defaults to esri logo"
            },
            {  
               "label":"Map Logo Link",
               "fieldName":"logolink",
               "type":"string",
               "tooltip":"Url to navigate to when logo is clicked"
            },
            {  
               "type":"string",
               "fieldName":"description",
               "label":"Description",
               "placeHolder":"Defaults to web map description.",
               "tooltip":"custom description",
               "stringFieldOption":"richtext"
            },
            {  
               "type":"paragraph",
               "value":"The side panel for this template displays the Editor, Legend and Description if available. The default panel size is 228 (pixels) wide. If desired you can change this default size by entering a new value for the 'Side Panel Width'."
            },
            {  
               "type":"string",
               "fieldName":"panelwidth",
               "placeHolder":"228",
               "label":"Side panel width",
               "tooltip":"Defaults to 228 pixels"
            }
         ]
      },
      {  
         "category":"Theme",
         "fields":[  
            {  
               "type":"paragraph",
               "value":"Specify a color scheme for the application. The title color defines the text color used for the tool",
               "label":"Icon color defines the color used for the images on the tool buttons. Background color defines the toolbar color."
            },
            {  
               "type":"color",
               "fieldName":"theme",
               "tooltip":"Color used for the toolbar background and map buttons",
               "label":"General theme color"
            },
            {  
               "type":"color",
               "fieldName":"color",
               "tooltip":"Text color for the button labels",
               "label":"Button label color"
            },
            {  
               "type":"color",
               "fieldName":"iconcolortheme",
               "label":"Icon color",
               "tooltip":"Icon color for the button images"
            },
            {  
               "type":"color",
               "fieldName":"titlecolor",
               "tooltip":"Title text color",
               "label":"Title text color"
            }
         ]
      },
      {  
         "category":"Tools",
         "fields":[  
            {  
               "type":"boolean",
               "fieldName":"bookmarks",
               "label":"Bookmarks"
            },
            {  
               "type":"boolean",
               "fieldName":"home",
               "label":"Home Button"
            },
            {  
               "type":"boolean",
               "fieldName":"locate",
               "label":"Find Location"
            },
            {  
               "type":"boolean",
               "fieldName":"layerlist",
               "label":"Layer List"
            },
            {  
               "type":"boolean",
               "fieldName":"legend",
               "label":"Legend"
            },
            {  
               "type":"boolean",
               "fieldName":"scale",
               "label":"Scalebar"
            },
            {  
               "type":"boolean",
               "fieldName":"share",
               "label":"Social Sharing"
            },
            {  
               "type":"boolean",
               "fieldName":"zoom",
               "label":"Zoom Slider"
            }
         ]
      },
      {  
         "category":"Table Settings",
         "fields":[  
            {  
               "type":"paragraph",
               "value":"Display tabular data for a feature layer in the web map."
            },
            {  
               "type":"boolean",
               "fieldName":"table",
               "label":"Display Table"
            },
            {  
               "type":"layerAndFieldSelector",
               "fieldName":"tableLayer",
               "label":"Layer to display in table",
               "tooltip":"Layer to display in table",
               "fields":[  
                  {  
                     "supportedTypes":[  
                        "esriFieldTypeSmallInteger",
                        "esriFieldTypeInteger",
                        "esriFieldTypeSingle",
                        "esriFieldTypeDouble",
                        "esriFieldTypeString"
                     ],
                     "multipleSelection":true,
                     "fieldName":"hiddenFields",
                     "label":"Hide the selected fields",
                     "tooltip":"Fields to hide in table"
                  }
               ],
               "layerOptions":{  
                  "supportedTypes":[  
                     "FeatureLayer"
                  ],
                  "geometryTypes":[  
                     "esriGeometryPoint",
                     "esriGeometryLine",
                     "esriGeometryPolygon"
                  ]
               }
            }
         ]
      },
      {  
         "category":"Search Settings",
         "fields":[  
            {  
               "type":"paragraph",
               "value":"Enable the search capability and optionally select search layers and fields. These layers will appear in the search tool allowing application users to search for particular values in the specified layers and fields."
            },
            {  
               "type":"boolean",
               "fieldName":"search",
               "label":"Address Finder"
            },
            {  
               "type":"boolean",
               "fieldName":"searchExtent",
               "label":"Prioritize search results in current extent."
            },
            {  
               "type":"paragraph",
               "value":"When Location Search is true the search widget will allow users to search for addresses and locations using one or more locators and also search the layers and fields specified in the Search Layers configuration option. Unchecking the Location Search option will remove the locator search and only configured search layers will be displayed."
            },
            {  
               "type":"boolean",
               "fieldName":"locationSearch",
               "label":"Location Search"
            },
            {  
               "label":"Select layers and fields",
               "fieldName":"searchLayers",
               "type":"multilayerandfieldselector",
               "tooltip":"Select layer and fields to search",
               "layerOptions":{  
                  "supportedTypes":[  
                     "FeatureLayer"
                  ],
                  "geometryTypes":[  
                     "esriGeometryPoint",
                     "esriGeometryLine",
                     "esriGeometryPolyline",
                     "esriGeometryPolygon"
                  ]
               },
               "fieldOptions":{  
                  "supportedTypes":[  
                     "esriFieldTypeString"
                  ]
               }
            }
         ]
      },
      {  
         "category":"Print Settings",
         "fields":[  
            {  
               "type":"paragraph",
               "value":"Display the print tool and optionally display a legend on the print page and all the print layouts associated with the print service used by the template."
            },
            {  
               "type":"boolean",
               "fieldName":"print",
               "label":"Print Tool"
            },
            {  
               "type":"boolean",
               "fieldName":"printlayouts",
               "label":"Display all Layout Options"
            },
            {  
               "type":"paragraph",
               "value":"Specify the print format. Check your print service to see a list of valid values. The following values are valid for the default print service: PDF, PNG32, PNG8, JPG, GIF, EPS, SVG, SVGZ"
            },
            {  
               "placeHolder":"Default value is PDF",
               "label":"Format:",
               "fieldName":"printformat",
               "type":"string",
               "tooltip":"Defaults to PDF"
            },
            {  
               "type":"boolean",
               "fieldName":"tool_print_legend",
               "label":"Add Legend to Output"
            }
         ]
      }
   ],
   "values":{  
      "search":true,
      "showtitle":true,
      "searchExtent":true,
      "legend":true,
      "table":true,
      "layerlist":true,
      "bookmarks":false,
      "zoom":true,
      "home":true,
      "locate":false,
      "scale":false,
      "share":false,
      "print":true,
      "printlayouts":true,
      "printlegend":true,
      "iconcolortheme":"#fff",
      "color":"#fff",
      "titlecolor":"#333",
      "theme":"#545454"
   }
}
