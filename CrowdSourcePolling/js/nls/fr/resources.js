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
            error: "Impossible de créer la carte",
            layerLoad: "Impossible de charger entièrement la carte",
            missingItemsFeatureLayer: "Veuillez configurer l\'application pour utiliser une couche d\'entités"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Afficher le menu",
            signInButton: "Connexion",
            signInButtonTooltip: "Se connecter",
            signOutButton: "Déconnexion",
            signOutButtonTooltip: "Déconnexion",
            helpButtonLabel: "Aide",
            helpButtonTooltip: "En savoir plus",
            gotoListViewLabel: "Vue Liste",
            gotoListViewTooltip: "Accéder à la vue Liste", // Go to List view tooltip text
            gotoMapViewLabel: "Vue cartographique",
            gotoMapViewTooltip: "Accéder à la vue cartographique" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Fermer"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Se connecter avec Facebook",
            signIntoGooglePlusTooltip: "Se connecter avec Google+",
            signIntoTwitterTooltip: "Se connecter avec Twitter",
            signOutOfFacebookTooltip: "Se déconnecter de Facebook",
            signOutOfGooglePlusTooltip: "Se déconnecter de Google+",
            signOutOfTwitterTooltip: "Se déconnecter de Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (facultatif)",
            requiredFormItemFlag: " (requis)",
            unsettableRequiredField: "Un champ obligatoire n\'est pas initialisé ou ne figure pas dans le formulaire",
            countOfRemainingCharactersTooltip: "Caractères restants",
            cancelButtonLabel: "Annuler",
            submitButtonLabel: "Envoyer"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Voter pour cet élément",
            commentButtonTooltip: "Ajouter un commentaire",
            gotoMapViewTooltip: "Accéder à la vue cartographique",
            galleryButtonTooltip: "Voir les fichiers joints",
            commentsListHeading: "Commentaires",
            noCommentsPlaceholder: "Aucun commentaire"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrer la liste par cartes",
            linkToMapViewOptionTooltip: "Répertorier les entités visibles sur la carte active",
            likesForThisItemTooltip: "Voter pour cet élément"
        }
    })
);
