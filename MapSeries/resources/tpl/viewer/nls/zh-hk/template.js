define(
	 ({
		viewer: {
			common: {
				close: "關閉"
			},
			loading: {
				long: "故事正在初始化",
				long2: "謝謝等候",
				failButton: "重新載入故事"
			},
			signin: {
				title: "需要進行身份驗證",
				explainViewer: "請使用帳戶登入 %PORTAL_LINK% 以存取故事。",
				explainBuilder: "請使用帳戶登入 %PORTAL_LINK% 以設定故事。"
			},
			errors: {
				boxTitle: "發生錯誤",
				invalidConfig: "設定無效",
				invalidConfigNoApp: "未在 index.html 中指定 Web 製圖應用程式識別碼。",
				invalidConfigNoAppDev: "試_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________驗.",
				unspecifiedConfigOwner: "尚未設定授權的擁有者。",
				invalidConfigOwner: "未授權故事擁有者。",
				createMap: "無法建立地圖",
				invalidApp: "%TPL_NAME% 不存在或不可存取。",
				appLoadingFail: "發生了一些錯誤， %TPL_NAME% 未正確載入。",
				notConfiguredDesktop: "故事尚未設定。",
				notConfiguredMobile: "試_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________驗.",
				notConfiguredMobile2: "試_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________驗.",
				notAuthorized: "您未取得存取該故事的授權",
				notAuthorizedBuilder: "試_You are not authorized to use %TPL_NAME% builder________________驗.",
				noBuilderIE: "低於版本 %VERSION% 的 Internet Explorer 不支援建構器。%UPGRADE%",
				noViewerIE: "低於版本 %VERSION% 的 Internet Explorer 不支援該故事。%UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>請更新您的瀏覽器</a>。",
				mapLoadingFail: "發生了一些錯誤，地圖未正確載入。",
				signOut: "登出"
			},
			mobileInfo: {
				legend: "圖例",
				description: "描述",
				lblLegendMobileError: "抱歉，圖例不可用。請重新載入故事。",
				lblLegendMobileErrorExplain: "如果設備在載入故事後旋轉到縱向模式，則圖例無法使用。"
			},
			mobileFooter: {
				swipeInvite: "滑動瀏覽故事",
				lblNext: "下一步",
				lblEnd: "您已到達故事末尾"
			},
			headerFromCommon: {
				storymapsText: "故事地圖",
				builderButton: "編輯",
				facebookTooltip: "在 Facebook 上分享",
				twitterTooltip: "在 Twitter 上分享",
				bitlyTooltip: "取得短連結",
				templateTitle: "設置範本標題",
				templateSubtitle: "設置範本子標題",
				share: "分享",
				checking: "正在檢查您的故事內容",
				fix: "修復您故事中的問題",
				noerrors: "偵測不到問題",
				tooltipAutoplayDisabled: "試_This isn't available in autoplay mode____________驗",
				notshared: "試_Story not shared______驗"
			},
			overviewFromCommon: {
				title: "總覽圖"
			},
			legendFromCommon: {
				title: "圖例"
			},
			shareFromCommon: {
				copy: "複製",
				copied: "已複製",
				open: "打開",
				embed: "嵌入到網頁",
				embedExplain: "使用以下 HTML 代碼將故事嵌入到網頁。",
				size: "大小(寬度/高度):",
				autoplayLabel: "試_Autoplay mode_____驗",
				autoplayExplain1: "試_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________驗.",
				autoplayExplain2: "試_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________驗.",
				linksupdated: "試_Links updated_____驗!"
			},
			locatorFromCommon: {
				error: "位置無法使用"
			}
        }
    })
);