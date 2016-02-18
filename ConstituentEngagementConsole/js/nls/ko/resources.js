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
        map: {
            error: "맵을 생성할 수 없음" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "구성된 그룹 없음" // Appears when no group is configured
        },
        webMapList: {
            owner: "소유자", // Appears in web-map list description panel when it is set to true
            created: "생성된 날짜", // Appears in web-map list description panel when it is set to true
            modified: "수정된 날짜", // Appears in web-map list description panel when it is set to true
            description: "설명", // Appears in web-map list description panel when it is set to true
            snippet: "요약", // Appears in web-map list description panel when it is set to true
            licenseInfo: "접근 및 사용 제약 조건", // Appears in web-map list description panel when it is set to true
            accessInformation: "크레딧", // Appears in web-map list description panel when it is set to true
            tags: "태그", // Appears in web-map list description panel when it is set to true
            numViews: "조회수", // Appears in web-map list description panel when it is set to true
            avgRating: "평점", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "구성된 그룹이 유효하지 않거나 이 그룹과 공유된 항목이 아직 없습니다.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "맵 정보" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "로그아웃", // Command button to sign-out from the application
            pleaseSignInText: "로그인하세요.", // Appears when user needs to sign-in into the application
            showSelectedOption: "선택한 항목 보기", // Command button to show selected records in data-viewer
            showAllOption: "모두 보기", // Command button to show all the records in data-viewer
            clearSelectionOption: "선택 해제", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "선택한 항목 확대/축소", // Command button to zoom map to selected records
            gridViewOption: "목록 보기", // Command button to display list view
            mapViewOption: "맵 보기", // Command button to display map view
            gridMapViewOption: "분할 보기", // Command button to display split view
            settingsBtnToolTip: "선택 옵션", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "디스플레이 옵션", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "이 레이어 검색", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "새로 고침", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "모든 선택 내역과 저장하지 않은 변경 내용이 취소됩니다.", // Appears when user wants to do manual refresh
            signInOption: "로그인" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "보고서를 사용할 수 없음", // Appears when no issues are available in current extent
            photoAttachmentHeader: "첨부 파일", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "정수를 입력하세요. ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "정수를 입력하세요.", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "숫자를 입력하세요.", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "숫자를 입력하세요.", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "값을 입력하세요.", // Shown when user enters invalid string value
            invalidDate: "유효한 날짜를 입력하세요.", // Shown when user enters invalid date value
            invalidNumericRange: "${minValue}에서 ${maxValue} 사이의 값을 입력하세요.", // Shown when user enters value which is out of range
            moreInfolink: "링크", // Shown when value in field contains only URL.
            commentsText: "의견", // Appears when comments are available for display in details tab
            noCommentsAvailable: "의견을 사용할 수 없음", // Appears when no comments are available
            noFeatureGeometry: "피처를 표시할 수 없음" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "정의된 구성 없음" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "결과를 찾을 수 없음" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "활성 피처에 대한 세부정보 보기", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "맵 보기", // Display tool-tip on command button to view map panel
            zoomInToolTip: "확대", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "축소" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "로그아웃되었습니다.", // Appears when user is successfully signed-out from application
            reSignInMessage: "로그인하려면 여기를 클릭" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);