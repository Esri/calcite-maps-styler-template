define(
	 ({
		builder: {
			layouts: {
				mainStage: "เวทีหลัก",
				sideTitle: "แถบเลื่อน",
				sideDescr: "รูปแบบสำหรับตัวอักษรเยอะๆสำหรับเรื่องราว ซึ่ง excels ได้รวมรูปของคุณ วิดีโอ และแผนที่ในรูปแบบข้อความที่ชัดเจน",
				floatTitle: "หน้าต่างลอยๆ",
				floatDescr: "ก้_A layout that puts your cartography in focus while allowing a transparent short form text panel to help tell the story._ษฺ"
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
				titleAdd: "เพิ่มส่วน",
				titleEdit: "แก้ไขส่วน",
				step: "ขั้นตอน",
				stepMainStageExplain: "เพิ่มแผนที่ รูปภาพ หรือวิดีโอในเวทีหลัก",
				stepPanelExplain: "เพิ่มรายการ",
				stepMainStageNextTooltip: "เพิ่มหัวส่วนและเลือกรายการเวทีหลัก",
				step2NextTooltip: "เพิ่มหัวข้อส่วนและ%LAYOUT-TYPE% รายการ",
				stepNextTooltipNext: "ไปยังขั้นตอนต่อไป",
				stepNextTooltipAdd: "เพิ่มส่วน",
				titlePlaceholder: "หัวข้อส่วน...",
			},
			addEditViewText: {
				editorPlaceholder: "เพิ่มตัวอีกษร ลิ้ง และกราฟเล็กๆที่นี่",
				editorActionsTitle: "ดำเนินการเวทีหลัก",
				editorActionsHelpDescr: "ใช้ตัวควบคุมเหล่านี้เพื่อสร้างการเชื่อมโยงที่จะเปลี่ยนเวทีหลัก ตัวอย่างเช่นเมื่อผู้อ่านคลิกลิงค์ที่คุณอาจต้องการที่จะซูมแผนที่ไปยังตำแหน่งที่เฉพาะเจาะจงแสดงแผนที่เว็บอื่นหรือแสดงภาพ"
			},
			organizePopup: {
				title: "องค์กร",
				lblHeader: "ก้_Drag and drop sections to organize your content._ษฺ",
				lblColTitle: "หัวเรื่อง",
				lblColPubDate: "วันที่แชร์ข้อมูล",
				lblColStatus: "สถานะ",
				checkDisplayReverse: "ส่วนจอแสดงผลในลำดับที่กลับกัน",
				btnApplyWarning: "ยืนยันการยกเลิกของ  %NB% ส่วน",
				deleteTooltip: "ลบทิ้ง",
				firstSectionExplain: "(ส่วนหน้าหลักไม่สามารถย้ายได้)"
			},
			help: {
				lblHelp: "ช่วยเหลือ",
				lblAdd: "เพิ่มส่วน",
				lblSettings: "การตั้งค่า",
				lblOrga: "รายการองค์กร",
				lblEdit: "แก้ไข",
				lblPublish: "ก้_Share_ษฺ",
				lblMore: "ต้องการเพิ่ม?",
				lblLink: "เยี่ยมชมเว็บไซย์แผนที่เรื่องราว",
				content1Div1: "คุณสามารถรวมความหลากหลายของรูปแบบที่เมื่อมีการสร้างเรื่องราวของคุณ<strong>% LAYOUT_TITLE% </ strong> โดยทั่วไปแล้วถือข้อความของคุณรูปภาพและวิดีโอในขณะที่แผนที่ของคุณมีแนวโน้มที่จะไปใน <strong> เวทีหลัก </ strong> อย่างไรก็ตาม% TPL_NAME% ช่วยให้คุณสามารถมีลักษณะภาพแผนภูมิและวิดีโอภายในเวทีหลักได้เป็นอย่างดี",
				content1Div2: "ก้_Adding sections allows you to truly customize your storytelling experience. As readers scroll through your %LAYOUT_TITLE% text, a map on the Main Stage can pan or zoom to key points, or new maps and images can automatically toggle to support your message._ษฺ",
				content2Div1: "ที่นี่ที่ที่คุณสามารถปรับ %TPL_NAME% ดู โครงร่างสี รูปแบบ และความกว้าง ทั้งหมดนี้คุณกำหนดได้ที่นี่",
				content2Div2: "ก้_You can also add sharing links to Facebook, Twitter, and Bitly so readers can easily spread your %TPL_NAME% to others._ษฺ",
				content3Div1: "เนื้อหาของคุณจะถูกจัดแบ่งออกเป็นส่วน คุณสามารถมีส่วนมากเท่าที่คุณต้องการ (คิดว่าพวกเขาเป็นเช่นบทมินิ) การไหลของบทที่มีความสำคัญ; เพื่อจัดระเบียบภายในคุณสามารถเรียงลำดับหรือลบส่วนตามที่คุณต้องการ",
				content4Div1: "พบความผิดพลาดหรือต้องการเปลี่ยนวัสดุของคุณหรือไม่ ไม่ต้องกังวล มองหาไอคอนแก้ไขตลอดทั้งการตรวจสอบการเปลี่ยนแปลงเนื้อหาของคุณ youâ€™? จะใช้ฟังก์ชั่นการแก้ไขหลายครั้งตามที่คุณพัฒนา TPL_NAME% ของ%!",
				content5Div1: "ก้_Your %TPL_NAME% is saved to your %PORTAL% account and private by default. You can decide to share it with your organization, or open it to the world. We even provide you with a shortened URL so you can share it easier._ษฺ"
			},
			landing: {
				lblAdd: "เพิ่มส่วนหน้าต่างหลัก",
				lblOR: "- หรือ -",
				lblHelp: "ร่วมการเยี่ยมชม"
			},
			firstAddSplash: {
				thisis: "นี่คือ"
			}
        }
    })

);
