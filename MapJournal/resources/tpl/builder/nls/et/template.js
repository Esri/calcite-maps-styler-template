define(
	 ({
		builder: {
			layouts: {
				mainStage: "Põhilava",
				sideTitle: "Külgpaneel",
				sideDescr: "Ohtra tekstiga loo jaoks sobiv paigutus, kus saate oma fotod, videod ja kaardid kombineerida ühtseks selget sõnumit kandvaks artikliks.",
				floatTitle: "Ujupaneel",
				floatDescr: "Paigutus, mis tõmbab tähelepanu kaartidele, võimaldades samas läbipaistva lühitekstipaneeli kaudu sisu jutustada."
			},
			common: {
				lblStatus1: "Avaldatud",
				lblStatus2: "Mustand",
				lblStatus3: "Peidetud"
			},
			settingsLayoutOptions: {
				title: "Paigutuse valikud",
				cfgLeft: "Vasak",
				cfgRight: "Parem",
				cfgSmall: "Väike",
				cfgMedium: "Keskmine",
				cfgLarge: "Suur",
				socialLinksLabel: "Kuva jagamislingid iga jaotise allservas",
				socialLinksDescr: "Sel viisil saavad lugejad viidata teie malli %TPL_NAME% kindlatele jaotistele ja neid esile tõsta. Kui kasutate näiteks jaotiste jagamise ikooni, satub lugeja lehel %TPL_NAME% sellesse konkreetsesse jaotisse, mitte loo algusse. Tiitlijaotises asuva sotsiaalmeedia lingi kaudu saavad lugejad tervet teie lehte %TPL_NAME% (päisesakki) jagada nii, et uus lugeja viiakse lehe %TPL_NAME% algusse."
			},
			initPopup: {
				title: "Tere tulemast"
			},
			addEditPopup: {
				disabled: "Š_Add Section is disabled because the maximum number of allowed sections has been reached._ä",
				titleAdd: "Jaotise lisamine",
				titleAddHome: "Š_Add Home Section_ä",
				titleEdit: "Jaotise muutmine",
				step: "Samm",
				stepMainStageExplain: "Š_Main Stage Content_ä",
				stepPanelExplain: "Š_Content_ä",
				stepMainStageNextTooltip: "Sisestage jaotise nimi ja valige põhilava sisu",
				step2NextTooltip: "Sisestage jaotise nimi ja %LAYOUT-TYPE% sisu",
				stepNextTooltipNext: "järgmisesse etappi liikumiseks",
				stepNextTooltipAdd: "jaotise lisamiseks",
				firstAddExplain: "Š_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ä",
				firstAddLeanMore: "Š_Learn More_ä",
				titlePlaceholder: "Jaotise nimi..."
			},
			addEditViewText: {
				editorPlaceholder: "Siia saate lisada teksti, lingid ja väiksemad pildid.",
				editorActionsTitle: "Põhilava toimingud",
				editorActionsHelpDescr: "Š_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ä"
			},
			organizePopup: {
				title: "Paiguta",
				lblHeader: "Sisu korraldamiseks lohistage loo jaotised soovitud kohta.",
				lblColTitle: "Pealkiri",
				lblColPubDate: "Avaldamiskuupäev",
				lblColStatus: "Staatus",
				checkDisplayReverse: "Kuva jaotised pöördjärjestuses",
				btnApplyWarning: "Š_Confirm deletion of %NB% section(s)_ä",
				deleteTooltip: "Kustuta",
				firstSectionExplain: "(Kodujaotist ei saa teisaldada)"
			},
			exportData: {
				btn: "Š_Export content_ä",
				tooltip: "Š_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._ä"
			},
			help: {
				lblHelp: "Abi",
				lblAdd: "Jaotise lisamine",
				lblSettings: "Seaded",
				lblOrga: "Korralda sisu",
				lblEdit: "Muudatused",
				lblPublish: "Jaga",
				lblTips: "Š_Tips_ä",
				lblMore: "Kas sellest ei piisa?",
				lblLink: "Külastage kaardilugude veebisaiti.",
				content1Div1: "Artikli koostamisel saate kaasata mitmesuguseid laade. <strong>%LAYOUT_TITLE%</strong> sisaldab enamasti teksti, pilte ja videoid, kaardid aga asuvad <strong>põhilaval</strong>. %TPL_NAME% lubab teil siiski ka pilte, diagramme ja videot põhilaval kasutada.",
				content1Div2: "Jaotiste lisamisega saate oma loo jutustada täpselt nii, nagu soovite. Kui lugeja liigub jaotise %LAYOUT_TITLE% tekstis kerides allapoole, saab põhilaval kaarti liigutada või olulisi kohti suuremana näidata; samuti saab teie sõnumi toetamiseks automaatselt uusi kaarte ja pilte sisse ja välja lülitada.",
				content2Div1: "Siin saate kohandada malli %TPL_NAME% ilmet. Muu hulgas saate siin määratleda värviskeemid, paigutused ja laiused.",
				content2Div2: "Samuti saate lisada Facebooki, Twitteri ja Bitly kaudu jagamise lingid, et lugejad saaksid teie malli %TPL_NAME% mugavalt edasi levitada.",
				content3Div1: "Š_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ä",
				content4Div1: "Kas olete leidnud vea või soovite materjali muuta? Ärge muretsege. Rakenduse muutmisikooni kaudu saate sisu igal ajal muuta. Muutmisvõimaluste kasutamist tuleb teil malli %TPL_NAME% väljatöötamisel kindlasti ohtralt ette!",
				content5Div1: "%TPL_NAME% salvestatakse teie portaali %PORTAL% kontole ja see on vaikimisi privaatne. Te saate valida, kas soovite seda jagada üksnes oma organisatsiooni piires või kogu maailmaga. Selleks, et seda oleks mugavam jagada, anname teile ka lühikese püsilingi.",
				content6Div1: "Š_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ä",
				content6Div2: "Š_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ä"
			},
			landing: {
				lblAdd: "Š_What do you want to call your Map Journal?_ä",
				phAdd: "Š_Enter your title..._ä",
				lblOR: "Või",
				lblHelp: "Tutvu võimalustega"
			},
			firstAddSplash: {
				thisis: "See on"
			}
        }
    })

);
