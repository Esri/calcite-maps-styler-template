define(
	({
		viewer: {
			loading: {
				step1: "APPLICATIE LADEN",
				step2: "GEGEVENS LADEN",
				step3: "INITIALISEREN",
				fail: "Laden Swipe mislukt",
				loadBuilder: "OVERSCHAKELEN NAAR BUILDER MODUS",
				redirectSignIn: "Ĳ_REDIRECTING TO SIGN-IN PAGE_ä",
				redirectSignIn2: "Ĳ_(you will be redirected here after sign-in)_ä",
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
				buttonHelp: "Ĳ_Help_ä",
				buttonShare: "Ĳ_Share_ä",
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
				saveError2: "Ĳ_Save failed due to an invalid html tag in a name or description_ä",
				saveError3: "Ĳ_The title can't be empty_ä",
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
				settingsExtentDateLineError: "Ĳ_The extent cannot be across the meridian of 180ï¿½ longitude_ä",
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
				settingsTabDataModel: "Swipe-type",
				settingsDataModelExplainSwipe: "Waarop mogen gebruikers swipe toepassen?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Kies de laag of de webmap die in de verrekijker moet verschijnen.",
				settingsDataModelOneMap: "Een kaartlaag in een webmap",
				settingsDataModel1Explain: "Selecteer de laag waarop swipe moet worden toegepast",
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
				settingsDataModel2HelpTitle: "Hoe vind ik de ID van een webmap?",
				settingsDataModel2HelpContent: "Kopieer en plak tekens achter het \'=\'  teken in de URL van de webmap",
				switchMaps: "Ĳ_Switch maps_ä",
				browseWebMaps: "Ĳ_Browse web maps_ä"
			},
			settingsLegend: {
				settingsTabLegend: "Indeling app",
				settingsLegendExplain: "Selecteer de instellingen voor de indeling van de applicatie.",
				settingsLegendEnable: "Legenda inschakelen",
				settingsDescriptionEnable: "Omschrijving inschakelen",
				settingsBookmarksEnable: "Swipe-reeks inschakelen",
				settingsPopupDisable: "Pop-up inschakelen",
				settingsLocationSearchEnable: "Zoeken naar locaties inschakelen",
				settingsGeolocatorEnable: "Geografische locator inschakelen",
				settingsLegendHelpContent: "Om de inhoud van de legenda te verfijnen, gebruikt u de inhoudsopgave van de ArcGIS.com-webmap viewer (Verbergen in Legenda)",
				settingsSeriesHelpContent: "Swipe-reeks is een navigatie-optie met tabbladen die de raadpleger naar een specifiek extent zal leiden en een titel en beschrijving in het deelvenster aan de zijkant zal weergeven. Tijdens de initiële activering worden de bladwijzers van de webmap(s) geïmporteerd en gebruikt om de reeksbalk vooraf in te vullen. Als u de reeksoptie uitschakelt, wordt de reeksbalk uitgeschakeld, maar de reeksconfiguratie wordt behouden voor toekomstig gebruik.", 
				settingsSeriesHelpContent2: "Met de Swipe-reeks kunt u een reeks locaties maken en bewerken met bijbehorende titels en tekst. Als uw webmap bladwijzers bevat, dan zullen deze worden weergegeven. U kunt de reeks uitschakelen, maar de configuratie wordt bewaard voor toekomstig gebruik.",
				settingsSeriesHelpLink: "Bekijk hier een voorbeeld van een applicatie met een Swipe-reeks",
				preview: "Voorbeeldweergave UI",
				settingsLocateButtonExplain: "Deze functionaliteit wordt ondersteund op de meeste mobiele apparaten en desktopbrowsers (inclusief Internet Explorer 9+).",
				settingsLocateButton: "Ĳ_Enable a 'Locate' button on supported browsers_ä",
				settingsAddressSearch: "Schakel een tool voor het zoeken naar adressen in"
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
				initHeader: "Ĳ_Welcome to the Swipe/Spyglass Builder_ä",
				modalNext: "Volgende",
				modalPrev: "Vorige",
				modalApply: "Open de app"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beschrijving",
				discard: "Bladwijzer negeren",
				saveExtent: "Bladwijzer extent instellen",
				discardDisabled: "U kunt de bladwijzer niet verwijderen. Swipe-reeks kan worden uitgeschakeld in de Instellingen."
			},
			helpPopup: {
				title: "Ĳ_Help_ä",
				close: "Ĳ_Close_ä",
				tab1: {
					div1: "Ĳ_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._ä",
					div2: "Ĳ_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ä",
					div3: "Ĳ_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._ä"
				}
			},
			share: {
				firstSaveTitle: "Ĳ_Application successfully saved_ä",
				firstSaveHeader: "Ĳ_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._ä",
				firstSaveA1: "Ĳ_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_ä",
				firstSaveA1bis: "Ĳ_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._ä",
				firstSaveQ2: "Ĳ_Is my Application shared?_ä",
				firstSaveA2: "Ĳ_Currently your Application is not shared. To share it, use the SHARE button._ä",
				shareTitle: "Ĳ_Share your Application_ä",
				sharePrivateHeader: "Ĳ_Your Application is not shared, would you like to share it?_ä",
				sharePrivateBtn1: "Ĳ_Share publicly_ä",
				sharePrivateBtn2: "Ĳ_Share with my Organization_ä",
				sharePrivateProgress: "Ĳ_Sharing in progress..._ä",
				sharePrivateErr: "Ĳ_Sharing failed, try again or_ä",
				sharePrivateOk: "Ĳ_Sharing updated successfully, loading..._ä",
				shareStatus1: "Ĳ_Application is not saved_ä",
				shareStatus2: "Ĳ_Application is shared publicly_ä",
				shareStatus3: "Ĳ_Application is shared within the organization_ä",
				shareStatus4: "Ĳ_Application is not shared_ä",
				sharePreviewAsUser: "Ĳ_Preview_ä",
				shareHeader1: "Ĳ_Your Application is <strong>publicly accessible</strong>._ä",
				shareHeader2: "Ĳ_Your Application is accessible by your organization members (login is required)._ä",
				shareLinkHeader: "Ĳ_Share the Application with your audience_ä",
				shareLinkOpen: "Ĳ_OPEN_ä",
				learnMore: "Ĳ_Learn more_ä",
				shareQ1Opt1: "Ĳ_How do I keep the Application private?_ä",
				shareQ1Opt2: "Ĳ_How do I keep the Application private or share it publicly?_ä",
				shareA1: "Ĳ_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._ä",
				shareA1bis: "Ĳ_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._ä",
				shareQ2: "Ĳ_How do I edit the Application later?_ä",
				shareQ2bis: "Ĳ_How do I get back to the authoring interface?_ä",
				shareA2div1: "Ĳ_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._ä",
				shareA2div2: "Ĳ_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_ä",				
				shareQ3: "Ĳ_Where is the data stored?_ä",
				shareA3: "Ĳ_The Application configuration is stored in this web application item</a>._ä",
				shareWarning: "Ĳ_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ä",
 				shareWarningWith1: "Ĳ_publicly_ä",
 				shareWarningWith2: "Ĳ_publicly and with the Organization_ä"
			},
			directCreation: {
				header: "Ĳ_Welcome to the Swipe/Spyglass Builder_ä",
				mapPickHeader: "Ĳ_To get started, please input a valid web map id, or use the search button to browse web maps._ä",
				launchBuilder: "Ĳ_Launch Builder_ä"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Ĳ_My Organization_ä",
					onlineLabel: "Ĳ_ArcGIS Online_ä",
					contentLabel: "Ĳ_My Content_ä",
					favoritesLabel: "Ĳ_My Favorites_ä"
				},
				title: "Ĳ_Select Web Map_ä",
				searchTitle: "Ĳ_Search_ä",
				ok: "Ĳ_Ok_ä",
				cancel: "Ĳ_Cancel_ä",
				placeholder: "Ĳ_Enter search term_ä"
			}
		}
    })
);