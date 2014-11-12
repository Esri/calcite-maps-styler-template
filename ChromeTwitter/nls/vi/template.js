define(
({
  viewer:{
    main:{
      scaleBarUnits: "á»‡_english_á»" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "á»‡_Description_á»"
    },
    errors:{
      createMap: "á»‡_Unable to create map_á»",
      general: "á»‡_Error_á»"
    }
  },
  tools:{
    tweets: {
    "screenName": "á»‡_Screen name_á»",
    "signIn": "á»‡_Sign in_á»",
    "switchAccount": "á»‡_Switch account_á»",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "á»‡_d MMM yy_á»",
    timePattern: "á»‡_h:mma_á»",
    reply: "á»‡_Reply_á»",
    retweet:"á»‡_Retweet_á»",
    favorite:"á»‡_Favorite_á»",
    label: "á»‡_Tweets_á»",
    title: "á»‡_Tweets_á»",
    error: "á»‡_No results found, try another search term or location_á»",
		search:{
			label: "á»‡_Search_á»",
			title: "á»‡_Search Twitter_á»",
			placeholder: 'á»‡_Keywords to search_á»'
		},
		clear:{
			label: "á»‡_Clear_á»",
			title: "á»‡_Clear Map_á»"
		},
		share:{
			label: "á»‡_Share Map_á»:",
			email:{
				title: "á»‡_Email_á»",
				label: "á»‡_Email_á»"
			},
			twitter:{
				title: "á»‡_Twitter_á»",
				label: "á»‡_Twitter_á»"
			},
			facebook:{
				title: "á»‡_Facebook_á»",
				label: "á»‡_Facebook_á»"
			}
		}
	 }
   }
 })
);