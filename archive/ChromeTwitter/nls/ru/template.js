define(
   ({
  viewer: {
    main: {
      ownerText: "Карта из: ",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Описание"
    },
    errors: {
      createMap: "Не удалось создать карту",
      general: "Ошибка"
    }
  },
  tools: {
    tweets: {
    "screenName": "Ник",
    "signIn": "Войти",
    "switchAccount": "Переключить учетную запись",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "д МММ гг",
    timePattern: "ч:мм",
    reply: "Ответить",
    retweet:"ReTweet",
    favorite:"Избранное",
    label: "Записи в Twitter",
    title: "Записи в Twitter",
    error: "Результаты не найдены, попробуйте другой термин или местоположение для поиска",
		search: {
			label: "Поиск",
			title: "Поиск в Twitter",
			placeholder: 'Ключевые слова для поиска'
		},
		clear: {
			label: "Очистить",
			title: "Очистить карту"
		},
		share: {
			label: "Общий доступ к карте:",
			email:{
				title: "Email",
				label: "Email"
			},
			twitter: {
				title: "Twitter",
				label: "Twitter"
			},
			facebook: {
				title: "Facebook",
				label: "Facebook"
			}
		}
	 }
   }
})
);
