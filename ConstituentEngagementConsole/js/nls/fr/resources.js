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
    "error": "Impossible de créer la carte"
  },
  "webMapList": {
    "owner": "Propriétaire",
    "created": "Date de création",
    "modified": "Date de modification",
    "description": "Description",
    "snippet": "Résumé",
    "licenseInfo": "Restrictions d'accès et d'utilisation",
    "accessInformation": "Crédits",
    "tags": "Balises",
    "numViews": "Nombre de vues",
    "avgRating": "Evaluation",
    "noWebMapInGroup": "Le groupe configuré n'est pas valide ou aucun élément n'a encore été partagé avec ce groupe",
    "infoBtnToolTip": "Informations sur la carte",
    "openWebmapList": "Ouvrir le volet",
    "closeWebmapList": "Fermer le volet"
  },
  "geoform": {
    "enterInformation": "Détails",
    "selectAttachments": "Pièces jointes",
    "selectFileText": "Parcourir",
    "enterLocation": "Emplacement",
    "reportItButton": "Envoyer",
    "cancelButton": "Annuler",
    "requiredField": "(requis)",
    "selectDefaultText": "Sélectionner&hellip;",
    "invalidInputValue": "Entrez une valeur valide.",
    "noFieldsConfiguredMessage": "Les champs de couche ne sont pas configurés pour capturer les données",
    "invalidSmallNumber": "Entrez un entier",
    "invalidNumber": "Entrez un entier",
    "invalidFloat": "Please enter a number",
    "invalidDouble": "Please enter a number",
    "requiredFields": "Indiquez des valeurs pour tous les champs requis",
    "selectLocation": "Sélectionnez l'emplacement de votre rapport",
    "numericRangeHintMessage": "${openStrong}Hint:${closeStrong} Valeur minimum ${minValue} et valeur maximum ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Hint:${closeStrong} Date minimum ${minValue} et date maximum ${maxValue}",
    "errorsInApplyEdits": "Impossible d'envoyer le rapport",
    "attachmentSelectedMsg": "pièce(s) jointe(s) sélectionnée(s)",
    "attachmentUploadStatus": "Echec du chargement de ${failed} sur ${total} pièce(s) jointe(s)",
    "geoLocationError": "Localisant actuel non disponible",
    "geoLocationOutOfExtent": "L'étendue courante est en dehors de l'étendue du fond de carte",
    "submitButtonTooltip": "Enregistrer",
    "cancelButtonTooltip": "Annuler",
    "geoformBackButtonTooltip": "Revenir à la liste des rapports",
    "updateFeaturesConfirmationMsg": "${count} entités vont être mises à jour",
    "attachmentHeaderText": "Pièces jointes"
  },
  "mapViewer": {
    "zoomInToolTip": "Zoom avant",
    "zoomOutToolTip": "Zoom arrière"
  },
  "applicationHeader": {
    "signInOption": "Connexion",
    "signOutOption": "Déconnexion",
    "pleaseSignInText": "Connectez-vous"
  },
  "dataviewer": {
    "noIssuesReported": "Aucun rapport disponible",
    "noFeatureGeometry": "Impossible d'afficher l'entité",
    "ascendingFlagTitle": "Trier par ordre croissant",
    "descendingFlagTitle": "Trier par ordre décroissant",
    "filterLabel": "Filtre",
    "valueRadioButtonLabel": "Valeur",
    "uniqueRadioButtonLabel": "Unique",
    "selectLayerToBegin": "Sélectionnez une catégorie pour commencer",
    "layerFeatureCount": "æ_${selectedFeatureCount} selected / ${featureCount} records__________________Â"
  },
  "timeSlider": {
    "timeSliderLabel": "Période",
    "timeSliderInEditModeAlert": "Le curseur temporel est indisponible pendant la mise à jour"
  },
  "comment": {
    "commentsFormSubmitButton": "Enregistrer",
    "commentsFormCancelButton": "Annuler",
    "errorInSubmittingComment": "Impossible d'enregistrer les mises à jour.",
    "emptyCommentMessage": "Valeur requise",
    "placeHolderText": "",
    "noCommentsAvailableText": "Aucun enregistrement disponible",
    "remainingTextCount": "${0} caractère(s) restant(s)",
    "showNoText": "Non",
    "selectAttachments": "æ_Attachments____Â",
    "selectFileText": "æ_Browse___Â",
    "attachmentSelectedMsg": "æ_attachment(s) selected________Â",
    "attachmentHeaderText": "æ_Attachments____Â",
    "addRecordText": "æ_Add Record____Â"
  },
  "main": {
    "noGroup": "Aucun groupe configuré"
  },
  "search": {
    "searchIconTooltip": "Rechercher dans cette couche",
    "noResultFoundText": "Aucun résultat trouvé",
    "searchInEditModeAlert": "La recherche est indisponible pendant la mise à jour"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Actualiser",
    "confirmManualRefreshText": "æ_All selections and unsaved changes will be discarded_________________Â"
  },
  "help": {
    "helpIconTooltip": "Aide"
  },
  "filter": {
    "noFeatureFoundText": "Aucune entité trouvée pour cette valeur.",
    "distinctQueryFailed": "æ_No distinct values found for the field_____________Â.",
    "andText": "et",
    "filterInEditModeAlert": "æ_Filters unavailable while editing___________Â.",
    "dropdownSelectOption": "Sélectionner",
    "filterInShowSelectedEditModeAlert": "æ_Filters unavailable in 'Show Selected' mode______________Â."
  },
  "detailsPanel": {
    "editContentText": "Mettre à jour l'enregistrement"
  },
  "signOutPage": {
    "signOutMessage": "Vous avez été déconnecté",
    "reSignInMessage": "Cliquez ici pour vous connecter"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "æ_Selection Options______Â",
    "showAllOptionText": "æ_Show All___Â",
    "showSelectedOptionText": "æ_Show Selected_____Â"
  }
});