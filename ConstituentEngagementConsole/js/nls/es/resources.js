/*global define */
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
define(
     ({
        map: {
            error: "No se puede crear el mapa" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "No hay ningún grupo configurado" // Appears when no group is configured
        },
        webMapList: {
            owner: "Propietario", // Appears in web-map list description panel when it is set to true
            created: "Fecha creada", // Appears in web-map list description panel when it is set to true
            modified: "Fecha de modificación", // Appears in web-map list description panel when it is set to true
            description: "Descripción", // Appears in web-map list description panel when it is set to true
            snippet: "Resumen", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Restricciones de acceso y uso", // Appears in web-map list description panel when it is set to true
            accessInformation: "Créditos", // Appears in web-map list description panel when it is set to true
            tags: "Etiquetas", // Appears in web-map list description panel when it is set to true
            numViews: "Número de vistas", // Appears in web-map list description panel when it is set to true
            avgRating: "Calificación", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "El grupo configurado no es válido o todavía no se han compartido elementos con este grupo", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Información del mapa" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Cerrar sesión", // Command button to sign-out from the application
            pleaseSignInText: "Inicia sesión", // Appears when user needs to sign-in into the application
            showSelectedOption: "Mostrar seleccionado", // Command button to show selected records in data-viewer
            showAllOption: "Mostrar todo", // Command button to show all the records in data-viewer
            clearSelectionOption: "Borrar selección", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Hacer zoom a seleccionados", // Command button to zoom map to selected records
            gridViewOption: "vista de la lista", // Command button to display list view
            mapViewOption: "Vista del mapa", // Command button to display map view
            gridMapViewOption: "Vista dividida", // Command button to display split view
            settingsBtnToolTip: "Opciones de selección", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Opciones de visualización", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Buscar en esta capa", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Actualizar", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Se descartarán todas las seleccione y cambios sin guardar", // Appears when user wants to do manual refresh
            signInOption: "Iniciar sesión" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "No hay informes disponibles", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Adjuntos", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Introduce un entero ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Introduce un entero", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Por favor, entre un número", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Por favor, entre un número", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Introduce un valor", // Shown when user enters invalid string value
            invalidDate: "Introduce una fecha válida", // Shown when user enters invalid date value
            invalidNumericRange: "Escribe un valor entre ${minValue} y ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Vínculo", // Shown when value in field contains only URL.
            commentsText: "Comentarios", // Appears when comments are available for display in details tab
            noCommentsAvailable: "No hay comentarios disponibles", // Appears when no comments are available
            noFeatureGeometry: "No se puede mostrar la entidad" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "No hay ninguna configuración definida" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Ningún resultado encontrado" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Ver más detalles sobre la entidad activa", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Ver mapa", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Acercar", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Alejar" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Has cerrado sesión correctamente", // Appears when user is successfully signed-out from application
            reSignInMessage: "Haz clic aquí para iniciar sesión" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager, una plantilla de grupo complementaria de <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a>, es una plantilla de aplicación de grupo interactiva (para dispositivos de escritorio y tablets) que permite a los usuarios de una organización revisar los problemas y observaciones enviados a través de la aplicación Manager.", // Appears when preview page is loaded
            section2: "La aplicación presenta uno o más mapas a los usuarios para revisar un problema u observación. Los usuarios pueden buscar patrones y clusters, revisar detalles de los problemas, actualizar su estado y asignar responsabilidades.", // Appears when preview page is loaded
            section3: "Puedes descargar el código fuente de la aplicación para configurarla aún más. Puedes volver a aplicar esta configuración adicional de la aplicación a un elemento de aplicación web configurable de ArcGIS Online o alojarla en tu propio servidor web.<br /> Para obtener más información sobre la configuración de esta aplicación, consulta la <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>documentación</a> de Crowdsource Manager." // Appears when preview page is loaded
        }
    })
);