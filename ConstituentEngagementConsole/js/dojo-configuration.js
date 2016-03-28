/*global dojoConfig:true,location */
/*jslint sloppy:true */
/*
| Copyright 2014 Esri
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
var package_path = location.href.slice(0, location.href.lastIndexOf('/'));
var dojoConfig = {
    parseOnLoad: true,
    async: true,
    baseURL: package_path,
    // The locationPath logic below may look confusing but all its doing is
    // enabling us to load the api from a CDN and load local modules from the correct location.
    packages: [{
        name: "application",
        location: package_path + '/js'
    }, {
        name: "config",
        location: package_path + '/config'
    }, {
        name: "arcgis_templates",
        location: package_path + '/..'
    }, {
        name: "css",
        location: package_path + '/css'
    }, {
        name: "widgets",
        location: package_path + '/js/widgets'
    }, {
        name: "vendor",
        location: package_path + '/js/vendor'
    }]
};
var urlLocale = location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : null;
if (urlLocale) {
    dojoConfig.locale = urlLocale;
}
