define(
	({
		viewer: {
			loading: {
				step1: "INDLÆSER APPLIKATION",
				step2: "INDLÆSER DATA",
				step3: "STARTER",
				fail: "Beklager, Swipe-indlæsning mislykkedes",
				loadBuilder: "SKIFTER TIL BUILDER-TILSTAND",
				redirectSignIn: "ø_REDIRECTING TO SIGN-IN PAGE_å",
				redirectSignIn2: "ø_(you will be redirected here after sign-in)_å",
				failButton: "Prøv igen"
			},
			errors: {
				boxTitle: "Der opstod en fejl",
				portalSelf: "Uoprettelig fejl: Kunne ikke hente portalkonfiguration",
				invalidConfig: "Uoprettelig fejl: Ugyldig konfiguration",
				invalidConfigNoWebmap: "Uoprettelig fejl: Ugyldig konfiguration (intet webkort angivet)",
				createMap: "Kan ikke oprette kort",
				invalidApp: "Uoprettelig fejl: Applikationen kan ikke indlæses",
				initMobile: "Velkommen til swipe-webapplikationen. Applikationen er ikke konfigureret. Det interaktive builder-program understøttes ikke på mobile enheder.",
				noBuilderIE8: "Swipe-builderprogrammet understøttes ikke i Internet Explorer før version 9.",
				noLayerView: "Velkommen til Swipe-webapplikationen.<br />Applikationen er endnu ikke konfigureret.",
				appSave: "Fejl ved lagring af webapplikationen",
				mapSave: "Fejl ved lagring af webkortet",
				notAuthorized: "Du er ikke autoriseret til at få adgang til denne applikation",
				conflictingProjectionsTitle: "Konfliktende projektioner",
				conflictingProjections: "Swipe understøtter ikke, at man bruger to webkort med forskellige projektioner. Åbn indstillinger, og brug et webkort, der anvender den samme projektion som det første webkort.",
				cpButton: "Luk"
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
				bitlyTooltip: "Hent et kortere link til applikationen"
			}
		},
		builder: {
			builder: {
				panelHeader: "APPLIKATIONSKONFIGURATION",
				buttonSave: "GEM",
				buttonHelp: "ø_Help_å",
				buttonShare: "ø_Share_å",
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
				savingApplication: "Gemmer applikation",
				saveSuccess: "Applikation gemt med succes",
				saveError: "Lagring mislykkedes, prøv igen",
				saveError2: "ø_Save failed due to an invalid html tag in a name or description_å",
				saveError3: "ø_The title can't be empty_å",
				signIn: "Log ind med en konto på",
				signInTwo: "for at gemme applikationen."
			},
			header:{
				editMe: "Redigér mig!",
				templateTitle: "Indstil skabelontitel",
				templateSubtitle: "Indstil skabelonundertitel"
			},
			settings: {
				settingsHeader: "Applikationsindstillinger",
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
				settingsExtentDateLineError: "ø_The extent cannot be across the meridian of 180ï¿½ longitude_å",
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
				settingsSaveConfirm: "Nogle af dine ændringer kræver, at du gemmer og genindlæser applikationen"
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
				switchMaps: "ø_Switch maps_å",
				browseWebMaps: "ø_Browse web maps_å"
			},
			settingsLegend: {
				settingsTabLegend: "App-layout",
				settingsLegendExplain: "Vælg indstillinger for applikationslayout.",
				settingsLegendEnable: "Aktiv\ér signaturforklaring",
				settingsDescriptionEnable: "Aktiv\ér beskrivelse",
				settingsBookmarksEnable: "Aktiv\ér Swipe-serie",
				settingsPopupDisable: "Aktiv\ér pop-up-vindue",
				settingsLocationSearchEnable: "Aktiv\ér lokatorsøgning",
				settingsGeolocatorEnable: "Aktiv\ér geolokator",
				settingsLegendHelpContent: "Hvis du vil forfine signaturforklaringens indhold, kan du bruge indholdsfortegnelsen i ArcGIS.com-webkortviseren (Skjul i signaturforklaring)",
				settingsSeriesHelpContent: "Når du trykker på swipe-serien, vil kortviseren navigere til en bestemt udstrækning og vise en titel og en beskrivelsestekst i sidepanelet. Ved første aktivering importeres dine webkortbogmærker, og de anvendes til at udfylde serielinjen på forhånd. Hvis du deaktiverer seriefunktionen, slås seriellinjen fra, men seriekonfigurationen bevares til fremtidig brug.", 
				settingsSeriesHelpContent2: "Med swipe-serien kan du oprette og redigere et udvalg af steder med ledsagende titler og tekst. Hvis dit webkort har bogmærker, bliver disse vist. Du kan deaktivere serien, men konfigurationen vil blive bevaret til fremtidig brug.",
				settingsSeriesHelpLink: "Se et eksempel på en applikation med swipe-serien her",
				preview: "UI-forhåndsvisning",
				settingsLocateButtonExplain: "Denne funktionalitet understøttes på de fleste mobile enheder og pc-browsere (inkl. Internet Explorer 9+).",
				settingsLocateButton: "ø_Enable a 'Locate' button on supported browsers_å",
				settingsAddressSearch: "Aktiv\ér et adressesøgningsværktøj"
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
				initHeader: "ø_Welcome to the Swipe/Spyglass Builder_å",
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
				title: "ø_Help_å",
				close: "ø_Close_å",
				tab1: {
					div1: "ø_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._å",
					div2: "ø_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._å",
					div3: "ø_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._å"
				}
			},
			share: {
				firstSaveTitle: "ø_Application successfully saved_å",
				firstSaveHeader: "ø_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._å",
				firstSaveA1: "ø_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_å",
				firstSaveA1bis: "ø_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._å",
				firstSaveQ2: "ø_Is my Application shared?_å",
				firstSaveA2: "ø_Currently your Application is not shared. To share it, use the SHARE button._å",
				shareTitle: "ø_Share your Application_å",
				sharePrivateHeader: "ø_Your Application is not shared, would you like to share it?_å",
				sharePrivateBtn1: "ø_Share publicly_å",
				sharePrivateBtn2: "ø_Share with my Organization_å",
				sharePrivateProgress: "ø_Sharing in progress..._å",
				sharePrivateErr: "ø_Sharing failed, try again or_å",
				sharePrivateOk: "ø_Sharing updated successfully, loading..._å",
				shareStatus1: "ø_Application is not saved_å",
				shareStatus2: "ø_Application is shared publicly_å",
				shareStatus3: "ø_Application is shared within the organization_å",
				shareStatus4: "ø_Application is not shared_å",
				sharePreviewAsUser: "ø_Preview_å",
				shareHeader1: "ø_Your Application is <strong>publicly accessible</strong>._å",
				shareHeader2: "ø_Your Application is accessible by your organization members (login is required)._å",
				shareLinkHeader: "ø_Share the Application with your audience_å",
				shareLinkOpen: "ø_OPEN_å",
				learnMore: "ø_Learn more_å",
				shareQ1Opt1: "ø_How do I keep the Application private?_å",
				shareQ1Opt2: "ø_How do I keep the Application private or share it publicly?_å",
				shareA1: "ø_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._å",
				shareA1bis: "ø_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._å",
				shareQ2: "ø_How do I edit the Application later?_å",
				shareQ2bis: "ø_How do I get back to the authoring interface?_å",
				shareA2div1: "ø_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._å",
				shareA2div2: "ø_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_å",				
				shareQ3: "ø_Where is the data stored?_å",
				shareA3: "ø_The Application configuration is stored in this web application item</a>._å",
				shareWarning: "ø_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._å",
 				shareWarningWith1: "ø_publicly_å",
 				shareWarningWith2: "ø_publicly and with the Organization_å"
			},
			directCreation: {
				header: "ø_Welcome to the Swipe/Spyglass Builder_å",
				mapPickHeader: "ø_To get started, please input a valid web map id, or use the search button to browse web maps._å",
				launchBuilder: "ø_Launch Builder_å"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "ø_My Organization_å",
					onlineLabel: "ø_ArcGIS Online_å",
					contentLabel: "ø_My Content_å",
					favoritesLabel: "ø_My Favorites_å"
				},
				title: "ø_Select Web Map_å",
				searchTitle: "ø_Search_å",
				ok: "ø_Ok_å",
				cancel: "ø_Cancel_å",
				placeholder: "ø_Enter search term_å"
			}
		}
    })
);