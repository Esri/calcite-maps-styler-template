define(
   ({
  viewer: {
    main: {
      ownerText: "地圖來自: ",
      scaleBarUnits: "英語" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "描述"
    },
    errors: {
      createMap: "無法建立地圖",
      general: "錯誤"
    }
  },
  tools: {
    tweets: {
    "screenName": "螢幕名稱",
    "signIn": "登錄",
    "switchAccount": "切換帳戶",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "年月日",
    timePattern: "h:mma",
    reply: "回覆",
    retweet:"轉推",
    favorite:"最愛",
    label: "推文",
    title: "推文",
    error: "未找到任何結果，請嘗試其他搜尋詞彙或位置",
		search: {
			label: "搜尋",
			title: "搜尋 Twitter",
			placeholder: '要搜尋的關鍵字'
		},
		clear: {
			label: "清除",
			title: "清除地圖"
		},
		share: {
			label: "分享地圖:",
			email:{
				title: "電子郵件",
				label: "電子郵件"
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
