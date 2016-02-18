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
            error: "Impossibile creare la mappa" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Nessun gruppo configurato" // Appears when no group is configured
        },
        webMapList: {
            owner: "Proprietario", // Appears in web-map list description panel when it is set to true
            created: "Data creazione", // Appears in web-map list description panel when it is set to true
            modified: "Data modifica", // Appears in web-map list description panel when it is set to true
            description: "Descrizione", // Appears in web-map list description panel when it is set to true
            snippet: "Riepilogo", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Vincoli di accesso e uso", // Appears in web-map list description panel when it is set to true
            accessInformation: "Crediti", // Appears in web-map list description panel when it is set to true
            tags: "Tag", // Appears in web-map list description panel when it is set to true
            numViews: "Numero di visualizzazioni", // Appears in web-map list description panel when it is set to true
            avgRating: "Classificazione", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Il gruppo configurato non è valido oppure non sono stati ancora condivisi elementi con il gruppo.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informazioni mappa" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Esci", // Command button to sign-out from the application
            pleaseSignInText: "Effettuare l\'accesso", // Appears when user needs to sign-in into the application
            showSelectedOption: "Mostra selezionate", // Command button to show selected records in data-viewer
            showAllOption: "Mostra tutto", // Command button to show all the records in data-viewer
            clearSelectionOption: "Cancella selezione", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom su selezione", // Command button to zoom map to selected records
            gridViewOption: "Visualizzazione elenco", // Command button to display list view
            mapViewOption: "Vista mappa", // Command button to display map view
            gridMapViewOption: "Vista divisa", // Command button to display split view
            settingsBtnToolTip: "Seleziona Opzioni", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Opzioni di visualizzazione", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Cerca nel layer", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Aggiorna", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Tutte le selezioni e le modifiche non salvate verranno ignorate", // Appears when user wants to do manual refresh
            signInOption: "Accedi" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Nessun report disponibile", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Allegati", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Immettere un numero intero ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Immettere un numero intero", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Si prega di immettere un numero", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Si prega di immettere un numero", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Immettere un valore", // Shown when user enters invalid string value
            invalidDate: "Immettere una data valida", // Shown when user enters invalid date value
            invalidNumericRange: "Immettere un valore compreso tra ${minValue} e ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Collega", // Shown when value in field contains only URL.
            commentsText: "Commenti", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Nessun commento disponibile", // Appears when no comments are available
            noFeatureGeometry: "Impossibile visualizzare la feature" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Nessuna configurazione definita" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Nessun risultato trovato" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Visualizza altri dettagli per la feature attiva", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Visualizza mappa", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Esegui Zoom in", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom indietro" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Disconnessione riuscita", // Appears when user is successfully signed-out from application
            reSignInMessage: "Fare clic qui per effettuare l\'accesso" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);