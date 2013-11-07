define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Beskrivning"
    },
    errors:{
      createMap: "Det går inte att skapa kartan",
      general: "Fel"
    }
  },
  tools:{
    tweets: {
    "screenName": "Skärmnamn",
    "signIn": "Logga in",
    "switchAccount": "Byt konto",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "d MMM yy",
    timePattern: "h:mma",
    reply: "Svara",
    retweet:"Retweeta",
    favorite:"Favorit",
    label: "Tweets",
    title: "Tweets",
    error: "Inga resultat hittades, testa med en annan sökterm eller plats",
		search:{
			label: "Sök",
			title: "Sök på Twitter",
			placeholder: 'Sökord'
		},
		clear:{
			label: "Rensa",
			title: "Rensa karta"
		},
		share:{
			label: "Dela karta:",
			email:{
				title: "E-post",
				label: "E-post"
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