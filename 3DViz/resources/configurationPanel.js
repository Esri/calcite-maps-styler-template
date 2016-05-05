{
  "configurationSettings": [{
    "category": "<b>Scene</b>",
    "fields": [{
      "type": "webscene",
      "label": "Select a scene"
    }]
  }, {
    "category": "<b>General</b>",
    "fields": [{
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
    "category": "<b>Visualization</b>",
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
      }, {
        "label": "Polygon Extrusion",
        "value": "Polygon Extrusion"
      }, {
        "label": "Pulse",
        "value": "Pulse"
      }]
    }, {
      "type": "number",
      "fieldName": "maxZ",
      "label": "Maximum symbol height (meters)",
      "tooltip": "Maximum symbol height (meters)"
    }, {
      "type": "number",
      "fieldName": "maxW",
      "label": "Maximum symbol width (meters)",
      "tooltip": "Maximum symbol width (meters)"
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
      "label": "Show values as percentage of total",
      "tooltip": "Show values as percentage of total"
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
    "showPercent": false
  }
}