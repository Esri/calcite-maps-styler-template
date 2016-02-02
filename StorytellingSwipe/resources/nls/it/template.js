define(
	 ({
		viewer: {
			loading: {
				step1: "CARICAMENTO STORIA",
				step2: "CARICAMENTO DATI",
				step3: "INIZIALIZZAZIONE IN CORSO",
				fail: "Caricamento scorrimento con dito non riuscito",
				loadBuilder: "PASSAGGIO A MODALITÀ GENERATORE",
				redirectSignIn: "REINDIRIZZAMENTO ALLA PAGINA DI ACCESSO",
				redirectSignIn2: "(pagina alla quale si verrà reindirizzati dopo l\'accesso)",
				failButton: "Riprova"
			},
			errors: {
				boxTitle: "Si è verificato un errore",
				portalSelf: "Errore irreversibile: impossibile ottenere la configurazione del portale",
				invalidConfig: "Errore irreversibile: configurazione non valida",
				invalidConfigNoWebmap: "é_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________È",
				invalidConfigNoAppDev: "é_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________È.",
				createMap: "Impossibile creare la mappa",
				invalidApp: "Errore irreversibile: impossibile caricare la storia",
				initMobile: "Benvenuto nell\'applicazione Web per scorrimento con dito. L\'applicazione non è configurata. Il generatore interattivo non è supportato sui dispositivi mobili.",
				initMobile2: "é_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________È.",
				initMobile3: "é_Please rotate your device to landscape orientation to use the Swipe builder________________________È.",
				noBuilderIE8: "Il generatore interattivo per scorrimento con dito non è supportato dalle versioni di Internet Explorer precedenti alla versione 9.",
				noLayerView: "Benvenuto nell\'applicazione Web per scorrimento con dito.<br />L\'applicazione non è ancora configurata.",
				appSave: "Errore durante il salvataggio della storia",
				mapSave: "Errore durante il salvataggio della mappa Web",
				notAuthorized: "Non si è autorizzati ad accedere alla storia.",
				notAuthorizedBuilder: "é_You are not authorized to use Swipe and Spyglass builder__________________È.",
				conflictingProjectionsTitle: "Proiezioni in conflitto",
				conflictingProjections: "Scorrimento non supportato in caso di utilizzo di due mappe Web con proiezioni differenti. Aprire la pagina delle impostazioni e utilizzare una mappa Web con proiezione uguale alla prima mappa Web.",
				cpButton: "Chiudi",
				unspecifiedConfigOwner: "L\'utente autorizzato non è stato configurato.",
				invalidConfigOwner: "Il proprietario della storia non è autorizzato."
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
				facebookTooltip: "Condividi su Facebook",
				twitterTooltip: "Condividi su Twitter",
				bitlyTooltip: "Crea un link breve",
				tooltipAutoplayDisabled: "é_This isn't available in autoplay mode____________È",
				autoplayLabel: "é_Autoplay mode_____È",
				autoplayExplain1: "é_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________È.",
				autoplayExplain2: "é_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________È."
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAZIONE STORIA",
				buttonSave: "SALVA",
				buttonHelp: "Guida",
				buttonShare: "Condividi",
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
				savingApplication: "Salvataggio storia",
				saveSuccess: "é_Story saved____È",
				saveError: "Salvataggio non riuscito. Riprovare",
				saveError2: "Salvataggio non riuscito a causa di un tag HTML non valido in un nome o in una descrizione",
				saveError3: "Specificare il titolo",
				signIn: "Effettuare l\'accesso con un account su",
				signInTwo: "per salvare la storia."
			},
			header:{
				editMe: "Modifica utente",
				templateTitle: "Imposta titolo modello",
				templateSubtitle: "Imposta sottotitolo modello"
			},
			settings: {
				settingsHeader: "Impostazioni storia",
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
				settingsLogoSocialDisabled: "Questa feature è stata disabilitata dall\'amministratore"
			},
			settingsExtent: {
				settingsTabExtent: "Estensione",
				settingsExtentExplain: "Impostare l\'estensione iniziale mediante la mappa interattiva riportata di seguito.",
				settingsExtentExplainBottom: "L\'estensione specificata modificherà l\'estensione iniziale della mappa Web. Tenere presente che tale estensione non verrà utilizzata se si sta effettuando una serie di scorrimenti.",
				settingsExtentDateLineError: "L\'estensione non può attraversare il meridiano per 180ï¿½ di longitudine",
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
				settingsSaveConfirm: "Per alcune modifiche è necessario salvare e ricaricare la storia"
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
				switchMaps: "Cambia mappa",
				browseWebMaps: "Sfoglia mappe Web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout app",
				settingsLegendExplain: "Selezionare le impostazioni di layout.",
				settingsLegendEnable: "Abilita legenda",
				settingsDescriptionEnable: "Abilita descrizione",
				settingsBookmarksEnable: "Abilita serie di scorrimenti con dito",
				settingsPopupDisable: "é_Enable pop-up_____È",
				settingsLocationSearchEnable: "Abilita ricerca con localizzatore",
				settingsGeolocatorEnable: "Abilita geolocalizzatore",
				settingsLegendHelpContent: "é_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________È",
				settingsSeriesHelpContent: "La serie di scorrimenti con dito è un\'opzione di spostamento tra le schede che guida il visualizzatore a una particolare estensione e visualizza un testo e una descrizione nel pannello laterale. Durante l\'attivazione iniziale i segnalibri delle mappe Web verranno importati e utilizzati per pre-popolare la barra della serie. Se si disabilita l\'opzione relativa alla serie viene disattivata anche la barra corrispondente, tuttavia la configurazione della serie viene mantenuta per usi futuri.",
				settingsSeriesHelpContent2: "La serie di scorrimenti consente di creare e modificare una selezione di posizioni unitamente ai titoli e al testo cui sono associate. Verranno visualizzati gli eventuali segnalibri presenti nella mappa Web. È possibile disabilitare la serie, ma la configurazione verrà mantenuta per usi futuri.",
				settingsSeriesHelpLink: "Per un esempio di applicazione con una serie di scorrimenti, vedere qui",
				preview: "Anteprima interfaccia utente",
				settingsLocateButtonExplain: "Questa funzionalità è supportata nella maggior parte dei browser per dispositivi mobili e desktop (incluso Internet Explorer 9 e versioni successive).",
				settingsLocateButton: "Abilita un pulsante Trova posizione nei browser supportati",
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
				initHeader: "Benvenuti al generatore Scorrimento con dito/Cannocchiale",
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
				title: "Guida",
				close: "Chiudi",
				tab1: {
					div1: "Il modello Scorrimento con dito/Cannocchiale consente di confrontare due mappe Web distinte o due layer di un\'unica mappa Web grazie a un\'applicazione Web interessante e di facile utilizzo che può essere eseguita in qualsiasi browser Web su qualsiasi dispositivo, inclusi smartphone e tablet.",
					div2: "Per ulteriori informazioni sul modello Scorrimento con dito/Cannocchiale, inclusi esempi creati dagli utenti, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'>visitare il sito Web delle mappe collegate a storie</a>. È anche possibile seguire Esri su Twitter all\'indirizzo <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Esri è lieta di ricevere commenti e suggerimenti degli utenti. Se si desidera porre una domanda, richiedere una nuova funzionalità o si ritiene di aver individuato un difetto nel software, visitare il <a href='http://links.esri.com/storymaps/forum' target='_blank'>forum degli utenti delle mappe collegate a storie</a>."
				}
			},
			share: {
				firstSaveTitle: "é_Story saved____È",
				manageStory: "é_Manage your story______È",
				manageStoryA1: "é_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________È.",
				manageStoryA1V1: "é_My Stories____È",
				manageStoryA1V2: "é_blog posts____È",
				shareTitle: "Condividi la storia",
				sharePrivateHeader: "La storia non è condivisa. Condividerla?",
				sharePrivateBtn1: "Condividi pubblicamente",
				sharePrivateBtn2: "Condividi con l\'organizzazione",
				sharePrivateProgress: "Condivisione in corso...",
				sharePrivateErr: "Condivisione non riuscita. Riprovare o",
				sharePrivateOk: "é_Sharing updated, loading_________È...",
				shareStatus1: "Storia non salvata",
				shareStatus2: "Storia condivisa pubblicamente",
				shareStatus3: "Storia condivisa nell\'ambito dell\'organizzazione",
				shareStatus4: "Storia non condivisa",
				sharePreviewAsUser: "Anteprima",
				shareHeader1: "La storia è <strong>accessibile pubblicamente</strong>.",
				shareHeader2: "La storia è accessibile ai membri dell\'organizzazione (accesso obbligatorio).",
				shareLinkHeader: "é_Share your story______È",
				shareLinkOpen: "APRI",
				learnMore: "Ulteriori informazioni",
				shareA1: "Utilizzare %SHAREIMG% nella <a href='%LINK1%' target='_blank'>pagina degli elementi dell\'applicazione</a>. Se si desidera anche annullare la condivisione della mappa Web, utilizzare la <a href='%LINK2%' target='_blank'>pagina degli elementi della mappa Web</a>.",
				shareWarning: "La condivisione %WITH% è stata disabilitata perché non si è proprietari della <a href='%LINK%' target='_blank'>mappa Web</a>.",
				shareWarningWith1: "é_publicly___È",
				shareWarningWith2: "é_publicly and with the Organization___________È"
			},
			directCreation: {
				header: "Benvenuti al generatore Scorrimento con dito/Cannocchiale",
				mapPickHeader: "Per iniziare, immettere un ID mappa valido oppure utilizzare il pulsante Cerca per cercare mappe Web.",
				launchBuilder: "Avvia generatore",
				chooseWebmapLbl: "Scegli mappa Web...",
				explain2: "é_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________È.",
				explain3: "Se si desidera utilizzare due mappe Web nella mappa collegata a storie, la seconda mappa verrà richiesta più avanti quando si sceglie la relativa opzione.",
				webmapPlaceholder: "Immetti un ID mappa Web..."
			},
			saveErrorSocial: {
				title: "é_Social media sharing update_________È",
				panel1: "é_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________È.",
				panel1tooltip: "é_By defining a title, summary and thumbnail image, your story will look like this_________________________È:",
				panel2:	"é_Which title would you like to use on social media________________È:",
				panel2q1: "é_Story title (recommended)_________È",
				panel2q1tooltip: "é_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________È.",
				panel2q2: "é_Item title____È",
				panel3: "é_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________È.",
				panel4: "é_Do not warn me again for this story____________È",
				mystories: "é_My Stories____È",
				btnSave: "é_Save__È"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "La mia organizzazione",
					onlineLabel: "ArcGIS Online",
					contentLabel: "I miei contenuti",
					favoritesLabel: "I miei preferiti"
				},
				title: "é_Select Web Map_____È",
				searchTitle: "Cerca",
				ok: "OK",
				cancel: "Annulla",
				placeholder: "Immettere il termine da cercare"
			}
		}
    })
);
