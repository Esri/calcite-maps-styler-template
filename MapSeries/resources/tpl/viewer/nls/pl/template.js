define(
	 ({
		viewer: {
			common: {
				close: "Zamknij"
			},
			loading: {
				long: "Trwa inicjowanie narracji",
				long2: "Dziękujemy za cierpliwość",
				failButton: "Wczytaj ponownie narrację"
			},
			signin: {
				title: "Wymagane jest uwierzytelnienie",
				explainViewer: "Aby uzyskać dostęp do narracji, zaloguj się na konto w portalu %PORTAL_LINK%.",
				explainBuilder: "Aby skonfigurować narrację, zaloguj się na konto w portalu %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Wystąpił błąd",
				invalidConfig: "Nieprawidłowa konfiguracja",
				invalidConfigNoApp: "Identyfikator aplikacji tworzenia map internetowych nie został określony w pliku index.html.",
				invalidConfigNoAppDev: "ł_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ą.",
				unspecifiedConfigOwner: "Nie skonfigurowano autoryzowanego właściciela.",
				invalidConfigOwner: "Właściciel narracji nie jest autoryzowany.",
				createMap: "Nie można utworzyć mapy",
				invalidApp: "%TPL_NAME% nie istnieje lub jest niedostępna.",
				appLoadingFail: "Wystąpił pewien problem, nie wczytano prawidłowo %TPL_NAME%.",
				notConfiguredDesktop: "Narracja nie została jeszcze skonfigurowana.",
				notConfiguredMobile: "ł_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ą.",
				notConfiguredMobile2: "ł_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ą.",
				notAuthorized: "Nie masz uprawnień dostępu do tej narracji",
				notAuthorizedBuilder: "ł_You are not authorized to use %TPL_NAME% builder________________ą.",
				noBuilderIE: "Kreator nie jest obsługiwany przez przeglądarkę Internet Explorer w wersji starszej niż %VERSION%. %UPGRADE%",
				noViewerIE: "Ta narracja nie jest obsługiwana przez przeglądarkę Internet Explorer w wersji starszej niż %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Zaktualizuj przeglądarkę</a>.",
				mapLoadingFail: "Wystąpił pewien problem, nie wczytano mapy prawidłowo.",
				signOut: "Wyloguj się"
			},
			mobileInfo: {
				legend: "Legenda",
				description: "Opis",
				lblLegendMobileError: "Przepraszamy, legenda jest niedostępna. Wczytaj ponownie narrację.",
				lblLegendMobileErrorExplain: "Legenda nie jest dostępna, gdy po wczytaniu narracji urządzenie zostanie obrócone do orientacji pionowej."
			},
			mobileFooter: {
				swipeInvite: "Zwiń, aby poruszać się po scenariuszu",
				lblNext: "Dalej",
				lblEnd: "Znajdujesz się na końcu scenariusza"
			},
			headerFromCommon: {
				storymapsText: "mapa narracji (Story Map)",
				builderButton: "Edytuj",
				facebookTooltip: "Udostępnij na Facebooku",
				twitterTooltip: "Udostępnij na Twitterze",
				bitlyTooltip: "Utwórz skrócone łącze",
				templateTitle: "Skonfiguruj tytuł szablonu",
				templateSubtitle: "Skonfiguruj podtytuł szablonu",
				share: "Udostępnij",
				checking: "Trwa sprawdzanie zawartości narracji",
				fix: "Rozwiąż problemy z narracją",
				noerrors: "Nie wykryto problemów",
				tooltipAutoplayDisabled: "ł_This isn't available in autoplay mode____________ą",
				notshared: "ł_Story not shared______ą"
			},
			overviewFromCommon: {
				title: "Mapa przeglądowa"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopiuj",
				copied: "Skopiowane",
				open: "Otwórz",
				embed: "Osadzono na stronie internetowej",
				embedExplain: "Aby umieścić narrację w witrynie internetowej, skorzystaj z poniższego kodu HTML.",
				size: "Rozmiar (szerokość/wysokość):",
				autoplayLabel: "ł_Autoplay mode_____ą",
				autoplayExplain1: "ł_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ą.",
				autoplayExplain2: "ł_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ą.",
				linksupdated: "ł_Links updated_____ą!"
			},
			locatorFromCommon: {
				error: "Lokalizacja niedostępna"
			}
        }
    })
);