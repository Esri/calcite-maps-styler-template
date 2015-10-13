define(
	 ({
		viewer: {
			loading: {
				step1: "Å_LOADING STORY_____ö",
				step2: "LADATAAN AINEISTOA",
				step3: "KÄYNNISTETÄÄN",
				fail: "Pyyhkäisyn lataus epäonnistui",
				loadBuilder: "VAIHDETAAN MUODOSTUSOHJELMAN TILAAN",
				redirectSignIn: "OHJATAAN SISÄÄNKIRJAUTUMISSIVULLE",
				redirectSignIn2: "(sinut ohjataan tänne sisäänkirjautumisen jälkeen)",
				failButton: "Yritä uudelleen"
			},
			errors: {
				boxTitle: "Tapahtui virhe",
				portalSelf: "Vakavavirhe: portaalin määritysten haku epäonnistui",
				invalidConfig: "Vakava virhe: virheellinen kokoonpano",
				invalidConfigNoWebmap: "Vakava virhe: Virheellinen konfiguraatio (web-karttaa ei ole määritetty)",
				createMap: "Karttaa ei voi luoda",
				invalidApp: "Å_Fatal error: The story cannot be loaded_____________ö",
				initMobile: "Tervetuloa käyttämään web-pyyhkäisysovellusta. Sovellusta ei ole määritetty. Vuorovaikutteinen luontitoiminto ei ole käytettävissä mobiililaitteissa.",
				initMobile2: "Å_The Swipe builder is not supported at this display size__________________ö.",
				noBuilderIE8: "Interaktiivinen pyyhkäisyn luontitoiminto ei tue Internet Explorer 9:ää vanhempia versioita.",
				noLayerView: "Tervetuloa käyttämään web-pyyhkäisysovellusta.<br />Sovellusta ei ole vielä määritetty.",
				appSave: "Å_Error saving the web story_________ö",
				mapSave: "Virhe tallennettaessa Web-karttaa",
				notAuthorized: "Å_You are not authorized to access this story______________ö",
				conflictingProjectionsTitle: "Ristiriitaa aiheuttavat projektiot",
				conflictingProjections: "Pyyhkäisysovellus ei tue projektioiltaan eroavien web-karttojen käyttämistä. Avaa asetukset ja ota käyttöön sellainen web-kartta, joka käyttää samaa projektiota kuin ensimmäinen web-kartta.",
				cpButton: "Sulje",
				unspecifiedConfigOwner: "Å_Authorized owner hasn't been configured_____________ö.",
				invalidConfigOwner: "Å_Story owner is not authorized__________ö."
			},
			mobileView: {
				hideIntro: "PIILOTA ESITTELY",
				navLeft: "Selite",
				navMap: "Kartta",
				navRight: "Aineisto"
			},
			desktopView: {
				storymapsText: "Tarinakartta",
				builderButton: "Vaihda muodostusohjelman tilaan",
				facebookTooltip: "Jaa Facebookissa",
				twitterTooltip: "Jaa Twitterissä",
				bitlyTooltip: "Hanki lyhyt linkki"
			}
		},
		builder: {
			builder: {
				panelHeader: "Å_STORY CONFIGURATION_______ö",
				buttonSave: "TALLENNA",
				buttonHelp: "Ohje",
				buttonShare: "Jaa",
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
				savingApplication: "Å_Saving story_____ö",
				saveSuccess: "Å_Story saved successfully________ö",
				saveError: "Tallennus epäonnistui, yritä uudelleen",
				saveError2: "Tallennus epäonnistui nimen tai kuvauksen virheellisen HTML-tunnisteen takia",
				saveError3: "Otsikko ei voi olla tyhjä",
				signIn: "Kirjaudu sisään tilillä palvelussa",
				signInTwo: "Å_to save the story______ö."
			},
			header:{
				editMe: "Muokkaa minua!",
				templateTitle: "Määritä mallin nimi",
				templateSubtitle: "Määritä mallin alaotsikko"
			},
			settings: {
				settingsHeader: "Å_Story settings_____ö",
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
				settingsLogoSocialDisabled: "Pääkäyttäjä on poistanut tämän toiminnon käytöstä."
			},
			settingsExtent: {
				settingsTabExtent: "Laajuus",
				settingsExtentExplain: "Määritä alkuperäinen laajuus alla olevan vuorovaikutteisen kartan avulla.",
				settingsExtentExplainBottom: "Määrittämäsi laajuus muokkaa web-kartan alkuperäistä laajuutta. Huomaa, että jos teet pyyhkäisysarjan, määritettyä laajuutta ei käytetä.",
				settingsExtentDateLineError: "Laajuus ei saa ylittää 180ï¿½ pituusasteen meridiaania",
				settingsExtentDateLineError2: "Virhe laajuuden laskennassa",
				settingsExtentDrawBtn: "Piirrä uusi laajuus",
				settingsExtentModifyBtn: "Muokkaa nykyistä laajuutta",
				settingsExtentApplyBtn: "Käytä pääkartalla",
				settingsExtentUseMainMap: "Käytä pääkartan laajuutta"
			}
        },
		swipe: {
			mobileData: {
				noData: "Näytettäviä aineistoja ei ole.",
				noDataExplain: "Valitse kohde ja palaa tähän napauttamalla karttaa.",
				noDataMap: "Tälle kartalle ei ole aineistoja.",
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
				noFeature: "Näytettäviä aineistoja ei ole.",
				noFeatureExplain: "Valitse kohde napauttamalla karttaa."
			},
			settingsLayout: {
				settingsTabLayout: "Pyyhkäisytyyli",
				settingsLayoutExplain: "Valitse pyyhkäisytyökalun tyyli.",
				settingsLayoutSwipe: "Pystypalkki",
				settingsLayoutSpyGlass: "Kiikari",
				settingsLayoutSelected: "Valittu asettelu",
				settingsLayoutSelect: "Valitse tämä asettelu",
				settingsSaveConfirm: "Å_Some of your changes require that you save and reload the story____________________ö"
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
				switchMaps: "Vaihda karttaa",
				browseWebMaps: "Selaa web-karttoja"
			},
			settingsLegend: {
				settingsTabLegend: "Sovelluksen asettelu",
				settingsLegendExplain: "Å_Select the layout settings_________ö.",
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
				settingsLocateButton: "Ota Paikanna-painike käyttöön tuetuissa selaimissa",
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
				initHeader: "Tervetuloa käyttämään pyyhkäisyn/kiikarin luontitoimintoa",
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
				title: "Ohje",
				close: "Sulje",
				tab1: {
					div1: "Pyyhkäisy-/kiikarimallipohjan avulla voi vertailla kahta eri web-karttaa tai yhden web-kartan kahta karttatasoa kiinnostavassa ja helppokäyttöisessä web-sovelluksessa, jota voi käyttää minkä tahansa laitteen, kuten älypuhelimen tai tabletin, selaimella.",
					div2: "Lisätietoja pyyhkäisy-/kiikarimallipohjasta ja muiden käyttäjien luomia esimerkkejä on saatavilla <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'>Story Maps -sivustossa</a>. Voit myös seurata meitä Twitterissä: <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Haluamme kuulla sinusta! Jos sinulla on kysymyksiä, ehdottaa uutta toimintoa tai luulet löytäneesi virheen, vieraile <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps -käyttäjäfoorumissa</a>."
				}
			},
			share: {
				firstSaveTitle: "Å_Story successfully saved________ö",
				firstSaveHeader: "Å_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________ö.",
				firstSaveA1: "Jos et tunne ArcGIS Onlinea tai haluat pikavalinnan, jonka kautta pääsee sisällönluonnin käyttöliittymään, voit tallentaa seuraavan linkin: %LINK1%",
				firstSaveA1bis: "Å_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________ö.",
				firstSaveQ2: "Å_Is my story shared_______ö?",
				firstSaveA2: "Å_Currently your story is not shared. To share it, use the SHARE button______________________ö.",
				shareTitle: "Å_Share your story______ö",
				sharePrivateHeader: "Å_Your story is not shared, would you like to share it_________________ö?",
				sharePrivateBtn1: "Jaa julkisesti",
				sharePrivateBtn2: "Jaa oman organisaation kanssa",
				sharePrivateProgress: "Jakaminen käynnissä...",
				sharePrivateErr: "Jakaminen epäonnistui. Yritä uudelleen tai",
				sharePrivateOk: "Jakamisen päivitys onnistui, ladataan...",
				shareStatus1: "Å_Story is not saved______ö",
				shareStatus2: "Å_Story is shared publicly________ö",
				shareStatus3: "Å_Story is shared within the organization_____________ö",
				shareStatus4: "Å_Story is not shared_______ö",
				sharePreviewAsUser: "Esikatselu",
				shareHeader1: "Å_Your story is <strong>publicly accessible</strong>________________ö.",
				shareHeader2: "Å_Your story is accessible by your organization members (login is required)_______________________ö.",
				shareLinkHeader: "Å_Share the story with your audience___________ö",
				shareLinkOpen: "AVAA",
				learnMore: "Lisätietoja",
				shareQ1Opt1: "Å_How do I keep the story private___________ö?",
				shareQ1Opt2: "Å_How do I keep the story private or share it publicly_________________ö?",
				shareA1: "Käytä kohdetta %SHAREIMG% <a href='%LINK1%' target='_blank'>sovelluskohteen sivulla</a>. Jos haluat myös lopettaa web-kartan jaon, käytä <a href='%LINK2%' target='_blank'>web-kartan kohdesivua</a>.",
				shareA1bis: "Jos haluat lopettaa myös kohdepalvelun jaon, käytä <a href='%LINK1%' target='_blank'>kohdepalvelun kohdesivua</a>.",
				shareQ2: "Å_How do I edit the story later__________ö?",
				shareQ2bis: "Miten palaan sisällönluonnin käyttöliittymään?",
				shareA2div1: "Å_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________ö.",
				shareA2div2: "Å_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________ö:",
				shareQ3: "Minne aineistot on tallennettu?",
				shareA3: "Å_The story configuration is stored in this web application item</a>_____________________ö.",
				shareWarning: "Jakaminen kohteen %WITH% kanssa on poistettu käytöstä, koska et ole <a href='%LINK%' target='_blank'>Web-kartan</a> omistaja.",
 				shareWarningWith1: "julkisesti",
 				shareWarningWith2: "julkisesti ja organisaation kanssa"
			},
			directCreation: {
				header: "Tervetuloa käyttämään pyyhkäisyn/kiikarin luontitoimintoa",
				mapPickHeader: "Aloita antamalla kelvollinen web-kartan tunnus, tai selaa web-karttoja painamalla Etsi-painiketta.",
				launchBuilder: "Käynnistä luontitoiminto",
				chooseWebmapLbl: "Valitse Web-kartta...",
				explain2: "Voit luoda pyyhkäisy- tai kiikaritarinakartan valitsemalla olemassa olevan ArcGIS Online -Web-kartan, jota haluat käyttää, alla olevan painikkeen avulla. Voit vaihtoehtoisesti liittää Web-kartan tunnuksen alla olevaan kenttään.",
				explain3: "Jos haluat käyttää kahta Web-karttaa tarinakartassasi, ohjelma kysyy toista Web-karttaa myöhemmin, kun valitset kyseisen vaihtoehdon.",
				webmapPlaceholder: "Kirjoita Web-kartan tunnus..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organisaationi",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Oma sisältö",
					favoritesLabel: "Omat suosikit"
				},
				title: "Valitse Web-kartta",
				searchTitle: "Etsi",
				ok: "OK",
				cancel: "Peruuta",
				placeholder: "Anna hakuehto"
			}
		}
    })
);
