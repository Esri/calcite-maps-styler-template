define(
   ({
  viewer: {
    main: {
      ownerText: "Karte no: ",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Apraksts"
    },
    errors: {
      createMap: "Nevar izveidot karti",
      general: "Kļūda"
    }
  },
  tools: {
    tweets: {
    "screenName": "Segvārds",
    "signIn": "Pierakstīties",
    "switchAccount": "Pārslēgt kontu",
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
    reply: "Atbilde",
    retweet:"Retvīts",
    favorite:"Favorīts",
    label: "Tvīti",
    title: "Tvīti",
    error: "Rezultāts nav atrasts, mēģiniet citu meklējamo vārdu vai izvietojumu",
		search: {
			label: "Meklēt",
			title: "Meklē Twitter",
			placeholder: 'Atslēgvārdi, lai meklētu'
		},
		clear: {
			label: "Notīrīt",
			title: "Notīrīt karti"
		},
		share: {
			label: "Koplieto karti:",
			email:{
				title: "Epasts",
				label: "Epasts"
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
