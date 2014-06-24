define(
	 ({
		builder: {
			layouts: {
				mainStage: "Pagrindinė sritis",
				sideTitle: "Šoninis skydelis",
				sideDescr: "Maketas, skirtas pasakojimui, kuriame daug teksto, iliustruoto nuotraukų, vaizdų ir žemėlapių deriniu, skirtu žiniai perteikti.",
				floatTitle: "Slankusis skydelis",
				floatDescr: "Maketas, kuriame akcentuojama kartografija, o skaidrus trumpo teksto skydelis padeda perteikti pasakojimą."
			},
			common: {
				lblStatus1: "Publikuota",
				lblStatus2: "Juodraštis",
				lblStatus3: "Paslėptas"
			},
			settingsLayoutOptions: {
				title: "Maketo parinktys",
				cfgLeft: "Kairė",
				cfgRight: "Dešinė",
				cfgSmall: "Mažas",
				cfgMedium: "Vidutinis",
				cfgLarge: "Didelis",
				socialLinksLabel: "Kiekvienos skilties apačioje rodomos bendrinimo nuorodos",
				socialLinksDescr: "Skaitytojai gali nurodyti ir reklamuoti konkrečias jūsų %TPL_NAME% skiltis. Pvz., jei naudojate skilties bendrinimo piktogramą, skaitytojai bus nukreipti į konkrečią %TPL_NAME% skiltį, o ne į pasakojimo pradžią. Be to, skaitytojai gali naudoti pavadinimo skiltyje pateiktą socialinių tinklų nuorodą ir reklamuoti visą %TPL_NAME% (antraštės skirtukas), jie bus nukreipti į %TPL_NAME% pradžią."
			},
			initPopup: {
				title: "Sveiki atvykę"
			},
			addEditPopup: {
				disabled: "Į_Add Section is disabled because the maximum number of allowed sections has been reached._š",
				titleAdd: "Pridėti skiltį",
				titleAddHome: "Į_Add Home Section_š",
				titleEdit: "Redaguoti skiltį",
				step: "Žingsnis",
				stepMainStageExplain: "Į_Main Stage Content_š",
				stepPanelExplain: "Į_Content_š",
				stepMainStageNextTooltip: "Redaguokite skilties pavadinimą ir pasirinkite pagrindinės srities turinį",
				step2NextTooltip: "Įveskite skilties pavadinimą ir %LAYOUT-TYPE% turinį",
				stepNextTooltipNext: "pereiti į kitą žingsnį",
				stepNextTooltipAdd: "pridėti skiltį",
				firstAddExplain: "Į_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._š",
				firstAddLeanMore: "Į_Learn More_š",
				titlePlaceholder: "Skilties pavadinimas..."
			},
			addEditViewText: {
				editorPlaceholder: "Čia pridėkite teksto, nuorodų ir mažų grafinių elementų.",
				editorActionsTitle: "Pagrindinės srities veiksmai",
				editorActionsHelpDescr: "Į_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._š"
			},
			organizePopup: {
				title: "Tvarkyti",
				lblHeader: "Nuvilkite skiltis į norimas vietas ir sutvarkykite turinį.",
				lblColTitle: "Pavadinimas",
				lblColPubDate: "Publikavimo data",
				lblColStatus: "Būsena",
				checkDisplayReverse: "Rodyti skiltis atvirkštine tvarka",
				btnApplyWarning: "Į_Confirm deletion of %NB% section(s)_š",
				deleteTooltip: "Pašalinti",
				firstSectionExplain: "(Pagrindinės skilties perkelti negalima)"
			},
			exportData: {
				btn: "Į_Export content_š",
				tooltip: "Į_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._š"
			},
			help: {
				lblHelp: "Pagalba",
				lblAdd: "Pridėti skiltį",
				lblSettings: "Nuostatos",
				lblOrga: "Tvarkyti turinį",
				lblEdit: "Pakeitimai",
				lblPublish: "Bendrinti",
				lblTips: "Į_Tips_š",
				lblMore: "Norite daugiau?",
				lblLink: "Apsilankykite pristatomųjų žemėlapių svetainėje.",
				content1Div1: "Kurdami pasakojimą galite integruoti įvairius stilius. Paprastai <strong>%LAYOUT_TITLE%</strong> pateikiami tekstas, vaizdai ir video, o žemėlapiai dažniausiai būna <strong>pagrindinėje srityje</strong>. Tačiau, naudodami %TPL_NAME%, ir pagrindinėje srityje galite pridėti vaizdų, diagramų ir video.",
				content1Div2: "Pridėdami skilčių galite labai įvairiai adaptuoti savo pasakojimą. Kai skaitytojai slinks %LAYOUT_TITLE% tekstu, gali būti prastumiamas pagrindinėje srityje esantis žemėlapis ir keičiamas jo mastelis, kad būtų rodomi pagrindiniai taškai arba gali būti automatiškai perjungiami nauji žemėlapiai ir vaizdai, sustiprinantys jūsų pasakojimo įspūdį.",
				content2Div1: "Čia galite koreguoti, kaip atrodys %TPL_NAME%. Čia priderinamos spalvų schemos, maketai ir pločiai.",
				content2Div2: "Be to, galite pridėti Facebook, Twitter ir Bitly bendrinimo nuorodas, kad skaitytojai galėtų lengvai išplatinti %TPL_NAME% kitiems.",
				content3Div1: "Į_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._š",
				content4Div1: "Radote klaidą ar norite pakeisti duomenis? Nesirūpinkite. Norėdami pakeisti turinį, ieškokite aplikacijos redagavimo piktogramos. Kurdami %TPL_NAME% daug kartų naudosite redagavimo funkcijas!",
				content5Div1: "%TPL_NAME% išsaugomas %PORTAL% paskyroje ir pagal numatytuosius nustatymus yra privatus. Galite nuspręsti, ar bendrinti jį organizacijoje, ar pateikti visam pasauliui. Kad galėtumėte lengvai bendrinti, mes netgi pateikiame sutrumpintą URL.",
				content6Div1: "Į_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._š",
				content6Div2: "Į_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_š"
			},
			landing: {
				lblAdd: "Į_What do you want to call your Map Journal?_š",
				phAdd: "Į_Enter your title..._š",
				lblOR: "Arba",
				lblHelp: "Susipažinkite"
			},
			firstAddSplash: {
				thisis: "Tai yra"
			}
        }
    })

);
