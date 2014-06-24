define(
	 ({
		builder: {
			layouts: {
				mainStage: "Hoofdvenster",
				sideTitle: "Zijvenster",
				sideDescr: "Een lay-out voor een verhaal met veel tekst die uw foto\'s, video\'s en kaarten op een prachtige manier combineert in een heldere boodschap.",
				floatTitle: "Zwevend venster",
				floatDescr: "Een lay-out die uw cartografie in beeld brengt en ruimte laat voor een transparant venster met een korte tekst om het verhaal te vertellen."
			},
			common: {
				lblStatus1: "Gepubliceerd",
				lblStatus2: "Concept",
				lblStatus3: "Verborgen"
			},
			settingsLayoutOptions: {
				title: "Lay-outopties",
				cfgLeft: "Links",
				cfgRight: "Rechts",
				cfgSmall: "Klein",
				cfgMedium: "Middel",
				cfgLarge: "Groot",
				socialLinksLabel: "Koppelingen om te delen weergeven onder aan elke sectie",
				socialLinksDescr: "Hiermee kunnen lezers verwijzen naar specifieke secties van uw %TPL_NAME% en deze promoten. Als u bijvoorbeeld een pictogram voor het delen van secties gebruikt, worden lezers naar die specifieke %TPL_NAME%-sectie gebracht in plaats van naar het begin van uw verhaal. Uw lezers kunnen de sociale-mediakoppeling in de titelsectie gebruiken om uw volledige %TPL_NAME% (tabblad Koptekst) te promoten en naar het begin van de %TPL_NAME% te worden gebracht."
			},
			initPopup: {
				title: "Welkom bij"
			},
			addEditPopup: {
				disabled: "Ĳ_Add Section is disabled because the maximum number of allowed sections has been reached._ä",
				titleAdd: "Sectie toevoegen",
				titleAddHome: "Ĳ_Add Home Section_ä",
				titleEdit: "Sectie bewerken",
				step: "Stap",
				stepMainStageExplain: "Ĳ_Main Stage Content_ä",
				stepPanelExplain: "Ĳ_Content_ä",
				stepMainStageNextTooltip: "Voer de sectietitel in en selecteer de inhoud van het hoofdvenster",
				step2NextTooltip: "Voer de sectietitel en inhoud van %LAYOUT-TYPE% in",
				stepNextTooltipNext: "om naar de volgende stap te gaan",
				stepNextTooltipAdd: "om de sectie toe te voegen",
				firstAddExplain: "Ĳ_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ä",
				firstAddLeanMore: "Ĳ_Learn More_ä",
				titlePlaceholder: "Sectietitel..."
			},
			addEditViewText: {
				editorPlaceholder: "Voeg hier tekst, koppelingen en kleine afbeeldingen toe.",
				editorActionsTitle: "Acties van hoofdvenster",
				editorActionsHelpDescr: "Ĳ_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ä"
			},
			organizePopup: {
				title: "Rangschikken",
				lblHeader: "Gebruik slepen en neerzetten voor de secties om uw inhoud te ordenen.",
				lblColTitle: "Titel",
				lblColPubDate: "Publicatiedatum",
				lblColStatus: "Status",
				checkDisplayReverse: "Secties in omgekeerde volgorde weergeven",
				btnApplyWarning: "Ĳ_Confirm deletion of %NB% section(s)_ä",
				deleteTooltip: "Verwijderen",
				firstSectionExplain: "(De sectie Home kan niet worden verplaatst)"
			},
			exportData: {
				btn: "Ĳ_Export content_ä",
				tooltip: "Ĳ_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._ä"
			},
			help: {
				lblHelp: "Help",
				lblAdd: "Sectie toevoegen",
				lblSettings: "Instellingen",
				lblOrga: "Inhoud ordenen",
				lblEdit: "Bewerkingen",
				lblPublish: "Delen",
				lblTips: "Ĳ_Tips_ä",
				lblMore: "Wilt u meer?",
				lblLink: "Ga naar de website met kaartverhalen.",
				content1Div1: "U kunt verschillende stijlen integreren wanneer u uw verhaal opbouwt. De <strong>%LAYOUT_TITLE%</strong> bevat doorgaans uw tekst, afbeeldingen en video terwijl uw kaarten gewoonlijk op het <strong>Hoofdvenster</strong> staan. Met de %TPL_NAME% kunt u echter ook afbeeldingen, diagrammen en video opnemen in het hoofdvenster.",
				content1Div2: "Door secties toe te voegen, kunt u de manier waarop u uw verhaal vertelt echt aanpassen. Wanneer lezers door uw %LAYOUT_TITLE%-tekst bladeren, kan een kaart op het hoofdvenster pannen of zoomen naar belangrijke punten of kunnen nieuwe kaarten en afbeeldingen automatisch worden in- en uitgeschakeld om uw boodschap te ondersteunen.",
				content2Div1: "Hier kunt u aanpassen hoe uw %TPL_NAME% eruitziet. Kleurenschema\'s, lay-outs en breedtes kunnen hier worden verfijnd.",
				content2Div2: "U kunt ook koppelingen om te delen naar Facebook, Twitter en Bitly toevoegen, zodat lezers uw %TPL_NAME% gemakkelijk met anderen kunnen delen.",
				content3Div1: "Ĳ_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ä",
				content4Div1: "Hebt u een fout gevonden of wilt u uw materiaal wijzigen? Geen probleem. Zoek naar het bewerkingspictogram dat overal in de app beschikbaar is om wijzigingen in uw inhoud uit te voeren. U zult de bewerkingsfuncties vaak gebruiken wanneer u uw %TPL_NAME% ontwikkelt.",
				content5Div1: "Uw %TPL_NAME% wordt opgeslagen op uw %PORTAL%-account en is standaard privé. U kunt beslissen om dit met uw organisatie te delen of met de hele wereld. We bieden u zelfs een verkorte URL zodat het delen nog makkelijker gaat.",
				content6Div1: "Ĳ_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ä",
				content6Div2: "Ĳ_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ä"
			},
			landing: {
				lblAdd: "Ĳ_What do you want to call your Map Journal?_ä",
				phAdd: "Ĳ_Enter your title..._ä",
				lblOR: "Of",
				lblHelp: "Volg een rondleiding"
			},
			firstAddSplash: {
				thisis: "Dit is de"
			}
        }
    })

);
