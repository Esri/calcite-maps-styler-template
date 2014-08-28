/*global define,commonConfig:true */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2013 Esri
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
define([], function () {
    var config = {
        sharingUrl: null,  // URL to sharing service; default is www.arcgis.com with app's HTTP protocol
        proxyUrl: "proxy/proxy.ashx",  // URL to proxy
        bingMapsKey: "",
        helperServices: {
            geometry: {
                url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
            },
            printTask: {
                url: location.protocol + "//utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
            },
            geocode: [{
                url: location.protocol + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
            }]
        }
    };

    commonConfig = config;

    return config;
});
/* 
This source is part of the git commit 
84ee6c2ba416b893 2014-08-28 15:44:26 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
