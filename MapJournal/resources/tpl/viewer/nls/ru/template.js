define({
  "viewer": {
    "common": {
      "close": "Закрыть"
    },
    "loading": {
      "step1": "Загрузка истории",
      "step2": "Загрузка данных",
      "step3": "Инициализация",
      "loadBuilder": "Открытие конструктора",
      "long": "Журнал карт активирован",
      "long2": "Спасибо за ожидание",
      "failButton": "Перезагрузить историю"
    },
    "signin": {
      "title": "Требуется аутентификация",
      "explainViewer": "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы получить доступ к истории.",
      "explainBuilder": "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы настроить историю."
    },
    "errors": {
      "boxTitle": "Произошла ошибка",
      "invalidConfig": "Некорректная конфигурация",
      "invalidConfigNoApp": "В index.html не указан идентификатор Картографического веб-приложения",
      "invalidConfigNoAppDev": "Нет идентификатора Web Mapping Application, указанного в параметрах URL (?appid= или ?webmap=). В режиме разработки конфигурация appid в index.html игнорируются.",
      "unspecifiedConfigOwner": "Невозможно настроить авторизованного владельца.",
      "invalidConfigOwner": "Владелец истории не авторизован.",
      "createMap": "Не удалось создать карту",
      "invalidApp": "%TPL_NAME% не существует или не доступен.",
      "appLoadingFail": "Что-то пошло не так, % TPLNAME % не был загружен правильно.",
      "notConfiguredDesktop": "История пока не настроена.",
      "notConfiguredMobile": "Конструктор %TPL_NAME% не поддерживается на экранах такого размера. Если можете, измените размер браузера, чтобы получить доступ к конструктору, либо создайте свою историю на другом устройстве с большим монитором.",
      "notConfiguredMobile2": "Чтобы использовать конструктор %TPL_NAME%, поверните своё устройство в альбомную ориентацию.",
      "notAuthorized": "Вы не авторизованы для доступа к истории.",
      "notAuthorizedBuilder": "Вы не авторизованы для использования конструктора %TPL_NAME%.",
      "noBuilderIE": "Конструктор не поддерживается в браузере Internet Explorer версий %VERSION%. %UPGRADE%",
      "noViewerIE": "Эта история не поддерживается в Internet Explorer версии до %VERSION%. %UPGRADE%",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Обновите ваш браузер</a>.",
      "mapLoadingFail": "Произошла ошибка, карта загрузилась некорректно.",
      "signOut": "Выйти",
      "print0": "Ж_Sorry, this story cannot be printed____________Я.",
      "print1": "Ж_To print this story, please use the print button located in the share dialog________________________Я.",
      "print2": "Ж_Sorry, a printable version of the story is typically accessible through the share dialog, but this dialog has been disabled by the author__________________________________________Я."
    },
    "mobileView": {
      "tapForDetails": "Коснитесь для подробной информации",
      "clickForDetails": "Подробнее",
      "swipeToExplore": "Передвиньте для изучения",
      "tapForMap": "Коснитесь, чтобы вернуться к карте",
      "clickForMap": "НАЗАД К КАРТЕ"
    },
    "floatLayout": {
      "scroll": "Прокрутите"
    },
    "sideLayout": {
      "scroll": "Прокрутите вниз, чтобы увидеть больше!"
    },
    "mainStage": {
      "back": "Назад"
    },
    "headerFromCommon": {
      "storymapsText": "Карта истории",
      "builderButton": "Редактировать",
      "facebookTooltip": "Разместить в Facebook",
      "twitterTooltip": "Разместить в Twitter",
      "bitlyTooltip": "Получить краткую ссылку",
      "templateTitle": "Ввести заголовок шаблона",
      "templateSubtitle": "Ввести подзаголовок шаблона",
      "share": "Общий доступ",
      "checking": "Проверка ресурсов истории на наличие ошибок",
      "fix": "Исправить ошибки в истории",
      "noerrors": "Ошибок не обнаружено",
      "tooltipAutoplayDisabled": "Недоступно в режиме автовоспроизведения",
      "notshared": "История не в общем доступе"
    },
    "overviewFromCommon": {
      "title": "Обзорная карта"
    },
    "legendFromCommon": {
      "title": "Легенда"
    },
    "shareFromCommon": {
      "copy": "Копировать",
      "copied": "Скопировано",
      "open": "Открыть",
      "embed": "Встроить на веб-страницу",
      "embedExplain": "Используйте следующий HTML-код для встраивания журнала на веб-страницу.",
      "size": "Размер (ширина/высота):",
      "autoplayLabel": "Режим автовоспроизведения",
      "autoplayExplain1": "Режим автовоспроизведения будет проходить в вашей истории на указанном интервале. Это идеально подходит для информационных киосков или мониторов для публичного обозрения, но имейте в виду, что в некоторых случаях вашу историю будет тяжело читать. Эта возможность не поддерживается на маленьких мониторах.",
      "autoplayExplain2": "Когда активен данный режим, там есть элементы управления для включения/остановки воспроизведения истории и установки скорости перемещения.",
      "linksupdated": "Ссылки обновлены!",
      "print": "Ж_Print___Я",
      "printInstruction1": "Ж_Please wait for all the content to load before printing this page_____________________Я",
      "printInstruction1a": "Ж_Some content may not print unless you enable \"Print Background Colors and Images\" in the Print Page setup dialog___________________________________Я",
      "printInstruction2": "Ж_This page cannot be shared with others, instead share the ${link}_____________________Я",
      "link": "Ж_link to the story______Я",
      "printOptPageBreak": "Ж_Begin each section on a new page___________Я",
      "printWarning": "Ж_This is a printed version of a story map. Dynamic content such as videos and interactive maps is only available in the online version at ${link}____________________________________________Я",
      "printMSWarning": "Ж_link available only in online story____________Я",
      "printVideoWarning": "Ж_This video can be viewed in the online version of this story map____________________Я"
    }
  }
});