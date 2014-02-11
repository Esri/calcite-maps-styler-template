/* 
This source is a compressed form of part of the git commit 
b9244eb90b3a773b 2014-02-10 20:38:37 -0500
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
require(["dojo/ready","dojo/Deferred","esri/map","dojo/i18n"],function(a,d){a(function(){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});defaultAppUI||(defaultAppUI="apps2/GeneralMap");dojo.requireLocalization("esriTemplate","template");require(["dojo/ready","js/lgonlineBuildUI"],function(a){a(function(){function a(c){var b=dojo.i18n.getLocalization("esriTemplate","template");alert(1===c?b.messages.noConfiguration:b.messages.unableToLaunchApp)}var b=
new d;require(["dojo/ready","js/lgonlineApp"],function(a){a(function(){b.resolve()})});(new js.LGUIBuilder(window.location.search,null,defaultAppUI)).ready.then(function(c){b.then(function(){c.launch().then(function(){dojo.fadeIn({node:"contentDiv",duration:500,onEnd:function(){dojo.removeClass("contentDiv","transparent");dojo.removeClass("pageBody","startupBkgd")}}).play();console.log("Application is ready")},function(){a(0)})})},function(){a(1)})})})})});
