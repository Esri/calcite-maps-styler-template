define(
	 ({
		builder: {
			layouts: {
				mainStage: "Galvenais posms",
				sideTitle: "Sānu panelis",
				sideDescr: "Izkārtojums ar tekstu bagātinātam stāstam, kurā skaidrā un precīzā ziņojumā ir profesionāli kombinēti fotoattēli, video un kartes.",
				floatTitle: "Peldošais panelis",
				floatDescr: "Izkārtojums, kas pievērš uzmanību jūsu kartogrāfijai, vienlaikus stāsta pavēstīšanai piedāvājot caurspīdīgu īsa formāta teksta paneli."
			},
			common: {
				lblStatus1: "Publicēts",
				lblStatus2: "Skice",
				lblStatus3: "Paslēpts"
			},
			settingsLayoutOptions: {
				title: "Izkārtojuma opcijas",
				cfgLeft: "Pa kreisi",
				cfgRight: "Pa labi",
				cfgSmall: "Mazs",
				cfgMedium: "Vidējs",
				cfgLarge: "Liels",
				socialLinksLabel: "Katras sadaļas apakšā parādīt koplietošanas saites",
				socialLinksDescr: "Tas sniedz lasītājiem iespēju veidot atsauces uz jūsu %TPL_NAME%, kā arī reklamēt konkrētas šī vienuma sadaļas. Piemēram, ja izmantosit sadaļu koplietošanas ikonu, lasītāji nokļūs šajā konkrētajā %TPL_NAME% sadaļā, nevis jūsu stāsta sākumā. Jūsu lasītāji var izmantot virsraksta sadaļā esošo sociālās multivides saiti, lai reklamētu visu jūsu %TPL_NAME% (galvenes cilne), kā arī varat veicināt viņu nokļūšanu %TPL_NAME% sākumā."
			},
			initPopup: {
				title: "Laipni lūdzam"
			},
			addEditPopup: {
				disabled: "ķ_Add Section is disabled because the maximum number of allowed sections has been reached._ū",
				titleAdd: "Pievienot sadaļu",
				titleAddHome: "ķ_Add Home Section_ū",
				titleEdit: "Sadaļas rediģēšana",
				step: "Solis",
				stepMainStageExplain: "ķ_Main Stage Content_ū",
				stepPanelExplain: "ķ_Content_ū",
				stepMainStageNextTooltip: "Ievadiet sadaļas virsrakstu un izvēlieties galvenā posma saturu",
				step2NextTooltip: "Ievadiet sadaļas virsrakstu un %LAYOUT-TYPE% saturu",
				stepNextTooltipNext: "lai pārietu uz nākamo soli",
				stepNextTooltipAdd: "lai pievienotu sadaļu",
				firstAddExplain: "ķ_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ū",
				firstAddLeanMore: "ķ_Learn More_ū",
				titlePlaceholder: "Sadaļas virsraksts..."
			},
			addEditViewText: {
				editorPlaceholder: "Šeit pievienojiet tekstu, saites un maza izmēra grafikas.",
				editorActionsTitle: "Galvenā posma darbības",
				editorActionsHelpDescr: "ķ_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ū"
			},
			organizePopup: {
				title: "Organizēšana",
				lblHeader: "Velciet un nometiet stāstījuma sadaļas, lai organizētu saturu.",
				lblColTitle: "Virsraksts",
				lblColPubDate: "Publicēšanas datums",
				lblColStatus: "Statuss",
				checkDisplayReverse: "Parādīt sadaļas apgrieztā secībā",
				btnApplyWarning: "ķ_Confirm deletion of %NB% section(s)_ū",
				deleteTooltip: "Dzēst",
				firstSectionExplain: "(Sākuma sadaļu nevar pārvietot)"
			},
			exportData: {
				btn: "ķ_Export content_ū",
				tooltip: "ķ_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._ū"
			},
			help: {
				lblHelp: "Palīdzība",
				lblAdd: "Pievienot sadaļu",
				lblSettings: "Iestatījumi",
				lblOrga: "Organizēt saturu",
				lblEdit: "Rediģējumi",
				lblPublish: "Koplietošana",
				lblTips: "ķ_Tips_ū",
				lblMore: "Vai vēlaties uzzināt vairāk?",
				lblLink: "Apmeklējiet Story Maps web vietni.",
				content1Div1: "Veidojot stāstījumu, varat integrēt dažādus stilus. <strong>%LAYOUT_TITLE%</strong> parasti ir ietverts teksts, attēli un video, bet kartes parasti ir izvietotas <strong>galvenajā posmā</strong>. Tomēr %TPL_NAME% ļauj jums rādīt attēlus, diagrammas un video arī galvenajā posmā.",
				content1Div2: "Sadaļu pievienošana ļauj precīzi pielāgot stāstījuma iespējas. Kad lasītāji ritina jūsu tekstu %LAYOUT_TITLE%, karte galvenajā posmā var panoramēt vai tālummainīt līdz galvenajiem punktiem, vai jaunas kartes un attēlus var pārslēgt automātiski, lai atbalstītu jūsu ziņojumu.",
				content2Div1: "Šeit varat pielāgot sava %TPL_NAME% izskatu. Šeit tiek uzlabotas visas krāsu shēmas, izkārtojumi un platumi.",
				content2Div2: "Koplietošanas saites varat arī pievienot vietnēs Facebook, Twitter un Bitly, lai lasītāji varētu viegli pavēstīt par jūsu %TPL_NAME% citiem lietotājiem.",
				content3Div1: "ķ_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ū",
				content4Div1: "Atradāt kļūdu vai vēlaties mainīt savus materiālus? Tas ir viegli paveicams! Lai saturā veiktu izmaiņas, aplikācijā atrodiet rediģēšanas ikonu. Izstrādājot %TPL_NAME%, rediģēšanas funkciju nāksies bieži izmantot.",
				content5Div1: "Jūsu %TPL_NAME% ir saglabāts jūsu portāla %PORTAL% kontā un ir konfidenciāls pēc noklusējuma. Varat izvēlēties to kopīgot ar savu organizāciju vai padarīt pieejamu visiem lietotājiem. Mēs pat nodrošināsim jums saīsinātu vietrādi URL, lai koplietošana būtu vienkārša.",
				content6Div1: "ķ_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ū",
				content6Div2: "ķ_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ū"
			},
			landing: {
				lblAdd: "ķ_What do you want to call your Map Journal?_ū",
				phAdd: "ķ_Enter your title..._ū",
				lblOR: "Vai",
				lblHelp: "Iepazīties"
			},
			firstAddSplash: {
				thisis: "Šis ir"
			}
        }
    })

);
