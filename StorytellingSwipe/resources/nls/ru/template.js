define(
	({
		viewer: {
			loading: {
				step1: "ЗАГРУЗКА ПРИЛОЖЕНИЯ",
				step2: "ЗАГРУЗКА ДАННЫХ",
				step3: "ИНИЦИАЛИЗАЦИЯ",
				fail: "Загрузка инструмента Шторка (Swipe) не удалась",
				loadBuilder: "ПЕРЕКЛЮЧИТЬСЯ В РЕЖИМ КОНСТРУКТОРА",
				redirectSignIn: "Ж_REDIRECTING TO SIGN-IN PAGE_Я",
				redirectSignIn2: "Ж_(you will be redirected here after sign-in)_Я",
				failButton: "Повторить"
			},
			errors: {
				boxTitle: "Произошла ошибка",
				portalSelf: "Критическая ошибка: не удалось получить конфигурацию портала",
				invalidConfig: "Критическая ошибка: недопустимая конфигурация",
				invalidConfigNoWebmap: "Критическая ошибка: недопустимая конфигурация (веб-карта не выбрана)",
				createMap: "Не удалось создать карту",
				invalidApp: "Критическая ошибка: не удается загрузить приложение",
				initMobile: "Добро пожаловать в веб-приложение Шторка (Swipe). Приложение не настроено. Компоновщик не поддерживается на мобильных устройствах.",
				noBuilderIE8: "Компоновщик Шторка (Swipe) не поддерживается в браузере Internet Explorer в версиях ранее 9.",
				noLayerView: "Добро пожаловать в веб-приложение Штрока (Swipe).<br />Приложение еще не настроено.",
				appSave: "Ошибка при сохранении веб-приложения",
				mapSave: "Ошибка при сохранении веб-карты",
				notAuthorized: "Вы не авторизованы для доступа к данному приложению",
				conflictingProjectionsTitle: "Конфликтующие проекции",
				conflictingProjections: "Шторка не поддерживает использование двух веб-карт с различными проекциями. Откройте настройки и используйте веб-карту с той же проекцией, что и первая веб-карта.",
				cpButton: "Закрыть"
			},
			mobileView: {
				hideIntro: "СКРЫТЬ ВВЕДЕНИЕ",
				navLeft: "Легенда",
				navMap: "Карта",
				navRight: "Данные"
			},
			desktopView: {
				storymapsText: "Карта истории",
				builderButton: "Переключиться в режим компоновки",
				bitlyTooltip: "Получить короткую ссылку на приложение"
			}
		},
		builder: {
			builder: {
				panelHeader: "КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ",
				buttonSave: "СОХРАНИТЬ",
				buttonHelp: "Ж_Help_Я",
				buttonShare: "Ж_Share_Я",
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
				savingApplication: "Сохранение приложения",
				saveSuccess: "Приложение успешно сохранено",
				saveError: "Сохранение не удалось, попробуйте еще раз",
				saveError2: "Ж_Save failed due to an invalid html tag in a name or description_Я",
				saveError3: "Ж_The title can't be empty_Я",
				signIn: "Войдите с помощью учетной записи в",
				signInTwo: "чтобы сохранить приложение."
			},
			header:{
				editMe: "Отредактируйте меня !",
				templateTitle: "Ввести заголовок шаблона",
				templateSubtitle: "Ввести подзаголовок шаблона"
			},
			settings: {
				settingsHeader: "Настройки приложения",
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
				settingsLogoSocialDisabled: "Объект был отключен администратором"
			},
			settingsExtent: {
				settingsTabExtent: "Экстент",
				settingsExtentExplain: "Выберите начальный экстент через интерактивную карту, показанную ниже.",
				settingsExtentExplainBottom: "Указанный вами экстент обновит исходный экстент веб-карты. Если вы создаете серию карт со шторками, этот экстент использоваться не будет.",
				settingsExtentDateLineError: "Ж_The extent cannot be across the meridian of 180ï¿½ longitude_Я",
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
				editMe: "Отредактируйте меня !",
				legendTitle: "Легенда"
			},
			infoWindow: {
				noFeature: "Нет данных для отображения",
				noFeatureExplain: "Коснитесь карты для выбора объекта"
			},
			settingsLayout: {
				settingsTabLayout: "Стиль шторки",
				settingsLayoutExplain: "Выберите стиль для инструмента Шторка (Swipe).",
				settingsLayoutSwipe: "Вертикальная черта",
				settingsLayoutSpyGlass: "Подзорная труба",
				settingsLayoutSelected: "Выбранная компоновка",
				settingsLayoutSelect: "Выбрать эту компоновку",
				settingsSaveConfirm: "Некоторые внесенные изменения требуют сохранения и перезагрузки приложения"
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
				settingsDataModel2HelpContent: "Скопируйте и вставьте цифры, расположенные после знака '=' в URL веб-карты",
				switchMaps: "Ж_Switch maps_Я",
				browseWebMaps: "Ж_Browse web maps_Я"
			},
			settingsLegend: {
				settingsTabLegend: "Компоновка приложения",
				settingsLegendExplain: "Выберите настройки компоновки приложения.",
				settingsLegendEnable: "Включить легенду",
				settingsDescriptionEnable: "Включить описание",
				settingsBookmarksEnable: "Включить несколько шторок",
				settingsPopupDisable: "Включить всплывающее окно",
				settingsLocationSearchEnable: "Включить поиск локатора",
				settingsGeolocatorEnable: "Включить геолокатор",
				settingsLegendHelpContent: "Для настройки содержания легенды используйте таблицу содержания вьюера веб-карт ArcGIS.com (Скрыть в легенде)",
				settingsSeriesHelpContent: "Серии шторок - это опция навигации, позволяющая пользователю переходить к определенному экстенту и отображать текст заголовка и описания на боковой панели.  При первоначальном включении закладки с веб-карт будут импортированы и использованы для создания серий.  Отключение опции работы с сериями приводит к отключению панели серий, но настройки серий остаются для использования в будущем.", 
				settingsSeriesHelpContent2: "Серии шторок позволяют создавать и редактировать выбранные местоположения, а также их заголовки и текст. Если ваша веб-карта содержит закладки, то они будут отображаться. Вы можете отменить отображение серии шторок, но их настройки сохранятся для будущей работы.",
				settingsSeriesHelpLink: "См. пример приложения с серией шторок здесь",
				preview: "Просмотр UI",
				settingsLocateButtonExplain: "Эта функция поддерживается на большинстве браузеров мобильных устройств и настольных браузеров (включая Internet Explorer 9+).",
				settingsLocateButton: "Ж_Enable a 'Locate' button on supported browsers_Я",
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
				initHeader: "Ж_Welcome to the Swipe/Spyglass Builder_Я",
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
				title: "Ж_Help_Я",
				close: "Ж_Close_Я",
				tab1: {
					div1: "Ж_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._Я",
					div2: "Ж_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._Я",
					div3: "Ж_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._Я"
				}
			},
			share: {
				firstSaveTitle: "Ж_Application successfully saved_Я",
				firstSaveHeader: "Ж_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._Я",
				firstSaveA1: "Ж_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_Я",
				firstSaveA1bis: "Ж_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._Я",
				firstSaveQ2: "Ж_Is my Application shared?_Я",
				firstSaveA2: "Ж_Currently your Application is not shared. To share it, use the SHARE button._Я",
				shareTitle: "Ж_Share your Application_Я",
				sharePrivateHeader: "Ж_Your Application is not shared, would you like to share it?_Я",
				sharePrivateBtn1: "Ж_Share publicly_Я",
				sharePrivateBtn2: "Ж_Share with my Organization_Я",
				sharePrivateProgress: "Ж_Sharing in progress..._Я",
				sharePrivateErr: "Ж_Sharing failed, try again or_Я",
				sharePrivateOk: "Ж_Sharing updated successfully, loading..._Я",
				shareStatus1: "Ж_Application is not saved_Я",
				shareStatus2: "Ж_Application is shared publicly_Я",
				shareStatus3: "Ж_Application is shared within the organization_Я",
				shareStatus4: "Ж_Application is not shared_Я",
				sharePreviewAsUser: "Ж_Preview_Я",
				shareHeader1: "Ж_Your Application is <strong>publicly accessible</strong>._Я",
				shareHeader2: "Ж_Your Application is accessible by your organization members (login is required)._Я",
				shareLinkHeader: "Ж_Share the Application with your audience_Я",
				shareLinkOpen: "Ж_OPEN_Я",
				learnMore: "Ж_Learn more_Я",
				shareQ1Opt1: "Ж_How do I keep the Application private?_Я",
				shareQ1Opt2: "Ж_How do I keep the Application private or share it publicly?_Я",
				shareA1: "Ж_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._Я",
				shareA1bis: "Ж_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._Я",
				shareQ2: "Ж_How do I edit the Application later?_Я",
				shareQ2bis: "Ж_How do I get back to the authoring interface?_Я",
				shareA2div1: "Ж_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._Я",
				shareA2div2: "Ж_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_Я",				
				shareQ3: "Ж_Where is the data stored?_Я",
				shareA3: "Ж_The Application configuration is stored in this web application item</a>._Я",
				shareWarning: "Ж_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._Я",
 				shareWarningWith1: "Ж_publicly_Я",
 				shareWarningWith2: "Ж_publicly and with the Organization_Я"
			},
			directCreation: {
				header: "Ж_Welcome to the Swipe/Spyglass Builder_Я",
				mapPickHeader: "Ж_To get started, please input a valid web map id, or use the search button to browse web maps._Я",
				launchBuilder: "Ж_Launch Builder_Я"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Ж_My Organization_Я",
					onlineLabel: "Ж_ArcGIS Online_Я",
					contentLabel: "Ж_My Content_Я",
					favoritesLabel: "Ж_My Favorites_Я"
				},
				title: "Ж_Select Web Map_Я",
				searchTitle: "Ж_Search_Я",
				ok: "Ж_Ok_Я",
				cancel: "Ж_Cancel_Я",
				placeholder: "Ж_Enter search term_Я"
			}
		}
    })
);