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
        "selectFeatureMessage": "Choose a report to get started",
        "enableFilter": true,
        "helpDialogTitle": "Help",
        "helpDialogContent": "<p>Crowdsource Manager, a companion application to Crowdsource Reporter, allows users within an organization to review and update problems or observations .</p>",
        "popupTabText": "Details",
        "mediaTabText": "Media",
        "commentsTabText": "Comments",
        "showHelpIcon": false
    },
    "configurationSettings": [{
        "category": "<b>App Settings</b>",
        "fields": [{
            "label": "Select a group",
            "tooltip": "Group displayed in the application",
            "type": "group"
        }, {
            "label": "Application title",
            "tooltip": "Title displays in application header",
            "type": "string",
            "fieldName": "applicationName"
        }, {
            "label": "URL of application logo",
            "tooltip": "Logo displays in top left corner of application. Image should be 48px tall.",
            "type": "string",
            "fieldName": "applicationIcon"
        }, {
            "label": "Color scheme",
            "tooltip": "Application color scheme",
            "type": "color",
            "fieldName": "theme"
        }]
    }, {
        "category": "<b>Content Settings</b>",
        "fields": [{
            "type": "paragraph",
            "value": "By default, Crowdsource Manager apps will show only one editable layer at a time. Optionally, choose to display your non-editable map layers with each editable layer to provide additional context for the reports."
        }, {
            "label": "Show supporting layers",
            "tooltip": "Enable to show non-editable layers",
            "type": "boolean",
            "fieldName": "showNonEditableLayers"
        }, {
            "type": "paragraph",
            "value": "If your map layers contain dynamic filters (using the 'Ask for Values' setting in the layer filter settings) these dynamic filters will be made accessible in your application. By default, the application will honor these filters as well, or choose to ignore the default dynamic filter values when the app loads, and let your users apply the filters as neccessary. Crowdsource Manager apps will always honor static filters on your map layers."
        }, {
            "label": "Show filters with default value",
            "tooltip": "Enable to load the application with the default values of all dynamic filters applied.",
            "type": "boolean",
            "fieldName": "enableFilter"
        }, {
            "label": "Label for popup content tab",
            "tooltip": "The popup content tab displays the information for each report as it is configured in the popup settings for that layer, including any non-image attachments. The values of editable fields can be updated in this panel as well.",
            "type": "string",
            "fieldName": "popupTabText"
        }, {
            "label": "Label for media tab",
            "tooltip": "The media tab displays all image attachments, images added to the popup by referencing a field in the layer, and popup charts. This tab is only visible when a report contains at least one of these items.",
            "type": "string",
            "fieldName": "mediaTabText"
        }, {
            "label": "Label for related records tab",
            "tooltip": "The related records tab displays records from a single table that are related to the currently selected report. The values of editable fields in this related table can be updated in this panel as well. This tab is only visible when a report has at least one related record.",
            "type": "string",
            "fieldName": "commentsTabText"
        }, {
            "label": "Map zoom level for selected reports",
            "tooltip": "When a new report is selected in teh table, the map will zoom to the associated feature using this zoom level.",
            "type": "string",
            "fieldName": "zoomLevel"
        }, {
            "label": "Highlight color for selected table rows",
            "tooltip": "Choose the color for highlighting selected rows in the table",
            "type": "color",
            "fieldName": "highlightRow"
        }]
    }, {
        "category": "<b>Map Information Settings</b>",
        "fields": [{
            "type": "paragraph",
            "value": "Select the item details elements that will be visible for each map:"
        }, {
            "label": "Description",
            "tooltip": "Enable to show webmap description",
            "type": "boolean",
            "fieldName": "webMapInfoDescription"
        }, {
            "label": "Short Summary",
            "tooltip": "Enable to show webmap summary",
            "type": "boolean",
            "fieldName": "webMapInfoSnippet"
        }, {
            "label": "Owner Name",
            "tooltip": "Enable to show webmap owner",
            "type": "boolean",
            "fieldName": "webMapInfoOwner"
        }, {
            "label": "Creation Date",
            "tooltip": "Enable to show webmap created date",
            "type": "boolean",
            "fieldName": "webMapInfoCreated"
        }, {
            "label": "Modification Date",
            "tooltip": "Enable to show webmap modified date",
            "type": "boolean",
            "fieldName": "webMapInfoModified"
        }, {
            "label": "Access and Use Constraints",
            "tooltip": "Enable to show webmap licensing information",
            "type": "boolean",
            "fieldName": "webMapInfoLicenseInfo"
        }, {
            "label": "Credits",
            "tooltip": "Enable to show webmap credits",
            "type": "boolean",
            "fieldName": "webMapInfoAccessInformation"
        }, {
            "label": "Tags",
            "tooltip": "Enable to show webmap tags",
            "type": "boolean",
            "fieldName": "webMapInfoTags"
        }, {
            "label": "Number of Views",
            "tooltip": "Enable to show webmap number of views",
            "type": "boolean",
            "fieldName": "webMapInfoNumViews"
        }, {
            "label": "Average Rating",
            "tooltip": "Enable to show webmap average rating",
            "type": "boolean",
            "fieldName": "webMapInfoAvgRating"
        }]
    }, {
        "category": "<b>Related Record Settings</b>",
        "fields": [{
            "type": "paragraph",
            "value": "Related records can be used to collect and display additional information for each report. For example, related records could be comments collected through a configuration of Crowdsource Reporter or inspection results collected using a configuration of Collector for ArcGIS. Use Crowdsource Manager to review and updated the records in up to one related table for each feature layer."
        }, {
            "type": "boolean",
            "fieldName": "usePopupConfigurationForComment",
            "label": "Display related records using the popup configuration for the related table layer.",
            "tooltip": "Enable to display related records and the editing form based on the table layer's popup configuration instead of a single field. Fields that are marked editable in the popup will be editable in the application."
        }, {
            "type": "string",
            "fieldName": "commentField",
            "label": "Alternatively, provide the name of a field in the related table(s) to display content from a single field for each related record, regardless of the popup settings.",
            "tooltip": "Only content from related tables that have this field will be accessible through the application. This value is ignored if you choose to build the form from the comment table popup (previous option)."
        }]
    }, {
        "category": "<b>Help Settings</b>",
        "fields": [{
            "type": "paragraph",
            "value": "Display a widget with instructions for using the app, contact information, etc. The help window"
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
            "type": "boolean",
            "fieldName": "showHelpIcon",
            "label": "Show/Hide help icon.",
            "tooltip": "To Show/Hide help icon used to provide overview of the application."
        }]
    }]
}