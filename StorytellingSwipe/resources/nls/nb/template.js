define(
	 ({
		viewer: {
			loading: {
				step1: "LASTER INN HISTORIEN",
				step2: "LASTER INN DATA",
				step3: "INITIALISERER",
				fail: "Beklager, men innlasting av sveipeverktøyet mislyktes",
				loadBuilder: "BYTTER TIL MODUS FOR BYGGEVERKTØY",
				redirectSignIn: "OMDIRIGERING TIL PÅLOGGINGSSIDEN",
				redirectSignIn2: "(du blir omdirigert hit etter pålogging)",
				failButton: "Prøv på nytt"
			},
			errors: {
				boxTitle: "Det har oppstått en feil",
				portalSelf: "Alvorlig feil: Kan ikke hente portalkonfigurasjon",
				invalidConfig: "Alvorlig feil: Ugyldig konfigurasjon",
				invalidConfigNoWebmap: "å_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ø",
				invalidConfigNoAppDev: "å_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ø.",
				createMap: "Kan ikke opprette kart",
				invalidApp: "Alvorlig feil: Kan ikke laste inn historien",
				initMobile: "Velkommen til webprogrammet for sveiping. Programmet er ikke konfigurert. Det interaktive verktøyet støttes ikke på mobile enheter.",
				initMobile2: "å_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ø.",
				initMobile3: "å_Please rotate your device to landscape orientation to use the Swipe builder________________________ø.",
				noBuilderIE8: "Det interaktive sveipeverktøyet støttes ikke på Internet Explorer som er eldre enn versjon 9.",
				noLayerView: "Velkommen til webprogrammet for sveiping.<br />Programmet er ennå ikke konfigurert.",
				appSave: "Feil under lagring av webhistorien",
				mapSave: "Feil under lagring av webkartet",
				notAuthorized: "Du har ikke tillatelse til å lese denne historien",
				notAuthorizedBuilder: "å_You are not authorized to use Swipe and Spyglass builder__________________ø.",
				conflictingProjectionsTitle: "Projeksjonskonflikt",
				conflictingProjections: "Swipe støtter ikke bruk av to webkart med ulik projeksjon. Åpne Innstillinger og bruk et webkart med samme projeksjon som det første webkartet.",
				cpButton: "Lukk",
				unspecifiedConfigOwner: "Godkjent eier er ikke konfigurert.",
				invalidConfigOwner: "Historieeier er ikke godkjent."
			},
			mobileView: {
				hideIntro: "SKJUL INTRO",
				navLeft: "Tegnforklaring",
				navMap: "Kart",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Et fortellingskart",
				builderButton: "Gå over til byggemodus",
				facebookTooltip: "Del på Facebook",
				twitterTooltip: "Del på Twitter",
				bitlyTooltip: "Få en kort kobling",
				tooltipAutoplayDisabled: "å_This isn't available in autoplay mode____________ø",
				autoplayLabel: "å_Autoplay mode_____ø",
				autoplayExplain1: "å_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ø.",
				autoplayExplain2: "å_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ø."
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURASJON AV HISTORIE",
				buttonSave: "LAGRE",
				buttonHelp: "Hjelp",
				buttonShare: "Del",
				buttonDiscard: "AVBRYT",
				buttonSettings: "Innstillinger",
				buttonView: "Visningsmodus",
				buttonItem: "Åpne webapplikasjonselementet",
				noPendingChange: "Ingen ventende endring",
				unSavedChangeSingular: "1 ulagret endring",
				unSavedChangePlural: "ulagrede endringer",
				popoverDiscard: "Er du sikker på at du vil forkaste endringer som ikke er lagret?",
				yes: "Ja",
				no: "Nei",
				popoverOpenViewExplain: "Dersom du åpner viseren, mister du endringer som ikke er lagret",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Avbryt",
				popoverSaveWhenDone: "Ikke glem å lagre når du er ferdig",
				closeWithPendingChange: "Er du sikker på at du vil bekrefte handlingen? Du mister da endringene du har gjort.",
				gotIt: "Ok",
				savingApplication: "Lagrer historien",
				saveSuccess: "å_Story saved____ø",
				saveError: "Lagringen mislyktes. Prøv på nytt.",
				saveError2: "Lagring mislyktes på grunn av ugyldig HTML-kode i et navn eller en beskrivelse",
				saveError3: "Tittelen må fylles ut",
				signIn: "Logg på med en konto på",
				signInTwo: "for å lagre historien."
			},
			header:{
				editMe: "Rediger meg!",
				templateTitle: "Angi tittel på malen",
				templateSubtitle: "Angi undertittel for malen"
			},
			settings: {
				settingsHeader: "Historieinnstillinger",
				modalCancel: "Avbryt",
				modalApply: "Bruk"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Velg et app-tema eller angi dine egne farger.",
				settingsLabelColor: "Bakgrunnsfarger for overskrift og sidepaneler"
			},
			settingsHeader: {
				settingsTabLogo: "Overskrift",
				settingsLogoExplain: "Tilpass logoen øverst (maks. 250 x 50 piksler).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Ingen logo",
				settingsLogoCustom: "Tilpasset logo",
				settingsLogoCustomPlaceholder: "Bilde-URL",
				settingsLogoCustomTargetPlaceholder: "Gjennomklikkingskobling",
				settingsLogoSocialExplain: "Tilpass overskriftkoblingen øverst til høyre.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Kobling",
				settingsLogoSocialDisabled: "Administratoren har deaktivert denne funksjonen"
			},
			settingsExtent: {
				settingsTabExtent: "Utstrekning",
				settingsExtentExplain: "Angi begynnerutstrekningen via det interaktive kartet nedenfor.",
				settingsExtentExplainBottom: "Utstrekningen du definerer, endrer webkartets opprinnelige utstrekning. Legg merke til at hvis du foretar en sveipeserie, blir ikke denne utstrekningen brukt.",
				settingsExtentDateLineError: "Utstrekningen kan ikke være over den 180. lengdegraden",
				settingsExtentDateLineError2: "Feil ved beregning av utstrekningen",
				settingsExtentDrawBtn: "Tegn en ny utstrekning",
				settingsExtentModifyBtn: "Rediger gjeldende utstrekning",
				settingsExtentApplyBtn: "Bruk på hovedkart",
				settingsExtentUseMainMap: "Bruk utstrekningen for hovedkartet"
			}
        },
		swipe: {
			mobileData: {
				noData: "Ingen data å vise!",
				noDataExplain: "Trykk på kartet for å velge et geoobjekt og kom tilbake hit",
				noDataMap: "Ingen data for dette kartet",
				noPopup: "Finner ingen popup for dette geoobjektet"
			},
			mobileLegend: {
				noLegend: "Ingen tegnforklaringer å vise."
			},
			swipeSidePanel: {
				editTooltip: "Angi beskrivelsen av sidepanelet",
				editMe: "Rediger meg!",
				legendTitle: "Tegnforklaring"
			},
			infoWindow: {
				noFeature: "Ingen data å vise",
				noFeatureExplain: "Trykk på kartet for å velge et geoobjekt"
			},
			settingsLayout: {
				settingsTabLayout: "Sveipestil",
				settingsLayoutExplain: "Velg en stil for sveipeverktøyet.",
				settingsLayoutSwipe: "Vertikal stolpe",
				settingsLayoutSpyGlass: "Kikkert",
				settingsLayoutSelected: "Valgt utforming",
				settingsLayoutSelect: "Velg denne utformingen",
				settingsSaveConfirm: "Noen av endringene dine krever at du lagrer og laster inn historien på nytt"
			},
			settingsDataModel: {
				settingsTabDataModel: "Sveipetype",
				settingsDataModelExplainSwipe: "Hva vil du at brukerne skal sveipe?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Velg hvilket lag eller webkart som skal vises i kikkerten.",
				settingsDataModelOneMap: "Et lag i et webkart",
				settingsDataModel1Explain: "Velg laget du vil at skal sveipes",
				settingsDataModel1Warning: "Hvis laget er skjult av overliggende lag, har ikke sveipingen noen virkning.",
				settingsDataModel1SpyGlassExplain: "Velg laget som skal vises i kikkerten.",
				settingsDataModelTwoMaps: "To webkart",
				settingsDataModelLayerIds: "ID-er for webkartlag",
				settingsDataModelSelected: "Valgt type",
				settingsDataModelWebmapSwipeId1: "Høyre webkart-ID",
				settingsDataModelWebmapSwipeId2: "Venstre webkart-ID",
				settingsDataModelWebmapGlassId1: "ID for hovedwebkart",
				settingsDataModelWebmapGlassId2: "ID for webkart med kikkert",
				settingsDataModelSelect: "Velg denne typen",
				settingsDataModel2Explain: "Sveip med et annet webkart.",
				settingsDataModel2SpyGlassExplain: "Avdekk et annet webkart.",
				settingsDataModel2HelpTitle: "Hvordan finner jeg webkartets ID?",
				settingsDataModel2HelpContent: "Kopier og lim inn tallene etter likhetstegnet (=) i URL-adressen til webkartet",
				switchMaps: "Bytt kart",
				browseWebMaps: "Bla igjennom nettkart"
			},
			settingsLegend: {
				settingsTabLegend: "Appens utforming",
				settingsLegendExplain: "Velg innstillinger for oppsett.",
				settingsLegendEnable: "Aktiver tegnforklaring",
				settingsDescriptionEnable: "Aktiver beskrivelse",
				settingsBookmarksEnable: "Aktiver sveipeserier",
				settingsPopupDisable: "å_Enable pop-up_____ø",
				settingsLocationSearchEnable: "Aktiver posisjonsindikatorsøk",
				settingsGeolocatorEnable: "Aktiver geoposisjonsindikatoren",
				settingsLegendHelpContent: "å_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ø",
				settingsSeriesHelpContent: "Sveipe-serier er et fanebasert navigeringsalternativ som veileder brukeren til en bestemt utstrekning, og viser en tittel og beskrivende tekst i sidepanelet.  Under den første aktiveringen, blir bokmerkene fra webkart importert og brukt for å fylle serieraden.  Hvis seriealternativet deaktiveres, slås serieraden av, men seriekonfigurasjonen spares til senere bruk.",
				settingsSeriesHelpContent2: "Med sveipeserier kan du opprette og redigere et utvalg av lokasjoner med tilhørende titler og tekst. Hvis du har et webkart med bokmerker, vises de. Du kan deaktivere serien, men konfigurasjonen beholdes for fremtidig bruk.",
				settingsSeriesHelpLink: "Se et eksempel på et program med en sveipeserie her",
				preview: "Forhåndsvisning av brukergrensesnitt",
				settingsLocateButtonExplain: "Denne funksjonen støttes på de fleste mobile enheter og nettlesere på stasjonære datamaskiner (inkludert Internet Explorer 9+).",
				settingsLocateButton: "Aktiver en 'Finn'-knapp i støttede nettlesere",
				settingsAddressSearch: "Aktiver et adressesøkverktøy"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Oppsprett",
				settingsSwipePopupExplain: "Tilpass utseendet til overskriften i popupfeltene slik at det hjelper brukeren med å assosiere popupfelt med kartlag.",
				settingsSwipePopupSwipe1: "Venstre kart",
				settingsSwipePopupSwipe2: "Høyre kart",
				settingsSwipePopupGlass1: "Hovedkart",
				settingsSwipePopupGlass2: "Kikkertkart",
				settingsSwipePopupTitle: "Tittel i overskrift",
				settingsSwipePopupColor: "Farge på overskrift"
			},
			initPopup: {
				initHeader: "Velkommen til byggeverktøyet for sveiping/forstørrelsesglass",
				modalNext: "Neste",
				modalPrev: "Forrige",
				modalApply: "Åpne appen"
			},
			seriesPanel: {
				title: "Tittel",
				descr: "Beskrivelse",
				discard: "Fjern bokmerke",
				saveExtent: "Angi utstrekning for bokmerke",
				discardDisabled: "Du kan ikke fjerne dette bokmerket. Du kan deaktivere sveipeserier i innstillingene."
			},
			helpPopup: {
				title: "Hjelp",
				close: "Lukk",
				tab1: {
					div1: "Malen for sveiping/forstørrelsesglass er utviklet for å sammenligne to ulike nettkart eller to lag i ett enkelt nettkart i et flott og brukervennlig nettprogram som kan brukes i alle nettlesere på alle slags enheter, blant annet smarttelefoner og nettbrett.",
					div2: "Du finner mer informasjon om malen Sveiping/Forstørrelsesglass, blant annet eksempler opprettet av brukere, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> på webområdet med fortellingskart</a>. Du kan også følge oss på Twitter på <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Vi vil gjerne høre fra deg! Uansett om du har spørsmål, ønsker en ny funksjon eller tror du har funnet en feil, kan du besøke <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "å_Story saved____ø",
				manageStory: "å_Manage your story______ø",
				manageStoryA1: "å_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ø.",
				manageStoryA1V1: "å_My Stories____ø",
				manageStoryA1V2: "å_blog posts____ø",
				shareTitle: "Del historien",
				sharePrivateHeader: "Historien din er ikke delt. Har du lyst til å dele den?",
				sharePrivateBtn1: "Del offentlig",
				sharePrivateBtn2: "Del med min organisasjon",
				sharePrivateProgress: "Deling pågår ...",
				sharePrivateErr: "Deling mislyktes. Prøv på nytt, eller",
				sharePrivateOk: "å_Sharing updated, loading_________ø...",
				shareStatus1: "Historien er ikke lagret",
				shareStatus2: "Historien er delt offentlig",
				shareStatus3: "Historien er delt innenfor organisasjonen",
				shareStatus4: "Historien er ikke delt",
				sharePreviewAsUser: "Forhåndsvisning",
				shareHeader1: "Historien er <strong>offentlig tilgjengelig</strong>.",
				shareHeader2: "Historien din er tilgjengelig for medlemmer av organisasjonen din (krever pålogging).",
				shareLinkHeader: "å_Share your story______ø",
				shareLinkOpen: "ÅPNE",
				learnMore: "Få mer informasjon",
				shareA1: "Bruk %SHAREIMG% på <a href='%LINK1%' target='_blank'>elementsiden for programmet</a>. Hvis du også vil oppheve deling av nettkartet, bruker du <a href='%LINK2%' target='_blank'>elementsiden for nettkartet</a>.",
				shareWarning: "Deling av %WITH% er deaktivert fordi du ikke eier <a href='%LINK%' target='_blank'>webkartet</a>.",
				shareWarningWith1: "å_publicly___ø",
				shareWarningWith2: "å_publicly and with the Organization___________ø"
			},
			directCreation: {
				header: "Velkommen til byggeverktøyet for sveiping/forstørrelsesglass",
				mapPickHeader: "Angi en gyldig nettkart-ID for å komme i gang, eller bruk søkeknappen for å bla igjennom nettkart.",
				launchBuilder: "Start byggeverktøyet",
				chooseWebmapLbl: "Velg webkart...",
				explain2: "å_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ø.",
				explain3: "Hvis du vil bruke to webkart i Story Map ditt, blir du bedt om det andre webkartet senere, når du velger dette alternativet.",
				webmapPlaceholder: "Angi en webkart-ID ..."
			},
			saveErrorSocial: {
				title: "å_Social media sharing update_________ø",
				panel1: "å_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ø.",
				panel1tooltip: "å_By defining a title, summary and thumbnail image, your story will look like this_________________________ø:",
				panel2:	"å_Which title would you like to use on social media________________ø:",
				panel2q1: "å_Story title (recommended)_________ø",
				panel2q1tooltip: "å_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ø.",
				panel2q2: "å_Item title____ø",
				panel3: "å_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ø.",
				panel4: "å_Do not warn me again for this story____________ø",
				mystories: "å_My Stories____ø",
				btnSave: "å_Save__ø"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisasjon",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mitt innhold",
					favoritesLabel: "Mine favoritter"
				},
				title: "å_Select Web Map_____ø",
				searchTitle: "Søk",
				ok: "Ok",
				cancel: "Avbryt",
				placeholder: "Angi søkeord"
			}
		}
    })
);
