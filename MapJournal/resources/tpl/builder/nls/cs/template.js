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
				socialLinksDescr: "Ř_This enables readers to reference and promote specific sections of your %TPL_NAME%. For instance, if you use a sections share icon, readers will land at that specific %TPL_NAME% section rather than the beginning of your story. Your readers can use the social media link in the title section to promote your entire %TPL_NAME% (header tab) and have them land at the start of the %TPL_NAME%._ů"
			},
			settingsLayoutFonts: {
				title: "Písma",
				defaultLbl: "Ř_Default_ů",
				sectionTitleLbl: "Ř_Section title_ů",
				sectionContentLbl: "Ř_Section content_ů"
			},
			initPopup: {
				title: "Vítejte v"
			},
			addEditPopup: {
				disabled: "Funkce Přidat Část je vypnuta, protože bylo dosaženo maximálního počtu povolených částí.",
				titleAdd: "Přidat část",
				titleAddHome: "Přidat domovskou část",
				titleEdit: "Upravit část",
				step: "Krok",
				stepMainStageExplain: "Obsah hlavní úrovně",
				stepPanelExplain: "Obsah",
				stepMainStageNextTooltip: "Zadejte nadpis části a vyberte obsah hlavní úrovně.",
				stepMainStageNextTooltip2: "Zvolte obsah hlavní úrovně.",
				step2NextTooltip: "Zadejte nadpis části a obsah %LAYOUT-TYPE%.",
				stepNextTooltipNext: "chcete-li přejít na další krok",
				stepNextTooltipAdd: "chcete-li přidat část",
				firstAddExplain: "První část je vaše domovská část. Berte ji jako „obálku“ svého příběhu. Nadpis, který jste právě zadali, se zde zobrazí velkým písmem.",
				firstAddLeanMore: "Další informace",
				titlePlaceholder: "Nadpis části..."
			},
			addEditViewText: {
				editorPlaceholder: "Sem přidejte text, odkazy a malé obrázky.",
				editorActionsTitle: "Akce hlavní úrovně",
				editorActionsHelpDescr: "Pomocí těchto ovládacích prvků můžete vytvářet odkazy, které změní hlavní úroveň. Když například čtenář klikne na odkaz, můžete přiblížit mapu na konkrétní umístění, zobrazit jinou webovou mapu nebo obrázek.",
				mainStageDisabled: "Když je editor maximalizován, akce hlavní úrovně jsou zakázány."
			},
			organizePopup: {
				title: "Organizovat",
				lblHeader: "Zorganizujte svůj obsah kliknutím a přetažením částí.",
				lblColTitle: "Nadpis",
				lblColPubDate: "Datum zveřejnění",
				lblColStatus: "Stav",
				checkDisplayReverse: "Zobrazit části v opačném pořadí",
				btnApplyWarning: "Potvrdit smazání %NB% částí",
				deleteTooltip: "Smazat",
				firstSectionExplain: "(Domovskou část nelze přemístit)",
				exportMainStage: "Obsah hlavní úrovně",
				exportPanel: "Obsah panelu",
				exportActions: "Akce hlavní úrovně"
			},
			exportData: {
				btn: "Exportovat obsah",
				tooltip: "Exportování obsahu vám umožní prohlížet a vytvářet zálohu obsahu pro případ, že ho omylem smažete. Obsah stránky jednoduše zkopírujte a vložte do jakéhokoli textového editoru."
			},
			help: {
				lblHelp: "Nápověda",
				lblAdd: "Přidat část",
				lblSettings: "Nastavení",
				lblOrga: "Zorganizovat obsah",
				lblEdit: "Úpravy",
				lblPublish: "Sdílet",
				lblTips: "Tipy",
				lblMore: "Chcete více?",
				lblLink: "Navštivte web Esri věnovaný mapám s příběhem.",
				content1Div1: "Při vytváření příběhu do něj můžete integrovat množství stylů. <strong>%LAYOUT_TITLE%</strong> většinou obsahuje text, obrázky a videa, zatímco mapy jsou zpravidla umístěny na <strong>hlavní úrovni</strong>. %TPL_NAME% vám nicméně umožňuje vkládat obrázky, grafy a videa i na hlavní úroveň.",
				content1Div2: "Přidáváním částí si můžete obsah mapy přizpůsobit podle svých představ. Stejně jako čtenáři procházejí text %LAYOUT_TITLE%, mapa na hlavní úrovni se může posouvat nebo přibližovat na klíčové body, nebo se mohou automaticky aktivovat nové mapy a obrázky zdůrazňující vaši zprávu.",
				content2Div1: "Ř_Here is where you can adjust how your %TPL_NAME% looks. Color schemes, layouts, widths, and fonts are all refined here._ů",
				content2Div2: "Můžete také přidat odkazy pro sdílení na Facebooku, Twitteru a Bitly, aby čtenáři mohli %TPL_NAME% snadno šířit mezi ostatní.",
				content3Div1: "Váš obsah je rozdělen do částí. Můžete jich mít libovolný počet (berte je jako malé kapitoly). Je důležité, jak kapitoly plynou za sebou, a proto je v části Organizovat můžete libovolně přeřazovat a odstraňovat.",
				content4Div1: "Našli jste chybu nebo chcete změnit svůj materiál? Žádný problém. Hledejte v aplikaci ikonu úprav, která vám umožní změnit obsah. Funkce úprav použijete při vytváření %TPL_NAME% mnohokrát!",
				content5Div1: "%TPL_NAME% se ve výchozím nastavení ukládá do vašeho účtu %PORTAL% a v soukromém režimu. Můžete se ale rozhodnout sdílet jej v rámci organizací, nebo veřejně. Sdělíme vám i zkrácenou adresu URL umožňující snadnější sdílení.",
				content6Div1: "Nadpis domovské části je také nadpisem vašeho deníku. Domovská část je prakticky „obálkou“ vašeho příběhu. Nadpis domovské části zůstane viditelný, zatímco budou čtenáři procházet váš deník.",
				content6Div2: "Vaše rozvržení %LAYOUT_TITLE% nemusí tvořit jen text. Můžete použít i fotografie a videa, abyste příběh oživili a rozdělili dlouhé bloky textu!"
			},
			landing: {
				lblAdd: "Jak chcete svůj Mapový deník nazvat?",
				phAdd: "Zadejte nadpis...",
				lblOR: "Nebo",
				lblHelp: "Prohlídka"
			},
			firstAddSplash: {
				thisis: "Toto je",
				lblMain: "Toto je hlavní úroveň %BR%"
			}
        }
    })

);
