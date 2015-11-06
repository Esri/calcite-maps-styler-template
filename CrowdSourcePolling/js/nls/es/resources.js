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
        map: {  // Map, feature layer, and comments table loading and checking
            error: "No se puede crear el mapa",
            layerLoad: "No se puede cargar completamente el mapa",
            missingItemsFeatureLayer: "Configura la aplicación para que utilice una capa de entidades."
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Menú Mostrar",
            signInButton: "Iniciar sesión",
            signInButtonTooltip: "Iniciar sesión",
            signOutButton: "Cerrar sesión",
            signOutButtonTooltip: "Cerrar sesión",
            helpButtonLabel: "Ayuda",
            helpButtonTooltip: "Más información",
            gotoListViewLabel: "vista de la lista",
            gotoListViewTooltip: "Ir a la vista de lista", // Go to List view tooltip text
            gotoMapViewLabel: "Vista del mapa",
            gotoMapViewTooltip: "Ir a la vista de mapa" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Cerrar"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Inicia sesión con Facebook",
            signIntoGooglePlusTooltip: "Inicia sesión con Google+",
            signIntoTwitterTooltip: "Inicia sesión con Twitter",
            signOutOfFacebookTooltip: "Cerrar sesión de Facebook",
            signOutOfGooglePlusTooltip: "Cerrar sesión de Google+",
            signOutOfTwitterTooltip: "Cerrar sesión de Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (opcional)",
            requiredFormItemFlag: " (necesario)",
            unsettableRequiredField: "Un campo obligatorio no está inicializado ni tiene el formato",
            countOfRemainingCharactersTooltip: "Caracteres restantes",
            cancelButtonLabel: "Cancelar",
            submitButtonLabel: "Enviar"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Votar este elemento",
            commentButtonTooltip: "Agregar un comentario",
            gotoMapViewTooltip: "Ir a la vista de mapa",
            galleryButtonTooltip: "Ver archivos adjuntos",
            commentsListHeading: "Comentarios",
            noCommentsPlaceholder: "No hay comentarios"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrar lista por mapa",
            linkToMapViewOptionTooltip: "Enumerar las entidades visibles en el mapa actual",
            likesForThisItemTooltip: "Votos para este elemento"
        }
    })
);
