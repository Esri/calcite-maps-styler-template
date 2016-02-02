define(
	 ({
		viewer: {
			loading: {
				step1: "LADATAAN TARINAA",
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
				invalidConfigNoWebmap: "Å_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ö",
				invalidConfigNoAppDev: "Å_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ö.",
				createMap: "Karttaa ei voi luoda",
				invalidApp: "Vakava virhe: tarinaa ei voi ladata",
				initMobile: "Tervetuloa käyttämään web-pyyhkäisysovellusta. Sovellusta ei ole määritetty. Vuorovaikutteinen luontitoiminto ei ole käytettävissä mobiililaitteissa.",
				initMobile2: "Å_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ö.",
				initMobile3: "Å_Please rotate your device to landscape orientation to use the Swipe builder________________________ö.",
				noBuilderIE8: "Interaktiivinen pyyhkäisyn luontitoiminto ei tue Internet Explorer 9:ää vanhempia versioita.",
				noLayerView: "Tervetuloa käyttämään web-pyyhkäisysovellusta.<br />Sovellusta ei ole vielä määritetty.",
				appSave: "Virhe tallennettaessa Web-tarinaa",
				mapSave: "Virhe tallennettaessa Web-karttaa",
				notAuthorized: "Sinulla ei ole tämän tarinan käyttöoikeuksia",
				notAuthorizedBuilder: "Å_You are not authorized to use Swipe and Spyglass builder__________________ö.",
				conflictingProjectionsTitle: "Ristiriitaa aiheuttavat projektiot",
				conflictingProjections: "Pyyhkäisysovellus ei tue projektioiltaan eroavien web-karttojen käyttämistä. Avaa asetukset ja ota käyttöön sellainen web-kartta, joka käyttää samaa projektiota kuin ensimmäinen web-kartta.",
				cpButton: "Sulje",
				unspecifiedConfigOwner: "Valtuutettua omistajaa ei ole määritetty.",
				invalidConfigOwner: "Tarinan omistajalla ei ole valtuuksia."
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
				bitlyTooltip: "Hanki lyhyt linkki",
				tooltipAutoplayDisabled: "Å_This isn't available in autoplay mode____________ö",
				autoplayLabel: "Å_Autoplay mode_____ö",
				autoplayExplain1: "Å_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ö.",
				autoplayExplain2: "Å_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ö."
			}
		},
		builder: {
			builder: {
				panelHeader: "TARINAN MÄÄRITYS",
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
				savingApplication: "Tallennetaan tarinaa",
				saveSuccess: "Å_Story saved____ö",
				saveError: "Tallennus epäonnistui, yritä uudelleen",
				saveError2: "Tallennus epäonnistui nimen tai kuvauksen virheellisen HTML-tunnisteen takia",
				saveError3: "Otsikko ei voi olla tyhjä",
				signIn: "Kirjaudu sisään tilillä palvelussa",
				signInTwo: "tarinan tallentamiseksi."
			},
			header:{
				editMe: "Muokkaa minua!",
				templateTitle: "Määritä mallin nimi",
				templateSubtitle: "Määritä mallin alaotsikko"
			},
			settings: {
				settingsHeader: "Tarinan asetukset",
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
				settingsSaveConfirm: "Jotkin muutokset edellyttävät tarinan tallennusta ja uudelleenkäynnistystä"
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
				settingsLegendExplain: "Valitse asetteluasetukset.",
				settingsLegendEnable: "Ota selite käyttöön",
				settingsDescriptionEnable: "Ota kuvaus käyttöön",
				settingsBookmarksEnable: "Ota sarjapyyhkäisy käyttöön",
				settingsPopupDisable: "Å_Enable pop-up_____ö",
				settingsLocationSearchEnable: "Ota käyttöön paikanninhaku",
				settingsGeolocatorEnable: "Ota käyttöön paikannin",
				settingsLegendHelpContent: "Å_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ö",
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
				firstSaveTitle: "Å_Story saved____ö",
				manageStory: "Å_Manage your story______ö",
				manageStoryA1: "Å_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ö.",
				manageStoryA1V1: "Å_My Stories____ö",
				manageStoryA1V2: "Å_blog posts____ö",
				shareTitle: "Jaa tarinasi",
				sharePrivateHeader: "Tarinaasi ei ole jaettu. Haluatko jakaa sen?",
				sharePrivateBtn1: "Jaa julkisesti",
				sharePrivateBtn2: "Jaa oman organisaation kanssa",
				sharePrivateProgress: "Jakaminen käynnissä...",
				sharePrivateErr: "Jakaminen epäonnistui. Yritä uudelleen tai",
				sharePrivateOk: "Å_Sharing updated, loading_________ö...",
				shareStatus1: "Tarinaa ei ole tallennettu",
				shareStatus2: "Tarina on jaettu julkisesti",
				shareStatus3: "Tarina on jaettu organisaatiossa",
				shareStatus4: "Tarinaa ei ole jaettu",
				sharePreviewAsUser: "Esikatselu",
				shareHeader1: "Tarinasi <strong>julkisesti käytettävissä</strong>.",
				shareHeader2: "Organisaatiosi jäsenet voivat käyttää tarinaasi (sisäänkirjauduttuaan).",
				shareLinkHeader: "Å_Share your story______ö",
				shareLinkOpen: "AVAA",
				learnMore: "Lisätietoja",
				shareA1: "Käytä kohdetta %SHAREIMG% <a href='%LINK1%' target='_blank'>sovelluskohteen sivulla</a>. Jos haluat myös lopettaa web-kartan jaon, käytä <a href='%LINK2%' target='_blank'>web-kartan kohdesivua</a>.",
				shareWarning: "Jakaminen kohteen %WITH% kanssa on poistettu käytöstä, koska et ole <a href='%LINK%' target='_blank'>Web-kartan</a> omistaja.",
				shareWarningWith1: "Å_publicly___ö",
				shareWarningWith2: "Å_publicly and with the Organization___________ö"
			},
			directCreation: {
				header: "Tervetuloa käyttämään pyyhkäisyn/kiikarin luontitoimintoa",
				mapPickHeader: "Aloita antamalla kelvollinen web-kartan tunnus, tai selaa web-karttoja painamalla Etsi-painiketta.",
				launchBuilder: "Käynnistä luontitoiminto",
				chooseWebmapLbl: "Valitse Web-kartta...",
				explain2: "Å_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ö.",
				explain3: "Jos haluat käyttää kahta Web-karttaa tarinakartassasi, ohjelma kysyy toista Web-karttaa myöhemmin, kun valitset kyseisen vaihtoehdon.",
				webmapPlaceholder: "Kirjoita Web-kartan tunnus..."
			},
			saveErrorSocial: {
				title: "Å_Social media sharing update_________ö",
				panel1: "Å_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ö.",
				panel1tooltip: "Å_By defining a title, summary and thumbnail image, your story will look like this_________________________ö:",
				panel2:	"Å_Which title would you like to use on social media________________ö:",
				panel2q1: "Å_Story title (recommended)_________ö",
				panel2q1tooltip: "Å_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ö.",
				panel2q2: "Å_Item title____ö",
				panel3: "Å_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ö.",
				panel4: "Å_Do not warn me again for this story____________ö",
				mystories: "Å_My Stories____ö",
				btnSave: "Å_Save__ö"
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
				title: "Å_Select Web Map_____ö",
				searchTitle: "Etsi",
				ok: "OK",
				cancel: "Peruuta",
				placeholder: "Anna hakuehto"
			}
		}
    })
);
