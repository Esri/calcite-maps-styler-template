define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "คำอธิบาย"
    },
    errors:{
      createMap: "ไม่สามารถสร้างแผนที่ได้",
      general: "ข้อผิดพลาด"
    }
  },
  tools:{
    tweets: {
    "screenName": "ชื่อที่ใช้แสดง",
    "signIn": "ลงชื่อเข้าใช้",
    "switchAccount": "เปลี่ยนบัญชีผู้ใช้",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "วัน เดือน ปี",
    timePattern: "ชั่วโมง",
    reply: "ตอบกลับ",
    retweet:"รีทวีต",
    favorite:"รายการโปรด",
    label: "ทวีต",
    title: "ทวีต",
    error: "ไม่พบผลลัพธ์ กรุณาใส่คำค้นหาหรือตำแหน่งใหม่",
		search:{
			label: "ค้นหา",
			title: "ค้นหาจากทวิตเตอร์",
			placeholder: 'คำสำคัญในการค้นหา'
		},
		clear:{
			label: "ลบ",
			title: "ลบแผนที่"
		},
		share:{
			label: "แชร์แผนที่:",
			email:{
				title: "อีเมล์",
				label: "อีเมล์"
			},
			twitter:{
				title: "ทวิตเตอร์",
				label: "ทวิตเตอร์"
			},
			facebook:{
				title: "เฟสบุค",
				label: "เฟสบุค"
			}
		}
	 }
   }
 })
);