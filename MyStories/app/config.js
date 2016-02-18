
app.cfg = {
	version: app.version,
	isProduction: true,
	jsApiUrl: '//js.arcgis.com/3.16/init.js',
	facebook: {
		appId: '276669785846752'
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
	cacheManager: null,
	DEFAULT_PORTAL_URL: window.location.href.indexOf('env=devQA') !== -1 ? 'devext.arcgis.com' : 'www.arcgis.com',
	DEFAULT_CLIENT_ID: 'arcgisonline',
	defaultBasicTemplateURL: '//storymaps.arcgis.com/en/app-list/basic/tutorial/',
	isSignedInPortal: false,
	folderWebApps: null
};

var path = location.pathname.replace(/\/[^/]+$/, '/');
var loadJS = function(url, isExternal) {
	if(isExternal) {
		url = document.location.protocol == 'file:' ? 'http:' + url : url;
	}
	else {
		url += '?v=' + app.cfg.version + (!app.cfg.isProduction ? '&_=' + new Date().getTime() : '');
	}

	/* jshint -W060 */
	document.write("<script language='javascript' type='text/javascript' src='" + url + "'><\/script>");
};


var getLanguage = function() {
	var language = '';
	// should take the URL language.

	if(window.builderIntegration) {
		if (window.location.search.match(/locale=([\w\-]+)/)) {
			language = RegExp.$1;
		}
	}

	// otherwise see if there is a preflang cookie set (for the site)
	else {
		language = document.documentElement.getAttribute('lang');
	}

	if(!language) {
		language = 'en';
	}

	return language;
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
			name: 'assets',
			location: path + 'assets'
		},
		{
			name: 'create-app',
			location: path + 'arcgis-storymaps-my-stories-utils/create-app'
		},
		{
			name: 'sign-in',
			location: path + 'arcgis-storymaps-my-stories-utils/sign-in'
		}
	],
	aliases: [
		['text', 'lib-build/text']
	],

	locale: getLanguage()
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




loadJS(app.cfg.jsApiUrl, true);

if(app.cfg.isProduction) {
	loadJS(path + 'app/my-stories-min.js');
}
