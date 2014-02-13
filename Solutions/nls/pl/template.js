/*global define */
/*
 | ArcGIS Solutions
 | Version 10.2
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
define(
({
        tooltips: {
            search: "Wyszukaj",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Bieżąca lokalizacja",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Wyślij korektę",  // Command button to submit a correction to the app's host
            collect: "Dodaj zasoby do mapy",  // Command button to open a template picker to add features to the map
            filter: "Filtruj warstwy mapy",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Przełącz mapę bazową",  // Command button to open a dialog box for switching basemaps
            share: "Udostępnij",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Udostępnij przez e-mail",  // Command button to share the current map extents via email
            shareViaFacebook: "Udostępnij przez Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Udostępnij przez Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Drukowanie mapy",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Wyświetl drukowaną mapę",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientacja pozioma strony",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientacja pionowa strony",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Pomoc"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "tytuł",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Szukaj:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Narysuj",  // Appears before a set of tools for drawing on the map
            mapLayers: "Warstwy mapy:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Pola wyszukiwania warstwy:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Ta strona nie ma uprawnień do pobierania bieżącej lokalizacji",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Przeglądarka nie mogła pobrać bieżącej lokalizacji",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Przeglądarka nie mogła pobrać bieżącej lokalizacji w odpowiednim czasie",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Nie znaleziono wyszukiwanej warstwy na mapie",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Nie znaleziono tego pola w wyszukiwanej warstwie mapy",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
            allSearchFieldsMissing: "Żadne z tych pól nie zostało znalezione w przeszukiwanej warstwie mapy.",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find any of the fields that were configured for the search command; works with the layerFields prompt
            fieldNotFound: "ł_This field does not exist in any of the map layers_ą",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Twoja zawartość została przesłana. Dziękujemy.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Nie można uzyskać dostępu do plików konfiguracyjnych aplikacji",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Nie można uruchomić aplikacji"  // Appears for any failure to build the user interface
        }
    })
);
