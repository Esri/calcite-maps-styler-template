/* 
This source is a compressed form of part of the git commit 
ee8453cf2497ccdf 2014-02-14 13:05:24 -0800
Uncompressed source is available from https://github.com/Esri/local-government-online-apps 
*/ 
/*

 | ArcGIS Solutions
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
*/
define("js/lgonlineBuildUI","dojo/on dojo/Deferred dojo/DeferredList esri/arcgis/utils dojo/io/script dojo/_base/lang config/commonConfig esri/arcgis/Portal esri/IdentityManager dojo/require!esri/utils".split(" "),function(t,f,u,v,w,x,l,y){dojo.declare("js.LGArcGISAccess",null,{constructor:function(a){var b,c=this;this.ready=new f;void 0!==a&&dojo.safeMixin(this,a);this.timeout=this.timeout||5E3;this.portalUrl=this.sharingUrl||location.protocol+"//www.arcgis.com";b=setTimeout(function(){c.ready.reject(c)},
this.timeout);this.portal=new y.Portal(this.portalUrl);t(this.portal,"ready",function(){clearTimeout(b);c.ready.resolve(c)})},getItem:function(a){var b=new f;this.portal.queryItems({q:"id: "+a}).then(function(c){c&&c.results&&1===c.results.length?b.resolve(c.results[0]):b.reject(a)},function(a){b.reject(a)});return b},getItemWithData:function(a){return v.getItem(a)},getGroup:function(a){var b=new f;this.portal.queryGroups({q:"id: "+a}).then(function(c){c&&c.results&&1===c.results.length?b.resolve(c.results[0]):
b.reject(a)},function(a){b.reject(a)});return b},getGroupItems:function(a){var b=new f;this.portal.queryGroups({q:"id: "+a}).then(function(c){c&&c.results&&1===c.results.length?c.results[0].queryItems().then(function(c){c&&c.results?b.resolve(c.results):b.reject(a)},function(a){b.reject(a)}):b.reject(a)},function(a){b.reject(a)});return b}});dojo.declare("js.LGUIBuilder",null,{constructor:function(a,b,c){var d=this,e={},g=new f,k=new f,p=null,m=null,h=null,q=null,n=null,r=null,s=null;this.ready=new f;
"string"===typeof a&&(e=this.parseQueryString(a,!0));a=this.setDefaults(l);this.i18n=dojo.i18n.getLocalization("esriTemplate","template");this.uiSpecification={};this.values={};a.then(function(){e.appid?(new js.LGArcGISAccess(l)).ready.then(function(a){a.getItemWithData(e.appid).then(function(b){b&&b.itemData.source&&b.itemData.values?(r=b.itemData.values,a.getItemWithData(b.itemData.source).then(function(a){n=a.itemData.ui;s=a.itemData.values;g.resolve(d);console.log("Using template "+a.item.id)},
function(a){"ABORTED"!==a.message&&alert(a.message);g.reject(a.message)})):g.reject(null)},function(a){"ABORTED"!==a.message&&alert(a.message);g.reject(a.message)})},function(a){g.reject(a)}):g.resolve(null);b&&"object"===typeof b?(m=b,k.resolve(b)):b&&"string"===typeof b||e.app||c?(p=b&&"string"===typeof b?b:e.app?e.app:c,d.loadFromFile(p).then(function(a){h=a.ui||null;q=a.values||null;k.resolve(d)},function(a){k.reject(a)})):k.resolve(null);(new u([g,k])).then(function(a){!a[0][0]||!a[1][0]?d.ready.reject(d):
(m?(d.uiSpecification=m,console.log("Using override object for UI")):h&&"string"===typeof b?(d.uiSpecification=h,console.log("Using override file "+b+".json for UI")):n?(d.uiSpecification=n,console.log("Using appId "+e.appid+" for UI")):h&&e.app?(d.uiSpecification=h,console.log("Using app file "+e.app+".json for UI")):h&&c?(d.uiSpecification=h,console.log("Using default file "+c+".json for UI")):console.warn("No UI found"),d.values=q||{},dojo.mixin(d.values,s),dojo.mixin(d.values,r),dojo.mixin(d.values,
e),d.values=d.organizeConfigValues(d.values),d.values.Shared=d.values.Shared||{},d.values.Shared.commonConfig=l,d.ready.resolve(d))})})},parseQueryString:function(a,b){var c={};(a||"?").substr(1).replace(/([^&=]+)=?([^&]*)(?:&+|$)/g,function(a,e,f){b?c[e]=f:(c[e]=c[e]||[],c[e].push(f))});return c},parseJSON:function(a){try{return window.JSON.parse(a)}catch(b){}},organizeConfigValues:function(a){var b,c,d={};for(b in a)a.hasOwnProperty(b)&&(c=b.split("."),1===c.length?(d.Shared||(d.Shared={}),d.Shared[b]=
a[b]):(d[c[0]]||(d[c[0]]={}),d[c[0]][c[1]]=unescape(a[b])));return d},launch:function(){var a=this,b=new f;setTimeout(function(){dojo.forEach(a.uiSpecification,function(b){a.instantiateClass(b)});b.resolve()});return b},instantiateClass:function(a){var b,c=null;try{b=this.reduceToVariableName(a.classname),a.styles&&this.injectCSS(a.styles),a.config&&(a.config.i18n=this.i18n,a.config.rootId&&dojo.mixin(a.config,this.getValues(a.config.rootId)||{}),dojo.mixin(a.config,this.getValues("Shared"))),c=new (eval(b))(a.config)}catch(d){}return c},
reduceToVariableName:function(a){return a.replace(/[^\w\d\x2e\x5f]/g,"")},getValues:function(a){var b=null;this.values&&this.values[a]&&(b=this.values[a]);return b},injectCSS:function(a){var b;b=document.createElement("style");b.setAttribute("type","text/css");b.styleSheet?b.styleSheet.cssText=a:(a=document.createTextNode(a),b.appendChild(a));document.body.appendChild(b);return b},loadFromFile:function(a,b){var c=null;return c=void 0===b||b?this.loadJSONFile(a):this.loadJSFile(a)},loadJSFile:function(a){var b=
new f;w.get({url:a+".js",load:function(){b.resolve(a)},error:function(a){b.reject(a)}});return b},loadJSONFile:function(a){var b=new f;dojo.xhrGet({url:a+".json",handleAs:"json",load:function(a){b.resolve(a)},error:function(a){b.reject(a)}});return b},setDefaults:function(a){var b,c,d=new f;b=location.pathname.indexOf("/apps/");-1===b&&(b=location.pathname.indexOf("/home/"));-1!==b&&(c=location.pathname.substr(0,b));a.sharingUrl||(a.sharingUrl=-1!==b?location.protocol+"//"+location.host+c:location.protocol+
"//www.arcgis.com");console.log("sharingUrl: "+a.sharingUrl);!a.proxyUrl&&-1!==b&&(a.proxyUrl=location.protocol+"//"+location.host+c+"/sharing/proxy");console.log("proxyUrl: "+a.proxyUrl);-1!==b?(b=esri.request({url:a.sharingUrl+"/sharing/rest/portals/self",content:{f:"json"},callbackParamName:"callback"}),b.then(function(b){a.self=b;b.isPortal&&"single tenant"===b.portalMode&&(a.sharingUrl=b.portalHostname);x.mixin(a.helperServices,b.helperServices);esri.arcgis.utils.arcgisUrl=a.sharingUrl+"/sharing/rest/content/items";
a.helperServices&&(a.helperServices.geometry&&a.helperServices.geometry.url)&&(esri.config.defaults.geometryService=new esri.tasks.GeometryService(a.helperServices.geometry.url));d.resolve(!0)})):(esri.arcgis.utils.arcgisUrl=a.sharingUrl+"/sharing/rest/content/items",a.helperServices&&(a.helperServices.geometry&&a.helperServices.geometry.url)&&(esri.config.defaults.geometryService=new esri.tasks.GeometryService(a.helperServices.geometry.url)),d.resolve(!0));a.proxyUrl&&(esri.config.defaults.io.proxyUrl=
a.proxyUrl,esri.config.defaults.io.alwaysUseProxy=!1);return d}})});
