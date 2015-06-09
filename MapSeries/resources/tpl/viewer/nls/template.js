define(
	 ({
		viewer: {
			common: {
				close: "Close"
			},
			loading: {
				long: "Application is initializing",
				long2: "Thanks for waiting",
				failButton: "Reload the application"
			},
			signin: {
				title: "Authentication is required",
				explainViewer: "Please sign in with an account on %PORTAL_LINK% to access the application.",
				explainBuilder: "Please sign in with an account on %PORTAL_LINK% to configure the application."
			},
			errors: {
				boxTitle: "An error has occurred",
				invalidConfig: "Invalid configuration",
				invalidConfigNoApp: "Web Mapping Application identifier not specified in index.html.",
				unspecifiedConfigOwner: "Authorized owner hasn't been configured.",
				invalidConfigOwner: "Application owner is not authorized.",
				createMap: "Unable to create map",
				invalidApp: "The %TPL_NAME% does not exist or is inaccessible.",
				appLoadingFail: "Something went wrong, the %TPL_NAME% did not load correctly.",
				notConfiguredDesktop: "The application is not configured yet.",
				notConfiguredMobile: "The %TPL_NAME% builder is not supported at this screen resolution.",
				notAuthorized: "You are not authorized to access this application",
				noBuilderIE: "The builder is not supported on Internet Explorer before version %VERSION%. %UPGRADE%",
				noViewerIE: "This application is not supported in Internet Explorer before version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Please update your browser</a>.",
				mapLoadingFail: "Something went wrong, the map did not load correctly.",
				signOut: "Sign Out"
			},
			mobileInfo: {
				legend: "Legend",
				description: "Description",
				lblLegendMobileError: "Sorry, the legend is unavailable. Please reload the application.",
				lblLegendMobileErrorExplain: "The legend is not available when the device is rotated to portrait mode after the application is loaded."
			},
			mobileFooter: {
				swipeInvite: "Swipe to navigate the story",
				lblNext: "Next",
				lblEnd: "You have reached the end of the story"
			},
			headerFromCommon: {
				storymapsText: "A story map",
				builderButton: "Edit",
				bitlyTooltip: "Get a short link to the application",
				templateTitle: "Set template title",
				templateSubtitle: "Set template subtitle",
				share: "Share"
			},
			overviewFromCommon: {
				title: "Overview Map"
			},
			legendFromCommon: {
				title: "Legend"
			},
			shareFromCommon: {
				copy: "Copy",
				copied: "Copied",
				open: "Open",
				embed: "Embed in web page",
				embedExplain: "Use the following HTML code to embed the application in a web page.",
				size: "Size (width/height):"
			}
        }
    })
);