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
            error: "Võimetu koostama kaarti" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Ühtki gruppi ei ole konfigureeritud" // Appears when no group is configured
        },
        webMapList: {
            owner: "Omanik", // Appears in web-map list description panel when it is set to true
            created: "Kuupäev loodud", // Appears in web-map list description panel when it is set to true
            modified: "Muutmise kuupäev", // Appears in web-map list description panel when it is set to true
            description: "Kirjeldus", // Appears in web-map list description panel when it is set to true
            snippet: "Kokkuvõte", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ligipääsu ja kasutuse piirangud", // Appears in web-map list description panel when it is set to true
            accessInformation: "Krediidid", // Appears in web-map list description panel when it is set to true
            tags: "Märksõnad", // Appears in web-map list description panel when it is set to true
            numViews: "Vaatamiste arv", // Appears in web-map list description panel when it is set to true
            avgRating: "Hinnang", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigureeritud grupp ei kehti või ei ole selle grupiga veel objekte jagatud.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kaarditeave" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Logi välja", // Command button to sign-out from the application
            pleaseSignInText: "Palun logi sisse", // Appears when user needs to sign-in into the application
            showSelectedOption: "Kuva valitud", // Command button to show selected records in data-viewer
            showAllOption: "Kuva kõik", // Command button to show all the records in data-viewer
            clearSelectionOption: "Tühista valik", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Suumi valitutele", // Command button to zoom map to selected records
            gridViewOption: "Vaadete loend", // Command button to display list view
            mapViewOption: "Kaardivaade", // Command button to display map view
            gridMapViewOption: "Katkestamise vaade", // Command button to display split view
            settingsBtnToolTip: "Selekteerimise võimalused", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Kuvamise valikud", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Otsi kihti", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Värskenda", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Teie salvestamata valikud ja muudatused lähevad kaotsi.", // Appears when user wants to do manual refresh
            signInOption: "Logi sisse" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Ühtki aruannet ei ole saadaval.", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Manused", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Palun sisestage täisarv ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Palun sisestage täisarv", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Palun sisestage arv", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Palun sisestage arv", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Palun sisestage väärtus", // Shown when user enters invalid string value
            invalidDate: "Palun sisestage kehtiv aadress", // Shown when user enters invalid date value
            invalidNumericRange: "Palun sisestage väärtus, mis jääb vahemikku ${minValue} – ${maxValue}.", // Shown when user enters value which is out of range
            moreInfolink: "Link", // Shown when value in field contains only URL.
            commentsText: "Kommentaari", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Ühtki kommentaari ei ole saadaval.", // Appears when no comments are available
            noFeatureGeometry: "Objekti ei saa kuvada." // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Ühtki konfiguratsiooni ei ole määratud." // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Tulemusi ei leitud" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Vaadake aktiivse funktsiooni kohta rohkem üksikasju.", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Vaata kaarti", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Suurenda", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Vähenda" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Olete edukalt välja logitud.", // Appears when user is successfully signed-out from application
            reSignInMessage: "Sisse logimiseks klikkige siia." // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);