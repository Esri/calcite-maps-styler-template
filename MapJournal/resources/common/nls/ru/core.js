define(
	({
		commonCore: {
			common: {
				add: "Добавить",
				edit: "Редактировать",
				save: "Сохранить",
				next: "Далее",
				cancel: "Отмена",
				back: "Назад",
				apply: "Применить",
				close: "Закрыть",
				open: "Открыть",
				start: "Начало",
				loading: "Загрузка",
				disabledAdmin: "Объект был отключен администратором"
			},
			inlineFieldEdit: {
				editMe: "Отредактируйте меня!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Конструктор",
				buttonSaving: "Сохранение",
				buttonSaved: "Сохранено",
				buttonShare: "Общий доступ",
				buttonSettings: "Настройки",
				buttonHelp: "Справка",
				buttonPreview: "Просмотр текущего",
				tooltipFirstSave: "Ж_This function is not available until the application is saved_Я",
				tooltipNotShared: "Ж_This function is not available until the application is shared_Я",
				noPendingChange: "Нет предполагаемых изменений",
				unSavedChangePlural: "Ожидание изменений",
				closeWithPendingChange: "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
				saveError: "Сохранение не удалось, попробуйте еще раз",
				shareStatus1: "Приложение ещё не сохранено",
				shareStatus2: "К приложению предоставлен общий доступ",
				shareStatus3: "Приложение опубликовано в пределах организации",
				shareStatus4: "Приложение не опубликовано"
			},
			share: {
				firstSaveTitle: "Приложение успешно сохранено",
				firstSaveHeader: "Ж_Your application is now saved in %PORTAL% but it is not shared yet._Я",
				firstSavePreview: "Просмотр",
				firstSaveShare: "Общий доступ",
				firstSaveA1: "Если вы не знакомы с %PORTAL% или хотите получить ссылку на интерфейс конструктора, сохраните эту ссылку: %LINK1%",
				firstSaveA1bis: "Приложение также можно найти в вашей <a href='%LINK2%' target='_blank'>%PORTAL% директории ресурсов</a>.",
				shareTitle: "Включить общий доступ к приложению",
				sharePrivateHeader: "Приложение не опубликовано, хотите опубликовать его?",
				sharePrivateBtn1: "Общий доступ",
				sharePrivateBtn2: "Доступ только для моей организации",
				sharePrivateWarning: "Доступ к %WITH%  был отключен, потому что вы не являетесь владельцем <a href='%LINK%' target='_blank'>webmap</a>.",
				sharePrivateWarningWith1: "общедоступно",
				sharePrivateWarningWith2: "общедоступно и с Организацией",
				sharePrivateProgress: "Публикация...",
				sharePrivateErr: "Публикация не удалась, повторите попытку или",
				sharePrivateOk: "Тип публикации успешно изменен, загрузка...",
				shareHeader1: "Ваше приложение имеет <strong>общий доступ</strong>.",
				shareHeader2: "Ваше приложение доступно для сотрудников вашей организации (требуется учетная запись).",
				shareLinkCopy: "Копировать",
				shareLinkCopied: "Скопировано",
				shareQ1Opt1: "Как сохранить приложение частным?",
				shareQ1Opt2: "Как я могу сохранить частный доступ к приложению или предоставить к нему общий доступ?",
				shareA1: "Используйте %SHAREIMG% на странице элемента приложения a href='%LINK1%' target='_blank'></a>.",
				shareQ2bis: "Как мне вернуться к работе с конструктором?",
				shareA2div1: "Сохраните и используйте повторно следующую ссылку %LINK1% или обратитесь к<a href='%LINK2%' target='_blank'>странице элемента приложения</a>.",
				shareA2div2: "Если вы владелец приложения, то при входе на %PORTAL% вы увидите кнопку для открытия конструктора:",				
				shareQ3: "Где хранятся данные?",
				shareA3: "Ж_%TPL_NAME% data and configuration are stored in <a href='%LINK2%' target='_blank'>this web application item</a>. If you have used Flickr, Picasa, Facebook or YouTube import, your images and videos have not been duplicated in %PORTAL%._Я"
			},
			settings: {
				header: "Настройки",
				tabError: "Ж_Please check all tabs for errors_Я"
			},
			settingsLayout: {
				title: "Компоновка",
				explain: "Ж_Which layout do you want to use?_Я",
				explainInit: "Ж_You can change the layout anytime from the settings panel._Я",
				viewExample: "Посмотреть пример из жизни"
			},
			settingsTheme: {
				title: "Тема"
			},
			settingsHeader: {
				title: "Заголовок",
				logoEsri: "Логотип Esri",
				logoNone: "Без логотипа",
				logoCustom: "Собственный логотип",
				logoCustomPlaceholder: "URL-адрес (макс 250 x 50 пикселов)",
				logoCustomTargetPlaceholder: "Переход по ссылке",
				logoSocialExplain: "Настройте ссылку заголовка.",
				logoSocialText: "Текст",
				logoSocialLink: "Ссылка"
			}
		}
	})

);
