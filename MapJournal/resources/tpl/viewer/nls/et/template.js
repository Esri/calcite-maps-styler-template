define(
	 ({
		viewer: {
			common: {
				close: "Sulge"
			},
			loading: {
				step1: "Loo laadimine",
				step2: "Andmete laadimine",
				step3: "Lähtestamine",
				loadBuilder: "Koostajale lülitamine",
				long: "Kaardiajakirja lähtestamine",
				long2: "Täname ootamast",
				failButton: "Laadi lugu uuesti"
			},
			signin: {
				title: "Autentimine on nõutav",
				explainViewer: "Loole juurdepääsuks logige sisse kontoga %PORTAL_LINK%.",
				explainBuilder: "Loo konfigureerimiseks logige sisse kontoga %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Esines tõrge",
				invalidConfig: "Vigane konfiguratsioon",
				invalidConfigNoApp: "Veebikaardi rakenduse identifikaatorit pole failis index.html määratud.",
				invalidConfigNoAppDev: "Š_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ä.",
				unspecifiedConfigOwner: "Autoriseeritud omanikku pole määratud.",
				invalidConfigOwner: "Loo omanikul puuduvad õigused.",
				createMap: "Kaarti ei saa luua",
				invalidApp: "Rakendust %TPL_NAME% ei eksisteeri või see pole kättesaadav.",
				appLoadingFail: "Midagi läks valesti, rakendust %TPL_NAME% ei laaditud õigesti.",
				notConfiguredDesktop: "Lugu pole veel konfigureeritud.",
				notConfiguredMobile: "Š_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ä.",
				notConfiguredMobile2: "Š_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ä.",
				notAuthorized: "Teil puudub õigus sellele loole juurde pääseda",
				notAuthorizedBuilder: "Š_You are not authorized to use %TPL_NAME% builder________________ä.",
				noBuilderIE: "Internet Exploreri versioonist %VERSION% varasemad versioonid ei toeta koostajat. %UPGRADE%",
				noViewerIE: "Seda lugu ei toetata Internet Exploreri varasemas versioonis %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Värskendage oma brauserit</a>.",
				mapLoadingFail: "Š_Something went wrong, the map did not load correctly_________________ä.",
				signOut: "Logi välja"
			},
			mobileView: {
				tapForDetails: "Üksikasjade kuvamiseks puudutage",
				clickForDetails: "Loe lähemalt",
				swipeToExplore: "Uurimiseks svaipige",
				tapForMap: "Kaardile naasmiseks puudutage",
				clickForMap: "TAGASI KAARDI JUURDE"
			},
			floatLayout: {
				scroll: "Keri"
			},
			sideLayout: {
				scroll: "Kerige allapoole, et näha veel teavet!"
			},
			mainStage: {
				back: "Tagasi"
			},
			headerFromCommon: {
				storymapsText: "Kaardilugu",
				builderButton: "Muuda",
				facebookTooltip: "Jaga Facebookis",
				twitterTooltip: "Jaga Twitteris",
				bitlyTooltip: "Hangi lühike link",
				templateTitle: "Määra mallile pealkiri",
				templateSubtitle: "Määra mallile alampealkiri",
				share: "Jaga",
				checking: "Loo sisu vaatamine",
				fix: "Parandage loos ilmnevad probleemid",
				noerrors: "Probleeme ei tuvastatud",
				tooltipAutoplayDisabled: "Š_This isn't available in autoplay mode____________ä",
				notshared: "Š_Story not shared______ä"
			},
			overviewFromCommon: {
				title: "Ülevaatekaart"
			},
			legendFromCommon: {
				title: "Legend"
			},
			shareFromCommon: {
				copy: "Kopeeri",
				copied: "Kopeeritud",
				open: "Ava",
				embed: "Lisa veebilehele",
				embedExplain: "Kasutage ajakirja veebilehele lisamiseks järgmist HTML-koodi.",
				size: "Suurus (laius/kõrgus):",
				autoplayLabel: "Š_Autoplay mode_____ä",
				autoplayExplain1: "Š_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ä.",
				autoplayExplain2: "Š_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ä.",
				linksupdated: "Š_Links updated_____ä!"
			}
        }
    })
);