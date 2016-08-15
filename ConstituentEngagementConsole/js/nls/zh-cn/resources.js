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
    "error": "无法创建地图"
  },
  "webMapList": {
    "owner": "所有者",
    "created": "创建日期",
    "modified": "修改日期",
    "description": "描述",
    "snippet": "摘要",
    "licenseInfo": "访问和使用限制",
    "accessInformation": "制作者名单",
    "tags": "标签",
    "numViews": "查看次数",
    "avgRating": "评级",
    "noWebMapInGroup": "已配置的群组无效，或者没有与该群组共享的任何项目",
    "infoBtnToolTip": "地图信息",
    "openWebmapList": "打开面板",
    "closeWebmapList": "关闭面板"
  },
  "geoform": {
    "enterInformation": "详细信息",
    "selectAttachments": "附件",
    "selectFileText": "浏览",
    "enterLocation": "位置",
    "reportItButton": "提交",
    "cancelButton": "取消",
    "requiredField": "(必填)",
    "selectDefaultText": "选择&hellip;",
    "invalidInputValue": "请输入有效值。",
    "noFieldsConfiguredMessage": "图层字段未被配置为捕获数据",
    "invalidSmallNumber": "请输入一个整数",
    "invalidNumber": "请输入一个整数",
    "invalidFloat": "请输入一个数字",
    "invalidDouble": "请输入一个数字",
    "requiredFields": "请为所有必填字段填写值",
    "selectLocation": "请为您的报告选择位置",
    "numericRangeHintMessage": "${openStrong}提示:${closeStrong} 最小值 ${minValue} 和最大值 ${maxValue}",
    "dateRangeHintMessage": "${openStrong}提示:${closeStrong} 最小日期 ${minValue} 和最大日期 ${maxValue}",
    "errorsInApplyEdits": "无法提交报告",
    "attachmentSelectedMsg": "附件已选定",
    "attachmentUploadStatus": "${failed} 个附件(共有 ${total} 个)上传失败",
    "geoLocationError": "当前位置不可用",
    "geoLocationOutOfExtent": "当前位置不在底图范围之内",
    "submitButtonTooltip": "保存",
    "cancelButtonTooltip": "取消",
    "geoformBackButtonTooltip": "返回至报告列表",
    "updateFeaturesConfirmationMsg": "将更新 ${count} 个要素",
    "attachmentHeaderText": "附件"
  },
  "mapViewer": {
    "zoomInToolTip": "放大",
    "zoomOutToolTip": "缩小"
  },
  "applicationHeader": {
    "signInOption": "登录",
    "signOutOption": "登出",
    "pleaseSignInText": "请登录"
  },
  "dataviewer": {
    "noIssuesReported": "无任何报告可用",
    "noFeatureGeometry": "无法显示要素",
    "ascendingFlagTitle": "升序排列",
    "descendingFlagTitle": "降序排列",
    "filterLabel": "过滤器",
    "valueRadioButtonLabel": "值",
    "uniqueRadioButtonLabel": "唯一",
    "selectLayerToBegin": "选择类别以开始操作",
    "layerFeatureCount": "试_${selectedFeatureCount} selected / ${featureCount} records__________________验"
  },
  "timeSlider": {
    "timeSliderLabel": "时间范围",
    "timeSliderInEditModeAlert": "编辑期间时间滑块不可用"
  },
  "comment": {
    "commentsFormSubmitButton": "保存",
    "commentsFormCancelButton": "取消",
    "errorInSubmittingComment": "无法保存编辑内容。",
    "emptyCommentMessage": "所需值",
    "placeHolderText": "",
    "noCommentsAvailableText": "无可用记录",
    "remainingTextCount": "剩余 ${0} 个字符",
    "showNoText": "否",
    "selectAttachments": "试_Attachments____验",
    "selectFileText": "试_Browse___验",
    "attachmentSelectedMsg": "试_attachment(s) selected________验",
    "attachmentHeaderText": "试_Attachments____验",
    "addRecordText": "试_Add Record____验"
  },
  "main": {
    "noGroup": "未配置任何群组"
  },
  "search": {
    "searchIconTooltip": "搜索此图层",
    "noResultFoundText": "未找到任何结果",
    "searchInEditModeAlert": "编辑期间搜索功能不可用"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "刷新",
    "confirmManualRefreshText": "试_All selections and unsaved changes will be discarded_________________验"
  },
  "help": {
    "helpIconTooltip": "帮助"
  },
  "filter": {
    "noFeatureFoundText": "未找到该值的要素。",
    "distinctQueryFailed": "试_No distinct values found for the field_____________验.",
    "andText": "且",
    "filterInEditModeAlert": "试_Filters unavailable while editing___________验.",
    "dropdownSelectOption": "选择",
    "filterInShowSelectedEditModeAlert": "试_Filters unavailable in 'Show Selected' mode______________验."
  },
  "detailsPanel": {
    "editContentText": "编辑记录"
  },
  "signOutPage": {
    "signOutMessage": "您已成功登出",
    "reSignInMessage": "单击此处以登录"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "试_Selection Options______验",
    "showAllOptionText": "试_Show All___验",
    "showSelectedOptionText": "试_Show Selected_____验"
  }
});