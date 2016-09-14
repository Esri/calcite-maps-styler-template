{
    "values": {
        "group": "",
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
		"selectFeatureMessage": "Choose a report from the table or map.",
		"enableFilter": true,
		"helpDialogTitle": "Help",
		"helpDialogContent": "<p>Welcome to Crowdsource Manager! <\/p> <p>Use this application to review and update reports. To get started, choose a category and then choose a report from the table or map.<\/p> <p>The details of that report will load in the panel in the lower left corner of the screen. From this panel, you can also review images, charts, and other information associated with the selected report. Update the report details by clicking the pencil icon, or hold down the CTRL key while clicking multiple reports to open the batch editor.<\/p> <p>View the location of the report using the map in the lower right corner of the application.<\/p><p>Reports can be filtered by time or field values. If time filtering is enabled for your reports, a time slider will appear below the table. Drag the time slider handle(s) to show only reports from a specific time span in the map and table. If filtering based on field values is enabled for your reports, a filter icon will appear in the table header next to the name of the fields that can be used to filter the reports. Click the icon and specify which reports you'd like to see in the table and map.<\/p>",
		"popupTabText": "Info",
		"mediaTabText": "Media",
		"commentsTabText": "Comments",
		"showHelpIcon": false,
		"commentFormAttachmentSectionLabel": "Attachments"
    },
	"configurationSettings": [{
	    "category": "<b>App Settings</b>",
	    "fields": [{
	        "label": "Select a group",
	        "tooltip": "Choose a group that contains one or more maps containing layers of data to manage through your application.",
	        "type": "group"
	    }, {
	        "label": "Application title",
	        "tooltip": "Title displays in application header",
	        "type": "string",
	        "fieldName": "applicationName"
	    }, {
	        "label": "URL to a logo to display in the application header",
	        "tooltip": "Image should be 48px tall.",
	        "type": "string",
	        "fieldName": "applicationIcon"
	    }, {
	        "label": "URL to a favicon to display in browser tabs where your application is loaded",
	        "tooltip": "Icon to display in browser tabs",
	        "type": "string",
	        "fieldName": "applicationFavicon"
	    }, {
	        "label": "Application color",
	        "tooltip": "Application color scheme",
	        "type": "color",
	        "fieldName": "theme"
	    }, {
	        "label": "Color of selected table rows",
	        "tooltip": "Choose the color for highlighting selected rows in the table",
	        "type": "color",
	        "fieldName": "highlightRow"
	    }]
	}, {
	    "category": "<b>Map Settings</b>",
	    "fields": [{
	        "type": "subcategory",
	        "label": "Reference Layers"
	    }, {
	        "type": "paragraph",
	        "value": "By default, Crowdsource Manager apps will show only one editable layer at a time. Optionally, choose to also display non-editable map layers for additional context."
	    }, {
	        "label": "Show reference layers",
	        "tooltip": "Enable to show non-editable layers",
	        "type": "boolean",
	        "fieldName": "showNonEditableLayers"
	    }, {
	        "type": "subcategory",
	        "label": "Zoom Level"
	    }, {
	        "label": "When a report is selected from the table, the map will pan and zoom to show the location of that report. Specify how near (larger number) or far (smaller number) the map should zoom relative to the ground.",
	        "tooltip": "When a new report is selected in the table, the map will zoom to the associated feature using this zoom level.",
	        "type": "string",
	        "fieldName": "zoomLevel"
	    }, {
	        "type": "subcategory",
	        "label": "Map Information"
	    }, {
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
	    "category": "<b>Report Settings</b>",
	    "fields": [{
	        "type": "subcategory",
	        "label": "Details Tab"
	    }, {
	        "label": "Provide a label for the tab that displays the information for each report as it is <a href=\"http://links.esri.com/ArcGISOnline/Configurepop-ups\" target=\"_blank\">configured in the popup<\/a> for that layer. This tab is also used for editing report attributes and viewing non-media attachments.",
	        "tooltip": "Name of tab for displaying popup details information. This tab is also used for editing report attributes and viewing non-media attachments.",
	        "type": "string",
	        "fieldName": "popupTabText"
	    }, {
	        "type": "subcategory",
	        "label": "Media Tab"
	    }, {
	        "label": "Provide a label for the tab that displays images and charts associated with the currently selected report. This tab is only visible when the selected report contains at least one image <a href=\"http://links.esri.com/ArcGISOnline/AlterHostedService\" target=\"_blank\">attachment<\/a>, or <a href=\"http://links.esri.com/ArcGISOnline/Configurepop-ups/ShowImages\" target=\"_blank\">images<\/a> and <a href=\"http://links.esri.com/ArcGISOnline/Configurepop-ups/ShowCharts\" target=\"_blank\">charts<\/a> defined as part of the popup configuration. ",
	        "tooltip": "Name of tab for displaying image attachments and popup media.",
	        "type": "string",
	        "fieldName": "mediaTabText"
	    }, {
	        "type": "subcategory",
	        "label": "Related Records Tab"
	    }, {
	        "label": "Provide a label for the tab that displays <a href=\"http://links.esri.com/localgovernment/relationshipclass\">related records<\/a> associated with the currently selected report. This tab, which also toggles to an editing mode, is only visible when the selected report contains at least one visible related record.",
	        "tooltip": "The related records tab displays records from a single table that are related to the currently selected report. The values of editable fields in this related table can be updated in this panel as well. This tab is only visible when a report has at least one related record.",
	        "type": "string",
	        "fieldName": "commentsTabText"
	    }, {
	        "type": "paragraph",
	        "value": "Indicate how related records are displayed and edited: either by using a single field, or by using the <a href=\"http://links.esri.com/ArcGISOnline/Configurepop-ups\" target=\"_blank\">popup<\/a> defined for the table layer in the map."
	    }, {
	        "type": "string",
	        "fieldName": "commentField",
	        "label": "Provide the name of a single field to display, regardless of the popup settings. This value is ignored if you choose to build the form from the comment table popup (below).",
	        "tooltip": "Only content from related tables that have this field will be accessible through the application."
	    }, {
	        "label": "Header for section of the comments form where photos and other supporting files can be added to the comments. This section is only available when attachments are enabled on the layer.",
	        "tooltip": "Header for the section of the comments form where supporting files can be attached to the comments.",
	        "type": "string",
	        "fieldName": "commentFormAttachmentSectionLabel"
	    }, {
	        "type": "boolean",
	        "fieldName": "usePopupConfigurationForComment",
	        "label": "Display related records using the popup configuration.",
	        "tooltip": "Enable to display related records and the editing form based on the table layer's popup configuration instead of a single field. Fields that are marked editable in the popup will be editable in the application."
	    }, {
	        "type": "paragraph",
	        "value": "For more information on how popup configuration and data structure can enhance these tabs, check out the <a href=\"http://links.esri.com/localgovernment/help/crowdsource-manager\" target=\"_blank\">Crowdsource Manager documentation<\/a>."
	    }]
	}, {
	    "category": "<b>Filter Settings</b>",
	    "fields": [{
	        "type": "paragraph",
	        "value": "Attribute filters that that use the option to 'Ask For Values' and the time slider will be exposed in Crowdsource Manager when they have been configured on layers in the map."
	    }, {
	        "type": "paragraph",
	        "value": "By default, the application will honor the initial values of these filters. Optionally, choose to ignore the default filter and time slider values when the app loads and let your users apply the filters as necessary. Crowdsource Manager apps will always honor static filters on your map layers."
	    }, {
	        "label": "Apply default filters automatically",
	        "tooltip": "Enable to load the application with the default values of all dynamic filters applied.",
	        "type": "boolean",
	        "fieldName": "enableFilter"
	    }, {
	        "type": "paragraph",
	        "value": "For more information on configuring time and attribute filters for use in this app, check out the <a href=\"http://links.esri.com/localgovernment/help/crowdsource-manager\" target=\"_blank\">Crowdsource Manager documentation<\/a>."
	    }]
	}, {
	    "category": "<b>Help Settings</b>",
	    "fields": [{
	        "type": "paragraph",
	        "value": "Provide instructions for using the app, contact information, etc. in a panel that is accessible from the application header"
	    }, {
	        "type": "boolean",
	        "fieldName": "showHelpIcon",
	        "label": "Enable the help window",
	        "tooltip": "When disabled, the help window will not be accessible"
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
	    }]
	}]
}