define(
	 ({
		commonCore: {
			common: {
				add: "Aggiungi",
				edit: "Modifica",
				save: "Salva",
				next: "Avanti",
				cancel: "Annulla",
				back: "Indietro",
				apply: "Applica",
				close: "Chiudi",
				open: "Apri",
				start: "Avvia",
				loading: "Caricamento in corso",
				disabledAdmin: "Questa feature è stata disabilitata dall\'amministratore",
				width: "Larghezza",
				height: "Altezza",
				create: "Crea",
				yes: "Sì",
				no: "No",
				mystories: "é_My Stories____È"
			},
			inlineFieldEdit: {
				editMe: "Modifica utente"
			},
			builderPanel: {
				panelHeader: "Generatore di %TPL_NAME%",
				buttonSaving: "Salvataggio",
				buttonSaved: "Salvato",
				buttonShare: "Condividi",
				buttonSettings: "Impostazioni",
				buttonHelp: "Guida",
				buttonPreview: "é_View story____È",
				tooltipFirstSave: "Questa funzione è disponibile solo dopo il salvataggio.",
				tooltipNotShared: "Questa funzione è disponibile solo dopo la condivisione.",
				tooltipNotShared2: "é_Your story isn't shared, only you can access it_______________È.",
				noPendingChange: "Nessuna modifica in sospeso",
				unSavedChangePlural: "Modifiche in sospeso",
				closeWithPendingChange: "Confermare l\'azione? Le modifiche apportate andranno perse.",
				saveError: "Salvataggio non riuscito. Riprovare",
				status1: "La storia è condivisa ma presenta problemi",
				status2: "La storia non è condivisa ma presenta problemi",
				status3: "Storia pubblica",
				status4: "Storia condivisa nell\'ambito dell\'organizzazione",
				status5: "Storia privata",
				status6: "Storia non ancora salvata",
				checking: "Verifica in corso",
				fix: "Correzione"
			},
			saveError: {
				title: "Errore durante il salvataggio della storia",
				err1Div1: "Impossibile salvare la storia perché è già presente un altro elemento con lo stesso nome.",
				err1Div2: "Modificare il titolo della storia, quindi salvarla.",
				btnOk: "Modifica il titolo della storia"
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
				panel4: "é_Do not warn me again for this story____________È"
			},
			share: {
				shareTitle: "Condividi la storia",
				preview: "Anteprima",
				viewlive: "é_View story____È",
				btnPrivate: "Privato",
				btnPrivateTooltip: "La storia può essere visualizzata solo dall\'utente corrente",
				btnOrg: "Organizzazione",
				btnOrgTooltip: "La storia può essere visualizzata solo dai membri dell\'organizzazione",
				btnPublic: "Pubblico",
				btnPublicTooltip: "La storia può essere visualizzata da tutti gli utenti",
				loadingMessage: "Verifica della presenza di problemi nella storia",
				viewToggle1: "Mostra contenuto storia",
				viewToggle2: "Chiudi contenuto storia",
				socialize: "Socializza",
				statusPrivate: "La storia è privata è può essere vista solo dall\'utente corrente.",
				statusError: "Il contenuto della storia presenta dei problemi che saranno notati dai lettori. È possibile identificare e risolvere questi problemi di seguito.",
				statusNoErrPrivate: "Condividere la storia appena pronti",
				mystoriesinvite: "Gestisci tutte le storie",
				notavailable1: "Spiacenti, la condivisione della storia dal Generatore non è supportata poiché l\'applicazione non è ospitata in %PRODUCT%.",
				notavailable2: "Spiacenti, la condivisione della storia dal Generatore non è supportata in questa versione di Portal for ArcGIS (richiede 10.4 o versioni successive).",
				notavailable3: "È possibile condividere questa storia da %LINK%.",
				notavailable4: "My Stories",
				notavailable5: "é_its item page_____È",
				notavailable6: "Spiacenti, questa feature non è completamente supportata nella modalità di sviluppo. In base allo scenario di sviluppo, questa feature può essere sviluppata quando viene distribuita.",
				notavailable7: "Accertarsi di visitare %MYCONTENT% per confermare che anche le mappe e i layer utilizzati nella storia siano condivisi.",
				notavailable8: "Contenuto personale",
				mystoriesinvite2: "é_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________È."
			},
			settings: {
				header: "Impostazioni",
				tabError: "Verificare la presenza di errori in tutte le schede"
			},
			settingsLayout: {
				title: "é_Layout___È",
				explain: "Scegliere il layout da utilizzare.",
				explainInit: "È possibile modificare il layout in qualsiasi momento nella finestra di dialogo delle impostazioni.",
				viewExample: "Visualizza un esempio in tempo reale"
			},
			settingsTheme: {
				title: "é_Theme___È"
			},
			settingsHeader: {
				title: "é_Header___È",
				logoEsri: "Logo Esri",
				logoNone: "Nessun logo",
				logoCustom: "Logo personalizzato",
				logoCustomPlaceholder: "URL (max 250x50 pixel)",
				logoCustomTargetPlaceholder: "Collegamento clickthrough",
				logoSocialExplain: "Personalizzare il collegamento nell\'intestazione.",
				logoSocialText: "Testo",
				logoSocialLink: "Collegamento",
				lblSmallHeader: "Usa intestazione compressa (senza sottotitolo)"
			},
			header: {
				title: "é_Edit the title of your %TPL_NAME%___________È",
				subtitle: "Modifica il sottotitolo di %TPL_NAME%"
			}
		}
	})
);
