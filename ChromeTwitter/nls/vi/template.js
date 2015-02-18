define(
   ({
  viewer: {
    main: {
      ownerText: "Bản đồ từ: ",
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Mô tả"
    },
    errors: {
      createMap: "Không thể tạo bản đồ",
      general: "Lỗi"
    }
  },
  tools: {
    tweets: {
    "screenName": "Tên màn hình",
    "signIn": "Đăng nhập",
    "switchAccount": "Chuyển đổi tài khoản",
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
    reply: "Trả lời",
    retweet:"Đăng lại",
    favorite:"Yêu thích",
    label: "Bài đăng",
    title: "Bài đăng",
    error: "Không tìm thấy kết quả nào, hãy thử một thuật ngữ tìm kiếm hoặc vị trí khác",
		search: {
			label: "Tìm kiếm",
			title: "Tìm kiếm trên Twitter",
			placeholder: 'Từ khóa tìm kiếm'
		},
		clear: {
			label: "Xóa",
			title: "Xóa bản đồ"
		},
		share: {
			label: "Chia sẻ Bản đồ:",
			email:{
				title: "Email",
				label: "Email"
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
