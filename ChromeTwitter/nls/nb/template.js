define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Beskrivelse"
    },
    errors:{
      createMap: "Kan ikke opprette kart",
      general: "Feil"
    }
  },
  tools:{
    tweets: {
    "screenName": "Skjermnavn",
    "signIn": "Logg inn",
    "switchAccount": "Bytt konto",
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
    timePattern: "t:mma",
    reply: "Svar",
    retweet:"Retweet",
    favorite:"Favoritt",
    label: "Twittermeldinger",
    title: "Twittermeldinger",
    error: "Fant ingen resultater, prøv et annet søkeord eller lokasjon",
		search:{
			label: "Søk",
			title: "Søk på Twitter",
			placeholder: 'Nøkkelord å søke etter'
		},
		clear:{
			label: "Fjern",
			title: "Fjern kart"
		},
		share:{
			label: "Del kart:",
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