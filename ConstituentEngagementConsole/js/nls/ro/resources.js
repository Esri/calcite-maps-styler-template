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
    "error": "Imposibil de creat harta"
  },
  "webMapList": {
    "owner": "Proprietar",
    "created": "Data creării",
    "modified": "Dată modificată",
    "description": "Descriere",
    "snippet": "Rezumat",
    "licenseInfo": "Reguli de accesare şi utilizare",
    "accessInformation": "Credite",
    "tags": "Etichete",
    "numViews": "Număr de vizualizări",
    "avgRating": "Calificativ",
    "noWebMapInGroup": "Grupul configurat nu este valid sau niciun element nu a fost încă partajat cu grupul",
    "infoBtnToolTip": "Informaţii hartă",
    "openWebmapList": "Deschidere panou",
    "closeWebmapList": "Închidere panou"
  },
  "geoform": {
    "enterInformation": "Detalii",
    "selectAttachments": "Ataşări",
    "selectFileText": "Parcurgere",
    "enterLocation": "Locaţie",
    "reportItButton": "Trimitere",
    "cancelButton": "Anulare",
    "requiredField": "(obligatoriu)",
    "selectDefaultText": "Selectare&hellip;",
    "invalidInputValue": "Introduceţi o valoare validă.",
    "noFieldsConfiguredMessage": "Câmpurile straturilor tematice nu sunt configurate pentru a captura datele",
    "invalidSmallNumber": "Introduceţi un număr întreg",
    "invalidNumber": "Introduceţi un număr întreg",
    "invalidFloat": "Introduceţi un număr",
    "invalidDouble": "Introduceţi un număr",
    "requiredFields": "Furnizaţi valorile pentru toate câmpurile obligatorii",
    "selectLocation": "Selectaţi locaţia pentru raport",
    "numericRangeHintMessage": "${openStrong}Sugestie:${closeStrong} Valoarea minimă ${minValue} şi valoarea maximă ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Sugestie:${closeStrong} Data minimă ${minValue} şi Data maximă ${maxValue}",
    "errorsInApplyEdits": "Raportul nu a putut fi transmis",
    "attachmentSelectedMsg": "ataşări selectate",
    "attachmentUploadStatus": "${failed} din ${total} ataşări nu au fost încărcate",
    "geoLocationError": "Locaţia curentă nu este disponibilă",
    "geoLocationOutOfExtent": "Locaţia curentă se află în afara extinderii hărţii fundal",
    "submitButtonTooltip": "Salvare",
    "cancelButtonTooltip": "Anulare",
    "geoformBackButtonTooltip": "Reveniţi la lista de rapoarte",
    "updateFeaturesConfirmationMsg": "${count} obiecte spaţiale vor fi actualizate",
    "attachmentHeaderText": "Ataşări"
  },
  "mapViewer": {
    "zoomInToolTip": "Mărire",
    "zoomOutToolTip": "Micşorare"
  },
  "applicationHeader": {
    "signInOption": "Autentificare",
    "signOutOption": "Deconectare",
    "pleaseSignInText": "Autentificaţi-vă"
  },
  "dataviewer": {
    "noIssuesReported": "Nu există niciun raport disponibil",
    "noFeatureGeometry": "Obiectul spaţial nu poate fi afişat",
    "ascendingFlagTitle": "Sortare ascendentă",
    "descendingFlagTitle": "Sortare descendentă",
    "filterLabel": "Filtrare",
    "valueRadioButtonLabel": "Valoare",
    "uniqueRadioButtonLabel": "Unic",
    "selectLayerToBegin": "Selectaţi o categorie pentru a începe",
    "layerFeatureCount": "Ă_${selectedFeatureCount} selected / ${featureCount} records__________________ș"
  },
  "timeSlider": {
    "timeSliderLabel": "Interval de timp",
    "timeSliderInEditModeAlert": "Glisorul de timp nu este disponibil în timpul editării"
  },
  "comment": {
    "commentsFormSubmitButton": "Salvare",
    "commentsFormCancelButton": "Anulare",
    "errorInSubmittingComment": "Modificările nu au putut fi salvate.",
    "emptyCommentMessage": "Este necesară o valoare",
    "placeHolderText": "",
    "noCommentsAvailableText": "Nu există înregistrări disponibile",
    "remainingTextCount": "${0} caractere rămase",
    "showNoText": "Nu",
    "selectAttachments": "Ă_Attachments____ș",
    "selectFileText": "Ă_Browse___ș",
    "attachmentSelectedMsg": "Ă_attachment(s) selected________ș",
    "attachmentHeaderText": "Ă_Attachments____ș",
    "addRecordText": "Ă_Add Record____ș"
  },
  "main": {
    "noGroup": "Niciun grup configurat"
  },
  "search": {
    "searchIconTooltip": "Căutare în acest strat tematic",
    "noResultFoundText": "Nu a fost găsit niciun rezultat",
    "searchInEditModeAlert": "Căutarea nu este disponibilă în timpul editării"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Reîmprospătare",
    "confirmManualRefreshText": "Ă_All selections and unsaved changes will be discarded_________________ș"
  },
  "help": {
    "helpIconTooltip": "Ajutor"
  },
  "filter": {
    "noFeatureFoundText": "Nu a fost găsit niciun obiect spaţia pentru această valoare.",
    "distinctQueryFailed": "Ă_No distinct values found for the field_____________ș.",
    "andText": "şi",
    "filterInEditModeAlert": "Ă_Filters unavailable while editing___________ș.",
    "dropdownSelectOption": "Selectare",
    "filterInShowSelectedEditModeAlert": "Ă_Filters unavailable in 'Show Selected' mode______________ș."
  },
  "detailsPanel": {
    "editContentText": "Editare înregistrare"
  },
  "signOutPage": {
    "signOutMessage": "V-aţi deconectat cu succes",
    "reSignInMessage": "Faceţi clic aici pentru a vă autentifica"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "Ă_Selection Options______ș",
    "showAllOptionText": "Ă_Show All___ș",
    "showSelectedOptionText": "Ă_Show Selected_____ș"
  }
});