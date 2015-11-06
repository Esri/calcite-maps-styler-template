/*global define */
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
define(
     ({
        map: {  // Map, feature layer, and comments table loading and checking
            error: "无法创建地图",
            layerLoad: "无法完全加载地图",
            missingItemsFeatureLayer: "请配置应用程序以使用要素图层"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "显示菜单",
            signInButton: "登录",
            signInButtonTooltip: "登录",
            signOutButton: "登出",
            signOutButtonTooltip: "登出",
            helpButtonLabel: "帮助",
            helpButtonTooltip: "了解详细信息",
            gotoListViewLabel: "列表视图",
            gotoListViewTooltip: "转至列表视图", // Go to List view tooltip text
            gotoMapViewLabel: "地图视图",
            gotoMapViewTooltip: "转至地图视图" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "关闭"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "使用 Facebook 登录",
            signIntoGooglePlusTooltip: "使用 Google+ 登录",
            signIntoTwitterTooltip: "使用 Twitter 登录",
            signOutOfFacebookTooltip: "登出 Facebook",
            signOutOfGooglePlusTooltip: "登出 Google+",
            signOutOfTwitterTooltip: "登出 Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (可选)",
            requiredFormItemFlag: " (必填)",
            unsettableRequiredField: "必填字段既未被初始化，也不在表单中",
            countOfRemainingCharactersTooltip: "剩余字符数",
            cancelButtonLabel: "取消",
            submitButtonLabel: "提交"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "投票支持此项目",
            commentButtonTooltip: "添加评论",
            gotoMapViewTooltip: "转至地图视图",
            galleryButtonTooltip: "参见随附文件",
            commentsListHeading: "评论",
            noCommentsPlaceholder: "无评论"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "按地图过滤列表",
            linkToMapViewOptionTooltip: "列出在当前地图中可见的要素",
            likesForThisItemTooltip: "投票支持此项目"
        }
    })
);
