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
    "error": "Nije moguće stvoriti kartu"
  },
  "webMapList": {
    "owner": "Vlasnik",
    "created": "Datum izrade",
    "modified": "Datum izmjene",
    "description": "Opis",
    "snippet": "Sažetak",
    "licenseInfo": "Ograničenja pristupa i upotrebe",
    "accessInformation": "Krediti",
    "tags": "Oznake",
    "numViews": "Broj prikaza",
    "avgRating": "Ocjena",
    "noWebMapInGroup": "Konfigurirana grupa nije valjana ili s grupom još nisu podijeljene stavke",
    "infoBtnToolTip": "Informacije o karti",
    "openWebmapList": "Otvori ploču",
    "closeWebmapList": "Zatvori ploču"
  },
  "geoform": {
    "enterInformation": "Pojedinosti",
    "selectAttachments": "Privici",
    "selectFileText": "Pregledaj",
    "enterLocation": "Lokacija",
    "reportItButton": "Pošalji",
    "cancelButton": "Ovdje pogledajte primjer primjene sa serijom klizača",
    "requiredField": "(obavezno)",
    "selectDefaultText": "Odabir&hellip;",
    "invalidInputValue": "Unesite valjanu vrijednost.",
    "noFieldsConfiguredMessage": "Polja slojeva nisu konfigurirana za prikupljanje podataka",
    "invalidSmallNumber": "Unesite cijeli broj",
    "invalidNumber": "Unesite cijeli broj",
    "invalidFloat": "Unesite broj",
    "invalidDouble": "Unesite broj",
    "requiredFields": "Upišite vrijednosti za sva obavezna polja",
    "selectLocation": "Odaberite lokaciju za izvješće",
    "numericRangeHintMessage": "${openStrong}Podsjetnik:${closeStrong} minimalna vrijednost ${minValue} i maksimalna vrijednost ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Podsjetnik:${closeStrong} minimalni datum ${minValue} i maksimalni datum ${maxValue}",
    "errorsInApplyEdits": "Nije moguće podnijeti izvješće.",
    "attachmentSelectedMsg": "odabrani privitak(-ci)",
    "attachmentUploadStatus": "${failed} od ${total} privit(a)ka nije poslano",
    "geoLocationError": "Trenutačna lokacija nije dostupna",
    "geoLocationOutOfExtent": "Trenutačna lokacija izvan je obuhvata kartografske podloge",
    "submitButtonTooltip": "Spremi",
    "cancelButtonTooltip": "Ovdje pogledajte primjer primjene sa serijom klizača",
    "geoformBackButtonTooltip": "Povratak na popis izvješća",
    "updateFeaturesConfirmationMsg": "Ažurirat će se ${count} geoobjek(a)t(a)",
    "attachmentHeaderText": "Privici"
  },
  "mapViewer": {
    "zoomInToolTip": "Povećaj",
    "zoomOutToolTip": "Smanji"
  },
  "applicationHeader": {
    "signInOption": "Prijava",
    "signOutOption": "Odjava",
    "pleaseSignInText": "Prijavite se"
  },
  "dataviewer": {
    "noIssuesReported": "Nema dostupnih izvješća",
    "noFeatureGeometry": "Geoobjekt se ne može prikazati",
    "ascendingFlagTitle": "Sortiraj uzlaznim redoslijedom",
    "descendingFlagTitle": "Sortiraj silaznim redoslijedom",
    "filterLabel": "Filtriraj",
    "valueRadioButtonLabel": "Vrijednost",
    "uniqueRadioButtonLabel": "Jedinstveno",
    "selectLayerToBegin": "Odaberite kategoriju za početak rada",
    "layerFeatureCount": "${selectedFeatureCount} odabrano / ${featureCount} zapis/a"
  },
  "timeSlider": {
    "timeSliderLabel": "Vremenski raspon",
    "timeSliderInEditModeAlert": "Vremenski klizač nije dostupan tijekom uređivanja"
  },
  "comment": {
    "commentsFormSubmitButton": "Spremi",
    "commentsFormCancelButton": "Ovdje pogledajte primjer primjene sa serijom klizača",
    "errorInSubmittingComment": "Uređivanja se nisu mogla spremiti.",
    "emptyCommentMessage": "Potrebna vrijednost",
    "placeHolderText": "",
    "noCommentsAvailableText": "Nema dostupnih zapisa",
    "remainingTextCount": "preostalo ${0} znakova",
    "showNoText": "Ne",
    "selectAttachments": "Privici",
    "selectFileText": "Pregledaj",
    "attachmentSelectedMsg": "odabrani privitak(-ci)",
    "attachmentHeaderText": "Privici",
    "addRecordText": "Dodaj zapis"
  },
  "main": {
    "noGroup": "Nema konfiguriranih grupa"
  },
  "search": {
    "searchIconTooltip": "Pretraži ovaj sloj",
    "noResultFoundText": "Nema rezultata",
    "searchInEditModeAlert": "Pretraživanje nije dostupno tijekom uređivanja"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Osvježi",
    "confirmManualRefreshText": "Odbacit će se svi odabiri i nespremljene promjene"
  },
  "help": {
    "helpIconTooltip": "Pomoć"
  },
  "filter": {
    "noFeatureFoundText": "Nema geoobjekata za ovu vrijednost.",
    "distinctQueryFailed": "Nema određenih vrijednosti za ovo polje.",
    "andText": "i",
    "filterInEditModeAlert": "Filtri nisu dostupni tijekom uređivanja.",
    "dropdownSelectOption": "Odaberi",
    "filterInShowSelectedEditModeAlert": "Filtri nisu dostupni u načinu „Prikaži odabrane”."
  },
  "detailsPanel": {
    "editContentText": "Uredi zapis"
  },
  "signOutPage": {
    "signOutMessage": "Uspješno ste se odjavili",
    "reSignInMessage": "Kliknite ovdje za prijavu"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "Opcije odabira",
    "showAllOptionText": "Prikaži sve",
    "showSelectedOptionText": "Prikaži odabrano"
  }
});