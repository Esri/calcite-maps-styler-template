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
define(({
    map: {
        error: "Impossible de créer la carte",
        layerLoad: "Impossible de charger entièrement la carte",
        missingItemsFeatureLayer: "S'il vous plaît configurer l'application pour utiliser une couche d'entités"
    },
    sidebar_header: {
        menuButtonTooltip: "Ouvrir le menu",
        signInButton: "Se connecter",
        signInButtonTooltip: "Se connecter à un média social",
        signOutButton: "Se déconnecter",
        signOutButtonTooltip: "Se déconnecter cette application de votre média social",
        helpButtonLabel: "Aide",
        helpButtonTooltip: "Pour en savoir plus sur cette application",
        gotoListViewLabel: "Vue liste",
        gotoListViewTooltip: "Aller à la liste de vue", // Go to List view tooltip text
        gotoMapViewLabel: "Vue cartographique",
        gotoMapViewTooltip: "Aller à la carte vue" // Tooltip for map-it icon in list header
    },
    popup_Close: {
        closeButtonTooltip: "Fermer"
    },
    social_media: {
        signIntoFacebookTooltip: "Connectez-vous à Facebook",
        signIntoGooglePlusTooltip: "Connectez-vous à Google+",
        signIntoTwitterTooltip: "Connectez-vous à Twitter",
        signOutOfFacebookTooltip: "Se déconnecter de Facebook",
        signOutOfGooglePlusTooltip: "Se déconnecter de Google+",
        signOutOfTwitterTooltip: "Se déconnecter de Twitter"
    },
    dynamic_form: {
        optionalFormItemFlag: " (facultatif)",
        requiredFormItemFlag: " (obligatoire)",
        unsettableRequiredField: "Un champ obligatoire est ni dans le formulaire ni initialisé",
        countOfRemainingCharactersTooltip: "Caractères restants",
        cancelButtonLabel: "Annuler",
        submitButtonLabel: "Envoyer"
    },
    item_details: {
        likeButtonTooltip: "Voter pour cet article",
        commentButtonTooltip: "Ajouter un commentaire à propos de cet article",
        gotoMapViewTooltip: "Aller à la carte vue",
        galleryButtonTooltip: "Voir fichiers joints",
        commentsListHeading: "Commentaires",
        noCommentsPlaceholder: "Il n'y a aucun commentaire"
    },
    item_list: {
        linkToMapViewOptionLabel: "Filtrez la liste par carte",
        linkToMapViewOptionTooltip: "Appliquer un filtre à la liste seules caractéristiques qui sont visibles dans la carte actuelle",
        likesForThisItemTooltip: "Votes pour cet article"
    }
}));
