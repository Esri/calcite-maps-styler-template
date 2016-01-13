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
            error: "Imposibil de creat harta" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Niciun grup configurat" // Appears when no group is configured
        },
        webMapList: {
            owner: "Proprietar", // Appears in web-map list description panel when it is set to true
            created: "Data creării", // Appears in web-map list description panel when it is set to true
            modified: "Dată modificată", // Appears in web-map list description panel when it is set to true
            description: "Descriere", // Appears in web-map list description panel when it is set to true
            snippet: "Rezumat", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Reguli de accesare şi utilizare", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credite", // Appears in web-map list description panel when it is set to true
            tags: "Etichete", // Appears in web-map list description panel when it is set to true
            numViews: "Număr de vizualizări", // Appears in web-map list description panel when it is set to true
            avgRating: "Calificativ", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Grupul configurat nu este valid sau niciun element nu a fost încă partajat cu grupul", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informaţii hartă" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Deconectare", // Command button to sign-out from the application
            pleaseSignInText: "Autentificaţi-vă", // Appears when user needs to sign-in into the application
            showSelectedOption: "Afişare obiecte selectate", // Command button to show selected records in data-viewer
            showAllOption: "Afişare toate+", // Command button to show all the records in data-viewer
            clearSelectionOption: "Golire selecţie", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Transfocare la selecţie", // Command button to zoom map to selected records
            gridViewOption: "Vizualizare listă", // Command button to display list view
            mapViewOption: "Vizualizare hartă", // Command button to display map view
            gridMapViewOption: "Vizualizare împărţită", // Command button to display split view
            settingsBtnToolTip: "Opţiuni selecţie", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Opţiuni de afişare", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Căutare în acest strat tematic", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Reîmprospătare", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Toate selecţiile şi modificările nesalvate vor fi eliminate", // Appears when user wants to do manual refresh
            signInOption: "Autentificare" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Nu există niciun raport disponibil", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Fișiere atașate", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Introduceţi un număr întreg ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Introduceţi un număr întreg", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Introduceţi un număr", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Introduceţi un număr", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Introduceţi o valoare", // Shown when user enters invalid string value
            invalidDate: "Introduceţi o dată validă", // Shown when user enters invalid date value
            invalidNumericRange: "Introduceţi o valoare între ${minValue} şi ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Legare", // Shown when value in field contains only URL.
            commentsText: "Comentarii", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Niciun comentariu disponibil", // Appears when no comments are available
            noFeatureGeometry: "Obiectul spaţial nu poate fi afişat" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Nicio configuraţie definită" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Nu a fost găsit niciun rezultat" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Vizualizaţi mai multe detalii pentru obiectul spaţial activ", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Vizualizare hartă", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Mărire", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Micşorare" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "V-aţi deconectat cu succes", // Appears when user is successfully signed-out from application
            reSignInMessage: "Faceţi clic aici pentru a vă autentifica" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);