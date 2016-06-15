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
    "error": "يتعذر إنشاء الخريطة"
  },
  "webMapList": {
    "owner": "المالك",
    "created": "التاريخ الذي تم إنشائه",
    "modified": "تاريخ التعديل",
    "description": "الوصف",
    "snippet": "الملخص",
    "licenseInfo": "الدخول والاستخدام",
    "accessInformation": "اعتمادات",
    "tags": "علامات",
    "numViews": "عدد مرات العرض",
    "avgRating": "التقييم",
    "noWebMapInGroup": "المجموعات التي تم تكوينها غير صحيحة أو لم تتم مشاركة العناصر مع هذه المجموعة بعد",
    "infoBtnToolTip": "معلومات الخريطة",
    "openWebmapList": "افتح اللوحة",
    "closeWebmapList": "إغلاق اللوحة"
  },
  "geoform": {
    "enterInformation": "تفاصيل",
    "selectAttachments": "مرفقات",
    "selectFileText": "مربع حوار",
    "enterLocation": "الموقع",
    "reportItButton": "إرسال",
    "cancelButton": "إلغاء الأمر",
    "requiredField": "(مطلوب)",
    "selectDefaultText": "حدد&hellip;",
    "invalidInputValue": "يرجى إدخال قيمة صحيحة.",
    "noFieldsConfiguredMessage": "لم يتم تكوين حقول الطبقة لالتقاط البيانات",
    "invalidSmallNumber": "برجاء إدخال عدد صحيح",
    "invalidNumber": "برجاء إدخال عدد صحيح",
    "invalidFloat": "Please enter a number",
    "invalidDouble": "Please enter a number",
    "requiredFields": "برجاء توفير قيم لجميع الحقول المطلوبة",
    "selectLocation": "برجاء تحديد موقع التقرير",
    "numericRangeHintMessage": "${openStrong}Hint:${closeStrong} الحد الأدنى للقيمة ${minValue} والحد الأقصى للقيمة ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Hint:${closeStrong} التاريخ الأدنى ${minValue} والتاريخ الأقصى ${maxValue}",
    "errorsInApplyEdits": "يتعذر إرسال التقرير",
    "attachmentSelectedMsg": "المرفقات المحددة",
    "attachmentUploadStatus": "فشل تحميل المرفقات ${failed} من ${total}",
    "geoLocationError": "الموقع الحالي غير متاح",
    "geoLocationOutOfExtent": "الموقع الحالي خارج نطاق الخريطة",
    "submitButtonTooltip": "حفظ",
    "cancelButtonTooltip": "إلغاء الأمر",
    "geoformBackButtonTooltip": "الرجوع إلى قائمة التقرير",
    "updateFeaturesConfirmationMsg": "سيتم تحديث المعالم ${count}",
    "attachmentHeaderText": "مرفقات"
  },
  "mapViewer": {
    "zoomInToolTip": "التكبير",
    "zoomOutToolTip": "التصغير."
  },
  "applicationHeader": {
    "signInOption": "تسجيل الدخول",
    "signOutOption": "تسجيل الخروج",
    "pleaseSignInText": "الرجاء تسجيل الدخول"
  },
  "dataviewer": {
    "noIssuesReported": "لا توجد تقارير متاحة",
    "noFeatureGeometry": "يتعذر عرض المعالم",
    "ascendingFlagTitle": "فرز بالترتيب التصاعدي",
    "descendingFlagTitle": "فرز بالترتيب التنازلي",
    "filterLabel": "تصفية",
    "valueRadioButtonLabel": "قيمة",
    "uniqueRadioButtonLabel": "فريد",
    "selectLayerToBegin": "تحديد فئة للبدء",
    "layerFeatureCount": "تسجيلات ${featureCount}"
  },
  "timeSlider": {
    "timeSliderLabel": "النطاق الزمني",
    "timeSliderInEditModeAlert": "لا يتوفر منزلق الوقت أثناء التحرير"
  },
  "comment": {
    "commentsFormSubmitButton": "حفظ",
    "commentsFormCancelButton": "إلغاء الأمر",
    "errorInSubmittingComment": "لا يمكن حفظ عمليات التحرير.",
    "emptyCommentMessage": "القيمة المطلوبة",
    "placeHolderText": "",
    "noCommentsAvailableText": "لا توجد تسجيلات متاحة",
    "remainingTextCount": "يتبقى ${0} حرف",
    "showNoText": "لا"
  },
  "main": {
    "noGroup": "لم يتم تكوين المجموعة"
  },
  "search": {
    "searchIconTooltip": "البحث عن هذه الطبقة",
    "noResultFoundText": "لم يتم العثور على أية نتائج",
    "searchInEditModeAlert": "لا يتوفر البحث أثناء التحرير"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "تحديث",
    "confirmManualRefeshText": "سيتم تجاهل جميع عمليات التحديد والتغييرات غير المحفوظة"
  },
  "help": {
    "helpIconTooltip": "مساعدة"
  },
  "filter": {
    "noFeatureFoundText": "لا توجد معالم للقيمة الحالية.",
    "distinctQueryFalied": "لا توجد قيم مُحددة للحقل.",
    "andText": "و",
    "filterInEditModeAlert": "لا تتوفر عوامل التصفية أثناء التحرير",
    "dropdownSelectOption": "تحديد"
  },
  "detailsPanel": {
    "editContentText": "تحرير التسجيل"
  },
  "signOutPage": {
    "signOutMessage": "تم تسجيل الخروج بنجاح",
    "reSignInMessage": "انقر هنا لتسجيل الدخول"
  }
});