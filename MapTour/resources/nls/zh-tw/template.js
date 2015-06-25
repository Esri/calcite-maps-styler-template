﻿define(
	 ({
		viewer: {
			loading: {
				step1: "正在載入應用程式",
				step2: "正在載入資料",
				step3: "正在初始化瀏覽",
				loadBuilder: "切換到建構器模式",
				redirectSignIn: "重新導向到登錄頁面",
				redirectSignIn2: "(登錄後您將重新導向到此處)",
				fail: "抱歉，Map Tour 載入失敗",
				failButton: "重試"
			},
			errors: {
				boxTitle: "發生錯誤",
				portalSelf: "嚴重錯誤: 取得入口網站設定失敗",
				invalidConfig: "嚴重錯誤: 無效的設定",
				invalidConfigOwner: "嚴重錯誤: 無效的設定(需要授權的擁有者)",
				invalidConfigNoWebmap: "嚴重錯誤: 無效的設定(index.html 中未指定 web 地圖或應用程式識別碼)",
				createMap: "無法建立地圖",
				invalidApp: "嚴重錯誤: 無法載入應用程式",
				noLayer: "Web 地圖不包含用於 Map Tour 的有效資料圖層。",
				noLayerMobile: "歡迎使用 Map Tour web 應用程式。該應用程式未設定。行動裝置不支援 Map Tour 建構器。",
				noLayerView: "歡迎使用 Map Tour web 應用程式。<br />尚未設定該應用程式。",
				appSave: "儲存 web 應用程式時出錯",
				mapSave: "儲存 web 地圖時出錯",
				featureServiceLoad: "載入圖徵服務時出錯",
				notAuthorized: "您未取得存取該應用程式的授權",
				oldBrowserTitle: "瀏覽器的部分功能不受支援",
				noBuilderIE8: "第 9 版之前的 Internet Explorer 不支援 Map Tour 建構器。",
				ie10Win7Explain: "當資料來源是帶有附件的圖徵服務時，Windows 7 上的 Internet Explorer 10 不支援 Map Tour 建構器。若要使用帶有附件的圖徵服務，需要<a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>手動使文件模式符合 Internet Explorer 9 標準</a>，<a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>降級為 Internet Explorer 9</a> 或升級為 Windows 8。",
				oldBrowserExplain: "此瀏覽器不支援從上傳到 Map Tour 的圖像所自動生成縮圖。可使用此瀏覽器建立一個 Map Tour，但需要為每個上傳的圖像分別提供縮圖。",
				oldBrowserExplain2: "為了提昇體驗，請<a href='http://browsehappy.com/' target='_blank'>升級瀏覽器</a>或<a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>啟動用於 Internet Explore 的 Google Chrome Frame</a>。",
				oldBrowserExplain3: "Map Tour 建構器不適用於 Windows XP 上的 Internet Explorer 10。",
				oldBrowserClose: "關閉"
			},
			mobileHTML: {
				showIntro: "顯示標題",
				hideIntro: "隱藏標題",
				navList: "清單",
				navMap: "地圖",
				navInfo: "媒體",
				introStartBtn: "開始"
			},
			desktopHTML: {
				storymapsText: "故事地圖",
				builderButton: "切換到建構器模式",
				bitlyTooltip: "取得應用程式的短連結",
				bitlyStartIndex: "到目前地點的連結"
			},
			builderHTML: {
				panelHeader: "應用程式設定",
				buttonSave: "儲存",
				buttonSettings: "設定",
				buttonShare: "分享",
				buttonView: "檢視模式",
				buttonItem: "開啟 Web 應用程式項目",
				buttonHelp: "說明",
				buttonOrganize: "組織",
				buttonAdd: "新增",
				buttonImport: "匯入",
				buttonImportDisabled: "使用帶有附件的圖徵服務時，無法匯入",
				dataEditionDisabled: "CSV 資料來源上停用資料編輯",
				dataSourceWarning: "Map Tour 資料圖層已變更。如果圖徵 ID 不同，您必須透過<b>組織</b>重設順序和隱藏點。如果欄位名稱不同，您必須在<b>設定的資料索引標籤</b>下重設欄位設定。",
				organizeWarning: "在隱藏互動式建構器之外新增一個或多個點。",
				dataPicError0a: "此導覽包括 <b>%NB%</b> 個不符合規範的圖片 URL。",
				dataPicError0b: "此導覽可能包括 <b>%NB%</b> 個不符合規範的圖片 URL。",
				dataPicError1: "現在 Map Tour 要求圖片 URL 以下列任一副檔名為結尾: .jp(e)g、.png、.gif 或 .bmp。",
				dataPicError2: "該要求不會影響現有已發佈的 Map Tour。但是，為了使用互動式建構器，您必須先執行以下兩種操作之一解決 URL 問題:",
				dataPicError3: "編輯 URL",
				dataPicError4: "此操作將在不受支援的圖片 URL 結尾新增 <i>#isImage</i>。大多數伺服器都支援 URL 附加字尾。但在執行此操作後，應瀏覽各站點間以確認更新的圖片 URL 是否運作正常。如果各圖片均可載入，現在即可儲存 Map Tour。如果<b>圖片已損壞，則不要儲存 Map Tour</b>。請重新載入建構器並執行第二個操作。",
				dataPicError5: "限制對圖片的導覽",
				dataPicError6: "此選項導致所有 URL 都被視為影像，但您無法使用互動式建構器新增影片。如果您以後決定新增影片，可以撤消此操作。",
				dataPicError7: "您的 Map Tour 已限制為圖片，無法使用影片。如果選擇移除該限制，請在儲存 Map Tour 前檢查您的圖片載入是否仍正確。如有需要，您可以在稍後恢復該限制。",
				dataPicError8: "移除圖片限制",
				dataPicError9: "如果這些 URL 指向影片，您可以忽略此警告，如果指向影像，則需要執行以下兩種操作之一:",
				modalCancel: "取消",
				modalApply: "套用",
				organizeHeader: "組織導覽",
				organizeGeneralCaption: "使用拖放功能進行導覽點分類",
				organizeDelete: "刪除",
				organizeHide: "隱藏",
				organizeReset: "重設順序和隱藏點",
				addMaxPointReached: "已達到圖示集允許的最多點數，無法再新增更多的導覽點。<br /><br />請注意，如果刪除現有的點，必須重新載入應用程式。",
				addMaxPointReachedMobile: "抱歉，已達到授權點的最大數目，無法新增該圖片。",
				addClose: "關閉",
				addHeader: "新增新導覽點",
				addTabPicture: "媒體",
				addTabInformation: "資訊",
				addTabLocation: "位置",
				addSelectCaption: "選擇或拖放圖片",
				addNoteVideo: "有關使用影片的說明，請查看說明",		
				addSelectCaptionNoFileReader: "選擇圖片",	
				addChangePhoto: "變更圖片和縮圖",
				addPictureResolutionIntro: "圖片解析度高於所要求值:",
				addPictureResolutionOldBrowser: "圖片解析度高於所要求值。請指定一個低於 %RECOMMENDED_RES% 的解析度，以便最佳化 Map Tour 體驗。",
				addPictureResolutionResize: "將圖片解析度變更為 %RESOLUTION%",
				addPictureResolutionKeep: "保持原始解析度 %RESOLUTION%",
				addSelectThumbnail: "選擇縮圖",
				addNoThumbSelected: "未選擇縮圖",
				addThumbSelected: "選取",
				addCameraSettingsHeader: "照相機設定",
				addThumbnailHeader: "縮圖",
				addLabelPicUrl: "圖片",
				addLabelThumbUrl: "縮圖",
				addTextPlaceholderUrl: "輸入圖像 URL",
				addTextPlaceholderUrl2: "輸入 YouTube 頁面 URL",
				addTextPlaceholderUrl3: "輸入 Vimeo 頁面 URL",
				addTextPlaceholderUrl4: "輸入影片嵌入 URL",
				addLabelVideo: "影片",
				addMediaVideoOther: "其他",
				addMediaVideoHelp: "檢查 URL 並取得預設縮圖",
				addMediaVideoHelpTooltip1: "檢查成功",
				addMediaVideoHelpTooltip2: "檢查失敗",
				addMediaVideoHelpTooltip4: "找尋嵌入影片的選項並複製代碼中出現的影片 URL",
				addLabelName: "名稱",
				addLabelDescription: "說明文字",
				addTextPlaceholder: "輸入內容",
				addLocatePlaceholder: "查詢地址或地點",
				addPinColor: "顏色",
				addLatitude: "緯度",
				addLongitude: "經度",
				addLatitudePlaceholder: "例如 34.056",
				addLongitudePlaceholder: "例如 -117.195",
				addUploading: "上傳導覽點",
				addSave: "新增導覽點",
				addMobileUploading: "正在上傳圖片",
				addMobileName: "輸入名稱",
				addMobileNameMandatory: "錯誤，請輸入名稱。",
				addMobileError: "抱歉，出現一些問題",
				settingsHeader: "應用程式設定",
				settingsTabLayout: "版面設定",
				settingsTabColor: "顏色",
				settingsTabLogo: "頁眉",
				settingsTabFields: "資料",
				settingsTabExtent: "範圍",
				settingsTabZoom: "縮放級別",
				settingsLayoutExplain: "選擇所需的應用程式版面設定。",
				settingsLayoutProfessional: "由三個面板構成的版面設定",
				settingsLayoutModern: "整合的版面設定",
				settingsLayoutSelected: "選取的版面設定",
				settingsLayoutSelect: "選擇此版面設定",
				settingsLayoutNote: "請注意，在使用影片的位置，即使未勾選該選項，標語牌也始終位於影片下方。",
				settingsLayoutLocBtn: "顯示\\“定位\\”按鈕",
				settingsLayoutLocBtnHelp: "大多數行動裝置和桌面瀏覽器(Internet Explorer 9)均支援該功能。",
				settingsColorExplain: "透過選擇預定義的主題或建立自訂主題變更外觀。",
				settingsLabelColor: "頁眉、內容和頁腳顏色",
				settingsLogoExplain: "自訂頁眉標誌(不超過 250 x 50px)。",
				settingsLogoEsri: "Esri 標誌",
				settingsLogoNone: "無標誌",
				settingsLogoCustom: "自訂標誌",
				settingsLogoCustomPlaceholder: "圖像 URL",
				settingsLogoCustomTargetPlaceholder: "點選連結",
				settingsLogoSocialExplain: "自訂標題右上方的連結。",
				settingsLogoSocialText: "文字",
				settingsLogoSocialLink: "連結",
				settingsLogoSocialDisabled: "管理員已停用此功能",
				settingsDataFieldsExplain: "選擇照片名稱、說明文字和顏色欄位。",
				settingsDataFieldsError: "應用程式無法確定相應的名稱、說明文字或顏色資料。請選擇要在此處使用的欄位。這些設定之後可進行變更。",
				settingsFieldsLabelName: "名稱",
				settingsFieldsLabelDescription: "說明文字",
				settingsFieldsLabelColor: "顏色",
				settingsFieldsReset: "重設欄位選擇",
				settingsExtentExplain: "透過下面的互動式地圖設定 Map Tour 初始範圍。",
				settingsExtentExplainBottom: "您定義的範圍將修改 web 地圖初始範圍。請注意，如果不包括第一個導覽點，則不使用此範圍。這時將以第一個點為中心開啟導覽。",
				settingsExtentDateLineError: "範圍不可跨越 180° 經線",
				settingsExtentDateLineError2: "計算範圍時出錯",
				settingsExtentDrawBtn: "畫一個新範圍",
				settingsExtentModifyBtn: "編輯範圍",
				settingsExtentApplyBtn: "Map Tour 預覽",
				settingsExtentUseMainMap: "使用 Map Tour 範圍",
				settingsZoomExplain: "根據介紹設定故事點的縮放(可選項)。",
				settingsLabelZoom: "比例/級別",
				settingsZoomFirstValue: "無",
				settingsFieldError: "請在每個清單中選擇一個欄位",
				dataTitle: "ArcGIS Online 託管",
				dataExplain: "該圖徵服務將新增到 web 地圖中。該服務不會與任何人分享，只有您具有新增、編輯和刪除權限。<br /><br />請注意，如果透過項目頁面分享應用程式，系統將詢問是否也要分享圖徵服務。這是必要的步驟。您仍然是唯一具有編輯權限的人。",
				dataNameLbl: "服務名稱",
				dataFolderListLbl: "文件夾",
				dataFolderListFetching: "獲取文件夾 ...",
				dataRootFolder: "根目錄",
				dataNameError: "輸入圖徵服務的名稱",
				dataFolderError: "選擇有效的文件夾",
				dataSrcContainsInvalidChar: "圖徵服務名稱包含一個或多個無效的字元 (-, <, >, #, %, :, \", ?, &, +, /, 或 \)。",
				dataSrvAlreadyExistsError: "組織中已經存在該名稱的服務。請選擇其他名稱。",
				dataBtnSave: "建立服務",
				dataFooterProgress: "正在建立",
				dataFooterSucceed: "建立成功。正在載入",
				dataFooterError: "建立失敗。請重試",
				tabError: "請檢查所有索引標籤中的錯誤",
				introRecordBtn: "入口",
				introRecordActivate: "將第一個點做為導入點 (不在轉盤中顯示)"
			},
			addPopupJS: {
				uploadingPicture: "正在上傳圖片",
				uploadSuccess: "上傳成功",
				uploadError: "上傳圖片出錯",
				uploadError2: "新增圖徵時出錯(html 標記無效)",
				notJpg: "請選擇 jpeg 格式的照片",
				errorNoPhoto: "選擇要上傳的圖像",
				errorNoThumbnail: "選擇要上傳的縮圖",
				errorInvalidPicUrl: "輸入有效圖片(以 http(s):// 開頭，以 jpg、png、gif 或 bmp 結尾)。可使用 \\\"#isImage\\\" 做為 URL 的結尾，以覆蓋該規則。",
				errorInvalidThumbUrl: "輸入有效縮圖 (以 http(s):// 開頭，以 jpg、png、gif 或 bmp 結尾)。",
				errorInvalidVideoUrl: "輸入有效影片 URL(以 http(s):// 開始)",
				errorNoName: "輸入該導覽點的名稱",
				errorNoDescription: "輸入該導覽點的說明文字",
				errorNoLocation: "設定該導覽點的位置"
			},
			builderJS: {
				noPendingChange: "無未儲存的變更",
				unSavedChangeSingular: "1 個未儲存的變更",
				unSavedChangePlural: "未儲存的變更",
				shareStatus1: "未儲存導覽",
				shareStatus2: "導覽已公開分享",
				shareStatus3: "導覽已在組織內部分享",
				shareStatus4: "導覽未分享",
				popoverDiscard: "確定要放棄未儲存的變更嗎?",
				yes: "是",
				no: "否",
				popoverLoseSave: "打開檢視器時，您將流失所有未儲存的變更",
				ok: "確定",
				popoverSaveWhenDone: "完成後請不要忘記儲存",
				closeWithPendingChange: "確定要執行此操作嗎? 您的變更將流失。",
				gotIt: "確定",
				savingApplication: "儲存應用程式",
				saveSuccess: "應用程式儲存成功",
				saveError: "儲存失敗，請重試",
				saveError2: "由於名稱或描述中存在無效的 html 標記，因此儲存失敗",
				saveError3: "標題不能為空",
				dragColorPicker: "隨意移動<br />或變更顏色",
				dataWarningExtent: "部分資料位於 web 地圖的範圍之外。這些資料不用作導覽點，如果要使用，請變更地圖範圍。",
				dataWarningVisibi: "您的 Map Tour 圖層在目前 web 地圖範圍內不可見。將地圖放大到 %MAPSIZE% ，確認您的 Map Tour 圖層是可見的。",
				dataWarningEdit: "編輯 web 地圖",
				dataWarningClose: "關閉",
				signIn: "請使用帳戶登錄",
				signInTwo: "儲存應用程式。",
				switchBM: "變更底圖"
			},
			organizePopupJS: {
				messageStart: "您已選擇刪除",
				messageSinglePoint: "一個導覽點",
				messageMultiPoint: "多個導覽點",
				messagePermantRemove: "此操作將從資料庫永久移除",
				messageRecord: "個記錄",
				messageRecordPlural: "個記錄",
				messageConfirm: "。是否要繼續?",
				labelButtonShow: "顯示",
				labelButtonHide: "隱藏"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "這將永久刪除圖片和縮圖",
				popoverDeleteWarningThumb: "這將永久刪除縮圖",
				popoverUploadingPhoto: "正在上傳圖片和縮圖",
				popoverUploadingThumbnail: "正在上傳縮圖",
				popoverUploadSuccessful: "上傳成功",
				popoverUploadError: "上傳失敗，請重試",
				changePicAndThumb: "變更圖片",
				changeThumb: "變更縮圖",
				selectPic: "變更媒體",
				selectThumb: "變更縮圖",
				uploadPicAndThumb: "套用"
			},
			headerJS:{
				editMe: "編輯!",
				templateTitle: "設置範本標題",
				templateSubtitle: "設置範本子標題"
			},
			crossFaderJS:{
				setPicture: "設置圖片標題",
				setCaption: "設置圖片說明文字"
			},
			importPopup: {
				title: "匯入",
				prevBtn: "上一步",
				nextBtn: "下一步"
			},
			importPopupHome: {
				header: "圖片儲存在哪裡?"
			},
			onlinePhotoSharingCommon: {
				pictures: "圖片",
				videos: "影片",
				disabled: "管理員已停用此功能",
				disabledPortal: "Portal for ArcGIS 停用此功能",
				header1: "您的圖片必須公開分享。",
				header2: "匯入將限制為前 %NB1% 個 %MEDIA%。",
				emptyDataset: "發生錯誤，未找到圖片",
				footerImport: "匯入",
				selectAlbum: "選擇公開圖片集",
				selectAlbum2: "選擇圖片集",
				pleaseChoose: "請選擇",
				userLookup: "查詢",
				userLookingup: "正在查詢",
				csv: "在 CSV 中引用",
				advanced: "進階選項",
				advancedScratchLbl: "啟動新的導覽",
				advancedScratchTip: "建立可以使用精靈進行手動填充的空導覽。",
				advancedCSVLbl: "從 CSV 檔案匯入導覽資料",
				advancedCSVTip: "從 CSV 檔案匯入導覽內容。",
				advancedCommonTip: "這需要圖像和影片均已上線。",
				select: "做出選擇",
				locUse: "使用圖片地理位置",
				locExplain: "由於圖片位置可能源自圖片集，造成所有照片都在相同的位置，因此您可能不想使用圖片位置。",
				locExplain2: "由於影片位置可能源自使用者的設定，造成所有影片均位於同一位置，因此您可能不想使用影片位置。"
			},
			viewFlickr: {
				title: "Flickr 匯入",
				header: "輸入 Flickr 使用者名稱並選擇要匯入的照片集或標記。",
				userInputLbl: "輸入使用者名稱",
				signInMsg2: "未找到使用者",
				selectSet: "選擇照片集",
				selectTag: "或選擇標記",
				footerImportTag: "匯入選取的標記",
				footerImportSet: "匯入選取的集"
			},
			viewFacebook: {
				title: "Facebook 匯入",
				header: "使用 Facebook 使用者帳戶進行驗證或使用公開頁面。私人圖片集可用於建立不需要 Facebook 使用者驗證的公開 Map Tour ，這樣可以保持評論和喜好的私密性。",
				leftHeader: "Facebook 使用者",
				rightHeader: "Facebook 頁面",
				pageExplain: "Facebook 頁面屬￿公開品牌/產品或像 <b>esrigis</b> 一樣的名品。您可以在 URL 頁面的第一個 '/' 後面取得頁面名稱。",
				pageInputLbl: "輸入頁面名稱",
				lookupMsgError: "未找到頁面"
			},
			viewPicasa: {
				title: "Picasa/Google+ 匯入",
				header: "輸入您的電子郵件地址或 Picasa 或 Google+ 的帳戶 ID。",
				userInputLbl: "輸入電子郵件或 ID",
				signInMsg2: "未找到帳戶",
				signInMsg3: "無公開圖片集",
				howToFind: "如何查詢 Picasa 或 Google+ 帳戶 ID",
				howToFind2: "複製任何 Picasa 或 G+ 頁面第一個和第二個 '/' 之間的數字"
			},
			viewCSV: {
				title: "CSV 匯入",
				uploadBtn: "選擇或刪除 CSV 檔案",
				resultHeaderEmpty: "CSV 為空",
				resultHeaderSuccess: "已成功載入 %NB_POINTS% 個點",
				resultHasBeenLimited: "匯入已限制為 %VAL2% 個點的前 %VAL1% 個點，以符合每次瀏覽 %VAL3% 個點的限制",
				browserSupport: "您的瀏覽器不受支援，若要使用 CSV，必須<a href='http://browsehappy.com/' target='_blank'>升級瀏覽器</a>或使用 ArcGIS.com web 地圖檢視器 (請參閱\\“說明\\”)。",
				errorLatLng: "未找到緯度和經度欄位。可能的緯度值為: <i>%LAT%</i>，經度值為: <i>%LONG%</i>。",
				errorFieldsExplain: "未找到以下必填欄位，所以載入失敗",
				errorFieldsName: "<b>名稱</b>可能值為: %VAL%",
				errorFieldsDesc: "<b>描述</b>可能值為: %VAL%",
				errorFieldsUrl: "<b>圖片 URL</b> 可能值為: %VAL%",
				errorFieldsThumb: "<b>縮圖 URL</b> 可能值為: %VAL%",
				errorFields2Explain: "載入失敗，因為 CSV 沒有使用與以下圖層屬性相同的屬性",
				errorFields2Name: "<b>名稱</b>使用 %VAL1% 替代 %VAL2%",
				errorFields2Desc: "<b>描述</b>使用 %VAL1% 替代 %VAL2%",
				errorFields2Url: "<b>圖片 URL</b> 使用 %VAL1% 替代 %VAL2%",
				errorFields2Thumb: "<b>縮圖 URL</b> 使用 %VAL1% 替代 %VAL2%",
				resultFieldsAll: "已匯入所有屬性",
				resultFieldsNotAll: "未匯入以下屬性，因為它們不存在於地圖圖層中",
				resultFieldsNotAll2: "未匯入以下屬性",
				footerNextBtnResult: "匯入到 Web 地圖",
				footerProgress: "匯入進行中",
				footerSucceed: "匯入成功。正在載入"
			},
			viewYoutube: {
				title: "YouTube 匯入",
				header: "輸入 YouTube 使用者名以查詢公開分享的影片。",
				pageInputLbl: "輸入 YouTube 使用者名",
				lookupMsgError: "未找到使用者",
				howToFind: "如何查詢 YouTube 使用者名稱",
				howToFind2: "使用者名稱顯示在影片下方",
				found: "已找到",
				noData: "未找到公開影片"
			},
			viewGeoTag: {
				title: "選擇並定位您的圖像/影片",
				header: "按一下或點觸想匯入的圖片，以將其定位。",
				headerMore: "為什麼我的圖像/影片沒有地理定位?",
				headerExplain: "如果您的圖片具有效的地理位置，它們將自動在地圖上定位並在第二個索引標籤中列出。<br /><br />預設情況下，Picasa 和 Flickr 在您匯入圖片時不會儲存地理位置 EXIF 元資料。請勾選 Picasa/Flickr 隱私設置以啟用外部應用程式的圖片地理位置匯入與供使用。可能需要針對要使用的 EXIF 地理位置將現有圖片重新匯入到 Flickr/Picasa。<br /><br />在 Facebook 中，需要勾選每個圖片，按一下\\“編輯\\”並選擇位置。",
				leftPanelTab1: "定位",
				leftPanelTab2: "已定位",
				clickOrTap: "按一下或輕觸要定位的地圖",
				clearLoc: "清除位置",
				clickDrop: "不要匯入",
				footerImport: "匯入",
				footerProgress: "匯入進行中",
				footerSucceed: "匯入成功。正在載入...",
				loading: "正在載入",
				error: "圖片地理位置匯入失敗，地理位置已被忽略。"
			},
			initPopup: {
				title: "歡迎使用 Map Tour Builder",
				prevBtn: "上一步",
				nextBtn: "下一步"
			},
			initPopupHome: {
				header1: "圖像或影片的位置在哪?",
				header2: "該助手將協助您透過從已經儲存在線上的媒體建構 Map Tour，或者將媒體匯入到您的 ArcGIS Online for Organizations 帳戶。",
				title1: "媒體已上線",
				title2: "我需要上傳我的圖像",
				hostedFSTooltip: "使用 ArcGIS Online 託管您的圖像(不支援影片)。",
				hostedFsNA: "僅適用於 ArcGIS for Organizations 發佈者和管理員使用者",
				footer1: "完成後，不要忘記透過應用程式項目頁面分享您的 Map Tour 。",
				footer3: "下載 CSV 範本",
				footer4: "如果不下載，則 \"另存新檔\"",
				footer4bis: "如果下載未開始，請右鍵按一下並選擇“另存新檔”",
				footer5: "瞭解詳細資訊",
				footerProgress: "正在建立",
				footerSucceed: "建立成功。正在載入..."
			},
			helpPopup: {
				title: "說明",
				close: "關閉",
				tab1: {
					title: "簡介",
					div1: "Map Tour 範本旨在呈現地理資訊，為您要講述的故事提供吸引人的攝影或媒體元素。",
					div2: "範本可生成具有吸引力且易於使用的 web 應用程式，讓您按編號順序在地圖上顯示使用者可瀏覽的一小組地點。該範本可在任何裝置上的任何 web 瀏覽器中使用，其中包括智慧型手機和平板電腦。<br /><br />以下是可建立的應用程式範例 :",
					div4: "<a href='http://storymaps.esri.com/stories/maptour-palmsprings' target='_blank'>棕櫚泉 Map Tour </a>。",
					div42: "要查看其他使用者建立的 Map Tour 範例，<a href='http://links.esri.com/storymaps/map_tour_gallery' target='_blank'>請存取<a href='http://storymaps.arcgis.com/' target='_blank'>Story Maps 網站</a>中的圖庫</a>。您也可以在 Twitter 上關注我們 :<a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>。",
					div5: "我們非常期待您的參與! 如果您有任何疑問、想要請求新的圖徵或者發現漏洞，請造訪<a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps 使用者論壇</a>。"
				},
				tab2: {
					title: "資料",
					div1: "建構Map Tour 時要考慮的主要因素是選擇在何處儲存圖片。Map Tour 使用的圖片可以儲存在主要圖片分享服務中、任何 web 伺服器上或做為圖徵服務的附件。",
					div1a: "有關受支援的圖片格式和影片的詳細資訊，請參閱此索引標籤的最後一部分。",
					div2: "互動式建構器提供兩個選項，用於處理您的 Map Tour 中的影像:",
					div3: "<ul><li>您可以使用<b>已經在線上的照片</b>，例如儲存在 Flickr 等照片分享網站的影像或儲存在您自己網站上的影像。透過影像的 URL 將其引用到您的 Map Tour 中。</li><li>還可以<b>透過電腦將照片</b>直接上傳到您的 Map Tour。該上傳選項需要您具有 ArcGIS for Organizations 帳戶，並具有發佈者或管理員權限，因為系統將自動為您建立託管的圖徵服務，您可將照片做為附件儲存在其中。</li></ul>",
					div4: "主要用例包括:",
					div4b: "<b>您的照片尚未託管</b>，且您擁有 ArcGIS for Organizations 帳戶: 使用託管的圖徵服務是您的最佳選擇。與公開照片分享服務一樣，我們將最佳化您的圖片以建立快速載入影像，您將可以存取 ArcGIS 平臺的所有管理和資料管理功能。",
					div5: "<b>您不是組織的成員</b>: 首先，您需要將圖片上傳到照片分享網站或您自己的 web 伺服器上。建構器將協助您使用這些繼續託管在其原始位置的圖片。",
					div6: "<b>您希望重複使用現有圖徵服務</b>將圖片儲存為附件或引用外部圖片: 請參閱下面的詳細描述部分。",
					div7: "<b>您是上一版 Map Tour </b>範本的使用者，且已經擁有引用圖片和縮圖的 CSV: 您可以匯入該 CSV 並最佳化資料。建構器僅支援使用緯度/經度欄位的 CSV; 以地址為基礎的 CSV 可以繼續在您的 web 地圖中使用 (請參閱以下部分)。",
					div8: "從線上照片分享服務中匯入",
					div9: "匯入操作透過在 web 地圖圖徵集中儲存其 URL 來引用已託管的圖片。圖片並未儲存在 ArcGIS Online 中。如果無法存取託管的圖片，則無法在 Map Tour 中使用，您將看到\\“圖片不可用\\”的圖像。依您的照片服務提供者而定，Map Tour 可能不會匯入圖片的名稱、描述和位置。這些屬性儲存在 web 地圖中，對在線上服務進行的任何編輯都不會反映在 Map Tour 中。",
					div10: "在 web 伺服器上儲存圖片",
					div11: "如果選擇自己託管圖片，則需要手動建立圖片的縮圖。使用全解析度的圖片建立縮圖將導致效能不佳。因此，強烈建議您使用線上照片分享服務或圖徵服務來進行此操作。",
					div12: "使用現有圖徵服務或 Shapefile",
					div13: "任何點圖徵服務或 shapefile 都可做為 Map Tour 資料來源。只需透過 arcgis.com 地圖檢視器新增為 web 地圖的圖層。如果應用程式在您的圖層中找到預定的屬性，則所有建構器功能都將可用。",
					div14: "欄位名稱的可能值包括 (不區分大小寫):",
					div151: "名稱",
					div152: "描述",
					div153: "圖片",
					div154: "縮圖",
					div155: "顏色 ",
					div16: "如果在使用圖徵服務時，應用程式未找到匹配欄位，在您透過建構器設定要使用的欄位之前，檢視器無法使用。新增到 web 地圖的 CSV 和 shapefile 圖層需要包含所有必填欄位，否則建構器將無法運作。",
					div162: "使用將圖片儲存為附件的圖徵服務時，<b>只能使用帶有兩個附件的圖徵</b>。第一個附件定義主要圖片，第二個附件定義縮圖。",
					div17: "對於不帶附件的圖徵服務，圖片和縮圖欄位為必填欄位；對於帶附件的圖徵服務，圖片和縮圖欄位為可選欄位 (但強烈建議填寫)。如果您的服務已啟用附件，建構器將讓您以附件形式上傳圖片。如果沒有啟用，您只能編輯圖片和縮圖 URL。",
					div172: "如果存在，則將始終使用圖片和縮圖欄位，且不會查詢圖徵服務附件。",
					div173: "範例 CSV 和 shapefile 可以下載位置",
					div18: "透過 CSV 或 shapefile 建立託管的圖徵服務",
					div19: "透過 CSV 或 shapefile 建立託管的圖徵服務時，預設不啟用附件。要啟用附件，請打開圖徵服務的詳細資訊頁面，按一下圖層部分上的小箭頭，您將看到該選項。Map Tour 將繼續使用透過屬性引用的圖片和縮圖。另外，如果想將圖片做為圖徵服務附件上傳，可以使用圖片面板上的兩個按鈕(“變更圖片”和“變更縮圖”)。",
					div20: "支援的圖片格式和影片",
					div21: "支援的圖片格式為: <b>.jpg、.jpeg、.png、.gif 和 .bmp</b>。如果您的媒體檔案沒有以此副檔名結尾，則 Map Tour 會將其視為影片，但使用圖徵服務時除外(請參閱下文)。",
					div22: "Map Tour 範本不包括影片播放器，因此您必須使用喜歡的影片託管服務所提供的外部影片播放器 (找到嵌入影片並複製給已知代碼中的 URL 的選項)。如果您想要自己託管影片，則可以建立包含影片播放器 (例如 <a href='http://www.videojs.com/'>Video.js</a>) 的 HTML 頁面。",
					div23: "使用帶有附件的圖徵服務時，互動式建構器不提供可包含影片的對話方塊，但可以透過在互動式建構器外部編輯資料進行。在 arcgis.com 地圖檢視器中，如果將圖片欄位修改為指向外部影片，並在 URL 尾部新增特殊參數 (#isVideo)，則您的媒體將被視為影片。",
					div24: "請注意，您仍需要兩個有效的圖片附件，否則將不會使用此點。使用不含圖片和縮圖欄位的圖徵服務附件時，無法使用影片。"
				},
				tab3: {
					title: "自訂",
					div1: "建構器提供幾個自訂選項，可以透過頂部面板中的\\“設定\\”按鈕進行存取。如果沒有找到所需的選項，我們還提供一個可下載版本，您可以在 web 伺服器上進行部署，並可強化以符合您的需求。",
					div2: "建議您使用託管的版本，除非:",
					div3: "<li>它不提供您想要的 UI 自訂，例如使用標題背景圖像。</li><li>您是開發者，並且希望增強應用程式。</li>",
					div4: "可透過 web 地圖或 web 製圖應用程式識別碼設定可下載版本。主要用例有:",
					div41: "使用託管環境中的互動式建構器來建立Map Tour，並透過 web 製圖應用程式識別碼來設定範本。將套用透過互動式建構器定義的設定。",
					div42: "在互動式建構器外部建構您的 web 地圖，並透過 web 地圖識別碼設定範本。您需要閱讀說明文件以瞭解如何設定範本。",
					div43: "請注意，可下載的版本中提供互動式建構器，但對於 Internet Explorer 10 之前的舊版瀏覽器仍有技術限制。",
					div5: "要下載最新版本的範本並瞭解其使用方法，請存取 <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub 項目頁面</a>。"
				},
				tab4: {
					title: "提示",
					div0: "支援的瀏覽器",
					div0a: "IE8+ 支援 Map Tour 檢視器。IE9+ 支援互動式建構器。我們已經在所有主要瀏覽器中進行測試，但如果您遇到了困難，則建議您使用 Chrome。",
					div0b: "如果您遇到任何困難，請與我們聯繫。此外，使用 CSV 範本建構 Map Tour，可將您與建構器介面的互動降至最低。",
					div1: "圖片",
					div2: "建議使用橫向照片，而不要使用縱向照片。縱橫比為 4:3 的照片最為合適。可以使用縱向影像，但在像 iPad 這樣的小螢幕上，很多照片可能會被說明文字遮擋 (相對於寬幅區域，在長幅區域顯示文字會佔用更多的空間)。雖然在 Map Tour 中可以使用不同大小、形狀和方向的影像，但建議對所有影像使用完全相同的大小和形狀。這樣，使用者就不會在瀏覽時被不同大小的影像分散注意力。",
					div2a: "建議主要圖片的最大圖像大小為 1000 像素 (寬) x 750 像素 (高)，縮圖的最大圖像大小為 140 像素 (寬) x 93 像素 (高)。",
					div3: "使用 HTML 標記將說明文字格式化",
					div4: "頁眉和圖片標題/說明文字可以包含 HTML 標記，以定義格式和連結。例如，此代碼將新增黃色連結:",
					div4a: "為導覽寫出適當的子標題",
					div4b: "請利用時間為導覽寫出吸引人的子標題。子標題是吸引人們關注您的導覽並簡要介紹內容的良好途徑，也是告知觀眾該導覽所在的州或國家的好地方。例如，不要假設大家知道導覽中城市或城鎮的位置。也可以使用 HTML 標記將說明文字格式化，例如包括連結。但說明文字不要過長。在較小的瀏覽器視窗或 iPad 中，子標題可能並不完全適合，需要進行裁剪。如果您未想出合適的子標題，則保留空白。",
					div5: "支援圖層",
					div6: "可新增其他支援的圖層為 Map Tour 提供上下文。除 Map Tour 點之外，這些圖層還可能包含您希望地圖顯示的其他地理圖徵，例如研究區域、連結到導覽點的步行或開車路線等等。Map Tour 範本透過您在 web 地圖中指定的符號系統顯示這些附加的支援圖層，但無法使用快顯。",
					div7: "維持導覽簡潔明瞭",
					div8: "每次導覽限制為 99 個點。大部分 Map Tour 肯定明顯少於該限制。不要期望觀眾願意逐一瀏覽過多的導覽點。您可能覺得自己的主題很吸引人，但不要以為其他人也這麼想!",
					div9: "要瞭解詳細資訊，請參閱<a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>詳細指南</a>。",
					div10: "嵌入模式",
					div11: "如果您想要透過 iframe 將範本嵌入另一個網站，在 URL 末端添加選項參數 \"&embed\" 將移除標頭。此模式也可以透過設定參數於可下載的版本中設定。",
					div12: "避免使用狹窄的 iFrame 寬度，因其可能導致 Map Tour 切換至回應式觸控小螢幕的版面設定。為了擴大使用簡易性，在嵌入 Map Tour 時，通常建議在所嵌入的導覽旁邊提供一個連結，以便使用者啟動全螢幕導覽。" 
				},
				tab5: {
					title: "發佈",
					div1: "完成操作後，不要忘記透過 ArcGIS Online 中的\\“分享\\”按鈕或應用程式項目頁面分享您的 Map Tour 。",
					div2a: "透過建構器分享導覽",
					div2b: "透過\\“分享\\”按鈕可更新應用程式和 web 地圖項目。如果您的導覽資料儲存在圖徵服務項目中，也會更新。如果透過 ArcGIS.com 地圖檢視器新增其他圖層，則這些圖層將不會進行更新。這可能導致導覽不會按預期進行分享。具有必要 (或更多) 權限的項目將不會更新。",
					div2c: "透過 ArcGIS Online 分享導覽",
					div2d: "透過 ArcGIS Online 分享應用程式時，系統將在必要時要求您更新非以相同方式分享的所有相關資源(web 地圖、圖徵服務和裝飾圖層)。如果 Map Tour 處於公開狀態，且其中一個資源並沒有分享給觀眾，則使用者將被重新導向至 ArcGIS Online 登錄頁面。",
					div3t: "圖徵服務安全性",
					div3a: "如果使用透過 Map Tour 建構器建立的託管圖徵服務，應用程式將為您管理服務安全性，即使公開分享服務，您也是唯一具有編輯權限的人員。",
					div3t2: "在分享導覽之前",
					div3: "請確保在未使用 ArcGIS.com 帳戶登錄時，導覽也可正常運作。要使用的 URL 不應重新導向至登錄頁面或建構器模式。",
					div4: "最好查看 iPad 上以橫向儲存的 Map Tour 的外觀，以確保在這種普遍的裝置上看起來美觀。這有助於瞭解文字說明是否覆蓋了圖片太多。還可以使您瞭解子標題是否合適，以及是否因過長而被裁剪。",
					div5a: "搜尋建議",
					div5b: "要協助大家在搜尋 ArcGIS Online 時找到您的 Map Tour，我們建議在您的 Map Tour 應用程式項目頁面 (而並非 web 地圖的項目頁面) 中新增\\“故事地圖\\”標記以及其他標記，例如該導覽所在的州或省名稱、美國以外的國家名稱，以及諸如\\“公開藝術\\”、\\“遊客指南\\”或\\“歷史名勝\\”的主題標記。這些標記還可以協助我們在 Esri 中找到有趣的新導覽範例，我們可以在圖庫中展示這些範例，並在社交媒體上進行宣傳。同時建議您在應用程式項目頁面中上傳美觀的縮圖，例如導覽的小型螢幕截圖或其中一張圖片。將 Map Tour 新增到 ArcGIS Online 圖庫後，將自動使用該圖片。"
				}
			},
			share: {
				firstSaveTitle: "導覽內容儲存成功",
				firstSaveHeader: "您的導覽現已儲存在 ArcGIS Online 中。請閱讀以下常見問題的解答。",
				firstSaveA1: "如果您不熟悉 ArcGIS Online，或需要存取創作介面的捷徑，可以儲存以下連結: %LINK1%",
				firstSaveA1bis: "也可以在您的 <a href='%LINK2%' target='_blank'>ArcGIS Online 內容文件夾</a>中找到該導覽。",
				firstSaveQ2: "我的導覽是否已分享?",
				firstSaveA2: "您的導覽目前並未分享。若要分享，請使用\\“分享\\”按鈕。",
				shareTitle: "分享您的導覽",
				sharePrivateHeader: "您的導覽尚未分享，是否要分享?",
				sharePrivateBtn1: "公開分享",
				sharePrivateBtn2: "與我的組織分享",
				sharePrivateProgress: "正在進行分享...",
				sharePrivateErr: "分享失敗，請重試或",
				sharePrivateOk: "分享更新成功，正在載入...",
				sharePreviewAsUser: "預覽",
				shareHeader1: "您的導覽<strong>可公開存取</strong>。",
				shareHeader2: "組織成員可以存取您的導覽(需要登錄)。",
				shareLinkHeader: "與觀眾分享導覽",
				shareLinkOpen: "打開",
				shareQ1Opt1: "如何將導覽設置為私有?",
				shareQ1Opt2: "如何將導覽設置為私有或將其公開分享？",
				shareA1: "請使用<a href='%LINK1%' target='_blank'>應用程式項目頁面</a>上的 %SHAREIMG%。如果還想要取消分享 web 地圖，請使用 <a href='%LINK2%' target='_blank'>web 地圖項目頁面</a>。",
				shareA1bis: "如果還想要取消分享圖徵服務，請使用<a href='%LINK1%' target='_blank'>圖徵服務項目頁面</a>。",
				shareQ2: "之後如何編輯導覽？",
				shareQ2bis: "如何返回製作介面？",
				shareA2div1: "儲存並重新使用以下連結 %LINK1%，或使用<a href='%LINK2%' target='_blank'>應用程式項目頁面</a>。",
				shareA2div2: "做為應用程式擁有者，當您登錄到 ArcGIS.com 後，可使用應用程式的按鈕打開互動式建構器:",				
				shareQ3: "資料儲存在哪兒?",
				shareA3: "瀏覽設定儲存在<a href='%LINK1%' target='_blank'>此 web 地圖項目</a>和<a href='%LINK2%' target='_blank'>此 web 應用程式項目</a>中。Flickr、Picasa 和 Facebook 圖像以及 YouTube 影片仍可在其網站引用，並且不會複製到 ArcGIS Online。",
				shareWarning: "已禁止分享 %WITH%，因為您不是 <a href='%LINK%' target='_blank'>webmap</a> 的擁有者。",
				shareWarningWith1: "公開",
				shareWarningWith2: "公開並在組織內分享"
			}
        }
    })
);
