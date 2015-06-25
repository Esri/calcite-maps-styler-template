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
            error: "Kan ikke oprette kort" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Ingen gruppe konfigureret" // Appears when no group is configured
        },
        webMapList: {
            owner: "Ejer", // Appears in web-map list description panel when it is set to true
            created: "Oprettelsesdato", // Appears in web-map list description panel when it is set to true
            modified: "Dato for ændring", // Appears in web-map list description panel when it is set to true
            description: "Beskrivelse", // Appears in web-map list description panel when it is set to true
            snippet: "Summary", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Få adgang til og brug begrænsninger", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Antal visninger", // Appears in web-map list description panel when it is set to true
            avgRating: "Vurdering", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigureret gruppe er ugyldig, eller ingen elementer er endnu blevet delt med denne gruppe", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kortoplysninger" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Log ud", // Command button to sign-out from the application
            pleaseSignInText: "Log ind", // Appears when user needs to sign-in into the application
            showSelectedOption: "Vis valgte", // Command button to show selected records in data-viewer
            showAllOption: "Show All", // Command button to show all the records in data-viewer
            clearSelectionOption: "Clear Selection", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom til valgte", // Command button to zoom map to selected records
            gridViewOption: "Listevisning", // Command button to display list view
            mapViewOption: "Kortvisning", // Command button to display map view
            gridMapViewOption: "Delt visning", // Command button to display split view
            settingsBtnToolTip: "Valgmuligheder", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Visning af valgmuligheder", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Søg i dette lag", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Opdatér", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Alle markeringer og ikke-gemte ændringer vil gå tabt", // Appears when user wants to do manual refresh
            signInOption: "Log ind" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Ingen tilgængelige rapporter", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Vedhæftninger", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Indtast et heltal ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Indtast et heltal", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Indtast et tal", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Indtast et tal", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Indtast en værdi.", // Shown when user enters invalid string value
            invalidDate: "Indtast en gyldig dato", // Shown when user enters invalid date value
            invalidNumericRange: "Indtast en værdi mellem ${minVærdi} og ${maksVærdi}", // Shown when user enters value which is out of range
            moreInfolink: "Link", // Shown when value in field contains only URL.
            commentsText: "Comments", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ingen kommentarer tilgængelige", // Appears when no comments are available
            noFeatureGeometry: "Objekt kan ikke vises" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Ingen konfiguration defineret" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Ingen resultater" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Vis flere oplysninger for det aktive objekt", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Vis kort", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Zoom ind", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom ud" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Du er blevet logget ud", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klik her for at logge ind" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager – en gruppeskabelon, der følger med <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a> – er en responsiv gruppe-app-skabelon (til desktop- og tablet-enheder), der gør det muligt for brugerne i en organisation at gennemse problemer/observationer, der er sendt via Manager-app\'en.", // Appears when preview page is loaded
            section2: "App\'en indeholder et eller flere kort, som brugerne kan anvende til gennemse et problem eller en observation. Brugerne kan se efter mønstre og klynger, gennemse problemoplysninger, opdatere status og tildele ansvar.", // Appears when preview page is loaded
            section3: "Applikationens kildekode kan hentes for yderligere konfiguration. Yderligere konfiguration af applikationen kan anvendes på et ArcGIS Online-konfigurerbart webapplikationselement eller \"hostes\" på din egen webserver.<br /> Yderligere oplysninger om konfiguration af denne app findes i dokumentationen til <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a>." // Appears when preview page is loaded
        }
    })
);