{
   "configurationSettings": [
      {
         "category" : "<b>Configure Template</b>",
         "fields" : [
            {
               "type" : "webmap"
            },
            {
               "type" : "string",
               "fieldName" : "title",
               "label" : "Title",
               "tooltip" : "Title",
               "placeHolder" : "Title"
            },
            {
               "type" : "string",
               "fieldName" : "logo",
               "label" : "Logo URL",
               "tooltip" : "Logo",
               "placeHolder" : "Logo URL"
            },
            {
               "type" : "color",
               "fieldName" : "color",
               "label" : "Color",
               "tooltip" : "Color"
            },
            {
               "type" : "boolean",
               "fieldName" : "cycleColors",
               "label" : "Cycle colors for layers",
               "tooltip" : "Cycle colors for layers"
            },
            {
               "type" : "boolean",
               "fieldName" : "defaultToCenter",
               "label" : "Use map center as default location",
               "tooltip" : "Use map center as default location"
            },
            {
               "type" : "boolean",
               "fieldName" : "showDemographics",
               "label" : "Show US demographics",
               "tooltip" : "Show US demographics"
            },
            {
               "type" : "boolean",
               "fieldName" : "showLifestyle",
               "label" : "Show US lifestyle information",
               "tooltip" : "Show US lifestyle information"
            },
            {
               "type" : "boolean",
               "fieldName" : "showWeather",
               "label" : "Show weather information",
               "tooltip" : "Show weather information"
            },
            {
               "type" : "string",
               "fieldName" : "weatherUnits",
               "tooltip" : "Weather units",
               "label" : "Weather units",
               "options" : [
                  {
                     "label" : "F",
                     "value" : "F"
                  },
                  {
                     "label" : "C",
                     "value" : "C"
                  }
               ]
            },
            {
               "type" : "boolean",
               "fieldName" : "showDirections",
               "label" : "Enable routing directions",
               "tooltip" : "Enable routing directions"
            },
            {
               "type": "appproxies",
               "serviceProxies": [{
                  "url": "http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
                  "title": "Route"
               }]
            },
            {
               "type" : "string",
               "fieldName" : "distanceUnits",
               "tooltip" : "Distance units",
               "label" : "Distance units",
               "options" : [
                  {
                  "label" : "Miles",
                  "value" : "miles"
                  },
                  {
                  "label" : "Kilometers",
                  "value" : "kilometers"
                  },
                  {
                  "label" : "Meters",
                  "value" : "meters"
                  }
               ]
            },
            {
               "type":"number",
               "fieldName":"maxDistance", 
               "label": "Maximum distance",
               "tooltip": "Maximum distance",
               "constraints" :{"min":10,"places":0}
            },
            {
               "type":"number",
               "fieldName":"defaultDistance", 
               "label": "Default distance",
               "tooltip": "Default distance",
               "constraints" :{"min":1,"places":0}
            }
         ]
      }
   ],
   "values" : {
      "title" : "Local Perspective",
      "logo" : "images/logo.png",
      "color" : "#80ab00",
      "cycleColors" : false,
      "defaultToCenter" : true,
      "showDemograpics" : true,
      "showLifestyle" : true,
      "showWeather" : true,
      "weatherUnits" : "F",
      "showDirections" : false,
      "distanceUnits" : "miles",
      "maxDistance" : 10,
      "defaultDistance" : 3
   }
}
