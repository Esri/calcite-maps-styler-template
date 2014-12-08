/*global define */
/*
 | Copyright 2012 Esri
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
            error: "No se puede crear el mapa"
        },
        tooltips: {
            search: "Buscar",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Ubicación actual",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Enviar corrección",  // Command button to submit a correction to the app's host
            collect: "Filtrar/Editar",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Mostrar la leyenda",  //Display the legend
            filter: "Filtrar capas de mapa",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Cambiar mapa base",  // Command button to open a dialog box for switching basemaps
            share: "Compartir",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Compartir por correo electrónico",  // Command button to share the current map extents via email
            shareViaFacebook: "Compartir a través de Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Compartir a través de Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Imprimir mapa",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Ver mapa impreso",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientación de página horizontal",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientación de página vertical",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Ayuda"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "correo electrónico",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "título",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Buscar:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Dibujar",  // Appears before a set of tools for drawing on the map
            mapLayers: "Capas de mapa:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Campos de la capa de búsqueda:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Este sitio no tiene permiso para obtener la ubicación actual",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "El navegador no ha podido obtener la ubicación actual",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "El navegador no ha podido obtener la ubicación actual a su debido tiempo",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "No se ha configurado ninguna capa de búsqueda",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Esta capa de búsqueda no se ha encontrado en el mapa",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "No se pueden encontrar campos para la capa de mapa.<br><br>Comprueba que esta capa existe en la raíz del contenido del mapa. Los servicios anidados, como los servicios de mapas dinámicos de ArcGIS for Server, se deben agregar al mapa capa a capa (incluido el número del índice de la capa) para usarlos como capas de búsqueda. Los servicios en teselas no se pueden usar como capas de búsqueda.",
            searchFieldMissing: "Este campo no se ha encontrado en la capa de búsqueda del mapa",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Ninguno de estos campos se puede encontrar en la capa de búsqueda del mapa",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Este campo no existe en ninguna de las capas de mapa",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Tu contenido se ha enviado. Gracias.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "No se puede acceder a la configuración de la aplicación",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "No se puede iniciar la aplicación"  // Appears for any failure to build the user interface
        }
    })
);
