define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Description"
    },
    errors: {
      createMap: "Impossible de créer la carte",
      general: "Erreur"
    }
  },
  tools: {
    tweets: {
    "screenName": "Nom d\’écran",
    "signIn": "Se connecter",
    "switchAccount": "Changer de compte",
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
    reply: "Répondre",
    retweet:"Retweeter",
    favorite:"Favori",
    label: "Tweets",
    title: "Tweets",
    error: "Aucun résultat trouvé, essayez un autre terme de recherche ou emplacement",
		search: {
			label: "Rechercher",
			title: "Rechercher dans Twitter",
			placeholder: 'Mots-clés à rechercher'
		},
		clear: {
			label: "Effacer",
			title: "Effacer la carte"
		},
		share: {
			label: "Partager la carte :",
			email:{
				title: "Adresse électronique",
				label: "Adresse électronique"
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
