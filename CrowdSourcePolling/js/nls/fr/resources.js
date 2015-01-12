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
            error: "Impossible de créer la carte"
        },
        tooltips: {
            location: "Utilisez votre position",
            charactersRemaining: "Caractères restants",
            returnToList: "Retour à la liste",
            votes: "Nombre de votes; cliquez pour ajouter",
            comments: "Nombre de commentaires; cliquez pour ajouter",
            hidePanel: "Cacher ce panneau",
            showPanel: "Montrer le panneau récapitulatif"
        },
        labels: {
            sort: "Trier",
            signInLabel: "Se connecter",
            signOutLabel: "Se déconnecter",
            location: "Location",
            locationTip: "(Entrez l'adresse, utilisez le bouton localiser, ou cliquez sur la carte)",
            attachment: "Attacher une image (facultatif)",
            submit: "Soumettre",
            optional: " (facultatif)",
            addComment: "Ajouter un commentaire",
            commentName: "Votre nom",
            author: "par",
            anonymous: "Anonyme",
            currentLocation: "Emplacement actuel :"
        },
        prompts: {
            confirmHTTPSRedirect: "Votre navigateur ne supporte pas CORS. Vous avez besoin de rediriger vers HTTPS. Continuer ?"
        },
        messages: {
            yourContentSubmitted: "Votre contenu a été envoyé. Merci.",  // Appears after content has been added to the map and successfully submitted to the server
            noEditableLayer: "Aucune couche modifiable est disponible pour accepter des données",
            noConfiguration: "Impossible d\'accéder à la configuration de l\'application",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            incompleteForm: "Le formulaire est incomplète",  // Appears when new-item form is missing required items
            noLocation: "Pas de lieu spécifié."  // Appears when a new item is submitted with specifying the submitter's location
        }
    })
);
