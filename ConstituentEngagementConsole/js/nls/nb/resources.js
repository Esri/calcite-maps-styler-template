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
            error: "Kan ikke opprette kart" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Ingen gruppe er konfigurert" // Appears when no group is configured
        },
        webMapList: {
            owner: "Eier", // Appears in web-map list description panel when it is set to true
            created: "Opprettingsdato", // Appears in web-map list description panel when it is set to true
            modified: "Oppdatert dato", // Appears in web-map list description panel when it is set to true
            description: "Beskrivelse", // Appears in web-map list description panel when it is set to true
            snippet: "Sammendrag", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Begrensning av tilgang og bruk", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Merker", // Appears in web-map list description panel when it is set to true
            numViews: "Antall visninger", // Appears in web-map list description panel when it is set to true
            avgRating: "Vurdering", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigurert gruppe er ugyldig, eller ingen elementer er blitt delt med denne gruppen ennå", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kartinformasjon" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Logg ut", // Command button to sign-out from the application
            pleaseSignInText: "Du må logge på", // Appears when user needs to sign-in into the application
            showSelectedOption: "Vis valgte", // Command button to show selected records in data-viewer
            showAllOption: "Vis alle", // Command button to show all the records in data-viewer
            clearSelectionOption: "Fjern utvalg", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom til valgt", // Command button to zoom map to selected records
            gridViewOption: "Listevisning", // Command button to display list view
            mapViewOption: "Kartvisning", // Command button to display map view
            gridMapViewOption: "Delt visning", // Command button to display split view
            settingsBtnToolTip: "Alternativer for utvalg", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Visningsalternativer", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Søk i dette laget", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Oppdater", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Alle utvalg og endringer som ikke er lagret, forkastes", // Appears when user wants to do manual refresh
            signInOption: "Logg på" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Ingen tilgjengelige rapporter", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Vedlegg", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Angi et heltall ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Angi et heltall", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Angi et tall", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Angi et tall", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Angi en verdi", // Shown when user enters invalid string value
            invalidDate: "Angi en gyldig dato", // Shown when user enters invalid date value
            invalidNumericRange: "Angi en verdi mellom ${minValue} og ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Kobling", // Shown when value in field contains only URL.
            commentsText: "Kommentarer", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Ingen tilgjengelige kommentarer", // Appears when no comments are available
            noFeatureGeometry: "Kan ikke vise geoobjekt" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Ingen konfigurasjon er definert" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Fant ingen resultater" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Vis flere detaljer om det aktive geoobjektet", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Vis kart", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Zoom inn", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom ut" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Du er logget av", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klikk her for å logge på" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);