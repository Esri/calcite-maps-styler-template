define(
	 ({
		viewer: {
			common: {
				close: "ปิด"
			},
			loading: {
				long: "เริ่มต้นดำเนินเรื่องราว",
				long2: "ขอบคุณที่รอ",
				failButton: "โหลดเรื่องราวอีกครั้ง"
			},
			signin: {
				title: "ต้องการยอมรับ",
				explainViewer: "กรุณาเข้าระบบด้วยบัญชีบน %PORTAL_LINK% เพื่อเข้าใช้งานเรื่องราว",
				explainBuilder: "กรุณาลงชื่อด้วยบัญชีบน  %PORTAL_LINK% เพื่อปรับแต่งเรื่องราว"
			},
			errors: {
				boxTitle: "เกิดข้อผิดพลาด",
				invalidConfig: "การกำหนดค่าไม่ถูกต้อง",
				invalidConfigNoApp: "ข้อผิดพลาดร้ายแรง: เว็บแผนที่ระบุการใช้งานไม่ได้ระบุใน index.html",
				invalidConfigNoAppDev: "ก้_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ษฺ.",
				unspecifiedConfigOwner: "ไม่มีการกำหนดอำนาจในการปรับแต่ง",
				invalidConfigOwner: "เจ้าของเรื่องราวไม่ได้รับอนุญาต",
				createMap: "ไม่สามารถสร้างแผนที่ได้",
				invalidApp: "ข้อผิดพลาดร้ายแรง: โปรแกรมไม่สามารถโหลด",
				appLoadingFail: "มีางอย่างผิดปกติ, %TPL_NAME% โหลดไม่สมบูรณ์",
				notConfiguredDesktop: "เรื่องราวนี้ยังไม่ได้รับการปรับแต่ง",
				notConfiguredMobile: "ก้_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ษฺ.",
				notConfiguredMobile2: "ก้_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ษฺ.",
				notAuthorized: "คุณไม่ได้รับสิทธิ์ในการใช้งานเรื่องราว",
				notAuthorizedBuilder: "ก้_You are not authorized to use %TPL_NAME% builder________________ษฺ.",
				noBuilderIE: "ตัวสร้างที่ไม่ได้รับการสนับสนุนบน Internet Explorer ก่อนรุ่น %VERSION%  %UPGRADE%",
				noViewerIE: "เรื่องนี้ไม่ได้รับการสนับสนุนใน Internet Explorer รุ่นก่อน %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>กรุณาอัพเดทเบราว์เซอร์ของคุณ</a>.",
				mapLoadingFail: "เกิดข้อผิดพลาดบางอย่างขึ้น ทำให้แผนที่ไม่สามารถเปิดขึ้นได้ถูกต้อง",
				signOut: "ลงชื่อออก"
			},
			mobileInfo: {
				legend: "คำอธิบาย",
				description: "คำบรรยาย",
				lblLegendMobileError: "ขอโทษ ไม่มีสัญลักษณ์ปรากฏอยู่ กรุณาโหลดเรื่องราวอีกครั้ง",
				lblLegendMobileErrorExplain: "สัญลักษณ์ไม่สามารถใช้ได้เมื่ออุปกรณ์ถูกนำไปโหมดแนวตั้งหลังจากที่เรื่องราวถูกโหลด"
			},
			mobileFooter: {
				swipeInvite: "เลื่อนเพื่อเริ่มเรื่อง",
				lblNext: "ต่อไป",
				lblEnd: "คุณอ่านมาถึงตอนจบของเรื่องแล้ว"
			},
			headerFromCommon: {
				storymapsText: "A story map",
				builderButton: "แก้ไข",
				facebookTooltip: "แชร์ผ่าน Facebook",
				twitterTooltip: "แชร์ผ่าน Twitter",
				bitlyTooltip: "รับเป็นลิงค์สั้นๆ",
				templateTitle: "ตั้งค่าหัวเรื่องเทมเพลต",
				templateSubtitle: "ตั้งค่าชื่อรองของเทมเพลต",
				share: "แชร์",
				checking: "กำหลังตรวจสอบสาระในเรื่องราวของคุณ",
				fix: "ปรับปรุงประเด็นในเรื่องราวของคุณ",
				noerrors: "ไม่มีประเด็นที่ตรวจพบ",
				tooltipAutoplayDisabled: "ก้_This isn't available in autoplay mode____________ษฺ",
				notshared: "ก้_Story not shared______ษฺ"
			},
			overviewFromCommon: {
				title: "ภาพรวมของแผนที่"
			},
			legendFromCommon: {
				title: "คำอธิบาย"
			},
			shareFromCommon: {
				copy: "คัดลอก",
				copied: "คัดลอก",
				open: "เปิด",
				embed: "ฝังลงในเว็บไซต์",
				embedExplain: "ใช้ HTML โค้ดตามด้านล่างนี้เพื่อฝังเรื่องราวในหน้าเว็บ",
				size: "ขนาด (กว้าง/สูง):",
				autoplayLabel: "ก้_Autoplay mode_____ษฺ",
				autoplayExplain1: "ก้_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ษฺ.",
				autoplayExplain2: "ก้_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ษฺ.",
				linksupdated: "ก้_Links updated_____ษฺ!"
			},
			locatorFromCommon: {
				error: "ที่ตั้งไม่สามารถใช้งานได้"
			}
        }
    })
);