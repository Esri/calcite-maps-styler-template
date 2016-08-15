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
    "error": "Nie można utworzyć"
  },
  "webMapList": {
    "owner": "Właściciel",
    "created": "Data utworzenia",
    "modified": "Ostatnia modyfikacja",
    "description": "Opis",
    "snippet": "Summary",
    "licenseInfo": "Ograniczenia dostępu i użytkowania",
    "accessInformation": "Udostępniający zasoby",
    "tags": "Tags",
    "numViews": "Liczba wyświetleń",
    "avgRating": "Ocena",
    "noWebMapInGroup": "Skonfigurowana grupa jest nieprawidłowa lub tej grupie nie udostępniono jeszcze żadnych elementów",
    "infoBtnToolTip": "Informacje o mapie",
    "openWebmapList": "Otwórz panel",
    "closeWebmapList": "Zamknij panel"
  },
  "geoform": {
    "enterInformation": "Szczegóły",
    "selectAttachments": "Załączniki",
    "selectFileText": "Przeglądaj",
    "enterLocation": "Lokalizacja",
    "reportItButton": "Prześlij",
    "cancelButton": "Anuluj",
    "requiredField": "(wymagane)",
    "selectDefaultText": "Wybierz&hellip;",
    "invalidInputValue": "Podaj właściwą wartość.",
    "noFieldsConfiguredMessage": "Pola warstw nie są skonfigurowane do rejestrowania danych",
    "invalidSmallNumber": "Wprowadź liczbę całkowitą",
    "invalidNumber": "Wprowadź liczbę całkowitą",
    "invalidFloat": "Wprowadź liczbę",
    "invalidDouble": "Wprowadź liczbę",
    "requiredFields": "Podaj wartości wszystkich wymaganych pól",
    "selectLocation": "Wybierz lokalizację dla raportu",
    "numericRangeHintMessage": "${openStrong}Wskazówka:${closeStrong} Wartość minimalna ${minValue} i wartość maksymalna ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Wskazówka:${closeStrong} Data minimalna ${minValue} i data maksymalna ${maxValue}",
    "errorsInApplyEdits": "Nie można przesłać raportu",
    "attachmentSelectedMsg": "wybrany(-e/-ych) załącznik(-i/-ów)",
    "attachmentUploadStatus": "Nie udało się przesłać ${failed} z ${total} załączników",
    "geoLocationError": "Bieżąca lokalizacja nie jest dostępna",
    "geoLocationOutOfExtent": "Bieżąca lokalizacja jest poza zakresem mapy bazowej",
    "submitButtonTooltip": "Zapisz",
    "cancelButtonTooltip": "Anuluj",
    "geoformBackButtonTooltip": "Wróć do listy raportów",
    "updateFeaturesConfirmationMsg": "Liczba obiektów, które zostaną zaktualizowane: ${count}",
    "attachmentHeaderText": "Załączniki"
  },
  "mapViewer": {
    "zoomInToolTip": "Powiększ",
    "zoomOutToolTip": "Pomniejsz"
  },
  "applicationHeader": {
    "signInOption": "Zaloguj się",
    "signOutOption": "Wyloguj się",
    "pleaseSignInText": "Zaloguj się"
  },
  "dataviewer": {
    "noIssuesReported": "Brak dostępnych raportów",
    "noFeatureGeometry": "Nie można wyświetlić obiektu",
    "ascendingFlagTitle": "Sortuj w kolejności rosnącej",
    "descendingFlagTitle": "Sortuj w kolejności malejącej",
    "filterLabel": "Filtruj",
    "valueRadioButtonLabel": "Wartość",
    "uniqueRadioButtonLabel": "Unikalne",
    "selectLayerToBegin": "Wybierz kategorię, aby rozpocząć",
    "layerFeatureCount": "ł_${selectedFeatureCount} selected / ${featureCount} records__________________ą"
  },
  "timeSlider": {
    "timeSliderLabel": "Zakres czasu",
    "timeSliderInEditModeAlert": "Suwak czasu jest niedostępny podczas edycji"
  },
  "comment": {
    "commentsFormSubmitButton": "Zapisz",
    "commentsFormCancelButton": "Anuluj",
    "errorInSubmittingComment": "Nie można zapisać zmian.",
    "emptyCommentMessage": "Wartość wymagana",
    "placeHolderText": "",
    "noCommentsAvailableText": "Brak dostępnych rekordów",
    "remainingTextCount": "Pozostało znaków: ${0}",
    "showNoText": "Nie",
    "selectAttachments": "ł_Attachments____ą",
    "selectFileText": "ł_Browse___ą",
    "attachmentSelectedMsg": "ł_attachment(s) selected________ą",
    "attachmentHeaderText": "ł_Attachments____ą",
    "addRecordText": "ł_Add Record____ą"
  },
  "main": {
    "noGroup": "Nie skonfigurowano żadnej grupy"
  },
  "search": {
    "searchIconTooltip": "Przeszukaj tę warstwę",
    "noResultFoundText": "Nie znaleziono wyników",
    "searchInEditModeAlert": "Wyszukiwanie jest niedostępne podczas edycji"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Odśwież",
    "confirmManualRefreshText": "ł_All selections and unsaved changes will be discarded_________________ą"
  },
  "help": {
    "helpIconTooltip": "Pomoc"
  },
  "filter": {
    "noFeatureFoundText": "Nie znaleziono obiektu dla tej wartości.",
    "distinctQueryFailed": "ł_No distinct values found for the field_____________ą.",
    "andText": "i",
    "filterInEditModeAlert": "ł_Filters unavailable while editing___________ą.",
    "dropdownSelectOption": "Zaznacz",
    "filterInShowSelectedEditModeAlert": "ł_Filters unavailable in 'Show Selected' mode______________ą."
  },
  "detailsPanel": {
    "editContentText": "Edytuj rekord"
  },
  "signOutPage": {
    "signOutMessage": "Wylogowanie pomyślne",
    "reSignInMessage": "Kliknij tutaj, aby się zalogować"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "ł_Selection Options______ą",
    "showAllOptionText": "ł_Show All___ą",
    "showSelectedOptionText": "ł_Show Selected_____ą"
  }
});