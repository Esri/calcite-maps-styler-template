define(
({
		viewer: {
			loading: {
				step1: "Chargement de l'application",
				step2: "Chargement des données",
				step3: "Initialization",
				loadBuilder: "Switching to builder",
				redirectSignIn: "Redirecting to Sign-in page",
				redirectSignIn2: "(you will be redirected here after sign-in)",
				fail: "Sorry, loading failed",
				failButton: "Retry"
			},
			errors: {
				boxTitle: "An error has occurred",
				portalSelf: "Fatal error: Failed to get portal configuration",
				invalidConfig: "Fatal error: Invalid configuration",
				invalidConfigOwner: "Fatal error: Invalid configuration (authorized owner required)",
				invalidConfigNoWebmap: "Fatal error: Invalid configuration (web map or application identifier not specified in index.html)",
				createMap: "Unable to create map",
				invalidApp: "Fatal error: The application cannot be loaded",
				/* TODO: remove this two? */
				noLayer: "The web map does not contain a valid data layer for Map Tour.",
				noLayerMobile: "Welcome to the Map Tour web application. The application is not configured. The Map Tour builder is not supported on mobile devices.",
				noLayerView: "Welcome to the Map Tour web application.<br />The application is not configured yet.",
				notAuthorized: "You are not authorized to access this application",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9."
			},
			mobile: {
				navList: "Liste",
				navMap: "Carte",
				navDetail: "Detail"
			},
			sidePanel: {
				editTooltip: "Set the side panel description",
				editMe: "Edit me !"
			},
			commonHeader: {
				storymapsText: "A story map",
				builderButton: "Edit",
				bitlyTooltip: "Get a short link to the application",
				editMe: "Edit me!",
				templateTitle: "Set template title",
				templateSubtitle: "Set template subtitle"
			}
        }
    })
);