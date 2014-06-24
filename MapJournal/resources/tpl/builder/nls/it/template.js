define(
	 ({
		builder: {
			layouts: {
				mainStage: "Visualizzazione principale",
				sideTitle: "Pannello laterale",
				sideDescr: "Layout per storie ricche di testo che combina in modo ottimale foto, video e mappe in un messaggio perfettamente mirato.",
				floatTitle: "Pannello mobile",
				floatDescr: "Layout per dare maggiore risalto alla cartografia includendo un pannello trasparente per testo breve in cui inserire indicazioni utili per la storia."
			},
			common: {
				lblStatus1: "Pubblicato",
				lblStatus2: "Bozza",
				lblStatus3: "Nascosto"
			},
			settingsLayoutOptions: {
				title: "Opzioni di layout",
				cfgLeft: "Sinistra",
				cfgRight: "Destra",
				cfgSmall: "Piccolo",
				cfgMedium: "Medio",
				cfgLarge: "Grande",
				socialLinksLabel: "Visualizza i collegamenti per la condivisione nella parte inferiore di ogni sezione",
				socialLinksDescr: "In questo modo i lettori possono fare riferimento e dare maggiore risalto a sezioni specifiche di %TPL_NAME%. Se ad esempio si utilizza un\'icona per condividere le sezioni, i lettori potranno passare direttamente a tale sezione specifica di %TPL_NAME% anziché partire dall\'inizio della storia. I lettori possono utilizzare il collegamento ai social media nella sezione del titolo per promuovere la scheda di intestazione di %TPL_NAME% e posizionarsi all\'inizio di %TPL_NAME%."
			},
			initPopup: {
				title: "Benvenuti a"
			},
			addEditPopup: {
				disabled: "é_Add Section is disabled because the maximum number of allowed sections has been reached._È",
				titleAdd: "Aggiungi sezione",
				titleAddHome: "é_Add Home Section_È",
				titleEdit: "Modifica sezione",
				step: "Procedura",
				stepMainStageExplain: "é_Main Stage Content_È",
				stepPanelExplain: "é_Content_È",
				stepMainStageNextTooltip: "Immettere il titolo della sezione e selezionare i contenuti della visualizzazione principale",
				step2NextTooltip: "Immettere il titolo della sezione e i contenuti di tipo %LAYOUT-TYPE%",
				stepNextTooltipNext: "per continuare con il passo successivo",
				stepNextTooltipAdd: "per aggiungere la sezione",
				firstAddExplain: "é_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._È",
				firstAddLeanMore: "é_Learn More_È",
				titlePlaceholder: "Titolo sezione..."
			},
			addEditViewText: {
				editorPlaceholder: "Aggiungere qui testo, collegamenti ed elementi grafici di piccole dimensioni.",
				editorActionsTitle: "Azioni visualizzazione principale",
				editorActionsHelpDescr: "é_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._È"
			},
			organizePopup: {
				title: "Organizza",
				lblHeader: "Trascinare e rilasciare le sezioni per organizzare i contenuti.",
				lblColTitle: "Titolo",
				lblColPubDate: "Data di pubblicazione",
				lblColStatus: "Stato",
				checkDisplayReverse: "Visualizza le sezioni in ordine inverso",
				btnApplyWarning: "é_Confirm deletion of %NB% section(s)_È",
				deleteTooltip: "Elimina",
				firstSectionExplain: "(La prima sezione non può essere spostata)"
			},
			exportData: {
				btn: "é_Export content_È",
				tooltip: "é_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._È"
			},
			help: {
				lblHelp: "Guida",
				lblAdd: "Aggiungi sezione",
				lblSettings: "Impostazioni",
				lblOrga: "Organizza contenuti",
				lblEdit: "Modifiche",
				lblPublish: "Condividi",
				lblTips: "é_Tips_È",
				lblMore: "Ulteriori informazioni?",
				lblLink: "Visitare il sito Web delle story map.",
				content1Div1: "Quando si crea la storia, è possibile integrare diversi stili. Lo stile di <strong>%LAYOUT_TITLE%</strong> è quello utilizzato in genere per testo, immagini e video per le mappe nella <strong>visualizzazione principale</strong>. %TPL_NAME% consente inoltre di inserire nella visualizzazione principale anche immagini, grafici e video.",
				content1Div2: "Per personalizzare l\'esperienza di storytelling, è possibile aggiungere sezioni. In tal modo quando i lettori scorrono il testo di %LAYOUT_TITLE%, una mappa nella visualizzazione principale viene ridotta/ingrandita per indicare i punti chiave oppure vengono attivate/disattivate automaticamente nuove mappe e immagini a supporto del messaggio.",
				content2Div1: "In questa finestra è possibile modificare l\'aspetto di %TPL_NAME% ridefinendo combinazioni colori, layout e larghezze.",
				content2Div2: "È anche possibile condividere collegamenti in Facebook, Twitter e Bitly per consentire ai lettori di contribuire alla diffusione di %TPL_NAME%.",
				content3Div1: "é_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._È",
				content4Div1: "È stato individuato un errore o si desidera modificare il materiale? Nessun problema. Grazie all\'icona di modifica presente nell\'applicazione, è possibile apportare modifiche ai contenuti. Durante lo sviluppo di %TPL_NAME% le funzioni di modifica verranno utilizzate spessissimo.",
				content5Div1: "%TPL_NAME% viene salvato nell\'account %PORTAL% ed è privato per impostazione predefinita. È possibile decidere di condividerlo con l\'organizzazione o con tutti. Viene inoltre fornito un URL breve per facilitarne la condivisione.",
				content6Div1: "é_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._È",
				content6Div2: "é_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_È"
			},
			landing: {
				lblAdd: "é_What do you want to call your Map Journal?_È",
				phAdd: "é_Enter your title..._È",
				lblOR: "Oppure",
				lblHelp: "Tour"
			},
			firstAddSplash: {
				thisis: "Questo è"
			}
        }
    })

);
