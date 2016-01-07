{
  "configurationSettings": [{
    "category": "<b>App Settings</b>",
    "fields": [{
      "type": "webscene",
      "label": "Select a scene"
    }, {
      "type": "string",
      "fieldName": "title",
      "label": "Title",
      "tooltip": "Title",
      "placeHolder": "Title"
    }, {
      "type": "boolean",
      "fieldName": "cycleColors",
      "label": "Change color for each visualization",
      "tooltip": "Change color for each visualization"
    }, {
      "type": "color",
      "fieldName": "color",
      "label": "Color",
      "tooltip": "Color"
    }, {
      "type": "boolean",
      "fieldName": "reverse",
      "label": "Dark theme for map",
      "tooltip": "Dark theme for map"
    }]
  }, {
    "category": "<b>Visualization Settings</b>",
    "fields": [{
      "type": "paragraph",
      "value": "By default, the first feature layer in the scene will be used for visualization. You can configure the popup for the layer in the 2D map viewer. Visible numeric fields and aliases will be used for visualization. The first visible string field will be used for labels by default."
    }, {
      "type": "string",
      "fieldName": "vizType",
      "tooltip": "Visualization type",
      "label": "Visualization type",
      "options": [{
        "label": "Point Extrusion",
        "value": "Point Extrusion"
      }]
    }, {
      "type": "layerAndFieldSelector",
      "layerOptions": {
        "supportedTypes": [
          "FeatureLayer"
        ],
        "geometryTypes": [
          "esriGeometryPoint",
          "esriGeometryLine",
          "esriGeometryPolygon"
        ]
      },
      "fields": [{
        "multipleSelection": false,
        "fieldName": "vizFields",
        "label": "Visualization fields",
        "tooltip": "Fields to use for visualization",
        "supportedTypes": [
          "esriFieldTypeSmallInteger",
          "esriFieldTypeInteger",
          "esriFieldTypeSingle",
          "esriFieldTypeDouble",
          "esriFieldTypeString"
        ]
      }],
      "fieldName": "vizLayer",
      "label": "Visualization layer",
      "tooltip": "Layer that will be used for visualization"
    }, {
      "type": "number",
      "fieldName": "maxZ",
      "label": "Maximum Z extrusion (meters)",
      "tooltip": "Maximum Z extrusion (meters)"
    }, {
      "type": "number",
      "fieldName": "maxW",
      "label": "3D Point width (meters)",
      "tooltip": "3D Point width (meters)"
    }, {
      "type": "number",
      "fieldName": "interval",
      "label": "Interval between attribute change (milliseconds)",
      "tooltip": "Interval between attribute change (milliseconds)",
      "constraints": {
        "min": 3000,
        "max": 30000,
        "places": 0
      }
    }, {
      "type": "boolean",
      "fieldName": "showPercent",
      "label": "Display results as percentages of total",
      "tooltip": "Display results as percentages of total"
    }]
  }],
  "values": {
    "title": "",
    "cycleColors": true,
    "color": "#2cbade",
    "reverse": true,
    "vizType": "Point Extrusion",
    "maxZ": 2000000,
    "maxW": 10000,
    "interval": 20000,
    "showPercent": true
  }
}
