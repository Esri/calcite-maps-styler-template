define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Przeszukiwanie serwisu Twitter"
    },
    errors:{
      createMap: "Nie można utworzyć mapy",
      general: "Błąd"
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
      datePattern: "dd-mm, hh:mm:ss",
      timeRange: "<b>Wpisy od:</b> ${start_time} do ${end_time}"
    },
    tweets: {
        "screenName": "Nazwa ekranu",
        "signIn": "Zaloguj",
        "switchAccount": "Przełącz konto",
        label: "Wpisy",
        title: "Wpisy",
        status: "trwa pobieranie wpisów i generowanie osi czasu...",
        error: "Nie znaleziono wyników",
        datePattern: "D MMM YY",
        timePattern: "hh:mm",
		search:{
			label: "Wyszukaj",
			title: "Przeszukaj serwis Twitter",
			placeholder: "Przeszukuj serwis Twitter wg słów kluczowych"
		},
		clear:{
			label: "Wyczyść",
			title: "Wyczyść mapę"
		}
			
	 }
    }
})
);