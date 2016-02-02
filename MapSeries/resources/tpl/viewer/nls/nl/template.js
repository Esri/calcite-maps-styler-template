define(
	 ({
		viewer: {
			common: {
				close: "Sluiten"
			},
			loading: {
				long: "Verhaal wordt gestart",
				long2: "Bedankt voor uw geduld",
				failButton: "Het verhaal opnieuw laden"
			},
			signin: {
				title: "Verificatie is vereist",
				explainViewer: "Meld u aan met een account op %PORTAL_LINK% om toegang te krijgen tot het verhaal.",
				explainBuilder: "Meld u aan met een account op %PORTAL_LINK% om het verhaal te configureren."
			},
			errors: {
				boxTitle: "Er is een fout opgetreden",
				invalidConfig: "Ongeldige configuratie",
				invalidConfigNoApp: "Webmapapplicatie-ID niet opgegeven in index.html.",
				invalidConfigNoAppDev: "Ĳ_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ä.",
				unspecifiedConfigOwner: "De gemachtigde eigenaar is niet geconfigureerd.",
				invalidConfigOwner: "De eigenaar van het verhaal is niet gemachtigd.",
				createMap: "Kan geen kaart creëren",
				invalidApp: "De %TPL_NAME% bestaat niet of is niet toegankelijk.",
				appLoadingFail: "Er is een probleem opgetreden. De %TPL_NAME% is niet correct geladen.",
				notConfiguredDesktop: "Het verhaal is nog niet geconfigureerd.",
				notConfiguredMobile: "Ĳ_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ä.",
				notConfiguredMobile2: "Ĳ_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ä.",
				notAuthorized: "U bent niet gemachtigd om dit verhaal te openen",
				notAuthorizedBuilder: "Ĳ_You are not authorized to use %TPL_NAME% builder________________ä.",
				noBuilderIE: "De builder wordt niet ondersteund op eerdere versies van Internet Explorer dan versie %VERSION%. %UPGRADE%",
				noViewerIE: "Dit verhaal wordt niet ondersteund op eerdere versies van Internet Explorer dan versie %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Werk uw browser bij</a>.",
				mapLoadingFail: "Er is een probleem opgetreden. De kaart is niet correct geladen.",
				signOut: "Afmelden"
			},
			mobileInfo: {
				legend: "Legenda",
				description: "Beschrijving",
				lblLegendMobileError: "Sorry, de legenda is niet beschikbaar. Laad het verhaal opnieuw.",
				lblLegendMobileErrorExplain: "De legenda is niet beschikbaar als het apparaat gedraaid is naar portretstand nadat het verhaal geladen is."
			},
			mobileFooter: {
				swipeInvite: "Vegen om het verhaal te navigeren",
				lblNext: "Volgende",
				lblEnd: "U heeft het eind van het verhaal bereikt"
			},
			headerFromCommon: {
				storymapsText: "Een kaartverhaal",
				builderButton: "Bewerken",
				facebookTooltip: "Delen op Facebook",
				twitterTooltip: "Delen op Twitter",
				bitlyTooltip: "Ontvang een korte URL",
				templateTitle: "Titel voor template instellen",
				templateSubtitle: "Subtitel voor template instellen",
				share: "Delen",
				checking: "Controleren van uw verhaalcontent",
				fix: "Fouten in uw verhaal corrigeren",
				noerrors: "Geen problemen gedetecteerd",
				tooltipAutoplayDisabled: "Ĳ_This isn't available in autoplay mode____________ä",
				notshared: "Ĳ_Story not shared______ä"
			},
			overviewFromCommon: {
				title: "Overzichtskaart"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopiëren",
				copied: "Gekopieerd",
				open: "Openen",
				embed: "Inbedden in webpagina",
				embedExplain: "Gebruik de volgende HTML-code om het verhaal in een webpagina in te sluiten.",
				size: "Grootte (breedte/hoogte):",
				autoplayLabel: "Ĳ_Autoplay mode_____ä",
				autoplayExplain1: "Ĳ_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ä.",
				autoplayExplain2: "Ĳ_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ä.",
				linksupdated: "Ĳ_Links updated_____ä!"
			},
			locatorFromCommon: {
				error: "Locatie niet beschikbaar"
			}
        }
    })
);