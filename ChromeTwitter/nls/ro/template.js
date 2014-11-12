define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Descriere"
    },
    errors: {
      createMap: "Imposibil de creat harta",
      general: "Eroare"
    }
  },
  tools: {
    tweets: {
    "screenName": "Nume ecran",
    "signIn": "Autentificaţi-vă",
    "switchAccount": "Comutare cont",
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
    reply: "Răspuns",
    retweet:"Reluare tweet",
    favorite:"Favorit",
    label: "Tweets",
    title: "Tweets",
    error: "Nu a fost găsit niciun rezultat, încercaţi alt termen sau altă locaţie de căutare",
		search: {
			label: "Căutare",
			title: "Căutare pe Twitter",
			placeholder: 'Cuvinte cheie de căutat'
		},
		clear: {
			label: "Golire",
			title: "Golire hartă"
		},
		share: {
			label: "Partajare hartă:",
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
