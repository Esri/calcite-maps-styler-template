define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Zoeken op Twitter"
    },
    errors:{
      createMap: "Kan kaart niet maken",
      general: "Fout"
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
      datePattern: "d MMMM h:mm a",
      timeRange: "<b>Tweets van:</b> ${start_time} tot ${end_time}"
    },
    tweets: {
        "screenName": "Schermnaam",
        "signIn": "Aanmelden",
        "switchAccount": "Account wijzigen",
        label: "Tweets",
        title: "Tweets",
        status: "Tweets ophalen en tijdlijn genereren...",
        error: "Geen resultaten gevonden",
        datePattern: "d MMM yy",
        timePattern: "h:mma",
		search:{
			label: "Zoeken",
			title: "Zoeken op Twitter",
			placeholder: "Zoeken op Twitter op trefwoorden"
		},
		clear:{
			label: "Wissen",
			title: "Kaart wissen"
		}
			
	 }
    }
})
);