define(
	({
		viewer: {
			loading: {
				step1: "ĮKELIAMA APLIKACIJA",
				step2: "ĮKELIAMI DUOMENYS",
				step3: "PRADEDAMA",
				fail: "Atsiprašome keitiklio krovimas nepavyko",
				loadBuilder: "PERSIJUNGIAMA Į KŪRIMO REŽIMĄ",
				redirectSignIn: "Į_REDIRECTING TO SIGN-IN PAGE_š",
				redirectSignIn2: "Į_(you will be redirected here after sign-in)_š",
				failButton: "Pakartoti"
			},
			errors: {
				boxTitle: "Įvyko klaida",
				portalSelf: "Kritinė klaida: Nepavyko gauti portalo konfigūracijos",
				invalidConfig: "Kritinė klaida: Neteisinga konfigūracija",
				invalidConfigNoWebmap: "Kritinė klaida: Neteisinga konfigūracija (nenurodytas internetinis žemėlapis)",
				createMap: "Žemėlapio sukurti nepavyko",
				invalidApp: "Kritinė klaida: Negalima įkelti aplikacijos",
				initMobile: "Sveiki atvykę į keitiklio internetinę aplikaciją. Aplikacija nesukonfigūruota. Interaktyvus kūrėjas mobiliuosiuose įrenginiuose nepalaikomas.",
				noBuilderIE8: "Keitiklio interaktyvus kūrėjas nepalaikomas žemesnės nei 9 versijos Internet Explorer.",
				noLayerView: "Sveiki atvykę į keitiklio internetinę aplikaciją.<br />Aplikacija dar nesukonfigūruota.",
				appSave: "Klaida įrašant internetinę aplikaciją",
				mapSave: "Klaida įrašant internetinį žemėlapį",
				notAuthorized: "Neturite teisių pasiekti šią aplikaciją",
				conflictingProjectionsTitle: "Nesuderinamos projekcijos",
				conflictingProjections: "Keitiklis nepalaiko dviejų internetinių žemėlapių su skirtingomis projekcijomis. Atidarykite nustatymus ir naudokite internetinį žemėlapį, naudojantį tą pačią projekciją kaip ir pirmasis internetinis žemėlapis.",
				cpButton: "Užverti"
			},
			mobileView: {
				hideIntro: "SLĖPTI ĮŽANGĄ",
				navLeft: "Legenda",
				navMap: "Žemėlapis",
				navRight: "Duomenys"
			},
			desktopView: {
				storymapsText: "Pristatomasis žemėlapis",
				builderButton: "Perjungti į kūrimo būseną",
				bitlyTooltip: "Gauti sutrumpintą aplikacijos nuorodą"
			}
		},
		builder: {
			builder: {
				panelHeader: "APLIKACIJOS KONFIGŪRACIJA",
				buttonSave: "ĮRAŠYTI",
				buttonHelp: "Į_Help_š",
				buttonShare: "Į_Share_š",
				buttonDiscard: "ATSISAKYTI",
				buttonSettings: "Nuostatos",
				buttonView: "Peržiūros būsena",
				buttonItem: "Atverti aplikaciją",
				noPendingChange: "Laukiančių pakeitimų nėra",
				unSavedChangeSingular: "1 neišsaugotas pakeitimas",
				unSavedChangePlural: "neišsaugoti pakeitimai",
				popoverDiscard: "Ar tikrai norite atsisakyti neįrašytų pakeitimų?",
				yes: "Taip",
				no: "Ne",
				popoverOpenViewExplain: "Atverdami peržiūros programą, prarasite visus neįrašytus pakeitimus",
				popoverOpenViewOk: "Gerai",
				popoverOpenViewCancel: "Atšaukti",
				popoverSaveWhenDone: "Užbaigus nepamirškite įrašyti",
				closeWithPendingChange: "Ar tikrai patvirtinate šį veiksmą ? Atlikti pakeitimai bus prarasti.",
				gotIt: "Gerai",
				savingApplication: "Aplikacija įrašoma",
				saveSuccess: "Aplikacija įrašyta sėkmingai",
				saveError: "Įrašyti nepavyko, pabandykite iš naujo",
				saveError2: "Į_Save failed due to an invalid html tag in a name or description_š",
				saveError3: "Į_The title can't be empty_š",
				signIn: "Prisijunkite su paskyra prie",
				signInTwo: "aplikacijai įrašyti."
			},
			header:{
				editMe: "Redaguok !",
				templateTitle: "Nustatyti šablono antraštę",
				templateSubtitle: "Nustatyti šablono poantraštę"
			},
			settings: {
				settingsHeader: "Aplikacijos nuostatos",
				modalCancel: "Atšaukti",
				modalApply: "Vykdyti"
			},
			settingsColors: {
				settingsTabColor: "Apipavidalinimas",
				settingsColorExplain: "Pasirinkite aplikacijos temą arba nustatykite savo spalvas.",
				settingsLabelColor: "Antraštės ir šoninės panelės foninės spalvos"
			},
			settingsHeader: {
				settingsTabLogo: "Antraštė",
				settingsLogoExplain: "Pritaikyti antraštės logotipą (maksimalus dydis: 250 x 50px).",
				settingsLogoEsri: "Esri logotipas",
				settingsLogoNone: "Logotipo nėra",
				settingsLogoCustom: "Savas logo",
				settingsLogoCustomPlaceholder: "Paveikslėlio URL",
				settingsLogoCustomTargetPlaceholder: "Vieno mygtuko paspaudimo nuoroda",
				settingsLogoSocialExplain: "Priderinkite antraštės viršutinę dešinę nuorodą.",
				settingsLogoSocialText: "Tekstas",
				settingsLogoSocialLink: "Nuoroda",
				settingsLogoSocialDisabled: "Šią funkciją išjungė Administratorius"
			},
			settingsExtent: {
				settingsTabExtent: "Aprėptis",
				settingsExtentExplain: "Nustatykite pradinę aprėptį žemiau esančiame interaktyviame žemėlapyje.",
				settingsExtentExplainBottom: "Jūsų nurodyta aprėptis pakeis internetinio žemėlapio pradinę aprėptį. Jei naudojamas žemėlapių sukeitimas, ši aprėptis nebus naudojama.",
				settingsExtentDateLineError: "Į_The extent cannot be across the meridian of 180ï¿½ longitude_š",
				settingsExtentDateLineError2: "Klaida apskaičiuojant aprėptį",
				settingsExtentDrawBtn: "Brėžti naują aprėptį",
				settingsExtentModifyBtn: "Redaguoti esamą aprėptį",
				settingsExtentApplyBtn: "Taikyti pagrindiniame žemėlapyje",
				settingsExtentUseMainMap: "Naudoti pagrindinę žemėlapio aprėptį"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nėra duomenų atvaizdavimui!",
				noDataExplain: "Pasirinkite žemėlapį norėdami pasirinkti elementą ir sugrįžti čia",
				noDataMap: "Nėra duomenų šiam žemėlapiui",
				noPopup: "Šiam elementui nerasta jokių iššokančių langų"
			},
			mobileLegend: {
				noLegend: "Nėra legendos atvaizdavimui."
			},
			swipeSidePanel: {
				editTooltip: "Nustatyti šoninės panelės aprašą",
				editMe: "Redaguok !",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Nėra duomenų atvaizdavimui",
				noFeatureExplain: "Spustelkite žemėlapį, norėdami pasirinkti elementą"
			},
			settingsLayout: {
				settingsTabLayout: "Keitiklio stilius",
				settingsLayoutExplain: "Pasirinkite keitiklio įrankio stilių",
				settingsLayoutSwipe: "Vartikali juosta",
				settingsLayoutSpyGlass: "Didinamasis stiklas",
				settingsLayoutSelected: "Pažymėtas maketas",
				settingsLayoutSelect: "Pažymėkite šį maketą",
				settingsSaveConfirm: "Kai kurie jūsų pakeitimai reikalauja išsaugoti ir perkrauti aplikaciją"
			},
			settingsDataModel: {
				settingsTabDataModel: "Keitiklio tipas",
				settingsDataModelExplainSwipe: "Ką norite, kad vartotojai keistų?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Pasirinkite sluoksnį arba internetinį žemėlapį, kuris atsiras po didinamuoju stiklu",
				settingsDataModelOneMap: "Sluoksnis internetiniame žemėlapyje",
				settingsDataModel1Explain: "Pasirinkite sluoksnį, kurį norite keisti",
				settingsDataModel1Warning: "Jei sluoksnis paslėptas po aukščiau esančiais sluoksniais, keitiklis neturės jokio poveikio.",
				settingsDataModel1SpyGlassExplain: "Pasirinkite sluoksnį, kuris atsiras po didinamuoju stiklu.",
				settingsDataModelTwoMaps: "Du internetiniai žemėlapiai",
				settingsDataModelLayerIds: "Internetinio žemėlapio sluoksnių ID",
				settingsDataModelSelected: "Pasirinktas tipas",
				settingsDataModelWebmapSwipeId1: "Dešiniojo internetinio žemėlapio ID",
				settingsDataModelWebmapSwipeId2: "Kairiojo internetinio žemėlapio ID",
				settingsDataModelWebmapGlassId1: "Pagrindinio internetinio žemėlapio ID",
				settingsDataModelWebmapGlassId2: "Didinamojo stiklo internetinio žemėlapio ID",
				settingsDataModelSelect: "Pasirinkite šį tipą",
				settingsDataModel2Explain: "Keisti kitu internetiniu žemėlapiu.",
				settingsDataModel2SpyGlassExplain: "Atidengti kitą internetinį žemėlapį.",
				settingsDataModel2HelpTitle: "Kaip surasti internetinio žemėlapio ID",
				settingsDataModel2HelpContent: "Nukopijuokite skaičius po \'=\' ženklo, esančio internetinio žemėlapio URL",
				switchMaps: "Į_Switch maps_š",
				browseWebMaps: "Į_Browse web maps_š"
			},
			settingsLegend: {
				settingsTabLegend: "Aplikacijos išdėstymas",
				settingsLegendExplain: "Pasirinkite aplikacijos išdėstymo nustatymus.",
				settingsLegendEnable: "Įjungti legendą",
				settingsDescriptionEnable: "Įjungti aprašą",
				settingsBookmarksEnable: "Įjungti keitiklių serijas",
				settingsPopupDisable: "Įgalinti informacinį langą",
				settingsLocationSearchEnable: "Įgalitnti lokatoriaus paiešką",
				settingsGeolocatorEnable: "Įgalinti geolokatorių",
				settingsLegendHelpContent: "Legendos nustatymui naudokite ArcGIS.com internetinio žemėlapio peržiūros aplikacijos turinį (Paslėpti legendoje)",
				settingsSeriesHelpContent: "Keitiklių serija yra navigavimo galimybė, supažindinanti vartotoją su tam tikra aprėptimi ir atvaizduoja pavadinimą bei aprašymo tekstą šoninėje panelėje. Aktyvuojant pirmą kartą, jūsų internetinio(-ių) žemėlapio(-ių) žymės bus panaudotos preliminariai užpildant serijų juostą. Šio pasirinkimo išjungimas, išjungia ir serijų juostą, tačiau serijų konfigūracija bus išlaikoma tolimesniam naudojimui.", 
				settingsSeriesHelpContent2: "Keitiklių serijos leidžia jums sukurti ir redaguoti pažymėtas vietas su kartu esančiais pavadinimais ir tekstu. Jei jūsų internetinis žemėlapis turi žymių, jos bus atvaizduotos. Galite išjungti serijas, bet konfigūracija bus išsaugota ateičiai.",
				settingsSeriesHelpLink: "Peržiūrėkite aplikacijos su keitiklių serijomis pavyzdį čia",
				preview: "Vartotojo sąsajos peržiūra",
				settingsLocateButtonExplain: "Šis funkcionalumas palaikomas daugelyje mobilių įrenginių ir darbastalio naršyklių (įskaitant Internet Explorer 9+).",
				settingsLocateButton: "Į_Enable a 'Locate' button on supported browsers_š",
				settingsAddressSearch: "Įgalinti adreso paieškos įrankį"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Iškylantis langas",
				settingsSwipePopupExplain: "Adaptuokite iškylančių langų antraštės vaizdą, kad padėtumėt vartotojui asocijuoti iškylančius langus su žemėlapio sluoksniais.",
				settingsSwipePopupSwipe1: "Kairysis žemėlapis",
				settingsSwipePopupSwipe2: "Dešinysis žemėlapis",
				settingsSwipePopupGlass1: "Pagrindinis žemėlapis",
				settingsSwipePopupGlass2: "Didinamojo stiklo žemėlapis",
				settingsSwipePopupTitle: "Antraštės pavadinimas",
				settingsSwipePopupColor: "Antraštės spalva"
			},
			initPopup: {
				initHeader: "Į_Welcome to the Swipe/Spyglass Builder_š",
				modalNext: "Sekantis",
				modalPrev: "Ankstesnis",
				modalApply: "Atidaryti aplikaciją"
			},
			seriesPanel: {
				title: "Pavadinimas",
				descr: "Aprašas",
				discard: "Pašalinti žymę",
				saveExtent: "Nustatyti žymės aprėptį",
				discardDisabled: "Negalite pašalinti šios žymės. Keitiklio serijos gali būti išjungos nustatymuose."
			},
			helpPopup: {
				title: "Į_Help_š",
				close: "Į_Close_š",
				tab1: {
					div1: "Į_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._š",
					div2: "Į_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._š",
					div3: "Į_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._š"
				}
			},
			share: {
				firstSaveTitle: "Į_Application successfully saved_š",
				firstSaveHeader: "Į_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._š",
				firstSaveA1: "Į_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_š",
				firstSaveA1bis: "Į_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._š",
				firstSaveQ2: "Į_Is my Application shared?_š",
				firstSaveA2: "Į_Currently your Application is not shared. To share it, use the SHARE button._š",
				shareTitle: "Į_Share your Application_š",
				sharePrivateHeader: "Į_Your Application is not shared, would you like to share it?_š",
				sharePrivateBtn1: "Į_Share publicly_š",
				sharePrivateBtn2: "Į_Share with my Organization_š",
				sharePrivateProgress: "Į_Sharing in progress..._š",
				sharePrivateErr: "Į_Sharing failed, try again or_š",
				sharePrivateOk: "Į_Sharing updated successfully, loading..._š",
				shareStatus1: "Į_Application is not saved_š",
				shareStatus2: "Į_Application is shared publicly_š",
				shareStatus3: "Į_Application is shared within the organization_š",
				shareStatus4: "Į_Application is not shared_š",
				sharePreviewAsUser: "Į_Preview_š",
				shareHeader1: "Į_Your Application is <strong>publicly accessible</strong>._š",
				shareHeader2: "Į_Your Application is accessible by your organization members (login is required)._š",
				shareLinkHeader: "Į_Share the Application with your audience_š",
				shareLinkOpen: "Į_OPEN_š",
				learnMore: "Į_Learn more_š",
				shareQ1Opt1: "Į_How do I keep the Application private?_š",
				shareQ1Opt2: "Į_How do I keep the Application private or share it publicly?_š",
				shareA1: "Į_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._š",
				shareA1bis: "Į_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._š",
				shareQ2: "Į_How do I edit the Application later?_š",
				shareQ2bis: "Į_How do I get back to the authoring interface?_š",
				shareA2div1: "Į_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._š",
				shareA2div2: "Į_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_š",				
				shareQ3: "Į_Where is the data stored?_š",
				shareA3: "Į_The Application configuration is stored in this web application item</a>._š",
				shareWarning: "Į_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._š",
 				shareWarningWith1: "Į_publicly_š",
 				shareWarningWith2: "Į_publicly and with the Organization_š"
			},
			directCreation: {
				header: "Į_Welcome to the Swipe/Spyglass Builder_š",
				mapPickHeader: "Į_To get started, please input a valid web map id, or use the search button to browse web maps._š",
				launchBuilder: "Į_Launch Builder_š"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Į_My Organization_š",
					onlineLabel: "Į_ArcGIS Online_š",
					contentLabel: "Į_My Content_š",
					favoritesLabel: "Į_My Favorites_š"
				},
				title: "Į_Select Web Map_š",
				searchTitle: "Į_Search_š",
				ok: "Į_Ok_š",
				cancel: "Į_Cancel_š",
				placeholder: "Į_Enter search term_š"
			}
		}
    })
);