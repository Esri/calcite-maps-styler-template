/*global define */
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
define({
  "map": {
    "error": "맵을 생성할 수 없음"
  },
  "webMapList": {
    "owner": "소유자",
    "created": "생성된 날짜",
    "modified": "수정된 날짜",
    "description": "설명",
    "snippet": "요약",
    "licenseInfo": "접근 및 사용 제약 조건",
    "accessInformation": "크레딧",
    "tags": "태그",
    "numViews": "조회수",
    "avgRating": "평점",
    "noWebMapInGroup": "구성된 그룹이 유효하지 않거나 이 그룹과 공유된 항목이 아직 없습니다.",
    "infoBtnToolTip": "맵 정보",
    "openWebmapList": "패널 열기",
    "closeWebmapList": "패널 닫기"
  },
  "geoform": {
    "enterInformation": "세부정보",
    "selectAttachments": "첨부 파일",
    "selectFileText": "찾아보기",
    "enterLocation": "위치",
    "reportItButton": "제출",
    "cancelButton": "취소",
    "requiredField": "(필수)",
    "selectDefaultText": "선택&hellip;",
    "invalidInputValue": "유효한 값을 입력하세요.",
    "noFieldsConfiguredMessage": "데이터를 캡처하도록 레이어 필드가 구성되지 않음",
    "invalidSmallNumber": "정수를 입력하세요.",
    "invalidNumber": "정수를 입력하세요.",
    "invalidFloat": "숫자를 입력하세요.",
    "invalidDouble": "숫자를 입력하세요.",
    "requiredFields": "모든 필수 필드에 값을 제공하세요.",
    "selectLocation": "보고서의 위치를 선택하세요.",
    "numericRangeHintMessage": "${openStrong}힌트:${closeStrong} 최소값 ${minValue} 및 최대값 ${maxValue}",
    "dateRangeHintMessage": "${openStrong}힌트:${closeStrong} 최소 날짜 ${minValue} 및 최대 날짜 ${maxValue}",
    "errorsInApplyEdits": "보고서를 제출할 수 없음",
    "attachmentSelectedMsg": "첨부 파일이 선택됨",
    "attachmentUploadStatus": "${total}개 중 ${failed}개 첨부 파일 업로드 실패",
    "geoLocationError": "현재 위치를 사용할 수 없음",
    "geoLocationOutOfExtent": "현재 위치가 베이스맵 범위를 벗어남",
    "submitButtonTooltip": "저장",
    "cancelButtonTooltip": "취소",
    "geoformBackButtonTooltip": "보고서 목록으로 돌아가기",
    "updateFeaturesConfirmationMsg": "${count} 피처가 업데이트됨",
    "attachmentHeaderText": "첨부 파일"
  },
  "mapViewer": {
    "zoomInToolTip": "확대",
    "zoomOutToolTip": "축소"
  },
  "applicationHeader": {
    "signInOption": "로그인",
    "signOutOption": "로그아웃",
    "pleaseSignInText": "로그인하세요."
  },
  "dataviewer": {
    "noIssuesReported": "보고서를 사용할 수 없음",
    "noFeatureGeometry": "피처를 표시할 수 없음",
    "ascendingFlagTitle": "오름 차순으로 정렬",
    "descendingFlagTitle": "내림 차순으로 정렬",
    "filterLabel": "필터",
    "valueRadioButtonLabel": "값",
    "uniqueRadioButtonLabel": "고유값",
    "selectLayerToBegin": "시작하려면 범주 선택",
    "layerFeatureCount": "한_${selectedFeatureCount} selected / ${featureCount} records__________________빠"
  },
  "timeSlider": {
    "timeSliderLabel": "시간 범위",
    "timeSliderInEditModeAlert": "편집 중에 시간 슬라이더를 사용할 수 없음"
  },
  "comment": {
    "commentsFormSubmitButton": "저장",
    "commentsFormCancelButton": "취소",
    "errorInSubmittingComment": "편집 내용을 저장할 수 없습니다.",
    "emptyCommentMessage": "값이 필요함",
    "placeHolderText": "",
    "noCommentsAvailableText": "레코드를 사용할 수 없음",
    "remainingTextCount": "${0}자 남음",
    "showNoText": "아니요",
    "selectAttachments": "첨부 파일",
    "selectFileText": "찾아보기",
    "attachmentSelectedMsg": "첨부 파일이 선택됨",
    "attachmentHeaderText": "첨부 파일",
    "addRecordText": "한_Add Record____빠"
  },
  "main": {
    "noGroup": "구성된 그룹 없음"
  },
  "search": {
    "searchIconTooltip": "이 레이어 검색",
    "noResultFoundText": "결과를 찾을 수 없음",
    "searchInEditModeAlert": "편집 중에 검색을 사용할 수 없음"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "새로 고침",
    "confirmManualRefreshText": "한_All selections and unsaved changes will be discarded_________________빠"
  },
  "help": {
    "helpIconTooltip": "도움말"
  },
  "filter": {
    "noFeatureFoundText": "이 값에 대한 피처를 찾을 수 없습니다.",
    "distinctQueryFailed": "한_No distinct values found for the field_____________빠.",
    "andText": "및",
    "filterInEditModeAlert": "한_Filters unavailable while editing___________빠.",
    "dropdownSelectOption": "선택",
    "filterInShowSelectedEditModeAlert": "한_Filters unavailable in 'Show Selected' mode______________빠."
  },
  "detailsPanel": {
    "editContentText": "레코드 편집"
  },
  "signOutPage": {
    "signOutMessage": "로그아웃되었습니다.",
    "reSignInMessage": "로그인하려면 여기를 클릭"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "한_Selection Options______빠",
    "showAllOptionText": "한_Show All___빠",
    "showSelectedOptionText": "한_Show Selected_____빠"
  }
});