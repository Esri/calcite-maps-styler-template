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
define({
    root: ({
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Não foi possível criar o mapa",
            layerLoad: "Não foi possível carregar completamente o mapa",
            missingItemsFeatureLayer: "Configure o aplicativo para utilizar uma camada de feição"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Mostrar menu",
            signInButton: "Entrar",
            signInButtonTooltip: "Entrar",
            signOutButton: "Sair",
            signOutButtonTooltip: "Sair",
            helpButtonLabel: "Ajuda",
            helpButtonTooltip: "Mais informações",
            gotoListViewLabel: "Visualização da Lista",
            gotoListViewTooltip: "Ir para visualização da lista", // Go to List view tooltip text
            gotoMapViewLabel: "Visualização do Mapa",
            gotoMapViewTooltip: "Ir para visualização do mapa" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Fechar"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Entrar com Facebook",
            signIntoGooglePlusTooltip: "Entrar com Google+",
            signIntoTwitterTooltip: "Entrar com Twitter",
            signOutOfFacebookTooltip: "Sair do Facebook",
            signOutOfGooglePlusTooltip: "Sair do Google+",
            signOutOfTwitterTooltip: "Sair do Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (opcional)",
            requiredFormItemFlag: " (exigido)",
            unsettableRequiredField: "Um campo exigido não inicializou nem está no formulário",
            countOfRemainingCharactersTooltip: "Caracteres restantes",
            cancelButtonLabel: "Cancelar",
            submitButtonLabel: "Enviar"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Votar por este item",
            commentButtonTooltip: "Adicionar um comentário",
            gotoMapViewTooltip: "Ir para visualização do mapa",
            galleryButtonTooltip: "Cosultar arquivos anexados",
            commentsListHeading: "Comentários",
            noCommentsPlaceholder: "Sem comentários"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrar lista por mapa",
            linkToMapViewOptionTooltip: "Listar feições que são visíveis no mapa atual",
            likesForThisItemTooltip: "Votos por este item"
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "hr": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nb": 1,
    "nl": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sr": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});
