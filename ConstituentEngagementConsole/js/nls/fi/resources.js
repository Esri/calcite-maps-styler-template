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
            error: "Karttaa ei voi luoda" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Yhtään ryhmää ei ole määritetty" // Appears when no group is configured
        },
        webMapList: {
            owner: "Omistaja", // Appears in web-map list description panel when it is set to true
            created: "Luontipäivämäärä", // Appears in web-map list description panel when it is set to true
            modified: "Muokkauspäivämäärä", // Appears in web-map list description panel when it is set to true
            description: "Kuvaus", // Appears in web-map list description panel when it is set to true
            snippet: "Yhteenveto", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Käyttörajoitukset", // Appears in web-map list description panel when it is set to true
            accessInformation: "Krediitit", // Appears in web-map list description panel when it is set to true
            tags: "Tunnisteet", // Appears in web-map list description panel when it is set to true
            numViews: "Näkymien määrä", // Appears in web-map list description panel when it is set to true
            avgRating: "Arviointi", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Määritetty ryhmä on virheellinen tai tämän ryhmän kanssa ei ole vielä jaettu yhtään kohdetta", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kartan tiedot" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Kirjaudu ulos", // Command button to sign-out from the application
            pleaseSignInText: "Kirjaudu sisään", // Appears when user needs to sign-in into the application
            showSelectedOption: "Näytä valitut kohteet", // Command button to show selected records in data-viewer
            showAllOption: "Show All", // Command button to show all the records in data-viewer
            clearSelectionOption: "Clear Selection", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Tarkenna valittuihin", // Command button to zoom map to selected records
            gridViewOption: "Luettelonäkymä", // Command button to display list view
            mapViewOption: "Karttanäkymä", // Command button to display map view
            gridMapViewOption: "Jaa näkymä", // Command button to display split view
            settingsBtnToolTip: "Valinta-asetukset", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Näyttöasetukset", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Hae tätä karttatasoa", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Päivitä", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Kaikki valinnat ja tallentamattomat muutokset ohitetaan", // Appears when user wants to do manual refresh
            signInOption: "Kirjaudu sisään" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Yhtään raporttia ei ole saatavilla", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Liitteet", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Kirjoita kokonaisluku ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Kirjoita kokonaisluku", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Kirjoita numero", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Kirjoita numero", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Kirjoita arvo", // Shown when user enters invalid string value
            invalidDate: "Kirjoita kelvollinen päivämäärä", // Shown when user enters invalid date value
            invalidNumericRange: "Kirjoita arvo väliltä ${minValue}–${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Linkki", // Shown when value in field contains only URL.
            commentsText: "Kommentit", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Yhtään kommenttia ei ole saatavilla", // Appears when no comments are available
            noFeatureGeometry: "Kohdetta ei voi näyttää" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Yhtään konfiguraatiota ei ole määritettynä" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Tuloksia ei löytynyt" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Katsele lisää aktiivisen kohteen yksityiskohtaisia tietoja", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Näytä kartta", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Lähennä", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Loitonna" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Uloskirjautuminen onnistui", // Appears when user is successfully signed-out from application
            reSignInMessage: "Kirjaudu sisään napsauttamalla tätä" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "<a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a> -ohjelman kumppanuusryhmämallipohja Crowdsource Manager on responsiivinen ryhmäsovellusmallipohja (työpöytä- ja tablettilaitteille), jonka avulla organisaation käyttäjät voivat tarkastaa Manager-sovelluksen kautta lähetettyjä ongelmia tai havaintoja.", // Appears when preview page is loaded
            section2: "Sovellus tuo näkyviin vähintään yhden kartan ongelman tai havainnon tarkastusta varten. Käyttäjät voivat etsiä malleja ja klustereita, tarkastaa ongelmien tiedot, päivittää tilan ja osoittaa vastuualueita.", // Appears when preview page is loaded
            section3: "Sovelluksen lähdekoodin voi ladata mukautusta varten. Tämän sovelluksen lisämäärityksen avulla voit ylläpitää muunneltavissa olevaa Web-sovellusta joko ArcGIS Onlinessa tai omalla Web-palvelimellasi. <br />Lisätietoja tämän sovelluksen määrityksestä on <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a> -ohjelman dokumentaatiossa." // Appears when preview page is loaded
        }
    })
);