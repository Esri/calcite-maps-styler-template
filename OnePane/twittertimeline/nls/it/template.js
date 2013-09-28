define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Ricerca in Twitter"
    },
    errors:{
      createMap: "Impossibile creare la mappa",
      general: "Errore"
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
      datePattern: "d MMMM, h.mm",
      timeRange: "<b>Tweet ricevuti dalle ore:</b> ${start_time} alle ore ${end_time}"
    },
    tweets: {
        "screenName": "Nome schermata",
        "signIn": "Accedi",
        "switchAccount": "Cambia account",
        label: "Tweet",
        title: "Tweet",
        status: "recupero dei tweet e generazione della sequenza temporale in corso...",
        error: "Nessun risultato trovato",
        datePattern: "d MMM yy",
        timePattern: "h.mm",
		search:{
			label: "Ricerca",
			title: "Cerca in Twitter",
			placeholder: "Cerca in Twitter per parole chiave"
		},
		clear:{
			label: "Cancella",
			title: "Cancella mappa"
		}
			
	 }
    }
})
);