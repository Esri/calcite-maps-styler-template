define(
	({
		viewer: {
			loading: {
				step1: "SE ÎNCARCĂ APLICAŢIA",
				step2: "SE ÎNCARCĂ DATELE",
				step3: "INIŢIALIZARE",
				fail: "Ne pare rău, încărcarea Swipe a eşuat",
				loadBuilder: "SE COMUTĂ LA MODUL INSTRUMENT DE CĂUTARE",
				redirectSignIn: "Ă_REDIRECTING TO SIGN-IN PAGE_ș",
				redirectSignIn2: "Ă_(you will be redirected here after sign-in)_ș",
				failButton: "Reîncercare"
			},
			errors: {
				boxTitle: "A apărut o eroare",
				portalSelf: "Eroare fatală: Eşec la obţinerea configuraţiei portalului",
				invalidConfig: "Eroare gravă: Configurare incorectă",
				invalidConfigNoWebmap: "Eroare gravă: Configurare incorectă (nu a fost specificată nicio hartă web)",
				createMap: "Imposibil de creat harta",
				invalidApp: "Eroare gravă: Imposibil de încărcat aplicaţia",
				initMobile: "Bine aţi venit la aplicaţia web Swipe. Aplicaţia nu este configurată. Instrumentul de creare interactiv nu este suportat pe dispozitive mobile.",
				noBuilderIE8: "Instrumentul interactiv de creare a Swipe nu este suportat în versiunile Internet Explorer mai vechi decât 9.",
				noLayerView: "Bine aţi venit la aplicaţia web Swipe.<br />Aplicaţia nu este configurată încă.",
				appSave: "Eroare la salvarea aplicaţiei web",
				mapSave: "Eroare la salvarea hărţii web",
				notAuthorized: "Nu sunteţi autorizat pentru a accesa această aplicaţie",
				conflictingProjectionsTitle: "Proiecţii în conflict",
				conflictingProjections: "Instrumentul de preluare nu suportă utilizarea a două hărţi cu proiecţii diferite. Deschideţi setările şi utilizaţi o hartă web care foloseşte aceeaşi proiecţie ca şi prima hartă web.",
				cpButton: "Închidere"
			},
			mobileView: {
				hideIntro: "ASCUNDERE PREZENTARE",
				navLeft: "Legendă",
				navMap: "Hartă",
				navRight: "Date"
			},
			desktopView: {
				storymapsText: "O hartă informativă",
				builderButton: "Comutare la modul Instrument de creare",
				bitlyTooltip: "Obţinere link scurt către aplicaţie"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURARE APLICAŢIE",
				buttonSave: "SALVARE",
				buttonHelp: "Ă_Help_ș",
				buttonShare: "Ă_Share_ș",
				buttonDiscard: "ANULARE",
				buttonSettings: "Setări",
				buttonView: "Mod de vizualizare",
				buttonItem: "Deschidere element aplicaţie web",
				noPendingChange: "Nicio modificare în aşteptare",
				unSavedChangeSingular: "O modificare nesalvată",
				unSavedChangePlural: "modificări nesalvate",
				popoverDiscard: "Sigur renunţaţi la toate modificările nesalvate?",
				yes: "Da",
				no: "Nu",
				popoverOpenViewExplain: "Prin deschiderea vizualizatorului veţi pierde toate modificările nesalvate",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Anulare",
				popoverSaveWhenDone: "Nu uitaţi să salvaţi când aţi terminat",
				closeWithPendingChange: "Sigur confirmaţi acţiunea? Se vor pierde modificările.",
				gotIt: "Ok",
				savingApplication: "Se salvează aplicaţia",
				saveSuccess: "S-a reuşit salvarea aplicaţiei",
				saveError: "Salvare nereuşită, încercaţi din nou",
				saveError2: "Ă_Save failed due to an invalid html tag in a name or description_ș",
				saveError3: "Ă_The title can't be empty_ș",
				signIn: "Conectaţi-vă la un cont în",
				signInTwo: "pentru a salva aplicaţia."
			},
			header:{
				editMe: "Editează-mă!",
				templateTitle: "Setare titlu şablon",
				templateSubtitle: "Setare subtitlu şablon"
			},
			settings: {
				settingsHeader: "Setări aplicaţie",
				modalCancel: "Anulare",
				modalApply: "Aplicare"
			},
			settingsColors: {
				settingsTabColor: "Temă",
				settingsColorExplain: "Alegeţi o temă pentru aplicaţie sau definiţi propriile dvs. culori.",
				settingsLabelColor: "Culorile pentru fundalul antetului şi panoului lateral"
			},
			settingsHeader: {
				settingsTabLogo: "Antet",
				settingsLogoExplain: "Particularizaţi sigla antetului (maximum 250 x 50px).",
				settingsLogoEsri: "Sigla Esri",
				settingsLogoNone: "Fără siglă",
				settingsLogoCustom: "Siglă particularizată",
				settingsLogoCustomPlaceholder: "Adresă URL imagine",
				settingsLogoCustomTargetPlaceholder: "Link de accesare cu clic",
				settingsLogoSocialExplain: "Personalizaţi linkul din colţul din dreapta sus al antetului.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Acest obiect spaţial a fost dezactivat de administrator"
			},
			settingsExtent: {
				settingsTabExtent: "Extindere",
				settingsExtentExplain: "Setaţi extinderea iniţială prin harta interactivă de mai jos.",
				settingsExtentExplainBottom: "Extinderea pe care o definiţi va modifica extinderea iniţială a hărţii web.Reţineţi că, dacă efectuaţi o serie Swipe, extinderea respectivă nu va fi utilizată.",
				settingsExtentDateLineError: "Ă_The extent cannot be across the meridian of 180ï¿½ longitude_ș",
				settingsExtentDateLineError2: "Eroare la calculul extinderii",
				settingsExtentDrawBtn: "Trasare extindere nouă",
				settingsExtentModifyBtn: "Editare extindere curentă",
				settingsExtentApplyBtn: "Aplicare pe harta principală",
				settingsExtentUseMainMap: "Utilizare extindere principală a hărţii"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nu există date de afişat!",
				noDataExplain: "Atingeţi harta pentru a selecta un obiect spaţial şi reveniţi aici",
				noDataMap: "Nu există date pentru această hartă",
				noPopup: "Nu a fost găsită nicio fereastră pop-up pentru acest obiect spaţial"
			},
			mobileLegend: {
				noLegend: "Nicio legendă de afişat."
			},
			swipeSidePanel: {
				editTooltip: "Setare descrierea panou lateral",
				editMe: "Editează-mă!",
				legendTitle: "Legendă"
			},
			infoWindow: {
				noFeature: "Nu există date de afişat",
				noFeatureExplain: "Atingeţi harta pentru selectarea unui obiect spaţial"
			},
			settingsLayout: {
				settingsTabLayout: "Stil Swipe",
				settingsLayoutExplain: "Alegeţi un stil pentru instrumentul Swipe.",
				settingsLayoutSwipe: "Bară verticală",
				settingsLayoutSpyGlass: "Ochean",
				settingsLayoutSelected: "Configuraţie selectată",
				settingsLayoutSelect: "Selectaţi această configuraţie",
				settingsSaveConfirm: "Unele modificări necesită salvarea şi reîncărcarea aplicaţiei"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tip preluare",
				settingsDataModelExplainSwipe: "Ce doriţi să preia utilizatorii?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Alegeţi stratul tematic sau harta web care va apărea în ochean.",
				settingsDataModelOneMap: "Un strat tematic într-o hartă Web",
				settingsDataModel1Explain: "Selectaţi stratul tematic care doriţi să fie preluat",
				settingsDataModel1Warning: "Dacă stratul tematic este ascuns de straturi tematice superioare, preluarea nu va avea niciun efect.",
				settingsDataModel1SpyGlassExplain: "Selectaţi stratul tematic care să apară în ochean.",
				settingsDataModelTwoMaps: "Două hărţi web",
				settingsDataModelLayerIds: "ID-uri strat tematic de hartă web",
				settingsDataModelSelected: "Tip selectat",
				settingsDataModelWebmapSwipeId1: "ID hartă web dreapta",
				settingsDataModelWebmapSwipeId2: "ID hartă web stânga",
				settingsDataModelWebmapGlassId1: "ID hartă web principală",
				settingsDataModelWebmapGlassId2: "ID hartă web din ochean",
				settingsDataModelSelect: "Selectaţi acest tip",
				settingsDataModel2Explain: "Swipe cu altă hartă web.",
				settingsDataModel2SpyGlassExplain: "Aduceţi în prim-plan altă hartă web.",
				settingsDataModel2HelpTitle: "Cum găsesc ID-ul unei hărţi web?",
				settingsDataModel2HelpContent: "Copiaţi şi lipiţi cifre după semnul „=” în URL-ul hărţii web",
				switchMaps: "Ă_Switch maps_ș",
				browseWebMaps: "Ă_Browse web maps_ș"
			},
			settingsLegend: {
				settingsTabLegend: "Configuraţie aplicaţie",
				settingsLegendExplain: "Selectaţi setările pentru configuraţia aplicaţiei.",
				settingsLegendEnable: "Activare legendă",
				settingsDescriptionEnable: "Activare descriere",
				settingsBookmarksEnable: "Activare serii Swipe",
				settingsPopupDisable: "Activare pop-up",
				settingsLocationSearchEnable: "Activare căutare în localizator",
				settingsGeolocatorEnable: "Activare localizator geografic",
				settingsLegendHelpContent: "Pentru a rafina conţinutul legendei, utilizaţi cuprinsului aplicaţiei de vizualizare a hărţilor web din ArcGIS.com (Ascunderea în legendă)",
				settingsSeriesHelpContent: "Seria de preluare reprezintă o opţiune de navigare cu file care ghidează vizualizatorul către o anumită extindere şi afişează un titlu şi text descriptiv în panoul lateral. În timpul activării iniţiale, marcajele din hărţile Web vor fi importate şi utilizate pentru a popula în prealabil bara seriei. Dezactivarea opţiunii de serie dezactivează bara seriei, dar configuraţia seriei se păstrează pentru utilizare ulterioară.", 
				settingsSeriesHelpContent2: "Seriile de acţiuni vă permit să creaţi şi să editaţi o selecţie de locaţii împreună cu titlurile şi textele care le însoţesc. Dacă harta dvs. web conţine semne de carte, acestea vor fi afişate. Puteţi dezactiva seriile, însă configuraţia va fi păstrată pentru a fi utilizată în viitor.",
				settingsSeriesHelpLink: "Vedeţi aici un exemplu de aplicaţie cu o serie de acţiuni",
				preview: "Previzualizare interfaţă cu utilizatorul",
				settingsLocateButtonExplain: "Această funcţionalitate este acceptată pe majoritatea dispozitivelor mobile şi browserelor desktop (inclusiv Internet Explorer 9+).",
				settingsLocateButton: "Ă_Enable a 'Locate' button on supported browsers_ș",
				settingsAddressSearch: "Activare instrument de căutare adrese"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Mesaj pop-up",
				settingsSwipePopupExplain: "Personalizarea aspectului antetului ferestrelor pop-up pentru a ajuta utilizatorul să asocieze ferestrele pop-up cu straturi tematice de hărţi.",
				settingsSwipePopupSwipe1: "Harta din stânga",
				settingsSwipePopupSwipe2: "Harta din dreapta",
				settingsSwipePopupGlass1: "Harta principală",
				settingsSwipePopupGlass2: "Harta din ochean",
				settingsSwipePopupTitle: "Titlu antet",
				settingsSwipePopupColor: "Culoare antet"
			},
			initPopup: {
				initHeader: "Ă_Welcome to the Swipe/Spyglass Builder_ș",
				modalNext: "Înainte",
				modalPrev: "Anteriorul",
				modalApply: "Deschidere aplicaţie"
			},
			seriesPanel: {
				title: "Titlu",
				descr: "Descriere",
				discard: "Eliminare semn de carte",
				saveExtent: "Setare extindere semn de carte",
				discardDisabled: "Nu puteţi elimina acest semn de carte. Seriile Swipe pot fi dezactivate din Setări."
			},
			helpPopup: {
				title: "Ă_Help_ș",
				close: "Ă_Close_ș",
				tab1: {
					div1: "Ă_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._ș",
					div2: "Ă_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ș",
					div3: "Ă_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._ș"
				}
			},
			share: {
				firstSaveTitle: "Ă_Application successfully saved_ș",
				firstSaveHeader: "Ă_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._ș",
				firstSaveA1: "Ă_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_ș",
				firstSaveA1bis: "Ă_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._ș",
				firstSaveQ2: "Ă_Is my Application shared?_ș",
				firstSaveA2: "Ă_Currently your Application is not shared. To share it, use the SHARE button._ș",
				shareTitle: "Ă_Share your Application_ș",
				sharePrivateHeader: "Ă_Your Application is not shared, would you like to share it?_ș",
				sharePrivateBtn1: "Ă_Share publicly_ș",
				sharePrivateBtn2: "Ă_Share with my Organization_ș",
				sharePrivateProgress: "Ă_Sharing in progress..._ș",
				sharePrivateErr: "Ă_Sharing failed, try again or_ș",
				sharePrivateOk: "Ă_Sharing updated successfully, loading..._ș",
				shareStatus1: "Ă_Application is not saved_ș",
				shareStatus2: "Ă_Application is shared publicly_ș",
				shareStatus3: "Ă_Application is shared within the organization_ș",
				shareStatus4: "Ă_Application is not shared_ș",
				sharePreviewAsUser: "Ă_Preview_ș",
				shareHeader1: "Ă_Your Application is <strong>publicly accessible</strong>._ș",
				shareHeader2: "Ă_Your Application is accessible by your organization members (login is required)._ș",
				shareLinkHeader: "Ă_Share the Application with your audience_ș",
				shareLinkOpen: "Ă_OPEN_ș",
				learnMore: "Ă_Learn more_ș",
				shareQ1Opt1: "Ă_How do I keep the Application private?_ș",
				shareQ1Opt2: "Ă_How do I keep the Application private or share it publicly?_ș",
				shareA1: "Ă_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._ș",
				shareA1bis: "Ă_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._ș",
				shareQ2: "Ă_How do I edit the Application later?_ș",
				shareQ2bis: "Ă_How do I get back to the authoring interface?_ș",
				shareA2div1: "Ă_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._ș",
				shareA2div2: "Ă_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_ș",				
				shareQ3: "Ă_Where is the data stored?_ș",
				shareA3: "Ă_The Application configuration is stored in this web application item</a>._ș",
				shareWarning: "Ă_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ș",
 				shareWarningWith1: "Ă_publicly_ș",
 				shareWarningWith2: "Ă_publicly and with the Organization_ș"
			},
			directCreation: {
				header: "Ă_Welcome to the Swipe/Spyglass Builder_ș",
				mapPickHeader: "Ă_To get started, please input a valid web map id, or use the search button to browse web maps._ș",
				launchBuilder: "Ă_Launch Builder_ș"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Ă_My Organization_ș",
					onlineLabel: "Ă_ArcGIS Online_ș",
					contentLabel: "Ă_My Content_ș",
					favoritesLabel: "Ă_My Favorites_ș"
				},
				title: "Ă_Select Web Map_ș",
				searchTitle: "Ă_Search_ș",
				ok: "Ă_Ok_ș",
				cancel: "Ă_Cancel_ș",
				placeholder: "Ă_Enter search term_ș"
			}
		}
    })
);