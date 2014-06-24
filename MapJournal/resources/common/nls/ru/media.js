define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Ж_Media_Я",
				lblSelect2: "Ж_Content_Я",
				lblMap: "Карта",
				lblImage: "Изображение",
				lblVideo: "Видео",
				lblExternal: "Веб-страница",
				disabled: "Объект был отключен администратором",
				url: "Чтобы вручную ввести веб-адрес изображения",
				userLookup: "Загрузить альбомы",
				notImplemented: "Еще не реализовано."
			},
			imageSelector: {
				lblStep1: "Выберите услугу",
				lblStep2: "Выберите ваши средства массовой информации",
				lblStep3: "Настроить"
			},
			imageSelectorHome: {
				explain: "Загрузка изображения из социальных средств массовой информации,<br>или прямо из URL-адреса"
			},
			imageSelectorFlickr: {
				userInputLbl: "Имя пользователя",
				signInMsg2: "Пользователь не найден",
				loadingFailed: "Загрузка не удалась"
			},
			imageSelectorFacebook: {
				leftHeader: "Пользователь Facebook",
				rightHeader: "Страница Facebook",
				pageExplain: "Страница Facebook - это публичный продукт, как <b>esrigis</b>. Вы можете взять имя страницы, расположенное после первой косой черты \'/\' в URL страницы.",
				pageInputLbl: "Имя страницы",
				lookupMsgError: "Страница не найдена"
			},
			imageSelectorPicasa: {
				userInputLbl: "Электронная почта или Picasa / ID Google +",
				signInMsg2: "Учетная запись не найдена",
				signInMsg3: "Не общедоступный альбом",
				howToFind: "Как найти ID учетной записи Picasa или Google+",
				howToFind2: "Скопируйте цифры, расположенные между первой и второй косой чертой \'/\' любой страницы Picasa или G+"
			},
			videoSelectorCommon: {
				check: "Ж_Check_Я",
				notFound: "Ж_Video not found_Я",
				found: "Ж_Video found_Я",
				select: "Ж_Select this video_Я"
			},
			videoSelectorHome: {
				other: "Ж_Other_Я"
			},
			videoSelectorYoutube: {
				url: "Ж_URL of a Youtube video_Я",
				pageInputLbl: "Имя пользователя",
				lookupMsgError: "Пользователь не найден",
				howToFind: "Как найти имя пользователя YouTube",
				howToFind2: "Имя пользователя отображается под видео",
				found: "Ж_Found_Я",
				noData: "Общедоступных видео не найдено"
			},
			videoSelectorVimeo: {
				url: "Ж_URL of a Vimeo video_Я"
			},
			videoSelectorOther: {
				explain1: "Ж_Map Journal cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)._Я",
				explain2: "Ж_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%._Я",
				explain3: "Ж_Alternatively, if you want host the video yourself, you can create an HTML page that use a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%._Я",
				webpage: "Ж_Web page feature_Я"
			},
			webpageSelectorHome: {
				lblUrl: "Ж_Webpage URL_Я",
				lblEmbed: "Ж_Embed code_Я",
				lblOR: "Ж_OR_Я",
				lblError1: "Ж_Error, clear one of the two input fields._Я",
				lblError2: "Ж_Embed code can only contain one <iframe>_Я"
			},
			mediaConfigure: {
				lblURL: "URL-адрес",
				lblURLPH: "Ж_An image URL should start with http:// and end with .jpg or .png_Я",
				lblLabel: "Ж_Image Caption_Я",
				lblLabel1: "Заголовок",
				lblLabel2: "Наведите курсор на текст",
				lblLabel3: "Нет",
				lblLabelPH: "Введите текст...",
				lblMaximize: "Ж_Include a maximize button in the corner of the image_Я",
				lblMaximizeHelp: "Ж_Recommended only for high quality photos_Я",
				lblPosition: "Положение",
				lblPosition1: "По центру",
				lblPosition2: "Заливка",
				lblPosition3: "Разместить",
				lblPosition4: "Растяжка",
				lblPosition5: "Ж_Custom_Я",
				tooltipDimension: "Ж_The value can be specified in 'px' or '%'_Я",
				lblPosition2Explain: "(может быть урезано)",
				lblPosition3Explain: "(не будет урезаться)",
				lblPosition3Explain2: "Ж_(width will always fit the panel)_Я",
				lblPosition4Explain: "(может исказиться)"
			},
			editorActionGeocode: {
				lblTitle: "Найдите адрес или место",
				mapMarkerExplain: "При нажатии на ссылку пользователь увидит маркер карты"
			},
			editorActionMedia: {
				lblTitle: "Изменить ресурсы основной площадки"
			},
			editorInlineMedia: {
				lblTitle: "Вставить изображение или видео"
			}
		}
	})

);
