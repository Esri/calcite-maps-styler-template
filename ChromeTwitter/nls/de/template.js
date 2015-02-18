define(
   ({
  viewer: {
    main: {
      ownerText: "Eine Karte von: ",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Beschreibung"
    },
    errors: {
      createMap: "Karte kann nicht erstellt werden",
      general: "Fehler"
    }
  },
  tools: {
    tweets: {
    "screenName": "Name der Bildfläche",
    "signIn": "Melden Sie sich an,",
    "switchAccount": "Konto wechseln",
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
    reply: "Antworten",
    retweet:"Tweet weiterleiten",
    favorite:"Favorit",
    label: "Tweets",
    title: "Tweets",
    error: "Es wurden keine Ergebnisse gefunden. Versuchen Sie es mit einem anderen Suchbegriff oder einer anderen Position",
		search: {
			label: "Suchen",
			title: "Twitter durchsuchen",
			placeholder: 'Schlagwörter für die Suche'
		},
		clear: {
			label: "Löschen",
			title: "Karte löschen"
		},
		share: {
			label: "Karte freigeben:",
			email:{
				title: "E-Mail",
				label: "E-Mail"
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
