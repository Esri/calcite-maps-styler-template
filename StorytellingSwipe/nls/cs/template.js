define(
({
		viewer: {
			loading: {
				step1: "NAHRÁVÁNÍ APLIKACE",
				step2: "NAHRÁVÁNÍ DAT",
				step3: "INICIALIZACE",
				fail: "Nepodařilo se načíst nástroj překrývání.",
				loadBuilder: "PŘEPÍNÁNÍ DO REŽIMU TVORBY",
				failButton: "Zkusit znovu"
			},
			errors: {
				boxTitle: "Ř_An error has occurred_ů",
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
				buttonDiscard: "Ř_CANCEL_ů",
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
				closeWithPendingChange: "Ř_Are you sure to want to confirm the action ? Your changes will be lost._ů",
				gotIt: "OK",
				savingApplication: "Ukládání aplikace",
				saveSuccess: "Ř_Application saved successfully_ů",
				saveError: "Ř_Save failed, please try again_ů",
				signIn: "Přihlaste se pomocí účtu na",
				signInTwo: "pro uložení aplikace."
			},
			header:{
				editMe: "Ř_Click to edit description_ů",
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
				settingsLogoExplain: "Ř_Customize the header logo (maximum is 250 x 50px)._ů",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Bez loga",
				settingsLogoCustom: "Vlastní logo",
				settingsLogoCustomPlaceholder: "URL obrázku",
				settingsLogoCustomTargetPlaceholder: "Odkaz při kliknutí na obrázek",
				settingsLogoSocialExplain: "Ř_Customize the header top right link._ů",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Odkaz",
				settingsLogoSocialDisabled: "Tato funkce byla zakázána administrátorem."
			},
			settingsExtent: {
				settingsTabExtent: "Rozsah",
				settingsExtentExplain: "Prostřednictvím následující interaktivní mapy nastavte výchozí rozsah.",
				settingsExtentExplainBottom: "Podle zadaného rozsahu se upraví výchozí rozsah webové mapy. Vytváříte-li sérii překrývání, tento rozsah se nepoužije.",
				settingsExtentDateLineError: "Ř_The extent cannot be across the meridian of 180° longitude_ů",
				settingsExtentDateLineError2: "Ř_Error computing the extent_ů",
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
				editMe: "Ř_Edit me !_ů",
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
				settingsLayoutSelect: "Ř_Select this layout_ů",
				settingsSaveConfirm: "Některé ze změn vyžadují uložení a opětovné spuštění aplikace"
			},
			settingsDataModel: {
				settingsTabDataModel: "Vrstva překryvu",
				settingsDataModelExplainSwipe: "Vyberte vrstvu nebo webovou mapu, která se bude při překrývání zobrazovat a skrývat.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vyberte vrstvu nebo webovou mapu, která se zobrazí v lupě.",
				settingsDataModelOneMap: "Jedna webová mapa, jedna vrstva",
				settingsDataModel1Explain: "Vyberte vrstvu k ovládání nástrojem překrývání.",
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
				settingsDataModel2HelpTitle: "Jak vyhledat identifikátor webové mapy",
				settingsDataModel2HelpContent: "Překopírovat číslice po rovnítku (=) v URL webové mapy"
			},
			settingsLegend: {
				settingsTabLegend: "Rozvržení aplikace",
				settingsLegendExplain: "Vyberte nastavení pro rozvržení aplikace.",
				settingsLegendEnable: "Povolit legendu",
				settingsDescriptionEnable: "Povolit popis",
				settingsBookmarksEnable: "Povolit série překrývání",
				settingsPopupDisable: "Povolit vyskakovací obsah",
				settingsLocatorEnable: "Ř_Enable locator_ů",
				settingsLegendHelpContent: "Chcete-li doplnit obsah legendy, použijte obsah prohlížeče webových map ArcGIS.com (Skrýt v legendě)",
				settingsSeriesHelpContent: "Při první aktivaci budou vaše záložky webových map použity k naplnění lišty série. Pokud tuto možnost série později vypnete, vaše konfigurace série nebude zrušena a bude k dispozici, rozhodnete-li se sérii opět povolit.",
				preview: "Náhled uživatelského rozhraní"
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
				initHeader: "Vítá vás nástroj pro tvorbu překrývání.",
				modalNext: "Další",
				modalApply: "Otevřít aplikaci"
			},
			seriesPanel: {
				title: "Ř_Title_ů",
				descr: "Popis",
				discard: "Zrušit záložku",
				saveExtent: "Nastavit rozsah záložky",
				discardDisabled: "Tuto záložku nelze odstranit. Sérii překrývání můžete vypnout v nastavení."
			}
		}
})
);
