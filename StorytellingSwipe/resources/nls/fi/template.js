define(
	({
		viewer: {
			loading: {
				step1: "LADATAAN SOVELLUSTA",
				step2: "LADATAAN DATAA",
				step3: "KÄYNNISTETÄÄN",
				fail: "Pyyhkäisyn lataus epäonnistui",
				loadBuilder: "VAIHDETAAN MUODOSTUSOHJELMAN TILAAN",
				failButton: "Yritä uudelleen"
			},
			errors: {
				boxTitle: "Tapahtui virhe",
				portalSelf: "Vakavavirhe: portaalin määritysten haku epäonnistui",
				invalidConfig: "Vakava virhe: virheellinen kokoonpano",
				invalidConfigNoWebmap: "Vakava virhe: Virheellinen konfiguraatio (web-karttaa ei ole määritetty)",
				createMap: "Karttaa ei voi luoda",
				invalidApp: "Vakava virhe: sovellusta ei voi ladata",
				initMobile: "Tervetuloa käyttämään web-pyyhkäisysovellusta. Sovellusta ei ole määritetty. Vuorovaikutteinen luontitoiminto ei ole käytettävissä mobiililaitteissa.",
				noBuilderIE8: "Interaktiivinen pyyhkäisyn luontitoiminto ei tue Internet Explorer 9:ää vanhempia versioita.",
				noLayerView: "Tervetuloa käyttämään web-pyyhkäisysovellusta.<br />Sovellusta ei ole vielä määritetty.",
				appSave: "Virhe tallennettaessa Web-sovellusta",
				mapSave: "Virhe tallennettaessa Web-karttaa",
				notAuthorized: "Sinulla ei ole tämän sovelluksen käyttöoikeuksia",
				conflictingProjectionsTitle: "Ristiriitaa aiheuttavat projektiot",
				conflictingProjections: "Pyyhkäisysovellus ei tue projektioiltaan eroavien web-karttojen käyttämistä. Avaa asetukset ja ota käyttöön sellainen web-kartta, joka käyttää samaa projektiota kuin ensimmäinen web-kartta.",
				cpButton: "Sulje"
			},
			mobileView: {
				hideIntro: "PIILOTA ESITTELY",
				navLeft: "Selite",
				navMap: "Kartta",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Tarinakartta",
				builderButton: "Vaihda muodostusohjelman tilaan",
				bitlyTooltip: "Hanki lyhyt linkki sovellukseen"
			}
		},
		builder: {
			builder: {
				panelHeader: "SOVELLUKSEN MÄÄRITYS",
				buttonSave: "TALLENNA",
				buttonDiscard: "PERUUTA",
				buttonSettings: "Asetukset",
				buttonView: "Näytä tila",
				buttonItem: "Avaa web-sovelluskohde",
				noPendingChange: "Ei odottavaa muutosta",
				unSavedChangeSingular: "1 tallentamaton muutos",
				unSavedChangePlural: "tallentamattomat muutokset",
				popoverDiscard: "Haluatko varmasti hylätä kaikki tallentamattomat muutokset?",
				yes: "Kyllä",
				no: "Ei",
				popoverOpenViewExplain: "Kun avaat katseluohjelman, kaikki tallentamattomat muutokset häviävät.",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Peruuta",
				popoverSaveWhenDone: "Älä unohda tallentaa, kun olet valmis",
				closeWithPendingChange: "Haluatko varmasti vahvistaa toiminnon? Muutoksesi häviävät.",
				gotIt: "OK",
				savingApplication: "Tallennetaan sovellusta",
				saveSuccess: "Sovelluksen tallennus onnistui",
				saveError: "Tallennus epäonnistui, yritä uudelleen",
				signIn: "Kirjaudu sisään tilillä palvelussa",
				signInTwo: "sovelluksen tallentamiseksi."
			},
			header:{
				editMe: "Muokkaa minua!",
				templateTitle: "Määritä mallin nimi",
				templateSubtitle: "Määritä mallin alaotsikko"
			},
			settings: {
				settingsHeader: "Sovellusasetukset",
				modalCancel: "Peruuta",
				modalApply: "Käytä"
			},
			settingsColors: {
				settingsTabColor: "Teema",
				settingsColorExplain: "Valitse sovellusteema tai määritä omat värisi.",
				settingsLabelColor: "Otsikon ja sivupaneelin taustavärit"
			},
			settingsHeader: {
				settingsTabLogo: "Ylätunniste",
				settingsLogoExplain: "Mukauta ylätunnisteen logo (enimmäiskoko on 250 x 50 pikseliä).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Ei logoa",
				settingsLogoCustom: "Mukautettu logo",
				settingsLogoCustomPlaceholder: "Kuvan URL",
				settingsLogoCustomTargetPlaceholder: "Click-through-linkki",
				settingsLogoSocialExplain: "Mukauta ylätunnisteen oikean yläkulman linkki.",
				settingsLogoSocialText: "Teksti",
				settingsLogoSocialLink: "Linkki",
				settingsLogoSocialDisabled: "Järjestelmänvalvoja on poistanut tämän toiminnon käytöstä."
			},
			settingsExtent: {
				settingsTabExtent: "Laajuus",
				settingsExtentExplain: "Määritä alkuperäinen laajuus alla olevan vuorovaikutteisen kartan avulla.",
				settingsExtentExplainBottom: "Määrittämäsi laajuus muokkaa web-kartan alkuperäistä laajuutta. Huomaa, että jos teet pyyhkäisysarjan, määritettyä laajuutta ei käytetä.",
				settingsExtentDateLineError: "Laajuus ei saa ylittää 180° pituusasteen meridiaania",
				settingsExtentDateLineError2: "Virhe laajuuden laskennassa",
				settingsExtentDrawBtn: "Piirrä uusi laajuus",
				settingsExtentModifyBtn: "Muokkaa nykyistä laajuutta",
				settingsExtentApplyBtn: "Käytä pääkartalla",
				settingsExtentUseMainMap: "Käytä pääkartan laajuutta"
			}
        },
		swipe: {
			mobileData: {
				noData: "Näytettäviä tietoja ei ole.",
				noDataExplain: "Valitse kohde ja palaa tähän napauttamalla karttaa.",
				noDataMap: "Tälle kartalle ei ole tietoja.",
				noPopup: "Tälle kohteelle ei ole ponnahdusikkunaa."
			},
			mobileLegend: {
				noLegend: "Näytettävää selitettä ei ole."
			},
			swipeSidePanel: {
				editTooltip: "Aseta sivupaneelin kuvaus",
				editMe: "Muokkaa minua!",
				legendTitle: "Selite"
			},
			infoWindow: {
				noFeature: "Näytettäviä tietoja ei ole.",
				noFeatureExplain: "Valitse kohde napauttamalla karttaa."
			},
			settingsLayout: {
				settingsTabLayout: "Pyyhkäisytyyli",
				settingsLayoutExplain: "Valitse pyyhkäisytyökalun tyyli.",
				settingsLayoutSwipe: "Pystypalkki",
				settingsLayoutSpyGlass: "Kiikari",
				settingsLayoutSelected: "Valittu asettelu",
				settingsLayoutSelect: "Valitse tämä asettelu",
				settingsSaveConfirm: "Jotkin muutokset edellyttävät sovelluksen tallennusta ja uudelleenkäynnistystä."
			},
			settingsDataModel: {
				settingsTabDataModel: "Å_Swipe Type_ö",
				settingsDataModelExplainSwipe: "Å_What do you want users to swipe?_ö",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Valitse karttataso tai web-kartta, joka tulee näkyviin kiikarissa.",
				settingsDataModelOneMap: "Å_A layer in a web map_ö",
				settingsDataModel1Explain: "Å_Select the layer you want to be swiped_ö",
				settingsDataModel1Warning: "Jos karttataso on piirtojärjestyksessä ylempänä olevien karttatasojen peitossa, pyyhkäisyt eivät vaikuta mitenkään.",
				settingsDataModel1SpyGlassExplain: "Valitse karttataso, joka näkyy kiikarissa.",
				settingsDataModelTwoMaps: "Kaksi web-karttaa",
				settingsDataModelLayerIds: "Web-karttatason tunnus",
				settingsDataModelSelected: "Valittu tyyppi",
				settingsDataModelWebmapSwipeId1: "Oikean web-kartan tunnus",
				settingsDataModelWebmapSwipeId2: "Vasemman web-kartan tunnus",
				settingsDataModelWebmapGlassId1: "Pää-web-kartan tunnus",
				settingsDataModelWebmapGlassId2: "Kiikari-web-kartan tunnus",
				settingsDataModelSelect: "Valitse tämä tyyppi",
				settingsDataModel2Explain: "Pyyhkäise toisella web-kartalla.",
				settingsDataModel2SpyGlassExplain: "Näytä toinen web-kartta.",
				settingsDataModel2HelpTitle: "Å_How do I find a web map's ID?_ö",
				settingsDataModel2HelpContent: "Kopioi ja liitä web-kartan URL-osoitteessa olevan '='-merkin jälkeiset luvut."
			},
			settingsLegend: {
				settingsTabLegend: "Sovelluksen asettelu",
				settingsLegendExplain: "Valitse sovelluksen asetteluasetukset.",
				settingsLegendEnable: "Ota selite käyttöön",
				settingsDescriptionEnable: "Ota kuvaus käyttöön",
				settingsBookmarksEnable: "Ota sarjapyyhkäisy käyttöön",
				settingsPopupDisable: "Ota ponnahdusikkunat käyttöön",
				settingsLocationSearchEnable: "Å_Enable locator search_ö",
				settingsGeolocatorEnable: "Å_Enable geolocator_ö",
				settingsLegendHelpContent: "Jos haluat määrittää selitteen sisällön, käytä ArcGIS.com-sivuston web-kartan katseluohjelman sisällysluetteloa (Piilota selitteessä)",
				settingsSeriesHelpContent: "Å_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use._ö", 
				preview: "Käyttöliittymän esikatselu",
				settingsLocateButtonExplain: "Å_This functionality if supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._ö",
				settingsLocateButton: "Å_Enable a 'Locate' button supported browsers_ö",
				settingsAddressSearch: "Å_Enable an address search tool_ö"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Ponnahdusikkuna",
				settingsSwipePopupExplain: "Voit mukauttaa ponnahdusikkunoiden otsikkojen ulkoasua, jotta käyttäjät voivat yhdistää ponnahdusikkunat helposti karttatasoihin.",
				settingsSwipePopupSwipe1: "Vasen kartta",
				settingsSwipePopupSwipe2: "Oikea kartta",
				settingsSwipePopupGlass1: "Pääkartta",
				settingsSwipePopupGlass2: "Kiikarikartta",
				settingsSwipePopupTitle: "Otsikon nimi",
				settingsSwipePopupColor: "Otsikon väri"
			},
			initPopup: {
				initHeader: "Tervetuloa käyttämään pyyhkäisyn luontitoimintoa",
				modalNext: "Seuraava",
				modalPrev: "Å_Previous_ö",
				modalApply: "Avaa sovellus"
			},
			seriesPanel: {
				title: "Otsikko",
				descr: "Kuvaus",
				discard: "Hylkää kirjanmerkki",
				saveExtent: "Aseta kirjanmerkin laajuus",
				discardDisabled: "Tätä kirjanmerkkiä ei voi poistaa. Sarjapyyhkäisyn voi poistaa käytöstä asetuksissa."
			}
		}
    })
);