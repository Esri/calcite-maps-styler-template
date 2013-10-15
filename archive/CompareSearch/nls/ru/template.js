define(
({
  viewer:{
    title: "Сравнить веб-карты",
    main:{
        loading:{
            loadingMessage: "Загрузка веб-карт…",
            title: "Сравнить веб-карты"
        },
        contextMenu:{
            title: "Щелкните карту правой кнопкой мыши для получения дополнительных возможностей.",
            zoom: "Вернуться к исходному экстенту",
            scale: "масштаб",
            location: "местоположение",
            scaleAndLocation: "масштаб и местоположение",
            adjust: "Настроить другие карты в соответствии с этой"
        },
      title: "Сравнить веб-карты",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Не удалось создать карту",
      general:"Error",
      webmapDescription: "...описание не доступно…",
      legend:"No legend",
      bingMessage: "Отсутствует ключ Bing"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Сохранить веб-карты",
            alt: "Сохранить",
            title: "Сохранить веб-карты",
            message: "Веб-карты в настоящее время сохранены",
            changeMessage: "Веб-карты изменены",
            clearMessage: "Веб-карты были очищены"
        },
        search:{
            alt: "Поиск",
            title: "Поиск",
            placeholder: "введите текст для поиска",
            message: "Поиск …",
            results: "Веб-карты найдены"
        },
        clear:{
            alt: "Очистить",
            title: "Очистить веб-карты (использовать веб-карты по умолчанию)"
        },
        find:{
            label: "Найти веб-карты"
        },
        sync:{
            label: "СИНХРОНИЗИРОВАТЬ КАРТЫ:",
            scaleLabel: "Масштаб",
            locationLabel: "Местоположение"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Описание",
            contentLabel: "Содержание",
            legendLabel: "Легенда"
        }
    }
  }
})

);