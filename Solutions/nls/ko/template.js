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
            search: "검색",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "현재 위치",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "보정 제출",  // Command button to submit a correction to the app's host
            collect: "한_Add content to map_빠",  // Command button to open a template picker to add features to the map
            filter: "한_Filter map layers_빠",  // Explains purpose of type-in box affiliated with template picker
            basemap: "베이스맵 전환",  // Command button to open a dialog box for switching basemaps
            share: "공유",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "이메일을 통해 공유",  // Command button to share the current map extents via email
            shareViaFacebook: "Facebook을 통해 공유",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Twitter를 통해 공유",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "맵 인쇄",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "인쇄된 맵 보기",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "가로 페이지 방향",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "세로 페이지 방향",  // Command button in the print map dialog box to select the portrait page orientation
            help: "도움말"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "이메일",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "검색:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "그리기",  // Appears before a set of tools for drawing on the map
            mapLayers: "맵 레이어:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "검색 레이어 필드:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "이 사이트에는 현재 위치를 확인할 권한이 없습니다.",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "브라우저에서 현재 위치를 확인할 수 없습니다.",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "브라우저에서 적절한 시간 내에 현재 위치를 확인할 수 없습니다.",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "맵에서 이 검색 레이어를 찾을 수 없습니다.",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "맵 검색 레이어에서 이 필드를 찾을 수 없습니다."  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
