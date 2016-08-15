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
    "error": "Karttaa ei voi luoda"
  },
  "webMapList": {
    "owner": "Omistaja",
    "created": "Luontipäivämäärä",
    "modified": "Muokkauspäivämäärä",
    "description": "Kuvaus",
    "snippet": "Summary",
    "licenseInfo": "Käyttörajoitukset",
    "accessInformation": "Krediitit",
    "tags": "Tunnisteet",
    "numViews": "Näkymien määrä",
    "avgRating": "Arviointi",
    "noWebMapInGroup": "Määritetty ryhmä on virheellinen tai tämän ryhmän kanssa ei ole vielä jaettu yhtään kohdetta",
    "infoBtnToolTip": "Kartan tiedot",
    "openWebmapList": "Avaa ruutu",
    "closeWebmapList": "Sulje ruutu"
  },
  "geoform": {
    "enterInformation": "Yksityiskohdat",
    "selectAttachments": "Liitteet",
    "selectFileText": "Selaa",
    "enterLocation": "Sijainti",
    "reportItButton": "Lähetä",
    "cancelButton": "Peruuta",
    "requiredField": "(pakollinen)",
    "selectDefaultText": "Valitse&hellip;",
    "invalidInputValue": "Anna kelvollinen arvo.",
    "noFieldsConfiguredMessage": "Karttatason kenttiä ei ole määritetty aineiston keräämistä varten",
    "invalidSmallNumber": "Kirjoita kokonaisluku",
    "invalidNumber": "Kirjoita kokonaisluku",
    "invalidFloat": "Kirjoita numero",
    "invalidDouble": "Kirjoita numero",
    "requiredFields": "Määritä arvot kaikille pakollisille kentille",
    "selectLocation": "Valitse raportin sijainti",
    "numericRangeHintMessage": "${openStrong}Vihje:${closeStrong} Vähimmäisarvo ${minValue} ja enimmäisarvo ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Vihje:${closeStrong} aikaisin ${minValue} ja myöhäisin päivämäärä ${maxValue}",
    "errorsInApplyEdits": "Raportin lähetys ei onnistunut",
    "attachmentSelectedMsg": "liite(ttä) on valittu",
    "attachmentUploadStatus": "${failed}/${total} liitteen lataus epäonnistui",
    "geoLocationError": "Nykyinen sijainti ei ole käytettävissä",
    "geoLocationOutOfExtent": "Nykyinen sijainti ei ole taustakartan rajoissa",
    "submitButtonTooltip": "Tallenna",
    "cancelButtonTooltip": "Peruuta",
    "geoformBackButtonTooltip": "Palaa raporttiluetteloon",
    "updateFeaturesConfirmationMsg": "${count} kohdetta päivitetään",
    "attachmentHeaderText": "Liitteet"
  },
  "mapViewer": {
    "zoomInToolTip": "Lähennä",
    "zoomOutToolTip": "Loitonna"
  },
  "applicationHeader": {
    "signInOption": "Kirjaudu sisään",
    "signOutOption": "Kirjaudu ulos",
    "pleaseSignInText": "Kirjaudu sisään"
  },
  "dataviewer": {
    "noIssuesReported": "Yhtään raporttia ei ole saatavilla",
    "noFeatureGeometry": "Kohdetta ei voi näyttää",
    "ascendingFlagTitle": "Lajittele nousevassa järjestyksessä",
    "descendingFlagTitle": "Lajittele laskevassa järjestyksessä",
    "filterLabel": "Suodata",
    "valueRadioButtonLabel": "Arvo",
    "uniqueRadioButtonLabel": "Yksilöllinen",
    "selectLayerToBegin": "Aloita valitsemalla luokka",
    "layerFeatureCount": "Å_${selectedFeatureCount} selected / ${featureCount} records__________________ö"
  },
  "timeSlider": {
    "timeSliderLabel": "Aikaväli",
    "timeSliderInEditModeAlert": "Ajan liukusäädin ei ole käytettävissä muokkauksen aikana"
  },
  "comment": {
    "commentsFormSubmitButton": "Tallenna",
    "commentsFormCancelButton": "Peruuta",
    "errorInSubmittingComment": "Muokkausten tallennus epäonnistui.",
    "emptyCommentMessage": "Arvo on pakollinen",
    "placeHolderText": "",
    "noCommentsAvailableText": "Tietueita ei ole saatavilla",
    "remainingTextCount": "${0} merkki(ä) jäljellä",
    "showNoText": "Ei",
    "selectAttachments": "Å_Attachments____ö",
    "selectFileText": "Å_Browse___ö",
    "attachmentSelectedMsg": "Å_attachment(s) selected________ö",
    "attachmentHeaderText": "Å_Attachments____ö",
    "addRecordText": "Å_Add Record____ö"
  },
  "main": {
    "noGroup": "Yhtään ryhmää ei ole määritetty"
  },
  "search": {
    "searchIconTooltip": "Hae tätä karttatasoa",
    "noResultFoundText": "Tuloksia ei löytynyt",
    "searchInEditModeAlert": "Haku ei ole käytettävissä muokkauksen aikana"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Päivitä",
    "confirmManualRefreshText": "Å_All selections and unsaved changes will be discarded_________________ö"
  },
  "help": {
    "helpIconTooltip": "Ohje"
  },
  "filter": {
    "noFeatureFoundText": "Tälle arvolle ei löytynyt kohdetta.",
    "distinctQueryFailed": "Å_No distinct values found for the field_____________ö.",
    "andText": "ja",
    "filterInEditModeAlert": "Å_Filters unavailable while editing___________ö.",
    "dropdownSelectOption": "Valitse",
    "filterInShowSelectedEditModeAlert": "Å_Filters unavailable in 'Show Selected' mode______________ö."
  },
  "detailsPanel": {
    "editContentText": "Muokkaa tietuetta"
  },
  "signOutPage": {
    "signOutMessage": "Uloskirjautuminen onnistui",
    "reSignInMessage": "Kirjaudu sisään napsauttamalla tätä"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "Å_Selection Options______ö",
    "showAllOptionText": "Å_Show All___ö",
    "showSelectedOptionText": "Å_Show Selected_____ö"
  }
});