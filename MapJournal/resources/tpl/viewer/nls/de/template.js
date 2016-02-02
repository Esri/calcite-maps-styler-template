define(
	 ({
		viewer: {
			common: {
				close: "Schließen"
			},
			loading: {
				step1: "Story wird geladen",
				step2: "Daten werden geladen",
				step3: "Wird initialisiert",
				loadBuilder: "Es wird zum Builder gewechselt",
				long: "Map Journal wird initialisiert",
				long2: "Vielen Dank für Ihre Geduld.",
				failButton: "Story erneut laden"
			},
			signin: {
				title: "Authentifizierung ist erforderlich",
				explainViewer: "Melden Sie sich mit einem Konto bei %PORTAL_LINK% an, um auf die Story zuzugreifen.",
				explainBuilder: "Melden Sie sich mit einem Konto bei %PORTAL_LINK% an, um die Story zu konfigurieren."
			},
			errors: {
				boxTitle: "Ein Fehler ist aufgetreten",
				invalidConfig: "Ungültige Konfiguration",
				invalidConfigNoApp: "Keine Web Mapping-Anwendungskennung in index.html angegeben.",
				invalidConfigNoAppDev: "ä_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Ü.",
				unspecifiedConfigOwner: "Autorisierter Besitzer wurde nicht konfiguriert.",
				invalidConfigOwner: "Besitzer der Story ist nicht autorisiert.",
				createMap: "Karte kann nicht erstellt werden",
				invalidApp: "%TPL_NAME% ist nicht vorhanden oder es kann nicht darauf zugegriffen werden.",
				appLoadingFail: "Ein Fehler ist aufgetreten. %TPL_NAME% wurde nicht korrekt geladen.",
				notConfiguredDesktop: "Die Story ist noch nicht konfiguriert.",
				notConfiguredMobile: "ä_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Ü.",
				notConfiguredMobile2: "ä_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Ü.",
				notAuthorized: "Sie sind nicht autorisiert, auf diese Story zuzugreifen.",
				notAuthorizedBuilder: "ä_You are not authorized to use %TPL_NAME% builder________________Ü.",
				noBuilderIE: "Der Builder wird von Internet Explorer vor Version %VERSION% nicht unterstützt. %UPGRADE%",
				noViewerIE: "Diese Story wird von Internet Explorer vor Version %VERSION% nicht unterstützt. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Aktualisieren Sie Ihren Browser</a>.",
				mapLoadingFail: "ä_Something went wrong, the map did not load correctly_________________Ü.",
				signOut: "Abmelden"
			},
			mobileView: {
				tapForDetails: "Zum Anzeigen von Details tippen",
				clickForDetails: "Weitere Informationen",
				swipeToExplore: "Zum Erkunden streichen",
				tapForMap: "Zum Zurückkehren zur Karte tippen",
				clickForMap: "ZURÜCK ZUR KARTE"
			},
			floatLayout: {
				scroll: "Bildlauf durchführen"
			},
			sideLayout: {
				scroll: "Führen Sie den Bildlauf nach unten durch, um weitere Informationen zu erhalten!"
			},
			mainStage: {
				back: "Zurück"
			},
			headerFromCommon: {
				storymapsText: "Eine Story Map",
				builderButton: "Bearbeiten",
				facebookTooltip: "Auf Facebook freigeben",
				twitterTooltip: "Auf Twitter freigeben",
				bitlyTooltip: "Kurzlink abrufen",
				templateTitle: "Vorlagentitel festlegen",
				templateSubtitle: "Untertitel der Vorlage festlegen",
				share: "Freigeben",
				checking: "Der Inhalt Ihrer Story wird überprüft",
				fix: "Probleme in der Story beheben",
				noerrors: "Keine Probleme erkannt",
				tooltipAutoplayDisabled: "ä_This isn't available in autoplay mode____________Ü",
				notshared: "ä_Story not shared______Ü"
			},
			overviewFromCommon: {
				title: "Übersichtskarte"
			},
			legendFromCommon: {
				title: "Legende"
			},
			shareFromCommon: {
				copy: "Kopieren",
				copied: "Kopiert",
				open: "Öffnen",
				embed: "In Webseite einbetten",
				embedExplain: "Verwenden Sie den folgenden HTML-Code, um das Journal in eine Webseite einzubetten.",
				size: "Größe (Breite/Höhe):",
				autoplayLabel: "ä_Autoplay mode_____Ü",
				autoplayExplain1: "ä_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ü.",
				autoplayExplain2: "ä_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ü.",
				linksupdated: "ä_Links updated_____Ü!"
			}
        }
    })
);