define(
	({
		viewer: {
			loading: {
				step1: "CARICAMENTO APPLICAZIONE",
				step2: "CARICAMENTO DATI",
				step3: "INIZIALIZZAZIONE IN CORSO",
				fail: "Caricamento scorrimento con dito non riuscito",
				loadBuilder: "PASSAGGIO A MODALITÀ GENERATORE",
				redirectSignIn: "é_REDIRECTING TO SIGN-IN PAGE_È",
				redirectSignIn2: "é_(you will be redirected here after sign-in)_È",
				failButton: "Riprova"
			},
			errors: {
				boxTitle: "Si è verificato un errore",
				portalSelf: "Errore irreversibile: impossibile ottenere la configurazione del portale",
				invalidConfig: "Errore irreversibile: configurazione non valida",
				invalidConfigNoWebmap: "Errore irreversibile: configurazione non valida (nessuna mappa Web specificata)",
				createMap: "Impossibile creare la mappa",
				invalidApp: "Errore irreversibile: impossibile caricare l\'applicazione",
				initMobile: "Benvenuto nell\'applicazione Web per scorrimento con dito. L\'applicazione non è configurata. Il generatore interattivo non è supportato sui dispositivi mobili.",
				noBuilderIE8: "Il generatore interattivo per scorrimento con dito non è supportato dalle versioni di Internet Explorer precedenti alla versione 9.",
				noLayerView: "Benvenuto nell\'applicazione Web per scorrimento con dito.<br />L\'applicazione non è ancora configurata.",
				appSave: "Errore durante il salvataggio dell\'applicazione Web",
				mapSave: "Errore durante il salvataggio della mappa Web",
				notAuthorized: "L\'utente non è autorizzato ad accedere a questa applicazione",
				conflictingProjectionsTitle: "Proiezioni in conflitto",
				conflictingProjections: "Scorrimento non supportato in caso di utilizzo di due mappe Web con proiezioni differenti. Aprire la pagina delle impostazioni e utilizzare una mappa Web con proiezione uguale alla prima mappa Web.",
				cpButton: "Chiudi"
			},
			mobileView: {
				hideIntro: "NASCONDI INTRODUZIONE",
				navLeft: "Legenda",
				navMap: "Mappa",
				navRight: "Dati"
			},
			desktopView: {
				storymapsText: "Mappa collegata a una storia",
				builderButton: "Passa a modalità generatore",
				bitlyTooltip: "Ottieni un collegamento breve all\'applicazione"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAZIONE APPLICAZIONE",
				buttonSave: "SALVA",
				buttonHelp: "é_Help_È",
				buttonShare: "é_Share_È",
				buttonDiscard: "ANNULLA",
				buttonSettings: "Impostazioni",
				buttonView: "Modalità visualizzazione",
				buttonItem: "Aprire l\'elemento dell\'applicazione Web",
				noPendingChange: "Nessuna modifica in sospeso",
				unSavedChangeSingular: "1 modifica non salvata",
				unSavedChangePlural: "modifiche non salvate",
				popoverDiscard: "Annullare tutte le modifiche non salvate?",
				yes: "Sì",
				no: "No",
				popoverOpenViewExplain: "Se si apre il viewer, tutte le modifiche non salvate andranno perse",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Annulla",
				popoverSaveWhenDone: "Al termine, non dimenticare di salvare",
				closeWithPendingChange: "Confermare l\'azione? Le modifiche apportate andranno perse.",
				gotIt: "OK",
				savingApplication: "Salvataggio dell\'applicazione",
				saveSuccess: "Salvataggio dell\'applicazione completato",
				saveError: "Salvataggio non riuscito. Riprovare",
				saveError2: "é_Save failed due to an invalid html tag in a name or description_È",
				saveError3: "é_The title can't be empty_È",
				signIn: "Effettuare l\'accesso con un account su",
				signInTwo: "per salvare l\'applicazione."
			},
			header:{
				editMe: "Modifica utente",
				templateTitle: "Imposta titolo modello",
				templateSubtitle: "Imposta sottotitolo modello"
			},
			settings: {
				settingsHeader: "Impostazioni applicazione",
				modalCancel: "Annulla",
				modalApply: "Applica"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Scegliere un tema per l\'app o definire i propri colori.",
				settingsLabelColor: "Colori sfondo intestazione e pannello laterale"
			},
			settingsHeader: {
				settingsTabLogo: "Intestazione",
				settingsLogoExplain: "Personalizza il logo dell\'intestazione (max 250 x 50 px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Nessun logo",
				settingsLogoCustom: "Logo personalizzato",
				settingsLogoCustomPlaceholder: "URL immagine",
				settingsLogoCustomTargetPlaceholder: "Collegamento clickthrough",
				settingsLogoSocialExplain: "Personalizzare il collegamento in alto a destra nell\'intestazione.",
				settingsLogoSocialText: "Testo",
				settingsLogoSocialLink: "Collegamento",
				settingsLogoSocialDisabled: "Questa feature è stata disabilitata dall\'Amministratore"
			},
			settingsExtent: {
				settingsTabExtent: "Estensione",
				settingsExtentExplain: "Impostare l\'estensione iniziale mediante la mappa interattiva riportata di seguito.",
				settingsExtentExplainBottom: "L\'estensione specificata modificherà l\'estensione iniziale della mappa Web. Tenere presente che tale estensione non verrà utilizzata se si sta effettuando una serie di scorrimenti.",
				settingsExtentDateLineError: "é_The extent cannot be across the meridian of 180ï¿½ longitude_È",
				settingsExtentDateLineError2: "Errore di calcolo dell\'estensione",
				settingsExtentDrawBtn: "Disegna una nuova estensione",
				settingsExtentModifyBtn: "Modifica l\'estensione corrente",
				settingsExtentApplyBtn: "Applica su mappa principale",
				settingsExtentUseMainMap: "Usa estensione della mappa principale"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nessun dato da visualizzare.",
				noDataExplain: "Toccare la mappa per selezionare una feature e tornare qui",
				noDataMap: "Nessun dato per questa mappa",
				noPopup: "Nessun popup trovato per questa feature"
			},
			mobileLegend: {
				noLegend: "Nessuna legenda da visualizzare."
			},
			swipeSidePanel: {
				editTooltip: "Impostare la descrizione del pannello laterale",
				editMe: "Modifica utente",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Nessun dato da visualizzare",
				noFeatureExplain: "Toccare la mappa per selezionare una feature"
			},
			settingsLayout: {
				settingsTabLayout: "Stile di scorrimento con dito",
				settingsLayoutExplain: "Scegliere uno stile per lo strumento per lo scorrimento con dito.",
				settingsLayoutSwipe: "Barra verticale",
				settingsLayoutSpyGlass: "Cannocchiale",
				settingsLayoutSelected: "Layout selezionato",
				settingsLayoutSelect: "Seleziona il layout",
				settingsSaveConfirm: "Per alcune modifiche è necessario salvare e ricaricare l\'applicazione"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo di scorrimento con il dito",
				settingsDataModelExplainSwipe: "Su che cosa gli utenti possono scorrere con il dito?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Scegliere il layer o la mappa Web da visualizzare nel cannocchiale.",
				settingsDataModelOneMap: "Un layer in una mappa Web",
				settingsDataModel1Explain: "Selezionare un layer da scorrere con il dito",
				settingsDataModel1Warning: "Se il layer è nascosto dai layer superiori, lo scorrimento non ha alcun effetto.",
				settingsDataModel1SpyGlassExplain: "Selezionare il layer da visualizzare nel cannocchiale.",
				settingsDataModelTwoMaps: "Due mappe Web",
				settingsDataModelLayerIds: "ID layer mappa Web",
				settingsDataModelSelected: "Tipo selezionato",
				settingsDataModelWebmapSwipeId1: "ID mappa Web destro",
				settingsDataModelWebmapSwipeId2: "ID mappa Web sinistro",
				settingsDataModelWebmapGlassId1: "ID mappa Web principale",
				settingsDataModelWebmapGlassId2: "ID mappa Web cannocchiale",
				settingsDataModelSelect: "Seleziona questo tipo",
				settingsDataModel2Explain: "Scorrimento con il dito con un\'altra mappa Web.",
				settingsDataModel2SpyGlassExplain: "Mostra un\'altra mappa Web.",
				settingsDataModel2HelpTitle: "Come trovare gli ID delle mappe Web",
				settingsDataModel2HelpContent: "Copiare e incollare le cifre dopo il segno \"=\" nell\'URL della mappa Web",
				switchMaps: "é_Switch maps_È",
				browseWebMaps: "é_Browse web maps_È"
			},
			settingsLegend: {
				settingsTabLegend: "Layout app",
				settingsLegendExplain: "Selezionare le impostazioni di layout dell\'applicazione.",
				settingsLegendEnable: "Abilita legenda",
				settingsDescriptionEnable: "Abilita descrizione",
				settingsBookmarksEnable: "Abilita serie di scorrimenti con dito",
				settingsPopupDisable: "Abilita popup",
				settingsLocationSearchEnable: "Abilita ricerca con localizzatore",
				settingsGeolocatorEnable: "Abilita geolocalizzatore",
				settingsLegendHelpContent: "Per definire il contenuto della legenda, utilizzare il sommario del map viewer Web di ArcGIS.com (Nascondi nella legenda)",
				settingsSeriesHelpContent: "La serie di scorrimenti con dito è un\'opzione di spostamento tra le schede che guida il visualizzatore a una particolare estensione e visualizza un testo e una descrizione nel pannello laterale. Durante l\'attivazione iniziale i segnalibri delle mappe Web verranno importati e utilizzati per pre-popolare la barra della serie. Se si disabilita l\'opzione relativa alla serie viene disattivata anche la barra corrispondente, tuttavia la configurazione della serie viene mantenuta per usi futuri.", 
				settingsSeriesHelpContent2: "La serie di scorrimenti consente di creare e modificare una selezione di posizioni unitamente ai titoli e al testo cui sono associate. Verranno visualizzati gli eventuali segnalibri presenti nella mappa Web. È possibile disabilitare la serie, ma la configurazione verrà mantenuta per usi futuri.",
				settingsSeriesHelpLink: "Per un esempio di applicazione con una serie di scorrimenti, vedere qui",
				preview: "Anteprima interfaccia utente",
				settingsLocateButtonExplain: "Questa funzionalità è supportata nella maggior parte dei browser per dispositivi mobili e desktop (incluso Internet Explorer 9 e versioni successive).",
				settingsLocateButton: "é_Enable a 'Locate' button on supported browsers_È",
				settingsAddressSearch: "Abilita uno strumento per la ricerca di indirizzi"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Popup",
				settingsSwipePopupExplain: "Personalizza l\'aspetto dell\'intestazione dei popup per aiutare l\'utente ad associare i popup con i layer delle mappe.",
				settingsSwipePopupSwipe1: "Mappa sinistra",
				settingsSwipePopupSwipe2: "Mappa destra",
				settingsSwipePopupGlass1: "Mappa principale",
				settingsSwipePopupGlass2: "Mappa cannocchiale",
				settingsSwipePopupTitle: "Titolo intestazione",
				settingsSwipePopupColor: "Colore intestazione"
			},
			initPopup: {
				initHeader: "é_Welcome to the Swipe/Spyglass Builder_È",
				modalNext: "Avanti",
				modalPrev: "Indietro",
				modalApply: "Apri l\'app"
			},
			seriesPanel: {
				title: "Titolo",
				descr: "Descrizione",
				discard: "Annulla segnalibro",
				saveExtent: "Impostare l\'estensione del segnalibro",
				discardDisabled: "Impossibile rimuovere il segnalibro. È possibile disabilitare la serie di scorrimenti nelle impostazioni."
			},
			helpPopup: {
				title: "é_Help_È",
				close: "é_Close_È",
				tab1: {
					div1: "é_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._È",
					div2: "é_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._È",
					div3: "é_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._È"
				}
			},
			share: {
				firstSaveTitle: "é_Application successfully saved_È",
				firstSaveHeader: "é_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._È",
				firstSaveA1: "é_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_È",
				firstSaveA1bis: "é_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._È",
				firstSaveQ2: "é_Is my Application shared?_È",
				firstSaveA2: "é_Currently your Application is not shared. To share it, use the SHARE button._È",
				shareTitle: "é_Share your Application_È",
				sharePrivateHeader: "é_Your Application is not shared, would you like to share it?_È",
				sharePrivateBtn1: "é_Share publicly_È",
				sharePrivateBtn2: "é_Share with my Organization_È",
				sharePrivateProgress: "é_Sharing in progress..._È",
				sharePrivateErr: "é_Sharing failed, try again or_È",
				sharePrivateOk: "é_Sharing updated successfully, loading..._È",
				shareStatus1: "é_Application is not saved_È",
				shareStatus2: "é_Application is shared publicly_È",
				shareStatus3: "é_Application is shared within the organization_È",
				shareStatus4: "é_Application is not shared_È",
				sharePreviewAsUser: "é_Preview_È",
				shareHeader1: "é_Your Application is <strong>publicly accessible</strong>._È",
				shareHeader2: "é_Your Application is accessible by your organization members (login is required)._È",
				shareLinkHeader: "é_Share the Application with your audience_È",
				shareLinkOpen: "é_OPEN_È",
				learnMore: "é_Learn more_È",
				shareQ1Opt1: "é_How do I keep the Application private?_È",
				shareQ1Opt2: "é_How do I keep the Application private or share it publicly?_È",
				shareA1: "é_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._È",
				shareA1bis: "é_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._È",
				shareQ2: "é_How do I edit the Application later?_È",
				shareQ2bis: "é_How do I get back to the authoring interface?_È",
				shareA2div1: "é_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._È",
				shareA2div2: "é_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_È",				
				shareQ3: "é_Where is the data stored?_È",
				shareA3: "é_The Application configuration is stored in this web application item</a>._È",
				shareWarning: "é_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._È",
 				shareWarningWith1: "é_publicly_È",
 				shareWarningWith2: "é_publicly and with the Organization_È"
			},
			directCreation: {
				header: "é_Welcome to the Swipe/Spyglass Builder_È",
				mapPickHeader: "é_To get started, please input a valid web map id, or use the search button to browse web maps._È",
				launchBuilder: "é_Launch Builder_È"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "é_My Organization_È",
					onlineLabel: "é_ArcGIS Online_È",
					contentLabel: "é_My Content_È",
					favoritesLabel: "é_My Favorites_È"
				},
				title: "é_Select Web Map_È",
				searchTitle: "é_Search_È",
				ok: "é_Ok_È",
				cancel: "é_Cancel_È",
				placeholder: "é_Enter search term_È"
			}
		}
    })
);