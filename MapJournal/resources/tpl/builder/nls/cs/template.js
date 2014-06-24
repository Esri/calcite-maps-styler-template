define(
	 ({
		builder: {
			layouts: {
				mainStage: "Hlavní úroveň",
				sideTitle: "Postranní panel",
				sideDescr: "Rozvržení pro příběh s velkým množstvím textu, které umožňuje snadno zkombinovat fotografie, videa a mapy do jasně zaměřeného sdělení.",
				floatTitle: "Plovoucí panel",
				floatDescr: "Rozvržení, které soustředí pozornost na vaše mapy a zároveň díky krátkému, průhlednému textovému panelu pomáhá porozumět obsahu mapy."
			},
			common: {
				lblStatus1: "Publikované",
				lblStatus2: "Návrh",
				lblStatus3: "Skryté"
			},
			settingsLayoutOptions: {
				title: "Možnosti rozvržení",
				cfgLeft: "Vlevo",
				cfgRight: "Vpravo",
				cfgSmall: "Malé",
				cfgMedium: "Střední",
				cfgLarge: "Velké",
				socialLinksLabel: "Zobrazit na konci každé části odkazy pro sdílení",
				socialLinksDescr: "Tato možnost čtenářům umožňuje odkazovat na konkrétní části %TPL_NAME% a šířit je. Pokud například použijete ikonu pro sdílení částí, čtenáři se dostanou přímo na danou část %TPL_NAME% místo na začátek příběhu. Čtenáři mohou k šíření celého %TPL_NAME% použít odkaz na sociální média v titulní části (karta záhlaví), který vede na začátek %TPL_NAME%."
			},
			initPopup: {
				title: "Vítejte v"
			},
			addEditPopup: {
				disabled: "Ř_Add Section is disabled because the maximum number of allowed sections has been reached._ů",
				titleAdd: "Přidat část",
				titleAddHome: "Ř_Add Home Section_ů",
				titleEdit: "Upravit část",
				step: "Krok",
				stepMainStageExplain: "Ř_Main Stage Content_ů",
				stepPanelExplain: "Ř_Content_ů",
				stepMainStageNextTooltip: "Zadejte nadpis části a vyberte obsah hlavní úrovně.",
				step2NextTooltip: "Zadejte nadpis části a obsah %LAYOUT-TYPE%.",
				stepNextTooltipNext: "chcete-li přejít na další krok",
				stepNextTooltipAdd: "chcete-li přidat část",
				firstAddExplain: "Ř_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ů",
				firstAddLeanMore: "Ř_Learn More_ů",
				titlePlaceholder: "Nadpis části..."
			},
			addEditViewText: {
				editorPlaceholder: "Sem přidejte text, odkazy a malé obrázky.",
				editorActionsTitle: "Akce hlavní úrovně",
				editorActionsHelpDescr: "Ř_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ů"
			},
			organizePopup: {
				title: "Organizovat",
				lblHeader: "Zorganizujte svůj obsah kliknutím a přetažením částí.",
				lblColTitle: "Nadpis",
				lblColPubDate: "Datum zveřejnění",
				lblColStatus: "Stav",
				checkDisplayReverse: "Zobrazit části v opačném pořadí",
				btnApplyWarning: "Ř_Confirm deletion of %NB% section(s)_ů",
				deleteTooltip: "Smazat",
				firstSectionExplain: "(Domovskou část nelze přemístit)"
			},
			exportData: {
				btn: "Ř_Export content_ů",
				tooltip: "Ř_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._ů"
			},
			help: {
				lblHelp: "Nápověda",
				lblAdd: "Přidat část",
				lblSettings: "Nastavení",
				lblOrga: "Zorganizovat obsah",
				lblEdit: "Úpravy",
				lblPublish: "Sdílet",
				lblTips: "Ř_Tips_ů",
				lblMore: "Chcete více?",
				lblLink: "Navštivte webové stránky map s příběhem.",
				content1Div1: "Při vytváření příběhu do něj můžete integrovat množství stylů. <strong>%LAYOUT_TITLE%</strong> většinou obsahuje text, obrázky a videa, zatímco mapy jsou zpravidla umístěny na <strong>hlavní úrovni</strong>. %TPL_NAME% vám nicméně umožňuje vkládat obrázky, grafy a videa i na hlavní úroveň.",
				content1Div2: "Přidáváním částí si můžete obsah mapy přizpůsobit podle svých představ. Stejně jako čtenáři procházejí text %LAYOUT_TITLE%, mapa na hlavní úrovni se může posouvat nebo přibližovat na klíčové body, nebo se mohou automaticky aktivovat nové mapy a obrázky zdůrazňující vaši zprávu.",
				content2Div1: "Zde můžete upravit vzhled %TPL_NAME%. Barevná schémata, rozvržení a šířky je možno nastavovat zde.",
				content2Div2: "Můžete také přidat odkazy pro sdílení na Facebooku, Twitteru a Bitly, aby čtenáři mohli %TPL_NAME% snadno šířit mezi ostatní.",
				content3Div1: "Ř_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ů",
				content4Div1: "Našli jste chybu nebo chcete změnit svůj materiál? Žádný problém. Hledejte v aplikaci ikonu úprav, která vám umožní změnit obsah. Funkce úprav použijete při vytváření %TPL_NAME% mnohokrát!",
				content5Div1: "%TPL_NAME% se ukládá do vašeho %PORTAL% účtu (ve výchozím nastavení se ukládá soukromě). Můžete se ale rozhodnout sdílet jej v rámci organizací, nebo veřejně. Sdělíme vám i zkrácenou adresu URL umožňující snadnější sdílení.",
				content6Div1: "Ř_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ů",
				content6Div2: "Ř_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ů"
			},
			landing: {
				lblAdd: "Ř_What do you want to call your Map Journal?_ů",
				phAdd: "Ř_Enter your title..._ů",
				lblOR: "Nebo",
				lblHelp: "Prohlídka"
			},
			firstAddSplash: {
				thisis: "Toto je"
			}
        }
    })

);
