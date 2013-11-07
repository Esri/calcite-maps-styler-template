define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Popis"
    },
    errors:{
      createMap: "Nelze vytvořit mapu",
      general: "Chyba"
    }
  },
  tools:{
    tweets: {
    "screenName": "Zobrazované jméno",
    "signIn": "Přihlásit",
    "switchAccount": "Přepnout účet",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "d MMM rr",
    timePattern: "h:mma",
    reply: "Odpovědět",
    retweet:"Retweetnout",
    favorite:"Oblíbené",
    label: "Tweety",
    title: "Tweety",
    error: "Nebyly nalezeny žádné výsledky, zkuste změnit hledaný výraz nebo umístění.",
		search:{
			label: "Hledat",
			title: "Prohledat Twitter",
			placeholder: 'Klíčová slova pro hledání'
		},
		clear:{
			label: "Vyprázdnit",
			title: "Vyprázdnit mapu"
		},
		share:{
			label: "Sdílet mapu:",
			email:{
				title: "E-mail",
				label: "E-mail"
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