{
   "configurationSettings":[
      {
         "category":"<b>Map</b>",
         "fields":[
            {
               "type":"webmap"
            },
            {
               "type":"appproxies"
            }
         ]
      },
      {
         "category":"General",
         "fields":[
            {
               "label":"Map Logo URL",
               "fieldName":"logoimage",
               "type":"string",
               "tooltip":"Provide a url to your logo. Defaults to Esri logo."
            },
            {
               "label":"Map Logo Link",
               "fieldName":"logolink",
               "type":"string",
               "tooltip":"Url to navigate to when logo is clicked"
            },
            {
               "type":"string",
               "fieldName":"theme",
               "tooltip":"App Theme",
               "label":"App Theme:",
               "options":[
                  {
                     "label":"Light",
                     "value":"light"
                  },
                  {
                     "label":"Dark",
                     "value":"dark"
                  }
               ]
            }
         ]
      },
      {
         "category":"Options",
         "fields":[
            {
               "type":"boolean",
               "fieldName":"home",
               "label":"Home Extent Button"
            },
            {
               "type":"boolean",
               "fieldName":"zoom",
               "label":"Zoom Slider"
            },
            {
               "type":"string",
               "fieldName":"zoom_position",
               "tooltip":"Choose the location of the zoom slider.",
               "label":"Choose the zoom position:",
               "options":[
                  {
                     "label":"Top Left",
                     "value":"top-left"
                  },
                  {
                     "label":"Top Right",
                     "value":"top-right"
                  },
                  {
                     "label":"Bottom Left",
                     "value":"bottom-left"
                  },
                  {
                     "label":"Bottom Right",
                     "value":"bottom-right"
                  }
               ]
            },
            {
               "type":"boolean",
               "fieldName":"basemap_gallery",
               "label":"Basemap Gallery"
            },
            {
               "type":"boolean",
               "fieldName":"scale",
               "label":"Scalebar"
            },
            {
               "type":"paragraph",
               "value":"Disabled scrolling is important when embedding maps into websites or blogs.  If this will be a stand-alone app, you may want to uncheck 'Disable scrolling in app' if you want to provide the ability to use the mouse scroll wheel to navigate in this app."
            },
            {
               "type":"boolean",
               "fieldName":"disable_scroll",
               "label":"Disable scrolling in app"
            },
            {
               "type":"paragraph",
               "value":"Options to add a legend, details and popup info to the side panel."
            },
            {
               "type":"boolean",
               "fieldName":"show_panel",
               "label":"Display the side panel when the app loads."
            },
            {
               "type":"boolean",
               "fieldName":"legend",
               "label":"Display a legend in side panel"
            },{
              "type":"boolean",
              "fieldName":"layerlist",
              "label": "Display layer list in side panel instead of legned"
            },
            {
               "type":"boolean",
               "fieldName":"details",
               "label":"Display map details in side panel"
            },
            {
               "type":"boolean",
               "fieldName":"popup_sidepanel",
               "label":"Display popup content in side panel"
            },
            {
               "type":"string",
               "fieldName":"active_panel",
               "tooltip":"Choose the panel presented when the app loads.",
               "label":"Choose the default panel:",
               "options":[
                  {
                     "label":"Legend",
                     "value":"legend"
                  },
                  {
                     "label":"Details",
                     "value":"details"
                  },
                  {
                     "label":"Popup Info",
                     "value":"popup"
                  }
               ]
            }
         ]
      },
      {
         "category":"Search",
         "fields":[
            {
               "type":"paragraph",
               "value":"Enable search to allow users to find a location or data in the map. Configure the search settings to refine the experience in your app by setting the default search resource, placeholder text, etc."
            },
            {
               "type":"boolean",
               "fieldName":"search",
               "label":"Enable search tool"
            },
            {
               "type":"boolean",
               "fieldName":"searchextent",
               "label":"Limit search to the default extent of the map"
            },
            {
               "type":"search",
               "fieldName":"searchOptions",
               "label":"Configure Search"
            }
         ]
      },
      {
         "category":"Custom URL Parameter",
         "fields":[
            {
               "type":"paragraph",
               "value":"Setup the app to support a custom url parameter. For example if your map contains a feature layer with parcel information and you'd like to be able to find parcels using a url parameter you can use this section to do so. Select a layer and search field then define the name of a custom param. Once you've defined these values you can append the custom search to your application url using the custom parameter name you define. For example, if I set the custom param value to parcels a custom url would look like this index.html?parcel=3045"
            },
            {
               "placeHolder":"i.e. parcels",
               "label":"URL param name:",
               "fieldName":"customUrlParam",
               "type":"string",
               "tooltip":"Custom URL param name"
            },
            {
               "type":"layerAndFieldSelector",
               "fieldName":"customUrlLayer",
               "label":"Layer to search for custom url param value",
               "tooltip":"Url param search layer",
               "fields":[
                  {
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
                     "esriGeometryPolyline",
                     "esriGeometryPolygon"
                  ]
               }
            }
         ]
      }
   ],
   "values":{
      "home":false,
      "zoom":true,
      "zoom_position":"top-left",
      "theme":"light",
      "active_panel":"legend",
      "show_panel":false,
      "scale":true,
      "search":false,
      "searchextent":true,
      "logoimage":null,
      "logolink":null,
      "details":false,
      "legend":false,
      "popup_sidepanel":false,
      "basemap_gallery":false,
      "disable_scroll":false
   }
}
