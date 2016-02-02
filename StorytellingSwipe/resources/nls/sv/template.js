define(
	 ({
		viewer: {
			loading: {
				step1: "LÄSER IN BERÄTTELSE",
				step2: "LÄSER IN DATA",
				step3: "INITIERAR",
				fail: "Det gick inte att hämta svep",
				loadBuilder: "VÄXLAR TILL BYGGLÄGET",
				redirectSignIn: "OMDIRIGERAR TILL INLOGGNINGSSIDAN",
				redirectSignIn2: "(du omdirigeras hit efter inloggning)",
				failButton: "Försök igen"
			},
			errors: {
				boxTitle: "Ett fel har inträffat",
				portalSelf: "Allvarligt fel: det gick inte att hämta portalkonfigurationen",
				invalidConfig: "Allvarligt fel: ogiltig konfiguration",
				invalidConfigNoWebmap: "Å_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ö",
				invalidConfigNoAppDev: "Å_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ö.",
				createMap: "Det gick inte att skapa kartan",
				invalidApp: "Allvarligt fel: berättelsen kunde inte läsas in",
				initMobile: "Välkommen till Svep-webbapplikationen. Applikationen är inte konfigurerad. Det interaktiva byggverktyget fungerar inte på mobila enheter.",
				initMobile2: "Å_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ö.",
				initMobile3: "Å_Please rotate your device to landscape orientation to use the Swipe builder________________________ö.",
				noBuilderIE8: "Det interaktiva Svep-byggverktyget fungerar inte med tidigare versioner av Internet Explorer än version 9.",
				noLayerView: "Välkommen till Svep-webbapplikationen.<br />Applikationen är ännu inte konfigurerad.",
				appSave: "Det uppstod ett fel när webberättelsen skulle sparas",
				mapSave: "Det uppstod ett fel när webbkartan skulle sparas",
				notAuthorized: "Du är inte behörig att öppna den här berättelsen",
				notAuthorizedBuilder: "Å_You are not authorized to use Swipe and Spyglass builder__________________ö.",
				conflictingProjectionsTitle: "Projektionerna är i konflikt",
				conflictingProjections: "Svep går inte att använda med två webbkartor som har olika projektioner. Öppna inställningarna och använd en webbkarta med samma projektion som den första webbkartan.",
				cpButton: "Stäng",
				unspecifiedConfigOwner: "Ingen auktoriserad ägare har konfigurerats.",
				invalidConfigOwner: "Berättelsens ägare är inte auktoriserad."
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
				facebookTooltip: "Dela på Facebook",
				twitterTooltip: "Dela på Twitter",
				bitlyTooltip: "Hämta en kort länk",
				tooltipAutoplayDisabled: "Å_This isn't available in autoplay mode____________ö",
				autoplayLabel: "Å_Autoplay mode_____ö",
				autoplayExplain1: "Å_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ö.",
				autoplayExplain2: "Å_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ö."
			}
		},
		builder: {
			builder: {
				panelHeader: "BERÄTTELSEKONFIGURATION",
				buttonSave: "SPARA",
				buttonHelp: "Hjälp",
				buttonShare: "Dela",
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
				savingApplication: "Sparar berättelsen",
				saveSuccess: "Å_Story saved____ö",
				saveError: "Det gick inte att spara, försök igen",
				saveError2: "Det gick inte att spara på grund av en ogiltig html-tagg i ett namn eller en beskrivning",
				saveError3: "Titeln får inte vara tom",
				signIn: "Logga in med ett konto på",
				signInTwo: "och spara berättelsen."
			},
			header:{
				editMe: "Redigera mig!",
				templateTitle: "Ange malltitel",
				templateSubtitle: "Ange underrubrik för mallen"
			},
			settings: {
				settingsHeader: "Inställningar för berättelsen",
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
				settingsExtentDateLineError: "Det går inte att ha en utbredning över 180ï¿½-meridianen",
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
				settingsSaveConfirm: "En del av ändringarna kräver att du sparar och läser in berättelsen igen"
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
				switchMaps: "Växla kartor",
				browseWebMaps: "Bläddra bland webbkartor"
			},
			settingsLegend: {
				settingsTabLegend: "Applikationslayout",
				settingsLegendExplain: "Välj layoutinställningarna.",
				settingsLegendEnable: "Aktivera teckenförklaring",
				settingsDescriptionEnable: "Aktivera beskrivning",
				settingsBookmarksEnable: "Aktivera svepserie",
				settingsPopupDisable: "Å_Enable pop-up_____ö",
				settingsLocationSearchEnable: "Aktivera sökning med lokaliserare",
				settingsGeolocatorEnable: "Aktivera geolokalisering",
				settingsLegendHelpContent: "Å_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ö",
				settingsSeriesHelpContent: "En svepserie är ett tabbat navigeringsalternativ som hjälper användaren till en viss utbredning och visar en titel och beskrivande text i sidopanelen. Vid den första aktiveringen importeras webbkartans bokmärken och används för att fylla i seriefältet. Om du inaktiverar alternativet stängs seriefältet, men seriekonfigurationen finns kvar för framtida användning.",
				settingsSeriesHelpContent2: "Med hjälp av en svepserie kan du skapa och redigera ett urval platser med tillhörande rubriker och text. Om det finns bokmärken i webbkartan visas dessa. Du kan inaktivera serien, men konfigurationen finns ändå kvar och kan användas senare.",
				settingsSeriesHelpLink: "Här finns ett exempel på en applikation med en svepserie",
				preview: "Förhandsgranska användargränssnitt",
				settingsLocateButtonExplain: "Den här funktionen kan användas på de flesta mobila enheter och datorwebbläsare (inklusive Internet Explorer 9+).",
				settingsLocateButton: "Aktivera knappen Hitta för webbläsare som stöds",
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
				initHeader: "Välkommen till byggverktyget för Svep/Kikare",
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
				title: "Hjälp",
				close: "Stäng",
				tab1: {
					div1: "Mallen Svep/Kikare är utformad för att jämföra två separata webbkartor eller två lager i en webbkarta i en tilltalande och lättanvänd webbapplikation som kan användas i valfri webbläsare på alla enheter, inklusive smartphones och surfplattor.",
					div2: "Ytterligare information om mallen Svep/Kikare, inklusive exempel som har skapats av användare, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> finns på webbplatsen med berättelsekartor</a>. Du kan även följa oss på Twitter på <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Vi vill gärna att du hör av dig! Om du undrar något, vill föreslå en ny funktion eller vill rapportera ett programfel är du välkommen att besöka <a href='http://links.esri.com/storymaps/forum' target='_blank'>användarforumet på Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Å_Story saved____ö",
				manageStory: "Å_Manage your story______ö",
				manageStoryA1: "Å_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ö.",
				manageStoryA1V1: "Å_My Stories____ö",
				manageStoryA1V2: "Å_blog posts____ö",
				shareTitle: "Dela din berättelse",
				sharePrivateHeader: "Din berättelse delas inte. Vill du dela den?",
				sharePrivateBtn1: "Dela offentligt",
				sharePrivateBtn2: "Dela med min organisation",
				sharePrivateProgress: "Delning pågår ...",
				sharePrivateErr: "Det gick inte att dela. Försök igen eller",
				sharePrivateOk: "Å_Sharing updated, loading_________ö...",
				shareStatus1: "Berättelsen har inte sparats",
				shareStatus2: "Berättelsen delas offentligt",
				shareStatus3: "Berättelsen delas inom organisationen",
				shareStatus4: "Berättelsen delas inte",
				sharePreviewAsUser: "Förhandsgranska",
				shareHeader1: "Din berättelse är <strong>offentligt tillgänglig</strong>.",
				shareHeader2: "Berättelsen är tillgänglig för organisationens medlemmar (inloggning krävs).",
				shareLinkHeader: "Å_Share your story______ö",
				shareLinkOpen: "ÖPPNA",
				learnMore: "Läs mer",
				shareA1: "Använd %SHAREIMG% på <a href='%LINK1%' target='_blank'>applikationens objektsida</a>. Om du även vill sluta dela webbkartan använder du <a href='%LINK2%' target='_blank'>webbkartans objektsida</a>.",
				shareWarning: "Delning %WITH% har inaktiverats efter som du inte är ägare till <a href='%LINK%' target='_blank'>webbkartan</a>.",
				shareWarningWith1: "Å_publicly___ö",
				shareWarningWith2: "Å_publicly and with the Organization___________ö"
			},
			directCreation: {
				header: "Välkommen till byggverktyget för Svep/Kikare",
				mapPickHeader: "Du kan börja genom att ange ett giltigt webbkart-ID eller bläddra igenom webbkartorna med sökknappen.",
				launchBuilder: "Starta byggverktyget",
				chooseWebmapLbl: "Välj webbkarta ...",
				explain2: "Å_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ö.",
				explain3: "Om du vill använda två webbkartor i berättelsekartan uppmanas du ange den andra webbkartan senare när du väljer det alternativet.",
				webmapPlaceholder: "Ange ett webbkart-ID ..."
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
					organizationLabel: "Min organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mitt innehåll",
					favoritesLabel: "Mina favoriter"
				},
				title: "Å_Select Web Map_____ö",
				searchTitle: "Sök",
				ok: "OK",
				cancel: "Avbryt",
				placeholder: "Ange sökterm"
			}
		}
    })
);
