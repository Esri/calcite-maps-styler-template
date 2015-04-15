{  
   "configurationSettings":[  
      {  
         "category":"<b>General Settings</b>",
         "fields":[  
            {  
               "type":"webmap"
            },
            {
               "type":"boolean",
               "fieldName":"title",
               "label":"Display title"
            },
            {  
               "placeHolder":"Defaults to web map title",
               "label":"Title:",
               "fieldName":"titletext",
               "type":"string",
               "tooltip":"Defaults to web map title"
            },
            {
               "type":"boolean",
               "fieldName": "about",
               "label": "Display about dialog"
            },
            {  
               "type":"string",
               "fieldName":"abouttext",
               "label":"About",
               "placeHolder":"Defaults to web map description.",
               "tooltip":"Enter content for the about panel.",
               "stringFieldOption":"richtext"
            },
            {
               "type":"boolean",
               "fieldName": "share",
               "label": "Display share dialog"
            }
         ]
      },{
         "category": "Theme",
         "fields":[
            {
               "type": "paragraph",
               "value": "Use the color pickers to define a new color scheme for the application"
            },
            {  
               "type":"color",
               "fieldName":"panelbackground",
               "tooltip":"Background color for panels and title bar",
               "label":"Background color:"
            },
            {  
               "type":"color",
               "fieldName":"panelcolor",
               "tooltip":"Title bar text color",
               "label":"Text color:"
            }
         ]
      },{
         "category": "Time Display Options",
         "fields":[{
               "type": "paragraph",
               "value": "If the selected web map is time aware use the options in this section to configure the time behavior for the application. To disable time in the app set <i>Display time</i> to false. "
            },
            {
               "type":"boolean",
               "fieldName": "time",
               "label": "Display time"
            },{
               "type":"boolean",
               "fieldName": "looptime",
               "label": "Loop time continuously"
            },{
               "type": "boolean",
               "fieldName": "autoplay",
               "label": "Automatically play slider"
            },{
               "type": "paragraph",
               "value": "Set <i>Hide slider control</i> to true to hide the slider portion of the time display and show just the play control and date."
            },{
               "type": "boolean",
               "fieldName": "noslider",
               "label": "Hide slider control"
            },{
               "type": "boolean",
               "fieldName": "sliderticks",
               "label": "Add tick marks to slider"
            },{
               "placeHolder":"500",
               "label":"Playback speed:",
               "fieldName":"sliderrate",
               "type":"string",
               "tooltip":"Rate at which slider plays (in milliseconds)"
            },
            {
               "type":"color",
               "fieldName": "timecolor",
               "tooltip": "Color for the time slider controls",
               "label": "Play button and slider handles"
            },{
               "type":"color",
               "fieldName": "slidercolor",
               "tooltip": "Color for the time slider bar",
               "label": "Time slider color"
            }
         ]
      },
      {  
         "category":"Tools",
         "fields":[  
            {  
               "type":"boolean",
               "fieldName":"legend",
               "label":"Add legend"
            },
            {  
               "type":"boolean",
               "fieldName":"zoomslider",
               "label":"Add zoom slider"
            },
            {  
               "type":"boolean",
               "fieldName":"scale",
               "label":"Add scalebar"
            }
         ]
      },{
         "category": "Positioning",
         "fields":[
            {
               "type":"paragraph",
               "value":"Position the time slider and legend controls. Note that some combinations may not display well. For example if you set both controls to the bottom-right they'll overlap. "
            },
            {
               "type": "string",
               "fieldName": "timeposition",
               "tooltip": "Select location for time control",
               "label": "Time control location",
               "options":[
                  {
                     "label":"Bottom center",
                     "value":"bottom-center"
                  },{
                     "label": "Bottom right",
                     "value": "bottom-right"
                  },{
                     "label": "Bottom left",
                     "value": "bottom-left"
                  },{
                     "label": "Top right",
                     "value": "top-right"
                  },{
                     "label": "Top left",
                     "value": "top-left"
                  },{
                     "label": "Top center",
                     "value": "top-center"
                  }
               ]
            },            {
               "type": "string",
               "fieldName": "legendposition",
               "tooltip": "Select location for legned control",
               "label": "Legned control location",
               "options":[
                  {
                     "label": "Bottom right",
                     "value": "bottom-right"
                  },{
                     "label": "Bottom left",
                     "value": "bottom-left"
                  },{
                     "label": "Top right",
                     "value": "top-right"
                  },{
                     "label": "Top left",
                     "value": "top-left"
                  }
               ]
            }
         ]
      },{
         "category": "Search Settings",
         "fields": [
            {
               "type": "paragraph",
               "value": "Enable/disable the search tool and optionally select layers (and fields) to add to the search tool."
            },
            {  
               "label":"Select search layers and fields",
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
            },{  
               "type":"boolean",
               "fieldName":"search",
               "label":"Search"
            },
            {  
               "type":"boolean",
               "fieldName":"searchExtent",
               "label":"Prioritize search results in current extent."
            },{
               "type":"paragraph",
               "value": "When Location Search is true the search widget will allow users to search for addresses and locations using one or more locators and also search the layers and fields specified in the Search Layers configuration option. Unchecking the Location Search option will remove the locator search and only configured search layers will be displayed."
            },{
               "type": "boolean",
               "fieldName": "locationSearch",
               "label": "Location Search"
            }
         ]
      }
   ],
   "values":{  
      "sliderticks":false,
      "looptime":true,
      "autoplay": false,
      "sliderrate": 500,
      "noslider": false,
      "scale":false,
      "zoomslider": true,
      "share": true,
      "about": true,
      "legend": true,
      "search": true,
      "locationSearch": true,
      "searchExtent":false,
      "legendposition": "top-right",
      "timeposition": "bottom-center"
   }
}
