{
  "configurationSettings":[{
    "category": "<b>Application Settings</b>",
    "fields": [{
      "type": "string",
      "fieldName": "title",
      "tooltip": "Specify a title for the application",
      "placeHolder": "Title",
      "label": "Title:"
    },{
      "type": "string",
      "fieldName": "subtitle",
      "tooltip": "Specify a subtitle for the application",
      "placeHolder": "Subtitle",
      "label": "Subtitle:"
    },{
      "type": "string",
      "fieldName": "description",
      "tooltip": "Specify a title for the application",
      "placeHolder": "Description",
      "label": "Description:",
      "stringFieldOption": "textarea"
    },{
      "type": "paragraph",
      "value": "This description will only be added if the application contains only one map"
    },{
      "type": "boolean",
      "fieldName": "loop",
      "label": "Loop time-enabled maps",
      "tooltip": ""
    },{
      "type": "boolean",
      "fieldName": "displayDescription",
      "label": "Display description",
      "tooltip": ""
    },{
      "type": "boolean",
      "fieldName": "displayLegend",
      "label": "Display legend",
      "tooltip": ""
    }]
  },{
    "category": "<b>Add Additonal Webmaps</b>",
    "fields": [{
      "fieldName": "webmap",
      "label": "Webmap IDs:",
      "stringFieldOption": "textarea",
      "tooltip": "Enter web map ids for maps separated by commas"
    },{
      "type": "paragraph",
      "value": "Enter the ID's for up to five webmaps, separated with a comma. The ID can be found in the URL when looking at the details page of a web map."
    },{
      "type": "string",
      "fieldName": "tabs",
      "label": "Tab Labels:",
      "stringFieldOption": "textarea",
      "tooltip": "Enter labels for tabs separated by commas"
    },{
      "type": "paragraph",
      "value": "Enter the labels for up to five web maps, separated with a comma. The order of the labels must be in the same order as the webmaps ID's above that they are associated with."
    },{
      "type": "boolean",
      "fieldName": "syncMaps",
      "label": "Sync scale and location of maps",
      "tooltip": ""
    }]
  }],
    "values":{
    }
}