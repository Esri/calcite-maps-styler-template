define(
({
  viewer:{
    title: "Трех-сторонний вьюер карт",
    main:{
        loading:{
            loadingMessage: "Загрузка веб-карт…",
            title: "Сравнить карты"
        },
        contextMenu:{
            title: "Щелкните карту правой кнопкой мыши для получения дополнительных возможностей.",
            zoom: "Вернуться к исходному экстенту",
            scale: "масштаб",
            location: "местоположение",
            scaleAndLocation: "масштаб и местоположение",
            adjust: "Настроить другие карты в соответствии с этой"
        },
      iosTooltip: "* Щелкните заголовок карты, чтобы выбрать карту-источник",
      title: "Трех-сторонний вьюер карт",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Не удалось создать карту",
      general:"Error",
      webmapDescription: "...описание не доступно…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
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
