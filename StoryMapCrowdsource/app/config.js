/*! crowdsource-storytelling-template-js - v0.0.0 - 2016-05-16, 04:13:06 PM - This application is released under the Apache License V2.0 by Esri http://www.esri.com/ - https://github.com/Esri/crowdsource-storytelling-template-js */'use strict';

window.app.cfg = {
	BITLY_API_KEY: {
		login: 'esristorymaps',
		key: 'R_14fc9f92e48f7c78c21db32bd01f7014'
	},
	// The Facebook ID is only valid on arcgis.com domain
	// If used on another domain, user will have an error in the Facebook popup after login
	// To use Facebook import on Portal for ArcGIS, create your own ID at https://developers.facebook.com/
	// or set AUTHORIZED_IMPORT_SOURCE.facebook to false
	FACEBOOK_APP_ID: '548250915353775',
	// Edit those to set a custom sharing or proxy URL
	// You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
	// If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
	DEFAULT_SHARING_URL: '//www.arcgis.com/sharing/content/items',
	//DEFAULT_SHARING_URL: '//portal.internal.com/arcgis/sharing/content/items',
	DEFAULT_PROXY_URL: '//www.arcgis.com/sharing/proxy'
	//DEFAULT_PROXY_URL: '//portal.internal.com/arcgis/sharing/proxy'
};
//# sourceMappingURL=config.js.map
