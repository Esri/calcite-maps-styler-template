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
  "map": {
    "error": "Не удалось создать карту"
  },
  "tooltips": {
    "search": "Найти",
    "locate": "Текущее местоположение",
    "markup": "Закрепить исправление",
    "collect": "Фильтр/Редактирование",
    "dijitLegend": "Показать легенду",
    "filter": "Фильтрация слоев карты",
    "basemap": "Переключить базовую карту",
    "share": "Общий доступ",
    "shareViaEmail": "Отправить по электронной почте",
    "shareViaFacebook": "Разместить в Facebook",
    "shareViaTwitter": "Разместить в Twitter",
    "print": "Печать карты",
    "fetchPrint": "Просмотреть снимок карты",
    "landscape": "Альбомная ориентация страницы",
    "portrait": "Книжная ориентация страницы",
    "help": "Справка"
  },
  "labels": {
    "email": "email",
    "Facebook": "Facebook",
    "Twitter": "Twitter",
    "title": "Заголовок",
    "author": "автор"
  },
  "prompts": {
    "search": "Найти:",
    "markup": "Рисование",
    "mapLayers": "Слои карты:",
    "layerFields": "Найти поля слоя:"
  },
  "messages": {
    "geolocationDenied": "Этот сайт не имеет разрешения для получения текущего местоположения",
    "geolocationUnavailable": "Браузер не смог получить текущее местоположение",
    "geolocationTimeout": "Браузер не смог вовремя получить текущее местоположение",
    "noSearchLayerConfigured": "Ни один из найденных слоев не был конфигурирован",
    "searchLayerMissing": "Этот слой поиска не был найден на карте",
    "searchLayerNotSearchable": "Невозможно найти поля в слое карты.<br><br>Проверьте, что слой существует в корне Содержания карты. Вложенные сервисы, например, динамический картографический сервис ArcGIS for Server, должны быть добавлены в один слой карты (включая номер индекса слоя), чтобы использоваться в качестве слоев поиска. Сервисы наборов листов не используются как Слои поиска.",
    "searchFieldMissing": "Это поле не было найдено в слое поиска карты",
    "allSearchFieldsMissing": "Ни одно из этих полей в слое поиска не обнаружено",
    "fieldNotFound": "Данное поле не существует ни в одном из слоёв карты",
    "yourContentSubmitted": "Ресурсы успешно добавлены. Спасибо.",
    "noConfiguration": "Не удалось открыть конфигурацию приложения",
    "unableToLaunchApp": "Не удалось запустить приложение"
  }
});