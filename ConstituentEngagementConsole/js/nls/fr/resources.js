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
            error: "Impossible de créer la carte" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Aucun groupe configuré" // Appears when no group is configured
        },
        webMapList: {
            owner: "Propriétaire", // Appears in web-map list description panel when it is set to true
            created: "Date de création", // Appears in web-map list description panel when it is set to true
            modified: "Date de modification", // Appears in web-map list description panel when it is set to true
            description: "Description", // Appears in web-map list description panel when it is set to true
            snippet: "Résumé", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Restrictions d\'accès et d\'utilisation", // Appears in web-map list description panel when it is set to true
            accessInformation: "Crédits", // Appears in web-map list description panel when it is set to true
            tags: "Balises", // Appears in web-map list description panel when it is set to true
            numViews: "Nombre de vues", // Appears in web-map list description panel when it is set to true
            avgRating: "Evaluation", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Le groupe configuré n\'est pas valide ou aucun élément n\'a encore été partagé avec ce groupe", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informations sur la carte" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Déconnexion", // Command button to sign-out from the application
            pleaseSignInText: "Connectez-vous", // Appears when user needs to sign-in into the application
            showSelectedOption: "Afficher les entités sélectionnées", // Command button to show selected records in data-viewer
            showAllOption: "Afficher tout", // Command button to show all the records in data-viewer
            clearSelectionOption: "Effacer la sélection", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom sur les entités sélectionnées", // Command button to zoom map to selected records
            gridViewOption: "Vue Liste", // Command button to display list view
            mapViewOption: "Vue cartographique", // Command button to display map view
            gridMapViewOption: "Diviser la vue", // Command button to display split view
            settingsBtnToolTip: "Options de sélection", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Options d\'affichage", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Rechercher dans cette couche", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Actualiser", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Toutes les sélections et les modifications non enregistrées seront ignorées", // Appears when user wants to do manual refresh
            signInOption: "Connexion" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Aucun rapport disponible", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Pièces jointes", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Entrez un entier ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Entrez un entier", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Please enter a number", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Please enter a number", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Entrez une valeur", // Shown when user enters invalid string value
            invalidDate: "Entrez une date valide", // Shown when user enters invalid date value
            invalidNumericRange: "Entrez une valeur comprise entre ${minValue} et ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Lier", // Shown when value in field contains only URL.
            commentsText: "Commentaires", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Aucun commentaire disponible", // Appears when no comments are available
            noFeatureGeometry: "Impossible d\'afficher l\'entité" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Aucune configuration définie" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Aucun résultat trouvé" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Afficher plus de détails pour l\'entité active", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Afficher la carte", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Zoom avant", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom arrière" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Vous avez été déconnecté", // Appears when user is successfully signed-out from application
            reSignInMessage: "Cliquez ici pour vous connecter" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);