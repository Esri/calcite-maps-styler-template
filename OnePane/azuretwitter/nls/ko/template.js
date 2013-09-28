define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "설명"
    },
    errors:{
      createMap: "맵을 생성할 수 없음",
      general: "오류"
    }
  },
  tools:{
    tweets: {
    "screenName": "화면 이름",
    "signIn": "로그인",
    "switchAccount": "계정 전환",
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
    reply: "회신",
    retweet: "리트윗",
    favorite: "즐겨찾기",
    label: "트윗",
    title: "트윗",
    error: "결과가 없습니다. 다른 검색어 또는 위치를 시도하세요.",
		search:{
			label: "검색",
			title: "Twitter 검색",
			placeholder: '검색 키워드'
		},
		clear:{
			label: "지우기",
			title: "맵 지우기"
		},
		share:{
			label: "맵 공유:",
			email:{
				title: "이메일",
				label: "이메일"
			},
			twitter:{
				title: "Twitter",
				label: "Twitter"
			},
			facebook:{
				title: "Facebook",
				label: "Facebook"
			}
		}
	 }
   }
 })
);