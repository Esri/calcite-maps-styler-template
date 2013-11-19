/*global define */
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
define(
({
        tooltips: {
            search: "搜索",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "当前位置",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "提交修正",  // Command button to submit a correction to the app's host
            collect: "向地图添加内容",  // Command button to open a template picker to add features to the map
            filter: "过滤地图图层",  // Explains purpose of type-in box affiliated with template picker
            basemap: "切换底图",  // Command button to open a dialog box for switching basemaps
            share: "共享",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "通过电子邮件共享",  // Command button to share the current map extents via email
            shareViaFacebook: "通过 Facebook 共享",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "通过 Twitter 共享",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "打印地图",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "查看打印的地图",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "横向页面方向",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "纵向页面方向",  // Command button in the print map dialog box to select the portrait page orientation
            help: "帮助"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "电子邮件",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "搜索:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "绘图",  // Appears before a set of tools for drawing on the map
            mapLayers: "地图图层:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "搜索图层字段:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "该网站无权获取当前位置",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "浏览器无法获取当前位置",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "浏览器无法及时获取当前位置",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "在地图中未找到此搜索图层",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "在地图搜索图层中未找到此字段"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
