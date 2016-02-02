define(
	 ({
		viewer: {
			common: {
				close: "Luk"
			},
			loading: {
				step1: "Indlæser historie",
				step2: "Indlæser data",
				step3: "Initialiserer",
				loadBuilder: "Skifter til builder-programmet",
				long: "Kortjournal starter",
				long2: "Tak, fordi du venter",
				failButton: "Genindlæs historie"
			},
			signin: {
				title: "Godkendelse kræves",
				explainViewer: "Log ind med en konto på %PORTAL_LINK% for at få adgang til historien.",
				explainBuilder: "Log ind med en konto på %PORTAL_LINK% for at konfigurere historien."
			},
			errors: {
				boxTitle: "Der opstod en fejl",
				invalidConfig: "Ugyldig konfiguration",
				invalidConfigNoApp: "Webkortapplikation-identifikatoren er ikke angivet i index.html.",
				invalidConfigNoAppDev: "ø_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________å.",
				unspecifiedConfigOwner: "Der er ikke konfigureret en uautoriseret ejer.",
				invalidConfigOwner: "Historieejeren er ikke autoriseret.",
				createMap: "Kan ikke oprette kort",
				invalidApp: "%TPL_NAME% findes ikke, eller der er ikke adgang.",
				appLoadingFail: "Der er noget galt, for %TPL_NAME% blev ikke indlæst korrekt.",
				notConfiguredDesktop: "Historien er endnu ikke blevet konfigureret.",
				notConfiguredMobile: "ø_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________å.",
				notConfiguredMobile2: "ø_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________å.",
				notAuthorized: "Du er ikke autoriseret til at få adgang til denne historie",
				notAuthorizedBuilder: "ø_You are not authorized to use %TPL_NAME% builder________________å.",
				noBuilderIE: "Builder-programmet understøttes ikke i Internet Explorer før version %VERSION%. %UPGRADE%",
				noViewerIE: "Denne historie understøttes ikke i Internet Explorer før version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Opdatér din browser</a>.",
				mapLoadingFail: "ø_Something went wrong, the map did not load correctly_________________å.",
				signOut: "Log ud"
			},
			mobileView: {
				tapForDetails: "Tryk for at få oplysninger",
				clickForDetails: "Find ud af mere",
				swipeToExplore: "Stryg med fingeren for at udforske",
				tapForMap: "Tryk for at vende tilbage til kortet",
				clickForMap: "TILBAGE TIL KORT"
			},
			floatLayout: {
				scroll: "Rul"
			},
			sideLayout: {
				scroll: "Rul ned for at se mere!"
			},
			mainStage: {
				back: "Tilbage"
			},
			headerFromCommon: {
				storymapsText: "Et historiekort",
				builderButton: "Redigér",
				facebookTooltip: "Del på Facebook",
				twitterTooltip: "Del på Twitter",
				bitlyTooltip: "Hent et kort link",
				templateTitle: "Indstil skabelontitel",
				templateSubtitle: "Indstil skabelonundertitel",
				share: "Del",
				checking: "Kontrollerer dit historieindhold",
				fix: "Ret fejl i din historie",
				noerrors: "Ingen problemer registreret",
				tooltipAutoplayDisabled: "ø_This isn't available in autoplay mode____________å",
				notshared: "ø_Story not shared______å"
			},
			overviewFromCommon: {
				title: "Oversigtskort"
			},
			legendFromCommon: {
				title: "Signaturforklaring"
			},
			shareFromCommon: {
				copy: "Kopiér",
				copied: "Kopieret",
				open: "Åbn",
				embed: "Indlejr i webside",
				embedExplain: "Brug følgende HTML-kode til at indlejre journalen i en webside.",
				size: "Størrelse (bredde/højde):",
				autoplayLabel: "ø_Autoplay mode_____å",
				autoplayExplain1: "ø_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________å.",
				autoplayExplain2: "ø_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________å.",
				linksupdated: "ø_Links updated_____å!"
			}
        }
    })
);