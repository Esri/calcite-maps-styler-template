define(
	 ({
		viewer: {
			loading: {
				step1: "IELĀDĒ STĀSTU",
				step2: "IELĀDĒ DATUS",
				step3: "INICIALIZĒŠANA",
				fail: "Diemžēl neizdevās pārvilkt ielādēšanu",
				loadBuilder: "PĀRSLĒGT UZ BUILDER MODE",
				redirectSignIn: "NOVIRZA UZ PIERAKSTĪŠANĀS LAPU",
				redirectSignIn2: "(pēc pierakstīšanās jūs tiksiet novirzīts uz šejieni)",
				failButton: "Atkārtot"
			},
			errors: {
				boxTitle: "Kļūda",
				portalSelf: "Fatāla kļūda: Neizdevās iegūt portāla konfigurāciju",
				invalidConfig: "Fatāla kļūda: konfigurācijas neveiksme",
				invalidConfigNoWebmap: "ķ_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ū",
				invalidConfigNoAppDev: "ķ_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ū.",
				createMap: "Nevar izveidot karti",
				invalidApp: "Fatāla kļūda: stāstu nevar ielādēt",
				initMobile: "Laipni lūdzam pārvilkšanas web aplikācijā. Aplikācija nav konfigurēta. Interaktīvais būvētājs netiek atbalstīts mobilajās ierīcēs.",
				initMobile2: "ķ_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ū.",
				initMobile3: "ķ_Please rotate your device to landscape orientation to use the Swipe builder________________________ū.",
				noBuilderIE8: "Pārvilkšanas interaktīvais veidotājs netiek atbalstīts pārlūkprogrammas Internet Explorer versijās, kas jaunākas par 9. versiju.",
				noLayerView: "Laipni lūdzam Pārvilkt web aplikācijā.<br />Aplikācija vēl nav konfigurēta.",
				appSave: "Saglabājot tīmekļa stāstu, radās kļūda",
				mapSave: "Kļūda, saglabājot web karti",
				notAuthorized: "Jūs neesat pilnvarots piekļūt šim stāstam",
				notAuthorizedBuilder: "ķ_You are not authorized to use Swipe and Spyglass builder__________________ū.",
				conflictingProjectionsTitle: "Konfliktējošas projekcijas",
				conflictingProjections: "Vilkšana neatbalsta divu tīmekļa karšu izmantošanu ar dažādām projekcijām. Lūdzu, atveriet iestatījumus un izmantojiet tīmekļa karti, kurā izmantota tā pati projekcija, kas pirmajā tīmekļa kartē.",
				cpButton: "Aizvērt",
				unspecifiedConfigOwner: "Autorizētais īpašnieks nav konfigurēts.",
				invalidConfigOwner: "Stāsta īpašnieks nav autorizēts."
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
				facebookTooltip: "Koplietot Facebook",
				twitterTooltip: "Koplietot Twitter",
				bitlyTooltip: "Iegūt īso saiti",
				tooltipAutoplayDisabled: "ķ_This isn't available in autoplay mode____________ū",
				autoplayLabel: "ķ_Autoplay mode_____ū",
				autoplayExplain1: "ķ_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ū.",
				autoplayExplain2: "ķ_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ū."
			}
		},
		builder: {
			builder: {
				panelHeader: "STĀSTA KONFIGURĀCIJA",
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
				savingApplication: "Saglabā stāstu",
				saveSuccess: "ķ_Story saved____ū",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				saveError2: "Saglabāšana neizdevās, jo nosaukumā vai aprakstā bija nederīgs HTML tags",
				saveError3: "Virsraksts nevar būt tukšs",
				signIn: "Lūdzu, pierakstieties kontā uz",
				signInTwo: "lai saglabātu stāstu."
			},
			header:{
				editMe: "Rediģē mani !",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu"
			},
			settings: {
				settingsHeader: "Stāsta iestatījumi",
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
				settingsExtentDateLineError: "Pārklājums nevar pārsniegt 180° meridiāna garumu.",
				settingsExtentDateLineError2: "Kļūda, aprēķinot pārklājumu",
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
				settingsSaveConfirm: "Lai dažas no jūsu veiktajām izmaiņām stātos spēkā, ir nepieciešama stāsta saglabāšana un atkārtota ielādēšana"
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
				switchMaps: "Pārslēgt kartes",
				browseWebMaps: "Pārlūkot web kartes"
			},
			settingsLegend: {
				settingsTabLegend: "Lietotnes izkārtojums",
				settingsLegendExplain: "Izvēlieties izkārtojuma iestatījumus.",
				settingsLegendEnable: "Iespējot leģendu",
				settingsDescriptionEnable: "Iespējot aprakstu",
				settingsBookmarksEnable: "Iespējot sēriju Pārvilkt",
				settingsPopupDisable: "ķ_Enable pop-up_____ū",
				settingsLocationSearchEnable: "Iespējot meklētāja meklēšanu",
				settingsGeolocatorEnable: "Iespējot ģeolokatoru",
				settingsLegendHelpContent: "ķ_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ū",
				settingsSeriesHelpContent: "Pārvilkšanas sērijas ir cilņu navigācijas opcija, kas virzīs skatītāju uz noteiktu pārklājumu un attēlos virsrakstu un apraksta tekstu sānu panelī. Sākotnējās aktivizācijas laikā, web karšu grāmatzīmes tiks importētas un izmantotas, lai aizpildītu seriju joslu. Sēriju opciju atiespējošana izslēgs sēriju joslu, bet sēriju konfigurācija tiks saglabāta izmantošanai nākotnē.",
				settingsSeriesHelpContent2: "Pārvilkšanas sērijas ļauj izveidot un rediģēt izvēlētus izvietojumus ar pavadošajiem virsrakstiem un tekstiem. Ja jūsu web kartei ir grāmatzīmes, tās tiks attēlotas. Jūs varat atiespējot sērijas, bet konfigurācija tiks saglabāta izmantošanai nākotnē.",
				settingsSeriesHelpLink: "Aopskatiet aplikācijas piemēru ar pārvilkšanas sērijām šeit",
				preview: "Saskarnes priekšskatījums",
				settingsLocateButtonExplain: "Šī funkcionalitāte tiek atbalstīta uz vairuma mobilo ierīču un darbvirsmas pārlūkiem (ieskaitot Internet Explorer 9+).",
				settingsLocateButton: "Iespējot pogu Atrast izvietojumu atbalstītajās pārlūkprogrammās",
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
				initHeader: "Esiet sveicināts vilkšanas/tālskata veidotājā!",
				modalNext: "Nākošais",
				modalPrev: "Iepriekšējais",
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
					div1: "Vilkšanas/tālskata šablons ir izveidots, lai salīdzinātu divas atsevišķas web kartes vai divus slāņus saistošā, viegli izmantojamā tīmekļa lietotnē, ko var atvērt jebkurā tīmekļa pārlūkprogrammā jebkurā ierīcē, ieskaitot viedtālruņus un planšetdatorus.",
					div2: "Lai iegūtu papildinformāciju par vilkšanas/tālskata šablonu, tostarp lietotāju izveidotajiem piemēriem, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> apmeklējiet stāstu karšu tīmekļa vietni</a>. Varat mums sekot Twitter kontā <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Mēs labprāt vēlētos dzirdēt jūsu atsauksmes! Neatkarīgi no tā, vai jums ir jautājumi, vēlaties pieprasīt jaunu elementu vai uzskatāt, ka esat atradis kļūdu, lūdzu, apmeklējiet <a href='http://links.esri.com/storymaps/forum' target='_blank'>stāstu karšu lietotāju forumu</a>."
				}
			},
			share: {
				firstSaveTitle: "ķ_Story saved____ū",
				manageStory: "ķ_Manage your story______ū",
				manageStoryA1: "ķ_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ū.",
				manageStoryA1V1: "ķ_My Stories____ū",
				manageStoryA1V2: "ķ_blog posts____ū",
				shareTitle: "Koplietojiet stāstu",
				sharePrivateHeader: "Jūsu stāsts nav koplietots; vai vēlaties to koplietot?",
				sharePrivateBtn1: "Koplietot publiski",
				sharePrivateBtn2: "Koplietot organizācijā",
				sharePrivateProgress: "Koplietošana...",
				sharePrivateErr: "Neizdevās koplietot; mēģiniet vēlreiz vai",
				sharePrivateOk: "ķ_Sharing updated, loading_________ū...",
				shareStatus1: "Stāsts nav saglabāts",
				shareStatus2: "Stāsts tiek publiski koplietots",
				shareStatus3: "Stāsts tiek koplietots ar organizāciju",
				shareStatus4: "Stāsts netiek koplietots",
				sharePreviewAsUser: "Priekšskatījums",
				shareHeader1: "Jūsu stāsts ir <strong>publiski pieejams</strong>.",
				shareHeader2: "Jūsu stāstam var piekļūt jūsu organizācijas dalībnieki (nepieciešama pieteikšanās).",
				shareLinkHeader: "ķ_Share your story______ū",
				shareLinkOpen: "ATVĒRTS",
				learnMore: "Uzziniet vairāk",
				shareA1: "Izmantojiet %SHAREIMG% on <a href='%LINK1%' target='_blank'>lietotnes vienības lapu</a>. Ja vēlaties atcelt web kartes koplietošanu, izmantojiet<a href='%LINK2%' target='_blank'>web kartes vienības lapu</a>.",
				shareWarning: "%WITH% koplietošana ir atspējota, jo jūs neesat <a href='%LINK%' target='_blank'>web kartes</a> īpašnieks.",
				shareWarningWith1: "ķ_publicly___ū",
				shareWarningWith2: "ķ_publicly and with the Organization___________ū"
			},
			directCreation: {
				header: "Esiet sveicināts vilkšanas/tālskata veidotājā!",
				mapPickHeader: "Lai sāktu, lūdzu, ievadiet derīgu web kartes ID vai izmantojiet meklēšanas pogu, lai pārlūkotu web kartes.",
				launchBuilder: "Palaist veidotāju",
				chooseWebmapLbl: "Izvēlieties web karti...",
				explain2: "ķ_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ū.",
				explain3: "Ja vēlaties izmantot divas web kartes savā stāstu kartē, vēlāk pēc šīs opcijas izvēles jums tiks vaicāta otrā web karte.",
				webmapPlaceholder: "Ievadiet web kartes ID..."
			},
			saveErrorSocial: {
				title: "ķ_Social media sharing update_________ū",
				panel1: "ķ_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ū.",
				panel1tooltip: "ķ_By defining a title, summary and thumbnail image, your story will look like this_________________________ū:",
				panel2:	"ķ_Which title would you like to use on social media________________ū:",
				panel2q1: "ķ_Story title (recommended)_________ū",
				panel2q1tooltip: "ķ_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ū.",
				panel2q2: "ķ_Item title____ū",
				panel3: "ķ_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ū.",
				panel4: "ķ_Do not warn me again for this story____________ū",
				mystories: "ķ_My Stories____ū",
				btnSave: "ķ_Save__ū"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organizācija",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mans saturs",
					favoritesLabel: "Mani favorīti"
				},
				title: "ķ_Select Web Map_____ū",
				searchTitle: "Meklēt",
				ok: "Labi",
				cancel: "Atcelt",
				placeholder: "Ievadiet meklēšanas nosacījumus"
			}
		}
    })
);
