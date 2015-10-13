define(
	 ({
		viewer: {
			loading: {
				step1: "ø_LOADING STORY_____å",
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
				invalidConfigNoWebmap: "Uoprettelig fejl: Ugyldig konfiguration (intet webkort angivet)",
				createMap: "Kan ikke oprette kort",
				invalidApp: "ø_Fatal error: The story cannot be loaded_____________å",
				initMobile: "Velkommen til swipe-webapplikationen. Applikationen er ikke konfigureret. Det interaktive builder-program understøttes ikke på mobile enheder.",
				initMobile2: "ø_The Swipe builder is not supported at this display size__________________å.",
				noBuilderIE8: "Swipe-builderprogrammet understøttes ikke i Internet Explorer før version 9.",
				noLayerView: "Velkommen til Swipe-webapplikationen.<br />Applikationen er endnu ikke konfigureret.",
				appSave: "ø_Error saving the web story_________å",
				mapSave: "Fejl ved lagring af webkortet",
				notAuthorized: "ø_You are not authorized to access this story______________å",
				conflictingProjectionsTitle: "Konfliktende projektioner",
				conflictingProjections: "Swipe understøtter ikke brug af to webkort med forskellige projektioner. Åbn indstillinger, og brug et webkort, der anvender den samme projektion som det første webkort.",
				cpButton: "Luk",
				unspecifiedConfigOwner: "ø_Authorized owner hasn't been configured_____________å.",
				invalidConfigOwner: "ø_Story owner is not authorized__________å."
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
				bitlyTooltip: "Hent et kort link"
			}
		},
		builder: {
			builder: {
				panelHeader: "ø_STORY CONFIGURATION_______å",
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
				savingApplication: "ø_Saving story_____å",
				saveSuccess: "ø_Story saved successfully________å",
				saveError: "Lagring mislykkedes, prøv igen",
				saveError2: "Lagring mislykkedes pga. en ugyldig html-kode i et navn eller beskrivelse",
				saveError3: "Titlen kan ikke være tom",
				signIn: "Log ind med en konto på",
				signInTwo: "ø_to save the story______å."
			},
			header:{
				editMe: "Redigér mig!",
				templateTitle: "Indstil skabelontitel",
				templateSubtitle: "Indstil skabelonundertitel"
			},
			settings: {
				settingsHeader: "ø_Story settings_____å",
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
				settingsSaveConfirm: "ø_Some of your changes require that you save and reload the story____________________å"
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
				settingsLegendExplain: "ø_Select the layout settings_________å.",
				settingsLegendEnable: "Aktivér signaturforklaring",
				settingsDescriptionEnable: "Aktivér beskrivelse",
				settingsBookmarksEnable: "Aktivér Swipe-serie",
				settingsPopupDisable: "Aktivér pop-up-vindue",
				settingsLocationSearchEnable: "Aktivér lokatorsøgning",
				settingsGeolocatorEnable: "Aktivér geolokator",
				settingsLegendHelpContent: "Hvis du vil forfine signaturforklaringens indhold, kan du bruge indholdsfortegnelsen i ArcGIS.com-webkortviseren (Skjul i signaturforklaring)",
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
				firstSaveTitle: "ø_Story successfully saved________å",
				firstSaveHeader: "ø_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________å.",
				firstSaveA1: "Hvis du ikke er fortrolig med ArcGIS Online, eller hvis du ønsker en genvej for at få adgang til forfattergrænsefladen, kan du gemme dette link: %LINK1%",
				firstSaveA1bis: "ø_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________å.",
				firstSaveQ2: "ø_Is my story shared_______å?",
				firstSaveA2: "ø_Currently your story is not shared. To share it, use the SHARE button______________________å.",
				shareTitle: "ø_Share your story______å",
				sharePrivateHeader: "ø_Your story is not shared, would you like to share it_________________å?",
				sharePrivateBtn1: "Del offentligt",
				sharePrivateBtn2: "Del med min organisation",
				sharePrivateProgress: "Deling i gang...",
				sharePrivateErr: "Deling mislykkedes, prøv igen eller",
				sharePrivateOk: "Deling blev opdateret med succes, indlæser...",
				shareStatus1: "ø_Story is not saved______å",
				shareStatus2: "ø_Story is shared publicly________å",
				shareStatus3: "ø_Story is shared within the organization_____________å",
				shareStatus4: "ø_Story is not shared_______å",
				sharePreviewAsUser: "Forhåndsvisning",
				shareHeader1: "ø_Your story is <strong>publicly accessible</strong>________________å.",
				shareHeader2: "ø_Your story is accessible by your organization members (login is required)_______________________å.",
				shareLinkHeader: "ø_Share the story with your audience___________å",
				shareLinkOpen: "ÅBN",
				learnMore: "Find ud af mere",
				shareQ1Opt1: "ø_How do I keep the story private___________å?",
				shareQ1Opt2: "ø_How do I keep the story private or share it publicly_________________å?",
				shareA1: "Brug %SHAREIMG% on <a href='%LINK1%' target='_blank'>siden med applikationselementet</a>. Brug <a href='%LINK2%' target='_blank'>siden med webkortelementer</a>, hvis webkortet heller ikke skal deles.",
				shareA1bis: "Hvis du også vil ophæve deling af featuretjenesten, skal du bruge <a href='%LINK1%' target='_blank'>featuretjenestens elementoplysningsside</a>.",
				shareQ2: "ø_How do I edit the story later__________å?",
				shareQ2bis: "Hvordan kommer jeg tilbage til redigeringsgrænsefladen?",
				shareA2div1: "ø_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________å.",
				shareA2div2: "ø_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________å:",
				shareQ3: "Hvor er dataene gemt?",
				shareA3: "ø_The story configuration is stored in this web application item</a>_____________________å.",
				shareWarning: "Deling %WITH% er blevet deaktiveret, fordi du ikke er ejer af <a href='%LINK%' target='_blank'>webkortet</a>.",
 				shareWarningWith1: "offentligt",
 				shareWarningWith2: "offentligt og med organiaationen"
			},
			directCreation: {
				header: "Velkommen til Swipe/Kikkert-builder",
				mapPickHeader: "Skriv et gyldigt webkort-id for at komme i gang, eller brug søgeknappen for at gennemse webkort.",
				launchBuilder: "Start builderen",
				chooseWebmapLbl: "Vælg webkort...",
				explain2: "Hvis du vil oprette et Swipe- eller Kikkert-historiekort, skal du bruge knappen nedenfor til at vælge det eksisterende ArcGIS Online-webkort du vil bruge. Alternativt kan du indsætte webkortets ID i feltet nedenfor.",
				explain3: "Hvis du vil bruge to webkort i dit historiekort, vil du senere blive bedt om at angive det andet kort, når du vælger denne indstilling.",
				webmapPlaceholder: "Indtast et webkort-ID..."
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
				title: "Vælg webkort",
				searchTitle: "Søg",
				ok: "OK",
				cancel: "Annuller",
				placeholder: "Angiv søgeterm"
			}
		}
    })
);
