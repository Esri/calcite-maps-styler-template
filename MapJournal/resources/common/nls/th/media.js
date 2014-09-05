define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "สื่อ",
				lblSelect2: "เนื้อหา",
				lblMap: "แผนที่",
				lblImage: "รูปภาพ",
				lblVideo: "วิดีโอ",
				lblExternal: "เว็บเพจ",
				disabled: "คุณลักษณะนี้ได้ถูกปิดใช้งานโดยผู้ดูแลระบบ",
				url: "ในการป้อนที่อยู่เว็บของภาพด้วยตนเอง",
				userLookup: "โหลดอัลบัม",
				notImplemented: "ยังไม่ได้ดำเนินการ",
				noData: "ก้_No public album found_ษฺ"
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
				howToFind: "วิธีการค้นหา Picasa หรือ บัญชี ID Google+",
				howToFind2: "คัดลอกตัวเลขระหว่างลำดับที่หนึ่งและสอง  / ของ Picasa หรือ หน้า G+"
			},
			videoSelectorCommon: {
				check: "ตรวจสอบ",
				notFound: "ไม่พบวิดีโอ",
				found: "พบวิดีโอ",
				select: "เลือกวิดีโอนี้"
			},
			videoSelectorHome: {
				other: "อื่นๆ"
			},
			videoSelectorYoutube: {
				url: "URL ของวิดีโอจากยูทูบ",
				pageInputLbl: "ชื่อผู้ใช้งาน",
				lookupMsgError: "ไม่พบผู้ใช้งาน",
				howToFind: "วิธีการค้นหาชื่อ YouTube",
				howToFind2: "ชื่อผู้ใช้ไม่แสดงอยู่ด้านล่างวิดีโอ",
				found: "พบ",
				noData: "ก้_No public videos found_ษฺ"
			},
			videoSelectorVimeo: {
				url: "URL ของวิดีโอจาก Vimeo"
			},
			videoSelectorOther: {
				explain1: "ก้_The Map Journal cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)._ษฺ",
				explain2: "วิดีโอออนไลน์บริการโฮสติ้งส่วนมากมีคุณสมบัติที่คุณจะต้องไปหาตัวเลือกที่จะฝังวิดีโอคัดลอกโค้ดที่กำหนดและใช้ %WEBPAGE%",
				explain3: "ก้_Alternatively, if you want host the video yourself, you can create an HTML page that uses a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%._ษฺ",
				webpage: "ฟีเจอร์ของหน้าเว็บ"
			},
			webpageSelectorHome: {
				lblUrl: "เว็บเพจ URL",
				lblEmbed: "รหัสที่ฝัง",
				lblOR: "หรือ",
				lblError1: "ข้อผิดพลาด ยกเลิกหนึ่งในสองฟิลด์ที่นำเข้า",
				lblError2: "ก้_Embed code can only contain one %IFRAMETAG%_ษฺ",
				configure: "ก้_Configure_ษฺ"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "URL ของรูปภาพควรเริ่มต้นด้วย http:// และลงท้ายด้วย .jpg หรือ .png",
				lblURLError: "ก้_This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work._ษฺ",
				lblURLCheck: "ก้_Checking image..._ษฺ",
				lblLabel: "คำอธิบายรูปภาพ",
				lblLabel1: "คำบรรยายภาพ",
				lblLabel2: "เลื่อนข้อความ",
				lblLabel3: "ไม่ใช่",
				lblLabelPH: "เพิ่มข้อความ...",
				lblMaximize: "รวมถึงปุ่มขยายที่อยู่บริเวณมุมของรูป",
				lblMaximizeHelp: "แนะนำรูปภาพที่มีความละเอียดสูงเท่านั้น",
				lblPosition: "ตำแหน่ง",
				lblPosition1: "ศูนย์กลาง",
				lblPosition2: "กรอก",
				lblPosition3: "พอดี",
				lblPosition4: "ยืด",
				lblPosition5: "ปรับแต่ง",
				tooltipDimension: "ระบุค่าด้วย px หรือ %",
				tooltipDimension2: "ก้_The value has to be specified in 'px'_ษฺ",
				lblPosition2Explain: "(อาจจะตัด)",
				lblPosition3Explain: "(ไม่ตัด)",
				lblPosition3Explain2: "(ความกว้างจะต้องพอดีกับแผงข้อมูล)",
				lblPosition4Explain: "(อาจจะเบี้ยว)",
				unloadLbl: "ก้_Unload when reader navigates away to different section_ษฺ",
				unloadHelp: "ก้_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away to a different section. Uncheck it for example to keep a soundtrack playing as the reader advances through the journal.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to that section._ษฺ"
			},
			editorActionGeocode: {
				lblTitle: "ตำแหน่งของที่อยู่หรือสถานที่",
				mapMarkerExplain: "ผู้ใช้จะมองเห็นตัวชี้แผนที่เมื่อคลิกที่ลิ้ง"
			},
			editorActionMedia: {
				lblTitle: "เปลี่ยนเนื้อหาที่สือเวทีหลัก"
			},
			editorInlineMedia: {
				lblTitle: "ก้_Insert an image, video or web page_ษฺ"
			}
		}
	})

);
