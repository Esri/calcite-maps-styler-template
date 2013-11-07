define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "תיאור"
    },
    errors:{
      createMap: "לא ניתן ליצור מפה",
      general: "שגיאה"
    }
  },
  tools:{
    tweets: {
    "screenName": "שם מסך",
    "signIn": "התחבר",
    "switchAccount": "החלף חשבון",
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
    reply: "מענה",
    retweet:"ציוץ חוזר",
    favorite:"מועדף",
    label: "ציוצים",
    title: "ציוצים",
    error: "לא נמצאו תוצאות, נסה חיפוש נוסף באמצעות ביטוי או מיקום אחר",
		search:{
			label: "חפש",
			title: "חפש בטוויטר",
			placeholder: 'מילות מפתח לחיפוש'
		},
		clear:{
			label: "נקה",
			title: "נקה מפה"
		},
		share:{
			label: "שתף מפה:",
			email:{
				title: "Email",
				label: "Email"
			},
			twitter:{
				title: "טוויטר",
				label: "טוויטר"
			},
			facebook:{
				title: "פייסבוק",
				label: "פייסבוק"
			}
		}
	 }
   }
 })
);