define(
   ({
  viewer: {
    main: {
      ownerText: "Χάρτης από: ",
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Περιγραφή"
    },
    errors: {
      createMap: "Δεν είναι δυνατή η δημιουργία χάρτη",
      general: "Σφάλμα"
    }
  },
  tools: {
    tweets: {
    "screenName": "Ψευδώνυμο",
    "signIn": "Είσοδος",
    "switchAccount": "Αλλαγή λογαριασμού",
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
    timePattern: "hh:mm",
    reply: "Απάντηση",
    retweet:"Retweet",
    favorite:"Αγαπημένο",
    label: "Tweet",
    title: "Tweet",
    error: "Δεν βρέθηκαν αποτελέσματα, δοκιμάστε άλλο όρο αναζήτησης ή άλλη τοποθεσία",
		search: {
			label: "Αναζήτηση",
			title: "Αναζήτηση στο Twitter",
			placeholder: 'Λέξεις-κλειδιά για αναζήτηση'
		},
		clear: {
			label: "Απαλοιφή",
			title: "Απαλοιφή χάρτη"
		},
		share: {
			label: "Κοινοποίηση χάρτη:",
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
