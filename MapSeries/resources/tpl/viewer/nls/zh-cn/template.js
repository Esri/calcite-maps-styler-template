define(
	 ({
		viewer: {
			common: {
				close: "关闭"
			},
			loading: {
				long: "故事正在初始化",
				long2: "谢谢等候",
				failButton: "重新加载故事"
			},
			signin: {
				title: "需要进行身份验证",
				explainViewer: "请登录在 %PORTAL_LINK% 上的账户，以便访问此故事。",
				explainBuilder: "请登录在 %PORTAL_LINK% 上的账户，以便配置此故事。"
			},
			errors: {
				boxTitle: "发生错误",
				invalidConfig: "配置无效",
				invalidConfigNoApp: "未在 index.html 中指定 Web 制图应用程序标识符。",
				invalidConfigNoAppDev: "试_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________验.",
				unspecifiedConfigOwner: "尚未配置授权的所有者。",
				invalidConfigOwner: "未授权故事所有者。",
				createMap: "无法创建地图",
				invalidApp: "%TPL_NAME% 不存在或不可访问。",
				appLoadingFail: "发生了一些错误， %TPL_NAME% 未正确加载。",
				notConfiguredDesktop: "尚未配置此故事。",
				notConfiguredMobile: "试_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________验.",
				notConfiguredMobile2: "试_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________验.",
				notAuthorized: "您无权访问此故事",
				notAuthorizedBuilder: "试_You are not authorized to use %TPL_NAME% builder________________验.",
				noBuilderIE: "低于版本 %VERSION% 的 Internet Explorer 不支持构建器。%UPGRADE%",
				noViewerIE: "低于版本 %VERSION%. %UPGRADE% 的 Internet Explorer 不支持此故事。",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>请更新您的浏览器</a>。",
				mapLoadingFail: "发生了一些错误，地图未正确加载。",
				signOut: "登出"
			},
			mobileInfo: {
				legend: "图例",
				description: "描述",
				lblLegendMobileError: "抱歉，图例不可用。请重新加载故事。",
				lblLegendMobileErrorExplain: "如果设备在加载故事后旋转到纵向模式，则图例不可用。"
			},
			mobileFooter: {
				swipeInvite: "滑动浏览故事",
				lblNext: "下一页",
				lblEnd: "您已到达故事末尾"
			},
			headerFromCommon: {
				storymapsText: "故事地图",
				builderButton: "编辑",
				facebookTooltip: "共享至 Facebook",
				twitterTooltip: "共享至 Twitter",
				bitlyTooltip: "获取短链接",
				templateTitle: "设置模板标题",
				templateSubtitle: "设置模板子标题",
				share: "共享",
				checking: "正在检查您的故事内容",
				fix: "修复在您故事中的问题",
				noerrors: "未检测到问题",
				tooltipAutoplayDisabled: "试_This isn't available in autoplay mode____________验",
				notshared: "试_Story not shared______验"
			},
			overviewFromCommon: {
				title: "总览图"
			},
			legendFromCommon: {
				title: "图例"
			},
			shareFromCommon: {
				copy: "复制",
				copied: "已复制",
				open: "打开",
				embed: "嵌入到网页",
				embedExplain: "使用以下 HTML 代码将故事嵌入到 Web 页面中。",
				size: "大小(宽度/高度):",
				autoplayLabel: "试_Autoplay mode_____验",
				autoplayExplain1: "试_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________验.",
				autoplayExplain2: "试_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________验.",
				linksupdated: "试_Links updated_____验!"
			},
			locatorFromCommon: {
				error: "位置不可用"
			}
        }
    })
);