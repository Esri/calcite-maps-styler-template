define(
	 ({
		viewer: {
			loading: {
				step1: "INDLÆSER HISTORIE",
				step2: "INDLÆSER DATA",
				step3: "STARTER",
				fail: "Beklager, Swipe-indlæsning mislykkedes",
				loadBuilder: "SKIFTER TIL BUILDER-TILSTAND",
				redirectSignIn: "OMDIRIGERER TIL LOG IND-SIDE",
				redirectSignIn2: "(du omdirigeres hertil efter login)",
				failButton: "Prøv igen"
			},
			errors: {
				boxTitle: "Der opstod en fejl",
				portalSelf: "Uoprettelig fejl: Kunne ikke hente portalkonfiguration",
				invalidConfig: "Uoprettelig fejl: Ugyldig konfiguration",
				invalidConfigNoWebmap: "ø_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________å",
				invalidConfigNoAppDev: "ø_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________å.",
				createMap: "Kan ikke oprette kort",
				invalidApp: "Uoprettelig fejl: Historien kan ikke indlæses",
				initMobile: "Velkommen til swipe-webapplikationen. Applikationen er ikke konfigureret. Det interaktive builder-program understøttes ikke på mobile enheder.",
				initMobile2: "ø_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________å.",
				initMobile3: "ø_Please rotate your device to landscape orientation to use the Swipe builder________________________å.",
				noBuilderIE8: "Swipe-builderprogrammet understøttes ikke i Internet Explorer før version 9.",
				noLayerView: "Velkommen til Swipe-webapplikationen.<br />Applikationen er endnu ikke konfigureret.",
				appSave: "Fejl ved lagring af webhistorie",
				mapSave: "Fejl ved lagring af webkortet",
				notAuthorized: "Du er ikke autoriseret til at få adgang til denne historie",
				notAuthorizedBuilder: "ø_You are not authorized to use Swipe and Spyglass builder__________________å.",
				conflictingProjectionsTitle: "Konfliktende projektioner",
				conflictingProjections: "Swipe understøtter ikke brug af to webkort med forskellige projektioner. Åbn indstillinger, og brug et webkort, der anvender den samme projektion som det første webkort.",
				cpButton: "Luk",
				unspecifiedConfigOwner: "Der er ikke konfigureret en uautoriseret ejer.",
				invalidConfigOwner: "Historieejeren er ikke autoriseret."
			},
			mobileView: {
				hideIntro: "SKJUL INTRO",
				navLeft: "Signaturforklaring",
				navMap: "Kort",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Et historiekort",
				builderButton: "Skift til builder-tilstand",
				facebookTooltip: "Del på Facebook",
				twitterTooltip: "Del på Twitter",
				bitlyTooltip: "Hent et kort link",
				tooltipAutoplayDisabled: "ø_This isn't available in autoplay mode____________å",
				autoplayLabel: "ø_Autoplay mode_____å",
				autoplayExplain1: "ø_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________å.",
				autoplayExplain2: "ø_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________å."
			}
		},
		builder: {
			builder: {
				panelHeader: "HISTORIEKONFIGURATION",
				buttonSave: "GEM",
				buttonHelp: "Hjælp",
				buttonShare: "Del",
				buttonDiscard: "ANNULLÉR",
				buttonSettings: "Indstillinger",
				buttonView: "Visningstilstand",
				buttonItem: "Åbn webapplikationselement",
				noPendingChange: "Ingen ventende ændringer",
				unSavedChangeSingular: "1 ikke-gemt ændring",
				unSavedChangePlural: "ikke-gemte ændringer",
				popoverDiscard: "Er du sikker på, at du vil slette nogle ikke-gemte ændringer?",
				yes: "Ja",
				no: "Nej",
				popoverOpenViewExplain: "Ved at åbne viseren mister du eventuelle ikke-gemte ændringer",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Annullér",
				popoverSaveWhenDone: "Glem ikke at gemme, når du er færdig",
				closeWithPendingChange: "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
				gotIt: "OK",
				savingApplication: "Gemmer historie",
				saveSuccess: "ø_Story saved____å",
				saveError: "Lagring mislykkedes, prøv igen",
				saveError2: "Lagring mislykkedes pga. en ugyldig html-kode i et navn eller beskrivelse",
				saveError3: "Titlen kan ikke være tom",
				signIn: "Log ind med en konto på",
				signInTwo: "for at gemme historien"
			},
			header:{
				editMe: "Redigér mig!",
				templateTitle: "Indstil skabelontitel",
				templateSubtitle: "Indstil skabelonundertitel"
			},
			settings: {
				settingsHeader: "Historieindstillinger",
				modalCancel: "Annullér",
				modalApply: "Anvend"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Vælg et app-tema, eller definer dine egne farver.",
				settingsLabelColor: "Baggrundsfarver til header og side panel"
			},
			settingsHeader: {
				settingsTabLogo: "Logo",
				settingsLogoExplain: "Tilpas toptekstlogoet  (maks. 250 x 50 pixel).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Intet logo",
				settingsLogoCustom: "Brugerdefineret logo",
				settingsLogoCustomPlaceholder: "Billede-URL",
				settingsLogoCustomTargetPlaceholder: "Klik gennem-link",
				settingsLogoSocialExplain: "Tilpas header-linket øverst til højre.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Dette objekt er blevet deaktiveret af administratoren"
			},
			settingsExtent: {
				settingsTabExtent: "Område",
				settingsExtentExplain: "Indstil startudstrækningen via det interaktive kort nedenfor.",
				settingsExtentExplainBottom: "Den udstrækning, du definerer, vil ændre dit webkorts oprindelige udstrækning. Bemærk, at hvis du udfører en swipe-serie, vil denne udstrækning ikke blive brugt.",
				settingsExtentDateLineError: "Udstrækningen må ikke krydse meridianen på længdegraden 1800ï¿½",
				settingsExtentDateLineError2: "Fejl ved behandlingen af udstrækningen",
				settingsExtentDrawBtn: "Tegn ny udstrækning",
				settingsExtentModifyBtn: "Redigér den aktuelle udstrækning",
				settingsExtentApplyBtn: "Anvend på hovedkort",
				settingsExtentUseMainMap: "Brug hovedkortudstrækning"
			}
        },
		swipe: {
			mobileData: {
				noData: "Der er ingen data at vise",
				noDataExplain: "Tryk på kortet for at markere et objekt og komme tilbage hertil",
				noDataMap: "Ingen data til dette kort",
				noPopup: "Der blev ikke fundet noget pop-up-vindue til dette objekt"
			},
			mobileLegend: {
				noLegend: "Ingen signaturforklaring at vise."
			},
			swipeSidePanel: {
				editTooltip: "Angiv beskrivelse til sidepanelet",
				editMe: "Redigér mig!",
				legendTitle: "Signaturforklaring"
			},
			infoWindow: {
				noFeature: "Ingen at vise",
				noFeatureExplain: "Tryk på kortet for at vælge et objekt"
			},
			settingsLayout: {
				settingsTabLayout: "Swipe-typografi",
				settingsLayoutExplain: "Vælg en typografi til swipe-værktøjet.",
				settingsLayoutSwipe: "Lodret linje",
				settingsLayoutSpyGlass: "Kikkert",
				settingsLayoutSelected: "Vælg layout",
				settingsLayoutSelect: "Vælg dette layout",
				settingsSaveConfirm: "Nogle af dine ændringer kræver, at du gemmer og genindlæser historien"
			},
			settingsDataModel: {
				settingsTabDataModel: "Swipe-type",
				settingsDataModelExplainSwipe: "Hvad ønsker du, at brugerne skal bruge swipe-værktøjet til?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vælg det lag eller webkort, der vises i kikkerten.",
				settingsDataModelOneMap: "Et lag i et webkort",
				settingsDataModel1Explain: "Vælg det lag, der skal styres af swipe-værktøjet",
				settingsDataModel1Warning: "Hvis laget er skjult af lag oven på det, har swipe ingen virkning.",
				settingsDataModel1SpyGlassExplain: "Marker det lag, der skal vises i kikkerten.",
				settingsDataModelTwoMaps: "To webkort",
				settingsDataModelLayerIds: "ID for webkort-lag",
				settingsDataModelSelected: "Valgt type",
				settingsDataModelWebmapSwipeId1: "ID for højre webkort",
				settingsDataModelWebmapSwipeId2: "ID for venstre webkort",
				settingsDataModelWebmapGlassId1: "ID for hoved-webkort",
				settingsDataModelWebmapGlassId2: "ID for kikkert-webkort",
				settingsDataModelSelect: "Vælg denne type",
				settingsDataModel2Explain: "Swipe med et andet webkort.",
				settingsDataModel2SpyGlassExplain: "Vis et andet webkort.",
				settingsDataModel2HelpTitle: "Hvordan finder jeg et webkorts ID?",
				settingsDataModel2HelpContent: "Kopiér tallene efter \'=\' -tegnet i webkortets URL",
				switchMaps: "Skift kort",
				browseWebMaps: "Gennemse webkort"
			},
			settingsLegend: {
				settingsTabLegend: "App-layout",
				settingsLegendExplain: "Vælg layoutindstillinger.",
				settingsLegendEnable: "Aktivér signaturforklaring",
				settingsDescriptionEnable: "Aktivér beskrivelse",
				settingsBookmarksEnable: "Aktivér Swipe-serie",
				settingsPopupDisable: "ø_Enable pop-up_____å",
				settingsLocationSearchEnable: "Aktivér lokatorsøgning",
				settingsGeolocatorEnable: "Aktivér geolokator",
				settingsLegendHelpContent: "ø_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________å",
				settingsSeriesHelpContent: "Når du trykker på swipe-serien, vil kortviseren navigere til en bestemt udstrækning og vise en titel og en beskrivelsestekst i sidepanelet. Ved første aktivering importeres dine webkortbogmærker, og de anvendes til at udfylde serielinjen på forhånd. Hvis du deaktiverer seriefunktionen, slås seriellinjen fra, men seriekonfigurationen bevares til fremtidig brug.",
				settingsSeriesHelpContent2: "Med swipe-serien kan du oprette og redigere et udvalg af steder med ledsagende titler og tekst. Hvis dit webkort har bogmærker, bliver disse vist. Du kan deaktivere serien, men konfigurationen vil blive bevaret til fremtidig brug.",
				settingsSeriesHelpLink: "Se et eksempel på en applikation med swipe-serien her",
				preview: "UI-forhåndsvisning",
				settingsLocateButtonExplain: "Denne funktionalitet understøttes på de fleste mobile enheder og pc-browsere (inkl. Internet Explorer 9+).",
				settingsLocateButton: "Aktivér browsere, der har en \'Find\'-knap",
				settingsAddressSearch: "Aktivér et adressesøgningsværktøj"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-up-vindue",
				settingsSwipePopupExplain: "Tilpas udseendet på pop-up-vinduets header for at hjælpe brugerne med at forbinde pop-up-vinduer med kortlag.",
				settingsSwipePopupSwipe1: "Venstre kort",
				settingsSwipePopupSwipe2: "Højre kort",
				settingsSwipePopupGlass1: "Hovedkort",
				settingsSwipePopupGlass2: "Kikkert-kort",
				settingsSwipePopupTitle: "Header-titel",
				settingsSwipePopupColor: "Header-farve"
			},
			initPopup: {
				initHeader: "Velkommen til Swipe/Kikkert-builder",
				modalNext: "Næste",
				modalPrev: "Forrige",
				modalApply: "Åbn app\'en"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beskrivelse",
				discard: "Slet bogmærke",
				saveExtent: "Indstil bogmærkeudstrækning",
				discardDisabled: "Du kan ikke fjerne dette bogmærke. Swipe-serier kan deaktiveres under Indstillinger."
			},
			helpPopup: {
				title: "Hjælp",
				close: "Luk",
				tab1: {
					div1: "Skabelonen Swipe/Kikkert er beregnet til at sammenligne to forskellige webkort eller to lag på ét webkort i en attraktive, brugervenlig webapplikation, som kan bruges i en vilkårlig browser eller på en vilkårlig enhed, herunder smartphone og tablets.",
					div2: "Yderligere oplysninger om Swipe/Kikkert-skabelonen, inkl. eksempler oprettet af brugere, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> finder du på Story Maps-webstedet</a>. Du kan også følge os på Twitter på <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Vi vil meget gerne høre fra dig! Hvad enten du har spørgsmål, ønsker at bestille et nyt objekt eller mener, at du har fundet en fejl, vil vi bede dig om at besøge <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "ø_Story saved____å",
				manageStory: "ø_Manage your story______å",
				manageStoryA1: "ø_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________å.",
				manageStoryA1V1: "ø_My Stories____å",
				manageStoryA1V2: "ø_blog posts____å",
				shareTitle: "Del din historie",
				sharePrivateHeader: "Din historie er ikke blevet delt, vil du dele den?",
				sharePrivateBtn1: "Del offentligt",
				sharePrivateBtn2: "Del med min organisation",
				sharePrivateProgress: "Deling i gang...",
				sharePrivateErr: "Deling mislykkedes, prøv igen eller",
				sharePrivateOk: "ø_Sharing updated, loading_________å...",
				shareStatus1: "Historien er ikke blevet gemt",
				shareStatus2: "Historien er blevet delt offentligt",
				shareStatus3: "Historien deles inden for din organisation",
				shareStatus4: "Historien deles ikke",
				sharePreviewAsUser: "Forhåndsvisning",
				shareHeader1: "Din historie er <strong>offentligt tilgængelig</strong>.",
				shareHeader2: "Din historie er tilgængelig for dine organisationsmedlemmer (der kræves login).",
				shareLinkHeader: "ø_Share your story______å",
				shareLinkOpen: "ÅBN",
				learnMore: "Find ud af mere",
				shareA1: "Brug %SHAREIMG% on <a href='%LINK1%' target='_blank'>siden med applikationselementet</a>. Brug <a href='%LINK2%' target='_blank'>siden med webkortelementer</a>, hvis webkortet heller ikke skal deles.",
				shareWarning: "Deling %WITH% er blevet deaktiveret, fordi du ikke er ejer af <a href='%LINK%' target='_blank'>webkortet</a>.",
				shareWarningWith1: "ø_publicly___å",
				shareWarningWith2: "ø_publicly and with the Organization___________å"
			},
			directCreation: {
				header: "Velkommen til Swipe/Kikkert-builder",
				mapPickHeader: "Skriv et gyldigt webkort-id for at komme i gang, eller brug søgeknappen for at gennemse webkort.",
				launchBuilder: "Start builderen",
				chooseWebmapLbl: "Vælg webkort...",
				explain2: "ø_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________å.",
				explain3: "Hvis du vil bruge to webkort i dit historiekort, vil du senere blive bedt om at angive det andet kort, når du vælger denne indstilling.",
				webmapPlaceholder: "Indtast et webkort-ID..."
			},
			saveErrorSocial: {
				title: "ø_Social media sharing update_________å",
				panel1: "ø_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________å.",
				panel1tooltip: "ø_By defining a title, summary and thumbnail image, your story will look like this_________________________å:",
				panel2:	"ø_Which title would you like to use on social media________________å:",
				panel2q1: "ø_Story title (recommended)_________å",
				panel2q1tooltip: "ø_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________å.",
				panel2q2: "ø_Item title____å",
				panel3: "ø_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________å.",
				panel4: "ø_Do not warn me again for this story____________å",
				mystories: "ø_My Stories____å",
				btnSave: "ø_Save__å"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mit indhold",
					favoritesLabel: "Mine favoritter"
				},
				title: "ø_Select Web Map_____å",
				searchTitle: "Søg",
				ok: "OK",
				cancel: "Annuller",
				placeholder: "Angiv søgeterm"
			}
		}
    })
);
