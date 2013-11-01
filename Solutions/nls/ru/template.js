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
            search: "Поиск",
            locate: "Текущее местоположение",
            markup: "Закрепить исправление",
            basemap: "Переключить базовую карту",
            share: "Общий доступ",
            shareViaEmail: "Отправить по электронной почте",
            shareViaFacebook: "Разместить в Facebook",
            shareViaTwitter: "Разместить в Twitter",
            print: "Печать карты",
            fetchPrint: "Просмотреть снимок карты",
            landscape: "Альбомная ориентация страницы",
            portrait: "Книжная ориентация страницы",
            help: "Справка"
        },
        labels: {
            email: "email",
            Facebook: "Facebook",
            Twitter: "Twitter"
        },
        prompts: {
            search: "Поиск:",
            markup: "Рисование",
            mapLayers: "Слои карты:",
            layerFields: "Поля слоя поиска:"
        },
        messages: {
            geolocationDenied: "Этот сайт не имеет разрешения для получения текущего местоположения",
            geolocationUnavailable: "Браузер не смог получить текущее местоположение",
            geolocationTimeout: "Браузер не смог вовремя получить текущее местоположение",
            searchLayerMissing: "Этот слой поиска не был найден на карте",
            searchFieldMissing: "Это поле не было найдено в слое поиска карты"
        }
    })
);
