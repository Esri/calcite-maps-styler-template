define(
	({
		viewer: {
			loading: {
				step1: "IELĀDĒ APLIKĀCIJU",
				step2: "IELĀDĒ DATUS",
				step3: "INICIALIZĒŠANA",
				fail: "Diemžēl neizdevās pārvilkt ielādēšanu",
				loadBuilder: "PĀRSLĒGT UZ BUILDER MODE",
				failButton: "Atkārtot"
			},
			errors: {
				boxTitle: "Kļūda",
				portalSelf: "Fatāla kļūda: Neizdevās iegūt portāla konfigurāciju",
				invalidConfig: "Fatāla kļūda: konfigurācijas neveiksme",
				invalidConfigNoWebmap: "Fatāla kļūda: nederīga konfigurācija (nav norādīta web karte)",
				createMap: "Nevar izveidot karti",
				invalidApp: "Fatāla kļūda: aplikāciju nevar ielādēt",
				initMobile: "Laipni lūdzam pārvilkšanas web aplikācijā. Aplikācija nav konfigurēta. Interaktīvais būvētājs netiek atbalstīts mobilajās ierīcēs.",
				noBuilderIE8: "Pārvilkšanas interaktīvais veidotājs netiek atbalstīts pārlūkprogrammas Internet Explorer versijās, kas jaunākas par 9. versiju.",
				noLayerView: "Laipni lūdzam Pārvilkt web aplikācijā.<br />Aplikācija vēl nav konfigurēta.",
				appSave: "Kļūda, saglabājot web aplikāciju",
				mapSave: "Kļūda, saglabājot web karti",
				notAuthorized: "Jums nav atļauts piekļūt šai aplikācijai",
				conflictingProjectionsTitle: "Konfliktējošas projekcijas",
				conflictingProjections: "Pārvilkt neatbalsta divu web karšu ar dažādām projekcijām lietošanu. Lūdzu, atveriet iestatījumus un izmantojiet web karti, kas izmanto to pašu projekciju nekā pirmā web karte.",
				cpButton: "Aizvērt"
			},
			mobileView: {
				hideIntro: "PASLĒPT IEVADU",
				navLeft: "Leģenda",
				navMap: "Karte",
				navRight: "Dati"
			},
			desktopView: {
				storymapsText: "Stāstu karte",
				builderButton: "Pārslēgties uz veidotāja režīmu",
				bitlyTooltip: "Iegūt īsceļu uz aplikāciju"
			}
		},
		builder: {
			builder: {
				panelHeader: "APLIKĀCIJAS KONFIGURĀCIJA",
				buttonSave: "SAGLABĀT",
				buttonDiscard: "ATCELT",
				buttonSettings: "Iestatījumi",
				buttonView: "Skata režīms",
				buttonItem: "Atvērt web aplikācijas vienību",
				noPendingChange: "Nav neizpildītu izmaiņu",
				unSavedChangeSingular: "1 nesaglabāta izmaiņa",
				unSavedChangePlural: "nesaglabātas izmaiņas",
				popoverDiscard: "Vai esat pārliecināts, ka vēlaties izmest visas nesaglabātās izmaiņas?",
				yes: "Jā",
				no: "Nē",
				popoverOpenViewExplain: "Atverot skatītāju, jūs zaudēsiet visas nesaglabātās izmaiņas",
				popoverOpenViewOk: "Labi",
				popoverOpenViewCancel: "Atcelt",
				popoverSaveWhenDone: "Neaizmirstiet saglabāt, kad jūs pabeidzat",
				closeWithPendingChange: "Vai esat pārliecināts, ka vēlaties apstiprināt darbību? Jūsu izmaiņas tiks zaudētas.",
				gotIt: "Labi",
				savingApplication: "Saglabā aplikāciju",
				saveSuccess: "Aplikācija saglabāta veiksmīgi",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				signIn: "Lūdzu, pierakstieties kontā uz",
				signInTwo: "lai saglabātu aplikāciju."
			},
			header:{
				editMe: "Rediģē mani !",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu"
			},
			settings: {
				settingsHeader: "Aplikācijas iestatījumi",
				modalCancel: "Atcelt",
				modalApply: "Lietot"
			},
			settingsColors: {
				settingsTabColor: "Tēma",
				settingsColorExplain: "Izvēlieties lietotņu tēmu vai definējiet savas krāsas.",
				settingsLabelColor: "Galvenes un sānu paneļa fona krāsas"
			},
			settingsHeader: {
				settingsTabLogo: "Galvene",
				settingsLogoExplain: "Pielāgot galvenes logotipu (maksimums  ir 250 x 50piks).",
				settingsLogoEsri: "Esri logotips",
				settingsLogoNone: "Nav logotipa",
				settingsLogoCustom: "Pielāgots logotips",
				settingsLogoCustomPlaceholder: "Attēla URL",
				settingsLogoCustomTargetPlaceholder: "Klikšķis caur saiti",
				settingsLogoSocialExplain: "Pielāgot galvenes labās augšējās saites.",
				settingsLogoSocialText: "Teksts",
				settingsLogoSocialLink: "Saite",
				settingsLogoSocialDisabled: "Administrators ir atspējojis elementu."
			},
			settingsExtent: {
				settingsTabExtent: "Pārklājums",
				settingsExtentExplain: "Izmantojot zemāk esošo interaktīvo karti, iestatiet sākotnējo pārklājumu.",
				settingsExtentExplainBottom: "Jūsu definētais pārklājums modificēs web kartes sākotnējo pārklājumu. Atcerieties ja jūs veicat kartes lasīšanas serijas, šis pārklājums netiks lietots.",
				settingsExtentDateLineError: "Pārklājums nevar būt pāri 180° meridiāna garumam.",
				settingsExtentDateLineError2: "Kļūda aprēķinot pārklājumu",
				settingsExtentDrawBtn: "Zīmēt jaunu pārklājumu",
				settingsExtentModifyBtn: "Rediģēt pašreizējo pārklājumu",
				settingsExtentApplyBtn: "Lietot galvenajā kartē",
				settingsExtentUseMainMap: "Lietot galveno kartes pārklājumu"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nav nekādu parādāmu datu",
				noDataExplain: "Pieskarieties kartei, lai izvēlētos elementu un atgriezieties šeit",
				noDataMap: "Nav datu par šo karti",
				noPopup: "Nav atrasti šī elementa uznirstošie logi"
			},
			mobileLegend: {
				noLegend: "Nav leģendas, ko parādīt."
			},
			swipeSidePanel: {
				editTooltip: "Iestatiet sānu paneļa aprakstu",
				editMe: "Rediģē mani !",
				legendTitle: "Leģenda"
			},
			infoWindow: {
				noFeature: "Nav datu, ko parādīt.",
				noFeatureExplain: "Pieskarieties kartei, lai izvēlētos elementu"
			},
			settingsLayout: {
				settingsTabLayout: "Pārvilkšanas stils",
				settingsLayoutExplain: "Izvēlieties pārvilkšanas rīka stilu.",
				settingsLayoutSwipe: "Vertikāla josla",
				settingsLayoutSpyGlass: "Tālskatis",
				settingsLayoutSelected: "Izvēlētais izkārtojums",
				settingsLayoutSelect: "Izvēlieties šo izkārtojumu",
				settingsSaveConfirm: "Lai dažas no jūsu veiktajām izmaiņām stātos spēkā, ir nepieciešams saglabāt un atkārtoti ielādēt aplikāciju."
			},
			settingsDataModel: {
				settingsTabDataModel: "ķ_Swipe Type_ū",
				settingsDataModelExplainSwipe: "ķ_What do you want users to swipe?_ū",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Izvēlieties slāni vai web karti, kas tiks rādīta tālskatī.",
				settingsDataModelOneMap: "ķ_A layer in a web map_ū",
				settingsDataModel1Explain: "ķ_Select the layer you want to be swiped_ū",
				settingsDataModel1Warning: "Ja slānis ir paslēpts augšējos slāņos, pārvilkšanai nebūs nekāda efekta.",
				settingsDataModel1SpyGlassExplain: "Izvēlieties slāni, ko parādīt tālskatī.",
				settingsDataModelTwoMaps: "Divas web kartes",
				settingsDataModelLayerIds: "Web kartes slāņa ID",
				settingsDataModelSelected: "Izvēlieties tipu",
				settingsDataModelWebmapSwipeId1: "Labās puses web kartes ID",
				settingsDataModelWebmapSwipeId2: "Kreisās puses web kartes ID",
				settingsDataModelWebmapGlassId1: "Galvenās web kartes ID",
				settingsDataModelWebmapGlassId2: "Tālskata web kartes ID",
				settingsDataModelSelect: "Izvēlieties šo tipu",
				settingsDataModel2Explain: "Pārvilkt ar citu web karti.",
				settingsDataModel2SpyGlassExplain: "Atklāt citu web karti.",
				settingsDataModel2HelpTitle: "ķ_How do I find a web map's ID?_ū",
				settingsDataModel2HelpContent: "Kopēt un ielīmēt ciparus aiz zīmes "=" vietrādī URL no web kartes"
			},
			settingsLegend: {
				settingsTabLegend: "Lietotnes izkārtojums",
				settingsLegendExplain: "Izvēlieties aplikācijas izkārtojuma iestatījumus.",
				settingsLegendEnable: "Iespējot leģendu",
				settingsDescriptionEnable: "Iespējot aprakstu",
				settingsBookmarksEnable: "Iespējot sēriju Pārvilkt",
				settingsPopupDisable: "Iespējot uznirstošo logu",
				settingsLocationSearchEnable: "ķ_Enable locator search_ū",
				settingsGeolocatorEnable: "ķ_Enable geolocator_ū",
				settingsLegendHelpContent: "Lai attīrītu leģendas saturu izmantojiet ArcGIS.com web kartes skatītāja satura tabulu (Paslēpt leģendā)",
				settingsSeriesHelpContent: "ķ_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use._ū", 
				preview: "Saskarnes priekšskatījums",
				settingsLocateButtonExplain: "ķ_This functionality if supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._ū",
				settingsLocateButton: "ķ_Enable a 'Locate' button supported browsers_ū",
				settingsAddressSearch: "ķ_Enable an address search tool_ū"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Uznirstošie logi",
				settingsSwipePopupExplain: "Pielāgot izskatu uznirstošā loga galvenē, lai palīdzētu lietotājam saistīt uznirstošā logu ar kartēm slāņiem.",
				settingsSwipePopupSwipe1: "Kreisās puses karte",
				settingsSwipePopupSwipe2: "Labās puses karte",
				settingsSwipePopupGlass1: "Galvenā karte",
				settingsSwipePopupGlass2: "Tālskata karte",
				settingsSwipePopupTitle: "Galvenes virsraksts",
				settingsSwipePopupColor: "Galvenes krāsa"
			},
			initPopup: {
				initHeader: "Laipni lūdzam pārvilkšanas veidotājā",
				modalNext: "Nākošais",
				modalPrev: "ķ_Previous_ū",
				modalApply: "Atveriet lietotni"
			},
			seriesPanel: {
				title: "Virsraksts",
				descr: "Apraksts",
				discard: "Atmest grāmatzīmi",
				saveExtent: "Iesatīt grāmatzīmes pārklājumu",
				discardDisabled: "Jūs nevarat noņemt grāmatzīmi. Pārvilktās sērijas var tikt atiespējotas iestatījumu sadaļā."
			}
		}
    })
);