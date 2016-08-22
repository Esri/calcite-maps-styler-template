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
    "error": "Det går inte att skapa kartan"
  },
  "webMapList": {
    "owner": "Ägare",
    "created": "Skapad den",
    "modified": "Ändrad den",
    "description": "Beskrivning",
    "snippet": "Sammanfattning",
    "licenseInfo": "Begränsningar av åtkomst och användning",
    "accessInformation": "Krediter",
    "tags": "Taggar",
    "numViews": "Antal visningar",
    "avgRating": "Bedömning",
    "noWebMapInGroup": "Den konfigurerade gruppen är ogiltig eller inga objekt har delats med den här gruppen ännu",
    "infoBtnToolTip": "Kartinformation",
    "openWebmapList": "Öppna panel",
    "closeWebmapList": "Stäng panel"
  },
  "geoform": {
    "enterInformation": "Detaljer",
    "selectAttachments": "Bilagor",
    "selectFileText": "Bläddra",
    "enterLocation": "Plats",
    "reportItButton": "Skicka",
    "cancelButton": "Avbryt",
    "requiredField": "(obligatoriskt)",
    "selectDefaultText": "Välj&hellip;",
    "invalidInputValue": "Ange ett giltigt värde.",
    "noFieldsConfiguredMessage": "Lagerfält är inte konfigurerade att fånga data",
    "invalidSmallNumber": "Ange ett heltal",
    "invalidNumber": "Ange ett heltal",
    "invalidFloat": "Ange ett tal",
    "invalidDouble": "Ange ett tal",
    "requiredFields": "Ange värden för alla obligatoriska fält",
    "selectLocation": "Välj platsen för din rapport",
    "numericRangeHintMessage": "${openStrong}Tips:${closeStrong} lägsta värde ${minValue} och maximalt värde ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Tips:${closeStrong} minsta datum ${minValue} och största datum ${maxValue}",
    "errorsInApplyEdits": "Det gick inte att skicka rapporten",
    "attachmentSelectedMsg": "bilagor markerade",
    "attachmentUploadStatus": "${failed} av ${total} bilagor kunde inte överföras",
    "geoLocationError": "Aktuell plats finns inte tillgänglig",
    "geoLocationOutOfExtent": "Aktuell plats är utanför baskartans utbredning",
    "submitButtonTooltip": "Spara",
    "cancelButtonTooltip": "Avbryt",
    "geoformBackButtonTooltip": "Återgå till rapportlistan",
    "updateFeaturesConfirmationMsg": "${count} geoobjekt uppdateras",
    "attachmentHeaderText": "Bilagor"
  },
  "mapViewer": {
    "zoomInToolTip": "Zooma in",
    "zoomOutToolTip": "Zooma ut"
  },
  "applicationHeader": {
    "signInOption": "Logga in",
    "signOutOption": "Logga ut",
    "pleaseSignInText": "Logga in"
  },
  "dataviewer": {
    "noIssuesReported": "Inga rapporter tillgängliga",
    "noFeatureGeometry": "Geoobjektet kan inte visas",
    "ascendingFlagTitle": "Sortera i stigande ordning",
    "descendingFlagTitle": "Sortera i fallande ordning",
    "filterLabel": "Filter",
    "valueRadioButtonLabel": "Värde",
    "uniqueRadioButtonLabel": "Unik",
    "selectLayerToBegin": "Välj en kategori för att komma igång",
    "layerFeatureCount": "Å_${selectedFeatureCount} selected / ${featureCount} records__________________ö"
  },
  "timeSlider": {
    "timeSliderLabel": "Tidsintervall",
    "timeSliderInEditModeAlert": "Tidsreglage inte tillgängligt vid redigering"
  },
  "comment": {
    "commentsFormSubmitButton": "Spara",
    "commentsFormCancelButton": "Avbryt",
    "errorInSubmittingComment": "Ändringar kunde inte sparas.",
    "emptyCommentMessage": "Värde krävs",
    "placeHolderText": "",
    "noCommentsAvailableText": "Inga poster tillgängliga",
    "remainingTextCount": "${0} tecken återstår",
    "showNoText": "Nej",
    "selectAttachments": "Bilagor",
    "selectFileText": "Bläddra",
    "attachmentSelectedMsg": "bilagor markerade",
    "attachmentHeaderText": "Bilagor",
    "addRecordText": "Å_Add Record____ö"
  },
  "main": {
    "noGroup": "Ingen grupp konfigurerad"
  },
  "search": {
    "searchIconTooltip": "Sök i det här lagret",
    "noResultFoundText": "Inga resultat hittades",
    "searchInEditModeAlert": "Sökfunktionen är inte tillgänglig vid redigering"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Uppdatera",
    "confirmManualRefreshText": "Å_All selections and unsaved changes will be discarded_________________ö"
  },
  "help": {
    "helpIconTooltip": "Hjälp"
  },
  "filter": {
    "noFeatureFoundText": "Inget geoobjekt hittades för detta värde.",
    "distinctQueryFailed": "Å_No distinct values found for the field_____________ö.",
    "andText": "och",
    "filterInEditModeAlert": "Å_Filters unavailable while editing___________ö.",
    "dropdownSelectOption": "Välj",
    "filterInShowSelectedEditModeAlert": "Å_Filters unavailable in 'Show Selected' mode______________ö."
  },
  "detailsPanel": {
    "editContentText": "Redigera post"
  },
  "signOutPage": {
    "signOutMessage": "Du har loggat ut",
    "reSignInMessage": "Klicka här för att logga in"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "Å_Selection Options______ö",
    "showAllOptionText": "Å_Show All___ö",
    "showSelectedOptionText": "Å_Show Selected_____ö"
  }
});