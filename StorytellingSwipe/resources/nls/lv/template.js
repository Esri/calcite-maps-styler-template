define(
	({
		viewer: {
			loading: {
				step1: "IELĀDĒ APLIKĀCIJU",
				step2: "IELĀDĒ DATUS",
				step3: "INICIALIZĒŠANA",
				fail: "Diemžēl neizdevās pārvilkt ielādēšanu",
				loadBuilder: "PĀRSLĒGT UZ BUILDER MODE",
				redirectSignIn: "NOVIRZA UZ PIERAKSTĪŠANĀS LAPU",
				redirectSignIn2: "(pēc pierakstīšanās jūs tiksiet novirzīti uz šejieni)",
				failButton: "Atkārtot"
			},
			errors: {
				boxTitle: "Kļūda",
				portalSelf: "Fatāla kļūda: Neizdevās iegūt portāla konfigurāciju",
				invalidConfig: "Fatāla kļūda: konfigurācijas neveiksme",
				invalidConfigNoWebmap: "Fatāla kļūda: nederīga konfigurācija (nav norādīta web karte)",
				createMap: "Nevar izveidot karti",
				invalidApp: "Fatāla kļūda: aplikāciju nevar ielādēt",
				initMobile: "Laipni lūdzam pārvilkšanas web aplikācijā. Aplikācija nav konfigurēta. Interaktīvais būvētājs netiek atbalstīts mobilajās ierīcēs.",
				noBuilderIE8: "Pārvilkšanas interaktīvais veidotājs netiek atbalstīts pārlūkprogrammas Internet Explorer versijās, kas jaunākas par 9. versiju.",
				noLayerView: "Laipni lūdzam Pārvilkt web aplikācijā.<br />Aplikācija vēl nav konfigurēta.",
				appSave: "Kļūda, saglabājot web aplikāciju",
				mapSave: "Kļūda, saglabājot web karti",
				notAuthorized: "Jums nav atļauts piekļūt šai aplikācijai",
				conflictingProjectionsTitle: "Konfliktējošas projekcijas",
				conflictingProjections: "Pārvilkt neatbalsta divu web karšu ar dažādām projekcijām lietošanu. Lūdzu, atveriet iestatījumus un izmantojiet web karti, kas izmanto to pašu projekciju nekā pirmā web karte.",
				cpButton: "Aizvērt"
			},
			mobileView: {
				hideIntro: "PASLĒPT IEVADU",
				navLeft: "Leģenda",
				navMap: "Karte",
				navRight: "Dati"
			},
			desktopView: {
				storymapsText: "Stāstu karte",
				builderButton: "Pārslēgties uz veidotāja režīmu",
				bitlyTooltip: "Iegūt īsceļu uz aplikāciju"
			}
		},
		builder: {
			builder: {
				panelHeader: "APLIKĀCIJAS KONFIGURĀCIJA",
				buttonSave: "SAGLABĀT",
				buttonHelp: "Palīdzība",
				buttonShare: "Koplietot",
				buttonDiscard: "ATCELT",
				buttonSettings: "Iestatījumi",
				buttonView: "Skata režīms",
				buttonItem: "Atvērt web aplikācijas vienību",
				noPendingChange: "Nav neizpildītu izmaiņu",
				unSavedChangeSingular: "1 nesaglabāta izmaiņa",
				unSavedChangePlural: "nesaglabātas izmaiņas",
				popoverDiscard: "Vai esat pārliecināts, ka vēlaties izmest visas nesaglabātās izmaiņas?",
				yes: "Jā",
				no: "Nē",
				popoverOpenViewExplain: "Atverot skatītāju, jūs zaudēsiet visas nesaglabātās izmaiņas",
				popoverOpenViewOk: "Labi",
				popoverOpenViewCancel: "Atcelt",
				popoverSaveWhenDone: "Neaizmirstiet saglabāt, kad jūs pabeidzat",
				closeWithPendingChange: "Vai esat pārliecināts, ka vēlaties apstiprināt darbību? Jūsu izmaiņas tiks zaudētas.",
				gotIt: "Labi",
				savingApplication: "Saglabā aplikāciju",
				saveSuccess: "Aplikācija saglabāta veiksmīgi",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				saveError2: "ķ_Save failed due to an invalid html tag in a name or description_ū",
				saveError3: "ķ_The title can't be empty_ū",
				signIn: "Lūdzu, pierakstieties kontā uz",
				signInTwo: "lai saglabātu aplikāciju."
			},
			header:{
				editMe: "Rediģē mani !",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu"
			},
			settings: {
				settingsHeader: "Aplikācijas iestatījumi",
				modalCancel: "Atcelt",
				modalApply: "Lietot"
			},
			settingsColors: {
				settingsTabColor: "Tēma",
				settingsColorExplain: "Izvēlieties lietotņu tēmu vai definējiet savas krāsas.",
				settingsLabelColor: "Galvenes un sānu paneļa fona krāsas"
			},
			settingsHeader: {
				settingsTabLogo: "Galvene",
				settingsLogoExplain: "Pielāgot galvenes logotipu (maksimums  ir 250 x 50piks).",
				settingsLogoEsri: "Esri logotips",
				settingsLogoNone: "Nav logotipa",
				settingsLogoCustom: "Pielāgots logotips",
				settingsLogoCustomPlaceholder: "Attēla URL",
				settingsLogoCustomTargetPlaceholder: "Klikšķis caur saiti",
				settingsLogoSocialExplain: "Pielāgot galvenes labās augšējās saites.",
				settingsLogoSocialText: "Teksts",
				settingsLogoSocialLink: "Saite",
				settingsLogoSocialDisabled: "Administrators ir atspējojis elementu."
			},
			settingsExtent: {
				settingsTabExtent: "Pārklājums",
				settingsExtentExplain: "Izmantojot zemāk esošo interaktīvo karti, iestatiet sākotnējo pārklājumu.",
				settingsExtentExplainBottom: "Jūsu definētais pārklājums modificēs web kartes sākotnējo pārklājumu. Atcerieties ja jūs veicat kartes lasīšanas serijas, šis pārklājums netiks lietots.",
				settingsExtentDateLineError: "Pārklājums nevar būt pāri 180° meridiāna garumam.",
				settingsExtentDateLineError2: "Kļūda aprēķinot pārklājumu",
				settingsExtentDrawBtn: "Zīmēt jaunu pārklājumu",
				settingsExtentModifyBtn: "Rediģēt pašreizējo pārklājumu",
				settingsExtentApplyBtn: "Lietot galvenajā kartē",
				settingsExtentUseMainMap: "Lietot galveno kartes pārklājumu"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nav nekādu parādāmu datu",
				noDataExplain: "Pieskarieties kartei, lai izvēlētos elementu un atgriezieties šeit",
				noDataMap: "Nav datu par šo karti",
				noPopup: "Nav atrasti šī elementa uznirstošie logi"
			},
			mobileLegend: {
				noLegend: "Nav leģendas, ko parādīt."
			},
			swipeSidePanel: {
				editTooltip: "Iestatiet sānu paneļa aprakstu",
				editMe: "Rediģē mani !",
				legendTitle: "Leģenda"
			},
			infoWindow: {
				noFeature: "Nav datu, ko parādīt.",
				noFeatureExplain: "Pieskarieties kartei, lai izvēlētos elementu"
			},
			settingsLayout: {
				settingsTabLayout: "Pārvilkšanas stils",
				settingsLayoutExplain: "Izvēlieties pārvilkšanas rīka stilu.",
				settingsLayoutSwipe: "Vertikāla josla",
				settingsLayoutSpyGlass: "Tālskatis",
				settingsLayoutSelected: "Izvēlētais izkārtojums",
				settingsLayoutSelect: "Izvēlieties šo izkārtojumu",
				settingsSaveConfirm: "Lai dažas no jūsu veiktajām izmaiņām stātos spēkā, ir nepieciešams saglabāt un atkārtoti ielādēt aplikāciju."
			},
			settingsDataModel: {
				settingsTabDataModel: "Pārvilkšanas tips",
				settingsDataModelExplainSwipe: "Ko jūs vēlaties lai lietotāji pārvelk?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Izvēlieties slāni vai web karti, kas tiks rādīta tālskatī.",
				settingsDataModelOneMap: "Slānis web kartē",
				settingsDataModel1Explain: "Izvēlieties slāni, ko vēlaties pārvilkt",
				settingsDataModel1Warning: "Ja slānis ir paslēpts augšējos slāņos, pārvilkšanai nebūs nekāda efekta.",
				settingsDataModel1SpyGlassExplain: "Izvēlieties slāni, ko parādīt tālskatī.",
				settingsDataModelTwoMaps: "Divas web kartes",
				settingsDataModelLayerIds: "Web kartes slāņa ID",
				settingsDataModelSelected: "Izvēlieties tipu",
				settingsDataModelWebmapSwipeId1: "Labās puses web kartes ID",
				settingsDataModelWebmapSwipeId2: "Kreisās puses web kartes ID",
				settingsDataModelWebmapGlassId1: "Galvenās web kartes ID",
				settingsDataModelWebmapGlassId2: "Tālskata web kartes ID",
				settingsDataModelSelect: "Izvēlieties šo tipu",
				settingsDataModel2Explain: "Pārvilkt ar citu web karti.",
				settingsDataModel2SpyGlassExplain: "Atklāt citu web karti.",
				settingsDataModel2HelpTitle: "Kā atrast web kartes ID?",
				settingsDataModel2HelpContent: "Kopēt un ielīmēt ciparus aiz zīmes \"=\" vietrādī URL no web kartes",
				switchMaps: "Kartes apgriešana",
				browseWebMaps: "Pārlūkot web kartes"
			},
			settingsLegend: {
				settingsTabLegend: "Lietotnes izkārtojums",
				settingsLegendExplain: "Izvēlieties aplikācijas izkārtojuma iestatījumus.",
				settingsLegendEnable: "Iespējot leģendu",
				settingsDescriptionEnable: "Iespējot aprakstu",
				settingsBookmarksEnable: "Iespējot sēriju Pārvilkt",
				settingsPopupDisable: "Iespējot uznirstošo logu",
				settingsLocationSearchEnable: "Iespējot meklētāja meklēšanu",
				settingsGeolocatorEnable: "Iespējot ģeolokatoru",
				settingsLegendHelpContent: "Lai attīrītu leģendas saturu izmantojiet ArcGIS.com web kartes skatītāja satura tabulu (Paslēpt leģendā)",
				settingsSeriesHelpContent: "Pārvilkšanas sērijas ir cilņu navigācijas opcija, kas virzīs skatītāju uz noteiktu pārklājumu un attēlos virsrakstu un apraksta tekstu sānu panelī. Sākotnējās aktivizācijas laikā, web karšu grāmatzīmes tiks importētas un izmantotas, lai aizpildītu seriju joslu. Sēriju opciju atiespējošana izslēgs sēriju joslu, bet sēriju konfigurācija tiks saglabāta izmantošanai nākotnē.", 
				settingsSeriesHelpContent2: "Pārvilkšanas sērijas ļauj izveidot un rediģēt izvēlētus izvietojumus ar pavadošajiem virsrakstiem un tekstiem. Ja jūsu web kartei ir grāmatzīmes, tās tiks attēlotas. Jūs varat atiespējot sērijas, bet konfigurācija tiks saglabāta izmantošanai nākotnē.",
				settingsSeriesHelpLink: "Aopskatiet aplikācijas piemēru ar pārvilkšanas sērijām šeit",
				preview: "Saskarnes priekšskatījums",
				settingsLocateButtonExplain: "Šī funkcionalitāte tiek atbalstīta uz vairuma mobilo ierīču un darbvirsmas pārlūkiem (ieskaitot Internet Explorer 9+).",
				settingsLocateButton: "Iespējot \'Atrast izvietojumu\' pogu atblastītajos pārlūkos",
				settingsAddressSearch: "Iespējot adreses meklēšanas rīku"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Uznirstošie logi",
				settingsSwipePopupExplain: "Pielāgot izskatu uznirstošā loga galvenē, lai palīdzētu lietotājam saistīt uznirstošā logu ar kartēm slāņiem.",
				settingsSwipePopupSwipe1: "Kreisās puses karte",
				settingsSwipePopupSwipe2: "Labās puses karte",
				settingsSwipePopupGlass1: "Galvenā karte",
				settingsSwipePopupGlass2: "Tālskata karte",
				settingsSwipePopupTitle: "Galvenes virsraksts",
				settingsSwipePopupColor: "Galvenes krāsa"
			},
			initPopup: {
				initHeader: "ķ_Welcome to the Swipe/Spyglass Builder_ū",
				modalNext: "Nākošais",
				modalPrev: "Iepriekšējs",
				modalApply: "Atveriet lietotni"
			},
			seriesPanel: {
				title: "Virsraksts",
				descr: "Apraksts",
				discard: "Atmest grāmatzīmi",
				saveExtent: "Iesatīt grāmatzīmes pārklājumu",
				discardDisabled: "Jūs nevarat noņemt grāmatzīmi. Pārvilktās sērijas var tikt atiespējotas iestatījumu sadaļā."
			},
			helpPopup: {
				title: "Palīdzība",
				close: "Aizvērt",
				tab1: {
					div1: "Pievilkšanas/ Tālskatas sagatave ir izveidota, lai salīdzinātu divu atsevišķu tīmekļu kartšu vai divus slāņu pievilcīgumu,viegli izmantojama tīmekļa aplikācija, ko var izmantot uz jebkura tīmekļa pārlūka, uz jeb kuras ierīces, ieskaitot viedtālruņus un planšetes",
					div2: "ķ_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ū",
					div3: "Mēs labprāt vēlētos dzirdēt jūsu atsauksmes! Neatkarīgi no tā vai jums ir jautājumi, vēlaties pieprasit jaunu elementu, vai uzskatāt , ka esat atradis kļūdu, lūdzu apmeklējiet <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps lietotāju forums</a>."
				}
			},
			share: {
				firstSaveTitle: "Aplikācija veiksmīgi saglabāta",
				firstSaveHeader: "Jūsu aplikācija tagad ir saglabāta ArcGIS Online. Lūdzu izlasiet atbildes uz biežāk uzdotajiem jautājumiem.",
				firstSaveA1: "Ja jūs neesat pazīstams ar ArcGIS Online vai vēlaties īsinājumikonu, lai piekļūtu autorēšanas saskarnei, jūs varat saglabāt sekojošu saiti: %LINK1%",
				firstSaveA1bis: "Aplikāciju var arī atrast Jūsu <a href='%LINK2%' target='_blank'>ArcGIS Online satura mapē</a>.",
				firstSaveQ2: "Vai ar manu aplikāciju dalīties?",
				firstSaveA2: "Pašlaik Jūsu aplikācija nav kopīgota. Lai kopīgotu, izmantojiet KOPĪGOŠANAS pogu.",
				shareTitle: "Koplietot savu aplikāciju",
				sharePrivateHeader: "Jūsu aplikācija netika koplietota, vai Jūs vēlaties koplietoties ar to?",
				sharePrivateBtn1: "Koplietot publiski",
				sharePrivateBtn2: "Koplietot ar Organizāciju",
				sharePrivateProgress: "Notiek koplietošana...",
				sharePrivateErr: "Neizdevās koplietot, mēģiniet vēlreiz vai",
				sharePrivateOk: "Koplietošana veiksmīgi atjaunināta, ielādē...",
				shareStatus1: "Aplikācija nav saglabāta",
				shareStatus2: "Aplikācija tiek publiski koplietota",
				shareStatus3: "Aplikācija tiek koplietota organizācijai",
				shareStatus4: "Aplikācija nav koplietota",
				sharePreviewAsUser: "Priekšskatījums",
				shareHeader1: "Jūsu aplikācija ir <strong>publiski pieejama</strong>.",
				shareHeader2: "Jūsu aplikācija ir pieejama Jūsu organizācijas biedriem (pierakstīšanās ir nepieciešama).",
				shareLinkHeader: "Koplietot aplikāciju ar Jūsu auditoriju",
				shareLinkOpen: "ATVĒRTS",
				learnMore: "Uzziniet vairāk",
				shareQ1Opt1: "Kā es varu saglabāt privāto aplikāciju?",
				shareQ1Opt2: "Kā es varu saglabāt privāto aplikāciju un publiski dalīties?",
				shareA1: "Izmantojiet %SHAREIMG% on <a href='%LINK1%' target='_blank'>aplikācijas vienības lapu</a>. Ja arī Jūs vēlaties atcelt tīmekļa karti, izmantojiet<a href='%LINK2%' target='_blank'>tīmekļa kartes vienības lapu</a>.",
				shareA1bis: "Ja jūs vēlaties pārtraukt koplietot elementu servisu, izmantojiet <a href='%LINK1%' target='_blank'>elementu servisa vienības lapu</a>.",
				shareQ2: "Kā es varu vēlāk rediģēt aplikāciju?",
				shareQ2bis: "Kā es varu nokļūt atpakaļ uz autorēšanas interfeisu?",
				shareA2div1: "Saglabājiet un izmantojiet atkal sekojošu saiti %LINK1% vai izmantojiet <a href='%LINK2%' target='_blank'>aplikācijas vienības lapu</a>.",
				shareA2div2: "Kā aplikācijas īpašnieks, kad esat pierakstījies ArcGIS.com, aplikācija satur pogu, lai atvērtu to interaktīvajā veidotājā:",				
				shareQ3: "Kur tiek glabāti dati?",
				shareA3: "Aplikācijas konfigurācija tiek saglabāta šajā web aplikācijas lapā</a>.",
				shareWarning: "ķ_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ū",
 				shareWarningWith1: "ķ_publicly_ū",
 				shareWarningWith2: "ķ_publicly and with the Organization_ū"
			},
			directCreation: {
				header: "Sveicināti Pievilkšanas/Tālskata veidotājā",
				mapPickHeader: "Lai sāktu, lūdzu ievadiet derīgu web kartes id, vai izmantojiet meklēšanas pogu, lai pārlūkotu web kartes.",
				launchBuilder: "Uzsākšanas veidotājs",
				chooseWebmapLbl: "ķ_Choose web map..._ū",
				explain2: "ķ_To create a Swipe or Spyglass story map, use the button below to choose the existing ArcGIS Online web map you want to use. Alternatively, you can paste the ID of the web map into the field below._ū",
				explain3: "ķ_If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option._ū",
				webmapPlaceholder: "ķ_Enter a web map id..._ū"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organizācija",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mans Saturs",
					favoritesLabel: "Mani favorīti"
				},
				title: "Izvēlieties web karti",
				searchTitle: "Meklēt",
				ok: "Labi",
				cancel: "Atcelt",
				placeholder: "Ievadiet meklēšanas nosacījumus"
			}
		}
    })
);