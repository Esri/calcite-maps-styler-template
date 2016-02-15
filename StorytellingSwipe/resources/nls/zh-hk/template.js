define(
	 ({
		viewer: {
			loading: {
				step1: "正在載入故事",
				step2: "正在載入資料",
				step3: "正在初始化",
				fail: "抱歉，Swipe 載入失敗",
				loadBuilder: "切換到建構器模式",
				redirectSignIn: "重新導向到登錄頁面",
				redirectSignIn2: "(登錄後您將重新導向到此處)",
				failButton: "重試"
			},
			errors: {
				boxTitle: "發生錯誤",
				portalSelf: "嚴重錯誤: 取得入口網站設定失敗",
				invalidConfig: "嚴重錯誤: 無效的設定",
				invalidConfigNoWebmap: "試_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________驗",
				invalidConfigNoAppDev: "試_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________驗.",
				createMap: "無法建立地圖",
				invalidApp: "嚴重錯誤: 無法載入故事",
				initMobile: "歡迎使用 Swipe web 應用程式。未設定該應用程式。行動裝置不支援互動式建構器。",
				initMobile2: "試_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________驗.",
				initMobile3: "試_Please rotate your device to landscape orientation to use the Swipe builder________________________驗.",
				noBuilderIE8: "Internet Explorer 9 之前的版本不支援 Swipe 互動式建構器。",
				noLayerView: "歡迎使用 Swipe web 應用程式。<br />尚未設定該應用程式。",
				appSave: "儲存 web 故事時出錯",
				mapSave: "儲存 web 地圖時出錯",
				notAuthorized: "您未取得存取該故事的授權",
				notAuthorizedBuilder: "試_You are not authorized to use Swipe and Spyglass builder__________________驗.",
				conflictingProjectionsTitle: "衝突的投影",
				conflictingProjections: "Swipe 不支援兩個不同投影的 web 地圖。請開啟設定並使用與第一個 web 地圖相同投影的 web 地圖。",
				cpButton: "關閉",
				unspecifiedConfigOwner: "尚未設定授權的擁有者。",
				invalidConfigOwner: "未授權故事擁有者。"
			},
			mobileView: {
				hideIntro: "隱藏簡介",
				navLeft: "圖例",
				navMap: "地圖",
				navRight: "資料"
			},
			desktopView: {
				storymapsText: "故事地圖",
				builderButton: "切換到建構器模式",
				facebookTooltip: "在 Facebook 上分享",
				twitterTooltip: "在 Twitter 上分享",
				bitlyTooltip: "取得短連結",
				tooltipAutoplayDisabled: "試_This isn't available in autoplay mode____________驗",
				autoplayLabel: "試_Autoplay mode_____驗",
				autoplayExplain1: "試_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________驗.",
				autoplayExplain2: "試_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________驗."
			}
		},
		builder: {
			builder: {
				panelHeader: "故事設定",
				buttonSave: "儲存",
				buttonHelp: "說明",
				buttonShare: "分享",
				buttonDiscard: "取消",
				buttonSettings: "設定",
				buttonView: "檢視模式",
				buttonItem: "開啟 Web 應用程式項目",
				noPendingChange: "無待決的變更",
				unSavedChangeSingular: "1 個未儲存的變更",
				unSavedChangePlural: "未儲存的變更",
				popoverDiscard: "確定要放棄未儲存的變更嗎?",
				yes: "是",
				no: "否",
				popoverOpenViewExplain: "打開檢視器時，您將流失所有未儲存的變更",
				popoverOpenViewOk: "確定",
				popoverOpenViewCancel: "取消",
				popoverSaveWhenDone: "完成後請不要忘記儲存",
				closeWithPendingChange: "確定要執行此操作嗎? 您的變更將流失。",
				gotIt: "確定",
				savingApplication: "正在儲存故事",
				saveSuccess: "試_Story saved____驗",
				saveError: "儲存失敗，請重試",
				saveError2: "由於名稱或描述中存在無效的 html 標記，因此儲存失敗",
				saveError3: "標題不能為空",
				signIn: "請使用帳戶登錄",
				signInTwo: "以儲存故事。"
			},
			header:{
				editMe: "編輯!",
				templateTitle: "設置範本標題",
				templateSubtitle: "設置範本子標題"
			},
			settings: {
				settingsHeader: "故事設定",
				modalCancel: "取消",
				modalApply: "套用"
			},
			settingsColors: {
				settingsTabColor: "主題",
				settingsColorExplain: "選擇應用程式主題或定義自己的顏色。",
				settingsLabelColor: "頁眉和側面板背景顏色"
			},
			settingsHeader: {
				settingsTabLogo: "頁眉",
				settingsLogoExplain: "自訂頁眉標誌(不超過 250 x 50px)。",
				settingsLogoEsri: "Esri 標誌",
				settingsLogoNone: "無標誌",
				settingsLogoCustom: "自訂標誌",
				settingsLogoCustomPlaceholder: "圖像 URL",
				settingsLogoCustomTargetPlaceholder: "點選連結",
				settingsLogoSocialExplain: "自訂標題右上方的連結。",
				settingsLogoSocialText: "文字",
				settingsLogoSocialLink: "連結",
				settingsLogoSocialDisabled: "管理員已停用此功能"
			},
			settingsExtent: {
				settingsTabExtent: "範圍",
				settingsExtentExplain: "透過下面的互動式地圖設定初始範圍。",
				settingsExtentExplainBottom: "您定義的範圍將修改您的 web 地圖初始範圍。請注意，如果您正在執行撥動操作，則不會使用該範圍。",
				settingsExtentDateLineError: "範圍不可跨越 180° 經線",
				settingsExtentDateLineError2: "計算範圍時出錯",
				settingsExtentDrawBtn: "畫一個新範圍",
				settingsExtentModifyBtn: "編輯目前範圍",
				settingsExtentApplyBtn: "應用到主地圖",
				settingsExtentUseMainMap: "使用主地圖範圍"
			}
        },
		swipe: {
			mobileData: {
				noData: "無資料顯示!",
				noDataExplain: "點選地圖選擇圖徵，然後返回到這裡",
				noDataMap: "此地圖無資料",
				noPopup: "未找到此圖徵的快顯"
			},
			mobileLegend: {
				noLegend: "不顯示任何圖例。"
			},
			swipeSidePanel: {
				editTooltip: "設置側面板描述",
				editMe: "編輯!",
				legendTitle: "圖例"
			},
			infoWindow: {
				noFeature: "不顯示任何資料",
				noFeatureExplain: "點選地圖選擇一個圖徵"
			},
			settingsLayout: {
				settingsTabLayout: "Swipe 樣式",
				settingsLayoutExplain: "為此 Swipe 工具選擇樣式。",
				settingsLayoutSwipe: "分隔號",
				settingsLayoutSpyGlass: "Spyglass",
				settingsLayoutSelected: "選取的版面設定",
				settingsLayoutSelect: "選擇此版面設定",
				settingsSaveConfirm: "其中一些變更需要您儲存和重新載入故事"
			},
			settingsDataModel: {
				settingsTabDataModel: "Swipe 類型",
				settingsDataModelExplainSwipe: "您希望使用者滑動操作的是什麼?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "選擇在望遠鏡中顯示的圖層或 web 地圖。",
				settingsDataModelOneMap: "Web 地圖中的圖層",
				settingsDataModel1Explain: "選擇要對其進行滑動操作的圖層",
				settingsDataModel1Warning: "如果圖層被上面的圖層所遮蓋，則滑動無任何效果。",
				settingsDataModel1SpyGlassExplain: "選擇要在望遠鏡中顯示的圖層。",
				settingsDataModelTwoMaps: "兩幅 web 地圖",
				settingsDataModelLayerIds: "Web 地圖圖層 ID",
				settingsDataModelSelected: "已選類型",
				settingsDataModelWebmapSwipeId1: "右側 Web 地圖 ID",
				settingsDataModelWebmapSwipeId2: "左側 Web 地圖 ID",
				settingsDataModelWebmapGlassId1: "主 Web 地圖 ID",
				settingsDataModelWebmapGlassId2: "望遠鏡 Web 地圖 ID",
				settingsDataModelSelect: "選擇該類型",
				settingsDataModel2Explain: "滑動另一幅 web 地圖。",
				settingsDataModel2SpyGlassExplain: "顯示另一幅 web 地圖。",
				settingsDataModel2HelpTitle: "如何查詢 web 地圖 ID？",
				settingsDataModel2HelpContent: "複製並貼上 web 地圖 URL 中\“=\”符號後面的數字",
				switchMaps: "切換地圖",
				browseWebMaps: "瀏覽 Web 地圖"
			},
			settingsLegend: {
				settingsTabLegend: "應用程式版面設定",
				settingsLegendExplain: "選擇故事版面設定設定。",
				settingsLegendEnable: "啟用圖例",
				settingsDescriptionEnable: "啟用描述",
				settingsBookmarksEnable: "啟用 Swipe 系列",
				settingsPopupDisable: "試_Enable pop-up_____驗",
				settingsLocationSearchEnable: "啟用定位器搜尋",
				settingsGeolocatorEnable: "啟用地理定位器",
				settingsLegendHelpContent: "試_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________驗",
				settingsSeriesHelpContent: "Swipe 系列是一種索引標籤式的導航選項，可以檢視者至特定範圍，並在側面板中顯示標題和描述文字。在首次啟動時，將匯入 web 地圖的書簽，並用於預填充系列條形圖。停用系列選項將關閉系列條形圖，將保留但系列設定供以後使用。",
				settingsSeriesHelpContent2: "透過 Swipe 系列可建立和編輯一系列隨附標題和文字的位置。如果 web 地圖有書簽，則會顯示這些書簽。您可以停用 Swipe 簾系列，但設定將保留以供之後使用。",
				settingsSeriesHelpLink: "在此處查看具有 Swipe 系列的應用程式範例",
				preview: "UI 預覽",
				settingsLocateButtonExplain: "此功能在大多數行動裝置和桌面瀏覽器 (包括 Internet Explorer 9+) 中都受支援。",
				settingsLocateButton: "在受支援的瀏覽器中啟用\“定位\”按鈕",
				settingsAddressSearch: "啟用地址搜尋工具"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "快顯",
				settingsSwipePopupExplain: "自訂快顯頁眉外觀，協助使用者關連快顯與地圖圖層。",
				settingsSwipePopupSwipe1: "左地圖",
				settingsSwipePopupSwipe2: "右地圖",
				settingsSwipePopupGlass1: "主地圖",
				settingsSwipePopupGlass2: "望遠鏡地圖",
				settingsSwipePopupTitle: "頁眉標題",
				settingsSwipePopupColor: "頁眉顏色"
			},
			initPopup: {
				initHeader: "歡迎存取 Swipe/Spyglass 建構器",
				modalNext: "下一步",
				modalPrev: "上一步",
				modalApply: "打開應用程式"
			},
			seriesPanel: {
				title: "標題",
				descr: "描述",
				discard: "放棄書簽",
				saveExtent: "設定書簽範圍",
				discardDisabled: "無法移除書簽。可在設定中停用 Swipe 系列。"
			},
			helpPopup: {
				title: "說明",
				close: "關閉",
				tab1: {
					div1: "Swipe/Spyglass 範本旨在透過一個簡單易用而又吸引人的 Web 應用程式(可透過包括智慧型手機和平板電腦之任意裝置上的任意 Web 瀏覽器使用該應用程式)，對兩個單獨的 Web 地圖或一個 Web 地圖中的兩個圖層進行比較。",
					div2: "有關 Swipe/Spyglass 範本的附加資訊(包括使用者建立的範例)，<a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'>請存取故事地圖網站</a>。您也可以關注我們的 Twitter，<a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>。",
					div3: "我們非常期待您的參與! 如果您有任何疑問、想要請求新的圖徵或者發現漏洞，請造訪<a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps 使用者論壇</a>。"
				}
			},
			share: {
				firstSaveTitle: "試_Story saved____驗",
				manageStory: "試_Manage your story______驗",
				manageStoryA1: "試_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________驗.",
				manageStoryA1V1: "試_My Stories____驗",
				manageStoryA1V2: "試_blog posts____驗",
				shareTitle: "分享您的故事",
				sharePrivateHeader: "您的故事未分享，您是否希望分享?",
				sharePrivateBtn1: "公開分享",
				sharePrivateBtn2: "與我的組織分享",
				sharePrivateProgress: "正在進行分享...",
				sharePrivateErr: "分享失敗，請重試或",
				sharePrivateOk: "試_Sharing updated, loading_________驗...",
				shareStatus1: "未儲存故事",
				shareStatus2: "已公開分享故事",
				shareStatus3: "故事已在組織內部分享",
				shareStatus4: "未分享故事",
				sharePreviewAsUser: "預覽",
				shareHeader1: "您的故事<strong>可公開存取</strong>。",
				shareHeader2: "組織成員 (需要登入) 可存取您的故事。",
				shareLinkHeader: "試_Share your story______驗",
				shareLinkOpen: "打開",
				learnMore: "瞭解詳細資訊",
				shareA1: "使用<a href='%LINK1%' target='_blank'>應用程式項目頁面</a>中的 %SHAREIMG%。如果還希望取消分享 Web 地圖，請使用 <a href='%LINK2%' target='_blank'>Web 地圖項目頁面</a>。",
				shareWarning: "已禁止分享 %WITH%，因為您不是 <a href='%LINK%' target='_blank'>webmap</a> 的擁有者。",
				shareWarningWith1: "試_publicly___驗",
				shareWarningWith2: "試_publicly and with the Organization___________驗"
			},
			directCreation: {
				header: "歡迎存取 Swipe/Spyglass 建構器",
				mapPickHeader: "要開始此過程，請輸入有效的 Web 地圖 id，或使用搜尋按鈕瀏覽 Web 地圖。",
				launchBuilder: "啟動建構器",
				chooseWebmapLbl: "選擇 Web 地圖...",
				explain2: "試_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________驗.",
				explain3: "如果您想在故事地圖中使用兩個 Web 地圖，系統會在您選擇該選項後提示您提供另一個 Web 地圖。",
				webmapPlaceholder: "輸入 Web 地圖 ID..."
			},
			saveErrorSocial: {
				title: "試_Social media sharing update_________驗",
				panel1: "試_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________驗.",
				panel1tooltip: "試_By defining a title, summary and thumbnail image, your story will look like this_________________________驗:",
				panel2:	"試_Which title would you like to use on social media________________驗:",
				panel2q1: "試_Story title (recommended)_________驗",
				panel2q1tooltip: "試_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________驗.",
				panel2q2: "試_Item title____驗",
				panel3: "試_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________驗.",
				panel4: "試_Do not warn me again for this story____________驗",
				mystories: "試_My Stories____驗",
				btnSave: "試_Save__驗"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "我的組織",
					onlineLabel: "ArcGIS Online",
					contentLabel: "我的內容",
					favoritesLabel: "我的最愛"
				},
				title: "試_Select Web Map_____驗",
				searchTitle: "搜尋",
				ok: "確定",
				cancel: "取消",
				placeholder: "輸入搜尋詞彙"
			}
		}
    })
);
