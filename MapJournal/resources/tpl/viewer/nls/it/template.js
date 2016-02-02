define(
	 ({
		viewer: {
			common: {
				close: "Chiudi"
			},
			loading: {
				step1: "Caricamento storia",
				step2: "Caricamento dati",
				step3: "Inizializzazione in corso",
				loadBuilder: "Passaggio al generatore",
				long: "Inizializzazione del Diario mappa in corso...",
				long2: "Grazie per l\'attesa",
				failButton: "Ricarica la storia"
			},
			signin: {
				title: "Autenticazione obbligatoria",
				explainViewer: "Per accedere alla storia, accedere con un account disponibile in %PORTAL_LINK%.",
				explainBuilder: "Per configurare la storia, accedere con un account disponibile in %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Si è verificato un errore",
				invalidConfig: "Configurazione non valida",
				invalidConfigNoApp: "Identificatore dell\'applicazione di mappatura Web non specificato in index.html.",
				invalidConfigNoAppDev: "é_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________È.",
				unspecifiedConfigOwner: "L\'utente autorizzato non è stato configurato.",
				invalidConfigOwner: "Il proprietario della storia non è autorizzato.",
				createMap: "Impossibile creare la mappa",
				invalidApp: "%TPL_NAME% non esiste o è inaccessibile.",
				appLoadingFail: "Si è verificato un errore. %TPL_NAME% non è stato caricato correttamente.",
				notConfiguredDesktop: "La storia non è ancora configurata.",
				notConfiguredMobile: "é_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________È.",
				notConfiguredMobile2: "é_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________È.",
				notAuthorized: "Non si è autorizzati ad accedere alla storia.",
				notAuthorizedBuilder: "é_You are not authorized to use %TPL_NAME% builder________________È.",
				noBuilderIE: "Il generatore non è supportato nelle versioni di Internet Explorer precedenti alla versione %VERSION%. %UPGRADE%.",
				noViewerIE: "Questa storia non è supportata nelle versioni di Internet Explorer precedenti a %VERSION%. %UPGRADE%.",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Aggiornare il browser</a>.",
				mapLoadingFail: "é_Something went wrong, the map did not load correctly_________________È.",
				signOut: "Disconnetti"
			},
			mobileView: {
				tapForDetails: "Toccare per i dettagli",
				clickForDetails: "Ulteriori informazioni",
				swipeToExplore: "Scorrere con un dito per esplorare",
				tapForMap: "Toccare per tornare alla mappa",
				clickForMap: "TORNA ALLA MAPPA"
			},
			floatLayout: {
				scroll: "Scorrimento"
			},
			sideLayout: {
				scroll: "Scorrere verso il basso per altre informazioni"
			},
			mainStage: {
				back: "Indietro"
			},
			headerFromCommon: {
				storymapsText: "Mappa collegata a una storia",
				builderButton: "Modifica",
				facebookTooltip: "Condividi su Facebook",
				twitterTooltip: "Condividi su Twitter",
				bitlyTooltip: "Crea un link breve",
				templateTitle: "Imposta titolo modello",
				templateSubtitle: "Imposta sottotitolo modello",
				share: "Condividi",
				checking: "Verifica del contenuto della storia",
				fix: "Risolvi problemi nella storia",
				noerrors: "Nessun problema rilevato",
				tooltipAutoplayDisabled: "é_This isn't available in autoplay mode____________È",
				notshared: "é_Story not shared______È"
			},
			overviewFromCommon: {
				title: "Mappa d\'insieme"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Copia",
				copied: "Copiato",
				open: "Apri",
				embed: "Incorpora nella pagina Web",
				embedExplain: "Utilizzare il codice HTML seguente per incorporare il diario in una pagina Web.",
				size: "Dimensioni (larghezza/altezza):",
				autoplayLabel: "é_Autoplay mode_____È",
				autoplayExplain1: "é_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________È.",
				autoplayExplain2: "é_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________È.",
				linksupdated: "é_Links updated_____È!"
			}
        }
    })
);