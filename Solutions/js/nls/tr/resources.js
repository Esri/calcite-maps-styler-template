/*global define */
/*
 | Copyright 2012 Esri
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
define({
    root: ({
        map: {
            error: "ı_Unable to create map_İ"
        },
        tooltips: {
            search: "Bul",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Geçerli Konum",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Düzeltmeyi gönder",  // Command button to submit a correction to the app's host
            collect: "Filtrele/Düzenle",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Gösterimi göster",  //Display the legend
            filter: "Harita katmanlarını filtrele",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Altlık haritayı değiştir",  // Command button to open a dialog box for switching basemaps
            share: "Paylaş",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "E-posta ile paylaş",  // Command button to share the current map extents via email
            shareViaFacebook: "Facebook ile paylaş",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Twitter ile paylaş",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Haritayı yazdır",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Basılı haritayı görüntüle",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Yatay sayfa yönlendirmesi",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Dikey sayfa yönlendirmesi",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Yardım"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-posta",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "başlık",  // Shown as title hint in print specification box if a title hint is not configured
            author: "yazar"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Bul:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Çiz",  // Appears before a set of tools for drawing on the map
            mapLayers: "Harita katmanları:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Katman alanlarını bul:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Bu sitenin geçerli konumu alma izni yok",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Tarayıcı geçerli konumu alamadı",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Tarayıcı geçerli konumu zamanında alamadı",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Herhangi bir katman bulma yapılandırılmadı",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Bu bulma katmanı haritada bulunamadı",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Alanlar, harita katmanında bulunamadı.<br><br>Bu katmanın harita İçeriğinin kök dizininde var olduğunu doğrulayın. ArcGIS for Server dinamik harita hizmetleri gibi yuvalanan hizmetler her defasında haritanın Bulma Katmanları olarak kullanılacak bir katmanına eklenmelidir (katman indeks numarası ile birlikte). Döşenen hizmetler Bulma Katmanları olarak kullanılamaz.",
            searchFieldMissing: "Bu alan harita bulma katmanında bulunamadı",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Bu alanlardan hiçbiri harita bulma katmanında bulunamadı",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Bu alan harita katmanlarının hiçbirinde yok",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "İçeriğiniz teslim edildi. Teşekkür ederiz.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Uygulama yapılandırmasına erişilemiyor",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Uygulama başlatılamıyor"  // Appears for any failure to build the user interface
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nl": 1,
    "nb": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sv": 1,
    "tr": 1,
    "th": 1,
    "vi": 1,
    "zh-cn": 1
});
