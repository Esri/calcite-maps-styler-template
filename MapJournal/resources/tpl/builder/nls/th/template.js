define(
	 ({
		builder: {
			layouts: {
				mainStage: "เวทีหลัก",
				sideTitle: "แถบเลื่อน",
				sideDescr: "รูปแบบสำหรับตัวอักษรเยอะๆสำหรับเรื่องราว ซึ่ง excels ได้รวมรูปของคุณ วิดีโอ และแผนที่ในรูปแบบข้อความที่ชัดเจน",
				floatTitle: "หน้าต่างลอยๆ",
				floatDescr: "โครงร่างที่ช่วยจัดวางข้อมูลแผนที่ให้น่าสนใจ ในขณะที่สามารถปรับแต่งข้อความในแผงข้อมูลให้บอกเล่าเรื่องราวได้ดียิ่งขึ้น"
			},
			common: {
				lblStatus1: "ตีพิมพ์",
				lblStatus2: "ดราฟ",
				lblStatus3: "ซ่อน"
			},
			settingsLayoutOptions: {
				title: "เงื่อนไขรูปแบบ",
				cfgLeft: "ซ้าย",
				cfgRight: "ขวา",
				cfgSmall: "เล็ก",
				cfgMedium: "กลาง",
				cfgLarge: "ใหญ่",
				socialLinksLabel: "การเชื่อมโยงที่แสดงร่วมกันที่ด้านล่างของแต่ละส่วน",
				socialLinksDescr: "ซึ่งจะช่วยให้ผู้อ่านที่จะอ้างอิงและส่งเสริมเฉพาะบางส่วนของของคุณ TPL_NAME%% ตัวอย่างเช่นถ้าคุณใช้ไอคอนหุ้นส่วนผู้อ่านจะได้ที่ดินที่ว่า% เฉพาะส่วน TPL_NAME% มากกว่าที่จุดเริ่มต้นของเรื่องราวของคุณ คุณผู้อ่านสามารถใช้การเชื่อมโยงสื่อสังคมในส่วนชื่อเรื่องที่จะส่งเสริม%% TPL_NAME ทั้งหมดของคุณ (แท็บหัว) และพวกเขามีที่ดินที่เริ่มต้นของ TPL_NAME%%"
			},
			initPopup: {
				title: "ยินดีต้อนรับสู่"
			},
			addEditPopup: {
				disabled: "ก้_Add Section is disabled because the maximum number of allowed sections has been reached._ษฺ",
				titleAdd: "เพิ่มส่วน",
				titleAddHome: "ก้_Add Home Section_ษฺ",
				titleEdit: "แก้ไขส่วน",
				step: "ขั้นตอน",
				stepMainStageExplain: "ก้_Main Stage Content_ษฺ",
				stepPanelExplain: "ก้_Content_ษฺ",
				stepMainStageNextTooltip: "เพิ่มหัวส่วนและเลือกรายการเวทีหลัก",
				step2NextTooltip: "เพิ่มหัวข้อส่วนและ%LAYOUT-TYPE% รายการ",
				stepNextTooltipNext: "ไปยังขั้นตอนต่อไป",
				stepNextTooltipAdd: "เพิ่มส่วน",
				firstAddExplain: "ก้_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ษฺ",
				firstAddLeanMore: "ก้_Learn More_ษฺ",
				titlePlaceholder: "หัวข้อส่วน..."
			},
			addEditViewText: {
				editorPlaceholder: "เพิ่มตัวอีกษร ลิ้ง และกราฟเล็กๆที่นี่",
				editorActionsTitle: "ดำเนินการเวทีหลัก",
				editorActionsHelpDescr: "ก้_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ษฺ"
			},
			organizePopup: {
				title: "องค์กร",
				lblHeader: "เลือกและวางข้อมูลบางส่วนเพื่อจัดการกับเนื้อหาของคุณ",
				lblColTitle: "หัวเรื่อง",
				lblColPubDate: "วันที่แชร์ข้อมูล",
				lblColStatus: "สถานะ",
				checkDisplayReverse: "ส่วนจอแสดงผลในลำดับที่กลับกัน",
				btnApplyWarning: "ก้_Confirm deletion of %NB% section(s)_ษฺ",
				deleteTooltip: "ลบทิ้ง",
				firstSectionExplain: "(ส่วนหน้าหลักไม่สามารถย้ายได้)"
			},
			exportData: {
				btn: "ก้_Export content_ษฺ",
				tooltip: "ก้_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._ษฺ"
			},
			help: {
				lblHelp: "ช่วยเหลือ",
				lblAdd: "เพิ่มส่วน",
				lblSettings: "การตั้งค่า",
				lblOrga: "รายการองค์กร",
				lblEdit: "แก้ไข",
				lblPublish: "แชร์",
				lblTips: "ก้_Tips_ษฺ",
				lblMore: "ต้องการเพิ่ม?",
				lblLink: "เยี่ยมชมเว็บไซย์แผนที่เรื่องราว",
				content1Div1: "คุณสามารถรวมความหลากหลายของรูปแบบที่เมื่อมีการสร้างเรื่องราวของคุณ<strong>% LAYOUT_TITLE% </ strong> โดยทั่วไปแล้วถือข้อความของคุณรูปภาพและวิดีโอในขณะที่แผนที่ของคุณมีแนวโน้มที่จะไปใน <strong> เวทีหลัก </ strong> อย่างไรก็ตาม% TPL_NAME% ช่วยให้คุณสามารถมีลักษณะภาพแผนภูมิและวิดีโอภายในเวทีหลักได้เป็นอย่างดี",
				content1Div2: "กำลังเพิ่มส่วนที่ช่วยให้คุณสามารถปรับแต่งการเล่าเรื่องผ่าน Storytelling ให้ดีขึ้น ในฐานะที่เป็นผู้อ่านผ่าน% ข้อความ LAYOUT_TITLE% ของแผนที่บนเวทีหลักสามารถเลื่อนหรือขยายไปยังจุดสำคัญหรือแผนที่ใหม่และภาพที่สามารถโหลดโดยอัตโนมัติเพื่อสนับสนุนข้อความของคุณ",
				content2Div1: "ที่นี่ที่ที่คุณสามารถปรับ %TPL_NAME% ดู โครงร่างสี รูปแบบ และความกว้าง ทั้งหมดนี้คุณกำหนดได้ที่นี่",
				content2Div2: "คุณสามารถเพิ่มการแบ่งปันไปยังเฟสบุค ทวิตเตอร์ และ  Bitly ดังนั้นผู้อ่านสามารถกระจายได้ง่าย %TPL_NAME% ไปยังที่อื่นๆ",
				content3Div1: "ก้_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ษฺ",
				content4Div1: "พบความผิดพลาดหรือต้องการเปลี่ยนวัสดุของคุณหรือไม่ ไม่ต้องกังวล มองหาไอคอนแก้ไขตลอดทั้งการตรวจสอบการเปลี่ยนแปลงเนื้อหาของคุณ youâ€™? จะใช้ฟังก์ชั่นการแก้ไขหลายครั้งตามที่คุณพัฒนา TPL_NAME% ของ%!",
				content5Div1: "TPL_NAME%% ถูกบันทึกอยู่ในบัญชี PORTAL%% ของคุณและตั้งความเป็นส่วนตัวเป็นค่าตั้งต้น คุณสามารถเลือกได้ว่าจะแชร์ข้อมูลให้กับสมาชิกในองค์กร หรือแชร์ทั่วทั้งโลกก็ได้ เรายังมี URL แบบสั้นที่จะช่วยให้คุณแชร์ลิงก์ได้ง่ายยิ่งขึ้นอีกด้วย",
				content6Div1: "ก้_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ษฺ",
				content6Div2: "ก้_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ษฺ"
			},
			landing: {
				lblAdd: "ก้_What do you want to call your Map Journal?_ษฺ",
				phAdd: "ก้_Enter your title..._ษฺ",
				lblOR: "- หรือ -",
				lblHelp: "ร่วมการเยี่ยมชม"
			},
			firstAddSplash: {
				thisis: "นี่คือ"
			}
        }
    })

);
