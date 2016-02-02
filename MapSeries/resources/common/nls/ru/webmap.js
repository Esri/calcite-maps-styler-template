﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Карта",
				lblLocation: "Местоположение",
				lblContent: "Ресурсы",
				lblPopup: "Ж_Pop-up___Я",
				lblControls: "Дополнения",
				lblOverview: "Обзорная карта",
				lblLegend: "Легенда",
				lblGeocoder: "Ж_Address or Place Finder________Я",
				tooltipGeocoder: "Ж_Allow your users to find addresses and places on your maps___________________Я.",
				loadingTitle: "Название загрузки",
				entry: "Элемент",
				entries: "Элементы",
				section: "Раздел",
				sections: "Разделы",
				and: "и",
				action: "Действие в разделе",
				actions: "Действие в разделах",
				originalWebmap: "Карта, использованная для публикации % TPL_NAME %",
				browseMaps: "Выберите карту",
				createMap: "Создание карты",
				current: "Текущая карта",
				select: "Выберите или создайте карту",
				newMap: "Вновь выбранная карта",
				newCreatedMap: "Вновь созданная карта",
				webmapDefault: "Карта по умолчанию",
				customCfg: "Пользовательская конфигурация",
				tooltipLocation: "Определите местоположение, отображаемое на этой карте.",
				tooltipContent: "Определите видимые слои.",
				tooltipPopup: "Ж_Choose a pop-up that will be opened when this map is displayed____________________Я.",
				tooltipOverview: "Отобразите маленькую обзорную карту вместе с основной картой.",
				tooltipLegend: "Отобразите легенду карты на самой карте, что пригодится, если на карте много слоев и символов.",
				mapCfgInvite: "Используйте эти элементы управления для настройки вашей карты",
				lblLocationAlt: "Наследуется из первой карты",
				tooltipLocationAlt: "Местоположение этой карты синхронизируется с первой картой в серии. Чтобы изменить это поведение в вашей серии, перейдите в Настройки > Опции карты."
			},
			configure: {
				btnReset: "Сбросить",
				btnCancel: "Отмена",
				tocTitle: "Содержание карты",
				tocExplain: "Выберите, какие слои будут отображаться.",
				tocNoData: "Отсутствуют слои, которые можно настраивать.",
				tocSave: "Сохранить содержание карты",
				extentTitle: "Местоположение карты",
				extentExplain: "Переместите и измените масштаб карты, чтобы просмотреть, как она будет выглядеть для читателей.",
				extentSave: "Сохранение местоположение на карте",
				popupTitle: "Ж_Map pop-up____Я",
				popupExplain: "Ж_Click on a feature to open the pop-up you want to display__________________Я.",
				popupSave: "Ж_Save the pop-up configuration__________Я",
				hintNavigation: "Навигация по карте отключена."
			},
			editor: {
				loading: "Подождите, пока загружается редактор карт",
				newTitle: "Создать новую карту",
				editTitle: "Редактировать карту",
				titleLbl: "Заголовок",
				titlePh: "Заголовок карты...",
				folderLbl: "Карта будет создана в той же папке, что и история",
				creating: "Создание карты",
				saving: "Сохранение карты",
				success: "Карта сохранена",
				successCreate: "Карта создана",
				cancelTitle: "Отменить все несохраненные изменения?",
				errorDuplicate: "Карта с таким названием уже существует.",
				errorCreate: "Не удалось создать карту. Повторите попытку.",
				errorSave: "Не удалось сохранить карту. Повторите попытку.",
				notavailable1: "Создание или редактирование карт не поддерживается в Firefox из-за технических ограничений. Можете использовать другой браузер для создания истории или воспользуйтесь следующим решением.",
				notavailable2: "Создание или редактирование карты недоступны, поскольку приложение истории не опубликовано в %PRODUCT%. Обратитесь к своему администратору ArcGIS для получения подробной информации.",
				notavailable3: "Создание или редактирование карты недоступны в этой версии Portal for ArcGIS (необходима 10.4 или выше). Обратитесь к своему администратору ArcGIS для получения подробной информации.",
				notavailable4: "Можно создать карту с помощью %MV%, а затем вернуться сюда, чтобы добавить ее в историю.",
				notavailable5: "Можно изменить карту с помощью %MV%, а затем вернуться сюда и %apply%, чтобы увидеть изменения.",
				notavailable6: "вьюер карт",
				notavailable7: "перезагрузить карту"
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
				title: "Выберите карту",
				searchTitle: "Поиск",
				ok: "Ok",
				cancel: "Отмена",
				placeholder: "Введите слово для поиска или ID веб-карты..."
			}
		}
	})
);
