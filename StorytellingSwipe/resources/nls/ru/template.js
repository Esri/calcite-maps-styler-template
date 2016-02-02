define(
	 ({
		viewer: {
			loading: {
				step1: "ЗАГРУЗКА ИСТОРИИ",
				step2: "ЗАГРУЗКА ДАННЫХ",
				step3: "ИНИЦИАЛИЗАЦИЯ",
				fail: "Загрузка Swipe не удалась",
				loadBuilder: "ПЕРЕКЛЮЧИТЬСЯ В РЕЖИМ КОНСТРУКТОРА",
				redirectSignIn: "ПЕРЕНАПРАВЛЕНИЕ НА СТРАНИЦУ ВХОДА",
				redirectSignIn2: "(после входа вы будете перенаправлены сюда)",
				failButton: "Повторить"
			},
			errors: {
				boxTitle: "Произошла ошибка",
				portalSelf: "Критическая ошибка: не удалось получить конфигурацию портала",
				invalidConfig: "Критическая ошибка: недопустимая конфигурация",
				invalidConfigNoWebmap: "Ж_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________Я",
				invalidConfigNoAppDev: "Ж_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________Я.",
				createMap: "Не удалось создать карту",
				invalidApp: "Критическая ошибка: не удается загрузить историю",
				initMobile: "Добро пожаловать в веб-приложение Swipe. Приложение не настроено. Интерактивный конструктор не поддерживается на мобильных устройствах.",
				initMobile2: "Ж_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________Я.",
				initMobile3: "Ж_Please rotate your device to landscape orientation to use the Swipe builder________________________Я.",
				noBuilderIE8: "Интерактивный конструктор Swipe не поддерживается в браузере Internet Explorer в версиях ранее 9.",
				noLayerView: "Добро пожаловать в веб-приложение Swipe.<br />Приложение еще не настроено.",
				appSave: "Ошибка при сохранении истории",
				mapSave: "Ошибка при сохранении веб-карты",
				notAuthorized: "Вы не авторизованы для доступа к истории.",
				notAuthorizedBuilder: "Ж_You are not authorized to use Swipe and Spyglass builder__________________Я.",
				conflictingProjectionsTitle: "Конфликтующие проекции",
				conflictingProjections: "Swipe не поддерживает использование двух веб-карт с различными проекциями. Откройте настройки и используйте веб-карту с той же проекцией, что и первая веб-карта.",
				cpButton: "Закрыть",
				unspecifiedConfigOwner: "Авторизованный владелец не настроен.",
				invalidConfigOwner: "Владелец истории не авторизован."
			},
			mobileView: {
				hideIntro: "СКРЫТЬ ВВЕДЕНИЕ",
				navLeft: "Легенда",
				navMap: "Карта",
				navRight: "Данные"
			},
			desktopView: {
				storymapsText: "Карта истории",
				builderButton: "Переключиться в режим конструктора",
				facebookTooltip: "Разместить в Facebook",
				twitterTooltip: "Разместить в Twitter",
				bitlyTooltip: "Получить краткую ссылку",
				tooltipAutoplayDisabled: "Ж_This isn't available in autoplay mode____________Я",
				autoplayLabel: "Ж_Autoplay mode_____Я",
				autoplayExplain1: "Ж_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Я.",
				autoplayExplain2: "Ж_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Я."
			}
		},
		builder: {
			builder: {
				panelHeader: "НАСТРОЙКА ИСТОРИИ",
				buttonSave: "СОХРАНИТЬ",
				buttonHelp: "Справка",
				buttonShare: "Доступ",
				buttonDiscard: "ОТМЕНА",
				buttonSettings: "Настройки",
				buttonView: "Режим просмотра",
				buttonItem: "Открыть элемент Веб-приложение",
				noPendingChange: "Нет предполагаемых изменений",
				unSavedChangeSingular: "1 несохраненное изменение",
				unSavedChangePlural: "несохраненных изменений",
				popoverDiscard: "Вы действительно хотите отказаться от несохраненных изменений?",
				yes: "Да",
				no: "Нет",
				popoverOpenViewExplain: "При открытии вьюера вы потеряете все несохраненные изменения",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Отмена",
				popoverSaveWhenDone: "Не забудьте сохранить изменения, когда закончите",
				closeWithPendingChange: "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
				gotIt: "Ok",
				savingApplication: "Сохранение истории",
				saveSuccess: "Ж_Story saved____Я",
				saveError: "Сохранение не удалось, попробуйте еще раз",
				saveError2: "Ошибка при сохранении из-за недопустимого html-тега в имени или описании",
				saveError3: "Заголовок не может быть пустым",
				signIn: "Войдите с помощью учетной записи в",
				signInTwo: "чтобы сохранить историю."
			},
			header:{
				editMe: "Отредактируйте меня!",
				templateTitle: "Ввести заголовок шаблона",
				templateSubtitle: "Ввести подзаголовок шаблона"
			},
			settings: {
				settingsHeader: "Настройки истории",
				modalCancel: "Отмена",
				modalApply: "Применить"
			},
			settingsColors: {
				settingsTabColor: "Тема",
				settingsColorExplain: "Выберите тему приложения либо укажите собственные цвета.",
				settingsLabelColor: "Фоновые цвета заголовка и боковой панели"
			},
			settingsHeader: {
				settingsTabLogo: "Заголовок",
				settingsLogoExplain: "Настройка логотипа заголовка (максимум 250 x 50px).",
				settingsLogoEsri: "Логотип Esri",
				settingsLogoNone: "Без логотипа",
				settingsLogoCustom: "Собственный логотип",
				settingsLogoCustomPlaceholder: "URL-адрес изображения",
				settingsLogoCustomTargetPlaceholder: "Переход по ссылке",
				settingsLogoSocialExplain: "Настроить верхнюю правую ссылку заголовка.",
				settingsLogoSocialText: "Текст",
				settingsLogoSocialLink: "Ссылка",
				settingsLogoSocialDisabled: "Функция была отключена администратором"
			},
			settingsExtent: {
				settingsTabExtent: "Экстент",
				settingsExtentExplain: "Выберите начальный экстент через интерактивную карту, показанную ниже.",
				settingsExtentExplainBottom: "Указанный вами экстент обновит исходный экстент веб-карты. Если вы создаете серию шторок, этот экстент использоваться не будет.",
				settingsExtentDateLineError: "Экстент не может продолжаться за меридиан 180ï¿½",
				settingsExtentDateLineError2: "Ошибка вычисления экстента",
				settingsExtentDrawBtn: "Нарисовать новый экстент",
				settingsExtentModifyBtn: "Изменить текущий экстент",
				settingsExtentApplyBtn: "Применить на главной карте",
				settingsExtentUseMainMap: "Использовать экстент основной карты"
			}
        },
		swipe: {
			mobileData: {
				noData: "Нет данных для отображения!",
				noDataExplain: "Коснитесь карты, чтобы выбрать объект и вернуться обратно",
				noDataMap: "Нет данных для этой карты",
				noPopup: "Нет всплывающей информации для этого объекта"
			},
			mobileLegend: {
				noLegend: "Нет легенды для отображения."
			},
			swipeSidePanel: {
				editTooltip: "Укажите описание боковой панели",
				editMe: "Отредактируйте меня!",
				legendTitle: "Легенда"
			},
			infoWindow: {
				noFeature: "Нет данных для отображения",
				noFeatureExplain: "Коснитесь карты для выбора объекта"
			},
			settingsLayout: {
				settingsTabLayout: "Стиль шторки",
				settingsLayoutExplain: "Выберите стиль для инструмента Шторка.",
				settingsLayoutSwipe: "Вертикальная черта",
				settingsLayoutSpyGlass: "Spyglass",
				settingsLayoutSelected: "Выбранная компоновка",
				settingsLayoutSelect: "Выбрать эту компоновку",
				settingsSaveConfirm: "Некоторые внесенные изменения требуют сохранения и перезагрузки истории"
			},
			settingsDataModel: {
				settingsTabDataModel: "Тип шторки",
				settingsDataModelExplainSwipe: "Что пользователи должны сдвигать?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Выберите слой или веб-карту, которые появятся в подзорной трубе.",
				settingsDataModelOneMap: "Слой на веб-карте",
				settingsDataModel1Explain: "Выберите слой, который будет управляться инструментом Шторка.",
				settingsDataModel1Warning: "Если слой скрыт под другими слоями, использование шторки не даст никакого результата.",
				settingsDataModel1SpyGlassExplain: "Выберите слой, появляющийся в подзорной трубе.",
				settingsDataModelTwoMaps: "Две веб-карты",
				settingsDataModelLayerIds: "ID слоя веб-карты",
				settingsDataModelSelected: "Выбранный тип",
				settingsDataModelWebmapSwipeId1: "ID правой веб-карты",
				settingsDataModelWebmapSwipeId2: "ID левой веб-карты",
				settingsDataModelWebmapGlassId1: "ID основной веб-карты",
				settingsDataModelWebmapGlassId2: "ID веб-карты Spyglass",
				settingsDataModelSelect: "Выбрать этот тип",
				settingsDataModel2Explain: "Спрятать под другой веб-картой.",
				settingsDataModel2SpyGlassExplain: "Показать другую веб-карту.",
				settingsDataModel2HelpTitle: "Как найти ID веб-карты?",
				settingsDataModel2HelpContent: "Скопируйте и вставьте цифры, расположенные после знака \'=\' в URL веб-карты",
				switchMaps: "Переключить карты",
				browseWebMaps: "Обзор веб-карт"
			},
			settingsLegend: {
				settingsTabLegend: "Компоновка приложения",
				settingsLegendExplain: "Выберите настройки компоновки.",
				settingsLegendEnable: "Включить легенду",
				settingsDescriptionEnable: "Включить описание",
				settingsBookmarksEnable: "Включить серии шторок",
				settingsPopupDisable: "Ж_Enable pop-up_____Я",
				settingsLocationSearchEnable: "Включить поиск локатора",
				settingsGeolocatorEnable: "Включить геолокатор",
				settingsLegendHelpContent: "Ж_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________Я",
				settingsSeriesHelpContent: "Серии шторок - это опция навигации, позволяющая пользователю переходить к определенному экстенту и отображать текст заголовка и описания на боковой панели.  При первоначальном включении закладки с веб-карт будут импортированы и использованы для создания серий.  Отключение опции работы с сериями приводит к отключению панели серий, но настройки серий остаются для использования в будущем.",
				settingsSeriesHelpContent2: "Серии шторок позволяют создавать и редактировать выбранные местоположения, а также их заголовки и текст. Если ваша веб-карта содержит закладки, то они будут отображаться. Вы можете отменить отображение серии шторок, но их настройки сохранятся для будущей работы.",
				settingsSeriesHelpLink: "См. пример приложения с серией шторок здесь",
				preview: "Просмотр UI",
				settingsLocateButtonExplain: "Эта функция поддерживается на большинстве браузеров мобильных устройств и настольных браузеров (включая Internet Explorer 9+).",
				settingsLocateButton: "Включить в поддерживаемых браузерах кнопку Размещение",
				settingsAddressSearch: "Включить инструмент поиска адреса"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Всплывающая информация",
				settingsSwipePopupExplain: "Настройте внешний вид всплывающего заголовка, чтобы помочь пользователю связать всплывающую информацию со слоями карт.",
				settingsSwipePopupSwipe1: "Левая карта",
				settingsSwipePopupSwipe2: "Правая карта",
				settingsSwipePopupGlass1: "Основная карта",
				settingsSwipePopupGlass2: "Карта Spyglass",
				settingsSwipePopupTitle: "Название заголовка",
				settingsSwipePopupColor: "Цвет заголовка"
			},
			initPopup: {
				initHeader: "Добро пожаловать в конструктор Swipe/Spyglass",
				modalNext: "Далее",
				modalPrev: "Предыдущий",
				modalApply: "Открыть приложение"
			},
			seriesPanel: {
				title: "Название",
				descr: "Описание",
				discard: "Сброс закладки",
				saveExtent: "Задать экстент закладки",
				discardDisabled: "Вы не можете удалить эту закладку. Серию шторок можно отключить в Настройках."
			},
			helpPopup: {
				title: "Справка",
				close: "Закрыть",
				tab1: {
					div1: "Шаблон Swipe/Spyglass предназначен для сравнения двух отдельных веб-карт или двух слоев одной веб-карты в удобном и простом в использовании приложении, которое может применяться в любом браузере на любом устройстве, включая смартфоны и планшеты.",
					div2: "Для получения дополнительной информации по шаблону Swipe/Spyglass, включая примеры, созданные пользователями, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> посетите веб-сайт Story Maps</a>. Вы также можете следовать за нами в Twitter на <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Мы будем рады вам! Если у вас есть вопросы, вы желаете предложить новую функцию, или вы нашли ошибку, пожалуйста, посетите <a href='http://links.esri.com/storymaps/forum' target='_blank'>Форум пользователей Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Ж_Story saved____Я",
				manageStory: "Ж_Manage your story______Я",
				manageStoryA1: "Ж_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________Я.",
				manageStoryA1V1: "Ж_My Stories____Я",
				manageStoryA1V2: "Ж_blog posts____Я",
				shareTitle: "Откройте доступ к истории",
				sharePrivateHeader: "Нет общего доступа к истории, хотите сделать это?",
				sharePrivateBtn1: "Публикация в общий доступ",
				sharePrivateBtn2: "Доступ только для моей организации",
				sharePrivateProgress: "Публикация...",
				sharePrivateErr: "Публикация не удалась, повторите попытку или",
				sharePrivateOk: "Ж_Sharing updated, loading_________Я...",
				shareStatus1: "История не сохранена",
				shareStatus2: "История в общем доступе",
				shareStatus3: "История доступна только участникам организации",
				shareStatus4: "История не в общем доступе",
				sharePreviewAsUser: "Просмотр",
				shareHeader1: "История <strong>общедоступна</strong>.",
				shareHeader2: "История доступна для сотрудников вашей организации (требуется учетная запись).",
				shareLinkHeader: "Ж_Share your story______Я",
				shareLinkOpen: "ОТКРЫТЬ",
				learnMore: "Подробнее",
				shareA1: "Используйте %SHAREIMG% на <a href='%LINK1%' target='_blank'>странице элемента приложения</a>. Если вы хотите закрыть общий доступ к веб-карте, перейдите на <a href='%LINK2%' target='_blank'>страницу элемента веб-карты</a>.",
				shareWarning: "Доступ к %WITH%  был отключен, потому что вы не являетесь владельцем <a href='%LINK%' target='_blank'>webmap</a>.",
				shareWarningWith1: "Ж_publicly___Я",
				shareWarningWith2: "Ж_publicly and with the Organization___________Я"
			},
			directCreation: {
				header: "Добро пожаловать в  конструктор Swipe/Spyglass",
				mapPickHeader: "Сначала введите id веб-карты или выберите ее с помощью обзора веб-карт.",
				launchBuilder: "Запустить конструктор",
				chooseWebmapLbl: "Выберите веб-карту...",
				explain2: "Ж_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________Я.",
				explain3: "Если вы хотите использовать две веб-карты в вашей карте-истории, то вы будете запрошены о второй веб-карте позже, когда выберете эту опцию.",
				webmapPlaceholder: "Введите id веб-карты..."
			},
			saveErrorSocial: {
				title: "Ж_Social media sharing update_________Я",
				panel1: "Ж_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________Я.",
				panel1tooltip: "Ж_By defining a title, summary and thumbnail image, your story will look like this_________________________Я:",
				panel2:	"Ж_Which title would you like to use on social media________________Я:",
				panel2q1: "Ж_Story title (recommended)_________Я",
				panel2q1tooltip: "Ж_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________Я.",
				panel2q2: "Ж_Item title____Я",
				panel3: "Ж_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________Я.",
				panel4: "Ж_Do not warn me again for this story____________Я",
				mystories: "Ж_My Stories____Я",
				btnSave: "Ж_Save__Я"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Моя организация",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Мои ресурсы",
					favoritesLabel: "Мое избранное"
				},
				title: "Ж_Select Web Map_____Я",
				searchTitle: "Поиск",
				ok: "Ok",
				cancel: "Отмена",
				placeholder: "Введите текст поиска"
			}
		}
    })
);
