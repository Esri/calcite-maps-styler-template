{
   "configurationSettings":[
      {
         "category":"<b>Map</b>",
         "fields":[
            {
               "type":"webmap",
               "label":"Select a map"
            }
         ]
      },
      {
         "category":"<b>General</b>",
         "fields":[
            {
               "type":"string",
               "fieldName":"title",
               "label":"Application Title",
               "tooltip":"Application Title",
               "placeHolder":"My Map"
            },
            {
               "type":"string",
               "fieldName":"summary",
               "stringFieldOption":"richtext",
               "label":"Application Summary",
               "tooltip":"Map Summary",
               "placeHolder":"My Map"
            },
            {
               "type":"string",
               "fieldName":"defaultPanel",
               "tooltip":"Default Menu Panel",
               "label":"Default Menu Panel",
               "options":[
                  {
                     "label":"Map",
                     "value":"map"
                  },
                  {
                     "label":"layers",
                     "value":"Layers"
                  },
                  {
                     "label":"Legend",
                     "value":"legend"
                  }
               ]
            }
         ]
      },
      {
         "category":"<b>Options</b>",
         "fields":[
            {
               "type":"boolean",
               "fieldName":"enableTitle",
               "label":"Enable Title",
               "tooltip":"Enable Title"
            },
            {
               "type":"boolean",
               "fieldName":"enableSummary",
               "label":"Enable Summary Description",
               "tooltip":"Enable Summary Description"
            },
            {
               "type":"boolean",
               "fieldName":"enableLegendPanel",
               "label":"Enable Legend Panel",
               "tooltip":"Enable Legend"
            },
            {
               "type":"boolean",
               "fieldName":"enableAboutPanel",
               "label":"Enable Map Panel",
               "tooltip":"Enable Map Panel"
            },
            {
               "type":"boolean",
               "fieldName":"enableLayersPanel",
               "label":"Enable Layers Panel",
               "tooltip":"Enable Layers Panel"
            },
            {
               "type":"boolean",
               "fieldName":"enableHomeButton",
               "label":"Enable Home Button",
               "tooltip":"Enable Home Button"
            },
            {
               "type":"boolean",
               "fieldName":"enableLocateButton",
               "label":"Enable Locate Button",
               "tooltip":"Enable Locate Button"
            },
            {
               "type":"boolean",
               "fieldName":"enableBasemapToggle",
               "label":"Enable Basemap Toggle",
               "tooltip":"Enable Basemap Toggle"
            },
            {
               "type":"boolean",
               "fieldName":"enableShareDialog",
               "label":"Enable Share Dialog",
               "tooltip":"Enable Share Dialog"
            }
         ]
      },
      {
         "category":"<b>Basemap Widget</b>",
         "fields":[
            {
               "type":"string",
               "fieldName":"defaultBasemap",
               "tooltip":"Default selected basemap for this map.",
               "label":"Default Basemap",
               "options":[
                  {
                     "label":"Streets",
                     "value":"streets"
                  },
                  {
                     "label":"Satellite",
                     "value":"satellite"
                  },
                  {
                     "label":"Hybrid",
                     "value":"hybrid"
                  },
                  {
                     "label":"Topographic",
                     "value":"topo"
                  },
                  {
                     "label":"Gray",
                     "value":"gray"
                  },
                  {
                     "label":"Oceans",
                     "value":"oceans"
                  },
                  {
                     "label":"National Geographic",
                     "value":"national-geographic"
                  },
                  {
                     "label":"OpenStreetMap",
                     "value":"osm"
                  }
               ]
            },
            {
               "type":"string",
               "fieldName":"nextBasemap",
               "tooltip":"Next selected basemap for this map.",
               "label":"Next Basemap",
               "options":[
                  {
                     "label":"Streets",
                     "value":"streets"
                  },
                  {
                     "label":"Satellite",
                     "value":"satellite"
                  },
                  {
                     "label":"Hybrid",
                     "value":"hybrid"
                  },
                  {
                     "label":"Topographic",
                     "value":"topo"
                  },
                  {
                     "label":"Gray",
                     "value":"gray"
                  },
                  {
                     "label":"Oceans",
                     "value":"oceans"
                  },
                  {
                     "label":"National Geographic",
                     "value":"national-geographic"
                  },
                  {
                     "label":"OpenStreetMap",
                     "value":"osm"
                  }
               ]
            }
         ]
      }
   ],
   "values":{
      "title":"",
      "enableSummary":true,
      "enableLegendPanel":true,
      "enableAboutPanel":true,
      "enableHomeButton":true,
      "enableLocateButton":true,
      "enableBasemapToggle":true,
      "enableShareDialog":true,
      "nextBasemap":"hybrid",
      "defaultBasemap":"topo"
   }
}