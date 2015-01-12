{
    "configurationSettings": [{
        "category": "<b>Configure Template</b>",
        "fields": [{
            "type": "webmap"
        }, {
            "label": "Title",
            "fieldName": "title",
            "type": "string",
            "placeHolder": "Title",
            "tooltip": "Text to display across top of app"
        }, {
            "label": "New button text",
            "fieldName": "action",
            "type": "string",
            "placeHolder": "New",
            "tooltip": "Text to display in the new submission button"
        }, {
            "label": "App color",
            "fieldName": "color",
            "type": "color",
            "tooltip": "Color theme for app"
        }, {
            "label": "Allow up-votes",
            "fieldName": "allowUpVotes",
            "type": "boolean",
            "tooltip": "Display and enable button for voting for an idea"
        }, {
            "label": "Allow Facebook sign-ins",
            "fieldName": "allowFacebook",
            "type": "boolean",
            "tooltip": "Display and enable button for a Facebook sign-in"
        }, {
            "label": "Allow Twitter sign-ins",
            "fieldName": "allowTwitter",
            "type": "boolean",
            "tooltip": "Display and enable button for a Twitter sign-in"
        }, {
            "label": "Ideas layer and 'up-votes' field",
            "fieldName": "ideasLayer",
            "type": "layerandfieldselector",
            "tooltip": "Choose the layer to hold ideas and its field to hold the count of up-votes",
            "layerOptions": {
                "supportedTypes": ["FeatureLayer"],
                "geometryTypes": ["esriGeometryPoint", "esriGeometryLine", "esriGeometryPolyline", "esriGeometryPolygon"]
            },
            "fieldOptions": {
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger"]
            }
        }, {
            "label": "Comments table and ideas id column",
            "fieldName": "commentsTable",
            "type": "layerandfieldselector",
            "tooltip": "Choose the table to hold comments about ideas and the column it uses to hold the id of the associated idea",
            "layerOptions": {
                "supportedTypes": ["FeatureLayer"],
                "geometryTypes": ["esriGeometryPoint", "esriGeometryLine", "esriGeometryPolyline", "esriGeometryPolygon"]
            },
            "fieldOptions": {
                "supportedTypes": ["esriFieldTypeInteger"]
            }
        }]
    }],
    "values": {
        "title": "Title",
        "action": "New",
        "color": "#206bdb",
        "allowUpVotes": false,
        "allowFacebook": false,
        "allowTwitter": false,
        "ideasLayer": null,
        "commentsTable": null
    }
}
