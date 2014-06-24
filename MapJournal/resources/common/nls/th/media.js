define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "ก้_Media_ษฺ",
				lblSelect2: "ก้_Content_ษฺ",
				lblMap: "แผนที่",
				lblImage: "รูปภาพ",
				lblVideo: "วิดีโอ",
				lblExternal: "เว็บเพจ",
				disabled: "คุณลักษณะนี้ได้ถูกปิดใช้งานโดยผู้ดูแลระบบ",
				url: "ในการป้อนที่อยู่เว็บของภาพด้วยตนเอง",
				userLookup: "โหลดอัลบัม",
				notImplemented: "ยังไม่ได้ดำเนินการ"
			},
			imageSelector: {
				lblStep1: "เลือกการบริการ",
				lblStep2: "เลือกมีเดียของคุณ",
				lblStep3: "การตั้งค่า"
			},
			imageSelectorHome: {
				explain: "โหลดรูปภาพจากโซเชียลมีเดีย <br /> หรือตรงจาก URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "ชื่อผู้ใช้งาน",
				signInMsg2: "ไม่พบผู้ใช้งาน",
				loadingFailed: "โหดลผิดพลาด"
			},
			imageSelectorFacebook: {
				leftHeader: "ผู้ใช้เฟสบุค",
				rightHeader: "เพจเฟสบุค",
				pageExplain: "หน้าเฟสบุคเป็นที่นิยมสำหรับการแสดงแบรนด์สินค้าและผู้มีชื่อเสียง<b>esrigis</b>. คุณสามารถให้ชื่อเพจหลัง'/' ในหน้า URL ได้",
				pageInputLbl: "ชื่อเพจ",
				lookupMsgError: "ไม่พบหน้านี้"
			},
			imageSelectorPicasa: {
				userInputLbl: "อีเมล์  หรือ  Picasa/Google+ ID",
				signInMsg2: "ไม่พบชื่อบัญชี",
				signInMsg3: "ไม่มีแฟ้มภาพสาธารณะ",
				howToFind: "วิธีการค้นหา Picasa หรือ บัญชี ID Google+",
				howToFind2: "คัดลอกตัวเลขระหว่างลำดับที่หนึ่งและสอง  / ของ Picasa หรือ หน้า G+"
			},
			videoSelectorCommon: {
				check: "ก้_Check_ษฺ",
				notFound: "ก้_Video not found_ษฺ",
				found: "ก้_Video found_ษฺ",
				select: "ก้_Select this video_ษฺ"
			},
			videoSelectorHome: {
				other: "ก้_Other_ษฺ"
			},
			videoSelectorYoutube: {
				url: "ก้_URL of a Youtube video_ษฺ",
				pageInputLbl: "ชื่อผู้ใช้งาน",
				lookupMsgError: "ไม่พบผู้ใช้งาน",
				howToFind: "วิธีการค้นหาชื่อ YouTube",
				howToFind2: "ชื่อผู้ใช้ไม่แสดงอยู่ด้านล่างวิดีโอ",
				found: "ก้_Found_ษฺ",
				noData: "ไม่พบวิดีโอสาธารณะ"
			},
			videoSelectorVimeo: {
				url: "ก้_URL of a Vimeo video_ษฺ"
			},
			videoSelectorOther: {
				explain1: "ก้_Map Journal cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)._ษฺ",
				explain2: "ก้_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%._ษฺ",
				explain3: "ก้_Alternatively, if you want host the video yourself, you can create an HTML page that use a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%._ษฺ",
				webpage: "ก้_Web page feature_ษฺ"
			},
			webpageSelectorHome: {
				lblUrl: "ก้_Webpage URL_ษฺ",
				lblEmbed: "ก้_Embed code_ษฺ",
				lblOR: "ก้_OR_ษฺ",
				lblError1: "ก้_Error, clear one of the two input fields._ษฺ",
				lblError2: "ก้_Embed code can only contain one <iframe>_ษฺ"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "ก้_An image URL should start with http:// and end with .jpg or .png_ษฺ",
				lblLabel: "ก้_Image Caption_ษฺ",
				lblLabel1: "คำบรรยายภาพ",
				lblLabel2: "เลื่อนข้อความ",
				lblLabel3: "ไม่ใช่",
				lblLabelPH: "เพิ่มข้อความ...",
				lblMaximize: "ก้_Include a maximize button in the corner of the image_ษฺ",
				lblMaximizeHelp: "ก้_Recommended only for high quality photos_ษฺ",
				lblPosition: "ตำแหน่ง",
				lblPosition1: "ศูนย์กลาง",
				lblPosition2: "กรอก",
				lblPosition3: "พอดี",
				lblPosition4: "ยืด",
				lblPosition5: "ก้_Custom_ษฺ",
				tooltipDimension: "ก้_The value can be specified in 'px' or '%'_ษฺ",
				lblPosition2Explain: "(อาจจะตัด)",
				lblPosition3Explain: "(ไม่ตัด)",
				lblPosition3Explain2: "ก้_(width will always fit the panel)_ษฺ",
				lblPosition4Explain: "(อาจจะเบี้ยว)"
			},
			editorActionGeocode: {
				lblTitle: "ตำแหน่งของที่อยู่หรือสถานที่",
				mapMarkerExplain: "ผู้ใช้จะมองเห็นตัวชี้แผนที่เมื่อคลิกที่ลิ้ง"
			},
			editorActionMedia: {
				lblTitle: "เปลี่ยนเนื้อหาที่สือเวทีหลัก"
			},
			editorInlineMedia: {
				lblTitle: "เพิ่มภาพหรือวิดีโอ"
			}
		}
	})

);
