define(
	 ({
		viewer: {
			common: {
				close: "Užverti"
			},
			loading: {
				long: "Pasakojimas paleidžiamas",
				long2: "Ačiū, kad palaukėte.",
				failButton: "Įkelti pasakojimą iš naujo"
			},
			signin: {
				title: "Autentifikacija būtina",
				explainViewer: "Norėdami pasiekti pasakojimą, prisijunkite prie paskyros, esančios %PORTAL_LINK%.",
				explainBuilder: "Norėdami konfigūruoti pasakojimą, prisijunkite prie paskyros, esančios %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Įvyko klaida",
				invalidConfig: "Neteisinga konfigūracija",
				invalidConfigNoApp: "Interneto žemėlapių aplikacijos identifikatorius nenurodytas index.html.",
				invalidConfigNoAppDev: "Į_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________š.",
				unspecifiedConfigOwner: "Nesukonfigūruotas teisėtas savininkas.",
				invalidConfigOwner: "Pasakojimo savininkas neautorizuotas.",
				createMap: "Žemėlapio sukurti nepavyko",
				invalidApp: "%TPL_NAME% neegzistuoja arba yra nepasiekiamas.",
				appLoadingFail: "Įvyko klaida ir tinkamai įkelti %TPL_NAME% nepavyko.",
				notConfiguredDesktop: "Pasakojimas dar nesukonfigūruotas.",
				notConfiguredMobile: "Į_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________š.",
				notConfiguredMobile2: "Į_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________š.",
				notAuthorized: "Neturite teisių pasiekti šį pasakojimą",
				notAuthorizedBuilder: "Į_You are not authorized to use %TPL_NAME% builder________________š.",
				noBuilderIE: "Kūrimo priemonė neveikia „Internet Explorer“, jei jo versija mažesnė nei %VERSION%. %UPGRADE%",
				noViewerIE: "Pasakojimas neveikia Internet Explorer, jei jo versija senesnė nei %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Atnaujinkite naršyklę</a>.",
				mapLoadingFail: "Įvyko klaida ir žemėlapio nepavyko tinkamai įkelti.",
				signOut: "Atsijungti"
			},
			mobileInfo: {
				legend: "Legenda",
				description: "Aprašas",
				lblLegendMobileError: "Deja, legenda negalima. Įkelkite pasakojimą iš naujo.",
				lblLegendMobileErrorExplain: "Legenda negalima, kai įrenginys pasukamas į statųjį režimą po to, kai pasakojimas įkeltas."
			},
			mobileFooter: {
				swipeInvite: "Perbraukite, kad pereitumėte prie kito pasakojimo",
				lblNext: "Kitas",
				lblEnd: "Pasiekėte pasakojimo pabaigą"
			},
			headerFromCommon: {
				storymapsText: "Žemėlapis su pasakojimu",
				builderButton: "Redaguoti",
				facebookTooltip: "Dalintis Facebook",
				twitterTooltip: "Dalintis Twitter",
				bitlyTooltip: "Gauti trumpą nuorodą",
				templateTitle: "Nustatyti šablono antraštę",
				templateSubtitle: "Nustatyti šablono paantraštę",
				share: "Bendrinti",
				checking: "Tikrinamas pasakojimo turinys",
				fix: "Taisyti pasakojimo nesklandumus",
				noerrors: "Nesklandumų neaptikta",
				tooltipAutoplayDisabled: "Į_This isn't available in autoplay mode____________š",
				notshared: "Į_Story not shared______š"
			},
			overviewFromCommon: {
				title: "Apžvalga"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopijuoti",
				copied: "Nukopijuota",
				open: "Atverti",
				embed: "Įterpti į tinklalapį",
				embedExplain: "Jei į pasakojimą norite įterpti žurnalą, naudokite šį HTML kodą.",
				size: "Dydis (plotis / aukštis):",
				autoplayLabel: "Į_Autoplay mode_____š",
				autoplayExplain1: "Į_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________š.",
				autoplayExplain2: "Į_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________š.",
				linksupdated: "Į_Links updated_____š!"
			},
			locatorFromCommon: {
				error: "Vietovė neprieinama"
			}
        }
    })
);