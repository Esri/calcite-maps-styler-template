{
  "configurationSettings": [{
    "category": "<b>General Settings</b>",
    "fields": [{
      "type": "string",
      "fieldName": "theme",
      "tooltip": "Color theme to use",
      "label": "Color Scheme:",
      "options": [{
        "label": "Blue",
        "value": "blue"
      },{
        "label":"Gray",
        "value":"gray"
      }]
    }, {
      "type": "string",
      "fieldName": "title",
      "label": "Title Text:",
      "placeHolder": "Enter a title"
    }]
  }, {
    "category": "<b>Web maps to compare</b>",
    "fields": [{
      "type": "string",
      "fieldName": "webmap",
      "label": "Web Map IDs:",
      "stringFieldOption": "textarea",
      "tooltip": "Enter web map ids for maps separated by commas"
    }, {
      "type": "paragraph",
      "value": "Enter the IDs for up to three web maps, separated with a comma. The ID can be found in the URL when looking at the details page of a web map."
    }]
  }],
  "values": {
    "theme": "blue"
  }
}