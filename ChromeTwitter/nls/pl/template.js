define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Opis"
    },
    errors:{
      createMap: "Nie można utworzyć mapy",
      general: "Błąd"
    }
  },
  tools:{
    tweets: {
    "screenName": "Nazwa ekranu",
    "signIn": "Zaloguj",
    "switchAccount": "Przełącz konto",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "D MMM YY",
    timePattern: "hh:mm",
    reply: "Odpowiedź",
    retweet: "Prześlij dalej",
    favorite: "Ulubione",
    label: "Wpisy",
    title: "Wpisy",
    error: "Nie znaleziono wyników, zmień wyszukiwane słowa lub lokalizację",
		search:{
			label: "Wyszukaj",
			title: "Przeszukaj serwis Twitter",
			placeholder: 'Słowa kluczowe do wyszukania'
		},
		clear:{
			label: "Wyczyść",
			title: "Wyczyść mapę"
		},
		share:{
			label: "Udostępnij mapę:",
			email:{
				title: "Email",
				label: "Email"
			},
			twitter:{
				title: "Twitter",
				label: "Twitter"
			},
			facebook:{
				title: "Facebook",
				label: "Facebook"
			}
		}
	 }
   }
 })
);