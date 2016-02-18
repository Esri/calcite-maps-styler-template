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
            error: "Harita oluşturulamıyor" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Yapılandırılan grup yok" // Appears when no group is configured
        },
        webMapList: {
            owner: "Sahibi", // Appears in web-map list description panel when it is set to true
            created: "Oluşturulma tarihi", // Appears in web-map list description panel when it is set to true
            modified: "Değiştirme tarihi:", // Appears in web-map list description panel when it is set to true
            description: "Tanım", // Appears in web-map list description panel when it is set to true
            snippet: "Özet", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Kısıtlamalara eriş ve bunları kullan", // Appears in web-map list description panel when it is set to true
            accessInformation: "Katkı Yapanlar", // Appears in web-map list description panel when it is set to true
            tags: "Etiketler", // Appears in web-map list description panel when it is set to true
            numViews: "Görüntülenme sayısı", // Appears in web-map list description panel when it is set to true
            avgRating: "Derecelendirme", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Yapılandırılmış grup geçersiz veya bu grupla henüz öğe paylaşılmamış", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Harita bilgileri" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Oturum Kapat", // Command button to sign-out from the application
            pleaseSignInText: "Oturum açın", // Appears when user needs to sign-in into the application
            showSelectedOption: "Seçileni Göster", // Command button to show selected records in data-viewer
            showAllOption: "Tümünü Göster", // Command button to show all the records in data-viewer
            clearSelectionOption: "Seçimi Temizle", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Seçileni Yakınlaştır", // Command button to zoom map to selected records
            gridViewOption: "Liste Görünümü", // Command button to display list view
            mapViewOption: "Harita Görünümü", // Command button to display map view
            gridMapViewOption: "Görünümü Böl", // Command button to display split view
            settingsBtnToolTip: "Seçim seçenekleri", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Görüntüleme seçenekleri", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Bu katmanı ara", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Yenile", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Tüm seçimler ve kaydedilmemiş değişiklikler silinecek", // Appears when user wants to do manual refresh
            signInOption: "Oturum Açma" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Kullanılabilir rapor yok", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Eklentiler", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Tamsayı girin ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Tamsayı girin", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Lütfen bir sayı girin", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Lütfen bir sayı girin", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Bir değer girin", // Shown when user enters invalid string value
            invalidDate: "Geçerli bir tarih girin", // Shown when user enters invalid date value
            invalidNumericRange: "${minValue} ve ${maxValue} arasında bir değer girin", // Shown when user enters value which is out of range
            moreInfolink: "Bağlantı", // Shown when value in field contains only URL.
            commentsText: "Yorumlar", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Kullanılabilir yorum yok", // Appears when no comments are available
            noFeatureGeometry: "Detay görüntülenemiyor" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Tanımlı yapılandırma yok" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Sonuç bulunamadı" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Etkin detay için daha fazla ayrıntı görüntüle", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Haritayı görüntüle", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Büyüt", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Küçült" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Oturumunuz başarıyla kapatıldı", // Appears when user is successfully signed-out from application
            reSignInMessage: "Oturum açmak için buraya tıklayın" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);