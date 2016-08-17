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
    "error": "無法建立地圖"
  },
  "webMapList": {
    "owner": "擁有者",
    "created": "建立日期",
    "modified": "修改日期",
    "description": "描述",
    "snippet": "摘要(S)",
    "licenseInfo": "存取和使用限制",
    "accessInformation": "點數",
    "tags": "標記",
    "numViews": "視圖數量",
    "avgRating": "評級次數",
    "noWebMapInGroup": "已配置的群組無效，或者沒有與該群組共用的任何項目",
    "infoBtnToolTip": "地圖資訊",
    "openWebmapList": "開啟面板",
    "closeWebmapList": "關閉面板"
  },
  "geoform": {
    "enterInformation": "詳細資訊",
    "selectAttachments": "附件",
    "selectFileText": "瀏覽",
    "enterLocation": "位置",
    "reportItButton": "提交",
    "cancelButton": "取消",
    "requiredField": "(必填)",
    "selectDefaultText": "選擇&hellip;",
    "invalidInputValue": "請輸入有效值。",
    "noFieldsConfiguredMessage": "圖層欄位未被配置為擷取資料",
    "invalidSmallNumber": "請輸入一個整數",
    "invalidNumber": "請輸入一個整數",
    "invalidFloat": "請輸入一個數字",
    "invalidDouble": "請輸入一個數字",
    "requiredFields": "請為所有必填欄位填寫值",
    "selectLocation": "請為您的報告選擇位置",
    "numericRangeHintMessage": "${openStrong}提示:${closeStrong} 最小值 ${minValue} 和最大值 ${maxValue}",
    "dateRangeHintMessage": "${openStrong}提示:${closeStrong} 最小日期 ${minValue} 和最大日期 ${maxValue}",
    "errorsInApplyEdits": "無法提交報告",
    "attachmentSelectedMsg": "已選定附件",
    "attachmentUploadStatus": "${failed} 個附件（共有 ${total} 個）上傳失敗",
    "geoLocationError": "目前位置不可用",
    "geoLocationOutOfExtent": "目前位置不在底圖範圍之內",
    "submitButtonTooltip": "儲存",
    "cancelButtonTooltip": "取消",
    "geoformBackButtonTooltip": "傳回至報告清單",
    "updateFeaturesConfirmationMsg": "將更新 ${count} 個圖徵",
    "attachmentHeaderText": "附件"
  },
  "mapViewer": {
    "zoomInToolTip": "放大",
    "zoomOutToolTip": "縮小"
  },
  "applicationHeader": {
    "signInOption": "登入",
    "signOutOption": "登出",
    "pleaseSignInText": "請登入"
  },
  "dataviewer": {
    "noIssuesReported": "無任何報告可用",
    "noFeatureGeometry": "無法顯示圖徵",
    "ascendingFlagTitle": "按遞增排列",
    "descendingFlagTitle": "按遞減排列",
    "filterLabel": "篩選程式",
    "valueRadioButtonLabel": "數值",
    "uniqueRadioButtonLabel": "唯一",
    "selectLayerToBegin": "選擇類別以開始使用",
    "layerFeatureCount": "試_${selectedFeatureCount} selected / ${featureCount} records__________________驗"
  },
  "timeSlider": {
    "timeSliderLabel": "時間範圍",
    "timeSliderInEditModeAlert": "編輯時無法使用時間滑桿"
  },
  "comment": {
    "commentsFormSubmitButton": "儲存",
    "commentsFormCancelButton": "取消",
    "errorInSubmittingComment": "無法儲存編輯。",
    "emptyCommentMessage": "需要值",
    "placeHolderText": "",
    "noCommentsAvailableText": "沒有可用的記錄",
    "remainingTextCount": "剩餘 ${0} 個字元",
    "showNoText": "否",
    "selectAttachments": "附件",
    "selectFileText": "瀏覽",
    "attachmentSelectedMsg": "已選定附件",
    "attachmentHeaderText": "附件",
    "addRecordText": "試_Add Record____驗"
  },
  "main": {
    "noGroup": "未配置任何群組"
  },
  "search": {
    "searchIconTooltip": "搜尋此圖層",
    "noResultFoundText": "找不到任何結果",
    "searchInEditModeAlert": "編輯時無法使用搜尋"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "重新整理",
    "confirmManualRefreshText": "試_All selections and unsaved changes will be discarded_________________驗"
  },
  "help": {
    "helpIconTooltip": "幫助"
  },
  "filter": {
    "noFeatureFoundText": "找不到此值的圖徵。",
    "distinctQueryFailed": "試_No distinct values found for the field_____________驗.",
    "andText": "和",
    "filterInEditModeAlert": "試_Filters unavailable while editing___________驗.",
    "dropdownSelectOption": "選擇",
    "filterInShowSelectedEditModeAlert": "試_Filters unavailable in 'Show Selected' mode______________驗."
  },
  "detailsPanel": {
    "editContentText": "編輯記錄"
  },
  "signOutPage": {
    "signOutMessage": "您已成功登出",
    "reSignInMessage": "按一下此處以登入"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "試_Selection Options______驗",
    "showAllOptionText": "試_Show All___驗",
    "showSelectedOptionText": "試_Show Selected_____驗"
  }
});