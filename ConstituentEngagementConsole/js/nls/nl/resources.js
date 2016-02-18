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
            error: "Kaart kan niet gemaakt worden" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Geen groep geconfigureerd" // Appears when no group is configured
        },
        webMapList: {
            owner: "Eigenaar", // Appears in web-map list description panel when it is set to true
            created: "Aanmaakdatum", // Appears in web-map list description panel when it is set to true
            modified: "Datum wijziging", // Appears in web-map list description panel when it is set to true
            description: "Beschrijving", // Appears in web-map list description panel when it is set to true
            snippet: "Samenvatting", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Gebruiks- en toegangsbeperkingen", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Labels", // Appears in web-map list description panel when it is set to true
            numViews: "Aantal weergaven", // Appears in web-map list description panel when it is set to true
            avgRating: "Beoordeling", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Geconfigureerde groep is ongeldig of er worden nog geen items gedeeld met deze groep", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kaartinformatie" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Afmelden", // Command button to sign-out from the application
            pleaseSignInText: "Meld u aan", // Appears when user needs to sign-in into the application
            showSelectedOption: "Geef geselecteerde weer", // Command button to show selected records in data-viewer
            showAllOption: "Show All", // Command button to show all the records in data-viewer
            clearSelectionOption: "Selectie wissen", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoomen naar geselecteerd", // Command button to zoom map to selected records
            gridViewOption: "Lijstweergave", // Command button to display list view
            mapViewOption: "Kaartweergave", // Command button to display map view
            gridMapViewOption: "Gesplitste weergave", // Command button to display split view
            settingsBtnToolTip: "Opties selecteren", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Weergaveopties", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Deze laag zoeken", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Vernieuwen", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Alle selecties en onopgeslagen wijzigingen worden genegeerd", // Appears when user wants to do manual refresh
            signInOption: "Aanmelden" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Geen rapporten beschikbaar", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Bijlagen", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Een integer invoeren ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Een integer invoeren", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Een nummer invoeren", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Een nummer invoeren", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Voer een waarde in", // Shown when user enters invalid string value
            invalidDate: "Voer een geldige datum in", // Shown when user enters invalid date value
            invalidNumericRange: "Voer een waarde in tussen ${minValue} en ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Koppeling", // Shown when value in field contains only URL.
            commentsText: "Opmerkingen", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Geen reacties beschikbaar", // Appears when no comments are available
            noFeatureGeometry: "Object kan niet worden weergegeven" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Geen configuratie gedefinieerd" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Geen resultaten gevonden" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Bekijk meer details voor het actieve object", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Kaart weergeven", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Inzoomen", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Uitzoomen" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "U bent afgemeld.", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klik hier om u aan te melden." // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager, een companion group template voor <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a>, is een responsive group applicatie template voor desktop en tablets, dat gebruikers binnen een organisatie in staat stelt om problemen en observaties die via de Manager-app ingediend zijn te bekijken..", // Appears when preview page is loaded
            section2: "De app presenteert ene of meerdere kaarten waarmee gebruikers een probleem of observatie kunnen rapporteren. Gebruikers kunnen patronen en clusters zoeken, probleemgegevens bekijken, status bijwerken en verantwoordelijkheden toewijzen.", // Appears when preview page is loaded
            section3: "De broncode van de applicatie kan worden gedownload voor verdere configuratie. Deze aanvullende configuratie van de applicatie kan opnieuw worden toegepast op een configureerbaar ArcGIS Online-webapplicatie-item of op uw eigen webserver worden gehost.<br /> Voor meer informatie over het configureren van deze app, raadpleegt u de documentatie <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a>." // Appears when preview page is loaded
        }
    })
);