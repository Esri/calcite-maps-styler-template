define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Aprašas"
    },
    errors:{
      createMap: "Žemėlapio sukurti nepavyko",
      general: "Klaida"
    }
  },
  tools:{
    tweets: {
    "screenName": "Ekrano vardas",
    "signIn": "Prisijunkite",
    "switchAccount": "Perjungti paskyrą",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "yy MMM dd",
    timePattern: "hh:mm",
    reply: "Atsakyti",
    retweet:"Perskelbti Twitter pranešimą",
    favorite:"Mėgstamiausi",
    label: "Twitter pranešimai",
    title: "Twitter pranešimai",
    error: "Nieko nerasta, bandykite kitą paieškos žodį ar vietą",
		search:{
			label: "Ieškoti",
			title: "Ieškoti Twitter",
			placeholder: 'Raktažodžiai paieškai'
		},
		clear:{
			label: "Valyti",
			title: "Išvalyti žemėlapį"
		},
		share:{
			label: "Bendrinti žemėlapį:",
			email:{
				title: "El. paštas",
				label: "El. paštas"
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