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
    "error": "Žemėlapio sukurti nepavyko"
  },
  "webMapList": {
    "owner": "Savininkas",
    "created": "Sukūrimo data",
    "modified": "Paskutinis pakeitimas",
    "description": "Aprašas",
    "snippet": "Santrauka",
    "licenseInfo": "Prieigos ir naudojimo apribojimai",
    "accessInformation": "Autoriai",
    "tags": "Raktažodžiai",
    "numViews": "Peržiūrų skaičius",
    "avgRating": "Vertinimas",
    "noWebMapInGroup": "Sukonfigūruota grupė neteisinga arba šioje grupėje nebendrinamas nė vienas elementas",
    "infoBtnToolTip": "Žemėlapio informacija",
    "openWebmapList": "Atidaryti skydelį",
    "closeWebmapList": "Uždaryti skydelį"
  },
  "geoform": {
    "enterInformation": "Išsamiau",
    "selectAttachments": "Priedai",
    "selectFileText": "Parinkti",
    "enterLocation": "Vieta",
    "reportItButton": "Pateikti",
    "cancelButton": "Atšaukti",
    "requiredField": "(privalomas)",
    "selectDefaultText": "Pasirinkti&hellip;",
    "invalidInputValue": "Įveskite leistiną reikšmę.",
    "noFieldsConfiguredMessage": "Sluoksnio laukai nesukonfigūruoti kaupti duomenis",
    "invalidSmallNumber": "Įveskite sveikąjį skaičių",
    "invalidNumber": "Įveskite sveikąjį skaičių",
    "invalidFloat": "Įveskite skaičių",
    "invalidDouble": "Įveskite skaičių",
    "requiredFields": "Pateikite reikšmes visuose privalomuose laukuose",
    "selectLocation": "Nurodykite ataskaitos vietą",
    "numericRangeHintMessage": "${openStrong}Užuomina:${closeStrong} minimali vertė ${minValue} ir maksimali vertė ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Užuomina:${closeStrong} minimali data ${minValue} ir maksimali data ${maxValue}",
    "errorsInApplyEdits": "Komentaro pateikti nepavyko",
    "attachmentSelectedMsg": "pasirinktas (-i) priedas (-ai)",
    "attachmentUploadStatus": "Nepavyko įkelti ${failed} iš ${total} priedo (-ų)",
    "geoLocationError": "Informacijos apie esamą vietą nėra",
    "geoLocationOutOfExtent": "Dabartinė vieta yra už pagrindo žemėlapio ribų",
    "submitButtonTooltip": "Įrašyti",
    "cancelButtonTooltip": "Atšaukti",
    "geoformBackButtonTooltip": "Grįžti į ataskaitų sąrašą",
    "updateFeaturesConfirmationMsg": "Bus atnaujinta elementų: ${count}",
    "attachmentHeaderText": "Priedai"
  },
  "mapViewer": {
    "zoomInToolTip": "Artinti",
    "zoomOutToolTip": "Tolinti"
  },
  "applicationHeader": {
    "signInOption": "Prisijungti",
    "signOutOption": "Atsijungti",
    "pleaseSignInText": "Prisijunkite"
  },
  "dataviewer": {
    "noIssuesReported": "Ataskaitų nėra",
    "noFeatureGeometry": "Elemento parodyti negalima",
    "ascendingFlagTitle": "Rūšiuoti didėjančia tvarka",
    "descendingFlagTitle": "Rūšiuoti mažėjančia tvarka",
    "filterLabel": "Filtruoti",
    "valueRadioButtonLabel": "Reikšmė",
    "uniqueRadioButtonLabel": "Unikalios",
    "selectLayerToBegin": "Jei norite pradėti, pasirinkite kategoriją",
    "layerFeatureCount": "Į_${selectedFeatureCount} selected / ${featureCount} records__________________š"
  },
  "timeSlider": {
    "timeSliderLabel": "Laiko intervalas",
    "timeSliderInEditModeAlert": "Redaguojant laiko slankiklis nepasiekiamas"
  },
  "comment": {
    "commentsFormSubmitButton": "Įrašyti",
    "commentsFormCancelButton": "Atšaukti",
    "errorInSubmittingComment": "Redagavimų negalima įrašyti.",
    "emptyCommentMessage": "Reikalinga reikšmė",
    "placeHolderText": "",
    "noCommentsAvailableText": "Įrašų nėra",
    "remainingTextCount": "liko simbolių: ${0}",
    "showNoText": "Ne",
    "selectAttachments": "Į_Attachments____š",
    "selectFileText": "Į_Browse___š",
    "attachmentSelectedMsg": "Į_attachment(s) selected________š",
    "attachmentHeaderText": "Į_Attachments____š",
    "addRecordText": "Į_Add Record____š"
  },
  "main": {
    "noGroup": "Sukonfigūruotų grupių nėra"
  },
  "search": {
    "searchIconTooltip": "Ieškoti šiame sluoksnyje",
    "noResultFoundText": "Nieko nerasta",
    "searchInEditModeAlert": "Redaguojant paieška nepasiekiama"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Atnaujinti",
    "confirmManualRefreshText": "Į_All selections and unsaved changes will be discarded_________________š"
  },
  "help": {
    "helpIconTooltip": "Pagalba"
  },
  "filter": {
    "noFeatureFoundText": "Šiai reikšmei elementų nerasta.",
    "distinctQueryFailed": "Į_No distinct values found for the field_____________š.",
    "andText": "ir",
    "filterInEditModeAlert": "Į_Filters unavailable while editing___________š.",
    "dropdownSelectOption": "Pasirinkite",
    "filterInShowSelectedEditModeAlert": "Į_Filters unavailable in 'Show Selected' mode______________š."
  },
  "detailsPanel": {
    "editContentText": "Redaguoti įrašą"
  },
  "signOutPage": {
    "signOutMessage": "Sėkmingai atsijungėte",
    "reSignInMessage": "Paspauskite prisijungti"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "Į_Selection Options______š",
    "showAllOptionText": "Į_Show All___š",
    "showSelectedOptionText": "Į_Show Selected_____š"
  }
});