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
            error: "Nie można utworzyć" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Nie skonfigurowano żadnej grupy" // Appears when no group is configured
        },
        webMapList: {
            owner: "Właściciel", // Appears in web-map list description panel when it is set to true
            created: "Data utworzenia", // Appears in web-map list description panel when it is set to true
            modified: "Ostatnia modyfikacja", // Appears in web-map list description panel when it is set to true
            description: "Opis", // Appears in web-map list description panel when it is set to true
            snippet: "Summary", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ograniczenia dostępu i użytkowania", // Appears in web-map list description panel when it is set to true
            accessInformation: "Udostępniający zasoby", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Liczba wyświetleń", // Appears in web-map list description panel when it is set to true
            avgRating: "Ocena", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Skonfigurowana grupa jest nieprawidłowa lub tej grupie nie udostępniono jeszcze żadnych elementów", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informacje o mapie" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Wyloguj się", // Command button to sign-out from the application
            pleaseSignInText: "Zaloguj się", // Appears when user needs to sign-in into the application
            showSelectedOption: "Pokaż wybrane", // Command button to show selected records in data-viewer
            showAllOption: "Show All", // Command button to show all the records in data-viewer
            clearSelectionOption: "Clear Selection", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Powiększ do selekcji", // Command button to zoom map to selected records
            gridViewOption: "Widok listy", // Command button to display list view
            mapViewOption: "Widok mapy", // Command button to display map view
            gridMapViewOption: "Widok podzielony", // Command button to display split view
            settingsBtnToolTip: "Opcje selekcji", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Opcje wyświetlania", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Przeszukaj tę warstwę", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Odśwież", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Wszystkie selekcje i niezapisane zmiany zostaną odrzucone", // Appears when user wants to do manual refresh
            signInOption: "Zaloguj się" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Brak dostępnych raportów", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Załączniki", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Wprowadź liczbę całkowitą ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Wprowadź liczbę całkowitą", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Wprowadź liczbę", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Wprowadź liczbę", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Wprowadź wartość", // Shown when user enters invalid string value
            invalidDate: "Wprowadź prawidłową datę", // Shown when user enters invalid date value
            invalidNumericRange: "Wprowadź wartość między ${minValue} a ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Połącz", // Shown when value in field contains only URL.
            commentsText: "Comments", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Brak dostępnych komentarzy", // Appears when no comments are available
            noFeatureGeometry: "Nie można wyświetlić obiektu" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Brak zdefiniowanych konfiguracji" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Nie znaleziono wyników" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Wyświetl więcej szczegółów aktywnego obiektu", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Wyświetl mapę", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Powiększ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Pomniejsz" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Wylogowanie pomyślne", // Appears when user is successfully signed-out from application
            reSignInMessage: "Kliknij tutaj, aby się zalogować" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Menedżer zgłoszeń użytkowników jest — podobnie jak <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Raportowanie zgłoszeń użytkowników</a> — interaktywnym grupowym szablonem aplikacji na komputery stacjonarne i tablety, który umożliwia użytkownikom instytucji weryfikację problemów i spostrzeżeń przesłanych poprzez aplikację Menedżera.", // Appears when preview page is loaded
            section2: "Aplikacja wyświetla mapę (lub kilka map), na której (których) użytkownik może analizować problem lub spostrzeżenie. Można szukać schematów i klastrów, analizować szczegóły problemu, aktualizować status i przydzielać zakresy odpowiedzialności.", // Appears when preview page is loaded
            section3: "Kod źródłowy aplikacji można pobrać do dalszej konfiguracji. Dodatkową konfigurację aplikacji można zastosować w konfigurowalnej aplikacji internetowej ArcGIS Online lub hostować na własnym serwerze.<br /> Więcej informacji o konfigurowaniu tej aplikacji można znaleźć w dokumentacji szablonu <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Menedżer zgłoszeń użytkowników</a>." // Appears when preview page is loaded
        }
    })
);