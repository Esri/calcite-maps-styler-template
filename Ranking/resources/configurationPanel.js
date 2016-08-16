{
  "displayType": "tabs",
  "configurationSettings": [{
    "category": "Map",
    "fields": [{
      "type": "webmap"
    }, {
      "type": "appproxies"
    },{
      "type":"boolean",
      "fieldName": "legend",
      "label": "Show legend"
    }]
  }, {
    "category": "Description Panel",
    "fields": [{
      "placeHolder": "Defaults to web map title",
      "label": "Title:",
      "fieldName": "title",
      "type": "string",
      "tooltip": "Defaults to web map title"
    }, {
      "type": "string",
      "fieldName": "description",
      "label": "Details",
      "placeHolder": "Defaults to web map description.",
      "tooltip": "Enter content for the details panel",
      "stringFieldOption": "richtext"
    },{
      "placeHolder": "Defaults to Explore",
      "label": "Button text",
      "fieldName": "buttontext",
      "type": "string"
    },{
      "type": "color",
      "fieldName": "buttoncolor",
      "label": "Button color",
      "tooltip": "Button color"
    },{
      "type": "color",
      "fieldName": "buttontextcolor",
      "label": "Button text color"
    }]
  },{
    "category": "Selection Symbol",
    "fields":[
      {
        "type": "color",
        "fieldName": "symbolcolor",
        "tooltip": "Feature selection color",
        "label": "Color Theme:"
      },{
        "type": "number",
        "fieldName": "symbolsize",
        "label": "Symbol size"
      },
      {
        "type":"number",
        "fieldName": "symbolopacity",
        "label": "Opacity",
        "tooltip": "Defaults to .8",
        "constraints":{"min":0 , "max":1, "places": 2 }
      }
    ]
  }, {
    "category": "Theme",
    "fields": [{
      "type": "options",
      "fieldName": "navcolor",
      "tooltip": "Feature navigation arrow color",
      "label": "Arrow color:",
      "options":[{
            "label": "Black",
            "value": "black"
          },{
            "label": "White",
            "value": "white"
          }]
    }, {
      "type": "color",
      "fieldName": "bgcolor",
      "tooltip": "Panel background color",
      "label": "Background color:"
    }, {
      "type": "color",
      "tooltip": "Panel text color",
      "label": "Text color",
      "fieldName": "textcolor"
    },{
      "type": "paragraph",
      "value": "Use the Custom css option to add css that overwrites rules in the app."
    }, {
      "type": "string",
      "fieldName": "customstyle",
      "tooltip": "Custom css",
      "label": "Custom css"
    }]
  },{
    "category": "Ranking",
    "fields": [  {
      "type": "paragraph",
      "value": "In order to rank features for display the specified feature service must support the supportsOrderBy property which is available if the service is version 10.1 or greater. "
    },{
      "type": "layerAndFieldSelector",
      "fieldName": "layerInfo",
      "label": "Ranking layer",
      "fields": [{
        "multipleSelection": false,
        "fieldName": "layerField",
        "label": "Ranking field"
      }],
      "layerOptions": {
        "supportedTypes": [
          "FeatureLayer"
        ],
        "geometryTypes": [
          "esriGeometryPoint",
          "esriGeometryLine",
          "esriGeometryPolyline",
          "esriGeometryPolygon"
        ]
      }
    },{
      "type": "number",
      "fieldName": "count",
      "label": "Number of features to display",
      "placeHolder": "Default vaue is 10"
    },{
      "type":"options",
      "fieldName": "order",
      "label": "Rank Order",
      "options":[{
        "label": "Ascending",
        "value": "ASC"
      },{
        "label": "Descending",
        "value": "DESC"
      }]
    }]
  }],
  "values": {
    "legend": false,
    "order": "DESC",
    "count":10,
    "symbolcolor": "#337ab7",
    "symbolsize": "11",
    "symbolopacity": ".8",
    "navcolor": "black",
    "bgcolor": "#fff",
    "textcolor": "#5d5d5d",
    "buttoncolor": "#e0e0e0",
    "buttontextcolor": "#5d5d5d"
  }
}
