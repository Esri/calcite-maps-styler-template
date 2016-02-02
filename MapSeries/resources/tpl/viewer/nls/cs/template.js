define(
	 ({
		viewer: {
			common: {
				close: "Zavřít"
			},
			loading: {
				long: "Příběh se inicializuje",
				long2: "Děkujeme za strpení",
				failButton: "Znovu načíst příběh"
			},
			signin: {
				title: "Je vyžadováno ověření",
				explainViewer: "Pro přístup k příběhu se přihlaste pomocí účtu na %PORTAL_LINK%.",
				explainBuilder: "Chcete-li příběh nakonfigurovat, přihlaste se pomocí účtu na %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Došlo k chybě",
				invalidConfig: "Neplatná konfigurace",
				invalidConfigNoApp: "V souboru index.html není zadán identifikátor aplikace pro webové mapování.",
				invalidConfigNoAppDev: "Ř_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ů.",
				unspecifiedConfigOwner: "Nebyl nakonfigurován autorizovaný vlastník.",
				invalidConfigOwner: "Vlastník příběhu není autorizován.",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "%TPL_NAME% neexistuje nebo není dostupný.",
				appLoadingFail: "Něco se pokazilo, %TPL_NAME% se nenahrál správně.",
				notConfiguredDesktop: "Příběh zatím není nakonfigurován.",
				notConfiguredMobile: "Ř_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ů.",
				notConfiguredMobile2: "Ř_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ů.",
				notAuthorized: "Nejste oprávněni přistupovat k tomuto příběhu",
				notAuthorizedBuilder: "Ř_You are not authorized to use %TPL_NAME% builder________________ů.",
				noBuilderIE: "Nástroj pro tvorbu není podporován v aplikaci Internet Explorer ve verzi nižší než %VERSION%. %UPGRADE%",
				noViewerIE: "Tento příběh není podporován v prohlížeči Internet Explorer ve verzi nižší než %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Aktualizujte prohlížeč</a>.",
				mapLoadingFail: "Něco se pokazilo, mapa se nenahrála správně.",
				signOut: "Odhlásit"
			},
			mobileInfo: {
				legend: "Legenda",
				description: "Popis",
				lblLegendMobileError: "Legenda bohužel není k dispozici. Načtěte příběh znovu.",
				lblLegendMobileErrorExplain: "Legenda nebude k dispozici v případě, že je po načtení příběhu zařízení v režimu na výšku."
			},
			mobileFooter: {
				swipeInvite: "Procházejte příběhem potáhnutím prstem",
				lblNext: "Další",
				lblEnd: "Dosáhli jste konce příběhu"
			},
			headerFromCommon: {
				storymapsText: "Mapa s příběhem",
				builderButton: "Upravit",
				facebookTooltip: "Sdílet na Facebooku",
				twitterTooltip: "Sdílet na Twitteru",
				bitlyTooltip: "Získat krátký odkaz",
				templateTitle: "Zadejte název šablony",
				templateSubtitle: "Zadejte podnadpis šablony",
				share: "Sdílení",
				checking: "Probíhá kontrola obsahu vašeho příběhu",
				fix: "Opravte problémy ve svém příběhu",
				noerrors: "Nebyly nalezeny žádné problémy",
				tooltipAutoplayDisabled: "Ř_This isn't available in autoplay mode____________ů",
				notshared: "Ř_Story not shared______ů"
			},
			overviewFromCommon: {
				title: "Mapa přehledu"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopírovat",
				copied: "Zkopírováno",
				open: "Otevřít",
				embed: "Vložit do webové stránky",
				embedExplain: "Chcete-li příběh vložit do webové stránky, použijte následující kód HTML.",
				size: "Velikost (šířka/výška):",
				autoplayLabel: "Ř_Autoplay mode_____ů",
				autoplayExplain1: "Ř_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ů.",
				autoplayExplain2: "Ř_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ů.",
				linksupdated: "Ř_Links updated_____ů!"
			},
			locatorFromCommon: {
				error: "Umístění není k dispozici"
			}
        }
    })
);