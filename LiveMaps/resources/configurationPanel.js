{
  "configurationSettings": [{
    "category": "<b>Map</b>",
    "fields": [{
      "type": "webmap",
      "label": "Select a map"
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
      "type": "string",
      "fieldName": "subtitle",
      "label": "Subtitle",
      "tooltip": "Subtitle",
      "placeHolder": "Subtitle"
    }, {
      "type": "color",
      "fieldName": "color",
      "label": "Color",
      "tooltip": "Color"
    }]
  }, {
    "category": "<b>Live Feed</b>",
    "fields": [{
      "type": "string",
      "fieldName": "feed",
      "label": "Feed",
      "tooltip": "Feed",
      "options": [{
            "label": "Cold and Flu",
            "value": "flu"
        }, {
            "label": "Gastrointestinal Illness",
            "value": "gastro"
        }, {
            "label": "Flickr",
            "value": "flickr"
        }, {
            "label": "Twitter",
            "value": "twitter"
        }
      ]
    }, {
      "type": "string",
      "fieldName": "keyword",
      "label": "Keyword (optional search tag for feeds like Twitter or Flickr)",
      "tooltip": "Keyword",
      "placeHolder": ""
    }, {
      "type": "number",
      "fieldName": "interval",
      "label": "Interval between record changes (minutes)",
      "tooltip": "Interval between record change (minutes)",
      "constraints": {
        "min": 0.5,
        "max": 5.0,
        "places": 1
      }
    }, {
      "type": "number",
      "fieldName": "refresh",
      "label": "Refresh interval for feed (minutes)",
      "tooltip": "Refresh interval for feed (minutes)",
      "constraints": {
        "min": 5,
        "max": 60,
        "places": 0
      }
    }]
  }],
  "values": {
    "title": "",
    "subtitle": "",
    "color": "#2cbade",
    "feed": "flu",
    "keyword": "",
    "interval": 0.5,
    "refresh": 20
  }
}