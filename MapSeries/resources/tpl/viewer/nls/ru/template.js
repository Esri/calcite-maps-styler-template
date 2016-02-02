define(
	 ({
		viewer: {
			common: {
				close: "Закрыть"
			},
			loading: {
				long: "История инициализируется.",
				long2: "Спасибо за ожидание",
				failButton: "Перезагрузить историю"
			},
			signin: {
				title: "Необходима авторизация",
				explainViewer: "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы получить доступ к истории.",
				explainBuilder: "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы настроить историю."
			},
			errors: {
				boxTitle: "Произошла ошибка",
				invalidConfig: "Некорректная настройка",
				invalidConfigNoApp: "Идентификатор картографического веб-приложения не указан в index.html.",
				invalidConfigNoAppDev: "Ж_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Я.",
				unspecifiedConfigOwner: "Авторизованный владелец не настроен.",
				invalidConfigOwner: "Владелец истории не авторизован.",
				createMap: "Не удалось создать карту",
				invalidApp: "%TPL_NAME% не существует или недоступен.",
				appLoadingFail: "Произошла ошибка, %TPL_NAME% загружено некорректно.",
				notConfiguredDesktop: "История пока не настроена.",
				notConfiguredMobile: "Ж_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Я.",
				notConfiguredMobile2: "Ж_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Я.",
				notAuthorized: "Вы не авторизованы для доступа к истории.",
				notAuthorizedBuilder: "Ж_You are not authorized to use %TPL_NAME% builder________________Я.",
				noBuilderIE: "Конструктор не поддерживается в Internet Explorer версии до %VERSION%. %UPGRADE%",
				noViewerIE: "Эта история не поддерживается в Internet Explorer версии до %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Пожалуйста, обновите браузер</a>.",
				mapLoadingFail: "Произошла ошибка, карта загрузилась некорректно.",
				signOut: "Выйти"
			},
			mobileInfo: {
				legend: "Легенда",
				description: "Описание",
				lblLegendMobileError: "Легенда недоступна. Перезагрузите историю.",
				lblLegendMobileErrorExplain: "Легенда недоступна, если устройство было повернуто в положение Книжной страницы после того, как история была загружена."
			},
			mobileFooter: {
				swipeInvite: "Перелистните, чтобы просмотреть историю",
				lblNext: "Следующий",
				lblEnd: "Вы дошли до конца истории"
			},
			headerFromCommon: {
				storymapsText: "История на карте",
				builderButton: "Редактировать",
				facebookTooltip: "Разместить в Facebook",
				twitterTooltip: "Разместить в Twitter",
				bitlyTooltip: "Получить краткую ссылку",
				templateTitle: "Настроить заголовок шаблона",
				templateSubtitle: "Настроить подзаголовок шаблона",
				share: "Общий доступ",
				checking: "Проверка ресурсов истории",
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
				copy: "Скопировать",
				copied: "Скопировано",
				open: "Открыть",
				embed: "Встроить в веб-страницу",
				embedExplain: "Используйте следующий HTML-код для встраивания истории на веб-страницу.",
				size: "Размер (ширина/высота):",
				autoplayLabel: "Ж_Autoplay mode_____Я",
				autoplayExplain1: "Ж_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Я.",
				autoplayExplain2: "Ж_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Я.",
				linksupdated: "Ж_Links updated_____Я!"
			},
			locatorFromCommon: {
				error: "Местоположение недоступно"
			}
        }
    })
);