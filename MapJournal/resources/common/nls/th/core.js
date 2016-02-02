define(
	 ({
		commonCore: {
			common: {
				add: "เพิ่ม",
				edit: "แก้ไข",
				save: "จัดเก็บ",
				next: "ถัดไป",
				cancel: "ยกเลิก",
				back: "กลับ",
				apply: "นำไปใช้",
				close: "ปิด",
				open: "เปิด",
				start: "เริ่ม",
				loading: "กำลังโหลด",
				disabledAdmin: "คุณลักษณะนี้ได้ถูกปิดใช้งานโดยผู้ดูแลระบบ",
				width: "ความกว้าง",
				height: "ความสูง",
				create: "สร้าง",
				yes: "ใช่",
				no: "ไม่",
				mystories: "ก้_My Stories____ษฺ"
			},
			inlineFieldEdit: {
				editMe: "แก้ไขฉัน!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% สร้าง",
				buttonSaving: "การบันทึก",
				buttonSaved: "บันทึกแล้ว",
				buttonShare: "แบ่งปัน",
				buttonSettings: "การตั้งค่า",
				buttonHelp: "ช่วยเหลือ",
				buttonPreview: "ก้_View story____ษฺ",
				tooltipFirstSave: "ฟังก์ชั่นนี้ไม่สามารถใช้ได้จนกว่าโปรแกรมจะถูกบันทึกไว้",
				tooltipNotShared: "ฟังก์ชั่นนี้ไม่สามารถใช้ได้จนกว่าจะมีการประยุกต์ใช้ร่วมกัน",
				tooltipNotShared2: "ก้_Your story isn't shared, only you can access it_______________ษฺ.",
				noPendingChange: "ไม่มีการเปลี่ยนแปลง",
				unSavedChangePlural: "อยู่ระหว่างการเปลี่ยนแปลง",
				closeWithPendingChange: "คุณแน่ใจว่าจะต้องการที่จะยืนยันการดำเนินการนี้ การเปลี่ยนแปลงของคุณจะหายไป",
				saveError: "การบันทึกผิดพลาด กรุณาลองอีกครั้ง",
				status1: "เรื่องราวถูกแบ่งปัน แต่พบปัญหา",
				status2: "เรื่องราวยังไม่ถูกแบ่งปัน แต่พบปัญหา",
				status3: "เรื่องราวแบ่งปันสาธารณะ",
				status4: "เรื่องราวถูกแบ่งปันในองค์กรของคุณ",
				status5: "เรื่องราวเป็นส่วนตัว",
				status6: "เรื่องราวยังไม่ถูกบันทึก",
				checking: "กำลังตรวจสอบ",
				fix: "แก้ไข"
			},
			saveError: {
				title: "ผิดพลาดในการบันทึกเรื่องราว",
				err1Div1: "ไม่สามารถบันทึกเรื่องราวได้ เพราะคุณมีรายการอื่นที่ชื่อเหมือนกัน",
				err1Div2: "กรุณาแก้ไขชื่อเรื่องของเรื่องราวและบันทึก",
				btnOk: "แก้ไขชื่อของเรื่องราว"
			},
			saveErrorSocial: {
				title: "ก้_Social media sharing update_________ษฺ",
				panel1: "ก้_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ษฺ.",
				panel1tooltip: "ก้_By defining a title, summary and thumbnail image, your story will look like this_________________________ษฺ:",
				panel2:	"ก้_Which title would you like to use on social media________________ษฺ:",
				panel2q1: "ก้_Story title (recommended)_________ษฺ",
				panel2q1tooltip: "ก้_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ษฺ.",
				panel2q2: "ก้_Item title____ษฺ",
				panel3: "ก้_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ษฺ.",
				panel4: "ก้_Do not warn me again for this story____________ษฺ"
			},
			share: {
				shareTitle: "แบ่งปันเรื่องราว",
				preview: "แสดงตัวอย่าง",
				viewlive: "ก้_View story____ษฺ",
				btnPrivate: "ส่วนตัว",
				btnPrivateTooltip: "เฉพาะคุณสามารถมองเห็นเรื่องราวได้",
				btnOrg: "องค์กร",
				btnOrgTooltip: "เฉพาะสมาชิกในองค์กรของคุณสามารถมองเห็นเรื่องราวได้",
				btnPublic: "สาธารณะ",
				btnPublicTooltip: "ทุกคนสามารถมองเห็นเรื่องราว",
				loadingMessage: "ตรวจสอบปัญหาของเรื่องราว",
				viewToggle1: "แสดงเนื้อหาเรื่องราว",
				viewToggle2: "ปิดเนื้อหาเรื่องราว",
				socialize: "เข้าสังคม",
				statusPrivate: "เรื่องราวของคุณตั้งค่าเป็นส่วนตัว เฉพาะคุณสามารถดูได้",
				statusError: "พบปัญหาในเนื้อหาของคุณซึ่งผู้อ่านสามารถเห็นได้ชัด คุณสามารถตรวจสอบและแก้ไขได้ ดังนี้",
				statusNoErrPrivate: "แบ่งปันเรื่องราวของคุณเมื่อคุณพร้อม",
				mystoriesinvite: "จัดการเรื่องราวทั้งหมดของคุณ",
				notavailable1: "ขออภัย การแบ่งปันเรื่องราวของคุณจาก Builder ไม่สนับสนุนตั้งแต่โปรแกรมนี้ไม่ได้เป็นโฮสใน %ผลิตภัณฑ์%",
				notavailable2: "ขออภัย การแบ่งปันเรื่องราวของคุณจาก Builder ไม่สนับสนุนบนเวอร์ชั่นนี้ของ Portal for ArcGIS (จำเป็นต้องใช้ 10.4 หรือหลังจากนั้น)",
				notavailable3: "คุณสามารถแบ่งปันเรื่องราวจาก %ลิงค์%",
				notavailable4: "เรื่องราวของฉัน",
				notavailable5: "ก้_its item page_____ษฺ",
				notavailable6: "ขออภัย ฟีเจอร์นี้ไม่สนับสนุนอย่างสมบูรณ์ในโหมดของการพัฒนา ขึ้นอยู่กับเหตุการณ์ของคุณ ฟีเจอร์อาจจะถูกสนับสนุนเมื่อสร้าง",
				notavailable7: "ให้แน่ใจว่า ตรวจสอบที่ %เนื้อหาของฉัน% เพื่อยืนยันว่าแผนที่และชั้นข้อมูลที่ใช้ในเรื่องราวของคุณถูกแบ่งปันแล้ว",
				notavailable8: "เนื้อหาของฉัน",
				mystoriesinvite2: "ก้_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________ษฺ."
			},
			settings: {
				header: "การตั้งค่า",
				tabError: "กรุณาตรวจสอบความผิดพลาดในทุกๆ แถบ"
			},
			settingsLayout: {
				title: "ก้_Layout___ษฺ",
				explain: "คุณต้องการใช้รูปแบบโครงสร้างแบบใด?",
				explainInit: "คุณสามารถแก้ไขโครงร่างได้ตลอดเวลาจากการตั้งค่าที่กล่องโต้ตอบ",
				viewExample: "ดูเป็นตัวอย่างจริง"
			},
			settingsTheme: {
				title: "ก้_Theme___ษฺ"
			},
			settingsHeader: {
				title: "ก้_Header___ษฺ",
				logoEsri: "โลโก้ Esri",
				logoNone: "ไม่มีโลโก้",
				logoCustom: "แก้ไขโลโก้",
				logoCustomPlaceholder: "URL (มากสุด 250x50 พิกเซล)",
				logoCustomTargetPlaceholder: "คลิกผ่านลิ้ง",
				logoSocialExplain: "แก้ไขหัวของลิ้ง",
				logoSocialText: "ตัวหนังสือ",
				logoSocialLink: "ลิงก์",
				lblSmallHeader: "ใช้ส่วนบนที่มีขนาดกระทัดรัด (ไม่มีชื่อเรื่อง)"
			},
			header: {
				title: "ก้_Edit the title of your %TPL_NAME%___________ษฺ",
				subtitle: "แก้ไขเนื้อหาด้านล่างของคุณ %TPL_NAME%"
			}
		}
	})
);
