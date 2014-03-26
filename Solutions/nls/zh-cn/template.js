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
            search: "查找",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "当前位置",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "提交修正",  // Command button to submit a correction to the app's host
            collect: "过滤器/编辑",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "试_Show the legend_验",  //Display the legend
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
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "标题",  // Shown as title hint in print specification box if a title hint is not configured
            author: "作者"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "查找:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "绘图",  // Appears before a set of tools for drawing on the map
            mapLayers: "地图图层:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "试_Find layer fields:_验"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "该网站无权获取当前位置",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "浏览器无法获取当前位置",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "浏览器无法及时获取当前位置",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "在地图中未找到此查找图层",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchFieldMissing: "在地图查找图层中未找到此字段",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "在地图查找图层中未找到这些字段",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "此字段不存在于任何地图图层中",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "您的内容已提交。谢谢。",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "无法访问应用程序的配置",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "无法启动应用程序"  // Appears for any failure to build the user interface
        }
    })
);
