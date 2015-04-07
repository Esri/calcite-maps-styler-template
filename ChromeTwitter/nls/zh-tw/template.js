define(
   ({
  viewer: {
    main: {
      ownerText: "試_A map from_驗: ",
      scaleBarUnits: "試_english_驗" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "試_Description_驗"
    },
    errors: {
      createMap: "試_Unable to create map_驗",
      general: "試_Error_驗"
    }
  },
  tools: {
    tweets: {
    "screenName": "試_Screen name_驗",
    "signIn": "試_Sign in_驗",
    "switchAccount": "試_Switch account_驗",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "試_d MMM yy_驗",
    timePattern: "試_h:mma_驗",
    reply: "試_Reply_驗",
    retweet:"試_Retweet_驗",
    favorite:"試_Favorite_驗",
    label: "試_Tweets_驗",
    title: "試_Tweets_驗",
    error: "試_No results found, try another search term or location_驗",
		search: {
			label: "試_Search_驗",
			title: "試_Search Twitter_驗",
			placeholder: '試_Keywords to search_驗'
		},
		clear: {
			label: "試_Clear_驗",
			title: "試_Clear Map_驗"
		},
		share: {
			label: "試_Share Map_驗:",
			email:{
				title: "試_Email_驗",
				label: "試_Email_驗"
			},
			twitter: {
				title: "試_Twitter_驗",
				label: "試_Twitter_驗"
			},
			facebook: {
				title: "試_Facebook_驗",
				label: "試_Facebook_驗"
			}
		}
	 }
   }
})
);
