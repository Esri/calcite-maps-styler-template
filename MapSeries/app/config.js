app.cfg = {
	//
	// General UI
	//
	
	// Maximum number of entries
	MAX_NB_ENTRIES: 15,
	
	TIMEOUT_VIEWER_LOAD: 5000,
	TIMEOUT_VIEWER_REQUEST: 12000,
	TIMEOUT_BUILDER_REQUEST: 20000,
	
	// Control the social button configuration in builder
	// If disabled author won't be able to activate them
	// if disabled after the app has been created, this will override the settings
	HEADER_SOCIAL: {
		facebook: true,
		twitter: true,
		bitly: {
			enable: true,
			login: "esristorymaps",
			key: "R_14fc9f92e48f7c78c21db32bd01f7014"
		}
	},
	
	//
	// Layouts
	//
	
	// Size and position of represent the value relative to the Map
	LAYOUTS: [
		{
			id: "tab",
			thumbnail: "resources/tpl/builder/icons/builder-layout-tab.png",
			liveApp: "http://links.esri.com/storymaps/map_series_example_tabbed",
			sizes: { small: '25%', medium: '35%', large: '45%' },
			positions: ["left", "right"],
			themes: [
				{name: "float-default-1", themeMajor: "white", header: "#28323a", panel: "#DBD9DA", media: "#EEEEEE", text: "#000000", textLink: "#555", mapControls: "#DBD9DA", softText: "#444",    softBtn: "#444", esriLogo: "white"}
			]
		},
		{
			id: "accordion",
			thumbnail: "resources/tpl/builder/icons/builder-layout-accordion.png",
			liveApp: "http://links.esri.com/storymaps/map_series_example_side_accordion",
			sizes: { small: '30%', medium: '40%', large: '50%' },
			positions: ["left", "right"],
			themes: [
				{name: "side-default-1", themeMajor: "white", header: "#28323a", panel: "#DBD9DA", media: "#EEEEEE", text: "#000000", textLink: "#555", mapControls: "#DBD9DA",	softText: "#444",    softBtn: "#444",    esriLogo: "white", accordionNumber: "#FFFFFF"},
				{name: "side-default-2", themeMajor: "black", header: "#000000", panel: "#D3D3D3", media: "#EEEEEE", text: "#000000", textLink: "#DDD", mapControls: "#D3D3D3",	softText: "#444",    softBtn: "#444",    esriLogo: "white", accordionNumber: "#FFFFFF"},
				{name: "side-default-3", themeMajor: "white", header: "#726458", panel: "#FFF8E9", media: "#C9C1B9", text: "#000000", textLink: "#555", mapControls: "#726458",	softText: "#c0c0c0", softBtn: "#444",    esriLogo: "black", accordionNumber: "#726458"},
				{name: "side-default-4", themeMajor: "white", header: "#676C7F", panel: "#F9F9EF", media: "#424D51", text: "#000000", textLink: "#555", mapControls: "#676C7F",	softText: "#444",	 softBtn: "#aaa",    esriLogo: "black", accordionNumber: "#676C7F"},
				{name: "side-default-5", themeMajor: "white", header: "#68AAE1", panel: "#FFFFFF", media: "#E8E8DF", text: "#000000", textLink: "#555", mapControls: "#68AAE1",	softText: "#444",    softBtn: "#4D4D4D", esriLogo: "black", accordionNumber: "#68AAE1"},
				{name: "side-default-6", themeMajor: "white", header: "#676C7E", panel: "#F9F9EF", media: "#C2E3EE", text: "#000000", textLink: "#555", mapControls: "#676C7E",	softText: "#444", 	 softBtn: "#AAA",    esriLogo: "black", accordionNumber: "#676C7E"}
			]
		},
		{
			id: "bullet",
			thumbnail: "resources/tpl/builder/icons/builder-layout-bullet.png",
			liveApp: "http://links.esri.com/storymaps/map_series_example_bullets",
			sizes: { small: '25%', medium: '35%', large: '45%' },
			positions: ["left", "right"],
			themes: [
				{name: "float-default-1", themeMajor: "white", header: "#28323a", panel: "#DBD9DA", media: "#EEEEEE", text: "#000000", textLink: "#555", mapControls: "#DBD9DA", softText: "#444",    softBtn: "#444", esriLogo: "white"}
			]
		}
	],
	
	/*
	 * Builder
	 */
	
	HELP_URL: "http://links.esri.com/storymaps/map_series_app",
	
	// Control the authorized data source (for initialization and import screen)
	AUTHORIZED_IMPORT_SOURCE: {
		flickr: true,
		facebook: true,
		picasa: true,
		youtube: true
	},
	
	// Online photo sharing services connection parameters
	FLICKR_API_KEY: "750b36a2ac65a72e03cf9cef06d79f45",
	// The Facebook ID is only valid on arcgis.com domain
	// If used on another domain, user will have an error in the Facebook popup after login
	// To use Facebook import on Portal for ArcGIS, create your own ID at https://developers.facebook.com/ 
	// or set AUTHORIZED_IMPORT_SOURCE.facebook to false
	FACEBOOK_APP_ID: "276669785846752",
	
	//
	// Builder direct creation
	//
	
	// Text to be used as the browser page title during app creation
	TPL_NAME: "Map Series",
	WEBAPP_TAG: ["Story Map", "Map Series"],
	WEBAPP_KEYWORD_GENERIC: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map"],
	WEBAPP_KEYWORD_APP: ["Story Map", "Story Maps", "MapSeries"],

	//
	// Portal configuration
	//
	
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