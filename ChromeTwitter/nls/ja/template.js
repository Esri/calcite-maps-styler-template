define(
   ({
  viewer: {
    main: {
      ownerText: "マップの参照元: ",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "説明"
    },
    errors: {
      createMap: "マップを作成できません",
      general: "エラー"
    }
  },
  tools: {
    tweets: {
    "screenName": "画面名",
    "signIn": "サイン イン",
    "switchAccount": "アカウントの切り替え",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "yyyy'年'M'月'd'日'",
    timePattern: "h:mma",
    reply: "返信",
    retweet:"リツイート",
    favorite:"お気に入り",
    label: "ツイート",
    title: "ツイート",
    error: "結果が見つかりませんでした。別の検索用語または位置を試してください。",
		search: {
			label: "検索",
			title: "Twitter を検索",
			placeholder: '検索キーワード'
		},
		clear: {
			label: "消去",
			title: "マップの消去"
		},
		share: {
			label: "マップの共有:",
			email:{
				title: "電子メール",
				label: "電子メール"
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
