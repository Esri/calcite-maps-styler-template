{
    "values": {
        "group": "4c4ea6122c1a4313bab674bc4d9cf83b",
        "theme": "#f26e1f",
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
        "webMapInfoAvgRating": false,
        "showNonEditableLayers": false,
        "selectFeatureMessage": "Select a feature to get started",
        "enableFilter": true,
        "helpDialogTitle": "Help Page",
        "helpDialogContent": "<p>Crowdsource Manager, a companion group template to Crowdsource Reporter, allows users within an organization to review problems or observations submitted through the Reporter application.</p>",
        "popupTabText": "Popup",
        "mediaTabText": "Media",
        "commentsTabText": "Comments"
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
            "fieldName": "highlightRow",
            "tooltip": "Highlight color of a row",
            "label": "Choose a color for highlighting a row in the table"
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
        }, {
            "type": "boolean",
            "fieldName": "showNonEditableLayers",
            "label": "Show Non Editable Layers",
            "tooltip": "Enable to show non editable layers on map"
        }, {
            "type": "string",
            "fieldName": "selectFeatureMessage",
            "label": "Details panel message",
            "tooltip": "This message is displayed in details panel when no feature is selected in data viewer"
        }, {
            "type": "boolean",
            "fieldName": "enableFilter",
            "label": "Show filters with default value",
            "tooltip": "If this field is true default value of filters will be displayed else empty values will be displayed"
        }, {
            "type": "string",
            "fieldName": "helpDialogTitle",
            "label": "Help window title",
            "tooltip": "Text displayed at the top of the help window"
        }, {
            "type": "string",
            "fieldName": "helpDialogContent",
            "label": "Dialog content",
            "stringFieldOption": "richtext",
            "tooltip": "Text and graphics that will display in the help window."
        }, {
            "type": "string",
            "fieldName": "popupTabText",
            "label": "Text to be displayed on popup tab",
            "tooltip": "Text to be displayed on popup tab in details panel"
        }, {
            "type": "string",
            "fieldName": "mediaTabText",
            "label": "Text to be displayed on media tab",
            "tooltip": "Text to be displayed on media tab in details panel"
        }, {
            "type": "string",
            "fieldName": "commentsTabText",
            "label": "Text to be displayed on comments tab",
            "tooltip": "Text to be displayed on comments tab in details panel"
        }]
    }]
}