define(
	 ({
		viewer: {
			loading: {
				step1: "ĮKELIAMAS PASAKOJIMAS",
				step2: "ĮKELIAMI DUOMENYS",
				step3: "PRADEDAMA",
				fail: "Atsiprašome keitiklio krovimas nepavyko",
				loadBuilder: "PERSIJUNGIAMA Į KŪRIMO REŽIMĄ",
				redirectSignIn: "NUKREIPIAMA Į PRISIJUNGIMO PUSLAPĮ",
				redirectSignIn2: "(jūs būsite nukreiptas čia po prisijungimo)",
				failButton: "Pakartoti"
			},
			errors: {
				boxTitle: "Įvyko klaida",
				portalSelf: "Kritinė klaida: Nepavyko gauti portalo konfigūracijos",
				invalidConfig: "Kritinė klaida: Neteisinga konfigūracija",
				invalidConfigNoWebmap: "Į_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________š",
				invalidConfigNoAppDev: "Į_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________š.",
				createMap: "Žemėlapio sukurti nepavyko",
				invalidApp: "Lemtinga klaida: Pasakojimo negalima įkelti",
				initMobile: "Sveiki atvykę į keitiklio internetinę aplikaciją. Aplikacija nesukonfigūruota. Interaktyvus kūrėjas mobiliuosiuose įrenginiuose nepalaikomas.",
				initMobile2: "Į_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________š.",
				initMobile3: "Į_Please rotate your device to landscape orientation to use the Swipe builder________________________š.",
				noBuilderIE8: "Keitiklio interaktyvus kūrėjas nepalaikomas žemesnės nei 9 versijos Internet Explorer.",
				noLayerView: "Sveiki atvykę į keitiklio internetinę aplikaciją.<br />Aplikacija dar nesukonfigūruota.",
				appSave: "Klaida įrašant žiniatinklio pasakojimą",
				mapSave: "Klaida įrašant internetinį žemėlapį",
				notAuthorized: "Neturite teisių pasiekti šį pasakojimą",
				notAuthorizedBuilder: "Į_You are not authorized to use Swipe and Spyglass builder__________________š.",
				conflictingProjectionsTitle: "Nesuderinamos projekcijos",
				conflictingProjections: "Keitiklis nepalaiko dviejų interneto žemėlapių su skirtingomis projekcijomis. Atidarykite nustatymus ir naudokite interneto žemėlapį, naudojantį tą pačią projekciją kaip ir pirmasis interneto žemėlapis.",
				cpButton: "Užverti",
				unspecifiedConfigOwner: "Nesukonfigūruotas teisėtas savininkas.",
				invalidConfigOwner: "Pasakojimo savininkas neautorizuotas."
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
				facebookTooltip: "Dalintis Facebook",
				twitterTooltip: "Dalintis Twitter",
				bitlyTooltip: "Gauti trumpą nuorodą",
				tooltipAutoplayDisabled: "Į_This isn't available in autoplay mode____________š",
				autoplayLabel: "Į_Autoplay mode_____š",
				autoplayExplain1: "Į_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________š.",
				autoplayExplain2: "Į_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________š."
			}
		},
		builder: {
			builder: {
				panelHeader: "PASAKOJIMO KONFIGŪRACIJA",
				buttonSave: "ĮRAŠYTI",
				buttonHelp: "Pagalba",
				buttonShare: "Bendrinti",
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
				savingApplication: "Įrašoma istorija",
				saveSuccess: "Į_Story saved____š",
				saveError: "Įrašyti nepavyko, pabandykite iš naujo",
				saveError2: "Išsaugoti nepavyko dėl negalimo html tego pavadinime ar apraše",
				saveError3: "Pavadinimas negali būti tuščias",
				signIn: "Prisijunkite su paskyra prie",
				signInTwo: "pasakojimui įrašyti."
			},
			header:{
				editMe: "Redaguok !",
				templateTitle: "Nustatyti šablono antraštę",
				templateSubtitle: "Nustatyti šablono paantraštę"
			},
			settings: {
				settingsHeader: "Pasakojimo parametrai",
				modalCancel: "Atšaukti",
				modalApply: "Taikyti"
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
				settingsLogoCustom: "Savas logotipas",
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
				settingsExtentDateLineError: "Aprėptis negali būti abipus 180ï¿½ ilgumos",
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
				settingsLayoutSwipe: "Vertikali juosta",
				settingsLayoutSpyGlass: "Didinamasis stiklas",
				settingsLayoutSelected: "Pažymėtas maketas",
				settingsLayoutSelect: "Pažymėkite šį maketą",
				settingsSaveConfirm: "Kai kurie jūsų pakeitimai reikalauja išsaugoti ir perkrauti pasakojimą"
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
				switchMaps: "Sukeisti žemėlapius",
				browseWebMaps: "Naršyti internetinius žemėlapius"
			},
			settingsLegend: {
				settingsTabLegend: "Aplikacijos išdėstymas",
				settingsLegendExplain: "Pasirinkite išdėstymo parametrus.",
				settingsLegendEnable: "Įjungti legendą",
				settingsDescriptionEnable: "Įjungti aprašą",
				settingsBookmarksEnable: "Įjungti keitiklių serijas",
				settingsPopupDisable: "Į_Enable pop-up_____š",
				settingsLocationSearchEnable: "Įgalinti lokatoriaus paiešką",
				settingsGeolocatorEnable: "Įgalinti geolokatorių",
				settingsLegendHelpContent: "Į_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________š",
				settingsSeriesHelpContent: "Keitiklių serija yra navigavimo galimybė, supažindinanti vartotoją su tam tikra aprėptimi. Ji atvaizduoja pavadinimą bei aprašymo tekstą šoninėje panelėje. Aktyvuojant pirmą kartą, jūsų internetinio (-ių) žemėlapio (-ių) žymės bus panaudotos preliminariai užpildant serijų juostą. Šio pasirinkimo išjungimas išjungia ir serijų juostą, tačiau serijų konfigūracija bus išlaikoma, kad būtų galima naudoti ateityje.",
				settingsSeriesHelpContent2: "Keitiklių serijos leidžia jums sukurti ir redaguoti pažymėtas vietas su kartu esančiais pavadinimais ir tekstu. Jei jūsų internetinis žemėlapis turi žymių, jos bus atvaizduotos. Galite išjungti serijas, bet konfigūracija bus išsaugota ateičiai.",
				settingsSeriesHelpLink: "Peržiūrėkite aplikacijos su keitiklių serijomis pavyzdį čia",
				preview: "Vartotojo sąsajos peržiūra",
				settingsLocateButtonExplain: "Šis funkcionalumas palaikomas daugelyje mobilių įrenginių ir darbastalio naršyklių (įskaitant Internet Explorer 9+).",
				settingsLocateButton: "Palaikomose naršyklėse įgalinti mygtuką Rasti",
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
				initHeader: "Sveiki atvykę į Keitiklio/Didinamojo stiklo kūrėją",
				modalNext: "Sekantis",
				modalPrev: "Ankstesnis",
				modalApply: "Atidaryti aplikaciją"
			},
			seriesPanel: {
				title: "Pavadinimas",
				descr: "Aprašas",
				discard: "Pašalinti žymę",
				saveExtent: "Nustatyti žymės aprėptį",
				discardDisabled: "Negalite pašalinti šios žymės. Keitiklio serijos gali būti išjungtos nustatymuose."
			},
			helpPopup: {
				title: "Pagalba",
				close: "Užverti",
				tab1: {
					div1: "Keitiklio / didinamojo stiklo šablonas leidžia palyginti du internetinius žemėlapius ar du internetinio žemėlapio sluoksnius patrauklioje, paprastoje naudoti tinklo aplikacijoje, kuri gali būti pasiekiama naršykle įvairiuose įrenginiuose, taip pat ir išmaniuosiuose telefonuose ir planšetiniuose kompiuteriuose.",
					div2: "Norėdami gauti papildomos informacijos apie keitiklio / didinamojo stiklo šabloną ir vartotojų sukurtų pavyzdžių, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> apsilankykite žemėlapių su pasakojimais svetainėje</a>. Be to, galite mus sekti Twitter <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Mes norėtume gauti iš jūsų žinių! Jei turite klausimų, pageidaujate naujo funkcionalumo, ar manote, kad radote klaidą, apsilankykite <a href='http://links.esri.com/storymaps/forum' target='_blank'>Pasakojimų žemėlapių vartotojų forumą</a>."
				}
			},
			share: {
				firstSaveTitle: "Į_Story saved____š",
				manageStory: "Į_Manage your story______š",
				manageStoryA1: "Į_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________š.",
				manageStoryA1V1: "Į_My Stories____š",
				manageStoryA1V2: "Į_blog posts____š",
				shareTitle: "Bendrinti pasakojimą",
				sharePrivateHeader: "Pasakojimas nėra bendrinamas, ar norite jį bendrinti?",
				sharePrivateBtn1: "Bendrinti viešai",
				sharePrivateBtn2: "Bendrinti su viena organizacija",
				sharePrivateProgress: "Vyksta bendrinimas...",
				sharePrivateErr: "Bendrinimas nepavyko, bandykite dar kartą arba",
				sharePrivateOk: "Į_Sharing updated, loading_________š...",
				shareStatus1: "Pasakojimas neįrašytas",
				shareStatus2: "Pasakojimas bendrinamas viešai",
				shareStatus3: "Pasakojimas bendrinamas organizacijos viduje",
				shareStatus4: "Pasakojimas nebendrinamas",
				sharePreviewAsUser: "Peržiūra",
				shareHeader1: "Pasakojimas <strong>prieinamas viešai</strong>.",
				shareHeader2: "Pasakojimas pasiekiamas organizacijos nariams (prisijungus).",
				shareLinkHeader: "Į_Share your story______š",
				shareLinkOpen: "ATIDARYTI",
				learnMore: "Sužinokite daugiau",
				shareA1: "Naudokite %SHAREIMG% <a href='%LINK1%' target='_blank'>aplikacijos elemento lange</a>. Jei norite išjungti bendrinimą, naudokite <a href='%LINK2%' target='_blank'>internetinio žemėlapio elemento lange</a>.",
				shareWarning: "Bendrinimas %WITH% buvo išjungtas, nes jūs nesate <a href='%LINK%' target='_blank'>internetinio žemėlapio</a> savininkas.",
				shareWarningWith1: "Į_publicly___š",
				shareWarningWith2: "Į_publicly and with the Organization___________š"
			},
			directCreation: {
				header: "Sveikiname prisijungus prie keitiklio / didinamojo stiklo kūrimo programos",
				mapPickHeader: "Norėdami pradėti, pirmiausia įveskite galiojantį internetinio žemėlapio id arba naudokite paieškos mygtuką ir naršykite internetinius žemėlapius.",
				launchBuilder: "Paleisti kūrimo programą",
				chooseWebmapLbl: "Pasirinkite internetinį žemėlapį...",
				explain2: "Į_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________š.",
				explain3: "Jei žemėlapyje su pasakojimu norite naudoti du internetinius žemėlapius, antrą žemėlapį  galėsite nurodyti vėliau, kai pasirinksite tą parinktį.",
				webmapPlaceholder: "Įveskite internetinio žemėlapio ID..."
			},
			saveErrorSocial: {
				title: "Į_Social media sharing update_________š",
				panel1: "Į_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________š.",
				panel1tooltip: "Į_By defining a title, summary and thumbnail image, your story will look like this_________________________š:",
				panel2:	"Į_Which title would you like to use on social media________________š:",
				panel2q1: "Į_Story title (recommended)_________š",
				panel2q1tooltip: "Į_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________š.",
				panel2q2: "Į_Item title____š",
				panel3: "Į_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________š.",
				panel4: "Į_Do not warn me again for this story____________š",
				mystories: "Į_My Stories____š",
				btnSave: "Į_Save__š"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organizacija",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Turinys",
					favoritesLabel: "Mėgstamiausi"
				},
				title: "Į_Select Web Map_____š",
				searchTitle: "Ieškoti",
				ok: "Gerai",
				cancel: "Atšaukti",
				placeholder: "Įveskite paieškos frazę"
			}
		}
    })
);
