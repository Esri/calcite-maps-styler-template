define(
	 ({
		viewer: {
			common: {
				close: "Stäng"
			},
			loading: {
				long: "Berättelsen initieras",
				long2: "Tack för att du väntar",
				failButton: "Uppdatera berättelsen"
			},
			signin: {
				title: "Autentisering krävs",
				explainViewer: "Logga in med ett konto på %PORTAL_LINK% om du vill få åtkomst till berättelsen.",
				explainBuilder: "Logga in med ett konto på %PORTAL_LINK% om du vill konfigurera berättelsen."
			},
			errors: {
				boxTitle: "Ett fel har inträffat",
				invalidConfig: "Ogiltig konfiguration",
				invalidConfigNoApp: "Webbkartapplikationens identifierare anges inte i index.html.",
				invalidConfigNoAppDev: "Å_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ö.",
				unspecifiedConfigOwner: "Ingen auktoriserad ägare har konfigurerats.",
				invalidConfigOwner: "Berättelsens ägare är inte auktoriserad.",
				createMap: "Det går inte att skapa kartan",
				invalidApp: "%TPL_NAME% finns inte eller går inte att komma åt.",
				appLoadingFail: "Något gick fel, %TPL_NAME% lästes inte in korrekt.",
				notConfiguredDesktop: "Berättelsen har inte konfigurerats ännu.",
				notConfiguredMobile: "Å_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ö.",
				notConfiguredMobile2: "Å_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ö.",
				notAuthorized: "Du är inte behörig att få åtkomst till den här berättelsen",
				notAuthorizedBuilder: "Å_You are not authorized to use %TPL_NAME% builder________________ö.",
				noBuilderIE: "Byggverktyget kan inte användas med Internet Explorer tidigare än version %VERSION%. %UPGRADE%",
				noViewerIE: "Den här berättelsen kan inte användas med Internet Explorer tidigare än version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Uppdatera din webbläsare</a>.",
				mapLoadingFail: "Något gick fel, kartan lästes inte in på rätt sätt.",
				signOut: "Logga ut"
			},
			mobileInfo: {
				legend: "Teckenförklaring",
				description: "Beskrivning",
				lblLegendMobileError: "Teckenförklaringen är inte tillgänglig. Läs in berättelsen igen.",
				lblLegendMobileErrorExplain: "Teckenförklaringen är inte tillgänglig när enheten roteras till liggande läge efter att berättelsen har startats."
			},
			mobileFooter: {
				swipeInvite: "Svep när du vill navigera i berättelsen",
				lblNext: "Nästa",
				lblEnd: "Du har nått slutet av berättelsen"
			},
			headerFromCommon: {
				storymapsText: "En berättelsekarta",
				builderButton: "Redigera",
				facebookTooltip: "Dela på Facebook",
				twitterTooltip: "Dela på Twitter",
				bitlyTooltip: "Hämta en kort länk",
				templateTitle: "Ange malltitel",
				templateSubtitle: "Ange underrubrik för mallen",
				share: "Dela",
				checking: "Kontrollerar berättelsens innehåll",
				fix: "Lös problem i berättelsen",
				noerrors: "Inga problem upptäcktes",
				tooltipAutoplayDisabled: "Å_This isn't available in autoplay mode____________ö",
				notshared: "Å_Story not shared______ö"
			},
			overviewFromCommon: {
				title: "Översiktskarta"
			},
			legendFromCommon: {
				title: "Teckenförklaring"
			},
			shareFromCommon: {
				copy: "Kopiera",
				copied: "Kopierad",
				open: "Öppna",
				embed: "Bädda in på webbplats",
				embedExplain: "Använd följande HTML-kod om du vill bädda in berättelsen på en webbsida.",
				size: "Storlek (bredd/höjd):",
				autoplayLabel: "Å_Autoplay mode_____ö",
				autoplayExplain1: "Å_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ö.",
				autoplayExplain2: "Å_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ö.",
				linksupdated: "Å_Links updated_____ö!"
			},
			locatorFromCommon: {
				error: "Ingen plats finns tillgänglig"
			}
        }
    })
);