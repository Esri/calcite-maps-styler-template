app.cfg = {
	// Choose between "series" and "basic"
	MODE: "series",
	
	//
	// UI
	//
	
	// Enable embed mode: disable header on desktop 
	// Can also be set through url parameter ?embed
	EMBED: false,
	
	// Header Logo
	HEADER_LOGO_URL: "resources/tpl/viewer/icons/esri-logo.png",
	HEADER_LOGO_TARGET: "http://www.esri.com",
	// Header top right link
	HEADER_LINK_TEXT: "A story map",
	HEADER_LINK_URL: "http://storymaps.arcgis.com",
	// Control display of Facebook and Twitter links
	HEADER_SOCIAL: {
		facebook: true,
		twitter: true,
		bitly: {
			enable: true,
			login: "esristorymaps",
			key: "R_14fc9f92e48f7c78c21db32bd01f7014"
		}
	},
	
	// Header, Picture Panel and Carousel colors
	COLORS: ["#444", "#797979", "#c2c2c2"],
	
	// Add a 'zoom on my location' button under the +/home/- buttons
	// For example this is not supported in IE 8
	DISPLAY_LOCATE_BUTTON: false,
	
	TIMEOUT_VIEWER_LOAD: 12000,
	TIMEOUT_VIEWER_REQUEST: 8000,
	TIMEOUT_BUILDER_REQUEST: 20000,
	
	//
	// DATA
	//
	
	// TODO
	
	//
	// Builder
	//
	
	HELP_URL: "http://storymapsdev.arcgis.com/en/app-list/map-tour/",
	
	//
	// Builder direct creation
	//
	
	// Text to be used as the browser page title during app creation
	TPL_NAME: "TemplateName",
	WEBAPP_TAG: [],
	WEBMAP_TAG: ["map"],
	WEBAPP_KEYWORD: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map", "Story Maps", "Tpl"],
	WEBMAP_KEYWORD: ["ArcGIS Online", "Explorer Web Map", "Map", "Online Map", "Web Map", "Story Maps", "Tpl"],

	// TODO
	
	// Online photo sharing services connection parameters
	FLICKR_API_KEY: "750b36a2ac65a72e03cf9cef06d79f45",
	// The Facebook ID is only valid on arcgis.com domain
	// If used on another domain, user will have an error in the Facebook popup after login
	// To use Facebook import on Portal for ArcGIS, create your own ID at https://developers.facebook.com/ 
	// or set AUTHORIZED_IMPORT_SOURCE.facebook to false
	FACEBOOK_APP_ID: "471023926309627",
	
	LAYOUTS: [
		{
			id: "layout1",
			title: "Layout1",
			description: "blablabla",
			thumbnail: "resources/tpl/builder/icons/builder-layout-layout1.png"
		},
		{
			id: "layout2",
			title: "Layout2",
			description: "blablabla",
			thumbnail: "resources/tpl/builder/icons/builder-layout-layout2.png"
		}
	],
	
	COLOR_SCHEMES:  [
		// COLORS is added as the first item at runtime
		{name: "Black", headerColor: "#000", middleColor: "#797979", footerColor: "#c2c2c2"},
		{name: "Blue", headerColor: "#0e3867", middleColor: "#5d6f89", footerColor: "#9096a9"},
		{name: "Green", headerColor: "#1a3606", middleColor: "#737c6c", footerColor: "#a8b09e"}
	],
	// Optional array of server that will leverage CORS (for developement or specific cross domain deployment)
	CORS_SERVER: [],
	
	// Edit those to set a custom sharing or proxy URL
	// You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
	// If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	//DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy"
	//DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};