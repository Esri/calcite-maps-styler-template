define(
	 ({
		commonCore: {
			common: {
				add: "Přidat",
				edit: "Editovat",
				save: "Uložit",
				next: "Další",
				cancel: "Storno",
				back: "Zpět",
				apply: "Použít",
				close: "Zavřít",
				open: "Otevřít",
				start: "Spustit",
				loading: "Načítání",
				disabledAdmin: "Tato funkce byla zakázána administrátorem",
				width: "Šířka",
				height: "Výška",
				create: "Vytvořit",
				yes: "Ano",
				no: "Ne",
				mystories: "Ř_My Stories____ů"
			},
			inlineFieldEdit: {
				editMe: "Edituj mě!"
			},
			builderPanel: {
				panelHeader: "Nástroj pro tvorbu %TPL_NAME%",
				buttonSaving: "Ukládání",
				buttonSaved: "Uloženo",
				buttonShare: "Sdílet",
				buttonSettings: "Nastavení",
				buttonHelp: "Nápověda",
				buttonPreview: "Ř_View story____ů",
				tooltipFirstSave: "Tato funkce není k dispozici, dokud aplikaci neuložíte.",
				tooltipNotShared: "Tato funkce není k dispozici, dokud aplikaci nenasdílíte.",
				tooltipNotShared2: "Ř_Your story isn't shared, only you can access it_______________ů.",
				noPendingChange: "Žádná neuložená změna",
				unSavedChangePlural: "Neuložené změny",
				closeWithPendingChange: "Opravdu chcete potvrdit tuto akci? Vaše změny budou ztraceny.",
				saveError: "Uložení se nezdařilo, zkuste to znovu.",
				status1: "Příběh je sdílený, ale obsahuje problémy",
				status2: "Příběh není sdílený, ale obsahuje problémy",
				status3: "Příběh je veřejný",
				status4: "Příběh je sdílen v rámci vaší organizace",
				status5: "Příběh je soukromý",
				status6: "Příběh ještě není uložen",
				checking: "Kontrola",
				fix: "Opravit"
			},
			saveError: {
				title: "Chyba při ukládání příběhu",
				err1Div1: "Příběh nelze uložit, protože již máte uloženou jinou položku se stejným názvem.",
				err1Div2: "Změňte název příběhu a poté ho uložte.",
				btnOk: "Změňte název příběhu"
			},
			saveErrorSocial: {
				title: "Ř_Social media sharing update_________ů",
				panel1: "Ř_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ů.",
				panel1tooltip: "Ř_By defining a title, summary and thumbnail image, your story will look like this_________________________ů:",
				panel2:	"Ř_Which title would you like to use on social media________________ů:",
				panel2q1: "Ř_Story title (recommended)_________ů",
				panel2q1tooltip: "Ř_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ů.",
				panel2q2: "Ř_Item title____ů",
				panel3: "Ř_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ů.",
				panel4: "Ř_Do not warn me again for this story____________ů"
			},
			share: {
				shareTitle: "Sdílejte svůj příběh",
				preview: "Náhled",
				viewlive: "Ř_View story____ů",
				btnPrivate: "Soukromé",
				btnPrivateTooltip: "Příběh můžete vidět pouze vy",
				btnOrg: "Organizace",
				btnOrgTooltip: "Příběh mohou vidět pouze členové vaší organizace",
				btnPublic: "Veřejné",
				btnPublicTooltip: "Příběh mohou vidět všichni",
				loadingMessage: "Probíhá kontrola případných problémů s vaším příběhem...",
				viewToggle1: "Zobrazit obsah příběhu",
				viewToggle2: "Zavřít obsah příběhu",
				socialize: "Socializovat",
				statusPrivate: "Váš příběh je soukromý, vidíte ho pouze vy.",
				statusError: "Obsah vašeho příběhu obsahuje problémy, které budou čtenářům viditelné. Tyto problémy můžete identifikovat a napravit níže.",
				statusNoErrPrivate: "Až budete připraveni, sdílejte svůj příběh!",
				mystoriesinvite: "Spravujte všechny své příběhy",
				notavailable1: "Je nám líto, sdílení vašeho příběhu z nástroje pro tvorbu není podporováno, jelikož tato aplikace není hostována v %PRODUCT%.",
				notavailable2: "Je nám líto, sdílení vašeho příběhu z nástroje pro tvorbu není podporováno v této verzi Portal for ArcGIS (vyžaduje 10.4 nebo novější).",
				notavailable3: "Tento příběh můžete sdílet z %LINK%.",
				notavailable4: "Moje příběhy",
				notavailable5: "Ř_its item page_____ů",
				notavailable6: "Je nám líto, tato funkce není v režimu vývoje plně podporována. V závislosti na vašem scénáři nasazení může být tato funkce podporována při nasazení.",
				notavailable7: "Nezapomeňte v %MYCONTENT% ověřit, že mapy a vrstvy použité ve vašem příběhu jsou také sdílené.",
				notavailable8: "Můj obsah",
				mystoriesinvite2: "Ř_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________ů."
			},
			settings: {
				header: "Nastavení",
				tabError: "Zkontrolujte prosím, nejsou-li v záložkách chyby."
			},
			settingsLayout: {
				title: "Ř_Layout___ů",
				explain: "Jaké rozvržení chcete použít?",
				explainInit: "Rozvržení můžete kdykoli změnit v dialogu nastavení.",
				viewExample: "Zobrazit živý příklad"
			},
			settingsTheme: {
				title: "Ř_Theme___ů"
			},
			settingsHeader: {
				title: "Ř_Header___ů",
				logoEsri: "Logo Esri",
				logoNone: "Bez loga",
				logoCustom: "Vlastní logo",
				logoCustomPlaceholder: "Adresa URL (max 250×50 pixelů)",
				logoCustomTargetPlaceholder: "Odkaz při kliknutí na obrázek",
				logoSocialExplain: "Odkaz v záhlaví si můžete přizpůsobit.",
				logoSocialText: "Text",
				logoSocialLink: "Odkaz",
				lblSmallHeader: "Použít kompaktní záhlaví (bez podnázvu)"
			},
			header: {
				title: "Ř_Edit the title of your %TPL_NAME%___________ů",
				subtitle: "Změňte podnázev šablony %TPL_NAME%."
			}
		}
	})
);
