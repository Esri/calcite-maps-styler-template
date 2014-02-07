define(
	({
		viewer: {
			loading: {
				step1: "NAHRÁVÁNÍ APLIKACE",
				step2: "NAHRÁVÁNÍ DAT",
				step3: "INICIALIZACE",
				fail: "Nepodařilo se načíst nástroj překrývání.",
				loadBuilder: "PŘEPÍNÁNÍ DO REŽIMU TVORBY",
				redirectSignIn: "Ř_REDIRECTING TO SIGN-IN PAGE_ů",
				redirectSignIn2: "Ř_(you will be redirected here after sign-in)_ů",
				failButton: "Zkusit znovu"
			},
			errors: {
				boxTitle: "Nastala chyba",
				portalSelf: "Závažná chyba: Nepodařilo se získat konfiguraci portálu.",
				invalidConfig: "Závažná chyba: Neplatná konfigurace",
				invalidConfigNoWebmap: "Závažná chyba: Neplatná konfigurace (není specifikována žádná webová mapa)",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "Závažná chyba: Aplikaci nelze načíst",
				initMobile: "Vítejte ve webové aplikaci pro překrývání. Aplikace není nakonfigurována. Interaktivní nástroj pro tvorbu není podporován v mobilních zařízeních.",
				noBuilderIE8: "Interaktivní nástroj pro tvorbu překrývání není podporován v programu Internet Explorer verze nižší než 9.",
				noLayerView: "Vítejte ve webové aplikaci pro překrývání.<br />Aplikace zatím není nakonfigurována.",
				appSave: "Chyba při ukládání webové aplikace",
				mapSave: "Chyba při ukládání webové mapy",
				notAuthorized: "Nemáte oprávnění k přístupu do této aplikace.",
				conflictingProjectionsTitle: "Konfliktní projekce",
				conflictingProjections: "Překrývání nepodporuje používání dvou webových map s různými projekcemi. Otevřete nastavení a použijte webovou mapu, která využívá stejnou projekci jako první webová mapa.",
				cpButton: "Zavřít"
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
				bitlyTooltip: "Získejte krátký odkaz k aplikaci"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURACE APLIKACE",
				buttonSave: "ULOŽIT",
				buttonHelp: "Ř_Help_ů",
				buttonShare: "Ř_Share_ů",
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
				savingApplication: "Ukládání aplikace",
				saveSuccess: "Aplikace byla úspěšně uložena",
				saveError: "Ukládání se nezdařilo, zkuste to prosím znovu.",
				saveError2: "Ř_Save failed due to an invalid html tag in a name or description_ů",
				saveError3: "Ř_The title can't be empty_ů",
				signIn: "Přihlaste se pomocí účtu na",
				signInTwo: "pro uložení aplikace."
			},
			header:{
				editMe: "Edituj mě !",
				templateTitle: "Nastavit název šablony",
				templateSubtitle: "Nastavit podnadpis šablony"
			},
			settings: {
				settingsHeader: "Nastavení aplikace",
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
				settingsExtentDateLineError: "Ř_The extent cannot be across the meridian of 180ï¿½ longitude_ů",
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
				editMe: "Edituj mě !",
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
				settingsSaveConfirm: "Některé ze změn vyžadují uložení a opětovné spuštění aplikace"
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
				switchMaps: "Ř_Switch maps_ů",
				browseWebMaps: "Ř_Browse web maps_ů"
			},
			settingsLegend: {
				settingsTabLegend: "Rozvržení aplikace",
				settingsLegendExplain: "Vyberte nastavení pro rozvržení aplikace.",
				settingsLegendEnable: "Povolit legendu",
				settingsDescriptionEnable: "Povolit popis",
				settingsBookmarksEnable: "Povolit série překrývání",
				settingsPopupDisable: "Povolit vyskakovací okna",
				settingsLocationSearchEnable: "Povolit vyhledávání lokátoru",
				settingsGeolocatorEnable: "Povolit geolokátor",
				settingsLegendHelpContent: "Chcete-li doplnit obsah legendy, použijte obsah prohlížeče webových map ArcGIS.com (Skrýt v legendě)",
				settingsSeriesHelpContent: "Série překrývání je možnost navigace s pomocí karet, která diváka vede ke konkrétnímu rozsahu a zobrazí název a textový popis v postranním panelu. Během počáteční aktivace se importují záložky z webové mapy / webových map a použijí se k prvotnímu zaplnění lišty série. Zakázáním možnosti série lištu série vypnete, ale konfigurace série zůstane uložena pro budoucí použití.", 
				settingsSeriesHelpContent2: "Série překrývání vám umožní vytvořit a editovat výběr lokalit s připojenými nadpisy a textem. Pokud má vaše webová mapa záložky, budou zobrazeny. Sérii můžete zakázat, ale konfigurace bude uložena pro budoucí použití.",
				settingsSeriesHelpLink: "Zde se podívejte na příklad aplikace se sérií překrývání",
				preview: "Náhled uživatelského rozhraní",
				settingsLocateButtonExplain: "Tato funkcionalita je podporována na většině mobilních zařízení a stolních prohlížečů (včetně Internet Explorer 9+).",
				settingsLocateButton: "Ř_Enable a 'Locate' button on supported browsers_ů",
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
				initHeader: "Ř_Welcome to the Swipe/Spyglass Builder_ů",
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
				title: "Ř_Help_ů",
				close: "Ř_Close_ů",
				tab1: {
					div1: "Ř_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._ů",
					div2: "Ř_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ů",
					div3: "Ř_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._ů"
				}
			},
			share: {
				firstSaveTitle: "Ř_Application successfully saved_ů",
				firstSaveHeader: "Ř_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._ů",
				firstSaveA1: "Ř_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_ů",
				firstSaveA1bis: "Ř_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._ů",
				firstSaveQ2: "Ř_Is my Application shared?_ů",
				firstSaveA2: "Ř_Currently your Application is not shared. To share it, use the SHARE button._ů",
				shareTitle: "Ř_Share your Application_ů",
				sharePrivateHeader: "Ř_Your Application is not shared, would you like to share it?_ů",
				sharePrivateBtn1: "Ř_Share publicly_ů",
				sharePrivateBtn2: "Ř_Share with my Organization_ů",
				sharePrivateProgress: "Ř_Sharing in progress..._ů",
				sharePrivateErr: "Ř_Sharing failed, try again or_ů",
				sharePrivateOk: "Ř_Sharing updated successfully, loading..._ů",
				shareStatus1: "Ř_Application is not saved_ů",
				shareStatus2: "Ř_Application is shared publicly_ů",
				shareStatus3: "Ř_Application is shared within the organization_ů",
				shareStatus4: "Ř_Application is not shared_ů",
				sharePreviewAsUser: "Ř_Preview_ů",
				shareHeader1: "Ř_Your Application is <strong>publicly accessible</strong>._ů",
				shareHeader2: "Ř_Your Application is accessible by your organization members (login is required)._ů",
				shareLinkHeader: "Ř_Share the Application with your audience_ů",
				shareLinkOpen: "Ř_OPEN_ů",
				learnMore: "Ř_Learn more_ů",
				shareQ1Opt1: "Ř_How do I keep the Application private?_ů",
				shareQ1Opt2: "Ř_How do I keep the Application private or share it publicly?_ů",
				shareA1: "Ř_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._ů",
				shareA1bis: "Ř_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._ů",
				shareQ2: "Ř_How do I edit the Application later?_ů",
				shareQ2bis: "Ř_How do I get back to the authoring interface?_ů",
				shareA2div1: "Ř_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._ů",
				shareA2div2: "Ř_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_ů",				
				shareQ3: "Ř_Where is the data stored?_ů",
				shareA3: "Ř_The Application configuration is stored in this web application item</a>._ů",
				shareWarning: "Ř_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ů",
 				shareWarningWith1: "Ř_publicly_ů",
 				shareWarningWith2: "Ř_publicly and with the Organization_ů"
			},
			directCreation: {
				header: "Ř_Welcome to the Swipe/Spyglass Builder_ů",
				mapPickHeader: "Ř_To get started, please input a valid web map id, or use the search button to browse web maps._ů",
				launchBuilder: "Ř_Launch Builder_ů"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Ř_My Organization_ů",
					onlineLabel: "Ř_ArcGIS Online_ů",
					contentLabel: "Ř_My Content_ů",
					favoritesLabel: "Ř_My Favorites_ů"
				},
				title: "Ř_Select Web Map_ů",
				searchTitle: "Ř_Search_ů",
				ok: "Ř_Ok_ů",
				cancel: "Ř_Cancel_ů",
				placeholder: "Ř_Enter search term_ů"
			}
		}
    })
);