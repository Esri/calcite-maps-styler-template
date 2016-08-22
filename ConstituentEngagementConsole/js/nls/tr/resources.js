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
    "error": "Harita oluşturulamıyor"
  },
  "webMapList": {
    "owner": "Sahibi",
    "created": "Oluşturulma tarihi",
    "modified": "Değiştirme tarihi:",
    "description": "Tanım",
    "snippet": "Özet",
    "licenseInfo": "Kısıtlamalara eriş ve bunları kullan",
    "accessInformation": "Katkı Yapanlar",
    "tags": "Etiketler",
    "numViews": "Görüntülenme sayısı",
    "avgRating": "Derecelendirme",
    "noWebMapInGroup": "Yapılandırılmış grup geçersiz veya bu grupla henüz öğe paylaşılmamış",
    "infoBtnToolTip": "Harita bilgileri",
    "openWebmapList": "Paneli aç",
    "closeWebmapList": "Paneli kapat"
  },
  "geoform": {
    "enterInformation": "Detaylar",
    "selectAttachments": "Ekler",
    "selectFileText": "...",
    "enterLocation": "Konum",
    "reportItButton": "Gönder",
    "cancelButton": "İptal",
    "requiredField": "(gerekli)",
    "selectDefaultText": "Seç&hellip;",
    "invalidInputValue": "Geçerli değer girin.",
    "noFieldsConfiguredMessage": "Katman alanları veri yakalamak üzere yapılandırılmamış",
    "invalidSmallNumber": "Tamsayı girin",
    "invalidNumber": "Tamsayı girin",
    "invalidFloat": "Lütfen bir sayı girin",
    "invalidDouble": "Lütfen bir sayı girin",
    "requiredFields": "Tüm gerekli alanlar için değer girin",
    "selectLocation": "Raporunuzun konumunu seçin",
    "numericRangeHintMessage": "${openStrong}İpucu:${closeStrong} Minimum değer ${minValue} ve maksimum değer ${maxValue}",
    "dateRangeHintMessage": "${openStrong}İpucu:${closeStrong} Minimum tarih ${minValue} ve Maksimum tarih ${maxValue}",
    "errorsInApplyEdits": "Rapor gönderilemedi",
    "attachmentSelectedMsg": "ek seçildi",
    "attachmentUploadStatus": "${failed} / ${total} ek yüklenemedi",
    "geoLocationError": "Geçerli konum kullanılamıyor",
    "geoLocationOutOfExtent": "Geçerli konum altlık haritası yayılımı dışında",
    "submitButtonTooltip": "Kaydet",
    "cancelButtonTooltip": "İptal",
    "geoformBackButtonTooltip": "Rapor listesine dön",
    "updateFeaturesConfirmationMsg": "${count} detay güncellenecek",
    "attachmentHeaderText": "Ekler"
  },
  "mapViewer": {
    "zoomInToolTip": "Büyüt",
    "zoomOutToolTip": "Küçült"
  },
  "applicationHeader": {
    "signInOption": "Oturum Açma",
    "signOutOption": "Oturum Kapat",
    "pleaseSignInText": "Oturum açın"
  },
  "dataviewer": {
    "noIssuesReported": "Kullanılabilir rapor yok",
    "noFeatureGeometry": "Detay görüntülenemiyor",
    "ascendingFlagTitle": "Artan düzende sırala",
    "descendingFlagTitle": "Azalan düzende sırala",
    "filterLabel": "Filtre",
    "valueRadioButtonLabel": "Değer",
    "uniqueRadioButtonLabel": "Tek",
    "selectLayerToBegin": "Başlamak için bir kategori seçin",
    "layerFeatureCount": "ı_${selectedFeatureCount} selected / ${featureCount} records__________________İ"
  },
  "timeSlider": {
    "timeSliderLabel": "Zaman aralığı",
    "timeSliderInEditModeAlert": "Düzenleme sırasında zaman kaydırıcı kullanılamaz"
  },
  "comment": {
    "commentsFormSubmitButton": "Kaydet",
    "commentsFormCancelButton": "İptal",
    "errorInSubmittingComment": "Düzenlemeler kaydedilemedi.",
    "emptyCommentMessage": "Değer gerekli",
    "placeHolderText": "",
    "noCommentsAvailableText": "Kullanılabilir kayıt yok",
    "remainingTextCount": "${0} karakter kaldı",
    "showNoText": "Hayır",
    "selectAttachments": "Ekler",
    "selectFileText": "...",
    "attachmentSelectedMsg": "ek seçildi",
    "attachmentHeaderText": "Ekler",
    "addRecordText": "ı_Add Record____İ"
  },
  "main": {
    "noGroup": "Yapılandırılan grup yok"
  },
  "search": {
    "searchIconTooltip": "Bu katmanı ara",
    "noResultFoundText": "Sonuç bulunamadı",
    "searchInEditModeAlert": "Düzenleme sırasında arama yapılamaz"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Yenile",
    "confirmManualRefreshText": "ı_All selections and unsaved changes will be discarded_________________İ"
  },
  "help": {
    "helpIconTooltip": "Yardım"
  },
  "filter": {
    "noFeatureFoundText": "Bu değer için detay bulunamadı.",
    "distinctQueryFailed": "ı_No distinct values found for the field_____________İ.",
    "andText": "ve",
    "filterInEditModeAlert": "ı_Filters unavailable while editing___________İ.",
    "dropdownSelectOption": "Seç",
    "filterInShowSelectedEditModeAlert": "ı_Filters unavailable in 'Show Selected' mode______________İ."
  },
  "detailsPanel": {
    "editContentText": "Kaydı düzenle"
  },
  "signOutPage": {
    "signOutMessage": "Oturumunuz başarıyla kapatıldı",
    "reSignInMessage": "Oturum açmak için buraya tıklayın"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "ı_Selection Options______İ",
    "showAllOptionText": "ı_Show All___İ",
    "showSelectedOptionText": "ı_Show Selected_____İ"
  }
});