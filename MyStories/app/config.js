var app = {};

app.cfg = {
	version: '1.0',
	isProduction: true,
	jsApiUrl: '//js.arcgis.com/3.14/',
	facebook: {
		appId: '737271002977269'
	},
	bitly: {
		login: 'esristorymaps',
		key: 'R_14fc9f92e48f7c78c21db32bd01f7014'
	},
	isEnglish: false,
	TIMEOUT_MILLISECONDS: 15000,
	scanNetworkManager: null,
	proxyNetworkManager: null,
	CONCURRENT_SCAN_REQUESTS: 8,
	CONCURRENT_PROXY_REQUESTS: 1,
	cacheManager: null	
};

var path = location.pathname.replace(/\/[^/]+$/, '/');
var loadJS = function(url, isExternal) {
	if(isExternal) {
		url = document.location.protocol == 'file:' ? 'http:' + url : url;
	}		
	else {
		url += '?v=' + app.version + (!app.isProduction ? '&_=' + new Date().getTime() : '');
	}
	
	/* jshint -W060 */
	document.write("<script language='javascript' type='text/javascript' src='" + url + "'><\/script>");
};


window.dojoConfig = {
	parseOnLoad: true,
	isDebug: false,
	useDeferredInstrumentation: true,
	cacheBust: false,
	packages: [
		{
			name: 'my',
			location: path + 'app/my'
		},
		{
			name: 'nls',
			location: path + 'resources/nls'
		},
		{
			name: 'lib-app',
			location: path + 'lib-app'
		},
		{
			name: 'lib-build',
			location: path + 'lib-build'
		},
		{
			name: 'create-app',
			location: path + 'my-stories-utils/create-app'
		}
	],
	aliases: [
		['text', 'lib-build/text']
	],
	// TODO
	// read the cookie -- which locale it is (common across arcgis.com domain)	
	locale: window.myStoriesLanguage
};

if(window.dojoConfig.locale === 'en') {
	app.cfg.isEnglish = true;
}

if (app.cfg.isProduction) {
	window.dojoConfig.aliases.push(['Handlebars', 'assets/js/libs/handlebars.runtime-v2.0.0.js']);
}
else {
	window.dojoConfig.aliases.push(['Handlebars', 'assets/js/libs/handlebars-v2.0.0.js']);
}



loadJS(app.cfg.jsApiUrl + 'init.js', true);

if(app.cfg.isProduction) {
	loadJS(path + 'app/my-stories-min.js');
}