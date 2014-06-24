define(
	 ({
		builder: {
			layouts: {
				mainStage: "Hauptanzeige",
				sideTitle: "Seitenfenster",
				sideDescr: "Ein Layout für einen umfangreichen Text, der sich durch die Kombination von Fotos, Videos und Karten in einer klar fokussierten Botschaft auszeichnet.",
				floatTitle: "Unverankertes Fenster",
				floatDescr: "Ein Layout, das die Karte in den Mittelpunkt stellt, während die Informationen über ein transparentes Fenster mit Text in Kurzform angezeigt werden."
			},
			common: {
				lblStatus1: "Veröffentlicht",
				lblStatus2: "Entwurf",
				lblStatus3: "Ausgeblendet"
			},
			settingsLayoutOptions: {
				title: "Layout-Optionen",
				cfgLeft: "Links",
				cfgRight: "Rechts",
				cfgSmall: "Klein",
				cfgMedium: "Mittel",
				cfgLarge: "Groß",
				socialLinksLabel: "Freigabe-Links im unteren Bereich jedes Abschnitts anzeigen",
				socialLinksDescr: "Auf diese Weise können Leser bestimmte Abschnitte von %TPL_NAME% referenzieren und bewerben. Wenn Sie beispielsweise das Freigabesymbol eines Abschnitts verwenden, gelangen Benutzer zu diesem bestimmten Abschnitt von %TPL_NAME%, statt zum Anfang Ihrer Story. Ihre Leser können den Link zu sozialen Medien im Titelabschnitt verwenden, um %TPL_NAME% vollständig (Kopfzeilenregisterkarte) zu bewerben, und am Anfang von %TPL_NAME% zu landen."
			},
			initPopup: {
				title: "Willkommen bei"
			},
			addEditPopup: {
				disabled: "ä_Add Section is disabled because the maximum number of allowed sections has been reached._Ü",
				titleAdd: "Abschnitt hinzufügen",
				titleAddHome: "ä_Add Home Section_Ü",
				titleEdit: "Abschnitt bearbeiten",
				step: "Step",
				stepMainStageExplain: "ä_Main Stage Content_Ü",
				stepPanelExplain: "ä_Content_Ü",
				stepMainStageNextTooltip: "Den Abschnittstitel eingeben und den Inhalt der Hauptanzeige auswählen",
				step2NextTooltip: "Den Abschnittstitel und den %LAYOUT-TYPE%-Inhalt eingeben",
				stepNextTooltipNext: "um mit dem nächsten Schritt fortzufahren",
				stepNextTooltipAdd: "um den Abschnitt hinzuzufügen",
				firstAddExplain: "ä_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._Ü",
				firstAddLeanMore: "ä_Learn More_Ü",
				titlePlaceholder: "Abschnittstitel..."
			},
			addEditViewText: {
				editorPlaceholder: "Text, Links und kleine Grafiken hier hinzufügen.",
				editorActionsTitle: "Aktionen der Hauptanzeige",
				editorActionsHelpDescr: "ä_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._Ü"
			},
			organizePopup: {
				title: "Organisieren",
				lblHeader: "Inhalte durch Ziehen und Ablegen von Abschnitten organisieren.",
				lblColTitle: "Titel",
				lblColPubDate: "Veröffentlichungsdatum",
				lblColStatus: "Status",
				checkDisplayReverse: "Abschnitte in umgekehrter Reihenfolge anzeigen",
				btnApplyWarning: "ä_Confirm deletion of %NB% section(s)_Ü",
				deleteTooltip: "Löschen",
				firstSectionExplain: "(Der Startseitenabschnitt kann nicht verschoben werden)"
			},
			exportData: {
				btn: "ä_Export content_Ü",
				tooltip: "ä_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._Ü"
			},
			help: {
				lblHelp: "Hilfe",
				lblAdd: "Abschnitt hinzufügen",
				lblSettings: "Einstellungen",
				lblOrga: "Inhalt organisieren",
				lblEdit: "Änderungen",
				lblPublish: "Freigeben",
				lblTips: "ä_Tips_Ü",
				lblMore: "Sie wünschen weitere Informationen?",
				lblLink: "Besuchen Sie die Story Maps-Website.",
				content1Div1: "Sie können eine Vielzahl von Styles zur Vermittlung von Informationen integrieren. Der <strong>%LAYOUT_TITLE%</strong> enthält in der Regel Ihren Text, Ihre Bilder und Videos, während Ihre Karten sich meist in der <strong>Hauptanzeige</strong> befinden. Mit %TPL_NAME% können Bilder, Diagramme und Videos jedoch auch in der Hauptanzeige dargestellt werden.",
				content1Div2: "Sie können das Storytelling anpassen, indem Sie Abschnitte hinzufügen. Wenn Leser einen Bildlauf durch Ihren %LAYOUT_TITLE%-Text durchführen, kann eine Karte in der Hauptanzeige zu Schlüsselpunkten schwenken oder darauf zoomen oder es können neue Karten und Bilder automatisch gewechselt werden, um Ihre Botschaft zu unterstreichen.",
				content2Div1: "Hier können Sie das Erscheinungsbild für %TPL_NAME% festlegen. Alle Farbschemen, Layouts und Breiten werden hier optimiert.",
				content2Div2: "Sie können Freigabe-Links auch zu Facebook, Twitter und Bitly hinzufügen, um die problemlose Verteilung von %TPL_NAME% durch Ihre Leser zu ermöglichen.",
				content3Div1: "ä_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._Ü",
				content4Div1: "Sie haben einen Fehler gefunden oder möchten Änderungen vornehmen? Keine Sorge. Suchen Sie das Bearbeitungssymbol in der App, um Inhalte zu ändern. Sie werden die Bearbeitungsfunktionen beim Entwickeln von %TPL_NAME% häufig verwenden!",
				content5Div1: "%TPL_NAME% wird standardmäßig in Ihrem %PORTAL%-Konto und privat gespeichert. Sie können festlegen, ob die Informationen für Ihre Organisation freigegeben oder weltweit zugänglich sind. Wir stellen sogar eine gekürzte URL für eine problemlose Freigabe bereit.",
				content6Div1: "ä_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._Ü",
				content6Div2: "ä_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_Ü"
			},
			landing: {
				lblAdd: "ä_What do you want to call your Map Journal?_Ü",
				phAdd: "ä_Enter your title..._Ü",
				lblOR: "Oder",
				lblHelp: "Einführung"
			},
			firstAddSplash: {
				thisis: "Hierbei handelt es sich um"
			}
        }
    })

);
