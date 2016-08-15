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
    "error": "No se puede crear el mapa"
  },
  "webMapList": {
    "owner": "Propietario",
    "created": "Fecha creada",
    "modified": "Fecha de modificación",
    "description": "Descripción",
    "snippet": "Resumen",
    "licenseInfo": "Restricciones de acceso y uso",
    "accessInformation": "Créditos",
    "tags": "Etiquetas",
    "numViews": "Número de vistas",
    "avgRating": "Calificación",
    "noWebMapInGroup": "El grupo configurado no es válido o todavía no se han compartido elementos con este grupo",
    "infoBtnToolTip": "Información del mapa",
    "openWebmapList": "Abrir panel",
    "closeWebmapList": "Cerrar panel"
  },
  "geoform": {
    "enterInformation": "Detalles",
    "selectAttachments": "Adjuntos",
    "selectFileText": "Examinar",
    "enterLocation": "Ubicación",
    "reportItButton": "Enviar",
    "cancelButton": "Cancelar",
    "requiredField": "(necesario)",
    "selectDefaultText": "Seleccionar&hellip;",
    "invalidInputValue": "Introduce un valor válido.",
    "noFieldsConfiguredMessage": "Los campos de la capa no están configurados para capturar datos",
    "invalidSmallNumber": "Introduce un entero",
    "invalidNumber": "Introduce un entero",
    "invalidFloat": "Por favor, entre un número",
    "invalidDouble": "Por favor, entre un número",
    "requiredFields": "Indica valores para todos los campos obligatorios",
    "selectLocation": "Selecciona la ubicación para el informe",
    "numericRangeHintMessage": "${openStrong}Sugerencia:${closeStrong} Valor mínimo ${minValue} y valor máximo ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Sugerencia:${closeStrong} Fecha mínima ${minValue} y fecha máxima ${maxValue}",
    "errorsInApplyEdits": "No se pudo enviar el informe",
    "attachmentSelectedMsg": "adjuntos seleccionados",
    "attachmentUploadStatus": "Error al cargar ${failed} de ${total} adjuntos",
    "geoLocationError": "Ubicación actual no disponible",
    "geoLocationOutOfExtent": "La ubicación actual está fuera de la extensión del mapa base",
    "submitButtonTooltip": "Guardar",
    "cancelButtonTooltip": "Cancelar",
    "geoformBackButtonTooltip": "Volver a la lista de informes",
    "updateFeaturesConfirmationMsg": "${count} entidades se actualizarán",
    "attachmentHeaderText": "Adjuntos"
  },
  "mapViewer": {
    "zoomInToolTip": "Acercar",
    "zoomOutToolTip": "Alejar"
  },
  "applicationHeader": {
    "signInOption": "Iniciar sesión",
    "signOutOption": "Cerrar sesión",
    "pleaseSignInText": "Inicia sesión"
  },
  "dataviewer": {
    "noIssuesReported": "No hay informes disponibles",
    "noFeatureGeometry": "No se puede mostrar la entidad",
    "ascendingFlagTitle": "Orden ascendente",
    "descendingFlagTitle": "Orden descendente",
    "filterLabel": "Filtro",
    "valueRadioButtonLabel": "Valor",
    "uniqueRadioButtonLabel": "Única",
    "selectLayerToBegin": "Seleccione una categoría para empezar",
    "layerFeatureCount": "á_${selectedFeatureCount} selected / ${featureCount} records__________________Ó"
  },
  "timeSlider": {
    "timeSliderLabel": "Rango de tiempo",
    "timeSliderInEditModeAlert": "El control deslizante de tiempo no está disponible durante la edición"
  },
  "comment": {
    "commentsFormSubmitButton": "Guardar",
    "commentsFormCancelButton": "Cancelar",
    "errorInSubmittingComment": "Los cambios no se pueden guardar.",
    "emptyCommentMessage": "Valor obligatorio",
    "placeHolderText": "",
    "noCommentsAvailableText": "No hay registros disponibles",
    "remainingTextCount": "${0} caracteres restantes",
    "showNoText": "No",
    "selectAttachments": "á_Attachments____Ó",
    "selectFileText": "á_Browse___Ó",
    "attachmentSelectedMsg": "á_attachment(s) selected________Ó",
    "attachmentHeaderText": "á_Attachments____Ó",
    "addRecordText": "á_Add Record____Ó"
  },
  "main": {
    "noGroup": "No hay ningún grupo configurado"
  },
  "search": {
    "searchIconTooltip": "Buscar en esta capa",
    "noResultFoundText": "Ningún resultado encontrado",
    "searchInEditModeAlert": "La búsqueda no está disponible durante la edición"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "Actualizar",
    "confirmManualRefreshText": "á_All selections and unsaved changes will be discarded_________________Ó"
  },
  "help": {
    "helpIconTooltip": "Ayuda"
  },
  "filter": {
    "noFeatureFoundText": "No se ha encontrado ninguna entidad para este valor.",
    "distinctQueryFailed": "á_No distinct values found for the field_____________Ó.",
    "andText": "y",
    "filterInEditModeAlert": "á_Filters unavailable while editing___________Ó.",
    "dropdownSelectOption": "Seleccionar",
    "filterInShowSelectedEditModeAlert": "á_Filters unavailable in 'Show Selected' mode______________Ó."
  },
  "detailsPanel": {
    "editContentText": "Editar registro"
  },
  "signOutPage": {
    "signOutMessage": "Has cerrado sesión correctamente",
    "reSignInMessage": "Haz clic aquí para iniciar sesión"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "á_Selection Options______Ó",
    "showAllOptionText": "á_Show All___Ó",
    "showSelectedOptionText": "á_Show Selected_____Ó"
  }
});