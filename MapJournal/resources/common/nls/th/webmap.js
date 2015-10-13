define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "ก้_Map__ษฺ",
				lblLocation: "ตำแหน่ง",
				lblContent: "เนื้อหา",
				lblPopup: "ป๊อปอัพ",
				lblControls: "พิเศษ",
				lblOverview: "ภาพรวมของแผนที่",
				lblLegend: "สัญลักษณ์",
				loadingTitle: "กำลังโหลดหัวเรื่อง",
				entry: "เข้า",
				entries: "เข้า",
				section: "ส่วน",
				sections: "ส่วน",
				and: "และ",
				action: "ดำเนินการในส่วน",
				actions: "ดำเนินการในส่วน",
				originalWebmap: "ก้_Map used to publish the %TPL_NAME%___________ษฺ",
				browseMaps: "ก้_Select a map_____ษฺ",
				createMap: "ก้_Create a map_____ษฺ",
				current: "ก้_Current map____ษฺ",
				select: "ก้_Select or create a map________ษฺ",
				newMap: "ก้_Newly selected map______ษฺ",
				newCreatedMap: "ก้_Newly created map______ษฺ",
				webmapDefault: "ก้_Map default____ษฺ",
				customCfg: "ปรับการตั้งค่า",
				tooltipLocation: "กำหนดสถานแผนที่ที่จะนำมาใช้เมื่อผู้อ่านของคุณนำทางไปยังส่วนนี้",
				tooltipContent: "กำหนดระยะการมองเห็นชั้นข้อมูล",
				tooltipPopup: "เลือกป๊อปอัพเพื่อแสดงเมื่อคุณนำทางไปยังส่วนนี้",
				tooltipOverview: "แสดงแผนที่ภาพรวมขนาดเล็กพร้อมๆ กับแผนที่หลัก",
				tooltipLegend: "เลือกแสดงสัญลักษณ์แผนที่บนแผนที่ ซึ่งจะเป็นประโยชน์อย่างมากในกรณีที่แผนที่มีหลายชั้นข้อมูลและหลายสัญลักษณ์",
				mapCfgInvite: "ใช้การควบคุมการตั้งค่าแผนที่ของคุณ",
				lblLocationAlt: "ถ่ายทอดจากแผนที่ฉบับแรก",
				tooltipLocationAlt: "แผนที่สถานที่ตั้งนี้จะตรงกับแผนที่ครั้งแรกในซีรีส์ ในการเปลี่ยนพฤติกรรมนี้สำหรับชุดของคุณไปที่การตั้งค่า> ตัวเลือกแผนที่"
			},
			configure: {
				btnReset: "รีเซ็ต",
				btnCancel: "ยกเลิก",
				tocTitle: "รายการแผนที่",
				tocExplain: "เลือกชั้นข้อมูลที่จะแสดง",
				tocNoData: "ไม่มีชั้นข้อมูลที่สามารถปรับแต่งได้",
				tocSave: "บันทึกสารบัญแผนที่",
				extentTitle: "ตำแหน่งแผนที่",
				extentExplain: "เลือกและขยายแผนที่ตามที่กำหนด วิธีการมองหาผู้อ่าน",
				extentSave: "บันทึกตำแหน่งแผนที่",
				popupTitle: "ป็อปอัพแผนที่",
				popupExplain: "ปรับแต่งภาพลักษณ์ของกล่องข้อความ popup ที่จะแสดงให้ผู้ใช้งานเห็น",
				popupSave: "บันทึกการตั้งค่าป็อปอัพ",
				hintNavigation: "แผนที่นำทางถูกปิดใช้งาน"
			},
			editor: {
				loading: "ก้_Please wait while the map editor is loading______________ษฺ",
				newTitle: "ก้_Create new map_____ษฺ",
				editTitle: "ก้_Edit map___ษฺ",
				titleLbl: "ก้_Title___ษฺ",
				titlePh: "ก้_Map title_____ษฺ...",
				folderLbl: "ก้_The map will be created in the same folder as the story__________________ษฺ.",
				creating: "ก้_Creating the map______ษฺ",
				saving: "ก้_Saving the map_____ษฺ",
				success: "ก้_Map saved____ษฺ",
				successCreate: "ก้_Map created____ษฺ",
				cancelTitle: "ก้_Discard any unsaved changes_________ษฺ?",
				errorDuplicate: "ก้_You already have a map with that title____________ษฺ",
				errorCreate: "ก้_Unable to create map. Please try again_____________ษฺ.",
				errorSave: "ก้_Unable to save map. Please try again____________ษฺ.",
				notavailable1: "ก้_Sorry, creating or editing a map is not supported in Firefox due to a technical limitation. You may want to build your story using a different web browser or use the following workaround_________________________________________________________ษฺ.",
				notavailable2: "ก้_Sorry, creating or editing a map is not supported since the story map application is not hosted in %PRODUCT%. Please contact your ArcGIS administrator for more information_____________________________________________________ษฺ.",
				notavailable3: "ก้_Sorry, creating or editing a map is not supported on this version of Portal for ArcGIS (requires 10.4 or later). Please contact your ArcGIS administrator for more information______________________________________________________ษฺ.",
				notavailable4: "ก้_You can create a map using %MV%, then come back here to add it to your story________________________ษฺ.",
				notavailable5: "ก้_You can edit the map using %MV%, then come back here and %apply% to see your changes___________________________ษฺ.",
				notavailable6: "ก้_map viewer____ษฺ",
				notavailable7: "ก้_reload the map_____ษฺ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "องค์กรของฉัน",
					onlineLabel: "ArcGIS Online",
					contentLabel: "เนื้อหาของฉัน",
					favoritesLabel: "รายการโปรด"
				},
				title: "ก้_Select a map_____ษฺ",
				searchTitle: "ค้นหา",
				ok: "ตกลง",
				cancel: "ยกเลิก",
				placeholder: "ก้_Enter search term or web map ID___________ษฺ..."
			}
		}
	})
);
