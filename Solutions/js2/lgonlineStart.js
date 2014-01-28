/* 
This source is a compressed form of part of the git commit 
5c22119809387c51 2014-01-27 14:10:13 -0800
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
require(["dojo/ready","dojo/Deferred","esri/map","dojo/i18n"],function(a,c){a(function(){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});defaultAppUI||(defaultAppUI="apps2/GeneralMap");dojo.requireLocalization("esriTemplate","template");require(["dojo/ready","js/lgonlineBuildUI"],function(a){a(function(){var a=new c;require(["dojo/ready","js/lgonlineApp"],function(b){b(function(){a.resolve()})});(new js.LGUIBuilder(window.location.search,null,defaultAppUI)).ready.then(function(b){a.then(function(){b.launch().then(function(){dojo.fadeIn({node:"contentDiv",
duration:500,onEnd:function(){dojo.removeClass("contentDiv","transparent");dojo.removeClass("pageBody","startupBkgd")}}).play();console.log("Application is ready")},function(){console.error("Unable to launch application")})})},function(){console.error("Unable to find configuration")})})})})});
