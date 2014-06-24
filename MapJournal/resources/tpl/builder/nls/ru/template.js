define(
	 ({
		builder: {
			layouts: {
				mainStage: "Основная площадка",
				sideTitle: "Боковая панель",
				sideDescr: "Компоновка с доминированием текста, содержащая фотографии, видео и карты, чтобы обратить основное внимание на тему.",
				floatTitle: "Открепленная панель",
				floatDescr: "Компоновка, которая делает акцент на картографию, предоставляя прозрачную панель краткого текста, помогающего передать историю."
			},
			common: {
				lblStatus1: "Опубликованные",
				lblStatus2: "Черновой",
				lblStatus3: "Скрытый"
			},
			settingsLayoutOptions: {
				title: "Параметры компоновки",
				cfgLeft: "Слева",
				cfgRight: "Справа",
				cfgSmall: "Малый",
				cfgMedium: "Средний",
				cfgLarge: "Большой",
				socialLinksLabel: "Отображать ссылки на публикацию в нижней части каждого раздела",
				socialLinksDescr: "Это дает возможность читателям, делать ссылки и повышать популярность отдельных разделов %TPL_NAME%.  Например, если вы используйте значок поделиться, читатели скорее обратятся к разделу %TPL_NAME%, чем нежели им пришлось смотреть всё сначала. Они могут с помощью ссылок на социальные сети, расположенных у названия раздела, сделать известным весь %TPL_NAME% (закладка названия) и выполнить переход в начало %TPL_NAME%."
			},
			initPopup: {
				title: "Добро пожаловать"
			},
			addEditPopup: {
				disabled: "Ж_Add Section is disabled because the maximum number of allowed sections has been reached._Я",
				titleAdd: "Добавить раздел",
				titleAddHome: "Ж_Add Home Section_Я",
				titleEdit: "Изменить раздел",
				step: "Шаг",
				stepMainStageExplain: "Ж_Main Stage Content_Я",
				stepPanelExplain: "Ж_Content_Я",
				stepMainStageNextTooltip: "Введите название раздела и выберите ресурсы основной площадки",
				step2NextTooltip: "Введите название раздела и ресурсы %LAYOUT-TYPE%",
				stepNextTooltipNext: "чтобы перейти к следующему шагу",
				stepNextTooltipAdd: "чтобы добавить раздел",
				firstAddExplain: "Ж_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._Я",
				firstAddLeanMore: "Ж_Learn More_Я",
				titlePlaceholder: "Название раздела..."
			},
			addEditViewText: {
				editorPlaceholder: "Добавьте здесь текст, ссылки и небольшие графики.",
				editorActionsTitle: "Действия основной площадки",
				editorActionsHelpDescr: "Ж_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._Я"
			},
			organizePopup: {
				title: "Организовать",
				lblHeader: "Перетаскивайте разделы для организации ваших ресурсов.",
				lblColTitle: "Название",
				lblColPubDate: "Дата публикации",
				lblColStatus: "Статус",
				checkDisplayReverse: "Отображать разделы в обратном порядке",
				btnApplyWarning: "Ж_Confirm deletion of %NB% section(s)_Я",
				deleteTooltip: "Удалить",
				firstSectionExplain: "(Главный раздел нельзя переместить)"
			},
			exportData: {
				btn: "Ж_Export content_Я",
				tooltip: "Ж_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._Я"
			},
			help: {
				lblHelp: "Справка",
				lblAdd: "Добавить раздел",
				lblSettings: "Настройки",
				lblOrga: "Организовать ресурсы",
				lblEdit: "Изменения",
				lblPublish: "Общий доступ",
				lblTips: "Ж_Tips_Я",
				lblMore: "Хотите узнать больше?",
				lblLink: "Посетите веб-сайт Карты историй.",
				content1Div1: "В процессе создания вашей истории вы можете интегрировать множество стилей. Компоновка <strong>%LAYOUT_TITLE%</strong> обычно содержит текст, изображения и видео, а для карт применяется <strong>Основная площадка</strong>. Однако %TPL_NAME% позволяет встраивать также изображения, таблицы и видео в основную площадку.",
				content1Div2: "Добавление разделов позволяет чётко настроить представление вашей истории. Читатели просматривают текст  %LAYOUT_TITLE%, карту на основной площадке можно масштабировать и перемещать, новые карты и изображения автоматически переключаются для поддержки вашего сообщения.",
				content2Div1: "Здесь вы можете указать, как должен выглядеть ваш %TPL_NAME%. Цветовые схемы, компоновки и отступы настраиваются здесь.",
				content2Div2: "Вы также можете добавить ссылки на Facebook, Twitter и Bitly, с помощью которых ваш %TPL_NAME% станет известен другим.",
				content3Div1: "Ж_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._Я",
				content4Div1: "Нашли ошибку или хотите внести изменения? Нет проблем! Чтобы изменить данные, нажмите значок Изменить в вашем приложении. В процессе создания вашего%TPL_NAME% функции редактирования будут применяться очень часто.",
				content5Div1: "%TPL_NAME% сохранен в вашей учетной записи %PORTAL%, частной по умолчанию. Вы можете открыть общий доступ для вашей организации или для всего мира. Мы создаём для вас короткий постоянный URL, чтобы вам было проще поделиться историей.",
				content6Div1: "Ж_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._Я",
				content6Div2: "Ж_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_Я"
			},
			landing: {
				lblAdd: "Ж_What do you want to call your Map Journal?_Я",
				phAdd: "Ж_Enter your title..._Я",
				lblOR: "Или",
				lblHelp: "Ознакомительный тур"
			},
			firstAddSplash: {
				thisis: "Это"
			}
        }
    })

);
