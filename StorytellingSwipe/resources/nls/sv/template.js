define(
	({
		viewer: {
			loading: {
				step1: "LÄSER IN PROGRAM",
				step2: "LÄSER IN DATA",
				step3: "INITIERAR",
				fail: "Det gick inte att hämta svep",
				loadBuilder: "VÄXLAR TILL BYGGLÄGET",
				redirectSignIn: "Å_REDIRECTING TO SIGN-IN PAGE_ö",
				redirectSignIn2: "Å_(you will be redirected here after sign-in)_ö",
				failButton: "Försök igen"
			},
			errors: {
				boxTitle: "Ett fel har inträffat",
				portalSelf: "Allvarligt fel: det gick inte att hämta portalkonfigurationen",
				invalidConfig: "Allvarligt fel: ogiltig konfiguration",
				invalidConfigNoWebmap: "Allvarligt fel: ogiltig konfiguration (ingen webbkarta angiven)",
				createMap: "Det gick inte att skapa kartan",
				invalidApp: "Allvarligt fel: programmet kunde inte läsas in",
				initMobile: "Välkommen till Svep-webbapplikationen. Applikationen är inte konfigurerad. Det interaktiva byggverktyget fungerar inte på mobila enheter.",
				noBuilderIE8: "Det interaktiva Svep-byggverktyget fungerar inte med tidigare versioner av Internet Explorer än version 9.",
				noLayerView: "Välkommen till Svep-webbapplikationen.<br />Applikationen är ännu inte konfigurerad.",
				appSave: "Det uppstod ett fel när webbprogrammet skulle sparas",
				mapSave: "Det uppstod ett fel när webbkartan skulle sparas",
				notAuthorized: "Du är inte behörig att konfigurera det här programmet",
				conflictingProjectionsTitle: "Projektionerna är i konflikt",
				conflictingProjections: "Svep-verktyget går inte att använda med två webbkartor som har olika projektioner. Öppna inställningarna och använd en webbkarta med samma projektion som den första webbkartan.",
				cpButton: "Stäng"
			},
			mobileView: {
				hideIntro: "DÖLJ INTRODUKTION",
				navLeft: "Teckenförklaring",
				navMap: "Karta",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "En berättelsekarta",
				builderButton: "Växla till byggläget",
				bitlyTooltip: "Hämta en kort länk till applikationen"
			}
		},
		builder: {
			builder: {
				panelHeader: "PROGRAMKONFIGURATION",
				buttonSave: "SPARA",
				buttonHelp: "Å_Help_ö",
				buttonShare: "Å_Share_ö",
				buttonDiscard: "AVBRYT",
				buttonSettings: "Inställningar",
				buttonView: "Visningsläge",
				buttonItem: "Öppna webbapplikationsobjektet",
				noPendingChange: "Ingen väntande ändring",
				unSavedChangeSingular: "1 osparad ändring",
				unSavedChangePlural: "osparade ändringar",
				popoverDiscard: "Vill du kasta alla osparade ändringar?",
				yes: "Ja",
				no: "Nej",
				popoverOpenViewExplain: "Om du öppnar vyn förlorar du alla osparade ändringar",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Avbryt",
				popoverSaveWhenDone: "Glöm inte att spara när du är klar",
				closeWithPendingChange: "Vill du bekräfta åtgärden? Du kommer att förlora dina ändringar.",
				gotIt: "OK",
				savingApplication: "Sparar programmet",
				saveSuccess: "Programmet har sparats",
				saveError: "Det gick inte att spara, försök igen",
				saveError2: "Å_Save failed due to an invalid html tag in a name or description_ö",
				saveError3: "Å_The title can't be empty_ö",
				signIn: "Logga in med ett konto på",
				signInTwo: "och spara programmet."
			},
			header:{
				editMe: "Redigera mig!",
				templateTitle: "Ange malltitel",
				templateSubtitle: "Ange underrubrik för mallen"
			},
			settings: {
				settingsHeader: "Programinställningar",
				modalCancel: "Avbryt",
				modalApply: "Använd"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Välj ett applikationstema eller definiera egna färger.",
				settingsLabelColor: "Bakgrundsfärg för rubrik och sidopanel"
			},
			settingsHeader: {
				settingsTabLogo: "Rubrik",
				settingsLogoExplain: "Anpassa rubriklogotypen (maxstorlek är 250 x 50 px).",
				settingsLogoEsri: "Esris logotyp",
				settingsLogoNone: "Ingen logotyp",
				settingsLogoCustom: "Egen logotyp",
				settingsLogoCustomPlaceholder: "Bild-URL",
				settingsLogoCustomTargetPlaceholder: "Genomklickningslänkar",
				settingsLogoSocialExplain: "Anpassa den övre högra rubriklänken.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Länk",
				settingsLogoSocialDisabled: "Den här funktionen har inaktiverats av administratören"
			},
			settingsExtent: {
				settingsTabExtent: "Utbredning",
				settingsExtentExplain: "Ange den ursprungliga utbredningen via den interaktiva kartan nedan.",
				settingsExtentExplainBottom: "Den utbredning du definierar ändrar webbkartans ursprungliga utbredning. Om du kör en svepserie kommer den här utbredningen inte att användas.",
				settingsExtentDateLineError: "Å_The extent cannot be across the meridian of 180ï¿½ longitude_ö",
				settingsExtentDateLineError2: "Det gick inte att beräkna utbredningen",
				settingsExtentDrawBtn: "Rita en ny utbredning",
				settingsExtentModifyBtn: "Redigera aktuell utbredning",
				settingsExtentApplyBtn: "Använd på huvudkartan",
				settingsExtentUseMainMap: "Använd huvudkartans utbredning"
			}
        },
		swipe: {
			mobileData: {
				noData: "Inga data att visa!",
				noDataExplain: "Peka på kartan för att välja ett geoobjekt och återgå hit",
				noDataMap: "Inga data för den här kartan",
				noPopup: "Det gick inte att hitta något popupfönster för det här geoobjektet"
			},
			mobileLegend: {
				noLegend: "Det finns ingen teckenförklaring att visa."
			},
			swipeSidePanel: {
				editTooltip: "Ange sidopanelbeskrivningen",
				editMe: "Redigera mig!",
				legendTitle: "Teckenförklaring"
			},
			infoWindow: {
				noFeature: "Det finns inga data att visa",
				noFeatureExplain: "Välj ett geoobjekt genom att peka på kartan"
			},
			settingsLayout: {
				settingsTabLayout: "Svepstil",
				settingsLayoutExplain: "Välj en stil för svepverktyget",
				settingsLayoutSwipe: "Lodrät stapel",
				settingsLayoutSpyGlass: "Kikare",
				settingsLayoutSelected: "Markerad layout",
				settingsLayoutSelect: "Markera denna layout",
				settingsSaveConfirm: "En del av ändringarna kräver att du sparar och hämtar applikationen igen"
			},
			settingsDataModel: {
				settingsTabDataModel: "Sveptyp",
				settingsDataModelExplainSwipe: "Vad vill du att användarna ska svepa?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Välj det lager eller den webbkarta som ska visas i kikaren.",
				settingsDataModelOneMap: "Ett lager i en webbkarta",
				settingsDataModel1Explain: "Välj det lager som ska svepas.",
				settingsDataModel1Warning: "Om lagret är dolt av högre lager har det ingen effekt när du sveper.",
				settingsDataModel1SpyGlassExplain: "Välj det lager som ska visas i kikaren.",
				settingsDataModelTwoMaps: "Två webbkartor",
				settingsDataModelLayerIds: "ID för webbkartlager",
				settingsDataModelSelected: "Vald typ",
				settingsDataModelWebmapSwipeId1: "ID för den högra kartan",
				settingsDataModelWebmapSwipeId2: "ID för den vänstra kartan",
				settingsDataModelWebmapGlassId1: "ID för huvudwebbkartan",
				settingsDataModelWebmapGlassId2: "ID för kikarwebbkartan",
				settingsDataModelSelect: "Välj den här typen",
				settingsDataModel2Explain: "Svep med en annan webbkarta.",
				settingsDataModel2SpyGlassExplain: "Visa en annan webbkarta.",
				settingsDataModel2HelpTitle: "Hitta ett webbkart-ID",
				settingsDataModel2HelpContent: "Kopiera och klistra in siffror efter tecknet '=' i webbkartans webbadress",
				switchMaps: "Å_Switch maps_ö",
				browseWebMaps: "Å_Browse web maps_ö"
			},
			settingsLegend: {
				settingsTabLegend: "Applikationslayout",
				settingsLegendExplain: "Välj inställningar för applikationens layout.",
				settingsLegendEnable: "Aktivera teckenförklaring",
				settingsDescriptionEnable: "Aktivera beskrivning",
				settingsBookmarksEnable: "Aktivera svepserie",
				settingsPopupDisable: "Aktivera popup-fönster",
				settingsLocationSearchEnable: "Aktivera sökning med lokaliserare",
				settingsGeolocatorEnable: "Aktivera geolokalisering",
				settingsLegendHelpContent: "Om du vill förfina innehållsförteckningen använder du innehållsförteckningen i webbkartvyn på ArcGIS.com (Dölj i teckenförklaringen)",
				settingsSeriesHelpContent: "En svepserie är ett tabbat navigeringsalternativ som hjälper användaren till en viss utbredning och visar en titel och beskrivande text i sidopanelen. Vid den första aktiveringen importeras webbkartans bokmärken och används för att fylla i seriefältet. Om du inaktiverar alternativet stängs seriefältet, men seriekonfigurationen finns kvar för framtida användning.", 
				settingsSeriesHelpContent2: "Med hjälp av en svepserie kan du skapa och redigera ett urval platser med tillhörande rubriker och text. Om det finns bokmärken i webbkartan visas dessa. Du kan inaktivera serien, men konfigurationen finns ändå kvar och kan användas senare.",
				settingsSeriesHelpLink: "Här finns ett exempel på en applikation med en svepserie",
				preview: "Förhandsgranska användargränssnitt",
				settingsLocateButtonExplain: "Den här funktionen kan användas på de flesta mobila enheter och datorwebbläsare (inklusive Internet Explorer 9+).",
				settingsLocateButton: "Å_Enable a 'Locate' button on supported browsers_ö",
				settingsAddressSearch: "Aktivera ett adressökverktyg"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Popupfönster",
				settingsSwipePopupExplain: "Anpassa utseendet på popupfönstrens rubriker för att hjälpa användaren koppla popupfönstren till kartlager.",
				settingsSwipePopupSwipe1: "Vänster karta",
				settingsSwipePopupSwipe2: "Höger karta",
				settingsSwipePopupGlass1: "Huvudkarta",
				settingsSwipePopupGlass2: "Kikarkarta",
				settingsSwipePopupTitle: "Rubrikens namn",
				settingsSwipePopupColor: "Rubrikens färg"
			},
			initPopup: {
				initHeader: "Å_Welcome to the Swipe/Spyglass Builder_ö",
				modalNext: "Nästa",
				modalPrev: "Föregående",
				modalApply: "Öppna applikationen"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beskrivning",
				discard: "Ignorera bokmärke",
				saveExtent: "Ange utbredning för bokmärke",
				discardDisabled: "Det går inte att ta bort det här bokmärket. Du kan inaktivera svepserier i inställningarna."
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