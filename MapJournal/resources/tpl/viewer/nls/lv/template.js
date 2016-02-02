define(
	 ({
		viewer: {
			common: {
				close: "Aizvērt"
			},
			loading: {
				step1: "Ielādē stāstu",
				step2: "Datu ielāde",
				step3: "Inicializēšana",
				loadBuilder: "Pārslēgšanās uz veidotāju",
				long: "Karšu žurnāls tiek inicializēts",
				long2: "Paldies, ka uzgaidījāt",
				failButton: "Stāsta atkārtota ielāde"
			},
			signin: {
				title: "Nepieciešama autentifikācija",
				explainViewer: "Lai piekļūtu stāstam, pierakstieties portālā %PORTAL_LINK%, izmantojot kontu.",
				explainBuilder: "Lai konfigurētu stāstu, pierakstieties portālā %PORTAL_LINK%, izmantojot kontu."
			},
			errors: {
				boxTitle: "Kļūda",
				invalidConfig: "Nederīga konfigurācija",
				invalidConfigNoApp: "Web kartēšanas aplikācijas identifikators nav norādīts šeit: index.html.",
				invalidConfigNoAppDev: "ķ_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ū.",
				unspecifiedConfigOwner: "Autorizētais īpašnieks nav konfigurēts.",
				invalidConfigOwner: "Stāsta īpašnieks nav autorizēts.",
				createMap: "Nevar izveidot karti",
				invalidApp: "%TPL_NAME% nepastāv vai tai nevar piekļūt.",
				appLoadingFail: "Radās kļūda, %TPL_NAME% netika ielādēta pareizi.",
				notConfiguredDesktop: "Stāsts vēl nav konfigurēts.",
				notConfiguredMobile: "ķ_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ū.",
				notConfiguredMobile2: "ķ_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ū.",
				notAuthorized: "Jūs neesat pilnvarots piekļūt šim stāstam",
				notAuthorizedBuilder: "ķ_You are not authorized to use %TPL_NAME% builder________________ū.",
				noBuilderIE: "Veidotājs netiek atbalstīts Internet Explorer versijās, kas ir jaunākas par %VERSION%. %UPGRADE%",
				noViewerIE: "Šis stāsts netiek atbalstīts Internet Explorer versijās, kas ir vecākas par %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Lūdzu, atjauniniet savu pārlūku</a>.",
				mapLoadingFail: "ķ_Something went wrong, the map did not load correctly_________________ū.",
				signOut: "Izrakstīties"
			},
			mobileView: {
				tapForDetails: "Pieskarieties, lai iegūtu detalizētu informāciju",
				clickForDetails: "Uzziniet vairāk",
				swipeToExplore: "Pavelciet, lai izpētītu",
				tapForMap: "Pieskarieties, lai atgrieztos atpakaļ kartē",
				clickForMap: "ATPAKAĻ UZ KARTI"
			},
			floatLayout: {
				scroll: "Ritināt"
			},
			sideLayout: {
				scroll: "Ritiniet uz leju, lai iegūtu vairāk informācijas."
			},
			mainStage: {
				back: "Atpakaļ"
			},
			headerFromCommon: {
				storymapsText: "Stāstu karte",
				builderButton: "Rediģēt",
				facebookTooltip: "Koplietot Facebook",
				twitterTooltip: "Koplietot Twitter",
				bitlyTooltip: "Iegūt īso saiti",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu",
				share: "Koplietot",
				checking: "Pārbauda jūsu stāsta saturu",
				fix: "Problēmu labošana jūsu stāstā",
				noerrors: "Nav konstatētas problēmas",
				tooltipAutoplayDisabled: "ķ_This isn't available in autoplay mode____________ū",
				notshared: "ķ_Story not shared______ū"
			},
			overviewFromCommon: {
				title: "Pārskata karte"
			},
			legendFromCommon: {
				title: "Leģenda"
			},
			shareFromCommon: {
				copy: "Kopēt",
				copied: "Kopēts",
				open: "Atvērt",
				embed: "Iegult web lapā",
				embedExplain: "Izmantojiet šo HTML kodu, lai iegultu žurnālu web lapā.",
				size: "Izmēri (platums/augstums):",
				autoplayLabel: "ķ_Autoplay mode_____ū",
				autoplayExplain1: "ķ_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ū.",
				autoplayExplain2: "ķ_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ū.",
				linksupdated: "ķ_Links updated_____ū!"
			}
        }
    })
);