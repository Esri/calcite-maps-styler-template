define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "描述"
    },
    errors: {
      createMap: "无法创建地图",
      general: "错误"
    }
  },
  tools: {
    tweets: {
    "screenName": "画面名称",
    "signIn": "登录",
    "switchAccount": "切换帐户",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "yyyy年MM月dd日",
    timePattern: "h:mma",
    reply: "回复",
    retweet:"转推",
    favorite:"收藏",
    label: "推文",
    title: "推文",
    error: "未找到任何结果，请尝试其他搜索词或位置",
		search: {
			label: "搜索",
			title: "搜索 Twitter",
			placeholder: '要搜索的关键词'
		},
		clear: {
			label: "清除",
			title: "清除地图"
		},
		share: {
			label: "共享地图:",
			email:{
				title: "电子邮件",
				label: "电子邮件"
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
