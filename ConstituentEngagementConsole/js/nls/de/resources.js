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
            error: "Karte kann nicht erstellt werden" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Keine Gruppe konfiguriert" // Appears when no group is configured
        },
        webMapList: {
            owner: "Besitzer", // Appears in web-map list description panel when it is set to true
            created: "Erstellungsdatum", // Appears in web-map list description panel when it is set to true
            modified: "Änderungsdatum", // Appears in web-map list description panel when it is set to true
            description: "Beschreibung", // Appears in web-map list description panel when it is set to true
            snippet: "Zusammenfassung", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Zugriffs- und Nutzungsbeschränkungen", // Appears in web-map list description panel when it is set to true
            accessInformation: "Quellennachweise", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Anzahl der Ansichten", // Appears in web-map list description panel when it is set to true
            avgRating: "Bewertung", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Die konfigurierte Gruppe ist ungültig oder es wurden noch keine Elemente für diese Gruppe freigegeben", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Karteninformationen" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Abmelden", // Command button to sign-out from the application
            pleaseSignInText: "Melden Sie sich an", // Appears when user needs to sign-in into the application
            showSelectedOption: "Ausgewählte anzeigen", // Command button to show selected records in data-viewer
            showAllOption: "Alle anzeigen", // Command button to show all the records in data-viewer
            clearSelectionOption: "Auswahl aufheben", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Auf Auswahl zoomen", // Command button to zoom map to selected records
            gridViewOption: "Listenansicht", // Command button to display list view
            mapViewOption: "Kartenansicht", // Command button to display map view
            gridMapViewOption: "Split View", // Command button to display split view
            settingsBtnToolTip: "Auswahloptionen", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Anzeigeoptionen", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Diesen Layer durchsuchen", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Aktualisieren", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Gesamte Auswahl und nicht gespeicherte Änderungen werden verworfen", // Appears when user wants to do manual refresh
            signInOption: "Anmelden" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Keine Berichte verfügbar", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Anlagen", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Geben Sie einen Ganzzahlwert ein ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Geben Sie einen Ganzzahlwert ein", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Geben Sie eine Zahl ein", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Geben Sie eine Zahl ein", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Geben Sie einen Wert ein", // Shown when user enters invalid string value
            invalidDate: "Geben Sie ein gültiges Datum ein", // Shown when user enters invalid date value
            invalidNumericRange: "Geben Sie einen gültigen Wert zwischen ${minValue} und ${maxValue} ein", // Shown when user enters value which is out of range
            moreInfolink: "Link", // Shown when value in field contains only URL.
            commentsText: "Bemerkungen", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Keine Kommentare verfügbar", // Appears when no comments are available
            noFeatureGeometry: "Feature kann nicht angezeigt werden" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Keine Konfiguration definiert" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Keine Ergebnisse gefunden" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Weitere Einzelheiten für das aktive Feature anzeigen", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Karte anzeigen", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Vergrößern", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Verkleinern" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Sie wurden erfolgreich abgemeldet", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klicken Sie hier, um sich anzumelden" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager, eine begleitende Gruppen-Vorlage zu <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a>, ist eine reaktionsfähige Gruppenanwendungsvorlage (Desktop und Tablet), die es Benutzern ermöglicht, über die Manager-App eingereichte Probleme und Beobachtungen auf Organisationsebene zu überprüfen.", // Appears when preview page is loaded
            section2: "Die App hält eine oder mehrere Karten für Benutzer bereit, anhand derer sie ein Problem oder eine Beobachtung überprüfen können. Die Benutzer können nach Mustern oder Clustern suchen, Problemdetails überprüfen, den Status aktualisieren und Zuständigkeiten zuweisen.", // Appears when preview page is loaded
            section3: "Der Quellcode der Anwendung kann zur weiteren Konfiguration heruntergeladen werden. Diese zusätzliche Konfiguration der Anwendung kann auf ein konfigurierbares Webanwendungselement von ArcGIS Online angewendet oder auf dem eigenen Webserver gehostet werden.<br /> Weitere Informationen zum Konfigurieren dieser App finden Sie in der Dokumentation zu <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a>." // Appears when preview page is loaded
        }
    })
);