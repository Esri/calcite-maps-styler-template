define(
	({
		viewer: {
			loading: {
				step1: "LADATAAN SOVELLUSTA",
				step2: "LADATAAN DATAA",
				step3: "KÄYNNISTETÄÄN",
				fail: "Pyyhkäisyn lataus epäonnistui",
				loadBuilder: "VAIHDETAAN MUODOSTUSOHJELMAN TILAAN",
				redirectSignIn: "Å_REDIRECTING TO SIGN-IN PAGE_ö",
				redirectSignIn2: "Å_(you will be redirected here after sign-in)_ö",
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
				buttonHelp: "Å_Help_ö",
				buttonShare: "Å_Share_ö",
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
				saveError2: "Å_Save failed due to an invalid html tag in a name or description_ö",
				saveError3: "Å_The title can't be empty_ö",
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
				settingsExtentDateLineError: "Å_The extent cannot be across the meridian of 180ï¿½ longitude_ö",
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
				settingsTabDataModel: "Pyyhkäisytyyppi",
				settingsDataModelExplainSwipe: "Mitä haluat käyttäjien pyyhkäisevän?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Valitse karttataso tai web-kartta, joka tulee näkyviin kiikarissa.",
				settingsDataModelOneMap: "Web-kartassa oleva karttataso",
				settingsDataModel1Explain: "Valitse karttataso, jota haluat pyyhkäistävän",
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
				settingsDataModel2HelpTitle: "Miten löydän web-kartan tunnuksen?",
				settingsDataModel2HelpContent: "Kopioi ja liitä web-kartan URL-osoitteessa olevan '='-merkin jälkeiset luvut.",
				switchMaps: "Å_Switch maps_ö",
				browseWebMaps: "Å_Browse web maps_ö"
			},
			settingsLegend: {
				settingsTabLegend: "Sovelluksen asettelu",
				settingsLegendExplain: "Valitse sovelluksen asetteluasetukset.",
				settingsLegendEnable: "Ota selite käyttöön",
				settingsDescriptionEnable: "Ota kuvaus käyttöön",
				settingsBookmarksEnable: "Ota sarjapyyhkäisy käyttöön",
				settingsPopupDisable: "Ota ponnahdusikkunat käyttöön",
				settingsLocationSearchEnable: "Ota käyttöön paikanninhaku",
				settingsGeolocatorEnable: "Ota käyttöön paikannin",
				settingsLegendHelpContent: "Jos haluat määrittää selitteen sisällön, käytä ArcGIS.com-sivuston web-kartan katseluohjelman sisällysluetteloa (Piilota selitteessä)",
				settingsSeriesHelpContent: "Pyyhintäsarja on välilehdellinen navigointivalinta, joka ohjaa katselijan tiettyyn laajuuteen ja näyttää otsikon ja kuvaavan tekstin sivupaneelissa. Kun otat asetuksen käyttöön ensimmäisen kerran, web-kartan(/-karttojen) kirjanmerkit tuodaan ja niillä täytetään valmiiksi sarjapalkki. Jos poistat sarjan asetuksen käytöstä, sarjapalkki poistuu käytöstä, mutta sarjan määritykset tallennetaan tulevaa käyttöä varten.", 
				settingsSeriesHelpContent2: "Pyyhkäisysarjan avulla voit luoda ja muokata sijaintivalikoimaa ja sijainteihin liittyviä otsikoita ja tekstejä. Jos web-kartassa on kirjanmerkkejä, ne tulevat näkyviin. Voit tuoda näkyviin sarjan, mutta kokoonpano säilytetään tulevaa käyttöä varten.",
				settingsSeriesHelpLink: "Tarkastele tässä esimerkkiä sovelluksesta, jossa on pyyhkäisysarja",
				preview: "Käyttöliittymän esikatselu",
				settingsLocateButtonExplain: "Kyseinen toiminto on tuettu useimmissa mobiililaitteissa ja tietokoneiden selaimissa (mm. Internet Explorer 9 ja uudemmat versiot).",
				settingsLocateButton: "Å_Enable a 'Locate' button on supported browsers_ö",
				settingsAddressSearch: "Ota osoitehakutyökalu käyttöön"
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
				initHeader: "Å_Welcome to the Swipe/Spyglass Builder_ö",
				modalNext: "Seuraava",
				modalPrev: "Edellinen",
				modalApply: "Avaa sovellus"
			},
			seriesPanel: {
				title: "Otsikko",
				descr: "Kuvaus",
				discard: "Hylkää kirjanmerkki",
				saveExtent: "Aseta kirjanmerkin laajuus",
				discardDisabled: "Tätä kirjanmerkkiä ei voi poistaa. Sarjapyyhkäisyn voi poistaa käytöstä asetuksissa."
			},
			helpPopup: {
				title: "Å_Help_ö",
				close: "Å_Close_ö",
				tab1: {
					div1: "Å_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._ö",
					div2: "Å_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ö",
					div3: "Å_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._ö"
				}
			},
			share: {
				firstSaveTitle: "Å_Application successfully saved_ö",
				firstSaveHeader: "Å_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._ö",
				firstSaveA1: "Å_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_ö",
				firstSaveA1bis: "Å_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._ö",
				firstSaveQ2: "Å_Is my Application shared?_ö",
				firstSaveA2: "Å_Currently your Application is not shared. To share it, use the SHARE button._ö",
				shareTitle: "Å_Share your Application_ö",
				sharePrivateHeader: "Å_Your Application is not shared, would you like to share it?_ö",
				sharePrivateBtn1: "Å_Share publicly_ö",
				sharePrivateBtn2: "Å_Share with my Organization_ö",
				sharePrivateProgress: "Å_Sharing in progress..._ö",
				sharePrivateErr: "Å_Sharing failed, try again or_ö",
				sharePrivateOk: "Å_Sharing updated successfully, loading..._ö",
				shareStatus1: "Å_Application is not saved_ö",
				shareStatus2: "Å_Application is shared publicly_ö",
				shareStatus3: "Å_Application is shared within the organization_ö",
				shareStatus4: "Å_Application is not shared_ö",
				sharePreviewAsUser: "Å_Preview_ö",
				shareHeader1: "Å_Your Application is <strong>publicly accessible</strong>._ö",
				shareHeader2: "Å_Your Application is accessible by your organization members (login is required)._ö",
				shareLinkHeader: "Å_Share the Application with your audience_ö",
				shareLinkOpen: "Å_OPEN_ö",
				learnMore: "Å_Learn more_ö",
				shareQ1Opt1: "Å_How do I keep the Application private?_ö",
				shareQ1Opt2: "Å_How do I keep the Application private or share it publicly?_ö",
				shareA1: "Å_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._ö",
				shareA1bis: "Å_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._ö",
				shareQ2: "Å_How do I edit the Application later?_ö",
				shareQ2bis: "Å_How do I get back to the authoring interface?_ö",
				shareA2div1: "Å_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._ö",
				shareA2div2: "Å_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_ö",				
				shareQ3: "Å_Where is the data stored?_ö",
				shareA3: "Å_The Application configuration is stored in this web application item</a>._ö",
				shareWarning: "Å_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ö",
 				shareWarningWith1: "Å_publicly_ö",
 				shareWarningWith2: "Å_publicly and with the Organization_ö"
			},
			directCreation: {
				header: "Å_Welcome to the Swipe/Spyglass Builder_ö",
				mapPickHeader: "Å_To get started, please input a valid web map id, or use the search button to browse web maps._ö",
				launchBuilder: "Å_Launch Builder_ö"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Å_My Organization_ö",
					onlineLabel: "Å_ArcGIS Online_ö",
					contentLabel: "Å_My Content_ö",
					favoritesLabel: "Å_My Favorites_ö"
				},
				title: "Å_Select Web Map_ö",
				searchTitle: "Å_Search_ö",
				ok: "Å_Ok_ö",
				cancel: "Å_Cancel_ö",
				placeholder: "Å_Enter search term_ö"
			}
		}
    })
);