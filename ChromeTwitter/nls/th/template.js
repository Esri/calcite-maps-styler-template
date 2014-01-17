define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "ก้_Description_ษฺ"
    },
    errors:{
      createMap: "ก้_Unable to create map_ษฺ",
      general: "ก้_Error_ษฺ"
    }
  },
  tools:{
    tweets: {
    "screenName": "ก้_Screen name_ษฺ",
    "signIn": "ก้_Sign in_ษฺ",
    "switchAccount": "ก้_Switch account_ษฺ",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "ก้_d MMM yy_ษฺ",
    timePattern: "ก้_h:mma_ษฺ",
    reply: "ก้_Reply_ษฺ",
    retweet:"ก้_Retweet_ษฺ",
    favorite:"ก้_Favorite_ษฺ",
    label: "ก้_Tweets_ษฺ",
    title: "ก้_Tweets_ษฺ",
    error: "ก้_No results found, try another search term or location_ษฺ",
		search:{
			label: "ก้_Search_ษฺ",
			title: "ก้_Search Twitter_ษฺ",
			placeholder: 'ก้_Keywords to search_ษฺ'
		},
		clear:{
			label: "ก้_Clear_ษฺ",
			title: "ก้_Clear Map_ษฺ"
		},
		share:{
			label: "ก้_Share Map:_ษฺ",
			email:{
				title: "ก้_Email_ษฺ",
				label: "ก้_Email_ษฺ"
			},
			twitter:{
				title: "ก้_Twitter_ษฺ",
				label: "ก้_Twitter_ษฺ"
			},
			facebook:{
				title: "ก้_Facebook_ษฺ",
				label: "ก้_Facebook_ษฺ"
			}
		}
	 }
   }
 })
);