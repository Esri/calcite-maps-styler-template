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
            error: "Не удалось создать карту" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Не задана группа" // Appears when no group is configured
        },
        webMapList: {
            owner: "Владелец", // Appears in web-map list description panel when it is set to true
            created: "Время создания", // Appears in web-map list description panel when it is set to true
            modified: "Дата изменения", // Appears in web-map list description panel when it is set to true
            description: "Описание", // Appears in web-map list description panel when it is set to true
            snippet: "Итоговая информация", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ограничения доступа и использования", // Appears in web-map list description panel when it is set to true
            accessInformation: "Сведения об авторах", // Appears in web-map list description panel when it is set to true
            tags: "Теги", // Appears in web-map list description panel when it is set to true
            numViews: "Количество просмотров", // Appears in web-map list description panel when it is set to true
            avgRating: "Рейтинг", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Настроенная группа недействительна, или в указанной группе нет доступных элементов.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Информация карты" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Выход", // Command button to sign-out from the application
            pleaseSignInText: "Выполните вход", // Appears when user needs to sign-in into the application
            showSelectedOption: "Показать выбранные", // Command button to show selected records in data-viewer
            showAllOption: "Показать все", // Command button to show all the records in data-viewer
            clearSelectionOption: "Очистить выбранные объекты", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Приблизить к выбранным", // Command button to zoom map to selected records
            gridViewOption: "Вид списка", // Command button to display list view
            mapViewOption: "Вид карты", // Command button to display map view
            gridMapViewOption: "Разделить", // Command button to display split view
            settingsBtnToolTip: "Опции выборки", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Опции отображения", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Поиск в этом слое", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Обновить", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Все выборки и несохраненные изменения будут удалены", // Appears when user wants to do manual refresh
            signInOption: "Вход" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Нет доступных отчетов", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Вложения", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Введите целое число ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Введите целое число", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Введите число", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Введите число", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Введите числовое значение", // Shown when user enters invalid string value
            invalidDate: "Введите допустимое значение", // Shown when user enters invalid date value
            invalidNumericRange: "Введите число между ${minValue} и ${maxValue}.", // Shown when user enters value which is out of range
            moreInfolink: "Ссылка", // Shown when value in field contains only URL.
            commentsText: "Комментарии", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Нет доступных комментариев", // Appears when no comments are available
            noFeatureGeometry: "Объекты невозможно отобразить" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Конфигурация не определена" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Результаты не найдены" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Просмотр подробной информации об активной функции", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Просмотр карты", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Увеличить", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Уменьшить" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Выход успешно выполнен", // Appears when user is successfully signed-out from application
            reSignInMessage: "Щелкните здесь, чтобы выполнить вход" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager в дополнение к <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a> является шаблоном группового приложения (для настольных компьютеров и планшетов), позволяющий пользователям организации просматривать проблемы/замечания, представленные в приложении Manager.", // Appears when preview page is loaded
            section2: "Это приложение представлено одной или несколькими картами для просмотра пользователями запроса по поводу проблемы или замечания. Пользователи могут искать шаблоны и кластеры, просматривать детали проблем, обновлять статус и возлагать ответственность.", // Appears when preview page is loaded
            section3: "Исходный код приложения можно загрузить для дальнейшего конфигурирования. Эта дополнительная конфигурация приложения может применяться к настраиваемому веб-приложению ArcGIS Online или размещаться на вашем собственном веб-сервере.<br /> Более подробно о настройке этого приложения см. руководство по <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a>." // Appears when preview page is loaded
        }
    })
);