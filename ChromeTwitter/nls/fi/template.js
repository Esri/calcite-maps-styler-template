define(
({
  viewer:{
    main:{
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Kuvaus"
    },
    errors:{
      createMap: "Karttaa ei voi luoda",
      general: "Virhe"
    }
  },
  tools:{
    tweets: {
    "screenName": "Nimi näytöllä",
    "signIn": "Kirjaudu sisään",
    "switchAccount": "Vaihda tiliä",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "p KKK vv",
    timePattern: "h:mma",
    reply: "Vastaa",
    retweet:"Tweettaa uudelleen",
    favorite:"Suosikki",
    label: "Tweetit",
    title: "Tweetit",
    error: "Tuloksia ei löytynyt, kokeile toista hakuehtoa tai sijaintia",
		search:{
			label: "Etsi",
			title: "Etsi Twitteristä",
			placeholder: 'Etsittävät avainsanat'
		},
		clear:{
			label: "Tyhjennä",
			title: "Tyhjennä kartta"
		},
		share:{
			label: "Jaa kartta:",
			email:{
				title: "Sähköposti:",
				label: "Sähköposti"
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