define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Twitter 搜索"
    },
    errors:{
      createMap: "无法创建地图",
      general: "错误"
    }
  },
  tools:{
     time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      datePattern: "MM月dd日 h:mm a",
      timeRange: "<b>推文来源:</b> ${start_time} 至 ${end_time}"
    },
    tweets: {
        "screenName": "画面名称",
        "signIn": "登录",
        "switchAccount": "切换帐户",
        label: "推文",
        title: "推文",
        status: "正在提取推文并生成时间轴...",
        error: "未找到任何结果",
        datePattern: "yyyy年MM月dd日",
        timePattern: "h:mma",
		search:{
			label: "搜索",
			title: "搜索 Twitter",
			placeholder: "按关键字搜索 Twitter"
		},
		clear:{
			label: "清除",
			title: "清除地图"
		}
			
	 }
    }
})
);