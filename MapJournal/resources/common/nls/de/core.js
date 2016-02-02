define(
	 ({
		commonCore: {
			common: {
				add: "Hinzufügen",
				edit: "Bearbeiten",
				save: "Speichern",
				next: "Weiter",
				cancel: "Abbrechen",
				back: "Zurück",
				apply: "Übernehmen",
				close: "Schließen",
				open: "Öffnen",
				start: "Start",
				loading: "Wird geladen",
				disabledAdmin: "Diese Funktion wurde vom Administrator deaktiviert",
				width: "Breite",
				height: "Höhe",
				create: "Erstellen",
				yes: "Ja",
				no: "Nein",
				mystories: "ä_My Stories____Ü"
			},
			inlineFieldEdit: {
				editMe: "Bearbeiten!"
			},
			builderPanel: {
				panelHeader: "Builder für %TPL_NAME%",
				buttonSaving: "Wird gespeichert",
				buttonSaved: "Gespeichert",
				buttonShare: "Freigeben",
				buttonSettings: "Einstellungen",
				buttonHelp: "Hilfe",
				buttonPreview: "ä_View story____Ü",
				tooltipFirstSave: "Dies ist erst nach dem Speichern verfügbar.",
				tooltipNotShared: "Dies ist erst nach dem Freigeben verfügbar.",
				tooltipNotShared2: "ä_Your story isn't shared, only you can access it_______________Ü.",
				noPendingChange: "Keine ausstehende Änderung",
				unSavedChangePlural: "Ausstehende Änderungen",
				closeWithPendingChange: "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
				saveError: "Speichern fehlgeschlagen, versuchen Sie es erneut",
				status1: "Story ist freigegeben, weist aber Probleme auf",
				status2: "Story ist nicht freigegeben, weist aber Probleme auf",
				status3: "Story ist öffentlich",
				status4: "Story ist innerhalb Ihrer Organisation freigegeben",
				status5: "Story ist als privat eingestuft",
				status6: "Story wurde noch nicht gespeichert",
				checking: "Wird überprüft",
				fix: "Fix"
			},
			saveError: {
				title: "Fehler beim Speichern der Story",
				err1Div1: "Die Story kann nicht gespeichert werden, da bereits ein anderes Element mit diesem Namen vorhanden ist.",
				err1Div2: "Ändern Sie den Titel Ihrer Story, und speichern Sie sie anschließend.",
				btnOk: "Den Titel der Story bearbeiten"
			},
			saveErrorSocial: {
				title: "ä_Social media sharing update_________Ü",
				panel1: "ä_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________Ü.",
				panel1tooltip: "ä_By defining a title, summary and thumbnail image, your story will look like this_________________________Ü:",
				panel2:	"ä_Which title would you like to use on social media________________Ü:",
				panel2q1: "ä_Story title (recommended)_________Ü",
				panel2q1tooltip: "ä_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________Ü.",
				panel2q2: "ä_Item title____Ü",
				panel3: "ä_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________Ü.",
				panel4: "ä_Do not warn me again for this story____________Ü"
			},
			share: {
				shareTitle: "Story freigeben",
				preview: "Vorschau",
				viewlive: "ä_View story____Ü",
				btnPrivate: "Privat",
				btnPrivateTooltip: "Nur Sie können die Story sehen",
				btnOrg: "Organisation",
				btnOrgTooltip: "Nur Mitglieder Ihrer Organisation können die Story sehen",
				btnPublic: "Öffentlich",
				btnPublicTooltip: "Jeder kann die Story sehen",
				loadingMessage: "Ihre Story wird auf Probleme überprüft",
				viewToggle1: "Story-Inhalt anzeigen",
				viewToggle2: "Story-Inhalt schließen",
				socialize: "Socialize",
				statusPrivate: "Ihre Story ist privat, nur Sie können sie sehen.",
				statusError: "Der Inhalt Ihrer Story weist Probleme auf, die Ihre Leser bemerken werden. Sie können diese Probleme unten identifizieren und beheben.",
				statusNoErrPrivate: "Geben Sie Ihre Story frei, sobald Sie bereit sind!",
				mystoriesinvite: "Alle Storys verwalten",
				notavailable1: "Das Freigeben Ihrer Story im Manager wird nicht unterstützt, da diese Anwendung nicht in %PRODUCT% gehostet wird.",
				notavailable2: "Das Freigeben Ihrer Story im Manager wird in dieser Version von Portal for ArcGIS nicht unterstützt (Version 10.4 oder höher erforderlich).",
				notavailable3: "Sie können diese Story über %LINK% freigeben.",
				notavailable4: "My Stories",
				notavailable5: "ä_its item page_____Ü",
				notavailable6: "Dieses Feature wird im Entwicklungsmodus leider nicht vollständig unterstützt. Je nach Entwicklungsszenario wird es möglicherweise nach der Bereitstellung unterstützt.",
				notavailable7: "Besuchen Sie %MYCONTENT%, um sicherzustellen, dass die Karten und Layer, die Sie in Ihrer Story verwenden, ebenfalls freigegeben sind.",
				notavailable8: "Eigene Inhalte",
				mystoriesinvite2: "ä_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________Ü."
			},
			settings: {
				header: "Einstellungen",
				tabError: "Überprüfen Sie alle Registerkarten auf Fehler"
			},
			settingsLayout: {
				title: "ä_Layout___Ü",
				explain: "Welches Layout möchten Sie verwenden?",
				explainInit: "Das Layout kann jederzeit im Dialogfeld \"Einstellungen\" geändert werden.",
				viewExample: "Live-Beispiel anzeigen"
			},
			settingsTheme: {
				title: "ä_Theme___Ü"
			},
			settingsHeader: {
				title: "ä_Header___Ü",
				logoEsri: "Esri Logo",
				logoNone: "Kein Logo",
				logoCustom: "Benutzerdefiniertes Logo",
				logoCustomPlaceholder: "URL (max. 250 x 50 Pixel)",
				logoCustomTargetPlaceholder: "Ziel-URL",
				logoSocialExplain: "Passen Sie den Kopfzeilen-Link an.",
				logoSocialText: "Text",
				logoSocialLink: "Link",
				lblSmallHeader: "Kompakte Überschrift verwenden (keinen Untertitel)"
			},
			header: {
				title: "ä_Edit the title of your %TPL_NAME%___________Ü",
				subtitle: "Den Untertitel für %TPL_NAME% bearbeiten"
			}
		}
	})
);
