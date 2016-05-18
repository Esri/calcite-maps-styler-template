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
    "error": "Nevar izveidot karti"
  },
  "webMapList": {
    "owner": "Īpašnieks",
    "created": "Izveides datums",
    "modified": "Modificēšanas datums",
    "description": "Apraksts",
    "snippet": "Kopsavilkums",
    "licenseInfo": "Piekļuves un izmantošanas ierobežojumi",
    "accessInformation": "Kredīti",
    "tags": "Tagi",
    "numViews": "Skatījumu skaits",
    "avgRating": "Vērtējums",
    "noWebMapInGroup": "Konfigurētā grupa nav derīga vai ar šo grupu vēl nav kopīgots neviens elements",
    "infoBtnToolTip": "Kartes informācija",
    "openWebmapList": "ķ_Open panel____ū",
    "closeWebmapList": "ķ_Close panel____ū"
  },
  "geoform": {
    "enterInformation": "ķ_Details___ū",
    "selectAttachments": "ķ_Attachments____ū",
    "selectFileText": "ķ_Browse___ū",
    "enterLocation": "ķ_Location___ū",
    "reportItButton": "ķ_Submit___ū",
    "cancelButton": "ķ_Cancel___ū",
    "requiredField": "ķ_(required)____ū",
    "selectDefaultText": "ķ_Select&hellip;_____ū",
    "invalidInputValue": "ķ_Please enter valid value_________ū.",
    "noFieldsConfiguredMessage": "ķ_Layer fields are not configured to capture data_______________ū",
    "invalidSmallNumber": "ķ_Please enter an integer________ū",
    "invalidNumber": "Lūdzu ievadiet veselu skaitli",
    "invalidFloat": "Lūdzu ievadiet numuru",
    "invalidDouble": "Lūdzu ievadiet numuru",
    "requiredFields": "ķ_Please provide values for all required fields_______________ū",
    "selectLocation": "ķ_Please select the location for your report______________ū",
    "numericRangeHintMessage": "ķ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ū",
    "dateRangeHintMessage": "ķ_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ū",
    "errorsInApplyEdits": "ķ_Report could not be submitted__________ū",
    "attachmentSelectedMsg": "ķ_attachment(s) selected________ū",
    "attachmentUploadStatus": "ķ_${failed} of ${total} attachment(s) failed to upload_________________ū",
    "geoLocationError": "ķ_Current location not available__________ū",
    "geoLocationOutOfExtent": "ķ_Current location is out of basemap extent_____________ū",
    "submitButtonTooltip": "ķ_Save__ū",
    "cancelButtonTooltip": "ķ_Cancel___ū",
    "geoformBackButtonTooltip": "ķ_Return to the report list_________ū",
    "updateFeaturesConfirmationMsg": "ķ_${count} features will be updated___________ū",
    "attachmentHeaderText": "ķ_Attachments____ū"
  },
  "mapViewer": {
    "zoomInToolTip": "ķ_Zoom in___ū",
    "zoomOutToolTip": "Attālināt"
  },
  "applicationHeader": {
    "signInOption": "Pierakstīties",
    "signOutOption": "Izrakstīties",
    "pleaseSignInText": "Lūdzu, pierakstieties"
  },
  "dataviewer": {
    "noIssuesReported": "Nav pieejamu ziņojumu",
    "noFeatureGeometry": "Funkciju nevar parādīt",
    "ascendingFlagTitle": "ķ_Sort in ascending order________ū",
    "descendingFlagTitle": "ķ_Sort in descending order________ū",
    "filterLabel": "ķ_Filter___ū",
    "valueRadioButtonLabel": "ķ_Value___ū",
    "uniqueRadioButtonLabel": "ķ_Unique___ū",
    "selectLayerToBegin": "ķ_Select a category to get started___________ū",
    "layerFeatureCount": "ķ_${featureCount} records________ū"
  },
  "timeSlider": {
    "timeSliderLabel": "ķ_Time range____ū",
    "timeSliderInEditModeAlert": "ķ_Time slider unavailable while editing____________ū"
  },
  "comment": {
    "commentsFormSubmitButton": "ķ_Save__ū",
    "commentsFormCancelButton": "ķ_Cancel___ū",
    "errorInSubmittingComment": "ķ_Edits could not be saved_________ū.",
    "emptyCommentMessage": "ķ_Value required_____ū",
    "placeHolderText": "",
    "noCommentsAvailableText": "ķ_No records available_______ū",
    "remainingTextCount": "ķ_${0} character(s) remain________ū",
    "showNoText": "ķ_No__ū"
  },
  "main": {
    "noGroup": "Nav konfigurētas grupas"
  },
  "search": {
    "searchIconTooltip": "ķ_Search this layer______ū",
    "noResultFoundText": "ķ_No results found______ū",
    "searchInEditModeAlert": "ķ_Search unavailable while editing___________ū"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "ķ_Refresh___ū",
    "confirmManualRefeshText": "Visas atlases un nesaglabātās izmaiņas tiks atmestas"
  },
  "help": {
    "helpIconTooltip": "ķ_Help__ū"
  },
  "filter": {
    "noFeatureFoundText": "ķ_No feature found for this value___________ū.",
    "distinctQueryFalied": "ķ_No distinct values found for the field_____________ū.",
    "andText": "ķ_and__ū",
    "filterInEditModeAlert": "ķ_Filters unavailable while editing___________ū",
    "dropdownSelectOption": "ķ_Select___ū"
  },
  "detailsPanel": {
    "editContentText": "ķ_Edit record____ū"
  },
  "signOutPage": {
    "signOutMessage": "Jūs esat veiksmīgi izrakstījies",
    "reSignInMessage": "Noklikšķiniet šeit, lai pierakstītos"
  }
});