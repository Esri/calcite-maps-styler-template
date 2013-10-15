define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Søg på Twitter"
    },
    errors:{
      createMap: "Kan ikke oprette kort",
      general: "Fejl"
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
      datePattern: "MMMM d, h:mm a",
      timeRange: "<b>Tweets fra:</b> ${start_time} til ${end_time}"
    },
    tweets: {
        "screenName": "Skærmnavn",
        "signIn": "Log ind",
        "switchAccount": "Skift konto",
        label: "Tweets",
        title: "Tweets",
        status: "henter tweets og genererer tidslinje...",
        error: "Ingen resultater",
        datePattern: "d MMM yy",
        timePattern: "h:mma",
		search:{
			label: "Søg",
			title: "Søg på Twitter",
			placeholder: "Søg på Twitter efter nøgleord"
		},
		clear:{
			label: "Ryd",
			title: "Ryd kort"
		}
			
	 }
    }
})
);