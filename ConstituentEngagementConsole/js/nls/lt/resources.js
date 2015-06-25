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
            error: "Žemėlapio sukurti nepavyko" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Sukonfigūruotų grupių nėra" // Appears when no group is configured
        },
        webMapList: {
            owner: "Savininkas", // Appears in web-map list description panel when it is set to true
            created: "Sukūrimo data", // Appears in web-map list description panel when it is set to true
            modified: "Paskutinis pakeitimas", // Appears in web-map list description panel when it is set to true
            description: "Aprašas", // Appears in web-map list description panel when it is set to true
            snippet: "Santrauka", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Prieigos ir naudojimo apribojimai", // Appears in web-map list description panel when it is set to true
            accessInformation: "Autoriai", // Appears in web-map list description panel when it is set to true
            tags: "Raktažodžiai", // Appears in web-map list description panel when it is set to true
            numViews: "Peržiūrų skaičius", // Appears in web-map list description panel when it is set to true
            avgRating: "Vertinimas", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Sukonfigūruota grupė neteisinga arba šioje grupėje nebendrinamas nė vienas elementas", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Žemėlapio informacija" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Atsijungti", // Command button to sign-out from the application
            pleaseSignInText: "Prisijunkite", // Appears when user needs to sign-in into the application
            showSelectedOption: "Rodyti pažymėtus", // Command button to show selected records in data-viewer
            showAllOption: "Rodyti visus", // Command button to show all the records in data-viewer
            clearSelectionOption: "Valyti išranką", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Artinti pažymėtus", // Command button to zoom map to selected records
            gridViewOption: "Sąrašo vaizdas", // Command button to display list view
            mapViewOption: "Žemėlapio vaizdas", // Command button to display map view
            gridMapViewOption: "Padalintas vaizdas", // Command button to display split view
            settingsBtnToolTip: "Pasirinkimo parinktys", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Rodymo parinktys", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Ieškoti šiame sluoksnyje", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Atnaujinti", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Visi pasirinkimai ir neišsaugoti pakeitimai bus atmesti", // Appears when user wants to do manual refresh
            signInOption: "Prisijungti" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Ataskaitų nėra", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Priedai", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Įveskite sveikąjį skaičių ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Įveskite sveikąjį skaičių", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Įveskite skaičių", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Įveskite skaičių", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Įveskite reikšmę", // Shown when user enters invalid string value
            invalidDate: "Įveskite teisingą datą", // Shown when user enters invalid date value
            invalidNumericRange: "Įveskite reikšmę nuo ${minValue} iki ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Nuoroda", // Shown when value in field contains only URL.
            commentsText: "Komentarai", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Komentarų nėra", // Appears when no comments are available
            noFeatureGeometry: "Elemento parodyti negalima" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Apibrėžtų konfigūracijų nėra" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Nieko nerasta" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Peržiūrėti daugiau informacijos apie aktyvų elementą", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Peržiūrėti žemėlapį", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Artinti", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Tolinti" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Sėkmingai atsijungėte", // Appears when user is successfully signed-out from application
            reSignInMessage: "Paspauskite prisijungti" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager, pagalbinis grupės šablonas, skirtas <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a>, yra interaktyvus grupės aplikacijos šablonas (asmeniniams arba planšetiniams kompiuteriams), leidžiantis organizacijos vartotojams peržiūrėti per Vadovo aplikaciją pateiktas problemas / pastebėjimus.", // Appears when preview page is loaded
            section2: "Aplikacija vartotojams pateikia vieną arba daugiau žemėlapių, kad galėtų peržiūrėti problemą arba pastebėjimą. Vartotojai gali ieškoti struktūrų ir sankaupų, peržiūrėti informaciją apie problemą, atnaujinti būseną ir priskirti atsakomybę.", // Appears when preview page is loaded
            section3: "Galima atsisiųsti aplikacijos programos kodą ir jį toliau konfigūruoti. Papildomai sukonfigūruotą aplikaciją vėl galima pritaikyti ArcGIS Online konfigūruojamam interneto aplikacijos elementui arba talpinti savo interneto serveryje.<br /> Daugiau informacijos apie šios aplikacijos konfigūravimą rasite <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a> dokumentacijoje." // Appears when preview page is loaded
        }
    })
);