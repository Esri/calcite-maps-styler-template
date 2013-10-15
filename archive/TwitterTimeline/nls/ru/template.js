define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Поиск в Twitter"
    },
    errors:{
      createMap: "Не удалось создать карту",
      general: "Ошибка"
    }
  },
  tools:{
     time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      datePattern: "ММММ д, ч:мм a",
      timeRange: "<b>Tweets от:</b> ${start_time} до ${end_time}"
    },
    tweets: {
        "screenName": "Ник",
        "signIn": "Войти",
        "switchAccount": "Переключить учетную запись",
        label: "Записи в Twitter",
        title: "Записи в Twitter",
        status: "извлечение записей в Twitter и генерация шкалы времени...",
        error: "Результаты не найдены",
        datePattern: "д МММ гг",
        timePattern: "ч:ммa",
		search:{
			label: "Поиск",
			title: "Поиск в Twitter",
			placeholder: "Поиск в Twitter по ключевым словам"
		},
		clear:{
			label: "Очистить",
			title: "Очистить карту"
		}
			
	 }
    }
})
);