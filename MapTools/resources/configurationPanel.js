{  
   "configurationSettings":[ {
         "category": "Subscriber Content",
         "fields": [
            {
               "type": "appproxies"
            }
         ]
      }, 
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
            },{
               "type": "paragraph",
               "value": "Enter a value to override the default title font size. Make sure to specify the font units. For example 20px would result in a title font size of 20 pixels. Em and pt are also valid units.  "
            },{
               "type": "string",
               "label": "Title font size",
               "tooltip": "Specify title font size",
               "fieldName": "titlefontsize",
               "placeHolder": "20px"
            },{
               "type": "paragraph",
               "value": "Specify a custom logo image and link. If you check Logo in header the logo image will display to the left of the map title. If you don't select this the logo will be displayed in the lower-right corner of the map."
            },{
               "label": "Logo in header",
               "fieldName": "logointitle",
               "type": "boolean"
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
               "fieldName": "basemaps",
               "label": "Basemap Gallery"
            },{
               "type": "boolean",
               "fieldName": "bookmarks",
               "label": "Bookmarks"
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
            },{
               "type": "boolean",
               "fieldName": "measure",
               "label": "Measure"
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
               "type":"boolean",
               "fieldName":"search",
               "label":"Enable search tool"
            },{
               "type": "search",
               "fieldName":"searchConfig",
               "label": "Configure search tool"
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
               "fieldName":"printlegend",
               "label":"Add Legend to Output"
            }
         ]
      },{
         "category": "Custom URL Parameter",
         "fields": [
            {
               "type": "paragraph",
               "value": "Setup the app to support a custom url parameter. For example if your map contains a feature layer with parcel information and you'd like to be able to find parcels using a url parameter you can use this section to do so. Select a layer and search field then define the name of a custom param. Once you've defined these values you can append the custom search to your application url using the custom parameter name you define. For example, if I set the custom param value to parcels a custom url would look like this index.html?parcel=3045"
            },{
               "placeHolder":"i.e. parcels",
               "label":"URL param name:",
               "fieldName":"customUrlParam",
               "type":"string",
               "tooltip":"Custom URL param name"
            },{  
               "type":"layerAndFieldSelector",
               "fieldName":"customUrlLayer",
               "label":"Layer to search for custom url param value",
               "tooltip":"Url param search layer",
               "fields":[  
                  {  
                     "supportedTypes":[  
                        "esriFieldTypeString"
                     ],
                     "multipleSelection":false,
                     "fieldName":"urlField",
                     "label":"URL param search field",
                     "tooltip":"URL param search field"
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
      }
   ],
   "values":{  
      "search":true,
      "showtitle":true,
      "basemaps": true,
      "legend":true,
      "table":true,
      "layerlist":true,
      "bookmarks":false,
      "zoom":true,
      "home":true,
      "measure":false,
      "locate":false,
      "scale":false,
      "share":false,
      "print":true,
      "printlayouts":true,
      "printlegend":true,
      "iconcolortheme":"#fff",
      "logointitle": false,
      "color":"#fff",
      "titlecolor":"#333",
      "theme":"#545454"
   }
}
