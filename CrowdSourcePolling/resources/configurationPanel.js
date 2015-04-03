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
            "label": "Help Text",
            "fieldName": "displayText",
            "type": "string",
            "placeHolder": "<b>Welcome to the crowdsource polling application</b><hr/>",
            "tooltip": "Text to display when the help icon is clicked"
        }, {
            "label": "Theme",
            "fieldName": "color",
            "type": "color",
            "placeHolder": "#206bdb",
            "tooltip": "Color theme for app"
        }, {
            "label": "Feature layer",
            "fieldName": "featureLayer",
            "type": "layerandfieldselector",
            "tooltip": "Choose the layer that contains the features for this app",
            "layerOptions": {
                "supportedTypes": ["FeatureLayer"],
                "geometryTypes": ["esriGeometryPoint", "esriGeometryLine", "esriGeometryPolyline", "esriGeometryPolygon"]
            }
        }, {
            "label": "Comment Table Name Field",
            "fieldName": "commentNameField",
            "type": "string",
            "placeHolder": "",
            "tooltip": "Name of field in the table that stores the commenter's name"
        }, {
            "label": "Votes Field",
            "fieldName": "itemVotesField",
            "type": "string",
            "placeHolder": "",
            "tooltip": "Name of field in the feature layer that stores votes for the item"
        }, {
            "label": "Allow Facebook sign-ins",
            "fieldName": "allowFacebook",
            "type": "boolean",
            "tooltip": "Display and enable button for a Facebook sign-in"
        }, {
            "label": "Facebook App Id",
            "fieldName": "facebookAppId",
            "type": "string",
            "placeholder": "808394189204220",
            "tooltip": "App id from registering app URL at https://developers.facebook.com/"
        }, {
            "label": "Allow Google+ sign-ins",
            "fieldName": "allowGoogle",
            "type": "boolean",
            "tooltip": "Display and enable button for a Google+ sign-in"
        }, {
            "label": "Google+ Client Id",
            "fieldName": "googleplusClientId",
            "type": "string",
            "placeholder": "862973275076-qadao43h9btc27oui3mfhj846rh4so6o.apps.googleusercontent.com",
            "tooltip": "Client id from registering app URL at https://console.developers.google.com/project"
        }, {
            "label": "Allow Twitter sign-ins",
            "fieldName": "allowTwitter",
            "type": "boolean",
            "tooltip": "Display and enable button for a Twitter sign-in"
        }, {
            "label": "Social Media Disclaimer",
            "fieldName": "socialMediaDisclaimer",
            "type": "string",
            "placeholder": "",
            "tooltip": "Text to display above social media sign-in buttons"
        }
        ]
    }],
    "values": {
        "title": "Title",
        "displayText": "",
        "color": "#206bdb",
        "commentNameField": "",
        "itemVotesField": "",
        "allowFacebook": false,
        "allowGoogle": false,
        "allowTwitter": false,
        "facebookAppId": "",
        "googleplusClientId": "",
        "socialMediaDisclaimer": ""
    }
}

