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
				socialLinksDescr: "ķ_This enables readers to reference and promote specific sections of your %TPL_NAME%. For instance, if you use a sections share icon, readers will land at that specific %TPL_NAME% section rather than the beginning of your story. Your readers can use the social media link in the title section to promote your entire %TPL_NAME% (header tab) and have them land at the start of the %TPL_NAME%._ū"
			},
			settingsLayoutFonts: {
				title: "Fonti",
				defaultLbl: "Noklusējums",
				sectionTitleLbl: "ķ_Section title_ū",
				sectionContentLbl: "ķ_Section content_ū"
			},
			initPopup: {
				title: "Laipni lūdzam"
			},
			addEditPopup: {
				disabled: "Pievienot sadaļu ir atspējots, jo ir sasniegs maksimālais atļauto sadaļu skaits.",
				titleAdd: "Pievienot sadaļu",
				titleAddHome: "Sadaļas Mājas pievienošana",
				titleEdit: "Sadaļas rediģēšana",
				step: "Solis",
				stepMainStageExplain: "Galvenā posma saturs",
				stepPanelExplain: "Saturs",
				stepMainStageNextTooltip: "Ievadiet sadaļas virsrakstu un izvēlieties galvenā posma saturu",
				stepMainStageNextTooltip2: "Atlasiet galvenā posma saturu",
				step2NextTooltip: "Ievadiet sadaļas virsrakstu un %LAYOUT-TYPE% saturu",
				stepNextTooltipNext: "lai pārietu uz nākamo soli",
				stepNextTooltipAdd: "lai pievienotu sadaļu",
				firstAddExplain: "Pirmā sadaļa ir sadaļa Mājas. Uztveriet to kā sava stāsta vāka lapu. Tikko norādītais virsraksts tiks attēlots lielā fontā.",
				firstAddLeanMore: "Uzzināt vairāk",
				titlePlaceholder: "Sadaļas virsraksts..."
			},
			addEditViewText: {
				editorPlaceholder: "Šeit pievienojiet tekstu, saites un maza izmēra grafikas.",
				editorActionsTitle: "Galvenā posma darbības",
				editorActionsHelpDescr: "Izmantojiet šīs vadīklas, lai izveidotu saites, kas tiks mainītas galvenajā posmā. Piemēram, kad lietotājs noklikšķinās uz saites, iespējams, vēlēsieties mērogmainīt karti līdz konkrētam izvietojumam, parādīt citu web karti vai attēlu.",
				mainStageDisabled: "Galvenā posma darbības ir atspējotas, ja redaktors ir maksimizēts"
			},
			organizePopup: {
				title: "Organizē",
				lblHeader: "Velciet un nometiet stāstījuma sadaļas, lai organizētu saturu.",
				lblColTitle: "Virsraksts",
				lblColPubDate: "Publicēšanas datums",
				lblColStatus: "Statuss",
				checkDisplayReverse: "Parādīt sadaļas apgrieztā secībā",
				btnApplyWarning: "Apstipriniet %NB% sadaļu dzēšanu",
				deleteTooltip: "Dzēst",
				firstSectionExplain: "(Sākuma sadaļu nevar pārvietot)",
				exportMainStage: "Galvenā posma saturs",
				exportPanel: "Paneļa saturs",
				exportActions: "Galvenā posma darbības"
			},
			exportData: {
				btn: "Eksportēt saturu",
				tooltip: "Satura eksportēšana ļauj skatīt un izveidot satura rezerves kopiju gadījumam, ja to nejauši izdzēšat. Vienkārši nokopējiet un ielīmējiet lapas saturu jebkurā teksta redaktorā."
			},
			help: {
				lblHelp: "Palīdzība",
				lblAdd: "Pievienot sadaļu",
				lblSettings: "Iestatījumi",
				lblOrga: "Organizēt saturu",
				lblEdit: "Rediģējumi",
				lblPublish: "Koplietošana",
				lblTips: "Padomi",
				lblMore: "Vai vēlaties uzzināt vairāk?",
				lblLink: "Apmeklējiet Esri Story Maps web vietni.",
				content1Div1: "Veidojot stāstījumu, varat integrēt dažādus stilus. <strong>%LAYOUT_TITLE%</strong> parasti ir ietverts teksts, attēli un video, bet kartes parasti ir izvietotas <strong>galvenajā posmā</strong>. Tomēr %TPL_NAME% ļauj jums rādīt attēlus, diagrammas un video arī galvenajā posmā.",
				content1Div2: "Sadaļu pievienošana ļauj precīzi pielāgot stāstījuma iespējas. Kad lasītāji ritina jūsu tekstu %LAYOUT_TITLE%, karte galvenajā posmā var panoramēt vai tālummainīt līdz galvenajiem punktiem, vai jaunas kartes un attēlus var pārslēgt automātiski, lai atbalstītu jūsu ziņojumu.",
				content2Div1: "ķ_Here is where you can adjust how your %TPL_NAME% looks. Color schemes, layouts, widths, and fonts are all refined here._ū",
				content2Div2: "Koplietošanas saites varat arī pievienot vietnēs Facebook, Twitter un Bitly, lai lasītāji varētu viegli pavēstīt par jūsu %TPL_NAME% citiem lietotājiem.",
				content3Div1: "Jūsu izveidotais saturs ir sakārtots sadaļās. Varat izveidot tik sadaļu, cik vēlaties (iedomājieties, ka tās ir nelielas nodaļas). Šo nodaļu plūsma ir svarīga, tāpēc, izmantojot kārtošanas funkciju, sadaļas varat pēc vajadzības pārkārtot vai dzēst.",
				content4Div1: "Atradāt kļūdu vai vēlaties mainīt savus materiālus? Tas ir viegli paveicams! Lai saturā veiktu izmaiņas, aplikācijā atrodiet rediģēšanas ikonu. Izstrādājot %TPL_NAME%, rediģēšanas funkciju nāksies bieži izmantot.",
				content5Div1: "Jūsu %TPL_NAME% ir saglabāts jūsu portāla %PORTAL% kontā un ir konfidenciāls pēc noklusējuma. Varat izvēlēties to kopīgot ar savu organizāciju vai padarīt pieejamu visiem lietotājiem. Mēs pat nodrošināsim jums saīsinātu vietrādi URL, lai kopīgošana būtu vienkāršāka.",
				content6Div1: "Sākuma sadaļas virsraksts ir arī jūsu žurnāla virsraksts; iedomājieties, ka sākuma sadaļa ir jūsu stāstījuma titullapa. Kad lietotāji pārvietosies žurnālā, viņiem vienmēr būs redzams sākuma sadaļas virsraksts.",
				content6Div2: "%LAYOUT_TITLE% nav jābūt tikai tekstam, apsveriet iespēju iekļaut foto un video, lai stāstu padarītu dzīvāku un sadalītu sīkāk garas teksta sadaļas."
			},
			landing: {
				lblAdd: "Kā vēlaties nosaukt savu karšu žurnālu?",
				phAdd: "Ievadiet nosaukumu...",
				lblOR: "Vai",
				lblHelp: "Iepazīties"
			},
			firstAddSplash: {
				thisis: "Šis ir",
				lblMain: "Šis ir %BR% galvenais posms"
			}
        }
    })

);
