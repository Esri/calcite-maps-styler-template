define(
	 ({
		viewer: {
			loading: {
				step1: "ก้_LOADING STORY_____ษฺ",
				step2: "กำลังโหลดข้อมูล",
				step3: "กำลังเริ่มต้นทำงาน",
				fail: "ขออภัย โหลด Swipe ล้มเหลว",
				loadBuilder: "กำลังเปลี่ยนไปที่โหมดการสร้าง",
				redirectSignIn: "กลับไปยังหน้าที่ลงชื่อใช้",
				redirectSignIn2: "(คุณจะเปลี่ยนหน้าต่างนี้หลังจากลงชื่อเข้าใช้)",
				failButton: "ลองใหม่"
			},
			errors: {
				boxTitle: "เกิดข้อผิดพลาด",
				portalSelf: "ข้อผิดพลาดร้ายแรง: การปรับแต่งสารบัญข้อมูล",
				invalidConfig: "เกิดข้อผิดพลาด: การปรับแต่งไม่ถูกต้อง",
				invalidConfigNoWebmap: "เกิดข้อผิดพลาด: การปรับแต่งไม่ถูกต้อง (ไม่ได้ระบุเว็บแมพ)",
				createMap: "ไม่สามารถสร้างแผนที่ได้",
				invalidApp: "ก้_Fatal error: The story cannot be loaded_____________ษฺ",
				initMobile: "ขอต้อนรับสู่ Swipe Web Application ยังไม่มีการปรับแต่งแอพพลิเคชันและไม่รับรองโหมดการสร้างบนอุปกรณ์เคลื่อนที่",
				initMobile2: "ก้_The Swipe builder is not supported at this display size__________________ษฺ.",
				noBuilderIE8: "Internet Explorer ก่อนเวอร์ชัน 9 ไม่รองรับโหมดการสร้างของ Swipe",
				noLayerView: "ขอต้อนรับสู่ Swipe Web Application.<br />ยังไม่มีการปรับแต่งแอพพลิเคชัน",
				appSave: "ก้_Error saving the web story_________ษฺ",
				mapSave: "เกิดข้อผิดพลาดในการบันทึกเว็บแมพ",
				notAuthorized: "ก้_You are not authorized to access this story______________ษฺ",
				conflictingProjectionsTitle: "การถ่ายภาพที่ไม่สัมพันธ์กัน",
				conflictingProjections: "Swipe ไม่รองรับเว็บแมพที่มีโปรเจคชันต่างกัน กรุณาไปที่การตั้งค่าและเลือกใช้เว็บแมพที่มีโปรเจคชันเดียวกับเว็บแมพแรก",
				cpButton: "ปิด",
				unspecifiedConfigOwner: "ก้_Authorized owner hasn't been configured_____________ษฺ.",
				invalidConfigOwner: "ก้_Story owner is not authorized__________ษฺ."
			},
			mobileView: {
				hideIntro: "ซ่อนคำอธิบายการเริ่มต้นใช้งาน",
				navLeft: "คำอธิบายสัญลักษณ์",
				navMap: "แผนที่",
				navRight: "ข้อมูล"
			},
			desktopView: {
				storymapsText: "แผนที่เรื่องราว",
				builderButton: "เปลี่ยนไปยังโหมดการสร้าง",
				facebookTooltip: "แชร์ผ่าน Facebook",
				twitterTooltip: "แชร์ผ่าน Twitter",
				bitlyTooltip: "รับเป็นลิงค์สั้นๆ"
			}
		},
		builder: {
			builder: {
				panelHeader: "ก้_STORY CONFIGURATION_______ษฺ",
				buttonSave: "บันทึก",
				buttonHelp: "ตัวช่วย",
				buttonShare: "แชร์",
				buttonDiscard: "ยกเลิก",
				buttonSettings: "การตั้งค่า",
				buttonView: "โหมดการดู",
				buttonItem: "เปิดเว็บแอพพลิเคชั่น",
				noPendingChange: "ไม่มีการเปลี่ยนแปลง",
				unSavedChangeSingular: "มี 1 การเปลี่ยนแปลงที่ยังไม่ได้ถูกบันทึก",
				unSavedChangePlural: "การเปลี่ยนแปลงที่ยังไม่ได้ถูกบันทึก",
				popoverDiscard: "คุณไม่ต้องการบันทึกการเปลี่ยนแปลงใดๆ?",
				yes: "ใช่",
				no: "ไม่ใช่",
				popoverOpenViewExplain: "เมื่อเปิดหน้าต่างแสดงผล การแก้ไขใดๆที่ไม่ได้รับการบันทึกจะหายไป",
				popoverOpenViewOk: "ตกลง",
				popoverOpenViewCancel: "ยกเลิก",
				popoverSaveWhenDone: "อย่าลืมบันทึกข้อมูลเมื่อคุณทำงานเสร็จ",
				closeWithPendingChange: "คุณต้องการยืนยันการกระทำนี้? การแก้ไขเปลี่ยนแปลงใดๆจะสูญหายไป",
				gotIt: "ตกลง",
				savingApplication: "ก้_Saving story_____ษฺ",
				saveSuccess: "ก้_Story saved successfully________ษฺ",
				saveError: "การบันทึกไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
				saveError2: "การบันทึกผิดพลาด เนื่องจาก html แท๊กไม่ถูกต้อง ในชื่อหรือคำอธิบาย",
				saveError3: "หัวเรื่องไม่สามารถปล่อยว่างได้",
				signIn: "กรุณาลงชื่อเข้าใช้",
				signInTwo: "ก้_to save the story______ษฺ."
			},
			header:{
				editMe: "แก้ไขฉัน!",
				templateTitle: "ตั้งชื่อโครงร่าง",
				templateSubtitle: "ตั้งชื่อโครงร่างรอง"
			},
			settings: {
				settingsHeader: "ก้_Story settings_____ษฺ",
				modalCancel: "ยกเลิก",
				modalApply: "ใช้งาน"
			},
			settingsColors: {
				settingsTabColor: "หัวข้อ",
				settingsColorExplain: "เลือกธีมของแอพฯ หรือเลือกสีด้วยตัวเอง",
				settingsLabelColor: "สีพื้นหลังของเฮดเดอร์และแถบด้านข้าง"
			},
			settingsHeader: {
				settingsTabLogo: "เฮดเดอร์",
				settingsLogoExplain: "เลือกรูปโลโก้เฮดเดอร์ (ขนาดไม่เกิน 250 x 50px).",
				settingsLogoEsri: "ตราสัญลักษณ์ Esri",
				settingsLogoNone: "ไม่มีตราสัญลักษณ์",
				settingsLogoCustom: "ตราสัญลักษณ์ที่ปรับแต่เอง",
				settingsLogoCustomPlaceholder: "URL รูปภาพ",
				settingsLogoCustomTargetPlaceholder: "คลิกที่ลิงก์",
				settingsLogoSocialExplain: "ปรับแต่งลิ้งด้านขวาบนในส่วนเฮดเดอร์",
				settingsLogoSocialText: "ข้อความ",
				settingsLogoSocialLink: "ลิงก์",
				settingsLogoSocialDisabled: "ข้อมูลนี้ไม่ได้รับอนุญาตจากผู้ดูแลให้ใช้งาน"
			},
			settingsExtent: {
				settingsTabExtent: "ขอบเขตแผนที่",
				settingsExtentExplain: "กำหนดค่าแรกของขอบเขตแผนที่ผ่านแผนที่ด้านล่าง",
				settingsExtentExplainBottom: "ขอบเขตแผนที่ที่คุณกำหนดจะเป็นค่าแรกของแผนที่ แต่หากคุณใช้แผนที่เป็น Swipe ขอบเขตที่ถูกกำหนดไว้นี้จะไม่ถูกนำมาใช้",
				settingsExtentDateLineError: "ขอบเขตที่กำหนดไม่สามารถเกินกว่าเส้นเมอริเดียนที่ลองจิจูด 180ï¿½ ได้",
				settingsExtentDateLineError2: "การสร้างขอบเขตแผนที่มีข้อผิดพลาด",
				settingsExtentDrawBtn: "วาดขอบเขตแผนที่ใหม่",
				settingsExtentModifyBtn: "แก้ไขขอบเขตแผนที่",
				settingsExtentApplyBtn: "นำไปใช้กับแผนที่หลัก",
				settingsExtentUseMainMap: "ใช้ขอบเขตของแผนที่หลัก"
			}
        },
		swipe: {
			mobileData: {
				noData: "ไม่มีข้อมูล!",
				noDataExplain: "คลิกที่แผนที่เพื่อเลือกฟีเจอร์และกลับมาที่นี่",
				noDataMap: "ไม่มีข้อมูลสำหรับแผนที่นี้",
				noPopup: "ไม่พบป็อปอัพสำหรับข้อมูลนี้"
			},
			mobileLegend: {
				noLegend: "ไม่มีคำอธิบายสัญลักษณ์"
			},
			swipeSidePanel: {
				editTooltip: "ตั้งค่าคำอธิบายที่แถบด้านข้าง",
				editMe: "แก้ไขฉัน!",
				legendTitle: "คำอธิบายสัญลักษณ์"
			},
			infoWindow: {
				noFeature: "ไม่มีข้อมูล",
				noFeatureExplain: "คลิกที่แผนที่เพื่อเลือกฟีเจอร์"
			},
			settingsLayout: {
				settingsTabLayout: "แบบ Swipe",
				settingsLayoutExplain: "เลือกรูปแบบสำหรับเครื่องมือ Swipe",
				settingsLayoutSwipe: "แถบแนวตั้ง",
				settingsLayoutSpyGlass: "แว่นขยาย",
				settingsLayoutSelected: "โครงร่างที่เลือก",
				settingsLayoutSelect: "เลือกโครงร่างนี้",
				settingsSaveConfirm: "ก้_Some of your changes require that you save and reload the story____________________ษฺ"
			},
			settingsDataModel: {
				settingsTabDataModel: "ประเภท Swipe",
				settingsDataModelExplainSwipe: "คุณต้องการให้ผู้ใช้ Swipe อะไร?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "เลือกชั้นข้อมูลหรือเว็บแมพที่ต้องการให้ปรากฎในกล้องส่องทางไกล",
				settingsDataModelOneMap: "ชั้นข้อมูลในเว็บแมพ",
				settingsDataModel1Explain: "เลือกชั้นข้อมูลที่คุณต้องการ Swipe",
				settingsDataModel1Warning: "หากชั้นข้อมูลที่ต้องการถูกทับด้วยชั้นข้อมูลอื่น Swipe จะไม่มีผลต่อชั้นข้อมูลนั้น",
				settingsDataModel1SpyGlassExplain: "เลือกชั้นข้อมูลที่ต้องการให้แสดงในกล้องส่องทางไกล",
				settingsDataModelTwoMaps: "เว็บแมพ 2 อัน",
				settingsDataModelLayerIds: "ID ของชั้นข้อมูลเว็บแมพ",
				settingsDataModelSelected: "ประเภทที่เลือก",
				settingsDataModelWebmapSwipeId1: "ID ของเว็บแมพทางด้านขวา",
				settingsDataModelWebmapSwipeId2: "ID ของเว็บแมพทางด้านซ้าย",
				settingsDataModelWebmapGlassId1: "ID ของเว็บแมพหลัก",
				settingsDataModelWebmapGlassId2: "ID กล้องส่องทางไกลเว็บแมพ",
				settingsDataModelSelect: "เลือกประเภทนี้",
				settingsDataModel2Explain: "Swipe คู่กับอีกเว็บแมพ",
				settingsDataModel2SpyGlassExplain: "แสดงอีกเว็บแมพหนึ่ง",
				settingsDataModel2HelpTitle: "ID ของเว็บแมพอยู่ที่ไหน?",
				settingsDataModel2HelpContent: "คัดลอกและวางหลังสัญลักษณ์ = ในช่อง URL ของเว็บแมพ",
				switchMaps: "สลับแผนที่",
				browseWebMaps: "บราวซ์เว็บแมพ"
			},
			settingsLegend: {
				settingsTabLegend: "โครงร่างแอพฯ",
				settingsLegendExplain: "ก้_Select the layout settings_________ษฺ.",
				settingsLegendEnable: "เปิดแสดงคำอธิบายสัญลักษณ์",
				settingsDescriptionEnable: "เปิดแสดงคำอธิบาย",
				settingsBookmarksEnable: "เปิดใช้งาน Swipe",
				settingsPopupDisable: "เปิดแสดงป็อปอัพ",
				settingsLocationSearchEnable: "เปิดใช้การค้นหาตำแหน่ง",
				settingsGeolocatorEnable: "เปิดใช้งาน Geolocator",
				settingsLegendHelpContent: "ในการปรับแต่งส่วนประกอบของคำอธิบายสัญลักษณ์",
				settingsSeriesHelpContent: "ชุด Swipe เป็นตัวช่วยนำผู้ใช้ไปสู่ข้อมูลสำคัญและแสดงชื่อและคำอธิบายในแถบด้านข้าง บุ๊คมาร์คของเว็บแมพนั้นๆจะถูกนำเข้ามาใช้สร้างแถบนี้ การปิดการใช้งานตัวช่วยนี้จะผิดเพียงแถบคำสั่ง แต่ยังสามารถปรับแต่งให้นำกลับมาใช้งานได้ในอนาคต",
				settingsSeriesHelpContent2: "ชุด Swipe ให้คุณสร้างและแก้ไขรายชื่อตำแหน่งข้อมูลพร้อมชือ หากเว็บแมพของคุณมีบุ๊คมาร์ค บุ๊คมาร์คเหล่านั้นจะถูกนำมาแสดงด้วย สามารถยกเลิกการใช้งาน Swipe นี้ได้ และสามารถแก้ไขให้นำกลับมาใช้งานได้อีกภายหลัง",
				settingsSeriesHelpLink: "ดูตัวอย่างแอพพลิเคชันที่ใช้ Swipe ได้ที่นี่",
				preview: "ดูตัวอย่าง UI",
				settingsLocateButtonExplain: "ความสามารถนี้รองรับบนอุปกรณ์เคลื่อนที่ทั่วไปและบราวเซอร์บนเดสก์ท็อปด้วย (รวมทั้ง Internet Explorer 9+)",
				settingsLocateButton: "เปิดใช้งานปุ่ม ค้นหา บนบราวเซอร์ที่รองรับ",
				settingsAddressSearch: "เปิดใช้เครื่องมือค้นหาที่อยู่"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "ป็อปอัพ",
				settingsSwipePopupExplain: "ปรับแต่งเฮดเดอร์ของป็อปอัพเพื่อช่วยให้ผู้ใช้เข้าใจแผนที่ประกอบกับป็อปอัพ",
				settingsSwipePopupSwipe1: "แผนที่ทางด้านซ้าย",
				settingsSwipePopupSwipe2: "แผนที่ทางด้านขวา",
				settingsSwipePopupGlass1: "แผนที่หลัก",
				settingsSwipePopupGlass2: "แผนที่กล้องส่องทางไกล",
				settingsSwipePopupTitle: "หัวข้อเฮดเดอร์",
				settingsSwipePopupColor: "สีของเฮดเดอร์"
			},
			initPopup: {
				initHeader: "ยินดีต้อนรับสู่ การสร้างแผนที่แบบ Swipe/Spyglass",
				modalNext: "ต่อไป",
				modalPrev: "ก่อนหน้า",
				modalApply: "เปิด App"
			},
			seriesPanel: {
				title: "หัวข้อ",
				descr: "คำอธิบาย",
				discard: "ลบบุ๊คมาร์ค",
				saveExtent: "ตั้งค่าเนื้อหาบุ๊คมาร์ค",
				discardDisabled: "คุณไม่สามารถลบบุ๊คมาร์คนี้ออกได้ สามารถยกเลิกใช้งาน Swipe ได้ที่การตั้งค่า"
			},
			helpPopup: {
				title: "ตัวช่วย",
				close: "ปิด",
				tab1: {
					div1: "โครงร่างแบบ Swipe หรือ Spyglass ได้รับการออกแบบเพื่อใช้ในการเปรียบเทียบเว็บแมพ 2 ชิ้นที่อยู่แยกกัน หรือ ชั้นข้อมูล 2 ชั้นที่น่าสนใจที่อยู่บนเว็บแมพเดียว เว็บแอพพลิเคชั่นที่ง่ายต่อการใช้งานเพราะสามารถใช้กับเว็บบราวเซอร์ใดก็ได้ ผ่านทางอุปกรณ์สื่อสารใดก็ได้ ทั้งสมาร์ทโฟนและแท็บเล้ต",
					div2: "สำหรับข้อมูลเพิ่มเติมของโครงร่างแบบเลื่อน/แบบแว่นขยาย,รวมทั้งตัวอย่างต่างๆ ที่สร้างโดยผู้ใช้งาน, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> เข้าชมเว็บไซต์ Story Maps ได้</a>. คุณสามารถติดตามเราได้ทางทวิตเตอร์ <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "เรามีความต้องการที่จะได้ยินจากคุณ! ถ้าคุณมีคำถาม, ต้องการเพิ่มฟีเจอร์ใหม่, หรือคิดว่าคุณพบ bug โปรดชม <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "ก้_Story successfully saved________ษฺ",
				firstSaveHeader: "ก้_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________ษฺ.",
				firstSaveA1: "ถ้าคุณไม่ใช่สมาชิกของ ArcGIS Online หรือต้องการทางลัดในการเข้าถึงหน้าการยอมรับ คุณสามารถบันทึกตามลิงก์: %LINK1%",
				firstSaveA1bis: "ก้_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________ษฺ.",
				firstSaveQ2: "ก้_Is my story shared_______ษฺ?",
				firstSaveA2: "ก้_Currently your story is not shared. To share it, use the SHARE button______________________ษฺ.",
				shareTitle: "ก้_Share your story______ษฺ",
				sharePrivateHeader: "ก้_Your story is not shared, would you like to share it_________________ษฺ?",
				sharePrivateBtn1: "แบ่งปันสู่สาธารณะ",
				sharePrivateBtn2: "แบ่งปันด้วยองค์กรของฉัน",
				sharePrivateProgress: "การแบ่งปันอยู่ในดำเนินการ ...",
				sharePrivateErr: "การแบ่งปันผิดพลาด ลองอีกครั้ง หรือ",
				sharePrivateOk: "แบ่งปันอัพเดทสำเร็จ กำลังโหลด...",
				shareStatus1: "ก้_Story is not saved______ษฺ",
				shareStatus2: "ก้_Story is shared publicly________ษฺ",
				shareStatus3: "ก้_Story is shared within the organization_____________ษฺ",
				shareStatus4: "ก้_Story is not shared_______ษฺ",
				sharePreviewAsUser: "ตัวอย่าง",
				shareHeader1: "ก้_Your story is <strong>publicly accessible</strong>________________ษฺ.",
				shareHeader2: "ก้_Your story is accessible by your organization members (login is required)_______________________ษฺ.",
				shareLinkHeader: "ก้_Share the story with your audience___________ษฺ",
				shareLinkOpen: "เปิด",
				learnMore: "เรียนรู้เพิ่ม",
				shareQ1Opt1: "ก้_How do I keep the story private___________ษฺ?",
				shareQ1Opt2: "ก้_How do I keep the story private or share it publicly_________________ษฺ?",
				shareA1: "ใช้ %SHAREIMG% บน <a href='%LINK1%' target='_blank'>ในหน้าแอพพลิเคชั่น </a>.หากคุณไม่ต้องการแชร์เว็บแมพนี้ ใช้<a href='%LINK2%' target='_blank'>ในหน้าเว็บแมพ</a>.",
				shareA1bis: "ถ้าคุณไม่ต้องการที่จะแบ่งปัน , ใช้ <a href='%LINK1%' target='_blank'>ในหน้ารายการฟีเจอร์เซอร์วิส</a>.",
				shareQ2: "ก้_How do I edit the story later__________ษฺ?",
				shareQ2bis: "ฉันจะกลับไปยังหน้าการเขียนมุมองหน้าได้อย่างไร ?",
				shareA2div1: "ก้_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________ษฺ.",
				shareA2div2: "ก้_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________ษฺ:",
				shareQ3: "ข้อมูลของคุณเก็บไว้ที่ใด?",
				shareA3: "ก้_The story configuration is stored in this web application item</a>_____________________ษฺ.",
				shareWarning: "การแชร์ %WITH% ไม่สามารถทำได้ เพราะว่าคุณไม่ใช่เจ้าของข้อมูล <a href='%LINK%' target='_blank'>webmap</a>.",
 				shareWarningWith1: "โดยสาธารณะ",
 				shareWarningWith2: "โดยสาธารณะและสำหรับองค์กร"
			},
			directCreation: {
				header: "ยินดีต้อนรับสู่ การสร้างแผนที่แบบ Swipe/Spyglass",
				mapPickHeader: "ในการเริ่มต้น โปรดใส่เลขรหัสที่ถูกต้องของเว็บแมพ หรือใช้ปุ่มค้นหาเพื่อเรียกดูเว็บแมพต่างๆ",
				launchBuilder: "เริ่มใช้งานเครื่องมือสร้าง",
				chooseWebmapLbl: "เลือกเว็บแมพ...",
				explain2: "ในการสร้างโครงร่างแผนที่ Story Map แบบเลื่อนหรือแบบแว่นขยาย ให้ใช้ปุ่มด้านล่างเพื่อเลือกเว็บแมพที่มีอยู่แล้วของ ArcGIS Online ที่คุณต้องการจะใช้งาน นอกจากนี้ ยังสามารถวาง ID ของเว็บแมพลงบนค่าฟิลด์ด้านล่าง",
				explain3: "หากคุณต้องการใช้เว็บแมพ 2 ชิ้นในแผนที่ Story Map ของคุณ คุณจะพร้อมใช้งานเว็บแมพชิ้นที่สองได้เมื่อคุณเลือกตัวเลือกนั้นแล้ว",
				webmapPlaceholder: "ใส่รหัส ID เว็บแมพ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "องค์กรของฉัน",
					onlineLabel: "ArcGIS Online",
					contentLabel: "เนื้อหาของฉัน",
					favoritesLabel: "รายการโปรดของฉัน"
				},
				title: "เลือกเว็บแมพ",
				searchTitle: "ค้นหา",
				ok: "ตกลง",
				cancel: "ยกเลิก",
				placeholder: "พิมพ์คำค้นหา"
			}
		}
    })
);
