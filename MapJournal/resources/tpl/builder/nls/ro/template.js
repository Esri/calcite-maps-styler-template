define(
	 ({
		builder: {
			layouts: {
				mainStage: "Nivelul principal",
				sideTitle: "Panou lateral",
				sideDescr: "O configuraţie pentru o descriere cu mult text, care excelează în combinarea fotografiilor cu videoclipuri şi hărţi într-un mesaj cu un obiect clar.",
				floatTitle: "Panou mobil",
				floatDescr: "O configuraţie care pune accentul pe cartografie, permiţând şi un panoul transparent cu un text în formă scurtă pentru a ajuta la relatarea informaţiilor."
			},
			common: {
				lblStatus1: "Publicat",
				lblStatus2: "Schiţă",
				lblStatus3: "Ascuns"
			},
			settingsLayoutOptions: {
				title: "Opţiuni configuraţie",
				cfgLeft: "Stânga",
				cfgRight: "Dreapta",
				cfgSmall: "Mic",
				cfgMedium: "Mediu",
				cfgLarge: "Mare",
				socialLinksLabel: "Afişare linkuri de partajare în partea de jos a fiecărei secţiuni",
				socialLinksDescr: "Acest lucru le permite cititorilor să consulte şi să promoveze anumite secţiuni din %TPL_NAME%. De exemplu, dacă utilizaţi o pictogramă pentru partajare de secţiuni, cititorii vor ajunge în secţiunea %TPL_NAME% respectivă şi nu la începutul informaţiilor. Cititorii pot utiliza linkul pentru servicii de socializare din secţiunea pentru titlu pentru a promova întregul %TPL_NAME% (fila titlului) şi pot ajunge la începutul %TPL_NAME%."
			},
			initPopup: {
				title: "Bine aţi venit la"
			},
			addEditPopup: {
				disabled: "Ă_Add Section is disabled because the maximum number of allowed sections has been reached._ș",
				titleAdd: "Adăugare secţiune",
				titleAddHome: "Ă_Add Home Section_ș",
				titleEdit: "Editare secţiune",
				step: "Etapă",
				stepMainStageExplain: "Ă_Main Stage Content_ș",
				stepPanelExplain: "Ă_Content_ș",
				stepMainStageNextTooltip: "Introduceţi titilul secţiunii şi selectaţi conţinutul pentru nivelul principal",
				step2NextTooltip: "Introduceţi titlul secţiunii şi conţinutul %LAYOUT-TYPE%",
				stepNextTooltipNext: "pentru a trece la paşii următori",
				stepNextTooltipAdd: "pentru a adăuga secţiunea",
				firstAddExplain: "Ă_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ș",
				firstAddLeanMore: "Ă_Learn More_ș",
				titlePlaceholder: "Titlu secţiune..."
			},
			addEditViewText: {
				editorPlaceholder: "Adăugaţi text, linkuri şi mici imagini aici.",
				editorActionsTitle: "Acţiuni nivel principal",
				editorActionsHelpDescr: "Ă_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ș"
			},
			organizePopup: {
				title: "Organizare",
				lblHeader: "Trageţi şi plasaţi secţiuni pentru a vă organiza conţinutul.",
				lblColTitle: "Titlu",
				lblColPubDate: "Data publicării",
				lblColStatus: "Stare",
				checkDisplayReverse: "Afişare secţiuni în ordine inversă",
				btnApplyWarning: "Ă_Confirm deletion of %NB% section(s)_ș",
				deleteTooltip: "Ştergere",
				firstSectionExplain: "(Secţiunea din pagina principală nu poate fi eliminată)"
			},
			exportData: {
				btn: "Ă_Export content_ș",
				tooltip: "Ă_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._ș"
			},
			help: {
				lblHelp: "Ajutor",
				lblAdd: "Adăugare secţiune",
				lblSettings: "Setări",
				lblOrga: "Organizare conţinut",
				lblEdit: "Editări",
				lblPublish: "Partajare",
				lblTips: "Ă_Tips_ș",
				lblMore: "Doriţi mai mult?",
				lblLink: "Vizitaţi site-ul web cu hărţi informative.",
				content1Div1: "La alcătuirea unei relatări, puteţi integra o multitudine de stiluri. <strong>%LAYOUT_TITLE%</strong> conţine de regulă text, imagini şi videoclipuri, în timp ce hărţile tind să se afle în <strong>Nivelul principal</strong>. Cu toate acestea, %TPL_NAME% vă permite să utilizaţi şi imagini de obiecte spaţiale, diagrame şi videoclipuri în nivelul principal.",
				content1Div2: "Adăugarea de secţiuni vă permite să vă particularizaţi cu adevărat experienţa de relatare. Pe măsură ce cititorii derulează textul %LAYOUT_TITLE%, o hartă din Nivelul principal poate fi panoramată sau transfocată în punctele cheie sau noi hărţi şi imagini pot fi comutate automat în sprijinul mesajului.",
				content2Div1: "Aici puteţi ajusta modul în care se afişează %TPL_NAME%. Aici puteţi rafina scheme de culori, configuraţii şi dimensiuni.",
				content2Div2: "De asemenea, puteţi adăuga linkuri către Facebook, Twitter şi Bitly, astfel încât cititorii să poată răspândi uşor %TPL_NAME% către alţii.",
				content3Div1: "Ă_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ș",
				content4Div1: "Aţi găsit o greşeală sau doriţi să modificaţi materialul? Nicio problemă. Căutaţi în aplicaţie pictograma de editare pentru modifica conţinutul. Pe măsură ce dezvoltaţi %TPL_NAME%, veţi utiliza de multe ori funcţiile de editare!",
				content5Div1: "%TPL_NAME% este salvat în contul dvs. %PORTAL% şi este privat în mod implicit. Dvs. puteţi decide să partajaţi relatarea în cadrul organizaţiei sau să o deschideţi publicului larg. Vă oferim chiar şi o adresă URL stabilă, scurtată, pe care să o puteţi partaja mai uşor.",
				content6Div1: "Ă_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ș",
				content6Div2: "Ă_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ș"
			},
			landing: {
				lblAdd: "Ă_What do you want to call your Map Journal?_ș",
				phAdd: "Ă_Enter your title..._ș",
				lblOR: "Sau",
				lblHelp: "Efectuaţi un tur"
			},
			firstAddSplash: {
				thisis: "Aceasta este"
			}
        }
    })

);
