define(
	 ({
		viewer: {
			common: {
				close: "Закрыть"
			},
			loading: {
				step1: "Загрузка истории",
				step2: "Загрузка данных",
				step3: "Инициализация",
				loadBuilder: "Открытие конструктора",
				long: "Журнал карт активирован",
				long2: "Спасибо за ожидание",
				failButton: "Перезагрузить историю"
			},
			signin: {
				title: "Требуется аутентификация",
				explainViewer: "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы получить доступ к истории.",
				explainBuilder: "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы настроить историю."
			},
			errors: {
				boxTitle: "Произошла ошибка",
				invalidConfig: "Некорректная конфигурация",
				invalidConfigNoApp: "В index.html не указан идентификатор Картографического веб-приложения",
				invalidConfigNoAppDev: "Ж_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Я.",
				unspecifiedConfigOwner: "Невозможно настроить авторизованного владельца.",
				invalidConfigOwner: "Владелец истории не авторизован.",
				createMap: "Не удалось создать карту",
				invalidApp: "%TPL_NAME% не существует или не доступен.",
				appLoadingFail: "Что-то пошло не так, % TPLNAME % не был загружен правильно.",
				notConfiguredDesktop: "История пока не настроена.",
				notConfiguredMobile: "Ж_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Я.",
				notConfiguredMobile2: "Ж_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Я.",
				notAuthorized: "Вы не авторизованы для доступа к истории.",
				notAuthorizedBuilder: "Ж_You are not authorized to use %TPL_NAME% builder________________Я.",
				noBuilderIE: "Конструктор не поддерживается в браузере Internet Explorer версий %VERSION%. %UPGRADE%",
				noViewerIE: "Эта история не поддерживается в Internet Explorer версии до %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Обновите ваш браузер</a>.",
				mapLoadingFail: "Ж_Something went wrong, the map did not load correctly_________________Я.",
				signOut: "Выйти"
			},
			mobileView: {
				tapForDetails: "Коснитесь для подробной информации",
				clickForDetails: "Подробнее",
				swipeToExplore: "Передвиньте для изучения",
				tapForMap: "Коснитесь, чтобы вернуться к карте",
				clickForMap: "НАЗАД К КАРТЕ"
			},
			floatLayout: {
				scroll: "Прокрутите"
			},
			sideLayout: {
				scroll: "Прокрутите вниз, чтобы увидеть больше!"
			},
			mainStage: {
				back: "Назад"
			},
			headerFromCommon: {
				storymapsText: "Карта истории",
				builderButton: "Редактировать",
				facebookTooltip: "Разместить в Facebook",
				twitterTooltip: "Разместить в Twitter",
				bitlyTooltip: "Получить краткую ссылку",
				templateTitle: "Ввести заголовок шаблона",
				templateSubtitle: "Ввести подзаголовок шаблона",
				share: "Общий доступ",
				checking: "Проверка ресурсов истории на наличие ошибок",
				fix: "Исправить ошибки в истории",
				noerrors: "Ошибок не обнаружено",
				tooltipAutoplayDisabled: "Ж_This isn't available in autoplay mode____________Я",
				notshared: "Ж_Story not shared______Я"
			},
			overviewFromCommon: {
				title: "Обзорная карта"
			},
			legendFromCommon: {
				title: "Легенда"
			},
			shareFromCommon: {
				copy: "Копировать",
				copied: "Скопировано",
				open: "Открыть",
				embed: "Встроить на веб-страницу",
				embedExplain: "Используйте следующий HTML-код для встраивания журнала на веб-страницу.",
				size: "Размер (ширина/высота):",
				autoplayLabel: "Ж_Autoplay mode_____Я",
				autoplayExplain1: "Ж_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Я.",
				autoplayExplain2: "Ж_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Я.",
				linksupdated: "Ж_Links updated_____Я!"
			}
        }
    })
);