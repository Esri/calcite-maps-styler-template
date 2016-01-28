{
    "values": {
        "group": "d3e11b4398984ec481d3ae9bde0d2810",
        "theme": "#d15706",
        "applicationName": "",
        "applicationIcon": "",
        "applicationFavicon": "",
        "zoomLevel": 12,
        "commentField": "COMMENTS",
        "usePopupConfigurationForComment": false,
        "webMapInfoDescription": true,
        "webMapInfoSnippet": false,
        "webMapInfoOwner": true,
        "webMapInfoCreated": false,
        "webMapInfoModified": false,
        "webMapInfoLicenseInfo": false,
        "webMapInfoAccessInformation": false,
        "webMapInfoTags": false,
        "webMapInfoNumViews": false,
        "webMapInfoAvgRating": false
    },
    "configurationSettings": [{
        "category": "<b>App Settings</b>",
        "fields": [{
            "type": "group",
            "label": "Select group",
            "tooltip": "Group displayed in the application"
        }, {
            "type": "string",
            "fieldName": "applicationName",
            "label": "Application title",
            "tooltip": "Application title (max 27 chars)"
        }, {
            "label": "URL of application logo",
            "fieldName": "applicationIcon",
            "type": "string",
            "tooltip": "Icon in top left corner of application. Icon should be 48px high."
        }, {
            "type": "color",
            "fieldName": "theme",
            "tooltip": "Application color theme",
            "label": "Color scheme"
        }]
    }, {
        "category": "<b>Content Settings</b>",
        "fields": [{
            "type": "paragraph",
            "value": "Configure how the application will interact with your maps and layers."
        }, {
            "type": "boolean",
            "fieldName": "usePopupConfigurationForComment",
            "label": "Build comment form from comment table popup",
            "tooltip": "Enable to display a comment submission form based on the popup configuration for the comments layer instead of a single field for comment entry."
        }, {
            "type": "string",
            "fieldName": "commentField",
            "label": "Choose a field to display a single field comment entry form (optional)",
            "tooltip": "Text field in the comments tables that stores feedback. Field name must be the same across all layers and maps. This can be overwritten by choosing to build the form from the comment table popup."
        }, {
            "type": "string",
            "fieldName": "zoomLevel",
            "label": "Zoom level for selected reports",
            "tooltip": "Configure zoom level"
        }, {
            "type": "color",
            "fieldName": "activeRow",
            "tooltip": "Active row and feature",
            "label": "Choose a highlight color for the active row in the table and corresponding feature in the map"
        }, {
            "type": "paragraph",
            "value": "Choose the item information to display in the map information panel:"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoDescription",
            "label": "Description",
            "tooltip": "Enable to show webmap description"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoSnippet",
            "label": "Short Summary",
            "tooltip": "Enable to show webmap summary"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoOwner",
            "label": "Owner Name",
            "tooltip": "Enable to show webmap owner"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoCreated",
            "label": "Creation Date",
            "tooltip": "Enable to show webmap created date"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoModified",
            "label": "Modification Date",
            "tooltip": "Enable to show webmap modified date"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoLicenseInfo",
            "label": "Access and Use Constraints",
            "tooltip": "Enable to show webmap licensing information"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoAccessInformation",
            "label": "Credits",
            "tooltip": "Enable to show webmap credits"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoTags",
            "label": "Tags",
            "tooltip": "Enable to show webmap tags"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoNumViews",
            "label": "Number of Views",
            "tooltip": "Enable to show webmap number of views"
        }, {
            "type": "boolean",
            "fieldName": "webMapInfoAvgRating",
            "label": "Average Rating",
            "tooltip": "Enable to show webmap average rating"
        }]
    }]
}