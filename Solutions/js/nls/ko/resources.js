/*global define */
/*
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
        map: {
            error: "맵을 생성할 수 없음"
        },
        tooltips: {
            search: "찾기",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "현재 위치",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "보정 제출",  // Command button to submit a correction to the app's host
            collect: "필터/편집",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "범례 표시",  //Display the legend
            filter: "맵 레이어 필터링",  // Explains purpose of type-in box affiliated with template picker
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
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "제목",  // Shown as title hint in print specification box if a title hint is not configured
            author: "작성자"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "찾기:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "그리기",  // Appears before a set of tools for drawing on the map
            mapLayers: "맵 레이어:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "레이어 필드 찾기:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "이 사이트에는 현재 위치를 확인할 권한이 없습니다.",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "브라우저에서 현재 위치를 확인할 수 없습니다.",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "브라우저에서 적절한 시간 내에 현재 위치를 확인할 수 없습니다.",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "구성된 검색 레이어 없음",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "맵에서 이 찾기 레이어를 찾을 수 없습니다.",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "맵 레이어의 필드를 찾을 수 없습니다.<br><br>이 레이어가 맵 콘텐츠의 루트에 있는지 확인하세요. ArcGIS for Server 동적 맵 서비스 등의 중첩된 서비스는 한 번에 한 레이어가 인덱스 번호를 포함해 맵에 추가되어 찾기 레이어로 사용됩니다. 타일 서비스는 찾기 레이어로 사용할 수 없습니다.",
            searchFieldMissing: "맵 찾기 레이어에서 이 필드를 찾을 수 없습니다.",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "맵 찾기 레이어에서 해당 필드를 찾을 수 없습니다.",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "이 필드는 모든 맵 레이어에 존재하지 않습니다.",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "컨텐츠를 제출했습니다. 감사합니다.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "응용프로그램 구성에 접근할 수 없습니다.",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "응용프로그램을 시작할 수 없습니다."  // Appears for any failure to build the user interface
        }
    })
);
