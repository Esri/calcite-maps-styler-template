{
    "values": {
        "webmap": "56197689ee7e4a8aa9f0d8da09ffe721",
        "title": "Crowdsource Polling",
        "titleIcon": "images/banner.png",
        "displayText": "<b>Welcome to the crowdsource polling application</b><p>Use Crowdsource Polling to provide information and collect feedback on plans and issues around your community.</p><p>Search for a location or click an item in the list to get started.</p>",
        "color": "#206bdb",
        "featureLayer": {
            "id": "LandUseCasesVotesComments_8488",
            "fields": [{
                "id": "itemVotesField",
                "fields": ["VOTES"]
            }]
        },
        "commentNameField": "NAME",
        "allowFacebook": false,
        "facebookAppId": "",
        "allowGoogle": false,
        "googleplusClientId": "",
        "allowTwitter": true,
        "socialMediaDisclaimer": "Choose how you would like to sign in to this application. The name associated with your social media account will be added to any comments you post."
    },
    "configurationSettings": [{
        "category": "<b>App Settings</b>",
        "fields": [{
            "label": "Select a map",
            "fieldName": "webmap",
            "type": "webmap",
            "tooltip": "Web map displayed in the application"
        }, {
            "label": "Application title",
            "fieldName": "title",
            "type": "string",
            "tooltip": "Application name (max 23 chars)"
        }, {
            "label": "URL of application logo",
            "fieldName": "titleIcon",
            "type": "string",
            "tooltip": "Icon in top left corner of application. Icon should be 48px high."
        }, {
            "label": "Color scheme",
            "fieldName": "color",
            "type": "color",
            "tooltip": "Color scheme for app"
        }, {
            "label": "Help widget text",
            "fieldName": "displayText",
            "type": "string",
            "tooltip": "Text displayed in the help window. HTML tags can be used for formatting.",
            "stringFieldOption": "richtext"
        }]
    }, {
        "category": "<b>Content Settings</b>",
        "fields": [{
            "type": "paragraph",
            "value": "Configure how the application will interact with your layers."
        }, {
            "label": "Polling feature layer",
            "fieldName": "featureLayer",
            "type": "layerAndFieldSelector",
            "tooltip": "Point, line, or polygon layer containing the features to present in the application.",
            "layerOptions": {
                "supportedTypes": ["FeatureLayer"],
                "geometryTypes": ["esriGeometryPoint", "esriGeometryLine", "esriGeometryPolyline", "esriGeometryPolygon"]
            },
            "fields": [{
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger"],
                "multipleSelection": false,
                "fieldName": "itemVotesField",
                "label": "Field to store the vote tally for each report (optional)",
                "tooltip": "Numeric field in the selected layer for tracking the votes received for each feature."
            }]
        }]
    }, {
        "category": "<b>Access Settings</b>",
        "fields": [{
            "type": "paragraph",
            "value":"Allow your users to sign in to this application using their social media credentials. Comments submitted by authenticated users will have the commenters name automatically stored with their feedback."
        },{
            "type": "paragraph",
            "value":"See the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-polling/get-started/configure-social-media-signin/' target='_blank'>help</a> for the steps to register your app with Facebook and Google+."
        },{
            "label": "Field to store the name of authenticated commenters.",
            "fieldName": "commentNameField",
            "type": "string",
            "tooltip": "Field in a table with a geodatabase relationship to the selected feature layer for storing the name of authenticated commenters. Table must exist in map."
        }, {
            "label": "Allow users to sign in using Twitter",
            "fieldName": "allowTwitter",
            "type": "boolean",
            "tooltip": "Enable to allow users to sign in using their Twitter credentials"
        }, {
            "label": "Allow users to sign in using Facebook",
            "fieldName": "allowFacebook",
            "type": "boolean",
            "tooltip": "Enable to allow users to sign in using their Facebook credentials"
        }, {
            "label": "Facebook AppId",
            "fieldName": "facebookAppId",
            "type": "string",
            "tooltip": "AppId from registering this application with Facebook"
        }, {
            "label": "Allow users to sign in using Google+",
            "fieldName": "allowGoogle",
            "type": "boolean",
            "tooltip": "Enable to allow users to sign in using their Google+ credentials"
        }, {
            "label": "Google+ Client ID",
            "fieldName": "googleplusClientId",
            "type": "string",
            "tooltip": "Client ID from registering this application with Google+"
        }, {
            "label": "Sign in window text",
            "fieldName": "socialMediaDisclaimer",
            "type": "string",
            "placeholder": "",
            "tooltip": "Text to display in the Sign In window",
            "stringFieldOption": "richtext"
        }]
    }]
}

