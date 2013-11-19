define(
	({
		viewer: {
			loading: {
				step1: "APPLICATIE LADEN",
				step2: "GEGEVENS LADEN",
				step3: "INITIALISEREN",
				fail: "Laden Swipe mislukt",
				loadBuilder: "OVERSCHAKELEN NAAR BUILDER MODUS",
				failButton: "Opnieuw proberen"
			},
			errors: {
				boxTitle: "Er is een fout opgetreden",
				portalSelf: "Onherstelbare fout: Kan de portaalconfiguratie niet ophalen",
				invalidConfig: "Onherstelbare fout: ongeldige configuratie",
				invalidConfigNoWebmap: "Onherstelbare fout: ongeldige configuratie (geen webmap opgegeven)",
				createMap: "Kan kaart niet maken",
				invalidApp: "Onherstelbare fout: de applicatie kan niet worden geladen",
				initMobile: "Welkom bij de swipe webapplicatie. De applicatie is niet geconfigureerd. De interactieve builder wordt niet ondersteund op mobiele apparaten.",
				noBuilderIE8: "De Swipe interactieve builder wordt niet ondersteund in Internet Explorer vóór versie 9.",
				noLayerView: "Welkom bij de Swipe webapplicatie.<br />De applicatie is nog niet ingesteld.",
				appSave: "Fout bij het opslaan van de webapplicatie",
				mapSave: "Fout bij het opslaan van de webmap",
				notAuthorized: "U bent niet gemachtigd om deze applicatie te openen",
				conflictingProjectionsTitle: "Conflicterende projecties",
				conflictingProjections: "Swipe ondersteunt het gebruik van twee webmaps met verschillende projecties niet. Ga naar de instellingen en gebruik een webmap met dezelfde projectie als de eerste webmap.",
				cpButton: "Sluiten"
			},
			mobileView: {
				hideIntro: "INLEIDING VERBERGEN",
				navLeft: "Legenda",
				navMap: "Kaart",
				navRight: "Gegevens"
			},
			desktopView: {
				storymapsText: "Een kaartverhaal",
				builderButton: "Omschakelen naar buildermodus",
				bitlyTooltip: "Een korte koppeling naar de applicatie maken"
			}
		},
		builder: {
			builder: {
				panelHeader: "APPLICATIECONFIGURATIE",
				buttonSave: "OPSLAAN",
				buttonDiscard: "ANNULEREN",
				buttonSettings: "Instellingen",
				buttonView: "Weergavemodus",
				buttonItem: "Het webapplicatie-item openen",
				noPendingChange: "Geen wijziging in behandeling",
				unSavedChangeSingular: "1 niet-opgeslagen wijziging",
				unSavedChangePlural: "niet-opgeslagen wijzigingen",
				popoverDiscard: "Weet u zeker dat u eventuele niet-opgeslagen wijzigingen wilt negeren?",
				yes: "Ja",
				no: "Nee",
				popoverOpenViewExplain: "Door de viewer te openen gaan eventuele niet-opgeslagen wijzigingen verloren",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Annuleren",
				popoverSaveWhenDone: "Vergeet uw werk niet op te slaan wanneer u klaar bent",
				closeWithPendingChange: "Weet u zeker dat u de actie wilt bevestigen? Uw wijzigingen gaan verloren.",
				gotIt: "OK",
				savingApplication: "Applicatie opslaan",
				saveSuccess: "Applicatie opgeslagen",
				saveError: "Opslaan mislukt, probeer het opnieuw",
				signIn: "Meld u aan met een account op",
				signInTwo: "om de applicatie op te slaan."
			},
			header:{
				editMe: "Bewerk me!",
				templateTitle: "Titel voor template instellen",
				templateSubtitle: "Subtitel voor template instellen"
			},
			settings: {
				settingsHeader: "Applicatie-instellingen",
				modalCancel: "Annuleren",
				modalApply: "Toepassen"
			},
			settingsColors: {
				settingsTabColor: "Thema",
				settingsColorExplain: "Kies een appthema of definieer uw eigen kleuren.",
				settingsLabelColor: "Achtergrondkleuren voor kop en zijvensters"
			},
			settingsHeader: {
				settingsTabLogo: "Koptekst",
				settingsLogoExplain: "Pas het logo van de koptekst aan (maximaal 250 x 50px).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Geen logo",
				settingsLogoCustom: "Aangepast logo",
				settingsLogoCustomPlaceholder: "Afbeeldings-URL",
				settingsLogoCustomTargetPlaceholder: "Doorklikkoppeling",
				settingsLogoSocialExplain: "Pas de koppeling in de rechterbovenhoek van de koptekst aan.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Koppeling",
				settingsLogoSocialDisabled: "Deze functie is uitgeschakeld door de beheerder"
			},
			settingsExtent: {
				settingsTabExtent: "Extent",
				settingsExtentExplain: "Stel het begin-extent in met de interactieve kaart hieronder.",
				settingsExtentExplainBottom: "Het extent dat u definieert, zal het oorspronkelijke extent van de webmap wijzigen. Merk op dat dit extent niet zal worden gebruikt als u een Swipe-reeks uitvoert.",
				settingsExtentDateLineError: "Het extent mag niet op de meridiaan van 180° lengtegraad zijn",
				settingsExtentDateLineError2: "Fout bij het berekenen van het extent",
				settingsExtentDrawBtn: "Een nieuw extent tekenen",
				settingsExtentModifyBtn: "Het huidige extent bewerken",
				settingsExtentApplyBtn: "Toepassen op hoofdkaart",
				settingsExtentUseMainMap: "Hoofdkaartextent gebruiken"
			}
        },
		swipe: {
			mobileData: {
				noData: "Geen gegevens om weer te geven!",
				noDataExplain: "Tik op de kaart om een functie te selecteren en hier terug te keren",
				noDataMap: "Geen gegevens voor deze kaart",
				noPopup: "Geen pop-up gevonden voor deze functie"
			},
			mobileLegend: {
				noLegend: "Geen legenda om weer te geven."
			},
			swipeSidePanel: {
				editTooltip: "De omschrijving voor het zijvenster instellen",
				editMe: "Bewerk me!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Geen gegevens om weer te geven",
				noFeatureExplain: "Tik op de kaart om een object te selecteren"
			},
			settingsLayout: {
				settingsTabLayout: "Swipe-stijl",
				settingsLayoutExplain: "Kies een stijl voor de swipe tool.",
				settingsLayoutSwipe: "Verticale balk",
				settingsLayoutSpyGlass: "Verrekijker",
				settingsLayoutSelected: "Geselecteerde lay-out",
				settingsLayoutSelect: "Selecteer deze lay-out",
				settingsSaveConfirm: "Voor een aantal veranderingen moet u de applicatie opslaan en opnieuw laden"
			},
			settingsDataModel: {
				settingsTabDataModel: "Ĳ_Swipe Type_ä",
				settingsDataModelExplainSwipe: "Ĳ_What do you want users to swipe?_ä",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Kies de laag of de webmap die in de verrekijker moet verschijnen.",
				settingsDataModelOneMap: "Ĳ_A layer in a web map_ä",
				settingsDataModel1Explain: "Ĳ_Select the layer you want to be swiped_ä",
				settingsDataModel1Warning: "Als de laag door bovenliggende lagen verborgen wordt, heeft swipe geen effect.",
				settingsDataModel1SpyGlassExplain: "Selecteer de laag die binnen de verrekijker moet verschijnen.",
				settingsDataModelTwoMaps: "Twee webmaps",
				settingsDataModelLayerIds: "Laag-ID\'s webmap",
				settingsDataModelSelected: "Geselecteerd type",
				settingsDataModelWebmapSwipeId1: "Rechterwebmap-ID",
				settingsDataModelWebmapSwipeId2: "Linkerwebmap-ID",
				settingsDataModelWebmapGlassId1: "Hoofdwebmap-ID",
				settingsDataModelWebmapGlassId2: "Verrekijker webmap-ID",
				settingsDataModelSelect: "Selecteer dit type",
				settingsDataModel2Explain: "Swipe met een andere webmap.",
				settingsDataModel2SpyGlassExplain: "Een andere webmap weergeven.",
				settingsDataModel2HelpTitle: "Ĳ_How do I find a web map's ID?_ä",
				settingsDataModel2HelpContent: "Kopieer en plak tekens achter het '='  teken in de URL van de webmap"
			},
			settingsLegend: {
				settingsTabLegend: "Indeling app",
				settingsLegendExplain: "Selecteer de instellingen voor de indeling van de applicatie.",
				settingsLegendEnable: "Legenda inschakelen",
				settingsDescriptionEnable: "Omschrijving inschakelen",
				settingsBookmarksEnable: "Swipe-reeks inschakelen",
				settingsPopupDisable: "Pop-up inschakelen",
				settingsLocationSearchEnable: "Ĳ_Enable locator search_ä",
				settingsGeolocatorEnable: "Ĳ_Enable geolocator_ä",
				settingsLegendHelpContent: "Om de inhoud van de legenda te verfijnen, gebruikt u de inhoudsopgave van de ArcGIS.com-webmap viewer (Verbergen in Legenda)",
				settingsSeriesHelpContent: "Ĳ_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use._ä", 
				preview: "Voorbeeldweergave UI",
				settingsLocateButtonExplain: "Ĳ_This functionality if supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._ä",
				settingsLocateButton: "Ĳ_Enable a 'Locate' button supported browsers_ä",
				settingsAddressSearch: "Ĳ_Enable an address search tool_ä"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-upvenster",
				settingsSwipePopupExplain: "Pas het uiterlijk aan van de koptekst van pop-ups zodat gebruikers pop-ups met kaartlagen kunnen associëren.",
				settingsSwipePopupSwipe1: "Linkerkaart",
				settingsSwipePopupSwipe2: "Rechterkaart",
				settingsSwipePopupGlass1: "Hoofdkaart",
				settingsSwipePopupGlass2: "Verrekijkerkaart",
				settingsSwipePopupTitle: "Titel header",
				settingsSwipePopupColor: "Kleur header"
			},
			initPopup: {
				initHeader: "Welkom bij de Swipe Builder",
				modalNext: "Volgende",
				modalPrev: "Ĳ_Previous_ä",
				modalApply: "Open de app"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beschrijving",
				discard: "Bladwijzer negeren",
				saveExtent: "Bladwijzer extent instellen",
				discardDisabled: "U kunt de bladwijzer niet verwijderen. Swipe-reeks kan worden uitgeschakeld in de Instellingen."
			}
		}
    })
);