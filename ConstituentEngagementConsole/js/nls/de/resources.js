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
    "error": "Karte kann nicht erstellt werden"
  },
  "webMapList": {
    "owner": "Besitzer",
    "created": "Erstellungsdatum",
    "modified": "Änderungsdatum",
    "description": "Beschreibung",
    "snippet": "Zusammenfassung",
    "licenseInfo": "Zugriffs- und Nutzungsbeschränkungen",
    "accessInformation": "Quellennachweise",
    "tags": "Tags",
    "numViews": "Anzahl der Ansichten",
    "avgRating": "Bewertung",
    "noWebMapInGroup": "Die konfigurierte Gruppe ist ungültig oder es wurden noch keine Elemente für diese Gruppe freigegeben",
    "infoBtnToolTip": "Karteninformationen",
    "openWebmapList": "Bereich öffnen",
    "closeWebmapList": "Bereich schließen"
  },
  "geoform": {
    "enterInformation": "Details",
    "selectAttachments": "Anlagen",
    "selectFileText": "Durchsuchen",
    "enterLocation": "Speicherort",
    "reportItButton": "Senden",
    "cancelButton": "Abbrechen",
    "requiredField": "(erforderlich)",
    "selectDefaultText": "Auswählen&hellip;",
    "invalidInputValue": "Geben Sie einen gültigen Wert ein.",
    "noFieldsConfiguredMessage": "Layer-Felder sind nicht für die Erfassung von Daten konfiguriert",
    "invalidSmallNumber": "Geben Sie einen ganzzahligen Wert ein",
    "invalidNumber": "Geben Sie einen ganzzahligen Wert ein",
    "invalidFloat": "Geben Sie eine Zahl ein",
    "invalidDouble": "Geben Sie eine Zahl ein",
    "requiredFields": "Geben Sie Werte für alle erforderlichen Felder ein",
    "selectLocation": "Wählen Sie den Speicherort für Ihren Bericht aus",
    "numericRangeHintMessage": "${openStrong}Hinweis:${closeStrong} Minimalwert ${minValue} und Maximalwert ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Hinweis:${closeStrong} minimales Datum ${minValue} und maximales Datum ${maxValue}",
    "errorsInApplyEdits": "Bericht konnte nicht gesendet werden",
    "attachmentSelectedMsg": "Anlage(n) ausgewählt",
    "attachmentUploadStatus": "${failed} von ${total} Anlage(n) konnte(n) nicht hochgeladen werden",
    "geoLocationError": "Aktuelle Position ist nicht verfügbar",
    "geoLocationOutOfExtent": "Aktuelle Position befindet sich außerhalb der Grundkartenausdehnung",
    "submitButtonTooltip": "Speichern",
    "cancelButtonTooltip": "Abbrechen",
    "geoformBackButtonTooltip": "Zur Berichtsliste zurückkehren",
    "updateFeaturesConfirmationMsg": "${count} Features werden aktualisiert",
    "attachmentHeaderText": "Anlagen"
  },
  "mapViewer": {
    "zoomInToolTip": "Vergrößern",
    "zoomOutToolTip": "Verkleinern"
  },
  "applicationHeader": {
    "signInOption": "Anmelden",
    "signOutOption": "Abmelden",
    "pleaseSignInText": "Melden Sie sich an"
  },
  "dataviewer": {
    "noIssuesReported": "Keine Berichte verfügbar",
    "noFeatureGeometry": "Feature kann nicht angezeigt werden",
    "ascendingFlagTitle": "Aufsteigend sortieren",
    "descendingFlagTitle": "Absteigend sortieren",
    "filterLabel": "Filtern",
    "valueRadioButtonLabel": "Wert",
    "uniqueRadioButtonLabel": "Eindeutig",
    "selectLayerToBegin": "Zum Einstieg eine Kategorie auswählen",
    "layerFeatureCount": "ä_${selectedFeatureCount} selected / ${featureCount} records__________________Ü"
  },
  "timeSlider": {
    "timeSliderLabel": "Zeitbereich",
    "timeSliderInEditModeAlert": "Zeitschieberegler ist während der Bearbeitung nicht verfügbar"
  },
  "comment": {
    "commentsFormSubmitButton": "Speichern",
    "commentsFormCancelButton": "Abbrechen",
    "errorInSubmittingComment": "Änderungen können nicht gespeichert werden.",
    "emptyCommentMessage": "Wert erforderlich",
    "placeHolderText": "",
    "noCommentsAvailableText": "Keine Datensätze verfügbar",
    "remainingTextCount": "${0} Zeichen verbleiben",
    "showNoText": "Nein",
    "selectAttachments": "Anlagen",
    "selectFileText": "Durchsuchen",
    "attachmentSelectedMsg": "Anlage(n) ausgewählt",
    "attachmentHeaderText": "Anlagen",
    "addRecordText": "ä_Add Record____Ü"
  },
  "main": {
    "noGroup": "Keine Gruppe konfiguriert"
  },
  "search": {
    "searchIconTooltip": "Diesen Layer durchsuchen",
    "noResultFoundText": "Keine Ergebnisse gefunden",
    "searchInEditModeAlert": "Suchfunktion ist während der Bearbeitung nicht verfügbar"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Aktualisieren",
    "confirmManualRefreshText": "ä_All selections and unsaved changes will be discarded_________________Ü"
  },
  "help": {
    "helpIconTooltip": "Hilfe"
  },
  "filter": {
    "noFeatureFoundText": "Für diesen Wert wurde kein Feature gefunden.",
    "distinctQueryFailed": "ä_No distinct values found for the field_____________Ü.",
    "andText": "und",
    "filterInEditModeAlert": "ä_Filters unavailable while editing___________Ü.",
    "dropdownSelectOption": "Auswählen",
    "filterInShowSelectedEditModeAlert": "ä_Filters unavailable in 'Show Selected' mode______________Ü."
  },
  "detailsPanel": {
    "editContentText": "Datensatz bearbeiten"
  },
  "signOutPage": {
    "signOutMessage": "Sie wurden erfolgreich abgemeldet",
    "reSignInMessage": "Klicken Sie hier, um sich anzumelden"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "ä_Selection Options______Ü",
    "showAllOptionText": "ä_Show All___Ü",
    "showSelectedOptionText": "ä_Show Selected_____Ü"
  }
});