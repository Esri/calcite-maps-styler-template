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
    "error": "Võimetu koostama kaarti"
  },
  "webMapList": {
    "owner": "Omanik",
    "created": "Kuupäev loodud",
    "modified": "Muutmise kuupäev",
    "description": "Kirjeldus",
    "snippet": "Kokkuvõte",
    "licenseInfo": "Ligipääsu ja kasutuse piirangud",
    "accessInformation": "Krediidid",
    "tags": "Märksõnad",
    "numViews": "Vaatamiste arv",
    "avgRating": "Hinnang",
    "noWebMapInGroup": "Konfigureeritud grupp ei kehti või ei ole selle grupiga veel objekte jagatud.",
    "infoBtnToolTip": "Kaarditeave",
    "openWebmapList": "Ava paneel",
    "closeWebmapList": "Sulge paneel"
  },
  "geoform": {
    "enterInformation": "Detailid",
    "selectAttachments": "Manused",
    "selectFileText": "Sirvi",
    "enterLocation": "Asukoht",
    "reportItButton": "Esita",
    "cancelButton": "Tühista",
    "requiredField": "(nõutud)",
    "selectDefaultText": "Vali&hellip;",
    "invalidInputValue": "Sisestage kehtiv väärtus.",
    "noFieldsConfiguredMessage": "Kihi väljadele ei ole konfigureeritud andmete salvestamine.",
    "invalidSmallNumber": "Palun sisestage täisarv",
    "invalidNumber": "Palun sisestage täisarv",
    "invalidFloat": "Palun sisestage arv",
    "invalidDouble": "Palun sisestage arv",
    "requiredFields": "Palun sisestage väärtused kõigile nõutud väljadele.",
    "selectLocation": "Valige oma aruande asukoht.",
    "numericRangeHintMessage": "${openStrong}Vihje:${closeStrong} Miinimumväärtus ${minValue} ja maksimumväärtus ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Vihje:${closeStrong} Kuupäeva alampiir ${minValue} ja kuupäeva ülempiir ${maxValue}",
    "errorsInApplyEdits": "Kommentaari ei saanud esitada.",
    "attachmentSelectedMsg": "valitud manus(ed)",
    "attachmentUploadStatus": "${failed} manust (kokku ${total} manust) ei saanud üles laadida",
    "geoLocationError": "Praegune asukoht pole kättesaadav.",
    "geoLocationOutOfExtent": "Praegune asukoht on lubatud vahemikust väljas.",
    "submitButtonTooltip": "Salvesta",
    "cancelButtonTooltip": "Tühista",
    "geoformBackButtonTooltip": "Tagasi aruandelehele",
    "updateFeaturesConfirmationMsg": "${count} objekti värskendatakse",
    "attachmentHeaderText": "Manused"
  },
  "mapViewer": {
    "zoomInToolTip": "Suurenda",
    "zoomOutToolTip": "Vähenda"
  },
  "applicationHeader": {
    "signInOption": "Logi sisse",
    "signOutOption": "Logi välja",
    "pleaseSignInText": "Palun logi sisse"
  },
  "dataviewer": {
    "noIssuesReported": "Ühtki aruannet ei ole saadaval.",
    "noFeatureGeometry": "Objekti ei saa kuvada.",
    "ascendingFlagTitle": "Sordi kasvavalt",
    "descendingFlagTitle": "Sordi kahanevalt",
    "filterLabel": "Filter",
    "valueRadioButtonLabel": "Väärtus",
    "uniqueRadioButtonLabel": "Unikaalne",
    "selectLayerToBegin": "Alustamiseks valige kategooria",
    "layerFeatureCount": "${selectedFeatureCount} valitud, kokku ${featureCount} kirjet"
  },
  "timeSlider": {
    "timeSliderLabel": "Ajavahemik",
    "timeSliderInEditModeAlert": "Ajaliugur pole muutmise ajal saadaval"
  },
  "comment": {
    "commentsFormSubmitButton": "Salvesta",
    "commentsFormCancelButton": "Tühista",
    "errorInSubmittingComment": "Muudatusi ei saanud salvestada.",
    "emptyCommentMessage": "Väärtus on nõutav",
    "placeHolderText": "",
    "noCommentsAvailableText": "Kirjeid pole saadaval",
    "remainingTextCount": "${0} tähemärki kasutamata",
    "showNoText": "Ei",
    "selectAttachments": "Manused",
    "selectFileText": "Sirvi",
    "attachmentSelectedMsg": "valitud manus(ed)",
    "attachmentHeaderText": "Manused",
    "addRecordText": "Lisa kirje"
  },
  "main": {
    "noGroup": "Ühtki gruppi ei ole konfigureeritud"
  },
  "search": {
    "searchIconTooltip": "Otsi kihti",
    "noResultFoundText": "Tulemusi ei leitud",
    "searchInEditModeAlert": "Otsing pole töötlemise ajal saadaval"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Värskenda",
    "confirmManualRefreshText": "Teie salvestamata valikud ja muudatused lähevad kaotsi."
  },
  "help": {
    "helpIconTooltip": "Abi"
  },
  "filter": {
    "noFeatureFoundText": "Selle väärtuse jaoks ei leitud objekti.",
    "distinctQueryFailed": "Välja jaoks ei leitud eraldi väärtusi.",
    "andText": "ja",
    "filterInEditModeAlert": "Filtrid pole töötlemise ajal saadaval.",
    "dropdownSelectOption": "Vali",
    "filterInShowSelectedEditModeAlert": "Filtrid pole režiimis „Kuva valitud” saadaval."
  },
  "detailsPanel": {
    "editContentText": "Muuda kirjet"
  },
  "signOutPage": {
    "signOutMessage": "Olete edukalt välja logitud.",
    "reSignInMessage": "Sisse logimiseks klikkige siia."
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "Valikuvõimalused",
    "showAllOptionText": "Kuva kõik",
    "showSelectedOptionText": "Kuva valitud"
  }
});