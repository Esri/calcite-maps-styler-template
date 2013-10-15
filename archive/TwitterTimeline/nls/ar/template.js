define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "البحث في تويتر"
    },
    errors:{
      createMap: "يتعذر إنشاء الخريطة",
      general: "خطأ"
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
      datePattern: "MMMM d, h:mm a",
      timeRange: "<b> تغريدات من:</b> ${start_time} إلى ${end_time}"
    },
    tweets: {
        "screenName": "اسم الشاشة",
        "signIn": "تسجيل الدخول",
        "switchAccount": "حساب التبديل",
        label: "تغريدات",
        title: "تغريدات",
        status: "جارِ إحضار التغريدات وإنشاء مخطط زمني...",
        error: "لم يتم العثور على أية نتائج",
        datePattern: "d MMM yy",
        timePattern: "h:mma",
		search:{
			label: "بحث",
			title: "البحث في تويتر",
			placeholder: "البحث في تويتر باستخدام الكلمات الأساسية"
		},
		clear:{
			label: "مسح",
			title: "مسح الخريطة"
		}
			
	 }
    }
})
);