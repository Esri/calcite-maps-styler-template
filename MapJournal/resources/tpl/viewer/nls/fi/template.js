define(
	 ({
		viewer: {
			common: {
				close: "Sulje"
			},
			loading: {
				step1: "Ladataan tarinaa",
				step2: "Ladataan aineistoa",
				step3: "Käynnistetään",
				loadBuilder: "Vaihdetaan luontitoimintoon",
				long: "Karttapäiväkirjaa alustetaan",
				long2: "Odota hetki",
				failButton: "Lataa tarina uudelleen"
			},
			signin: {
				title: "Todennus on pakollinen",
				explainViewer: "Kirjaudu sisään %PORTAL_LINK%-sivuston tilillä käyttääksesi tarinaa.",
				explainBuilder: "Kirjaudu sisään %PORTAL_LINK%-sivuston tilillä määrittääksesi tarinan."
			},
			errors: {
				boxTitle: "Tapahtui virhe",
				invalidConfig: "Virheellinen määritys",
				invalidConfigNoApp: "Web-karttasovelluksen tunnusta ei ole määritetty index.html-tiedostossa.",
				invalidConfigNoAppDev: "Å_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ö.",
				unspecifiedConfigOwner: "Valtuutettua omistajaa ei ole määritetty.",
				invalidConfigOwner: "Tarinan omistajalla ei ole valtuuksia.",
				createMap: "Karttaa ei voi luoda",
				invalidApp: "Kohdetta %TPL_NAME% ei ole, tai se ei ole käytettävissä.",
				appLoadingFail: "Tapahtui virhe, eikä %TPL_NAME% latautunut oikein.",
				notConfiguredDesktop: "Tarinaa ei ole vielä määritetty.",
				notConfiguredMobile: "Å_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ö.",
				notConfiguredMobile2: "Å_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ö.",
				notAuthorized: "Sinulla ei ole tämän tarinan käyttöoikeuksia",
				notAuthorizedBuilder: "Å_You are not authorized to use %TPL_NAME% builder________________ö.",
				noBuilderIE: "Luontitoimintoa ei tueta Internet Explorerin versiota %VERSION% edeltävissä versioissa. %UPGRADE%",
				noViewerIE: "Tarinaa ei tueta Internet Explorerin versiota %VERSION% edeltävissä versioissa. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Päivitä selain</a>.",
				mapLoadingFail: "Å_Something went wrong, the map did not load correctly_________________ö.",
				signOut: "Kirjaudu ulos"
			},
			mobileView: {
				tapForDetails: "Saat tiedot näkyviin napauttamalla",
				clickForDetails: "Lisätietoja",
				swipeToExplore: "Tutki pyyhkäisemällä",
				tapForMap: "Siirry takaisin karttaan napauttamalla",
				clickForMap: "TAKAISIN KARTTAAN"
			},
			floatLayout: {
				scroll: "Vieritä"
			},
			sideLayout: {
				scroll: "Saat lisää tietoja näkyviin vierittämällä alaspäin."
			},
			mainStage: {
				back: "Takaisin"
			},
			headerFromCommon: {
				storymapsText: "Tarinakartta",
				builderButton: "Muokkaa",
				facebookTooltip: "Jaa Facebookissa",
				twitterTooltip: "Jaa Twitterissä",
				bitlyTooltip: "Hanki lyhyt linkki",
				templateTitle: "Määritä mallin nimi",
				templateSubtitle: "Määritä mallin alaotsikko",
				share: "Jaa",
				checking: "Tarkistetaan tarinan sisältöä",
				fix: "Korjaa tarinan ongelmat",
				noerrors: "Yhtään ongelmaa ei havaittu",
				tooltipAutoplayDisabled: "Å_This isn't available in autoplay mode____________ö",
				notshared: "Å_Story not shared______ö"
			},
			overviewFromCommon: {
				title: "Yleiskatsauskartta"
			},
			legendFromCommon: {
				title: "Selite"
			},
			shareFromCommon: {
				copy: "Kopioi",
				copied: "Kopioitu",
				open: "Avaa",
				embed: "Upota Web-sivulle",
				embedExplain: "Käytä seuraavaa HTML-koodia päiväkirjan upottamiseen Web-sivulle.",
				size: "Koko (leveys/korkeus):",
				autoplayLabel: "Å_Autoplay mode_____ö",
				autoplayExplain1: "Å_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ö.",
				autoplayExplain2: "Å_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ö.",
				linksupdated: "Å_Links updated_____ö!"
			}
        }
    })
);