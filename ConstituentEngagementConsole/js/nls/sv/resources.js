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
            error: "Det går inte att skapa kartan" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Ingen grupp konfigurerad" // Appears when no group is configured
        },
        webMapList: {
            owner: "Ägare", // Appears in web-map list description panel when it is set to true
            created: "Skapad den", // Appears in web-map list description panel when it is set to true
            modified: "Ändrad den", // Appears in web-map list description panel when it is set to true
            description: "Beskrivning", // Appears in web-map list description panel when it is set to true
            snippet: "Sammanfattning", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Begränsningar av åtkomst och användning", // Appears in web-map list description panel when it is set to true
            accessInformation: "Krediter", // Appears in web-map list description panel when it is set to true
            tags: "Taggar", // Appears in web-map list description panel when it is set to true
            numViews: "Antal visningar", // Appears in web-map list description panel when it is set to true
            avgRating: "Bedömning", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Den konfigurerade gruppen är ogiltig eller inga objekt har delats med den här gruppen ännu", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kartinformation" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Logga ut", // Command button to sign-out from the application
            pleaseSignInText: "Logga in", // Appears when user needs to sign-in into the application
            showSelectedOption: "Visa valda", // Command button to show selected records in data-viewer
            showAllOption: "Visa alla", // Command button to show all the records in data-viewer
            clearSelectionOption: "Rensa val", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zooma till valda", // Command button to zoom map to selected records
            gridViewOption: "Listvy", // Command button to display list view
            mapViewOption: "Kartvy", // Command button to display map view
            gridMapViewOption: "Dela vy", // Command button to display split view
            settingsBtnToolTip: "Alternativ för urval", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Visningsalternativ", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Sök i det här lagret", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Uppdatera", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Alla urval och osparade ändringar ignoreras", // Appears when user wants to do manual refresh
            signInOption: "Logga in" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Inga rapporter tillgängliga", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Bilagor", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Ange ett heltal ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Ange ett heltal", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Ange ett tal", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Ange ett tal", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Ange ett värde", // Shown when user enters invalid string value
            invalidDate: "Ange ett giltigt datum", // Shown when user enters invalid date value
            invalidNumericRange: "Ange ett värde mellan ${minValue} och ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Länk", // Shown when value in field contains only URL.
            commentsText: "Kommentarer", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Inga kommentarer tillgängliga", // Appears when no comments are available
            noFeatureGeometry: "Geoobjektet kan inte visas" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Ingen konfiguration har definierats" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Inga resultat hittades" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Visa mer information för det aktiva geoobjektet", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Visa karta", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Zooma in", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zooma ut" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Du har loggat ut", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klicka här för att logga in" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);