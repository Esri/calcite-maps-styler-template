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
            search: "Ж_Find_Я",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Текущее местоположение",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Закрепить исправление",  // Command button to submit a correction to the app's host
            collect: "Ж_Filter/Edit_Я",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            filter: "Фильтрация слоев карты",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Переключить базовую карту",  // Command button to open a dialog box for switching basemaps
            share: "Общий доступ",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Отправить по электронной почте",  // Command button to share the current map extents via email
            shareViaFacebook: "Разместить в Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Разместить в Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Печать карты",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Просмотреть снимок карты",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Альбомная ориентация страницы",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Книжная ориентация страницы",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Справка"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "email",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "Заголовок",  // Shown as title hint in print specification box if a title hint is not configured
            author: "автор"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Ж_Find:_Я",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Рисование",  // Appears before a set of tools for drawing on the map
            mapLayers: "Слои карты:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Поля слоя поиска:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Этот сайт не имеет разрешения для получения текущего местоположения",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Браузер не смог получить текущее местоположение",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Браузер не смог вовремя получить текущее местоположение",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Ж_This find layer was not found in the map_Я",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchFieldMissing: "Ж_This field was not found in the map find layer_Я",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Ж_None of these fields was found in the map find layer_Я",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Данное поле не существует ни в одном из слоёв карты",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Ресурсы успешно добавлены. Спасибо.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Не удалось открыть конфигурацию приложения",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Не удалось запустить приложение"  // Appears for any failure to build the user interface
        }
    })
);
