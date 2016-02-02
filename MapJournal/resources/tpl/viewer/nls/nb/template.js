define(
	 ({
		viewer: {
			common: {
				close: "Lukk"
			},
			loading: {
				step1: "Laster inn historien",
				step2: "Laster inn data",
				step3: "Initialiserer",
				loadBuilder: "Går over til byggeverktøyet",
				long: "Karthistorie initialiseres",
				long2: "Takk for at du venter",
				failButton: "Last inn historien på nytt"
			},
			signin: {
				title: "Krever godkjenning",
				explainViewer: "Logg på med en konto på %PORTAL_LINK% for å få tilgang til historien.",
				explainBuilder: "Logg på med en konto på %PORTAL_LINK% for å konfigurere historien."
			},
			errors: {
				boxTitle: "Det har oppstått en feil",
				invalidConfig: "Ugyldig konfigurasjon",
				invalidConfigNoApp: "Identifikator for webkartprogram ikke angitt i index.html.",
				invalidConfigNoAppDev: "å_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ø.",
				unspecifiedConfigOwner: "Godkjent eier er ikke konfigurert.",
				invalidConfigOwner: "Historieeier er ikke godkjent.",
				createMap: "Kan ikke opprette kart",
				invalidApp: "%TPL_NAME% finnes ikke eller er ikke tilgjengelig.",
				appLoadingFail: "Noe gikk galt, og %TPL_NAME% ble ikke lastet inn på riktig måte.",
				notConfiguredDesktop: "Historien er ikke konfigurert ennå.",
				notConfiguredMobile: "å_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ø.",
				notConfiguredMobile2: "å_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ø.",
				notAuthorized: "Du har ikke tillatelse til å lese denne historien",
				notAuthorizedBuilder: "å_You are not authorized to use %TPL_NAME% builder________________ø.",
				noBuilderIE: "Byggeverktøyet er ikke støttet i Internet Explorer før versjon %VERSION%. %UPGRADE%",
				noViewerIE: "Denne historien er ikke støttet i Internet Explorer før versjon %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Oppdater webleseren</a>.",
				mapLoadingFail: "å_Something went wrong, the map did not load correctly_________________ø.",
				signOut: "Logg ut"
			},
			mobileView: {
				tapForDetails: "Trykk for å se detaljer",
				clickForDetails: "Få mer informasjon",
				swipeToExplore: "Sveip for å utforske",
				tapForMap: "Trykk for å gå tilbake til kartet",
				clickForMap: "TILBAKE TIL KARTET"
			},
			floatLayout: {
				scroll: "Rull"
			},
			sideLayout: {
				scroll: "Rull nedover for å se mer!"
			},
			mainStage: {
				back: "Tilbake"
			},
			headerFromCommon: {
				storymapsText: "En story map",
				builderButton: "Rediger",
				facebookTooltip: "Del på Facebook",
				twitterTooltip: "Del på Twitter",
				bitlyTooltip: "Få en kort kobling",
				templateTitle: "Angi tittel på malen",
				templateSubtitle: "Angi undertittel for malen",
				share: "Del",
				checking: "Kontrollerer historieinnholdet",
				fix: "Løs problemer i historien",
				noerrors: "Ingen problemer oppdaget",
				tooltipAutoplayDisabled: "å_This isn't available in autoplay mode____________ø",
				notshared: "å_Story not shared______ø"
			},
			overviewFromCommon: {
				title: "Oversiktskart"
			},
			legendFromCommon: {
				title: "Tegnforklaring"
			},
			shareFromCommon: {
				copy: "Kopier",
				copied: "Kopiert",
				open: "Åpne",
				embed: "Bygg inn på webside",
				embedExplain: "Bruk følgende HTML-kode for å bygge inn historien på en webside.",
				size: "Størrelse (bredde/høyde):",
				autoplayLabel: "å_Autoplay mode_____ø",
				autoplayExplain1: "å_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ø.",
				autoplayExplain2: "å_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ø.",
				linksupdated: "å_Links updated_____ø!"
			}
        }
    })
);