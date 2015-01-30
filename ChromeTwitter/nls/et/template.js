define(
   ({
  viewer: {
    main: {
      ownerText: "Š_A map from_ä: ",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Kirjeldus"
    },
    errors: {
      createMap: "Kaarti ei saa luua",
      general: "Viga"
    }
  },
  tools: {
    tweets: {
    "screenName": "Ekraani nimi",
    "signIn": "Logi sisse",
    "switchAccount": "Vaheta kontot",
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
    reply: "Vasta",
    retweet:"Edasta säuts",
    favorite:"Lemmik",
    label: "Säutsud",
    title: "Säutsud",
    error: "Tulemused puuduvad, proovige uut otsingusõna või asukohta",
		search: {
			label: "Otsi",
			title: "Otsi Twitter-is",
			placeholder: 'Otsingusõnad'
		},
		clear: {
			label: "Puhasta",
			title: "Puhasta kaart"
		},
		share: {
			label: "Jaga kaart:",
			email:{
				title: "e-mail",
				label: "E-mail"
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
