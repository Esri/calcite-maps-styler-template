define(
	 ({
		viewer: {
			loading: {
				step1: "Å_LOADING STORY_____ö",
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
				invalidConfigNoWebmap: "Allvarligt fel: ogiltig konfiguration (ingen webbkarta angiven)",
				createMap: "Det gick inte att skapa kartan",
				invalidApp: "Å_Fatal error: The story cannot be loaded_____________ö",
				initMobile: "Välkommen till Svep-webbapplikationen. Applikationen är inte konfigurerad. Det interaktiva byggverktyget fungerar inte på mobila enheter.",
				initMobile2: "Å_The Swipe builder is not supported at this display size__________________ö.",
				noBuilderIE8: "Det interaktiva Svep-byggverktyget fungerar inte med tidigare versioner av Internet Explorer än version 9.",
				noLayerView: "Välkommen till Svep-webbapplikationen.<br />Applikationen är ännu inte konfigurerad.",
				appSave: "Å_Error saving the web story_________ö",
				mapSave: "Det uppstod ett fel när webbkartan skulle sparas",
				notAuthorized: "Å_You are not authorized to access this story______________ö",
				conflictingProjectionsTitle: "Projektionerna är i konflikt",
				conflictingProjections: "Svep går inte att använda med två webbkartor som har olika projektioner. Öppna inställningarna och använd en webbkarta med samma projektion som den första webbkartan.",
				cpButton: "Stäng",
				unspecifiedConfigOwner: "Å_Authorized owner hasn't been configured_____________ö.",
				invalidConfigOwner: "Å_Story owner is not authorized__________ö."
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
				bitlyTooltip: "Hämta en kort länk"
			}
		},
		builder: {
			builder: {
				panelHeader: "Å_STORY CONFIGURATION_______ö",
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
				savingApplication: "Å_Saving story_____ö",
				saveSuccess: "Å_Story saved successfully________ö",
				saveError: "Det gick inte att spara, försök igen",
				saveError2: "Det gick inte att spara på grund av en ogiltig html-tagg i ett namn eller en beskrivning",
				saveError3: "Titeln får inte vara tom",
				signIn: "Logga in med ett konto på",
				signInTwo: "Å_to save the story______ö."
			},
			header:{
				editMe: "Redigera mig!",
				templateTitle: "Ange malltitel",
				templateSubtitle: "Ange underrubrik för mallen"
			},
			settings: {
				settingsHeader: "Å_Story settings_____ö",
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
				settingsSaveConfirm: "Å_Some of your changes require that you save and reload the story____________________ö"
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
				settingsLegendExplain: "Å_Select the layout settings_________ö.",
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
				firstSaveTitle: "Å_Story successfully saved________ö",
				firstSaveHeader: "Å_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________ö.",
				firstSaveA1: "Om du inte är bekant med ArcGIS Online eller vill ha en genväg till skapargränssnittet kan du spara följande länk: %LINK1%",
				firstSaveA1bis: "Å_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________ö.",
				firstSaveQ2: "Å_Is my story shared_______ö?",
				firstSaveA2: "Å_Currently your story is not shared. To share it, use the SHARE button______________________ö.",
				shareTitle: "Å_Share your story______ö",
				sharePrivateHeader: "Å_Your story is not shared, would you like to share it_________________ö?",
				sharePrivateBtn1: "Dela offentligt",
				sharePrivateBtn2: "Dela med min organisation",
				sharePrivateProgress: "Delning pågår ...",
				sharePrivateErr: "Det gick inte att dela. Försök igen eller",
				sharePrivateOk: "Delningen har uppdaterats, laddar ...",
				shareStatus1: "Å_Story is not saved______ö",
				shareStatus2: "Å_Story is shared publicly________ö",
				shareStatus3: "Å_Story is shared within the organization_____________ö",
				shareStatus4: "Å_Story is not shared_______ö",
				sharePreviewAsUser: "Förhandsgranska",
				shareHeader1: "Å_Your story is <strong>publicly accessible</strong>________________ö.",
				shareHeader2: "Å_Your story is accessible by your organization members (login is required)_______________________ö.",
				shareLinkHeader: "Å_Share the story with your audience___________ö",
				shareLinkOpen: "ÖPPNA",
				learnMore: "Läs mer",
				shareQ1Opt1: "Å_How do I keep the story private___________ö?",
				shareQ1Opt2: "Å_How do I keep the story private or share it publicly_________________ö?",
				shareA1: "Använd %SHAREIMG% på <a href='%LINK1%' target='_blank'>applikationens objektsida</a>. Om du även vill sluta dela webbkartan använder du <a href='%LINK2%' target='_blank'>webbkartans objektsida</a>.",
				shareA1bis: "Du kan också inaktivera delning av geoobjekttjänsten på <a href='%LINK1%' target='_blank'>geoobjekttjänstens objektsida</a>.",
				shareQ2: "Å_How do I edit the story later__________ö?",
				shareQ2bis: "Hur kommer jag tillbaka till redigeringsgränssnittet?",
				shareA2div1: "Å_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________ö.",
				shareA2div2: "Å_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________ö:",
				shareQ3: "Var lagras data?",
				shareA3: "Å_The story configuration is stored in this web application item</a>_____________________ö.",
				shareWarning: "Delning %WITH% har inaktiverats efter som du inte är ägare till <a href='%LINK%' target='_blank'>webbkartan</a>.",
 				shareWarningWith1: "offentligt",
 				shareWarningWith2: "offentligt och med organisationen"
			},
			directCreation: {
				header: "Välkommen till byggverktyget för Svep/Kikare",
				mapPickHeader: "Du kan börja genom att ange ett giltigt webbkart-ID eller bläddra igenom webbkartorna med sökknappen.",
				launchBuilder: "Starta byggverktyget",
				chooseWebmapLbl: "Välj webbkarta ...",
				explain2: "Om du vill skapa en berättelsekarta för Svep eller Kikare använder du knappen nedan för att välja den befintliga ArcGIS Online-webbkarta du vill använda. Alternativt kan du klistra in webbkartans ID i fältet nedan.",
				explain3: "Om du vill använda två webbkartor i berättelsekartan uppmanas du ange den andra webbkartan senare när du väljer det alternativet.",
				webmapPlaceholder: "Ange ett webbkart-ID ..."
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
				title: "Välj webbkarta",
				searchTitle: "Sök",
				ok: "OK",
				cancel: "Avbryt",
				placeholder: "Ange sökterm"
			}
		}
    })
);
