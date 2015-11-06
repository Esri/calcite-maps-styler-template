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
            error: "Não foi possível criar mapa",
            layerLoad: "Não foi possível carregar o mapa totalmente",
            missingItemsFeatureLayer: "Por favor, configure a aplicação para utilizar uma camada de elementos"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Exibir menu",
            signInButton: "Iniciar sessão",
            signInButtonTooltip: "Iniciar sessão",
            signOutButton: "Terminar sessão",
            signOutButtonTooltip: "Terminar Sessão",
            helpButtonLabel: "Ajuda",
            helpButtonTooltip: "Saiba mais",
            gotoListViewLabel: "Visualização da Lista",
            gotoListViewTooltip: "Ir para a vista de lista", // Go to List view tooltip text
            gotoMapViewLabel: "Vista de Mapa",
            gotoMapViewTooltip: "Ir para a vista de mapa" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Fechar"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Iniciar sessão com Facebook",
            signIntoGooglePlusTooltip: "Iniciar sessão com Google+",
            signIntoTwitterTooltip: "Iniciar sessão com Twitter",
            signOutOfFacebookTooltip: "Terminar sessão no Facebook",
            signOutOfGooglePlusTooltip: "Terminar sessão no Google+",
            signOutOfTwitterTooltip: "Terminar sessão no Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (opcional)",
            requiredFormItemFlag: " (exigido)",
            unsettableRequiredField: "Um campo obrigatório não foi inicializado nem se encontra no formulário",
            countOfRemainingCharactersTooltip: "Caracteres restantes",
            cancelButtonLabel: "Cancelar",
            submitButtonLabel: "Submeter"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Votar neste item",
            commentButtonTooltip: "Adicionar um comentário",
            gotoMapViewTooltip: "Ir para a vista de mapa",
            galleryButtonTooltip: "Ver ficheiros anexos",
            commentsListHeading: "Comentários",
            noCommentsPlaceholder: "Sem comentários"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrar lista por mapa",
            linkToMapViewOptionTooltip: "Listar elementos visíveis no mapa atual",
            likesForThisItemTooltip: "Votos para este item"
        }
    })
);
