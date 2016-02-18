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
            error: "Nevar izveidot karti" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Nav konfigurētas grupas" // Appears when no group is configured
        },
        webMapList: {
            owner: "Īpašnieks", // Appears in web-map list description panel when it is set to true
            created: "Izveides datums", // Appears in web-map list description panel when it is set to true
            modified: "Modificēšanas datums", // Appears in web-map list description panel when it is set to true
            description: "Apraksts", // Appears in web-map list description panel when it is set to true
            snippet: "Kopsavilkums", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Piekļuves un izmantošanas ierobežojumi", // Appears in web-map list description panel when it is set to true
            accessInformation: "Kredīti", // Appears in web-map list description panel when it is set to true
            tags: "Tagi", // Appears in web-map list description panel when it is set to true
            numViews: "Skatījumu skaits", // Appears in web-map list description panel when it is set to true
            avgRating: "Vērtējums", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigurētā grupa nav derīga vai ar šo grupu vēl nav kopīgots neviens elements", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kartes informācija" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Izrakstīties", // Command button to sign-out from the application
            pleaseSignInText: "Lūdzu, pierakstieties", // Appears when user needs to sign-in into the application
            showSelectedOption: "Rādīt izvēlētos", // Command button to show selected records in data-viewer
            showAllOption: "Rādīt visus", // Command button to show all the records in data-viewer
            clearSelectionOption: "Notīrīt izvēlēto", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Tālummainīt atlasīto", // Command button to zoom map to selected records
            gridViewOption: "Saraksta skats", // Command button to display list view
            mapViewOption: "Kartes skats", // Command button to display map view
            gridMapViewOption: "Sadalīt skatu", // Command button to display split view
            settingsBtnToolTip: "Atlasīšanas opcijas", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Displeja opcijas", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Meklēt šo slāni", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Atjaunot", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Visas atlases un nesaglabātās izmaiņas tiks atmestas", // Appears when user wants to do manual refresh
            signInOption: "Pierakstīties" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Nav pieejamu ziņojumu", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Pielikumi", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Lūdzu ievadiet veselu skaitli ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Lūdzu ievadiet veselu skaitli", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Lūdzu ievadiet numuru", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Lūdzu ievadiet numuru", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Lūdzu ievadiet vērtību", // Shown when user enters invalid string value
            invalidDate: "Lūdzu ievadiet derīgu datumu", // Shown when user enters invalid date value
            invalidNumericRange: "Lūdzu ievadiet vērtību no ${minValue} līdz ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Saite", // Shown when value in field contains only URL.
            commentsText: "Komentāri", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Nav pieejamu komentāru", // Appears when no comments are available
            noFeatureGeometry: "Funkciju nevar parādīt" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Nav noteiktas konfigurācijas" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Rezultāti nav atrasti" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Skatiet papildinformāciju par aktīvo elementu", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Skatīt karti", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Pietuvināt", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Attālināt" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Jūs esat veiksmīgi izrakstījies", // Appears when user is successfully signed-out from application
            reSignInMessage: "Noklikšķiniet šeit, lai pierakstītos" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "<a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a> uzņēmuma grupas veidne Crowdsource Manager ir reaģējoša grupas lietojumprogrammas veidne (darbvirsmas un planšetes ierīcēm), kas organizācijas iekšējiem lietotājiem ļauj pārskatīt problēmas/novērojumus, kas iesniegti, izmantojot lietotni Manager.", // Appears when preview page is loaded
            section2: "Lietotne parāda lietotājiem vienu vai vairākas kartes, lai pārskatītu problēmu vai novērojumu. Lietotāji var meklēt sistēmas un kopas, pārskatīt problēmas informāciju, atjaunināt statusu un piešķirt pienākumus.", // Appears when preview page is loaded
            section3: "Lietojumprogrammas avota kodu var lejupielādēt papildu konfigurācijai. Šo lietojumprogrammas papildu konfigurāciju var izmantot ArcGIS Online konfigurējamam tīmekļa lietojumprogrammas vienumam vai viesot savā tīmekļa serverī.<br /> Papildinformāciju par šīs lietotnes konfigurēšanu skatiet <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a> dokumentācijā." // Appears when preview page is loaded
        }
    })
);