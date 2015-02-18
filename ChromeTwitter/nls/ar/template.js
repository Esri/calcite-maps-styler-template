define(
   ({
  viewer: {
    main: {
      ownerText: "خريطة من: ",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "الوصف"
    },
    errors: {
      createMap: "يتعذر إنشاء الخريطة",
      general: "خطأ"
    }
  },
  tools: {
    tweets: {
    "screenName": "اسم الشاشة",
    "signIn": "تسجيل الدخول",
    "switchAccount": "حساب التبديل",
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
    reply: "الرد",
    retweet:"إعادة تغريد",
    favorite:"مُفضل",
    label: "تغريدات",
    title: "تغريدات",
    error: "لم يتم العثور على أية نتائج، استخدم مصطلح آخر للبحث أو موقع آخر",
		search: {
			label: "بحث",
			title: "البحث في تويتر",
			placeholder: 'المفاتيح الأساسية للبحث'
		},
		clear: {
			label: "مسح",
			title: "مسح الخريطة"
		},
		share: {
			label: "مشاركة الخريطة:",
			email:{
				title: "البريد الإلكتروني",
				label: "البريد الإلكتروني"
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
