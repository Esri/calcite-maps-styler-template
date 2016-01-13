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
            error: "Nelze vytvořit mapu" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Není nakonfigurována žádná skupina" // Appears when no group is configured
        },
        webMapList: {
            owner: "Vlastník", // Appears in web-map list description panel when it is set to true
            created: "Datum vytvoření", // Appears in web-map list description panel when it is set to true
            modified: "Datum změny", // Appears in web-map list description panel when it is set to true
            description: "Popis", // Appears in web-map list description panel when it is set to true
            snippet: "Souhrn", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Přístup a omezení použití", // Appears in web-map list description panel when it is set to true
            accessInformation: "Poděkování", // Appears in web-map list description panel when it is set to true
            tags: "Klíčová slova", // Appears in web-map list description panel when it is set to true
            numViews: "Počet zobrazení", // Appears in web-map list description panel when it is set to true
            avgRating: "Hodnocení", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Nakonfigurovaná skupina je neplatné, případně s touto skupinou ještě nebyly sdíleny žádné položky.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informace o mapě" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Odhlásit", // Command button to sign-out from the application
            pleaseSignInText: "Prosím přihlaste se", // Appears when user needs to sign-in into the application
            showSelectedOption: "Zobrazovat vybrané", // Command button to show selected records in data-viewer
            showAllOption: "Zobrazit vše", // Command button to show all the records in data-viewer
            clearSelectionOption: "Zrušit výběr", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Přiblížit na vybrané", // Command button to zoom map to selected records
            gridViewOption: "Zobrazení seznamu", // Command button to display list view
            mapViewOption: "Zobrazení mapy", // Command button to display map view
            gridMapViewOption: "Rozdělené zobrazení", // Command button to display split view
            settingsBtnToolTip: "Možnosti výběru", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Možnosti zobrazení", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Prohledat vrstvu", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Obnovit", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Všechny výběry a neuložené změny budou zrušeny.", // Appears when user wants to do manual refresh
            signInOption: "Přihlásit" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Nejsou k dispozici žádné zprávy.", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Přílohy", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Zadejte celé číslo. ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Zadejte celé číslo.", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Zadejte číslo.", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Zadejte číslo.", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Zadejte hodnotu.", // Shown when user enters invalid string value
            invalidDate: "Zadejte platné datum.", // Shown when user enters invalid date value
            invalidNumericRange: "Zadejte hodnotu mezi ${minValue} a ${maxValue}.", // Shown when user enters value which is out of range
            moreInfolink: "Odkaz", // Shown when value in field contains only URL.
            commentsText: "Komentáře", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Nejsou k dispozici žádné komentáře.", // Appears when no comments are available
            noFeatureGeometry: "Prvek nelze zobrazit." // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Není definována žádná konfigurace." // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Nebyly nalezeny žádné výsledky." // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Zobrazit další podrobnosti aktivního prvku", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Zobrazit mapu", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Přiblížit", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Oddálit" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Byli jste úspěšně odhlášeni.", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klikněte sem pro přihlášení." // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);