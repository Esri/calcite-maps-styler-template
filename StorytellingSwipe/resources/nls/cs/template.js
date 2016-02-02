define(
	 ({
		viewer: {
			loading: {
				step1: "NAČÍTÁNÍ PŘÍBĚHU",
				step2: "NAHRÁVÁNÍ DAT",
				step3: "INICIALIZACE",
				fail: "Nepodařilo se načíst nástroj překrývání.",
				loadBuilder: "PŘEPÍNÁNÍ DO REŽIMU TVORBY",
				redirectSignIn: "PROBÍHÁ PŘESMĚROVÁNÍ NA PŘIHLAŠOVACÍ STRÁNKU",
				redirectSignIn2: "(budete sem přesměrováni po přihlášení)",
				failButton: "Zkusit znovu"
			},
			errors: {
				boxTitle: "Nastala chyba",
				portalSelf: "Závažná chyba: Nepodařilo se získat konfiguraci portálu.",
				invalidConfig: "Závažná chyba: Neplatná konfigurace",
				invalidConfigNoWebmap: "Ř_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ů",
				invalidConfigNoAppDev: "Ř_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ů.",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "Závažná chyba: Příběh nelze načíst",
				initMobile: "Vítejte ve webové aplikaci pro překrývání. Aplikace není nakonfigurována. Interaktivní nástroj pro tvorbu není podporován v mobilních zařízeních.",
				initMobile2: "Ř_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ů.",
				initMobile3: "Ř_Please rotate your device to landscape orientation to use the Swipe builder________________________ů.",
				noBuilderIE8: "Interaktivní nástroj pro tvorbu překrývání není podporován v programu Internet Explorer verze nižší než 9.",
				noLayerView: "Vítejte ve webové aplikaci pro překrývání.<br />Aplikace zatím není nakonfigurována.",
				appSave: "Chyba při ukládání webového příběhu",
				mapSave: "Chyba při ukládání webové mapy",
				notAuthorized: "Nejste oprávněni přistupovat k tomuto příběhu",
				notAuthorizedBuilder: "Ř_You are not authorized to use Swipe and Spyglass builder__________________ů.",
				conflictingProjectionsTitle: "Konfliktní projekce",
				conflictingProjections: "Překrývání nepodporuje používání dvou webových map s různými projekcemi. Otevřete nastavení a použijte webovou mapu, která využívá stejnou projekci jako první webová mapa.",
				cpButton: "Zavřít",
				unspecifiedConfigOwner: "Nebyl nakonfigurován autorizovaný vlastník.",
				invalidConfigOwner: "Vlastník příběhu není autorizován."
			},
			mobileView: {
				hideIntro: "SKRÝT ÚVOD",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Mapa s příběhem",
				builderButton: "Přepnout do režimu tvorby",
				facebookTooltip: "Sdílet na Facebooku",
				twitterTooltip: "Sdílet na Twitteru",
				bitlyTooltip: "Získat krátký odkaz",
				tooltipAutoplayDisabled: "Ř_This isn't available in autoplay mode____________ů",
				autoplayLabel: "Ř_Autoplay mode_____ů",
				autoplayExplain1: "Ř_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ů.",
				autoplayExplain2: "Ř_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ů."
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURACE PŘÍBĚHU",
				buttonSave: "ULOŽIT",
				buttonHelp: "Nápověda",
				buttonShare: "Sdílet",
				buttonDiscard: "ZRUŠIT",
				buttonSettings: "Nastavení",
				buttonView: "Režim prohlížení",
				buttonItem: "Otevřít položku webové aplikace",
				noPendingChange: "Žádná neuložená změna",
				unSavedChangeSingular: "1 neuložená změna",
				unSavedChangePlural: "neuložených změn",
				popoverDiscard: "Určitě chcete přijít o všechny neuložené změny?",
				yes: "Ano",
				no: "Ne",
				popoverOpenViewExplain: "Otevřením tohoto prohlížeče přijdete o všechny neuložené změny.",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Storno",
				popoverSaveWhenDone: "Až budete hotovi, nezapomeňte provedené změny uložit.",
				closeWithPendingChange: "Určitě chcete potvrdit tuto akci? Změny se neuloží.",
				gotIt: "OK",
				savingApplication: "Ukládání příběhu",
				saveSuccess: "Ř_Story saved____ů",
				saveError: "Ukládání se nezdařilo, zkuste to znovu.",
				saveError2: "Ukládání selhalo kvůli neplatnému HTML tagu v názvu nebo popisu.",
				saveError3: "Název nesmí být prázdný",
				signIn: "Přihlaste se pomocí účtu na",
				signInTwo: "pro uložení příběhu."
			},
			header:{
				editMe: "Edituj mě!",
				templateTitle: "Nastavit název šablony",
				templateSubtitle: "Nastavit podnadpis šablony"
			},
			settings: {
				settingsHeader: "Nastavení příběhu",
				modalCancel: "Storno",
				modalApply: "Použít"
			},
			settingsColors: {
				settingsTabColor: "Motiv",
				settingsColorExplain: "Vyberte motiv aplikace nebo vyberte vlastní barvy.",
				settingsLabelColor: "Barvy pozadí postranního panelu a záhlaví"
			},
			settingsHeader: {
				settingsTabLogo: "Záhlaví",
				settingsLogoExplain: "Přizpůsobte logo v záhlaví (maximum je 250×50 px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Bez loga",
				settingsLogoCustom: "Vlastní logo",
				settingsLogoCustomPlaceholder: "URL obrázku",
				settingsLogoCustomTargetPlaceholder: "Odkaz při kliknutí na obrázek",
				settingsLogoSocialExplain: "Přizpůsobte odkaz v pravé horní části záhlaví.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Odkaz",
				settingsLogoSocialDisabled: "Tato funkce byla zakázána administrátorem."
			},
			settingsExtent: {
				settingsTabExtent: "Rozsah",
				settingsExtentExplain: "Prostřednictvím následující interaktivní mapy nastavte výchozí rozsah.",
				settingsExtentExplainBottom: "Podle zadaného rozsahu se upraví výchozí rozsah webové mapy. Vytváříte-li sérii překrývání, tento rozsah se nepoužije.",
				settingsExtentDateLineError: "Rozsah nesmí přesahovat 180° zeměpisné délky",
				settingsExtentDateLineError2: "Při výpočtu rozsahu došlo k chybě",
				settingsExtentDrawBtn: "Určit nový rozsah",
				settingsExtentModifyBtn: "Editovat aktuální rozsah",
				settingsExtentApplyBtn: "Použít v hlavní mapě",
				settingsExtentUseMainMap: "Použít rozsah hlavní mapy"
			}
        },
		swipe: {
			mobileData: {
				noData: "Žádná data k zobrazení",
				noDataExplain: "Po klepnutí na mapu vyberte prvek a vraťte se sem",
				noDataMap: "Žádná data pro tuto mapu",
				noPopup: "Vyskakovací okno pro tento prvek nenalezeno"
			},
			mobileLegend: {
				noLegend: "Žádná legenda k zobrazení."
			},
			swipeSidePanel: {
				editTooltip: "Nastavit popis postranního panelu",
				editMe: "Edituj mě!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Žádná data k zobrazení",
				noFeatureExplain: "Klepnutím na mapu vyberete prvek"
			},
			settingsLayout: {
				settingsTabLayout: "Styl překrývání",
				settingsLayoutExplain: "Vyberte styl pro nástroj překrývání.",
				settingsLayoutSwipe: "Svislý sloupec",
				settingsLayoutSpyGlass: "Lupa",
				settingsLayoutSelected: "Vybrané rozvržení",
				settingsLayoutSelect: "Vybrat toto rozvržení",
				settingsSaveConfirm: "Některé ze změn vyžadují uložení a opětovné spuštění příběhu"
			},
			settingsDataModel: {
				settingsTabDataModel: "Typ překrývání",
				settingsDataModelExplainSwipe: "Co chcete, aby uživatelé překrývali?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vyberte vrstvu nebo webovou mapu, která se zobrazí v lupě.",
				settingsDataModelOneMap: "Vrstva ve webové mapě",
				settingsDataModel1Explain: "Vyberte vrstvu, kterou chcete překrýt",
				settingsDataModel1Warning: "Pokud je vrstva zakrytá svrchnějšími vrstvami, překrývání se nijak neprojeví.",
				settingsDataModel1SpyGlassExplain: "Vyberte vrstvu, která se zobrazí v lupě.",
				settingsDataModelTwoMaps: "Dvě webové mapy",
				settingsDataModelLayerIds: "Identifikátory vrstev webové mapy",
				settingsDataModelSelected: "Vybraný typ",
				settingsDataModelWebmapSwipeId1: "Identifikátor pravé webové mapy",
				settingsDataModelWebmapSwipeId2: "Identifikátor levé webové mapy",
				settingsDataModelWebmapGlassId1: "Identifikátor hlavní webové mapy",
				settingsDataModelWebmapGlassId2: "Identifikátor webové mapy pro dalekohled",
				settingsDataModelSelect: "Vybrat tento typ",
				settingsDataModel2Explain: "Proveďte překrytí jinou webovou mapou.",
				settingsDataModel2SpyGlassExplain: "Odkryjte jinou webovou mapu.",
				settingsDataModel2HelpTitle: "Jak najdu ID webové mapy?",
				settingsDataModel2HelpContent: "Překopírovat číslice po rovnítku (=) v URL webové mapy",
				switchMaps: "Přepnout mapy",
				browseWebMaps: "Procházet webové mapy"
			},
			settingsLegend: {
				settingsTabLegend: "Rozvržení aplikace",
				settingsLegendExplain: "Vyberte nastavení rozvržení.",
				settingsLegendEnable: "Povolit legendu",
				settingsDescriptionEnable: "Povolit popis",
				settingsBookmarksEnable: "Povolit série překrývání",
				settingsPopupDisable: "Ř_Enable pop-up_____ů",
				settingsLocationSearchEnable: "Povolit vyhledávání lokátoru",
				settingsGeolocatorEnable: "Povolit geolokátor",
				settingsLegendHelpContent: "Ř_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ů",
				settingsSeriesHelpContent: "Série překrývání je možnost navigace s pomocí karet, která diváka vede ke konkrétnímu rozsahu a zobrazí název a textový popis v postranním panelu. Během počáteční aktivace se importují záložky z webové mapy / webových map a použijí se k prvotnímu zaplnění lišty série. Zakázáním možnosti série lištu série vypnete, ale konfigurace série zůstane uložena pro budoucí použití.",
				settingsSeriesHelpContent2: "Série překrývání vám umožní vytvořit a editovat výběr lokalit s připojenými nadpisy a textem. Pokud má vaše webová mapa záložky, budou zobrazeny. Sérii můžete zakázat, ale konfigurace bude uložena pro budoucí použití.",
				settingsSeriesHelpLink: "Zde se podívejte na příklad aplikace se sérií překrývání",
				preview: "Náhled uživatelského rozhraní",
				settingsLocateButtonExplain: "Tato funkcionalita je podporována na většině mobilních zařízení a stolních prohlížečů (včetně Internet Explorer 9+).",
				settingsLocateButton: "Povolit tlačítko \'Lokalizovat\' v podporovaných prohlížečích",
				settingsAddressSearch: "Povolit nástroj pro vyhledávání adres"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Vyskakovací okno",
				settingsSwipePopupExplain: "Přizpůsobte vzhled záhlaví vyskakovacích oken, aby si je uživatelé lépe spojili s mapovými vrstvami.",
				settingsSwipePopupSwipe1: "Levá mapa",
				settingsSwipePopupSwipe2: "Pravá mapa",
				settingsSwipePopupGlass1: "Hlavní mapa",
				settingsSwipePopupGlass2: "Mapa pro lupu",
				settingsSwipePopupTitle: "Název záhlaví",
				settingsSwipePopupColor: "Barva záhlaví"
			},
			initPopup: {
				initHeader: "Vítejte v nástroji pro tvorbu Překrývání/Lupy",
				modalNext: "Další",
				modalPrev: "Předchozí",
				modalApply: "Otevřít aplikaci"
			},
			seriesPanel: {
				title: "Nadpis",
				descr: "Popis",
				discard: "Zrušit záložku",
				saveExtent: "Nastavit rozsah záložky",
				discardDisabled: "Tuto záložku nelze odstranit. Sérii překrývání můžete vypnout v nastavení."
			},
			helpPopup: {
				title: "Nápověda",
				close: "Zavřít",
				tab1: {
					div1: "Šablona Překrývání/Lupa je navržena pro porovnání dvou různých webových map nebo dvou vrstev jedné webové mapy v atraktivní, snadno ovladatelné webové aplikaci, kterou lze použít v jakémkoli webovém prohlížeči na jakémkoli zařízení včetně chytrých telefonů a tabletů.",
					div2: "Pro více informací o šabloně Překrývání/Lupa a příklady vytvořené komunitou <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> navštivte stránku Mapy s příběhem</a>. Můžete nás také sledovat na Twitteru na <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Rádi od vás uslyšíme! Ať už máte otázku, chcete požádat o novou funkci nebo si myslíte, že jste našli chybu, navštivte prosím <a href='http://links.esri.com/storymaps/forum' target='_blank'>uživatelské fórum map s příběhem</a>."
				}
			},
			share: {
				firstSaveTitle: "Ř_Story saved____ů",
				manageStory: "Ř_Manage your story______ů",
				manageStoryA1: "Ř_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ů.",
				manageStoryA1V1: "Ř_My Stories____ů",
				manageStoryA1V2: "Ř_blog posts____ů",
				shareTitle: "Sdílejte svůj příběh",
				sharePrivateHeader: "Váš příběh není sdílený, chcete ho sdílet?",
				sharePrivateBtn1: "Sdílet veřejně",
				sharePrivateBtn2: "Sdílet s mou organizací",
				sharePrivateProgress: "Probíhá sdílení…",
				sharePrivateErr: "Sdílení selhalo, zkuste to znovu nebo",
				sharePrivateOk: "Ř_Sharing updated, loading_________ů...",
				shareStatus1: "Příběh není uložen",
				shareStatus2: "Příběh je veřejně sdílen",
				shareStatus3: "Příběh je sdílen v rámci organizace",
				shareStatus4: "Příběh není sdílen",
				sharePreviewAsUser: "Náhled",
				shareHeader1: "Váš příběh je <strong>veřejně přístupný</strong>.",
				shareHeader2: "Váš příběh je přístupný členům vaší organizace (je vyžadováno přihlášení).",
				shareLinkHeader: "Ř_Share your story______ů",
				shareLinkOpen: "OTEVŘENO",
				learnMore: "Více informací",
				shareA1: "Použijte %SHAREIMG% na <a href='%LINK1%' target='_blank'>stránce položek aplikace</a>. Pokud chcete také přestat sdílet webové mapy, použijte <a href='%LINK2%' target='_blank'>stránku položek webové mapy</a>.",
				shareWarning: "Sdílení %WITH% bylo zakázáno, protože nejste vlastníkem <a href='%LINK%' target='_blank'>webové mapy</a>.",
				shareWarningWith1: "Ř_publicly___ů",
				shareWarningWith2: "Ř_publicly and with the Organization___________ů"
			},
			directCreation: {
				header: "Vítejte v nástroji pro tvorbu Překrývání/Lupy",
				mapPickHeader: "Pro začátek zadejte platný identifikátor webové mapy nebo použijte tlačítko vyhledávání k procházení webových map.",
				launchBuilder: "Spustit nástroj pro tvorbu",
				chooseWebmapLbl: "Vybrat webovou mapu…",
				explain2: "Ř_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ů.",
				explain3: "Chcete-li v mapě vyprávění používat dvě webové mapy, budete na druhou mapu dotázáni později při volbě takové možnosti.",
				webmapPlaceholder: "Zadejte ID webové mapy…"
			},
			saveErrorSocial: {
				title: "Ř_Social media sharing update_________ů",
				panel1: "Ř_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ů.",
				panel1tooltip: "Ř_By defining a title, summary and thumbnail image, your story will look like this_________________________ů:",
				panel2:	"Ř_Which title would you like to use on social media________________ů:",
				panel2q1: "Ř_Story title (recommended)_________ů",
				panel2q1tooltip: "Ř_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ů.",
				panel2q2: "Ř_Item title____ů",
				panel3: "Ř_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ů.",
				panel4: "Ř_Do not warn me again for this story____________ů",
				mystories: "Ř_My Stories____ů",
				btnSave: "Ř_Save__ů"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moje organizace",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Můj obsah",
					favoritesLabel: "Moje oblíbené"
				},
				title: "Ř_Select Web Map_____ů",
				searchTitle: "Hledat",
				ok: "OK",
				cancel: "Storno",
				placeholder: "Zadat vyhledávací výraz"
			}
		}
    })
);
